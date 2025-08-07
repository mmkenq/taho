import Component from '../Component.js';

(function initCardComponent(){
	// ...
	console.log('init card component: DONE');
})();

export default function CardComponent(props){
	/* props: {id, domParent, data} */

	const domSelf = document.createElement('div');
	domSelf.setAttribute('class', 'appCard');
    domSelf.setAttribute('class', props.classes)

    switch(props.type){
        case 'catalogCard':
            const domWrapper = document.createElement('div');
            domWrapper.setAttribute('class', 'appCatalogCardWrapper');

            const domImg = document.createElement('img');
            if(props.imgId) domImg.id = props.imgId;
            domImg.src = props.imgSrc;
            domImg.setAttribute('class', 'appCatalogCardPreview');

            const domTitle = document.createElement('div');
            if(props.titleId) domTitle.id = props.titleId;
            domTitle.innerHTML = props.title;

            const domPrice = document.createElement('div');
            if(props.priceId) domPrice.id = props.priceId;
            domPrice.innerHTML = props.price;
            domPrice.innerHTML += ' р.';

            const domBut = document.createElement('button');
            domBut.innerHTML = 'Оставить заявку';
            domBut.addEventListener('click', function(){
                props.callbacks.showContact();
            });

            domWrapper.appendChild(domImg);
            domWrapper.appendChild(domTitle);
            domWrapper.appendChild(domPrice);
            domSelf.appendChild(domWrapper);
            const but = new Component({
                id: props.butId,
                domParent: domWrapper,
                domSelf: domBut,
            });
            break;
        case 'sliderCard':
            props.titles.forEach(function(t, i){
                const title = new Component({
                    id: props.id,
                    domParent: domSelf,
                    domSelf: document.createElement('div'),
                });
                title.domSelf.innerHTML = t.text
                title.domSelf.setAttribute('class', t.classes)
            })
            const card = new Component({
                id: props.id,
                domParent: props.domParent,
                domSelf: domSelf,
            });
            //card.title = props.title
            //card.domSelf.innerHTML = card.title
            return card
            break;
        default:
            break;
    }

    return new Component({
        id: props.id,
        domParent: props.domParent,
        domSelf: domSelf,
    });
}
