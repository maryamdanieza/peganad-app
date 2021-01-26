import {
  IonText,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  alertController,
  loadingController,
  toastController,
} from "@ionic/vue";
import { arrowForwardOutline } from "ionicons/icons";
import { Plugins } from "@capacitor/core";
import {
  animalsQuery,
  colorsQuery,
  numbersQuery,
  wordsQuery,
} from "../../firestore/firebaseInit.js";
import Localbase from "localbase";

let localDB = new Localbase("db");
localDB.config.debug = false;

const { StatusBar } = Plugins;

const cards = [
  {
    title: "Learn",
    subtitle: "Card Subtitle",
    color: "danger",
    img: "study.png",
    route: "/learn",
    animateCard: "animate__bounceInLeft",
    animateArrow: "animate__delay-1s",
  },
  {
    title: "Game",
    subtitle: "Card Subtitle",
    color: "orange",
    img: "game.png",
    route: "/game",
    animateCard: "animate__bounceInRight",
    animateArrow: "animate__delay-2s",
  },
];

export default {
  name: "HomePage",
  components: {
    IonText,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
  },
  data() {
    return {
      cards: cards,
      contents: {},
      // icon
      arrowForwardOutline,
    };
  },
  created() {
    this.statusBar();
    this.checkContent();
  },
  methods: {
    /** UI Logic **/
    statusBar() {
      StatusBar.setBackgroundColor({
        color: "#f4f5f8",
      });
    },

    async presentDownloadConfirm() {
      const alert = await alertController.create({
        cssClass: "alert-custom-class",
        header: "DOWNLOAD CONTENT",
        message:
          "Dear User, Please download the content for best User Experience and Offline Usage of the app. Thank You.",
        buttons: [
          {
            text: "Download Here",
            handler: () => {
              console.log("Downloading...");
              this.presentLoading();
            },
          },
        ],
      });
      return alert.present();
    },

    async presentLoading() {
      const loading = await loadingController.create({
        message: "Downloading please wait...",
      });
      await loading.present();
      this.downloadContent(loading);
    },

    async successToast() {
      const toast = await toastController.create({
        message: "Contents Successfully Downloaded.",
        color: "success",
        duration: 2000,
      });
      return toast.present();
    },

    /** BUSINESS LOGIC **/
    checkContent() {
      var now = new Date().getTime();
      animalsQuery
        .orderBy("timestamp")
        .startAt(now)
        .limitToLast(1)
        .onSnapshot(function(querySnapshot) {
          this.contents.animals = [];
          querySnapshot.forEach(function(doc) {
            console.log("snapshot added ", doc.data());
            this.contents.animals.unshift(doc.data());
            console.log("HELLO!");
          });
        });
      this.newContentFromDB();
    },

    newContentFromDB() {},

    downloadContent(loading) {
      let arrContent = {};
      animalsQuery
        .get()
        .then((docs) => {
          arrContent.animals = [];
          docs.forEach((doc) => {
            arrContent.animals.push(doc.data());
          });
          this.updateContent(arrContent.animals, "animals");
        })
        .then(() => {
          colorsQuery
            .get()
            .then((docs) => {
              arrContent.colors = [];
              docs.forEach((doc) => {
                arrContent.colors.push(doc.data());
              });
              this.updateContent(arrContent.colors, "colors");
            })
            .then(() => {
              numbersQuery
                .get()
                .then((docs) => {
                  arrContent.numbers = [];
                  docs.forEach((doc) => {
                    arrContent.numbers.push(doc.data());
                  });
                  this.updateContent(arrContent.numbers, "numbers");
                })
                .then(() => {
                  wordsQuery
                    .get()
                    .then((docs) => {
                      arrContent.words = [];
                      docs.forEach((doc) => {
                        arrContent.words.push(doc.data());
                      });
                      this.updateContent(arrContent.words, "words");
                    })
                    .finally(() => {
                      loading.dismiss().then(() => this.successToast());
                    });
                });
            });
        })
        .catch((err) => {
          console.log("err.message :>> ", err.message);
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
      localDB
        .collection("contents")
        .add({ [docName]: docData }, docName)
        .then(() => {});
      this.$store.dispatch("contents", { [docName]: docData });
    },

    async getBase64FromUrl(imageUrl) {
      var res = await fetch(imageUrl);
      var blob = await res.blob();

      return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.addEventListener(
          "load",
          function() {
            var base64data = reader.result.substr(
              reader.result.indexOf(",") + 1
            );
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
  },
};
