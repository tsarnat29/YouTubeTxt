const inTextarea = document.getElementById('inTextarea');
const outTextarea = document.getElementById('outTextarea');
// document.getElementById('user-name').textContent = userInput;

function stripHtmlTags(htmlString) {
	const regex = /<[^>]*>/g;
	return htmlString.replace(regex, '');
}

inTextarea.placeholder = 'Type here...';
const downloadBtn = document.getElementById('downloadBtn');

function getTextAreaContent() {
	const text = inTextarea.value;
	const retext = text.replace(/\d{0,1}\d:\d\d/g, " ");
	const safeInput = stripHtmlTags(retext.replace(/\n/g, ""));
	outTextarea.value = safeInput;
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

