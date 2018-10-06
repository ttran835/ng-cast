angular.module('video-player')

  .component('app', {
    controller: 'mainController',
    templateUrl: '/src/templates/app.html'

  })

  .controller('mainController', function (youTube) {
    
    this.videos = exampleVideoData; 
    // console.log(this.videos);
    this.currentVideo = exampleVideoData[0];

    this.changeVideo = (index) => {
      this.currentVideo = this.videos[index]; 
    };

    youTube.search();
  });