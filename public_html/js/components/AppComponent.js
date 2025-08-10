import Component from './Component.js';
import HeaderComponent from './HeaderComponent/HeaderComponent.js';
import BannerComponent from './BannerComponent/BannerComponent.js';
import MainComponent from './MainComponent/MainComponent.js';
import CardComponent from './CardComponent/CardComponent.js';
import ElementsComponent from './ElementsComponent/ElementsComponent.js';
import ButtonComponent from './ButtonComponent/ButtonComponent.js';
import CatalogComponent from './CatalogComponent/CatalogComponent.js';
import ContactComponent from './ContactComponent/ContactComponent.js';
import FooterComponent from './FooterComponent/FooterComponent.js';

(function initAppComponent() {
    // ...
    console.log('init app component: DONE');
})();

function createHeaderComponent(domParent, config, server) {
    if (!config.enabled) return false;

    const header = new HeaderComponent(
        {
            id: 'header-0',
            domParent: domParent,
        },
        {
            buts: config.buts,
            logoSrc: config.logoSrc,
            buttonTitle: config.buttonTitle,
        },
    );
    //console.log('loaded header', header);
    //header.hide();
    //header.show();
    return header;
}

function createFooterComponent(domParent, config, server) {
    if (!config.enabled) return false;

    const footer = new FooterComponent({
        id: 'footer-0',
        domParent: domParent,
        data: config.data,
        callbacks: config.callbacks,
    });
    //footer.hide();
    //footer.show();
    return footer;
}

function createBannerComponent(domParent, config, server) {
    if (!config.enabled) return false;
    const banner = new BannerComponent(
        {
            id: 'banner-0',
            domParent: domParent,
            server: server,
        },
        {
            h1Title: config.h1Title,
            h2Title: config.h2Title,
            buts: config.buts,
            links: config.links,
            pic: config.pic,
        },
    );
    //console.log('loaded banner', banner);
    //banner.hide();
    //banner.show();
    return banner;
}

function createMainComponent(domParent, config, server) {
    if (!config.enabled) return false;

    const main = new MainComponent(
        {
            id: 'main-0',
            domParent: domParent,
        },
        {
            elementsData: config.elementsData,
        },
    );
}

function createAdminComponent(domParent, config, server) {
    if (!config.enabled) return false;

    // TODO: rewrite req sending:
    // instead of using texts separate reqs object in config
    config.elementsData[1].texts.forEach(function (el, i) {
        const req = el.id;
        server.send({
            url: req,
            data: null,
            method: 'GET',

            resType: 'json',
            resHandler: function (res) {
                let info = JSON.stringify(res.data);
                document.getElementById(req).innerHTML += ': ' + info;
            },
        });
    });

    const adminMain = new MainComponent(
        {
            id: 'admin-0',
            domParent: domParent,
        },
        {
            elementsData: config.elementsData,
        },
    );
    // adminMain.hide();
    // adminMain.show();
}

function createCatalogComponent(domParent, config, server) {
    if (!config.enabled) return false;

    const reqs = [
        {
            title: 'ГЛОНАСС',
            name: 'glonass',
            url: 'getCatalog&name=taho_catalog_glonass',
            active: true,
            readyFlag: false,
        },
        {
            title: 'КАМЕРЫ',
            name: 'cameras',
            url: 'getCatalog&name=taho_catalog_cameras',
            active: false,
            readyFlag: false,
        },
    ];

    const domCatalogs = document.createElement('div');
    domCatalogs.id = 'catalogs-0';
    domParent.appendChild(domCatalogs);

    const domLoader = document.createElement('div');
    domLoader.innerHTML =
        '<b>Идет загрузка каталога. Пожалуйста подождите...</b>';
    const loader = new Component({
        id: 'loader-0',
        domParent: domCatalogs,
        domSelf: domLoader,
    });

    const nav = new Component({
        id: 'nav-0',
        domSelf: document.createElement('div'),
        domParent: domCatalogs,
    });
    nav.domSelf.classList.add('appCatalogNav');

    // TODO: loader info: "Загрузка каталога... *readyNum loaded*"
    let readyNum = 0;
    let data = [];
    const elementsData = [];

    reqs.forEach(function (req, i) {
        server.send({
            url: req.url,
            data: null,
            method: 'GET',
            resType: 'json',

            resHandler: function (res) {
                req.readyFlag = true;
                readyNum++;
                console.log('catalogs loaded: ' + readyNum);
                if (!res.data) {
                    req.nodataFlag = true;
                    return;
                }
                data = res.data;
            },
        });
        const checker = setInterval(function () {
            if (req.readyFlag) {
                clearInterval(checker);
                if (!req.nodataFlag) {
                    data.forEach(function (resEl, j) {
                        elementsData.push({
                            id: j,
                            titles: [],
                            titlesGroupId: 'catalogElementTitles',
                            texts: [],
                            classes: ['catalogElement'],
                            components: [
                                {
                                    id: 'TODO',
                                    data: new CardComponent({
                                        id: 'el-card-' + j,
                                        type: 'catalogCard',
                                        classes: 'appCatalogCard',
                                        domParent: null,
                                        imgId: null,
                                        imgSrc: resEl.src_preview,
                                        titleId: null,
                                        title: resEl.name,
                                        priceId: null,
                                        price: resEl.price,
                                        butId: null,
                                        callbacks: {
                                            hideContact:
                                                config.callbacks.hideContact,
                                            showContact:
                                                config.callbacks.showContact,
                                        },
                                    }),
                                },
                            ],
                        });
                    });
                    //          console.log(req.title)
                    loader.hide();
                    const catalog = new CatalogComponent(
                        {
                            id: 'catalog-' + i,
                            domParent: domCatalogs,
                            title: req.title,
                            name: req.name,
                            config: config,
                        },
                        elementsData,
                    );
                    config.catalogs[i].parent = catalog;
                    if (!req.active) catalog.hide();
                }
            }
        }, 300);
        const navEl = new Component({
            id: 'navEl-' + req.name,
            domSelf: document.createElement('div'),
            domParent: nav.domSelf,
        });
        navEl.domSelf.innerHTML = req.title;
        navEl.domSelf.addEventListener('click', function () {
            config.catalogs.forEach((c) => c.parent.hide());
            if (config.catalogs[i]) {
                config.catalogs[i].parent.show();
            } else
                console.log(
                    'error: NO DATA FOR THIS CATALOG (TODO: INFO FOR THAT)',
                );
        });
    });
}

function createGlonassComponent(domParent, config, server) {
    if (!config.enabled) return false;

    const glonassMain = new MainComponent(
        {
            id: 'glonass-0',
            domParent: domParent,
        },
        {
            elementsData: config.elementsData,
        },
    );
    //config.data = glonassMain;
}

function createContactComponent(domParent, config, server) {
    if (!config.enabled) return false;

    const contact = new ContactComponent({
        id: config.id,
        domParent: domParent,
        server: server,
        config: config,
    });

    contact.hide();
    delete config.id;
    config.data = contact;
}

export default function AppComponent(props) {
    /* props: {id, config, domParent, {components}} */

    createHeaderComponent(
        props.config.domApp,
        props.config.components.header,
        props.config.server,
    );
    createBannerComponent(
        props.config.domApp,
        props.config.components.banner,
        props.config.server,
    );
    createMainComponent(
        props.config.domApp,
        props.config.components.main,
        props.config.server,
    );
    createAdminComponent(
        props.config.domApp,
        props.config.components.admin,
        props.config.server,
    );
    createCatalogComponent(
        props.config.domApp,
        props.config.components.catalog,
        props.config.server,
    );
    createContactComponent(
        props.config.domApp,
        props.config.components.contact,
        props.config.server,
    );
    createGlonassComponent(
        props.config.domApp,
        props.config.components.glonass,
        props.config.server,
    );
    createFooterComponent(
        props.config.domApp,
        props.config.components.footer,
        props.config.server,
    );

    return new Component({
        id: props.id,
        domParent: props.domParent,
        domSelf: props.config.domApp,
    });
}
