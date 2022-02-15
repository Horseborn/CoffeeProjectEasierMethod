let bannerGfPics = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F10%2F808152-panoramic-mountain-lake-switzerland-beautiful-background-snow.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wallpapers13.com%2Fwp-content%2Fuploads%2F2015%2F12%2FBeautiful-Spring-Wallpaper-1920x1440.jpg&f=1&nofb=1",
    "https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/rs930_135120665-low.jpg?itok=FSq5YONq",
    "https://wallup.net/wp-content/uploads/2019/09/952343-forest-trees-nature-landscape-tree-autumn-fall.jpg"


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