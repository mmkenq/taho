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
	// req: {url, data, method, resType, resHandler}
	this.send = function(req){
		return new Promise((resolve, reject) => {
			const url = serverURL + '/api/?method=' + req.url
			let xhr = new XMLHttpRequest()
			xhr.responseType = req.resType
			xhr.addEventListener('load', resHandler.bind(null, xhr, resolve, reject, req.resHandler))
			xhr.open(req.method, url, true)
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
			xhr.send(req.data)
		});
	}
	
}
