import Config from './handlers/Config/ConfigHandler.js';		 
import AppComponent from './components/AppComponent.js';

document.addEventListener("DOMContentLoaded", function(ev){

	// NOTE: the 'config' parameter
	// recieved by the server
	//
	// TODO: Path to the config file
	// TODO: ability changing config on the fly
	const appConfig = new Config(config);

	const app = new AppComponent({
		id: "app-0",
		config: appConfig,
		domParent: document.getElementsByTagName('body')[0],
	});

	//console.log('loaded app component', app);
	//app.hide();
	//app.show();

});

