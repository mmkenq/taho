import Component from '../Component.js';
import MainComponent from '../MainComponent/MainComponent.js';

(function initCatalogComponent() {
    // ...
    console.log('init catalog component: DONE');
})();

export default function CatalogComponent(props, data) {
    /* props: {id, domParent} 
		data: {config} 
	*/

    const catalog = new Component({
        id: props.id,
        domParent: props.domParent,
        domSelf: document.createElement('div'),
    });
    catalog.domSelf.setAttribute('class', 'appCatalog');

    const catalogMain = new MainComponent(
        {
            id: 'catalog-main-' + props.name,
            domParent: catalog.domSelf,
        },
        {
            elementsData: data,
        },
    );
    catalogMain.domSelf.classList.remove('appMain');
    catalogMain.domSelf.classList.add('appCatalogMain');


    props.config.catalogs.push(catalogMain);
//    console.log(props);

    return catalog;
}
