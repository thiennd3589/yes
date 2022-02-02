import PostController from "../../controllers/PostController";
import UserController from "../../controllers/UserController";
import AuthMiddleware from "../../middlewares/auth";

export default (routes) => {
  routes.use(AuthMiddleware);

  routes.delete("/users/:id", UserController.delete).get("/users", UserController.index).put("/users/:id", UserController.update);
  routes.post("/posts", PostController.createPost).get("/posts", PostController.getAll);
};
/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - User
 *     description: Fetch all user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of user
 * /api/posts:
 *   post:
 *     tags:
 *       - Post
 *     description: Tạo 1 bài viết
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Thông tin bài viết vừa tạo
 */
