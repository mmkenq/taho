import Component from '../Component.js';
import ElementsComponent from '../ElementsComponent/ElementsComponent.js'

(function initMainComponent(){
	// ...
	console.log('init main component: DONE');
})();

export default function MainComponent(props, data){
	const domSelf = document.createElement('div');
	domSelf.setAttribute('class', 'appMain');

	
	const domElementsGroup = document.createElement('div');
	domElementsGroup.setAttribute('class', 'elementsGroup');
	data.elementsData.forEach(function(el, i){
		const element = new ElementsComponent({
			id: 'el-'+i,
			domParent: domSelf,
			domSelf: domElementsGroup
		},el);

	});

	return new Component({
		id: props.id,
		domParent: props.domParent,
		domSelf: domSelf,
	});
}
