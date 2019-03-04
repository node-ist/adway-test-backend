import mongoose, { Schema } from 'mongoose'

const schedule = {
  FULL_TIME: 'Full-time',
  PART_TIME: 'Part-time',
}

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  tel: {
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
