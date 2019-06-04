const {
    newBook,
    findBooks,
    findBook,
    updateBook,
    eraseBook
} = require("./resolver/bookResolver");

module.exports = {
    createBook: async (req,res)=>{
        const book = await newBook(req.body);
        if(book){
            res.status(201).send(book);
        }else{
            res.status(400).send("¡Lo sentimos! ha ocurrido un error")
        }
    },
    getBooks: async (req,res)=>{
        const books = await findBooks();
        if(books){
            res.status(200).send(books);
        }else{
            res.status(404).send("¡Lo sentimos! no se han encontrado videos")      
        }
    },
    getBook: async (req,res)=>{
        const book = await findBook(req.params.bookid);
        if(book){
            res.status(200).send(book);
        }else{
            res.status(404).send("¡Lo sentimos! el libro no existe");
        }
    },
    modifyBook: async (req,res)=>{
        const book = await updateBook(req.params.bookid, req.body);
        if(book){
            res.status(200).send(book);
        }else{
            res.status(404).send("¡Lo sentimos! ha ocurrido un error")
        }
    },
    deleteBook: async (req,res)=>{
        const book = await eraseBook(req.params.bookid);
        if(book){
            res.status(200).send("El libro ha sido eliminado");
        }else{
            res.status(404).send("¡Lo sentimos! el libro no existe")
        }
    }
}