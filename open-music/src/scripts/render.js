export class Albums { 

    constructor(albums) {

        this.albums = albums;
        this.filteredAlbums = albums;

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

    priceFilter() {

        const input = document.querySelector('#input--price-range');
        const span = document.querySelector('#price--range');

        input.addEventListener('input', (e) => {

            const inputValue = e.target.value;
            
            span.textContent = `R$ ${inputValue}`

            this.filteredAlbums = this.albums.filter(album => {

                const albumPrice = parseInt(album.price);
                

                return albumPrice <= parseInt(inputValue);

            });

            this.updateAlbum();

        });

    };

};