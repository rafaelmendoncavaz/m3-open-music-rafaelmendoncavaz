export class Albums { 

    constructor(albums) {

        this.albums = albums;

    };

    renderAlbum(album) {

        const li = document.createElement('li');
        li.classList.add('albums--display');

        li.innerHTML = `

        <div class="cover__container">

        <img src="${album.img}" alt="Album Cover" class="albums--cover"/>

    </div>

    <div class="info__container">

        <h4 class="album__title">

        ${album.title}

        </h4>

        <div class="list__band__genre__content">

        <p class="band-name">

            ${album.band}

        </p>

        <p class="album-genre">

            ${album.genre}

        </p>

        </div>

        <div class="price__buy__content">

        <h4 class="album-price">

            ${album.price}

        </h4>

        <button class="list__button--buy">

            Comprar

        </button>

        </div>

    </div>
        `;

        return li;

    };

    updateAlbum() {

        const ul = document.querySelector('.albums__list__content');
        ul.innerHTML = '';

        this.albums.forEach(album => {

            const card = this.renderAlbum(album);

            ul.appendChild(card);

        });

    };

};