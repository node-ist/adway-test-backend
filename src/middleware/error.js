import createError from 'http-errors'

export const errorHandle = [
  // catch 404 and forward to error handler
  (req, res, next) => {
    next(createError(404))
  },

  // global error handler
  // eslint-disable-next-line no-unused-vars
  (error, req, res, next) => {
    res.status(error.status || 500).json({ error })
  },
]
