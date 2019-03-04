import { Job } from '../models'

const fixtures = [
  {
    title: 'Front-End Developer - Comviq Join squad',
    description:
      'As a Front-End developer within the Comviq Join squad you will be responsive for building great customer experiences. The squad support new customers',
    tel: 'Tele 2',
    address: 'Sweden',
    schedule: 'Full-time',
    benefits: [
      'We invest in our people',
      'Next gen telecom company',
      'State of the art IT stack',
    ],
  },
]

export const jobSeeder = async () => {
  await Job.insertMany(fixtures)
}
