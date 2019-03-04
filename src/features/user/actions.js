import { ProfileManager } from './profile-manager'

const profileManager = new ProfileManager()

export const createProfile = async (req, res, next) => {
  try {
    const data = await profileManager.create(req.body)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}
