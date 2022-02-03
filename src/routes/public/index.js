import AuthController from "../../controllers/AuthController";
import PostController from "../../controllers/PostController";
import UserController from "../../controllers/UserController";

export default (routes) => {
  routes.post("/authenticate", AuthController.authenticate).post("/users", UserController.store);

  routes.get("/posts/published", PostController.getPublished);
};
/**
 * @swagger
 * definitions:
 *   UserPost:
 *     properties:
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 *       is_active:
 *         type: boolean
 *   AuthPost:
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 */
/**
 * @swagger
 * /api/authenticate:
 *   post:
 *     tags:
 *       - Auth
 *     description: Authenticate user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Model
 *         description: Model
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/AuthPost'
 *     responses:
 *       200:
 *         description: Authenticate user
 */
/**
 * @swagger
 * /api/users:
 *   post:
 *     tags:
 *       - User
 *     description: Create user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/UserPost'
 *     responses:
 *       200:
 *         description: An array of user
 */
