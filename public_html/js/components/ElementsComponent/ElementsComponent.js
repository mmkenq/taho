import Component from '../Component.js';

(function initElementComponent(){
	// ...
	console.log('init Element component: DONE');
})();

export default function ElementsComponent(props, data){
	/* props: {
		* {id,domParent,domSelf},
		* {titles,texts,classes,components}
	* } 
	/* data: {} */
	const domSelf = document.createElement('div');
//	domSelf.setAttribute('class', 'appElement');
//    console.log(data.classes)

	data.titles.forEach(function(title, i){
		const t = document.createElement('div');
		t.innerHTML = title.text;
		title.classes.forEach(function(c){
			t.classList.add(c);
		});

		return new Component({
            id: title.id ? title.id : '',
			domParent: domSelf,
			domSelf: t
		});
	});

	data.texts.forEach(function(text,i){
		const domT = document.createElement('div');
		domT.innerHTML = text.data;
		if(text.class) domT.setAttribute('class', text.class);
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
