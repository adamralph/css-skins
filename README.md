# css-skins

CSS skins for websites I do not control. Each skin is one plain CSS file that restyles one site when loaded through [Stylus](https://add0n.com/stylus.html).

These skins are unofficial. They are not affiliated with, endorsed by, or supported by the sites they restyle.

## Why Stylus

Stylus injects user CSS into pages in the browser. There is no extension to write, no compile step, and no change to the target site. A skin is a normal `.css` file with a URL guard at the top, so the browser applies it only on the site it was written for.

## Install a skin

1. Install Stylus for [Firefox](https://addons.mozilla.org/firefox/addon/styl-us/) or [Chrome](https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne).
2. Click the Stylus toolbar icon, then **Manage**.
3. Click the **+** at the right-hand end of the Manage toolbar. It carries no label; its tooltip reads **Write new style**.
4. In the editor sidebar, click **Import** (an icon, tooltip **Import**) to open the **Paste the Mozilla-format code** dialog.
5. Paste the skin file in full, choose **Overwrite style**, then name the style after the site and save.

Pasting straight into the code pane opens the same dialog, so either route works. Stylus then moves the `@-moz-document` guard out of the code and into an **Applies to** entry, so the editor shows the style in two parts: the code, and the site it applies to. Check that the entry names the right site.

The repo file keeps the guard even though the installed copy loses it. That guard is what makes the file a portable Mozilla-format style: you can paste it into Stylus, share it, or load it into another tool, and it still knows where it belongs.

## Add a skin

1. Copy `skins/_template` to `skins/<site>/`, where `<site>` is the bare domain, such as `example.com`.
2. Keep a single CSS file in that folder. Rename it if you like.
3. Set the guard at the top of the file to the real domain.
4. Fill in the rules.
5. Add the skin to the table below.

## Preview a skin

Work in the Stylus editor. Edit the style inside Stylus, watch the page update, and copy the result back into the file when it looks right.

`preview/inject.js` does the same job without Stylus. Open the target page, open DevTools, paste the snippet, then paste the rules into the `css` constant and run it. Paste only the rules inside the guard, because browsers other than Firefox ignore `@-moz-document` blocks.

## Skins

| Skin | Site | Notes |
| ---- | ---- | ----- |
| [`goatcounter.com`](skins/goatcounter.com/skin.css) | [GoatCounter](https://www.goatcounter.com/) | Document-style redesign of the marketing pages and the dashboard chrome: one sheet, left-aligned prose, purple accent, red and green change figures. |
