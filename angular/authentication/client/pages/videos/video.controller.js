class VideoController {
   constructor() {
      console.log('VideoController has been constructed.');
      this.video = {
         url: ''
      };
   }

   addVideo(video) {
      console.log(video);
   }
}

export default VideoController;
