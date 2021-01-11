<template>
  <div
    v-if="showGameContent"
    :class="
      showGameContent
        ? 'animate__animated animate__fadeIn'
        : 'animate__animated animate__fadeOut'
    "
  >
    <ion-text>
      <h6 class="ion-text-center sub-header">
        What is the meranaw meaning of this animal?
      </h6>
    </ion-text>
    <div class="sub-content">
      <ion-card
        v-for="(displayContent, index) in displayContents"
        :key="index"
        class="ion-margin-vertical"
      >
        <ion-card-subtitle color="medium">
          <ion-grid class="ion-padding">
            <ion-row class="ion-justify-content-between">
              <div>
                <span>{{ contentPosition }}/</span
                ><span>{{ contents[routerParam].length }}</span>
              </div>
              <div>
                Score: <span v-if="score == 0">{{ score }}</span>
                <span
                  v-else
                  :class="
                    isAnswerCorrect ? 'animate__animated animate__fadeIn' : ''
                  "
                  style="color: #2dd36f; font-weight: bold;"
                  >{{ score }}</span
                >
              </div>
            </ion-row>
          </ion-grid>
        </ion-card-subtitle>
        <div class="card-content">
          <ion-card-header
            class="ion-margin-horizontal"
            :style="
              isAnswerWrong
                ? 'background: #2dd36f;  border-radius: 10px 10px 10px 10px;'
                : ''
            "
          >
            <ion-card-title
              :color="color"
              class="ion-text-center ion-text-uppercase"
            >
              <div
                v-if="isAnswerWrong"
                class="animate__animated animate__fadeIn"
                style="color: #ffffff; padding-top: 5px"
              >
                <p
                  class="ion-no-margin ion-text-capitalize"
                  style="font-size: 15px;"
                >
                  Correct Answer:
                </p>
                {{ correctAnswer }}
              </div>
              <div v-else>
                {{ displayContent.name }}
              </div>
            </ion-card-title>
          </ion-card-header>
          <div class="img-content">
            <img
              :src="
                require(`../../../public/assets/card-content/${routerParam}/${displayContent.img}`)
              "
            />
          </div>
          <ion-card-content class="answer-content">
            <ion-grid>
              <ion-row>
                <ion-col
                  v-for="(answer, index) in generateRandomAnswers"
                  :key="index"
                  size="6"
                >
                  <ion-button
                    :class="
                      index == tappedIndex && isAnswerWrong
                        ? 'animate__animated animate__headShake'
                        : ''
                    "
                    :color="index == tappedIndex ? colorTapBtn : 'medium'"
                    shape="round"
                    expand="full"
                    @click="tapAnswer(index, answer)"
                    :style="continueAnswer ? 'pointer-events: none;' : ''"
                  >
                    {{ answer }}
                    <ion-icon
                      v-if="isAnswerCorrect && index == tappedIndex"
                      slot="start"
                      :icon="checkmarkOutline"
                    ></ion-icon>
                    <ion-icon
                      v-if="isAnswerWrong && index == tappedIndex"
                      slot="start"
                      :icon="closeOutline"
                    ></ion-icon>
                  </ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </div>
      </ion-card>
    </div>
    <ion-button
      class="ion-margin-bottom"
      expand="full"
      size="large"
      shape="round"
      :color="colorCheckBtn"
      :disabled="!tappedAnswer"
      @click="!continueAnswer ? checkAnswer() : continueAnswering()"
    >
      <span v-if="!continueAnswer">Check</span>
      <span v-else>Continue</span>
    </ion-button>
  </div>
  <div
    v-else
    :class="!showGameContent ? 'animate__animated animate__fadeIn' : ''"
  >
    <ion-card class="ion-margin-bottom">
      <ion-card-content class="ion-text-center">
        <ion-card-title class="ion-text-uppercase" :color="color"
          >Score: {{ score }}!</ion-card-title
        >
        <ion-card-subtitle class="ion-text-capitalize">
          Words you got right: {{ score / 10 }} /
          {{ contents[routerParam].length }}
        </ion-card-subtitle>
      </ion-card-content>
    </ion-card>

    <div class="sub-content">
      <img src="../../../public/assets/design/congrats.png" />
    </div>
    <ion-text>
      <h6 class="ion-text-center sub-header ion-no-margin">
        Thank you for Playing!
      </h6>
    </ion-text>

    <div class="ion-text-center ion-padding-top">
      <ion-button
        expand="block"
        size="large"
        color="successoutline"
        shape="round"
        >Play Again?</ion-button
      >
      <ion-button
        expand="block"
        size="large"
        color="dangeroutline"
        shape="round"
        >Exit Quiz</ion-button
      >
    </div>
  </div>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  createAnimation,
} from "@ionic/vue";
import { mic, checkmarkOutline, closeOutline } from "ionicons/icons";

export default {
  props: ["contents", "routerParam", "color"],
  components: {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonText,
    IonGrid,
    IonRow,
    IonCol,
  },
  data() {
    return {
      generateRandomAnswers: [],
      tappedAnswer: false,
      tappedIndex: null,
      showGameContent: true,
      answerSelected: null,
      correctAnswer: null,
      isAnswerCorrect: false,
      isAnswerWrong: false,
      continueAnswer: false,
      displayContents: null,
      colorTapBtn: this.color,
      colorCheckBtn: "successoutline",
      contentPosition: 1,
      score: 0,
      timeLeft: 0,
      // icon
      mic,
      checkmarkOutline,
      closeOutline,
    };
  },
  created() {},
  mounted() {
    this.displayContentOneByOne();
    this.generateRandomAnswer();
  },
  unmounted() {
    console.log("unmounted!");
  },
  methods: {
    /** BUSINESS LOGIC **/
    displayContentOneByOne() {
      let routerParam = this.routerParam;
      let extractContent = this.contents[routerParam];

      const paginate = (array, index, size) => {
        // transform values
        index = Math.abs(parseInt(index));
        index = index > 0 ? index - 1 : index;
        size = parseInt(size);
        size = size < 1 ? 1 : size;

        // filter
        return [
          ...extractContent.filter((value, n) => {
            return n >= index * size && n < (index + 1) * size;
          }),
        ];
      };

      if (this.contentPosition <= extractContent.length) {
        let transform = paginate(extractContent, this.contentPosition, 1);
        this.displayContents = transform;
      }
    },
    generateRandomAnswer() {
      let routerParam = this.routerParam;
      let extractContent = this.contents[routerParam];
      let answerArr = [];

      extractContent.forEach((content) => {
        answerArr.unshift(content.translatedName);
      });

      this.correctAnswer = this.displayContents[0].translatedName; // store correct answer
      answerArr.sort(() => Math.random() - 0.5); // random the current elements
      let newAnsArr = answerArr.filter((item) => item != this.correctAnswer); // Remove answer in array
      newAnsArr.length = 3; // Limit length
      newAnsArr.unshift(this.correctAnswer); // Add answer array
      newAnsArr.sort(() => Math.random() - 0.5); // random the new elements
      this.generateRandomAnswers = newAnsArr;
    },
    tapAnswer(index, answer) {
      if (index + 1) {
        this.answerSelected = answer;
        this.tappedIndex = index;
        this.tappedAnswer = true;
      }
    },
    checkAnswer() {
      if (this.answerSelected == this.correctAnswer) {
        console.log("Correcnt Answer!");
        this.colorTapBtn = "success";
        this.continueAnswer = true;
        this.isAnswerCorrect = true;
        this.score += 10;
      } else {
        console.log("Wrong Answer! Correct Answer is: ", this.correctAnswer);
        this.colorCheckBtn = "dangeroutline";
        this.colorTapBtn = "danger";
        this.continueAnswer = true;
        this.isAnswerWrong = true;
      }
    },
    continueAnswering() {
      if (this.contentPosition < this.contents[this.routerParam].length) {
        this.nextAnimation();
        this.tappedAnswer = false;
        this.continueAnswer = false;
        this.colorCheckBtn = "successoutline";
        this.contentPosition += 1;
      } else {
        this.isAnswerCorrect = false;
        this.isAnswerWrong = false;
        this.continueAnswer = false;
        this.showGameContent = false;
        this.tappedAnswer = false;
        this.tappedIndex = null;
        this.colorCheckBtn = "successoutline";
        this.contentPosition += 1;
      }
    },

    /** UI LOGIC **/
    slideAnimation(
      element,
      speed,
      positionFrom,
      positionTo,
      opacityFrom,
      opacityTo
    ) {
      const animation = createAnimation()
        .addElement(document.querySelector(element))
        .duration(speed)
        .fromTo("transform", positionFrom, positionTo)
        .fromTo("opacity", opacityFrom, opacityTo);
      animation.play();
    },

    nextAnimation() {
      this.slideAnimation(
        ".card-content",
        800,
        "translateX(0px)",
        "translateX(350px)",
        "1",
        "0.2"
      );
      setTimeout(() => {
        this.displayContentOneByOne();
        this.generateRandomAnswer();
        this.slideAnimation(
          ".card-content",
          800,
          "translateX(-350px)",
          "translateX(0px)",
          "0.2",
          "1"
        );
        this.isAnswerCorrect = false;
        this.isAnswerWrong = false;
        this.tappedIndex = null;
        this.colorTapBtn = this.color;
      }, 800);
    },
  },
};
</script>

<style scoped>
ion-button {
  font-family: "Exo", sans-serif;
  font-weight: bold;
}
ion-card-subtitle {
  font-size: 1.5em;
  font-family: "Exo", sans-serif;
  font-weight: normal;
}
ion-card-title {
  font-size: 2.5em;
  font-family: "Exo", sans-serif;
  font-weight: bold;
}
ion-card-header {
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
}

h6 {
  font-size: 2em;
  font-family: "Exo", sans-serif;
  font-weight: bold;
}
.sub-header {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-family: "Exo", sans-serif;
  font-weight: bold;
}
.sub-content {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-content {
  display: flex;
  justify-content: center;
}
img {
  width: 60%;
}
/* .answer-content {
  pointer-events: none;
} */
</style>
