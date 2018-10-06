angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      index: '<',
      changeVideo: '<',
      // console: function () {
      //   console.log(this.video)
      // }
    },
    templateUrl: '/src/templates/videoListEntry.html',
    controller: 'videoListCtrl'
  });

