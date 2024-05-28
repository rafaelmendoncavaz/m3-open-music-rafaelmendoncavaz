export class AlbumsDB {

    static list() {

        const endpoint = 'https://openmusic-fake-api.onrender.com/api/musics'

        return fetch(endpoint)
        .then(data => data.json())
        .then(({title, genre, band, price, img}) => ({
            title,
            genre,
            band,
            price,
            img
        }));

    };

};