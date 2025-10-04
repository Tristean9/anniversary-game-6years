export interface Memory {
    id: number;
    year: string;
    title: string;
    description: string;
    image: string;
}

export interface ClickableItem {
    id: number;
    x: number;
    y: number;
    emoji: string;
    memory: Memory;
}

export interface Scene {
    id: number;
    title: string;
    background: string;
    items: ClickableItem[];
}
