import Component from '../Component.js';

(function initButtonComponent(){
	// ...
	console.log('init button component: DONE');
})();

export default function ButtonComponent(props, data){
	/* props: {id, domParent, server} */
	/* data: {TODO} */

	let domSelf;
	let serverRes = null;

	switch(data.type){
		case 'upload':
			domSelf = document.createElement('form');
			domSelf.setAttribute('action', '/uploadCatalog');
			domSelf.setAttribute('method', 'POST');
			domSelf.setAttribute('enctype', 'multipart/form-data');

			const pick = document.createElement('input');
			pick.setAttribute('id', 'catalogFile');
			pick.setAttribute('type', 'file');
			pick.setAttribute('name', 'catalogFileName');

			const submit = document.createElement('input');
			submit.setAttribute('type', 'submit');

			domSelf.appendChild(pick);
			domSelf.appendChild(submit);
		break;
		case 'nav':
			domSelf = document.createElement('button');
			domSelf.setAttribute('class', 'appButton');
			domSelf.innerHTML = data.text || 'TODO_BUT_TEXT';
			domSelf.addEventListener('click', function(){
				props.server.sendReq(
					data.req,
					'json',
					function(res){
						if(location.pathname != '/catalog'){
							location.href = location.origin + '/catalog';
						}
						console.log(res);
					}
				);
			});
		break;
		default: 
			domSelf = document.createElement('button');
			domSelf.setAttribute('class', 'appButton');
			domSelf.innerHTML = data.text || 'TODO_BUT_TEXT';
		break;
	}

	/*
	const interval = setInterval(function(){
		//if(!canvasData.isReady) return;
		try{
			//const canvasComponent = new CanvasComponent(canvasData);
			console.log("created components");
		}
		catch (e){ console.log(e) }
		finally { clearInterval(interval) }

	}, 1000);
	*/


	return new Component({
		id: props.id,
		domParent: props.domParent,
		domSelf: domSelf,
	});
}
