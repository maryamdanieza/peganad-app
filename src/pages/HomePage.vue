<template>
  <base-layout>
    <div class="wrapper ion-padding">
      <ion-text color="medium">
        <h1 class="sub-header ion-no-margin ion-padding-horizontal">
          Meranaw Learnign App
        </h1>
      </ion-text>
      <div class="sub-content ion-padding-top">
        <div>
          <ion-card color="danger" button="true">
            <ion-grid>
              <ion-row>
                <ion-col size="8">
                  <ion-card-header
                    class="card-header ion-no-padding ion-padding-start"
                  >
                    <ion-card-title>Learn</ion-card-title>
                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                  </ion-card-header>
                  <img src="../../public/assets/design/study.png" width="160" />
                </ion-col>
                <ion-col class="second-column">
                  <ion-button shape="round">
                    <ion-icon slot="icon-only" :icon="arrowForwardOutline"></ion-icon>
                  </ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card>

          <ion-card color="orange" button="true">
            <ion-grid>
              <ion-row>
                <ion-col size="8">
                  <ion-card-header
                    class="card-header ion-no-padding ion-padding-start"
                  >
                    <ion-card-title>Learn</ion-card-title>
                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                  </ion-card-header>
                  <img src="../../public/assets/design/game.png" width="160" />
                </ion-col>
                <ion-col class="second-column">
                  <ion-button shape="round">
                    <ion-icon slot="icon-only" :icon="arrowForwardOutline"></ion-icon>
                  </ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card>
        </div>
      </div>
    </div>
  </base-layout>
</template>

<script>
import {
  IonText,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { arrowForwardOutline } from "ionicons/icons";

export default {
  name: "HomePage",
  components: {
    IonText,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
  },
  data() {
    return {
      // icon
      arrowForwardOutline,
    };
  },
};
</script>

<style scoped>
@import '../styling/HomePage.css';
</style>
