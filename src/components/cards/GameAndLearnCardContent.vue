<template>
  <ion-card
    class="ion-margin-bottom"
    v-for="content in contents[routerParam]"
    :key="content.id"
  >
    <ion-card-header>
      <ion-card-title :color="color" class="ion-text-center ion-text-uppercase">
        {{ content.name }}
      </ion-card-title>
    </ion-card-header>
    <div class="img-content">
      <img
        :src="
          require(`../../../public/assets/card-content/${routerParam}/${content.img}`)
        "
      />
    </div>
    <ion-card-content class="ion-text-center">
      <ion-card-subtitle v-if="showContent">
        `{{ content.translatedName }}`
      </ion-card-subtitle>
      <ion-button
        v-if="showContent"
        :color="color"
        shape="round"
        expand="full"
        size="large"
        @click="test()"
      >
        <ion-icon :icon="mic"></ion-icon>
      </ion-button>
      <div v-if="!showContent">
        <ion-grid>
          <ion-row>
            <ion-col v-for="(answer, index) in answers" :key="index" size="6">
              <ion-button
                :color="color"
                shape="round"
                expand="full"
                @click="test()"
              >
                A. {{ answer }}
              </ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonIcon,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { mic } from "ionicons/icons";

export default {
  props: ["contents", "routerParam", "color"],
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonIcon,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
  },
  data() {
    return {
      answers: null,
      showContent: true,
      // icon
      mic,
    };
  },
  methods: {
    test() {
      console.log("hello");
    },
  },
  created() {},
  mounted() {
    let routerParam = this.routerParam;
    let extractContent = this.contents[routerParam];
    let answerArr = [];

    extractContent.forEach((content) => {
      answerArr.unshift(content.translatedName);
    });
    answerArr.splice(0, 1);
    answerArr.sort(() => Math.random() - 0.5);
    this.answers = answerArr;

    if (this.$route.fullPath == `/game/${this.routerParam}`) {
      this.showContent = false;
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Exo:wght@400;500&display=swap");

ion-card-title {
  font-size: 3em;
  font-family: "Exo", sans-serif;
  font-weight: bold;
}
ion-card-subtitle {
  font-size: 2em;
  font-family: "Exo", sans-serif;
  font-weight: lighter;
}

.img-content {
  display: flex;
  justify-content: center;
}
img {
  width: 70%;
}
</style>
