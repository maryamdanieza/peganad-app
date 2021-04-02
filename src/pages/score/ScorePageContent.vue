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
            Game Best Scores
          </h1>
        </ion-text>
      </div>

      <div class="sub-content">
        <ion-grid>
          <ion-row class="ion-justify-content-center ion-align-items-center">
            <template v-for="(game, index) in gamesBestScore" :key="index">
              <ion-col class="ion-no-padding" size="12">
                <ion-card>
                  <ion-card-content>
                    <ion-row
                      class="ion-justify-content-between ion-align-items-center"
                    >
                      <ion-col size="3">
                        <div>
                          <img
                            :src="
                              require(`../../../public/assets/design/${game.img}`)
                            "
                          />
                        </div>
                      </ion-col>
                      <ion-col class="game-name ion-text-center" size="7">{{
                        game.name
                      }}</ion-col>
                      <ion-col class="game-score ion-text-end" size="2"
                        ><span>{{ game.score }}</span></ion-col
                      >
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
import { gameControllerOutline, trophy } from "ionicons/icons";
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
      gamesBestScore: [
        {
          name: "Animals Best Score",
          score: "1000",
          time: "7 Seconds",
          img: "animals.png",
        },
        {
          name: "Colors Best Score",
          score: "800",
          time: "9 seconds",
          img: "colors.png",
        },
        {
          name: "Numbers Best Score",
          score: "800",
          time: "9 seconds",
          img: "numbers.png",
        },
        {
          name: "Words Best Score",
          score: "800",
          time: "9 seconds",
          img: "words.png",
        },
      ],
      // icons
      gameControllerOutline,
      trophy,
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

.game-name {
  font-size: 15px;
  font-family: "Exo", sans-serif;
}

.game-score {
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
