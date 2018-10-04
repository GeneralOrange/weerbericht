<!DOCTYPE html>
<head>
	<title>Weerbericht</title>
	<link rel="stylesheet" href="css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
</head>
<body>
	<div class="container">
		<h1>Bekijk het weer in uw regio</h1>
		<input type="input" id="search_field" placeholder="Zoek uw regio..." onkeyup="search_regio()">
		<?php include 'weather.php'; ?>
		<div id="none_found">
			<h1>Niks gevonden op uw criteria...</h1>
		</div>
	</div>
</body>
</html>
<script type="text/javascript" src="./js/custom.js"></script>