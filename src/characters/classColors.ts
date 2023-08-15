
import {CharacterClass} from "./classes"
export const getClassColor = (cClass: CharacterClass): string => {
    const color: Record<CharacterClass, string> = {
        barbarian: "#C4A484",
        bard: "#DD00DD",
        rogue: "#DD00DD",
        ranger: "#DD00DD",
        fighter: "#DD00DD",
        paladin: "#DD00DD",
        wizard: "#DD00DD",
        sorcerer: "#DD00DD",
        warlock: "#DD00DD",
        cleric: "#DD00DD",
        druid: "#DD00DD",
        monk: "#DD00DD"
    }
    return color[cClass];
}