const moreButton = document.getElementById("more-button")
const hideComponent = document.getElementById("more-component")

moreButton.onclick = () => {
    hideComponent.classList.toggle("hide")
    if (hideComponent.classList.contains("hide")){
        moreButton.innerHTML = '<i class="fas fa-link"></i> SEE MORE'
    }else{
        moreButton.innerHTML = '<i class="fas fa-link"></i> SEE LESS'
    }
    
}