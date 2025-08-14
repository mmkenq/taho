import Component from '../Component.js';
import ButtonComponent from '../ButtonComponent/ButtonComponent.js';

(function initHeaderComponent() {
    // ...
    console.log('init header component: DONE');
})();

function initHeaderComponentDone() {
    const el = document.getElementsByClassName('appHeader');
    console.log(el);
}

export default function HeaderComponent(props) {
    /* props: {id, domParent, config} */
    const domSelf = document.createElement('div');
    domSelf.setAttribute('class', props.config.classes);

    const headerMainWrapper = new Component({
        id: null,
        domParent: domSelf,
        domSelf: document.createElement('div'),
        classes: 'headerMainWrapper nobreak',
    });

    const logo = new Component({
        id: null,
        domParent: headerMainWrapper.domSelf,
        domSelf: document.createElement('img'),
    });
    logo.domSelf.id = 'headerLogo';
    logo.domSelf.src = props.config.logoSrc;


    const domButsWrapper = document.createElement('div');
    //domButsWrapper.id = 'headerButsWrapper';

    function toggleButsWrapper(){
        butsWrapper.domSelf.classList.toggle('headerButsWrapperCollapsed');
    }

    const butsWrapper = new Component({
        id: null,
        domParent: headerMainWrapper.domSelf,
        domSelf: domButsWrapper,
        classes: 'headerButsWrapper centrElement',
    })
    if (window.innerWidth < 1180) toggleButsWrapper()


    props.config.buts.forEach(function (el, i) {
        const domSelfBut = document.createElement('button');
        //domSelfBut.id = el.id;
        domSelfBut.innerHTML = el.title;
        domSelfBut.classList.add('headerBut');

        const but = new Component({
            id: el.id,
            domParent: domButsWrapper,
            domSelf: domSelfBut,
        });

        domSelfBut.addEventListener('click', function (ev) {
            //const url = location.href;
            let prefix = '';
            if (el.anchor) prefix = '#';
            location.href = location.origin + prefix + el.anchor;
            //history.replaceState(null,null,url);
            if (window.innerWidth < 1180) toggleButsWrapper()
        });
    });

    const callsWrapper = new Component({
        id: null,
        domParent: headerMainWrapper.domSelf,
        domSelf: document.createElement('div'),
        classes: 'headerCallsWrapper',
    });
    const number = new Component({
        id: null,
        domParent: callsWrapper.domSelf,
        domSelf: document.createElement('a'),
        classes: 'appButton headerPhone',
    });
    number.domSelf.setAttribute('href', 'tel:+' + props.config.phoneNumber)
    number.domSelf.innerHTML = props.config.phoneSVG + props.config.phoneNumber

    const dmUs = new ButtonComponent({
        id: null,
        domParent: callsWrapper.domSelf,
        server: null,
        type: 'callback2',
        text: 'Оставить заявку',
        classes: 'appButton headerDmUs',
        funcs: [props.config.callbacks.showContact],
    })
    const switcher = new ButtonComponent({
        id: null,
        domParent: callsWrapper.domSelf,
        server: null,
        type: 'callback2',
        text: props.config.menuSVG,
        classes: 'appButton headerSwitcher',
        funcs: [toggleButsWrapper],
    })


    return new Component({
        id: props.id,
        domParent: props.domParent,
        domSelf: domSelf,
    });
}
