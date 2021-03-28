import {
  IonContent,
  IonSlide,
  IonSlides,
  IonButton,
  IonIcon,
  loadingController,
  toastController,
} from "@ionic/vue";
import { downloadOutline } from "ionicons/icons";
import { firebaseDB } from "../../firestore/firebaseInit.js";
import {
  animalsQuery,
  colorsQuery,
  numbersQuery,
  wordsQuery,
} from "../../firestore/firebaseInit.js";
import Localbase from "localbase";

let localDB = new Localbase("db");
localDB.config.debug = false;

export default {
  components: {
    IonContent,
    IonSlide,
    IonSlides,
    IonButton,
    IonIcon,
  },
  emits: ["hide-slider"],
  data() {
    return {
      contents: {},
      internetStatus: false,
      // icons
      downloadOutline,
    };
  },
  created() {
    this.checkNetworkStatusChange();
  },
  methods: {
    /** UI LOGIC */
    async presentLoading() {
      const loading = await loadingController.create({
        message: "Downloading please wait...",
      });
      return loading;
    },
    async popupToast(message, color, duration, position) {
      const toast = await toastController.create({
        message: message,
        color: color,
        duration: duration,
        position: position,
      });
      return toast.present();
    },

    /** BUSINESS LOGIC **/
    async checkNetworkStatusChange() {
      let connectedRef = firebaseDB.ref(".info/connected");
      connectedRef.on("value", (snap) => {
        if (!snap.val()) {
          this.internetStatus = true;
          console.log("connection: ", snap.val());
          this.checkLocalContent();
        } else {
          this.internetStatus = false;
          console.log("connection: ", snap.val());
        }
      });
    },
    async checkLocalContent() {
      const db = await localDB.collection("contents").get();
      if (db.length != 0) {
        console.log("HAVE DB!");
        this.internetStatus = false;
        this.$emit("hide-slider", false);
      } else {
        localDB
          .collection("contents")
          .delete()
          .then(() => {
            console.log("DOWNLOAD ABORTED!");
            this.internetStatus = true;
            this.$emit("hide-slider", true);
          });
      }
    },
    async downloadContent() {
      let arrContent = {};
      await this.presentLoading().then(async (loading) => {
        await loading.present();
        arrContent.animals = [];
        const docs = await animalsQuery.get();
        docs.forEach((doc) => {
          arrContent.animals.push(doc.data());
        });
        await this.updateContent(arrContent.animals, "animals").then(
          async () => {
            arrContent.colors = [];
            const docs = await colorsQuery.get();
            docs.forEach((doc) => {
              arrContent.colors.push(doc.data());
            });
            await this.updateContent(arrContent.colors, "colors").then(
              async () => {
                arrContent.numbers = [];
                const docs = await numbersQuery.get();
                docs.forEach((doc) => {
                  arrContent.numbers.push(doc.data());
                });
                await this.updateContent(arrContent.numbers, "numbers").then(
                  async () => {
                    arrContent.words = [];
                    const docs = await wordsQuery.get();
                    docs.forEach((doc) => {
                      arrContent.words.push(doc.data());
                    });
                    await this.updateContent(arrContent.words, "words").then(
                      async () => {
                        await loading.dismiss().then(() => {
                          this.$emit("hide-slider", false);
                        });
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    },

    async updateContent(docData, docName) {
      let arrContent = docData;
      let response = [];
      arrContent.forEach(async (doc) => {
        if (doc.img) {
          await this.getBase64FromUrl(doc.img)
            .then(async (result) => {
              response.push(result);
              let contentIndex = arrContent.findIndex(
                (content) => content.img === doc.img
              );
              arrContent[contentIndex].img = result;
              if (response.length === arrContent.length) {
                response = [];
                if (doc.audio) {
                  arrContent.forEach(async (doc) => {
                    await this.getBase64FromUrl(doc.audio)
                      .then(async (result) => {
                        response.push(result);
                        let contentIndex = arrContent.findIndex(
                          (content) => content.audio === doc.audio
                        );
                        arrContent[contentIndex].audio = result;
                        if (response.length === arrContent.length) {
                          await this.storeDataToLocalDB(arrContent, docName);
                        }
                      })
                      .catch((err) => console.error(err));
                  });
                } else {
                  await this.storeDataToLocalDB(arrContent, docName);
                }
              }
            })
            .catch((err) => console.error(err));
        }
      });
    },

    async storeDataToLocalDB(docData, docName) {
      console.log(docData, docName);
      await localDB.collection("contents").add({ [docName]: docData }, docName);
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
