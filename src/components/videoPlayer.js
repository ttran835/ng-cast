angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      currentVideo: '<',
      // changeVideo: '<'
    },
    templateUrl: '/src/templates/videoPlayer.html'
  });
