function SesongBrygg(i, change){
    let label = "SesongBrygg" + i;
    if (localStorage.getItem(label) === null){
        localStorage.setItem(label, 0);
    }
    let price = parseInt(localStorage.getItem(label));
    let newPrice = price + change;
    
    localStorage.setItem(label, newPrice);
    model.drinks[i].total = newPrice;
    
    
    
    
    
    let labelSum = "TotalSum"
    if (localStorage.getItem(labelSum) === null){
        localStorage.setItem(labelSum, 0);
    }
    let priceSum = parseInt(localStorage.getItem(labelSum));
    let newPriceSum = priceSum + change;
    
    localStorage.setItem(labelSum, newPriceSum);
    model.totalSum = newPriceSum;
    
    
    
    
    // let totSum = model.totalSum;
    
    //  localStorage.getItem(totSum);
    //  localStorage.setItem(totSum, change);

    // model.totalSum += change;
    showSecretPage()
}

function clearData(){
    
    localStorage.clear();

    for(let i = 0; i < model.drinks.length; i++){
    model.drinks[i].total = 0;
    model.totalSum = 0;
}
    View();
    
}

