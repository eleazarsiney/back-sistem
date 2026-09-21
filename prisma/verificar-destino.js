/**
 * Guardia de seguridad: impide que cualquier comando destructivo o de carga
 * de datos apunte a una base de datos de producción.
 *
 * Es la ÚNICA fuente de verdad de la lista de hosts prohibidos. Lo usan:
 *   - prisma/seed.ts          (antes de insertar nada)
 *   - npm run demo:migrate    (antes de aplicar migraciones)
 *
 * Se ejecuta también como script suelto:  node prisma/verificar-destino.js
 */

/** Hosts de bases de datos REALES de clientes. Nunca escribir aquí. */
const HOSTS_PROHIBIDOS = [
    'crossover.proxy.rlwy.net',
];

/**
 * Valida DATABASE_URL y devuelve el host destino.
 * Lanza si la URL falta, es inválida o apunta a producción.
 */
function verificarDestino() {
    const url = process.env.DATABASE_URL;

    if (!url) {
        throw new Error(
            'DATABASE_URL no está definida.\n' +
            'Los comandos de demo la cargan desde .env.demo — ¿existe ese archivo?',
        );
    }

    let host;
    try {
        host = new URL(url).host;
    } catch {
        throw new Error('DATABASE_URL no es una URL válida.');
    }

    for (const prohibido of HOSTS_PROHIBIDOS) {
        if (url.includes(prohibido)) {
            throw new Error(
                '\n🛑 ABORTADO: DATABASE_URL apunta a una BASE DE DATOS DE PRODUCCIÓN\n' +
                `   Host detectado: ${host}\n` +
                '   No se ejecutó ninguna operación.\n' +
                '   Revisa .env.demo y vuelve a intentarlo.\n',
            );
        }
    }

    return host;
}

module.exports = { verificarDestino, HOSTS_PROHIBIDOS };

// Ejecutado directamente: sirve de compuerta antes de prisma migrate deploy.
if (require.main === module) {
    try {
        const host = verificarDestino();
        console.log(`🎯 Destino verificado: ${host}`);
    } catch (e) {
        console.error(e.message);
        process.exit(1);
    }
}
