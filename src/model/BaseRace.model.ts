export class BaseRace {
    race_info: string[]
    name_example: string[]
    attribute_bonus: AttributeBonus[]
    age_range: number[]
    speed: number
    language: string[]
    heigh_range: number[]
    race_traits: RaceTraits[]

}

export class AttributeBonus {
    name: string
    bonus: number
}

export class RaceTraits {
    name: string
    description: string
}