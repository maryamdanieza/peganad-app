<template>
  <base-layout
    :pageTitle="`Play  ${'Game'}`"
    toolbarColor=""
    pageDefaultBackLink="/learn"
  >
  </base-layout>
</template>

<script>
const cards = {
  words: [{ id: "1", color: "secondary", name: "Words", img: "graduate.svg" }],
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
  colors: [{ id: "1", color: "success", name: "Colors", img: "gaming.svg" }],
  numbers: [{ id: "1", color: "orange", name: "Numbers", img: "game.svg" }],
};

export default {
  name: "GameContentPage",
  data() {
    return {
      cards: cards,
      routerParam: "",
    };
  },
  created() {
    this.routerParam = this.$route.params.id;
  },
};
</script>
