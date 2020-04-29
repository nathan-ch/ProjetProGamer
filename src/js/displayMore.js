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

  export{displayMore}