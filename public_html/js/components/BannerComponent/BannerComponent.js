import Component from '../Component.js';
import ButtonComponent from '../ButtonComponent/ButtonComponent.js';
import LinksComponent from '../LinksComponent/LinksComponent.js';

(function initBannerComponent() {
    // ...
    console.log('init banner component: DONE');
})();

export default function BannerComponent(props) {
    /* props: {id, domParent, server, config} */
    const domSelf = document.createElement('div');
    domSelf.setAttribute('class', 'appBanner');

    const domTitlesGroup = document.createElement('div');
    domTitlesGroup.setAttribute('class', 'centrElement bannerTitles');
    const titlesGroup = new Component({
        id: '',
        domParent: domSelf,
        domSelf: domTitlesGroup,
    });

    props.config.titles.forEach(function (t) {
        const title = new Component({
            id: t.id || '',
            domParent: domTitlesGroup,
            domSelf: document.createElement(t.type),
        });
        title.domSelf.innerHTML = t.text
        title.domSelf.setAttribute('class', t.classes)
    });

    const domButsWrapper = document.createElement('div');
    const butsWrapper = new Component({
        id: null,
        domParent: domSelf,
        domSelf: domButsWrapper,
    });
    domButsWrapper.setAttribute('class', props.config.butsWrapperClasses);

    props.config.buts.forEach(function (el, i) {
        const but = new ButtonComponent({
            id: el.id,
            domParent: domButsWrapper,
            server: props.server,
            type: 'getPage',
            text: el.title,
            req: el.req,
            ajax: el.ajax || null,
        });
    });

    const domLinksWrapper = document.createElement('div');
    domLinksWrapper.setAttribute('class', 'centrElement');
    const linksWrapper = new Component({
        id: null,
        domParent: domSelf,
        domSelf: domLinksWrapper,
    });

    const links = new LinksComponent({
        id: 'banner-0-links',
        domParent: domLinksWrapper,
        data: props.config.links,
        classes: 'footerFloor',
    });

    //let bg = new Image();
    //bg.src = 'assets/truck-pic.jpg';
    //bg.onload = function () {
    //    domSelf.style.backgroundImage = 'url(' + props.config.pic + ')';
    //};

    return new Component({
        id: props.id,
        domParent: props.domParent,
        domSelf: domSelf,
    });
}
