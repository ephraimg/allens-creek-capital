accApp.component('contact', {
  bindings: {

  },
  controller: function($http, $timeout) {
  	this.formName = '';
  	this.formEmail = '';
  	this.formMessage = '';
  	this.success = false;
  	this.failure = false;
  	this.onSubmit = function(contactForm) {
  		console.log(contactForm);
  		var config = {
  			method: 'POST',
  			url: '/form',
  			data: {
  				name: this.formName,
  				email: this.formEmail,
  				message: this.formMessage
  			}
  		}
  		$http(config).then(response => { 
  			this.success = true;
  			contactForm.$setValidity(null, false);
  			contactForm.$setPristine();
  			contactForm.$setUntouched();
  			$timeout(() => {
			  	this.formName = '';
			  	this.formEmail = '';
				this.formMessage = '';
  				this.success = false;
  			}, 1500);
  		}, error => {
  			this.failure = true;
  			$timeout(() => { 
  				this.failure = false 
  			}, 1500);
  		});
  	}
  },
  templateUrl: 'src/templates/contact.html'
});
