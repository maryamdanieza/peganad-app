<template>
  <ion-card
    class="ion-margin-bottom"
    v-for="content in contents[routerParam]"
    :key="content.id"
  >
    <ion-card-content>
      <ion-card-header class="ion-no-padding">
        <ion-card-title
          :color="color"
          class="ion-text-center ion-text-uppercase"
        >
          {{ content.name }}
        </ion-card-title>
      </ion-card-header>
      <div class="img-content">
        <img
          :src="
            require(`../../../public/assets/card-content/${routerParam}/${content.img}`)
          "
        />
      </div>
      <ion-card-header class="ion-no-padding ion-padding-top ion-text-center">
        <ion-card-subtitle> `{{ content.translatedName }}` </ion-card-subtitle>
        <ion-button
          :color="color"
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

export default {
  props: ["contents", "routerParam", "color"],
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
      // icon
      mic,
    };
  },
  methods: {
    test() {
      console.log("hello");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Exo:wght@400;500&display=swap");

ion-card-title {
  font-size: 3em;
  font-family: "Exo", sans-serif;
  font-weight: bold;
}
ion-card-subtitle {
  font-size: 2em;
  font-family: "Exo", sans-serif;
  font-weight: lighter;
}

.img-content {
  display: flex;
  justify-content: center;
}
img {
  width: 70%;
}
</style>
