import cors from 'cors'
import express from 'express'
import { Server } from 'socket.io'

// app setup
const app = express()
app.use(cors())

const server = app.listen(3333, () => {
  console.log('app listening at http://localhost:3333')
})

// socket setup
const io = new Server(server, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  socket.on('join room', async (data, callback) => {
    const room = await io.in(data.room).fetchSockets()

    if (room.length >= 2) {
      callback({ ok: false, data: null })
      return
    }

    socket.data.name = data.name
    socket.data.room = data.room

    socket.join(data.room)

    callback({ ok: true, data: socket.data })
  })

  console.log(`new socket connection: ${socket.id}`)
})
