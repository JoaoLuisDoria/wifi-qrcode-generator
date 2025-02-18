const img = document.querySelector("img");
const ssid = document.querySelector(".ssid");
const password = document.querySelector(".password");
const printCard = document.querySelector(".printCard");

// updates the qrcode generator
function update() {
	const wifi = `WIFI:T:WPA;S:${ssid.value};P:${password.value};;`;

	img.src = `https://api.qrserver.com/v1/create-qr-code/?size=164x164&data=${wifi}`;
}

// updates the qrcode after releasing a key to type the name or password of said network we want to connect
ssid.addEventListener("keyup", update);

password.addEventListener("keyup", update);

printCard.addEventListener("click", () => {
	window.print();
});

const show_pw_btn = document.querySelector(".togglePSW");
const show_pw_icon = show_pw_btn.querySelector("img");
// create a toggle for the password input
show_pw_btn.addEventListener("click", () => {
	// toggle password type modes
	password.type = password.type === "password" ? "text" : "password";

	// toggle eye images according to password type
	show_pw_icon.src = show_pw_icon.src.includes("open") ? "media/eye_closed.svg" : "media/eye_open.svg";
});
