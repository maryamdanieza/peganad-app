// import { Media } from "@ionic-native/media";
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
import Localbase from "localbase";

let localDB = new Localbase("db");
localDB.config.debug = false;

export default {
  props: ["routerParam", "color"],
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
      contents: {},
      generateRandomAnswers: [],
      tappedAnswer: false,
      tappedIndex: null,
      showGameContent: true,
      answerSelected: null,
      correctAnswer: null,
      isAnswerCorrect: false,
      isAnswerWrong: false,
      continueAnswer: false,
      newHighScore: false,
      displayContents: null,
      colorTapBtn: this.color,
      colorCheckBtn: "successoutline",
      contentPosition: 1,
      answerCounter: 0,
      score: 0,
      gameTimer: 10,
      currentTimer: 0,
      delay: 1000,
      // icon
      mic,
      checkmarkOutline,
      closeOutline,
    };
  },
  created() {
    this.fetchContent();
  },
  unmounted() {
    this.gameTimer = 0;
  },
  methods: {
    /** BUSINESS LOGIC **/
    fetchContent() {
      localDB
        .collection("contents")
        .get()
        .then((contents) => {
          contents.forEach((content) => {
            if (content[this.routerParam]) {
              this.contents = content;
              this.generateRandomContents();
              this.generateRandomAnswer();
              this.displayContentOneByOne();
            }
          });
        });
    },
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
        this.timer("start", "", "");
      }
    },
    generateRandomContents() {
      let routerParam = this.routerParam;
      let extractContent = this.contents[routerParam];
      extractContent.sort(() => Math.random() - 0.5);
      this.displayContents = extractContent;
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
        this.colorTapBtn = "success";
        this.continueAnswer = true;
        this.isAnswerCorrect = true;
        this.score += 10 * this.gameTimer;
        this.answerCounter += 1;
        this.playSound("correct").then((audio) => {
          audio.play();
        });
        this.timer("", "pause", "");
      } else {
        this.colorCheckBtn = "dangeroutline";
        this.colorTapBtn = "danger";
        this.continueAnswer = true;
        this.isAnswerWrong = true;
        this.playSound("wrong").then((audio) => {
          audio.play();
        });
        this.timer("", "pause", "");
      }
    },
    continueAnswering() {
      if (this.contentPosition < this.contents[this.routerParam].length) {
        this.nextAnimation();
        this.tappedAnswer = false;
        this.continueAnswer = false;
        this.colorCheckBtn = "successoutline";
        this.contentPosition += 1;
        this.timer("", "", "restart");
      } else {
        this.isAnswerCorrect = false;
        this.isAnswerWrong = false;
        this.continueAnswer = false;
        this.showGameContent = false;
        this.tappedAnswer = false;
        this.tappedIndex = null;
        this.colorCheckBtn = "successoutline";
        this.contentPosition += 1;
        this.gameScore();
      }
    },
    gameScore() {
      let self = this;
      let addScore = function() {
        console.log("Add New Score!");
        localDB.collection("score").add(
          {
            id: self.$route.params.id,
            score: self.score,
          },
          self.$route.params.id
        );
      };
      let updateScore = function(score) {
        let currentScore = score;
        console.log(currentScore, self.score);
        if (currentScore < self.score) {
          // new highscore!
          self.newHighScore = true;
          localDB
            .collection("score")
            .doc({ id: self.$route.params.id })
            .set({
              id: self.$route.params.id,
              score: self.score,
            });
        } else {
          console.log("Already have Highscore!");
        }
      };

      localDB
        .collection("score")
        .get()
        .then((res) => {
          if (res.length == 0) {
            addScore();
          } else {
            res.some((r) => {
              // check first if all game has score
              console.log(r.id);
              if (
                r.id == "animals" &&
                r.id == "colors" &&
                r.id == "words" &&
                r.id == "numbers"
              ) {
                console.log("All game has score");
                // compare prev and curr score then UPDATE
                updateScore(r.score);
              } else {
                console.log(r.id, this.$route.params.id);
                if (r.id == this.$route.params.id) {
                  // if existed
                  if (r.id == "animals") {
                    updateScore(r.score);
                    return true;
                  } else if (r.id == "colors") {
                    updateScore(r.score);
                    return true;
                  } else if (r.id == "words") {
                    updateScore(r.score);
                    return true;
                  } else if (r.id == "numbers") {
                    updateScore(r.score);
                    return true;
                  }
                } else {
                  console.log(r.id, this.$route.params.id);
                  // if not existed
                  if (r.id != this.$route.params.id) {
                    addScore();
                    return true;
                  }
                }
              }
            });
          }
        });
    },
    async playSound(id) {
      const audio = document.getElementById(id);
      return audio;
    },
    timer(start, pause, restart) {
      let self = this;
      let countDownTimer = function() {
        if (self.gameTimer > 0) {
          self.currentTimer = setTimeout(() => {
            self.gameTimer -= 1;
            countDownTimer();
          }, self.delay);
          if (self.gameTimer == 4) {
            self.playSound("countdown").then((audio) => {
              audio.play();
            });
          }
        } else if (self.gameTimer == 0) {
          console.log("Timer Over!");
          self.tappedAnswer = true;
          self.continueAnswer = true;
          self.isAnswerWrong = true;
          self.colorCheckBtn = "dangeroutline";
          self.colorTapBtn = "danger";
          self.playSound("wrong").then((audio) => {
            audio.play();
          });
        }
      };

      if (start == "start") {
        countDownTimer();
      } else if (pause == "pause") {
        clearTimeout(self.currentTimer);
        self.playSound("countdown").then((audio) => {
          audio.currentTime = 0;
          audio.pause();
        });
      } else if (restart == "restart") {
        self.gameTimer = 10;
      }
    },
    /** UI LOGIC **/
    playAgain() {
      this.showGameContent = true;
      this.contentPosition = 1;
      this.answerCounter = 0;
      this.score = 0;
      this.gameTimer = 10;
      this.fetchContent();
    },
    exitQuiz() {
      this.$router.push("/game");
      this.showGameContent = true;
    },
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
