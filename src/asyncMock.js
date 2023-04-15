const products = [
  {
    id: '001',
    name: 'Iphone 13 Pro Max',
    price: 499.991,
    category: 'Telefonos',
    img: '/images/Telefonos/Iphone13-ProMax256gb.jpg',
    stock: 34,
    description: 'Apple iPhone 13 Pro Max (256 GB)'
  },

  {
    id: '002',
    name: 'Asus zenbook 4K OLED 13.3',
    price: 430.992,
    category: 'Notebooks',
    img: '/images/Notebooks/Notebook-Asus-Zenbook-Duo-I7-16Gb-1t-Win11.jpg',
    stock: 30,
    description: 'Notebook Asus Zenbook UX371 4K OLED 13.3" Core I5 1135G7 8GB 1TB'
  },

  {
    id: '003',
    name: 'Smart TV LG 60',
    price: 169.999,
    category: 'Televisores',
    img: '/images/Televisores/TV-LG-AI-ThinQ-60UP7750PSB.jpg',
    stock: 10,
    description: 'Smart TV LG AI ThinQ 60UP7750PSB LCD webOS 6.0 4K 60" 100V/240V'
  },

  {
    id: '004',
    name: 'Gigabyte Aero 16 XE5 UHD',
    price:  909.999,
    category: 'Notebooks',
    img: '/images/Notebooks/Notebook-Gamer-Gigabyte-Aero16-W11-120hz.jpg',
    stock: 13,
    description: 'Gigabyte Aero 16 XE5 UHD AMOLED HDR 16" Core I7 12700H 16GB 4800Mhz 1TB SSD NVMe RTX 3070TI W11 120H'
  },

  {
    id: '005',
    name: 'Notebook Gamer Dell 15.6"',
    price: 710.999,
    category: 'Notebooks',
    img: '/images/Notebooks/Notebook-Dell-Alienware-RTX3060-W10-144HZ.jpg',
    stock: 41,
    description: 'Dell Alienware 15.6" Core i7 11800H 16GB 512GB SSD NVMe RTX 3060 W10 144Hz'
  },

  {
    id: '006',
    name: 'TV SAMSUNG 43 QLED 4K',
    price: 349.999,
    category: 'Televisores',
    img: '/images/Televisores/TV-Gamer-Samsung-43-QLED-4k.jpg',
    stock: 82,
    description: 'TV GAMER SAMSUNG 43 NEO QLED 4K QN90B 144Hz Freesync'
  },

  {
    id: '007',
    name: 'TV SAMSUNG 65 QN85B',
    price: 699.999,
    category: 'Televisores',
    img: '/images/Televisores/TV-Gamer-Samsung-65-QLED-4k.jpg',
    stock: 67,
    description: 'TV SAMSUNG 65 NEO QLED 4K QN85B 120Hz Freesync '
  },

  {
    id: '008',
    name: 'Iphone 14 Pro 256GB',
    price: 669.999,
    category: 'Telefonos',
    img: '/images/Telefonos/Iphone-14-pro-256gb.jpg',
    stock: 18,
    description: 'Apple iPhone 14 Pro (256 GB)'
  },

  {
    id: '009',
    name: 'Samsung Galaxy S23 Ultra',
    price: 528.999,
    category: 'Telefonos',
    img: '/images/Telefonos/Samsung-Galaxy-S23-Ultra-12gb.jpg',
    stock: 22,
    description: 'Samsung Galaxy S23 Ultra 12gb 512gb'
  },
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
      resolve(products.filter(prod => prod.category === productoCategory))
    }, 400)
  })
  
}