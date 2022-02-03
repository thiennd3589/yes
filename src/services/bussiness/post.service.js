import { Op } from "sequelize";
import { POST_STATUS } from "../../helper/post-status";
import Post from "../../models/post";

const PostService = {
  async Add(dto, userId) {
    const result = await Post.create({
      title: dto?.title,
      slug: dto?.slug,
      summary: dto?.summary,
      content: dto?.content,
      publishedDate: new Date(),
      createdBy: userId,
      updatedBy: userId,
      type: dto.type,
    });
    return result;
  },
  async Update(dto, userId) {
    await Post.update(
      {
        title: dto?.title,
        slug: dto?.slug,
        summary: dto?.summary,
        content: dto?.content,
        updatedBy: userId,
        type: dto.type,
      },
      {
        where: {
          id: dto?.id,
        },
      }
    );
  },
  async Delete(ids) {
    await Post.destroy({
      where: {
        id: {
          [Op.or]: ids,
        },
      },
    });
  },
  async GetList(type, status) {
    const condition = {
      where: {},
    };
    if (type) {
      condition.where.type = type;
    }
    if (status) {
      condition.where.status = status;
    }
    return await Post.findAll(condition);
  },
  async Publish(id, userId) {
    await Post.update(
      {
        status: POST_STATUS.PUBLISHED,
        publishedDate: new Date(),
        publishedBy: userId,
      },
      {
        where: {
          id,
        },
      }
    );
  },
  async UndoPublished(id) {
    await Post.update(
      {
        status: POST_STATUS.CREATED,
        publishedDate: null,
        publishedBy: -1,
      },
      {
        where: {
          id,
        },
      }
    );
  },
};
export default PostService;
