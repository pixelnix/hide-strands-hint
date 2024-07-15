// ==UserScript==
// @name         Hide Strands Hint
// @namespace    http://tampermonkey.net/
// @version      2024-07-15
// @description  hide the Strands hint until you click on it
// @author       Nick Eby
// @match        https://www.nytimes.com/games/strands
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nytimes.com
// ==/UserScript==

(function() {
    'use strict';
    let intvl;
    let hintText;
    let hintElem;

    const hideHint = () => {
        try {
            console.log('try to hide');
            hintElem = document.getElementById('riddle').getElementsByTagName('h1')[0];
            hintText = hintElem.innerText;
            hintElem.innerText = '';
            hintElem.innerHTML = '<button onclick="window.revealStrandsHint()" style="font-size: inherit; background: transparent;">Click to reveal hint!</button>';
            window.clearInterval(intvl);
            console.log('hidden');
        }
        catch {}
    }

    window.revealStrandsHint = () => {
        hintElem.innerHTML = '';
        hintElem.innerText = hintText;
    }

    intvl = window.setInterval(hideHint, 250);
})();
