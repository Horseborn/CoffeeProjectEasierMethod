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

