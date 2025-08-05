import Component from './Component.js';
import HeaderComponent from './HeaderComponent/HeaderComponent.js';
import BannerComponent from './BannerComponent/BannerComponent.js';
import MainComponent from './MainComponent/MainComponent.js';
import CardComponent from './CardComponent/CardComponent.js';
import ElementsComponent from './ElementsComponent/ElementsComponent.js';
import ButtonComponent from './ButtonComponent/ButtonComponent.js';
import CatalogComponent from './CatalogComponent/CatalogComponent.js';
import ContactComponent from './ContactComponent/ContactComponent.js';


(function initAppComponent(){
	// ...
	console.log('init app component: DONE');
})();

function createHeaderComponent(domParent, config, server){
	if(!config.enabled) return false;

	const header = new HeaderComponent(
		{
			id: 'header-0',
			domParent: domParent,
		},
		{
			buts: config.buts, 
			logoSrc: config.logoSrc,
			buttonTitle: config.buttonTitle,
		}
	);
	//console.log('loaded header', header);
	//header.hide();
	//header.show();
	return header;
}

function createBannerComponent(domParent, config, server){
	if(!config.enabled) return false;
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

function createMainComponent(domParent, config, server){
	if(!config.enabled) return false;

	const main = new MainComponent(
		{
			id: 'main-0',
			domParent: domParent,
		},
		{
			elementsData: config.elementsData,
		} 
	);
}

function createAdminComponent(domParent, config, server){
	if(!config.enabled) return false;

	// TODO: rewrite req sending: 
	// instead of using texts separate reqs object in config
	config.elementsData[1].texts.forEach(function(el,i){
		const req = el.id;
		server.send({
			url: req,
			data: null,
			method: 'GET',

			resType: 'json',
			resHandler: function(res){ 
				let info = JSON.stringify(res.data);
				document.getElementById(req).innerHTML += ': ' + info;
			}
		});
	});

	const adminMain = new MainComponent(
		{
			id: 'admin-0',
			domParent: domParent,
		},
		{
			elementsData: config.elementsData,
		}
	);
	// adminMain.hide();
	// adminMain.show();
}

function createCatalogComponent(domParent, config, server){
	if(!config.enabled) return false;

	const reqs = [
		{
			title: 'ГЛОНАСС',
			url: 'getCatalog&name=taho_catalog_glonass',
			active: true,
		},
		{
			title: 'КАМЕРЫ',
			url: 'getCatalog&name=taho_catalog_cameras',
			active: false,
		}
	];

	// TODO: loader info: "Загрузка каталога..."
	let readyNum = 0;
	let readyFlag = false;

	reqs.forEach(function(req,i){
		server.send({
			url: req.url,
			data: null,
			method: 'GET',
			resType: 'json',

			resHandler: function(res){
				if(!res.data) {
					config.catalogsData.push({
						title: req.title,
						active: req.active,
						elementsData:[],
					});
					readyNum++;
					return;
				};
				const elementsData = [];
				res.data.forEach(function(resEl,j){
					elementsData.push({
						id: j,
						titles: [],
						titlesGroupId: 'catalogElementTitles',
						texts: [],
						classes: ['catalogElement'],
						components: [
							{
							 id: 'TODO',
							 data: new CardComponent(
								 {
									id: 'el-card-'+j,
									domParent: null,
								 },
								 {
									imgId: null,
									imgSrc: resEl.src_preview,
									titleId: null,
									title: resEl.name,
									priceId: null,
									price: resEl.price,
									butId: null,
									callbacks: {
										hideContact: config.callbacks.hideContact,
										showContact: config.callbacks.showContact,
									},
								 }
							 )
							},
						],
					}); 

				});
				config.catalogsData.push({
					title: req.title,
					active: req.active,
					elementsData: elementsData,
				});
				readyNum++;
			}
		});
	});
	
	// TODO: LoaderComponent???
	const domLoader = document.createElement('div')
	domLoader.innerHTML = '<b>Идет загрузка каталога. Пожалуйста подождите...</b>';
	domParent.appendChild(domLoader);

	const checker = setInterval(function(){
		if(readyNum == reqs.length){
			clearInterval(checker);
			new CatalogComponent(
				{
					id: 'catalog-0',
					domParent: domParent,
				},
				{
					config: config
				}
			);
			domLoader.remove();
		};
	}, 300);
}

function createContactComponent(domParent, config, server){
	if(!config.enabled) return false;

	const contact = new ContactComponent(
		{
			id: config.id,
			domParent: domParent,
			server: server,
		},
		{
		}
	);
	contact.hide();
	delete config.id;
	config.data = contact;
}


export default function AppComponent(props){
	/* props: {id, config, domParent, {components}} */

	createHeaderComponent(
		props.config.domApp,
		props.config.components.header,
		props.config.server
	);
	createBannerComponent(
		props.config.domApp,
		props.config.components.banner,
		props.config.server
	);
	createMainComponent(
		props.config.domApp,
		props.config.components.main,
		props.config.server
	);
	createAdminComponent(
		props.config.domApp,
		props.config.components.admin,
		props.config.server
	);
	createCatalogComponent(
		props.config.domApp,
		props.config.components.catalog,
		props.config.server
	);
	createContactComponent(
		props.config.domApp,
		props.config.components.contact,
		props.config.server
	);

	return new Component({
		id: props.id,
		domParent: props.domParent,
		domSelf: props.config.domApp,
	});

}
