import { isIOS } from 'react-device-detect'

import { Episode } from '@/types'

import ArrowPath from './ArrowPath'
import TV from './TV'

interface Props {
    episode: Episode
    onAnother: () => void
}

function EpisodeItem({ episode, onAnother }: Props) {
    const handleWatch = (url: string) => {
        let destination = url
        if (isIOS) {
            destination = destination.replace('https://', 'nflx://')
            window.location.assign(destination)
        } else {
            window.open(destination)
        }
    }
    return (
        <div className="flex w-full flex-col gap-y-2">
            <div
                style={{
                    backgroundImage: `url(${episode.image_url})`,
                }}
                className="h-[192px] w-full rounded bg-gray-100 bg-cover bg-top bg-no-repeat"></div>
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
