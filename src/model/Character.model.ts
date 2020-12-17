export default class BaseClass {
    class_name: string
    class_expertise: string[]
    class_magic_slot: string
    proficiency_bonus: ProficiencyBonus[]
    base_life_dice: number
    life_bonus_level: number
    saving_throws: string[]
    mage_class: boolean
}

export class ClassFeature {
    feature_name: string
    feature_level: number
    feature_description: string
}
export class ProficiencyBonus {
    level_range: number[]
    proficiency_bonus: number


}
