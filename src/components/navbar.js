accApp.component('navbar', {
  bindings: {

  },
  controller: function() {
    this.viewWidth = function() {
        var clientWidth = document.documentElement.clientWidth;
        return Math.max(clientWidth, window.innerWidth || 0);
    };
    this.menuOpen = this.viewWidth() > 768;
    this.toggleMenu = function() { this.menuOpen = !this.menuOpen; };
    this.check = function() { return this.menuOpen || this.viewWidth() > 768; };
  },
  templateUrl: 'src/templates/navbar.html'
});
