import Component from '../Component.js';
import ButtonComponent from '../ButtonComponent/ButtonComponent.js';
import ElementsComponent from '../ElementsComponent/ElementsComponent.js';

(function initFooterComponent(){
	// ...
	console.log('init footer component: DONE');
})();

export default function FooterComponent(props){
	/* props: {id, domParent} */
	const domSelf = document.createElement('div');
	domSelf.setAttribute('class', 'appFooter');

	const domElementsGroup = document.createElement('div');
	domElementsGroup.setAttribute('class', 'footerElementsGroup');
	props.data.forEach(function(el, i){
		const element = new ElementsComponent({
			id: 'el-'+el.id || 'el-UNDEFINED',
			domParent: domSelf,
			domSelf: domElementsGroup
		},{
                titles:[],
                texts: [{id:null, data: el.text}],
                classes:['centrElement'],
                components:[]});

	});

//    console.log(props)
//    domSelf.innerHTML = props.data.text
//    data: new ButtonComponent({
//      id: '',
//      domParent: domSelf,
//      server: null,
//      type: 'callback2',
//      text: props.data.butText,
//      classes: 'appButton',
//      funcs: [
//            props.data.callbacks.showContact
//      ],
//    })

	return new Component({
		id: props.id,
		domParent: props.domParent,
		domSelf: domSelf,
	});
}
