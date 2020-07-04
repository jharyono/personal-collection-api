const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

// This configuration for production
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
});

// This configuration for development
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: 0,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.book = require("./book.model.js")(sequelize, Sequelize);
db.movie = require("./movie.model.js")(sequelize, Sequelize);
db.game = require("./game.model.js")(sequelize, Sequelize);
db.music = require("./music.model.js")(sequelize, Sequelize);

module.exports = db;
