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
      callback({ ok: false })
      return
    }

    socket.join(data.room)
    console.log(`${socket.id} has joined room: ${data.room}`)

    socket
      .to(data.room)
      .emit('user entered', { message: `${data.name} entered te room` })

    callback({ ok: true })
  })

  console.log(`new socket connection: ${socket.id}`)
})
