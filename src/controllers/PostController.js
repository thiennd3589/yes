import Post from "../models/post";
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
      const posts = await Post.findAll();
      return res.json(posts);
    } catch (err) {
      handleCatchedError(res, err.message);
    }
  }
}

export default new PostController();
