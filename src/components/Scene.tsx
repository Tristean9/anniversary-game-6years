import {motion} from 'framer-motion';
import type {Scene as SceneType, ClickableItem as ClickableItemType} from '../types';
import ClickableItem from '../components/ClickableItem';

interface Props {
    scene: SceneType;
    foundItems: Set<number>;
    onItemClick: (item: ClickableItemType) => void;
}

export default function Scene({scene, foundItems, onItemClick}: Props) {
    return (
        <motion.div
            className="scene"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.8}}
        >
            <div className="scene-background" style={{background: scene.background}}>
                <h1 className="scene-title">{scene.title}</h1>
                <div className="scene-items">
                    {scene.items.map(item => (
                        <ClickableItem
                            key={item.id}
                            item={item}
                            onClick={onItemClick}
                            isFound={foundItems.has(item.id)}
                        />
                    ))}
                </div>
                <div className="found-counter">
                    已找到: {Array.from(foundItems).filter(id => scene.items.some(item => item.id === id)).length} /
                    {' '}
                    {scene.items.length}
                </div>
            </div>
        </motion.div>
    );
}
