import Component from '../Component.js';

(function initElementComponent(){
	// ...
	console.log('init Element component: DONE');
})();

export default function ElementComponent(props, data){
	const domSelf = document.createElement('div');
	domSelf.setAttribute('class', 'appElement');

	const domElementTitles = document.createElement('div');
	domElementTitles.setAttribute('class', 'elementTitles');

	const titlesGroup  = new Component({
		id: data.titlesGroupId || '',
		domParent: domSelf,
		domSelf: domElementTitles
	});

	data.titles.forEach(function(title,i){
		const h = document.createElement(title.type);
		h.innerHTML = title.text;
		domElementTitles.appendChild(h);
	});

	data.texts.forEach(function(text,i){
		const domT = document.createElement('div');
		domT.innerHTML = text.data;
		domT.setAttribute('class','elementText');
		const t = new Component({
			id: text.id,
			domParent: domSelf,
			domSelf: domT
		});
	});	

	data.classes.forEach(function(cl,i){
		domSelf.classList.add(cl);
	});

	data.components.forEach(function(c,i){
		c.data.domParent = domSelf;
		c.data.updateDOM();
	});

	return new Component({
		id: props.id,
		domParent: props.domParent,
		domSelf: domSelf,
	});
}
