<template>
  <ion-card
    class="ion-margin-bottom"
    v-for="(content, index) in contents[routerParam]"
    :key="content.id"
  >
    <ion-card-header>
      <ion-card-title :color="color" class="ion-text-center ion-text-uppercase">
        {{ content.name }}
      </ion-card-title>
    </ion-card-header>
    <div class="img-content">
      <img :src="`data:image/jpeg;base64,${content.img}`" />
    </div>
    <ion-card-content class="ion-text-center">
      <ion-card-subtitle> `{{ content.translatedName }}` </ion-card-subtitle>
      <ion-button
        :color="color"
        shape="round"
        expand="full"
        size="large"
        @click="playAudio(content.audio, index)"
      >
        <ion-icon
          :icon="index == tappedIndex && audioPlaying ? volumeHigh : volumeMute"
        ></ion-icon>
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script src="">
import LearnCardContent from "./LearnCardContent.js";
export default LearnCardContent;
</script>

<style scoped src="./LearnCardContent.css"></style>
