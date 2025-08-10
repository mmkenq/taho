import Component from '../Component.js';

(function initLinksComponent() {
    // ...
    console.log('init links component: DONE');
})();

export default function LinksComponent(props) {
    /* props: {id, data}
     */
    const domSelf = document.createElement('div');
    domSelf.id = props.id || 'UNDEFINED_LINKS_COMPONENT';
    domSelf.setAttribute('class', props.classes);

    props.data.links.forEach(function (l, li) {
        const link = new Component({
            id: l.id,
            domParent: domSelf,
            domSelf: document.createElement('a'),
        });
        link.domSelf.href = l.href;
        link.domSelf.innerHTML = l.innerHTML;
        link.domSelf.setAttribute('class', props.data.linksClasses)
        const span = new Component({
            id: l.id,
            domParent: link.domSelf,
            domSelf: document.createElement('span'),
        });
        span.domSelf.innerHTML = l.title
    });

    return new Component({
        id: props.id,
        domParent: props.domParent,
        domSelf: domSelf,
    });
}
