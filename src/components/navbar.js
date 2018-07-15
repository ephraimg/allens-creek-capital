accApp.component('navbar', {
  bindings: {

  },
  controller: function() {
    this.viewWidth = () => Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    this.menuOpen = this.viewWidth() > 768;
    this.toggleMenu = function() {
        // this.viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        // if (this.viewWidth <= 768) {
            this.menuOpen = !this.menuOpen;
        // }
    };
    this.check = () => this.menuOpen || this.viewWidth() > 768;
  },
  templateUrl: 'src/templates/navbar.html'
});
