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

	const catalogMain = new MainComponent(
		{
			id: 'catalog-main-0',
			domParent: domSelf,
		},
		{
			elementsData: data.config.elementsData,
		}
	);

	return new Component({
		id: props.id,
		domParent: props.domParent,
		domSelf: domSelf,
	});
}
