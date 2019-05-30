const { Video } = require("../../models/Video");

module.exports = {
  newVideo: video => {
    return new Promise((resolver, reject) => {
      const {
        thumbnail,
        title,
        category,
        description,
        author,
        book,
        video_url
      } = video;
      const newVideo = Video({
        thumbnail,
        title,
        category,
        description,
        author,
        book,
        video_url
      });
      newVideo.save((err, video) => {
        err ? reject(new Error(false)) : resolver(video);
      });
    });
  },
  findVideos: () => {
    return new Promise((resolve, reject) => {
      Video.find()
        .populate("author", "book")
        .exec()
        .then(videos => {
          return resolve(videos);
        })
        .catch(err => {
          return reject(err);
        });
    });
  },
  findOnlineVideos: () => {
    return new Promise((resolve, reject) => {
      Video.find({ is_online: true })
        .populate("author", "book")
        .exec()
        .then(videos => {
          return resolve(videos);
        })
        .catch(err => {
          return reject(err);
        });
    });
  },
  findOfflineVideos: () => {
    return new Promise((resolve, reject) => {
      Video.find({ is_online: false })
        .populate("author", "book")
        .exec()
        .then(videos => {
          return resolve(videos);
        })
        .catch(err => {
          return reject(err);
        });
    });
  },
  findVideo: videoId => {
    return new Promise((resolve, reject) => {
      Video.findById(videoId)
        .populate("author", "book")
        .exec()
        .then(video => {
          return resolve(video);
        })
        .catch(err => {
          return reject(err);
        });
    });
  },
  updateVideo: (videoId, newVideo) => {
    return new Promise((resolve, reject) => {
      Video.findByIdAndUpdate(videoId, { $set: newVideo })
        .exec()
        .then(video => {
          return resolve(video);
        })
        .catch(err => {
          return reject(err);
        });
    });
  },
  offlineVideo: videoId => {
    return new Promise((resolve, reject) => {
      Video.findByIdAndUpdate(videoId, { $set: { is_online: false } })
        .exec()
        .then(video => {
          return resolve(video);
        })
        .catch(err => {
          return reject(err);
        });
    });
  },
  onlineVideo: videoId => {
    return new Promise((resolve, reject) => {
      Video.findByIdAndUpdate(videoId, { $set: { is_online: true } })
        .exec()
        .then(video => {
          return resolve(video);
        })
        .catch(err => {
          return reject(err);
        });
    });
  }
};
