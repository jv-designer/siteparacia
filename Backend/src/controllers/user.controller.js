// constando arquivo de service
const userService = require('../services/user.service.js');

// função que retorna todos os user cadastrados
const getAll = async (req, res) => {
    try {
        const user = await userService.getAllService();

        if(user.length === 0) {
            res.status(400).send({ message: 'There are no user registered in the database' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// função que cria um novo user no sistema
const create = async (req, res) => {
    try {
        const { name, username, email, password, status, files} = req.body;

        if(!name || !username || !email || !password || !files || !status) {
            res.status(400).send({ message: 'Please, submit all the fields required!' });
            return;
        }

        const user = await userService.createService(req.body);

        if(!user) {
            res.status(400).send({ message: 'Error creating user' });
            return;
        }

        res.status(201).send({
            message: 'User created successfully',
            user: {
                id: user._id,
                nome: name,
                username: username,
                email: email,
                status: status,
                files: files
            }
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// função que conta a quantidade de user
const countDocuments = async (req, res) => {
    try {
        let result = await userService.countDocumentsService();

        if(result.length === 0) {
            res.status(404).send({ message: 'There are no user in the database' });
        }

        res.json({
            documents: result
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// exportando métodos criados acima
module.exports = {
    getAll,
    create,
    countDocuments
}