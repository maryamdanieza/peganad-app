<template>
  <base-layout
    :pageTitle="`Learn ${routerParam}`.toUpperCase()"
    toolbarColor="violet"
    statusBarColor="#ec29fa"
    pageDefaultBackLink="/learn"
    :routerParam="routerParam"
  >
    <div class="wrapper ion-padding">
      <learn-card-content :routerParam="routerParam" color="pink">
      </learn-card-content>
    </div>
  </base-layout>
</template>

<script>
import LearnCardContent from "../../components/learn-card/LearnCardContent.vue";
import { Plugins } from "@capacitor/core";

const { StatusBar } = Plugins;

export default {
  name: "LearnContentPage",
  components: {
    LearnCardContent,
  },
  data() {
    return {
      routerParam: this.$route.params.id,
    };
  },
  created() {
    this.statusBar();
  },
  methods: {
    statusBar() {
      StatusBar.setBackgroundColor({
        color: "#ec29fa",
      });
    },
  },
};
</script>
