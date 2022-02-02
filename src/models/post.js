import Sequelize from "sequelize";
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
        defaultValue: 1,
      },
      publishedDate: DataTypes.DATE,
      publishedBy: DataTypes.STRING,
    },
    {}
  );
  return Post;
})(db, Sequelize);
