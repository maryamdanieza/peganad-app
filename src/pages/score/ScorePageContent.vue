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
          <ion-row class="ion-justify-content-center ion-align-items-center">
            <template v-for="(player, index) in topFivePlayer" :key="index">
              <ion-col size="2">{{ player.place }}</ion-col>
              <ion-col class="ion-no-padding" size="10">
                <ion-card>
                  <ion-card-content>
                    <ion-row
                      class="ion-justify-content-between ion-align-items-center"
                    >
                      <ion-col class="player-name" size="9">{{
                        player.name
                      }}</ion-col>
                      <ion-col class="player-score ion-text-end" size="3">{{
                        player.score
                      }}</ion-col>
                    </ion-row>
                  </ion-card-content>
                </ion-card>
              </ion-col>
            </template>
          </ion-row>
        </ion-grid>
      </div>
    </div>
  </base-layout>
</template>

<script>
import {
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
} from "@ionic/vue";
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
    IonCard,
    IonCardContent,
  },
  data() {
    return {
      topFivePlayer: [
        {
          name: "Maryam Daniez",
          score: "1000",
          time: "7 Seconds",
          place: "1st",
        },
        {
          name: "Amenah Solaiman",
          score: "800",
          time: "9 seconds",
          place: "2nd",
        },
        {
          name: "Amenah Solaiman",
          score: "800",
          time: "9 seconds",
          place: "2nd",
        },
        {
          name: "Amenah Solaiman",
          score: "800",
          time: "9 seconds",
          place: "2nd",
        },
        {
          name: "Amenah Solaiman",
          score: "800",
          time: "9 seconds",
          place: "2nd",
        },
      ],
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

.player-name {
  font-size: 15px;
  font-family: "Exo", sans-serif;
}

.player-score {
  font-size: 15px;
  font-family: "Exo", sans-serif;
  color: rgb(10, 170, 10);
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
  margin: 0px 10px 0px 10px;
  font-size: 20px;
  font-family: "Exo", sans-serif;
  font-weight: bold;
}

h1 {
  font-family: "Exo", sans-serif;
  font-weight: 550;
}
</style>
