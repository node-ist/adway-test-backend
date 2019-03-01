import '../lib/load-env'
import '../models'
import { initMongoose } from '../lib/mongoose'
import { dbConfig } from '../config'
import { jobSeeder } from './job'

const promises = [jobSeeder()]

initMongoose(dbConfig.url)

Promise.all(promises)
  .then(() => {
    console.log('Database seeded')
    process.exit()
  })
  .catch((err) => {
    console.error('Database seed error', err)
    process.exit()
  })
