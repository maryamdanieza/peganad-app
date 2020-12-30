<template>
  <base-layout
    pageTitle="Meranaw Learning App"
    toolbarColor=""
  >
    <div class="card-container">
      <div class="card-wrapper">
        <ion-card
          v-for="card in cards"
          :key="card.link"
          :class="card.class"
          :color="card.color"
          button="true"
          :routerLink="card.link"
        >
          <ion-card-header>
            <ion-card-title>{{ card.title }}</ion-card-title>
            <ion-card-subtitle class="ion-text-uppercase">{{
              card.subtitle
            }}</ion-card-subtitle>
          </ion-card-header>
        </ion-card>
      </div>
    </div>
  </base-layout>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/vue";

export default {
  name: "HomePage",
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
  },
  data() {
    return {
      cards: [
        {
          class: "learn",
          color: "danger",
          link: "/learn",
          title: "Learn",
          subtitle: "Learn some words!",
        },
        {
          class: "game",
          color: "orange",
          link: "/game",
          title: "Game",
          subtitle: "Play some Games!",
        },
      ],
    };
  },
};
</script>

<style scoped>
ion-card-title {
  font-size: 3em;
}

ion-card-header {
  height: 150px;
}

.card-container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-wrapper {
  width: 100%;
}

.learn {
  background-image: url("../../public/assets/design/learning.svg");
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: right;
}

.game {
  background-image: url("../../public/assets/design/gaming.svg");
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: right;
}
</style>
