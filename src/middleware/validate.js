import Ajv from 'ajv'
import createError from 'http-errors'

export const ajv = new Ajv({
  allErrors: true,
  singleError: true,
})

export const validate = (schema) => {
  const isValid = ajv.compile(schema)

  return (req, res, next) => {
    if (!isValid(req.body)) {
      return next(
        createError(422, {
          errors: isValid.errors,
        }),
      )
    }

    next()
  }
}
