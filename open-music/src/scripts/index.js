import * as theme from './theme-mode.js';
import { applyInputRangeStyle } from './input-range.js';
import { Albums } from './render.js';
import { AlbumsDB } from './api.js';

async function routine() {

    theme.toggleTheme();
    theme.loadTheme();
    applyInputRangeStyle();

        const albumsList = await AlbumsDB.list();
        const album = new Albums(albumsList);

        album.updateAlbum();
        album.combinedFilter();
        album.priceFilter();
        album.genreFilter();

};

routine();