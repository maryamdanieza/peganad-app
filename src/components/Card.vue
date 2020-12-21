<template>
  <div class="card-main">
    <ion-card
      class="learn"
      button="true"
      color="primary"
      href="/game"
      router-direction="forward"
    >
      <ion-card-header>
        <ion-card-title class="card-title">Learn</ion-card-title>
        <ion-card-subtitle>LEARN SOME WORDS!</ion-card-subtitle>
      </ion-card-header>
    </ion-card>

    <ion-card class="game" button="true" color="primary">
      <ion-card-header>
        <ion-card-title>Games</ion-card-title>
        <ion-card-subtitle>PLAY SOME GAMES!</ion-card-subtitle>
      </ion-card-header>
    </ion-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  // IonNav
} from "@ionic/vue";

export default defineComponent({
  name: "Card",
  components: {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    // IonNav
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Langar&display=swap");
ion-card-title {
  font-family: "Langar", cursive;
  font-size: 3em;
}

ion-card-header {
  height: 150px;
}

.card-main {
  width: 100%;
}

.learn {
  background-image: url(../../public/assets/learning.svg);
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: right;
}

.game {
  background-image: url(../../public/assets/gaming.svg);
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: right;
}
</style>
