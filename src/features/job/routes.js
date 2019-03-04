import { createRoutes } from '../../lib/routes'
import { getAllJobs } from './actions'

export const jobRoutes = createRoutes('/jobs', router => (
  router.get('/', getAllJobs)
))
