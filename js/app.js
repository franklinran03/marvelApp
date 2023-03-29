//###############################################  PERSONAJES DE MARVEL
const marvel =  {
    render:()=> {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d35e41ab2204f5e12a099156416af585&hash=337b5425d42e37a3f11074b04696bbfe';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
            for(const hero of json.data.results){
                let urlHero = hero.urls[0].url;
                contentHTML+= `
                <div class="col-md-3">
                    <a href="${urlHero}" target="_blank">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                    </a>
                    <h3 class="title">${hero.name}</h3>
                </div>`;
                
            }
            container.innerHTML = contentHTML;
            console.log(json, 'RES.JSON')
        })
    }
};
marvel.render();

//###############################################  COMICS DE MARVEL
const marvelComics =  {
    render:()=> {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=d35e41ab2204f5e12a099156416af585&hash=337b5425d42e37a3f11074b04696bbfe';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
            for(const comic of json.data.results){
                let urlComic = comic.urls[0].url;
                contentHTML+= `
                <div class="col-md-3">
                    <a href="${urlComic}" target="_blank">
                        <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="${comic.title}" class="img-thumbnail">
                    </a>
                    <h3 class="title">${comic.title}</h3>
                </div>`;
                
            }
            container.innerHTML = contentHTML;
            console.log(json, 'RES.JSON')
        })
    }
};
document.getElementById("comics").addEventListener("click", comicsApi);


function comicsApi(){
    marvelComics.render();
}

//###############################################  SERIE DE MARVEL
const marvelSeries =  {
    render:()=> {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=d35e41ab2204f5e12a099156416af585&hash=337b5425d42e37a3f11074b04696bbfe';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
            for(const serie of json.data.results){
                let urlSerie = serie.urls[0].url;
                contentHTML+= `
                <div class="col-md-3">
                    <a href="${urlSerie}" target="_blank">
                        <img src="${serie.thumbnail.path}.${serie.thumbnail.extension}" alt="${serie.title}" class="img-thumbnail">
                    </a>
                    <h3 class="title">${serie.title}</h3>
                </div>`;
                
            }
            container.innerHTML = contentHTML;
            console.log(json, 'RES.JSON')
        })
    }
};
document.getElementById("series").addEventListener("click", seriesApi);


function seriesApi(){
    marvelSeries.render();
}











