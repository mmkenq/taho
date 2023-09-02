import Component from './Component.js';
import HeaderComponent from './HeaderComponent/HeaderComponent.js';
import BannerComponent from './BannerComponent/BannerComponent.js';

(function initAppComponent(){
	// ...
	console.log('init app component: DONE');
})();

export default function AppComponent(props){
	/* props: {id, config, domParent} */
	const server = props.config.server;
	// TODO:
	//this.RENDER = props.config.RENDER;
	//this.DARK_THEME = props.config.DARK_THEME;

	const domSelf = document.createElement('div');
	const header = new HeaderComponent(
		{
			id: 'header-0',
			domParent: domSelf
		},
		{
			buts: [
				{id: '', title: 'Главная', anchor: '',  },
				{id: '', title: 'Каталог', anchor: 'catalog' },
				{id: '', title: 'Услуги', anchor: 'services' },
				{id: '', title: 'О нас', anchor: 'about' },
				{id: '', title: 'Контакты', anchor: 'contacts' },
			],
			pic: null,
			buttonTitle: '',
		}
	);
	// console.log('loaded header', header);
	//header.hide();
	//header.show();
	
	const banner = new BannerComponent(
		{
			id: 'banner-0',
			domParent: domSelf
		},
		{
			h1Title: "Глонасс/Видеонаблюдение на все виды транспортных средств",
			h2Title: "Профессиональное обслуживание и установка глонасс / видео",
			buts: [
				{id: '', title: 'Каталог камер', anchor: 'vidCatalog' },
				{id: '', title: 'Каталог устройств глонасс', anchor: 'glonassCatalog' },
			],
		}
	);
	
	server.sendReq('getCatalog&name=taho_catalog', 
		'json',
		function(res){ /*console.log('check resp:', res);*/ }
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
		domParent: props.domParent,
		domSelf: domSelf
	});
}
