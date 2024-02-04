import Component from '../Component.js';

(function initCardComponent(){
	// ...
	console.log('init card component: DONE');
})();

export default function CardComponent(props, data){
	/* props: {id, domParent} 
		data: {  imgId, imgSrc, 
				 titleId, title,
				 priceId, price,
				 butId
			  } 
	*/

	const domSelf = document.createElement('div');
	domSelf.setAttribute('class', 'appCard');

	const domWrapper = document.createElement('div');
	domWrapper.setAttribute('class', 'appCardWrapper');
	
	const domImg = document.createElement('img');
	if(data.imgId) domImg.id = data.imgId;
	domImg.src = data.imgSrc;
	domImg.setAttribute('class', 'appCardPreview');

	const domTitle = document.createElement('div');
	if(data.titleId) domTitle.id = data.titleId;
	domTitle.innerHTML = data.title;

	const domPrice = document.createElement('div');
	if(data.priceId) domPrice.id = data.priceId;
	domPrice.innerHTML = data.price;
	domPrice.innerHTML += ' р.';

	const domBut = document.createElement('button');
	if(data.butId) domBut.id = data.butId;
	domBut.innerHTML = 'Оставить заявку';
	domBut.addEventListener('click', function(){
		data.callbacks.showContact();
	});

	domWrapper.appendChild(domImg);
	domWrapper.appendChild(domTitle);
	domWrapper.appendChild(domPrice);
	domWrapper.appendChild(domBut);
	domSelf.appendChild(domWrapper);

	return new Component({
		id: props.id,
		domParent: props.domParent,
		domSelf: domSelf,
	});
}
