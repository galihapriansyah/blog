import {Sequelize} from "sequelize";

const db = new Sequelize("blog", "galih", "galih123", {
  host: "localhost",
  dialect: "mysql"
});

export default db;