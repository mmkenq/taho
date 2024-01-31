export default function Component(props){
	/* props: {id, domParent, domSelf} */

	this.hide = function(){
		props.domSelf.classList.add('hide');
	}
	this.show = function(){
		props.domSelf.classList.remove('hide');
	}
	this.updateDOM = function(){
//		this.domSelf.remove();
		this.domParent.appendChild(this.domSelf);
	}

	if(props.id) props.domSelf.id = props.id;
	if(props.domParent) props.domParent.appendChild(props.domSelf);

	return Object.create(this,
	{
		id: {value:props.id, writable: true, enumerable: true, configurable: true },
		domParent: {value: props.domParent, writable: true, enumerable: true, configurable: true },
		domSelf: {value: props.domSelf, writable: true, enumerable: true, configurable: true },
	});
}
