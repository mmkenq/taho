export default function ServerHandler(props){
	/* props: {serverURL} */
	const serverURL = props.serverURL;	

	function resHandler(req, resolve, reject, userHandler){
		const response = req.response;
		resolve(response);
		userHandler(response);
	};

	// Send AJAX Request to server
	// API: userHandler(response)
	this.sendReq = function(method, resType, userHandler){
		return new Promise((resolve, reject) => {
			const url = serverURL + '/api/?method=' + method;
			let req = new XMLHttpRequest();
			req.responseType = resType;
			req.addEventListener('load', resHandler.bind(null, req, resolve, reject, userHandler));
			req.open('GET', url, true);
//			req.setRequestHeader('Content-type', 'text/plain; charset=UTF-8');
			req.send();
		});
	};

	
}
