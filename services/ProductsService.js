const PRODUCTS = [
    {
        id: 100,
        name: '',
        price: 10.00,
        color: "",
        size: 41,
        image: require('../assets/dress 4.jpg'),
        description: ''
    },
    {
        id: 101,
        name: '',
        price: 11.00,
        color: '',
        size: 50,
        image: require('../assets/dress 4.jpg'),
        description: ''
    },
    {
        id: 102,
        name: '',
        price: 8.00,
        color: '',
        size: 90,
        image: require('../assets/dress 4.jpg'),
        description: ''
    },
    {
        id: 103,
        name: '',
        price: 10.00,
        color: '',
        size: 42,
        image: require('../assets/dress 3.jpg'),
        description: ''
    },
    {
        id: 104,
        name: '',
        price: 10.00,
        color: '',
        size: 41,
        image: require('../assets/dress 3.jpg'),
        description: ''
    },
    {
        id: 105,
        name: '',
        price: 10.00,
        color: '',
        size: 40,
        image: require('../assets/dress 3.jpg'),
        description: ''
    },
    {
        id: 106,
        name: '',
        price: 10.00,
        color: '',
        size: 40,
        image: require('../assets/dress 3.jpg'),
        description: ''
    },
    {
        id: 107,
        name: '',
        price: 8.00,
        color: 'Red',
        size: 39,
        image: require('../assets/dress 3.jpg'),
        description: ''
    },
    {
        id: 108,
        name: '',
        price: 10.00,
        color: '',
        size: 40.5,
        image: require('../assets/dress 3.jpg'),
        description: ''
    },
    {
        id: 109,
        name: '',
        price: 10.00,
        color: '',
        size: 41,
        image: require('../assets/dress 3.jpg'),
        description: ''
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}