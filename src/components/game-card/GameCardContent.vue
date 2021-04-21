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
        What is the meranaw meaning of this {{ $route.params.id }}?
      </h6>
    </ion-text>
    <div class="sub-content">
      <ion-card
        v-for="(displayContent, index) in displayContents"
        :key="index"
        class="ion-margin-vertical"
      >
        <ion-card-subtitle color="medium">
          <ion-grid class="">
            <ion-row class="ion-justify-content-between">
              <ion-col size="4">
                <div class="ion-text-center">
                  <span style="font-size: 15px">
                    Question
                  </span>
                  <div>
                    <span>{{ contentPosition }}/</span
                    ><span>{{ contents[routerParam].length }}</span>
                  </div>
                </div>
              </ion-col>
              <ion-col size="4">
                <div class="ion-text-center ">
                  <span style="font-size: 15px">
                    Time
                  </span>
                  <div :style="gameTimer <= 4 ? 'color: red' : ''">
                    :{{ gameTimer }}
                  </div>
                </div>
              </ion-col>
              <ion-col size="4">
                <div class="ion-text-center">
                  <span style="font-size: 15px">Score</span>
                  <div>
                    <span v-if="score == 0">{{ score }}</span>
                    <span
                      v-else
                      :class="
                        isAnswerCorrect
                          ? 'animate__animated animate__fadeIn'
                          : ''
                      "
                      style="color: #2dd36f; font-weight: bold;"
                      >{{ score }}</span
                    >
                  </div>
                </div>
              </ion-col>
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
            <img :src="`data:image/jpeg;base64,${displayContent.img}`" />
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
        <ion-card-subtitle class="ion-text-capitalize" color="pink">
          <span v-if="newHighScore">New Personal Best!</span>
          <span v-else>Personal Best!</span>
        </ion-card-subtitle>
        <ion-card-title class="ion-text-uppercase" :color="color"
          >Score: {{ score }}</ion-card-title
        >
        <ion-card-subtitle class="ion-text-capitalize">
          Words you got right: {{ answerCounter }} /
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
        @click="playAgain()"
        >Play Again?</ion-button
      >
      <ion-button
        expand="block"
        size="large"
        color="dangeroutline"
        shape="round"
        @click="exitQuiz()"
        >Exit Quiz</ion-button
      >
    </div>
  </div>
  <audio id="correct" preload="none">
    <source
      src="../../../public/assets/audio/correct-sound.wav"
      type="audio/wav"
    />
  </audio>
  <audio id="wrong" preload="none">
    <source src="../../../public/assets/audio/wrong-sound.wav" type="audio/wav" />
  </audio>
  <audio id="countdown" preload="none">
    <source src="../../../public/assets/audio/countdown.wav" type="audio/wav" />
  </audio>
</template>

<script>
import GameCardContent from "./GameCardContent.js";
export default GameCardContent;
</script>

<style scoped src="./GameCardContent.css"></style>
