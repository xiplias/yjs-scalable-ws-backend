const config = {
  testing: process.env.JEST_WORKER_ID !== undefined,

  server: {
    port: Number(process.env.PORT) || Number(process.env.SERVER_PORT),
    host: process.env.SERVER_HOST as string
  },

  db: {
    host: process.env.PGHOST as string,
    user: process.env.PGUSER as string,
    name: process.env.PGDATABASE as string,
    password: process.env.PGPASSWORD as string,
    port: Number(process.env.PGPORT as string)
  },

  redis: {
    host: process.env.REDISHOST as string,
    user: process.env.REDISUSER as string,
    password: process.env.REDISPASSWORD as string,
    port: Number(process.env.REDISPORT as string),
    keyPrefix: process.env.REDIS_PREFIX as string
  }
}

export default config;