import {motion} from 'framer-motion';
import type {ClickableItem as ClickableItemType} from '../types';

interface Props {
    item: ClickableItemType;
    onClick: (item: ClickableItemType) => void;
    isFound: boolean;
}

export default function ClickableItem({item, onClick, isFound}: Props) {
    return (
        <motion.div
            className="clickable-item"
            style={{
                position: 'absolute',
                left: `${item.x}%`,
                top: `${item.y}%`,
                fontSize: '48px',
                cursor: isFound ? 'default' : 'pointer',
                opacity: isFound ? 0.3 : 1,
            }}
            onClick={() => !isFound && onClick(item)}
            whileHover={!isFound ? {scale: 1.2} : {}}
            whileTap={!isFound ? {scale: 0.9} : {}}
            animate={!isFound
                ? {
                    y: [0, -10, 0],
                }
                : {}}
            transition={{
                y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                },
            }}
        >
            {item.emoji}
        </motion.div>
    );
}
