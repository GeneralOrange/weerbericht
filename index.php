<!DOCTYPE html>
<head>
	<title>Weerbericht</title>
	<link rel="stylesheet" href="css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
</head>
<body>
	<div class="container">
		<h1>Bekijk het weer in uw regio</h1>
		<input type="input" id="search_field" placeholder="Zoek uw regio..." onkeyup="search_regio()">
		<div>
			<h2 id="found"></h2>
		</div>
		<?php include 'weather.php'; ?>
	</div>
</body>
</html>
<script type="text/javascript" src="./js/custom.js"></script>