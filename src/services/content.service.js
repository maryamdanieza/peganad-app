import {
  animalsQuery,
  colorsQuery,
  numbersQuery,
  wordsQuery,
} from "../firestore/firebaseInit.js";
import Localbase from "localbase";

let localDB = new Localbase("db");
localDB.config.debug = false;

class ContentService {
  async getAnimals() {
    let animalArr = [];
    const res = await animalsQuery.get();
    res.forEach((r) => {
      animalArr.push(res);
    });
    return animalArr;
  }
}

let contentService = new ContentService();
export default contentService;
