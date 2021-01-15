<template>
  <base-layout
    :pageTitle="`Play ${routerParam}`.toUpperCase()"
    toolbarColor="pink"
    statusBarColor="#f3128a"
    pageDefaultBackLink="/game"
    :routerParam="routerParam"
  >
    <div v-if="false" class="ion-padding">
      <loading-screen></loading-screen>
    </div>
    <div v-else class="wrapper ion-padding">
      <game-card-content
        :contents="contents"
        :routerParam="routerParam"
        color="violet"
      ></game-card-content>
    </div>
  </base-layout>
</template>

<script>
import LoadingScreen from "../../components/LoadingScreen.vue";
import GameCardContent from "../../components/game/GameCardContent.vue";

export default {
  name: "GamePageContent",
  components: {
    LoadingScreen,
    GameCardContent,
  },
  data() {
    return {
      contents: this.$store.getters.contents,
      routerParam: this.$route.params.id,
      isLoading: true,
    };
  },
};
</script>

<style scoped>
.wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  height: 100%;
}
</style>
