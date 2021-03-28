<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar :color="toolbarColor">
        <ion-buttons slot="start">
          <ion-back-button
            v-if="$route.fullPath != '/home'"
            :default-href="pageDefaultBackLink"
          ></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button v-if="$route.fullPath == '/game'" routerLink="/score">
            <ion-icon slot="icon-only" :icon="trophy"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title class="ion-text-center">{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :color="toolbarColor">
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
  IonBackButton,
  IonButton,
  IonIcon,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { grid, trophy } from "ionicons/icons";
import { Plugins } from "@capacitor/core";

const { StatusBar } = Plugins;

export default {
  name: "BaseLayout",
  props: [
    "pageTitle",
    "toolbarColor",
    "statusBarColor",
    "pageDefaultBackLink",
    "routerParam",
  ],
  components: {
    IonPage,
    IonToolbar,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
    IonTitle,
    IonContent,
  },
  data() {
    return {
      //   icon
      grid,
      trophy,
    };
  },
  created() {},
  mounted() {
    this.statusBar();
  },
  unmounted() {},
  methods: {
    statusBar() {
      StatusBar.setBackgroundColor({
        color: this.statusBarColor,
      });
    },
  },
  ionViewWillEnter() {},
  ionViewDidEnter() {},
  ionViewWillLeave() {},
  ionViewDidLeave() {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Exo:wght@400;500&display=swap");

ion-title {
  font-family: "Exo", sans-serif;
  font-weight: bold;
}
</style>
