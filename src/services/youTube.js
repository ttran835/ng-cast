angular.module('video-player')
  .service('youTube', function($http) {
  // TODO
    this.search = (query, callback) => {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: YOUTUBE_API_KEY,
          part: 'snippet',
          type: 'video',
          maxResults: '5',
          q: 'cats',
          videoEmbeddable: true
        }
      })
        .then( function(data) {
          console.log(data);
          if (callback) {
            callback(data.items);
          }
        }).catch ( function(data) {
          console.log('FAILED', data);
        });
    };
  });
