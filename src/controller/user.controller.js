const userService = require("../services/User.service");



const create = async (req,res) => {
    const {name,username,email,password} = req.body;

    if(!name||!username||!email||!password){
        res.status(400).send({
            message: "Todos os campos devem ser prenchidos"
        });
    }

    const user = await userService.create(req.body);

    if(!user){
        return res.status(400).send({message:"Erro ao criar usuário"})
    }

    res.status(201).send({
        message:"Usuário com sucesso!",
        user:{
            name,
            username,
            email
        }
    });

};


module.exports ={create}