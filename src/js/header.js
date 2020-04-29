const header = () => {
    return `
    <div class="container mt-4">
        <div class="row">
            <div class="col-md-8">
                <a href="" ><h1 class="text-danger">The Hyper Progame</h1></a>
            </div>
            <div class="col-md-4">
              <input class="form-control" id="gameSearch" type="text" placeholder="Find a game" aria-label="Search">
            </div>
        </div>
        <div class="row mt-4 mb-4">
          <div class="col-md-12">
              <h3 class="text-white">Welcome,</h3>
              <p class="text-white">The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame,
                  the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,
                  brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,
                  groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you
                  with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</p>
          </div>
          <div class="col-md-3">
              <select class="browser-default custom-select custom-select-lg mb-3 bg-danger text-white">
                  <option selected>Plateform : Any</option>
                  <option value="1">Xbox One</option>
                  <option value="2">PS4</option>
                  <option value="3">PC</option>
                </select>
          </div>  
        </div>
    </div>

    <section class="page-list">
      <div class="container">
        <div class="articles row justify-content-md-center"></div>
        </div>
    </section>
    <section class="more m-4">
        <div class=" button container-fluid">
            <div class="row justify-content-md-center">
                <div id="loadMoreDiv" class="col-auto">
                    <button id="loadMore" class="btn btn-lg btn-danger">Show more</button>
                </div>
            </div>
        </div>
    </section>
  `;
  };
  

export{header}