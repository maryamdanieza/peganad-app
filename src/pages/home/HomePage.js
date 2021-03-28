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
  // colorsQuery,
  // numbersQuery,
  // wordsQuery,
  firebaseDB,
} from "../../firestore/firebaseInit.js";
import Localbase from "localbase";
import SliderScreen from "../../components/slider-screen/SliderScreen.vue";

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
    SliderScreen,
  },
  data() {
    return {
      cards: cards,
      contents: {},
      showSlider: false,
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

    async hideSlider(value) {
      this.showSlider = await value;
    },

    /** BUSINESS LOGIC **/
    async checkContent() {
      let db = await localDB.collection("contents").get();
      if (db.length == 0) {
        this.showSlider = true;
      } else {
        console.log("HAVE DB!");
        let connectedRef = firebaseDB.ref(".info/connected");
        connectedRef.on("value", (snap) => {
          if (!snap.val()) {
            // If Online
            this.internetStatus = true;
            console.log("connection: ", snap.val());
            this.checkNewContentOnline();
          }
        });
        this.showSlider = false;
      }
    },
    checkNewContentOnline() {
      let checkDatabase = async (dbName) => {
        const db = await localDB
          .collection("contents")
          .doc(dbName)
          .get();
        return db;
      };
      
      animalsQuery.onSnapshot((snapshot) => {
        checkDatabase("animals").then((doc) => {
          if (snapshot.docs.length != doc["animals"].length) {
            console.log("NEW DATA ARRIVED");
          } else {
            console.log("NO NEW DATA!");
          }
        });
      });
    },
  },
};
