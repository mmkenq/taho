import Component from '../Component.js';

(function initButtonComponent(){
	// ...
	console.log('init button component: DONE');
})();

export default function ButtonComponent(props, data){
	/* props: {id, domParent} */
	/* data: {TODO} */

	let domSelf;
	switch(data.type){
		case 'upload':
			domSelf = document.createElement('form');
			domSelf.setAttribute('action', '/uploadCatalog');
			domSelf.setAttribute('method', 'POST');
			domSelf.setAttribute('enctype', 'multipart/form-data');

			const pick = document.createElement('input');
			pick.setAttribute('id', 'catalogFile');
			pick.setAttribute('type', 'file');
			pick.setAttribute('name', 'catalogFileName');

			const submit = document.createElement('input');
			submit.setAttribute('type', 'submit');

			domSelf.appendChild(pick);
			domSelf.appendChild(submit);
		break;
		case 'nav':
			domSelf = document.createElement('button');
			domSelf.setAttribute('class', 'appButton');
			domSelf.innerHTML = data.text || 'TODO_BUT_TEXT';
			domSelf.addEventListener('click', function(){
				location.href = location.origin + data.url;
//				console.log(server);
			});
		break;
		default: 
			domSelf = document.createElement('button');
			domSelf.setAttribute('class', 'appButton');
			domSelf.innerHTML = data.text || 'TODO_BUT_TEXT';
		break;
	}

	return new Component({
		id: props.id,
		domParent: props.domParent,
		domSelf: domSelf,
	});
}
