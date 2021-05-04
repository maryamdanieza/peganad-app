import {
  animalsQuery,
  colorsQuery,
  numbersQuery,
  wordsQuery,
  firestoreDB,
} from "../firestore/firebaseInit.js";
import Localbase from "localbase";

let localDB = new Localbase("db");
localDB.config.debug = false;

class ContentService {
  async getAnimals() {
    let animalArr = [];
    const res = await animalsQuery.get();
    res.forEach((r) => {
      animalArr.push(r.data());
    });
    return animalArr;
  }

  async getColors() {
    let colorArr = [];
    const res = await colorsQuery.get();
    res.forEach((r) => {
      colorArr.push(r.data());
    });
    return colorArr;
  }

  async getNumbers() {
    let numberArr = [];
    const res = await numbersQuery.get();
    res.forEach((r) => {
      numberArr.push(r.data());
    });
    return numberArr;
  }

  async getWords() {
    let wordsArr = [];
    const res = await wordsQuery.get();
    res.forEach((r) => {
      wordsArr.push(r.data());
    });
    return wordsArr;
  }

  async getContentByName(collectionName) {
    let contentArr = [];
    const res = await firestoreDB.collection(collectionName).get();
    res.forEach((r) => {
      contentArr.push(r.data());
    });
    return contentArr;
  }
}

let contentService = new ContentService();
export default contentService;
