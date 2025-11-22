//CONFIGURACIÓN DE COLORES POR RAREZA
const COLORES_RAREZA = {
    comun: '#4ade80',      // Verde
    raro: '#3b82f6',       // Azul
    mixto: '#fd4343',      // Rojo
    epico: '#a855f7',      // Morado
    legendario: '#eab308'  // Dorado
};

//DATOS DE LOS COFRES Y JUEGOS
const COFRES = [
    {
        id: '1',
        nombre: 'Cofre Novato',
        precio: 10,
        color: '#4ade80',
        imagen: 'tipos/madera.jpg',
        descripcion: 'Ideal para empezar. Contiene juegos indies divertidos y clásicos.',
        objetos: [
            { nombre: 'Stardew Valley', img: 'img/stardew.png', valor: 5, rareza: 'comun' },
            { nombre: 'Terraria', img: 'img/terraria.jpg', valor: 5, rareza: 'comun' },
            { nombre: 'Hollow Knight', img: 'img/hollow.png', valor: 10, rareza: 'raro' },
            { nombre: 'Celeste', img: 'img/celeste.png', valor: 8, rareza: 'raro' },
            { nombre: 'Geometry Dash', img: 'img/geometry.jpg', valor: 5, rareza: 'comun' },
            { nombre: 'Brotato', img: 'img/brotato.png', valor: 5, rareza: 'comun' },
            { nombre: 'Among Us', img: 'img/amongus.jpg', valor: 3, rareza: 'comun' },
            { nombre: 'Undertale', img: 'img/undertale.jpg', valor: 8, rareza: 'raro' },
            { nombre: 'Cuphead', img: 'img/cuphead.jpg', valor: 12, rareza: 'epico' }
        ]
    },
    {
        id: '2',
        nombre: 'Cofre Raro',
        precio: 25,
        color: '#3b82f6',
        imagen: 'tipos/raro.jpg',
        descripcion: 'Una mezcla explosiva. Desde clásicos hasta joyas ocultas.',
        objetos: [
            { nombre: 'Subnautica', img: 'img/subnautica.png', valor: 20, rareza: 'raro' },
            { nombre: 'The Forest', img: 'img/forest.png', valor: 15, rareza: 'raro' },
            { nombre: 'Project Zomboid', img: 'img/zomboid.jpg', valor: 18, rareza: 'raro' },
            { nombre: 'Phasmophobia', img: 'img/phasmo.jpg', valor: 12, rareza: 'comun' },
            { nombre: 'Rust', img: 'img/rust.jpg', valor: 30, rareza: 'epico' },
            { nombre: 'Sea of Thieves', img: 'img/sea.jpg', valor: 25, rareza: 'epico' },
            { nombre: 'Valheim', img: 'img/valheim.jpg', valor: 15, rareza: 'raro' },
            { nombre: 'Dead by Daylight', img: 'img/dbd.jpg', valor: 15, rareza: 'raro' }
        ]
    },
    {
        id: '3',
        nombre: 'Cofre Mixto',
        precio: 40,
        color: '#fd4343',
        imagen: 'tipos/mixto.jpg',
        descripcion: 'Solo para coleccionistas. Ediciones Deluxe y Pre-orders.',
        objetos: [
            { nombre: 'Portal 1 + 2', img: 'img/portal.png', valor: 10, rareza: 'comun' },
            { nombre: 'Left 4 Dead 2', img: 'img/lfd.jpg', valor: 10, rareza: 'comun' },
            { nombre: 'Just Cause 3', img: 'img/jc3.jpg', valor: 30, rareza: 'epico' },
            { nombre: 'Celeste', img: 'img/celeste.png', valor: 20, rareza: 'raro' },
            { nombre: 'Euro Truck Sim 2', img: 'img/eurotruck.jpg', valor: 10, rareza: 'raro' },
            { nombre: 'Spider-Man', img: 'img/spiderman.jpg', valor: 50, rareza: 'epico' },
            { nombre: 'The Witcher 3', img: 'img/thewitcher.jpg', valor: 30, rareza: 'epico' },
            { nombre: 'Rust', img: 'img/rust.jpg', valor: 15, rareza: 'raro' },
            { nombre: 'No Mans Sky', img: 'img/nms.jpg', valor: 40, rareza: 'epico' },
            { nombre: 'Doom Eternal', img: 'img/doom.jpg', valor: 35, rareza: 'epico' }
        ]
    },
    {
        id: '4',
        nombre: 'Cofre Épico',
        precio: 60,
        color: '#a855f7',
        imagen: 'tipos/epico.jpg',
        descripcion: 'Para los más exigentes. Títulos AAA y sagas completas.',
        objetos: [
            { nombre: 'God of War Ragnarok', img: 'img/gow.jpg', valor: 60, rareza: 'epico' },
            { nombre: 'Spider-Man 2', img: 'img/spiderman2.jpg', valor: 70, rareza: 'legendario' },
            { nombre: 'Resident Evil 4', img: 'img/re4.jpg', valor: 40, rareza: 'epico' },
            { nombre: 'Final Fantasy XVI', img: 'img/ff16.jpg', valor: 70, rareza: 'legendario' },
            { nombre: 'Little Nightmares 3', img: 'img/little.jpg', valor: 40, rareza: 'epico' },
            { nombre: 'FC 26', img: 'img/fc26.jpg', valor: 70, rareza: 'legendario' },
            { nombre: 'Dying Light 2', img: 'img/dy.jpg', valor: 50, rareza: 'epico' },
            { nombre: 'Red Dead Redemption 2', img: 'img/rdr2.jpg', valor: 50, rareza: 'epico' },
            { nombre: 'Hogwarts Legacy', img: 'img/hogwarts.jpg', valor: 55, rareza: 'epico' },
            { nombre: 'Cyberpunk 2077', img: 'img/cyberpunk.jpg', valor: 45, rareza: 'epico' }
        ]
    },
    {
        id: '5',
        nombre: 'Cofre Leyenda',
        precio: 110,
        color: '#eab308',
        imagen: 'tipos/legendario.jpg',
        descripcion: 'Solo para coleccionistas. Ediciones Deluxe y Pre-orders.',
        objetos: [
            { nombre: 'GTA VI (Pre-order)', img: 'img/gta6.jpg', valor: 120, rareza: 'legendario' },
            { nombre: 'Elden Ring Deluxe', img: 'img/elden.jpg', valor: 130, rareza: 'legendario' },
            { nombre: 'Zelda Collector', img: 'img/zelda.jpg', valor: 150, rareza: 'legendario' },
            { nombre: 'Baldurs Gate 3', img: 'img/bg3.jpg', valor: 80, rareza: 'epico' },
            { nombre: 'Baldurs Gate 3 Collecionista', img: 'img/bg3c.png', valor: 150, rareza: 'legendario' },
            { nombre: 'Battlefield 6', img: 'img/bf6.jpg', valor: 90, rareza: 'epico' },
            { nombre: 'Ghost of Yotei (PS5)', img: 'img/ghost.jpg', valor: 90, rareza: 'legendario' },
            { nombre: 'Starfield Premium', img: 'img/starfield.jpg', valor: 90, rareza: 'epico' },
            { nombre: 'Call of Duty Black Ops 7', img: 'img/cod7.jpg', valor: 90, rareza: 'epico' }
        ]
    }
];

//ESTADO DE USUARIO
var usuarioActual = JSON.parse(sessionStorage.getItem('kc_usuario')) || null;

//INICIALIZACION AL CARGAR LA PAGINA
document.addEventListener('DOMContentLoaded', function () {
    if (window.lucide) lucide.createIcons();
    renderizarBarraNavegacion();

    // Detectar que pagina estamos viendo
    if (document.getElementById('rejilla-cofres')) {
        iniciarTienda();
    }
    if (document.getElementById('rejilla-destacados-inicio')) {
        iniciarInicio();
    }
});

function anadirSaldo() {
    if (!usuarioActual) return;

    var entrada = prompt("¿Cuánto saldo quieres añadir?", "50");
    if (entrada === null) return;

    var cantidad = parseFloat(entrada);

    if (!isNaN(cantidad) && cantidad > 0) {
        usuarioActual.saldo += cantidad;
        sessionStorage.setItem('kc_usuario', JSON.stringify(usuarioActual));
        alert("¡Has añadido €" + cantidad.toFixed(2) + " a tu cuenta!");  
        renderizarBarraNavegacion();
    } else {
        alert("Por favor, introduce una cantidad numérica válida mayor que cero");
    }
}


//  RENDERIZADO DE UI DE LA BARRA DE NAVEGACIÓN 

function renderizarBarraNavegacion() {
    var seccionAuth = document.getElementById('seccion-auth');
    if (!seccionAuth) return;

    if (usuarioActual) {
        seccionAuth.innerHTML =
            '<div class="acciones-perfil">' +
            '<button onclick="anadirSaldo()" class="boton-agregar-fondos">' +
            '<i data-lucide="plus-circle" style="width: 1rem; height: 1rem;"></i>' +
            '<span>€' + usuarioActual.saldo.toFixed(2) + '</span>' + 
            '</button>' +
            '<div style="display: flex; align-items: center; gap: 0.75rem; color: white;">' +
            '<div style="width: 2rem; height: 2rem; background: #3f3f46; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem;">' +
            usuarioActual.usuario.substring(0, 2).toUpperCase() +
            '</div>' +
            '<span style="font-weight: 500;">' + usuarioActual.usuario + '</span>' +
            '</div>' +
            '<button onclick="cerrarSesion()" class="boton-cerrar-sesion" title="Cerrar Sesión">' +
            '<i data-lucide="log-out" style="width: 1.25rem; height: 1.25rem;"></i>' +
            '</button>' +
            '</div>';
    } else {
        seccionAuth.innerHTML =
            '<a href="login.html" class="boton boton-primario" style="padding: 0.5rem 1.5rem; font-size: 0.875rem;">' +
            'Iniciar Sesión' +
            '</a>';
    }

    if (window.lucide) lucide.createIcons();
}


//  PÁGINAS TIENDA E INICIO 

function iniciarTienda() {
    renderizarCofres(COFRES, 'rejilla-cofres');

    var buscador = document.getElementById('input-busqueda');
    if (buscador) {
        buscador.addEventListener('input', function (e) {
            var termino = e.target.value.toLowerCase();
            var filtrados = COFRES.filter(function (c) {
                return c.nombre.toLowerCase().includes(termino);
            });
            renderizarCofres(filtrados, 'rejilla-cofres');
        });
    }
}

function iniciarInicio() {
    // Mostrar solo del índice 2 al 5 (los 3 cofres destacados)
    var destacados = COFRES.slice(2, 5);
    renderizarCofres(destacados, 'rejilla-destacados-inicio');
}
    //  RENDERIZADO DE COFRES
function renderizarCofres(lista, idContenedor) {
    var contenedor = document.getElementById(idContenedor);
    if (!contenedor) return;

    if (lista.length === 0) {
        contenedor.innerHTML = '<div style="grid-column: span 3; text-align: center; padding: 2.5rem; color: #71717a;">No se encontraron cofres.</div>';
        return;
    }

    var htmlCofres = '';

    lista.forEach(function (c) {
        // Generar miniaturas (máximo 3)
        var miniaturasHtml = '';
        var itemsMuestra = c.objetos.slice(0, 3);

        itemsMuestra.forEach(function (obj) {
            miniaturasHtml +=
                '<img src="' + obj.img + '" class="miniatura-cofre">';
        });

        if (c.objetos.length > 3) {
            miniaturasHtml += '<span style="font-size: 0.75rem; color: #71717a; display: flex; align-items: center;">+' + (c.objetos.length - 3) + '</span>';
        }

        // Construir tarjeta completa
        htmlCofres +=
             '<div class="tarjeta-cofre">' +
             '<div class="contenedor-imagen-cofre">' +
             '<img src="' + c.imagen + '">' +
             '<div class="precio-cofre">' +
             '€' + c.precio + 
             '</div>' +
            '<div class="contenido-cofre">' +
            '<h3 class="titulo-cofre">' + c.nombre + '</h3>' +
            '<p class="descripcion-cofre">' + c.descripcion + '</p>' +
            '<div class="miniaturas-cofre">' + miniaturasHtml + '</div>' +
            '<button onclick="intentarAbrir(\'' + c.id + '\')" class="boton-cofre" style="background: ' + c.color + '">' +
            '<i data-lucide="lock" style="width: 1rem; height: 1rem;"></i> Abrir' +
            '</button>' +
            '</div>' +
            '</div>';
    });

    contenedor.innerHTML = htmlCofres;

    if (window.lucide) lucide.createIcons();
}

//  LÓGICA DE APERTURA Y RULETA

function intentarAbrir(id) {
    if (!usuarioActual) {
        window.location.href = 'login.html';
        return;
    }

    // Buscar cofre por ID
    var cofre = null;
    for (var i = 0; i < COFRES.length; i++) {
        if (COFRES[i].id === id) {
            cofre = COFRES[i];
            break;
        }
    }

    if (usuarioActual.saldo < cofre.precio) {
        alert("Saldo insuficiente. Añade fondos haciendo clic en el botón de saldo.");
        return;
    }

    // Descontar saldo
    usuarioActual.saldo -= cofre.precio;
    sessionStorage.setItem('kc_usuario', JSON.stringify(usuarioActual));
    renderizarBarraNavegacion();

    // Preparar funcion de apertura 
    var modal = document.getElementById('modal-apertura');
    modal.classList.remove('oculto');
    modal.classList.add('activo');
    document.getElementById('fase-1').classList.remove('oculto');
    document.getElementById('fase-2').classList.add('oculto');
    document.getElementById('fase-3').classList.add('oculto');

    document.getElementById('img-modal').src = cofre.imagen;

    // Iniciar animacion  de la ruleta después de un breve retraso
    setTimeout(function () {
        iniciarRuleta(cofre);
    }, 500);
}

function iniciarRuleta(cofre) {
    document.getElementById('fase-1').classList.add('oculto');
    document.getElementById('fase-2').classList.remove('oculto');

    var pista = document.getElementById('pista-ruleta');
    pista.innerHTML = '';
    pista.style.transition = 'none';
    pista.style.transform = 'translateX(0)';

    // Determinar premio con probabilidades por rareza 
    var itemsPosibles = [];
    cofre.objetos.forEach(obj => {
        var peso = 1;
        if (obj.rareza === 'comun') peso = 50;
        if (obj.rareza === 'raro') peso = 30;
        if (obj.rareza === 'epico') peso = 15;
        if (obj.rareza === 'legendario') peso = 5;

        for (var k = 0; k < peso; k++) itemsPosibles.push(obj);
    });

    var itemGanador = itemsPosibles[Math.floor(Math.random() * itemsPosibles.length)];

    // Generar cinta de items (falsos + premio + falsos) 
    var itemsCinta = [];
    for (var i = 0; i < 50; i++) {
        itemsCinta.push(cofre.objetos[Math.floor(Math.random() * cofre.objetos.length)]);
    }
    itemsCinta[45] = itemGanador; // El ganador en la posición 45

    // Renderizar la cinta de items
    itemsCinta.forEach(function (item) {
        var div = document.createElement('div');
        div.style.minWidth = '10rem';
        div.style.height = '10rem';
        div.style.margin = '0 0.5rem';
        div.style.background = COLORES_RAREZA[item.rareza];
        div.style.borderRadius = '0.5rem';
        div.style.position = 'relative';
        div.style.overflow = 'hidden';
        div.style.border = '4px solid ' + COLORES_RAREZA[item.rareza];
        div.style.boxShadow = '0 0 15px ' + COLORES_RAREZA[item.rareza];
        div.style.boxSizing = 'border-box';

        var img = document.createElement('img');
        img.src = item.img;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';

        div.appendChild(img);
        pista.appendChild(div);
    });

    setTimeout(function () {
        var itemWidth = pista.children[0].offsetWidth + parseFloat(getComputedStyle(pista.children[0]).marginRight) * 2;
        var targetPos = (45 * itemWidth) + (itemWidth / 2);
        var randomOffset = Math.floor(Math.random() * (itemWidth * 0.4)) - (itemWidth * 0.2);
        targetPos += randomOffset;

        // cubic-bezier para una desaceleración suave
        pista.style.transition = 'transform 6s cubic-bezier(0.1, 0, 0.2, 1)';
        pista.style.transform = 'translateX(-' + targetPos + 'px)';

        setTimeout(function () {
            mostrarRecompensa(itemGanador);
        }, 6500);
    }, 100);
}

function mostrarRecompensa(item) {
    document.getElementById('fase-2').classList.add('oculto');
    document.getElementById('fase-3').classList.remove('oculto');
    document.getElementById('img-recompensa').src = item.img;
    document.getElementById('nombre-recompensa').innerText = item.nombre;
    document.getElementById('valor-recompensa').innerText = '€' + item.valor.toFixed(2);
    
    var badge = document.getElementById('insignia-rareza');
    badge.innerText = item.rareza.toUpperCase();
    badge.style.backgroundColor = COLORES_RAREZA[item.rareza];
    badge.style.color = item.rareza === 'legendario' || item.rareza === 'epico' ? 'white' : 'black';

    // Generar clave de activacion
    var clave = generarClave();
    document.getElementById('clave-activacion').innerText = clave;
}

    // Generar clave aleatoria en formato 16 caracteres
function generarClave() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var clave = '';
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            clave += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        if (i < 3) clave += '-';
    }
    return clave;
}

    // Obtiene el elemento con id "modal-apertura" y le añade la clase "oculto" quitandole la clase "activo"
function cerrarModal() {
    var modal = document.getElementById('modal-apertura');
    modal.classList.add('oculto');
    modal.classList.remove('activo');

    document.getElementById('fase-1').classList.remove('oculto');
    document.getElementById('fase-2').classList.add('oculto');
    document.getElementById('fase-3').classList.add('oculto');
}

// FUNCIONES DE LOGIN
function manejarLoginSimple(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('login-user').value;

    // Iniciamos sesion con saldo inicial de 100
    if (usuario) {
        var nuevoUsuario = {
            usuario: usuario,
            saldo: 100
        };
        sessionStorage.setItem('kc_usuario', JSON.stringify(nuevoUsuario));
        window.location.href = 'index.html';
    }
}

function cerrarSesion() {
    sessionStorage.removeItem('kc_usuario');
    window.location.href = 'index.html';
}