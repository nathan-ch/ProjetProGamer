import {header} from "./header"
import {searchGame} from "./searchGame"


const GameDetail = (argument) => {
    const preparePage = () => {
      let cleanedArgument = argument.replace(/\s+/g, "-");
      const fetchGame = (url, argument) => {
        let finalURL = url + argument;
        fetch(`${finalURL}`)
          .then((response) => response.json())
          .then((response) => {
            let { name, released, description, background_image, rating, reviews_count, website, developers, platforms, publishers, genres, tags, stores, clip, id } = response;
            let articleDOM = document.querySelector(".page-detail .article");
            let developersNames=""
            developers.forEach(element => {
              developersNames+=`<p><a class="anim" href="#home/&developers=${element.id}&ordering=+added">${element.name}</a></p>`
            });
            let platformsNames=""
            platforms.forEach(element => {
              platformsNames+=`<a class="anim" href="#home/&platforms=${element.platform.id}&ordering=-added">${element.platform.name}</a>, `              
            });
            let publishersNames=""
            publishers.forEach(element => {
              publishersNames+=`<p><a class="anim" href="#home/&publishers=${element.id}&ordering=-added&page_size=27">${element.name}</a></p>`                 
            }); 
            let genresNames = ""
            genres.forEach(element => {
              genresNames+=`<a class="anim" href="#home/&genres=${element.id}&ordering=-added&page_size=27">${element.name}</a>, `
            });
            let tagsNames =""
            tags.forEach(element => {
              tagsNames+=`<a class="anim" href="#home/&ordering=-added&page_size=27&tags=${element.id}">${element.name}</a>, `
            });
            let storesNames=""
            stores.forEach(element => {
              storesNames+=`<p><a href="${element.url}" target="_blank">${element.store.name}</a></p>`
            });
            
            let screenshots = ""
            fetch(`https://api.rawg.io/api/games/${id}/screenshots`)
            .then((responseScreen) => responseScreen.json())
            .then((responseScreen) => {
              for (let i = 0; i < 4; i++) {
                screenshots += `
                <div class="col-md-6 screenshots">
                  <a href="${responseScreen.results[i].image}" class="d-block mb-4 h-100">
                    <img class="img-fluid" src="${responseScreen.results[i].image}" alt="">
                  </a>
                </div>` 
              }
              articleDOM.querySelector(".screenshots").innerHTML =screenshots
            });
            
            let youtube = ""
            fetch(`https://api.rawg.io/api/games/${id}/youtube
            `)
            .then((responseYT) => responseYT.json())
            .then((responseYT) => {
              for (let i = 0; i < 4; i++) {
                youtube += `
                <div class="col-md-6 youtube">
                  <a href="https://www.youtube.com/watch?v=${responseYT.results[i].external_id}" class="d-block mb-4 h-100">
                    <img class="img-fluid" src="${responseYT.results[i].thumbnails.medium.url}" alt="">
                  </a>
                </div>` 
              }
              articleDOM.querySelector(".youtube").innerHTML =youtube
            });

            let similar = ""
            fetch(`https://api.rawg.io/api/games/${id}/suggested
            `)
            .then((responseSim) => responseSim.json())
            .then((responseSim) => {
              for (let i = 0; i < 6; i++) {
                let platforms = "";
                responseSim.results[i].platforms.forEach(element => {
                  platforms +=`
                  <div class="col-auto"><img src="src/img/${element.platform.id}.svg"></div>
                  `
                });
                similar += `             
                <div class="col-md-4">
                <a href="#gamedetail/${responseSim.results[i].id}">
                    <div class="card border-0 m-2 bg-dark text-white">
                      <img class="card-img-top" src="${responseSim.results[i].background_image}" alt="Card image cap" style="max-width: 100%;height: 188px;">
                      <div class="card-body">
                        <h5 class="card-title text-white">${responseSim.results[i].name}</h5>
                        <div id="platforms${i}" class="row">${platforms}</div>
                      </div>
                    </div>
                  </a>
              </div>`
              }
              articleDOM.querySelector(".similar").innerHTML =similar
            });
            articleDOM.querySelector("#jumbo").innerHTML = `
            <div class="jumbotron jumbotron-fluid" style="background-image: url(${background_image});background-size: cover; height:500px;background-position: center;"
              <div class="container ">
              <div class="d-flex align-items-end flex-column" style="height: 400px;">
                <div class="mt-auto p-2"><a href=${website} target="_blank" class="btn btn-danger float-right mr-4">Check Website</a></div>
              </div>
            </div>`
            articleDOM.querySelector("h1.title").innerHTML = name;
            articleDOM.querySelector("h4.rate").innerHTML = `${rating}/5 ${reviews_count} votes ` ;            
            articleDOM.querySelector("span.release-date").innerHTML = released;
            articleDOM.querySelector("p.description").innerHTML = description;
            articleDOM.querySelector("span.developers").innerHTML = developersNames;
            articleDOM.querySelector("span.platforms").innerHTML = platformsNames;
            articleDOM.querySelector("span.publishers").innerHTML = publishersNames;
            articleDOM.querySelector("span.genres").innerHTML = genresNames;
            articleDOM.querySelector("span.tags").innerHTML = tagsNames;
            articleDOM.querySelector(".stores").innerHTML = storesNames;
            articleDOM.querySelector(".trailer").innerHTML = 
            `<video width="auto" height="500px" controls>
              <source src="${clip.clip}" type="video/mp4">
            Your browser does not support the video tag.
            </video> `
            
          });
      };
      fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
    };
    const render = () => {
      pageContent.innerHTML = header();
      pageContent.innerHTML += `
        <section class="page-detail">
          <div class="article text-white">
            <div id="jumbo"></div>
            <div class="container">
            <div class="row">
              <div class="col-md-8">
              <h1 class="title"></h1>
              </div>
              <div class="col-md-4">
                <h4 class="rate text-danger"></h4>
              </div>
            </div>
              <p class="description"></p>
              <div class="row">
                <div class="col-md-3">
                  <p><span class="font-weight-bolder">Release date</span></br><span class="release-date"></span></p>
                </div>
                <div class="col-md-3">
                <p><span class="font-weight-bolder">Developer</span></br><span class="developers"></span></p>
                </div>
                <div class="col-md-3">
                <p><span class="font-weight-bolder">Platforms</span></br><span class="platforms"></span></p>
                </div>
                <div class="col-md-3">
                <p><span class="font-weight-bolder">Publishers</span></br><span class="publishers"></span></p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                <p><span class="font-weight-bolder">Genre</span></br><span class="genres"></span></p>
                </div>
                <div class="col-md-6">
                <p><span class="font-weight-bolder">Tags</span></br><span class="tags"></span></p>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <h2 class="text-danger">BUY</h2>
                  <div class="stores"></div>
                </div>
              </div>
              <div class="row justify-content-md-center">
                <div class="col-12">
                  <h2 class="text-danger">TRAILER</h2>
                </div>
                <div class="col-12">
                  <div class="trailer"></div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <h2 class="text-danger">SCREENSHOTS</h2>
                </div>
              </div>
              <div class="row screenshots">
              </div>
              <div class="row">
                <div class="col-md-12">
                  <h2 class="text-danger">YOUTUBE</h2>
                </div>
              </div>
              <div class="row youtube">
              </div>
              <div class="row">
                <div class="col-md-12">
                  <h2 class="text-danger">SIMILAR GAMES</h2>
                </div>
              </div>
              <div class="row similar">
              </div>
            </div>
          </div>
        </section>
      `;
      preparePage();
      // Event to search game
      document.querySelector(".form-control").addEventListener("keypress", (e) => {
        if (e.code == "Enter") {
          searchGame();
        }
      });

    };
    render();
  };
  
  export{GameDetail}
  