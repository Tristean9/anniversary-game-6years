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
                    year: '2019',
                    title: '回忆标题1',
                    description: '这里是回忆描述...(替换为真实回忆)',
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
                    year: '2019',
                    title: '回忆标题2',
                    description: '这里是回忆描述...(替换为真实回忆)',
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
                    year: '2020',
                    title: '回忆标题3',
                    description: '这里是回忆描述...(替换为真实回忆)',
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
                    year: '2020',
                    title: '回忆标题4',
                    description: '这里是回忆描述...(替换为真实回忆)',
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
                    year: '2021',
                    title: '回忆标题5',
                    description: '这里是回忆描述...(替换为真实回忆)',
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
                    year: '2021',
                    title: '回忆标题6',
                    description: '这里是回忆描述...(替换为真实回忆)',
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
                    year: '2021',
                    title: '回忆标题7',
                    description: '这里是回忆描述...(替换为真实回忆)',
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
                    year: '2022',
                    title: '回忆标题8',
                    description: '这里是回忆描述...(替换为真实回忆)',
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
                    year: '2022',
                    title: '回忆标题9',
                    description: '这里是回忆描述...(替换为真实回忆)',
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
                    year: '2023',
                    title: '回忆标题10',
                    description: '这里是回忆描述...(替换为真实回忆)',
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
                    year: '2023',
                    title: '回忆标题11',
                    description: '这里是回忆描述...(替换为真实回忆)',
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
                    year: '2024',
                    title: '回忆标题12',
                    description: '这里是回忆描述...(替换为真实回忆)',
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
                    year: '2024',
                    title: '回忆标题13',
                    description: '这里是回忆描述...(替换为真实回忆)',
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
                    year: '2024',
                    title: '回忆标题14',
                    description: '这里是回忆描述...(替换为真实回忆)',
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
                    year: '2025',
                    title: '回忆标题15',
                    description: '这里是回忆描述...(替换为真实回忆)',
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
                    year: '2025',
                    title: '回忆标题16',
                    description: '这里是回忆描述...(替换为真实回忆)',
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
                    year: '2025',
                    title: '回忆标题17',
                    description: '这里是回忆描述...(替换为真实回忆)',
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
                    year: '永远',
                    title: '回忆标题18',
                    description: '这里是回忆描述...(替换为真实回忆)',
                    image: photo6_2025,
                },
            },
        ],
    },
];
