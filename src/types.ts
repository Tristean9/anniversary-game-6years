export interface Memory {
    id: number;
    description: string;
    image: string;
}

export interface ClickableItem {
    id: number;
    x: number;
    y: number;
    emoji?: string;
    icon?: string;
    size?: number;
    memory: Memory;
}

export interface Scene {
    id: number;
    title: string;
    background?: string;
    backgroundImage?: string;
    baseWidth?: number;
    baseHeight?: number;
    items: ClickableItem[];
}
