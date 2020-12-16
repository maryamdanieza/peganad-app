<template>
  <ion-page>
    <Header name="Home"></Header>
    <ion-content >
      <Card></Card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonPage,
    Header,
    Card,
  },
});
</script>

<style scoped>
</style>
