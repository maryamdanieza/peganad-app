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
  words: [{ id: "1", color: "secondary", name: "Words", img: "cat.png" }],
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
      img: "chicken.svg",
    },
    {
      id: "3",
      color: "orange",
      name: "Fish",
      translatedName: "S'da",
      img: "cat.png",
    },
    {
      id: "4",
      color: "violet",
      name: "Cow",
      translatedName: "Sap'e",
      img: "chicken.svg",
    },
    {
      id: "5",
      color: "success",
      name: "Bird",
      translatedName: "Papanok",
      img: "cat.png",
    },
  ],
  colors: [{ id: "1", color: "success", name: "Colors", img: "chicken.svg" }],
  numbers: [{ id: "1", color: "orange", name: "Numbers", img: "cat.png" }],
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
