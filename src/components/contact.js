accApp.component('contact', {

  bindings: {},

  controller: function($http, $timeout) {
  	this.formName = '';
  	this.formEmail = '';
  	this.formMessage = '';
  	this.success = false;
  	this.failure = false;
  	this.onSubmit = function(contactForm) {
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
			// contactForm.formSubmitButton.blur();
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
				// contactForm.formSubmitButton.disabled = true;
				// contactForm.formSubmitButton.blur();
  			$timeout(() => { 
				this.failure = false;
				// contactForm.formSubmitButton.disabled = false;
  			}, 1500);
  		});
  	}
  },

  templateUrl: 'src/templates/contact.html'

});
