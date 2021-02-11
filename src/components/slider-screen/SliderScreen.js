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
import service from "../../util/service.js";
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
    downloadContent() {
      service
        .downloadContent()
        .then(() => {
          this.$emit("hide-slider", false);
        })
        .catch((err) => console.log(err));
    },
  },
};
