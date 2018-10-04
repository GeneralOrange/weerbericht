<?php
$data = file_get_contents('https://api.buienradar.nl/data/public/2.0/jsonfeed');
$data = json_decode($data, true);
?>
<div>
	<h5><?= $data['buienradar']['copyright']; ?></h5>
	<h6><?= $data['buienradar']['terms']; ?></h6>
</div>
<div id="regios">
<?php
 	foreach($data['actual']['stationmeasurements'] as $station) { ?>
 		<div class="station">
 			<h3><?= $station['regio']; ?></h3>
 			<div class="weather">
 				<img src="<?= $station['iconurl']; ?>">
 				<p><?= $station['weatherdescription']; ?></p>
 			</div>
 			<div class="info">
 				<table>
 					<tr><th>Naam station:</th><td><?= $station['stationname'];?></td></tr>
 					<tr><th>Tijd gemeten:</th><td><?= $station['timestamp'];?></td></tr>
 					<tr><th>Temperatuur:</th><td><?= $station['temperature'];?></td></tr>
 					<tr><th>Windkracht:</th><td><?= $station['windspeed'];?></td></tr>
 					<tr><th>Windkant:</th><td><?= $station['winddirection'];?></td></tr>
 				</table>		
 			</div>
 		</div>
 <?php
	}
?>
</div>