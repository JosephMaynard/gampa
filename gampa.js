var track = {

	tid: 'UA-44687118-28',

	url: 'https://creative.mobileembrace.com/test/analytics.php?',
	cid: (new Date).getTime() + Math.floor(1e8 * Math.random()),
	dh: (window.location.host != '' ? encodeURIComponent(window.location.host) : 'not_set'),
	dp: (window.location.pathname != '' ? encodeURIComponent(window.location.pathname) : 'not_set'),
	dt: (document.title != '' ? encodeURIComponent(document.title) : 'not_set'),

	loadPixel: function(pixelURL){
		var pixel = new Image();
		pixel.src = pixelURL + '&z=' + ((new Date).getTime()).toString(36) + Math.floor(1e8 * Math.random()).toString(36);
	},

	pageview: function(){
		this.loadPixel(this.url + 't=pageview&tid=' + this.tid + '&cid=' + this.cid + '&dh=' + this.dh + '&dp=' + this.dp + '&dt=' + this.dt);
		// return this.url + 't=pageview&tid=' + this.tid + '&cid=' + this.cid + '&dh=' + this.dh + '&dp=' + this.dp + '&dt=' + this.dt;
	},

	event(category, action){
		this.loadPixel(this.url + 't=event&tid=' + this.tid + '&cid=' + this.cid + '&ec=' + category + '&ea=' + action);
		// return this.url + 't=event&tid=' + this.tid + '&cid=' + this.cid + '&ec=' + category + '&ea=' + action;

	}

}

// https://creative.mobileembrace.com/test/analytics.php?t=pageview&tid=UA-44687118-28&cid=1471487561962&dp=%2Fhome