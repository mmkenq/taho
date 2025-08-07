import Component from '../Component.js';
//import CardComponent from '../CardComponent/CardComponent.js';

(function initSliderComponent(){
	// ...
	console.log('init slider component: DONE');
})();

export default function SliderComponent(props){
	/* props: {id, domParent, data} */
	const domSelf = document.createElement('div');
	domSelf.setAttribute('class', 'appSlider');

    props.cards.forEach(function(card, i){
        //console.log(card)
        //console.log(props)
        domSelf.appendChild(card.domSelf)
    })

	const domCardsWrapper = document.createElement('div');
	const butsWrapper = new Component({
		id: null,
		domParent: domSelf,
		domSelf: domCardsWrapper
	});

	return new Component({
		id: props.id,
		domParent: props.domParent,
		domSelf: domSelf,
	});
}
