import mongoose, { Schema } from 'mongoose'
import { schedule } from '../constants'

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    enum: [schedule.FULL_TIME, schedule.PART_TIME],
    required: true,
  },
  benefits: {
    type: [String],
  },
})

export const Job = mongoose.model('Job', schema)
