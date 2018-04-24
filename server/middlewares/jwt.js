const koaJwt = require('koa-jwt');

module.exports = koaJwt({
  secret: 'MonsterCMS', // Should not be hardcoded
});
