<template>
  <ion-page>
    <Header></Header>
    <ion-content>
      <div class="card-center">
        <Card></Card>
      </div>
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
.card-center {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
