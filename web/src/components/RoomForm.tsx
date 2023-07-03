'use client'

import { socket } from '@/libs/socket'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

export function RoomForm() {
  const router = useRouter()
  const createRoom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    socket.emit(
      'join room',
      {
        name: formData.get('name'),
        room: formData.get('room'),
      },
      (response: any) => {
        console.log(response)

        if (response.ok === false) {
          alert('sala cheia')
          return
        }

        router.push('/room')
      },
    )
  }

  return (
    <form
      onSubmit={createRoom}
      className="flex w-96 flex-col rounded-md bg-rosePineMoon-highlightMed p-8"
    >
      <label className="mb-2" htmlFor="name">
        Nome
      </label>
      <input
        className="mb-4 rounded bg-rosePineMoon-surface p-2 placeholder:text-rosePineMoon-subtle"
        type="text"
        placeholder="seu nome"
        name="name"
        id="name"
      />

      <label className="mb-2" htmlFor="room">
        Código da sala
      </label>
      <input
        className="mb-8 rounded bg-rosePineMoon-surface p-2 placeholder:text-rosePineMoon-subtle"
        type="text"
        placeholder="código da sala"
        name="room"
        id="room"
      />

      <div className="flex flex-col items-center gap-4">
        <button
          type="submit"
          className="flex w-full items-center justify-center rounded bg-rosePineMoon-iris p-2 text-rosePineMoon-overlay transition-opacity hover:opacity-70"
        >
          Entrar na sala
        </button>
      </div>
    </form>
  )
}
