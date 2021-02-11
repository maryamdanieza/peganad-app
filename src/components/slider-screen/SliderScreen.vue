<template>
  <ion-content fullscreen class="ion-padding" scroll-y="false">
    <ion-slides>
      <!-- <ion-slide>
        <div class="slide">
          <img src="../../../public/assets/design/game.png" />
          <h2>Welcome</h2>
          <p>
            The <b>ionic conference app</b> is a practical preview of the ionic
            framework in action, and a demonstration of proper code use.
          </p>
        </div>
      </ion-slide>

      <ion-slide>
        <div class="slide">
          <img src="../../../public/assets/design/study.png" />
          <h2>What is Ionic?</h2>
          <p>
            <b>Ionic Framework</b> is an open source SDK that enables developers
            to build high quality mobile apps with web technologies like HTML,
            CSS, and JavaScript.
          </p>
        </div>
      </ion-slide>

      <ion-slide>
        <div class="slide">
          <img src="../../../public/assets/design/colors.png" />
          <h2>What is Ionic Appflow?</h2>
          <p>
            <b>Ionic Appflow</b> is a powerful set of services and features
            built on top of Ionic Framework that brings a totally new level of
            app development agility to mobile dev teams.
          </p>
        </div>
      </ion-slide> -->

      <ion-slide>
        <div class="slide-4">
          <div v-if="internetStatus">
            <div class="internet">Internet Lost!</div>
            <div class="note">
              Please connect to the internet to Download the content. Thank you!
            </div>
            <!-- <img src="../../../public/assets/design/congrats.png" /> -->
          </div>
          <div v-if="!internetStatus">
            <img src="../../../public/assets/design/congrats.png" />
          </div>
          <h2>Download Contents</h2>
          <ion-button
            @click="downloadContent()"
            :disabled="internetStatus"
            color="success"
            >Download<ion-icon slot="end" :icon="downloadOutline"></ion-icon
          ></ion-button>
        </div>
      </ion-slide>
    </ion-slides>
  </ion-content>
</template>

<script>
import SliderScreen from "./SliderScreen.js";
export default SliderScreen;
</script>

<style scoped src="./SliderScreen.css"></style>
