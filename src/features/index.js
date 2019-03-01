import { userRoutes } from './user'
import { jobRoutes } from './job'

const routes = [userRoutes, jobRoutes]

export const initRoutes = (app) => {
  Object.values(routes).forEach(({ path, router }) => {
    app.use(path, router)
  })
}
