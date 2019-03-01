import { Router } from 'express'
import { validate } from '../../middleware'
import { ProfileManager } from './profile-manager'
import { createProfileScheme } from './schemes'

const campaignManager = new ProfileManager()

const createCampaign = async (req, res, next) => {
  try {
    const data = await campaignManager.create(req.body)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

const router = Router()

router.post('/', validate(createProfileScheme), createCampaign)

export const userRoutes = {
  path: '/users/profile',
  router,
}
