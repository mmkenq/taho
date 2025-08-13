import Component from '../Component.js';
import ButtonComponent from '../ButtonComponent/ButtonComponent.js';
import CardComponent from '../CardComponent/CardComponent.js';

(function initContactComponent() {
    // ...
    console.log('init contact component: DONE');
})();

export default function ContactComponent(props) {
    /* props: {id, domParent} */

    const domSelf = document.createElement('div');
    domSelf.setAttribute('class', 'appContact');

    const contact = new Component({
        id: props.id,
        domParent: props.domParent,
        domSelf: domSelf,
    });

    props.config.tabsData.forEach(function (t, ti) {
        const domTab = document.createElement('div');
        domTab.setAttribute('class', 'appContactWrapper');
        const tab = new Component({
            id: t.id,
            domParent: domSelf,
            domSelf: domTab,
        });
        tab.hide();

        t.cards.forEach(function (c, i) {
            const card = new CardComponent({
                id: null,
                domParent: domTab,
                classes: 'contactCard centrElement',
                type: c.type,
                icon: c.icon,
                title: c.title,
            });
        });

        const inpWrapper = new Component({
            id: null,
            domParent: domTab,
            domSelf: document.createElement('div'),
        })
        inpWrapper.domSelf.setAttribute('class', 'centrElement defaultWidthElement contactFields')
        t.inputs.forEach(function (i, ii) {
            const inp = new Component({
                id: null,
                domParent: inpWrapper.domSelf,
                domSelf: document.createElement('input'),
            })
            for (let attr in i) {
                inp.domSelf.setAttribute(attr, i[attr]);
            }
            i.domSelf = inp.domSelf;
        });

        t.labels.forEach(function (l, li) {
            const domLabel = document.createElement('label');
            domLabel.setAttribute('for', 'policyCheck');
            domLabel.innerHTML = l.innerHTML;
            const label = new Component({
                id: null,
                domParent: inpWrapper.domSelf,
                domSelf: domLabel,
            });
        });

        const domButWrapper = document.createElement('div');
        const butWrapper = new Component({
            id: null,
            domParent: domTab,
            domSelf: domButWrapper,
        });

        const close = new ButtonComponent({
            id: null,
            domParent: domButWrapper,
            server: props.server,
            type: 'callback2',
            text: 'Закрыть',
            classes: 'appButton',
            funcs: [
                () => props.config.callbacks.hideContact(ti)
            ],
        });

        const send = new ButtonComponent({
            id: null,
            domParent: domButWrapper,
            server: props.server,
            type: 'callback2',
            text: 'Отправить',
            classes: 'appButton',
            funcs: [
                function () {
                    send.hide();
                    loadStatus.show();
                    let data = '';
                    t.inputs.forEach(function (i, ii) {
                        switch (i.type) {
                            case 'text':
                            case 'number':
                            case 'tel':
                            case 'email':
                                data += '&' + i.name + '=' + i.domSelf.value;
                                break;
                            case 'checkbox':
                                data += '&' + i.name + '=' + i.domSelf.checked;
                                break;
                            default:
                                break;
                        }
                    });
                    props.server.send({
                        url: t.method,
                        data: data,
                        method: 'POST',

                        resType: 'json',
                        resHandler: function (res) {
                            // TODO: CHECK FOR RESPONSE
                            console.log(res);

                            loadStatus.hide();
                            send.show();
                            alert(
                                'Спасибо за заявку! Наши специалисты свяжутся с вами.',
                            );
                            //contact.hide();
                        },
                    });
                },
            ],
        });

        const domLoadStatus = document.createElement('div');
        domLoadStatus.innerHTML = 'ОТПРАВКА...';
        const loadStatus = new Component({
            id: null,
            domParent: domButWrapper,
            domSelf: domLoadStatus,
        });
        loadStatus.hide();

        props.config.tabs.push(tab);
    });

    delete props.config.tabsData;

    return contact;
}
