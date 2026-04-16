// MAESTRO DE ARTÍCULOS COMPLETO (181 PRODUCTOS)
const productos = [
    { "codigo": "300058397", "descripcion": "3D QUESO 143G", "unidades_x_bulto": 18 },
    { "codigo": "300058395", "descripcion": "3D QUESO 43G", "unidades_x_bulto": 75 },
    { "codigo": "300060661", "descripcion": "3D QUESO 85G", "unidades_x_bulto": 27 },
    { "codigo": "300058394", "descripcion": "3D QUESO 92G", "unidades_x_bulto": 27 },
    { "codigo": "300052023", "descripcion": "3D MEGA QUESO 23G", "unidades_x_bulto": 120 },
    { "codigo": "300054823", "descripcion": "CHEETOS 151G", "unidades_x_bulto": 18 },
    { "codigo": "300052894", "descripcion": "CHEETOS 238G", "unidades_x_bulto": 12 },
    { "codigo": "300050336", "descripcion": "CHEETOS 23G", "unidades_x_bulto": 108 },
    { "codigo": "300052892", "descripcion": "CHEETOS 94G", "unidades_x_bulto": 24 },
    { "codigo": "300065826", "descripcion": "CHEETOS ONDULADOS KETCHUP 40G", "unidades_x_bulto": 66 },
    { "codigo": "300065825", "descripcion": "CHEETOS ONDULADOS KETCHUP 80G", "unidades_x_bulto": 24 },
    { "codigo": "300060662", "descripcion": "CHEETOS QUESO 140G", "unidades_x_bulto": 18 },
    { "codigo": "300060663", "descripcion": "CHEETOS QUESO 229G", "unidades_x_bulto": 12 },
    { "codigo": "300059433", "descripcion": "CHEETOS QUESO 43G", "unidades_x_bulto": 70 },
    { "codigo": "300060664", "descripcion": "CHEETOS QUESO 85G", "unidades_x_bulto": 24 },
    { "codigo": "300061011", "descripcion": "CHEETOS QUESO CREMA 43G", "unidades_x_bulto": 66 },
    { "codigo": "300061010", "descripcion": "CHEETOS QUESO CREMA 85G", "unidades_x_bulto": 24 },
    { "codigo": "300064915", "descripcion": "DORITOS DINAMITA EXTRA FH 45G", "unidades_x_bulto": 110 },
    { "codigo": "300064914", "descripcion": "DORITOS DINAMITA EXTRA FH 82G", "unidades_x_bulto": 38 },
    { "codigo": "300062698", "descripcion": "DORITOS DINAMITA FH 33G", "unidades_x_bulto": 110 },
    { "codigo": "300059867", "descripcion": "DORITOS DINAMITA FH 33G", "unidades_x_bulto": 40 },
    { "codigo": "300064055", "descripcion": "DORITOS DINAMITA FH 45G", "unidades_x_bulto": 110 },
    { "codigo": "300062697", "descripcion": "DORITOS DINAMITA FH 70G", "unidades_x_bulto": 44 },
    { "codigo": "300059753", "descripcion": "DORITOS DINAMITA FH 70G EX ARG", "unidades_x_bulto": 64 },
    { "codigo": "300064054", "descripcion": "DORITOS DINAMITA FH 82G", "unidades_x_bulto": 38 },
    { "codigo": "300066262", "descripcion": "DORITOS PIZZA 35G", "unidades_x_bulto": 88 },
    { "codigo": "300066261", "descripcion": "DORITOS PIZZA 74G", "unidades_x_bulto": 29 },
    { "codigo": "300060680", "descripcion": "DORITOS QUESO 129G EXP ARG", "unidades_x_bulto": 17 },
    { "codigo": "300060190", "descripcion": "DORITOS QUESO 129G", "unidades_x_bulto": 19 },
    { "codigo": "300054822", "descripcion": "DORITOS QUESO 140G", "unidades_x_bulto": 19 },
    { "codigo": "300058257", "descripcion": "DORITOS QUESO 140G EXP ARG", "unidades_x_bulto": 58 },
    { "codigo": "300060191", "descripcion": "DORITOS QUESO 200G", "unidades_x_bulto": 14 },
    { "codigo": "300064193", "descripcion": "DORITOS QUESO 20G", "unidades_x_bulto": 88 },
    { "codigo": "300054910", "descripcion": "DORITOS QUESO 220G", "unidades_x_bulto": 14 },
    { "codigo": "300059547", "descripcion": "DORITOS QUESO 40G CH", "unidades_x_bulto": 58 },
    { "codigo": "300059545", "descripcion": "DORITOS QUESO 40G", "unidades_x_bulto": 70 },
    { "codigo": "300060459", "descripcion": "DORITOS QUESO 77G EXP ARG", "unidades_x_bulto": 17 },
    { "codigo": "300060192", "descripcion": "DORITOS QUESO 77G", "unidades_x_bulto": 26 },
    { "codigo": "300058259", "descripcion": "DORITOS QUESO 85G EXP ARG", "unidades_x_bulto": 14 },
    { "codigo": "300063015", "descripcion": "DORITOS SWEET CHILI 74G", "unidades_x_bulto": 29 },
    { "codigo": "300063283", "descripcion": "DORITOS SWEET CHILI 35G", "unidades_x_bulto": 88 },
    { "codigo": "300064888", "descripcion": "LAYS BARBACOA 34G", "unidades_x_bulto": 72 },
    { "codigo": "300064887", "descripcion": "LAYS BARBACOA 77G", "unidades_x_bulto": 25 },
    { "codigo": "300060233", "descripcion": "LAYS CEBOLLA CARAMELIZADA 77G", "unidades_x_bulto": 28 },
    { "codigo": "300056674", "descripcion": "LAYS CEBOLLA CARAMELIZADA 85G", "unidades_x_bulto": 25 },
    { "codigo": "300060232", "descripcion": "LAYS CHEDDAR 77G", "unidades_x_bulto": 28 },
    { "codigo": "300065476", "descripcion": "LAYS CLASICA 20G TIRAS", "unidades_x_bulto": 10 },
    { "codigo": "300065287", "descripcion": "LAYS CLASICAS 134G X18", "unidades_x_bulto": 18 },
    { "codigo": "300060193", "descripcion": "LAYS CLASICAS 134G X19", "unidades_x_bulto": 19 },
    { "codigo": "300052773", "descripcion": "LAYS CLASICAS 145G", "unidades_x_bulto": 18 },
    { "codigo": "300051988", "descripcion": "LAYS CLASICAS 20G", "unidades_x_bulto": 76 },
    { "codigo": "300065313", "descripcion": "LAYS CLASICAS 230G", "unidades_x_bulto": 13 },
    { "codigo": "300060194", "descripcion": "LAYS CLASICAS 230G", "unidades_x_bulto": 14 },
    { "codigo": "300052776", "descripcion": "LAYS CLASICAS 249G", "unidades_x_bulto": 14 },
    { "codigo": "300060231", "descripcion": "LAYS CLASICAS 330G", "unidades_x_bulto": 9 },
    { "codigo": "300059432", "descripcion": "LAYS CLASICAS 40G", "unidades_x_bulto": 68 },
    { "codigo": "300060195", "descripcion": "LAYS CLASICAS 85G", "unidades_x_bulto": 25 },
    { "codigo": "300052777", "descripcion": "LAYS CLASICAS 94G", "unidades_x_bulto": 25 },
    { "codigo": "300060080", "descripcion": "LAYS JAMON SERRANO 122G", "unidades_x_bulto": 19 },
    { "codigo": "300059431", "descripcion": "LAYS JAMON SERRANO 34G", "unidades_x_bulto": 72 },
    { "codigo": "300065286", "descripcion": "LAYS JAMON SERRANO 77G", "unidades_x_bulto": 25 },
    { "codigo": "300060230", "descripcion": "LAYS JAMON SERRANO 77G", "unidades_x_bulto": 28 },
    { "codigo": "300054967", "descripcion": "LAYS KETCHUP 85G", "unidades_x_bulto": 25 },
    { "codigo": "300060354", "descripcion": "LAYS KETCHUP 34G", "unidades_x_bulto": 72 },
    { "codigo": "300065285", "descripcion": "LAYS KETCHUP 77G", "unidades_x_bulto": 25 },
    { "codigo": "300060099", "descripcion": "LAYS KETCHUP 77G", "unidades_x_bulto": 28 },
    { "codigo": "300060353", "descripcion": "LAYS MAYONESA 34G", "unidades_x_bulto": 72 },
    { "codigo": "300060352", "descripcion": "LAYS MAYONESA 77G", "unidades_x_bulto": 28 },
    { "codigo": "300062122", "descripcion": "LAYS MOSTAZA 34G", "unidades_x_bulto": 72 },
    { "codigo": "300062585", "descripcion": "LAYS MOSTAZA 77G", "unidades_x_bulto": 28 },
    { "codigo": "300059801", "descripcion": "LAYS ONDAS FH 30G", "unidades_x_bulto": 72 },
    { "codigo": "300059811", "descripcion": "LAYS ONDAS FH 70G", "unidades_x_bulto": 28 },
    { "codigo": "300064886", "descripcion": "LAYS PANCETA 34G", "unidades_x_bulto": 72 },
    { "codigo": "300064885", "descripcion": "LAYS PANCETA 77G", "unidades_x_bulto": 25 },
    { "codigo": "300062045", "descripcion": "LAYS PROVOLETA 34G", "unidades_x_bulto": 72 },
    { "codigo": "300065284", "descripcion": "LAYS PROVOLETA 77G", "unidades_x_bulto": 25 },
    { "codigo": "300062584", "descripcion": "LAYS PROVOLETA 77G", "unidades_x_bulto": 28 },
    { "codigo": "300059430", "descripcion": "LAYS QUESO Y CEBOLLA 34G", "unidades_x_bulto": 72 },
    { "codigo": "300065361", "descripcion": "LAYS QUESO Y CEBOLLA 77G", "unidades_x_bulto": 25 },
    { "codigo": "300060098", "descripcion": "LAYS QUESO Y CEBOLLA 77G", "unidades_x_bulto": 28 },
    { "codigo": "300052772", "descripcion": "LAYS QUESO Y CEBOLLA 85G", "unidades_x_bulto": 25 },
    { "codigo": "300063273", "descripcion": "MANI CON PIEL 135G", "unidades_x_bulto": 40 },
    { "codigo": "300052643", "descripcion": "MANI CON PIEL 150G", "unidades_x_bulto": 30 },
    { "codigo": "300052621", "descripcion": "MANI CON PIEL 85G", "unidades_x_bulto": 58 },
    { "codigo": "300061023", "descripcion": "MANI PELADO 135G", "unidades_x_bulto": 40 },
    { "codigo": "300052641", "descripcion": "MANI PELADO 150G", "unidades_x_bulto": 30 },
    { "codigo": "300061022", "descripcion": "MANI PELADO 320G", "unidades_x_bulto": 17 },
    { "codigo": "300052642", "descripcion": "MANI PELADO 351G", "unidades_x_bulto": 16 },
    { "codigo": "300064854", "descripcion": "MANI PELADO 40G", "unidades_x_bulto": 100 },
    { "codigo": "300052622", "descripcion": "MANI PELADO 85G", "unidades_x_bulto": 58 },
    { "codigo": "300061030", "descripcion": "MANI SAL CON PIEL 75G", "unidades_x_bulto": 64 },
    { "codigo": "300063271", "descripcion": "MANI SAL PELADO 75G", "unidades_x_bulto": 64 },
    { "codigo": "300053043", "descripcion": "MANIAX AJI Y LIMON 110G", "unidades_x_bulto": 56 },
    { "codigo": "300063272", "descripcion": "MANIAX AJI Y LIMON 95G", "unidades_x_bulto": 60 },
    { "codigo": "300061021", "descripcion": "MANIAX JAPONES JAMON 95G", "unidades_x_bulto": 40 },
    { "codigo": "300061020", "descripcion": "MANIAX JAPONES SAL 95G", "unidades_x_bulto": 40 },
    { "codigo": "300047496", "descripcion": "MANIAX MANI JAPONES JAMON 110G", "unidades_x_bulto": 36 },
    { "codigo": "300047036", "descripcion": "MANIAX MANI JAPONES SAL 110G", "unidades_x_bulto": 36 },
    { "codigo": "300053042", "descripcion": "MANIAX SAL Y LIMON 110G", "unidades_x_bulto": 56 },
    { "codigo": "300060869", "descripcion": "MANIAX SAL Y LIMON 95G", "unidades_x_bulto": 60 },
    { "codigo": "300064630", "descripcion": "PEHUA PAPA ACAN 90G", "unidades_x_bulto": 22 },
    { "codigo": "300064641", "descripcion": "PEHUA PAPA LISA 90G", "unidades_x_bulto": 22 },
    { "codigo": "300064479", "descripcion": "PEHUAMAR ACAN CHIMICHURRI 310G", "unidades_x_bulto": 9 },
    { "codigo": "300064830", "descripcion": "PEHUAMAR ACAN CHIMICHURRI 80G", "unidades_x_bulto": 25 },
    { "codigo": "300064750", "descripcion": "PEHUAMAR ACAN MATAMBRITO 310G", "unidades_x_bulto": 9 },
    { "codigo": "300064478", "descripcion": "PEHUAMAR ACAN MATAMBRITO 80G", "unidades_x_bulto": 25 },
    { "codigo": "300062973", "descripcion": "PEHUAMAR ACANALADA 230G", "unidades_x_bulto": 14 },
    { "codigo": "300052665", "descripcion": "PEHUAMAR ACANALADA 245G", "unidades_x_bulto": 14 },
    { "codigo": "300064640", "descripcion": "PEHUAMAR ACANALADA 450G", "unidades_x_bulto": 9 },
    { "codigo": "300060096", "descripcion": "PEHUAMAR ACANALADA 485G", "unidades_x_bulto": 9 },
    { "codigo": "300052666", "descripcion": "PEHUAMAR ACANALADA 520G", "unidades_x_bulto": 9 },
    { "codigo": "300052667", "descripcion": "PEHUAMAR ACANALADA 80G", "unidades_x_bulto": 25 },
    { "codigo": "300052758", "descripcion": "PEHUAMAR MAICITOS 125G", "unidades_x_bulto": 16 },
    { "codigo": "300060234", "descripcion": "PEHUAMAR MAICITOS 260G", "unidades_x_bulto": 10 },
    { "codigo": "300062972", "descripcion": "PEHUAMAR MAICITOS 265G", "unidades_x_bulto": 10 },
    { "codigo": "300052759", "descripcion": "PEHUAMAR MAICITOS 285G", "unidades_x_bulto": 10 },
    { "codigo": "300060094", "descripcion": "PEHUAMAR PALIQUESO 165G", "unidades_x_bulto": 21 },
    { "codigo": "300060093", "descripcion": "PEHUAMAR PALIQUESO 620G", "unidades_x_bulto": 6 },
    { "codigo": "300052656", "descripcion": "PEHUAMAR PALIQUESO 90G", "unidades_x_bulto": 36 },
    { "codigo": "300060092", "descripcion": "PEHUAMAR PALISAL 165G", "unidades_x_bulto": 21 },
    { "codigo": "300060091", "descripcion": "PEHUAMAR PALISAL 620G", "unidades_x_bulto": 6 },
    { "codigo": "300052790", "descripcion": "PEHUAMAR PALISAL 90G", "unidades_x_bulto": 36 },
    { "codigo": "300060097", "descripcion": "PEHUAMAR PAPA ACAN 135G", "unidades_x_bulto": 19 },
    { "codigo": "300060196", "descripcion": "PEHUAMAR PAPA LISA 135G", "unidades_x_bulto": 19 },
    { "codigo": "300060197", "descripcion": "PEHUAMAR PAPA LISA 230G", "unidades_x_bulto": 14 },
    { "codigo": "300064740", "descripcion": "PEHUAMAR PAPA LISA 450G", "unidades_x_bulto": 9 },
    { "codigo": "300060095", "descripcion": "PEHUAMAR PAPA LISA 485G", "unidades_x_bulto": 9 },
    { "codigo": "300052720", "descripcion": "PEHUAMAR PAPA LISA 520G", "unidades_x_bulto": 9 },
    { "codigo": "300060198", "descripcion": "PEHUAMAR PAPA LISA 75G", "unidades_x_bulto": 28 },
    { "codigo": "300052821", "descripcion": "PEP COMUN 120G", "unidades_x_bulto": 21 },
    { "codigo": "300033488", "descripcion": "PEP COMUN 60G", "unidades_x_bulto": 60 },
    { "codigo": "300052820", "descripcion": "PEP COMUN 84G", "unidades_x_bulto": 36 },
    { "codigo": "300058720", "descripcion": "PEP RAMITAS QUESO 120G", "unidades_x_bulto": 21 },
    { "codigo": "300058740", "descripcion": "PEP RAMITAS QUESO 40G", "unidades_x_bulto": 60 },
    { "codigo": "300058721", "descripcion": "PEP RAMITAS QUESO 84G", "unidades_x_bulto": 36 },
    { "codigo": "300052756", "descripcion": "PEP RUEDITAS 120G", "unidades_x_bulto": 21 },
    { "codigo": "300033489", "descripcion": "PEP RUEDITAS 60G", "unidades_x_bulto": 60 },
    { "codigo": "300052757", "descripcion": "PEP RUEDITAS 74G", "unidades_x_bulto": 36 },
    { "codigo": "300065501", "descripcion": "PEP RUEDITAS FH 71G", "unidades_x_bulto": 36 },
    { "codigo": "300065572", "descripcion": "QUAKER AVENA EXT FINA 470G", "unidades_x_bulto": 12 },
    { "codigo": "300051958", "descripcion": "QUAKER AVENA EXTRA FINA 470G", "unidades_x_bulto": 18 },
    { "codigo": "300065613", "descripcion": "QUAKER AVENA INST 280G", "unidades_x_bulto": 20 },
    { "codigo": "300065612", "descripcion": "QUAKER AVENA INST 500G", "unidades_x_bulto": 10 },
    { "codigo": "300058444", "descripcion": "QUAKER AVENA INSTANT 280G", "unidades_x_bulto": 18 },
    { "codigo": "300058445", "descripcion": "QUAKER AVENA INSTANT 500G", "unidades_x_bulto": 18 },
    { "codigo": "300051955", "descripcion": "QUAKER AVENA TRADIC 280G", "unidades_x_bulto": 18 },
    { "codigo": "300058446", "descripcion": "QUAKER AVENA TRADIC 550G ARG", "unidades_x_bulto": 18 },
    { "codigo": "300065611", "descripcion": "QUAKER AVENA TRADIC 280G", "unidades_x_bulto": 20 },
    { "codigo": "300030736", "descripcion": "QUAKER BARRA CHISPAS DE CHOCO 156G", "unidades_x_bulto": 20 },
    { "codigo": "300030737", "descripcion": "QUAKER BARRA FRUTILLA CON CREMA 180G", "unidades_x_bulto": 20 },
    { "codigo": "300030738", "descripcion": "QUAKER BARRAS MOUSSE DE CHOCO 156G", "unidades_x_bulto": 20 },
    { "codigo": "300052628", "descripcion": "QUAKER CEREALES HONEY GRAHAM 190G", "unidades_x_bulto": 9 },
    { "codigo": "300052629", "descripcion": "QUAKER CEREALES HONEY NUT OATS 190G", "unidades_x_bulto": 9 },
    { "codigo": "300060199", "descripcion": "TOSTITOS 129G", "unidades_x_bulto": 19 },
    { "codigo": "300060200", "descripcion": "TOSTITOS 200G", "unidades_x_bulto": 14 },
    { "codigo": "300060201", "descripcion": "TOSTITOS 77G", "unidades_x_bulto": 26 },
    { "codigo": "300065828", "descripcion": "TOSTITOS ROUNDED SAL 100G", "unidades_x_bulto": 26 },
    { "codigo": "300065827", "descripcion": "TOSTITOS ROUNDED SAL 160G", "unidades_x_bulto": 19 },
    { "codigo": "300065792", "descripcion": "TOSTITOS ROUNDED SAL 260G", "unidades_x_bulto": 15 },
    { "codigo": "300052867", "descripcion": "TWISTOS MINIT JAMON 100G", "unidades_x_bulto": 30 },
    { "codigo": "300052697", "descripcion": "TWISTOS MINIT JAMON 155G", "unidades_x_bulto": 20 },
    { "codigo": "300063264", "descripcion": "TWISTOS MINIT JAMON 40G", "unidades_x_bulto": 112 },
    { "codigo": "300052698", "descripcion": "TWISTOS MINIT JAMON 40G (B84)", "unidades_x_bulto": 84 },
    { "codigo": "300063098", "descripcion": "TWISTOS MINIT JAMON 95G", "unidades_x_bulto": 30 },
    { "codigo": "300052695", "descripcion": "TWISTOS MINIT QUESO 100G", "unidades_x_bulto": 30 },
    { "codigo": "300052694", "descripcion": "TWISTOS MINIT QUESO 155G", "unidades_x_bulto": 20 },
    { "codigo": "300063263", "descripcion": "TWISTOS MINIT QUESO 40G", "unidades_x_bulto": 112 },
    { "codigo": "300052696", "descripcion": "TWISTOS MINIT QUESO 40G (B84)", "unidades_x_bulto": 84 },
    { "codigo": "300063097", "descripcion": "TWISTOS MINIT QUESO 95G", "unidades_x_bulto": 30 },
    { "codigo": "300065477", "descripcion": "DORITOS QUESO 20G TIRAS", "unidades_x_bulto": 10 },
    { "codigo": "300066598", "descripcion": "DORITOS QUESO 40G TIRAS", "unidades_x_bulto": 10 },
    { "codigo": "300066581", "descripcion": "LAYS ACAN ASADO 34G", "unidades_x_bulto": 72 },
    { "codigo": "300066580", "descripcion": "LAYS ACAN ASADO 77G", "unidades_x_bulto": 25 },
    { "codigo": "300066500", "descripcion": "LAYS CLASICA 40G TIRAS", "unidades_x_bulto": 10 }
];

// Lógica de la aplicación
let registrosSesion = [];
let productoSeleccionado = null;

const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');
const detailCard = document.getElementById('detailCard');
const selectedProductName = document.getElementById('selectedProductName');
const sessionEntries = document.getElementById('sessionEntries');
const exportButton = document.getElementById('exportButton');

// BUSCADOR MEJORADO
searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase().trim();
    productList.innerHTML = '';
    
    if (term.length < 2) {
        productList.innerHTML = '<div style="padding:10px;color:#888;">Ingrese al menos 2 letras...</div>';
        return;
    }

    const filtrados = productos.filter(p => 
        p.descripcion.toLowerCase().includes(term) || p.codigo.includes(term)
    ).slice(0, 20); // Limitamos a 20 para que sea rápido

    if (filtrados.length === 0) {
        productList.innerHTML = '<div style="padding:10px;color:red;">No se encontró el producto.</div>';
    } else {
        filtrados.forEach(p => {
            const div = document.createElement('div');
            div.style = "padding: 15px; border-bottom: 1px solid #eee; cursor: pointer; background: #fff; font-size: 1.1em;";
            div.innerHTML = `<strong>${p.descripcion}</strong><br><small style="color:#666">Código: ${p.codigo} | Bulto: ${p.unidades_x_bulto} un.</small>`;
            div.onclick = () => {
                productoSeleccionado = p;
                selectedProductName.innerText = p.descripcion;
                detailCard.classList.remove('hidden');
                productList.innerHTML = '';
                searchInput.value = p.descripcion;
                window.scrollTo(0, document.body.scrollHeight);
            };
            productList.appendChild(div);
        });
    }
});

// AGREGAR AL REGISTRO
document.getElementById('addEntryButton').onclick = () => {
    const bultos = parseInt(document.getElementById('cantidadBultos').value) || 0;
    const unidades = parseInt(document.getElementById('unidadesSueltas').value) || 0;
    const fecha = document.getElementById('fechaVencimiento').value;

    if (!fecha) { alert("¡Debe ingresar la fecha de vencimiento!"); return; }

    const total = (bultos * productoSeleccionado.unidades_x_bulto) + unidades;

    registrosSesion.push({
        codigo: productoSeleccionado.codigo,
        descripcion: productoSeleccionado.descripcion,
        bultos, unidades, total,
        vencimiento: fecha,
        timestamp: new Date().toLocaleTimeString()
    });

    actualizarVista();
    detailCard.classList.add('hidden');
    document.getElementById('productForm').reset();
    searchInput.value = '';
    searchInput.focus();
};

function actualizarVista() {
    if (registrosSesion.length === 0) {
        sessionEntries.innerHTML = '<div style="padding:10px;color:#888;">No hay datos guardados aún.</div>';
        exportButton.disabled = true;
    } else {
        sessionEntries.innerHTML = registrosSesion.map((r, i) => `
            <div style="background:#f1f8e9; border-left: 5px solid #4caf50; padding:10px; margin-bottom:8px; border-radius:4px; position:relative;">
                <strong>${r.descripcion}</strong><br>
                <small>Total: ${r.total} un. (${r.bultos}B + ${r.unidades}u)</small><br>
                <small>Vencimiento: <b>${r.vencimiento}</b></small>
                <button onclick="borrarLinea(${i})" style="position:absolute; right:5px; top:5px; background:none; border:none; color:red; font-weight:bold; cursor:pointer;">X</button>
            </div>
        `).reverse().join('');
        exportButton.disabled = false;
    }
}

window.borrarLinea = (index) => {
    registrosSesion.splice(index, 1);
    actualizarVista();
};

// EXPORTAR EXCEL (CSV)
exportButton.onclick = () => {
    let csv = "Codigo;Producto;Bultos;Unidades Sueltas;Total Unidades;Vencimiento\n";
    registrosSesion.forEach(r => {
        csv += `${r.codigo};${r.descripcion};${r.bultos};${r.unidades};${r.total};${r.vencimiento}\n`;
    });

    const blob = new Blob(["\ufeff" + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `conteo_${new Date().toLocaleDateString().replace(/\//g, '-')}.csv`;
    link.click();
};

// NUEVO CONTEO
document.getElementById('newCountButton').onclick = () => {
    if (confirm("¿Está seguro de borrar todo el conteo actual?")) {
        registrosSesion = [];
        actualizarVista();
    }
};

actualizarVista();
