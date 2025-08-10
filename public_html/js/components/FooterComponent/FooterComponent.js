import Component from '../Component.js';
import ButtonComponent from '../ButtonComponent/ButtonComponent.js';
import ElementsComponent from '../ElementsComponent/ElementsComponent.js';

(function initFooterComponent() {
    // ...
    console.log('init footer component: DONE');
})();

export default function FooterComponent(props) {
    /* props: {id, domParent} */

    const footer = new Component({
        id: props.id,
        domParent: props.domParent,
        domSelf: document.createElement('div'),
    });
    footer.domSelf.setAttribute('class', 'appFooter');


    props.data.forEach(function (el, i) {
        el.domParent = footer.domSelf
        el.updateDOM()
    });

    return footer;
}
