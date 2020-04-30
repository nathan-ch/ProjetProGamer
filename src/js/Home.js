import {header} from "./header"
import {displayMore} from "./displayMore"
import {searchGame} from "./searchGame"
import {loadMoreButton} from "./loadMoreButton"
import {cardHover} from "./cardHover"
import {cardHoverOut} from "./cardHoverOut"
import { selectPlatform } from "./selectPlatform"




const Home = (argument = "") => {
    const preparePage = () => {
      let cleanedArgument = argument.replace(/\s+/g, "-");
      let articles = "";

      document.querySelector(".page-list .articles").innerHTML = `
      <section id="pageContent">
        <div class="spinner-border text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </section>`
  
      const fetchList = (url, argument) => {
        let finalURL = url + "?dates=2020-07-01,2020-12-31&ordering=-added&page_size=27";
        if (argument !== "") {
          finalURL = url + "?search=" + argument + "&page_size=27";
        }
        console.log(finalURL);
        fetch(`${finalURL}`)
          .then((response) => response.json())
          .then((response) => {
            let loopLength = 0
            if(response.results.length > 27){
              loopLength = 27
            }else{
              loopLength = response.results.length
            }
            for (let i = 0; i < loopLength; i++) {
              let cardClass = "load-more-visible"
              if(i > 8 ){
                cardClass = "load-more-not-visible"
              }
              let platforms = "";
              let article = response.results[i];
              article.platforms.forEach(element => {
                platforms +=`
                <div class="col-auto platform" id="${element.platform.id}"><a href="#home/?dates=2020-01-01,2020-12-31&platforms=${element.platform.id}&ordering=-added&page_size=27"><img src="src/img/${element.platform.id}.svg"></a></div>
                `
              });
              let genresNames = ""
                  article.genres.forEach(element => {
                    genresNames+=`${element.name}, `
                  });
              articles += `
              <div class="col-md-4 bigCard">
                <div class="card border-0 m-2 bg-dark text-white ${cardClass}" id="card${i}">
                  <img class="card-img-top" src="${article.background_image}" alt="Card image cap" style="max-width: 100%;height: 188px;">
                  <div class="gameInfos not-visible" style="height: 188px;">
                    <h3>${article.released}</h3>
                    <h4>${article.rating}/5 ${article.reviews_count} votes</h4>
                    <h4>${genresNames}</h4>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-white"><a class="anim" href="#gamedetail/${article.id}">
                        ${article.name}
                    </a></h5>
                    <div id="platforms${i}" class="row">${platforms}</div>
                    </div>
                  </div>
              </div>`
              }
                document.querySelector(".page-list .articles").innerHTML = articles;
                document.getElementById("welcome").innerHTML=`<div class="col-md-12">
                <h3 class="text-white">Welcome,</h3>
                <p class="text-white">The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame,
                    the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,
                    brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,
                    groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you
                    with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</p>
                </div>
                <div class="col-md-3">
                    <select id="select" class="browser-default custom-select custom-select-lg mb-3 bg-danger text-white">
                        <option value=0 selected>Plateform : Any</option>
                        <option value="1">Xbox One</option>
                        <option value="18">PS4</option>
                        <option value="4">PC</option>
                        <option value="7">SWITCH</option>
                        <option value="4">IOS</option>
                        <option value="21">ANDROID</option>
                        <option value="5">MAC OS</option>
                        <option value="6">LINUX</option>



                      </select>
                </div>  `

                document.querySelectorAll(".card-img-top").forEach((img) => {
                  // Card Hover mouse enter
                  img.addEventListener("mouseenter",cardHover)
                });
                document.querySelectorAll(".gameInfos").forEach((img) => {
                  // Card Hover mouse enter
                  img.addEventListener("mouseleave",cardHoverOut)
                });
                document.getElementById("select").addEventListener("click",selectPlatform)
            });
      };  
      fetchList("https://api.rawg.io/api/games", cleanedArgument);    
    };
    const render = () => {
      pageContent.innerHTML = header();
      pageContent.innerHTML += loadMoreButton()

      preparePage();
      // Event to search game
      document.querySelector(".form-control").addEventListener("keypress", (e) => {
        if (e.code == "Enter") {
          searchGame();
        }
      });
      // Event to load more games
      document.getElementById("loadMore").addEventListener("click",displayMore)
    };
    render();
  };
  export{Home}
  