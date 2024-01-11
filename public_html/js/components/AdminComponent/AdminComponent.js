import Component from '../Component.js';
import ButtonComponent from '../ButtonComponent/ButtonComponent.js'
import ElementsComponent from '../ElementsComponent/ElementsComponent.js'
import MainComponent from '../MainComponent/MainComponent.js';


(function initAdminComponent(){
	// ...
	console.log('init admin-app component: DONE');
})();

export default function AdminComponent(props){
	/* props: {id, config, domParent} */
	const server = props.config.server;

	const req = 'getCatalog';
	server.send(
		{
			url: req + '&name=taho_catalog_glonass',
			data: null,
			method: 'GET',

			resType: 'json',
			resHandler: function(res){ 
				let info = JSON.stringify(res.data);
				document.getElementById(req).innerHTML += ': ' + info;
			}
		}
	);

}
