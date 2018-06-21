export enum BorderColor {
    Black = 'black',
    Borderless = 'borderless',
    Gold = 'gold',
    Silver = 'silver',
    White = 'white'
};

export interface Card {
    id: string,
    oracle_id: string,
    // multiverse_ids: number[],
    // mtgo_id: number,
    // mtgo_foil_id: number,
    // uri: string,
    scryfall_uri: string,
    // prints_search_uri: string,
    // rulings_uri: string,

    name: string,
    // layout: CardLayout,
    cmc: number,
    type_line: string,
    oracle_text: string,
    mana_cost: string,
    power: string,
    toughness: string,
    loyalty: string,
    // life_modifier: string,
    // hand_modifier: string,
    colors: Color[],
    color_indicator?: Color[],
    // all_parts: object[],
    card_faces?: CardFace[],
    // legalities: object,
    // foil: boolean,
    // nonfoil: boolean,
    // oversized: boolean,
    // edhrec_rank: number,

    set: string,
    set_name: string,
    collector_number: string,
    set_search_uri: string,
    scryfall_set_uri: string,
    image_uris: ImageUris,
    highres_image: boolean,
    reprint: boolean,
    digital: boolean,
    rarity: Rarity,
    flavor_text: string,
    artist: string,
    illustration_id: string,
    frame: string,
    full_art: boolean,
    watermark: string,
    border_color: BorderColor,
    story_spotlight_number: number,
    story_spotlight_uri: string,
    timeshifted: boolean,
    colorshifted: boolean,
    futureshifted: boolean,
};

export enum Color {
    White = 'W',
    Blue = 'U',
    Black = 'B',
    Red = 'R',
    Green = 'G'
};

export interface CardFace {
    name: string,
    type_line: string,
    oracle_text: string,
    mana_cost: string,
    colors: Color[],
    color_indicator: Color[],
    power: string,
    toughness: string,
    loyalty: string,
    flavor_text: string,
    illustration_id: string,
    image_uris: ImageUris
};

export interface Error {
    status: number,
    code: string,
    details: string,
    type?: string,
    warnings?: string[]
};

export enum ImageType {
    Png = 'png',
    BorderCrop = 'border_crop',
    ArtCrop = 'art_crop',
    Large = 'large',
    Normal = 'normal',
    Small = 'small'
};

export type ImageUris = {[type in ImageType]: string};

export enum Rarity {
    Common = 'common',
    Uncommon = 'uncommon',
    Rare = 'rare',
    MythicRare = 'mythic',
};

export interface Set {
    code: string,
    mtgo_code: string,
    name: string,
    set_type: SetType,
    released_at: Date,
    block_code: string,
    block: string,
    parent_set_code: string,
    card_count: number,
    digital: boolean,
    foil_only: boolean,
    icon_svg_uri: string,
    search_uri: string
};

export enum SetType {
    Core = 'core',
    Expansion = 'expansion',
    Masters = 'masters',
    Masterpiece = 'masterpiece',
    FromTheVault = 'from_the_vault',
    Spellbook = 'spellbook',
    PremiumDeck = 'premium_deck',
    DuelDeck = 'duel_deck',
    Commander = 'commander',
    Planechase = 'planechase',
    Conspiracy = 'conspiracy',
    Archenemy = 'archenemy',
    Vanguard = 'vanguard',
    Funny = 'funny',
    Starter = 'starter',
    Box = 'box',
    Promo = 'promo',
    Token = 'token',
    Memorabilia = 'memorabilia'
};
