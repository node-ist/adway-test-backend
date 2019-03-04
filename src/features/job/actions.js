import { JobManager } from './jon-manager'

const jobManager = new JobManager()

export const getAllJobs = async (req, res) => {
  const data = await jobManager.getAll()
  res.json({ data })
}
