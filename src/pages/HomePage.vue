<template>
  <base-layout>
    <div class="wrapper ion-padding">
      <ion-text color="medium">
        <h1
          class="sub-header ion-no-margin ion-padding-horizontal 
          animate__animated animate__bounceInDown"
        >
          Meranaw Learnign App
        </h1>
      </ion-text>
      <div class="sub-content ion-padding-top">
        <div>
          <ion-card
            v-for="(card, index) in cards"
            :key="index"
            :class="`animate__animated ${card.animateCard}`"
            :color="card.color"
            button="true"
            :routerLink="card.route"
          >
            <ion-grid>
              <ion-row>
                <ion-col size="8">
                  <ion-card-header
                    class="card-header ion-no-padding ion-padding-start"
                  >
                    <ion-card-title>{{ card.title }}</ion-card-title>
                    <ion-card-subtitle>{{ card.subtitle }}</ion-card-subtitle>
                  </ion-card-header>
                  <img
                    :src="require(`../../public/assets/design/${card.img}`)"
                    width="180"
                  />
                </ion-col>
                <ion-col class="second-column">
                  <ion-button shape="round" :routerLink="card.route">
                    <ion-icon
                      :class="
                        `animate__animated animate__headShake animate__slow animate__infinite ${card.animateArrow}`
                      "
                      slot="icon-only"
                      :icon="arrowForwardOutline"
                    ></ion-icon>
                  </ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card>
        </div>
      </div>
    </div>
  </base-layout>
</template>

<script>
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
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Exo:wght@400;500&display=swap");

ion-card {
  height: 260px;
  width: 85vw;
  margin-bottom: 30px;
}
ion-card-header {
  font-family: "Exo", sans-serif;
  font-weight: 500;
}
ion-card-title {
  color: rgb(116, 116, 116);
  font-size: 2.5em;
}
ion-card-subtitle {
  color: rgb(143, 143, 143);
  font-size: 1.5em;
}
ion-button {
  --background: white;
  --color: rgb(70, 69, 69);
  --background-activated: rgb(236, 236, 236);
}

.wrapper {
  display: flex;
  flex-flow: column;
  height: 100%;
}
.sub-header {
  height: 100px;
  display: flex;
  align-items: center;
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
.second-column {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
