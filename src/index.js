import http from 'http'

import './models'
import './lib/load-env'
import { app } from './server'
import { appConfig } from './config'

const listenHandler = () => {
  console.log('Server is listening on port', appConfig.port)
}

const server = http.createServer(app)

server.listen(appConfig.port)
server.on('listening', listenHandler)
