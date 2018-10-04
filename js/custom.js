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