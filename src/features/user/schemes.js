export const profileScheme = {
  properties: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string' },
    phone: { type: 'string' },
  },
}

export const createProfileScheme = {
  ...profileScheme,
  required: ['firstName', 'lastName', 'email', 'phone'],
  additionalProperties: false,
}
