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
import { volumeHigh, volumeMute } from "ionicons/icons";

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
      audioPlaying: false,
      tappedIndex: null,
      // icon
      volumeHigh,
      volumeMute,
    };
  },
  methods: {
    playAudio(audioFile, index) {
      if (audioFile) {
        if (index + 1) {
          this.tappedIndex = index;
          this.audioPlaying = true;
          const audio = new Audio(audioFile);
          audio.play();
          audio.onended = () => {
            this.audioPlaying = false;
          };
        }
      }
    },
  },
  created() {},
  mounted() {},
};
