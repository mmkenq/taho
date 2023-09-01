export default function Component(props){
	/* props: {id, parent, itself} */

	function hide(){
		document.getElementById(props.id).classList.add('hide');
	}
	function show(){
		document.getElementById(props.id).classList.remove('hide');
	}

	props.itself.id = props.id;
	props.parent.appendChild(props.itself);
	return {
		id: props.id,
		parent: props.parent,
		itself: props.itself,
		hide: hide,
		show: show,
	}
}
