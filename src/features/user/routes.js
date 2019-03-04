import { validate } from '../../middleware'
import { createRoutes } from '../../lib/routes'
import { createProfileScheme } from './schemes'
import { createProfile } from './actions'

export const userRoutes = createRoutes('/users/profile', router => (
  router.post('/', validate(createProfileScheme), createProfile)
))
