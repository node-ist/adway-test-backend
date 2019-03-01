import mongoose from 'mongoose'

export const initMongoose = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
  })

  const { connection } = mongoose

  connection.on('error', (err) => {
    console.error(err)
    console.log(
      'MongoDB connection error. Please make sure MongoDB is running.',
    )
    process.exit()
  })

  connection.once('open', () => {
    console.log('MongoDB connected')
  })
}
