import Config from './handlers/Config/ConfigHandler.js';		 
import ServerHandler from './handlers/Server/ServerHandler.js';
import AppComponent from './components/AppComponent.js';

document.addEventListener("DOMContentLoaded", function(ev){

	const config = new Config({
		server: new ServerHandler({
			serverURL: "http://localhost:3000",
		}),	

		// NOT implemented (TODO)
		RENDER: true,
		DARK_THEME: true,
	});

	const app = new AppComponent({
		id: "app-0",
		config: config,
		domParent: document.getElementsByTagName('body')[0]
	});
	// console.log('loaded app', app);
	//app.hide();
	//app.show();

});
