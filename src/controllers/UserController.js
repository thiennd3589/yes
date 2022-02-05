import bcrypt from 'bcrypt';
import User from "../models/User";
import { handleCatchedError } from "../modules/utils";

class UserController {
  async delete(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (user) {
      return user
        .destroy()
        .then(() => res.json({ deleted: true }))
        .catch((err) => handleCatchedError(res, err.message));
    }

    return res.json({
      deleted: false,
      message: "Không xoá được",
    });
  }

  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }

  async store(req, res) {
    const password = req.body?.password;
    const encryptPassword = await bcrypt.hash(password, 8);
    const user = await User.create({ ...req.body, password: encryptPassword }).catch((err) => handleCatchedError(res, err.message, 400));

    return res.json(user);
  }

  async update(req, res) {
    const { id } = req.params;
    await User.update({ ...req.body }, { where: { id } })
      .then((result) => res.json({ updated: true }))
      .catch((err) => handleCatchedError(res, err.message, 400));
  }
}

export default new UserController();
