const inTextarea = document.getElementById('inTextarea');
const outTextarea = document.getElementById('outTextarea');

inTextarea.placeholder = 'Type here...';
const downloadBtn = document.getElementById('downloadBtn');

function getTextAreaContent() {
	let text = inTextarea.value;
	let retext = text.replace(/\d{0,1}\d:\d\d/g, " ");
	outTextarea.value = retext.replace(/\n/g, "");
}

downloadBtn.addEventListener('click', () => {
	const textToSave = outTextarea.value;
	const blob = new Blob([textToSave], { type: 'text/plain' });
	const url = URL.createObjectURL(blob);

	const a = document.createElement('a');
	a.href = url;
	a.download = 'saved_text.txt';
	document.body.appendChild(a);
	a.click();

	document.body.removeChild(a);
	URL.revokeObjectURL(url);
});
