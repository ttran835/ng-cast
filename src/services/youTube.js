angular.module('video-player')
  .service('youTube', function($http) {

    this.search = (query, callback) => {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: YOUTUBE_API_KEY,
          part: 'snippet',
          type: 'video',
          maxResults: '15',
          q: query,
          videoEmbeddable: true
        }
      }).then( function(data) {
        console.log(data.data.items);
        if (callback) {
          callback(0, data.data.items);
        }
      }).catch ( function(data) {
        console.log('FAILED', data);
      });
    };
  });
