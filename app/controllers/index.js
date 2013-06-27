function doClickMaps(e) {  
	if(OS_IOS) {
	    Ti.Platform.openURL('maps://maps.google.com/maps?q=440+Bernardo+Ave,+Mountain+View,+CA&hl=en&sll=42.746632,-75.770041&sspn=6.364676,10.305176&oq=44&hnear=440+Bernardo+Ave,+Mountain+View,+Santa+Clara,+California+94043&t=m&z=17');
	} else {
		Ti.Platform.openURL('http://maps.google.com/maps?q=440+Bernardo+Ave,+Mountain+View,+CA&hl=en&sll=42.746632,-75.770041&sspn=6.364676,10.305176&oq=44&hnear=440+Bernardo+Ave,+Mountain+View,+Santa+Clara,+California+94043&t=m&z=17');
	}
}

function doClickSMS(e) {
	Ti.Platform.openURL('sms:+12345678901');
}

function doClickDialer(e) {
	Ti.Platform.openURL('tel://408-555-1234');
}

function doClickYouTube(e) {
	Ti.Platform.openURL('http://www.youtube.com/watch?v=iodEa0eitag');
}

function doClickStore(e) {
	if(OS_IOS) {
		if(ENV_DEV) {
			// same as if(Ti.Platform.model == 'Simulator' || Ti.Platform.model == 'iPhone Simulator')
			alert('This example won\'t work in the simulator, You must run it on a device');
		} else {
			Ti.Platform.openURL('http://itunes.apple.com/us/app/legoland-california-official/id452395530?mt=8');
		}	
	} else {
		if(ENV_DEV) {
			// same as if(Ti.Platform.model == 'google_sdk')
			alert('This example won\'t work in the emulator, You must run it on a device');
		} else {
			Ti.Platform.openURL('market://details?id=com.zc.android');
		}
	}
}

function urlParser(url) {
	url = url.replace(/[Uu]rlschemes:\/\/\?/,"");
	return url.split('&');
}

// check for arguments passed to this app
if(OS_IOS) {
	function grabArguments() {
		var args = Ti.App.getArguments();
		if(args.url) {
			// property present only if app has been launched from the other app
			var parsedArgs = urlParser(args.url);
			//alert(JSON.stringify(parsedArgs));
			switch(parsedArgs[0]) {
				case 'maps':
					doClickMaps();
				break;
				case 'youtube':
					doClickYouTube();
				break;
			}
		}
	}
	// grab the arguments when the app is opened from a closed state
	grabArguments();
	// then, we need to explicitly handle a resumed app state. but
	// be careful, we must listen for 'resumed' not 'resume'
	// see http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.App-event-resumed
	Ti.App.addEventListener('resumed', grabArguments);
} else {
	// on Android ...
	var activity = Ti.Android.currentActivity;
	activity.addEventListener("create", function(e) {
		var args = activity.getIntent().getData();
		if(args && args != 'urlschemes://') {
			var parsedArgs = urlParser(args);
			//alert(JSON.stringify(parsedArgs));
			switch(parsedArgs[0]) {
				case 'maps':
					doClickMaps();
				break;
				case 'youtube':
					doClickYouTube();
				break;
			}
		}
	});
}

function doClickSkype(e) {
	Ti.Platform.openURL('skype://');
}

function doClickGmail(e) {
	Ti.Platform.openURL('googlemail://');
}

function doClickSafari(e) {
	Ti.Platform.openURL('http://');
}


function doClickMusic(e) {
	Ti.Platform.openURL('music://');
}

function doClickBook(e) {
	Ti.Platform.openURL('ibooks://');
}


$.index.open();
