import Component from '../Component.js';

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
		const domSelfBut = document.createElement('button');
		domSelfBut.id = el.id;
		domSelfBut.innerHTML = el.title;

		domSelfBut.addEventListener('click', function(ev){
			location.href = location.origin + el.url;
		});

		const but = new Component({
			id: el.id,
			domParent: domSelf,
			domSelf: domSelfBut
		});
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