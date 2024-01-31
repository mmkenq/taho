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
		header: props.componentsEnabled.headerEnabled ? 
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

		banner: props.componentsEnabled.bannerEnabled ?
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

		main: props.componentsEnabled.mainEnabled ? 
		{
			elementsData: [
				{
					id: 'services',
					titles: [
						{
							// type:'h2',
							text:'Услуги'
						},
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
									{
										//type:'h3',
										text:'Глонасс'
									},
									{
										//type:'h4',
										text:'Внедрение системы мониторинга'
									},
							 	],
								 titlesGroupId: 'glonassElementTitles',
								 texts:[
									{
										id:'glonassElementText',
										class: null,
										data:'<h4>Основные функции</h4>-Автоматический учёт загруженности автопарка<br>-Повышение качества использования автопарка<br>',
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
							 {
								 id: 'videoElement',
								 domParent: this.domApp,
								 domSelf: document.createElement('div')
							 },
							 {
								 titles:[
									{
										// type:'h3',
										text:'Видеонаблюдение'
									},
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
						{
							//type:'h2',
							text:'О нас'
						},
					],
					texts: [
						{
							id: '',
							class: null,
							data: 'Мы являемся официальным представителем компании FTNet.\
									Лицензия №0006189 Рег. № 16 Н от 26 июля 2018г.\
									Нажмите на кнопку, чтобы выполнить проверку на сайте Минтранса РФ',
						}
					],
					classes: [],
					components: [],
				},
				{
					id: 'contacts',
					titles:[
						{
							//type:'h2',
							text:'Контакты'
						},
					],
					texts: [
						{
							id: 'contacts1Element',
							class: 'contactElementText',
							data:'Россия, Удмуртская республика, г. Ижевск, ул. Ленина, д. 146, офис 104\
							<div style="position:relative;overflow:hidden;"><a href="https://yandex.com/maps/org/takhograf_ekspert/218381161146/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Тахограф Эксперт</a><a href="https://yandex.com/maps/44/izhevsk/category/auto_accessories/184105286/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Auto accessories in Izhevsk</a><iframe src="https://yandex.com/map-widget/v1/?ll=53.323761%2C56.813366&mode=search&oid=218381161146&ol=biz&utm_source=share&z=11.47" width="100%" height="100%" allowfullscreen="true" style="position:relative;border:none;"></iframe></div>'
						},
						{
							id: 'contacts2Element',
							class: 'contactElementText',
							data:'Россия, Респ. Татарстан, Набережные Челны, Мензелинский тракт, 38/1\
							<div style="position:relative;overflow:hidden;"><a href="https://yandex.com/maps?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Yandex Maps</a><a href="https://yandex.com/maps/236/naberezhnie-chelny/house/menzelinskiy_trakt_38_1/YUsYcgdnTEQBQFtvfXtxcXpkbQ==/?ll=52.611688%2C55.686617&utm_medium=mapframe&utm_source=maps&z=10.57" style="color:#eee;font-size:12px;position:absolute;top:14px;">Yandex Maps</a><iframe src="https://yandex.com/map-widget/v1/?ll=52.611688%2C55.686617&mode=whatshere&whatshere%5Bpoint%5D=52.407516%2C55.700679&whatshere%5Bzoom%5D=17&z=10.57" width="100%" height="100%" allowfullscreen="true" style="position:relative;border:none;"></iframe></div>'
						},
						{
							id: 'contacts3Element',
							class: 'contactElementText',
							data:'Россия, Пермский край, г. Чайковский, ул. Советская, д. 1/12, корпус 6\
							<div style="position:relative;overflow:hidden;"><a href="https://yandex.com/maps/20243/chaikovsky/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Chaikovsky</a><a href="https://yandex.com/maps/20243/chaikovsky/house/sovetskaya_ulitsa_1_12/YU0YdwVjSUQGQFtsfXt2d3phZQ==/?ll=54.150532%2C56.770842&utm_medium=mapframe&utm_source=maps&z=13.73" style="color:#eee;font-size:12px;position:absolute;top:14px;">Yandex Maps</a><iframe src="https://yandex.com/map-widget/v1/?ll=54.150532%2C56.770842&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0MTM5NzM5Mzg2EmLQoNC-0YHRgdC40Y8sINCf0LXRgNC80YHQutC40Lkg0LrRgNCw0LksINCn0LDQudC60L7QstGB0LrQuNC5LCDQodC-0LLQtdGC0YHQutCw0Y8g0YPQu9C40YbQsCwgMS8xMiIKDfd9WEIVQxtjQg%2C%2C&z=13.73" width="100%" height="100%" allowfullscreen="true" style="position:relative;border:none;"></iframe></div>'
						},
					],
					classes: ['contactsElement'],
					components: [],
				},
			] // elementsData
		}: { elementsData: [] }, // main (enabled/disabled) 

		admin: props.componentsEnabled.adminEnabled ? 
		{
			elementsData: [
				{
					id: 'adminTools',
					titles:[
						{
							//type:'h2',
							text:'Admin Tools'
						},
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
										{
											//type:'h3',
											text:'Загрузка нового каталога'
										},
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
								   {
									   // type:'h3',
									   text:'Обновление почты'
								   },
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
					{
						//type:'h2',
						text:'Info'
					},
				],
				texts: [
					{
						id:'getCatalog&name=taho_catalog_glonass',
						class: null,
						data: 'req getCatalogGlonass()',
					},
					{
						id:'getCatalog&name=taho_catalog_cameras',
						class: null,
						data: 'req getCatalogCameras()',
					},
				],
				classes: [],
				components:[],
			}, // ElementsData 2
		],
		}: { elementsData: [] },

		// TODO:
		catalog: props.componentsEnabled.catalogEnabled ? 
		{
			navList: [
				{
					title: 'Камеры',
				},
				{
					title: 'Глонасс',
				}
			],
			
			/* filled with getCatalog() reqs */
			elementsData: [],
		}: { elementsData: [] },
	};

	this.components.header.enabled = props.componentsEnabled.headerEnabled;
	this.components.main.enabled = props.componentsEnabled.mainEnabled;
	this.components.banner.enabled = props.componentsEnabled.bannerEnabled;
	this.components.admin.enabled = props.componentsEnabled.adminEnabled;
	this.components.catalog.enabled = props.componentsEnabled.catalogEnabled;

	// TODO:
	this.RENDER = true;
	this.DARK_THEME = true;

}
