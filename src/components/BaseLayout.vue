<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar :color="toolbarColor">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
          <ion-button>
            <ion-icon slot="icon-only" :icon="grid"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonToolbar,
  IonHeader,
  IonButtons,
  IonButton,
  IonBackButton,
  IonIcon,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { grid } from "ionicons/icons";

export default {
  name: "BaseLayout",
  props: ["pageTitle", "toolbarColor", "pageDefaultBackLink"],
  components: {
    IonPage,
    IonToolbar,
    IonHeader,
    IonButtons,
    IonButton,
    IonBackButton,
    IonIcon,
    IonTitle,
    IonContent,
  },
  data() {
    return {
      //   icon
      grid,
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  ionViewWillEnter() {
    console.log("ionViewWillEnter");
  },
  ionViewDidEnter() {
    console.log("ionViewDidEnter");
  },
  ionViewWillLeave() {
    console.log("ionViewWillLeave");
  },
  ionViewDidLeave() {
    console.log("ionViewDidLeave");
  },
};
</script>

<style scoped>
</style>
