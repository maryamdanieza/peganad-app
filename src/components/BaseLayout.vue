<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar :color="toolbarColor">
        <ion-buttons slot="start">
          <ion-back-button v-if="$route.fullPath != '/home'"></ion-back-button>
          <!-- <ion-avatar class="ion-margin-start" v-else>
            <img src="../../public/assets/design/sarimanok.png"  />
          </ion-avatar> -->
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon
              slot="icon-only"
              :icon="informationCircleOutline"
            ></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
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
  // IonAvatar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { grid, informationCircleOutline } from "ionicons/icons";
import { Plugins } from "@capacitor/core";

const { StatusBar } = Plugins;

export default {
  name: "BaseLayout",
  props: ["pageTitle", "toolbarColor", "pageDefaultBackLink"],
  components: {
    IonPage,
    IonToolbar,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
    // IonAvatar,
    IonTitle,
    IonContent,
  },
  data() {
    return {
      //   icon
      grid,
      informationCircleOutline,
    };
  },
  created() {
    console.log("created");
    this.statusBar();
  },
  mounted() {
    console.log("mounted");
  },
  unmounted() {
    console.log("destroyed");
    this.statusBar();
  },
  methods: {
    statusBar() {
      StatusBar.setBackgroundColor({
        color: this.toolbarColor,
      });
    },
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

<style scoped></style>
