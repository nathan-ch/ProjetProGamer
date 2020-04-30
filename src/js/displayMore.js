const displayMore = () =>{
    for (let i = 0; i < 9; i++) {
      const element = document.querySelectorAll("div.col-md-4 > div.load-more-not-visible")[0];
      element.classList.remove("load-more-not-visible");
      element.classList.add("load-more-visible");

    };
    if(document.querySelectorAll(".load-more-visible").length > 26){
    document.getElementById("loadMore").style.display="none"}
  }

  export{displayMore}