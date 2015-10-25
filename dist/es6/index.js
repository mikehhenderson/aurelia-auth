export {AuthService} from './authService';
export {AuthorizeStep} from './authorizeStep';
export {AuthHttpClientConfig} from './app.httpClient.config';
import {BaseConfig} from './baseConfig';


export function configure(aurelia, configCallback){
	aurelia.globalResources('./authFilter');

	var baseConfig = aurelia.container.get(BaseConfig);
	if(configCallback !== undefined && typeof(configCallback) === 'function')
	{
		configCallback(baseConfig);
	}
};

