import ServerHandler from '../Server/ServerHandler.js';
import ElementsComponent from '../../components/ElementsComponent/ElementsComponent.js';
import CardComponent from '../../components/CardComponent/CardComponent.js';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent.js';

export default function ConfigHandler(props){
	/* props: {server:{serverURL}, RENDER, DARK_THEME} */

	this.domApp = document.createElement('div');

	this.server = new ServerHandler({
		serverURL: "http://localhost:3000",
	});

	this.components =  {
		header: props.headerEnabled ? 
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

			// TODO
			check: 11,
			darkTheme: true,
		} : {buts:[], pic: null, buttonTitle: ''},

		banner: props.bannerEnabled ?
		{
			h1Title: "Глонасс/Видеонаблюдение на все виды транспортных средств",
			h2Title: "Профессиональное обслуживание и установка глонасс / видео",
			buts:
			[
				{
					id: 'TODO_but_catalog_cam_id', 
					title: 'Каталог камер', 
					req: 'getCatalog&name=taho_catalog_cameras',
				},
				{
					id: 'TODO_but_catalog_glonass_id',
					title: 'Каталог устройств глонасс',
					req: 'getCatalog&name=taho_catalog_glonass', 
				},
			],
			// 1920x1080
			pic: '/assets/truck-pic.jpg',
		} : {h1Title:'', h2Title:'', buts: [], pic: ''},

		main: props.mainEnabled ? 
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
							 {
								id: 'glonassElement',
								domParent: this.domApp,
								domSelf: document.createElement('div')
							 },
							 {
								titles:[
								{type:'h3', text:'Глонасс'},
								{type:'h4', text:'Внедрение системы мониторинга'},
							 	],
								 titlesGroupId: 'glonassElementTitles',
								 texts:[
									{
										id:'glonassElementText',
										data:'<h4>Основные функции</h4>-Автоматический учёт загруженности автопарка<br>-Повышение качества использования автопарка<br>'
									},
								],
								classes:[],
								components:[
									{
										id:'TODO',
										data: new CardComponent(
											{
												id:'glonassElementCard',
												domParent: this.domApp,
											},
											{
												imgId: 'glonassElementCardImg',
												imgSrc: 'assets/glonass.png',
												titleId: 'glonassElementCardTitle',
												title: 'Система мониторинга СКАУТ',
												priceId: 'glonassElementCardPrice',
												price: 'Цена по запросу',
												butId: 'glonassElementCardBut',
											}
										)
									}
								]
							 }
						 )
						},
						{id:'',
						 data: new ElementsComponent(
							 {id: 'videoElement',
							  domParent: this.domApp,
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
			] // elementsData
		}: { elementsData: [] }, // main (enabled/disabled) 

		admin: props.adminEnabled ? 
		{
			elementsData: [
				{
					id: 'adminTools',
					titles:[
						{type:'h2', text:'Admin Tools'},
					],
					texts: [],
					classes: [],
					components:[
						{
							id: 'TODO_updCatalogComponent',
							data: new ElementsComponent(
								{
									id: 'updCatalogElement',
									domParent: this.domApp,
									domSelf: document.createElement('div')
								},
								{
									titles:[
										{type:'h3', text:'Загрузка нового каталога'},
									],
									texts:[],
									classes:[],
									components:[
										{
											id: 'TODO',
											data: new ButtonComponent(
												{
													id: '',
													domParent: this.domApp,
													server: this.server,
												},
												{
													type: 'uploadFile',
													text: 'Выбрать файл'
												}
											),
										}
									]
								}
							) // new ElementsComponent
						},
						{
							id: 'TODO_updEmailComponent',
							data: new ElementsComponent(
							 {
								id: 'updEmailElement',
								domParent: this.domApp,
								domSelf: document.createElement('div')},
							 {
								titles:[
								   {type:'h3', text:'Обновление почты'},
								],
								texts:[],
								classes:[],
								components:[]
							 }
							) // new ElementsComponent
						},
					],
				}, // ElementsData 1
			{
				id: 'info',
				titles:[
					{type:'h2', text:'Info'},
				],
				texts: [
					{
						id:'getCatalog&name=taho_catalog_glonass',
						data: 'req getCatalogGlonass()',
					},
					{
						id:'getCatalog&name=taho_catalog_cameras',
						data: 'req getCatalogCameras()',
					},
				],
				classes: [],
				components:[],
			}, // ElementsData 2
		],
		}: { elementsData: [] },

		// TODO:
		catalog: {}
	};

	// TODO:
	this.RENDER = true;
	this.DARK_THEME = true;
}
