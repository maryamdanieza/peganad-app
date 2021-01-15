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
} from "@ionic/vue";
import { arrowForwardOutline } from "ionicons/icons";
import {
  animalsQuery,
  colorsQuery,
  numbersQuery,
  wordsQuery,
} from "../../firestore/firebaseInit.js";
import Localbase from "localbase";
import { Plugins } from "@capacitor/core";

let localDB = new Localbase("db");
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
      // icon
      arrowForwardOutline,
    };
  },
  created() {
    this.fetchContents();
  },
  ionViewWillEnter() {
    this.statusBar();
  },
  methods: {
    fetchContents() {
      let contents = this.$store.state.contents;
      let saveContents = {};

      localDB
        .collection("contents")
        .get()
        .then((doc) => {
          if (doc.length != 0) {
            console.log("Have Contents in LocalBase!");
            this.$store.dispatch("contents", doc[0]);
          } else {
            console.log("No Contents in LocalBase!", contents);
            animalsQuery
              .get()
              .then((docsSnapshot) => {
                saveContents.animals = [];
                docsSnapshot.forEach((doc) => {
                  saveContents.animals.push(doc.data());
                });
              })
              .then(() => {
                colorsQuery
                  .get()
                  .then((docsSnapshot) => {
                    saveContents.colors = [];
                    docsSnapshot.forEach((doc) => {
                      saveContents.colors.push(doc.data());
                    });
                  })
                  .then(() => {
                    numbersQuery
                      .get()
                      .then((docsSnapshot) => {
                        saveContents.numbers = [];
                        docsSnapshot.forEach((doc) => {
                          saveContents.numbers.push(doc.data());
                        });
                      })
                      .then(() => {
                        wordsQuery
                          .get()
                          .then((docsSnapshot) => {
                            saveContents.words = [];
                            docsSnapshot.forEach((doc) => {
                              saveContents.words.push(doc.data());
                            });
                          })
                          .then(() => {
                            localDB.collection("contents").add(saveContents);
                            console.log("Success!", saveContents);
                          })
                          .catch((err) => {
                            console.log(err.message);
                          });
                      })
                      .catch((err) => {
                        console.log(err.message);
                      });
                  })
                  .catch((err) => {
                    console.log(err.message);
                  });
              })
              .catch((err) => {
                console.log(err.message);
              });
          }
        })
        .catch((err) => {
          console.log("Localbase error: ", err.message);
        });
    },
    /** UI Logic **/
    statusBar() {
      StatusBar.setBackgroundColor({
        color: "#f4f5f8",
      });
    },
  },
};
