import Spinner from '@/components/Spinner'
import ArrowLeft from '@/components/ArrowLeft'
import { useEffect, useState } from 'react'

import { Episode } from '@/types'
import EpisodeItem from '@/components/EpisodeItem'

interface Props {
    onBack: () => void
}

function RandomEpisode({ onBack }: Props) {
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
        <div className="w-[341px]">
            <div className="flex items-center justify-between">
                <button
                    onClick={onBack}
                    className="flex h-8 w-8 items-center justify-center rounded-full border shadow active:bg-gray-200">
                    <ArrowLeft />
                </button>
            </div>
            <div className="mt-4 flex justify-center">
                <EpisodeItem episode={episode} onAnother={fetchRandomEpisode} />
            </div>
        </div>
    )
}

export default RandomEpisode
