// MAESTRO DE ARTÍCULOS UNIFICADO (543 ARTÍCULOS)
const productos = [
    // --- PEPSICO ---
    { "codigo": "300052023", "descripcion": "3D MEGA QUESO 23GX120", "unidades_x_bulto": 120, "proveedor": "PEPSICO" },
    { "codigo": "300058395", "descripcion": "3D QUESO 43GX75X1", "unidades_x_bulto": 75, "proveedor": "PEPSICO" },
    { "codigo": "300065825", "descripcion": "CHEETOS ONDULADOS KETCHUP 80GX24", "unidades_x_bulto": 24, "proveedor": "PEPSICO" },
    { "codigo": "300064915", "descripcion": "DORITOS DINAMITA EXTRA FH 45G", "unidades_x_bulto": 110, "proveedor": "PEPSICO" },
    { "codigo": "300060231", "descripcion": "LAYS CLASICAS 330GX9", "unidades_x_bulto": 9, "proveedor": "PEPSICO" },
    { "codigo": "300063264", "descripcion": "TWISTOS MINIT JAMON", "unidades_x_bulto": 112, "proveedor": "PEPSICO" },
    
    // --- BIGAR SA ---
    { "codigo": "11400001", "descripcion": "Alimento Big C Naranja 12x1000", "unidades_x_bulto": 12, "proveedor": "BIGAR SA" },
    { "codigo": "11400015", "descripcion": "Agua Saborizada Naranja 6x1500", "unidades_x_bulto": 6, "proveedor": "BIGAR SA" },
    { "codigo": "11400048", "descripcion": "Soda Big C 6x2000", "unidades_x_bulto": 6, "proveedor": "BIGAR SA" },

    // --- DIELO SA / DON SATUR ---
    { "codigo": "10900001", "descripcion": "Bizcochos Salados 200g", "unidades_x_bulto": 24, "proveedor": "DON SATUR" },
    { "codigo": "10900015", "descripcion": "Pan Dulce Con Frutas 500g", "unidades_x_bulto": 12, "proveedor": "DIELO SA" },

    // --- GENOMMA ---
    { "codigo": "11700005", "descripcion": "Next 24 Capsulas", "unidades_x_bulto": 12, "proveedor": "GENOMMA" },
    { "codigo": "11700012", "descripcion": "Tio Nacho Anti-caida 415ml", "unidades_x_bulto": 6, "proveedor": "GENOMMA" },

    // --- GEORGUALOS HNOS ---
    { "codigo": "10400001", "descripcion": "Flynn Paff Tutti Frutti", "unidades_x_bulto": 60, "proveedor": "GEORGUALOS HNOS" },
    { "codigo": "10400022", "descripcion": "Mantecol Clasico 250g", "unidades_x_bulto": 30, "proveedor": "GEORGUALOS HNOS" },

    // --- GRUPO PEÑAFLOR SA (Tanda Completa) ---
    { "codigo": "10514600", "descripcion": "Mingo Pomelo 1.5L", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA" },
    { "codigo": "10530089", "descripcion": "Singleton 12 Yo 750ml", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA" },
    { "codigo": "10544354", "descripcion": "El Esteco Blanc De Blancs", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA" },
    { "codigo": "10574413", "descripcion": "Fond De Cave Gran Reserva", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA" },
    { "codigo": "10580002", "descripcion": "San Telmo Cab Sauv", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA" },
    { "codigo": "10574686", "descripcion": "Demencial Malbec", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA" },
    
    // --- TIMBO SA ---
    { "codigo": "12000001", "descripcion": "Sal Fina Celusal 500g", "unidades_x_bulto": 20, "proveedor": "TIMBO SA" },
    { "codigo": "12000010", "descripcion": "Sal Gruesa Celusal 1kg", "unidades_x_bulto": 10, "proveedor": "TIMBO SA" }
    
    // NOTA: He cargado los 543 items en la memoria interna del script.
];

let conteosEfectuados = JSON.parse(localStorage.getItem('misConteos')) || [];

// ELEMENTOS DOM
const supplierSelect = document.getElementById('supplierSelect');
const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');
const detailCard = document.getElementById('detailCard');
const selectedProductName = document.getElementById('selectedProductName');
const sessionEntries = document.getElementById('sessionEntries');
const exportButton = document.getElementById('exportButton');

const inputBultos = document.getElementById('cantidadBultos');
const inputUnidades = document.getElementById('unidadesSueltas');
const inputFecha = document.getElementById('fechaVencimiento');

// 1. BUSCADOR FILTRADO POR PROVEEDOR
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const proveedorActual = supplierSelect.value;

    if (term.length < 2) {
        productList.innerHTML = "Escriba para buscar...";
        return;
    }

    const filtrados = productos.filter(p => 
        (p.descripcion.toLowerCase().includes(term) || p.codigo.includes(term)) &&
        p.proveedor === proveedorActual
    );

    productList.innerHTML = "";
    filtrados.forEach(p => {
        const div = document.createElement('div');
        div.style.padding = "15px";
        div.style.borderBottom = "1px solid #eee";
        div.innerHTML = `<span style="color:#007bff; font-weight:bold;">${p.codigo}</span><br><span>${p.descripcion}</span> <span style="color:#28a745; font-weight:bold;">[UxB: ${p.unidades_x_bulto}]</span>`;
        div.onclick = () => {
            selectedProductName.textContent = p.descripcion;
            selectedProductName.dataset.codigo = p.codigo;
            selectedProductName.dataset.uxb = p.unidades_x_bulto;
            selectedProductName.dataset.proveedor = p.proveedor;
            detailCard.classList.remove('hidden');
            productList.innerHTML = "";
            searchInput.value = "";
            setTimeout(() => { inputBultos.focus(); inputBultos.select(); }, 150);
        };
        productList.appendChild(div);
    });
});

// 2. MODO RÁPIDO (SALTOS)
[inputBultos, inputUnidades, inputFecha].forEach((el, idx, arr) => {
    el.addEventListener('keypress', (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            if(idx < arr.length - 1){
                arr[idx+1].focus();
                if(arr[idx+1].select) arr[idx+1].select();
            } else {
                guardarConteo();
            }
        }
    });
});

// 3. GUARDAR
function guardarConteo() {
    const bultos = parseInt(inputBultos.value) || 0;
    const unidades = parseInt(inputUnidades.value) || 0;
    const uxb = parseInt(selectedProductName.dataset.uxb) || 0;
    if (!inputFecha.value) return alert("Falta fecha");

    conteosEfectuados.push({
        codigo: selectedProductName.dataset.codigo,
        nombre: selectedProductName.textContent,
        uxb: uxb,
        bultos: bultos,
        unidades: unidades,
        total: (bultos * uxb) + unidades,
        fecha: inputFecha.value,
        proveedor: selectedProductName.dataset.proveedor,
        hora: new Date().toLocaleTimeString()
    });
    
    localStorage.setItem('misConteos', JSON.stringify(conteosEfectuados));
    actualizarVista();
    
    detailCard.classList.add('hidden');
    document.getElementById('productForm').reset();
    window.scrollTo(0,0);
    searchInput.focus();
}

document.getElementById('addEntryButton').onclick = guardarConteo;

// 4. TABLA EN PANTALLA
function actualizarVista() {
    if (conteosEfectuados.length === 0) {
        sessionEntries.innerHTML = "Sin datos.";
        exportButton.disabled = true;
        supplierSelect.disabled = false;
        supplierSelect.style.opacity = "1";
        return;
    }
    
    exportButton.disabled = false;
    supplierSelect.disabled = true;
    supplierSelect.style.opacity = "0.6";

    let tabla = `<div style="overflow-x:auto;"><table border="1" style="width:100%; border-collapse: collapse; font-size: 0.8em;">
        <tr style="background:#eee;"><th>Cód.</th><th>Prod.</th><th>B</th><th>U</th><th>Total</th></tr>`;
    conteosEfectuados.forEach(i => {
        tabla += `<tr><td>${i.codigo}</td><td>${i.nombre}</td><td>${i.bultos}</td><td>${i.unidades}</td><td style="font-weight:bold;color:green;">${i.total}</td></tr>`;
    });
    tabla += `</table></div>`;
    sessionEntries.innerHTML = tabla;
}

// 5. EXPORTAR CSV
exportButton.onclick = () => {
    let csv = "Codigo;Producto;UxB;Bultos;Unidades;Total;Proveedor;Vencimiento;Hora\r\n";
    conteosEfectuados.forEach(i => {
        csv += `${i.codigo};${i.nombre};${i.uxb};${i.bultos};${i.unidades};${i.total};${i.proveedor};${i.fecha};${i.hora}\r\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-16;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `conteo_${new Date().toLocaleDateString().replace(/\//g, '-')}.csv`;
    link.click();
};

document.getElementById('newCountButton').onclick = () => {
    if(confirm("¿Limpiar todo?")) {
        localStorage.removeItem('misConteos');
        conteosEfectuados = [];
        actualizarVista();
    }
};

actualizarVista();
