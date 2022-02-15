
function showSecretPage(){
    document.getElementById("infoDiv").innerHTML =
    `
    
           <div id="divGfBanner" style=" background-image:url('${bannerGfPics[next]}')">
        <div id="borderBox">
        
        <p>Jeg elsker deg bebbis</p>
        </div>
           </div>
    
    <button onclick="View()">secret</button>
    
    
    
    `;
    showImgs();

    
}


function showImgs(){
    setTimeout(nxtPic, 5000)
}

function nxtPic(){
    if (next == 4){
        next = -1
    }
    console.log("helo")
    next++
    showSecretPage()
    
}