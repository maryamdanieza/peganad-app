<template>
  <base-layout>
    <div class="wrapper ion-padding">
      <ion-text color="success">
        <h1 class="sub-header ion-no-margin ion-padding">
          Meranaw Learnign App
        </h1>
      </ion-text>
      <div class="sub-content ion-padding">
        <div>Here</div>
      </div>
    </div>
  </base-layout>
</template>

<script>
import { IonText } from "@ionic/vue";

export default {
  name: "HomePage",
  components: {
    IonText,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Exo:wght@400;500&display=swap");
.wrapper {
  display: flex;
  flex-flow: column;
  height: 100%;
}
.sub-header {
  height: 100px;
  font-size: 3em;
  display: flex;
  align-items: center;
  font-family: "Exo", sans-serif;
  font-weight: bold;
}
.sub-content {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
