<template>
  <ion-content fullscreen class="ion-padding" scroll-y="false">
    <ion-slides>
      <ion-slide>
        <div class="slide">
          <img src="../../../public/assets/design/numbers.png" />
          <h1 class="slide1-text">Peganad App</h1>
          <p>
            The <b>Pegenad App</b> is lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis ipsum eaque laudantium consequuntur
            eius? Repudiandae facere numquam suscipit eaque sit cumque odio
            rerum officia, incidunt, non tempore, sed recusandae. Iste.
          </p>
        </div>
      </ion-slide>

      <ion-slide>
        <div class="slide">
          <img src="../../../public/assets/design/study.png" />
          <h1 class="slide2-text">Learn</h1>
          <p>
            <b>Learning</b> is lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis ipsum eaque laudantium consequuntur
            eius? Repudiandae facere numquam suscipit eaque sit cumque odio
            rerum officia, incidunt, non tempore, sed recusandae. Iste.
          </p>
        </div>
      </ion-slide>

      <ion-slide>
        <div class="slide">
          <img src="../../../public/assets/design/game.png" />
          <h1 class="slide3-text">Play</h1>
          <p>
            <b>Playing</b> is lorem ipsum dolor sit amet consectetur adipisicing
            elit. Reiciendis ipsum eaque laudantium consequuntur eius?
            Repudiandae facere numquam suscipit eaque sit cumque odio rerum
            officia, incidunt, non tempore, sed recusandae. Iste.
          </p>
        </div>
      </ion-slide>

      <ion-slide>
        <div class="slide-4">
          <div v-if="internetStatus">
            <div class="internet">Internet Lost!</div>
            <div class="note">
              Please connect to the internet to Download the content. Thank you!
            </div>
          </div>
          <div v-if="!internetStatus">
            <img src="../../../public/assets/design/congrats.png" />
            <h1 class="slide4-text">Download Contents</h1>
            <ion-button
              @click="downloadContent()"
              :disabled="internetStatus"
              color="success"
              >Download<ion-icon slot="end" :icon="downloadOutline"></ion-icon
            ></ion-button>
          </div>
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
