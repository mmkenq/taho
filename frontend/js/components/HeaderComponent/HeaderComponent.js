import Component from '../Component.js';

(function initHeaderComponent(){
	// ...
	console.log('init header component: DONE');
})();

export default function HeaderComponent(props, data){
	/* props: {id, domParent} */
	/* data: {elements} */
	const domSelf = document.createElement('div');
	domSelf.setAttribute('class', 'appHeader');

	data.buts.forEach(function(el, i){
		const domSelfBut = document.createElement('button');
		domSelfBut.id = el.id;
		domSelfBut.innerHTML = el.title;

		const but = new Component({
			id: el.id,
			domParent: domSelf,
			domSelf: domSelfBut
		});

		domSelfBut.addEventListener('click', function(ev){
			//const url = location.href;
			let prefix = '';
			if(el.anchor) prefix = '#';
			location.href = location.origin + prefix + el.anchor; 
			//history.replaceState(null,null,url);
		});
	});

	return new Component({
		id: props.id,
		domParent: props.domParent,
		domSelf: domSelf,
	});
}
