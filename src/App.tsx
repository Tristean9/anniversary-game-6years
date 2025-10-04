import {useState} from 'react';
import {AnimatePresence} from 'framer-motion';
import Scene from './components/Scene';
import MemoryModal from './components/MemoryModal';
import {scenes} from './data';
import type {ClickableItem, Memory} from './types';
import './App.css';

type GameStage = 'playing' | 'complete';

function App() {
    const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
    const [foundItems, setFoundItems] = useState<Set<number>>(new Set());
    const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
    const [gameStage, setGameStage] = useState<GameStage>('playing');
    const [testMode, setTestMode] = useState(false);

    const isTestEnv = import.meta.env.MODE === 'test';
    const currentScene = scenes[currentSceneIndex];
    const totalItems = scenes.reduce((sum, scene) => sum + scene.items.length, 0);

    const goToNextScene = () => {
        if (currentSceneIndex < scenes.length - 1) {
            setCurrentSceneIndex(prev => prev + 1);
        } else {
            setGameStage('complete');
        }
    };

    const goToPrevScene = () => {
        if (currentSceneIndex > 0) {
            setCurrentSceneIndex(prev => prev - 1);
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

    if (gameStage === 'complete') {
        return (
            <div className="app">
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
            </div>
        );
    }

    return (
        <div className="app">
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
                        disabled={currentSceneIndex === 0}
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
        </div>
    );
}

export default App;
