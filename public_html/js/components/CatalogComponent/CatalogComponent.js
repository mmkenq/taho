import Component from '../Component.js';
import MainComponent from '../MainComponent/MainComponent.js';

(function initCatalogComponent(){
	// ...
	console.log('init catalog component: DONE');
})();

export default function CatalogComponent(props, data){
	/* props: {id, domParent} 
		data: {} 
	*/
	const domSelf = document.createElement('div');
	domSelf.setAttribute('class', 'appCatalog');

	const domNav = document.createElement('div'); 
	data.config.catalogsData.forEach(function(catalog, i){
		const catalogMain = new MainComponent(
			{
				id: 'catalog-main-'+i,
				domParent: domSelf,
			},
			{
				elementsData: catalog.elementsData,
			}
		);
		if(!catalog.active) catalogMain.hide();

		// TODO: other workaround
		catalogMain.domSelf.classList.remove('appMain');
		catalogMain.domSelf.classList.add('appCatalogMain');

		const domNavEl = document.createElement('div');
		domNavEl.innerHTML = catalog.title;
		domNavEl.addEventListener('click', function(){
			data.config.catalogs.forEach(function(c,j){
				c.hide();
			});

			catalogMain.show();
		});
		const navEl = new Component({
			id: 'navEl-'+i,
			domSelf: domNavEl,
			domParent: domNav
		});

		data.config.catalogs.push(catalogMain);
	});
	delete data.config.catalogsData;

	const nav = new Component({
		id: 'catalog-nav-0',
		domSelf: domNav,
		domParent: domSelf
	});
	nav.domSelf.classList.add('appCatalogNav');

	return new Component({
		id: props.id,
		domParent: props.domParent,
		domSelf: domSelf,
	});
}
