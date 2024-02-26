import { useState } from 'react'

import friendsLogo from '@/assets/friends-logo.png'
import ArrowPath from '@/components/ArrowPath'
import Spinner from '@/components/Spinner'

interface Props {
    onGenerateRandomEpisode: () => void
}

function Home({ onGenerateRandomEpisode }: Props) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchRandomEpisodeByMood = async (mood: string) => {
        try {
            setIsLoading(true)
            const response = await fetch(
                `https://friends-episodes-api.vercel.app/randomize-${mood}`
            )
            const responseBody = await response.json()

            window.open(responseBody.netflix_url)
        } catch (err) {
            setError(error)
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    if (isLoading) return <Spinner />
    if (error)
        return <p>Something went wrong, please try to refresh the page</p>

    return (
        <div className="flex max-w-sm flex-col gap-y-6">
            <img
                src={friendsLogo}
                alt="Friends (TV Series) Logo"
                className="h-auto w-full"
            />
            <button
                onClick={onGenerateRandomEpisode}
                className="inline-flex justify-center gap-x-2 rounded bg-slate-700 px-4 py-2 font-bold
                         text-white hover:bg-slate-800 focus:outline-none focus:ring 
                         active:bg-slate-900">
                <ArrowPath /> Generate random episode
            </button>
            <h2 className="text-center text-gray-400">
                or directly watch our recommended episode based on how you wanna
                feel:
            </h2>
            <button
                onClick={() => fetchRandomEpisodeByMood('smile')}
                className="inline-flex justify-center gap-x-2 rounded border border-amber-600 px-4 py-2 font-bold
                         text-black hover:bg-amber-700 hover:text-white focus:outline-none focus:ring 
                         active:bg-amber-800 active:text-white">
                I want to smile ☺️
            </button>
            <button
                onClick={() => fetchRandomEpisodeByMood('cry')}
                className="inline-flex justify-center gap-x-2 rounded border border-blue-700 px-4 py-2 font-bold
                         text-black hover:bg-blue-800 hover:text-white focus:outline-none focus:ring 
                         active:bg-blue-900 active:text-white">
                I want to cry 🥹
            </button>
            <button
                onClick={() => fetchRandomEpisodeByMood('laugh')}
                className="inline-flex justify-center gap-x-2 rounded border border-emerald-400 px-4 py-2 font-bold
                         text-black hover:bg-emerald-500 hover:text-white focus:outline-none focus:ring 
                         active:bg-emerald-600 active:text-white">
                I want to laugh 😂
            </button>
        </div>
    )
}

export default Home
