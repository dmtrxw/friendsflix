import Spinner from '@/components/Spinner'
import { useEffect, useState } from 'react'

import { Episode } from '@/types'
import EpisodeItem from '@/components/EpisodeItem'

const getHeading = () => {
    const HEADINGS = [
        'One of my favorites! 🔥',
        'Here you go! 🎉',
        "Let's start watching! 👀",
    ]
    const minCeiled = Math.ceil(0)
    const maxFloored = Math.floor(HEADINGS.length - 1)
    const index = Math.floor(
        Math.random() * (maxFloored - minCeiled + 1) + minCeiled
    )

    console.log(index)

    return HEADINGS[index]
}

function RandomEpisode() {
    const [episode, setEpisode] = useState<Episode>({} as Episode)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchRandomEpisode = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(
                'https://friends-episodes-api.vercel.app/randomize'
            )
            const responseBody = await response.json()

            setEpisode(responseBody)
        } catch (err) {
            setError(error)
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchRandomEpisode()
    }, [])

    if (isLoading) return <Spinner />
    if (error)
        return <p>Something went wrong, please try to refresh the page</p>

    return (
        <div className="w-full sm:max-w-sm">
            <h1 className="text-center text-xl">{getHeading()}</h1>
            <EpisodeItem episode={episode} onAnother={fetchRandomEpisode} />
        </div>
    )
}

export default RandomEpisode
