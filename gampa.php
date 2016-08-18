<?php

	function sendData($data){

		$content = http_build_query($data);
		$content = utf8_encode($content);

		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, 'http://www.google-analytics.com/collect');
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/x-www-form-urlencoded'));
		curl_setopt($ch, CURLOPT_HTTP_VERSION,CURL_HTTP_VERSION_1_1);
		curl_setopt($ch, CURLOPT_POST, TRUE);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $content);
		curl_exec($ch);
		curl_close($ch);
	}

	if (isset($_GET["t"])){

	if(htmlspecialchars($_GET["t"]) == 'pageview'){
		$data = array(
			'v' => '1',
			't' => 'pageview',
			'tid' => htmlspecialchars($_GET["tid"]),
			'cid' => htmlspecialchars($_GET["cid"]),
			'dh' => htmlspecialchars($_GET["dh"]),
			'dp' => htmlspecialchars($_GET["dp"]),
			'dt' => htmlspecialchars($_GET["dt"]),
			'uip' => $_SERVER['REMOTE_ADDR'],
			'ua' => htmlspecialchars($_SERVER['HTTP_USER_AGENT'])
		);


		sendData($data);
	}

	if(htmlspecialchars($_GET["t"]) == 'event'){
		$data = array(
			'v' => '1',
			't' => 'event',
			'tid' => htmlspecialchars($_GET["tid"]),
			'cid' => htmlspecialchars($_GET["cid"]),
			'ec' => htmlspecialchars($_GET["ec"]),
			'ea' => htmlspecialchars($_GET["ea"]),
			'uip' => $_SERVER['REMOTE_ADDR'],
			'ua' => htmlspecialchars($_SERVER['HTTP_USER_AGENT'])
		);
		
		sendData($data);
	}

}



	// Return pixel
	header('Content-Type: image/gif');
	echo "\x47\x49\x46\x38\x37\x61\x1\x0\x1\x0\x80\x0\x0\xfc\x6a\x6c\x0\x0\x0\x2c\x0\x0\x0\x0\x1\x0\x1\x0\x0\x2\x2\x44\x1\x0\x3b";

?>

<!-- 

https://creative.mobileembrace.com/test/analytics.php?t=pageview&tid=UA-44687118-28&cid=1471487561962&dp=%2Fhome

-->