const productos = {
    buzo: {
      nombre: "Buzo Oversize Negro",
      precio: "$25.000",
      material: "Algodón suave y rellenos de friza",
      detalles: "Estampados con termo fusión",
      imagenes: ["https://i.imgur.com/XGTr0A9.png", "https://i.imgur.com/G921I2k.png"]
    },
    pantalon: {
      nombre: "Pantalón Baggie",
      precio: "$30.000",
      material: "Tela de jean",
      detalles: "Diseños bordados a máquina",
      imagenes: ["https://imgur.com/sU4MKHS.jpeg", "https://imgur.com/8xVTx7g.jpeg"]
    },
    remera: {
      nombre: "Remera Oversize Beige",
      precio: "$18.000",
      material: "Tela liviana y fresca",
      detalles: "Cuello y costuras reforzadas",
      imagenes: ["https://imgur.com/KPnlw0e.jpeg", "https://i.imgur.com/PDIr4Yq.jpeg"]
    },
    camisa: {
      nombre: "Buzo Oversize gris",
      precio: "$27.000",
      material: "Algodon suave y rellenos de friza",
      detalles: "estampado con termo fusion",
      imagenes: ["https://imgur.com/iYx8Z7u.jpeg", "https://imgur.com/7Ig7bdw.jpeg"]
    },
    short: {
      nombre: "Buzo Oversize Negro",
      precio: "$20.000",
      material: "Algodon suave y relleno de friza",
      detalles: "Estampado con termo fusion ",
      imagenes: ["https://imgur.com/ON0SjGR.jpeg", "https://imgur.com/QVKaUsT.jpeg"]
    },
    campera: {
      nombre: "Remera Beige Claro",
      precio: "$32.000",
      material: "Tela liviana y fresca",
      detalles: "cuello y costuras reforzadas",
      imagenes: ["https://imgur.com/NOh6Txr.jpeg", "https://imgur.com/ShtxLuP.jpeg"]
    },
    gorra: {
      nombre: "Remera Oversize Azul",
      precio: "$12.000",
      material: "tela liviana y fresca",
      detalles: "cuello y costuras reforzadas",
      imagenes: ["https://i.imgur.com/iNMhhQe.jpeg", "https://i.imgur.com/oobzdS0.jpeg"]
    },
    jean: {
      nombre: "Remera Oversize Negra",
      precio: "$29.000",
      material: "tela liviana y fresca",
      detalles: "cuello y costuras reforzafas",
      imagenes: ["https://i.imgur.com/yY7IRbM.jpeg", "https://i.imgur.com/rpsdyus.jpeg"]
    },
    musculosa: {
      nombre: "Remera Oversize Negra",
      precio: "$15.000",
      material: "tela liviana y fresca",
      detalles: "cuello y costuras reforzadas",
      imagenes: ["https://i.imgur.com/TwXfFNi.png", "https://i.imgur.com/r5PsBBh.png"]
    }
  };
  
  document.querySelectorAll('.swiper').forEach((el) => {
    new Swiper(el, {
      loop: true,
      navigation: {
        nextEl: el.querySelector('.swiper-button-next'),
        prevEl: el.querySelector('.swiper-button-prev')
      }
    });
  });
  
  function verProducto(tipo) {
    const prod = productos[tipo];
    document.getElementById('nombreProd').innerText = prod.nombre;
    document.getElementById('precioProd').innerText = prod.precio;
    document.getElementById('materialProd').innerText = prod.material;
    document.getElementById('detalleProd').innerText = prod.detalles;
  
    const swiperDetalle = document.getElementById('swiperDetalle');
    swiperDetalle.innerHTML = '';
    prod.imagenes.forEach(src => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `<img src="${src}" alt="${prod.nombre}">`;
      swiperDetalle.appendChild(slide);
    });
  
    document.getElementById('vistaCatalogo').style.display = 'none';
    document.getElementById('detalleVista').style.display = 'block';
  
    new Swiper('.swiper-detalle', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      loop: true,
    });
  }
  
  function volverCatalogo() {
    document.getElementById('detalleVista').style.display = 'none';
    document.getElementById('vistaCatalogo').style.display = 'block';
  }
  