import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;
const Post = db.define("posts", {
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  tags: DataTypes.STRING,
  status: DataTypes.STRING,
  author: DataTypes.STRING
  }, {
  freezeTableName: true,
})

export default Post;

(async()=>{
  await db.sync()
})()
