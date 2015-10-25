define(['exports', './baseConfig', './authService', './authorizeStep', './app.httpClient.config'], function (exports, _baseConfig, _authService, _authorizeStep, _appHttpClientConfig) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports.configure = configure;
	Object.defineProperty(exports, 'AuthService', {
		enumerable: true,
		get: function get() {
			return _authService.AuthService;
		}
	});
	Object.defineProperty(exports, 'AuthorizeStep', {
		enumerable: true,
		get: function get() {
			return _authorizeStep.AuthorizeStep;
		}
	});
	Object.defineProperty(exports, 'AuthHttpClientConfig', {
		enumerable: true,
		get: function get() {
			return _appHttpClientConfig.AuthHttpClientConfig;
		}
	});

	function configure(aurelia, configCallback) {
		aurelia.globalResources('./authFilter');

		var baseConfig = aurelia.container.get(_baseConfig.BaseConfig);
		if (configCallback !== undefined && typeof configCallback === 'function') {
			configCallback(baseConfig);
		}
	}

	;
});