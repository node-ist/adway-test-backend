import cors from 'cors'
import express from 'express'

import { initMongoose } from './lib/mongoose'
import { initRoutes } from './features'
import { dbConfig } from './config'
import { errorHandle } from './middleware'

export const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

initMongoose(dbConfig.url)
initRoutes(app)

app.use(errorHandle)
