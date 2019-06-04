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
        err ? reject(err) : resolver(video);
      });
    });
  },
  findVideos: () => {
    return new Promise((resolve, reject) => {
      Video.find()
        .populate("author", "book")
        .exec()
        .then(videos => {
          resolve(videos);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  findOnlineVideos: () => {
    return new Promise((resolve, reject) => {
      Video.find({ is_online: true })
        .populate("author", "book")
        .exec()
        .then(videos => {
          resolve(videos);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  findOfflineVideos: () => {
    return new Promise((resolve, reject) => {
      Video.find({ is_online: false })
        .populate("author", "book")
        .exec()
        .then(videos => {
          resolve(videos);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  findVideo: videoId => {
    return new Promise((resolve, reject) => {
      Video.findById(videoId)
        .populate("author", "book")
        .exec()
        .then(video => {
          resolve(video);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  updateVideo: (videoId, newVideo) => {
    return new Promise((resolve, reject) => {
      Video.findByIdAndUpdate(videoId, { $set: newVideo }, { new: true })
        .exec()
        .then(video => {
          resolve(video);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  offlineVideo: videoId => {
    return new Promise((resolve, reject) => {
      Video.findByIdAndUpdate(
        videoId,
        { $set: { is_online: false } },
        { new: true }
      )
        .exec()
        .then(video => {
          resolve(video);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  onlineVideo: videoId => {
    return new Promise((resolve, reject) => {
      Video.findByIdAndUpdate(
        videoId,
        { $set: { is_online: true } },
        { new: true }
      )
        .exec()
        .then(video => {
          resolve(video);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
