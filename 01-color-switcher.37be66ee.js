!function(){var t={body:document.querySelector("body"),buttonStart:document.querySelector("[data-start]"),buttonStop:document.querySelector("[data-stop]")};console.log(t.buttonStart),console.log(t.buttonStop);var o=null;t.buttonStart.addEventListener("click",(function(){o=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),t.buttonStart.disabled=!0}),1e3)})),t.buttonStop.addEventListener("click",(function(){clearInterval(o),t.buttonStart.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.37be66ee.js.map
