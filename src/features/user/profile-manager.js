import { Profile } from '../../models'

export class ProfileManager {
  /**
   * @param data
   * @returns {Promise<data>}
   */
  async create(data) {
    return Profile.create(data)
  }
}
