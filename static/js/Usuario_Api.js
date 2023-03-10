const API_URL = "https://jsonplaceholder.typicode.com";

const xhr = new XMLHttpRequest();

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
  }
  

function onRequestHandler(){
	if(this.readyState === 4 && this.status === 200){
		const data = JSON.parse(this.response);
		const HTMLresponse = document.querySelector("#app_usuarios");
		let tmp, rnd;
		const tpl = [];
		const numUsuarios = data.length;
		for(let i=0; i<2; i++){
			rnd = getRandomInt(numUsuarios);
			if(tmp != 0){
				while(tmp == rnd){
					rnd = getRandomInt(numUsuarios);
				}
			}
			tmp = rnd;
			tpl.push(`<li>${data[rnd].name} 📧 ${data[rnd].email}</li>`);
			
		}
		HTMLresponse.innerHTML = `<ul>${tpl.join('')}</ul>`;	
	}
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/users`);
xhr.send();
