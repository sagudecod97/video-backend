const { Author } = require("../../models/Author");

module.exports = {
  newAuthor: author => {
    return new Promise((resolve, reject) => {
      const { name, last_name, image_profile, description } = author;
      const newAuthor = Author({
        name,
        last_name,
        image_profile,
        description
      });
      newAuthor.save((err, author) => {
        if (err) {
          reject(err);
        } else {
          resolve(author);
        }
      });
    });
  },
  findAuthor: authorId => {
    return new Promise((resolve, reject) => {
      Author.findById(authorId)
        .exec()
        .then(author => {
          resolve(author);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  updateAuthor: (authorId, newAuthor) => {
    return new Promise((resolve, reject) => {
      Author.findByIdAndUpdate(authorId, { $set: newAuthor }, { new: true })
        .exec()
        .then(author => {
          resolve(author);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  eraseAuthor: authorId => {
    return new Promise((resolve, reject) => {
      Author.findByIdAndUpdate(
        authorId,
        { $set: { is_active: false } },
        { new: true }
      )
        .exec()
        .then(author => {
          resolve(author);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
