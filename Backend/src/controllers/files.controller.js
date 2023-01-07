// constando arquivo de service
const filesService = require('../services/files.service.js');

// função que cria uma categoria no sistema
const create = async (req, res) => {
    try {
        const { name, type, what, applay, size, deadline } = req.body;

        if( !type || !what || !applay || !size || !deadline) {
            return res.status(400).send({ message: 'Please, submit all the fields required' });
        }
        
        const files = await filesService.createService(req.body);

        if(!files) {
            return res.status(400).send({ message: 'Error creating files' });
        }

        res.status(201).send({
            message: 'Files created successfully',
            files: {
                id: files._id,
                name: name,
                type: type,
                what: what, 
                applay: applay,
                size: size, 
                deadline: deadline
            }
        });

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

// função que retorna todas as files cadastradas
const getAll = async (req, res) => {
    try {
        const filess = await filesService.getAllService();

        if(filess.length === 0) {
            return res.status(400).send({ message: 'There are no filess saved in the database'});
        }
        
        res.json(filess);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

// função que conta a quantidade de files
const countDocuments = async (req, res) => {
    try {
        let result = await filesService.countDocumentsService();

        if(result.length === 0) {
            res.status(404).send({ message: error.message });
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
    create,
    getAll,
    countDocuments
}