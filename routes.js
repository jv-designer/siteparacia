const routes = require('express').Router();
const multer = require('multer'); // Módulo para aceitar uploads.
const multerConfig = require('./config/multer');

const Post = require('./models/Post')


//Rota para realizar upload e envio dos informaões de arquivos.
routes.post('/posts' , multer(multerConfig).single('file'), async (req, res) =>{
    const {originalname: name, size, key, location: url = ''} = req.file;
    const post = await Post.create({
        name,
        size,
        key,
        url
    });
    return res.json(post);
});

// Listar as informações do arquivos salvos.
routes.get('/posts', async(req, res) =>{
    const posts = await Post.find();
    return res.json(posts);
});

//Deletar arquivos.
routes.delete('/posts/:id', async(req, res) =>{
    const post = await Post.findById(req.params.id);

    await post.remove();
     return res.send();
});






module.exports = routes;