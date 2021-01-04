<template>
  <base-layout
    :pageTitle="`Learn ${routerParam}`"
    toolbarColor=""
    pageDefaultBackLink="/learn"
  >
    <game-and-learn-card-content
      :contents="contents"
      :routerParam="routerParam"
    ></game-and-learn-card-content>
  </base-layout>
</template>

<script>
import GameAndLearnCardContent from "../../components/cards/GameAndLearnCardContent.vue";

const contents = {
  words: [
    {
      id: "1",
      color: "secondary",
      name: "Walking",
      translatedName: "P'lalakaw",
      img: "walking.png",
    },
    {
      id: "2",
      color: "secondary",
      name: "Chicken",
      translatedName: "Tuturog'n",
      img: "sleeping.png",
    },
    {
      id: "3",
      color: "secondary",
      name: "Fish",
      translatedName: "Deng'gitagita",
      img: "playing.png",
    },
    {
      id: "4",
      color: "secondary",
      name: "Cow",
      translatedName: "Plangoy",
      img: "swimming.png",
    },
    {
      id: "5",
      color: "secondary",
      name: "Bird",
      translatedName: "Pha'lalagoy",
      img: "running.png",
    },
  ],
  animals: [
    {
      id: "1",
      color: "danger",
      name: "Cat",
      translatedName: "B'dung",
      img: "cat.png",
    },
    {
      id: "2",
      color: "secondary",
      name: "Chicken",
      translatedName: "Manok",
      img: "chicken.png",
    },
    {
      id: "3",
      color: "orange",
      name: "Fish",
      translatedName: "S'da",
      img: "fish.png",
    },
    {
      id: "4",
      color: "violet",
      name: "Cow",
      translatedName: "Sap'e",
      img: "cow.png",
    },
    {
      id: "5",
      color: "success",
      name: "Bird",
      translatedName: "Papanok",
      img: "bird.png",
    },
  ],
  colors: [
    {
      id: "1",
      color: "danger",
      name: "Red",
      translatedName: "mariga",
      img: "red.png",
    },
    {
      id: "2",
      color: "secondary",
      name: "Blue",
      translatedName: "Biro",
      img: "blue.png",
    },
    {
      id: "3",
      color: "orange",
      name: "Yellow",
      translatedName: "Binaneng",
      img: "yellow.png",
    },
    {
      id: "4",
      color: "success",
      name: "Purple",
      translatedName: "Rambayong",
      img: "purple.png",
    },
    {
      id: "5",
      color: "white",
      name: "Black",
      translatedName: "mait'm",
      img: "black.png",
    },
  ],
  numbers: [
    {
      id: "1",
      color: "danger",
      name: "One",
      translatedName: "Isa",
      img: "1.png",
    },
    {
      id: "2",
      color: "secondary",
      name: "Two",
      translatedName: "Duwa",
      img: "2.png",
    },
    {
      id: "3",
      color: "orange",
      name: "Three",
      translatedName: "Tlo",
      img: "3.png",
    },
    {
      id: "4",
      color: "success",
      name: "Four",
      translatedName: "Pat",
      img: "4.png",
    },
    {
      id: "5",
      color: "violet",
      name: "Five",
      translatedName: "Lima",
      img: "5.png",
    },
  ],
};

export default {
  name: "LearnContentPage",
  components: {
    GameAndLearnCardContent,
  },
  data() {
    return {
      contents: contents,
      routerParam: "",
    };
  },
  created() {
    this.routerParam = this.$route.params.id;
  },
  methods: {
    test() {
      console.log("hello");
    },
  },
};
</script>

