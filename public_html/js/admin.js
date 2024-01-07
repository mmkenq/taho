import Config from './handlers/Config/ConfigHandler.js';		 
import ServerHandler from './handlers/Server/ServerHandler.js';
import AdminComponent from './components/AdminComponent/AdminComponent.js';

document.addEventListener("DOMContentLoaded", function(ev){

	const config = new Config({
		server: new ServerHandler({
			serverURL: "http://localhost:3000",
		}),	

		// NOT implemented (TODO)
		RENDER: true,
		DARK_THEME: true,
	});

	const admin = new AdminComponent({
		id: "admin-app-0",
		config: config,
		domParent: document.getElementsByTagName('body')[0],
		components: {
			header: true,
			banner: true,
			main: true,
		},
	});
	//console.log('loaded admin', admin);
	//admin.hide();
	//admin.show();

});
