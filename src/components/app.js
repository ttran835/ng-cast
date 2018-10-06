angular.module('video-player')

  .component('app', {
    controller: 'mainController',
    templateUrl: '/src/templates/app.html'

  })

  .controller('mainController', function (youTube) {
    
    this.listPointer = 0;
    this.allVideos = exampleVideoData;
    this.videos = this.allVideos.slice(this.listPointer,this.listPointer + 5);
    this.currentVideo = this.videos[0];
    

    this.changeVideo = (index, collection) => {
      if (collection) {
        this.videos = collection.slice(0, 5);
        this.allVideos = collection;
      } 
      this.currentVideo = this.videos[index]; 
    };

    this.searchVids = (query) => {
      youTube.search(query, (index, collection) => {
        this.changeVideo(index, collection);
      });
    };

    this.test = (n) => {
      if (n) {
        this.listPointer -= 5;
      } else {
        this.listPointer += 5;
      }
      this.videos = this.allVideos.slice(this.listPointer,this.listPointer + 5);
    };

  });