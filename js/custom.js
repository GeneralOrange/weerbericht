function search_regio() {
	var input, filter, regios, station, h3, i, d, found;
	input = document.getElementById('search_field');
	filter = input.value.toUpperCase();
	regios = document.getElementById('regios');
	station = document.getElementsByClassName('station');
	d = 0;
	found = document.getElementById('found');

	if (filter !== '' || filter !== null){
		for (i = 0; i < station.length; i++) {
			h3 = station[i].getElementsByTagName('h3')[0];
			if (h3.innerHTML.toUpperCase().indexOf(filter) > -1) {
				station[i].style.display = '';
				d++;
			} else {
				station[i].style.display = 'none';
			}
		}
		if (d < 1){
			found.style.color = 'red';
			found.innerHTML = 'Geen Regio\'s gevonden op uw criteria';
		} else {
			found.style.color = 'white';
			found.innerHTML = d+' Regio(\'s) gevonden op uw criteria';
		}
	} 
}

var winddirection = document.getElementsByClassName('winddirection');
var arrow = document.getElementsByClassName('windr');

for (i = 0; i < winddirection.length; i++) {

	switch (winddirection[i].innerHTML){
		case 'NNW':
			arrow[i].className += ' nnw';
			break;
		case 'NW':
			arrow[i].className += ' nw';
			break;
		case 'WNW':
			arrow[i].className += ' wnw';
			break;
		case 'W':
			arrow[i].className += ' w';
			break;
		case 'WZW':
			arrow[i].className += ' wzw';
			break;
		case 'ZW':
			arrow[i].className += ' zw';
			break;
		case 'ZZW':
			arrow[i].className += ' zw';
			break;	
		case 'Z':
			arrow[i].className += ' z';
			break;
		case 'ZZO':
			arrow[i].className += ' zzo';
			break;
		case 'ZO':
			arrow[i].className += ' zo';
			break;
		case 'OZO':
			arrow[i].className += ' ozo';
			break;
		case 'O':
			arrow[i].className += ' o';
			break;
		case 'ONO':
			arrow[i].className += ' ono';
			break;
		case 'NO':
			arrow[i].className += ' no';
			break;
		case 'NNO':
			arrow[i].className += ' nno';
			break;
	}
}

var input = document.getElementById('search_field');
var station = document.getElementsByClassName('station');
var found = document.getElementById('found');

if (input.value === '' || input.value === null){
	found.innerHTML = station.length+' Regio(\'s) gevonden';
}
