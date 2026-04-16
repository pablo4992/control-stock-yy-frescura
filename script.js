// 1. MAESTRO DE PRODUCTOS COMPLETO
const productos = [
  { "codigo": "300058397", "descripcion": "3D QUESO 143G", "unidades_x_bulto": 18 },
  { "codigo": "300058395", "descripcion": "3D QUESO 43G", "unidades_x_bulto": 75 },
  { "codigo": "300060661", "descripcion": "3D QUESO 85G", "unidades_x_bulto": 27 },
  { "codigo": "300054823", "descripcion": "CHEETOS 151G", "unidades_x_bulto": 18 },
  { "codigo": "300060190", "descripcion": "DORITOS QUESO 129G", "unidades_x_bulto": 19 },
  { "codigo": "300060193", "descripcion": "LAYS CLASICAS 134G X18", "unidades_x_bulto": 18 },
  { "codigo": "300052773", "descripcion": "LAYS CLASICAS 145G", "unidades_x_bulto": 18 },
  { "codigo": "300059811", "descripcion": "LAYS ONDAS FH 70G", "unidades_x_bulto": 28 },
  { "codigo": "300063273", "descripcion": "MANI CON PIEL 135G", "unidades_x_bulto": 40 },
  { "codigo": "300060094", "descripcion": "PEHUAMAR PALIQUESO 165G", "unidades_x_bulto": 21 }
  // Nota: Puedes seguir pegando el resto de los productos aquí siguiendo el mismo formato
];

let registrosSesion = [];
let productoSeleccionado = null;

// Elementos del DOM
const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');
const detailCard = document.getElementById('detailCard');
const selectedProductName = document.getElementById('selectedProductName');
const sessionEntries = document.getElementById('sessionEntries');
const exportButton = document.getElementById('exportButton');

// Función de Búsqueda
searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();
    productList.innerHTML = '';
    
    if (term.length < 2) {
        productList.innerHTML = 'Ingrese al menos 2 letras...';
        return;
    }

    const filtrados = productos.filter(p => 
        p.descripcion.toLowerCase().includes(term) || p.codigo.includes(term)
    );

    if (filtrados.length === 0) {
        productList.innerHTML = 'No se encontraron productos.';
    } else {
        filtrados.forEach(p => {
            const div = document.createElement('div');
            div.style.padding = '10px';
            div.style.borderBottom = '1px solid #ddd';
            div.style.cursor = 'pointer';
            div.innerText = `${p.descripcion} (Bulto: ${p.unidades_x_bulto})`;
            div.onclick = () => seleccionarProducto(p);
            productList.appendChild(div);
        });
    }
});

function seleccionarProducto(p) {
    productoSeleccionado = p;
    selectedProductName.innerText = p.descripcion;
    detailCard.classList.remove('hidden');
    productList.innerHTML = '';
    searchInput.value = p.descripcion;
}

// Agregar producto al registro
document.getElementById('addEntryButton').onclick = () => {
    const bultos = parseInt(document.getElementById('cantidadBultos').value) || 0;
    const unidades = parseInt(document.getElementById('unidadesSueltas').value) || 0;
    const fecha = document.getElementById('fechaVencimiento').value;

    if (!fecha) { alert("Debe ingresar la fecha de vencimiento"); return; }

    const total = (bultos * productoSeleccionado.unidades_x_bulto) + unidades;

    registrosSesion.push({
        codigo: productoSeleccionado.codigo,
        descripcion: productoSeleccionado.descripcion,
        bultos,
        unidades,
        total,
        vencimiento: fecha
    });

    actualizarVista();
    // Resetear formulario
    detailCard.classList.add('hidden');
    document.getElementById('productForm').reset();
    searchInput.value = '';
    searchInput.focus();
};

function actualizarVista() {
    if (registrosSesion.length === 0) {
        sessionEntries.innerHTML = 'No hay datos guardados aún.';
        exportButton.disabled = true;
    } else {
        sessionEntries.innerHTML = registrosSesion.map((r, index) => `
            <div style="background:#eee; padding:5px; margin-bottom:5px; border-radius:4px;">
                <strong>${r.descripcion}</strong><br>
                Total: ${r.total} un. | Vence: ${r.vencimiento}
            </div>
        `).join('');
        exportButton.disabled = false;
    }
}

// Exportar a CSV
exportButton.onclick = () => {
    let csv = "Codigo,Producto,Bultos,Unidades Sueltas,Total Unidades,Vencimiento\n";
    registrosSesion.forEach(r => {
        csv += `${r.codigo},${r.descripcion},${r.bultos},${r.unidades},${r.total},${r.vencimiento}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `conteo_${new Date().toLocaleDateString()}.csv`;
    link.click();
};

// Nuevo Conteo
document.getElementById('newCountButton').onclick = () => {
    if (confirm("¿Está seguro de borrar todo el conteo actual?")) {
        registrosSesion = [];
        actualizarVista();
    }
};

// Inicializar
actualizarVista();
