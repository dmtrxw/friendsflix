import Home from '@/screens/Home'
import RandomEpisode from '@/screens/RandomEpisode'

import { useState } from 'react'

type Screen = 'home' | 'random-episode'

function App() {
    const [currentScreen, setCurrentScreen] = useState<Screen>('home')
    const handleBack = () => {
        setCurrentScreen('home')
    }
    const handleGenerateRandomEpisode = () => {
        setCurrentScreen('random-episode')
    }
    return (
        <div className="flex min-h-dvh w-full items-center justify-center p-4">
            {currentScreen === 'home' && (
                <Home onGenerateRandomEpisode={handleGenerateRandomEpisode} />
            )}
            {currentScreen === 'random-episode' && (
                <RandomEpisode onBack={handleBack} />
            )}
        </div>
    )
}

export default App
