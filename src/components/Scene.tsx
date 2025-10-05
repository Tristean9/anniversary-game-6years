import {motion} from 'framer-motion';
import {useEffect, useMemo} from 'react';
import type {CSSProperties} from 'react';
import type {Scene as SceneType, ClickableItem as ClickableItemType} from '../types';
import ClickableItem from '../components/ClickableItem';

interface Props {
    scene: SceneType;
    foundItems: Set<number>;
    onItemClick: (item: ClickableItemType) => void;
}

export default function Scene({scene, foundItems, onItemClick}: Props) {
    useEffect(() => {
        scene.items.forEach(item => {
            const memoryImage = new Image();
            memoryImage.src = item.memory.image;

            if (item.icon) {
                const iconImage = new Image();
                iconImage.src = item.icon;
            }
        });
    }, [scene]);

    const surfaceStyle: CSSProperties = useMemo(() => {
        const style: CSSProperties = {
            background: scene.background,
            borderRadius: '32px',
        };

        if (scene.backgroundImage) {
            style.backgroundImage = `url(${scene.backgroundImage})`;
            style.backgroundRepeat = 'no-repeat';
            style.backgroundPosition = 'center';
            style.backgroundSize = '100% 100%';
        }

        if (scene.baseWidth && scene.baseHeight) {
            style.width = 'min(90vw, 1100px)';
            style.maxWidth = '1100px';
            style.aspectRatio = `${scene.baseWidth} / ${scene.baseHeight}`;
            style.height = 'auto';
            style.maxHeight = '80vh';
        }
        else {
            style.width = '100%';
            style.height = '100%';
        }

        return style;
    }, [scene.background, scene.backgroundImage, scene.baseWidth, scene.baseHeight]);

    const surfaceClassName = useMemo(() => {
        const classes = ['scene-surface'];

        if (scene.baseWidth && scene.baseHeight) {
            classes.push('scene-surface--fixed');
        }

        if (scene.backgroundImage) {
            classes.push('scene-surface--image');
        }

        return classes.join(' ');
    }, [scene.baseWidth, scene.baseHeight, scene.backgroundImage]);

    return (
        <motion.div
            className="scene"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.8}}
        >
            <div className="scene-background">
                <div className={surfaceClassName} style={surfaceStyle}>
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
            </div>
        </motion.div>
    );
}
