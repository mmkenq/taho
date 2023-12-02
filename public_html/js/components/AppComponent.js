import Component from './Component.js';
import HeaderComponent from './HeaderComponent/HeaderComponent.js';
import BannerComponent from './BannerComponent/BannerComponent.js';
import MainComponent from './MainComponent/MainComponent.js';
import CardComponent from './CardComponent/CardComponent.js';
import ElementsComponent from './ElementsComponent/ElementsComponent.js'

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
				{id: '', title: 'theme', anchor: 'TODOtheme' },
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

			// 1920x1080
			pic: '/assets/truck-pic.jpg',
		}
	);

	const main = new MainComponent(
		{
			id: 'main-0',
			domParent: domSelf
		},
		{
			elementsData: [
				{
					titles: [
						{type:'h2', text:'Услуги'},
					],
					// TODO: ListItemsComponent
					texts: [],
					classes: [],
					components:[
						{id:'',
						 data: new ElementsComponent(
							 {id: 'glonassElement',
							  domParent: domSelf,
							  domSelf: document.createElement('div')},
							 {titles:[
								{type:'h3', text:'Глонасс'},
								{type:'h4', text:'Внедрение системы мониторинга'},
							 ],
							 titlesGroupId: 'glonassElementTitles',
							 texts:[
								{id:'glonassElementText', data:'<h4>Основные функции</h4>-Автоматический учёт загруженности автопарка<br>-Повышение качества использования автопарка<br>'},
							 ],
							 classes:[],
							 components:[
								 {id:'',
								 data: new CardComponent(
									 {id:'glonassElementCard',
									 domParent:domSelf,
									 },
									 {imgId: 'glonassElementCardImg',
									  imgSrc: 'assets/glonass.png',
									  titleId: 'glonassElementCardTitle',
									  title: 'Система мониторинга СКАУТ',
 									  priceId: 'glonassElementCardPrice',
									  price: 'Цена по запросу',
									  butId: 'glonassElementCardBut',
									 }
								 )
								 }
							 ]}
						 )
						},
						{id:'',
						 data: new ElementsComponent(
							 {id: 'videoElement',
							  domParent: domSelf,
							  domSelf: document.createElement('div')},
							 {titles:[
								{type:'h3', text:'Видеонаблюдение'},
							 ],
							 texts:[],
							 classes:[],
							 components:[]}
						 )
						},
					],
				},
				{
					titles:[
						{type:'h2', text:'О нас'},
					],
					texts: [{id:'', data:'Мы являемся официальным представителем компании FTNet. Лицензия №0006189 Рег. № 16 Н от 26 июля 2018г. Нажмите на кнопку, чтобы выполнить проверку на сайте Минтранса РФ'}],
					classes: [],
					components: [],
				},
				{
					titles:[
						{type:'h2', text:'Контакты'},
					],
					texts: [
						{id: 'contacts1Element', data:'Россия, Удмуртская республика, г. Ижевск, ул. Ленина, д. 146, офис 104'},
						{id: 'contacts2Element', data:'Россия, Респ. Татарстан, Набережные Челны, Мензелинский тракт, 38/1'},
						{id: 'contacts3Element', data:'Россия, Пермский край, г. Чайковский, ул. Советская, д. 1/12, корпус 6'},
					],
					classes: ['contactsElement'],
					components: [],
				},
			]
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
