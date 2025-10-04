import {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import Scene from './components/Scene';
import MemoryModal from './components/MemoryModal';
import {scenes} from './data';
import type {ClickableItem, Memory} from './types';
import './App.css';

type GameStage = 'intro' | 'playing' | 'complete';

function App() {
    const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
    const [foundItems, setFoundItems] = useState<Set<number>>(new Set());
    const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
    const [gameStage, setGameStage] = useState<GameStage>('intro');
    const [testMode, setTestMode] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const isTestEnv = import.meta.env.MODE === 'test';
    const currentScene = scenes[currentSceneIndex];
    const totalItems = scenes.reduce((sum, scene) => sum + scene.items.length, 0);

    const handleStartGame = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setGameStage('playing');
        }, 1500);
    };

    const goToNextScene = () => {
        if (gameStage === 'intro') {
            setGameStage('playing');
            setCurrentSceneIndex(0);
        } else if (currentSceneIndex < scenes.length - 1) {
            setCurrentSceneIndex(prev => prev + 1);
        } else {
            setGameStage('complete');
        }
    };

    const goToPrevScene = () => {
        if (gameStage === 'complete') {
            setGameStage('playing');
            setCurrentSceneIndex(scenes.length - 1);
        } else if (currentSceneIndex > 0) {
            setCurrentSceneIndex(prev => prev - 1);
        } else {
            setGameStage('intro');
        }
    };

    const handleItemClick = (item: ClickableItem) => {
        setFoundItems(prev => new Set(prev).add(item.id));
        setSelectedMemory(item.memory);
    };

    const handleCloseModal = () => {
        setSelectedMemory(null);

        const currentSceneItemIds = currentScene.items.map(item => item.id);
        const currentSceneFoundItems = Array.from(foundItems).filter(id => currentSceneItemIds.includes(id));

        if (currentSceneFoundItems.length === currentScene.items.length) {
            if (currentSceneIndex < scenes.length - 1) {
                setTimeout(() => {
                    setCurrentSceneIndex(prev => prev + 1);
                }, 500);
            }
            else {
                setTimeout(() => {
                    setGameStage('complete');
                }, 500);
            }
        }
    };

    return (
        <AnimatePresence mode="wait">
            {gameStage === 'intro' ? (
                <motion.div
                    key="intro"
                    className="app"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.8}}
                >
                {/* 测试模式切换按钮 */}
                {isTestEnv && (
                    <button
                        className="test-mode-toggle"
                        onClick={() => setTestMode(!testMode)}
                    >
                        {testMode ? '关闭测试' : '测试模式'}
                    </button>
                )}

                <div className={`intro-screen ${isTransitioning ? 'transitioning' : ''}`}>
                    <div className="intro-content">
                        <h1 className="intro-title">六年时光</h1>
                        <p className="intro-text">
                            我们一起经历了很多有意义的时刻
                            <br />
                            快来找到它们吧
                        </p>
                        <button
                            className="intro-button"
                            onClick={handleStartGame}
                        >
                            开启回忆之门
                        </button>
                    </div>
                    <div className="intro-door-left"></div>
                    <div className="intro-door-right"></div>
                    <div className="intro-light"></div>
                </div>

                {/* 测试模式导航按钮 */}
                {isTestEnv && testMode && (
                    <div className="test-nav">
                        <button
                            className="test-nav-btn"
                            onClick={goToPrevScene}
                            disabled={true}
                        >
                            ← 上一页
                        </button>
                        <span className="test-nav-info">首页</span>
                        <button className="test-nav-btn" onClick={goToNextScene}>
                            下一页 →
                        </button>
                    </div>
                )}
                </motion.div>
            ) : gameStage === 'complete' ? (
                <motion.div
                    key="complete"
                    className="app"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.8}}
                >
                {/* 测试模式切换按钮 */}
                {isTestEnv && (
                    <button
                        className="test-mode-toggle"
                        onClick={() => setTestMode(!testMode)}
                    >
                        {testMode ? '关闭测试' : '测试模式'}
                    </button>
                )}

                <div className="complete-screen">
                    <h1 className="complete-title">💕 六周年快乐 💕</h1>
                    <p className="complete-message">
                        感谢这六年来的陪伴
                        <br />
                        未来的每一天,都想和你一起度过
                        <br />
                        我爱你 ❤️
                    </p>
                </div>

                {/* 测试模式导航按钮 */}
                {isTestEnv && testMode && (
                    <div className="test-nav">
                        <button className="test-nav-btn" onClick={goToPrevScene}>
                            ← 上一页
                        </button>
                        <span className="test-nav-info">完成</span>
                        <button
                            className="test-nav-btn"
                            onClick={goToNextScene}
                            disabled={true}
                        >
                            下一页 →
                        </button>
                    </div>
                )}
                </motion.div>
            ) : (
                <motion.div
                    key={`scene-${currentSceneIndex}`}
                    className="app"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.8}}
                >
            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{width: `${(foundItems.size / totalItems) * 100}%`}}
                />
            </div>

            {/* 测试模式切换按钮 - 仅测试环境显示 */}
            {isTestEnv && (
                <button
                    className="test-mode-toggle"
                    onClick={() => setTestMode(!testMode)}
                >
                    {testMode ? '关闭测试' : '测试模式'}
                </button>
            )}

            {/* 测试模式导航按钮 - 仅测试环境且开启测试模式时显示 */}
            {isTestEnv && testMode && (
                <div className="test-nav">
                    <button
                        className="test-nav-btn"
                        onClick={goToPrevScene}
                        disabled={false}
                    >
                        ← 上一页
                    </button>
                    <span className="test-nav-info">
                        {currentSceneIndex + 1} / {scenes.length}
                    </span>
                    <button
                        className="test-nav-btn"
                        onClick={goToNextScene}
                    >
                        下一页 →
                    </button>
                </div>
            )}

            <AnimatePresence mode="wait">
                <Scene
                    key={currentScene.id}
                    scene={currentScene}
                    foundItems={foundItems}
                    onItemClick={handleItemClick}
                />
                </AnimatePresence>
                <MemoryModal memory={selectedMemory} onClose={handleCloseModal} />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default App;
