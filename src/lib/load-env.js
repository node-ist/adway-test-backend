import path from 'path'
import dotEnv from 'dotenv'

const getEnvFileByEnv = () => {
  switch (process.env.NODE_ENV) {
  case 'production':
    return '.env.production'
  default:
    return '.env'
  }
}

const getEnvPath = () => path.resolve(getEnvFileByEnv())

dotEnv.config({ path: getEnvPath() })
dotEnv.load()
