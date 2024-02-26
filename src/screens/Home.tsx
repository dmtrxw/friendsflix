import ArrowPath from '@/components/ArrowPath'
import friendsLogo from '@/assets/friends-logo.png'

interface Props {
    onGenerateRandomEpisode: () => void
}

function Home({ onGenerateRandomEpisode }: Props) {
    return (
        <div className="flex flex-col items-center gap-y-6">
            <img
                src={friendsLogo}
                alt="Friends (TV Series) Logo"
                className="h-12"
            />
            <button
                onClick={onGenerateRandomEpisode}
                className="inline-flex gap-x-2 rounded bg-slate-700 px-4 py-2 font-bold
                         text-white hover:bg-slate-800 focus:outline-none focus:ring 
                         active:bg-slate-900">
                <ArrowPath /> Generate random episode
            </button>
        </div>
    )
}

export default Home
