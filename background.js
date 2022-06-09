chrome.webRequest.onBeforeSendHeaders.addListener(
	function() {return {cancel: true};}, 
	{urls: [
		"*://outoctillerytor.com/*",
		"*://offerimage.com/*",
		"*://s7.addthis.com/*",
		"*://dooloust.net/*"
	]}, 
	["blocking"]
);
	