import {header} from "./header"
import {displayMore} from "./displayMore"
import {searchGame} from "./searchGame"

const GameList = (argument = "") => {
    const preparePage = () => {
      let cleanedArgument = argument.replace(/\s+/g, "-");
      let articles = "";
  
      const fetchList = (url, argument) => {
        let finalURL = url;
        if (argument) {
          finalURL = url + "?search=" + argument;
        }
  
        fetch(`${finalURL}`)
          .then((response) => response.json())
          .then((response) => {
            response.results.forEach((article) => {
              articles += `<div class="col-md-4">
              <div class="card border-0 m-2 bg-dark text-white">
                <img class="card-img-top" src="${article.background_image}" alt="Card image cap" style="max-width: 100%;height: auto;">
                <div class="card-body">
                  <h5 class="card-title text-white">${article.name}</h5>
                  <a href="#gamedetail/${article.id}" class="btn btn-primary">See more</a>
                </div>
              </div>
          </div>`;
            });
            document.querySelector(".page-list .articles").innerHTML = articles;
          });
      };
  
      fetchList("https://api.rawg.io/api/games", cleanedArgument);
    };
  
    const render = () => {
      pageContent.innerHTML = header() ;
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
  export{GameList}
  