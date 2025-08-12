import Component from '../Component.js';
import CardComponent from '../CardComponent/CardComponent.js';

(function initSliderComponent() {
    // ...
    console.log('init slider component: DONE');
})();

export default function SliderComponent(props) {
    /* props: {id, domParent, data} */
    const domSelf = document.createElement('div');
    domSelf.setAttribute('class', 'appSlider-'+props.id);
    if(props.classes) domSelf.classList.add(props.classes);

    const cards = props.cards.map(function(c, i){
        return new CardComponent({
          id: props.id + '-' + c.type + '-' + i,
          domParent: domSelf,
          type: c.type,
          sliderType: props.type,
          icon: c.icon,
          titles: c.titles ? c.titles : [],
        })
    });
    console.log(cards)

    const domCardsWrapper = document.createElement('div');
    const butsWrapper = new Component({
        id: null,
        domParent: domSelf,
        domSelf: domCardsWrapper,
    });

    return new Component({
        id: 'sliderComponent-' + props.id,
        domParent: props.domParent,
        domSelf: domSelf,
    });
}
