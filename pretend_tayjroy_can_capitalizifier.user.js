// ==UserScript==
// @name        Pretend @tayjroy Can Capitalizifier
// @namespace   pretend_tayjroy_can_capitalizifier
// @description Lets @tayjroy pretend she can use capitals.
// @include     https://twitter.com/*
// @version     1
// @grant       none
// @require     https://code.jquery.com/jquery-3.1.1.min.js
// ==/UserScript==

var tweet_el = $( '.tweet[data-tweet-id="803809250413658112"]' );

if ( tweet_el.length ) {
	var html = tweet_el.find( ".tweet-text" ).html();
	[ "i know", "i promise", "i did", "uber" ].forEach(function( word ) {
		html = html.replace( new RegExp( word, 'g' ), word.charAt(0).toUpperCase() + word.slice(1) );
	});
	tweet_el.find( ".tweet-text" ).html( html );
}