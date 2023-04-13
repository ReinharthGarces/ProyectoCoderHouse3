const products = [
  {
    id: '001',
    name: 'TV 60',
    price: 9000,
    category: 'Televisores',
    // img: '',
    stock: 20,
    description: 'TV Qled de 60'
  },

  {
    id: '002',
    name: 'TV 50',
    price: 7000,
    category: 'Televisores',
    // img: '',
    stock: 30,
    description: 'TV Qled de 50'
  },

  {
    id: '003',
    name: 'TV 40',
    price: 5000,
    category: 'Televisores',
    // img: '',
    stock: 10,
    description: 'TV Qled de 40'
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