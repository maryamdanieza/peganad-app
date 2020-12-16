<template>
  <ion-header class="ion-no-border">
    <ion-toolbar>
      <ion-title>Meranaw Learning App</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/vue";

export default defineComponent({
  name: "Header",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup() {
    const mounted = onMounted(() => {
      console.log(`Component is mounted!`);
    });
    return {
      //
      mounted,
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
