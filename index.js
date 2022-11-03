window.onload = () => {
	console.log('Click the button')
	document.getElementById('button').onclick = examineEvent
	// This is the right-click event
	document.getElementById('button').oncontextmenu = examineEvent
	document.getElementById('div').onclick = examinePropagatedEvent
}

function examineEvent(eventObject) {
	// This event is the click event on the button object
	
	// Uncomment this to prevent the default right-click behavior
	eventObject.preventDefault()

	console.log('This is what a ClickEvent looks like:')
	console.log(eventObject)
	
	console.log('Let\'s look at a few specific properties')
	console.log('type='+eventObject.type)
	console.log('0 is left-click, 2 is right-click')
	console.log('button='+eventObject.button)
	console.log('target:')
	console.log(eventObject.target)
	
	console.log('time:'+eventObject.timeStamp)
}

function examinePropagatedEvent(eventObject) {
	// This event is the click event but on the div object
	console.log('PropagatedEvent - target:')
	console.log(eventObject.target)
	console.log('PropagatedEvent - currentTarget:')
	console.log(eventObject.currentTarget)
}