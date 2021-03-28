<template>
  <base-layout
    toolbarColor="danger"
    statusBarColor="#eb445a"
    pageDefaultBackLink="/"
  >
    <div class="wrapper">
      <div class="sub-header-container ion-padding-top">
        <ion-text>
          <h1
            class="sub-header ion-text-center 
          ion-no-margin ion-padding-horizontal 
          animate__animated animate__tada"
          >
            Ready To Learn?
          </h1>
        </ion-text>
      </div>
      <div class="sub-content">
        <ion-grid>
          <ion-row>
            <ion-col
              v-for="(card, index) in cards"
              :key="index"
              class="ion-no-padding"
              size="6"
            >
              <ion-card
                class="animate__animated animate__pulse"
                button="true"
                :routerLink="card.link"
              >
                <ion-card-content>
                  <img
                    :src="require(`../../public/assets/design/${card.img}`)"
                  />

                  <ion-text>
                    <h1 class="ion-padding-top ion-text-center">
                      {{ card.title }}
                    </h1>
                  </ion-text>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </div>
  </base-layout>
</template>

<script>
import {
  IonText,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { bookOutline } from "ionicons/icons";
import { Plugins } from "@capacitor/core";

const { StatusBar } = Plugins;

const cards = [
  {
    title: "Animals",
    img: "animals.png",
    link: "/learn/animals",
  },
  {
    title: "Colors",
    img: "colors.png",
    link: "/learn/colors",
  },
  {
    title: "Numbers",
    img: "numbers.png",
    link: "/learn/numbers",
  },
  {
    title: "Words",
    img: "words.png",
    link: "/learn/words",
  },
];

export default {
  name: "LearnPage",
  components: {
    IonText,
    IonCard,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
  },
  data() {
    return {
      cards: cards,
      // icons
      bookOutline,
    };
  },
  methods: {
    /** UI Logic **/
    statusBar() {
      StatusBar.setBackgroundColor({
        color: "#eb445a",
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Exo:wght@400;500&display=swap");

ion-grid {
  --ion-grid-padding: 10px;
  --ion-grid-width-xs: 100px;
}

.wrapper {
  display: flex;
  flex-flow: column;
  height: 100%;
}
.sub-header-container {
  background: url("../../public/assets/design/study1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 250px;
}
.sub-header {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  font-family: "Exo", sans-serif;
  font-weight: bold;
}
.sub-content {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  font-family: "Exo", sans-serif;
  font-weight: 550;
}
</style>
