angular
	.module('bc-logo', ['angularLoad'])
	.controller('prmLogoAfterController', [function () {
		var vm = this;
		vm.getIconLink = getIconLink;
		function getIconLink() {
			return vm.parentCtrl.iconLink;
		}
	}])

	.component('prmLogoAfter',{
		bindings: {parentCtrl: '<'},
		controller: 'prmLogoAfterController',
		templateUrl: `primo-explore-bc-logo/html/logo.html`
	});

