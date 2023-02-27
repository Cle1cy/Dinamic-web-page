const API_URL = 'https://jsonplaceholder.typicode.com/users';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
	if(this.readyState === 4 && this.status === 200){

		const data = JSON.parse(this.response);
		const HTMLResponse = document.querySelector("#UserApi");

		const tpl = data.map(user => `<li>👤 ${user.name} 📧 ${user.email}</li>`);
		HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
	}
}

xhr.addEventListener("load", onRequestHandler);
xhr.open('GET', `${API_URL}/users`);
xhr.send();
