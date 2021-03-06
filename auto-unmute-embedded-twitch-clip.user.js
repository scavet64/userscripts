// ==UserScript==
// @name        Auto Unmute Embedded Twitch Clips
// @version     1.0
// @description Automatically unmute Twitch clips. This is specifically designed for watching twitch clips on reddit where they are muted by default educing anger and extra clicks for no reason.
// @namespace   https://github.com/scavet64
// @match       https://clips.twitch.tv/embed?*
// @grant       none
// @author      Vincent Scavetta
// @updateURL   https://raw.githubusercontent.com/scavet64/userscripts/main/auto-unmute-embedded-twitch-clip.user.js
// @downloadURL https://raw.githubusercontent.com/scavet64/userscripts/main/auto-unmute-embedded-twitch-clip.user.js
// ==/UserScript==

var interval;

function autoUnmute() {  
    var unmuteButton = document.querySelector('[aria-label*="Unmute"]');
  
    if (unmuteButton) {
        unmuteButton.click();
        window.clearInterval(interval)
        console.log("Successfully autoplayed and unmuted twitch clip");
    }
}


(function() {
    interval = window.setInterval(autoUnmute, 100);
})();