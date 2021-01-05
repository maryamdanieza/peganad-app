<template>
  <base-layout>
    <div class="wrapper">
      <ion-text color="danger">
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
.wrapper {
  display: flex;
  flex-flow: column;
  height: 100%;
}
.sub-header {
  height: 100px;
  display: flex;
  align-items: center;
}
.sub-content {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
