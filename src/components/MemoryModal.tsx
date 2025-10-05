import {motion, AnimatePresence} from 'framer-motion';
import type {Memory} from '../types';

interface Props {
    memory: Memory | null;
    onClose: () => void;
}

export default function MemoryModal({memory, onClose}: Props) {
    return (
        <AnimatePresence>
            {memory && (
                <motion.div
                    className="modal-overlay"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-content"
                        initial={{scale: 0.8, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0.8, opacity: 0}}
                        onClick={e => e.stopPropagation()}
                    >
                        <img
                            src={memory.image}
                            alt={memory.description}
                            className="modal-image"
                        />
                        <p className="modal-description">{memory.description}</p>
                        <button className="modal-close" onClick={onClose}>
                            继续探索
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
