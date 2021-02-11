import {
  animalsQuery,
  colorsQuery,
  numbersQuery,
  wordsQuery,
} from "../firestore/firebaseInit.js";
import { loadingController } from "@ionic/vue";
import Localbase from "localbase";

let localDB = new Localbase("db");
localDB.config.debug = false;

let service = {
  async presentLoading() {
    const loading = await loadingController.create({
      message: "Downloading please wait...",
    });
    return loading;
  },

  async downloadContent() {
    let arrContent = {};

    const loading = await this.presentLoading();
    loading.present();

    animalsQuery
      .get()
      .then((docs) => {
        arrContent.animals = [];
        docs.forEach((doc) => {
          arrContent.animals.push(doc.data());
        });
        this.updateContent(arrContent.animals, "animals");

        return colorsQuery.get().then((docs) => {
          arrContent.colors = [];
          docs.forEach((doc) => {
            arrContent.colors.push(doc.data());
          });
          this.updateContent(arrContent.colors, "colors");

          return numbersQuery.get().then((docs) => {
            arrContent.numbers = [];
            docs.forEach((doc) => {
              arrContent.numbers.push(doc.data());
            });
            this.updateContent(arrContent.numbers, "numbers");

            return wordsQuery.get().then((docs) => {
              arrContent.words = [];
              docs.forEach((doc) => {
                arrContent.words.push(doc.data());
              });
              this.updateContent(arrContent.words, "words");
              loading.dismiss();
            });
          });
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  },

  updateContent(docData, docName) {
    let arrContent = docData;
    let response = [];
    arrContent.forEach((doc) => {
      if (doc.img) {
        this.getBase64FromUrl(doc.img)
          .then((result) => {
            response.push(result);
            let contentIndex = arrContent.findIndex(
              (content) => content.img === doc.img
            );
            arrContent[contentIndex].img = result;
            if (response.length === arrContent.length) {
              response = [];
              if (doc.audio) {
                arrContent.forEach((doc) => {
                  this.getBase64FromUrl(doc.audio)
                    .then((result) => {
                      response.push(result);
                      let contentIndex = arrContent.findIndex(
                        (content) => content.audio === doc.audio
                      );
                      arrContent[contentIndex].audio = result;
                      if (response.length === arrContent.length) {
                        this.storeDataToLocalDB(arrContent, docName);
                      }
                    })
                    .catch((err) => console.error(err));
                });
              } else {
                this.storeDataToLocalDB(arrContent, docName);
              }
            }
          })
          .catch((err) => console.error(err));
      }
    });
  },

  storeDataToLocalDB(docData, docName) {
    console.log(docData, docName);
    localDB.collection("contents").add({ [docName]: docData }, docName);
  },

  async getBase64FromUrl(imageUrl) {
    var res = await fetch(imageUrl);
    var blob = await res.blob();

    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.addEventListener(
        "load",
        function() {
          var base64data = reader.result.substr(reader.result.indexOf(",") + 1);
          resolve(base64data);
        },
        false
      );

      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    });
  },
};

export default service;
