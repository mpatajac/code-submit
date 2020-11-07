const url = "https://e596d1800c17.ngrok.io"
const api =  `${url}/api`;

function init() {
	$('#alert-success').hide();
	$('#alert-fail').hide();
}

function send() {
	const name = document.getElementById("name").value;
	const title = document.getElementById("title").value;
	const message = document.getElementById("message").value;
	const code = document.getElementById("code-container").value;

	const data = {
		name,
		title,
		message,
		code
	};

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
