<template>
  <ion-card class="learn" button="true" color="primary">
    <ion-card-header>
      <ion-card-title class="card-title">Ready to learn?</ion-card-title>
      <ion-card-subtitle>LEARN SOME WORDS!</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      Keep close to Nature's heart... and break clear away, once in awhile, and
      climb a mountain or spend a week in the woods. Wash your spirit clean.
    </ion-card-content>
  </ion-card>

  <ion-card class="game" button="true" color="primary">
    <ion-card-header>
      <ion-card-title>Practice</ion-card-title>
      <ion-card-subtitle>PLAY SOME GAMES!</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      Keep close to Nature's heart... and break clear away, once in awhile, and
      climb a mountain or spend a week in the woods. Wash your spirit clean.
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/vue";

export default defineComponent({
  name: "Card",
  components: {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Langar&display=swap");
ion-card {
  height: 50%;
}
ion-card-title {
  font-family: "Langar", cursive;
  font-size: 3em;
}
</style>
