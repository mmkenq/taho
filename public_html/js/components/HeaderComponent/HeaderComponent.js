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

    const logoAndSwitcherWrapper = new Component({
        id: null,
        domParent: domSelf,
        domSelf: document.createElement('div'),
        classes: 'logoAndSwitcherWrapper',
    });

    const logo = new Component({
        id: null,
        domParent: logoAndSwitcherWrapper.domSelf,
        domSelf: document.createElement('img'),
    });
    logo.domSelf.id = 'headerLogo';
    logo.domSelf.src = props.config.logoSrc;

    const domButsWrapper = document.createElement('div');
    //domButsWrapper.id = 'headerButsWrapper';

    function toggleButsWrapper(){
        butsWrapper.domSelf.classList.toggle('headerButsWrapperCollapsed');
    }
    const switcher = new ButtonComponent({
        id: 'headerSwitcher',
        domParent: logoAndSwitcherWrapper.domSelf,
        server: null,
        type: 'callback2',
        text: props.config.menuSVG,
        classes: 'appButton appHeaderSwitcher',
        funcs: [toggleButsWrapper],
    })

    const butsWrapper = new Component({
        id: null,
        domParent: domSelf,
        domSelf: domButsWrapper,
        classes: 'headerButsWrapper',
    })
    if (window.innerWidth < 981) toggleButsWrapper()


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
            if (window.innerWidth < 981) toggleButsWrapper()
        });
    });

    return new Component({
        id: props.id,
        domParent: props.domParent,
        domSelf: domSelf,
    });
}
