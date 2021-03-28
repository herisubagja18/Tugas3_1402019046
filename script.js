let nama = prompt('Masukan Nama Anda');
let myObj = new Date();
let waktu = myObj.getHours();
var hasil = '';

if (waktu > 6 && waktu < 11) {
	hasil = 'Selamat pagi, ' + nama;
} else if (waktu >= 11 && waktu < 15) {
	hasil = 'Selamat siang, ' + nama;
} else if (waktu >= 15 && waktu < 18) {
	hasil = 'Selamat sore, ' + nama;
} else {
	hasil = 'Selamat malam, ' + nama;
}

document.getElementById('say-hi').innerHTML = hasil;

function silinder() {
	let jariJariSilinder = parseInt(document.getElementById('jari-jari').value);
	let tinggiSilinder = parseInt(document.getElementById('tinggi-silinder').value);
	let regex = new RegExp('^\\d+$');
	const phi = 3.14;

	if (!regex.test(jariJariSilinder) || !regex.test(tinggiSilinder)) {
		alert('Input harus angka!');
		return;
	}
	
	document.getElementById('luas-silinder').innerHTML = Math.round(2 * phi * jariJariSilinder * (jariJariSilinder + tinggiSilinder)) + ' ';
	document.getElementById('volume-silinder').innerHTML = Math.round(phi * jariJariSilinder * jariJariSilinder * tinggiSilinder) + ' ';
}

function kerucut() {
	let jariJariKerucut = parseInt(document.getElementById('jari-jari-kerucut').value);
	let garisPelukis = parseInt(document.getElementById('garis-pelukis').value);
	let tinggiKerucut = parseInt(document.getElementById('tinggi-kerucut').value);
	let regex = new RegExp('^\\d+$');
	const phi = 3.14;
	
	if (!regex.test(jariJariKerucut) || !regex.test(garisPelukis) ||
		!regex.test(tinggiKerucut)) {
		alert('Input harus angka!');
		return;
	}

	document.getElementById('luas-kerucut').innerHTML = Math.round(jariJariKerucut + garisPelukis) * (phi * jariJariKerucut) + ' ';
	document.getElementById('volume-kerucut').innerHTML = Math.round((phi * jariJariKerucut * jariJariKerucut * tinggiKerucut) / 3) + ' ';
}

function bola() {
	let jariJariBola = parseInt(document.getElementById('jari-jari-bola').value);
	let regex = new RegExp('^\\d+$');
	const phi = 3.14;

	if (!regex.test(jariJariBola)) {
		alert('Input harus angka!');
		return;
	}

	document.getElementById('luas-bola').innerHTML = Math(4 * phi * jariJariBola * jariJariBola) + ' ';
	document.getElementById('volume-bola').innerHTML = Math((4 * phi * jariJariBola * jariJariBola * jariJariBola) / 3) + ' ';
}