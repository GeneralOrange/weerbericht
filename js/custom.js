function search_regio() {
	var input, filter, regios, station, h3, i, d;
	input = document.getElementById('search_field');
	filter = input.value.toUpperCase();
	regios = document.getElementById('regios');
	station = document.getElementsByClassName('station');
	d = 0;
	none_found = document.getElementById('none_found');

	for (i = 0; i < station.length; i++) {
		h3 = station[i].getElementsByTagName('h3')[0];
		if (h3.innerHTML.toUpperCase().indexOf(filter) > -1) {
			station[i].style.display = '';
		} else {
			station[i].style.display = 'none';
			d++;
			if (d === station.length) {
				none_found.style.display = 'block';
			} else {
				none_found.style.display = 'none';
			}
		}
	}
}

var winddirection = document.getElementsByClassName('winddirection');
var arrow = document.getElementsByClassName('windr');

for (i = 0; i < winddirection.length; i++) {
	console.log(winddirection[i].innerHTML);
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
			arrow[i].className += ' no';
			break;
	}
}