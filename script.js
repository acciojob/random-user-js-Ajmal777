const image = document.getElementById('user-img');
const name = document.querySelector('.user-name');
const getUser = document.querySelector('#getUser');
const age = document.getElementById('age');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const details = document.querySelector('.details');
async function getData(){
	try{
		const data = await fetch('https://randomuser.me/api/');
		const parsedData = await data.json();
		return parsedData;
	}
	catch(e){
		console.log(e.message);
	}
}
let user;
getUser.addEventListener('click', async () => {
	user = await getData();
	image.setAttribute('src', user.results[0].picture.large);
	name.innerText = user.results[0].name.first + " " + user.results[0].name.last;
})

age.addEventListener('click', () =>{
	details.innerText = user.results[0].dob.age;
})
email.addEventListener('click', () =>{
	details.innerText = user.results[0].email;
})
phone.addEventListener('click', () =>{
	details.innerText = user.results[0].phone;
})



