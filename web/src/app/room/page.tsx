import { Scissors, Mountain, Scroll } from 'lucide-react'

export default function Room() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <div className="w-96 rounded bg-rosePineMoon-highlightMed p-6">
        <strong className="flex items-center justify-center gap-2">
          <h1 className="rounded bg-rosePineMoon-surface p-2 text-9xl text-rosePineMoon-iris">
            0
          </h1>
          <span className="text-6xl">:</span>
          <h1 className="rounded bg-rosePineMoon-surface p-2 text-9xl text-rosePineMoon-iris">
            0
          </h1>
        </strong>
      </div>

      <div className="flex gap-4">
        <button className="rounded bg-rosePineMoon-rose p-4 text-3xl text-rosePineMoon-surface transition-opacity hover:opacity-70">
          <Scissors />
        </button>
        <button className="rounded bg-rosePineMoon-rose p-4 text-3xl text-rosePineMoon-surface transition-opacity hover:opacity-70">
          <Mountain />
        </button>
        <button className="rounded bg-rosePineMoon-rose p-4 text-3xl text-rosePineMoon-surface transition-opacity hover:opacity-70">
          <Scroll />
        </button>
      </div>
    </div>
  )
}
