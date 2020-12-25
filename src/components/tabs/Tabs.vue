<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Home" href="/tabs/home">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Leaderboard" href="/tabs/leaderboard">
          <ion-icon :icon="trophy" />
          <ion-label>Leaderboard</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Profile" href="/tabs/profile">
          <ion-icon :icon="person" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/vue";
import { trophy, person, home } from "ionicons/icons";

export default {
  name: "Tabs",
  components: { IonPage, IonTabs, IonLabel, IonTabBar, IonIcon, IonTabButton },
  data() {
    return {
      trophy,
      person,
      home,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap");

ion-label {
  font-family: "Lato", sans-serif;
}
</style>
