const {
    newAuthor,
    findAuthor,
    updateAuthor,
    eraseAuthor
} = require("./resolver/authorResolver");

module.exports = {
    createAuthor: async (req,res)=>{
        const author = await newAuthor(req.body);
        if(author){
            res.status(201).send(author);
        }else{
            res.status(400).send({ message: "¡Lo sentimos! ha ocrrido un error"});
        }
    },
    getAuthor: async (req,res)=>{
        const author = await findAuthor(req.params.authorId);
        if(author){
            res.status(200).send(author);
        }else{
            res.status(404).send({ message: "¡Lo sentimos! el autor no existe"})
        }
    },
    modifyAuthor: async (req,res)=>{
        const author = await updateAuthor(req.params.authorid, req.body);
        if(author){
            res.status(200).send(author);
        }else{
            res.status(404).send({ message: "¡Lo sentimos! ha ocurrido un error"})
        }
    },
    deleteAuthor: async(req,res)=>{
        const author = await eraseAuthor(req.params.authorid);
        if(video){
            res.status(200).send({ message: "El autor ha sido eliminado"});
        }else{
            res.status(404).send({ message: "¡Lo sentimos! el autor no existe"})
        }
    }


}