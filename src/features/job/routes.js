import { Router } from 'express'
import { JobManager } from './jon-manager'

const jobManager = new JobManager()

const getAll = async (req, res) => {
  const data = await jobManager.getAll()
  res.json({ data })
}

const router = Router()

router.get('/', getAll)

export const jobRoutes = {
  path: '/jobs',
  router,
}
