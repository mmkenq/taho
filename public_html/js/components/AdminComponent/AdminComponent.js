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
	// TODO:
	//this.RENDER = props.config.RENDER;
	//this.DARK_THEME = props.config.DARK_THEME;

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

	const domSelf = document.createElement('div');
	const main = new MainComponent(
		{
			id: 'main',
			domParent: domSelf,
		},
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
									domParent: domSelf,
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
													domParent: domSelf,
													server: props.config.server,
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
								domParent: domSelf,
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
							id:'getCatalog',
							data: 'req getCatalog()',
						},
						{
							id:'TODO',
							data: 'req getTODO()',
						},
					],
					classes: [],
					components:[],
				}, // ElementsData 2
			],
		}
	);

	return new Component({
		id: props.id,
		domParent: props.domParent,
		domSelf: domSelf
	});
}
