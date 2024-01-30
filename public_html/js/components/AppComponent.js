import Component from './Component.js';
import HeaderComponent from './HeaderComponent/HeaderComponent.js';
import BannerComponent from './BannerComponent/BannerComponent.js';
import MainComponent from './MainComponent/MainComponent.js';
import CardComponent from './CardComponent/CardComponent.js';
import ElementsComponent from './ElementsComponent/ElementsComponent.js';
import ButtonComponent from './ButtonComponent/ButtonComponent.js';
import CatalogComponent from './CatalogComponent/CatalogComponent.js';


(function initAppComponent(){
	// ...
	console.log('init app component: DONE');
})();

function createHeaderComponent(domParent, config, server){
	if(!config.enabled) return true;

	const header = new HeaderComponent(
		{
			id: 'header-0',
			domParent: domParent,
		},
		{
			buts: config.buts, 
			pic: config.pic,
			buttonTitle: config.buttonTitle,
		}
	);
	//console.log('loaded header', header);
	//header.hide();
	//header.show();
	return header;
}

function createBannerComponent(domParent, config, server){
	if(!config.enabled) return true;

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
	if(!config.enabled) return true;

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
	if(!config.enabled) return true;

	// TODO: rewrite req sending: 
	// instead of using texts separate reqs object in config
	config.elementsData[1].texts.forEach(function(el,i){
		const req = el.id;
		server.send(
			{
				url: req,
				data: null,
				method: 'GET',

				resType: 'json',
				resHandler: function(res){ 
					let info = JSON.stringify(res.data);
					document.getElementById(req).innerHTML += ': ' + info;
				}
			}
		);
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

	const req = 'getCatalog&name=taho_catalog_glonass';
	const elementsData = [];

	// TODO: loader info: "Загрузка каталога..."

	server.send({
			url: req,
			data: null,
			method: 'GET',

			resType: 'json',
			resHandler: function(res){ 
				res.data.forEach(function(resEl,i){
					const el = {
						id: i,
						titles: [],
						titlesGroupId: 'catalogElementTitles',
						texts: [],
						classes: ['catalogElement'],
						components: [
							{
							 id: 'TODO',
							 data: new CardComponent(
								 {
									id: 'el-card-'+i,
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
								 }
							 )
							},
						],
					} 
					elementsData.push(el);
				});
				config.elementsData = elementsData;
				new CatalogComponent(
					{
						id: 'catalog-0',
						domParent: domParent,
					},
					{
						config: config
					}
				);
			}
	}); // server.send({})
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

	return new Component({
		id: props.id,
		domParent: props.domParent,
		domSelf: props.config.domApp,
	});

}
