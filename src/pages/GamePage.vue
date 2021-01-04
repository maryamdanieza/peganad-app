<template>
  <base-layout pageTitle="Game" toolbarColor="orange" pageDefaultBackLink="/">
    <ion-grid class="game-header">
      <ion-row>
        <ion-col size="12">
          <img class="img-header" src="../../public/assets/design/game.png" />
        </ion-col>
      </ion-row>
    </ion-grid>
    <ion-grid class="game-content">
      <ion-row>
        <ion-col size="12">
          <ion-text color="orange">
            <h4 class="ion-text-center">Games for you</h4>
          </ion-text>
        </ion-col>
        <ion-col class="ion-no-padding" size="12">
          <ion-slides pager="true" :options="slideOpts">
            <ion-slide v-for="(card, index) in cards" :key="index">
              <ion-card :color="card.color" routerLink="/">
                <ion-card-header class="ion-padding-top">
                  <ion-card-title
                    ><h2>{{ card.title }}</h2></ion-card-title
                  >
                </ion-card-header>
                <img
                  class="img-slides"
                  :src="require(`../../public/assets/design/${card.img}`)"
                />
              </ion-card>
            </ion-slide>
          </ion-slides>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script>
import {
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonSlides,
  IonSlide,
  IonCard,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/vue";

const cards = [
  {
    color: "secondary",
    title: "Words",
    img: "words.png",
  },
  {
    color: "success",
    title: "Animals",
    img: "animals.png",
  },
  {
    color: "danger",
    title: "Colors",
    img: "colors.png",
  },
  {
    color: "violet",
    title: "Numbers",
    img: "numbers.png",
  },
];

export default {
  name: "LearnPage",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonSlides,
    IonSlide,
    IonCard,
    IonCardHeader,
    IonCardTitle,
  },

  data() {
    return {
      cards: cards,
      slideOpts: {
        slidesPerView: 2,
        speed: 400,
      },
    };
  },
};
</script>

<style scoped>
ion-grid.game-header {
  background: #faa329;
  border-radius: 0px 0px 30px 30px;
  display: flex;
  justify-content: center;
}

ion-slides {
  --bullet-background: black;
  --bullet-background-active: #faa329;
}

ion-card {
  border-radius: 20px 20px 20px 20px;
  height: 330px;
}

.img-header {
  height: 300px;
}

.img-slides {
  height: 200px;
}
</style>
