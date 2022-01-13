const notes = document.querySelectorAll('.piano .note');
notes.forEach(note => {
	note.addEventListener('click', () => {
		const audio = note.querySelector('audio');
		audio.currentTime = 0;
		audio.play();
	});
});

function playNote(noteId) {
	const note = document.querySelector(`.piano .note[data-note-id="${noteId}"]`);
	note.classList.add('active');
	const audio = document.querySelector(`.piano .note[data-note-id="${noteId}"] audio`);
	audio.currentTime = 0;
	audio.play();
}

function stopNote(noteId) {
	const note = document.querySelector(`.piano .note[data-note-id="${noteId}"]`);
	note.classList.remove('active');
	const audio = document.querySelector(`.piano .note[data-note-id="${noteId}"] audio`);
	audio.stop();
}

document.addEventListener('keydown', function(e) {
	if(e.repeat) return;
	
	const { code } = e;

	switch(code) {
		case "KeyD":
			playNote(1);
			break;
		case "KeyF":
			playNote(3);
			break;
		case "KeyG":
			playNote(5);
			break;
		case "KeyH":
			playNote(6);
			break;
		case "KeyJ":
			playNote(8);
			break;
		case "KeyK":
			playNote(10);
			break;
		case "KeyL":
			playNote(12);
			break;
		case "KeyR":
			playNote(2);
			break;
		case "KeyT":
			playNote(4);
			break;
		case "KeyU":
			playNote(7);
			break;
		case "KeyI":
			playNote(9);
			break;
		case "KeyO":
			playNote(11);
			break;
	}
});

document.addEventListener('keyup', function(e) {
	const { code } = e;

	switch(code) {
		case "KeyD":
			stopNote(1);
			break;
		case "KeyF":
			stopNote(3);
			break;
		case "KeyG":
			stopNote(5);
			break;
		case "KeyH":
			stopNote(6);
			break;
		case "KeyJ":
			stopNote(8);
			break;
		case "KeyK":
			stopNote(10);
			break;
		case "KeyL":
			stopNote(12);
			break;
		case "KeyR":
			stopNote(2);
			break;
		case "KeyT":
			stopNote(4);
			break;
		case "KeyU":
			stopNote(7);
			break;
		case "KeyI":
			stopNote(9);
			break;
		case "KeyO":
			stopNote(11);
			break;
	}
});