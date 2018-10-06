angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      index: '<',
      changeVideo: '<',
    },
    
    templateUrl: '/src/templates/videoListEntry.html'
  });

