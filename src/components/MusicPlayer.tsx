import {useEffect, useRef, useState} from 'react';
import musicSvg from '../assets/music/music.svg';
import musicDisabledSvg from '../assets/music/music-disabled.svg';
import musicMp3 from '../assets/music/music.mp3';

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) {
            return;
        }

        const playAudio = async () => {
            try {
                await audio.play();
                setIsPlaying(true);
            }
            catch {
                console.log('自动播放被阻止,需要用户交互');
            }
        };

        playAudio();
    }, []);

    const togglePlay = async () => {
        const audio = audioRef.current;
        if (!audio) {
            return;
        }

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        }
        else {
            try {
                await audio.play();
                setIsPlaying(true);
            }
            catch (error) {
                console.error('播放失败:', error);
            }
        }
    };

    return (
        <>
            <audio ref={audioRef} src={musicMp3} loop />
            <button
                className={`music-player ${isPlaying ? 'playing' : ''}`}
                onClick={togglePlay}
            >
                <img
                    src={isPlaying ? musicSvg : musicDisabledSvg}
                    alt="音乐"
                />
            </button>
        </>
    );
}
