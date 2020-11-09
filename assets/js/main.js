const url = "https://a6740663daa4.ngrok.io"
const api =  `${url}/api`;

function init() {
	$('#connection-established').hide();
	$('#no-connection-established').hide();
	
	$('#alert-success').hide();
	$('#alert-fail').hide();

	initialRequest();
}

function initialRequest() {
	$.ajax({
		method: "POST",
		url: `${api}`,
		success: _ => {
			$('#connection-established').show(500);
		},
		error: _ => {
			$('#no-connection-established').show(500);
		}
	});
}


function send() {
	const name = document.getElementById("name");
	const title = document.getElementById("title");
	const message = document.getElementById("message");
	const code = document.getElementById("code-container");

	const data = {
		name: name.value,
		title: title.value,
		message: message.value,
		code: code.value
	};

	if (!isValid(data)) {
		updateValidation('title');
		updateValidation('code-container');
		updateValidation('message');

		return;
	}

	$.ajax({
		method: "POST",
		url: `${api}/send`,
		data: JSON.stringify(data),
		contentType: 'application/json',
		success: _ => {
			$('#alert-success').show(100);
			setTimeout(() => {
				$('#alert-success').hide(100);
			}, 5000);
		},
		error: _ => {
			$('#alert-fail').show(100);
			setTimeout(() => {
				$('#alert-fail').hide(100);
			}, 5000);
		}
	});
}


function isValid(data) {
	return data.title && data.code && data.message;
}

function updateValidation(id) {
	const elem = document.getElementById(id);
	elem.classList.remove("is-valid", "is-invalid");
	elem.classList.add(`is-${elem.value ? "" : "in"}valid`);
}