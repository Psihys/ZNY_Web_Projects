const html = document.documentElement;
const switchThemaButton = document.getElementById("switch-theme-button")

switchThemaButton.addEventListener("click", () =>{
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        
    }else{
        
        html.classList.add("dark")
    }
})