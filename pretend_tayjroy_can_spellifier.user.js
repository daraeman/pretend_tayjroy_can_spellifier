// ==UserScript==
// @name        Pretend @tayjroy Can Spellifier
// @namespace   pretend_tayjroy_can_spellifier
// @description Lets @tayjroy pretend she can spell.
// @include     https://twitter.com/*
// @version     1
// @grant       none
// @require     https://code.jquery.com/jquery-3.1.1.min.js
// ==/UserScript==

var tweet_el = $( '.tweet[data-tweet-id="803809250413658112"]' );

if ( tweet_el.length )
	tweet_el.find( ".tweet-text" ).html( tweet_el.find( ".tweet-text" ).html().replace( "wait", "what" ) );