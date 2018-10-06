angular.module('video-player')

  .component('videoList', {
    bindings: {
      videos: '<',
      changeVideo: '<',
      index: '<'
    },

    templateUrl: '/src/templates/videoList.html'
  });
