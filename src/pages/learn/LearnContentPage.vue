<template>
  <base-layout
    :pageTitle="`Learn ${routerParam}`"
    toolbarColor=""
    pageDefaultBackLink="/learn"
  >
    <ion-card
      class="ion-margin"
      v-for="card in cards[routerParam]"
      :key="card.id"
      :color="card.color"
    >
      <ion-card-content>
        <ion-card-header class="ion-no-padding">
          <ion-card-title class="ion-text-center ion-text-uppercase">
            {{ card.name }}
          </ion-card-title>
        </ion-card-header>
        <div class="img-content">
          <img :src="require(`../../../public/assets/${card.img}`)" />
        </div>
        <ion-card-header class="ion-no-padding ion-padding-top ion-text-center">
          <ion-card-subtitle> `{{ card.translatedName }}` </ion-card-subtitle>
          <ion-button
            color="light"
            shape="round"
            expand="full"
            size="large"
            @click="test()"
          >
            <ion-icon :icon="mic"></ion-icon>
          </ion-button>
        </ion-card-header>
      </ion-card-content>
    </ion-card>
  </base-layout>
</template>

<script>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonIcon,
  IonButton,
} from "@ionic/vue";
import { mic } from "ionicons/icons";

const cards = {
  words: [{ id: "1", color: "secondary", name: "Words", img: "graduate.svg" }],
  animals: [
    {
      id: "1",
      color: "danger",
      name: "Cat",
      translatedName: "B'dung",
      img: "cat.png",
    },
    {
      id: "2",
      color: "secondary",
      name: "Chicken",
      translatedName: "Manok",
      img: "chicken.png",
    },
    {
      id: "3",
      color: "orange",
      name: "Fish",
      translatedName: "S'da",
      img: "game.svg",
    },
    {
      id: "4",
      color: "violet",
      name: "Cow",
      translatedName: "Sap'e",
      img: "learning.svg",
    },
    {
      id: "5",
      color: "success",
      name: "Bird",
      translatedName: "Papanok",
      img: "learning.svg",
    },
  ],
  colors: [{ id: "1", color: "success", name: "Colors", img: "gaming.svg" }],
  numbers: [{ id: "1", color: "orange", name: "Numbers", img: "game.svg" }],
};

export default {
  name: "LearnContentPage",
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonIcon,
    IonButton,
  },
  data() {
    return {
      cards: cards,
      routerParam: "",
      // icon
      mic,
    };
  },
  created() {
    this.routerParam = this.$route.params.id;
  },
  methods: {
    test() {
      console.log("hello");
    },
  },
};
</script>

<style scoped>
ion-card {
  border-radius: 20px 20px 20px 20px;
  max-height: 70%;
}

ion-card-title {
  font-size: 3em;
}

ion-card-subtitle {
  font-size: 2em
}

.img-content {
  display: flex;
  justify-content: center;
}

img {
  width: 70%;
}
</style>
