function SesongBrygg(i, change){
    let label = "SesongBrygg" + i;
    if (localStorage.getItem(label) === null){
        localStorage.setItem(label, 0);
    }
    let price = parseInt(localStorage.getItem(label));
    let newPrice = price + change;
    
    localStorage.setItem(label, newPrice);
    model.drinks[i].total = newPrice;

    View();
}

function clearData(){
    
    localStorage.clear();

    for(let i = 0; i < model.drinks.length; i++){
    model.drinks[i].total = 0;
}
    View();
    
}

