const Home = (argument = "") => {
    const preparePage = () => {
      let cleanedArgument = argument.replace(/\s+/g, "-");
      let articles = "";
  
      const fetchList = (url) => {
        let finalURL = url;
        if (argument) {
          finalURL = url;
        }
  
        fetch(`${finalURL}`)
          .then((response) => response.json())
          .then((response) => {
            response.results.forEach((article) => {
              articles += `
                    <div class="col-sm-6 offset-3">
                    <div class="card mb-3 visible" >
                        <div class="row card-body">
                            <img class="col-sm-6" src="${article.background_image}" style="max-width: 25%;
                            height: auto;"/>
                            <div class="col-sm-6">
                            <h5 class="card-title">${article.name}</h5>
                                <p class="card-text">Date de sortie : ${article.released}</p>
                                <a class="btn btn-primary" href = "#gamedetail/${article.id}">${article.id}</a>
                            </div>
                        </div>
                    </div>
                    </div>
                  `;
            });
            document.querySelector(".page-list .articles").innerHTML = articles;
          });
      };
  
      fetchList("https://api.rawg.io/api/games?dates=2021-01-01,2021-12-31&ordering=-added");
    };
  
    const render = () => {
      pageContent.innerHTML = `
        <section class="page-list">
          <div class="articles">...loading</div>
        </section>
      `;
  
      preparePage();
    };
  
    render();
  };
  export{Home}
  