import Component from '../Component.js';

(function initContactComponent(){
	// ...
	console.log('init contact component: DONE');
})();

export default function ContactComponent(props, data){
	/* props: {id, domParent} 
		data: {} 
	*/

	const domSelf = document.createElement('div');
	domSelf.setAttribute('class', 'appContact');

	const contact = new Component({
		id: props.id,
		domParent: props.domParent,
		domSelf: domSelf,
	});

	const domSelfWrapper = document.createElement('div');
	domSelfWrapper.setAttribute('class', 'appContactWrapper');
	const selfWrapper = new Component({
		id: props.id,
		domParent: domSelf,
		domSelf: domSelfWrapper,
	});

	const domCloseBut = document.createElement('button');
	domCloseBut.innerHTML = 'Закрыть';
	domCloseBut.addEventListener('click', function(){
		contact.hide();
	});
	const close = new Component({
		id: null,
		domParent: domSelfWrapper,
		domSelf: domCloseBut,
	});

	const domNameIn = document.createElement('input');
	domNameIn.setAttribute('placeholder', 'Имя');
	const name = new Component({
		id: null,
		domParent: domSelfWrapper,
		domSelf: domNameIn,
	});

	const domPhoneIn = document.createElement('input');
	domPhoneIn.setAttribute('placeholder', 'Телефон');
	domPhoneIn.setAttribute('type', 'tel');
	domPhoneIn.addEventListener('invalid', function(){
		console.log(domPhoneIn, 'INVALID');
	})
	const phone = new Component({
		id: null,
		domParent: domSelfWrapper,
		domSelf: domPhoneIn,
	});

	const domEmailIn = document.createElement('input');
	domEmailIn.setAttribute('placeholder', 'Email');
	const email = new Component({
		id: null,
		domParent: domSelfWrapper,
		domSelf: domEmailIn,
	});

	const domTextIn = document.createElement('input');
	domTextIn.setAttribute('placeholder', 'Ваше сообщение');
	const text = new Component({
		id: null,
		domParent: domSelfWrapper,
		domSelf: domTextIn,
	});

	const domPolicyCheckIn = document.createElement('input');
	domPolicyCheckIn.setAttribute('type', 'checkbox');
	domPolicyCheckIn.setAttribute('required', '');
	domPolicyCheckIn.setAttribute('checked', '');
	const policyCheck = new Component({
		id: 'policyCheck',
		domParent: domSelfWrapper,
		domSelf: domPolicyCheckIn,
	});

	const domPolicyLabel = document.createElement('label');
	domPolicyLabel.setAttribute('for', 'policyCheck');
	domPolicyLabel.innerHTML = 'Согласен (-на) с политикой конфиденциальности и обработки персональных данных';
	const policyLabel = new Component({
		id: null,
		domParent: domSelfWrapper,
		domSelf: domPolicyLabel,
	});

	const domSendBut = document.createElement('button');
	domSendBut.innerHTML = 'Отправить';
	domSendBut.addEventListener('click', function(){
		props.server.send({
			url: 'sendEmail&name=' + (domNameIn.value || 'Не указан') +
				'&phone=' + (domPhoneIn.value || 'Не указан') +
				'&email=' + (domEmailIn.value || 'Не указан') +
				'&text=' + (domTextIn.value || 'Не указан') + 
				'&policy=' + domPolicyCheckIn.checked,
			data: null,
			method: 'GET',

			resType: 'json',
			resHandler: function(res){ 
				console.log(res);
			}
		});
	});
	const sendBut = new Component({
		id: null,
		domParent: domSelfWrapper,
		domSelf: domSendBut,
	});



	return contact;	
}
