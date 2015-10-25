System.register(['aurelia-http-client', './baseConfig', './authentication', './storage', 'aurelia-framework'], function (_export) {
	'use strict';

	var HttpClient, RequestBuilder, BaseConfig, Authentication, Storage, inject, AuthHttpClientConfig;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaHttpClient) {
			HttpClient = _aureliaHttpClient.HttpClient;
			RequestBuilder = _aureliaHttpClient.RequestBuilder;
		}, function (_baseConfig) {
			BaseConfig = _baseConfig.BaseConfig;
		}, function (_authentication) {
			Authentication = _authentication.Authentication;
		}, function (_storage) {
			Storage = _storage.Storage;
		}, function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}],
		execute: function () {
			AuthHttpClientConfig = (function () {
				function AuthHttpClientConfig(http, auth, storage, config) {
					_classCallCheck(this, _AuthHttpClientConfig);

					this.http = http;
					this.auth = auth;
					this.storage = storage;
					this.config = config.current;
				}

				_createClass(AuthHttpClientConfig, [{
					key: 'configure',
					value: function configure() {
						var _this = this;

						RequestBuilder.addHelper('authTokenHandling', function () {
							return function (client, processor, message) {
								if (_this.auth.isAuthenticated() && _this.config.httpInterceptor) {
									var tokenName = _this.config.tokenPrefix ? _this.config.tokenPrefix + '_' + _this.config.tokenName : _this.config.tokenName;
									var token = _this.storage.get(tokenName);

									if (_this.config.authHeader && _this.config.authToken) {
										token = _this.config.authToken + ' ' + token;
									}

									message.headers.add(_this.config.authHeader, token);
								}
							};
						});

						this.http.configure(function (x) {
							x.authTokenHandling();
							x.withHeader('Accept', 'application/json');
						});
					}
				}]);

				var _AuthHttpClientConfig = AuthHttpClientConfig;
				AuthHttpClientConfig = inject(HttpClient, Authentication, Storage, BaseConfig)(AuthHttpClientConfig) || AuthHttpClientConfig;
				return AuthHttpClientConfig;
			})();

			_export('AuthHttpClientConfig', AuthHttpClientConfig);
		}
	};
});