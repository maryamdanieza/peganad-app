<template>
  <ion-header class="ion-no-border">
    <ion-toolbar>
      <!-- Home, Leaderboard, Profile -->
      <ion-buttons v-if="route.fullPath != '/game'" slot="start">
        <ion-button>
          <ion-icon slot="icon-only" :icon="grid"></ion-icon>
        </ion-button>
      </ion-buttons>
      <!-- Game -->
      <ion-buttons v-else slot="start">
        <ion-back-button default-href="/"></ion-back-button>
      </ion-buttons>
      <!-- Learn -->
      <ion-title>Meranaw Learning App</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonBackButton,
  IonIcon,
} from "@ionic/vue";
import { grid } from "ionicons/icons";

export default defineComponent({
  name: "Header",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonBackButton,
    IonIcon,
  },
  setup() {
    const route = useRoute();
    const mounted = onMounted(() => {
      console.log(`Component is mounted!`, route.fullPath);
    });
    return {
      // vue lifecyle hooks
      mounted,
      // vue-router
      route,
      // icons
      grid,
      
    };
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courgette&display=swap");

ion-title {
  font-family: "Courgette", cursive;
}
</style>
