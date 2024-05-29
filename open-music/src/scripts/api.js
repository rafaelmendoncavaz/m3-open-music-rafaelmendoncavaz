export class AlbumsDB {

    static list() {

        const endpoint = 'https://openmusic-fake-api.onrender.com/api/musics'

        return fetch(endpoint)
        .then(data => data.json())
        
    };

};