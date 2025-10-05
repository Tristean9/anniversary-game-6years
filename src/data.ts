import type {Scene} from './types';

import background2019 from './assets/2019-2021/background.jpg';
import element1_2019 from './assets/2019-2021/element1.png';
import element2_2019 from './assets/2019-2021/element2.png';
import element3_2019 from './assets/2019-2021/element3.png';
import element4_2019 from './assets/2019-2021/element4.png';
import element5_2019 from './assets/2019-2021/element5.png';
import element6_2019 from './assets/2019-2021/element6.png';
import photo1_2019 from './assets/2019-2021/photo1.jpg';
import photo2_2019 from './assets/2019-2021/photo2.jpg';
import photo3_2019 from './assets/2019-2021/photo3.jpg';
import photo4_2019 from './assets/2019-2021/photo4.jpg';
import photo5_2019 from './assets/2019-2021/photo5.jpg';
import photo6_2019 from './assets/2019-2021/photo6.jpg';

import background2021 from './assets/2021-2025/background.png';
import element1_2021 from './assets/2021-2025/element1.png';
import element2_2021 from './assets/2021-2025/element2.png';
import element3_2021 from './assets/2021-2025/element3.png';
import element4_2021 from './assets/2021-2025/element4.png';
import element5_2021 from './assets/2021-2025/element5.png';
import element6_2021 from './assets/2021-2025/element6.png';
import photo1_2021 from './assets/2021-2025/photo1.jpg';
import photo2_2021 from './assets/2021-2025/photo2.jpg';
import photo3_2021 from './assets/2021-2025/photo3.jpg';
import photo4_2021 from './assets/2021-2025/photo4.jpg';
import photo5_2021 from './assets/2021-2025/photo5.jpg';
import photo6_2021 from './assets/2021-2025/photo6.jpg';

import photo1_2025 from './assets/2025/photo1.jpg';
import photo2_2025 from './assets/2025/photo2.jpg';
import photo3_2025 from './assets/2025/photo3.jpg';
import photo4_2025 from './assets/2025/photo4.jpg';
import photo5_2025 from './assets/2025/photo5.jpg';
import photo6_2025 from './assets/2025/photo6.jpg';
import background2025 from './assets/2025/background.jpg';
import element1_2025 from './assets/2025/element1.png';
import element2_2025 from './assets/2025/element2.png';
import element3_2025 from './assets/2025/element3.png';
import element4_2025 from './assets/2025/element4.png';
import element5_2025 from './assets/2025/element5.png';
import element6_2025 from './assets/2025/element6.png';

export const scenes: Scene[] = [
    {
        id: 1,
        title: '2019-2021 · 懵懂又单纯',
        background: '#0b0c1a',
        backgroundImage: background2019,
        baseWidth: 886,
        baseHeight: 564,
        items: [
            {
                id: 1,
                x: 18.5,
                y: 48,
                icon: element1_2019,
                size: 5.42,
                memory: {
                    id: 1,
                    description: '怀中俏皮的美人',
                    image: photo1_2019,
                },
            },
            {
                id: 2,
                x: 1.5,
                y: 40,
                icon: element2_2019,
                size: 9.26,
                memory: {
                    id: 2,
                    description: '屏幕传递我们的爱',
                    image: photo2_2019,
                },
            },
            {
                id: 3,
                x: 12,
                y: 6,
                icon: element3_2019,
                size: 7.67,
                memory: {
                    id: 3,
                    description: '毕业是新的起点',
                    image: photo3_2019,
                },
            },
            {
                id: 4,
                x: 59,
                y: 71,
                icon: element4_2019,
                size: 6.21,
                memory: {
                    id: 4,
                    description: '长得越来越像了',
                    image: photo4_2019,
                },
            },
            {
                id: 5,
                x: 93,
                y: 30,
                icon: element5_2019,
                size: 2.14,
                memory: {
                    id: 5,
                    description: '比宝宝多眼镜、口罩、项链',
                    image: photo5_2019,
                },
            },
            {
                id: 6,
                x: 76.6,
                y: 16,
                icon: element6_2019,
                size: 7.22,
                memory: {
                    id: 6,
                    description: '好看的蓝色卫衣和白色短裤',
                    image: photo6_2019,
                },
            },
        ],
    },
    {
        id: 2,
        title: '2021-2024 · 思念与成长',
        background: '#160b1a',
        backgroundImage: background2021,
        baseWidth: 2730,
        baseHeight: 1535,
        items: [
            {
                id: 7,
                x: 53.3,
                y: 5,
                icon: element1_2021,
                size: 4.652,
                memory: {
                    id: 7,
                    description: '冬日因你暖',
                    image: photo1_2021,
                },
            },
            {
                id: 8,
                x: 64.5,
                y: 81,
                icon: element2_2021,
                size: 8.168,
                memory: {
                    id: 8,
                    description: '表情生动',
                    image: photo2_2021,
                },
            },
            {
                id: 9,
                x: 52.5,
                y: 43,
                icon: element3_2021,
                size: 6.996,
                memory: {
                    id: 9,
                    description: '我手抚仙',
                    image: photo3_2021,
                },
            },
            {
                id: 10,
                x: 3.2,
                y: 41,
                icon: element4_2021,
                size: 5.165,
                memory: {
                    id: 10,
                    description: '姐姐真迷人',
                    image: photo4_2021,
                },
            },
            {
                id: 11,
                x: 88.8,
                y: 68,
                icon: element5_2021,
                size: 8.974,
                memory: {
                    id: 11,
                    description: '去过大理，爱得认真',
                    image: photo5_2021,
                },
            },
            {
                id: 12,
                x: 7,
                y: 27.5,
                icon: element6_2021,
                size: 26.777,
                memory: {
                    id: 12,
                    description: 'commit5',
                    image: photo6_2021,
                },
            },
        ],
    },
    {
        id: 3,
        title: '2025-永远 · 一直相伴',
        background: '#0c1b25',
        backgroundImage: background2025,
        baseWidth: 2730,
        baseHeight: 1397,
        items: [
            {
                id: 13,
                x: 65,
                y: 66,
                icon: element1_2025,
                size: 7.839,
                memory: {
                    id: 13,
                    description: '黑白配',
                    image: photo1_2025,
                },
            },
            {
                id: 14,
                x: 29,
                y: 60,
                icon: element2_2025,
                size: 6.154,
                memory: {
                    id: 14,
                    description: '宁静的江边',
                    image: photo2_2025,
                },
            },
            {
                id: 15,
                x: 37.8,
                y: 84,
                icon: element3_2025,
                size: 4.652,
                memory: {
                    id: 15,
                    description: '明媚的东湖',
                    image: photo3_2025,
                },
            },
            {
                id: 16,
                x: 90.5,
                y: 17.2,
                icon: element4_2025,
                size: 8.242,
                memory: {
                    id: 16,
                    description: '可以一起走更远',
                    image: photo4_2025,
                },
            },
            {
                id: 17,
                x: 62.5,
                y: 14,
                icon: element5_2025,
                size: 14.835,
                memory: {
                    id: 17,
                    description: '憨憨',
                    image: photo5_2025,
                },
            },
            {
                id: 18,
                x: 44.8,
                y: 33,
                icon: element6_2025,
                size: 2.674,
                memory: {
                    id: 18,
                    description: '笑笑更好看',
                    image: photo6_2025,
                },
            },
        ],
    },
];
