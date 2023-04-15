const products = [
  {
    id: '001',
    name: 'Iphone 13 Pro Max',
    price: 9000,
    category: 'Telefonos',
    // img: '',
    stock: 20,
    description: 'Apple iPhone 13 Pro Max (256 GB)'
  },

  {
    id: '002',
    name: 'Asus zenbook',
    price: 7000,
    category: 'Notebooks',
    // img: '',
    stock: 30,
    description: 'Notebook Asus Zenbook Duo I7 16 Gb 1t Win11'
  },

  {
    id: '003',
    name: 'Smart TV LG 60',
    price: 5000,
    category: 'Televisores',
    // img: '',
    stock: 10,
    description: 'Smart TV LG AI ThinQ 60UP7750PSB LCD webOS 6.0 4K 60" 100V/240V'
  }
]

export const getProducts = () => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 400)
  })
}

export const getProductById = (productId) => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId))
    }, 400)
  })
}

export const getProductByCategory = (productoCategory) => {
  return new Promise ((resolve) => {
    setTimeout (() => {
      resolve(products.find(prod => prod.category === productoCategory))
    }, 400)
  })
  
}