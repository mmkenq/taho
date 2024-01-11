import Config from './handlers/Config/ConfigHandler.js';		 
import AppComponent from './components/AppComponent.js';

document.addEventListener("DOMContentLoaded", function(ev){

	const config = new Config(
		{
			headerEnabled: headerEnabled,
			bannerEnabled: bannerEnabled,
			mainEnabled: mainEnabled,
			catalogEnabled: catalogEnabled,
			adminEnabled: adminEnabled,
		// TODO: Path to the config file
		// TODO: ability changing config on the fly
		},
	);

	const app = new AppComponent({
		id: "app-0",
		config: config,
		domParent: document.getElementsByTagName('body')[0],
	});

	//console.log('loaded app component', app);
	//app.hide();
	//app.show();

});

