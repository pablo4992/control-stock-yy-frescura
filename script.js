// 1. MAESTRO DE ARTÍCULOS
const productos = [
    { "codigo": "300052023", "descripcion": "3D MEGA QUESO 23GX120", "unidades_x_bulto": 120 },
    { "codigo": "300058395", "descripcion": "3D QUESO 43GX75X1", "unidades_x_bulto": 75 },
    { "codigo": "300060661", "descripcion": "3D QUESO 85GX27X1", "unidades_x_bulto": 27 },
    { "codigo": "300058397", "descripcion": "3D QUESO 143GX18X1", "unidades_x_bulto": 18 },
    { "codigo": "300065826", "descripcion": "CHEETOS ONDULADOS KETCHUP 40GX66", "unidades_x_bulto": 66 },
    { "codigo": "300065825", "descripcion": "CHEETOS ONDULADOS KETCHUP 80GX24", "unidades_x_bulto": 24 },
    { "codigo": "300058336", "descripcion": "CHEETOS 23GX108X1", "unidades_x_bulto": 108 },
    { "codigo": "300059433", "descripcion": "CHEETOS QUESO 43GX70X1", "unidades_x_bulto": 70 },
    { "codigo": "300060664", "descripcion": "CHEETOS QUESO 85GX24X1", "unidades_x_bulto": 24 },
    { "codigo": "300060662", "descripcion": "CHEETOS QUESO 140GX18X1", "unidades_x_bulto": 18 },
    { "codigo": "300060663", "descripcion": "CHEETOS QUESO 229GX12X1", "unidades_x_bulto": 12 },
    { "codigo": "300061011", "descripcion": "CHEETOS QUESO CREMA 43GX66", "unidades_x_bulto": 66 },
    { "codigo": "300061010", "descripcion": "CHEETOS QUESO CREMA 85GX24", "unidades_x_bulto": 24 }
    // ... Agrega el resto de tus productos aquí
];

// 2. VARIABLES DE ESTADO (Carga inicial desde LocalStorage)
let conteosEfectuados = JSON.parse(localStorage.getItem('misConteos')) || [];

// 3. ELEMENTOS DEL DOM
const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');
const detailCard = document.getElementById('detailCard');
const selectedProductName = document.getElementById('selectedProductName');
const sessionEntries = document.getElementById('sessionEntries');
const exportButton = document.getElementById('exportButton');

// 4. LÓGICA DE BÚSQUEDA
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    if (term.length < 2) {
        productList.innerHTML = "Escriba para buscar...";
        return;
    }

    const filtrados = productos.filter(p => 
        p.descripcion.toLowerCase().includes(term) || p.codigo.includes(term)
    );

    productList.innerHTML = "";
    filtrados.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product-item'; // Asegúrate de tener este estilo en CSS
        div.textContent = `${p.codigo} - ${p.descripcion}`;
        div.onclick = () => seleccionarProducto(p);
        productList.appendChild(div);
    });
});

function seleccionarProducto(p) {
    selectedProductName.textContent = p.descripcion;
    detailCard.classList.remove('hidden');
    productList.innerHTML = "";
    searchInput.value = "";
}

// 5. AGREGAR CONTEO Y GUARDAR
document.getElementById('addEntryButton').addEventListener('click', () => {
    const bultos = document.getElementById('cantidadBultos').value;
    const unidades = document.getElementById('unidadesSueltas').value;
    const fecha = document.getElementById('fechaVencimiento').value;

    if (!fecha) return alert("Ingrese fecha");

    const nuevoItem = {
        nombre: selectedProductName.textContent,
        bultos,
        unidades,
        fecha,
        hora: new Date().toLocaleTimeString()
    };

    conteosEfectuados.push(nuevoItem);
    
    // GUARDAR EN MEMORIA
    localStorage.setItem('misConteos', JSON.stringify(conteosEfectuados));
    
    actualizarVista();
    detailCard.classList.add('hidden');
    document.getElementById('productForm').reset();
});

// 6. ACTUALIZAR TABLA
function actualizarVista() {
    if (conteosEfectuados.length === 0) {
        sessionEntries.innerHTML = "No hay datos guardados aún.";
        exportButton.disabled = true;
        return;
    }

    exportButton.disabled = false;
    let tabla = `<table>
        <tr><th>Producto</th><th>Bultos</th><th>Sueltas</th><th>Vence</th><th>Hora</th></tr>`;
    
    conteosEfectuados.forEach(item => {
        tabla += `<tr>
            <td>${item.nombre}</td>
            <td>${item.bultos}</td>
            <td>${item.unidades}</td>
            <td>${item.fecha}</td>
            <td>${item.hora}</td>
        </tr>`;
    });
    tabla += `</table>`;
    sessionEntries.innerHTML = tabla;
}

// 7. BOTÓN NUEVO CONTEO (Limpiar todo)
document.getElementById('newCountButton').addEventListener('click', () => {
    if (confirm("¿Borrar todo el conteo actual?")) {
        localStorage.removeItem('misConteos');
        conteosEfectuados = [];
        actualizarVista();
    }
});

// Cargar datos al abrir la página
actualizarVista();
