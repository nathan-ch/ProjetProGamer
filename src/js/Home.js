import {GameList} from "./GameList"
import {header} from "./header"
import {displayMore} from "./displayMore"
import {searchGame} from "./searchGame"

const Home = (argument = "") => {
    const preparePage = () => {
      let cleanedArgument = argument.replace(/\s+/g, "-");
      let articles = "";
  
      const fetchList = (url, argument) => {
        let finalURL = url;
        if (argument) {
          finalURL = "https://api.rawg.io/api/games?search=" + argument + "&page_size=27";
        }
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
              let cardStyle = ""
              let cardClass = ""
              console.log("génération des cartes");
              if(i > 8 ){
                console.log("après 8 cartes");
                cardStyle = "style='display:none'"
                cardClass = "loadMore"
              }
              let platforms = "";
              let article = response.results[i];
              article.platforms.forEach(element => {
                platforms +=`
                <div class="col-auto"><img src="src/img/${element.platform.id}.svg"></div>
                `
              });
              articles += `
              <div class="col-md-4">
              <a href="#gamedetail/${article.id}">
                  <div class="card border-0 m-2 bg-dark text-white ${cardClass}" ${cardStyle}>
                    <img class="card-img-top" src="${article.background_image}" alt="Card image cap" style="max-width: 100%;max-height: 188px;">
                    <div class="card-body">
                      <h5 class="card-title text-white">${article.name}</h5>
                      <div id="platforms${i}" class="row">${platforms}</div>
                    </div>
                  </div>
                </a>
              </div>`
            }
                document.querySelector(".page-list .articles").innerHTML = articles;
            });
      };
      document.getElementById("loadMore").addEventListener("click", loadMore)
  
      fetchList("https://api.rawg.io/api/games?dates=2020-01-01,2020-12-31&ordering=-added&page_size=27", cleanedArgument);
    };
    const render = () => {
      pageContent.innerHTML = header();
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
  