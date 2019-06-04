const {
  newVideo,
  findVideo,
  findVideos,
  findOnlineVideos,
  findOfflineVideos,
  updateVideo,
  offlineVideo,
  onlineVideo
} = require("./resolver/videoResolver");

module.exports = {
  createVideo: async (req, res) => {
    const video = await newVideo(req.body);
    video
      ? res.status(201).send(video)
      : res.status(400).send({ message: "¡Lo sentimos! ha ocurrido un error" });
  },
  getVideos: async (req, res) => {
    const videos = await findVideos();
    videos
      ? res.status(200).send(videos)
      : res
          .status(404)
          .send({ message: "¡Lo sentimos! no se han encontrado videos" });
  },
  getOnlineVideos: async (req, res) => {
    const videos = await findOnlineVideos();
    videos
      ? res.status(200).send(videos)
      : res
          .status(404)
          .send({ message: "¡Lo sentimos! no se han encontrado videos" });
  },
  getOfflineVideos: async (req, res) => {
    const videos = await findOfflineVideos();
    videos
      ? res.status(200).send(videos)
      : res
          .status(404)
          .send({ message: "¡Lo sentimos! no se han encontrado videos" });
  },
  getVideo: async (req, res) => {
    const video = await findVideo(req.params.videoid);
    video
      ? res.status(200).send(video)
      : res.status(404).send({ message: "¡Lo sentimos! el video no existe" });
  },
  modifyVideo: async (req, res) => {
    const video = await updateVideo(req.params.videoid, req.body);
    video
      ? res.status(200).send(video)
      : res.status(404).send({ message: "¡Lo sentimos! ha ocurrido un error" });
  },
  deleteVideo: async (req, res) => {
    const video = await offlineVideo(req.params.videoid);
    video
      ? res.status(200).send({ message: "El video ha sido eliminado" })
      : res.status(404).send({ message: "¡Lo sentimos! el video no existe" });
  },
  turnOnVideo: async (req, res) => {
    const video = await onlineVideo(req.params.videoid);
    video
      ? res.status(200).send({ message: "El video está activo" })
      : res.status(404).send({ message: "¡Lo sentimos! el video no existe" });
  }
};
