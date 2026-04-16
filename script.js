// MAESTRO DE ARTÍCULOS ACTIVOS CON VISUALIZACIÓN DE CÓDIGO
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
    { "codigo": "300061010", "descripcion": "CHEETOS QUESO CREMA 85GX24", "unidades_x_bulto": 24 },
    { "codigo": "300064915", "descripcion": "DORITOS DINAMITA EXTRA FH 45G", "unidades_x_bulto": 110 },
    { "codigo": "300064914", "descripcion": "DORITOS DINAMITA EXTRA FH 82G", "unidades_x_bulto": 38 },
    { "codigo": "300064055", "descripcion": "DORITOS DINAMITA FH 45GX110X1", "unidades_x_bulto": 110 },
    { "codigo": "300064054", "descripcion": "DORITOS DINAMITA FH 82GX38X1", "unidades_x_bulto": 38 },
    { "codigo": "300063015", "descripcion": "DORITOS SWEET CHILI 74GX29X1", "unidades_x_bulto": 29 },
    { "codigo": "300066262", "descripcion": "DORITOS PIZZA 35GX88X1", "unidades_x_bulto": 88 },
    { "codigo": "300066261", "descripcion": "DORITOS PIZZA 74GX29X1", "unidades_x_bulto": 29 },
    { "codigo": "300064193", "descripcion": "DORITOS QUESO 20GX88X1", "unidades_x_bulto": 88 },
    { "codigo": "300065477", "descripcion": "DORITOS QUESO 20GX10 TIR.", "unidades_x_bulto": 10 },
    { "codigo": "300066598", "descripcion": "DORITOS QUESO 40GX10 TIR.", "unidades_x_bulto": 10 },
    { "codigo": "300059545", "descripcion": "DORITOS QUESO 40GX70X1", "unidades_x_bulto": 70 },
    { "codigo": "300060192", "descripcion": "DORITOS QUESO 77GX26", "unidades_x_bulto": 26 },
    { "codigo": "300060190", "descripcion": "DORITOS QUESO 129GX19", "unidades_x_bulto": 19 },
    { "codigo": "300060191", "descripcion": "DORITOS QUESO 200GX14", "unidades_x_bulto": 14 },
    { "codigo": "300051988", "descripcion": "LAYS CLASICAS 20GX76", "unidades_x_bulto": 76 },
    { "codigo": "300065476", "descripcion": "LAYS CLASICA 20GX10 TIR", "unidades_x_bulto": 10 },
    { "codigo": "300066500", "descripcion": "LAYS CLASICA 40GX10 TIR", "unidades_x_bulto": 10 },
    { "codigo": "300059432", "descripcion": "LAYS CLASICAS 40GX68X1", "unidades_x_bulto": 68 },
    { "codigo": "300060195", "descripcion": "LAYS CLASICAS 85GX25X1", "unidades_x_bulto": 25 },
    { "codigo": "300065287", "descripcion": "LAYS CLASICAS 134GX18X1", "unidades_x_bulto": 18 },
    { "codigo": "300065313", "descripcion": "LAYS CLASICAS 230GX13X1", "unidades_x_bulto": 13 },
    { "codigo": "300060231", "descripcion": "LAYS CLASICAS 330GX9", "unidades_x_bulto": 9 },
    { "codigo": "300064887", "descripcion": "LAYS BARBACOA 77GX25X1", "unidades_x_bulto": 25 },
    { "codigo": "300064885", "descripcion": "LAYS PANCETA 77GX25X1", "unidades_x_bulto": 25 },
    { "codigo": "300065285", "descripcion": "LAYS KETCHUP 77GX25X1", "unidades_x_bulto": 25 },
    { "codigo": "300059431", "descripcion": "LAYS JAMON SERRANO 34GX72", "unidades_x_bulto": 72 },
    { "codigo": "300065286", "descripcion": "LAYS JAMON SERRANO 77GX25X1", "unidades_x_bulto": 25 },
    { "codigo": "300060080", "descripcion": "LAYS JAMON SERRANO 122GX19", "unidades_x_bulto": 19 },
    { "codigo": "300059430", "descripcion": "LAYS QUESO Y CEBOLLA 34GX72", "unidades_x_bulto": 72 },
    { "codigo": "300065361", "descripcion": "LAYS QUESO CEBOLLA 77GX25X1", "unidades_x_bulto": 25 },
    { "codigo": "300059801", "descripcion": "LAYS ONDAS FH 30GX72", "unidades_x_bulto": 72 },
    { "codigo": "300059811", "descripcion": "LAYS ONDAS FH 70GX28", "unidades_x_bulto": 28 },
    { "codigo": "300062584", "descripcion": "LAYS PROVOLETA 77GX28X1", "unidades_x_bulto": 28 },
    { "codigo": "300066580", "descripcion": "LAYS ACAN ASADO 77GX25X1", "unidades_x_bulto": 25 },
    { "codigo": "300066581", "descripcion": "LAYS ACAN ASADO 34GX72X1 MND", "unidades_x_bulto": 72 },
    { "codigo": "300064830", "descripcion": "PEHUAMAR ACAN CHIMICHURRI 80GX25", "unidades_x_bulto": 25 },
    { "codigo": "300064478", "descripcion": "PEHUAMAR ACAN MATAMBRITO 80GX25", "unidades_x_bulto": 25 },
    { "codigo": "300064630", "descripcion": "PEHUA PAPA ACAN 90GX22 RM", "unidades_x_bulto": 22 },
    { "codigo": "300064641", "descripcion": "PEHUA PAPA LISA 90GX22 RM", "unidades_x_bulto": 22 },
    { "codigo": "300052758", "descripcion": "PEHUAMAR MAICITOS 125GX16", "unidades_x_bulto": 16 },
    { "codigo": "300062972", "descripcion": "PEHUAMAR MAICITOS 265GX10X1", "unidades_x_bulto": 10 },
    { "codigo": "300052656", "descripcion": "PEHUAMAR PALIQUESO 90GX36", "unidades_x_bulto": 36 },
    { "codigo": "300060094", "descripcion": "PEHUAMAR PALIQUESO 165GX21X1", "unidades_x_bulto": 21 },
    { "codigo": "300060093", "descripcion": "PEHUAMAR PALIQUESO 620GX6X1", "unidades_x_bulto": 6 },
    { "codigo": "300052790", "descripcion": "PEHUAMAR PALISAL 90GX36", "unidades_x_bulto": 36 },
    { "codigo": "300060092", "descripcion": "PEHUAMAR PALISAL 165GX21X1", "unidades_x_bulto": 21 },
    { "codigo": "300060091", "descripcion": "PEHUAMAR PALISAL 620GX6X1", "unidades_x_bulto": 6 },
    { "codigo": "300060097", "descripcion": "PEHUAMAR PAPA ACAN. 135GX19", "unidades_x_bulto": 19 },
    { "codigo": "300062973", "descripcion": "PEHUAMAR ACANALADA 230GX14X1", "unidades_x_bulto": 14 },
    { "codigo": "300064640", "descripcion": "PEHUAMAR ACANALADA 450GX9 RM", "unidades_x_bulto": 9 },
    { "codigo": "300060196", "descripcion": "PEHUAMAR PAPA LISA 135GX19X1", "unidades_x_bulto": 19 },
    { "codigo": "300060197", "descripcion": "PEHUAMAR PAPA LISA 230GX14X1", "unidades_x_bulto": 14 },
    { "codigo": "300064740", "descripcion": "PEHUAMAR PAPA LISA 450GX9 RM", "unidades_x_bulto": 9 },
    { "codigo": "300052821", "descripcion": "PEP COMUN 120GX21", "unidades_x_bulto": 21 },
    { "codigo": "300052820", "descripcion": "PEP COMUN 84GX36", "unidades_x_bulto": 36 },
    { "codigo": "300033488", "descripcion": "PEP COMUN 60GX60", "unidades_x_bulto": 60 },
    { "codigo": "300052756", "descripcion": "PEP RUEDITAS 120GX21", "unidades_x_bulto": 21 },
    { "codigo": "300065501", "descripcion": "PEP RUEDITAS FH 71GX36X1", "unidades_x_bulto": 36 },
    { "codigo": "300052757", "descripcion": "PEP RUEDITAS 84GX36", "unidades_x_bulto": 36 },
    { "codigo": "300033489", "descripcion": "PEP RUEDITAS 60X60 GR PI", "unidades_x_bulto": 60 },
    { "codigo": "300058720", "descripcion": "PEP RAMITAS QUESO 120GX21", "unidades_x_bulto": 21 },
    { "codigo": "300058721", "descripcion": "PEP RAMITAS QUESO 80GX36", "unidades_x_bulto": 36 },
    { "codigo": "300058740", "descripcion": "PEP RAMITAS QUESO 40GX60", "unidades_x_bulto": 60 },
    { "codigo": "300065828", "descripcion": "TOSTITOS ROUNDED SAL 100GX26X1", "unidades_x_bulto": 26 },
    { "codigo": "300065827", "descripcion": "TOSTITOS ROUNDED SAL 160GX19X1", "unidades_x_bulto": 19 },
    { "codigo": "300065792", "descripcion": "TOSTITOS ROUNDED SAL 260GX15X1", "unidades_x_bulto": 15 },
    { "codigo": "300063263", "descripcion": "TWISTOS MINIT QUESO 40GX112X1", "unidades_x_bulto": 112 },
    { "codigo": "300063097", "descripcion": "TWISTOS MINIT QUESO 95GX30X1", "unidades_x_bulto": 30 },
    { "codigo": "300052694", "descripcion": "TWISTOS MINIT QUESO 155GX20", "unidades_x_bulto": 20 },
    { "codigo": "300063264", "descripcion": "TWISTOS MINIT JAMON 40GX112X1", "unidades_x_bulto": 112 },
    { "codigo": "300063098", "descripcion": "TWISTOS MINIT JAMON 95GX30X1", "unidades_x_bulto": 30 },
    { "codigo": "300052697", "descripcion": "TWISTOS MINIT JAMON 155GX20", "unidades_x_bulto": 20 },
    { "codigo": "300064854", "descripcion": "MANI PELADO TUBULAR 40GX100X1", "unidades_x_bulto": 100 },
    { "codigo": "300061022", "descripcion": "MANI PELADO 320GX17X1", "unidades_x_bulto": 17 },
    { "codigo": "300061023", "descripcion": "MANI PELADO 135GX40X1", "unidades_x_bulto": 40 },
    { "codigo": "300063271", "descripcion": "MANI SAL PELADO 75GX64X1", "unidades_x_bulto": 64 },
    { "codigo": "300063273", "descripcion": "MANI CON PIEL 135GX40X1", "unidades_x_bulto": 40 },
    { "codigo": "300061030", "descripcion": "MANI SAL CON PIEL 75GX64X1", "unidades_x_bulto": 64 },
    { "codigo": "300061021", "descripcion": "MANIAX JAPONES JAMON 95GX40X1", "unidades_x_bulto": 40 },
    { "codigo": "300061020", "descripcion": "MANIAX JAPONES SAL 95GX40X1", "unidades_x_bulto": 40 },
    { "codigo": "300060869", "descripcion": "MANIAX SAL Y LIMON 95GX60X1", "unidades_x_bulto": 60 },
    { "codigo": "300065572", "descripcion": "QUAKER AVENA EXT FINA 470GX12 ARG", "unidades_x_bulto": 12 },
    { "codigo": "300065613", "descripcion": "QUAKER AVENA INST 280GX20 ARG", "unidades_x_bulto": 20 },
    { "codigo": "300065611", "descripcion": "QUAKER AVENA TRADIC 280GX20 ARG", "unidades_x_bulto": 20 },
    { "codigo": "300065612", "descripcion": "QUAKER AVENA INST 500GX10 ARG", "unidades_x_bulto": 10 },
    { "codigo": "300051958", "descripcion": "QUAKER AVENA EXTRA FINA 500X18 ARG", "unidades_x_bulto": 18 }
].sort((a, b) => a.descripcion.localeCompare(b.descripcion));

let registrosSesion = [];
let productoSeleccionado = null;

const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');
const detailCard = document.getElementById('detailCard');
const selectedProductName = document.getElementById('selectedProductName');
const sessionEntries = document.getElementById('sessionEntries');
const exportButton = document.getElementById('exportButton');

// BUSCADOR ACTUALIZADO: MUESTRA CÓDIGO Y DESCRIPCIÓN
searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase().trim();
    productList.innerHTML = '';
    
    if (term.length < 2) return;

    // Filtra por descripción O por código
    const filtrados = productos.filter(p => 
        p.descripcion.toLowerCase().includes(term) || p.codigo.includes(term)
    );

    if (filtrados.length === 0) {
        productList.innerHTML = '<div style="padding:10px;color:red;">No encontrado</div>';
    } else {
        filtrados.forEach(p => {
            const div = document.createElement('div');
            div.style = "padding: 12px; border-bottom: 1px solid #ddd; cursor: pointer; background: #fff;";
            // Se muestra el código en negrita al inicio para diferenciar rápido
            div.innerHTML = `<span style="color:#007bff; font-weight:bold;">[${p.codigo}]</span> <b>${p.descripcion}</b><br><small>Bulto: ${p.unidades_x_bulto} un.</small>`;
            div.onclick = () => {
                productoSeleccionado = p;
                selectedProductName.innerText = `[${p.codigo}] ${p.descripcion}`;
                detailCard.classList.remove('hidden');
                productList.innerHTML = '';
                searchInput.value = p.descripcion;
            };
            productList.appendChild(div);
        });
    }
});

// REGISTRAR PRODUCTO
document.getElementById('addEntryButton').onclick = () => {
    const bultos = parseInt(document.getElementById('cantidadBultos').value) || 0;
    const unidades = parseInt(document.getElementById('unidadesSueltas').value) || 0;
    const fecha = document.getElementById('fechaVencimiento').value;

    if (!fecha) { alert("Poner fecha de vencimiento"); return; }

    const total = (bultos * productoSeleccionado.unidades_x_bulto) + unidades;

    registrosSesion.push({
        codigo: productoSeleccionado.codigo,
        descripcion: productoSeleccionado.descripcion,
        bultos, unidades, total,
        vencimiento: fecha
    });

    actualizarVista();
    detailCard.classList.add('hidden');
    document.getElementById('productForm').reset();
    searchInput.value = '';
    searchInput.focus();
};

// VISTA DE LA SESIÓN
function actualizarVista() {
    if (registrosSesion.length === 0) {
        sessionEntries.innerHTML = 'Vacío';
        exportButton.disabled = true;
    } else {
        sessionEntries.innerHTML = registrosSesion.map((r, i) => `
            <div style="background:#f8f9fa; border-left: 5px solid #007bff; padding:10px; margin-bottom:5px; border-radius:5px; position:relative;">
                <span style="font-size:0.85em; color:#555;">ID: ${r.codigo}</span><br>
                <b>${r.descripcion}</b><br>
                Total: <span style="color:#28a745; font-weight:bold;">${r.total} un.</span><br>
                Vence: <b>${r.vencimiento}</b>
                <button onclick="borrarLinea(${i})" style="position:absolute; right:10px; top:10px; color:red; border:none; background:none; font-size:1.2em; font-weight:bold; cursor:pointer;">&times;</button>
            </div>
        `).reverse().join('');
        exportButton.disabled = false;
    }
}

window.borrarLinea = (i) => {
    registrosSesion.splice(i, 1);
    actualizarVista();
};

// EXPORTACIÓN EXCEL
exportButton.onclick = () => {
    let csv = "Codigo;Producto;Bultos;Unidades;Total;Vencimiento\n";
    registrosSesion.forEach(r => {
        csv += `${r.codigo};${r.descripcion};${r.bultos};${r.unidades};${r.total};${r.vencimiento}\n`;
    });
    const blob = new Blob(["\ufeff" + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `inventario_${new Date().toLocaleDateString().replace(/\//g, '-')}.csv`;
    link.click();
};

document.getElementById('newCountButton').onclick = () => {
    if (confirm("¿Borrar todo el conteo actual?")) {
        registrosSesion = [];
        actualizarVista();
    }
};

actualizarVista();
