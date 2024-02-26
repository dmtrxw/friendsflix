import Home from '@/screens/Home'
import RandomEpisode from '@/screens/RandomEpisode'

import { useState } from 'react'

type Screen = 'home' | 'random-episode'

function App() {
    const [currentScreen, setCurrentScreen] = useState<Screen>('home')
    const handleGenerateRandomEpisode = () => {
        setCurrentScreen('random-episode')
    }
    return (
        <div className="flex h-dvh w-full items-center justify-center">
            {currentScreen === 'home' && (
                <Home onGenerateRandomEpisode={handleGenerateRandomEpisode} />
            )}
            {currentScreen === 'random-episode' && <RandomEpisode />}
        </div>
    )
}

export default App
