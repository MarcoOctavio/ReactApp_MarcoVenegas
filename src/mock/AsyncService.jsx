const productos = [
    {
      id: '01',
      name: 'Cerveza Artesanal Rubia',
      description: 'Cerveza rubia de fermentación baja con sabor suave y fresco.',
      price: 80,
      stock: 100,
      category: 'Cerveza',
      img: '',
    },
    {
      id: '02',
      name: 'Cerveza Artesanal Oscura',
      description: 'Cerveza oscura con notas de café y chocolate.',
      price: 90,
      stock: 70,
      category: 'Cerveza',
      img: '',
    },
    {
      id: '03',
      name: 'Hidromiel Clásica',
      description: 'Bebida tradicional a base de miel, dulce y suave.',
      price: 120,
      stock: 40,
      category: 'Hidromiel',
      img: '',
    },
    {
      id: '04',
      name: 'Hidromiel Especiada',
      description: 'Hidromiel con especias aromáticas como canela y clavo.',
      price: 130,
      stock: 30,
      category: 'Hidromiel',
      img: '',
    },
    {
      id: '05',
      name: 'Vino Tinto Joven',
      description: 'Vino tinto afrutado, ideal para carnes y quesos.',
      price: 250,
      stock: 60,
      category: 'Vino',
      img: '',
    },
    {
      id: '06',
      name: 'Vino Blanco Seco',
      description: 'Vino blanco con notas cítricas y frescas.',
      price: 220,
      stock: 50,
      category: 'Vino',
      img: '',
    },
    {
      id: '07',
      name: 'Vino Rosado',
      description: 'Vino rosado ligero con aroma a frutas rojas.',
      price: 230,
      stock: 45,
      category: 'Vino',
      img: '',
    },
    {
      id: '08',
      name: 'Sidra Natural',
      description: 'Sidra artesanal elaborada con manzanas orgánicas.',
      price: 70,
      stock: 80,
      category: 'Sidra',
      img: '',
    },
    {
      id: '09',
      name: 'Sidra de Pera',
      description: 'Sidra refrescante hecha con jugo de pera.',
      price: 75,
      stock: 65,
      category: 'Sidra',
      img: '',
    },
    {
      id: '10',
      name: 'Cerveza IPA',
      description: 'Cerveza con aroma intenso a lúpulo y notas cítricas.',
      price: 95,
      stock: 90,
      category: 'Cerveza',
      img: '',
    },
    {
      id: '11',
      name: 'Cerveza Lager',
      description: 'Cerveza clara, ligera y refrescante.',
      price: 85,
      stock: 110,
      category: 'Cerveza',
      img: '',
    },
    {
      id: '12',
      name: 'Hidromiel Frutos Rojos',
      description: 'Hidromiel con mezcla de frutos rojos.',
      price: 135,
      stock: 35,
      category: 'Hidromiel',
      img: '',
    },
    {
      id: '13',
      name: 'Hidromiel Citrus',
      description: 'Hidromiel con toques cítricos refrescantes.',
      price: 125,
      stock: 40,
      category: 'Hidromiel',
      img: '',
    },
    {
      id: '14',
      name: 'Vino Tinto Reserva',
      description: 'Vino tinto de guarda, con sabor intenso y complejo.',
      price: 350,
      stock: 25,
      category: 'Vino',
      img: '',
    },
    {
      id: '15',
      name: 'Vino Blanco Dulce',
      description: 'Vino blanco con notas dulces y florales.',
      price: 260,
      stock: 40,
      category: 'Vino',
      img: '',
    },
    {
      id: '16',
      name: 'Sidra Rosé',
      description: 'Sidra suave con color rosado y notas frutales.',
      price: 80,
      stock: 50,
      category: 'Sidra',
      img: '',
    },
    {
      id: '17',
      name: 'Sidra de Durazno',
      description: 'Sidra dulce y refrescante con sabor a durazno.',
      price: 85,
      stock: 45,
      category: 'Sidra',
      img: '',
    },
    {
      id: '18',
      name: 'Top IPA Premium',
      description: 'IPA de alta gama con lúpulos seleccionados.',
      price: 150,
      stock: 20,
      category: 'Top 10',
      img: '',
    },
    {
      id: '19',
      name: 'Top Vino Gran Reserva',
      description: 'Vino tinto premium con crianza prolongada.',
      price: 500,
      stock: 10,
      category: 'Top 10',
      img: '',
    },
    {
      id: '20',
      name: 'Top Hidromiel Deluxe',
      description: 'Hidromiel de edición limitada con miel de alta calidad.',
      price: 200,
      stock: 15,
      category: 'Top 10',
      img: '',
    },
  ];
  

export const getProducts = () => {
  let error = false // Cambia a true para simular un error
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(error) {
                reject('Error en la carga de productos');
            }else {
                resolve(productos);
            }
        }, 2000);
    });
};

export const getOneProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const oneproduct = productos.find((product) => product.id === id);
        if(oneproduct) {
            resolve(oneproduct);
        }else {
            reject('Producto no encontrado');
        }
    }, 2000)
  })
}