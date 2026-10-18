// Chrome port of the "Bandcamp Killer" 1.0 Firefox add-on.
// Adds a link that opens the album in Bandcamp's own embedded player
// (taken from the og:video meta tag) with the track list shown.
(function () {
  var meta = document.querySelector("meta[property='og:video']");
  var trackInfo = document.getElementById("trackInfoInner");
  if (!meta || !trackInfo) return;

  var url = meta.getAttribute("content");
  url = url.replace("tracklist=false", "bgcol=000000/linkcol=ff0000");

  var urlEl = document.createElement('a');
  urlEl.textContent = "▶ KLIL BNADCMAP!! 😡";
  urlEl.href = url;
  urlEl.style = "color: red; font-weight: bold;";
  urlEl.target = "_blank";

  // insertBefore throws if the reference isn't a direct child; append instead.
  var commands = document.querySelector("ul.tralbumCommands.dupe_purchases_fix");
  trackInfo.insertBefore(urlEl, commands && commands.parentNode === trackInfo ? commands : null);
})();
