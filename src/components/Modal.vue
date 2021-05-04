<template>
  <div>
    <div class="main-modal ion-text-center">
      <span class="modal-title">{{ title }}!</span>
      <div class="modal-button ion-text-center ion-padding-top">
        <ion-button expand="block" color="light" shape="round" fill="outline"
          >Resume</ion-button
        >
        <ion-button
          @click="exitQuiz()"
          expand="block"
          color="light"
          shape="round"
          fill="outline"
          style="margin-top: 10px"
          >Exit</ion-button
        >
      </div>
    </div>
    <div class="ion-text-center ion-margin">
      <ion-button
        expand="block"
        :color="!isAudioOff ? 'success' : 'danger'"
        shape="round"
        @click="isAudioOff = !isAudioOff"
      >
        <ion-icon
          slot="start"
          :icon="!isAudioOff ? volumeHigh : volumeMute"
        ></ion-icon>
        Audio
      </ion-button>
      <div class="audio-text">
        Audio: <span v-if="isAudioOff">OFF</span><span v-else>ON</span>
      </div>
    </div>
  </div>
</template>

<script>
import modalUtil from "../utils/modal.util.js";
import { IonButton, IonIcon } from "@ionic/vue";
import { volumeHigh, volumeMute } from "ionicons/icons";

export default {
  name: "Modal",
  props: ["title"],
  components: {
    IonButton,
    IonIcon,
  },
  data() {
    return {
      content: {},
      isAudioOff: false,
      //   icon
      volumeHigh,
      volumeMute,
    };
  },
  methods: {
    exitQuiz() {
      this.$router.replace("/game").then(() => {
        modalUtil.openModal("dismiss");
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Exo:wght@400;500&display=swap");

.modal-icon {
  color: rgb(163, 162, 162);
}
.modal-button {
  margin: 0px 30px 0px 30px;
}
.main-modal {
  padding: 20px 20px 20px 20px;
  font-size: 20px;
  background: rgb(106, 106, 248);
}
.modal-title {
  font-family: "Exo", sans-serif;
  font-weight: bold;
  color: white;
  font-weight: bolder;
}
.audio-text {
  padding-top: 3px;
  font-family: "Exo", sans-serif;
  font-weight: bold;
  color: rgb(105, 102, 102);
}
.my-custom-class .modal-wrapper {
  --height: 260px;
  --width: 300px;
  --border-radius: 20px;
  --backdrop-opacity: 100px;
}
</style>
