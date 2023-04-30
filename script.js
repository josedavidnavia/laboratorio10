const listaRecommended = [
    {
        "id": 1,
        "title": "Arcane",
        "description": "Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League Of Legends champions and the power that will tear them apart. The delicate balance between the rich city of Piltover and the seedy underbelly of Zaun.",
        "image": "movies/Arcane/arcane.jpg",
        "rating": 5,
    },
    {
        "id": 2,
        "title": "1899",
        "description": "Lorem ipsum al piso mah boy yes sir",
        "image": "movies/1899/1899.jpg",
        "rating": 5,
    },
    {
        "id": 3,
        "title": "Las chicas del cable",
        "description": "Lorem ipsum al piso mah boy yes sir1",
        "image": "movies/Cable/las chicas.jpg",
        "rating": 4,
    },
    {
        "id": 4,
        "title": "13 Reasons why",
        "description": "Lorem ipsum al piso mah boy yes sir2",
        "image": "movies/13/13.jpg",
        "rating": 3,
    },
    {
        "id": 5,
        "title": "The Crown",
        "description": "Lorem ipsum al piso mah boy yes sir3",
        "image": "movies/Crown/crown.jpg",
        "rating": 4,
    },
    
]

const listaTrending = [
    {
        "id": 6,
        "title": "Sabrina",
        "description": "Otro lorem ipsum aja",
        "image": "movies/Sabrina/sabrina.png",
        "rating": 5,
    },
    {
        "id": 7,
        "title": "Mindhunter",
        "description": "Lorem ipsum al piso mah boy yes sir",
        "image": "movies/Mind/mindhunter.jpg",
        "rating": 5,
    },
    {
        "id": 8,
        "title": "Sandman",
        "description": "Lorem ipsum al piso mah boy yes sir1",
        "image": "movies/Sand/sandman.jpg",
        "rating": 4,
    },
    {
        "id": 9,
        "title": "Stranger Things",
        "description": "Lorem ipsum al piso mah boy yes sir2",
        "image": "movies/ST3/stranger.jpeg",
        "rating": 3,
    },
    {
        "id": 10,
        "title": "You",
        "description": "Lorem ipsum al piso mah boy yes sir3",
        "image": "movies/You/you.jpg",
        "rating": 4,
    },
    
]

const containerLista1 = document.querySelector(".recommended_scroll");
const containerLista2 = document.querySelector(".trending");

const myRecommended = (product) => {

    for (let item of product) {
        let movie = new RenderStuff (item.image, item.title);
        const RenderMov = movie.render();
        containerLista1.appendChild(RenderMov);
    }
}

const myTrending = (product) => {

    for (let item of product) {
        let movie = new RenderStuff (item.image, item.title);
        const RenderMov = movie.render();
        containerLista2.appendChild(RenderMov);
    }
}

class RenderStuff {
    image = "";
    title = "";
    description = "";
    rating = "";

    constructor(image,title,description,rating) {
        this.image = image;
        this.title = title;
        this.description = description;
        this.rating = rating;
    }

    render(){

        const movie_container = document.createElement('div');
        movie_container.setAttribute("class", "movie_container");

        const movie_specs = document.createElement('div');
        movie_specs.setAttribute("class", "movie_specs");

        const coverImg = document.createElement('img');

        const lowerInfo = document.createElement('div');
        lowerInfo.setAttribute("class", "lower_info");

        const ratings = document.createElement('div');
        ratings.setAttribute("class", "ratings");

        const rateText = document.createElement('p');
        const textNode = document.createTextNode("Ratings:");

     
        
        movie_container.appendChild(movie_specs);
        movie_specs.appendChild(coverImg);
        movie_container.appendChild(lowerInfo);
        lowerInfo.appendChild(ratings);
        ratings.appendChild(rateText)
        
        for (let index = 1; index <= 5; index++) {
        const stars0 = document.createElement('div');

            if (index < this.rating) {
                stars0.setAttribute("class","rating1");
            } else {
                stars0.setAttribute("class","rating0");
            }
            ratings.appendChild(stars0)
            
        }
 
        rateText.appendChild(textNode);


        coverImg.src = this.image;


        }
        
         addClickListener() {
            const image = document.querySelector("img");
            image.addEventListener("click", () => {
              const descriptionDiv = document.querySelector("#description");
              descriptionDiv.appendChild(document.createTextNode(""));
          
              const ratingDiv = document.querySelector("#rating");
              ratingDiv.appendChild(document.createTextNode("5 stars"));
          
              const bannerDiv = document.querySelector("#banner");
              const bannerImg = document.createElement("img");
              bannerImg.src = "banner.jpg";
              bannerDiv.appendChild(bannerImg);
            });
            return movie_container;
            return movie_specs;
            return coverImg;
            return lowerInfo;
            return stars0;
            return stars1;
            return stars2;
            return stars3;
            return stars4;
    
          }
          

    

myRecommended(listaRecommended);
myTrending(listaTrending);