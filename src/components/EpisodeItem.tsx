import { Episode } from '@/types'

import TV from './TV'
import ArrowPath from './ArrowPath'

interface Props {
    episode: Episode
    onAnother: () => void
}

function EpisodeItem({ episode, onAnother }: Props) {
    const handleWatch = (url: string) => {
        window.open(url, '_blank')
    }
    return (
        <div className="m-4 flex flex-col gap-y-2">
            <img
                src={episode.image_url}
                alt={episode.title}
                className="h-auto w-full rounded"
            />
            <span className="text-xs font-semibold text-gray-400">
                Season {episode.season}, Episode {episode.no_in_season}
            </span>
            <h1 className="text-xl font-bold leading-snug">{episode.title}</h1>
            <p className="text-sm leading-snug">{episode.synopsis}</p>
            <div className="mt-2 inline-flex gap-x-2">
                <button
                    onClick={() => handleWatch(episode.netflix_url)}
                    className="inline-flex items-center gap-x-2 rounded bg-red-700 px-4 py-2 text-xs
                               font-bold text-white hover:bg-red-800 focus:outline-none focus:ring
                             active:bg-red-900">
                    <TV /> Watch
                </button>
                <button
                    onClick={onAnother}
                    className="inline-flex items-center gap-x-2 rounded bg-slate-700 px-4 py-2 text-xs
                               font-bold text-white hover:bg-slate-800 focus:outline-none focus:ring
                             active:bg-slate-900">
                    <ArrowPath /> Another
                </button>
            </div>
        </div>
    )
}

export default EpisodeItem
