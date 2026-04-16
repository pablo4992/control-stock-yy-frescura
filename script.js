// ==========================================
// 1. LÓGICA DE FUNCIONAMIENTO (EL CEREBRO)
// ==========================================

let conteosEfectuados = JSON.parse(localStorage.getItem('misConteos')) || [];

// Referencias a elementos
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

// FUNCIÓN DE BÚSQUEDA
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const prov = supplierSelect.value;
    if (term.length < 2) { productList.innerHTML = "Escriba para buscar..."; return; }
    
    const filtrados = productos.filter(p => 
        (p.descripcion.toLowerCase().includes(term) || p.codigo.includes(term)) && p.proveedor === prov
    );

    productList.innerHTML = "";
    filtrados.forEach(p => {
        const div = document.createElement('div');
        div.style = "padding:15px; border-bottom:1px solid #eee; cursor:pointer;";
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

// MODO RÁPIDO (SALTOS CON ENTER)
[inputBultos, inputUnidades, inputFecha].forEach((el, idx, arr) => {
    el.addEventListener('keypress', (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            if(idx < arr.length - 1) { arr[idx+1].focus(); if(arr[idx+1].select) arr[idx+1].select(); }
            else { guardarConteo(); }
        }
    });
});

function guardarConteo() {
    const b = parseInt(inputBultos.value) || 0;
    const u = parseInt(inputUnidades.value) || 0;
    const uxb = parseInt(selectedProductName.dataset.uxb) || 0;
    if (!inputFecha.value) return alert("Por favor, ingrese una fecha de vencimiento");

    conteosEfectuados.push({
        codigo: selectedProductName.dataset.codigo,
        nombre: selectedProductName.textContent,
        uxb: uxb,
        bultos: b,
        unidades: u,
        total: (b * uxb) + u,
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

function actualizarVista() {
    if (conteosEfectuados.length === 0) {
        sessionEntries.innerHTML = "Sin datos guardados.";
        exportButton.disabled = true;
        supplierSelect.disabled = false;
        return;
    }
    exportButton.disabled = false;
    supplierSelect.disabled = true; // Bloqueo de seguridad
    let tabla = `<div style="overflow-x:auto;"><table border="1" style="width:100%; border-collapse:collapse; font-size:0.8em;">
        <tr style="background:#eee;"><th>Cód.</th><th>Prod.</th><th>B</th><th>U</th><th>Total</th></tr>`;
    conteosEfectuados.forEach(i => {
        tabla += `<tr><td>${i.codigo}</td><td>${i.nombre}</td><td>${i.bultos}</td><td>${i.unidades}</td><td style="font-weight:bold;color:green;">${i.total}</td></tr>`;
    });
    tabla += `</table></div>`;
    sessionEntries.innerHTML = tabla;
}

// EXPORTAR CSV CORREGIDO (A1)
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
    if(confirm("¿Limpiar todo el conteo actual?")) {
        localStorage.removeItem('misConteos');
        conteosEfectuados = [];
        actualizarVista();
    }
};

document.getElementById('addEntryButton').onclick = guardarConteo;
actualizarVista();

// ==========================================
// 2. MAESTRO DE PRODUCTOS (BASE DE DATOS)
// ==========================================
const productos = [
    {"codigo":"10514600","descripcion":"Mingo Pomelo 1.5L","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10514602","descripcion":"Mingo Naranja 1.5L","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10514604","descripcion":"Mingo Limonada 1.5L","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10514605","descripcion":"Mingo Pomelo Rosado 1.5L","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10514606","descripcion":"Mingo Tonica 1.5L","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10514607","descripcion":"Mingo Ginger Ale 1.5L","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530089","descripcion":"Singleton 12 Yo 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530088","descripcion":"Singleton 15 Yo 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530087","descripcion":"Singleton 18 Yo 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530107","descripcion":"Antares Scotch 500ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530108","descripcion":"Antares Porter 500ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530109","descripcion":"Antares Honey 500ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530110","descripcion":"Antares Ipa 500ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530111","descripcion":"Antares Kolsch 500ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530112","descripcion":"Antares Barley Wine 500ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530113","descripcion":"Antares Imperial Stout 500ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530114","descripcion":"Antares Cream Stout 500ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530082","descripcion":"Cardhu 12 Yo 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530083","descripcion":"Talisker 10 Yo 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530084","descripcion":"Caol Ila 12 Yo 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544354","descripcion":"El Esteco Blanc De Blancs","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544350","descripcion":"El Esteco Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544351","descripcion":"El Esteco Cabernet Sauv","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544352","descripcion":"El Esteco Chardonnay","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544367","descripcion":"Blend De Extremos Mb","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544368","descripcion":"Blend De Extremos Cs","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544369","descripcion":"Blend De Extremos Malbec/merlot","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544250","descripcion":"Alaris Dulce De Invierno","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544260","descripcion":"Elementos Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544261","descripcion":"Elementos Cab Sauv","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544262","descripcion":"Elementos Chardonnay","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544263","descripcion":"Elementos Dulce Natural","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544264","descripcion":"Elementos Rose","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574413","descripcion":"Fond Cave G. Rva Blend","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574410","descripcion":"Fond Cave Reserva Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574411","descripcion":"Fond Cave Reserva Cab Sauv","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574412","descripcion":"Fond Cave Reserva Chardonnay","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574415","descripcion":"Trapiche Reserva Cabsau","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574416","descripcion":"Trapiche Reserva Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574417","descripcion":"Trapiche Reserva Chard","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574418","descripcion":"Trapiche Reserva Syrah","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574419","descripcion":"Trapiche Reserva Merlot","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574420","descripcion":"Trapiche Reserva Pinot Noir","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10580002","descripcion":"San Telmo Cab-sauv","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10580003","descripcion":"San Telmo Sel Chardonnay","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10580004","descripcion":"San Telmo Sel Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10580005","descripcion":"San Telmo Sel Cab Sauv","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10580006","descripcion":"San Telmo Sel Syrah","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574686","descripcion":"Demencial Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574687","descripcion":"Demencial Blanc De Blancs","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574688","descripcion":"Demencial Pinot Noir","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520010","descripcion":"Alma Mora Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520011","descripcion":"Alma Mora Cab Sauv","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520012","descripcion":"Alma Mora Chardonnay","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520013","descripcion":"Alma Mora Syrah","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520014","descripcion":"Alma Mora Rose","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520015","descripcion":"Alma Mora Dulce","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520020","descripcion":"Alma Mora Reserva Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520021","descripcion":"Alma Mora Reserva Cab Sauv","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520100","descripcion":"Finca Las Moras Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520101","descripcion":"Finca Las Moras Cab Sauv","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520102","descripcion":"Finca Las Moras Syrah","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520103","descripcion":"Finca Las Moras Chard","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520104","descripcion":"Finca Las Moras Rose","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520105","descripcion":"Finca Las Moras Dulce","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10560001","descripcion":"Santa Ana Clasico Tinto","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10560002","descripcion":"Santa Ana Clasico Blanco","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10560100","descripcion":"Santa Ana Seleccion Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10560101","descripcion":"Santa Ana Seleccion Cab Sauv","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10560102","descripcion":"Santa Ana Seleccion Chard","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10560103","descripcion":"Santa Ana Seleccion Syrah","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10590001","descripcion":"Frize Evolution Blue","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10590002","descripcion":"Frize Evolution Red","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10590003","descripcion":"Frize Evolution Black","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10590010","descripcion":"Frize New Touch Anana","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10590011","descripcion":"Frize New Touch Durazno","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10590012","descripcion":"Frize New Touch Frutos Rojos","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10590013","descripcion":"Frize New Touch Melon","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10550001","descripcion":"Trapiche Alaris Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10550002","descripcion":"Trapiche Alaris Cab Sauv","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10550003","descripcion":"Trapiche Alaris Chardonnay","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10550004","descripcion":"Trapiche Alaris Dulce","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10550005","descripcion":"Trapiche Alaris Rose","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10550100","descripcion":"Trapiche Melodias Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10550101","descripcion":"Trapiche Melodias Cab Sauv","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10550102","descripcion":"Trapiche Melodias Chard","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10550103","descripcion":"Trapiche Melodias Winem. Mb","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10550104","descripcion":"Trapiche Melodias Winem. Cs","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10550105","descripcion":"Trapiche Melodias Winem. Chard","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574500","descripcion":"Trapiche Puro Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574501","descripcion":"Trapiche Puro Rose","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574502","descripcion":"Trapiche Puro Blanc De Blancs","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574600","descripcion":"Trapiche Costa Y Pampa Mb","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574601","descripcion":"Trapiche Costa Y Pampa Chard","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574602","descripcion":"Trapiche Costa Y Pampa P. Noir","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574603","descripcion":"Trapiche Costa Y Pampa S. Blanc","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574604","descripcion":"Trapiche Costa Y Pampa Riesling","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574605","descripcion":"Trapiche Costa Y Pampa Albariño","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520200","descripcion":"Mora Negra Blend","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520201","descripcion":"Sagrado El Pedernal Mb","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520202","descripcion":"Paz Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520203","descripcion":"Paz Cabernet Sauvignon","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520204","descripcion":"Paz Syrah/Casernet","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520205","descripcion":"Dada 1 Art Wine","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520206","descripcion":"Dada 2 Art Wine","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520207","descripcion":"Dada 3 Art Wine","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520208","descripcion":"Dada 5 Art Wine","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520209","descripcion":"Dada 7 Art Wine White","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520210","descripcion":"Dada 8 Art Wine Chocolate","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520211","descripcion":"Dada 391 Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520212","descripcion":"Dada 391 Cabernet","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544252","descripcion":"Alaris Clasico Dulce 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544253","descripcion":"Alaris Clasico Blanco 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544254","descripcion":"Alaris Clasico Tinto 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544370","descripcion":"El Esteco Old Vines Mb","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544371","descripcion":"El Esteco Old Vines Torrontes","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544372","descripcion":"El Esteco Old Vines Criolla","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544373","descripcion":"El Esteco Fincas Notables Mb","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544374","descripcion":"El Esteco Fincas Notables Cs","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574421","descripcion":"Trapiche Medalla Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574422","descripcion":"Trapiche Medalla Cab Sauv","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574423","descripcion":"Trapiche Medalla Chardonnay","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574424","descripcion":"Trapiche Medalla Blend","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574425","descripcion":"Iscay Malbec/Cabernet","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574426","descripcion":"Iscay Malbec/Franc","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574427","descripcion":"Iscay Syrah/Viognier","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10580007","descripcion":"San Telmo Sangria 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10580008","descripcion":"San Telmo Rosado 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10580009","descripcion":"San Telmo Dulce 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574700","descripcion":"La Mascota Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574701","descripcion":"La Mascota Cab Sauv","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574702","descripcion":"La Mascota Chardonnay","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574703","descripcion":"La Mascota Cabernet Franc","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574704","descripcion":"Unanime Blend","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574705","descripcion":"Unanime Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574706","descripcion":"Unanime Chardonnay","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520110","descripcion":"Moras Black Label Mb","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520111","descripcion":"Moras Black Label Cs","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520112","descripcion":"Moras Black Label Malbec/Cas","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520120","descripcion":"Moras Barrel Select Mb","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520121","descripcion":"Moras Barrel Select Cs","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520122","descripcion":"Moras Barrel Select Chard","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10560200","descripcion":"Santa Ana Homonaje Mb","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10560201","descripcion":"Santa Ana Homonaje Cs","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10560300","descripcion":"Santa Ana Reserva Mb","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10560301","descripcion":"Santa Ana Reserva Cs","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10560302","descripcion":"Santa Ana Reserva Syrah","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10590100","descripcion":"Frize Sparkling Blue","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10590101","descripcion":"Frize Sparkling Strawberry","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10590102","descripcion":"Frize Sparkling White","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530090","descripcion":"J. Walker 18 Yo 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530091","descripcion":"J. Walker Green Label 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530092","descripcion":"J. Walker Swing 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530093","descripcion":"White Horse 1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530094","descripcion":"Vat 69 1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530095","descripcion":"Old Parr 12 Yo 750ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530096","descripcion":"Haig Supreme 1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530097","descripcion":"Dimple 15 Yo 750ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530098","descripcion":"Gordon's Gin 700ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530099","descripcion":"Gordon's Pink Gin 700ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530100","descripcion":"Tanqueray London Dry 750ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530101","descripcion":"Tanqueray Sevilla 750ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530102","descripcion":"Tanqueray Ten 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530103","descripcion":"Smirnoff Red 700ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530104","descripcion":"Smirnoff Green Apple 700ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530105","descripcion":"Smirnoff Citrus 700ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530106","descripcion":"Smirnoff Raspberry 700ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530200","descripcion":"Ciroc Vodka 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530201","descripcion":"Ketel One Vodka 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530202","descripcion":"Bulleit Bourbon 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530203","descripcion":"Zacapa 23 Rum 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530204","descripcion":"Captain Morgan Spice 750ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530205","descripcion":"Baileys Salted Caramel 750ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530206","descripcion":"Baileys Strawberries 750ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530300","descripcion":"Don Julio Blanco 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530301","descripcion":"Don Julio Reposado 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530302","descripcion":"Don Julio 1942 750ml","unidades_x_bulto":3,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574450","descripcion":"Trapiche Espumante Extra Brut","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574451","descripcion":"Trapiche Espumante Brut Rose","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10574452","descripcion":"Trapiche Espumante Demi Sec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544400","descripcion":"El Esteco Espumante Extra Brut","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520300","descripcion":"Mora Negra Espumante","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10560400","descripcion":"Santa Ana Espumante Extra Brut","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10560401","descripcion":"Santa Ana Espumante Brut Rose","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10580100","descripcion":"San Telmo Espumante Extra Brut","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544270","descripcion":"Elementos Malbec 375ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544271","descripcion":"Elementos Chardonnay 375ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10550010","descripcion":"Alaris Malbec 375ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10520030","descripcion":"Alma Mora Malbec 375ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10560110","descripcion":"Santa Ana Sel Malbec 375ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10514610","descripcion":"Mingo Pomelo Lata 354ml","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10514611","descripcion":"Mingo Tonica Lata 354ml","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10514612","descripcion":"Mingo Ginger Ale Lata 354ml","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10590020","descripcion":"Frize Blue Lata 473ml","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10590021","descripcion":"Frize New Touch Anana Lata","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530400","descripcion":"Smirnoff Ice Original Lata","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530401","descripcion":"Smirnoff Ice Green Apple Lata","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10530500","descripcion":"Guinness Extra Stout Lata","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544500","descripcion":"Ciclos Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544501","descripcion":"Ciclos Cabernet Sauvignon","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
    {"codigo":"10544502","descripcion":"Ciclos Torrontes","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10544300","descripcion":"Don David Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10544301","descripcion":"Don David Cabernet Sauvignon","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10544302","descripcion":"Don David Chardonnay","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10544303","descripcion":"Don David Tannat","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10544304","descripcion":"Don David Reserva Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10544305","descripcion":"Don David Reserva Cab Sauv","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10574440","descripcion":"Trapiche Gran Medalla Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10574441","descripcion":"Trapiche Gran Medalla Cab Sauv","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10574442","descripcion":"Trapiche Gran Medalla Chard","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10574400","descripcion":"Trapiche Clasico Malbec 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10574401","descripcion":"Trapiche Clasico Cab Sauv 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10574402","descripcion":"Trapiche Clasico Chardonnay 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10574403","descripcion":"Trapiche Clasico Blanco 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10574404","descripcion":"Trapiche Clasico Tinto 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10574405","descripcion":"Trapiche Clasico Rose 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10520250","descripcion":"Exploracion Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10520251","descripcion":"Exploracion Cabernet","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10520252","descripcion":"Exploracion Chardonnay","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10520260","descripcion":"Mora Negra Gran Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10520261","descripcion":"Mora Negra Gran Syrah","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10560310","descripcion":"Santa Ana Caracter Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10560311","descripcion":"Santa Ana Caracter Cab Sauv","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10560312","descripcion":"Santa Ana Caracter Chardonnay","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10560313","descripcion":"Santa Ana Caracter Dulce","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10560314","descripcion":"Santa Ana Caracter Rose","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10560500","descripcion":"Michel Torino Clasico Tinto 1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10560501","descripcion":"Michel Torino Clasico Blanco 1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10560510","descripcion":"Michel Torino Coleccion Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10560511","descripcion":"Michel Torino Coleccion Cab Sauv","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10560512","descripcion":"Michel Torino Coleccion Chard","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10560513","descripcion":"Michel Torino Coleccion Torrontes","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10560600","descripcion":" Hereford Clasico Tinto 1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10560601","descripcion":" Hereford Clasico Blanco 1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10560610","descripcion":" Hereford Seleccion Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10560611","descripcion":" Hereford Seleccion Cab Sauv","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10560700","descripcion":"Zumuva Tinto 1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10560701","descripcion":"Zumuva Blanco 1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10560702","descripcion":"Zumuva Rosado 1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10520220","descripcion":"Dada 1 375ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10520221","descripcion":"Dada 2 375ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10520222","descripcion":"Dada 3 375ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530600","descripcion":"Beefeater Gin 700ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530601","descripcion":"Beefeater Pink 700ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530602","descripcion":"Beefeater 24 700ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530610","descripcion":"Jameson Whiskey 700ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530611","descripcion":"Jameson Whiskey 1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530612","descripcion":"Jameson Black Barrel 700ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530613","descripcion":"Jameson Caskmates 700ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530620","descripcion":"Chivas Regal 12 Yo 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530621","descripcion":"Chivas Regal 12 Yo 1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530622","descripcion":"Chivas Regal 18 Yo 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530623","descripcion":"Chivas Regal XV 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530624","descripcion":"Chivas Regal Mizunara 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530630","descripcion":"Ballantines Finest 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530631","descripcion":"Ballantines Finest 1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530632","descripcion":"Ballantines 12 Yo 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530640","descripcion":"Absolut Blue 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530641","descripcion":"Absolut Lime 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530642","descripcion":"Absolut Mandarin 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530643","descripcion":"Absolut Raspberry 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530644","descripcion":"Absolut Vanilia 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530645","descripcion":"Absolut Watermelon 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530646","descripcion":"Absolut Elyx 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530650","descripcion":"Havana Club 3 Años 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530651","descripcion":"Havana Club 7 Años 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530652","descripcion":"Havana Club Añejo Especial","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530660","descripcion":"Malibu Rum 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530670","descripcion":"Kahlua Licor Cafe 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530680","descripcion":"Mumm Extra Brut 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530681","descripcion":"Mumm Brut Rose 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10530682","descripcion":"Mumm Leger 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10514700","descripcion":"Termidor Tinto 1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10514701","descripcion":"Termidor Blanco 1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10514710","descripcion":"Termidor Seleccion Mb 1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10514711","descripcion":"Termidor Seleccion Chard 1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10514800","descripcion":"Cuesta del Madero Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10514801","descripcion":"Cuesta del Madero Cab Sauv","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10514802","descripcion":"Cuesta del Madero Chardonnay","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10514810","descripcion":"Cuesta del Madero Reserva Mb","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10514900","descripcion":"Gancia Americano 950ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10514901","descripcion":"Gancia Americano 450ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10514910","descripcion":"Gancia Spritz 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10514920","descripcion":"Gancia Red Bitter 750ml","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10514930","descripcion":"Gancia Frutilla Lata 473ml","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10514931","descripcion":"Gancia Elderflower Lata 473ml","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10514932","descripcion":"Gancia Lima Limon Lata 473ml","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10514620","descripcion":"Mingo Pomelo 500ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10514621","descripcion":"Mingo Tonica 500ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10514622","descripcion":"Mingo Ginger Ale 500ml","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10520400","descripcion":"Intis Malbec","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10520401","descripcion":"Intis Cabernet Sauvignon","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10520402","descripcion":"Intis Chardonnay","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10520403","descripcion":"Intis Dulce Natural","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
{"codigo":"10520404","descripcion":"Intis Rose","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"}
 {"codigo":"300052023","descripcion":"3D MEGA QUESO 23GX120","unidades_x_bulto":120,"proveedor":"PEPSICO"},
{"codigo":"300058395","descripcion":"3D QUESO 43GX75X1","unidades_x_bulto":75,"proveedor":"PEPSICO"},
{"codigo":"300060661","descripcion":"3D QUESO 85GX27X1","unidades_x_bulto":27,"proveedor":"PEPSICO"},
{"codigo":"300058397","descripcion":"3D QUESO 143GX18X1","unidades_x_bulto":18,"proveedor":"PEPSICO"},
{"codigo":"300065826","descripcion":"CHEETOS ONDULADOS KETCHUP 40GX66","unidades_x_bulto":66,"proveedor":"PEPSICO"},
{"codigo":"300065825","descripcion":"CHEETOS ONDULADOS KETCHUP 80GX24","unidades_x_bulto":24,"proveedor":"PEPSICO"},
{"codigo":"300058336","descripcion":"CHEETOS 23GX108X1","unidades_x_bulto":108,"proveedor":"PEPSICO"},
{"codigo":"300059433","descripcion":"CHEETOS QUESO 43GX70X1","unidades_x_bulto":70,"proveedor":"PEPSICO"},
{"codigo":"300060664","descripcion":"CHEETOS QUESO 85GX24X1","unidades_x_bulto":24,"proveedor":"PEPSICO"},
{"codigo":"300060662","descripcion":"CHEETOS QUESO 140GX18X1","unidades_x_bulto":18,"proveedor":"PEPSICO"},
{"codigo":"300060663","descripcion":"CHEETOS QUESO 229GX12X1","unidades_x_bulto":12,"proveedor":"PEPSICO"},
{"codigo":"300061011","descripcion":"CHEETOS QUESO CREMA 43GX66","unidades_x_bulto":66,"proveedor":"PEPSICO"},
{"codigo":"300061010","descripcion":"CHEETOS QUESO CREMA 85GX24","unidades_x_bulto":24,"proveedor":"PEPSICO"},
{"codigo":"300064915","descripcion":"DORITOS DINAMITA EXTRA FH 45G","unidades_x_bulto":110,"proveedor":"PEPSICO"},
{"codigo":"300064914","descripcion":"DORITOS DINAMITA EXTRA FH 82G","unidades_x_bulto":38,"proveedor":"PEPSICO"},
{"codigo":"300064055","descripcion":"DORITOS DINAMITA FH 45GX110X1","unidades_x_bulto":110,"proveedor":"PEPSICO"},
{"codigo":"300064054","descripcion":"DORITOS DINAMITA FH 82GX38X1","unidades_x_bulto":38,"proveedor":"PEPSICO"},
{"codigo":"300063015","descripcion":"DORITOS SWEET CHILI 74GX29X1","unidades_x_bulto":29,"proveedor":"PEPSICO"},
{"codigo":"300066262","descripcion":"DORITOS PIZZA 35GX88X1","unidades_x_bulto":88,"proveedor":"PEPSICO"},
{"codigo":"300066261","descripcion":"DORITOS PIZZA 74GX29X1","unidades_x_bulto":29,"proveedor":"PEPSICO"},
{"codigo":"300064193","descripcion":"DORITOS QUESO 20GX88X1","unidades_x_bulto":88,"proveedor":"PEPSICO"},
{"codigo":"300065477","descripcion":"DORITOS QUESO 20GX10 TIR.","unidades_x_bulto":10,"proveedor":"PEPSICO"},
{"codigo":"300066598","descripcion":"DORITOS QUESO 40GX10 TIR.","unidades_x_bulto":10,"proveedor":"PEPSICO"},
{"codigo":"300059545","descripcion":"DORITOS QUESO 40GX70X1","unidades_x_bulto":70,"proveedor":"PEPSICO"},
{"codigo":"300060192","descripcion":"DORITOS QUESO 77GX26","unidades_x_bulto":26,"proveedor":"PEPSICO"},
{"codigo":"300060190","descripcion":"DORITOS QUESO 129GX19","unidades_x_bulto":19,"proveedor":"PEPSICO"},
{"codigo":"300060191","descripcion":"DORITOS QUESO 200GX14","unidades_x_bulto":14,"proveedor":"PEPSICO"},
{"codigo":"300051988","descripcion":"LAYS CLASICAS 20GX76","unidades_x_bulto":76,"proveedor":"PEPSICO"},
{"codigo":"300065476","descripcion":"LAYS CLASICA 20GX10 TIR","unidades_x_bulto":10,"proveedor":"PEPSICO"},
{"codigo":"300066500","descripcion":"LAYS CLASICA 40GX10 TIR","unidades_x_bulto":10,"proveedor":"PEPSICO"},
{"codigo":"300059432","descripcion":"LAYS CLASICAS 40GX68X1","unidades_x_bulto":68,"proveedor":"PEPSICO"},
{"codigo":"300060195","descripcion":"LAYS CLASICAS 85GX25X1","unidades_x_bulto":25,"proveedor":"PEPSICO"},
{"codigo":"300065287","descripcion":"LAYS CLASICAS 134GX18X1","unidades_x_bulto":18,"proveedor":"PEPSICO"},
{"codigo":"300065313","descripcion":"LAYS CLASICAS 230GX13X1","unidades_x_bulto":13,"proveedor":"PEPSICO"},
{"codigo":"300060231","descripcion":"LAYS CLASICAS 330GX9","unidades_x_bulto":9,"proveedor":"PEPSICO"},
{"codigo":"300064887","descripcion":"LAYS BARBACOA 77GX25X1","unidades_x_bulto":25,"proveedor":"PEPSICO"},
{"codigo":"300064885","descripcion":"LAYS PANCETA 77GX25X1","unidades_x_bulto":25,"proveedor":"PEPSICO"},
{"codigo":"300065285","descripcion":"LAYS KETCHUP 77GX25X1","unidades_x_bulto":25,"proveedor":"PEPSICO"},
{"codigo":"300059431","descripcion":"LAYS JAMON SERRANO 34GX72","unidades_x_bulto":72,"proveedor":"PEPSICO"},
{"codigo":"300065286","descripcion":"LAYS JAMON SERRANO 77GX25X1","unidades_x_bulto":25,"proveedor":"PEPSICO"},
{"codigo":"300060080","descripcion":"LAYS JAMON SERRANO 122GX19","unidades_x_bulto":19,"proveedor":"PEPSICO"},
{"codigo":"300059430","descripcion":"LAYS QUESO Y CEBOLLA 34GX72","unidades_x_bulto":72,"proveedor":"PEPSICO"},
{"codigo":"300065361","descripcion":"LAYS QUESO CEBOLLA 77GX25X1","unidades_x_bulto":25,"proveedor":"PEPSICO"},
{"codigo":"300059801","descripcion":"LAYS ONDAS FH 30GX72","unidades_x_bulto":72,"proveedor":"PEPSICO"},
{"codigo":"300059811","descripcion":"LAYS ONDAS FH 70GX28","unidades_x_bulto":28,"proveedor":"PEPSICO"},
{"codigo":"300062584","descripcion":"LAYS PROVOLETA 77GX28X1","unidades_x_bulto":28,"proveedor":"PEPSICO"},
{"codigo":"300066580","descripcion":"LAYS ACAN ASADO 77GX25X1","unidades_x_bulto":25,"proveedor":"PEPSICO"},
{"codigo":"300066581","descripcion":"LAYS ACAN ASADO 34GX72X1 MND","unidades_x_bulto":72,"proveedor":"PEPSICO"},
{"codigo":"300064830","descripcion":"PEHUAMAR ACAN CHIMICHURRI 80GX25","unidades_x_bulto":25,"proveedor":"PEPSICO"},
{"codigo":"300064478","descripcion":"PEHUAMAR ACAN MATAMBRITO 80GX25","unidades_x_bulto":25,"proveedor":"PEPSICO"},
{"codigo":"300064630","descripcion":"PEHUA PAPA ACAN 90GX22 RM","unidades_x_bulto":22,"proveedor":"PEPSICO"},
{"codigo":"300064641","descripcion":"PEHUA PAPA LISA 90GX22 RM","unidades_x_bulto":22,"proveedor":"PEPSICO"},
{"codigo":"300052758","descripcion":"PEHUAMAR MAICITOS 125GX16","unidades_x_bulto":16,"proveedor":"PEPSICO"},
{"codigo":"300062972","descripcion":"PEHUAMAR MAICITOS 265GX10X1","unidades_x_bulto":10,"proveedor":"PEPSICO"},
{"codigo":"300052656","descripcion":"PEHUAMAR PALIQUESO 90GX36","unidades_x_bulto":36,"proveedor":"PEPSICO"},
{"codigo":"300060094","descripcion":"PEHUAMAR PALIQUESO 165GX21X1","unidades_x_bulto":21,"proveedor":"PEPSICO"},
{"codigo":"300060093","descripcion":"PEHUAMAR PALIQUESO 620GX6X1","unidades_x_bulto":6,"proveedor":"PEPSICO"},
{"codigo":"300052790","descripcion":"PEHUAMAR PALISAL 90GX36","unidades_x_bulto":36,"proveedor":"PEPSICO"},
{"codigo":"300060092","descripcion":"PEHUAMAR PALISAL 165GX21X1","unidades_x_bulto":21,"proveedor":"PEPSICO"},
{"codigo":"300060091","descripcion":"PEHUAMAR PALISAL 620GX6X1","unidades_x_bulto":6,"proveedor":"PEPSICO"},
{"codigo":"300060097","descripcion":"PEHUAMAR PAPA ACAN. 135GX19","unidades_x_bulto":19,"proveedor":"PEPSICO"},
{"codigo":"300062973","descripcion":"PEHUAMAR ACANALADA 230GX14X1","unidades_x_bulto":14,"proveedor":"PEPSICO"},
{"codigo":"300064640","descripcion":"PEHUAMAR ACANALADA 450GX9 RM","unidades_x_bulto":9,"proveedor":"PEPSICO"},
{"codigo":"300060196","descripcion":"PEHUAMAR PAPA LISA 135GX19X1","unidades_x_bulto":19,"proveedor":"PEPSICO"},
{"codigo":"300060197","descripcion":"PEHUAMAR PAPA LISA 230GX14X1","unidades_x_bulto":14,"proveedor":"PEPSICO"},
{"codigo":"300064740","descripcion":"PEHUAMAR PAPA LISA 450GX9 RM","unidades_x_bulto":9,"proveedor":"PEPSICO"},
{"codigo":"300052821","descripcion":"PEP COMUN 120GX21","unidades_x_bulto":21,"proveedor":"PEPSICO"},
{"codigo":"300052820","descripcion":"PEP COMUN 84GX36","unidades_x_bulto":36,"proveedor":"PEPSICO"},
{"codigo":"300033488","descripcion":"PEP COMUN 60GX60","unidades_x_bulto":60,"proveedor":"PEPSICO"},
{"codigo":"300052756","descripcion":"PEP RUEDITAS 120GX21","unidades_x_bulto":21,"proveedor":"PEPSICO"},
{"codigo":"300065501","descripcion":"PEP RUEDITAS FH 71GX36X1","unidades_x_bulto":36,"proveedor":"PEPSICO"},
{"codigo":"300052757","descripcion":"PEP RUEDITAS 84GX36","unidades_x_bulto":36,"proveedor":"PEPSICO"},
{"codigo":"300033489","descripcion":"PEP RUEDITAS 60X60 GR PI","unidades_x_bulto":60,"proveedor":"PEPSICO"},
{"codigo":"300058720","descripcion":"PEP RAMITAS QUESO 120GX21","unidades_x_bulto":21,"proveedor":"PEPSICO"},
{"codigo":"300058721","descripcion":"PEP RAMITAS QUESO 80GX36","unidades_x_bulto":36,"proveedor":"PEPSICO"},
{"codigo":"300058740","descripcion":"PEP RAMITAS QUESO 40GX60","unidades_x_bulto":60,"proveedor":"PEPSICO"},
{"codigo":"300065828","descripcion":"TOSTITOS ROUNDED SAL 100GX26X1","unidades_x_bulto":26,"proveedor":"PEPSICO"},
{"codigo":"300065827","descripcion":"TOSTITOS ROUNDED SAL 160GX19X1","unidades_x_bulto":19,"proveedor":"PEPSICO"},
{"codigo":"300065792","descripcion":"TOSTITOS ROUNDED SAL 260GX15X1","unidades_x_bulto":15,"proveedor":"PEPSICO"},
{"codigo":"300063263","descripcion":"TWISTOS MINIT QUESO 40GX112X1","unidades_x_bulto":112,"proveedor":"PEPSICO"},
{"codigo":"300063097","descripcion":"TWISTOS MINIT QUESO 95GX30X1","unidades_x_bulto":30,"proveedor":"PEPSICO"},
{"codigo":"300052694","descripcion":"TWISTOS MINIT QUESO 155GX20","unidades_x_bulto":20,"proveedor":"PEPSICO"},
{"codigo":"300063264","descripcion":"TWISTOS MINIT JAMON 40GX112X1","unidades_x_bulto":112,"proveedor":"PEPSICO"},
{"codigo":"300063098","descripcion":"TWISTOS MINIT JAMON 95GX30X1","unidades_x_bulto":30,"proveedor":"PEPSICO"},
{"codigo":"300052697","descripcion":"TWISTOS MINIT JAMON 155GX20","unidades_x_bulto":20,"proveedor":"PEPSICO"},
{"codigo":"300064354","descripcion":"MANI PELADO TUBULAR 40GX100X1","unidades_x_bulto":100,"proveedor":"PEPSICO"},
{"codigo":"300064352","descripcion":"MANI PELADO 120GX21X1","unidades_x_bulto":21,"proveedor":"PEPSICO"},
{"codigo":"300061023","descripcion":"MANI PELADO 135GX40X1","unidades_x_bulto":40,"proveedor":"PEPSICO"},
{"codigo":"300063271","descripcion":"MANI SAL PELADO 75GX64X1","unidades_x_bulto":64,"proveedor":"PEPSICO"},
{"codigo":"300063273","descripcion":"MANI CON PIEL 135GX40X1","unidades_x_bulto":40,"proveedor":"PEPSICO"},
{"codigo":"300061030","descripcion":"MANI SAL CON PIEL 75GX64X1","unidades_x_bulto":64,"proveedor":"PEPSICO"},
{"codigo":"300061021","descripcion":"MANIAX JAPONES JAMON 95GX40X1","unidades_x_bulto":40,"proveedor":"PEPSICO"},
{"codigo":"300061020","descripcion":"MANIAX JAPONES SAL 95GX40X1","unidades_x_bulto":40,"proveedor":"PEPSICO"},
{"codigo":"300060369","descripcion":"MANIAX SAL Y LIMON 95GX40X1","unidades_x_bulto":40,"proveedor":"PEPSICO"},
{"codigo":"300065572","descripcion":"QUAKER AVENA EXT FINA 470GX12 ARG","unidades_x_bulto":12,"proveedor":"PEPSICO"},
{"codigo":"300065513","descripcion":"QUAKER AVENA INST 200GX20 ARG","unidades_x_bulto":20,"proveedor":"PEPSICO"},
{"codigo":"300065511","descripcion":"QUAKER AVENA TRADIC 200GX20 ARG","unidades_x_bulto":20,"proveedor":"PEPSICO"},
{"codigo":"300065512","descripcion":"QUAKER AVENA INST 500GX10 ARG","unidades_x_bulto":10,"proveedor":"PEPSICO"},
{"codigo":"300065510","descripcion":"QUAKER AVENA TRADIC 500GX10 ARG","unidades_x_bulto":10,"proveedor":"PEPSICO"}

    // Podés seguir pegando aquí abajo el resto de los códigos línea por línea.
];
