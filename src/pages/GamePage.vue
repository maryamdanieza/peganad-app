<template>
  <base-layout
    toolbarColor="orange"
    statusBarColor="#faa329"
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
            Choose Game
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
                  <div class="ion-text-center">
                    <ion-button
                      color="success"
                      size="small"
                      fill="solid"
                      @click.prevent.stop="downloadContent(card.title)"
                      >New Data!</ion-button
                    >
                  </div>
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
  IonButton,
} from "@ionic/vue";
import { gameControllerOutline } from "ionicons/icons";
import { Plugins } from "@capacitor/core";

const { StatusBar } = Plugins;

const cards = [
  {
    title: "Animals",
    img: "animals.png",
    link: "/game/animals",
  },
  {
    title: "Colors",
    img: "colors.png",
    link: "/game/colors",
  },
  {
    title: "Numbers",
    img: "numbers.png",
    link: "/game/numbers",
  },
  {
    title: "Words",
    img: "words.png",
    link: "/game/words",
  },
];

export default {
  name: "GamePage",
  components: {
    IonText,
    IonCard,
    // IonCardHeader,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
  },
  data() {
    return {
      cards: cards,
      // icons
      gameControllerOutline,
    };
  },
  ionViewWillEnter() {
    this.statusBar();
  },
  methods: {
    async statusBar() {
      const statusBar = await StatusBar.setBackgroundColor({
        color: "#faa329",
      });
      return statusBar;
    },
    downloadContent(title) {
      console.log("Notify", title.toLowerCase());
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
  background: url("../../public/assets/design/game1.png");
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
