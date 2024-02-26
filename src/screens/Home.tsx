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
            <h2>or, generate random episode by mood:</h2>
            <button
                onClick={() => {}}
                className="inline-flex gap-x-2 rounded border border-amber-500 px-4 py-2 font-bold
                         text-black hover:bg-amber-600 hover:text-white focus:outline-none focus:ring 
                         active:bg-amber-700 active:text-white">
                I want to smile ☺️
            </button>
            <button
                onClick={() => {}}
                className="inline-flex gap-x-2 rounded border border-blue-700 px-4 py-2 font-bold
                         text-black hover:bg-blue-800 hover:text-white focus:outline-none focus:ring 
                         active:bg-blue-900 active:text-white">
                I want to cry 🥹
            </button>
            <button
                onClick={() => {}}
                className="inline-flex gap-x-2 rounded border border-green-700 px-4 py-2 font-bold
                         text-black hover:bg-green-800 hover:text-white focus:outline-none focus:ring 
                         active:bg-green-900 active:text-white">
                I want to laugh 💀
            </button>
        </div>
    )
}

export default Home
