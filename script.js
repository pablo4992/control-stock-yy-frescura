const productos = [
    {"codigo": "300052023", "descripcion": "3D MEGA QUESO 23GX120", "unidades_x_bulto": 120, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300058395", "descripcion": "3D QUESO 43GX75X1", "unidades_x_bulto": 75, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060661", "descripcion": "3D QUESO 85GX27X1", "unidades_x_bulto": 27, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300058397", "descripcion": "3D QUESO 143GX18X1", "unidades_x_bulto": 18, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065826", "descripcion": "CHEETOS ONDULADOS KETCHUP 40GX66", "unidades_x_bulto": 66, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065825", "descripcion": "CHEETOS ONDULADOS KETCHUP 80GX24", "unidades_x_bulto": 24, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300058336", "descripcion": "CHEETOS 23GX108X1", "unidades_x_bulto": 108, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300059433", "descripcion": "CHEETOS QUESO 43GX70X1", "unidades_x_bulto": 70, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060664", "descripcion": "CHEETOS QUESO 85GX24X1", "unidades_x_bulto": 24, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060662", "descripcion": "CHEETOS QUESO 140GX18X1", "unidades_x_bulto": 18, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060663", "descripcion": "CHEETOS QUESO 229GX12X1", "unidades_x_bulto": 12, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300061011", "descripcion": "CHEETOS QUESO CREMA 43GX66", "unidades_x_bulto": 66, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300061010", "descripcion": "CHEETOS QUESO CREMA 85GX24", "unidades_x_bulto": 24, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064915", "descripcion": "DORITOS DINAMITA EXTRA FH 45GX110X1 ARG", "unidades_x_bulto": 110, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064914", "descripcion": "DORITOS DINAMITA EXTRA FH 82GX38X1 ARG", "unidades_x_bulto": 38, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064055", "descripcion": "DORITOS DINAMITA FH 45GX110X1", "unidades_x_bulto": 110, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064054", "descripcion": "DORITOS DINAMITA FH 82GX38X1", "unidades_x_bulto": 38, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300063015", "descripcion": "DORITOS SWEET CHILI M 74GX29X1", "unidades_x_bulto": 29, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300066262", "descripcion": "DORITOS PIZZA 35GX88X1", "unidades_x_bulto": 88, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300066261", "descripcion": "DORITOS PIZZA 74GX29X1", "unidades_x_bulto": 29, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064193", "descripcion": "DORITOS QUESO 20GX88X1", "unidades_x_bulto": 88, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065477", "descripcion": "DORITOS QUESO 20GX10 TIR", "unidades_x_bulto": 10, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300066598", "descripcion": "DORITOS QUESO 40GX10 TIR", "unidades_x_bulto": 10, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300059545", "descripcion": "DORITOS QUESO 40GX70X1", "unidades_x_bulto": 70, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060192", "descripcion": "DORITOS QUESO 77GX26", "unidades_x_bulto": 26, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060190", "descripcion": "DORITOS QUESO 129GX19", "unidades_x_bulto": 19, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060191", "descripcion": "DORITOS QUESO 200GX14", "unidades_x_bulto": 14, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300051988", "descripcion": "LAYS CLASICAS 20GX76", "unidades_x_bulto": 76, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065476", "descripcion": "LAYS CLASICA 20GX10 TIR", "unidades_x_bulto": 10, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300066500", "descripcion": "LAYS CLASICA 40GX10 TIR", "unidades_x_bulto": 10, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300059432", "descripcion": "LAYS CLASICAS 40GX68X1", "unidades_x_bulto": 68, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060195", "descripcion": "LAYS CLASICAS 85GX25X1", "unidades_x_bulto": 25, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065287", "descripcion": "LAYS CLASICAS 134GX18X1", "unidades_x_bulto": 18, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065313", "descripcion": "LAYS CLASICAS 230GX13X1", "unidades_x_bulto": 13, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060231", "descripcion": "LAYS CLASICAS 330GX9", "unidades_x_bulto": 9, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064887", "descripcion": "LAYS BARBACOA 77GX25X1", "unidades_x_bulto": 25, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064885", "descripcion": "LAYS PANCETA 77GX25X1", "unidades_x_bulto": 25, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065285", "descripcion": "LAYS KETCHUP 77GX25X1", "unidades_x_bulto": 25, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300059431", "descripcion": "LAYS JAMON SERRANO 34GX72", "unidades_x_bulto": 72, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065286", "descripcion": "LAYS JAMON SERRANO 77GX25X1", "unidades_x_bulto": 25, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060080", "descripcion": "LAYS JAMON SERRANO 122GX19", "unidades_x_bulto": 19, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300059430", "descripcion": "LAYS QUESO Y CEBOLLA 34GX72", "unidades_x_bulto": 72, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065361", "descripcion": "LAYS QUESO CEBOLLA 77GX25X1", "unidades_x_bulto": 25, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300059801", "descripcion": "LAYS ONDAS FH 30GX72", "unidades_x_bulto": 72, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300059811", "descripcion": "LAYS ONDAS FH 70GX28", "unidades_x_bulto": 28, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300062584", "descripcion": "LAYS PROVOLETA 77GX28X1", "unidades_x_bulto": 28, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300066580", "descripcion": "LAYS ACAN ASADO 77GX25X1", "unidades_x_bulto": 25, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300066581", "descripcion": "LAYS ACAN ASADO 34GX72X1 MND", "unidades_x_bulto": 72, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064830", "descripcion": "PEHUAMAR ACAN CHIMICHURRI 80GX25", "unidades_x_bulto": 25, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064478", "descripcion": "PEHUAMAR ACAN MATAMBRITO 80GX25", "unidades_x_bulto": 25, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064630", "descripcion": "PEHUA PAPA ACAN 90GX22 RM", "unidades_x_bulto": 22, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064641", "descripcion": "PEHUA PAPA LISA 90GX22 RM", "unidades_x_bulto": 22, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300052758", "descripcion": "PEHUAMAR MAICITOS 125GX16", "unidades_x_bulto": 16, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300062972", "descripcion": "PEHUAMAR MAICITOS 265GX10X1", "unidades_x_bulto": 10, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300052656", "descripcion": "PEHUAMAR PALIQUESO 90GX36", "unidades_x_bulto": 36, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060094", "descripcion": "PEHUAMAR PALIQUESO 165GX21X1", "unidades_x_bulto": 21, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060093", "descripcion": "PEHUAMAR PALIQUESO 620GX6X1", "unidades_x_bulto": 6, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300052790", "descripcion": "PEHUAMAR PALISAL 90GX36", "unidades_x_bulto": 36, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060092", "descripcion": "PEHUAMAR PALISAL 165GX21X1", "unidades_x_bulto": 21, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060091", "descripcion": "PEHUAMAR PALISAL 620GX6X1", "unidades_x_bulto": 6, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060097", "descripcion": "PEHUAMAR PAPA ACANA 135GX19", "unidades_x_bulto": 19, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300062973", "descripcion": "PEHUAMAR ACANALADA 230GX14X1", "unidades_x_bulto": 14, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064640", "descripcion": "PEHUAMAR ACANALADA 450GX9 RM", "unidades_x_bulto": 9, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060196", "descripcion": "PEHUAMAR PAPA LISA 135GX19X1", "unidades_x_bulto": 19, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060197", "descripcion": "PEHUAMAR PAPA LISA 230GX14X1", "unidades_x_bulto": 14, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064740", "descripcion": "PEHUAMAR PAPA LISA 450GX9 RM", "unidades_x_bulto": 9, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300052821", "descripcion": "PEP COMUN 120GX21", "unidades_x_bulto": 21, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300052820", "descripcion": "PEP COMUN 84GX36", "unidades_x_bulto": 36, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300033488", "descripcion": "PEP COMUN 60X60 GR", "unidades_x_bulto": 60, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300052756", "descripcion": "PEP RUEDITAS 120GX21", "unidades_x_bulto": 21, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065501", "descripcion": "PEP RUEDITAS FH 71GX36X1", "unidades_x_bulto": 36, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300052757", "descripcion": "PEP RUEDITAS 84GX36", "unidades_x_bulto": 36, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300033489", "descripcion": "PEP RUEDITAS 60X60 GR PI", "unidades_x_bulto": 60, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300058720", "descripcion": "PEP RAMITAS QUESO 120GX21", "unidades_x_bulto": 21, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300058721", "descripcion": "PEP RAMITAS QUESO 80GX36", "unidades_x_bulto": 36, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300058740", "descripcion": "PEP RAMITAS QUESO 40GX60", "unidades_x_bulto": 60, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065828", "descripcion": "TOSTITOS ROUNDED SAL 100GX26X1", "unidades_x_bulto": 26, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065827", "descripcion": "TOSTITOS ROUNDED SAL 160GX19X1", "unidades_x_bulto": 19, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065792", "descripcion": "TOSTITOS ROUNDED SAL 260GX15X1", "unidades_x_bulto": 15, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300063263", "descripcion": "TWISTOS MINIT QUESO 40GX112X1", "unidades_x_bulto": 112, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300063097", "descripcion": "TWISTOS MINIT QUESO 95GX30X1", "unidades_x_bulto": 30, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300052694", "descripcion": "TWISTOS MINIT QUESO 155GX20", "unidades_x_bulto": 20, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300063264", "descripcion": "TWISTOS MINIT JAMON 40GX112X1", "unidades_x_bulto": 112, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300063098", "descripcion": "TWISTOS MINIT JAMON 95GX30X1", "unidades_x_bulto": 30, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300052697", "descripcion": "TWISTOS MINIT JAMON 155GX20", "unidades_x_bulto": 20, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064354", "descripcion": "MANI PELADO TUBULAR 40GX100X1", "unidades_x_bulto": 100, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064352", "descripcion": "MANI PELADO 120GX21X1", "unidades_x_bulto": 21, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300061023", "descripcion": "MANI PELADO 135GX40X1", "unidades_x_bulto": 40, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300063271", "descripcion": "MANI SAL PELADO 75GX64X1", "unidades_x_bulto": 64, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300063273", "descripcion": "MANI CON PIEL 135GX40X1", "unidades_x_bulto": 40, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300061030", "descripcion": "MANI SAL CON PIEL 75GX64X1", "unidades_x_bulto": 64, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300061021", "descripcion": "MANIAX JAPONES JAMON 95GX40X1", "unidades_x_bulto": 40, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300061020", "descripcion": "MANIAX JAPONES SAL 95GX40X1", "unidades_x_bulto": 40, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060369", "descripcion": "MANIAX SAL Y LIMON 95GX40X1", "unidades_x_bulto": 40, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065572", "descripcion": "QUAKER AVENA EXT FINA 470GX12 ARG", "unidades_x_bulto": 12, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065513", "descripcion": "QUAKER AVENA INST 200GX20 ARG", "unidades_x_bulto": 20, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065511", "descripcion": "QUAKER AVENA TRADIC 200GX20 ARG", "unidades_x_bulto": 20, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065512", "descripcion": "QUAKER AVENA INST 500GX10 ARG", "unidades_x_bulto": 10, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065510", "descripcion": "QUAKER AVENA TRADIC 500GX10 ARG", "unidades_x_bulto": 10, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "10530", "descripcion": "HEREFORD TTO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14029", "descripcion": "HEREFORD MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14507", "descripcion": "EL BAUTISMO MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14508", "descripcion": "EL BAUTISMO BLEND TINTAS 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14509", "descripcion": "EL BAUTISMO BLEND B. DLCE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14510", "descripcion": "EL BAUTISMO ROSADO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14540", "descripcion": "Frizze Italian Pomelata 6x1000", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14553", "descripcion": "La Gran Nacha X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14554", "descripcion": "El Regreso Sem-chen X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14555", "descripcion": "El Ultimo Rie Mejor X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14581", "descripcion": "TERMIDOR INTENSO TTO 12X1L", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14583", "descripcion": "Frizze Evol Blue New X1000", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14584", "descripcion": "Frizze Blue Lata X473", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14586", "descripcion": "Frizze Ital Lima Lata X473", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14590", "descripcion": "TERMIDOR BLANCO 12X1L", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14596", "descripcion": "Frizze Pomelata 6x473", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14597", "descripcion": "Mingo Limon, P&j 6x355", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14599", "descripcion": "Mingo Maracuya G&c 6x355", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14600", "descripcion": "Mingo Pomelo Rm&c 6x355", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14601", "descripcion": "Mingo Limon, P&j 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14603", "descripcion": "Mingo Maracuya, G&c 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14604", "descripcion": "Mingo Pomelo, Rm%c 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14605", "descripcion": "TERMIDOR 2021 TINTO 12X1L", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20161", "descripcion": "Viejo Solar Magn. Tinto 6x1125", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20202", "descripcion": "Suter Bi-varietal Syrcab 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20205", "descripcion": "Suter Bi-varietal Malbon 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20250", "descripcion": "Suter Varietal Cabernet 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20251", "descripcion": "Suter Varietal Malbec 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20254", "descripcion": "Suter Varietal Chard 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20255", "descripcion": "Suter Varietal Tardio6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20301", "descripcion": "Suter Etiq Marron Dnat 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20303", "descripcion": "Suter Etiq Marron New Pin 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20500", "descripcion": "Suter Champaña E.brut 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20501", "descripcion": "Suter Champaña Dulce 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20505", "descripcion": "Suter Champaña E.dulce 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30001", "descripcion": "Jw Red 12x750 Uk", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30002", "descripcion": "Jw Red 12x1000 Uk", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30003", "descripcion": "Jw Black Label 12x750", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30004", "descripcion": "Jw Black Label 12x1000", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30005", "descripcion": "Jw Double Black 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30007", "descripcion": "Jw Gold Rve 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30008", "descripcion": "Jw Swing 12x750", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30009", "descripcion": "J W Blue Label 18 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30012", "descripcion": "Baileys Nueva Botella 12x750", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30018", "descripcion": "Zacapa Centenario 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30019", "descripcion": "Smirnoff 21 Do 12x700", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30020", "descripcion": "Smirnoff Green Apple Do 6x700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30021", "descripcion": "Smirnoff Citrus Do 6x700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30022", "descripcion": "Smirnoff Raspberry Do 6x700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30023", "descripcion": "White Horse Do 12x750", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30025", "descripcion": "Legui 40 Años 12x750", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30032", "descripcion": "Talisker 10 Años 6x750 Ml", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30034", "descripcion": "Gordon S Gin 6x700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30035", "descripcion": "Pimms Bitter 12x750", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30043", "descripcion": "Glen Elgin 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30048", "descripcion": "Old Parr 12yo 12x750", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30054", "descripcion": "Zacapa Cent Xo 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30058", "descripcion": "Bulleit 6x700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30065", "descripcion": "Smirnoff Watermelon 6x700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30066", "descripcion": "J Walker 18 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30075", "descripcion": "Gordon´s Gin 6x700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30076", "descripcion": "Buchananas Deluxe 12x750", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30077", "descripcion": "Sheridans 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30078", "descripcion": "Antares Kolsh 12 X 500ml", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30085", "descripcion": "J&b Yellow 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30087", "descripcion": "Singleton 12 Yo 6x700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30088", "descripcion": "Singleton 15 Yo 6x700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30089", "descripcion": "Singleton 18 Yo 6x700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30107", "descripcion": "Antares Scoth 12 X 500ml", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30109", "descripcion": "J Walker White 12x1000", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30112", "descripcion": "Captain Morgan Spice Gold6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30114", "descripcion": "Antares Porter 12 X 500ml", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30121", "descripcion": "Antares Honey 12 X 500ml", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30126", "descripcion": "J Walker Black Icon 12x700", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30128", "descripcion": "Tanqueray Sevilla Gin 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30129", "descripcion": "Baileys Salted Caramel 12x750", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30130", "descripcion": "Tanqueray Dry Gin 6x700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30131", "descripcion": "Smirnoff Tropical Fruits 6x700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30132", "descripcion": "Tanqueray Royale 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30138", "descripcion": "Antares Barley Wine 12 X 500ml", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30145", "descripcion": "Antares Imperial Stout Bot 12 X 500ml", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30169", "descripcion": "Antares Playa Grande 6 X 473ml", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30251", "descripcion": "Antares Lata Atlantica 6 X 473ml", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30268", "descripcion": "Antares Lata Caravana 6 X 473ml", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30275", "descripcion": "Antares Lata Ipa 6 X 473ml", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30299", "descripcion": "Antares Lata Honey 6 X 473ml", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30329", "descripcion": "Antares Lata Kolsch 6 X 473ml", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30343", "descripcion": "Antares Lata Scotch 6 X 473ml", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35093", "descripcion": "Smirnoff Bc Grapef.&lime 6x700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35095", "descripcion": "Vat 69 12x700", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35096", "descripcion": "Vat 69 Honey X700", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35097", "descripcion": "Vat 69 Apple X700", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35101", "descripcion": "Smirnoff Bc Orange & Lime 6x700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35102", "descripcion": "Smirnoff Bc Tange&lemongrass 6x700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35103", "descripcion": "Smirnoff Ice Lata 4x6x473", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35104", "descripcion": "Smf Ice Greenapple Lat 4x6x473", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35105", "descripcion": "Smf Ice Red Berrie Lat 4x6x473", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35107", "descripcion": "Gordon´s Tonic 4x6x473", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "41082", "descripcion": "FINCA NOTABLES MALBEC .6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "41682", "descripcion": "DON DAVID MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42102", "descripcion": "ELEMENTOS MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "421021", "descripcion": "ELEMENTOS CABSAUV 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42103", "descripcion": "ELEMENTOS SYRAH 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42104", "descripcion": "ELEMENTOS TANNAT 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42105", "descripcion": "ELEMENTOS TORRONTES 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42107", "descripcion": "ELEMENTOS CHARDONNAY 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42113", "descripcion": "ELEMENTOS TORRONTES DLCE6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42373", "descripcion": "Don David Cabernet 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42374", "descripcion": "Don David Chardonnay 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42375", "descripcion": "Don David Torrontes 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44280", "descripcion": "Elementos Malbec 12x375", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44288", "descripcion": "El Esteco Malbec 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44289", "descripcion": "El Esteco Cabernet Sauv 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44296", "descripcion": "Don David Reserva Malbec X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44297", "descripcion": "Don David Reserva Cab.sauv X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44311", "descripcion": "El Esteco Malbec 1x1500", "unidades_x_bulto": 1, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44314", "descripcion": "ELEMENTOS ROSADO TORRONT 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44354", "descripcion": "El Esteco Blanc De Blanc 4x750", "unidades_x_bulto": 4, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44367", "descripcion": "Blend De Extremos Mb Ee 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44368", "descripcion": "Blend De Extremos Cb Ee 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44389", "descripcion": "Don David Pinot Noir6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "51943", "descripcion": "La Mascota Malbec 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "51945", "descripcion": "La Mascota Cab. Sauv 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "51946", "descripcion": "La Mascota Chardonnay 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "54011", "descripcion": "Gran Mascota Malbec 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "54019", "descripcion": "La Mascota Caber Franc 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "54035", "descripcion": "La Mascota Spark Bl Noir 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "70201", "descripcion": "Fond Cave Cabsau 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "70202", "descripcion": "Fond Cave Chard 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "70343", "descripcion": "Medalla Tto 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "70750", "descripcion": "TRAPICHE ALARIS CABSAUV 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "70751", "descripcion": "TRAPICHE ALARIS CHARDO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "71704", "descripcion": "TRAPICHE ALARIS MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "71706", "descripcion": "Trapich Alaris blanc 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "72541", "descripcion": "TRAPICHE ALARIS MERLOT 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "72857", "descripcion": "F.LAS MORAS CABSAU 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "72858", "descripcion": "F.LAS MORAS SYRAH 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "72859", "descripcion": "F.LAS MORAS MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "72867", "descripcion": "Fond Cave Rva Malbec 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74025", "descripcion": "Mora Negra Mal-bon 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74051", "descripcion": "F. Las Moras Bonarda 6 C750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74054", "descripcion": "Gran Medalla Malbec 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74058", "descripcion": "TRAPICHE ALARIS SYRAH 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74074", "descripcion": "Gran Medalla Malbec 1x6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74117", "descripcion": "Fond Cav Reserva Cab Sauv France X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74118", "descripcion": "Fond Cav Reserva Pet. Verdot X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74140", "descripcion": "Fond Cave Rva Sauvignon 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74146", "descripcion": "FOND CAVE MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74147", "descripcion": "FOND CAVE SYRAH 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74167", "descripcion": "F. LAS MORAS SAUV.BLANC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74188", "descripcion": "Trapiche Alaris Dulce Cosecha 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74208", "descripcion": "ALMA MORA CABSAUV6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74209", "descripcion": "ALMA MORA SYRAH 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74210", "descripcion": "ALMA MORA MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74211", "descripcion": "ALMA MORA CHARD 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74246", "descripcion": "Fond Cave G. Rva Cabsau 6 X 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74248", "descripcion": "Fond Cave G. Rva Malbec 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74263", "descripcion": "TRAPICHE ALARIS TORRONTES 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74268", "descripcion": "F.las Moras Malbec 12x375", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74376", "descripcion": "Paz De Flm Malbec 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74377", "descripcion": "Paz De Flm Cab Franc 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74393", "descripcion": "DADA FMORAS N°1 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74394", "descripcion": "DADA FMORAS N°3 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74395", "descripcion": "DADA FMORAS N°2 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74397", "descripcion": "Alma Mora Blend Dulce 6x 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74398", "descripcion": "ALMA MORA SYRAH ROSE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74402", "descripcion": "Paz De Flm Sauv Blanc 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74413", "descripcion": "Fond Cave G. Rva Blend 6 X 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74415", "descripcion": "TRAPICHE RESERVA CABSAU 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74416", "descripcion": "DADA ESPUMANTE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74419", "descripcion": "TRAPICHE RESERVA MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74421", "descripcion": "TRAPICHE RESERVA CHARD 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74437", "descripcion": "Alma Mora Blend Tinto 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74438", "descripcion": "Alma Mora Blend Blanco 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74443", "descripcion": "Fond Cave Rva Chardonnay 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74473", "descripcion": "DADA ESPUMANTE ROS6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74478", "descripcion": "TRAPICHE D. COSECHA ROSE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74503", "descripcion": "Alma Mora Malbec 12x375", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74504", "descripcion": "DADA ART MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74505", "descripcion": "DADA ART CABERNET 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74509", "descripcion": "F. LAS MORAS BCO DULCE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74510", "descripcion": "F. LAS MORAS ROSADO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74520", "descripcion": "Medalla Malbec 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74522", "descripcion": "Medalla Chardonnay 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74527", "descripcion": "Trapiche Iscay Syrah Viognier 4 X1500", "unidades_x_bulto": 4, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74548", "descripcion": "Trap Costa&pampa S. Blanc 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74555", "descripcion": "Trapiche Puro Malbec", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74556", "descripcion": "Trapiche Impuro Malbec X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74567", "descripcion": "DADA ESPUMANTE MARACUYA 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74568", "descripcion": "DADA ESPUMANTE CASSIS 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74569", "descripcion": "DADA N°8 CHOCOLATE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74570", "descripcion": "Los Intocables Malbec 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74583", "descripcion": "Los Intocables Cab.sauv 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74608", "descripcion": "Alma Mora Sel Rve Malbec 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74609", "descripcion": "Alma Mora Sel Rve Caber 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74610", "descripcion": "Alma Mora Sel Rve Blend 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74611", "descripcion": "Alma Mora Sel Rve Chardo 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74636", "descripcion": "Dada N6 Honey X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74651", "descripcion": "Los Intocables Chard 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74663", "descripcion": "Trapiche Puro Cab.sauv 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74664", "descripcion": "Trapiche Impuro Cab.sauv 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74676", "descripcion": "Trapiche Perfiles Mb Calcereo 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74677", "descripcion": "Trapiche Perfiles Cs Grava 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74683", "descripcion": "Medalla Malbec 4x1500", "unidades_x_bulto": 4, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74684", "descripcion": "Los Intocables Red Blend 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74701", "descripcion": "Dada Incrediblends 1 X750", "unidades_x_bulto": 1, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74702", "descripcion": "Dada Incrediblends 2 X750", "unidades_x_bulto": 1, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74703", "descripcion": "Dada Incrediblends 3 X750", "unidades_x_bulto": 3, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74709", "descripcion": "Dada Lata Sweet 4x6x355", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74710", "descripcion": "Dada Lata Sweet Pink 4x6x355", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74714", "descripcion": "Dada White Malbec 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74715", "descripcion": "Los Intocables Rum Blend 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74721", "descripcion": "FAIR FOR LIFE MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74722", "descripcion": "FAIR FOR LIFE CAB.SAUV 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74723", "descripcion": "FAIR FOR LIFE CHARDONNAY 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74726", "descripcion": "Origen By Trapiche Malbec 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74727", "descripcion": "Origen By Trapiche Cab.s 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80002", "descripcion": "San Telmo Cab-sauv X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80003", "descripcion": "San Telmo Sel Chardonna X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80004", "descripcion": "San Telmo Malbec X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80007", "descripcion": "Los Arboles Sel Cabernet 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80008", "descripcion": "Los Arboles Sel Chard 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80009", "descripcion": "Los Arboles Dulce X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80010", "descripcion": "LOS ARBOLES SEL MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80015", "descripcion": "Coleccion Privada Blend 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80018", "descripcion": "Coleccion Privada Cab Sauv 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80020", "descripcion": "Coleccion Privada Chard 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80022", "descripcion": "Coleccion Privada Malbec", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80024", "descripcion": "Coleccion Privada Merlot 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80025", "descripcion": "Coleccion Privada Pinot 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80030", "descripcion": "Nc Reserva Cab Sauv X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80031", "descripcion": "Nc Reserva Chardo 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80032", "descripcion": "Nc Reserva Malbec 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80034", "descripcion": "Alegoria Cab Sauv 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80036", "descripcion": "Alegoria Chardo 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80037", "descripcion": "Alegoria Malbec 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80045", "descripcion": "Nc Spark Brut Rose 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80046", "descripcion": "Nc Spark Dlce 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80048", "descripcion": "NC SPARK EBRUT 6X750 PREM", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80050", "descripcion": "NC SPARK NATURE 6X750 PREM", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80062", "descripcion": "Nc Dolores Malbec 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80063", "descripcion": "Nc Dolores Red Blend 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80064", "descripcion": "Nc Dolores Cabernet 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80075", "descripcion": "Dolores Espumante Ebrut 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80076", "descripcion": "Dolores Espumante Rose 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80077", "descripcion": "Dolores Espumante Dulce 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80084", "descripcion": "Sel Enologo Blend 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80088", "descripcion": "J De Dios Nc Blend", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80089", "descripcion": "Los Arboles Sel Red Blend 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30033", "descripcion": "Caol Ila 12 Años 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74728", "descripcion": "Dada 7 Orange Bitter 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74587", "descripcion": "Trapiche Terrior Series F Orellana 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "54022", "descripcion": "Unanime Tinto 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80092", "descripcion": "San Telmo Spark Dulce 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80093", "descripcion": "San Telmo Spark E.brut 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74680", "descripcion": "Terroir S Ed Milagro 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74678", "descripcion": "Terroir S Ed Piedra 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74708", "descripcion": "Trapiche Terroir Series Coletto", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "60016", "descripcion": "Antares Micro Ipa 25 Años", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74144", "descripcion": "Fond Cave Rva Cabsau 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14585", "descripcion": "Frizze It Lim New X 1000", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74656", "descripcion": "Gran Medalla Caber Fran 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74525", "descripcion": "Gran Medalla Malbec 4x1500", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "10531", "descripcion": "Hereford Bco 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74410", "descripcion": "Iscay Malbec - Cabernet Franc", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30029", "descripcion": "J Walker Green 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80049", "descripcion": "Nc Spark Ebrut 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74686", "descripcion": "Demencial Malbec 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74053", "descripcion": "Fond Cave Rva Cos Tardia 6 X 500", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74687", "descripcion": "Demencial Pinot Noir 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74547", "descripcion": "Trap Costa & Pampa P.noir 6x 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74736", "descripcion": "Alma Mora Merlot 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74658", "descripcion": "Gran Medalla Pinot Noir 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "60017", "descripcion": "Antares Ipa Lata 6x473 (new)", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30134", "descripcion": "Gordon´s Pink Gin 6x700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74243", "descripcion": "Fond Cave Champaña 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74521", "descripcion": "Medalla Cabernet Sauv 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35108", "descripcion": "Smf Bc Rubyorange&lime Lata 4x6x473", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35109", "descripcion": "Smf Bc Grapef&lime Lata 4x6x473", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30135", "descripcion": "Smirnoff Tamarindo 6 X 700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44395", "descripcion": "Elementos Red Blend 6 X 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "60018", "descripcion": "Antares Lager Lata 6x473", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74740", "descripcion": "Expedicion Del Sur Cabsua 6 X 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74735", "descripcion": "F Las Moras Red Blend 6x 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74737", "descripcion": "Trapiche Res Red Blend 6 X 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80102", "descripcion": "San Telmo Spark Ext Dulce 6x75 Ma", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30010", "descripcion": "J&b Rare 12x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74748", "descripcion": "Dada N°9 Caramel 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "71716", "descripcion": "Alaris Red Blend 6 X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74749", "descripcion": "Intocables Double Oak 6 X 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74675", "descripcion": "Perfiles Mb Textura Fina 6x 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74170", "descripcion": "Flm Gran Syrah 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "41080", "descripcion": "FINCA NOTABLES CAB SAUV.6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "41641", "descripcion": "Don David Malbec 12x375", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "41687", "descripcion": "Don David Syrah 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"}
];



let conteosEfectuados = JSON.parse(localStorage.getItem('misConteos')) || [];

// ============================
// Estado de sesión: 1 proveedor por conteo
// ============================
let proveedorActivo = (conteosEfectuados.length > 0 && conteosEfectuados[0].proveedor) ? conteosEfectuados[0].proveedor : null;

// UI: muestra el proveedor activo en pantalla
function asegurarBarraProveedor() {
    let el = document.getElementById('proveedorActivo');
    if (!el) {
        const h1 = document.querySelector('main h1');
        el = document.createElement('div');
        el.id = 'proveedorActivo';
        el.style.margin = '10px 0 16px';
        el.style.padding = '10px 12px';
        el.style.borderRadius = '10px';
        el.style.border = '1px solid #dfe7ef';
        el.style.background = '#f8fafc';
        el.style.color = '#111827';
        el.style.fontSize = '0.95rem';
        if (h1 && h1.parentNode) {
            h1.parentNode.insertBefore(el, h1.nextSibling);
        } else {
            document.body.insertBefore(el, document.body.firstChild);
        }
    }
    return el;
}

function actualizarProveedorUI() {
    const el = asegurarBarraProveedor();
    if (!proveedorActivo) {
        el.innerHTML = '<strong>Proveedor activo:</strong> <span style="color:#6b7280">(no seleccionado aún)</span>';
    } else {
        el.innerHTML = `<strong>Proveedor activo:</strong> <span style="color:#2563eb;font-weight:700">${proveedorActivo}</span> <span style="color:#6b7280">(bloqueado hasta "Nuevo Conteo")</span>`;
    }
}


const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');
const detailCard = document.getElementById('detailCard');
const selectedProductName = document.getElementById('selectedProductName');
const sessionEntries = document.getElementById('sessionEntries');
const exportButton = document.getElementById('exportButton');

const inputBultos = document.getElementById('cantidadBultos');
const inputUnidades = document.getElementById('unidadesSueltas');
const inputFecha = document.getElementById('fechaVencimiento');

// 1. BUSCADOR
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    if (term.length < 2) {
        productList.innerHTML = "Escriba para buscar...";
        return;
    }
    const filtrados = productos.filter(p => {
    const okProveedor = !proveedorActivo || (p.proveedor === proveedorActivo);
    if (!okProveedor) return false;
    return (p.descripcion || '').toLowerCase().includes(term) || (p.codigo || '').includes(term);
});
    productList.innerHTML = "";
    filtrados.forEach(p => {
        const div = document.createElement('div');
        div.style.padding = "15px";
        div.style.borderBottom = "1px solid #eee";
        div.innerHTML = `<span style="color:#007bff; font-weight:bold;">${p.codigo}</span><br><span style="color:#333;">${p.descripcion}</span> <span style="color:#28a745; font-weight:bold;">[UxB: ${p.unidades_x_bulto}]</span>`;
        div.onclick = () => {
            selectedProductName.textContent = p.descripcion;
            selectedProductName.dataset.codigo = p.codigo;
            selectedProductName.dataset.uxb = p.unidades_x_bulto;
            selectedProductName.dataset.proveedor = p.proveedor || "";
            detailCard.classList.remove('hidden');
            productList.innerHTML = "";
            searchInput.value = "";
            setTimeout(() => { inputBultos.focus(); inputBultos.select(); }, 150);
        };
        productList.appendChild(div);
    });
});

// 2. MODO RÁPIDO (SALTOS CON ENTER)
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

    const proveedorProducto = selectedProductName.dataset.proveedor || "";
    if (!proveedorActivo) {
        proveedorActivo = proveedorProducto;
        actualizarProveedorUI();
    } else if (proveedorActivo !== proveedorProducto) {
        alert(`Este conteo es solo para:
${proveedorActivo}

No se pueden mezclar proveedores.`);
        return;
    }

    conteosEfectuados.push({
        codigo: selectedProductName.dataset.codigo,
        nombre: selectedProductName.textContent,
        proveedor: proveedorProducto,
        uxb: uxb,
        bultos: bultos,
        unidades: unidades,
        total: (bultos * uxb) + unidades,
        fecha: inputFecha.value,
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
        return;
    }
    exportButton.disabled = false;

    let tabla = `<div style="overflow-x:auto;"><table border="1" style="width:100%; border-collapse: collapse; font-size: 0.8em;">
        <tr style="background:#eee;">
            <th>Cód.</th>
            <th>Prod.</th>
            <th>Proveedor</th>
            <th>UxB</th>
            <th>B</th>
            <th>U</th>
            <th>Total</th>
        </tr>`;

    conteosEfectuados.forEach(i => {
        tabla += `<tr>
            <td>${i.codigo}</td>
            <td>${i.nombre}</td>
            <td>${i.proveedor || ""}</td>
            <td>${i.uxb}</td>
            <td>${i.bultos}</td>
            <td>${i.unidades}</td>
            <td style="font-weight:bold;color:green;">${i.total}</td>
        </tr>`;
    });
    tabla += `</table></div>`;
    sessionEntries.innerHTML = tabla;
}

// 5. EXPORTAR CSV
exportButton.onclick = () => {
    let csv = "Codigo;Producto;Proveedor;UxB;Bultos;Unidades;Total;Vencimiento;Hora\r\n";
    conteosEfectuados.forEach(i => {
        csv += `${i.codigo};${i.nombre};${i.proveedor || ""};${i.uxb};${i.bultos};${i.unidades};${i.total};${i.fecha};${i.hora}\r\n`;
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
        proveedorActivo = null;
        actualizarProveedorUI();
        actualizarVista();
    }
};

actualizarProveedorUI();

actualizarVista();
