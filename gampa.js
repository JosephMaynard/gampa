var gampa = (function(){

	var settings = {

		tid: 'UA-********-**',
		url: 'https://example.com/gampa.php?',

		cid: createUID(),
		dh: (window.location.host != '' ? encodeURIComponent(window.location.host) : 'not_set'),
		dp: (window.location.pathname != '' ? encodeURIComponent(window.location.pathname) : 'not_set'),
		dt: (document.title != '' ? encodeURIComponent(document.title) : 'not_set'),		
	}

	function createUID(){
		return ((new Date).getTime()).toString(36) + Math.floor(1e8 * Math.random()).toString(36);
	}

	function loadPixel(pixelURL){
		var pixel = new Image();
		pixel.src = pixelURL + '&z=' + createUID();
	}

	function pageview(){
		loadPixel(settings.url + 't=pageview&tid=' + settings.tid + '&cid=' + settings.cid + '&dh=' + settings.dh + '&dp=' + settings.dp + '&dt=' + settings.dt);
		// return settings.url + 't=pageview&tid=' + settings.tid + '&cid=' + settings.cid + '&dh=' + settings.dh + '&dp=' + settings.dp + '&dt=' + settings.dt;
	}

	function  event(category, action){
		loadPixel(settings.url + 't=event&tid=' + settings.tid + '&cid=' + settings.cid + '&ec=' + category + '&ea=' + action);
		// return settings.url + 't=event&tid=' + settings.tid + '&cid=' + settings.cid + '&ec=' + category + '&ea=' + action;

	}

	return {
		pageview: pageview,
		event: event
	}

})();