'use strict'

const dbname = process.env.NODE_ENV === 'test' ? 'MonsterCMS_Test' : 'MonsterCMS'

export default {
  app: {
    name: 'MonsterCMS',
    version: '0.0.1'
  },
  database: {
    driver: 'mongo',
    host: 'localhost',
    port: 27017,
    dbname: dbname,
    username: 'admin',
    password: '123456',
    options: {
    }
  },
  server: {
    port: 3000
  },
  static_dir: {
    root: './static',
    options: {}
  },
  session: {
    secretKey: 'something'
  }
}
