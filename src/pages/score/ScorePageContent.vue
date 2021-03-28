<template>
  <base-layout
    toolbarColor="pink"
    :statusBarColor="statusBarColor"
    pageDefaultBackLink="/game"
  >
    <div class="wrapper">
      <div class="sub-header-container ion-padding-top">
        <ion-text>
          <h1
            class="sub-header ion-text-center 
          ion-no-margin ion-padding-horizontal 
          animate__animated animate__tada"
          >
            Scoreboard
          </h1>
        </ion-text>
      </div>

      <div class="sub-content">
        <ion-grid>
          <ion-row class="ion-text-center">
            <ion-col size="12">1st. Maryam</ion-col>
            <ion-col size="12">2nd. Danieza</ion-col>
            <ion-col size="12">3rd. Sarip</ion-col>
            <ion-col size="12">4th. Amenah</ion-col>
            <ion-col size="12">5th. Solaiman</ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </div>
  </base-layout>
</template>

<script>
import { IonText, IonGrid, IonRow, IonCol } from "@ionic/vue";
import { gameControllerOutline } from "ionicons/icons";
import { Plugins } from "@capacitor/core";

const { StatusBar } = Plugins;

export default {
  name: "ScorePageContent",
  components: {
    IonText,
    IonGrid,
    IonRow,
    IonCol,
  },
  data() {
    return {
      // icons
      gameControllerOutline,
      statusBarColor: "#f3128a",
    };
  },
  created() {
    this.statusBar();
  },
  methods: {
    statusBar() {
      StatusBar.setBackgroundColor({
        color: this.statusBarColor,
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
  background: url("../../../public/assets/design/game1.png");
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
  margin: 0px 50px 0px 50px;
  font-size: 2em;
  font-family: "Exo", sans-serif;
  font-weight: bold;
}

h1 {
  font-family: "Exo", sans-serif;
  font-weight: 550;
}
</style>
