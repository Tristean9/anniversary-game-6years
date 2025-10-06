import {motion} from 'framer-motion';
import type {ClickableItem as ClickableItemType} from '../types';
import './ClickableItem.css';

interface Props {
    item: ClickableItemType;
    onClick: (item: ClickableItemType) => void;
    isFound: boolean;
}

export default function ClickableItem({item, onClick, isFound}: Props) {
    const isImage = Boolean(item.icon);
    const sizePercent = item.size ?? 8;

    const animate = isFound
        ? {y: 0}
        : {y: [0, -3, 0]};

    const transition = isFound
        ? {duration: 0.3}
        : {
            y: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        };

    return (
        <motion.div
            className="clickable-item"
            initial={{y: 0}}
            style={{
                position: 'absolute',
                left: `${item.x}%`,
                top: `${item.y}%`,
                cursor: 'pointer',
                fontSize: isImage ? undefined : '48px',
                width: isImage ? `${sizePercent}%` : undefined,
            }}
            onClick={() => onClick(item)}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.97}}
            animate={animate}
            transition={transition}
        >
            {isImage
                ? (
                    <img
                        src={item.icon}
                        alt={item.memory.description}
                        className="clickable-item-image"
                        style={{width: '100%', height: 'auto'}}
                    />
                )
                : item.emoji}
        </motion.div>
    );
}
