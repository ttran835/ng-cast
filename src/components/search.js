angular.module('video-player')

  .component('search', {

    bindings: {
      searchVids: '<'
    },

    controller: 'search',
    templateUrl: 'src/templates/search.html'
  })
  
  .controller('search', function () {
    this.click = () => {
      this.searchVids(this.searchInput);
      this.searchInput = '';
    };

    this.liveSearch = () => {
      this.searchVids(this.searchInput);
    };
  });
