import Component from './Component.js';
import HeaderComponent from './HeaderComponent/HeaderComponent.js';

export default function AppComponent(props){
	/* props: {id, config, parent} */
	const server = props.config.server;
	// TODO:
	//this.RENDER = props.config.RENDER;
	//this.DARK_THEME = props.config.DARK_THEME;

	const itself = document.createElement('div');
	
	server.sendReq('getCatalog&name=taho_catalog', 
		'json',
		function(res){ console.log('check resp:', res); }
	);


	const interval = setInterval(function(){
		//if(!canvasData.isReady) return;
		try{
			//const canvasComponent = new CanvasComponent(canvasData);
			console.log("created components");
		}
		catch (e){ console.log(e) }
		finally { clearInterval(interval) }
	}, 1000);

	return new Component({
		id: props.id,
		parent: props.parent,
		itself: itself
	});
}
