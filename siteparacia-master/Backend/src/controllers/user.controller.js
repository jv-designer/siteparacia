// constando arquivo de service
const userService = require("../services/user.service.js");
const bcryptjs = require("bcryptjs");

// função que cria um usuário no sistema
const create = async (req, res) => {
  try {
    const { name, username, email, password, status, files, type } = req.body;

    if (!type || !username || !email || !password || !status || !name) {
      return res
        .status(400)
        .send({ message: "Please, submit all the fields required" });
    }

    const user = await userService.createService(req.body);

    if (!user) {
      return res.status(400).send({ message: "Error creating user" });
    }
    if (!files) {
      res.status(201).send({
        message: "user created successfully and don't has files",
        user: {
          id: user._id,
          name: name,
          type: type,
          username: username,
          email: email,
          status: status,
        },
      });
    } else {
      const upperCased = files.toString().toUpperCase().split(",");
      res.status(201).send({
        message: "user created successfully",
        user: {
          id: user._id,
          name: name,
          type: type,
          username: username,
          email: email,
          status: status,
          files: upperCased,
        },
      });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

// função que retorna todas os usuários cadastradas
const getAll = async (req, res) => {
  try {
    const user = await userService.getAllService();

    if (user.length === 0) {
      return res
        .status(400)
        .send({ message: "There are no users saved in the database" });
    }

    res.json(user);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

// função que conta a quantidade de usuários
const countDocuments = async (req, res) => {
  try {
    let result = await userService.countDocumentsService();

    if (result.length === 0) {
      res.status(404).send({ message: error.message });
    }

    res.json({
      documents: result,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// função que autentica um email e senha e retorna um id
const authenticate = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService.User.findOne({ email: email });

    if (!user) {
      return res
        .status(400)
        .send({ message: `Error, user ${email} not found` });
    }

    if (!(await bcryptjs.compare(password, user.password))) {
      return res.status(401).send({ message: `Error: invalid password` });
    } else {
      user.password = "protected by USAC Company";

      res.status(201).json({
        document: {
          id: user._id,
          type: user.type,
        },
      });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};


// função que retorna um usuário especifico
const getOne = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id || id.length < 8) {
      return res.status(400).send({ message: "Invalid submit" });
    }
    const user = await userService.getOne(id);
    res.status(201).send({
      user: {
        username: user.username,
        status: user.status,
        files: user.files,
      },
    });
  } catch (error) {
    return res.status(500).send({ message: "Invalid call" });
  }
};

// função que atualiaza as informações de um usuário especifico
const userUpdate = async (req, res) => {
  try {
    const { files, status } = req.body;
    if (!files || !status) {
      return res
        .status(400)
        .send({ message: "Please, submit all the fields required " });
    }
    const upperCased = req.body.files.toString().toUpperCase().split(",");
    const bodyUpdate = {
      _id: req.body._id,
      files: upperCased,
      status: req.body.status,
    };

    const user = await userService.update(bodyUpdate);

    if (!user) {
      return res.status(400).send({ message: `Error, user not found` });
    }

    res.status(200).send({ message: "Upadate successfully" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

// exportando métodos criados acima
module.exports = {
  create,
  getAll,
  countDocuments,
  authenticate,
  userUpdate,
  getOne,
};
