const { Book } = require("../../models/Book");

module.exports = {
    newBook: (book)=>{
        return new Promise((resolver,reject)=>{
            const {
                title,
                authors,
                isbn,
                published_year,
                publisher
            } = book;
            const newBook = Book({
                title,
                authors,
                isbn,
                published_year,
                publisher
            });
            newBook.save((err,video)=>{
                if(err){
                    reject(new Error(false));
                }else{
                    resolver(video);
                }
            });
        });
    },
    findBooks: ()=>{
        return new Promise((resolve,reject)=>{
            Book.find()
            .exec()
            .then((videos)=>{
                return resolve(videos);
            })
            .catch((err)=>{
                return reject(err);
            })
        })
    },
    findBook: (bookId)=>{
        return new Promise((resolve,reject)=>{
            Book.findById(bookId)
            .exec()
            .then((book)=>{
                return resolve(book);
            })
            .catch((err)=>{
                return reject(err);
            })
        })
    },
    updateBook: (bookId)=>{
        return new Promise((resolve,reject)=>{
            Book.findByIdAndUpdate(bookId, { $set: newBook}, { new: true})
            .exec()
            .then((book)=>{
                return resolve(book);
            })
            .catch((err)=>{
                return reject(err);
            })
        })
    },
    eraseBook: (bookId)=>{
        return new Promise((resolve,reject)=>{
            Book.findByIdAndUpdate(bookId, { $set: { is_online:false } }, { new:true })
            .exec()
            .then((book)=>{
                return resolve(book);
            })
            .catch((err)=>{
                return reject(err);
            })
        })
    }

}