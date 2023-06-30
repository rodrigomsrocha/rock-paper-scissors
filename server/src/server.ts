import express from 'express'
import { Server } from 'socket.io'

// app setup
const app = express()

const server = app.listen(3333, () => {
  console.log('app listening at http://localhost:3333')
})

// socket setup
const io = new Server(server)

io.on('connection', () => {
  console.log('socket connection')
})
