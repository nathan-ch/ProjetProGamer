const displayMore = () =>{
    for (let i = 0; i < 9; i++) {
      console.log(document.querySelectorAll("div.col-md-4 > div.not-visible"));
      const element = document.querySelectorAll("div.col-md-4 > div.not-visible")[0];
      element.classList.remove("not-visible");
      element.classList.add("visible");

    };
    if(document.querySelectorAll(".visible").length > 17){
    document.getElementById("loadMore").style.display="none"}
  }

  export{displayMore}