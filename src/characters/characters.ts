import { CharacterClass } from "./classes";

export type Character = {
    name: string;
    features?: CharacterFeatures;
    abilityScores: AbilityScores;
    race: string;
    class: CharacterClass;
    player?: string;
};

type CharacterFeatures = {
    skin: string;
    height: string;
    weight: string;
    notableFeatures: string;
};

type AbilityScores = {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    ac?: number;
};

