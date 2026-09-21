/**
 * Seed de DEMOSTRACIÓN — datos ficticios de una farmacia.
 *
 * Uso:
 *   npm run demo:seed
 *
 * NUNCA ejecutar contra la base de datos de un cliente real. El guardia de
 * seguridad de abajo aborta si detecta el host de producción o si la base ya
 * tiene registros.
 *
 * El cliente de Prisma se genera en ../generated/prisma (ver schema.prisma),
 * no en node_modules/@prisma/client.
 */
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

// ---------------------------------------------------------------------------
// GUARDIA DE SEGURIDAD
// ---------------------------------------------------------------------------

// La lista de hosts prohibidos vive en un solo lugar: prisma/verificar-destino.js
const { verificarDestino } = require('./verificar-destino') as {
    verificarDestino: () => string;
};

const FORZAR = process.argv.includes('--force');

/** Aborta si la base ya tiene datos, salvo que se pase --force. */
async function verificarBaseVacia() {
    const conteos = {
        productos: await prisma.producto.count(),
        clientes: await prisma.cliente.count(),
        proveedores: await prisma.proveedor.count(),
        ventas: await prisma.venta.count(),
        compras: await prisma.compra.count(),
        usuarios: await prisma.user.count(),
    };

    const total = Object.values(conteos).reduce((a, b) => a + b, 0);

    if (total > 0 && !FORZAR) {
        throw new Error(
            '\n🛑 ABORTADO: la base de datos YA TIENE REGISTROS\n' +
            `   ${JSON.stringify(conteos)}\n` +
            '   El seed NO escribió nada, para no duplicar ni pisar datos.\n' +
            '   Si de verdad quieres agregar datos encima, repite con --force.\n',
        );
    }

    if (total > 0 && FORZAR) {
        console.warn('⚠️  La base ya tenía datos y se pasó --force. Se AGREGARÁN datos encima.');
    }
}

// ---------------------------------------------------------------------------
// UTILIDADES
// ---------------------------------------------------------------------------

/** Generador pseudoaleatorio con semilla fija: el seed es reproducible. */
let semilla = 20260920;
function aleatorio(): number {
    semilla = (semilla * 1664525 + 1013904223) % 4294967296;
    return semilla / 4294967296;
}
const entreEnteros = (min: number, max: number) => Math.floor(aleatorio() * (max - min + 1)) + min;
const elegir = <T>(arr: T[]): T => arr[Math.floor(aleatorio() * arr.length)];
const redondear = (n: number) => Math.round(n * 100) / 100;

const HOY = new Date('2026-09-20T00:00:00.000Z');

/** Fecha a N días del día de hoy (negativo = pasado). */
function dias(n: number): Date {
    const d = new Date(HOY);
    d.setUTCDate(d.getUTCDate() + n);
    return d;
}

const DEPARTAMENTOS = [
    ['Managua', 'Managua'],
    ['León', 'León'],
    ['Masaya', 'Masaya'],
    ['Granada', 'Granada'],
    ['Matagalpa', 'Matagalpa'],
    ['Chinandega', 'Chinandega'],
    ['Estelí', 'Estelí'],
    ['Carazo', 'Jinotepe'],
];

const telefono = () => `8${entreEnteros(1, 9)}${entreEnteros(10, 99)}-${entreEnteros(1000, 9999)}`;

// ---------------------------------------------------------------------------
// CATÁLOGO DE PRODUCTOS
// ---------------------------------------------------------------------------

type DefProducto = {
    nombre: string;
    generico: string;
    gramaje: string;
    presentacion: string;
    casa: string;
    /** costo de la caja completa */
    costoCaja: number;
    /** margen sobre el costo */
    margen: number;
    /** blísters por caja */
    cantCaja: number;
    /** unidades por blíster (0 = producto que no viene en blíster) */
    cantBlister: number;
};

const CASAS = [
    'Laboratorios Ramos',
    'Bayer',
    'Genfar',
    'Laboratorios Rarpe',
    'MK Tecnoquímicas',
    'Pfizer',
    'Sanofi',
    'Laboratorios Solka',
];

const CATALOGO: DefProducto[] = [
    { nombre: 'Acetaminofén 500mg', generico: 'Paracetamol', gramaje: '500mg', presentacion: 'Tableta', casa: 'Genfar', costoCaja: 180, margen: 0.45, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Ibuprofeno 400mg', generico: 'Ibuprofeno', gramaje: '400mg', presentacion: 'Tableta', casa: 'MK Tecnoquímicas', costoCaja: 210, margen: 0.5, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Amoxicilina 500mg', generico: 'Amoxicilina', gramaje: '500mg', presentacion: 'Cápsula', casa: 'Genfar', costoCaja: 320, margen: 0.48, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Azitromicina 500mg', generico: 'Azitromicina', gramaje: '500mg', presentacion: 'Tableta', casa: 'Pfizer', costoCaja: 480, margen: 0.55, cantCaja: 6, cantBlister: 3 },
    { nombre: 'Omeprazol 20mg', generico: 'Omeprazol', gramaje: '20mg', presentacion: 'Cápsula', casa: 'MK Tecnoquímicas', costoCaja: 260, margen: 0.52, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Loratadina 10mg', generico: 'Loratadina', gramaje: '10mg', presentacion: 'Tableta', casa: 'Genfar', costoCaja: 150, margen: 0.6, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Diclofenac 50mg', generico: 'Diclofenaco sódico', gramaje: '50mg', presentacion: 'Tableta', casa: 'Laboratorios Ramos', costoCaja: 190, margen: 0.47, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Metformina 850mg', generico: 'Metformina', gramaje: '850mg', presentacion: 'Tableta', casa: 'Sanofi', costoCaja: 280, margen: 0.44, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Losartán 50mg', generico: 'Losartán potásico', gramaje: '50mg', presentacion: 'Tableta', casa: 'Genfar', costoCaja: 310, margen: 0.5, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Enalapril 10mg', generico: 'Enalapril', gramaje: '10mg', presentacion: 'Tableta', casa: 'MK Tecnoquímicas', costoCaja: 240, margen: 0.46, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Aspirina 100mg', generico: 'Ácido acetilsalicílico', gramaje: '100mg', presentacion: 'Tableta', casa: 'Bayer', costoCaja: 170, margen: 0.55, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Ciprofloxacino 500mg', generico: 'Ciprofloxacino', gramaje: '500mg', presentacion: 'Tableta', casa: 'Laboratorios Rarpe', costoCaja: 380, margen: 0.5, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Ranitidina 150mg', generico: 'Ranitidina', gramaje: '150mg', presentacion: 'Tableta', casa: 'Laboratorios Ramos', costoCaja: 200, margen: 0.48, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Naproxeno 550mg', generico: 'Naproxeno sódico', gramaje: '550mg', presentacion: 'Tableta', casa: 'MK Tecnoquímicas', costoCaja: 250, margen: 0.5, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Cetirizina 10mg', generico: 'Cetirizina', gramaje: '10mg', presentacion: 'Tableta', casa: 'Genfar', costoCaja: 165, margen: 0.58, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Prednisona 20mg', generico: 'Prednisona', gramaje: '20mg', presentacion: 'Tableta', casa: 'Laboratorios Solka', costoCaja: 220, margen: 0.5, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Salbutamol inhalador', generico: 'Salbutamol', gramaje: '100mcg', presentacion: 'Inhalador', casa: 'Sanofi', costoCaja: 640, margen: 0.42, cantCaja: 6, cantBlister: 0 },
    { nombre: 'Insulina NPH', generico: 'Insulina humana', gramaje: '100UI/ml', presentacion: 'Vial', casa: 'Sanofi', costoCaja: 1450, margen: 0.35, cantCaja: 5, cantBlister: 0 },
    { nombre: 'Jarabe para la tos', generico: 'Ambroxol', gramaje: '120ml', presentacion: 'Jarabe', casa: 'Laboratorios Ramos', costoCaja: 420, margen: 0.5, cantCaja: 6, cantBlister: 0 },
    { nombre: 'Suero oral', generico: 'Sales de rehidratación', gramaje: '1L', presentacion: 'Sobre', casa: 'Laboratorios Solka', costoCaja: 120, margen: 0.65, cantCaja: 12, cantBlister: 0 },
    { nombre: 'Vitamina C 1g', generico: 'Ácido ascórbico', gramaje: '1g', presentacion: 'Tableta efervescente', casa: 'Bayer', costoCaja: 290, margen: 0.6, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Complejo B', generico: 'Vitaminas del complejo B', gramaje: '10ml', presentacion: 'Ampolla', casa: 'Laboratorios Rarpe', costoCaja: 340, margen: 0.55, cantCaja: 10, cantBlister: 0 },
    { nombre: 'Dexametasona 4mg', generico: 'Dexametasona', gramaje: '4mg', presentacion: 'Ampolla', casa: 'Laboratorios Solka', costoCaja: 280, margen: 0.5, cantCaja: 10, cantBlister: 0 },
    { nombre: 'Metronidazol 500mg', generico: 'Metronidazol', gramaje: '500mg', presentacion: 'Tableta', casa: 'Genfar', costoCaja: 210, margen: 0.5, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Albendazol 400mg', generico: 'Albendazol', gramaje: '400mg', presentacion: 'Tableta', casa: 'MK Tecnoquímicas', costoCaja: 180, margen: 0.62, cantCaja: 10, cantBlister: 2 },
    { nombre: 'Clotrimazol crema', generico: 'Clotrimazol', gramaje: '20g', presentacion: 'Crema', casa: 'Bayer', costoCaja: 390, margen: 0.55, cantCaja: 6, cantBlister: 0 },
    { nombre: 'Alcohol gel 250ml', generico: 'Alcohol etílico', gramaje: '250ml', presentacion: 'Frasco', casa: 'Laboratorios Solka', costoCaja: 300, margen: 0.7, cantCaja: 12, cantBlister: 0 },
    { nombre: 'Gasa estéril', generico: 'Gasa', gramaje: '10x10cm', presentacion: 'Sobre', casa: 'Laboratorios Solka', costoCaja: 160, margen: 0.75, cantCaja: 20, cantBlister: 0 },
    { nombre: 'Jeringa 5ml', generico: 'Jeringa descartable', gramaje: '5ml', presentacion: 'Unidad', casa: 'Laboratorios Solka', costoCaja: 240, margen: 0.7, cantCaja: 50, cantBlister: 0 },
    { nombre: 'Termómetro digital', generico: 'Termómetro', gramaje: 'N/A', presentacion: 'Unidad', casa: 'Laboratorios Rarpe', costoCaja: 900, margen: 0.6, cantCaja: 6, cantBlister: 0 },
    { nombre: 'Paracetamol infantil', generico: 'Paracetamol', gramaje: '120mg/5ml', presentacion: 'Jarabe', casa: 'Genfar', costoCaja: 360, margen: 0.55, cantCaja: 6, cantBlister: 0 },
    { nombre: 'Amoxicilina suspensión', generico: 'Amoxicilina', gramaje: '250mg/5ml', presentacion: 'Suspensión', casa: 'Genfar', costoCaja: 450, margen: 0.5, cantCaja: 6, cantBlister: 0 },
    { nombre: 'Atorvastatina 20mg', generico: 'Atorvastatina', gramaje: '20mg', presentacion: 'Tableta', casa: 'Pfizer', costoCaja: 520, margen: 0.48, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Levotiroxina 100mcg', generico: 'Levotiroxina sódica', gramaje: '100mcg', presentacion: 'Tableta', casa: 'Sanofi', costoCaja: 330, margen: 0.5, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Clonazepam 2mg', generico: 'Clonazepam', gramaje: '2mg', presentacion: 'Tableta', casa: 'Laboratorios Ramos', costoCaja: 270, margen: 0.5, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Furosemida 40mg', generico: 'Furosemida', gramaje: '40mg', presentacion: 'Tableta', casa: 'Laboratorios Rarpe', costoCaja: 195, margen: 0.5, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Hierro + Ácido fólico', generico: 'Sulfato ferroso', gramaje: '300mg', presentacion: 'Tableta', casa: 'MK Tecnoquímicas', costoCaja: 230, margen: 0.58, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Ketorolaco 10mg', generico: 'Ketorolaco trometamina', gramaje: '10mg', presentacion: 'Tableta', casa: 'Laboratorios Solka', costoCaja: 300, margen: 0.5, cantCaja: 10, cantBlister: 10 },
    { nombre: 'Gotas oftálmicas', generico: 'Lágrimas artificiales', gramaje: '15ml', presentacion: 'Frasco', casa: 'Bayer', costoCaja: 480, margen: 0.55, cantCaja: 6, cantBlister: 0 },
    { nombre: 'Mascarilla quirúrgica', generico: 'Mascarilla', gramaje: 'N/A', presentacion: 'Caja 50u', casa: 'Laboratorios Solka', costoCaja: 350, margen: 0.7, cantCaja: 10, cantBlister: 0 },
];

const PROVEEDORES = [
    { nombre: 'Distribuidora Farmacéutica del Norte', encargado: 'Carlos Mendoza', email: 'ventas@distrinorte.com.ni' },
    { nombre: 'Droguería Central', encargado: 'María Fernanda Ruiz', email: 'pedidos@drogueriacentral.com.ni' },
    { nombre: 'Laboratorios Ramos S.A.', encargado: 'Jorge Ramos', email: 'contacto@labramos.com.ni' },
    { nombre: 'Importadora Médica Global', encargado: 'Ana Lucía Torres', email: 'compras@immglobal.com.ni' },
    { nombre: 'Distribuidora Solka', encargado: 'Roberto Peralta', email: 'info@solka.com.ni' },
    { nombre: 'Farmacéutica Pacífico', encargado: 'Silvia Gutiérrez', email: 'ventas@farmapacifico.com.ni' },
];

const CLIENTES = [
    { nombre: 'Clínica San Rafael', encargado: 'Dra. Patricia Núñez', email: 'admin@clinicasanrafael.com.ni' },
    { nombre: 'Centro Médico La Esperanza', encargado: 'Dr. Luis Alberto Cruz', email: 'compras@cmesperanza.com.ni' },
    { nombre: 'Farmacia Comunitaria El Progreso', encargado: 'Marta Sánchez', email: 'elprogreso@gmail.com' },
    { nombre: 'Puesto de Salud Villa Nueva', encargado: 'Enf. Rosa Jiménez', email: 'psvillanueva@minsa.gob.ni' },
    { nombre: 'Clínica Dental Sonrisa', encargado: 'Dr. Erick Loáisiga', email: 'contacto@dentalsonrisa.com.ni' },
    { nombre: 'Laboratorio Clínico Vida', encargado: 'Lic. Karla Espinoza', email: 'info@labvida.com.ni' },
    { nombre: 'Consumidor Final', encargado: 'Mostrador', email: '' },
    { nombre: 'Hogar de Ancianos San José', encargado: 'Sor Elena Martínez', email: 'sanjose@caritas.org.ni' },
    { nombre: 'Clínica Previsional Norte', encargado: 'Dr. Mario Sequeira', email: 'previsional@cpnorte.com.ni' },
    { nombre: 'Botiquín Escolar Municipal', encargado: 'Prof. Hilda Ortega', email: 'botiquin@alcaldia.gob.ni' },
];

const COMPRADORES = ['Ana Gutiérrez', 'Pedro Vallecillo', 'Lucía Hernández'];
const VISITADORES = ['Marvin Cano', 'Jessica Ortiz', 'Danilo Suárez', 'Fabiola Rivas'];

// ---------------------------------------------------------------------------
// SEED
// ---------------------------------------------------------------------------

async function main() {
    const host = verificarDestino();
    console.log(`\n🎯 Base de datos destino: ${host}`);
    await verificarBaseVacia();
    console.log('✅ Guardias superados. Insertando datos de demostración...\n');

    // --- 1. Usuarios -------------------------------------------------------
    // NOTA: el backend guarda las contraseñas en texto plano (users.service.ts).
    // Estas credenciales son públicas a propósito: es un entorno de demo.
    const usuarios = [
        { nombre: 'admin', password: 'demo1234', permisos: ['ventas', 'compras', 'productos', 'clientes', 'proveedores', 'pagos', 'usuarios', 'inventario', 'estados'] },
        { nombre: 'vendedor', password: 'demo1234', permisos: ['ventas', 'clientes', 'pagos'] },
        { nombre: 'bodega', password: 'demo1234', permisos: ['productos', 'inventario', 'compras'] },
    ];
    for (const u of usuarios) {
        await prisma.user.create({ data: { nombre: u.nombre, password: u.password, permisos: u.permisos } });
    }
    console.log(`👤 Usuarios: ${usuarios.length}`);

    // --- 2. Proveedores ----------------------------------------------------
    // correlativo contiguo desde 1: los services continúan con (último ?? 0) + 1
    const proveedores: { id: string; nombre: string }[] = [];
    for (let i = 0; i < PROVEEDORES.length; i++) {
        const p = PROVEEDORES[i];
        const [dep, mun] = elegir(DEPARTAMENTOS);
        const creado = await prisma.proveedor.create({
            data: {
                nombre: p.nombre,
                encargado: p.encargado,
                telefono: telefono(),
                Departamento: dep,
                Municipio: mun,
                correlativo: i + 1,
                direccion: `Del parque central ${entreEnteros(1, 5)} cuadras al ${elegir(['norte', 'sur', 'este', 'oeste'])}`,
                email: p.email,
                createdAt: dias(-entreEnteros(200, 300)),
            },
        });
        proveedores.push({ id: creado.id, nombre: creado.nombre });
    }
    console.log(`🏭 Proveedores: ${proveedores.length}`);

    // --- 3. Clientes -------------------------------------------------------
    const clientes: { id: string; nombre: string }[] = [];
    for (let i = 0; i < CLIENTES.length; i++) {
        const c = CLIENTES[i];
        const [dep, mun] = elegir(DEPARTAMENTOS);
        const creado = await prisma.cliente.create({
            data: {
                nombre: c.nombre,
                encargado: c.encargado,
                telefono: telefono(),
                Departamento: dep,
                Municipio: mun,
                correlativo: i + 1,
                direccion: `Barrio ${elegir(['San Judas', 'Monseñor Lezcano', 'Altagracia', 'Bello Horizonte', 'Linda Vista'])}, casa ${entreEnteros(10, 400)}`,
                email: c.email,
                createdAt: dias(-entreEnteros(150, 280)),
            },
        });
        clientes.push({ id: creado.id, nombre: creado.nombre });
    }
    console.log(`🧑‍⚕️ Clientes: ${clientes.length}`);

    // --- 4. Productos ------------------------------------------------------
    type ProdEnMemoria = DefProducto & {
        id: string;
        precioUnitario: number;
        precioBlister: number;
        precioCaja: number;
        costoCompraUnitario: number;
        costoCompraBlister: number;
        costoCompraCaja: number;
        unidadesPorCaja: number;
        cantUnidad: number;
    };
    const productos: ProdEnMemoria[] = [];

    for (const def of CATALOGO) {
        // unidades por caja = blísters/caja * unidades/blíster (o cantCaja si no hay blíster)
        const unidadesPorCaja = def.cantBlister > 0 ? def.cantCaja * def.cantBlister : def.cantCaja;
        const costoCompraCaja = def.costoCaja;
        const costoCompraUnitario = redondear(costoCompraCaja / unidadesPorCaja);
        const costoCompraBlister = def.cantBlister > 0 ? redondear(costoCompraCaja / def.cantCaja) : 0;

        const precioUnitario = redondear(costoCompraUnitario * (1 + def.margen));
        const precioBlister = def.cantBlister > 0 ? redondear(costoCompraBlister * (1 + def.margen)) : 0;
        const precioCaja = redondear(costoCompraCaja * (1 + def.margen));

        const creado = await prisma.producto.create({
            data: {
                nombre: def.nombre,
                descripcion: `${def.generico} ${def.gramaje} — ${def.presentacion}`,
                presentacion: def.presentacion,
                generico: def.generico,
                gramaje: def.gramaje,
                costo: costoCompraUnitario,
                precioVenta: precioUnitario,
                alertaStock: aleatorio() > 0.7,
                casa: def.casa,
                cantUnidad: 0, // se acumula al crear los lotes
                cantCaja: def.cantCaja,
                cantBlister: def.cantBlister,
                precioUnitario,
                precioBlister,
                precioCaja,
                costoCompraUnitario,
                costoCompraBlister,
                costoCompraCaja,
                codigoBarras: `750${entreEnteros(1000000, 9999999)}`,
                createdAt: dias(-entreEnteros(200, 300)),
            },
        });

        productos.push({
            ...def,
            id: creado.id,
            precioUnitario,
            precioBlister,
            precioCaja,
            costoCompraUnitario,
            costoCompraBlister,
            costoCompraCaja,
            unidadesPorCaja,
            cantUnidad: 0,
        });
    }
    console.log(`💊 Productos: ${productos.length}`);

    // --- 5. Casas y códigos de barras --------------------------------------
    for (const casa of CASAS) {
        const deEsaCasa = productos.filter((p) => p.casa === casa);
        await prisma.casas.create({
            data: { nombre: casa, productoId: deEsaCasa.length ? elegir(deEsaCasa).id : null },
        });
    }

    const codigosPorProducto = new Map<string, string>();
    for (const p of productos) {
        const cb = await prisma.codigoDeBarras.create({
            data: { nombre: p.nombre, codigoBarras: `750${entreEnteros(1000000, 9999999)}`, productoId: p.id },
        });
        codigosPorProducto.set(p.id, cb.id);
    }
    console.log(`🏷️  Casas: ${CASAS.length} · Códigos de barras: ${productos.length}`);

    // --- 6. Compras + lotes + detalle --------------------------------------
    type LoteEnMemoria = {
        id: string;
        productoId: string;
        stockTotal: number;
        stockPorCaja: number;
        stockPorBlister: number;
        fechaVencimiento: Date;
    };
    const lotes: LoteEnMemoria[] = [];
    const ESTADOS_COMPRA = ['pagado', 'pendiente', 'abonado'];
    let totalCompras = 0;
    let numLote = 1;

    for (let i = 0; i < 15; i++) {
        const proveedor = elegir(proveedores);
        const fechaCompra = dias(-entreEnteros(30, 240));

        // 3 a 7 productos distintos por compra
        const cantidadItems = entreEnteros(3, 7);
        const elegidos = new Set<ProdEnMemoria>();
        while (elegidos.size < cantidadItems) elegidos.add(elegir(productos));
        const items = [...elegidos];

        let totalCompra = 0;
        const detalles: {
            prod: ProdEnMemoria;
            cajas: number;
            unidades: number;
            blisters: number;
            vence: Date;
            costo: number;
        }[] = [];

        for (const prod of items) {
            const cajas = entreEnteros(2, 12);
            const unidades = cajas * prod.unidadesPorCaja;
            const blisters = prod.cantBlister > 0 ? cajas * prod.cantCaja : 0;
            // vencimientos escalonados: algunos próximos, para que se vean las alertas
            const vence = dias(entreEnteros(-20, 700));
            const costo = redondear(prod.costoCompraCaja * cajas);
            totalCompra += costo;
            detalles.push({ prod, cajas, unidades, blisters, vence, costo });
        }

        totalCompra = Math.round(totalCompra);
        totalCompras += totalCompra;

        const compra = await prisma.compra.create({
            data: {
                Proveedor: proveedor.nombre, // nombre denormalizado, como hace la app
                proveedorId: proveedor.id,
                observaciones: elegir([
                    'Pedido mensual de reposición',
                    'Compra urgente por desabastecimiento',
                    'Pedido con descuento por volumen',
                    'Reposición de antibióticos',
                    '',
                ]),
                correlativo: i + 1,
                Comprador: elegir(COMPRADORES),
                visitador: elegir(VISITADORES),
                total: totalCompra,
                estado: elegir(ESTADOS_COMPRA),
                fecha: fechaCompra,
            },
        });

        for (const d of detalles) {
            await prisma.detalleDeCompras.create({
                data: {
                    compraId: compra.id,
                    productoId: d.prod.id,
                    stockTotal: d.unidades,
                    stockPorCaja: d.cajas,
                    stockPorBlister: d.blisters,
                    precioCosto: d.prod.costoCompraCaja,
                    fecha: fechaCompra,
                    fechaDeVencimiento: d.vence,
                    origen: proveedor.nombre,
                    nombreProducto: d.prod.nombre,
                    cantidad: d.cajas,
                },
            });

            const lote = await prisma.lote.create({
                data: {
                    origen: proveedor.nombre,
                    productoId: d.prod.id,
                    nombre: `L-${String(numLote++).padStart(4, '0')}`,
                    fechaVencimiento: d.vence,
                    stockTotal: d.unidades,
                    stockPorCaja: d.cajas,
                    stockPorBlister: d.blisters,
                    codigoBarrasId: codigosPorProducto.get(d.prod.id) ?? null,
                    compraId: compra.id,
                    createdAt: fechaCompra,
                },
            });

            lotes.push({
                id: lote.id,
                productoId: d.prod.id,
                stockTotal: d.unidades,
                stockPorCaja: d.cajas,
                stockPorBlister: d.blisters,
                fechaVencimiento: d.vence,
            });

            d.prod.cantUnidad += d.unidades;
        }
    }
    console.log(`📦 Compras: 15 · Lotes: ${lotes.length} · Total comprado: C$${totalCompras.toLocaleString()}`);

    // --- 7. Ventas ---------------------------------------------------------
    // Se replica la aritmética de ventas.service.ts para que el stock quede coherente.
    const ESTADOS_VENTA = ['pagado', 'pendiente', 'credito'];
    let totalVentas = 0;
    let correlativoVenta = 1;

    for (let i = 0; i < 60; i++) {
        const cliente = elegir(clientes);
        const fechaVenta = dias(-entreEnteros(0, 180));

        // lotes con existencia real
        const disponibles = lotes.filter((l) => l.stockTotal > 0);
        if (!disponibles.length) break;

        const cantidadItems = Math.min(entreEnteros(1, 4), disponibles.length);
        const usados = new Set<string>();
        const detalles: {
            lote: LoteEnMemoria;
            prod: ProdEnMemoria;
            presentacion: string;
            cantidad: number;
            subtotal: number;
            subGanancia: number;
        }[] = [];

        for (let j = 0; j < cantidadItems; j++) {
            const lote = elegir(disponibles);
            if (usados.has(lote.id) || lote.stockTotal <= 0) continue;
            usados.add(lote.id);

            const prod = productos.find((p) => p.id === lote.productoId)!;

            // elegir presentación según lo que realmente hay en el lote
            const opciones: string[] = ['unitario'];
            if (prod.cantBlister > 0 && lote.stockPorBlister > 0) opciones.push('blister');
            if (lote.stockPorCaja > 0) opciones.push('caja');
            const presentacion = elegir(opciones);

            let cantidad = 0;
            let unidadesVendidas = 0;
            let subtotal = 0;
            let costoTotal = 0;

            if (presentacion === 'caja') {
                cantidad = entreEnteros(1, Math.max(1, Math.min(2, lote.stockPorCaja)));
                unidadesVendidas = cantidad * prod.unidadesPorCaja;
                if (unidadesVendidas > lote.stockTotal) continue;
                subtotal = redondear(prod.precioCaja * cantidad);
                costoTotal = redondear(prod.costoCompraCaja * cantidad);
                lote.stockPorCaja -= cantidad;
                if (prod.cantBlister > 0) lote.stockPorBlister -= prod.cantCaja * cantidad;
            } else if (presentacion === 'blister') {
                cantidad = entreEnteros(1, Math.max(1, Math.min(4, lote.stockPorBlister)));
                unidadesVendidas = cantidad * prod.cantBlister;
                if (unidadesVendidas > lote.stockTotal) continue;
                subtotal = redondear(prod.precioBlister * cantidad);
                costoTotal = redondear(prod.costoCompraBlister * cantidad);
                lote.stockPorBlister -= cantidad;
                lote.stockPorCaja = Math.floor(lote.stockPorBlister / prod.cantCaja);
            } else {
                cantidad = entreEnteros(1, Math.max(1, Math.min(10, lote.stockTotal)));
                unidadesVendidas = cantidad;
                subtotal = redondear(prod.precioUnitario * cantidad);
                costoTotal = redondear(prod.costoCompraUnitario * cantidad);
            }

            lote.stockTotal -= unidadesVendidas;
            prod.cantUnidad -= unidadesVendidas;

            detalles.push({
                lote,
                prod,
                presentacion,
                cantidad,
                subtotal,
                subGanancia: redondear(subtotal - costoTotal),
            });
        }

        if (!detalles.length) continue;

        const total = redondear(detalles.reduce((a, d) => a + d.subtotal, 0));
        const ganancia = redondear(detalles.reduce((a, d) => a + d.subGanancia, 0));
        totalVentas += total;

        const estado = elegir(ESTADOS_VENTA);

        const venta = await prisma.venta.create({
            data: {
                nombreCliente: cliente.nombre,
                clienteId: cliente.id,
                estado,
                correlativo: correlativoVenta++,
                total,
                gananciaTotal: ganancia,
                fecha: fechaVenta,
                fechaDePago: estado === 'pagado' ? fechaVenta : null,
                // noVenta NO se fija: es autoincrement() y la secuencia debe
                // quedar a cargo de Postgres.
            },
        });

        for (const d of detalles) {
            await prisma.listaProductos.create({
                data: {
                    ventaId: venta.id,
                    productoId: d.prod.id,
                    nombreProducto: d.prod.nombre,
                    presentacion: d.presentacion,
                    cantidad: d.cantidad,
                    subGanancia: d.subGanancia,
                    subtotal: d.subtotal,
                    fechaDeVencimiento: d.lote.fechaVencimiento,
                    loteId: d.lote.id,
                },
            });
        }
    }
    console.log(`🧾 Ventas: ${correlativoVenta - 1} · Total vendido: C$${Math.round(totalVentas).toLocaleString()}`);

    // --- 8. Sincronizar cantUnidad de cada producto ------------------------
    // Debe coincidir con la suma de stockTotal de sus lotes, o el inventario
    // se ve incoherente en la app.
    // Durante las ventas el stock se descontó SOLO en memoria: hay que
    // persistirlo, o los lotes quedarían con el stock original de compra.
    for (const l of lotes) {
        await prisma.lote.update({
            where: { id: l.id },
            data: {
                stockTotal: l.stockTotal,
                stockPorCaja: l.stockPorCaja,
                stockPorBlister: l.stockPorBlister,
            },
        });
    }

    for (const p of productos) {
        const suma = lotes.filter((l) => l.productoId === p.id).reduce((a, l) => a + l.stockTotal, 0);
        await prisma.producto.update({ where: { id: p.id }, data: { cantUnidad: suma } });
    }
    console.log('🔄 Stock de lotes persistido y cantUnidad sincronizado');

    // --- 9. Pagos (completos y parciales) ----------------------------------
    let pagosCompra = 0;
    for (const prov of proveedores) {
        const comprasProv = await prisma.compra.findMany({ where: { proveedorId: prov.id } });
        for (const c of comprasProv) {
            if (c.estado === 'pendiente') continue; // deja saldo pendiente a propósito
            // "abonado" paga una parte; "pagado" paga todo
            const monto = c.estado === 'pagado' ? c.total : redondear(c.total * (0.3 + aleatorio() * 0.4));
            await prisma.pagosRealizadosCompra.create({
                data: { proveedorId: prov.id, monto, fechaPago: dias(-entreEnteros(1, 120)) },
            });
            pagosCompra++;
        }
    }

    let pagosVenta = 0;
    for (const cli of clientes) {
        const ventasCli = await prisma.venta.findMany({ where: { clienteId: cli.id } });
        for (const v of ventasCli) {
            if (v.estado === 'pendiente') continue; // saldo pendiente visible en el estado de cuenta
            const monto = v.estado === 'pagado' ? v.total : redondear(v.total * (0.3 + aleatorio() * 0.4));
            await prisma.pagosRealizadosVentas.create({
                data: { clienteId: cli.id, monto, fechaPago: dias(-entreEnteros(1, 120)) },
            });
            pagosVenta++;
        }
    }
    console.log(`💰 Pagos a proveedores: ${pagosCompra} · Pagos de clientes: ${pagosVenta}`);

    console.log('\n✅ Datos de demostración cargados.');
    console.log('   Usuarios: admin / vendedor / bodega — contraseña: demo1234\n');
}

main()
    .catch((e) => {
        console.error(e instanceof Error ? e.message : e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
