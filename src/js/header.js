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
        <div id="welcome" class="row mt-4 mb-4">
          
        </div>
    </div>

    <section class="page-list">
      <div class="container">
        <div class="articles row justify-content-md-center"></div>
        </div>
    </section>
  `;
  };
  

export{header}