# Bandcamp Killer for Chrome

Chrome (Manifest V3) port of the Firefox add-on
[Bandcamp Killer 1.0](https://addons.mozilla.org/en-US/firefox/addon/bandcamp-killer-1-0/).

On every `*.bandcamp.com/album/*` page it adds a red **▶ KLIL BNADCMAP!! 😡**
link. The link opens the album in Bandcamp's own embedded player in a new tab:
black background, red links, with the track list shown. The player URL comes
from the page's `og:video` meta tag.

## Install

1. Download or clone this folder.
2. Open `chrome://extensions` and switch on **Developer mode** (top right).
3. Click **Load unpacked** and select the `bandcamp-killer-chrome` folder.

This also works in other Chromium browsers (Edge, Brave, Opera, Vivaldi).

## Changes from the Firefox version

- `manifest.json` moved to Manifest V3, since Chrome no longer loads
  Manifest V2 extensions.
- The script now does nothing, instead of throwing an error, when the page has
  no `og:video` tag or no `#trackInfoInner`. If the purchase-commands list
  isn't where the original expected it, the link is added at the end of
  `#trackInfoInner`.
- Removed the debug `console.log` calls.

Otherwise it behaves the same. The icon is taken unchanged from the original.
Like the original, it only runs on album pages, not on `/track/` pages.

## License

The original add-on is listed on addons.mozilla.org under GPL-3.0, so this
port is also GPL-3.0 (see `LICENSE`). This port is not affiliated with the
original author.
