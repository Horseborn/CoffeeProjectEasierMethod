
function View() {
    let html = '';
    for (let i = 0; i < model.drinks.length; i++) {
        let drink = model.drinks[i];
        html += /*html*/ `
        
            <div class="grid-container">
                <div class="grid-item grid-item-1">
                    ${drink.name}
                    <div id="SesongBrygg">${drink.total}</div>
                    <br><img onclick="SesongBrygg(${i},${drink.price})" src="${drink.img}">
                    
                </div>
            </div>
            
            
    `};

    html+= `
    
        <div class="img-container">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipart.info%2Fimages%2Fccovers%2F1531011033heart-emoji.png&f=1&nofb=1">
        <button onclick="clearData()" id="clearBtn">Clear data</button>
        </div>

    `

    document.getElementById('infoDiv').innerHTML = html;
}