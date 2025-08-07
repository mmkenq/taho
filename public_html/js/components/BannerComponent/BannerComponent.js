import Component from '../Component.js';
import ButtonComponent from '../ButtonComponent/ButtonComponent.js';

(function initBannerComponent(){
	// ...
	console.log('init banner component: DONE');
})();

export default function BannerComponent(props, data){
	/* props: {id, domParent, server} */
	/* data: {TODO} */
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

	const domButsWrapper = document.createElement('div');
	const butsWrapper = new Component({
		id: null,
		domParent: domSelf,
		domSelf: domButsWrapper
	});

	data.buts.forEach(function(el,i){
		const but = new ButtonComponent(
			{
				id: el.id,
				domParent: domButsWrapper,
				server: props.server,
			},
			{
				type: el.type || 'UNTYPED',
				text: el.title,
				req: el.req,
				ajax: el.ajax || null
			}
		);
	});

	const domLinksWrapper = document.createElement('div');
	const linksWrapper = new Component({
		id: null,
		domParent: domSelf,
		domSelf: domLinksWrapper
	});
	data.links.forEach(function(link,i){
        //const domIcon = document.createElement('div');
        //domIcon.href = link.href
        //domIcon.textContent = link.title

        const domLink = document.createElement('a');
        domLink.href = link.href
        domLink.innerHTML = link.innerHTML
		const but = new Component(
			{
				id: link.id,
				domParent: domLinksWrapper,
				domSelf: domLink,
			}
		);
        console.log(but)
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
