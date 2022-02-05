import Sequelize from "sequelize";
import { POST_STATUS } from "../helper/post-status";
import db from "../services/database";

module.exports = ((sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      summary: DataTypes.STRING,
      content: DataTypes.STRING,
      slug: DataTypes.STRING,
      title: DataTypes.STRING,
      createdBy: DataTypes.INTEGER,
      updatedBy: DataTypes.STRING,
      status: {
        type: DataTypes.INTEGER,
        defaultValue: POST_STATUS.CREATED,
      },
      publishedDate: DataTypes.DATE,
      publishedBy: DataTypes.STRING,
	  type: DataTypes.INTEGER,
    },
    {}
  );
  return Post;
})(db, Sequelize);
