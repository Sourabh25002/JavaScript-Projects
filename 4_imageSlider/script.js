const image = [
    "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1699603392285-e467ea91ec1d?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1698057772761-b236d1588dd3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1698725224267-472f2f3cf858?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

let i = 0;
document.querySelector("img").src = image[0];

function leftImage(){
    if(i == 0){
        i = 3;
        document.querySelector("img").src = image[i];
    }
    else{
        i--;
        document.querySelector("img").src = image[i];
    }
}

function rightImage(){
    if(i == 3){
        i = 0;
        document.querySelector("img").src = image[i];
    }
    else{
        i++;
        document.querySelector("img").src = image[i];
    }
}