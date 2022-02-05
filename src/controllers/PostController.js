import { CATEGORY } from "../helper/category";
import logger from "../helper/logger";
import { POST_STATUS } from "../helper/post-status";
import { handleCatchedError } from "../modules/utils";
import PostService from "../services/bussiness/post.service";

class PostController {
  async createPost(req, res) {
    try {
      const post = await PostService.Add(req?.body, req?.userId);
      return res.json(post);
    } catch (err) {
      handleCatchedError(res, err.message);
    }
  }

  async getAll(req, res) {
    try {
      const typeId = req.params?.typeId;
      let type = typeId;
      if (typeId == CATEGORY.ALL) {
        type = null;
      }
      const posts = await PostService.GetList(type);
      return res.json(posts);
    } catch (err) {
      handleCatchedError(res, err.message);
    }
  }

  async update(req, res) {
    try {
      const post = await PostService.Update(req?.body, req?.userId);
      return res.json(post);
    } catch (err) {
      handleCatchedError(res, err.message);
    }
  }

  async deleteSingle(req, res) {
    const id = req.params.id;
    try {
      await PostService.Delete([id]);
      return res.json();
    } catch (err) {
      handleCatchedError(res, err.message);
    }
  }

  async deleteMulti(req, res) {
    const ids = req.body.ids;
    try {
      await PostService.Delete(ids);
      return res.json();
    } catch (err) {
      handleCatchedError(res, err.message);
    }
  }

  async publish(req, res) {
    const id = req.params.id;
    try {
      await PostService.Publish(id, req?.userId);
      return res.json();
    } catch (err) {
      handleCatchedError(res, err.message);
    }
  }

  async undoPublish(req, res) {
    const id = req.params.id;
    try {
      await PostService.UndoPublished(id);
      return res.json();
    } catch (err) {
      handleCatchedError(res, err.message);
    }
  }

  async getPublished(req, res) {
    try {
      const typeId = req.params?.typeId;
      let type = typeId;
      if (typeId === CATEGORY.ALL) {
        type = null;
      }
      const posts = await PostService.GetList(type, POST_STATUS.PUBLISHED);
      return res.json(posts);
    } catch (err) {
      handleCatchedError(res, err.message);
    }
  }
}

export default new PostController();
