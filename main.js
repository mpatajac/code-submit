const url = "http://e9baee302dcf.ngrok.io"
const api =  `${url}/api`;

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
	}).done((response) => {
			if (response == "ok") {
				console.log("Message sent!");
				setStatusSpan("Message sent!", "green");
			} else {
				console.error("Something went wrong...");
				setStatusSpan("Something went wrong...", "red");
			}
		}
	);
}

function setStatusSpan(text, color) {
	const statusSpan = document.getElementById("statusSpan");
	statusSpan.innerHTML = text;
	statusSpan.style.color = color;
	statusSpan.style.display = "visible";
	setTimeout(() => statusSpan.style.display = "none", 5000);
}