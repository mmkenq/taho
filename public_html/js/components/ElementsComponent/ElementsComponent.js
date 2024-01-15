import Component from '../Component.js';

(function initElementComponent(){
	// ...
	console.log('init Element component: DONE');
})();

export default function ElementsComponent(props, data){
	/* props: {
		* {id,domParent,domSelf},
		* {
			* [titles],
			* titlesGroupId,
			* [{id,data}],
			* [classes],
			* [{id,data}]
		* }
	* } 
	/* data: {} */
	const domSelf = document.createElement('div');
	domSelf.setAttribute('class', 'appElement');

	data.titles.forEach(function(title, i){
		const t = document.createElement('div');
		t.innerHTML = title.text;
		t.setAttribute('class', 'elTitle');
		return new Component({
			id: '',
			domParent: domSelf,
			domSelf: t
		});
		
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
