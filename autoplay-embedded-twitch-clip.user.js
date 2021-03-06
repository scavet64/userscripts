// ==UserScript==
// @name        Embedded Twitch Autoplay for Reddit
// @version     1.0
// @description Automatically unmute and play Twitch clips. This is specifically designed for watching twitch clips on reddit where they are muted by default educing anger and extra clicks for no reason.
// @namespace   https://github.com/scavet64
// @match       https://clips.twitch.tv/embed?*
// @grant       none
// @author      Vincent Scavetta
// @updateURL   https://github.com/scavet64/userscripts/raw/main/autoplay-embedded-twitch-clip.user.js
// @downloadURL https://github.com/scavet64/userscripts/raw/main/autoplay-embedded-twitch-clip.user.js
// ==/UserScript==

var interval;

function autoPlayAndUnmute() {  
    var unmuteButton = document.querySelector('[aria-label*="Unmute"]');
    var playButton = document.querySelector('[aria-label*="Play"]');
  
    if (unmuteButton && playButton) {
        unmuteButton.click();
        playButton.click();
        window.clearInterval(interval)
        console.log("Successfully autoplayed and unmuted twitch clip");
    }
}


(function() {
    interval = window.setInterval(autoPlayAndUnmute, 100);
})();