import './theme-mode.js';
import { albumsList } from './albumsDb.js';
import { applyInputRangeStyle } from './input-range.js';
import { Albums } from './render.js';

function routine() {

    applyInputRangeStyle();
    const albums = new Albums(albumsList);
    albums.updateAlbum();

};

routine();