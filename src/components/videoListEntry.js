angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      index: '<'
    },
    templateUrl: '/src/templates/videoListEntry.html'
  });
