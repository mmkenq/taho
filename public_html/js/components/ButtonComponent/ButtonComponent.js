import Component from '../Component.js';

(function initButtonComponent(){
	// ...
	console.log('init button component: DONE');
})();

export default function ButtonComponent(props){
	/* props: {id, domParent, server} */

	let domSelf;
	let serverRes = null;

	switch(props.type){
		case 'uploadFile':
			domSelf = document.createElement('div');

			const pick = document.createElement('input');
			pick.setAttribute('id', 'catalogFile');
			pick.setAttribute('type', 'file');
			pick.setAttribute('name', 'catalogFileName');

			const send = document.createElement('button');
			send.innerHTML = 'sendFile';
            console.log(props)
			if(props.classes) send.setAttribute('class', props.classes);
			send.addEventListener('click', function(){
				const formData = new FormData();
				formData.append('fileNo0', pick.files[0]);
				props.server.send(
					{
						url: 'uploadFile',
						data: formData,
						method: 'POST',

						resType:  'json',
						resHandler: function(resUpload){
							// console.log(resUpload);
							props.server.send({
								url: 'updateCatalog',
								data: null,
								method: 'GET',

								resType: 'json',
								resHandler: function(resUpdate){ 
									alert(JSON.stringify(resUpdate));
									// console.log(resUpdate);
								},
							});
						}, 
					}
				);
			});

			domSelf.appendChild(pick);
			domSelf.appendChild(send);
		break;
		case 'getPage':
			domSelf = document.createElement('button');
			domSelf.setAttribute('class', 'appButton');
			domSelf.innerHTML = props.text || 'TODO_BUT_TEXT';
            if(props.ajax){
                domSelf.addEventListener('click', function(){
					props.server.send(
						{
							url: props.req,
							data: null,
							method: 'GET',

							resType: 'json',
							resHandler: function(res){
								//if(location.pathname != '/catalog'){
								//	location.href = location.origin + '/catalog';
								//}
							}
						}
					)
                })
            }
			domSelf.addEventListener('click', function(){
				if(location.pathname != '/' + props.req){
					location.href = location.origin + '/' + props.req;
				}
			});
		break;
		case 'callback2':
			domSelf = document.createElement('button');
			domSelf.innerHTML = props.text || 'TODO_BUT_TEXT';
			if(props.classes) domSelf.setAttribute('class', props.classes);
            if(props.ajax){
                domSelf.addEventListener('click', function(){
                        props.server.send(
                            {
                                url: props.req,
                                data: null,
                                method: 'GET',

                                resType: 'json',
                                resHandler: function(res){}
                            }
                        )
                });
            }
            props.funcs.forEach(function(func, i){
                domSelf.addEventListener('click', func)
            })
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
