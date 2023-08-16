import { makeObservable, observable } from "mobx";
import { Character } from "./characters/characters";

export class DataModel {
  static instance: DataModel;

  @observable
  characters: Character[];

  static sharedInstance(): DataModel {
    if (!DataModel.instance) {
      DataModel.instance = new DataModel();
    }
    return DataModel.instance;
  }

  constructor() {
    makeObservable(this);
    this.characters = [];
  }
}
