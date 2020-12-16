<template>
  <ion-page>
    <Header name="Profile"></Header>
    <ion-content> </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
} from "@ionic/vue";
import Header from "@/components/Header.vue";

export default {
  name: "Profile",
  components: { IonContent, IonPage, Header },
};
</script>
