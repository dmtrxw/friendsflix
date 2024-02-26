import ArrowPath from '@/components/ArrowPath'
import friendsLogo from '@/assets/friends-logo.png'

interface Props {
    onGenerateRandomEpisode: () => void
}

function Home({ onGenerateRandomEpisode }: Props) {
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
            <h2 className="text-gray-400">
                or, directly watch our recommended episode based on how you
                wanna feel:
            </h2>
            <button
                onClick={() => {}}
                className="inline-flex justify-center gap-x-2 rounded border border-amber-600 px-4 py-2 font-bold
                         text-black hover:bg-amber-700 hover:text-white focus:outline-none focus:ring 
                         active:bg-amber-800 active:text-white">
                I want to smile ☺️
            </button>
            <button
                onClick={() => {}}
                className="inline-flex justify-center gap-x-2 rounded border border-blue-700 px-4 py-2 font-bold
                         text-black hover:bg-blue-800 hover:text-white focus:outline-none focus:ring 
                         active:bg-blue-900 active:text-white">
                I want to cry 🥹
            </button>
            <button
                onClick={() => {}}
                className="inline-flex justify-center gap-x-2 rounded border border-emerald-400 px-4 py-2 font-bold
                         text-black hover:bg-emerald-500 hover:text-white focus:outline-none focus:ring 
                         active:bg-emerald-600 active:text-white">
                I want to laugh 😂
            </button>
        </div>
    )
}

export default Home
