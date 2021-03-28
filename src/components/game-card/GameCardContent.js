import { Media } from "@ionic-native/media";
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
  created() {
    this.fetchContent();
  },
  methods: {
    /** BUSINESS LOGIC **/
    fetchContent() {
      localDB
        .collection("contents")
        .get()
        .then((contents) => {
          contents.forEach((content) => {
            console.log(content);
            if (content[this.routerParam]) {
              this.contents = content;
              this.displayContentOneByOne();
              this.generateRandomAnswer();
            }
          });
        });
    },
    displayContentOneByOne() {
      let routerParam = this.routerParam;
      let extractContent = this.contents[routerParam];
      console.log(extractContent);

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
        console.log(this.displayContents);
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
      const playAudio = function(value) {
        const file = Media.create(
          `file:///android_asset/public/assets/audio/${value}`
        );
        // to listen to plugin events:
        file.onStatusUpdate.subscribe((status) => console.log(status)); // fires when file status changes

        file.onSuccess.subscribe(() => console.log("Action is successful"));

        file.onError.subscribe((error) => console.log("Error!", error));

        // play the file
        file.play();
      };
      if (this.answerSelected == this.correctAnswer) {
        console.log("Correcnt Answer!");
        this.colorTapBtn = "success";
        this.continueAnswer = true;
        this.isAnswerCorrect = true;
        this.score += 10;
        playAudio("correct-sound.wav");
      } else {
        console.log("Wrong Answer! Correct Answer is: ", this.correctAnswer);
        this.colorCheckBtn = "dangeroutline";
        this.colorTapBtn = "danger";
        this.continueAnswer = true;
        this.isAnswerWrong = true;
        playAudio("wrong-sound.wav");

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
