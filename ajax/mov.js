const api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";


async function get_api(url){
    const response= await fetch(url);
    var data=await response.json();
    console.log(data);
   show(data);
}

get_api(api);

let main = document.getElementById('main');
const img_path="https://image.tmdb.org/t/p/w500/";
let form = document.getElementById("form");
let search = document.getElementById("search-box");
let btn = document.getElementById("search-btn");

let title = document.getElementById("movies");


const show = (data) =>{
    main.innerHTML='';
    for(let i of data.results) {
        const ele = document.createElement('div');
        ele.classList.add('card');
        ele.innerHTML=`
        <img src="${img_path+i.poster_path}" alt="poster">
        <div class="content">
            <h2 id="title">${i.title}</h2>
            <p id="overview">overview:<br>${i.overview}</p>
            <p id="rating">rating: ${i.vote_average}</p>
        </div>
        `
        main.appendChild(ele);
    }
}
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let base_path="https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=";
    const search_term = search.value;
    if(search_term){
        get_api(base_path+search_term);
    }
});

title.addEventListener("click",(e)=>{
    e.preventDefault();
    get_api(api);

});

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let base_path="https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=";
    const search_term = search.value;
    if(search_term){
        get_api(base_path+search_term);
    }
    else{
        get_api(api);

    }
});