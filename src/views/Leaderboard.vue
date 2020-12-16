<template>
  <ion-page>
    <Header name="Leaderboard"></Header>
    <ion-content> </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonContent,
} from "@ionic/vue";
import Header from '@/components/Header.vue';

export default defineComponent({
  name: "Leaderboard",
  components: {
    IonContent,
    IonPage,
    Header,
  },
});
</script>
