<template>
  <ion-page>
    <Header></Header>
    <ion-content>
      Game
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { IonPage, IonContent } from "@ionic/vue"
import Header from "@/components/Header.vue";

export default defineComponent({
  name: "Game",
  components: {
    IonPage,
    IonContent,
    Header,
  },
  setup() {
    const mounted = onMounted(() => {
      console.log(`Component is mounted!`, );
    });
    return {
      // vue lifecycle hooks
      mounted,
    };
  },
});
</script>

<style scoped></style>
