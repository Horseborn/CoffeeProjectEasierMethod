let bannerGfPics = [
    "https://imgur.com/ZRzlNLf.jpg",
    "https://i.imgur.com/EufSwMy.jpg",
    "https://ibb.co/6NpKJdp",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flearnenglishteens.britishcouncil.org%2Fsites%2Fteens%2Ffiles%2Fstyles%2Farticle%2Fpublic%2Frs930_135120665-low.jpg%3Fitok%3DFSq5YONq&f=1&nofb=1"

]
let next = 0;


let model = {
    drinks: [
        {
        id: 0,    
        name: 'Sesong Brygg',
        price: 42,
        total: 0,
        img: "https://no.espressohouse.com/app/uploads/sites/3/2016/06/COFFEE_BREW_SPECIAL_BREW_1.png"
    },
    {
        name: 'Signatur Brygg',
        price: 42,
        total: 0,
        img: "https://no.espressohouse.com/app/uploads/sites/3/2016/06/COFFEE_BREW.png",
    },
    {
        name: 'Varm Te',
        price: 39,
        total: 0,
        img: "https://no.espressohouse.com/app/uploads/sites/3/2017/06/TEA_WHITE_CHERRY.png"
        
    },
    {
        name: 'Caffé Latte',
        price: 46,
        total: 0,
        img: "https://no.espressohouse.com/app/uploads/sites/3/2016/06/CAFFE_LATTE.png"
        
    },
    {
        name: 'Cappuccino',
        price: 43,
        total: 0,
        img: "https://no.espressohouse.com/app/uploads/sites/3/2016/06/CAPPUCCINO.png"
    },
    {
        name: 'Flat White',
        price: 52,
        total: 0,
        img: "https://no.espressohouse.com/app/uploads/sites/3/2016/06/FLAT_WHITE.png"
    },
    {
        name: 'Latte Macchiato',
        price: 46,
        total: 0,
        img: "https://no.espressohouse.com/app/uploads/sites/3/2016/06/LATTE_MACCHIATO.png"
    },
    {
        name: 'Cortado',
        price: 46,
        total: 0,
        img: "https://no.espressohouse.com/app/uploads/sites/3/2016/05/CORTADO.png"
    },
    {
        name: 'Espresso',
        price: 29,
        total: 0,
        img: "https://no.espressohouse.com/app/uploads/sites/3/2016/06/ESPRESSO.png"
    },
    
    {
        name: 'Americano',
        price: 35,
        total: 0,
        img: "https://no.espressohouse.com/app/uploads/sites/3/2016/06/COFFEE_BREW.png"
    },
    {
        name: 'Ice latte',
        price: 49,
        total: 0,
        img: "https://no.espressohouse.com/app/uploads/sites/3/2016/06/ICELATTE.png"
    },
    {
        name: 'Iced Americano',
        price: 35,
        total: 0,
        img: "./img/iced-americano.png"
    },
    {
        name: 'Iced Flat White',
        price: 52,
        total: 0,
        img: "./img/iced-flat-white.png"
    },
    ],

    totalSum: 0,
}