import { AlbumsDB } from "./api.js";

export class Database {

    constructor(albums) {

        this.albums = albums;
        this.filteredAlbums = albums;
        this.currentPrice = Infinity;
        this.currentGenre = 'Todos';
        this.genreFilter();
        this.priceFilter();

    };

    async load() {

        try {

            const response = await AlbumsDB.list();

            if(!response.ok) {

                throw new Error(`Error loading data`);

            };

            const data = await response.json();

            this.albums = data;
            this.filteredAlbums = data;

            this.updateAlbum();

        } catch (error) {

            console.error('Error fetching data', error);

        };

    };

};

export class Albums extends Database { 

    constructor(albums) {

        super(albums);

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

        this.filteredAlbums.forEach(album => {

            const card = this.renderAlbum(album);

            ul.appendChild(card);

        });

    };

    combinedFilter() {

        this.filteredAlbums = this.albums.filter(album => {

            const albumPrice = parseInt(album.price);
            const matchesPrice = albumPrice <= this.currentPrice;
            const matchesGenre = this.currentGenre === 'Todos' || album.genre === this.currentGenre;

            return matchesPrice && matchesGenre;

        });

        this.updateAlbum();

    }

    priceFilter() {

        const input = document.querySelector('#input--price-range');
        const span = document.querySelector('#price--range');

        input.addEventListener('input', (e) => {

            this.currentPrice = parseInt(e.target.value);
            
            span.textContent = `R$ ${this.currentPrice}`;

            this.combinedFilter();

        });

    };

    genreFilter() {

        const section = document.querySelector('#section__filter__container');

        section.addEventListener('click', (e) => {

            const target = e.target;

            if (target.classList.contains('genres')) {

                const btn = target.closest('.genres');
                
                this.currentGenre = btn.innerText;

            } else {

                this.currentGenre = 'Todos';

            };

            this.combinedFilter();

        });

    };

};