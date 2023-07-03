'use client'

import { socket } from '@/libs/socket'
import { useEffect, useState } from 'react'

export default function Room() {
  const [data, setData] = useState({})

  useEffect(() => {
    socket.on('user entered', (data) => {
      console.log(data)

      setData(data)
    })
  }, [])

  return <h1>{JSON.stringify(data, null, 2)}</h1>
}
