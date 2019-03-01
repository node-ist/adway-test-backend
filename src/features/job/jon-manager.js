import { Job } from '../../models'

export class JobManager {
  /**
   * @returns {Promise<*>}
   */
  async getAll() {
    return Job.find()
  }
}
