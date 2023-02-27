const API_URL = 'https://jsonplaceholder.typicode.com/users';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
	if(this.readyState === 4 && this.status === 200){
		// 0 = UNSET
		// 1 = OPENED
		// 2 = HEADERS_RECEIVED
		// 3 = LOADING
		// 4 = DONE
		const data = JSON.parse(this.response);
		const HTMLResponse = document.querySelector("#UserApi");

		const tpl = data.map(user => `<li>👤 ${user.name} 📧 ${user.email}</li>`);
		HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
	}





}

xhr.addEventListener("load", onRequestHandler);
xhr.open('GET', `${API_URL}/users`);
xhr.send();

/*const HTMLResponse = document.querySelector("#UserApi");
const ul = document.createElement('ul');

fetch('${API_URL}/users')
.then((response)=> response.json())
.then((users)=>{
	users.forEach(user=>{
		let elem = document.createElement("li");
		elem.appendChild(
			document.createTextNode('👤 ${user.name} 📧 ${user.email}')
		);
		ul.appendChild(elem);
	});
	HTMLResponse.appendChild(ul);
	//const tpl = users.map(user => <li>👤${user.name} 📧${user.email}</li>);
	//HTMLResponse.innerHTML = <ul>${tpl}</ul>;
});*/