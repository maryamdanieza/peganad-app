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
  async getAnimals(cb) {
    let animalArr = [];
    let cursor = 0;
    const BUFFER = 2;
    do {
      const res = await animalsQuery.startAfter(cursor).limit(2).get();
      res.forEach((r) => {
        animalArr.push(r.data());
      });
      cb({
        cat: 'animals', status: animalArr.length
      })

    } while (true)
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
