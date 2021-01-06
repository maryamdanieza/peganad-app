<template>
  <base-layout toolbarColor="danger">
    <div class="wrapper">
      <ion-text>
        <h1
          class="sub-header ion-text-center ion-no-margin ion-padding-horizontal"
        >
          Ready to Learn?
        </h1>
      </ion-text>
      <div class="sub-content">
        <ion-grid>
          <ion-row>
            <ion-col
              v-for="(card, index) in cards"
              :key="index"
              class="ion-no-padding"
              size="6"
            >
              <ion-card button="true">
                <ion-card-header class="ion-no-padding">
                  <ion-button
                    class="ion-float-end"
                    color="danger"
                    size="large"
                    fill="clear"
                  >
                    <ion-icon slot="icon-only" :icon="schoolOutline"></ion-icon>
                  </ion-button>
                </ion-card-header>

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
  IonCardHeader,
  // IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { schoolOutline } from "ionicons/icons";

const cards = [
  {
    title: "Animals",
    img: "animals.png",
  },
  {
    title: "Colors",
    img: "colors.png",
  },
  {
    title: "Numbers",
    img: "numbers.png",
  },
  {
    title: "Words",
    img: "words.png",
  },
];

export default {
  name: "LearnPage",
  components: {
    IonText,
    IonCard,
    IonCardHeader,
    // IonCardTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
  },
  data() {
    return {
      cards: cards,
      // icons
      schoolOutline,
    };
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
.sub-header {
  height: 120px;
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
