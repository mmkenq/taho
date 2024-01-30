import Component from '../Component.js';
import MainComponent from '../MainComponent/MainComponent.js';

(function initCardComponent(){
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
	data.config.navList.forEach(function(el,i){
		const domNavEl = document.createElement('div');
		domNavEl.innerHTML = el.title;
		const navEl = new Component({
			id: 'navEl-'+i,
			domSelf: domNavEl,
			domParent: domNav
		});
	});

	const nav = new Component({
		id: 'catalog-nav-0',
		domSelf: domNav,
		domParent: domSelf
	});
	nav.domSelf.classList.add('appCatalogNav');

	const catalogMain = new MainComponent(
		{
			id: 'catalog-main-0',
			domParent: domSelf,
		},
		{
			elementsData: data.config.elementsData,
		}
	);

	// TODO: other workaround
	catalogMain.domSelf.classList.remove('appMain');
	catalogMain.domSelf.classList.add('appCatalogMain');


	return new Component({
		id: props.id,
		domParent: props.domParent,
		domSelf: domSelf,
	});
}
