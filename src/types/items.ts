interface Item {
  fullName: string;
  description: string;
  iconURL: string;
  gamemodes: string[];
  rarity: string;
  since: string;
  until: string;
  event: boolean;
}

export type ItemType = Item;

export interface Achievement {
  name: string;
  description: string;
  iconURL: string;
}

export interface ShippingItem {
  itemID: number;
  polyculture: boolean;
  monoculture: boolean;
  seasons: string[];
}
