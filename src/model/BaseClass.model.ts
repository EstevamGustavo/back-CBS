export class BaseClass {
    class_name: string = null
    class_expertise: string[] = null
    mage_class: boolean = null
    class_magic_slot: ClassMagic = new ClassMagic
    class_feature: ClassFeature[] = null
    proficiency_bonus: ProficiencyBonus[] = null
    base_life_dice: number = null
    life_bonus_level: number = null
    saving_throws: string[] = null
}

export class ClassFeature {
    feature_name: string = null
    feature_level: number = null
    feature_description: string = null
}
export class ProficiencyBonus {
    level_range: number[] = null
    proficiency_bonus: number = null
}

export class ClassMagic {
    level: number
    magic_slots: MagicSlot[]

}

export class MagicSlot {
    circle: number
    quantity: number
}
