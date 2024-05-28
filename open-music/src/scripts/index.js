import * as theme from './theme-mode.js';
import { albumsList } from './albumsDb.js';
import { applyInputRangeStyle } from './input-range.js';
import { Albums } from './render.js';

function routine() {

    theme.toggleTheme();
    theme.loadTheme();
    applyInputRangeStyle();
    const albums = new Albums(albumsList);
    albums.updateAlbum();
    albums.priceFilter();

};

routine();