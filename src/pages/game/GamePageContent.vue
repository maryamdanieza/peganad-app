<template>
  <base-layout
    :pageTitle="`Play ${routerParam}`.toUpperCase()"
    toolbarColor="pink"
    statusBarColor="#f3128a"
    pageDefaultBackLink="/game"
    :routerParam="routerParam"
  >
    <div class="wrapper ion-padding">
      <game-card-content
        :contents="contents"
        :routerParam="routerParam"
        color="violet"
      ></game-card-content>
    </div>
  </base-layout>
</template>

<script>
import GameCardContent from "../../components/game/GameCardContent.vue";

const contents = {
  words: [
    {
      id: "1",
      name: "Walking",
      translatedName: "P'lalakaw",
      img: "walking.png",
    },
    {
      id: "2",
      name: "Sleeping",
      translatedName: "Tuturog'n",
      img: "sleeping.png",
    },
    {
      id: "3",
      name: "Playing",
      translatedName: "Deng'gitagita",
      img: "playing.png",
    },
    {
      id: "4",
      name: "Swimming",
      translatedName: "Plangoy",
      img: "swimming.png",
    },
    {
      id: "5",
      name: "Running",
      translatedName: "Pha'lalagoy",
      img: "running.png",
    },
  ],
  animals: [
    {
      id: "1",
      name: "Cat",
      translatedName: "B'dung",
      img: "cat.png",
    },
    {
      id: "2",
      name: "Chicken",
      translatedName: "Manok",
      img: "chicken.png",
    },
    {
      id: "3",
      name: "Fish",
      translatedName: "S'da",
      img: "fish.png",
    },
    {
      id: "4",
      name: "Cow",
      translatedName: "Sap'e",
      img: "cow.png",
    },
    {
      id: "5",
      name: "Bird",
      translatedName: "Papanok",
      img: "bird.png",
    },
  ],
  colors: [
    {
      id: "1",
      name: "Red",
      translatedName: "mariga",
      img: "red.png",
    },
    {
      id: "2",
      name: "Blue",
      translatedName: "Biro",
      img: "blue.png",
    },
    {
      id: "3",
      name: "Yellow",
      translatedName: "Binaneng",
      img: "yellow.png",
    },
    {
      id: "4",
      name: "Purple",
      translatedName: "Rambayong",
      img: "purple.png",
    },
    {
      id: "5",
      name: "Black",
      translatedName: "mait'm",
      img: "black.png",
    },
  ],
  numbers: [
    {
      id: "1",
      name: "One",
      translatedName: "Isa",
      img: "1.png",
    },
    {
      id: "2",
      name: "Two",
      translatedName: "Duwa",
      img: "2.png",
    },
    {
      id: "3",
      name: "Three",
      translatedName: "Tlo",
      img: "3.png",
    },
    {
      id: "4",
      name: "Four",
      translatedName: "Pat",
      img: "4.png",
    },
    {
      id: "5",
      name: "Five",
      translatedName: "Lima",
      img: "5.png",
    },
    {
      id: "6",
      name: "Six",
      translatedName: "N'em",
      img: "6.png",
    },
    {
      id: "7",
      name: "Seven",
      translatedName: "Pito",
      img: "7.png",
    },
    {
      id: "8",
      name: "Eight",
      translatedName: "Walo",
      img: "8.png",
    },
    {
      id: "9",
      name: "Nine",
      translatedName: "S'yam",
      img: "8.png",
    },
    {
      id: "10",
      name: "Ten",
      translatedName: "Sapolo",
      img: "10.png",
    },
  ],
};

export default {
  name: "GamePageContent",
  components: {
    GameCardContent,
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

<style scoped>
.wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  height: 100%;
}
</style>
