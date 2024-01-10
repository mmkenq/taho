import Component from '../Component.js';
import ButtonComponent from '../ButtonComponent/ButtonComponent.js';

(function initBannerComponent(){
	// ...
	console.log('init banner component: DONE');
})();

export default function BannerComponent(props, data){
	/* props: {id, domParent} */
	/* data: {} */
	const domSelf = document.createElement('div');
	domSelf.setAttribute('class', 'appBanner');
		

	const domTitlesGroup = document.createElement('div');
	domTitlesGroup.setAttribute('class', 'bannerTitles');
	const titlesGroup  = new Component({
		id: '',
		domParent: domSelf,
		domSelf: domTitlesGroup
	});

	const domH1Title = document.createElement('h1');
	domH1Title.innerHTML =  data.h1Title;
	domTitlesGroup.appendChild(domH1Title);
	
	const domH2Title = document.createElement('h2');
	domH2Title.innerHTML =  data.h2Title;
	domTitlesGroup.appendChild(domH2Title);


	data.buts.forEach(function(el,i){
		const but = new ButtonComponent(
			{
				id: el.id,
				domParent: domSelf
			},
			{
				type: 'nav',
				text: el.title,
				url: el.url
			}
		);
	});

	let bg = new Image();
	bg.src = 'assets/truck-pic.jpg';
	bg.onload = function(){
		domSelf.style.backgroundImage = 'url(' + data.pic + ')';
	}


	return new Component({
		id: props.id,
		domParent: props.domParent,
		domSelf: domSelf,
	});
}
