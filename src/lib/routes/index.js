import { Router } from 'express'

export const createRoutes = (path, routerFactory) => {
  const router = routerFactory(Router())

  return { path, router }
}
