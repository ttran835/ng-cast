angular.module('video-player')

  .component('app', {
    controller: 'mainController',
    templateUrl: '/src/templates/app.html'

  })

  .controller('mainController', function (youTube) {
    
    this.videos = exampleVideoData; 
    this.currentVideo = exampleVideoData[0];

    this.changeVideo = (index, collection) => {
      if (collection) {
        this.videos = collection;
      } 
      this.currentVideo = this.videos[index]; 
    };

    this.searchVids = (query) => {
      youTube.search(query, (index, collection) => {
        this.changeVideo(index, collection);
      });
    };

  });