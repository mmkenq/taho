import Component from '../Component.js';

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

//    contact.tabs = []

	props.config.tabsData.forEach(function(t,ti){

        const domTab = document.createElement('div');
        domTab.setAttribute('class', 'appContactWrapper');
        const tab = new Component({
            id: t.id,
            domParent: domSelf,
            domSelf: domTab,
        });
        tab.hide()

        const domIntro = document.createElement('div');
        domIntro.innerHTML = t.title;
        const intro = new Component({ id: null,
            domParent: domTab,
            domSelf: domIntro,
        });
        
        t.inputs.forEach(function(i,ii){
            const domInp = document.createElement('input');
            for (let attr in i) {
                domInp.setAttribute(attr, i[attr])
            }
            const inp = new Component({
                id: null,
                domParent: domTab,
                domSelf: domInp,
            });
            i.domSelf = domInp
        });

        t.labels.forEach(function(l,li){
            const domLabel = document.createElement('label');
            domLabel.setAttribute('for', 'policyCheck');
            domLabel.innerHTML = l.innerHTML;
            const label = new Component({
                id: null,
                domParent: domTab,
                domSelf: domLabel,
            });
        });

        const domSendBut = document.createElement('button');
        domSendBut.innerHTML = 'Отправить';
        domSendBut.addEventListener('click', function () {
            sendBut.hide();
            loadStatus.show();
            let data = ''
            t.inputs.forEach(function(i,ii){
                switch(i.type){
                    case 'text':
                    case 'number':
                    case 'email':
                        data += '&' + i.name + '=' + i.domSelf.value
                        break;
                    case 'checkbox':
                        data += '&' + i.name + '=' + i.domSelf.checked
                        break;
                    default:
                        break;
                }
            })
            props.server.send({
                url:
                    'sendNotifGNSSAct',
                data: data,
                method: 'POST',

                resType: 'json',
                resHandler: function (res) {
                    // TODO: CHECK FOR RESPONSE
                    console.log(res)

                    loadStatus.hide()
                    sendBut.show()
                    alert('Спасибо за заявку! Наши специалисты свяжутся с вами.')
                    //contact.hide();
                },
            });
        });

        const domCloseBut = document.createElement('button');
        domCloseBut.innerHTML = 'Закрыть';
        domCloseBut.addEventListener('click', function () {
            tab.hide()
            contact.hide();
        });

        const domButWrapper = document.createElement('div');
        const butWrapper = new Component({
            id: null,
            domParent: domTab,
            domSelf: domButWrapper,
        });

        const close = new Component({
            id: null,
            domParent: domButWrapper,
            domSelf: domCloseBut,
        });

        const sendBut = new Component({
            id: null,
            domParent: domButWrapper,
            domSelf: domSendBut,
        });

        const domLoadStatus = document.createElement('div');
        domLoadStatus.innerHTML = 'ОТПРАВКА...';
        const loadStatus = new Component({
            id: null,
            domParent: domButWrapper,
            domSelf: domLoadStatus,
        });
        loadStatus.hide()
        
        props.config.tabs.push(tab)
	});

    delete props.config.tabsData

    return contact;
}
