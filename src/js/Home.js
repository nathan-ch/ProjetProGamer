import {GameList} from "./GameList"
import {header} from "./header"


const Home = (argument = "") => {
    const preparePage = () => {
      let articles = "";
      let results = []
  
      const fetchList = (url) => {
        let finalURL = url;
        if (argument) {
          finalURL = url;
        }
        fetch(`${finalURL}`)
          .then((response) => response.json())
          .then((response) => {
            fetch("https://api.rawg.io/api/games?dates=2020-01-01%2C2020-12-31&ordering=-added&page=2")
              .then((response2) => response2.json())
              .then((response2) => {
                results.push(response.results, response2.results)
                results = results.flat()
                for (let i = 0; i < 9; i++) {
                  let article = results[i];
                  articles += `
                  <div class="col-md-4">
                      <div class="card border-0 m-2 bg-dark text-white">
                        <img class="card-img-top" src="${article.background_image}" alt="Card image cap" style="max-width: 100%;max-height: 188px;">
                        <div class="card-body">
                          <h5 class="card-title text-white">${article.name}</h5>
                          <a href="#gamedetail/${article.id}" class="btn btn-primary">See more</a>
                        </div>
                      </div>
                  </div>`
                }
                for (let i = 9; i < 27; i++) {
                  const article = results[i];
                  articles += `
                  <div class="col-md-4 loadMore" style="display:none">
                      <div class="card border-0 m-2 bg-dark text-white">
                        <img class="card-img-top" src="${article.background_image}" alt="Card image cap" style="max-width: 100%;height: 188px;;">
                        <div class="card-body">
                          <h5 class="card-title text-white">${article.name}</h5>
                          <a href="#gamedetail/${article.id}" class="btn btn-primary">See more</a>
                        </div>
                      </div>
                  </div>`
                }
                document.querySelector(".page-list .articles").innerHTML = articles;
              });
            });
      };
      document.getElementById("loadMore").addEventListener("click", loadMore)
  
      fetchList("https://api.rawg.io/api/games?dates=2020-01-01,2020-12-31&ordering=-added");
    };
  
    const render = () => {
      pageContent.innerHTML = header();
      preparePage();
      const searchGame = () => {
        let search = document.getElementById("gameSearch").value;
        return GameList(search);
      };
      document.querySelector(".form-control").addEventListener("keypress", (e) => {
        if (e.code == "Enter") {
          searchGame();
        }
      });
      const displayMore = () =>{
        for (let i = 0; i < 9; i++) {
          const element = document.querySelectorAll(".loadMore")[0];
          element.style.display="inline"
          element.classList.remove("loadMore");
          element.classList.add("visible");

        };
        if(document.querySelectorAll(".visible").length > 17){
        document.getElementById("loadMore").style.display="none"}
      }
      document.getElementById("loadMore").addEventListener("click",displayMore)
    };
  
    render();
  };
  export{Home}
  