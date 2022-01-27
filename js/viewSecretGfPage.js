
function showSecretPage(){
    document.getElementById("infoDiv").innerHTML =
    `
    //make this work somehow idk
            <p>help a bruver out</p>
           <div style="background-image:url('${bannerGfPics[next]}')">
         //   <section id="showcase" style="background-image:url('${bannerGfPics[next]}')"
           </div>
    
    
    
    
    
    `;
    showImgs();

    
}


function showImgs(){
    setTimeout(nxtPic, 1000)
}

function nxtPic(){
    if (next == 10){
        next = -1
    }
    console.log("helo")
    next++
    showSecretPage();
}