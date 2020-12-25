<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar :color="toolbarColor">
        <ion-buttons slot="start">
          <ion-button
            v-if="$route.fullPath != '/game' && $route.fullPath != '/learn'"
          >
            <ion-icon slot="icon-only" :icon="grid"></ion-icon>
          </ion-button>
          <ion-back-button
            v-else
            :default-href="pageDefaultBackLink"
          ></ion-back-button>
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
};
</script>

<style scoped>

</style>
