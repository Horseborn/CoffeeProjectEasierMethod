
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

    document.getElementById('infoDiv').innerHTML = html;
}