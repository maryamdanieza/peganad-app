<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";
import { Plugins } from "@capacitor/core";
const { StatusBar } = Plugins;

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  mounted() {
    this.statusBar();
  },
  methods: {
    statusBar() {
      StatusBar.setOverlaysWebView({
        overlay: true,
      });
    },
  },
});
</script>
