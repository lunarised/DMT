import { makeObservable, observable } from "mobx";
import { Character } from "./characters/characters";

export class DataModel {
  static instance: DataModel;

  //@observable
  //characters: Character[];

  numbers: number[];

  recent: number;

  static sharedInstance(): DataModel {
    if (!DataModel.instance) {
      DataModel.instance = new DataModel();
    }
    return DataModel.instance;
  }

  constructor() {
    makeObservable(this, {
      numbers: observable,
      recent: observable,
    });
    // this.characters = [];
    this.numbers = [1];
    this.recent = 33;
  }
}
