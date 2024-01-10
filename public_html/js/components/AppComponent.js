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

function createHeaderComponent(domParent){
	const header = new HeaderComponent(
		{
			id: 'header-0',
			domParent: domParent,
		},
		{
			buts: [
				{id: '', title: 'Главная', anchor: '',  },
				{id: '', title: 'Каталог', anchor: 'el-catalog' },
				{id: '', title: 'Услуги', anchor: 'el-services' },
				{id: '', title: 'О нас', anchor: 'el-about' },
				{id: '', title: 'Контакты', anchor: 'el-contacts' },
				{id: '', title: 'theme', anchor: 'TODOtheme' },
			],
			pic: null,
			buttonTitle: '',
		}
	);
	//console.log('loaded header', header);
	//header.hide();
	//header.show();
	return header;
}

function createBannerComponent(domParent, config, server){
	const banner = new BannerComponent(
		{
			id: 'banner-0',
			domParent: domParent,
			server: server,
		},
		{
			h1Title: config.h1Title,
			h2Title: config.h2Title, 
			buts: config.buts,
			pic: config.pic, 
		}
	);
	//console.log('loaded banner', banner);
	//banner.hide();
	//banner.show();
	return banner;
}

function createMainComponent(domParent){
	const main = new MainComponent(
		{
			id: 'main-0',
			domParent: domParent,
		},
		{
			elementsData: [
				{
					id: 'services',
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
							  domParent: domParent,
							  domSelf: document.createElement('div')},
							 {titles:[
								{type:'h3', text:'Глонасс'},
								{type:'h4', text:'Внедрение системы мониторинга'},
							 ],
							 titlesGroupId: 'glonassElementTitles',
							 texts:[
								{id:'glonassElementText',
								data:'<h4>Основные функции</h4>-Автоматический учёт загруженности автопарка<br>-Повышение качества использования автопарка<br>'
								},
							 ],
							 classes:[],
							 components:[
									 {id:'TODO',
								 data: new CardComponent(
									 {id:'glonassElementCard',
									 domParent: domParent,
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
							  domParent: domParent,
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
					id: 'about',
					titles:[
						{type:'h2', text:'О нас'},
					],
					texts: [{id:'', data:'Мы являемся официальным представителем компании FTNet. Лицензия №0006189 Рег. № 16 Н от 26 июля 2018г. Нажмите на кнопку, чтобы выполнить проверку на сайте Минтранса РФ'}],
					classes: [],
					components: [],
				},
				{
					id: 'contacts',
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
}


export default function AppComponent(props){
	/* props: {id, config, domParent, {components}} */

	const domSelf = document.createElement('div');
	
	Object.keys(props.components).forEach(function(key, i){
		if(props.components[key]){
			switch(key){
				case 'header': createHeaderComponent(
					domSelf,
					props.config.components.header,
					props.config.server
				);
				break;
				case 'banner': createBannerComponent(
					domSelf,
					props.config.components.banner,
					props.config.server
				);
				break;
				case 'main': createMainComponent(
					domSelf,
					props.config.components.main,
					props.config.server
				);
				break;
			}
		}
		else console.log(key, 'component NOT IN USE');
	});

	return new Component({
		id: props.id,
		domParent: props.domParent,
		domSelf: domSelf,
	});

}
