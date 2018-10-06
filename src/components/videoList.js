angular.module('video-player')

  .component('videoList', {
    bindings: {
      videos: '<',
      changeVideo: '<',
      index: '<',
      test: '<',    
      listPointer: '=',
      allVideos: '<'
    },

    controller: 'page',

    templateUrl: '/src/templates/videoList.html'
  })

  .controller('page', function() {
    this.changePage = (dir) => {
      var n = dir ? 1 : 0;
      this.test(n);
    };

  });
