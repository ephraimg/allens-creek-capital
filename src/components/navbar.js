accApp.component('navbar', {
  bindings: {

  },
  controller: function() {

    this.menuClass = 'closed';
    this.closeMenu = function() {
      this.menuClass = 'closed';
    }
    this.openMenu = function($event) {
      $event.stopPropagation();
      this.menuClass = 'open';
    }

  },
  templateUrl: 'src/templates/navbar.html'
});
