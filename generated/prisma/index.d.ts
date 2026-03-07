
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Proveedor
 * 
 */
export type Proveedor = $Result.DefaultSelection<Prisma.$ProveedorPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Casas
 * 
 */
export type Casas = $Result.DefaultSelection<Prisma.$CasasPayload>
/**
 * Model CodigoDeBarras
 * 
 */
export type CodigoDeBarras = $Result.DefaultSelection<Prisma.$CodigoDeBarrasPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model Lote
 * 
 */
export type Lote = $Result.DefaultSelection<Prisma.$LotePayload>
/**
 * Model Compra
 * 
 */
export type Compra = $Result.DefaultSelection<Prisma.$CompraPayload>
/**
 * Model PagosRealizadosCompra
 * 
 */
export type PagosRealizadosCompra = $Result.DefaultSelection<Prisma.$PagosRealizadosCompraPayload>
/**
 * Model Venta
 * 
 */
export type Venta = $Result.DefaultSelection<Prisma.$VentaPayload>
/**
 * Model PagosRealizadosVentas
 * 
 */
export type PagosRealizadosVentas = $Result.DefaultSelection<Prisma.$PagosRealizadosVentasPayload>
/**
 * Model ListaProductos
 * 
 */
export type ListaProductos = $Result.DefaultSelection<Prisma.$ListaProductosPayload>
/**
 * Model DetalleDeCompras
 * 
 */
export type DetalleDeCompras = $Result.DefaultSelection<Prisma.$DetalleDeComprasPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proveedor`: Exposes CRUD operations for the **Proveedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proveedors
    * const proveedors = await prisma.proveedor.findMany()
    * ```
    */
  get proveedor(): Prisma.ProveedorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.casas`: Exposes CRUD operations for the **Casas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Casas
    * const casas = await prisma.casas.findMany()
    * ```
    */
  get casas(): Prisma.CasasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.codigoDeBarras`: Exposes CRUD operations for the **CodigoDeBarras** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CodigoDeBarras
    * const codigoDeBarras = await prisma.codigoDeBarras.findMany()
    * ```
    */
  get codigoDeBarras(): Prisma.CodigoDeBarrasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lote`: Exposes CRUD operations for the **Lote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lotes
    * const lotes = await prisma.lote.findMany()
    * ```
    */
  get lote(): Prisma.LoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.compra`: Exposes CRUD operations for the **Compra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Compras
    * const compras = await prisma.compra.findMany()
    * ```
    */
  get compra(): Prisma.CompraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagosRealizadosCompra`: Exposes CRUD operations for the **PagosRealizadosCompra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PagosRealizadosCompras
    * const pagosRealizadosCompras = await prisma.pagosRealizadosCompra.findMany()
    * ```
    */
  get pagosRealizadosCompra(): Prisma.PagosRealizadosCompraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venta`: Exposes CRUD operations for the **Venta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ventas
    * const ventas = await prisma.venta.findMany()
    * ```
    */
  get venta(): Prisma.VentaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagosRealizadosVentas`: Exposes CRUD operations for the **PagosRealizadosVentas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PagosRealizadosVentas
    * const pagosRealizadosVentas = await prisma.pagosRealizadosVentas.findMany()
    * ```
    */
  get pagosRealizadosVentas(): Prisma.PagosRealizadosVentasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listaProductos`: Exposes CRUD operations for the **ListaProductos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListaProductos
    * const listaProductos = await prisma.listaProductos.findMany()
    * ```
    */
  get listaProductos(): Prisma.ListaProductosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalleDeCompras`: Exposes CRUD operations for the **DetalleDeCompras** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetalleDeCompras
    * const detalleDeCompras = await prisma.detalleDeCompras.findMany()
    * ```
    */
  get detalleDeCompras(): Prisma.DetalleDeComprasDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Proveedor: 'Proveedor',
    Cliente: 'Cliente',
    Casas: 'Casas',
    CodigoDeBarras: 'CodigoDeBarras',
    Producto: 'Producto',
    Lote: 'Lote',
    Compra: 'Compra',
    PagosRealizadosCompra: 'PagosRealizadosCompra',
    Venta: 'Venta',
    PagosRealizadosVentas: 'PagosRealizadosVentas',
    ListaProductos: 'ListaProductos',
    DetalleDeCompras: 'DetalleDeCompras'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "proveedor" | "cliente" | "casas" | "codigoDeBarras" | "producto" | "lote" | "compra" | "pagosRealizadosCompra" | "venta" | "pagosRealizadosVentas" | "listaProductos" | "detalleDeCompras"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Proveedor: {
        payload: Prisma.$ProveedorPayload<ExtArgs>
        fields: Prisma.ProveedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProveedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProveedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          findFirst: {
            args: Prisma.ProveedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProveedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          findMany: {
            args: Prisma.ProveedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>[]
          }
          create: {
            args: Prisma.ProveedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          createMany: {
            args: Prisma.ProveedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProveedorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>[]
          }
          delete: {
            args: Prisma.ProveedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          update: {
            args: Prisma.ProveedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          deleteMany: {
            args: Prisma.ProveedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProveedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProveedorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>[]
          }
          upsert: {
            args: Prisma.ProveedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          aggregate: {
            args: Prisma.ProveedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProveedor>
          }
          groupBy: {
            args: Prisma.ProveedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProveedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProveedorCountArgs<ExtArgs>
            result: $Utils.Optional<ProveedorCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Casas: {
        payload: Prisma.$CasasPayload<ExtArgs>
        fields: Prisma.CasasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CasasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CasasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasasPayload>
          }
          findFirst: {
            args: Prisma.CasasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CasasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasasPayload>
          }
          findMany: {
            args: Prisma.CasasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasasPayload>[]
          }
          create: {
            args: Prisma.CasasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasasPayload>
          }
          createMany: {
            args: Prisma.CasasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CasasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasasPayload>[]
          }
          delete: {
            args: Prisma.CasasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasasPayload>
          }
          update: {
            args: Prisma.CasasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasasPayload>
          }
          deleteMany: {
            args: Prisma.CasasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CasasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CasasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasasPayload>[]
          }
          upsert: {
            args: Prisma.CasasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasasPayload>
          }
          aggregate: {
            args: Prisma.CasasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCasas>
          }
          groupBy: {
            args: Prisma.CasasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CasasGroupByOutputType>[]
          }
          count: {
            args: Prisma.CasasCountArgs<ExtArgs>
            result: $Utils.Optional<CasasCountAggregateOutputType> | number
          }
        }
      }
      CodigoDeBarras: {
        payload: Prisma.$CodigoDeBarrasPayload<ExtArgs>
        fields: Prisma.CodigoDeBarrasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodigoDeBarrasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoDeBarrasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodigoDeBarrasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoDeBarrasPayload>
          }
          findFirst: {
            args: Prisma.CodigoDeBarrasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoDeBarrasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodigoDeBarrasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoDeBarrasPayload>
          }
          findMany: {
            args: Prisma.CodigoDeBarrasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoDeBarrasPayload>[]
          }
          create: {
            args: Prisma.CodigoDeBarrasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoDeBarrasPayload>
          }
          createMany: {
            args: Prisma.CodigoDeBarrasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodigoDeBarrasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoDeBarrasPayload>[]
          }
          delete: {
            args: Prisma.CodigoDeBarrasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoDeBarrasPayload>
          }
          update: {
            args: Prisma.CodigoDeBarrasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoDeBarrasPayload>
          }
          deleteMany: {
            args: Prisma.CodigoDeBarrasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodigoDeBarrasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CodigoDeBarrasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoDeBarrasPayload>[]
          }
          upsert: {
            args: Prisma.CodigoDeBarrasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodigoDeBarrasPayload>
          }
          aggregate: {
            args: Prisma.CodigoDeBarrasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodigoDeBarras>
          }
          groupBy: {
            args: Prisma.CodigoDeBarrasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodigoDeBarrasGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodigoDeBarrasCountArgs<ExtArgs>
            result: $Utils.Optional<CodigoDeBarrasCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      Lote: {
        payload: Prisma.$LotePayload<ExtArgs>
        fields: Prisma.LoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          findFirst: {
            args: Prisma.LoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          findMany: {
            args: Prisma.LoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>[]
          }
          create: {
            args: Prisma.LoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          createMany: {
            args: Prisma.LoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>[]
          }
          delete: {
            args: Prisma.LoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          update: {
            args: Prisma.LoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          deleteMany: {
            args: Prisma.LoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>[]
          }
          upsert: {
            args: Prisma.LoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          aggregate: {
            args: Prisma.LoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLote>
          }
          groupBy: {
            args: Prisma.LoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoteCountArgs<ExtArgs>
            result: $Utils.Optional<LoteCountAggregateOutputType> | number
          }
        }
      }
      Compra: {
        payload: Prisma.$CompraPayload<ExtArgs>
        fields: Prisma.CompraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          findFirst: {
            args: Prisma.CompraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          findMany: {
            args: Prisma.CompraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>[]
          }
          create: {
            args: Prisma.CompraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          createMany: {
            args: Prisma.CompraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>[]
          }
          delete: {
            args: Prisma.CompraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          update: {
            args: Prisma.CompraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          deleteMany: {
            args: Prisma.CompraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>[]
          }
          upsert: {
            args: Prisma.CompraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          aggregate: {
            args: Prisma.CompraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompra>
          }
          groupBy: {
            args: Prisma.CompraGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompraGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompraCountArgs<ExtArgs>
            result: $Utils.Optional<CompraCountAggregateOutputType> | number
          }
        }
      }
      PagosRealizadosCompra: {
        payload: Prisma.$PagosRealizadosCompraPayload<ExtArgs>
        fields: Prisma.PagosRealizadosCompraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagosRealizadosCompraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosCompraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagosRealizadosCompraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosCompraPayload>
          }
          findFirst: {
            args: Prisma.PagosRealizadosCompraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosCompraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagosRealizadosCompraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosCompraPayload>
          }
          findMany: {
            args: Prisma.PagosRealizadosCompraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosCompraPayload>[]
          }
          create: {
            args: Prisma.PagosRealizadosCompraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosCompraPayload>
          }
          createMany: {
            args: Prisma.PagosRealizadosCompraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagosRealizadosCompraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosCompraPayload>[]
          }
          delete: {
            args: Prisma.PagosRealizadosCompraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosCompraPayload>
          }
          update: {
            args: Prisma.PagosRealizadosCompraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosCompraPayload>
          }
          deleteMany: {
            args: Prisma.PagosRealizadosCompraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagosRealizadosCompraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PagosRealizadosCompraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosCompraPayload>[]
          }
          upsert: {
            args: Prisma.PagosRealizadosCompraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosCompraPayload>
          }
          aggregate: {
            args: Prisma.PagosRealizadosCompraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagosRealizadosCompra>
          }
          groupBy: {
            args: Prisma.PagosRealizadosCompraGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagosRealizadosCompraGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagosRealizadosCompraCountArgs<ExtArgs>
            result: $Utils.Optional<PagosRealizadosCompraCountAggregateOutputType> | number
          }
        }
      }
      Venta: {
        payload: Prisma.$VentaPayload<ExtArgs>
        fields: Prisma.VentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findFirst: {
            args: Prisma.VentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findMany: {
            args: Prisma.VentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          create: {
            args: Prisma.VentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          createMany: {
            args: Prisma.VentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VentaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          delete: {
            args: Prisma.VentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          update: {
            args: Prisma.VentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          deleteMany: {
            args: Prisma.VentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VentaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          upsert: {
            args: Prisma.VentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          aggregate: {
            args: Prisma.VentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenta>
          }
          groupBy: {
            args: Prisma.VentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VentaCountArgs<ExtArgs>
            result: $Utils.Optional<VentaCountAggregateOutputType> | number
          }
        }
      }
      PagosRealizadosVentas: {
        payload: Prisma.$PagosRealizadosVentasPayload<ExtArgs>
        fields: Prisma.PagosRealizadosVentasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagosRealizadosVentasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosVentasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagosRealizadosVentasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosVentasPayload>
          }
          findFirst: {
            args: Prisma.PagosRealizadosVentasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosVentasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagosRealizadosVentasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosVentasPayload>
          }
          findMany: {
            args: Prisma.PagosRealizadosVentasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosVentasPayload>[]
          }
          create: {
            args: Prisma.PagosRealizadosVentasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosVentasPayload>
          }
          createMany: {
            args: Prisma.PagosRealizadosVentasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagosRealizadosVentasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosVentasPayload>[]
          }
          delete: {
            args: Prisma.PagosRealizadosVentasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosVentasPayload>
          }
          update: {
            args: Prisma.PagosRealizadosVentasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosVentasPayload>
          }
          deleteMany: {
            args: Prisma.PagosRealizadosVentasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagosRealizadosVentasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PagosRealizadosVentasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosVentasPayload>[]
          }
          upsert: {
            args: Prisma.PagosRealizadosVentasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosRealizadosVentasPayload>
          }
          aggregate: {
            args: Prisma.PagosRealizadosVentasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagosRealizadosVentas>
          }
          groupBy: {
            args: Prisma.PagosRealizadosVentasGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagosRealizadosVentasGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagosRealizadosVentasCountArgs<ExtArgs>
            result: $Utils.Optional<PagosRealizadosVentasCountAggregateOutputType> | number
          }
        }
      }
      ListaProductos: {
        payload: Prisma.$ListaProductosPayload<ExtArgs>
        fields: Prisma.ListaProductosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListaProductosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaProductosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListaProductosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaProductosPayload>
          }
          findFirst: {
            args: Prisma.ListaProductosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaProductosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListaProductosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaProductosPayload>
          }
          findMany: {
            args: Prisma.ListaProductosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaProductosPayload>[]
          }
          create: {
            args: Prisma.ListaProductosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaProductosPayload>
          }
          createMany: {
            args: Prisma.ListaProductosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListaProductosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaProductosPayload>[]
          }
          delete: {
            args: Prisma.ListaProductosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaProductosPayload>
          }
          update: {
            args: Prisma.ListaProductosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaProductosPayload>
          }
          deleteMany: {
            args: Prisma.ListaProductosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListaProductosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListaProductosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaProductosPayload>[]
          }
          upsert: {
            args: Prisma.ListaProductosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaProductosPayload>
          }
          aggregate: {
            args: Prisma.ListaProductosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListaProductos>
          }
          groupBy: {
            args: Prisma.ListaProductosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListaProductosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListaProductosCountArgs<ExtArgs>
            result: $Utils.Optional<ListaProductosCountAggregateOutputType> | number
          }
        }
      }
      DetalleDeCompras: {
        payload: Prisma.$DetalleDeComprasPayload<ExtArgs>
        fields: Prisma.DetalleDeComprasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetalleDeComprasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleDeComprasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetalleDeComprasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleDeComprasPayload>
          }
          findFirst: {
            args: Prisma.DetalleDeComprasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleDeComprasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetalleDeComprasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleDeComprasPayload>
          }
          findMany: {
            args: Prisma.DetalleDeComprasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleDeComprasPayload>[]
          }
          create: {
            args: Prisma.DetalleDeComprasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleDeComprasPayload>
          }
          createMany: {
            args: Prisma.DetalleDeComprasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetalleDeComprasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleDeComprasPayload>[]
          }
          delete: {
            args: Prisma.DetalleDeComprasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleDeComprasPayload>
          }
          update: {
            args: Prisma.DetalleDeComprasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleDeComprasPayload>
          }
          deleteMany: {
            args: Prisma.DetalleDeComprasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetalleDeComprasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetalleDeComprasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleDeComprasPayload>[]
          }
          upsert: {
            args: Prisma.DetalleDeComprasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleDeComprasPayload>
          }
          aggregate: {
            args: Prisma.DetalleDeComprasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalleDeCompras>
          }
          groupBy: {
            args: Prisma.DetalleDeComprasGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetalleDeComprasGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetalleDeComprasCountArgs<ExtArgs>
            result: $Utils.Optional<DetalleDeComprasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    proveedor?: ProveedorOmit
    cliente?: ClienteOmit
    casas?: CasasOmit
    codigoDeBarras?: CodigoDeBarrasOmit
    producto?: ProductoOmit
    lote?: LoteOmit
    compra?: CompraOmit
    pagosRealizadosCompra?: PagosRealizadosCompraOmit
    venta?: VentaOmit
    pagosRealizadosVentas?: PagosRealizadosVentasOmit
    listaProductos?: ListaProductosOmit
    detalleDeCompras?: DetalleDeComprasOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProveedorCountOutputType
   */

  export type ProveedorCountOutputType = {
    Compras: number
    PagosRealizadosCompra: number
  }

  export type ProveedorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Compras?: boolean | ProveedorCountOutputTypeCountComprasArgs
    PagosRealizadosCompra?: boolean | ProveedorCountOutputTypeCountPagosRealizadosCompraArgs
  }

  // Custom InputTypes
  /**
   * ProveedorCountOutputType without action
   */
  export type ProveedorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProveedorCountOutputType
     */
    select?: ProveedorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProveedorCountOutputType without action
   */
  export type ProveedorCountOutputTypeCountComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraWhereInput
  }

  /**
   * ProveedorCountOutputType without action
   */
  export type ProveedorCountOutputTypeCountPagosRealizadosCompraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagosRealizadosCompraWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    ventas: number
    PagosRealizadosVenta: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | ClienteCountOutputTypeCountVentasArgs
    PagosRealizadosVenta?: boolean | ClienteCountOutputTypeCountPagosRealizadosVentaArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPagosRealizadosVentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagosRealizadosVentasWhereInput
  }


  /**
   * Count Type CodigoDeBarrasCountOutputType
   */

  export type CodigoDeBarrasCountOutputType = {
    Lotes: number
  }

  export type CodigoDeBarrasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Lotes?: boolean | CodigoDeBarrasCountOutputTypeCountLotesArgs
  }

  // Custom InputTypes
  /**
   * CodigoDeBarrasCountOutputType without action
   */
  export type CodigoDeBarrasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoDeBarrasCountOutputType
     */
    select?: CodigoDeBarrasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CodigoDeBarrasCountOutputType without action
   */
  export type CodigoDeBarrasCountOutputTypeCountLotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoteWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    Casas: number
    lotes: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Casas?: boolean | ProductoCountOutputTypeCountCasasArgs
    lotes?: boolean | ProductoCountOutputTypeCountLotesArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountCasasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasasWhereInput
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountLotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoteWhereInput
  }


  /**
   * Count Type CompraCountOutputType
   */

  export type CompraCountOutputType = {
    Lotes: number
    DetalleDeCompras: number
  }

  export type CompraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Lotes?: boolean | CompraCountOutputTypeCountLotesArgs
    DetalleDeCompras?: boolean | CompraCountOutputTypeCountDetalleDeComprasArgs
  }

  // Custom InputTypes
  /**
   * CompraCountOutputType without action
   */
  export type CompraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraCountOutputType
     */
    select?: CompraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompraCountOutputType without action
   */
  export type CompraCountOutputTypeCountLotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoteWhereInput
  }

  /**
   * CompraCountOutputType without action
   */
  export type CompraCountOutputTypeCountDetalleDeComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleDeComprasWhereInput
  }


  /**
   * Count Type VentaCountOutputType
   */

  export type VentaCountOutputType = {
    detalles: number
  }

  export type VentaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | VentaCountOutputTypeCountDetallesArgs
  }

  // Custom InputTypes
  /**
   * VentaCountOutputType without action
   */
  export type VentaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaCountOutputType
     */
    select?: VentaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VentaCountOutputType without action
   */
  export type VentaCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaProductosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nombre: number
    password: number
    permisos: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nombre?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nombre?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nombre?: true
    password?: true
    permisos?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nombre: string
    password: string
    permisos: JsonValue
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    password?: boolean
    permisos?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    password?: boolean
    permisos?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    password?: boolean
    permisos?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nombre?: boolean
    password?: boolean
    permisos?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "password" | "permisos" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      password: string
      permisos: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nombre: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly permisos: FieldRef<"User", 'Json'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Proveedor
   */

  export type AggregateProveedor = {
    _count: ProveedorCountAggregateOutputType | null
    _avg: ProveedorAvgAggregateOutputType | null
    _sum: ProveedorSumAggregateOutputType | null
    _min: ProveedorMinAggregateOutputType | null
    _max: ProveedorMaxAggregateOutputType | null
  }

  export type ProveedorAvgAggregateOutputType = {
    correlativo: number | null
  }

  export type ProveedorSumAggregateOutputType = {
    correlativo: number | null
  }

  export type ProveedorMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    encargado: string | null
    telefono: string | null
    Departamento: string | null
    Municipio: string | null
    correlativo: number | null
    direccion: string | null
    email: string | null
    createdAt: Date | null
  }

  export type ProveedorMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    encargado: string | null
    telefono: string | null
    Departamento: string | null
    Municipio: string | null
    correlativo: number | null
    direccion: string | null
    email: string | null
    createdAt: Date | null
  }

  export type ProveedorCountAggregateOutputType = {
    id: number
    nombre: number
    encargado: number
    telefono: number
    Departamento: number
    Municipio: number
    correlativo: number
    direccion: number
    email: number
    createdAt: number
    _all: number
  }


  export type ProveedorAvgAggregateInputType = {
    correlativo?: true
  }

  export type ProveedorSumAggregateInputType = {
    correlativo?: true
  }

  export type ProveedorMinAggregateInputType = {
    id?: true
    nombre?: true
    encargado?: true
    telefono?: true
    Departamento?: true
    Municipio?: true
    correlativo?: true
    direccion?: true
    email?: true
    createdAt?: true
  }

  export type ProveedorMaxAggregateInputType = {
    id?: true
    nombre?: true
    encargado?: true
    telefono?: true
    Departamento?: true
    Municipio?: true
    correlativo?: true
    direccion?: true
    email?: true
    createdAt?: true
  }

  export type ProveedorCountAggregateInputType = {
    id?: true
    nombre?: true
    encargado?: true
    telefono?: true
    Departamento?: true
    Municipio?: true
    correlativo?: true
    direccion?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type ProveedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proveedor to aggregate.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proveedors
    **/
    _count?: true | ProveedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProveedorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProveedorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProveedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProveedorMaxAggregateInputType
  }

  export type GetProveedorAggregateType<T extends ProveedorAggregateArgs> = {
        [P in keyof T & keyof AggregateProveedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProveedor[P]>
      : GetScalarType<T[P], AggregateProveedor[P]>
  }




  export type ProveedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProveedorWhereInput
    orderBy?: ProveedorOrderByWithAggregationInput | ProveedorOrderByWithAggregationInput[]
    by: ProveedorScalarFieldEnum[] | ProveedorScalarFieldEnum
    having?: ProveedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProveedorCountAggregateInputType | true
    _avg?: ProveedorAvgAggregateInputType
    _sum?: ProveedorSumAggregateInputType
    _min?: ProveedorMinAggregateInputType
    _max?: ProveedorMaxAggregateInputType
  }

  export type ProveedorGroupByOutputType = {
    id: string
    nombre: string
    encargado: string
    telefono: string
    Departamento: string
    Municipio: string
    correlativo: number
    direccion: string
    email: string
    createdAt: Date
    _count: ProveedorCountAggregateOutputType | null
    _avg: ProveedorAvgAggregateOutputType | null
    _sum: ProveedorSumAggregateOutputType | null
    _min: ProveedorMinAggregateOutputType | null
    _max: ProveedorMaxAggregateOutputType | null
  }

  type GetProveedorGroupByPayload<T extends ProveedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProveedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProveedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProveedorGroupByOutputType[P]>
            : GetScalarType<T[P], ProveedorGroupByOutputType[P]>
        }
      >
    >


  export type ProveedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    encargado?: boolean
    telefono?: boolean
    Departamento?: boolean
    Municipio?: boolean
    correlativo?: boolean
    direccion?: boolean
    email?: boolean
    createdAt?: boolean
    Compras?: boolean | Proveedor$ComprasArgs<ExtArgs>
    PagosRealizadosCompra?: boolean | Proveedor$PagosRealizadosCompraArgs<ExtArgs>
    _count?: boolean | ProveedorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proveedor"]>

  export type ProveedorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    encargado?: boolean
    telefono?: boolean
    Departamento?: boolean
    Municipio?: boolean
    correlativo?: boolean
    direccion?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["proveedor"]>

  export type ProveedorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    encargado?: boolean
    telefono?: boolean
    Departamento?: boolean
    Municipio?: boolean
    correlativo?: boolean
    direccion?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["proveedor"]>

  export type ProveedorSelectScalar = {
    id?: boolean
    nombre?: boolean
    encargado?: boolean
    telefono?: boolean
    Departamento?: boolean
    Municipio?: boolean
    correlativo?: boolean
    direccion?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type ProveedorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "encargado" | "telefono" | "Departamento" | "Municipio" | "correlativo" | "direccion" | "email" | "createdAt", ExtArgs["result"]["proveedor"]>
  export type ProveedorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Compras?: boolean | Proveedor$ComprasArgs<ExtArgs>
    PagosRealizadosCompra?: boolean | Proveedor$PagosRealizadosCompraArgs<ExtArgs>
    _count?: boolean | ProveedorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProveedorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProveedorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProveedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proveedor"
    objects: {
      Compras: Prisma.$CompraPayload<ExtArgs>[]
      PagosRealizadosCompra: Prisma.$PagosRealizadosCompraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      encargado: string
      telefono: string
      Departamento: string
      Municipio: string
      correlativo: number
      direccion: string
      email: string
      createdAt: Date
    }, ExtArgs["result"]["proveedor"]>
    composites: {}
  }

  type ProveedorGetPayload<S extends boolean | null | undefined | ProveedorDefaultArgs> = $Result.GetResult<Prisma.$ProveedorPayload, S>

  type ProveedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProveedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProveedorCountAggregateInputType | true
    }

  export interface ProveedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proveedor'], meta: { name: 'Proveedor' } }
    /**
     * Find zero or one Proveedor that matches the filter.
     * @param {ProveedorFindUniqueArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProveedorFindUniqueArgs>(args: SelectSubset<T, ProveedorFindUniqueArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proveedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProveedorFindUniqueOrThrowArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProveedorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProveedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proveedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorFindFirstArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProveedorFindFirstArgs>(args?: SelectSubset<T, ProveedorFindFirstArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proveedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorFindFirstOrThrowArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProveedorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProveedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proveedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proveedors
     * const proveedors = await prisma.proveedor.findMany()
     * 
     * // Get first 10 Proveedors
     * const proveedors = await prisma.proveedor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proveedorWithIdOnly = await prisma.proveedor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProveedorFindManyArgs>(args?: SelectSubset<T, ProveedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proveedor.
     * @param {ProveedorCreateArgs} args - Arguments to create a Proveedor.
     * @example
     * // Create one Proveedor
     * const Proveedor = await prisma.proveedor.create({
     *   data: {
     *     // ... data to create a Proveedor
     *   }
     * })
     * 
     */
    create<T extends ProveedorCreateArgs>(args: SelectSubset<T, ProveedorCreateArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proveedors.
     * @param {ProveedorCreateManyArgs} args - Arguments to create many Proveedors.
     * @example
     * // Create many Proveedors
     * const proveedor = await prisma.proveedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProveedorCreateManyArgs>(args?: SelectSubset<T, ProveedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proveedors and returns the data saved in the database.
     * @param {ProveedorCreateManyAndReturnArgs} args - Arguments to create many Proveedors.
     * @example
     * // Create many Proveedors
     * const proveedor = await prisma.proveedor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proveedors and only return the `id`
     * const proveedorWithIdOnly = await prisma.proveedor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProveedorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProveedorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proveedor.
     * @param {ProveedorDeleteArgs} args - Arguments to delete one Proveedor.
     * @example
     * // Delete one Proveedor
     * const Proveedor = await prisma.proveedor.delete({
     *   where: {
     *     // ... filter to delete one Proveedor
     *   }
     * })
     * 
     */
    delete<T extends ProveedorDeleteArgs>(args: SelectSubset<T, ProveedorDeleteArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proveedor.
     * @param {ProveedorUpdateArgs} args - Arguments to update one Proveedor.
     * @example
     * // Update one Proveedor
     * const proveedor = await prisma.proveedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProveedorUpdateArgs>(args: SelectSubset<T, ProveedorUpdateArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proveedors.
     * @param {ProveedorDeleteManyArgs} args - Arguments to filter Proveedors to delete.
     * @example
     * // Delete a few Proveedors
     * const { count } = await prisma.proveedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProveedorDeleteManyArgs>(args?: SelectSubset<T, ProveedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proveedors
     * const proveedor = await prisma.proveedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProveedorUpdateManyArgs>(args: SelectSubset<T, ProveedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proveedors and returns the data updated in the database.
     * @param {ProveedorUpdateManyAndReturnArgs} args - Arguments to update many Proveedors.
     * @example
     * // Update many Proveedors
     * const proveedor = await prisma.proveedor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proveedors and only return the `id`
     * const proveedorWithIdOnly = await prisma.proveedor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProveedorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProveedorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proveedor.
     * @param {ProveedorUpsertArgs} args - Arguments to update or create a Proveedor.
     * @example
     * // Update or create a Proveedor
     * const proveedor = await prisma.proveedor.upsert({
     *   create: {
     *     // ... data to create a Proveedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proveedor we want to update
     *   }
     * })
     */
    upsert<T extends ProveedorUpsertArgs>(args: SelectSubset<T, ProveedorUpsertArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorCountArgs} args - Arguments to filter Proveedors to count.
     * @example
     * // Count the number of Proveedors
     * const count = await prisma.proveedor.count({
     *   where: {
     *     // ... the filter for the Proveedors we want to count
     *   }
     * })
    **/
    count<T extends ProveedorCountArgs>(
      args?: Subset<T, ProveedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProveedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProveedorAggregateArgs>(args: Subset<T, ProveedorAggregateArgs>): Prisma.PrismaPromise<GetProveedorAggregateType<T>>

    /**
     * Group by Proveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProveedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProveedorGroupByArgs['orderBy'] }
        : { orderBy?: ProveedorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProveedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProveedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proveedor model
   */
  readonly fields: ProveedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proveedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProveedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Compras<T extends Proveedor$ComprasArgs<ExtArgs> = {}>(args?: Subset<T, Proveedor$ComprasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PagosRealizadosCompra<T extends Proveedor$PagosRealizadosCompraArgs<ExtArgs> = {}>(args?: Subset<T, Proveedor$PagosRealizadosCompraArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagosRealizadosCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Proveedor model
   */
  interface ProveedorFieldRefs {
    readonly id: FieldRef<"Proveedor", 'String'>
    readonly nombre: FieldRef<"Proveedor", 'String'>
    readonly encargado: FieldRef<"Proveedor", 'String'>
    readonly telefono: FieldRef<"Proveedor", 'String'>
    readonly Departamento: FieldRef<"Proveedor", 'String'>
    readonly Municipio: FieldRef<"Proveedor", 'String'>
    readonly correlativo: FieldRef<"Proveedor", 'Int'>
    readonly direccion: FieldRef<"Proveedor", 'String'>
    readonly email: FieldRef<"Proveedor", 'String'>
    readonly createdAt: FieldRef<"Proveedor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Proveedor findUnique
   */
  export type ProveedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor findUniqueOrThrow
   */
  export type ProveedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor findFirst
   */
  export type ProveedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proveedors.
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proveedors.
     */
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * Proveedor findFirstOrThrow
   */
  export type ProveedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proveedors.
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proveedors.
     */
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * Proveedor findMany
   */
  export type ProveedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedors to fetch.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proveedors.
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * Proveedor create
   */
  export type ProveedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * The data needed to create a Proveedor.
     */
    data: XOR<ProveedorCreateInput, ProveedorUncheckedCreateInput>
  }

  /**
   * Proveedor createMany
   */
  export type ProveedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proveedors.
     */
    data: ProveedorCreateManyInput | ProveedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proveedor createManyAndReturn
   */
  export type ProveedorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * The data used to create many Proveedors.
     */
    data: ProveedorCreateManyInput | ProveedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proveedor update
   */
  export type ProveedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * The data needed to update a Proveedor.
     */
    data: XOR<ProveedorUpdateInput, ProveedorUncheckedUpdateInput>
    /**
     * Choose, which Proveedor to update.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor updateMany
   */
  export type ProveedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proveedors.
     */
    data: XOR<ProveedorUpdateManyMutationInput, ProveedorUncheckedUpdateManyInput>
    /**
     * Filter which Proveedors to update
     */
    where?: ProveedorWhereInput
    /**
     * Limit how many Proveedors to update.
     */
    limit?: number
  }

  /**
   * Proveedor updateManyAndReturn
   */
  export type ProveedorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * The data used to update Proveedors.
     */
    data: XOR<ProveedorUpdateManyMutationInput, ProveedorUncheckedUpdateManyInput>
    /**
     * Filter which Proveedors to update
     */
    where?: ProveedorWhereInput
    /**
     * Limit how many Proveedors to update.
     */
    limit?: number
  }

  /**
   * Proveedor upsert
   */
  export type ProveedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * The filter to search for the Proveedor to update in case it exists.
     */
    where: ProveedorWhereUniqueInput
    /**
     * In case the Proveedor found by the `where` argument doesn't exist, create a new Proveedor with this data.
     */
    create: XOR<ProveedorCreateInput, ProveedorUncheckedCreateInput>
    /**
     * In case the Proveedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProveedorUpdateInput, ProveedorUncheckedUpdateInput>
  }

  /**
   * Proveedor delete
   */
  export type ProveedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter which Proveedor to delete.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor deleteMany
   */
  export type ProveedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proveedors to delete
     */
    where?: ProveedorWhereInput
    /**
     * Limit how many Proveedors to delete.
     */
    limit?: number
  }

  /**
   * Proveedor.Compras
   */
  export type Proveedor$ComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    where?: CompraWhereInput
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    cursor?: CompraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Proveedor.PagosRealizadosCompra
   */
  export type Proveedor$PagosRealizadosCompraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosCompra
     */
    select?: PagosRealizadosCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosCompra
     */
    omit?: PagosRealizadosCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosCompraInclude<ExtArgs> | null
    where?: PagosRealizadosCompraWhereInput
    orderBy?: PagosRealizadosCompraOrderByWithRelationInput | PagosRealizadosCompraOrderByWithRelationInput[]
    cursor?: PagosRealizadosCompraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagosRealizadosCompraScalarFieldEnum | PagosRealizadosCompraScalarFieldEnum[]
  }

  /**
   * Proveedor without action
   */
  export type ProveedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    correlativo: number | null
  }

  export type ClienteSumAggregateOutputType = {
    correlativo: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    encargado: string | null
    telefono: string | null
    Departamento: string | null
    Municipio: string | null
    correlativo: number | null
    direccion: string | null
    email: string | null
    createdAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    encargado: string | null
    telefono: string | null
    Departamento: string | null
    Municipio: string | null
    correlativo: number | null
    direccion: string | null
    email: string | null
    createdAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nombre: number
    encargado: number
    telefono: number
    Departamento: number
    Municipio: number
    correlativo: number
    direccion: number
    email: number
    createdAt: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    correlativo?: true
  }

  export type ClienteSumAggregateInputType = {
    correlativo?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nombre?: true
    encargado?: true
    telefono?: true
    Departamento?: true
    Municipio?: true
    correlativo?: true
    direccion?: true
    email?: true
    createdAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nombre?: true
    encargado?: true
    telefono?: true
    Departamento?: true
    Municipio?: true
    correlativo?: true
    direccion?: true
    email?: true
    createdAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nombre?: true
    encargado?: true
    telefono?: true
    Departamento?: true
    Municipio?: true
    correlativo?: true
    direccion?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: string
    nombre: string
    encargado: string
    telefono: string
    Departamento: string
    Municipio: string
    correlativo: number
    direccion: string
    email: string
    createdAt: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    encargado?: boolean
    telefono?: boolean
    Departamento?: boolean
    Municipio?: boolean
    correlativo?: boolean
    direccion?: boolean
    email?: boolean
    createdAt?: boolean
    ventas?: boolean | Cliente$ventasArgs<ExtArgs>
    PagosRealizadosVenta?: boolean | Cliente$PagosRealizadosVentaArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    encargado?: boolean
    telefono?: boolean
    Departamento?: boolean
    Municipio?: boolean
    correlativo?: boolean
    direccion?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    encargado?: boolean
    telefono?: boolean
    Departamento?: boolean
    Municipio?: boolean
    correlativo?: boolean
    direccion?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nombre?: boolean
    encargado?: boolean
    telefono?: boolean
    Departamento?: boolean
    Municipio?: boolean
    correlativo?: boolean
    direccion?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "encargado" | "telefono" | "Departamento" | "Municipio" | "correlativo" | "direccion" | "email" | "createdAt", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | Cliente$ventasArgs<ExtArgs>
    PagosRealizadosVenta?: boolean | Cliente$PagosRealizadosVentaArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      ventas: Prisma.$VentaPayload<ExtArgs>[]
      PagosRealizadosVenta: Prisma.$PagosRealizadosVentasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      encargado: string
      telefono: string
      Departamento: string
      Municipio: string
      correlativo: number
      direccion: string
      email: string
      createdAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ventas<T extends Cliente$ventasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PagosRealizadosVenta<T extends Cliente$PagosRealizadosVentaArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$PagosRealizadosVentaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagosRealizadosVentasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'String'>
    readonly nombre: FieldRef<"Cliente", 'String'>
    readonly encargado: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly Departamento: FieldRef<"Cliente", 'String'>
    readonly Municipio: FieldRef<"Cliente", 'String'>
    readonly correlativo: FieldRef<"Cliente", 'Int'>
    readonly direccion: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.ventas
   */
  export type Cliente$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    cursor?: VentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Cliente.PagosRealizadosVenta
   */
  export type Cliente$PagosRealizadosVentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosVentas
     */
    select?: PagosRealizadosVentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosVentas
     */
    omit?: PagosRealizadosVentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosVentasInclude<ExtArgs> | null
    where?: PagosRealizadosVentasWhereInput
    orderBy?: PagosRealizadosVentasOrderByWithRelationInput | PagosRealizadosVentasOrderByWithRelationInput[]
    cursor?: PagosRealizadosVentasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagosRealizadosVentasScalarFieldEnum | PagosRealizadosVentasScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Casas
   */

  export type AggregateCasas = {
    _count: CasasCountAggregateOutputType | null
    _min: CasasMinAggregateOutputType | null
    _max: CasasMaxAggregateOutputType | null
  }

  export type CasasMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    productoId: string | null
  }

  export type CasasMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    productoId: string | null
  }

  export type CasasCountAggregateOutputType = {
    id: number
    nombre: number
    productoId: number
    _all: number
  }


  export type CasasMinAggregateInputType = {
    id?: true
    nombre?: true
    productoId?: true
  }

  export type CasasMaxAggregateInputType = {
    id?: true
    nombre?: true
    productoId?: true
  }

  export type CasasCountAggregateInputType = {
    id?: true
    nombre?: true
    productoId?: true
    _all?: true
  }

  export type CasasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Casas to aggregate.
     */
    where?: CasasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casas to fetch.
     */
    orderBy?: CasasOrderByWithRelationInput | CasasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CasasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Casas
    **/
    _count?: true | CasasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CasasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CasasMaxAggregateInputType
  }

  export type GetCasasAggregateType<T extends CasasAggregateArgs> = {
        [P in keyof T & keyof AggregateCasas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCasas[P]>
      : GetScalarType<T[P], AggregateCasas[P]>
  }




  export type CasasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasasWhereInput
    orderBy?: CasasOrderByWithAggregationInput | CasasOrderByWithAggregationInput[]
    by: CasasScalarFieldEnum[] | CasasScalarFieldEnum
    having?: CasasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CasasCountAggregateInputType | true
    _min?: CasasMinAggregateInputType
    _max?: CasasMaxAggregateInputType
  }

  export type CasasGroupByOutputType = {
    id: string
    nombre: string
    productoId: string | null
    _count: CasasCountAggregateOutputType | null
    _min: CasasMinAggregateOutputType | null
    _max: CasasMaxAggregateOutputType | null
  }

  type GetCasasGroupByPayload<T extends CasasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CasasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CasasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CasasGroupByOutputType[P]>
            : GetScalarType<T[P], CasasGroupByOutputType[P]>
        }
      >
    >


  export type CasasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    productoId?: boolean
    producto?: boolean | Casas$productoArgs<ExtArgs>
  }, ExtArgs["result"]["casas"]>

  export type CasasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    productoId?: boolean
    producto?: boolean | Casas$productoArgs<ExtArgs>
  }, ExtArgs["result"]["casas"]>

  export type CasasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    productoId?: boolean
    producto?: boolean | Casas$productoArgs<ExtArgs>
  }, ExtArgs["result"]["casas"]>

  export type CasasSelectScalar = {
    id?: boolean
    nombre?: boolean
    productoId?: boolean
  }

  export type CasasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "productoId", ExtArgs["result"]["casas"]>
  export type CasasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | Casas$productoArgs<ExtArgs>
  }
  export type CasasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | Casas$productoArgs<ExtArgs>
  }
  export type CasasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | Casas$productoArgs<ExtArgs>
  }

  export type $CasasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Casas"
    objects: {
      producto: Prisma.$ProductoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      productoId: string | null
    }, ExtArgs["result"]["casas"]>
    composites: {}
  }

  type CasasGetPayload<S extends boolean | null | undefined | CasasDefaultArgs> = $Result.GetResult<Prisma.$CasasPayload, S>

  type CasasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CasasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CasasCountAggregateInputType | true
    }

  export interface CasasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Casas'], meta: { name: 'Casas' } }
    /**
     * Find zero or one Casas that matches the filter.
     * @param {CasasFindUniqueArgs} args - Arguments to find a Casas
     * @example
     * // Get one Casas
     * const casas = await prisma.casas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CasasFindUniqueArgs>(args: SelectSubset<T, CasasFindUniqueArgs<ExtArgs>>): Prisma__CasasClient<$Result.GetResult<Prisma.$CasasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Casas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CasasFindUniqueOrThrowArgs} args - Arguments to find a Casas
     * @example
     * // Get one Casas
     * const casas = await prisma.casas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CasasFindUniqueOrThrowArgs>(args: SelectSubset<T, CasasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CasasClient<$Result.GetResult<Prisma.$CasasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Casas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasasFindFirstArgs} args - Arguments to find a Casas
     * @example
     * // Get one Casas
     * const casas = await prisma.casas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CasasFindFirstArgs>(args?: SelectSubset<T, CasasFindFirstArgs<ExtArgs>>): Prisma__CasasClient<$Result.GetResult<Prisma.$CasasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Casas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasasFindFirstOrThrowArgs} args - Arguments to find a Casas
     * @example
     * // Get one Casas
     * const casas = await prisma.casas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CasasFindFirstOrThrowArgs>(args?: SelectSubset<T, CasasFindFirstOrThrowArgs<ExtArgs>>): Prisma__CasasClient<$Result.GetResult<Prisma.$CasasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Casas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Casas
     * const casas = await prisma.casas.findMany()
     * 
     * // Get first 10 Casas
     * const casas = await prisma.casas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const casasWithIdOnly = await prisma.casas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CasasFindManyArgs>(args?: SelectSubset<T, CasasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Casas.
     * @param {CasasCreateArgs} args - Arguments to create a Casas.
     * @example
     * // Create one Casas
     * const Casas = await prisma.casas.create({
     *   data: {
     *     // ... data to create a Casas
     *   }
     * })
     * 
     */
    create<T extends CasasCreateArgs>(args: SelectSubset<T, CasasCreateArgs<ExtArgs>>): Prisma__CasasClient<$Result.GetResult<Prisma.$CasasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Casas.
     * @param {CasasCreateManyArgs} args - Arguments to create many Casas.
     * @example
     * // Create many Casas
     * const casas = await prisma.casas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CasasCreateManyArgs>(args?: SelectSubset<T, CasasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Casas and returns the data saved in the database.
     * @param {CasasCreateManyAndReturnArgs} args - Arguments to create many Casas.
     * @example
     * // Create many Casas
     * const casas = await prisma.casas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Casas and only return the `id`
     * const casasWithIdOnly = await prisma.casas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CasasCreateManyAndReturnArgs>(args?: SelectSubset<T, CasasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Casas.
     * @param {CasasDeleteArgs} args - Arguments to delete one Casas.
     * @example
     * // Delete one Casas
     * const Casas = await prisma.casas.delete({
     *   where: {
     *     // ... filter to delete one Casas
     *   }
     * })
     * 
     */
    delete<T extends CasasDeleteArgs>(args: SelectSubset<T, CasasDeleteArgs<ExtArgs>>): Prisma__CasasClient<$Result.GetResult<Prisma.$CasasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Casas.
     * @param {CasasUpdateArgs} args - Arguments to update one Casas.
     * @example
     * // Update one Casas
     * const casas = await prisma.casas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CasasUpdateArgs>(args: SelectSubset<T, CasasUpdateArgs<ExtArgs>>): Prisma__CasasClient<$Result.GetResult<Prisma.$CasasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Casas.
     * @param {CasasDeleteManyArgs} args - Arguments to filter Casas to delete.
     * @example
     * // Delete a few Casas
     * const { count } = await prisma.casas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CasasDeleteManyArgs>(args?: SelectSubset<T, CasasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Casas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Casas
     * const casas = await prisma.casas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CasasUpdateManyArgs>(args: SelectSubset<T, CasasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Casas and returns the data updated in the database.
     * @param {CasasUpdateManyAndReturnArgs} args - Arguments to update many Casas.
     * @example
     * // Update many Casas
     * const casas = await prisma.casas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Casas and only return the `id`
     * const casasWithIdOnly = await prisma.casas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CasasUpdateManyAndReturnArgs>(args: SelectSubset<T, CasasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Casas.
     * @param {CasasUpsertArgs} args - Arguments to update or create a Casas.
     * @example
     * // Update or create a Casas
     * const casas = await prisma.casas.upsert({
     *   create: {
     *     // ... data to create a Casas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Casas we want to update
     *   }
     * })
     */
    upsert<T extends CasasUpsertArgs>(args: SelectSubset<T, CasasUpsertArgs<ExtArgs>>): Prisma__CasasClient<$Result.GetResult<Prisma.$CasasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Casas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasasCountArgs} args - Arguments to filter Casas to count.
     * @example
     * // Count the number of Casas
     * const count = await prisma.casas.count({
     *   where: {
     *     // ... the filter for the Casas we want to count
     *   }
     * })
    **/
    count<T extends CasasCountArgs>(
      args?: Subset<T, CasasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CasasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Casas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CasasAggregateArgs>(args: Subset<T, CasasAggregateArgs>): Prisma.PrismaPromise<GetCasasAggregateType<T>>

    /**
     * Group by Casas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CasasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CasasGroupByArgs['orderBy'] }
        : { orderBy?: CasasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CasasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCasasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Casas model
   */
  readonly fields: CasasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Casas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CasasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends Casas$productoArgs<ExtArgs> = {}>(args?: Subset<T, Casas$productoArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Casas model
   */
  interface CasasFieldRefs {
    readonly id: FieldRef<"Casas", 'String'>
    readonly nombre: FieldRef<"Casas", 'String'>
    readonly productoId: FieldRef<"Casas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Casas findUnique
   */
  export type CasasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casas
     */
    select?: CasasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casas
     */
    omit?: CasasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasasInclude<ExtArgs> | null
    /**
     * Filter, which Casas to fetch.
     */
    where: CasasWhereUniqueInput
  }

  /**
   * Casas findUniqueOrThrow
   */
  export type CasasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casas
     */
    select?: CasasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casas
     */
    omit?: CasasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasasInclude<ExtArgs> | null
    /**
     * Filter, which Casas to fetch.
     */
    where: CasasWhereUniqueInput
  }

  /**
   * Casas findFirst
   */
  export type CasasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casas
     */
    select?: CasasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casas
     */
    omit?: CasasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasasInclude<ExtArgs> | null
    /**
     * Filter, which Casas to fetch.
     */
    where?: CasasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casas to fetch.
     */
    orderBy?: CasasOrderByWithRelationInput | CasasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Casas.
     */
    cursor?: CasasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Casas.
     */
    distinct?: CasasScalarFieldEnum | CasasScalarFieldEnum[]
  }

  /**
   * Casas findFirstOrThrow
   */
  export type CasasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casas
     */
    select?: CasasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casas
     */
    omit?: CasasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasasInclude<ExtArgs> | null
    /**
     * Filter, which Casas to fetch.
     */
    where?: CasasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casas to fetch.
     */
    orderBy?: CasasOrderByWithRelationInput | CasasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Casas.
     */
    cursor?: CasasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Casas.
     */
    distinct?: CasasScalarFieldEnum | CasasScalarFieldEnum[]
  }

  /**
   * Casas findMany
   */
  export type CasasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casas
     */
    select?: CasasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casas
     */
    omit?: CasasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasasInclude<ExtArgs> | null
    /**
     * Filter, which Casas to fetch.
     */
    where?: CasasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casas to fetch.
     */
    orderBy?: CasasOrderByWithRelationInput | CasasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Casas.
     */
    cursor?: CasasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casas.
     */
    skip?: number
    distinct?: CasasScalarFieldEnum | CasasScalarFieldEnum[]
  }

  /**
   * Casas create
   */
  export type CasasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casas
     */
    select?: CasasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casas
     */
    omit?: CasasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasasInclude<ExtArgs> | null
    /**
     * The data needed to create a Casas.
     */
    data: XOR<CasasCreateInput, CasasUncheckedCreateInput>
  }

  /**
   * Casas createMany
   */
  export type CasasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Casas.
     */
    data: CasasCreateManyInput | CasasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Casas createManyAndReturn
   */
  export type CasasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casas
     */
    select?: CasasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Casas
     */
    omit?: CasasOmit<ExtArgs> | null
    /**
     * The data used to create many Casas.
     */
    data: CasasCreateManyInput | CasasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Casas update
   */
  export type CasasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casas
     */
    select?: CasasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casas
     */
    omit?: CasasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasasInclude<ExtArgs> | null
    /**
     * The data needed to update a Casas.
     */
    data: XOR<CasasUpdateInput, CasasUncheckedUpdateInput>
    /**
     * Choose, which Casas to update.
     */
    where: CasasWhereUniqueInput
  }

  /**
   * Casas updateMany
   */
  export type CasasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Casas.
     */
    data: XOR<CasasUpdateManyMutationInput, CasasUncheckedUpdateManyInput>
    /**
     * Filter which Casas to update
     */
    where?: CasasWhereInput
    /**
     * Limit how many Casas to update.
     */
    limit?: number
  }

  /**
   * Casas updateManyAndReturn
   */
  export type CasasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casas
     */
    select?: CasasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Casas
     */
    omit?: CasasOmit<ExtArgs> | null
    /**
     * The data used to update Casas.
     */
    data: XOR<CasasUpdateManyMutationInput, CasasUncheckedUpdateManyInput>
    /**
     * Filter which Casas to update
     */
    where?: CasasWhereInput
    /**
     * Limit how many Casas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Casas upsert
   */
  export type CasasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casas
     */
    select?: CasasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casas
     */
    omit?: CasasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasasInclude<ExtArgs> | null
    /**
     * The filter to search for the Casas to update in case it exists.
     */
    where: CasasWhereUniqueInput
    /**
     * In case the Casas found by the `where` argument doesn't exist, create a new Casas with this data.
     */
    create: XOR<CasasCreateInput, CasasUncheckedCreateInput>
    /**
     * In case the Casas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CasasUpdateInput, CasasUncheckedUpdateInput>
  }

  /**
   * Casas delete
   */
  export type CasasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casas
     */
    select?: CasasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casas
     */
    omit?: CasasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasasInclude<ExtArgs> | null
    /**
     * Filter which Casas to delete.
     */
    where: CasasWhereUniqueInput
  }

  /**
   * Casas deleteMany
   */
  export type CasasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Casas to delete
     */
    where?: CasasWhereInput
    /**
     * Limit how many Casas to delete.
     */
    limit?: number
  }

  /**
   * Casas.producto
   */
  export type Casas$productoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    where?: ProductoWhereInput
  }

  /**
   * Casas without action
   */
  export type CasasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casas
     */
    select?: CasasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casas
     */
    omit?: CasasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasasInclude<ExtArgs> | null
  }


  /**
   * Model CodigoDeBarras
   */

  export type AggregateCodigoDeBarras = {
    _count: CodigoDeBarrasCountAggregateOutputType | null
    _min: CodigoDeBarrasMinAggregateOutputType | null
    _max: CodigoDeBarrasMaxAggregateOutputType | null
  }

  export type CodigoDeBarrasMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    codigoBarras: string | null
    productoId: string | null
  }

  export type CodigoDeBarrasMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    codigoBarras: string | null
    productoId: string | null
  }

  export type CodigoDeBarrasCountAggregateOutputType = {
    id: number
    nombre: number
    codigoBarras: number
    productoId: number
    _all: number
  }


  export type CodigoDeBarrasMinAggregateInputType = {
    id?: true
    nombre?: true
    codigoBarras?: true
    productoId?: true
  }

  export type CodigoDeBarrasMaxAggregateInputType = {
    id?: true
    nombre?: true
    codigoBarras?: true
    productoId?: true
  }

  export type CodigoDeBarrasCountAggregateInputType = {
    id?: true
    nombre?: true
    codigoBarras?: true
    productoId?: true
    _all?: true
  }

  export type CodigoDeBarrasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodigoDeBarras to aggregate.
     */
    where?: CodigoDeBarrasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodigoDeBarras to fetch.
     */
    orderBy?: CodigoDeBarrasOrderByWithRelationInput | CodigoDeBarrasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodigoDeBarrasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodigoDeBarras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodigoDeBarras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CodigoDeBarras
    **/
    _count?: true | CodigoDeBarrasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodigoDeBarrasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodigoDeBarrasMaxAggregateInputType
  }

  export type GetCodigoDeBarrasAggregateType<T extends CodigoDeBarrasAggregateArgs> = {
        [P in keyof T & keyof AggregateCodigoDeBarras]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodigoDeBarras[P]>
      : GetScalarType<T[P], AggregateCodigoDeBarras[P]>
  }




  export type CodigoDeBarrasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodigoDeBarrasWhereInput
    orderBy?: CodigoDeBarrasOrderByWithAggregationInput | CodigoDeBarrasOrderByWithAggregationInput[]
    by: CodigoDeBarrasScalarFieldEnum[] | CodigoDeBarrasScalarFieldEnum
    having?: CodigoDeBarrasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodigoDeBarrasCountAggregateInputType | true
    _min?: CodigoDeBarrasMinAggregateInputType
    _max?: CodigoDeBarrasMaxAggregateInputType
  }

  export type CodigoDeBarrasGroupByOutputType = {
    id: string
    nombre: string
    codigoBarras: string | null
    productoId: string
    _count: CodigoDeBarrasCountAggregateOutputType | null
    _min: CodigoDeBarrasMinAggregateOutputType | null
    _max: CodigoDeBarrasMaxAggregateOutputType | null
  }

  type GetCodigoDeBarrasGroupByPayload<T extends CodigoDeBarrasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodigoDeBarrasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodigoDeBarrasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodigoDeBarrasGroupByOutputType[P]>
            : GetScalarType<T[P], CodigoDeBarrasGroupByOutputType[P]>
        }
      >
    >


  export type CodigoDeBarrasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigoBarras?: boolean
    productoId?: boolean
    Lotes?: boolean | CodigoDeBarras$LotesArgs<ExtArgs>
    _count?: boolean | CodigoDeBarrasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codigoDeBarras"]>

  export type CodigoDeBarrasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigoBarras?: boolean
    productoId?: boolean
  }, ExtArgs["result"]["codigoDeBarras"]>

  export type CodigoDeBarrasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigoBarras?: boolean
    productoId?: boolean
  }, ExtArgs["result"]["codigoDeBarras"]>

  export type CodigoDeBarrasSelectScalar = {
    id?: boolean
    nombre?: boolean
    codigoBarras?: boolean
    productoId?: boolean
  }

  export type CodigoDeBarrasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "codigoBarras" | "productoId", ExtArgs["result"]["codigoDeBarras"]>
  export type CodigoDeBarrasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Lotes?: boolean | CodigoDeBarras$LotesArgs<ExtArgs>
    _count?: boolean | CodigoDeBarrasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CodigoDeBarrasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CodigoDeBarrasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CodigoDeBarrasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CodigoDeBarras"
    objects: {
      Lotes: Prisma.$LotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      codigoBarras: string | null
      productoId: string
    }, ExtArgs["result"]["codigoDeBarras"]>
    composites: {}
  }

  type CodigoDeBarrasGetPayload<S extends boolean | null | undefined | CodigoDeBarrasDefaultArgs> = $Result.GetResult<Prisma.$CodigoDeBarrasPayload, S>

  type CodigoDeBarrasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodigoDeBarrasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodigoDeBarrasCountAggregateInputType | true
    }

  export interface CodigoDeBarrasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CodigoDeBarras'], meta: { name: 'CodigoDeBarras' } }
    /**
     * Find zero or one CodigoDeBarras that matches the filter.
     * @param {CodigoDeBarrasFindUniqueArgs} args - Arguments to find a CodigoDeBarras
     * @example
     * // Get one CodigoDeBarras
     * const codigoDeBarras = await prisma.codigoDeBarras.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodigoDeBarrasFindUniqueArgs>(args: SelectSubset<T, CodigoDeBarrasFindUniqueArgs<ExtArgs>>): Prisma__CodigoDeBarrasClient<$Result.GetResult<Prisma.$CodigoDeBarrasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CodigoDeBarras that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodigoDeBarrasFindUniqueOrThrowArgs} args - Arguments to find a CodigoDeBarras
     * @example
     * // Get one CodigoDeBarras
     * const codigoDeBarras = await prisma.codigoDeBarras.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodigoDeBarrasFindUniqueOrThrowArgs>(args: SelectSubset<T, CodigoDeBarrasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodigoDeBarrasClient<$Result.GetResult<Prisma.$CodigoDeBarrasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodigoDeBarras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodigoDeBarrasFindFirstArgs} args - Arguments to find a CodigoDeBarras
     * @example
     * // Get one CodigoDeBarras
     * const codigoDeBarras = await prisma.codigoDeBarras.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodigoDeBarrasFindFirstArgs>(args?: SelectSubset<T, CodigoDeBarrasFindFirstArgs<ExtArgs>>): Prisma__CodigoDeBarrasClient<$Result.GetResult<Prisma.$CodigoDeBarrasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodigoDeBarras that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodigoDeBarrasFindFirstOrThrowArgs} args - Arguments to find a CodigoDeBarras
     * @example
     * // Get one CodigoDeBarras
     * const codigoDeBarras = await prisma.codigoDeBarras.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodigoDeBarrasFindFirstOrThrowArgs>(args?: SelectSubset<T, CodigoDeBarrasFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodigoDeBarrasClient<$Result.GetResult<Prisma.$CodigoDeBarrasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CodigoDeBarras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodigoDeBarrasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CodigoDeBarras
     * const codigoDeBarras = await prisma.codigoDeBarras.findMany()
     * 
     * // Get first 10 CodigoDeBarras
     * const codigoDeBarras = await prisma.codigoDeBarras.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codigoDeBarrasWithIdOnly = await prisma.codigoDeBarras.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodigoDeBarrasFindManyArgs>(args?: SelectSubset<T, CodigoDeBarrasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodigoDeBarrasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CodigoDeBarras.
     * @param {CodigoDeBarrasCreateArgs} args - Arguments to create a CodigoDeBarras.
     * @example
     * // Create one CodigoDeBarras
     * const CodigoDeBarras = await prisma.codigoDeBarras.create({
     *   data: {
     *     // ... data to create a CodigoDeBarras
     *   }
     * })
     * 
     */
    create<T extends CodigoDeBarrasCreateArgs>(args: SelectSubset<T, CodigoDeBarrasCreateArgs<ExtArgs>>): Prisma__CodigoDeBarrasClient<$Result.GetResult<Prisma.$CodigoDeBarrasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CodigoDeBarras.
     * @param {CodigoDeBarrasCreateManyArgs} args - Arguments to create many CodigoDeBarras.
     * @example
     * // Create many CodigoDeBarras
     * const codigoDeBarras = await prisma.codigoDeBarras.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodigoDeBarrasCreateManyArgs>(args?: SelectSubset<T, CodigoDeBarrasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CodigoDeBarras and returns the data saved in the database.
     * @param {CodigoDeBarrasCreateManyAndReturnArgs} args - Arguments to create many CodigoDeBarras.
     * @example
     * // Create many CodigoDeBarras
     * const codigoDeBarras = await prisma.codigoDeBarras.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CodigoDeBarras and only return the `id`
     * const codigoDeBarrasWithIdOnly = await prisma.codigoDeBarras.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodigoDeBarrasCreateManyAndReturnArgs>(args?: SelectSubset<T, CodigoDeBarrasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodigoDeBarrasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CodigoDeBarras.
     * @param {CodigoDeBarrasDeleteArgs} args - Arguments to delete one CodigoDeBarras.
     * @example
     * // Delete one CodigoDeBarras
     * const CodigoDeBarras = await prisma.codigoDeBarras.delete({
     *   where: {
     *     // ... filter to delete one CodigoDeBarras
     *   }
     * })
     * 
     */
    delete<T extends CodigoDeBarrasDeleteArgs>(args: SelectSubset<T, CodigoDeBarrasDeleteArgs<ExtArgs>>): Prisma__CodigoDeBarrasClient<$Result.GetResult<Prisma.$CodigoDeBarrasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CodigoDeBarras.
     * @param {CodigoDeBarrasUpdateArgs} args - Arguments to update one CodigoDeBarras.
     * @example
     * // Update one CodigoDeBarras
     * const codigoDeBarras = await prisma.codigoDeBarras.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodigoDeBarrasUpdateArgs>(args: SelectSubset<T, CodigoDeBarrasUpdateArgs<ExtArgs>>): Prisma__CodigoDeBarrasClient<$Result.GetResult<Prisma.$CodigoDeBarrasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CodigoDeBarras.
     * @param {CodigoDeBarrasDeleteManyArgs} args - Arguments to filter CodigoDeBarras to delete.
     * @example
     * // Delete a few CodigoDeBarras
     * const { count } = await prisma.codigoDeBarras.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodigoDeBarrasDeleteManyArgs>(args?: SelectSubset<T, CodigoDeBarrasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodigoDeBarras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodigoDeBarrasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CodigoDeBarras
     * const codigoDeBarras = await prisma.codigoDeBarras.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodigoDeBarrasUpdateManyArgs>(args: SelectSubset<T, CodigoDeBarrasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodigoDeBarras and returns the data updated in the database.
     * @param {CodigoDeBarrasUpdateManyAndReturnArgs} args - Arguments to update many CodigoDeBarras.
     * @example
     * // Update many CodigoDeBarras
     * const codigoDeBarras = await prisma.codigoDeBarras.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CodigoDeBarras and only return the `id`
     * const codigoDeBarrasWithIdOnly = await prisma.codigoDeBarras.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CodigoDeBarrasUpdateManyAndReturnArgs>(args: SelectSubset<T, CodigoDeBarrasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodigoDeBarrasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CodigoDeBarras.
     * @param {CodigoDeBarrasUpsertArgs} args - Arguments to update or create a CodigoDeBarras.
     * @example
     * // Update or create a CodigoDeBarras
     * const codigoDeBarras = await prisma.codigoDeBarras.upsert({
     *   create: {
     *     // ... data to create a CodigoDeBarras
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CodigoDeBarras we want to update
     *   }
     * })
     */
    upsert<T extends CodigoDeBarrasUpsertArgs>(args: SelectSubset<T, CodigoDeBarrasUpsertArgs<ExtArgs>>): Prisma__CodigoDeBarrasClient<$Result.GetResult<Prisma.$CodigoDeBarrasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CodigoDeBarras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodigoDeBarrasCountArgs} args - Arguments to filter CodigoDeBarras to count.
     * @example
     * // Count the number of CodigoDeBarras
     * const count = await prisma.codigoDeBarras.count({
     *   where: {
     *     // ... the filter for the CodigoDeBarras we want to count
     *   }
     * })
    **/
    count<T extends CodigoDeBarrasCountArgs>(
      args?: Subset<T, CodigoDeBarrasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodigoDeBarrasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CodigoDeBarras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodigoDeBarrasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CodigoDeBarrasAggregateArgs>(args: Subset<T, CodigoDeBarrasAggregateArgs>): Prisma.PrismaPromise<GetCodigoDeBarrasAggregateType<T>>

    /**
     * Group by CodigoDeBarras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodigoDeBarrasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CodigoDeBarrasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodigoDeBarrasGroupByArgs['orderBy'] }
        : { orderBy?: CodigoDeBarrasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CodigoDeBarrasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodigoDeBarrasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CodigoDeBarras model
   */
  readonly fields: CodigoDeBarrasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CodigoDeBarras.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodigoDeBarrasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Lotes<T extends CodigoDeBarras$LotesArgs<ExtArgs> = {}>(args?: Subset<T, CodigoDeBarras$LotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CodigoDeBarras model
   */
  interface CodigoDeBarrasFieldRefs {
    readonly id: FieldRef<"CodigoDeBarras", 'String'>
    readonly nombre: FieldRef<"CodigoDeBarras", 'String'>
    readonly codigoBarras: FieldRef<"CodigoDeBarras", 'String'>
    readonly productoId: FieldRef<"CodigoDeBarras", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CodigoDeBarras findUnique
   */
  export type CodigoDeBarrasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoDeBarras
     */
    select?: CodigoDeBarrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoDeBarras
     */
    omit?: CodigoDeBarrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoDeBarrasInclude<ExtArgs> | null
    /**
     * Filter, which CodigoDeBarras to fetch.
     */
    where: CodigoDeBarrasWhereUniqueInput
  }

  /**
   * CodigoDeBarras findUniqueOrThrow
   */
  export type CodigoDeBarrasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoDeBarras
     */
    select?: CodigoDeBarrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoDeBarras
     */
    omit?: CodigoDeBarrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoDeBarrasInclude<ExtArgs> | null
    /**
     * Filter, which CodigoDeBarras to fetch.
     */
    where: CodigoDeBarrasWhereUniqueInput
  }

  /**
   * CodigoDeBarras findFirst
   */
  export type CodigoDeBarrasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoDeBarras
     */
    select?: CodigoDeBarrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoDeBarras
     */
    omit?: CodigoDeBarrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoDeBarrasInclude<ExtArgs> | null
    /**
     * Filter, which CodigoDeBarras to fetch.
     */
    where?: CodigoDeBarrasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodigoDeBarras to fetch.
     */
    orderBy?: CodigoDeBarrasOrderByWithRelationInput | CodigoDeBarrasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodigoDeBarras.
     */
    cursor?: CodigoDeBarrasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodigoDeBarras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodigoDeBarras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodigoDeBarras.
     */
    distinct?: CodigoDeBarrasScalarFieldEnum | CodigoDeBarrasScalarFieldEnum[]
  }

  /**
   * CodigoDeBarras findFirstOrThrow
   */
  export type CodigoDeBarrasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoDeBarras
     */
    select?: CodigoDeBarrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoDeBarras
     */
    omit?: CodigoDeBarrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoDeBarrasInclude<ExtArgs> | null
    /**
     * Filter, which CodigoDeBarras to fetch.
     */
    where?: CodigoDeBarrasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodigoDeBarras to fetch.
     */
    orderBy?: CodigoDeBarrasOrderByWithRelationInput | CodigoDeBarrasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodigoDeBarras.
     */
    cursor?: CodigoDeBarrasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodigoDeBarras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodigoDeBarras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodigoDeBarras.
     */
    distinct?: CodigoDeBarrasScalarFieldEnum | CodigoDeBarrasScalarFieldEnum[]
  }

  /**
   * CodigoDeBarras findMany
   */
  export type CodigoDeBarrasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoDeBarras
     */
    select?: CodigoDeBarrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoDeBarras
     */
    omit?: CodigoDeBarrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoDeBarrasInclude<ExtArgs> | null
    /**
     * Filter, which CodigoDeBarras to fetch.
     */
    where?: CodigoDeBarrasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodigoDeBarras to fetch.
     */
    orderBy?: CodigoDeBarrasOrderByWithRelationInput | CodigoDeBarrasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CodigoDeBarras.
     */
    cursor?: CodigoDeBarrasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodigoDeBarras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodigoDeBarras.
     */
    skip?: number
    distinct?: CodigoDeBarrasScalarFieldEnum | CodigoDeBarrasScalarFieldEnum[]
  }

  /**
   * CodigoDeBarras create
   */
  export type CodigoDeBarrasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoDeBarras
     */
    select?: CodigoDeBarrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoDeBarras
     */
    omit?: CodigoDeBarrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoDeBarrasInclude<ExtArgs> | null
    /**
     * The data needed to create a CodigoDeBarras.
     */
    data: XOR<CodigoDeBarrasCreateInput, CodigoDeBarrasUncheckedCreateInput>
  }

  /**
   * CodigoDeBarras createMany
   */
  export type CodigoDeBarrasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CodigoDeBarras.
     */
    data: CodigoDeBarrasCreateManyInput | CodigoDeBarrasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CodigoDeBarras createManyAndReturn
   */
  export type CodigoDeBarrasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoDeBarras
     */
    select?: CodigoDeBarrasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoDeBarras
     */
    omit?: CodigoDeBarrasOmit<ExtArgs> | null
    /**
     * The data used to create many CodigoDeBarras.
     */
    data: CodigoDeBarrasCreateManyInput | CodigoDeBarrasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CodigoDeBarras update
   */
  export type CodigoDeBarrasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoDeBarras
     */
    select?: CodigoDeBarrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoDeBarras
     */
    omit?: CodigoDeBarrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoDeBarrasInclude<ExtArgs> | null
    /**
     * The data needed to update a CodigoDeBarras.
     */
    data: XOR<CodigoDeBarrasUpdateInput, CodigoDeBarrasUncheckedUpdateInput>
    /**
     * Choose, which CodigoDeBarras to update.
     */
    where: CodigoDeBarrasWhereUniqueInput
  }

  /**
   * CodigoDeBarras updateMany
   */
  export type CodigoDeBarrasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CodigoDeBarras.
     */
    data: XOR<CodigoDeBarrasUpdateManyMutationInput, CodigoDeBarrasUncheckedUpdateManyInput>
    /**
     * Filter which CodigoDeBarras to update
     */
    where?: CodigoDeBarrasWhereInput
    /**
     * Limit how many CodigoDeBarras to update.
     */
    limit?: number
  }

  /**
   * CodigoDeBarras updateManyAndReturn
   */
  export type CodigoDeBarrasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoDeBarras
     */
    select?: CodigoDeBarrasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoDeBarras
     */
    omit?: CodigoDeBarrasOmit<ExtArgs> | null
    /**
     * The data used to update CodigoDeBarras.
     */
    data: XOR<CodigoDeBarrasUpdateManyMutationInput, CodigoDeBarrasUncheckedUpdateManyInput>
    /**
     * Filter which CodigoDeBarras to update
     */
    where?: CodigoDeBarrasWhereInput
    /**
     * Limit how many CodigoDeBarras to update.
     */
    limit?: number
  }

  /**
   * CodigoDeBarras upsert
   */
  export type CodigoDeBarrasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoDeBarras
     */
    select?: CodigoDeBarrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoDeBarras
     */
    omit?: CodigoDeBarrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoDeBarrasInclude<ExtArgs> | null
    /**
     * The filter to search for the CodigoDeBarras to update in case it exists.
     */
    where: CodigoDeBarrasWhereUniqueInput
    /**
     * In case the CodigoDeBarras found by the `where` argument doesn't exist, create a new CodigoDeBarras with this data.
     */
    create: XOR<CodigoDeBarrasCreateInput, CodigoDeBarrasUncheckedCreateInput>
    /**
     * In case the CodigoDeBarras was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodigoDeBarrasUpdateInput, CodigoDeBarrasUncheckedUpdateInput>
  }

  /**
   * CodigoDeBarras delete
   */
  export type CodigoDeBarrasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoDeBarras
     */
    select?: CodigoDeBarrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoDeBarras
     */
    omit?: CodigoDeBarrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoDeBarrasInclude<ExtArgs> | null
    /**
     * Filter which CodigoDeBarras to delete.
     */
    where: CodigoDeBarrasWhereUniqueInput
  }

  /**
   * CodigoDeBarras deleteMany
   */
  export type CodigoDeBarrasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodigoDeBarras to delete
     */
    where?: CodigoDeBarrasWhereInput
    /**
     * Limit how many CodigoDeBarras to delete.
     */
    limit?: number
  }

  /**
   * CodigoDeBarras.Lotes
   */
  export type CodigoDeBarras$LotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    where?: LoteWhereInput
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    cursor?: LoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoteScalarFieldEnum | LoteScalarFieldEnum[]
  }

  /**
   * CodigoDeBarras without action
   */
  export type CodigoDeBarrasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoDeBarras
     */
    select?: CodigoDeBarrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoDeBarras
     */
    omit?: CodigoDeBarrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoDeBarrasInclude<ExtArgs> | null
  }


  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    costo: number | null
    precioVenta: number | null
    cantUnidad: number | null
    cantCaja: number | null
    cantBlister: number | null
    precioUnitario: number | null
    precioBlister: number | null
    precioCaja: number | null
    costoCompraUnitario: number | null
    costoCompraBlister: number | null
    costoCompraCaja: number | null
  }

  export type ProductoSumAggregateOutputType = {
    costo: number | null
    precioVenta: number | null
    cantUnidad: number | null
    cantCaja: number | null
    cantBlister: number | null
    precioUnitario: number | null
    precioBlister: number | null
    precioCaja: number | null
    costoCompraUnitario: number | null
    costoCompraBlister: number | null
    costoCompraCaja: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    codigoBarras: string | null
    presentacion: string | null
    generico: string | null
    gramaje: string | null
    costo: number | null
    precioVenta: number | null
    alertaStock: boolean | null
    casa: string | null
    cantUnidad: number | null
    cantCaja: number | null
    cantBlister: number | null
    precioUnitario: number | null
    precioBlister: number | null
    precioCaja: number | null
    costoCompraUnitario: number | null
    costoCompraBlister: number | null
    costoCompraCaja: number | null
    createdAt: Date | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    codigoBarras: string | null
    presentacion: string | null
    generico: string | null
    gramaje: string | null
    costo: number | null
    precioVenta: number | null
    alertaStock: boolean | null
    casa: string | null
    cantUnidad: number | null
    cantCaja: number | null
    cantBlister: number | null
    precioUnitario: number | null
    precioBlister: number | null
    precioCaja: number | null
    costoCompraUnitario: number | null
    costoCompraBlister: number | null
    costoCompraCaja: number | null
    createdAt: Date | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    codigoBarras: number
    presentacion: number
    generico: number
    gramaje: number
    costo: number
    precioVenta: number
    alertaStock: number
    casa: number
    cantUnidad: number
    cantCaja: number
    cantBlister: number
    precioUnitario: number
    precioBlister: number
    precioCaja: number
    costoCompraUnitario: number
    costoCompraBlister: number
    costoCompraCaja: number
    createdAt: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    costo?: true
    precioVenta?: true
    cantUnidad?: true
    cantCaja?: true
    cantBlister?: true
    precioUnitario?: true
    precioBlister?: true
    precioCaja?: true
    costoCompraUnitario?: true
    costoCompraBlister?: true
    costoCompraCaja?: true
  }

  export type ProductoSumAggregateInputType = {
    costo?: true
    precioVenta?: true
    cantUnidad?: true
    cantCaja?: true
    cantBlister?: true
    precioUnitario?: true
    precioBlister?: true
    precioCaja?: true
    costoCompraUnitario?: true
    costoCompraBlister?: true
    costoCompraCaja?: true
  }

  export type ProductoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    codigoBarras?: true
    presentacion?: true
    generico?: true
    gramaje?: true
    costo?: true
    precioVenta?: true
    alertaStock?: true
    casa?: true
    cantUnidad?: true
    cantCaja?: true
    cantBlister?: true
    precioUnitario?: true
    precioBlister?: true
    precioCaja?: true
    costoCompraUnitario?: true
    costoCompraBlister?: true
    costoCompraCaja?: true
    createdAt?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    codigoBarras?: true
    presentacion?: true
    generico?: true
    gramaje?: true
    costo?: true
    precioVenta?: true
    alertaStock?: true
    casa?: true
    cantUnidad?: true
    cantCaja?: true
    cantBlister?: true
    precioUnitario?: true
    precioBlister?: true
    precioCaja?: true
    costoCompraUnitario?: true
    costoCompraBlister?: true
    costoCompraCaja?: true
    createdAt?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    codigoBarras?: true
    presentacion?: true
    generico?: true
    gramaje?: true
    costo?: true
    precioVenta?: true
    alertaStock?: true
    casa?: true
    cantUnidad?: true
    cantCaja?: true
    cantBlister?: true
    precioUnitario?: true
    precioBlister?: true
    precioCaja?: true
    costoCompraUnitario?: true
    costoCompraBlister?: true
    costoCompraCaja?: true
    createdAt?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id: string
    nombre: string
    descripcion: string
    codigoBarras: string | null
    presentacion: string
    generico: string
    gramaje: string
    costo: number
    precioVenta: number
    alertaStock: boolean
    casa: string
    cantUnidad: number
    cantCaja: number
    cantBlister: number
    precioUnitario: number
    precioBlister: number
    precioCaja: number
    costoCompraUnitario: number
    costoCompraBlister: number
    costoCompraCaja: number
    createdAt: Date
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    codigoBarras?: boolean
    presentacion?: boolean
    generico?: boolean
    gramaje?: boolean
    costo?: boolean
    precioVenta?: boolean
    alertaStock?: boolean
    casa?: boolean
    cantUnidad?: boolean
    cantCaja?: boolean
    cantBlister?: boolean
    precioUnitario?: boolean
    precioBlister?: boolean
    precioCaja?: boolean
    costoCompraUnitario?: boolean
    costoCompraBlister?: boolean
    costoCompraCaja?: boolean
    createdAt?: boolean
    Casas?: boolean | Producto$CasasArgs<ExtArgs>
    lotes?: boolean | Producto$lotesArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    codigoBarras?: boolean
    presentacion?: boolean
    generico?: boolean
    gramaje?: boolean
    costo?: boolean
    precioVenta?: boolean
    alertaStock?: boolean
    casa?: boolean
    cantUnidad?: boolean
    cantCaja?: boolean
    cantBlister?: boolean
    precioUnitario?: boolean
    precioBlister?: boolean
    precioCaja?: boolean
    costoCompraUnitario?: boolean
    costoCompraBlister?: boolean
    costoCompraCaja?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    codigoBarras?: boolean
    presentacion?: boolean
    generico?: boolean
    gramaje?: boolean
    costo?: boolean
    precioVenta?: boolean
    alertaStock?: boolean
    casa?: boolean
    cantUnidad?: boolean
    cantCaja?: boolean
    cantBlister?: boolean
    precioUnitario?: boolean
    precioBlister?: boolean
    precioCaja?: boolean
    costoCompraUnitario?: boolean
    costoCompraBlister?: boolean
    costoCompraCaja?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    codigoBarras?: boolean
    presentacion?: boolean
    generico?: boolean
    gramaje?: boolean
    costo?: boolean
    precioVenta?: boolean
    alertaStock?: boolean
    casa?: boolean
    cantUnidad?: boolean
    cantCaja?: boolean
    cantBlister?: boolean
    precioUnitario?: boolean
    precioBlister?: boolean
    precioCaja?: boolean
    costoCompraUnitario?: boolean
    costoCompraBlister?: boolean
    costoCompraCaja?: boolean
    createdAt?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "codigoBarras" | "presentacion" | "generico" | "gramaje" | "costo" | "precioVenta" | "alertaStock" | "casa" | "cantUnidad" | "cantCaja" | "cantBlister" | "precioUnitario" | "precioBlister" | "precioCaja" | "costoCompraUnitario" | "costoCompraBlister" | "costoCompraCaja" | "createdAt", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Casas?: boolean | Producto$CasasArgs<ExtArgs>
    lotes?: boolean | Producto$lotesArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      Casas: Prisma.$CasasPayload<ExtArgs>[]
      lotes: Prisma.$LotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      descripcion: string
      codigoBarras: string | null
      presentacion: string
      generico: string
      gramaje: string
      costo: number
      precioVenta: number
      alertaStock: boolean
      casa: string
      cantUnidad: number
      cantCaja: number
      cantBlister: number
      precioUnitario: number
      precioBlister: number
      precioCaja: number
      costoCompraUnitario: number
      costoCompraBlister: number
      costoCompraCaja: number
      createdAt: Date
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {ProductoCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {ProductoUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Casas<T extends Producto$CasasArgs<ExtArgs> = {}>(args?: Subset<T, Producto$CasasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lotes<T extends Producto$lotesArgs<ExtArgs> = {}>(args?: Subset<T, Producto$lotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly id: FieldRef<"Producto", 'String'>
    readonly nombre: FieldRef<"Producto", 'String'>
    readonly descripcion: FieldRef<"Producto", 'String'>
    readonly codigoBarras: FieldRef<"Producto", 'String'>
    readonly presentacion: FieldRef<"Producto", 'String'>
    readonly generico: FieldRef<"Producto", 'String'>
    readonly gramaje: FieldRef<"Producto", 'String'>
    readonly costo: FieldRef<"Producto", 'Float'>
    readonly precioVenta: FieldRef<"Producto", 'Float'>
    readonly alertaStock: FieldRef<"Producto", 'Boolean'>
    readonly casa: FieldRef<"Producto", 'String'>
    readonly cantUnidad: FieldRef<"Producto", 'Int'>
    readonly cantCaja: FieldRef<"Producto", 'Int'>
    readonly cantBlister: FieldRef<"Producto", 'Int'>
    readonly precioUnitario: FieldRef<"Producto", 'Float'>
    readonly precioBlister: FieldRef<"Producto", 'Float'>
    readonly precioCaja: FieldRef<"Producto", 'Float'>
    readonly costoCompraUnitario: FieldRef<"Producto", 'Float'>
    readonly costoCompraBlister: FieldRef<"Producto", 'Float'>
    readonly costoCompraCaja: FieldRef<"Producto", 'Float'>
    readonly createdAt: FieldRef<"Producto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto createManyAndReturn
   */
  export type ProductoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto updateManyAndReturn
   */
  export type ProductoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.Casas
   */
  export type Producto$CasasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casas
     */
    select?: CasasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casas
     */
    omit?: CasasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasasInclude<ExtArgs> | null
    where?: CasasWhereInput
    orderBy?: CasasOrderByWithRelationInput | CasasOrderByWithRelationInput[]
    cursor?: CasasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasasScalarFieldEnum | CasasScalarFieldEnum[]
  }

  /**
   * Producto.lotes
   */
  export type Producto$lotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    where?: LoteWhereInput
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    cursor?: LoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoteScalarFieldEnum | LoteScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model Lote
   */

  export type AggregateLote = {
    _count: LoteCountAggregateOutputType | null
    _avg: LoteAvgAggregateOutputType | null
    _sum: LoteSumAggregateOutputType | null
    _min: LoteMinAggregateOutputType | null
    _max: LoteMaxAggregateOutputType | null
  }

  export type LoteAvgAggregateOutputType = {
    stockTotal: number | null
    stockPorCaja: number | null
    stockPorBlister: number | null
  }

  export type LoteSumAggregateOutputType = {
    stockTotal: number | null
    stockPorCaja: number | null
    stockPorBlister: number | null
  }

  export type LoteMinAggregateOutputType = {
    id: string | null
    origen: string | null
    productoId: string | null
    nombre: string | null
    fechaVencimiento: Date | null
    stockTotal: number | null
    stockPorCaja: number | null
    stockPorBlister: number | null
    createdAt: Date | null
    codigoBarrasId: string | null
    compraId: string | null
  }

  export type LoteMaxAggregateOutputType = {
    id: string | null
    origen: string | null
    productoId: string | null
    nombre: string | null
    fechaVencimiento: Date | null
    stockTotal: number | null
    stockPorCaja: number | null
    stockPorBlister: number | null
    createdAt: Date | null
    codigoBarrasId: string | null
    compraId: string | null
  }

  export type LoteCountAggregateOutputType = {
    id: number
    origen: number
    productoId: number
    nombre: number
    fechaVencimiento: number
    stockTotal: number
    stockPorCaja: number
    stockPorBlister: number
    createdAt: number
    codigoBarrasId: number
    compraId: number
    _all: number
  }


  export type LoteAvgAggregateInputType = {
    stockTotal?: true
    stockPorCaja?: true
    stockPorBlister?: true
  }

  export type LoteSumAggregateInputType = {
    stockTotal?: true
    stockPorCaja?: true
    stockPorBlister?: true
  }

  export type LoteMinAggregateInputType = {
    id?: true
    origen?: true
    productoId?: true
    nombre?: true
    fechaVencimiento?: true
    stockTotal?: true
    stockPorCaja?: true
    stockPorBlister?: true
    createdAt?: true
    codigoBarrasId?: true
    compraId?: true
  }

  export type LoteMaxAggregateInputType = {
    id?: true
    origen?: true
    productoId?: true
    nombre?: true
    fechaVencimiento?: true
    stockTotal?: true
    stockPorCaja?: true
    stockPorBlister?: true
    createdAt?: true
    codigoBarrasId?: true
    compraId?: true
  }

  export type LoteCountAggregateInputType = {
    id?: true
    origen?: true
    productoId?: true
    nombre?: true
    fechaVencimiento?: true
    stockTotal?: true
    stockPorCaja?: true
    stockPorBlister?: true
    createdAt?: true
    codigoBarrasId?: true
    compraId?: true
    _all?: true
  }

  export type LoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lote to aggregate.
     */
    where?: LoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotes to fetch.
     */
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lotes
    **/
    _count?: true | LoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoteMaxAggregateInputType
  }

  export type GetLoteAggregateType<T extends LoteAggregateArgs> = {
        [P in keyof T & keyof AggregateLote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLote[P]>
      : GetScalarType<T[P], AggregateLote[P]>
  }




  export type LoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoteWhereInput
    orderBy?: LoteOrderByWithAggregationInput | LoteOrderByWithAggregationInput[]
    by: LoteScalarFieldEnum[] | LoteScalarFieldEnum
    having?: LoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoteCountAggregateInputType | true
    _avg?: LoteAvgAggregateInputType
    _sum?: LoteSumAggregateInputType
    _min?: LoteMinAggregateInputType
    _max?: LoteMaxAggregateInputType
  }

  export type LoteGroupByOutputType = {
    id: string
    origen: string
    productoId: string
    nombre: string
    fechaVencimiento: Date | null
    stockTotal: number
    stockPorCaja: number
    stockPorBlister: number
    createdAt: Date
    codigoBarrasId: string | null
    compraId: string | null
    _count: LoteCountAggregateOutputType | null
    _avg: LoteAvgAggregateOutputType | null
    _sum: LoteSumAggregateOutputType | null
    _min: LoteMinAggregateOutputType | null
    _max: LoteMaxAggregateOutputType | null
  }

  type GetLoteGroupByPayload<T extends LoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoteGroupByOutputType[P]>
            : GetScalarType<T[P], LoteGroupByOutputType[P]>
        }
      >
    >


  export type LoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    origen?: boolean
    productoId?: boolean
    nombre?: boolean
    fechaVencimiento?: boolean
    stockTotal?: boolean
    stockPorCaja?: boolean
    stockPorBlister?: boolean
    createdAt?: boolean
    codigoBarrasId?: boolean
    compraId?: boolean
    codigoBarras?: boolean | Lote$codigoBarrasArgs<ExtArgs>
    compra?: boolean | Lote$compraArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lote"]>

  export type LoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    origen?: boolean
    productoId?: boolean
    nombre?: boolean
    fechaVencimiento?: boolean
    stockTotal?: boolean
    stockPorCaja?: boolean
    stockPorBlister?: boolean
    createdAt?: boolean
    codigoBarrasId?: boolean
    compraId?: boolean
    codigoBarras?: boolean | Lote$codigoBarrasArgs<ExtArgs>
    compra?: boolean | Lote$compraArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lote"]>

  export type LoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    origen?: boolean
    productoId?: boolean
    nombre?: boolean
    fechaVencimiento?: boolean
    stockTotal?: boolean
    stockPorCaja?: boolean
    stockPorBlister?: boolean
    createdAt?: boolean
    codigoBarrasId?: boolean
    compraId?: boolean
    codigoBarras?: boolean | Lote$codigoBarrasArgs<ExtArgs>
    compra?: boolean | Lote$compraArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lote"]>

  export type LoteSelectScalar = {
    id?: boolean
    origen?: boolean
    productoId?: boolean
    nombre?: boolean
    fechaVencimiento?: boolean
    stockTotal?: boolean
    stockPorCaja?: boolean
    stockPorBlister?: boolean
    createdAt?: boolean
    codigoBarrasId?: boolean
    compraId?: boolean
  }

  export type LoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "origen" | "productoId" | "nombre" | "fechaVencimiento" | "stockTotal" | "stockPorCaja" | "stockPorBlister" | "createdAt" | "codigoBarrasId" | "compraId", ExtArgs["result"]["lote"]>
  export type LoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    codigoBarras?: boolean | Lote$codigoBarrasArgs<ExtArgs>
    compra?: boolean | Lote$compraArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type LoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    codigoBarras?: boolean | Lote$codigoBarrasArgs<ExtArgs>
    compra?: boolean | Lote$compraArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type LoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    codigoBarras?: boolean | Lote$codigoBarrasArgs<ExtArgs>
    compra?: boolean | Lote$compraArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $LotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lote"
    objects: {
      codigoBarras: Prisma.$CodigoDeBarrasPayload<ExtArgs> | null
      compra: Prisma.$CompraPayload<ExtArgs> | null
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      origen: string
      productoId: string
      nombre: string
      fechaVencimiento: Date | null
      stockTotal: number
      stockPorCaja: number
      stockPorBlister: number
      createdAt: Date
      codigoBarrasId: string | null
      compraId: string | null
    }, ExtArgs["result"]["lote"]>
    composites: {}
  }

  type LoteGetPayload<S extends boolean | null | undefined | LoteDefaultArgs> = $Result.GetResult<Prisma.$LotePayload, S>

  type LoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoteCountAggregateInputType | true
    }

  export interface LoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lote'], meta: { name: 'Lote' } }
    /**
     * Find zero or one Lote that matches the filter.
     * @param {LoteFindUniqueArgs} args - Arguments to find a Lote
     * @example
     * // Get one Lote
     * const lote = await prisma.lote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoteFindUniqueArgs>(args: SelectSubset<T, LoteFindUniqueArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoteFindUniqueOrThrowArgs} args - Arguments to find a Lote
     * @example
     * // Get one Lote
     * const lote = await prisma.lote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoteFindUniqueOrThrowArgs>(args: SelectSubset<T, LoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteFindFirstArgs} args - Arguments to find a Lote
     * @example
     * // Get one Lote
     * const lote = await prisma.lote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoteFindFirstArgs>(args?: SelectSubset<T, LoteFindFirstArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteFindFirstOrThrowArgs} args - Arguments to find a Lote
     * @example
     * // Get one Lote
     * const lote = await prisma.lote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoteFindFirstOrThrowArgs>(args?: SelectSubset<T, LoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lotes
     * const lotes = await prisma.lote.findMany()
     * 
     * // Get first 10 Lotes
     * const lotes = await prisma.lote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loteWithIdOnly = await prisma.lote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoteFindManyArgs>(args?: SelectSubset<T, LoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lote.
     * @param {LoteCreateArgs} args - Arguments to create a Lote.
     * @example
     * // Create one Lote
     * const Lote = await prisma.lote.create({
     *   data: {
     *     // ... data to create a Lote
     *   }
     * })
     * 
     */
    create<T extends LoteCreateArgs>(args: SelectSubset<T, LoteCreateArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lotes.
     * @param {LoteCreateManyArgs} args - Arguments to create many Lotes.
     * @example
     * // Create many Lotes
     * const lote = await prisma.lote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoteCreateManyArgs>(args?: SelectSubset<T, LoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lotes and returns the data saved in the database.
     * @param {LoteCreateManyAndReturnArgs} args - Arguments to create many Lotes.
     * @example
     * // Create many Lotes
     * const lote = await prisma.lote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lotes and only return the `id`
     * const loteWithIdOnly = await prisma.lote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoteCreateManyAndReturnArgs>(args?: SelectSubset<T, LoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lote.
     * @param {LoteDeleteArgs} args - Arguments to delete one Lote.
     * @example
     * // Delete one Lote
     * const Lote = await prisma.lote.delete({
     *   where: {
     *     // ... filter to delete one Lote
     *   }
     * })
     * 
     */
    delete<T extends LoteDeleteArgs>(args: SelectSubset<T, LoteDeleteArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lote.
     * @param {LoteUpdateArgs} args - Arguments to update one Lote.
     * @example
     * // Update one Lote
     * const lote = await prisma.lote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoteUpdateArgs>(args: SelectSubset<T, LoteUpdateArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lotes.
     * @param {LoteDeleteManyArgs} args - Arguments to filter Lotes to delete.
     * @example
     * // Delete a few Lotes
     * const { count } = await prisma.lote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoteDeleteManyArgs>(args?: SelectSubset<T, LoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lotes
     * const lote = await prisma.lote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoteUpdateManyArgs>(args: SelectSubset<T, LoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lotes and returns the data updated in the database.
     * @param {LoteUpdateManyAndReturnArgs} args - Arguments to update many Lotes.
     * @example
     * // Update many Lotes
     * const lote = await prisma.lote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lotes and only return the `id`
     * const loteWithIdOnly = await prisma.lote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoteUpdateManyAndReturnArgs>(args: SelectSubset<T, LoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lote.
     * @param {LoteUpsertArgs} args - Arguments to update or create a Lote.
     * @example
     * // Update or create a Lote
     * const lote = await prisma.lote.upsert({
     *   create: {
     *     // ... data to create a Lote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lote we want to update
     *   }
     * })
     */
    upsert<T extends LoteUpsertArgs>(args: SelectSubset<T, LoteUpsertArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteCountArgs} args - Arguments to filter Lotes to count.
     * @example
     * // Count the number of Lotes
     * const count = await prisma.lote.count({
     *   where: {
     *     // ... the filter for the Lotes we want to count
     *   }
     * })
    **/
    count<T extends LoteCountArgs>(
      args?: Subset<T, LoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoteAggregateArgs>(args: Subset<T, LoteAggregateArgs>): Prisma.PrismaPromise<GetLoteAggregateType<T>>

    /**
     * Group by Lote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoteGroupByArgs['orderBy'] }
        : { orderBy?: LoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lote model
   */
  readonly fields: LoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    codigoBarras<T extends Lote$codigoBarrasArgs<ExtArgs> = {}>(args?: Subset<T, Lote$codigoBarrasArgs<ExtArgs>>): Prisma__CodigoDeBarrasClient<$Result.GetResult<Prisma.$CodigoDeBarrasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    compra<T extends Lote$compraArgs<ExtArgs> = {}>(args?: Subset<T, Lote$compraArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lote model
   */
  interface LoteFieldRefs {
    readonly id: FieldRef<"Lote", 'String'>
    readonly origen: FieldRef<"Lote", 'String'>
    readonly productoId: FieldRef<"Lote", 'String'>
    readonly nombre: FieldRef<"Lote", 'String'>
    readonly fechaVencimiento: FieldRef<"Lote", 'DateTime'>
    readonly stockTotal: FieldRef<"Lote", 'Int'>
    readonly stockPorCaja: FieldRef<"Lote", 'Int'>
    readonly stockPorBlister: FieldRef<"Lote", 'Int'>
    readonly createdAt: FieldRef<"Lote", 'DateTime'>
    readonly codigoBarrasId: FieldRef<"Lote", 'String'>
    readonly compraId: FieldRef<"Lote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lote findUnique
   */
  export type LoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter, which Lote to fetch.
     */
    where: LoteWhereUniqueInput
  }

  /**
   * Lote findUniqueOrThrow
   */
  export type LoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter, which Lote to fetch.
     */
    where: LoteWhereUniqueInput
  }

  /**
   * Lote findFirst
   */
  export type LoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter, which Lote to fetch.
     */
    where?: LoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotes to fetch.
     */
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lotes.
     */
    cursor?: LoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lotes.
     */
    distinct?: LoteScalarFieldEnum | LoteScalarFieldEnum[]
  }

  /**
   * Lote findFirstOrThrow
   */
  export type LoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter, which Lote to fetch.
     */
    where?: LoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotes to fetch.
     */
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lotes.
     */
    cursor?: LoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lotes.
     */
    distinct?: LoteScalarFieldEnum | LoteScalarFieldEnum[]
  }

  /**
   * Lote findMany
   */
  export type LoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter, which Lotes to fetch.
     */
    where?: LoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotes to fetch.
     */
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lotes.
     */
    cursor?: LoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotes.
     */
    skip?: number
    distinct?: LoteScalarFieldEnum | LoteScalarFieldEnum[]
  }

  /**
   * Lote create
   */
  export type LoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Lote.
     */
    data: XOR<LoteCreateInput, LoteUncheckedCreateInput>
  }

  /**
   * Lote createMany
   */
  export type LoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lotes.
     */
    data: LoteCreateManyInput | LoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lote createManyAndReturn
   */
  export type LoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * The data used to create many Lotes.
     */
    data: LoteCreateManyInput | LoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lote update
   */
  export type LoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Lote.
     */
    data: XOR<LoteUpdateInput, LoteUncheckedUpdateInput>
    /**
     * Choose, which Lote to update.
     */
    where: LoteWhereUniqueInput
  }

  /**
   * Lote updateMany
   */
  export type LoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lotes.
     */
    data: XOR<LoteUpdateManyMutationInput, LoteUncheckedUpdateManyInput>
    /**
     * Filter which Lotes to update
     */
    where?: LoteWhereInput
    /**
     * Limit how many Lotes to update.
     */
    limit?: number
  }

  /**
   * Lote updateManyAndReturn
   */
  export type LoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * The data used to update Lotes.
     */
    data: XOR<LoteUpdateManyMutationInput, LoteUncheckedUpdateManyInput>
    /**
     * Filter which Lotes to update
     */
    where?: LoteWhereInput
    /**
     * Limit how many Lotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lote upsert
   */
  export type LoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Lote to update in case it exists.
     */
    where: LoteWhereUniqueInput
    /**
     * In case the Lote found by the `where` argument doesn't exist, create a new Lote with this data.
     */
    create: XOR<LoteCreateInput, LoteUncheckedCreateInput>
    /**
     * In case the Lote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoteUpdateInput, LoteUncheckedUpdateInput>
  }

  /**
   * Lote delete
   */
  export type LoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter which Lote to delete.
     */
    where: LoteWhereUniqueInput
  }

  /**
   * Lote deleteMany
   */
  export type LoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lotes to delete
     */
    where?: LoteWhereInput
    /**
     * Limit how many Lotes to delete.
     */
    limit?: number
  }

  /**
   * Lote.codigoBarras
   */
  export type Lote$codigoBarrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodigoDeBarras
     */
    select?: CodigoDeBarrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodigoDeBarras
     */
    omit?: CodigoDeBarrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodigoDeBarrasInclude<ExtArgs> | null
    where?: CodigoDeBarrasWhereInput
  }

  /**
   * Lote.compra
   */
  export type Lote$compraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    where?: CompraWhereInput
  }

  /**
   * Lote without action
   */
  export type LoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
  }


  /**
   * Model Compra
   */

  export type AggregateCompra = {
    _count: CompraCountAggregateOutputType | null
    _avg: CompraAvgAggregateOutputType | null
    _sum: CompraSumAggregateOutputType | null
    _min: CompraMinAggregateOutputType | null
    _max: CompraMaxAggregateOutputType | null
  }

  export type CompraAvgAggregateOutputType = {
    correlativo: number | null
    total: number | null
  }

  export type CompraSumAggregateOutputType = {
    correlativo: number | null
    total: number | null
  }

  export type CompraMinAggregateOutputType = {
    id: string | null
    Proveedor: string | null
    proveedorId: string | null
    observaciones: string | null
    correlativo: number | null
    Comprador: string | null
    visitador: string | null
    total: number | null
    estado: string | null
    fecha: Date | null
  }

  export type CompraMaxAggregateOutputType = {
    id: string | null
    Proveedor: string | null
    proveedorId: string | null
    observaciones: string | null
    correlativo: number | null
    Comprador: string | null
    visitador: string | null
    total: number | null
    estado: string | null
    fecha: Date | null
  }

  export type CompraCountAggregateOutputType = {
    id: number
    Proveedor: number
    proveedorId: number
    observaciones: number
    correlativo: number
    Comprador: number
    visitador: number
    total: number
    estado: number
    fecha: number
    _all: number
  }


  export type CompraAvgAggregateInputType = {
    correlativo?: true
    total?: true
  }

  export type CompraSumAggregateInputType = {
    correlativo?: true
    total?: true
  }

  export type CompraMinAggregateInputType = {
    id?: true
    Proveedor?: true
    proveedorId?: true
    observaciones?: true
    correlativo?: true
    Comprador?: true
    visitador?: true
    total?: true
    estado?: true
    fecha?: true
  }

  export type CompraMaxAggregateInputType = {
    id?: true
    Proveedor?: true
    proveedorId?: true
    observaciones?: true
    correlativo?: true
    Comprador?: true
    visitador?: true
    total?: true
    estado?: true
    fecha?: true
  }

  export type CompraCountAggregateInputType = {
    id?: true
    Proveedor?: true
    proveedorId?: true
    observaciones?: true
    correlativo?: true
    Comprador?: true
    visitador?: true
    total?: true
    estado?: true
    fecha?: true
    _all?: true
  }

  export type CompraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compra to aggregate.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Compras
    **/
    _count?: true | CompraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompraMaxAggregateInputType
  }

  export type GetCompraAggregateType<T extends CompraAggregateArgs> = {
        [P in keyof T & keyof AggregateCompra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompra[P]>
      : GetScalarType<T[P], AggregateCompra[P]>
  }




  export type CompraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraWhereInput
    orderBy?: CompraOrderByWithAggregationInput | CompraOrderByWithAggregationInput[]
    by: CompraScalarFieldEnum[] | CompraScalarFieldEnum
    having?: CompraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompraCountAggregateInputType | true
    _avg?: CompraAvgAggregateInputType
    _sum?: CompraSumAggregateInputType
    _min?: CompraMinAggregateInputType
    _max?: CompraMaxAggregateInputType
  }

  export type CompraGroupByOutputType = {
    id: string
    Proveedor: string
    proveedorId: string | null
    observaciones: string
    correlativo: number
    Comprador: string
    visitador: string
    total: number
    estado: string
    fecha: Date
    _count: CompraCountAggregateOutputType | null
    _avg: CompraAvgAggregateOutputType | null
    _sum: CompraSumAggregateOutputType | null
    _min: CompraMinAggregateOutputType | null
    _max: CompraMaxAggregateOutputType | null
  }

  type GetCompraGroupByPayload<T extends CompraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompraGroupByOutputType[P]>
            : GetScalarType<T[P], CompraGroupByOutputType[P]>
        }
      >
    >


  export type CompraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Proveedor?: boolean
    proveedorId?: boolean
    observaciones?: boolean
    correlativo?: boolean
    Comprador?: boolean
    visitador?: boolean
    total?: boolean
    estado?: boolean
    fecha?: boolean
    Lotes?: boolean | Compra$LotesArgs<ExtArgs>
    DetalleDeCompras?: boolean | Compra$DetalleDeComprasArgs<ExtArgs>
    Proveedores?: boolean | Compra$ProveedoresArgs<ExtArgs>
    _count?: boolean | CompraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compra"]>

  export type CompraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Proveedor?: boolean
    proveedorId?: boolean
    observaciones?: boolean
    correlativo?: boolean
    Comprador?: boolean
    visitador?: boolean
    total?: boolean
    estado?: boolean
    fecha?: boolean
    Proveedores?: boolean | Compra$ProveedoresArgs<ExtArgs>
  }, ExtArgs["result"]["compra"]>

  export type CompraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Proveedor?: boolean
    proveedorId?: boolean
    observaciones?: boolean
    correlativo?: boolean
    Comprador?: boolean
    visitador?: boolean
    total?: boolean
    estado?: boolean
    fecha?: boolean
    Proveedores?: boolean | Compra$ProveedoresArgs<ExtArgs>
  }, ExtArgs["result"]["compra"]>

  export type CompraSelectScalar = {
    id?: boolean
    Proveedor?: boolean
    proveedorId?: boolean
    observaciones?: boolean
    correlativo?: boolean
    Comprador?: boolean
    visitador?: boolean
    total?: boolean
    estado?: boolean
    fecha?: boolean
  }

  export type CompraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Proveedor" | "proveedorId" | "observaciones" | "correlativo" | "Comprador" | "visitador" | "total" | "estado" | "fecha", ExtArgs["result"]["compra"]>
  export type CompraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Lotes?: boolean | Compra$LotesArgs<ExtArgs>
    DetalleDeCompras?: boolean | Compra$DetalleDeComprasArgs<ExtArgs>
    Proveedores?: boolean | Compra$ProveedoresArgs<ExtArgs>
    _count?: boolean | CompraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Proveedores?: boolean | Compra$ProveedoresArgs<ExtArgs>
  }
  export type CompraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Proveedores?: boolean | Compra$ProveedoresArgs<ExtArgs>
  }

  export type $CompraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Compra"
    objects: {
      Lotes: Prisma.$LotePayload<ExtArgs>[]
      DetalleDeCompras: Prisma.$DetalleDeComprasPayload<ExtArgs>[]
      Proveedores: Prisma.$ProveedorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      Proveedor: string
      proveedorId: string | null
      observaciones: string
      correlativo: number
      Comprador: string
      visitador: string
      total: number
      estado: string
      fecha: Date
    }, ExtArgs["result"]["compra"]>
    composites: {}
  }

  type CompraGetPayload<S extends boolean | null | undefined | CompraDefaultArgs> = $Result.GetResult<Prisma.$CompraPayload, S>

  type CompraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompraCountAggregateInputType | true
    }

  export interface CompraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Compra'], meta: { name: 'Compra' } }
    /**
     * Find zero or one Compra that matches the filter.
     * @param {CompraFindUniqueArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompraFindUniqueArgs>(args: SelectSubset<T, CompraFindUniqueArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Compra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompraFindUniqueOrThrowArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompraFindUniqueOrThrowArgs>(args: SelectSubset<T, CompraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Compra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindFirstArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompraFindFirstArgs>(args?: SelectSubset<T, CompraFindFirstArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Compra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindFirstOrThrowArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompraFindFirstOrThrowArgs>(args?: SelectSubset<T, CompraFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Compras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compras
     * const compras = await prisma.compra.findMany()
     * 
     * // Get first 10 Compras
     * const compras = await prisma.compra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compraWithIdOnly = await prisma.compra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompraFindManyArgs>(args?: SelectSubset<T, CompraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Compra.
     * @param {CompraCreateArgs} args - Arguments to create a Compra.
     * @example
     * // Create one Compra
     * const Compra = await prisma.compra.create({
     *   data: {
     *     // ... data to create a Compra
     *   }
     * })
     * 
     */
    create<T extends CompraCreateArgs>(args: SelectSubset<T, CompraCreateArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Compras.
     * @param {CompraCreateManyArgs} args - Arguments to create many Compras.
     * @example
     * // Create many Compras
     * const compra = await prisma.compra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompraCreateManyArgs>(args?: SelectSubset<T, CompraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Compras and returns the data saved in the database.
     * @param {CompraCreateManyAndReturnArgs} args - Arguments to create many Compras.
     * @example
     * // Create many Compras
     * const compra = await prisma.compra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Compras and only return the `id`
     * const compraWithIdOnly = await prisma.compra.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompraCreateManyAndReturnArgs>(args?: SelectSubset<T, CompraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Compra.
     * @param {CompraDeleteArgs} args - Arguments to delete one Compra.
     * @example
     * // Delete one Compra
     * const Compra = await prisma.compra.delete({
     *   where: {
     *     // ... filter to delete one Compra
     *   }
     * })
     * 
     */
    delete<T extends CompraDeleteArgs>(args: SelectSubset<T, CompraDeleteArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Compra.
     * @param {CompraUpdateArgs} args - Arguments to update one Compra.
     * @example
     * // Update one Compra
     * const compra = await prisma.compra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompraUpdateArgs>(args: SelectSubset<T, CompraUpdateArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Compras.
     * @param {CompraDeleteManyArgs} args - Arguments to filter Compras to delete.
     * @example
     * // Delete a few Compras
     * const { count } = await prisma.compra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompraDeleteManyArgs>(args?: SelectSubset<T, CompraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compras
     * const compra = await prisma.compra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompraUpdateManyArgs>(args: SelectSubset<T, CompraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compras and returns the data updated in the database.
     * @param {CompraUpdateManyAndReturnArgs} args - Arguments to update many Compras.
     * @example
     * // Update many Compras
     * const compra = await prisma.compra.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Compras and only return the `id`
     * const compraWithIdOnly = await prisma.compra.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompraUpdateManyAndReturnArgs>(args: SelectSubset<T, CompraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Compra.
     * @param {CompraUpsertArgs} args - Arguments to update or create a Compra.
     * @example
     * // Update or create a Compra
     * const compra = await prisma.compra.upsert({
     *   create: {
     *     // ... data to create a Compra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compra we want to update
     *   }
     * })
     */
    upsert<T extends CompraUpsertArgs>(args: SelectSubset<T, CompraUpsertArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraCountArgs} args - Arguments to filter Compras to count.
     * @example
     * // Count the number of Compras
     * const count = await prisma.compra.count({
     *   where: {
     *     // ... the filter for the Compras we want to count
     *   }
     * })
    **/
    count<T extends CompraCountArgs>(
      args?: Subset<T, CompraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Compra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompraAggregateArgs>(args: Subset<T, CompraAggregateArgs>): Prisma.PrismaPromise<GetCompraAggregateType<T>>

    /**
     * Group by Compra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompraGroupByArgs['orderBy'] }
        : { orderBy?: CompraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Compra model
   */
  readonly fields: CompraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Compra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Lotes<T extends Compra$LotesArgs<ExtArgs> = {}>(args?: Subset<T, Compra$LotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DetalleDeCompras<T extends Compra$DetalleDeComprasArgs<ExtArgs> = {}>(args?: Subset<T, Compra$DetalleDeComprasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleDeComprasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Proveedores<T extends Compra$ProveedoresArgs<ExtArgs> = {}>(args?: Subset<T, Compra$ProveedoresArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Compra model
   */
  interface CompraFieldRefs {
    readonly id: FieldRef<"Compra", 'String'>
    readonly Proveedor: FieldRef<"Compra", 'String'>
    readonly proveedorId: FieldRef<"Compra", 'String'>
    readonly observaciones: FieldRef<"Compra", 'String'>
    readonly correlativo: FieldRef<"Compra", 'Int'>
    readonly Comprador: FieldRef<"Compra", 'String'>
    readonly visitador: FieldRef<"Compra", 'String'>
    readonly total: FieldRef<"Compra", 'Int'>
    readonly estado: FieldRef<"Compra", 'String'>
    readonly fecha: FieldRef<"Compra", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Compra findUnique
   */
  export type CompraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra findUniqueOrThrow
   */
  export type CompraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra findFirst
   */
  export type CompraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compras.
     */
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra findFirstOrThrow
   */
  export type CompraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compras.
     */
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra findMany
   */
  export type CompraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compras to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra create
   */
  export type CompraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The data needed to create a Compra.
     */
    data: XOR<CompraCreateInput, CompraUncheckedCreateInput>
  }

  /**
   * Compra createMany
   */
  export type CompraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Compras.
     */
    data: CompraCreateManyInput | CompraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Compra createManyAndReturn
   */
  export type CompraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * The data used to create many Compras.
     */
    data: CompraCreateManyInput | CompraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Compra update
   */
  export type CompraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The data needed to update a Compra.
     */
    data: XOR<CompraUpdateInput, CompraUncheckedUpdateInput>
    /**
     * Choose, which Compra to update.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra updateMany
   */
  export type CompraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Compras.
     */
    data: XOR<CompraUpdateManyMutationInput, CompraUncheckedUpdateManyInput>
    /**
     * Filter which Compras to update
     */
    where?: CompraWhereInput
    /**
     * Limit how many Compras to update.
     */
    limit?: number
  }

  /**
   * Compra updateManyAndReturn
   */
  export type CompraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * The data used to update Compras.
     */
    data: XOR<CompraUpdateManyMutationInput, CompraUncheckedUpdateManyInput>
    /**
     * Filter which Compras to update
     */
    where?: CompraWhereInput
    /**
     * Limit how many Compras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Compra upsert
   */
  export type CompraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The filter to search for the Compra to update in case it exists.
     */
    where: CompraWhereUniqueInput
    /**
     * In case the Compra found by the `where` argument doesn't exist, create a new Compra with this data.
     */
    create: XOR<CompraCreateInput, CompraUncheckedCreateInput>
    /**
     * In case the Compra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompraUpdateInput, CompraUncheckedUpdateInput>
  }

  /**
   * Compra delete
   */
  export type CompraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter which Compra to delete.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra deleteMany
   */
  export type CompraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compras to delete
     */
    where?: CompraWhereInput
    /**
     * Limit how many Compras to delete.
     */
    limit?: number
  }

  /**
   * Compra.Lotes
   */
  export type Compra$LotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    where?: LoteWhereInput
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    cursor?: LoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoteScalarFieldEnum | LoteScalarFieldEnum[]
  }

  /**
   * Compra.DetalleDeCompras
   */
  export type Compra$DetalleDeComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleDeCompras
     */
    select?: DetalleDeComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleDeCompras
     */
    omit?: DetalleDeComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleDeComprasInclude<ExtArgs> | null
    where?: DetalleDeComprasWhereInput
    orderBy?: DetalleDeComprasOrderByWithRelationInput | DetalleDeComprasOrderByWithRelationInput[]
    cursor?: DetalleDeComprasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleDeComprasScalarFieldEnum | DetalleDeComprasScalarFieldEnum[]
  }

  /**
   * Compra.Proveedores
   */
  export type Compra$ProveedoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    where?: ProveedorWhereInput
  }

  /**
   * Compra without action
   */
  export type CompraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
  }


  /**
   * Model PagosRealizadosCompra
   */

  export type AggregatePagosRealizadosCompra = {
    _count: PagosRealizadosCompraCountAggregateOutputType | null
    _avg: PagosRealizadosCompraAvgAggregateOutputType | null
    _sum: PagosRealizadosCompraSumAggregateOutputType | null
    _min: PagosRealizadosCompraMinAggregateOutputType | null
    _max: PagosRealizadosCompraMaxAggregateOutputType | null
  }

  export type PagosRealizadosCompraAvgAggregateOutputType = {
    monto: number | null
  }

  export type PagosRealizadosCompraSumAggregateOutputType = {
    monto: number | null
  }

  export type PagosRealizadosCompraMinAggregateOutputType = {
    id: string | null
    fechaPago: Date | null
    monto: number | null
    proveedorId: string | null
  }

  export type PagosRealizadosCompraMaxAggregateOutputType = {
    id: string | null
    fechaPago: Date | null
    monto: number | null
    proveedorId: string | null
  }

  export type PagosRealizadosCompraCountAggregateOutputType = {
    id: number
    fechaPago: number
    monto: number
    proveedorId: number
    _all: number
  }


  export type PagosRealizadosCompraAvgAggregateInputType = {
    monto?: true
  }

  export type PagosRealizadosCompraSumAggregateInputType = {
    monto?: true
  }

  export type PagosRealizadosCompraMinAggregateInputType = {
    id?: true
    fechaPago?: true
    monto?: true
    proveedorId?: true
  }

  export type PagosRealizadosCompraMaxAggregateInputType = {
    id?: true
    fechaPago?: true
    monto?: true
    proveedorId?: true
  }

  export type PagosRealizadosCompraCountAggregateInputType = {
    id?: true
    fechaPago?: true
    monto?: true
    proveedorId?: true
    _all?: true
  }

  export type PagosRealizadosCompraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PagosRealizadosCompra to aggregate.
     */
    where?: PagosRealizadosCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagosRealizadosCompras to fetch.
     */
    orderBy?: PagosRealizadosCompraOrderByWithRelationInput | PagosRealizadosCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagosRealizadosCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagosRealizadosCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagosRealizadosCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PagosRealizadosCompras
    **/
    _count?: true | PagosRealizadosCompraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagosRealizadosCompraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagosRealizadosCompraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagosRealizadosCompraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagosRealizadosCompraMaxAggregateInputType
  }

  export type GetPagosRealizadosCompraAggregateType<T extends PagosRealizadosCompraAggregateArgs> = {
        [P in keyof T & keyof AggregatePagosRealizadosCompra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagosRealizadosCompra[P]>
      : GetScalarType<T[P], AggregatePagosRealizadosCompra[P]>
  }




  export type PagosRealizadosCompraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagosRealizadosCompraWhereInput
    orderBy?: PagosRealizadosCompraOrderByWithAggregationInput | PagosRealizadosCompraOrderByWithAggregationInput[]
    by: PagosRealizadosCompraScalarFieldEnum[] | PagosRealizadosCompraScalarFieldEnum
    having?: PagosRealizadosCompraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagosRealizadosCompraCountAggregateInputType | true
    _avg?: PagosRealizadosCompraAvgAggregateInputType
    _sum?: PagosRealizadosCompraSumAggregateInputType
    _min?: PagosRealizadosCompraMinAggregateInputType
    _max?: PagosRealizadosCompraMaxAggregateInputType
  }

  export type PagosRealizadosCompraGroupByOutputType = {
    id: string
    fechaPago: Date | null
    monto: number
    proveedorId: string | null
    _count: PagosRealizadosCompraCountAggregateOutputType | null
    _avg: PagosRealizadosCompraAvgAggregateOutputType | null
    _sum: PagosRealizadosCompraSumAggregateOutputType | null
    _min: PagosRealizadosCompraMinAggregateOutputType | null
    _max: PagosRealizadosCompraMaxAggregateOutputType | null
  }

  type GetPagosRealizadosCompraGroupByPayload<T extends PagosRealizadosCompraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagosRealizadosCompraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagosRealizadosCompraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagosRealizadosCompraGroupByOutputType[P]>
            : GetScalarType<T[P], PagosRealizadosCompraGroupByOutputType[P]>
        }
      >
    >


  export type PagosRealizadosCompraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaPago?: boolean
    monto?: boolean
    proveedorId?: boolean
    Proveedores?: boolean | PagosRealizadosCompra$ProveedoresArgs<ExtArgs>
  }, ExtArgs["result"]["pagosRealizadosCompra"]>

  export type PagosRealizadosCompraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaPago?: boolean
    monto?: boolean
    proveedorId?: boolean
    Proveedores?: boolean | PagosRealizadosCompra$ProveedoresArgs<ExtArgs>
  }, ExtArgs["result"]["pagosRealizadosCompra"]>

  export type PagosRealizadosCompraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaPago?: boolean
    monto?: boolean
    proveedorId?: boolean
    Proveedores?: boolean | PagosRealizadosCompra$ProveedoresArgs<ExtArgs>
  }, ExtArgs["result"]["pagosRealizadosCompra"]>

  export type PagosRealizadosCompraSelectScalar = {
    id?: boolean
    fechaPago?: boolean
    monto?: boolean
    proveedorId?: boolean
  }

  export type PagosRealizadosCompraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fechaPago" | "monto" | "proveedorId", ExtArgs["result"]["pagosRealizadosCompra"]>
  export type PagosRealizadosCompraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Proveedores?: boolean | PagosRealizadosCompra$ProveedoresArgs<ExtArgs>
  }
  export type PagosRealizadosCompraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Proveedores?: boolean | PagosRealizadosCompra$ProveedoresArgs<ExtArgs>
  }
  export type PagosRealizadosCompraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Proveedores?: boolean | PagosRealizadosCompra$ProveedoresArgs<ExtArgs>
  }

  export type $PagosRealizadosCompraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PagosRealizadosCompra"
    objects: {
      Proveedores: Prisma.$ProveedorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fechaPago: Date | null
      monto: number
      proveedorId: string | null
    }, ExtArgs["result"]["pagosRealizadosCompra"]>
    composites: {}
  }

  type PagosRealizadosCompraGetPayload<S extends boolean | null | undefined | PagosRealizadosCompraDefaultArgs> = $Result.GetResult<Prisma.$PagosRealizadosCompraPayload, S>

  type PagosRealizadosCompraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagosRealizadosCompraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagosRealizadosCompraCountAggregateInputType | true
    }

  export interface PagosRealizadosCompraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PagosRealizadosCompra'], meta: { name: 'PagosRealizadosCompra' } }
    /**
     * Find zero or one PagosRealizadosCompra that matches the filter.
     * @param {PagosRealizadosCompraFindUniqueArgs} args - Arguments to find a PagosRealizadosCompra
     * @example
     * // Get one PagosRealizadosCompra
     * const pagosRealizadosCompra = await prisma.pagosRealizadosCompra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagosRealizadosCompraFindUniqueArgs>(args: SelectSubset<T, PagosRealizadosCompraFindUniqueArgs<ExtArgs>>): Prisma__PagosRealizadosCompraClient<$Result.GetResult<Prisma.$PagosRealizadosCompraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PagosRealizadosCompra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagosRealizadosCompraFindUniqueOrThrowArgs} args - Arguments to find a PagosRealizadosCompra
     * @example
     * // Get one PagosRealizadosCompra
     * const pagosRealizadosCompra = await prisma.pagosRealizadosCompra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagosRealizadosCompraFindUniqueOrThrowArgs>(args: SelectSubset<T, PagosRealizadosCompraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagosRealizadosCompraClient<$Result.GetResult<Prisma.$PagosRealizadosCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PagosRealizadosCompra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosRealizadosCompraFindFirstArgs} args - Arguments to find a PagosRealizadosCompra
     * @example
     * // Get one PagosRealizadosCompra
     * const pagosRealizadosCompra = await prisma.pagosRealizadosCompra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagosRealizadosCompraFindFirstArgs>(args?: SelectSubset<T, PagosRealizadosCompraFindFirstArgs<ExtArgs>>): Prisma__PagosRealizadosCompraClient<$Result.GetResult<Prisma.$PagosRealizadosCompraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PagosRealizadosCompra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosRealizadosCompraFindFirstOrThrowArgs} args - Arguments to find a PagosRealizadosCompra
     * @example
     * // Get one PagosRealizadosCompra
     * const pagosRealizadosCompra = await prisma.pagosRealizadosCompra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagosRealizadosCompraFindFirstOrThrowArgs>(args?: SelectSubset<T, PagosRealizadosCompraFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagosRealizadosCompraClient<$Result.GetResult<Prisma.$PagosRealizadosCompraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PagosRealizadosCompras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosRealizadosCompraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PagosRealizadosCompras
     * const pagosRealizadosCompras = await prisma.pagosRealizadosCompra.findMany()
     * 
     * // Get first 10 PagosRealizadosCompras
     * const pagosRealizadosCompras = await prisma.pagosRealizadosCompra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagosRealizadosCompraWithIdOnly = await prisma.pagosRealizadosCompra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PagosRealizadosCompraFindManyArgs>(args?: SelectSubset<T, PagosRealizadosCompraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagosRealizadosCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PagosRealizadosCompra.
     * @param {PagosRealizadosCompraCreateArgs} args - Arguments to create a PagosRealizadosCompra.
     * @example
     * // Create one PagosRealizadosCompra
     * const PagosRealizadosCompra = await prisma.pagosRealizadosCompra.create({
     *   data: {
     *     // ... data to create a PagosRealizadosCompra
     *   }
     * })
     * 
     */
    create<T extends PagosRealizadosCompraCreateArgs>(args: SelectSubset<T, PagosRealizadosCompraCreateArgs<ExtArgs>>): Prisma__PagosRealizadosCompraClient<$Result.GetResult<Prisma.$PagosRealizadosCompraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PagosRealizadosCompras.
     * @param {PagosRealizadosCompraCreateManyArgs} args - Arguments to create many PagosRealizadosCompras.
     * @example
     * // Create many PagosRealizadosCompras
     * const pagosRealizadosCompra = await prisma.pagosRealizadosCompra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagosRealizadosCompraCreateManyArgs>(args?: SelectSubset<T, PagosRealizadosCompraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PagosRealizadosCompras and returns the data saved in the database.
     * @param {PagosRealizadosCompraCreateManyAndReturnArgs} args - Arguments to create many PagosRealizadosCompras.
     * @example
     * // Create many PagosRealizadosCompras
     * const pagosRealizadosCompra = await prisma.pagosRealizadosCompra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PagosRealizadosCompras and only return the `id`
     * const pagosRealizadosCompraWithIdOnly = await prisma.pagosRealizadosCompra.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagosRealizadosCompraCreateManyAndReturnArgs>(args?: SelectSubset<T, PagosRealizadosCompraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagosRealizadosCompraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PagosRealizadosCompra.
     * @param {PagosRealizadosCompraDeleteArgs} args - Arguments to delete one PagosRealizadosCompra.
     * @example
     * // Delete one PagosRealizadosCompra
     * const PagosRealizadosCompra = await prisma.pagosRealizadosCompra.delete({
     *   where: {
     *     // ... filter to delete one PagosRealizadosCompra
     *   }
     * })
     * 
     */
    delete<T extends PagosRealizadosCompraDeleteArgs>(args: SelectSubset<T, PagosRealizadosCompraDeleteArgs<ExtArgs>>): Prisma__PagosRealizadosCompraClient<$Result.GetResult<Prisma.$PagosRealizadosCompraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PagosRealizadosCompra.
     * @param {PagosRealizadosCompraUpdateArgs} args - Arguments to update one PagosRealizadosCompra.
     * @example
     * // Update one PagosRealizadosCompra
     * const pagosRealizadosCompra = await prisma.pagosRealizadosCompra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagosRealizadosCompraUpdateArgs>(args: SelectSubset<T, PagosRealizadosCompraUpdateArgs<ExtArgs>>): Prisma__PagosRealizadosCompraClient<$Result.GetResult<Prisma.$PagosRealizadosCompraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PagosRealizadosCompras.
     * @param {PagosRealizadosCompraDeleteManyArgs} args - Arguments to filter PagosRealizadosCompras to delete.
     * @example
     * // Delete a few PagosRealizadosCompras
     * const { count } = await prisma.pagosRealizadosCompra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagosRealizadosCompraDeleteManyArgs>(args?: SelectSubset<T, PagosRealizadosCompraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PagosRealizadosCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosRealizadosCompraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PagosRealizadosCompras
     * const pagosRealizadosCompra = await prisma.pagosRealizadosCompra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagosRealizadosCompraUpdateManyArgs>(args: SelectSubset<T, PagosRealizadosCompraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PagosRealizadosCompras and returns the data updated in the database.
     * @param {PagosRealizadosCompraUpdateManyAndReturnArgs} args - Arguments to update many PagosRealizadosCompras.
     * @example
     * // Update many PagosRealizadosCompras
     * const pagosRealizadosCompra = await prisma.pagosRealizadosCompra.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PagosRealizadosCompras and only return the `id`
     * const pagosRealizadosCompraWithIdOnly = await prisma.pagosRealizadosCompra.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PagosRealizadosCompraUpdateManyAndReturnArgs>(args: SelectSubset<T, PagosRealizadosCompraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagosRealizadosCompraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PagosRealizadosCompra.
     * @param {PagosRealizadosCompraUpsertArgs} args - Arguments to update or create a PagosRealizadosCompra.
     * @example
     * // Update or create a PagosRealizadosCompra
     * const pagosRealizadosCompra = await prisma.pagosRealizadosCompra.upsert({
     *   create: {
     *     // ... data to create a PagosRealizadosCompra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PagosRealizadosCompra we want to update
     *   }
     * })
     */
    upsert<T extends PagosRealizadosCompraUpsertArgs>(args: SelectSubset<T, PagosRealizadosCompraUpsertArgs<ExtArgs>>): Prisma__PagosRealizadosCompraClient<$Result.GetResult<Prisma.$PagosRealizadosCompraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PagosRealizadosCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosRealizadosCompraCountArgs} args - Arguments to filter PagosRealizadosCompras to count.
     * @example
     * // Count the number of PagosRealizadosCompras
     * const count = await prisma.pagosRealizadosCompra.count({
     *   where: {
     *     // ... the filter for the PagosRealizadosCompras we want to count
     *   }
     * })
    **/
    count<T extends PagosRealizadosCompraCountArgs>(
      args?: Subset<T, PagosRealizadosCompraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagosRealizadosCompraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PagosRealizadosCompra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosRealizadosCompraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagosRealizadosCompraAggregateArgs>(args: Subset<T, PagosRealizadosCompraAggregateArgs>): Prisma.PrismaPromise<GetPagosRealizadosCompraAggregateType<T>>

    /**
     * Group by PagosRealizadosCompra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosRealizadosCompraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PagosRealizadosCompraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagosRealizadosCompraGroupByArgs['orderBy'] }
        : { orderBy?: PagosRealizadosCompraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PagosRealizadosCompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagosRealizadosCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PagosRealizadosCompra model
   */
  readonly fields: PagosRealizadosCompraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PagosRealizadosCompra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagosRealizadosCompraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Proveedores<T extends PagosRealizadosCompra$ProveedoresArgs<ExtArgs> = {}>(args?: Subset<T, PagosRealizadosCompra$ProveedoresArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PagosRealizadosCompra model
   */
  interface PagosRealizadosCompraFieldRefs {
    readonly id: FieldRef<"PagosRealizadosCompra", 'String'>
    readonly fechaPago: FieldRef<"PagosRealizadosCompra", 'DateTime'>
    readonly monto: FieldRef<"PagosRealizadosCompra", 'Float'>
    readonly proveedorId: FieldRef<"PagosRealizadosCompra", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PagosRealizadosCompra findUnique
   */
  export type PagosRealizadosCompraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosCompra
     */
    select?: PagosRealizadosCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosCompra
     */
    omit?: PagosRealizadosCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosCompraInclude<ExtArgs> | null
    /**
     * Filter, which PagosRealizadosCompra to fetch.
     */
    where: PagosRealizadosCompraWhereUniqueInput
  }

  /**
   * PagosRealizadosCompra findUniqueOrThrow
   */
  export type PagosRealizadosCompraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosCompra
     */
    select?: PagosRealizadosCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosCompra
     */
    omit?: PagosRealizadosCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosCompraInclude<ExtArgs> | null
    /**
     * Filter, which PagosRealizadosCompra to fetch.
     */
    where: PagosRealizadosCompraWhereUniqueInput
  }

  /**
   * PagosRealizadosCompra findFirst
   */
  export type PagosRealizadosCompraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosCompra
     */
    select?: PagosRealizadosCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosCompra
     */
    omit?: PagosRealizadosCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosCompraInclude<ExtArgs> | null
    /**
     * Filter, which PagosRealizadosCompra to fetch.
     */
    where?: PagosRealizadosCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagosRealizadosCompras to fetch.
     */
    orderBy?: PagosRealizadosCompraOrderByWithRelationInput | PagosRealizadosCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PagosRealizadosCompras.
     */
    cursor?: PagosRealizadosCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagosRealizadosCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagosRealizadosCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PagosRealizadosCompras.
     */
    distinct?: PagosRealizadosCompraScalarFieldEnum | PagosRealizadosCompraScalarFieldEnum[]
  }

  /**
   * PagosRealizadosCompra findFirstOrThrow
   */
  export type PagosRealizadosCompraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosCompra
     */
    select?: PagosRealizadosCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosCompra
     */
    omit?: PagosRealizadosCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosCompraInclude<ExtArgs> | null
    /**
     * Filter, which PagosRealizadosCompra to fetch.
     */
    where?: PagosRealizadosCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagosRealizadosCompras to fetch.
     */
    orderBy?: PagosRealizadosCompraOrderByWithRelationInput | PagosRealizadosCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PagosRealizadosCompras.
     */
    cursor?: PagosRealizadosCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagosRealizadosCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagosRealizadosCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PagosRealizadosCompras.
     */
    distinct?: PagosRealizadosCompraScalarFieldEnum | PagosRealizadosCompraScalarFieldEnum[]
  }

  /**
   * PagosRealizadosCompra findMany
   */
  export type PagosRealizadosCompraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosCompra
     */
    select?: PagosRealizadosCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosCompra
     */
    omit?: PagosRealizadosCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosCompraInclude<ExtArgs> | null
    /**
     * Filter, which PagosRealizadosCompras to fetch.
     */
    where?: PagosRealizadosCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagosRealizadosCompras to fetch.
     */
    orderBy?: PagosRealizadosCompraOrderByWithRelationInput | PagosRealizadosCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PagosRealizadosCompras.
     */
    cursor?: PagosRealizadosCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagosRealizadosCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagosRealizadosCompras.
     */
    skip?: number
    distinct?: PagosRealizadosCompraScalarFieldEnum | PagosRealizadosCompraScalarFieldEnum[]
  }

  /**
   * PagosRealizadosCompra create
   */
  export type PagosRealizadosCompraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosCompra
     */
    select?: PagosRealizadosCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosCompra
     */
    omit?: PagosRealizadosCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosCompraInclude<ExtArgs> | null
    /**
     * The data needed to create a PagosRealizadosCompra.
     */
    data: XOR<PagosRealizadosCompraCreateInput, PagosRealizadosCompraUncheckedCreateInput>
  }

  /**
   * PagosRealizadosCompra createMany
   */
  export type PagosRealizadosCompraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PagosRealizadosCompras.
     */
    data: PagosRealizadosCompraCreateManyInput | PagosRealizadosCompraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PagosRealizadosCompra createManyAndReturn
   */
  export type PagosRealizadosCompraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosCompra
     */
    select?: PagosRealizadosCompraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosCompra
     */
    omit?: PagosRealizadosCompraOmit<ExtArgs> | null
    /**
     * The data used to create many PagosRealizadosCompras.
     */
    data: PagosRealizadosCompraCreateManyInput | PagosRealizadosCompraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosCompraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PagosRealizadosCompra update
   */
  export type PagosRealizadosCompraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosCompra
     */
    select?: PagosRealizadosCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosCompra
     */
    omit?: PagosRealizadosCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosCompraInclude<ExtArgs> | null
    /**
     * The data needed to update a PagosRealizadosCompra.
     */
    data: XOR<PagosRealizadosCompraUpdateInput, PagosRealizadosCompraUncheckedUpdateInput>
    /**
     * Choose, which PagosRealizadosCompra to update.
     */
    where: PagosRealizadosCompraWhereUniqueInput
  }

  /**
   * PagosRealizadosCompra updateMany
   */
  export type PagosRealizadosCompraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PagosRealizadosCompras.
     */
    data: XOR<PagosRealizadosCompraUpdateManyMutationInput, PagosRealizadosCompraUncheckedUpdateManyInput>
    /**
     * Filter which PagosRealizadosCompras to update
     */
    where?: PagosRealizadosCompraWhereInput
    /**
     * Limit how many PagosRealizadosCompras to update.
     */
    limit?: number
  }

  /**
   * PagosRealizadosCompra updateManyAndReturn
   */
  export type PagosRealizadosCompraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosCompra
     */
    select?: PagosRealizadosCompraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosCompra
     */
    omit?: PagosRealizadosCompraOmit<ExtArgs> | null
    /**
     * The data used to update PagosRealizadosCompras.
     */
    data: XOR<PagosRealizadosCompraUpdateManyMutationInput, PagosRealizadosCompraUncheckedUpdateManyInput>
    /**
     * Filter which PagosRealizadosCompras to update
     */
    where?: PagosRealizadosCompraWhereInput
    /**
     * Limit how many PagosRealizadosCompras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosCompraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PagosRealizadosCompra upsert
   */
  export type PagosRealizadosCompraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosCompra
     */
    select?: PagosRealizadosCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosCompra
     */
    omit?: PagosRealizadosCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosCompraInclude<ExtArgs> | null
    /**
     * The filter to search for the PagosRealizadosCompra to update in case it exists.
     */
    where: PagosRealizadosCompraWhereUniqueInput
    /**
     * In case the PagosRealizadosCompra found by the `where` argument doesn't exist, create a new PagosRealizadosCompra with this data.
     */
    create: XOR<PagosRealizadosCompraCreateInput, PagosRealizadosCompraUncheckedCreateInput>
    /**
     * In case the PagosRealizadosCompra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagosRealizadosCompraUpdateInput, PagosRealizadosCompraUncheckedUpdateInput>
  }

  /**
   * PagosRealizadosCompra delete
   */
  export type PagosRealizadosCompraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosCompra
     */
    select?: PagosRealizadosCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosCompra
     */
    omit?: PagosRealizadosCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosCompraInclude<ExtArgs> | null
    /**
     * Filter which PagosRealizadosCompra to delete.
     */
    where: PagosRealizadosCompraWhereUniqueInput
  }

  /**
   * PagosRealizadosCompra deleteMany
   */
  export type PagosRealizadosCompraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PagosRealizadosCompras to delete
     */
    where?: PagosRealizadosCompraWhereInput
    /**
     * Limit how many PagosRealizadosCompras to delete.
     */
    limit?: number
  }

  /**
   * PagosRealizadosCompra.Proveedores
   */
  export type PagosRealizadosCompra$ProveedoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    where?: ProveedorWhereInput
  }

  /**
   * PagosRealizadosCompra without action
   */
  export type PagosRealizadosCompraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosCompra
     */
    select?: PagosRealizadosCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosCompra
     */
    omit?: PagosRealizadosCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosCompraInclude<ExtArgs> | null
  }


  /**
   * Model Venta
   */

  export type AggregateVenta = {
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  export type VentaAvgAggregateOutputType = {
    correlativo: number | null
    total: number | null
    noVenta: number | null
    gananciaTotal: number | null
  }

  export type VentaSumAggregateOutputType = {
    correlativo: number | null
    total: number | null
    noVenta: number | null
    gananciaTotal: number | null
  }

  export type VentaMinAggregateOutputType = {
    id: string | null
    nombreCliente: string | null
    fechaDePago: Date | null
    estado: string | null
    correlativo: number | null
    total: number | null
    fecha: Date | null
    noVenta: number | null
    gananciaTotal: number | null
    clienteId: string | null
  }

  export type VentaMaxAggregateOutputType = {
    id: string | null
    nombreCliente: string | null
    fechaDePago: Date | null
    estado: string | null
    correlativo: number | null
    total: number | null
    fecha: Date | null
    noVenta: number | null
    gananciaTotal: number | null
    clienteId: string | null
  }

  export type VentaCountAggregateOutputType = {
    id: number
    nombreCliente: number
    fechaDePago: number
    estado: number
    correlativo: number
    total: number
    fecha: number
    noVenta: number
    gananciaTotal: number
    clienteId: number
    _all: number
  }


  export type VentaAvgAggregateInputType = {
    correlativo?: true
    total?: true
    noVenta?: true
    gananciaTotal?: true
  }

  export type VentaSumAggregateInputType = {
    correlativo?: true
    total?: true
    noVenta?: true
    gananciaTotal?: true
  }

  export type VentaMinAggregateInputType = {
    id?: true
    nombreCliente?: true
    fechaDePago?: true
    estado?: true
    correlativo?: true
    total?: true
    fecha?: true
    noVenta?: true
    gananciaTotal?: true
    clienteId?: true
  }

  export type VentaMaxAggregateInputType = {
    id?: true
    nombreCliente?: true
    fechaDePago?: true
    estado?: true
    correlativo?: true
    total?: true
    fecha?: true
    noVenta?: true
    gananciaTotal?: true
    clienteId?: true
  }

  export type VentaCountAggregateInputType = {
    id?: true
    nombreCliente?: true
    fechaDePago?: true
    estado?: true
    correlativo?: true
    total?: true
    fecha?: true
    noVenta?: true
    gananciaTotal?: true
    clienteId?: true
    _all?: true
  }

  export type VentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venta to aggregate.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ventas
    **/
    _count?: true | VentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VentaMaxAggregateInputType
  }

  export type GetVentaAggregateType<T extends VentaAggregateArgs> = {
        [P in keyof T & keyof AggregateVenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenta[P]>
      : GetScalarType<T[P], AggregateVenta[P]>
  }




  export type VentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithAggregationInput | VentaOrderByWithAggregationInput[]
    by: VentaScalarFieldEnum[] | VentaScalarFieldEnum
    having?: VentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VentaCountAggregateInputType | true
    _avg?: VentaAvgAggregateInputType
    _sum?: VentaSumAggregateInputType
    _min?: VentaMinAggregateInputType
    _max?: VentaMaxAggregateInputType
  }

  export type VentaGroupByOutputType = {
    id: string
    nombreCliente: string
    fechaDePago: Date | null
    estado: string
    correlativo: number
    total: number
    fecha: Date
    noVenta: number
    gananciaTotal: number
    clienteId: string | null
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  type GetVentaGroupByPayload<T extends VentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VentaGroupByOutputType[P]>
            : GetScalarType<T[P], VentaGroupByOutputType[P]>
        }
      >
    >


  export type VentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombreCliente?: boolean
    fechaDePago?: boolean
    estado?: boolean
    correlativo?: boolean
    total?: boolean
    fecha?: boolean
    noVenta?: boolean
    gananciaTotal?: boolean
    clienteId?: boolean
    detalles?: boolean | Venta$detallesArgs<ExtArgs>
    cliente?: boolean | Venta$clienteArgs<ExtArgs>
    _count?: boolean | VentaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombreCliente?: boolean
    fechaDePago?: boolean
    estado?: boolean
    correlativo?: boolean
    total?: boolean
    fecha?: boolean
    noVenta?: boolean
    gananciaTotal?: boolean
    clienteId?: boolean
    cliente?: boolean | Venta$clienteArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombreCliente?: boolean
    fechaDePago?: boolean
    estado?: boolean
    correlativo?: boolean
    total?: boolean
    fecha?: boolean
    noVenta?: boolean
    gananciaTotal?: boolean
    clienteId?: boolean
    cliente?: boolean | Venta$clienteArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectScalar = {
    id?: boolean
    nombreCliente?: boolean
    fechaDePago?: boolean
    estado?: boolean
    correlativo?: boolean
    total?: boolean
    fecha?: boolean
    noVenta?: boolean
    gananciaTotal?: boolean
    clienteId?: boolean
  }

  export type VentaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombreCliente" | "fechaDePago" | "estado" | "correlativo" | "total" | "fecha" | "noVenta" | "gananciaTotal" | "clienteId", ExtArgs["result"]["venta"]>
  export type VentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | Venta$detallesArgs<ExtArgs>
    cliente?: boolean | Venta$clienteArgs<ExtArgs>
    _count?: boolean | VentaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VentaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | Venta$clienteArgs<ExtArgs>
  }
  export type VentaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | Venta$clienteArgs<ExtArgs>
  }

  export type $VentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venta"
    objects: {
      detalles: Prisma.$ListaProductosPayload<ExtArgs>[]
      cliente: Prisma.$ClientePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombreCliente: string
      fechaDePago: Date | null
      estado: string
      correlativo: number
      total: number
      fecha: Date
      noVenta: number
      gananciaTotal: number
      clienteId: string | null
    }, ExtArgs["result"]["venta"]>
    composites: {}
  }

  type VentaGetPayload<S extends boolean | null | undefined | VentaDefaultArgs> = $Result.GetResult<Prisma.$VentaPayload, S>

  type VentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VentaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VentaCountAggregateInputType | true
    }

  export interface VentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venta'], meta: { name: 'Venta' } }
    /**
     * Find zero or one Venta that matches the filter.
     * @param {VentaFindUniqueArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VentaFindUniqueArgs>(args: SelectSubset<T, VentaFindUniqueArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VentaFindUniqueOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VentaFindUniqueOrThrowArgs>(args: SelectSubset<T, VentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VentaFindFirstArgs>(args?: SelectSubset<T, VentaFindFirstArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VentaFindFirstOrThrowArgs>(args?: SelectSubset<T, VentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ventas
     * const ventas = await prisma.venta.findMany()
     * 
     * // Get first 10 Ventas
     * const ventas = await prisma.venta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ventaWithIdOnly = await prisma.venta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VentaFindManyArgs>(args?: SelectSubset<T, VentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venta.
     * @param {VentaCreateArgs} args - Arguments to create a Venta.
     * @example
     * // Create one Venta
     * const Venta = await prisma.venta.create({
     *   data: {
     *     // ... data to create a Venta
     *   }
     * })
     * 
     */
    create<T extends VentaCreateArgs>(args: SelectSubset<T, VentaCreateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ventas.
     * @param {VentaCreateManyArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const venta = await prisma.venta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VentaCreateManyArgs>(args?: SelectSubset<T, VentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ventas and returns the data saved in the database.
     * @param {VentaCreateManyAndReturnArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const venta = await prisma.venta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ventas and only return the `id`
     * const ventaWithIdOnly = await prisma.venta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VentaCreateManyAndReturnArgs>(args?: SelectSubset<T, VentaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venta.
     * @param {VentaDeleteArgs} args - Arguments to delete one Venta.
     * @example
     * // Delete one Venta
     * const Venta = await prisma.venta.delete({
     *   where: {
     *     // ... filter to delete one Venta
     *   }
     * })
     * 
     */
    delete<T extends VentaDeleteArgs>(args: SelectSubset<T, VentaDeleteArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venta.
     * @param {VentaUpdateArgs} args - Arguments to update one Venta.
     * @example
     * // Update one Venta
     * const venta = await prisma.venta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VentaUpdateArgs>(args: SelectSubset<T, VentaUpdateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ventas.
     * @param {VentaDeleteManyArgs} args - Arguments to filter Ventas to delete.
     * @example
     * // Delete a few Ventas
     * const { count } = await prisma.venta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VentaDeleteManyArgs>(args?: SelectSubset<T, VentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ventas
     * const venta = await prisma.venta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VentaUpdateManyArgs>(args: SelectSubset<T, VentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas and returns the data updated in the database.
     * @param {VentaUpdateManyAndReturnArgs} args - Arguments to update many Ventas.
     * @example
     * // Update many Ventas
     * const venta = await prisma.venta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ventas and only return the `id`
     * const ventaWithIdOnly = await prisma.venta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VentaUpdateManyAndReturnArgs>(args: SelectSubset<T, VentaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venta.
     * @param {VentaUpsertArgs} args - Arguments to update or create a Venta.
     * @example
     * // Update or create a Venta
     * const venta = await prisma.venta.upsert({
     *   create: {
     *     // ... data to create a Venta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venta we want to update
     *   }
     * })
     */
    upsert<T extends VentaUpsertArgs>(args: SelectSubset<T, VentaUpsertArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaCountArgs} args - Arguments to filter Ventas to count.
     * @example
     * // Count the number of Ventas
     * const count = await prisma.venta.count({
     *   where: {
     *     // ... the filter for the Ventas we want to count
     *   }
     * })
    **/
    count<T extends VentaCountArgs>(
      args?: Subset<T, VentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VentaAggregateArgs>(args: Subset<T, VentaAggregateArgs>): Prisma.PrismaPromise<GetVentaAggregateType<T>>

    /**
     * Group by Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VentaGroupByArgs['orderBy'] }
        : { orderBy?: VentaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venta model
   */
  readonly fields: VentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalles<T extends Venta$detallesArgs<ExtArgs> = {}>(args?: Subset<T, Venta$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaProductosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cliente<T extends Venta$clienteArgs<ExtArgs> = {}>(args?: Subset<T, Venta$clienteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Venta model
   */
  interface VentaFieldRefs {
    readonly id: FieldRef<"Venta", 'String'>
    readonly nombreCliente: FieldRef<"Venta", 'String'>
    readonly fechaDePago: FieldRef<"Venta", 'DateTime'>
    readonly estado: FieldRef<"Venta", 'String'>
    readonly correlativo: FieldRef<"Venta", 'Int'>
    readonly total: FieldRef<"Venta", 'Float'>
    readonly fecha: FieldRef<"Venta", 'DateTime'>
    readonly noVenta: FieldRef<"Venta", 'Int'>
    readonly gananciaTotal: FieldRef<"Venta", 'Float'>
    readonly clienteId: FieldRef<"Venta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Venta findUnique
   */
  export type VentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findUniqueOrThrow
   */
  export type VentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findFirst
   */
  export type VentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findFirstOrThrow
   */
  export type VentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findMany
   */
  export type VentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Ventas to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta create
   */
  export type VentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The data needed to create a Venta.
     */
    data: XOR<VentaCreateInput, VentaUncheckedCreateInput>
  }

  /**
   * Venta createMany
   */
  export type VentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ventas.
     */
    data: VentaCreateManyInput | VentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venta createManyAndReturn
   */
  export type VentaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * The data used to create many Ventas.
     */
    data: VentaCreateManyInput | VentaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Venta update
   */
  export type VentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The data needed to update a Venta.
     */
    data: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
    /**
     * Choose, which Venta to update.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta updateMany
   */
  export type VentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ventas.
     */
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyInput>
    /**
     * Filter which Ventas to update
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to update.
     */
    limit?: number
  }

  /**
   * Venta updateManyAndReturn
   */
  export type VentaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * The data used to update Ventas.
     */
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyInput>
    /**
     * Filter which Ventas to update
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Venta upsert
   */
  export type VentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The filter to search for the Venta to update in case it exists.
     */
    where: VentaWhereUniqueInput
    /**
     * In case the Venta found by the `where` argument doesn't exist, create a new Venta with this data.
     */
    create: XOR<VentaCreateInput, VentaUncheckedCreateInput>
    /**
     * In case the Venta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
  }

  /**
   * Venta delete
   */
  export type VentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter which Venta to delete.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta deleteMany
   */
  export type VentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ventas to delete
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to delete.
     */
    limit?: number
  }

  /**
   * Venta.detalles
   */
  export type Venta$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaProductos
     */
    select?: ListaProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaProductos
     */
    omit?: ListaProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaProductosInclude<ExtArgs> | null
    where?: ListaProductosWhereInput
    orderBy?: ListaProductosOrderByWithRelationInput | ListaProductosOrderByWithRelationInput[]
    cursor?: ListaProductosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListaProductosScalarFieldEnum | ListaProductosScalarFieldEnum[]
  }

  /**
   * Venta.cliente
   */
  export type Venta$clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
  }

  /**
   * Venta without action
   */
  export type VentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
  }


  /**
   * Model PagosRealizadosVentas
   */

  export type AggregatePagosRealizadosVentas = {
    _count: PagosRealizadosVentasCountAggregateOutputType | null
    _avg: PagosRealizadosVentasAvgAggregateOutputType | null
    _sum: PagosRealizadosVentasSumAggregateOutputType | null
    _min: PagosRealizadosVentasMinAggregateOutputType | null
    _max: PagosRealizadosVentasMaxAggregateOutputType | null
  }

  export type PagosRealizadosVentasAvgAggregateOutputType = {
    monto: number | null
  }

  export type PagosRealizadosVentasSumAggregateOutputType = {
    monto: number | null
  }

  export type PagosRealizadosVentasMinAggregateOutputType = {
    id: string | null
    fechaPago: Date | null
    monto: number | null
    clienteId: string | null
  }

  export type PagosRealizadosVentasMaxAggregateOutputType = {
    id: string | null
    fechaPago: Date | null
    monto: number | null
    clienteId: string | null
  }

  export type PagosRealizadosVentasCountAggregateOutputType = {
    id: number
    fechaPago: number
    monto: number
    clienteId: number
    _all: number
  }


  export type PagosRealizadosVentasAvgAggregateInputType = {
    monto?: true
  }

  export type PagosRealizadosVentasSumAggregateInputType = {
    monto?: true
  }

  export type PagosRealizadosVentasMinAggregateInputType = {
    id?: true
    fechaPago?: true
    monto?: true
    clienteId?: true
  }

  export type PagosRealizadosVentasMaxAggregateInputType = {
    id?: true
    fechaPago?: true
    monto?: true
    clienteId?: true
  }

  export type PagosRealizadosVentasCountAggregateInputType = {
    id?: true
    fechaPago?: true
    monto?: true
    clienteId?: true
    _all?: true
  }

  export type PagosRealizadosVentasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PagosRealizadosVentas to aggregate.
     */
    where?: PagosRealizadosVentasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagosRealizadosVentas to fetch.
     */
    orderBy?: PagosRealizadosVentasOrderByWithRelationInput | PagosRealizadosVentasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagosRealizadosVentasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagosRealizadosVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagosRealizadosVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PagosRealizadosVentas
    **/
    _count?: true | PagosRealizadosVentasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagosRealizadosVentasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagosRealizadosVentasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagosRealizadosVentasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagosRealizadosVentasMaxAggregateInputType
  }

  export type GetPagosRealizadosVentasAggregateType<T extends PagosRealizadosVentasAggregateArgs> = {
        [P in keyof T & keyof AggregatePagosRealizadosVentas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagosRealizadosVentas[P]>
      : GetScalarType<T[P], AggregatePagosRealizadosVentas[P]>
  }




  export type PagosRealizadosVentasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagosRealizadosVentasWhereInput
    orderBy?: PagosRealizadosVentasOrderByWithAggregationInput | PagosRealizadosVentasOrderByWithAggregationInput[]
    by: PagosRealizadosVentasScalarFieldEnum[] | PagosRealizadosVentasScalarFieldEnum
    having?: PagosRealizadosVentasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagosRealizadosVentasCountAggregateInputType | true
    _avg?: PagosRealizadosVentasAvgAggregateInputType
    _sum?: PagosRealizadosVentasSumAggregateInputType
    _min?: PagosRealizadosVentasMinAggregateInputType
    _max?: PagosRealizadosVentasMaxAggregateInputType
  }

  export type PagosRealizadosVentasGroupByOutputType = {
    id: string
    fechaPago: Date | null
    monto: number
    clienteId: string | null
    _count: PagosRealizadosVentasCountAggregateOutputType | null
    _avg: PagosRealizadosVentasAvgAggregateOutputType | null
    _sum: PagosRealizadosVentasSumAggregateOutputType | null
    _min: PagosRealizadosVentasMinAggregateOutputType | null
    _max: PagosRealizadosVentasMaxAggregateOutputType | null
  }

  type GetPagosRealizadosVentasGroupByPayload<T extends PagosRealizadosVentasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagosRealizadosVentasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagosRealizadosVentasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagosRealizadosVentasGroupByOutputType[P]>
            : GetScalarType<T[P], PagosRealizadosVentasGroupByOutputType[P]>
        }
      >
    >


  export type PagosRealizadosVentasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaPago?: boolean
    monto?: boolean
    clienteId?: boolean
    cliente?: boolean | PagosRealizadosVentas$clienteArgs<ExtArgs>
  }, ExtArgs["result"]["pagosRealizadosVentas"]>

  export type PagosRealizadosVentasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaPago?: boolean
    monto?: boolean
    clienteId?: boolean
    cliente?: boolean | PagosRealizadosVentas$clienteArgs<ExtArgs>
  }, ExtArgs["result"]["pagosRealizadosVentas"]>

  export type PagosRealizadosVentasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaPago?: boolean
    monto?: boolean
    clienteId?: boolean
    cliente?: boolean | PagosRealizadosVentas$clienteArgs<ExtArgs>
  }, ExtArgs["result"]["pagosRealizadosVentas"]>

  export type PagosRealizadosVentasSelectScalar = {
    id?: boolean
    fechaPago?: boolean
    monto?: boolean
    clienteId?: boolean
  }

  export type PagosRealizadosVentasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fechaPago" | "monto" | "clienteId", ExtArgs["result"]["pagosRealizadosVentas"]>
  export type PagosRealizadosVentasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | PagosRealizadosVentas$clienteArgs<ExtArgs>
  }
  export type PagosRealizadosVentasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | PagosRealizadosVentas$clienteArgs<ExtArgs>
  }
  export type PagosRealizadosVentasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | PagosRealizadosVentas$clienteArgs<ExtArgs>
  }

  export type $PagosRealizadosVentasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PagosRealizadosVentas"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fechaPago: Date | null
      monto: number
      clienteId: string | null
    }, ExtArgs["result"]["pagosRealizadosVentas"]>
    composites: {}
  }

  type PagosRealizadosVentasGetPayload<S extends boolean | null | undefined | PagosRealizadosVentasDefaultArgs> = $Result.GetResult<Prisma.$PagosRealizadosVentasPayload, S>

  type PagosRealizadosVentasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagosRealizadosVentasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagosRealizadosVentasCountAggregateInputType | true
    }

  export interface PagosRealizadosVentasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PagosRealizadosVentas'], meta: { name: 'PagosRealizadosVentas' } }
    /**
     * Find zero or one PagosRealizadosVentas that matches the filter.
     * @param {PagosRealizadosVentasFindUniqueArgs} args - Arguments to find a PagosRealizadosVentas
     * @example
     * // Get one PagosRealizadosVentas
     * const pagosRealizadosVentas = await prisma.pagosRealizadosVentas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagosRealizadosVentasFindUniqueArgs>(args: SelectSubset<T, PagosRealizadosVentasFindUniqueArgs<ExtArgs>>): Prisma__PagosRealizadosVentasClient<$Result.GetResult<Prisma.$PagosRealizadosVentasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PagosRealizadosVentas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagosRealizadosVentasFindUniqueOrThrowArgs} args - Arguments to find a PagosRealizadosVentas
     * @example
     * // Get one PagosRealizadosVentas
     * const pagosRealizadosVentas = await prisma.pagosRealizadosVentas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagosRealizadosVentasFindUniqueOrThrowArgs>(args: SelectSubset<T, PagosRealizadosVentasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagosRealizadosVentasClient<$Result.GetResult<Prisma.$PagosRealizadosVentasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PagosRealizadosVentas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosRealizadosVentasFindFirstArgs} args - Arguments to find a PagosRealizadosVentas
     * @example
     * // Get one PagosRealizadosVentas
     * const pagosRealizadosVentas = await prisma.pagosRealizadosVentas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagosRealizadosVentasFindFirstArgs>(args?: SelectSubset<T, PagosRealizadosVentasFindFirstArgs<ExtArgs>>): Prisma__PagosRealizadosVentasClient<$Result.GetResult<Prisma.$PagosRealizadosVentasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PagosRealizadosVentas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosRealizadosVentasFindFirstOrThrowArgs} args - Arguments to find a PagosRealizadosVentas
     * @example
     * // Get one PagosRealizadosVentas
     * const pagosRealizadosVentas = await prisma.pagosRealizadosVentas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagosRealizadosVentasFindFirstOrThrowArgs>(args?: SelectSubset<T, PagosRealizadosVentasFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagosRealizadosVentasClient<$Result.GetResult<Prisma.$PagosRealizadosVentasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PagosRealizadosVentas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosRealizadosVentasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PagosRealizadosVentas
     * const pagosRealizadosVentas = await prisma.pagosRealizadosVentas.findMany()
     * 
     * // Get first 10 PagosRealizadosVentas
     * const pagosRealizadosVentas = await prisma.pagosRealizadosVentas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagosRealizadosVentasWithIdOnly = await prisma.pagosRealizadosVentas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PagosRealizadosVentasFindManyArgs>(args?: SelectSubset<T, PagosRealizadosVentasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagosRealizadosVentasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PagosRealizadosVentas.
     * @param {PagosRealizadosVentasCreateArgs} args - Arguments to create a PagosRealizadosVentas.
     * @example
     * // Create one PagosRealizadosVentas
     * const PagosRealizadosVentas = await prisma.pagosRealizadosVentas.create({
     *   data: {
     *     // ... data to create a PagosRealizadosVentas
     *   }
     * })
     * 
     */
    create<T extends PagosRealizadosVentasCreateArgs>(args: SelectSubset<T, PagosRealizadosVentasCreateArgs<ExtArgs>>): Prisma__PagosRealizadosVentasClient<$Result.GetResult<Prisma.$PagosRealizadosVentasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PagosRealizadosVentas.
     * @param {PagosRealizadosVentasCreateManyArgs} args - Arguments to create many PagosRealizadosVentas.
     * @example
     * // Create many PagosRealizadosVentas
     * const pagosRealizadosVentas = await prisma.pagosRealizadosVentas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagosRealizadosVentasCreateManyArgs>(args?: SelectSubset<T, PagosRealizadosVentasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PagosRealizadosVentas and returns the data saved in the database.
     * @param {PagosRealizadosVentasCreateManyAndReturnArgs} args - Arguments to create many PagosRealizadosVentas.
     * @example
     * // Create many PagosRealizadosVentas
     * const pagosRealizadosVentas = await prisma.pagosRealizadosVentas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PagosRealizadosVentas and only return the `id`
     * const pagosRealizadosVentasWithIdOnly = await prisma.pagosRealizadosVentas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagosRealizadosVentasCreateManyAndReturnArgs>(args?: SelectSubset<T, PagosRealizadosVentasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagosRealizadosVentasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PagosRealizadosVentas.
     * @param {PagosRealizadosVentasDeleteArgs} args - Arguments to delete one PagosRealizadosVentas.
     * @example
     * // Delete one PagosRealizadosVentas
     * const PagosRealizadosVentas = await prisma.pagosRealizadosVentas.delete({
     *   where: {
     *     // ... filter to delete one PagosRealizadosVentas
     *   }
     * })
     * 
     */
    delete<T extends PagosRealizadosVentasDeleteArgs>(args: SelectSubset<T, PagosRealizadosVentasDeleteArgs<ExtArgs>>): Prisma__PagosRealizadosVentasClient<$Result.GetResult<Prisma.$PagosRealizadosVentasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PagosRealizadosVentas.
     * @param {PagosRealizadosVentasUpdateArgs} args - Arguments to update one PagosRealizadosVentas.
     * @example
     * // Update one PagosRealizadosVentas
     * const pagosRealizadosVentas = await prisma.pagosRealizadosVentas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagosRealizadosVentasUpdateArgs>(args: SelectSubset<T, PagosRealizadosVentasUpdateArgs<ExtArgs>>): Prisma__PagosRealizadosVentasClient<$Result.GetResult<Prisma.$PagosRealizadosVentasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PagosRealizadosVentas.
     * @param {PagosRealizadosVentasDeleteManyArgs} args - Arguments to filter PagosRealizadosVentas to delete.
     * @example
     * // Delete a few PagosRealizadosVentas
     * const { count } = await prisma.pagosRealizadosVentas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagosRealizadosVentasDeleteManyArgs>(args?: SelectSubset<T, PagosRealizadosVentasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PagosRealizadosVentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosRealizadosVentasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PagosRealizadosVentas
     * const pagosRealizadosVentas = await prisma.pagosRealizadosVentas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagosRealizadosVentasUpdateManyArgs>(args: SelectSubset<T, PagosRealizadosVentasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PagosRealizadosVentas and returns the data updated in the database.
     * @param {PagosRealizadosVentasUpdateManyAndReturnArgs} args - Arguments to update many PagosRealizadosVentas.
     * @example
     * // Update many PagosRealizadosVentas
     * const pagosRealizadosVentas = await prisma.pagosRealizadosVentas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PagosRealizadosVentas and only return the `id`
     * const pagosRealizadosVentasWithIdOnly = await prisma.pagosRealizadosVentas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PagosRealizadosVentasUpdateManyAndReturnArgs>(args: SelectSubset<T, PagosRealizadosVentasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagosRealizadosVentasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PagosRealizadosVentas.
     * @param {PagosRealizadosVentasUpsertArgs} args - Arguments to update or create a PagosRealizadosVentas.
     * @example
     * // Update or create a PagosRealizadosVentas
     * const pagosRealizadosVentas = await prisma.pagosRealizadosVentas.upsert({
     *   create: {
     *     // ... data to create a PagosRealizadosVentas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PagosRealizadosVentas we want to update
     *   }
     * })
     */
    upsert<T extends PagosRealizadosVentasUpsertArgs>(args: SelectSubset<T, PagosRealizadosVentasUpsertArgs<ExtArgs>>): Prisma__PagosRealizadosVentasClient<$Result.GetResult<Prisma.$PagosRealizadosVentasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PagosRealizadosVentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosRealizadosVentasCountArgs} args - Arguments to filter PagosRealizadosVentas to count.
     * @example
     * // Count the number of PagosRealizadosVentas
     * const count = await prisma.pagosRealizadosVentas.count({
     *   where: {
     *     // ... the filter for the PagosRealizadosVentas we want to count
     *   }
     * })
    **/
    count<T extends PagosRealizadosVentasCountArgs>(
      args?: Subset<T, PagosRealizadosVentasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagosRealizadosVentasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PagosRealizadosVentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosRealizadosVentasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagosRealizadosVentasAggregateArgs>(args: Subset<T, PagosRealizadosVentasAggregateArgs>): Prisma.PrismaPromise<GetPagosRealizadosVentasAggregateType<T>>

    /**
     * Group by PagosRealizadosVentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosRealizadosVentasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PagosRealizadosVentasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagosRealizadosVentasGroupByArgs['orderBy'] }
        : { orderBy?: PagosRealizadosVentasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PagosRealizadosVentasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagosRealizadosVentasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PagosRealizadosVentas model
   */
  readonly fields: PagosRealizadosVentasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PagosRealizadosVentas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagosRealizadosVentasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends PagosRealizadosVentas$clienteArgs<ExtArgs> = {}>(args?: Subset<T, PagosRealizadosVentas$clienteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PagosRealizadosVentas model
   */
  interface PagosRealizadosVentasFieldRefs {
    readonly id: FieldRef<"PagosRealizadosVentas", 'String'>
    readonly fechaPago: FieldRef<"PagosRealizadosVentas", 'DateTime'>
    readonly monto: FieldRef<"PagosRealizadosVentas", 'Float'>
    readonly clienteId: FieldRef<"PagosRealizadosVentas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PagosRealizadosVentas findUnique
   */
  export type PagosRealizadosVentasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosVentas
     */
    select?: PagosRealizadosVentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosVentas
     */
    omit?: PagosRealizadosVentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosVentasInclude<ExtArgs> | null
    /**
     * Filter, which PagosRealizadosVentas to fetch.
     */
    where: PagosRealizadosVentasWhereUniqueInput
  }

  /**
   * PagosRealizadosVentas findUniqueOrThrow
   */
  export type PagosRealizadosVentasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosVentas
     */
    select?: PagosRealizadosVentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosVentas
     */
    omit?: PagosRealizadosVentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosVentasInclude<ExtArgs> | null
    /**
     * Filter, which PagosRealizadosVentas to fetch.
     */
    where: PagosRealizadosVentasWhereUniqueInput
  }

  /**
   * PagosRealizadosVentas findFirst
   */
  export type PagosRealizadosVentasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosVentas
     */
    select?: PagosRealizadosVentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosVentas
     */
    omit?: PagosRealizadosVentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosVentasInclude<ExtArgs> | null
    /**
     * Filter, which PagosRealizadosVentas to fetch.
     */
    where?: PagosRealizadosVentasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagosRealizadosVentas to fetch.
     */
    orderBy?: PagosRealizadosVentasOrderByWithRelationInput | PagosRealizadosVentasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PagosRealizadosVentas.
     */
    cursor?: PagosRealizadosVentasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagosRealizadosVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagosRealizadosVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PagosRealizadosVentas.
     */
    distinct?: PagosRealizadosVentasScalarFieldEnum | PagosRealizadosVentasScalarFieldEnum[]
  }

  /**
   * PagosRealizadosVentas findFirstOrThrow
   */
  export type PagosRealizadosVentasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosVentas
     */
    select?: PagosRealizadosVentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosVentas
     */
    omit?: PagosRealizadosVentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosVentasInclude<ExtArgs> | null
    /**
     * Filter, which PagosRealizadosVentas to fetch.
     */
    where?: PagosRealizadosVentasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagosRealizadosVentas to fetch.
     */
    orderBy?: PagosRealizadosVentasOrderByWithRelationInput | PagosRealizadosVentasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PagosRealizadosVentas.
     */
    cursor?: PagosRealizadosVentasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagosRealizadosVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagosRealizadosVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PagosRealizadosVentas.
     */
    distinct?: PagosRealizadosVentasScalarFieldEnum | PagosRealizadosVentasScalarFieldEnum[]
  }

  /**
   * PagosRealizadosVentas findMany
   */
  export type PagosRealizadosVentasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosVentas
     */
    select?: PagosRealizadosVentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosVentas
     */
    omit?: PagosRealizadosVentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosVentasInclude<ExtArgs> | null
    /**
     * Filter, which PagosRealizadosVentas to fetch.
     */
    where?: PagosRealizadosVentasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagosRealizadosVentas to fetch.
     */
    orderBy?: PagosRealizadosVentasOrderByWithRelationInput | PagosRealizadosVentasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PagosRealizadosVentas.
     */
    cursor?: PagosRealizadosVentasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagosRealizadosVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagosRealizadosVentas.
     */
    skip?: number
    distinct?: PagosRealizadosVentasScalarFieldEnum | PagosRealizadosVentasScalarFieldEnum[]
  }

  /**
   * PagosRealizadosVentas create
   */
  export type PagosRealizadosVentasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosVentas
     */
    select?: PagosRealizadosVentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosVentas
     */
    omit?: PagosRealizadosVentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosVentasInclude<ExtArgs> | null
    /**
     * The data needed to create a PagosRealizadosVentas.
     */
    data: XOR<PagosRealizadosVentasCreateInput, PagosRealizadosVentasUncheckedCreateInput>
  }

  /**
   * PagosRealizadosVentas createMany
   */
  export type PagosRealizadosVentasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PagosRealizadosVentas.
     */
    data: PagosRealizadosVentasCreateManyInput | PagosRealizadosVentasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PagosRealizadosVentas createManyAndReturn
   */
  export type PagosRealizadosVentasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosVentas
     */
    select?: PagosRealizadosVentasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosVentas
     */
    omit?: PagosRealizadosVentasOmit<ExtArgs> | null
    /**
     * The data used to create many PagosRealizadosVentas.
     */
    data: PagosRealizadosVentasCreateManyInput | PagosRealizadosVentasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosVentasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PagosRealizadosVentas update
   */
  export type PagosRealizadosVentasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosVentas
     */
    select?: PagosRealizadosVentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosVentas
     */
    omit?: PagosRealizadosVentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosVentasInclude<ExtArgs> | null
    /**
     * The data needed to update a PagosRealizadosVentas.
     */
    data: XOR<PagosRealizadosVentasUpdateInput, PagosRealizadosVentasUncheckedUpdateInput>
    /**
     * Choose, which PagosRealizadosVentas to update.
     */
    where: PagosRealizadosVentasWhereUniqueInput
  }

  /**
   * PagosRealizadosVentas updateMany
   */
  export type PagosRealizadosVentasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PagosRealizadosVentas.
     */
    data: XOR<PagosRealizadosVentasUpdateManyMutationInput, PagosRealizadosVentasUncheckedUpdateManyInput>
    /**
     * Filter which PagosRealizadosVentas to update
     */
    where?: PagosRealizadosVentasWhereInput
    /**
     * Limit how many PagosRealizadosVentas to update.
     */
    limit?: number
  }

  /**
   * PagosRealizadosVentas updateManyAndReturn
   */
  export type PagosRealizadosVentasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosVentas
     */
    select?: PagosRealizadosVentasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosVentas
     */
    omit?: PagosRealizadosVentasOmit<ExtArgs> | null
    /**
     * The data used to update PagosRealizadosVentas.
     */
    data: XOR<PagosRealizadosVentasUpdateManyMutationInput, PagosRealizadosVentasUncheckedUpdateManyInput>
    /**
     * Filter which PagosRealizadosVentas to update
     */
    where?: PagosRealizadosVentasWhereInput
    /**
     * Limit how many PagosRealizadosVentas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosVentasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PagosRealizadosVentas upsert
   */
  export type PagosRealizadosVentasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosVentas
     */
    select?: PagosRealizadosVentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosVentas
     */
    omit?: PagosRealizadosVentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosVentasInclude<ExtArgs> | null
    /**
     * The filter to search for the PagosRealizadosVentas to update in case it exists.
     */
    where: PagosRealizadosVentasWhereUniqueInput
    /**
     * In case the PagosRealizadosVentas found by the `where` argument doesn't exist, create a new PagosRealizadosVentas with this data.
     */
    create: XOR<PagosRealizadosVentasCreateInput, PagosRealizadosVentasUncheckedCreateInput>
    /**
     * In case the PagosRealizadosVentas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagosRealizadosVentasUpdateInput, PagosRealizadosVentasUncheckedUpdateInput>
  }

  /**
   * PagosRealizadosVentas delete
   */
  export type PagosRealizadosVentasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosVentas
     */
    select?: PagosRealizadosVentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosVentas
     */
    omit?: PagosRealizadosVentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosVentasInclude<ExtArgs> | null
    /**
     * Filter which PagosRealizadosVentas to delete.
     */
    where: PagosRealizadosVentasWhereUniqueInput
  }

  /**
   * PagosRealizadosVentas deleteMany
   */
  export type PagosRealizadosVentasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PagosRealizadosVentas to delete
     */
    where?: PagosRealizadosVentasWhereInput
    /**
     * Limit how many PagosRealizadosVentas to delete.
     */
    limit?: number
  }

  /**
   * PagosRealizadosVentas.cliente
   */
  export type PagosRealizadosVentas$clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
  }

  /**
   * PagosRealizadosVentas without action
   */
  export type PagosRealizadosVentasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagosRealizadosVentas
     */
    select?: PagosRealizadosVentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagosRealizadosVentas
     */
    omit?: PagosRealizadosVentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosRealizadosVentasInclude<ExtArgs> | null
  }


  /**
   * Model ListaProductos
   */

  export type AggregateListaProductos = {
    _count: ListaProductosCountAggregateOutputType | null
    _avg: ListaProductosAvgAggregateOutputType | null
    _sum: ListaProductosSumAggregateOutputType | null
    _min: ListaProductosMinAggregateOutputType | null
    _max: ListaProductosMaxAggregateOutputType | null
  }

  export type ListaProductosAvgAggregateOutputType = {
    subGanancia: number | null
    cantidad: number | null
    subtotal: number | null
  }

  export type ListaProductosSumAggregateOutputType = {
    subGanancia: number | null
    cantidad: number | null
    subtotal: number | null
  }

  export type ListaProductosMinAggregateOutputType = {
    id: string | null
    ventaId: string | null
    presentacion: string | null
    productoId: string | null
    nombreProducto: string | null
    subGanancia: number | null
    cantidad: number | null
    subtotal: number | null
    fechaDeVencimiento: Date | null
    loteId: string | null
  }

  export type ListaProductosMaxAggregateOutputType = {
    id: string | null
    ventaId: string | null
    presentacion: string | null
    productoId: string | null
    nombreProducto: string | null
    subGanancia: number | null
    cantidad: number | null
    subtotal: number | null
    fechaDeVencimiento: Date | null
    loteId: string | null
  }

  export type ListaProductosCountAggregateOutputType = {
    id: number
    ventaId: number
    presentacion: number
    productoId: number
    nombreProducto: number
    subGanancia: number
    cantidad: number
    subtotal: number
    fechaDeVencimiento: number
    loteId: number
    _all: number
  }


  export type ListaProductosAvgAggregateInputType = {
    subGanancia?: true
    cantidad?: true
    subtotal?: true
  }

  export type ListaProductosSumAggregateInputType = {
    subGanancia?: true
    cantidad?: true
    subtotal?: true
  }

  export type ListaProductosMinAggregateInputType = {
    id?: true
    ventaId?: true
    presentacion?: true
    productoId?: true
    nombreProducto?: true
    subGanancia?: true
    cantidad?: true
    subtotal?: true
    fechaDeVencimiento?: true
    loteId?: true
  }

  export type ListaProductosMaxAggregateInputType = {
    id?: true
    ventaId?: true
    presentacion?: true
    productoId?: true
    nombreProducto?: true
    subGanancia?: true
    cantidad?: true
    subtotal?: true
    fechaDeVencimiento?: true
    loteId?: true
  }

  export type ListaProductosCountAggregateInputType = {
    id?: true
    ventaId?: true
    presentacion?: true
    productoId?: true
    nombreProducto?: true
    subGanancia?: true
    cantidad?: true
    subtotal?: true
    fechaDeVencimiento?: true
    loteId?: true
    _all?: true
  }

  export type ListaProductosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListaProductos to aggregate.
     */
    where?: ListaProductosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaProductos to fetch.
     */
    orderBy?: ListaProductosOrderByWithRelationInput | ListaProductosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListaProductosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListaProductos
    **/
    _count?: true | ListaProductosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListaProductosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListaProductosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListaProductosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListaProductosMaxAggregateInputType
  }

  export type GetListaProductosAggregateType<T extends ListaProductosAggregateArgs> = {
        [P in keyof T & keyof AggregateListaProductos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListaProductos[P]>
      : GetScalarType<T[P], AggregateListaProductos[P]>
  }




  export type ListaProductosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaProductosWhereInput
    orderBy?: ListaProductosOrderByWithAggregationInput | ListaProductosOrderByWithAggregationInput[]
    by: ListaProductosScalarFieldEnum[] | ListaProductosScalarFieldEnum
    having?: ListaProductosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListaProductosCountAggregateInputType | true
    _avg?: ListaProductosAvgAggregateInputType
    _sum?: ListaProductosSumAggregateInputType
    _min?: ListaProductosMinAggregateInputType
    _max?: ListaProductosMaxAggregateInputType
  }

  export type ListaProductosGroupByOutputType = {
    id: string
    ventaId: string
    presentacion: string
    productoId: string
    nombreProducto: string
    subGanancia: number
    cantidad: number
    subtotal: number
    fechaDeVencimiento: Date | null
    loteId: string
    _count: ListaProductosCountAggregateOutputType | null
    _avg: ListaProductosAvgAggregateOutputType | null
    _sum: ListaProductosSumAggregateOutputType | null
    _min: ListaProductosMinAggregateOutputType | null
    _max: ListaProductosMaxAggregateOutputType | null
  }

  type GetListaProductosGroupByPayload<T extends ListaProductosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListaProductosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListaProductosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListaProductosGroupByOutputType[P]>
            : GetScalarType<T[P], ListaProductosGroupByOutputType[P]>
        }
      >
    >


  export type ListaProductosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ventaId?: boolean
    presentacion?: boolean
    productoId?: boolean
    nombreProducto?: boolean
    subGanancia?: boolean
    cantidad?: boolean
    subtotal?: boolean
    fechaDeVencimiento?: boolean
    loteId?: boolean
    venta?: boolean | VentaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaProductos"]>

  export type ListaProductosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ventaId?: boolean
    presentacion?: boolean
    productoId?: boolean
    nombreProducto?: boolean
    subGanancia?: boolean
    cantidad?: boolean
    subtotal?: boolean
    fechaDeVencimiento?: boolean
    loteId?: boolean
    venta?: boolean | VentaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaProductos"]>

  export type ListaProductosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ventaId?: boolean
    presentacion?: boolean
    productoId?: boolean
    nombreProducto?: boolean
    subGanancia?: boolean
    cantidad?: boolean
    subtotal?: boolean
    fechaDeVencimiento?: boolean
    loteId?: boolean
    venta?: boolean | VentaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaProductos"]>

  export type ListaProductosSelectScalar = {
    id?: boolean
    ventaId?: boolean
    presentacion?: boolean
    productoId?: boolean
    nombreProducto?: boolean
    subGanancia?: boolean
    cantidad?: boolean
    subtotal?: boolean
    fechaDeVencimiento?: boolean
    loteId?: boolean
  }

  export type ListaProductosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ventaId" | "presentacion" | "productoId" | "nombreProducto" | "subGanancia" | "cantidad" | "subtotal" | "fechaDeVencimiento" | "loteId", ExtArgs["result"]["listaProductos"]>
  export type ListaProductosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta?: boolean | VentaDefaultArgs<ExtArgs>
  }
  export type ListaProductosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta?: boolean | VentaDefaultArgs<ExtArgs>
  }
  export type ListaProductosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta?: boolean | VentaDefaultArgs<ExtArgs>
  }

  export type $ListaProductosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListaProductos"
    objects: {
      venta: Prisma.$VentaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ventaId: string
      presentacion: string
      productoId: string
      nombreProducto: string
      subGanancia: number
      cantidad: number
      subtotal: number
      fechaDeVencimiento: Date | null
      loteId: string
    }, ExtArgs["result"]["listaProductos"]>
    composites: {}
  }

  type ListaProductosGetPayload<S extends boolean | null | undefined | ListaProductosDefaultArgs> = $Result.GetResult<Prisma.$ListaProductosPayload, S>

  type ListaProductosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListaProductosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListaProductosCountAggregateInputType | true
    }

  export interface ListaProductosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListaProductos'], meta: { name: 'ListaProductos' } }
    /**
     * Find zero or one ListaProductos that matches the filter.
     * @param {ListaProductosFindUniqueArgs} args - Arguments to find a ListaProductos
     * @example
     * // Get one ListaProductos
     * const listaProductos = await prisma.listaProductos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListaProductosFindUniqueArgs>(args: SelectSubset<T, ListaProductosFindUniqueArgs<ExtArgs>>): Prisma__ListaProductosClient<$Result.GetResult<Prisma.$ListaProductosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListaProductos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListaProductosFindUniqueOrThrowArgs} args - Arguments to find a ListaProductos
     * @example
     * // Get one ListaProductos
     * const listaProductos = await prisma.listaProductos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListaProductosFindUniqueOrThrowArgs>(args: SelectSubset<T, ListaProductosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListaProductosClient<$Result.GetResult<Prisma.$ListaProductosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListaProductos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaProductosFindFirstArgs} args - Arguments to find a ListaProductos
     * @example
     * // Get one ListaProductos
     * const listaProductos = await prisma.listaProductos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListaProductosFindFirstArgs>(args?: SelectSubset<T, ListaProductosFindFirstArgs<ExtArgs>>): Prisma__ListaProductosClient<$Result.GetResult<Prisma.$ListaProductosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListaProductos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaProductosFindFirstOrThrowArgs} args - Arguments to find a ListaProductos
     * @example
     * // Get one ListaProductos
     * const listaProductos = await prisma.listaProductos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListaProductosFindFirstOrThrowArgs>(args?: SelectSubset<T, ListaProductosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListaProductosClient<$Result.GetResult<Prisma.$ListaProductosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListaProductos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaProductosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListaProductos
     * const listaProductos = await prisma.listaProductos.findMany()
     * 
     * // Get first 10 ListaProductos
     * const listaProductos = await prisma.listaProductos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listaProductosWithIdOnly = await prisma.listaProductos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListaProductosFindManyArgs>(args?: SelectSubset<T, ListaProductosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaProductosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListaProductos.
     * @param {ListaProductosCreateArgs} args - Arguments to create a ListaProductos.
     * @example
     * // Create one ListaProductos
     * const ListaProductos = await prisma.listaProductos.create({
     *   data: {
     *     // ... data to create a ListaProductos
     *   }
     * })
     * 
     */
    create<T extends ListaProductosCreateArgs>(args: SelectSubset<T, ListaProductosCreateArgs<ExtArgs>>): Prisma__ListaProductosClient<$Result.GetResult<Prisma.$ListaProductosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListaProductos.
     * @param {ListaProductosCreateManyArgs} args - Arguments to create many ListaProductos.
     * @example
     * // Create many ListaProductos
     * const listaProductos = await prisma.listaProductos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListaProductosCreateManyArgs>(args?: SelectSubset<T, ListaProductosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListaProductos and returns the data saved in the database.
     * @param {ListaProductosCreateManyAndReturnArgs} args - Arguments to create many ListaProductos.
     * @example
     * // Create many ListaProductos
     * const listaProductos = await prisma.listaProductos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListaProductos and only return the `id`
     * const listaProductosWithIdOnly = await prisma.listaProductos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListaProductosCreateManyAndReturnArgs>(args?: SelectSubset<T, ListaProductosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaProductosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListaProductos.
     * @param {ListaProductosDeleteArgs} args - Arguments to delete one ListaProductos.
     * @example
     * // Delete one ListaProductos
     * const ListaProductos = await prisma.listaProductos.delete({
     *   where: {
     *     // ... filter to delete one ListaProductos
     *   }
     * })
     * 
     */
    delete<T extends ListaProductosDeleteArgs>(args: SelectSubset<T, ListaProductosDeleteArgs<ExtArgs>>): Prisma__ListaProductosClient<$Result.GetResult<Prisma.$ListaProductosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListaProductos.
     * @param {ListaProductosUpdateArgs} args - Arguments to update one ListaProductos.
     * @example
     * // Update one ListaProductos
     * const listaProductos = await prisma.listaProductos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListaProductosUpdateArgs>(args: SelectSubset<T, ListaProductosUpdateArgs<ExtArgs>>): Prisma__ListaProductosClient<$Result.GetResult<Prisma.$ListaProductosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListaProductos.
     * @param {ListaProductosDeleteManyArgs} args - Arguments to filter ListaProductos to delete.
     * @example
     * // Delete a few ListaProductos
     * const { count } = await prisma.listaProductos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListaProductosDeleteManyArgs>(args?: SelectSubset<T, ListaProductosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListaProductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaProductosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListaProductos
     * const listaProductos = await prisma.listaProductos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListaProductosUpdateManyArgs>(args: SelectSubset<T, ListaProductosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListaProductos and returns the data updated in the database.
     * @param {ListaProductosUpdateManyAndReturnArgs} args - Arguments to update many ListaProductos.
     * @example
     * // Update many ListaProductos
     * const listaProductos = await prisma.listaProductos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListaProductos and only return the `id`
     * const listaProductosWithIdOnly = await prisma.listaProductos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListaProductosUpdateManyAndReturnArgs>(args: SelectSubset<T, ListaProductosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaProductosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListaProductos.
     * @param {ListaProductosUpsertArgs} args - Arguments to update or create a ListaProductos.
     * @example
     * // Update or create a ListaProductos
     * const listaProductos = await prisma.listaProductos.upsert({
     *   create: {
     *     // ... data to create a ListaProductos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListaProductos we want to update
     *   }
     * })
     */
    upsert<T extends ListaProductosUpsertArgs>(args: SelectSubset<T, ListaProductosUpsertArgs<ExtArgs>>): Prisma__ListaProductosClient<$Result.GetResult<Prisma.$ListaProductosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListaProductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaProductosCountArgs} args - Arguments to filter ListaProductos to count.
     * @example
     * // Count the number of ListaProductos
     * const count = await prisma.listaProductos.count({
     *   where: {
     *     // ... the filter for the ListaProductos we want to count
     *   }
     * })
    **/
    count<T extends ListaProductosCountArgs>(
      args?: Subset<T, ListaProductosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListaProductosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListaProductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaProductosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListaProductosAggregateArgs>(args: Subset<T, ListaProductosAggregateArgs>): Prisma.PrismaPromise<GetListaProductosAggregateType<T>>

    /**
     * Group by ListaProductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaProductosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListaProductosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListaProductosGroupByArgs['orderBy'] }
        : { orderBy?: ListaProductosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListaProductosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListaProductosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListaProductos model
   */
  readonly fields: ListaProductosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListaProductos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListaProductosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venta<T extends VentaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VentaDefaultArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ListaProductos model
   */
  interface ListaProductosFieldRefs {
    readonly id: FieldRef<"ListaProductos", 'String'>
    readonly ventaId: FieldRef<"ListaProductos", 'String'>
    readonly presentacion: FieldRef<"ListaProductos", 'String'>
    readonly productoId: FieldRef<"ListaProductos", 'String'>
    readonly nombreProducto: FieldRef<"ListaProductos", 'String'>
    readonly subGanancia: FieldRef<"ListaProductos", 'Float'>
    readonly cantidad: FieldRef<"ListaProductos", 'Int'>
    readonly subtotal: FieldRef<"ListaProductos", 'Float'>
    readonly fechaDeVencimiento: FieldRef<"ListaProductos", 'DateTime'>
    readonly loteId: FieldRef<"ListaProductos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ListaProductos findUnique
   */
  export type ListaProductosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaProductos
     */
    select?: ListaProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaProductos
     */
    omit?: ListaProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaProductosInclude<ExtArgs> | null
    /**
     * Filter, which ListaProductos to fetch.
     */
    where: ListaProductosWhereUniqueInput
  }

  /**
   * ListaProductos findUniqueOrThrow
   */
  export type ListaProductosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaProductos
     */
    select?: ListaProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaProductos
     */
    omit?: ListaProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaProductosInclude<ExtArgs> | null
    /**
     * Filter, which ListaProductos to fetch.
     */
    where: ListaProductosWhereUniqueInput
  }

  /**
   * ListaProductos findFirst
   */
  export type ListaProductosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaProductos
     */
    select?: ListaProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaProductos
     */
    omit?: ListaProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaProductosInclude<ExtArgs> | null
    /**
     * Filter, which ListaProductos to fetch.
     */
    where?: ListaProductosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaProductos to fetch.
     */
    orderBy?: ListaProductosOrderByWithRelationInput | ListaProductosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaProductos.
     */
    cursor?: ListaProductosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaProductos.
     */
    distinct?: ListaProductosScalarFieldEnum | ListaProductosScalarFieldEnum[]
  }

  /**
   * ListaProductos findFirstOrThrow
   */
  export type ListaProductosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaProductos
     */
    select?: ListaProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaProductos
     */
    omit?: ListaProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaProductosInclude<ExtArgs> | null
    /**
     * Filter, which ListaProductos to fetch.
     */
    where?: ListaProductosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaProductos to fetch.
     */
    orderBy?: ListaProductosOrderByWithRelationInput | ListaProductosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaProductos.
     */
    cursor?: ListaProductosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaProductos.
     */
    distinct?: ListaProductosScalarFieldEnum | ListaProductosScalarFieldEnum[]
  }

  /**
   * ListaProductos findMany
   */
  export type ListaProductosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaProductos
     */
    select?: ListaProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaProductos
     */
    omit?: ListaProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaProductosInclude<ExtArgs> | null
    /**
     * Filter, which ListaProductos to fetch.
     */
    where?: ListaProductosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaProductos to fetch.
     */
    orderBy?: ListaProductosOrderByWithRelationInput | ListaProductosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListaProductos.
     */
    cursor?: ListaProductosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaProductos.
     */
    skip?: number
    distinct?: ListaProductosScalarFieldEnum | ListaProductosScalarFieldEnum[]
  }

  /**
   * ListaProductos create
   */
  export type ListaProductosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaProductos
     */
    select?: ListaProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaProductos
     */
    omit?: ListaProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaProductosInclude<ExtArgs> | null
    /**
     * The data needed to create a ListaProductos.
     */
    data: XOR<ListaProductosCreateInput, ListaProductosUncheckedCreateInput>
  }

  /**
   * ListaProductos createMany
   */
  export type ListaProductosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListaProductos.
     */
    data: ListaProductosCreateManyInput | ListaProductosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListaProductos createManyAndReturn
   */
  export type ListaProductosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaProductos
     */
    select?: ListaProductosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListaProductos
     */
    omit?: ListaProductosOmit<ExtArgs> | null
    /**
     * The data used to create many ListaProductos.
     */
    data: ListaProductosCreateManyInput | ListaProductosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaProductosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListaProductos update
   */
  export type ListaProductosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaProductos
     */
    select?: ListaProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaProductos
     */
    omit?: ListaProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaProductosInclude<ExtArgs> | null
    /**
     * The data needed to update a ListaProductos.
     */
    data: XOR<ListaProductosUpdateInput, ListaProductosUncheckedUpdateInput>
    /**
     * Choose, which ListaProductos to update.
     */
    where: ListaProductosWhereUniqueInput
  }

  /**
   * ListaProductos updateMany
   */
  export type ListaProductosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListaProductos.
     */
    data: XOR<ListaProductosUpdateManyMutationInput, ListaProductosUncheckedUpdateManyInput>
    /**
     * Filter which ListaProductos to update
     */
    where?: ListaProductosWhereInput
    /**
     * Limit how many ListaProductos to update.
     */
    limit?: number
  }

  /**
   * ListaProductos updateManyAndReturn
   */
  export type ListaProductosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaProductos
     */
    select?: ListaProductosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListaProductos
     */
    omit?: ListaProductosOmit<ExtArgs> | null
    /**
     * The data used to update ListaProductos.
     */
    data: XOR<ListaProductosUpdateManyMutationInput, ListaProductosUncheckedUpdateManyInput>
    /**
     * Filter which ListaProductos to update
     */
    where?: ListaProductosWhereInput
    /**
     * Limit how many ListaProductos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaProductosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListaProductos upsert
   */
  export type ListaProductosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaProductos
     */
    select?: ListaProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaProductos
     */
    omit?: ListaProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaProductosInclude<ExtArgs> | null
    /**
     * The filter to search for the ListaProductos to update in case it exists.
     */
    where: ListaProductosWhereUniqueInput
    /**
     * In case the ListaProductos found by the `where` argument doesn't exist, create a new ListaProductos with this data.
     */
    create: XOR<ListaProductosCreateInput, ListaProductosUncheckedCreateInput>
    /**
     * In case the ListaProductos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListaProductosUpdateInput, ListaProductosUncheckedUpdateInput>
  }

  /**
   * ListaProductos delete
   */
  export type ListaProductosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaProductos
     */
    select?: ListaProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaProductos
     */
    omit?: ListaProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaProductosInclude<ExtArgs> | null
    /**
     * Filter which ListaProductos to delete.
     */
    where: ListaProductosWhereUniqueInput
  }

  /**
   * ListaProductos deleteMany
   */
  export type ListaProductosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListaProductos to delete
     */
    where?: ListaProductosWhereInput
    /**
     * Limit how many ListaProductos to delete.
     */
    limit?: number
  }

  /**
   * ListaProductos without action
   */
  export type ListaProductosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaProductos
     */
    select?: ListaProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaProductos
     */
    omit?: ListaProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaProductosInclude<ExtArgs> | null
  }


  /**
   * Model DetalleDeCompras
   */

  export type AggregateDetalleDeCompras = {
    _count: DetalleDeComprasCountAggregateOutputType | null
    _avg: DetalleDeComprasAvgAggregateOutputType | null
    _sum: DetalleDeComprasSumAggregateOutputType | null
    _min: DetalleDeComprasMinAggregateOutputType | null
    _max: DetalleDeComprasMaxAggregateOutputType | null
  }

  export type DetalleDeComprasAvgAggregateOutputType = {
    stockTotal: number | null
    stockPorCaja: number | null
    stockPorBlister: number | null
    precioCosto: number | null
    cantidad: number | null
  }

  export type DetalleDeComprasSumAggregateOutputType = {
    stockTotal: number | null
    stockPorCaja: number | null
    stockPorBlister: number | null
    precioCosto: number | null
    cantidad: number | null
  }

  export type DetalleDeComprasMinAggregateOutputType = {
    id: string | null
    compraId: string | null
    productoId: string | null
    stockTotal: number | null
    stockPorCaja: number | null
    stockPorBlister: number | null
    precioCosto: number | null
    fecha: Date | null
    fechaDeVencimiento: Date | null
    origen: string | null
    nombreProducto: string | null
    cantidad: number | null
  }

  export type DetalleDeComprasMaxAggregateOutputType = {
    id: string | null
    compraId: string | null
    productoId: string | null
    stockTotal: number | null
    stockPorCaja: number | null
    stockPorBlister: number | null
    precioCosto: number | null
    fecha: Date | null
    fechaDeVencimiento: Date | null
    origen: string | null
    nombreProducto: string | null
    cantidad: number | null
  }

  export type DetalleDeComprasCountAggregateOutputType = {
    id: number
    compraId: number
    productoId: number
    stockTotal: number
    stockPorCaja: number
    stockPorBlister: number
    precioCosto: number
    fecha: number
    fechaDeVencimiento: number
    origen: number
    nombreProducto: number
    cantidad: number
    _all: number
  }


  export type DetalleDeComprasAvgAggregateInputType = {
    stockTotal?: true
    stockPorCaja?: true
    stockPorBlister?: true
    precioCosto?: true
    cantidad?: true
  }

  export type DetalleDeComprasSumAggregateInputType = {
    stockTotal?: true
    stockPorCaja?: true
    stockPorBlister?: true
    precioCosto?: true
    cantidad?: true
  }

  export type DetalleDeComprasMinAggregateInputType = {
    id?: true
    compraId?: true
    productoId?: true
    stockTotal?: true
    stockPorCaja?: true
    stockPorBlister?: true
    precioCosto?: true
    fecha?: true
    fechaDeVencimiento?: true
    origen?: true
    nombreProducto?: true
    cantidad?: true
  }

  export type DetalleDeComprasMaxAggregateInputType = {
    id?: true
    compraId?: true
    productoId?: true
    stockTotal?: true
    stockPorCaja?: true
    stockPorBlister?: true
    precioCosto?: true
    fecha?: true
    fechaDeVencimiento?: true
    origen?: true
    nombreProducto?: true
    cantidad?: true
  }

  export type DetalleDeComprasCountAggregateInputType = {
    id?: true
    compraId?: true
    productoId?: true
    stockTotal?: true
    stockPorCaja?: true
    stockPorBlister?: true
    precioCosto?: true
    fecha?: true
    fechaDeVencimiento?: true
    origen?: true
    nombreProducto?: true
    cantidad?: true
    _all?: true
  }

  export type DetalleDeComprasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleDeCompras to aggregate.
     */
    where?: DetalleDeComprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleDeCompras to fetch.
     */
    orderBy?: DetalleDeComprasOrderByWithRelationInput | DetalleDeComprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetalleDeComprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleDeCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleDeCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetalleDeCompras
    **/
    _count?: true | DetalleDeComprasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetalleDeComprasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetalleDeComprasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetalleDeComprasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetalleDeComprasMaxAggregateInputType
  }

  export type GetDetalleDeComprasAggregateType<T extends DetalleDeComprasAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalleDeCompras]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalleDeCompras[P]>
      : GetScalarType<T[P], AggregateDetalleDeCompras[P]>
  }




  export type DetalleDeComprasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleDeComprasWhereInput
    orderBy?: DetalleDeComprasOrderByWithAggregationInput | DetalleDeComprasOrderByWithAggregationInput[]
    by: DetalleDeComprasScalarFieldEnum[] | DetalleDeComprasScalarFieldEnum
    having?: DetalleDeComprasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetalleDeComprasCountAggregateInputType | true
    _avg?: DetalleDeComprasAvgAggregateInputType
    _sum?: DetalleDeComprasSumAggregateInputType
    _min?: DetalleDeComprasMinAggregateInputType
    _max?: DetalleDeComprasMaxAggregateInputType
  }

  export type DetalleDeComprasGroupByOutputType = {
    id: string
    compraId: string
    productoId: string
    stockTotal: number
    stockPorCaja: number
    stockPorBlister: number
    precioCosto: number
    fecha: Date
    fechaDeVencimiento: Date
    origen: string
    nombreProducto: string
    cantidad: number
    _count: DetalleDeComprasCountAggregateOutputType | null
    _avg: DetalleDeComprasAvgAggregateOutputType | null
    _sum: DetalleDeComprasSumAggregateOutputType | null
    _min: DetalleDeComprasMinAggregateOutputType | null
    _max: DetalleDeComprasMaxAggregateOutputType | null
  }

  type GetDetalleDeComprasGroupByPayload<T extends DetalleDeComprasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetalleDeComprasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetalleDeComprasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetalleDeComprasGroupByOutputType[P]>
            : GetScalarType<T[P], DetalleDeComprasGroupByOutputType[P]>
        }
      >
    >


  export type DetalleDeComprasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    compraId?: boolean
    productoId?: boolean
    stockTotal?: boolean
    stockPorCaja?: boolean
    stockPorBlister?: boolean
    precioCosto?: boolean
    fecha?: boolean
    fechaDeVencimiento?: boolean
    origen?: boolean
    nombreProducto?: boolean
    cantidad?: boolean
    compra?: boolean | CompraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleDeCompras"]>

  export type DetalleDeComprasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    compraId?: boolean
    productoId?: boolean
    stockTotal?: boolean
    stockPorCaja?: boolean
    stockPorBlister?: boolean
    precioCosto?: boolean
    fecha?: boolean
    fechaDeVencimiento?: boolean
    origen?: boolean
    nombreProducto?: boolean
    cantidad?: boolean
    compra?: boolean | CompraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleDeCompras"]>

  export type DetalleDeComprasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    compraId?: boolean
    productoId?: boolean
    stockTotal?: boolean
    stockPorCaja?: boolean
    stockPorBlister?: boolean
    precioCosto?: boolean
    fecha?: boolean
    fechaDeVencimiento?: boolean
    origen?: boolean
    nombreProducto?: boolean
    cantidad?: boolean
    compra?: boolean | CompraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleDeCompras"]>

  export type DetalleDeComprasSelectScalar = {
    id?: boolean
    compraId?: boolean
    productoId?: boolean
    stockTotal?: boolean
    stockPorCaja?: boolean
    stockPorBlister?: boolean
    precioCosto?: boolean
    fecha?: boolean
    fechaDeVencimiento?: boolean
    origen?: boolean
    nombreProducto?: boolean
    cantidad?: boolean
  }

  export type DetalleDeComprasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "compraId" | "productoId" | "stockTotal" | "stockPorCaja" | "stockPorBlister" | "precioCosto" | "fecha" | "fechaDeVencimiento" | "origen" | "nombreProducto" | "cantidad", ExtArgs["result"]["detalleDeCompras"]>
  export type DetalleDeComprasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compra?: boolean | CompraDefaultArgs<ExtArgs>
  }
  export type DetalleDeComprasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compra?: boolean | CompraDefaultArgs<ExtArgs>
  }
  export type DetalleDeComprasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compra?: boolean | CompraDefaultArgs<ExtArgs>
  }

  export type $DetalleDeComprasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetalleDeCompras"
    objects: {
      compra: Prisma.$CompraPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      compraId: string
      productoId: string
      stockTotal: number
      stockPorCaja: number
      stockPorBlister: number
      precioCosto: number
      fecha: Date
      fechaDeVencimiento: Date
      origen: string
      nombreProducto: string
      cantidad: number
    }, ExtArgs["result"]["detalleDeCompras"]>
    composites: {}
  }

  type DetalleDeComprasGetPayload<S extends boolean | null | undefined | DetalleDeComprasDefaultArgs> = $Result.GetResult<Prisma.$DetalleDeComprasPayload, S>

  type DetalleDeComprasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetalleDeComprasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetalleDeComprasCountAggregateInputType | true
    }

  export interface DetalleDeComprasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetalleDeCompras'], meta: { name: 'DetalleDeCompras' } }
    /**
     * Find zero or one DetalleDeCompras that matches the filter.
     * @param {DetalleDeComprasFindUniqueArgs} args - Arguments to find a DetalleDeCompras
     * @example
     * // Get one DetalleDeCompras
     * const detalleDeCompras = await prisma.detalleDeCompras.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetalleDeComprasFindUniqueArgs>(args: SelectSubset<T, DetalleDeComprasFindUniqueArgs<ExtArgs>>): Prisma__DetalleDeComprasClient<$Result.GetResult<Prisma.$DetalleDeComprasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetalleDeCompras that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetalleDeComprasFindUniqueOrThrowArgs} args - Arguments to find a DetalleDeCompras
     * @example
     * // Get one DetalleDeCompras
     * const detalleDeCompras = await prisma.detalleDeCompras.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetalleDeComprasFindUniqueOrThrowArgs>(args: SelectSubset<T, DetalleDeComprasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetalleDeComprasClient<$Result.GetResult<Prisma.$DetalleDeComprasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleDeCompras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleDeComprasFindFirstArgs} args - Arguments to find a DetalleDeCompras
     * @example
     * // Get one DetalleDeCompras
     * const detalleDeCompras = await prisma.detalleDeCompras.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetalleDeComprasFindFirstArgs>(args?: SelectSubset<T, DetalleDeComprasFindFirstArgs<ExtArgs>>): Prisma__DetalleDeComprasClient<$Result.GetResult<Prisma.$DetalleDeComprasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleDeCompras that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleDeComprasFindFirstOrThrowArgs} args - Arguments to find a DetalleDeCompras
     * @example
     * // Get one DetalleDeCompras
     * const detalleDeCompras = await prisma.detalleDeCompras.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetalleDeComprasFindFirstOrThrowArgs>(args?: SelectSubset<T, DetalleDeComprasFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetalleDeComprasClient<$Result.GetResult<Prisma.$DetalleDeComprasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetalleDeCompras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleDeComprasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetalleDeCompras
     * const detalleDeCompras = await prisma.detalleDeCompras.findMany()
     * 
     * // Get first 10 DetalleDeCompras
     * const detalleDeCompras = await prisma.detalleDeCompras.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalleDeComprasWithIdOnly = await prisma.detalleDeCompras.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetalleDeComprasFindManyArgs>(args?: SelectSubset<T, DetalleDeComprasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleDeComprasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetalleDeCompras.
     * @param {DetalleDeComprasCreateArgs} args - Arguments to create a DetalleDeCompras.
     * @example
     * // Create one DetalleDeCompras
     * const DetalleDeCompras = await prisma.detalleDeCompras.create({
     *   data: {
     *     // ... data to create a DetalleDeCompras
     *   }
     * })
     * 
     */
    create<T extends DetalleDeComprasCreateArgs>(args: SelectSubset<T, DetalleDeComprasCreateArgs<ExtArgs>>): Prisma__DetalleDeComprasClient<$Result.GetResult<Prisma.$DetalleDeComprasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetalleDeCompras.
     * @param {DetalleDeComprasCreateManyArgs} args - Arguments to create many DetalleDeCompras.
     * @example
     * // Create many DetalleDeCompras
     * const detalleDeCompras = await prisma.detalleDeCompras.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetalleDeComprasCreateManyArgs>(args?: SelectSubset<T, DetalleDeComprasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetalleDeCompras and returns the data saved in the database.
     * @param {DetalleDeComprasCreateManyAndReturnArgs} args - Arguments to create many DetalleDeCompras.
     * @example
     * // Create many DetalleDeCompras
     * const detalleDeCompras = await prisma.detalleDeCompras.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DetalleDeCompras and only return the `id`
     * const detalleDeComprasWithIdOnly = await prisma.detalleDeCompras.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetalleDeComprasCreateManyAndReturnArgs>(args?: SelectSubset<T, DetalleDeComprasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleDeComprasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DetalleDeCompras.
     * @param {DetalleDeComprasDeleteArgs} args - Arguments to delete one DetalleDeCompras.
     * @example
     * // Delete one DetalleDeCompras
     * const DetalleDeCompras = await prisma.detalleDeCompras.delete({
     *   where: {
     *     // ... filter to delete one DetalleDeCompras
     *   }
     * })
     * 
     */
    delete<T extends DetalleDeComprasDeleteArgs>(args: SelectSubset<T, DetalleDeComprasDeleteArgs<ExtArgs>>): Prisma__DetalleDeComprasClient<$Result.GetResult<Prisma.$DetalleDeComprasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetalleDeCompras.
     * @param {DetalleDeComprasUpdateArgs} args - Arguments to update one DetalleDeCompras.
     * @example
     * // Update one DetalleDeCompras
     * const detalleDeCompras = await prisma.detalleDeCompras.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetalleDeComprasUpdateArgs>(args: SelectSubset<T, DetalleDeComprasUpdateArgs<ExtArgs>>): Prisma__DetalleDeComprasClient<$Result.GetResult<Prisma.$DetalleDeComprasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetalleDeCompras.
     * @param {DetalleDeComprasDeleteManyArgs} args - Arguments to filter DetalleDeCompras to delete.
     * @example
     * // Delete a few DetalleDeCompras
     * const { count } = await prisma.detalleDeCompras.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetalleDeComprasDeleteManyArgs>(args?: SelectSubset<T, DetalleDeComprasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleDeCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleDeComprasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetalleDeCompras
     * const detalleDeCompras = await prisma.detalleDeCompras.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetalleDeComprasUpdateManyArgs>(args: SelectSubset<T, DetalleDeComprasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleDeCompras and returns the data updated in the database.
     * @param {DetalleDeComprasUpdateManyAndReturnArgs} args - Arguments to update many DetalleDeCompras.
     * @example
     * // Update many DetalleDeCompras
     * const detalleDeCompras = await prisma.detalleDeCompras.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DetalleDeCompras and only return the `id`
     * const detalleDeComprasWithIdOnly = await prisma.detalleDeCompras.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DetalleDeComprasUpdateManyAndReturnArgs>(args: SelectSubset<T, DetalleDeComprasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleDeComprasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DetalleDeCompras.
     * @param {DetalleDeComprasUpsertArgs} args - Arguments to update or create a DetalleDeCompras.
     * @example
     * // Update or create a DetalleDeCompras
     * const detalleDeCompras = await prisma.detalleDeCompras.upsert({
     *   create: {
     *     // ... data to create a DetalleDeCompras
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetalleDeCompras we want to update
     *   }
     * })
     */
    upsert<T extends DetalleDeComprasUpsertArgs>(args: SelectSubset<T, DetalleDeComprasUpsertArgs<ExtArgs>>): Prisma__DetalleDeComprasClient<$Result.GetResult<Prisma.$DetalleDeComprasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetalleDeCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleDeComprasCountArgs} args - Arguments to filter DetalleDeCompras to count.
     * @example
     * // Count the number of DetalleDeCompras
     * const count = await prisma.detalleDeCompras.count({
     *   where: {
     *     // ... the filter for the DetalleDeCompras we want to count
     *   }
     * })
    **/
    count<T extends DetalleDeComprasCountArgs>(
      args?: Subset<T, DetalleDeComprasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetalleDeComprasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetalleDeCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleDeComprasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetalleDeComprasAggregateArgs>(args: Subset<T, DetalleDeComprasAggregateArgs>): Prisma.PrismaPromise<GetDetalleDeComprasAggregateType<T>>

    /**
     * Group by DetalleDeCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleDeComprasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetalleDeComprasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetalleDeComprasGroupByArgs['orderBy'] }
        : { orderBy?: DetalleDeComprasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetalleDeComprasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleDeComprasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetalleDeCompras model
   */
  readonly fields: DetalleDeComprasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetalleDeCompras.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetalleDeComprasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    compra<T extends CompraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompraDefaultArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DetalleDeCompras model
   */
  interface DetalleDeComprasFieldRefs {
    readonly id: FieldRef<"DetalleDeCompras", 'String'>
    readonly compraId: FieldRef<"DetalleDeCompras", 'String'>
    readonly productoId: FieldRef<"DetalleDeCompras", 'String'>
    readonly stockTotal: FieldRef<"DetalleDeCompras", 'Int'>
    readonly stockPorCaja: FieldRef<"DetalleDeCompras", 'Int'>
    readonly stockPorBlister: FieldRef<"DetalleDeCompras", 'Int'>
    readonly precioCosto: FieldRef<"DetalleDeCompras", 'Float'>
    readonly fecha: FieldRef<"DetalleDeCompras", 'DateTime'>
    readonly fechaDeVencimiento: FieldRef<"DetalleDeCompras", 'DateTime'>
    readonly origen: FieldRef<"DetalleDeCompras", 'String'>
    readonly nombreProducto: FieldRef<"DetalleDeCompras", 'String'>
    readonly cantidad: FieldRef<"DetalleDeCompras", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DetalleDeCompras findUnique
   */
  export type DetalleDeComprasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleDeCompras
     */
    select?: DetalleDeComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleDeCompras
     */
    omit?: DetalleDeComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleDeComprasInclude<ExtArgs> | null
    /**
     * Filter, which DetalleDeCompras to fetch.
     */
    where: DetalleDeComprasWhereUniqueInput
  }

  /**
   * DetalleDeCompras findUniqueOrThrow
   */
  export type DetalleDeComprasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleDeCompras
     */
    select?: DetalleDeComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleDeCompras
     */
    omit?: DetalleDeComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleDeComprasInclude<ExtArgs> | null
    /**
     * Filter, which DetalleDeCompras to fetch.
     */
    where: DetalleDeComprasWhereUniqueInput
  }

  /**
   * DetalleDeCompras findFirst
   */
  export type DetalleDeComprasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleDeCompras
     */
    select?: DetalleDeComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleDeCompras
     */
    omit?: DetalleDeComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleDeComprasInclude<ExtArgs> | null
    /**
     * Filter, which DetalleDeCompras to fetch.
     */
    where?: DetalleDeComprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleDeCompras to fetch.
     */
    orderBy?: DetalleDeComprasOrderByWithRelationInput | DetalleDeComprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleDeCompras.
     */
    cursor?: DetalleDeComprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleDeCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleDeCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleDeCompras.
     */
    distinct?: DetalleDeComprasScalarFieldEnum | DetalleDeComprasScalarFieldEnum[]
  }

  /**
   * DetalleDeCompras findFirstOrThrow
   */
  export type DetalleDeComprasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleDeCompras
     */
    select?: DetalleDeComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleDeCompras
     */
    omit?: DetalleDeComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleDeComprasInclude<ExtArgs> | null
    /**
     * Filter, which DetalleDeCompras to fetch.
     */
    where?: DetalleDeComprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleDeCompras to fetch.
     */
    orderBy?: DetalleDeComprasOrderByWithRelationInput | DetalleDeComprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleDeCompras.
     */
    cursor?: DetalleDeComprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleDeCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleDeCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleDeCompras.
     */
    distinct?: DetalleDeComprasScalarFieldEnum | DetalleDeComprasScalarFieldEnum[]
  }

  /**
   * DetalleDeCompras findMany
   */
  export type DetalleDeComprasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleDeCompras
     */
    select?: DetalleDeComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleDeCompras
     */
    omit?: DetalleDeComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleDeComprasInclude<ExtArgs> | null
    /**
     * Filter, which DetalleDeCompras to fetch.
     */
    where?: DetalleDeComprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleDeCompras to fetch.
     */
    orderBy?: DetalleDeComprasOrderByWithRelationInput | DetalleDeComprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetalleDeCompras.
     */
    cursor?: DetalleDeComprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleDeCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleDeCompras.
     */
    skip?: number
    distinct?: DetalleDeComprasScalarFieldEnum | DetalleDeComprasScalarFieldEnum[]
  }

  /**
   * DetalleDeCompras create
   */
  export type DetalleDeComprasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleDeCompras
     */
    select?: DetalleDeComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleDeCompras
     */
    omit?: DetalleDeComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleDeComprasInclude<ExtArgs> | null
    /**
     * The data needed to create a DetalleDeCompras.
     */
    data: XOR<DetalleDeComprasCreateInput, DetalleDeComprasUncheckedCreateInput>
  }

  /**
   * DetalleDeCompras createMany
   */
  export type DetalleDeComprasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetalleDeCompras.
     */
    data: DetalleDeComprasCreateManyInput | DetalleDeComprasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetalleDeCompras createManyAndReturn
   */
  export type DetalleDeComprasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleDeCompras
     */
    select?: DetalleDeComprasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleDeCompras
     */
    omit?: DetalleDeComprasOmit<ExtArgs> | null
    /**
     * The data used to create many DetalleDeCompras.
     */
    data: DetalleDeComprasCreateManyInput | DetalleDeComprasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleDeComprasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetalleDeCompras update
   */
  export type DetalleDeComprasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleDeCompras
     */
    select?: DetalleDeComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleDeCompras
     */
    omit?: DetalleDeComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleDeComprasInclude<ExtArgs> | null
    /**
     * The data needed to update a DetalleDeCompras.
     */
    data: XOR<DetalleDeComprasUpdateInput, DetalleDeComprasUncheckedUpdateInput>
    /**
     * Choose, which DetalleDeCompras to update.
     */
    where: DetalleDeComprasWhereUniqueInput
  }

  /**
   * DetalleDeCompras updateMany
   */
  export type DetalleDeComprasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetalleDeCompras.
     */
    data: XOR<DetalleDeComprasUpdateManyMutationInput, DetalleDeComprasUncheckedUpdateManyInput>
    /**
     * Filter which DetalleDeCompras to update
     */
    where?: DetalleDeComprasWhereInput
    /**
     * Limit how many DetalleDeCompras to update.
     */
    limit?: number
  }

  /**
   * DetalleDeCompras updateManyAndReturn
   */
  export type DetalleDeComprasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleDeCompras
     */
    select?: DetalleDeComprasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleDeCompras
     */
    omit?: DetalleDeComprasOmit<ExtArgs> | null
    /**
     * The data used to update DetalleDeCompras.
     */
    data: XOR<DetalleDeComprasUpdateManyMutationInput, DetalleDeComprasUncheckedUpdateManyInput>
    /**
     * Filter which DetalleDeCompras to update
     */
    where?: DetalleDeComprasWhereInput
    /**
     * Limit how many DetalleDeCompras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleDeComprasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetalleDeCompras upsert
   */
  export type DetalleDeComprasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleDeCompras
     */
    select?: DetalleDeComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleDeCompras
     */
    omit?: DetalleDeComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleDeComprasInclude<ExtArgs> | null
    /**
     * The filter to search for the DetalleDeCompras to update in case it exists.
     */
    where: DetalleDeComprasWhereUniqueInput
    /**
     * In case the DetalleDeCompras found by the `where` argument doesn't exist, create a new DetalleDeCompras with this data.
     */
    create: XOR<DetalleDeComprasCreateInput, DetalleDeComprasUncheckedCreateInput>
    /**
     * In case the DetalleDeCompras was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetalleDeComprasUpdateInput, DetalleDeComprasUncheckedUpdateInput>
  }

  /**
   * DetalleDeCompras delete
   */
  export type DetalleDeComprasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleDeCompras
     */
    select?: DetalleDeComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleDeCompras
     */
    omit?: DetalleDeComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleDeComprasInclude<ExtArgs> | null
    /**
     * Filter which DetalleDeCompras to delete.
     */
    where: DetalleDeComprasWhereUniqueInput
  }

  /**
   * DetalleDeCompras deleteMany
   */
  export type DetalleDeComprasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleDeCompras to delete
     */
    where?: DetalleDeComprasWhereInput
    /**
     * Limit how many DetalleDeCompras to delete.
     */
    limit?: number
  }

  /**
   * DetalleDeCompras without action
   */
  export type DetalleDeComprasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleDeCompras
     */
    select?: DetalleDeComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleDeCompras
     */
    omit?: DetalleDeComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleDeComprasInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    password: 'password',
    permisos: 'permisos',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProveedorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    encargado: 'encargado',
    telefono: 'telefono',
    Departamento: 'Departamento',
    Municipio: 'Municipio',
    correlativo: 'correlativo',
    direccion: 'direccion',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type ProveedorScalarFieldEnum = (typeof ProveedorScalarFieldEnum)[keyof typeof ProveedorScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    encargado: 'encargado',
    telefono: 'telefono',
    Departamento: 'Departamento',
    Municipio: 'Municipio',
    correlativo: 'correlativo',
    direccion: 'direccion',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const CasasScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    productoId: 'productoId'
  };

  export type CasasScalarFieldEnum = (typeof CasasScalarFieldEnum)[keyof typeof CasasScalarFieldEnum]


  export const CodigoDeBarrasScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    codigoBarras: 'codigoBarras',
    productoId: 'productoId'
  };

  export type CodigoDeBarrasScalarFieldEnum = (typeof CodigoDeBarrasScalarFieldEnum)[keyof typeof CodigoDeBarrasScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    codigoBarras: 'codigoBarras',
    presentacion: 'presentacion',
    generico: 'generico',
    gramaje: 'gramaje',
    costo: 'costo',
    precioVenta: 'precioVenta',
    alertaStock: 'alertaStock',
    casa: 'casa',
    cantUnidad: 'cantUnidad',
    cantCaja: 'cantCaja',
    cantBlister: 'cantBlister',
    precioUnitario: 'precioUnitario',
    precioBlister: 'precioBlister',
    precioCaja: 'precioCaja',
    costoCompraUnitario: 'costoCompraUnitario',
    costoCompraBlister: 'costoCompraBlister',
    costoCompraCaja: 'costoCompraCaja',
    createdAt: 'createdAt'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const LoteScalarFieldEnum: {
    id: 'id',
    origen: 'origen',
    productoId: 'productoId',
    nombre: 'nombre',
    fechaVencimiento: 'fechaVencimiento',
    stockTotal: 'stockTotal',
    stockPorCaja: 'stockPorCaja',
    stockPorBlister: 'stockPorBlister',
    createdAt: 'createdAt',
    codigoBarrasId: 'codigoBarrasId',
    compraId: 'compraId'
  };

  export type LoteScalarFieldEnum = (typeof LoteScalarFieldEnum)[keyof typeof LoteScalarFieldEnum]


  export const CompraScalarFieldEnum: {
    id: 'id',
    Proveedor: 'Proveedor',
    proveedorId: 'proveedorId',
    observaciones: 'observaciones',
    correlativo: 'correlativo',
    Comprador: 'Comprador',
    visitador: 'visitador',
    total: 'total',
    estado: 'estado',
    fecha: 'fecha'
  };

  export type CompraScalarFieldEnum = (typeof CompraScalarFieldEnum)[keyof typeof CompraScalarFieldEnum]


  export const PagosRealizadosCompraScalarFieldEnum: {
    id: 'id',
    fechaPago: 'fechaPago',
    monto: 'monto',
    proveedorId: 'proveedorId'
  };

  export type PagosRealizadosCompraScalarFieldEnum = (typeof PagosRealizadosCompraScalarFieldEnum)[keyof typeof PagosRealizadosCompraScalarFieldEnum]


  export const VentaScalarFieldEnum: {
    id: 'id',
    nombreCliente: 'nombreCliente',
    fechaDePago: 'fechaDePago',
    estado: 'estado',
    correlativo: 'correlativo',
    total: 'total',
    fecha: 'fecha',
    noVenta: 'noVenta',
    gananciaTotal: 'gananciaTotal',
    clienteId: 'clienteId'
  };

  export type VentaScalarFieldEnum = (typeof VentaScalarFieldEnum)[keyof typeof VentaScalarFieldEnum]


  export const PagosRealizadosVentasScalarFieldEnum: {
    id: 'id',
    fechaPago: 'fechaPago',
    monto: 'monto',
    clienteId: 'clienteId'
  };

  export type PagosRealizadosVentasScalarFieldEnum = (typeof PagosRealizadosVentasScalarFieldEnum)[keyof typeof PagosRealizadosVentasScalarFieldEnum]


  export const ListaProductosScalarFieldEnum: {
    id: 'id',
    ventaId: 'ventaId',
    presentacion: 'presentacion',
    productoId: 'productoId',
    nombreProducto: 'nombreProducto',
    subGanancia: 'subGanancia',
    cantidad: 'cantidad',
    subtotal: 'subtotal',
    fechaDeVencimiento: 'fechaDeVencimiento',
    loteId: 'loteId'
  };

  export type ListaProductosScalarFieldEnum = (typeof ListaProductosScalarFieldEnum)[keyof typeof ListaProductosScalarFieldEnum]


  export const DetalleDeComprasScalarFieldEnum: {
    id: 'id',
    compraId: 'compraId',
    productoId: 'productoId',
    stockTotal: 'stockTotal',
    stockPorCaja: 'stockPorCaja',
    stockPorBlister: 'stockPorBlister',
    precioCosto: 'precioCosto',
    fecha: 'fecha',
    fechaDeVencimiento: 'fechaDeVencimiento',
    origen: 'origen',
    nombreProducto: 'nombreProducto',
    cantidad: 'cantidad'
  };

  export type DetalleDeComprasScalarFieldEnum = (typeof DetalleDeComprasScalarFieldEnum)[keyof typeof DetalleDeComprasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nombre?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    permisos?: JsonFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    password?: SortOrder
    permisos?: SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nombre?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    permisos?: JsonFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    password?: SortOrder
    permisos?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nombre?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    permisos?: JsonWithAggregatesFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProveedorWhereInput = {
    AND?: ProveedorWhereInput | ProveedorWhereInput[]
    OR?: ProveedorWhereInput[]
    NOT?: ProveedorWhereInput | ProveedorWhereInput[]
    id?: StringFilter<"Proveedor"> | string
    nombre?: StringFilter<"Proveedor"> | string
    encargado?: StringFilter<"Proveedor"> | string
    telefono?: StringFilter<"Proveedor"> | string
    Departamento?: StringFilter<"Proveedor"> | string
    Municipio?: StringFilter<"Proveedor"> | string
    correlativo?: IntFilter<"Proveedor"> | number
    direccion?: StringFilter<"Proveedor"> | string
    email?: StringFilter<"Proveedor"> | string
    createdAt?: DateTimeFilter<"Proveedor"> | Date | string
    Compras?: CompraListRelationFilter
    PagosRealizadosCompra?: PagosRealizadosCompraListRelationFilter
  }

  export type ProveedorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    encargado?: SortOrder
    telefono?: SortOrder
    Departamento?: SortOrder
    Municipio?: SortOrder
    correlativo?: SortOrder
    direccion?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    Compras?: CompraOrderByRelationAggregateInput
    PagosRealizadosCompra?: PagosRealizadosCompraOrderByRelationAggregateInput
  }

  export type ProveedorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProveedorWhereInput | ProveedorWhereInput[]
    OR?: ProveedorWhereInput[]
    NOT?: ProveedorWhereInput | ProveedorWhereInput[]
    nombre?: StringFilter<"Proveedor"> | string
    encargado?: StringFilter<"Proveedor"> | string
    telefono?: StringFilter<"Proveedor"> | string
    Departamento?: StringFilter<"Proveedor"> | string
    Municipio?: StringFilter<"Proveedor"> | string
    correlativo?: IntFilter<"Proveedor"> | number
    direccion?: StringFilter<"Proveedor"> | string
    email?: StringFilter<"Proveedor"> | string
    createdAt?: DateTimeFilter<"Proveedor"> | Date | string
    Compras?: CompraListRelationFilter
    PagosRealizadosCompra?: PagosRealizadosCompraListRelationFilter
  }, "id">

  export type ProveedorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    encargado?: SortOrder
    telefono?: SortOrder
    Departamento?: SortOrder
    Municipio?: SortOrder
    correlativo?: SortOrder
    direccion?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    _count?: ProveedorCountOrderByAggregateInput
    _avg?: ProveedorAvgOrderByAggregateInput
    _max?: ProveedorMaxOrderByAggregateInput
    _min?: ProveedorMinOrderByAggregateInput
    _sum?: ProveedorSumOrderByAggregateInput
  }

  export type ProveedorScalarWhereWithAggregatesInput = {
    AND?: ProveedorScalarWhereWithAggregatesInput | ProveedorScalarWhereWithAggregatesInput[]
    OR?: ProveedorScalarWhereWithAggregatesInput[]
    NOT?: ProveedorScalarWhereWithAggregatesInput | ProveedorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Proveedor"> | string
    nombre?: StringWithAggregatesFilter<"Proveedor"> | string
    encargado?: StringWithAggregatesFilter<"Proveedor"> | string
    telefono?: StringWithAggregatesFilter<"Proveedor"> | string
    Departamento?: StringWithAggregatesFilter<"Proveedor"> | string
    Municipio?: StringWithAggregatesFilter<"Proveedor"> | string
    correlativo?: IntWithAggregatesFilter<"Proveedor"> | number
    direccion?: StringWithAggregatesFilter<"Proveedor"> | string
    email?: StringWithAggregatesFilter<"Proveedor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Proveedor"> | Date | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: StringFilter<"Cliente"> | string
    nombre?: StringFilter<"Cliente"> | string
    encargado?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    Departamento?: StringFilter<"Cliente"> | string
    Municipio?: StringFilter<"Cliente"> | string
    correlativo?: IntFilter<"Cliente"> | number
    direccion?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    ventas?: VentaListRelationFilter
    PagosRealizadosVenta?: PagosRealizadosVentasListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    encargado?: SortOrder
    telefono?: SortOrder
    Departamento?: SortOrder
    Municipio?: SortOrder
    correlativo?: SortOrder
    direccion?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    ventas?: VentaOrderByRelationAggregateInput
    PagosRealizadosVenta?: PagosRealizadosVentasOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nombre?: StringFilter<"Cliente"> | string
    encargado?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    Departamento?: StringFilter<"Cliente"> | string
    Municipio?: StringFilter<"Cliente"> | string
    correlativo?: IntFilter<"Cliente"> | number
    direccion?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    ventas?: VentaListRelationFilter
    PagosRealizadosVenta?: PagosRealizadosVentasListRelationFilter
  }, "id">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    encargado?: SortOrder
    telefono?: SortOrder
    Departamento?: SortOrder
    Municipio?: SortOrder
    correlativo?: SortOrder
    direccion?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cliente"> | string
    nombre?: StringWithAggregatesFilter<"Cliente"> | string
    encargado?: StringWithAggregatesFilter<"Cliente"> | string
    telefono?: StringWithAggregatesFilter<"Cliente"> | string
    Departamento?: StringWithAggregatesFilter<"Cliente"> | string
    Municipio?: StringWithAggregatesFilter<"Cliente"> | string
    correlativo?: IntWithAggregatesFilter<"Cliente"> | number
    direccion?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringWithAggregatesFilter<"Cliente"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type CasasWhereInput = {
    AND?: CasasWhereInput | CasasWhereInput[]
    OR?: CasasWhereInput[]
    NOT?: CasasWhereInput | CasasWhereInput[]
    id?: StringFilter<"Casas"> | string
    nombre?: StringFilter<"Casas"> | string
    productoId?: StringNullableFilter<"Casas"> | string | null
    producto?: XOR<ProductoNullableScalarRelationFilter, ProductoWhereInput> | null
  }

  export type CasasOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    productoId?: SortOrderInput | SortOrder
    producto?: ProductoOrderByWithRelationInput
  }

  export type CasasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CasasWhereInput | CasasWhereInput[]
    OR?: CasasWhereInput[]
    NOT?: CasasWhereInput | CasasWhereInput[]
    nombre?: StringFilter<"Casas"> | string
    productoId?: StringNullableFilter<"Casas"> | string | null
    producto?: XOR<ProductoNullableScalarRelationFilter, ProductoWhereInput> | null
  }, "id">

  export type CasasOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    productoId?: SortOrderInput | SortOrder
    _count?: CasasCountOrderByAggregateInput
    _max?: CasasMaxOrderByAggregateInput
    _min?: CasasMinOrderByAggregateInput
  }

  export type CasasScalarWhereWithAggregatesInput = {
    AND?: CasasScalarWhereWithAggregatesInput | CasasScalarWhereWithAggregatesInput[]
    OR?: CasasScalarWhereWithAggregatesInput[]
    NOT?: CasasScalarWhereWithAggregatesInput | CasasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Casas"> | string
    nombre?: StringWithAggregatesFilter<"Casas"> | string
    productoId?: StringNullableWithAggregatesFilter<"Casas"> | string | null
  }

  export type CodigoDeBarrasWhereInput = {
    AND?: CodigoDeBarrasWhereInput | CodigoDeBarrasWhereInput[]
    OR?: CodigoDeBarrasWhereInput[]
    NOT?: CodigoDeBarrasWhereInput | CodigoDeBarrasWhereInput[]
    id?: StringFilter<"CodigoDeBarras"> | string
    nombre?: StringFilter<"CodigoDeBarras"> | string
    codigoBarras?: StringNullableFilter<"CodigoDeBarras"> | string | null
    productoId?: StringFilter<"CodigoDeBarras"> | string
    Lotes?: LoteListRelationFilter
  }

  export type CodigoDeBarrasOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigoBarras?: SortOrderInput | SortOrder
    productoId?: SortOrder
    Lotes?: LoteOrderByRelationAggregateInput
  }

  export type CodigoDeBarrasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CodigoDeBarrasWhereInput | CodigoDeBarrasWhereInput[]
    OR?: CodigoDeBarrasWhereInput[]
    NOT?: CodigoDeBarrasWhereInput | CodigoDeBarrasWhereInput[]
    nombre?: StringFilter<"CodigoDeBarras"> | string
    codigoBarras?: StringNullableFilter<"CodigoDeBarras"> | string | null
    productoId?: StringFilter<"CodigoDeBarras"> | string
    Lotes?: LoteListRelationFilter
  }, "id">

  export type CodigoDeBarrasOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigoBarras?: SortOrderInput | SortOrder
    productoId?: SortOrder
    _count?: CodigoDeBarrasCountOrderByAggregateInput
    _max?: CodigoDeBarrasMaxOrderByAggregateInput
    _min?: CodigoDeBarrasMinOrderByAggregateInput
  }

  export type CodigoDeBarrasScalarWhereWithAggregatesInput = {
    AND?: CodigoDeBarrasScalarWhereWithAggregatesInput | CodigoDeBarrasScalarWhereWithAggregatesInput[]
    OR?: CodigoDeBarrasScalarWhereWithAggregatesInput[]
    NOT?: CodigoDeBarrasScalarWhereWithAggregatesInput | CodigoDeBarrasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CodigoDeBarras"> | string
    nombre?: StringWithAggregatesFilter<"CodigoDeBarras"> | string
    codigoBarras?: StringNullableWithAggregatesFilter<"CodigoDeBarras"> | string | null
    productoId?: StringWithAggregatesFilter<"CodigoDeBarras"> | string
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id?: StringFilter<"Producto"> | string
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringFilter<"Producto"> | string
    codigoBarras?: StringNullableFilter<"Producto"> | string | null
    presentacion?: StringFilter<"Producto"> | string
    generico?: StringFilter<"Producto"> | string
    gramaje?: StringFilter<"Producto"> | string
    costo?: FloatFilter<"Producto"> | number
    precioVenta?: FloatFilter<"Producto"> | number
    alertaStock?: BoolFilter<"Producto"> | boolean
    casa?: StringFilter<"Producto"> | string
    cantUnidad?: IntFilter<"Producto"> | number
    cantCaja?: IntFilter<"Producto"> | number
    cantBlister?: IntFilter<"Producto"> | number
    precioUnitario?: FloatFilter<"Producto"> | number
    precioBlister?: FloatFilter<"Producto"> | number
    precioCaja?: FloatFilter<"Producto"> | number
    costoCompraUnitario?: FloatFilter<"Producto"> | number
    costoCompraBlister?: FloatFilter<"Producto"> | number
    costoCompraCaja?: FloatFilter<"Producto"> | number
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    Casas?: CasasListRelationFilter
    lotes?: LoteListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    codigoBarras?: SortOrderInput | SortOrder
    presentacion?: SortOrder
    generico?: SortOrder
    gramaje?: SortOrder
    costo?: SortOrder
    precioVenta?: SortOrder
    alertaStock?: SortOrder
    casa?: SortOrder
    cantUnidad?: SortOrder
    cantCaja?: SortOrder
    cantBlister?: SortOrder
    precioUnitario?: SortOrder
    precioBlister?: SortOrder
    precioCaja?: SortOrder
    costoCompraUnitario?: SortOrder
    costoCompraBlister?: SortOrder
    costoCompraCaja?: SortOrder
    createdAt?: SortOrder
    Casas?: CasasOrderByRelationAggregateInput
    lotes?: LoteOrderByRelationAggregateInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringFilter<"Producto"> | string
    codigoBarras?: StringNullableFilter<"Producto"> | string | null
    presentacion?: StringFilter<"Producto"> | string
    generico?: StringFilter<"Producto"> | string
    gramaje?: StringFilter<"Producto"> | string
    costo?: FloatFilter<"Producto"> | number
    precioVenta?: FloatFilter<"Producto"> | number
    alertaStock?: BoolFilter<"Producto"> | boolean
    casa?: StringFilter<"Producto"> | string
    cantUnidad?: IntFilter<"Producto"> | number
    cantCaja?: IntFilter<"Producto"> | number
    cantBlister?: IntFilter<"Producto"> | number
    precioUnitario?: FloatFilter<"Producto"> | number
    precioBlister?: FloatFilter<"Producto"> | number
    precioCaja?: FloatFilter<"Producto"> | number
    costoCompraUnitario?: FloatFilter<"Producto"> | number
    costoCompraBlister?: FloatFilter<"Producto"> | number
    costoCompraCaja?: FloatFilter<"Producto"> | number
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    Casas?: CasasListRelationFilter
    lotes?: LoteListRelationFilter
  }, "id">

  export type ProductoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    codigoBarras?: SortOrderInput | SortOrder
    presentacion?: SortOrder
    generico?: SortOrder
    gramaje?: SortOrder
    costo?: SortOrder
    precioVenta?: SortOrder
    alertaStock?: SortOrder
    casa?: SortOrder
    cantUnidad?: SortOrder
    cantCaja?: SortOrder
    cantBlister?: SortOrder
    precioUnitario?: SortOrder
    precioBlister?: SortOrder
    precioCaja?: SortOrder
    costoCompraUnitario?: SortOrder
    costoCompraBlister?: SortOrder
    costoCompraCaja?: SortOrder
    createdAt?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Producto"> | string
    nombre?: StringWithAggregatesFilter<"Producto"> | string
    descripcion?: StringWithAggregatesFilter<"Producto"> | string
    codigoBarras?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    presentacion?: StringWithAggregatesFilter<"Producto"> | string
    generico?: StringWithAggregatesFilter<"Producto"> | string
    gramaje?: StringWithAggregatesFilter<"Producto"> | string
    costo?: FloatWithAggregatesFilter<"Producto"> | number
    precioVenta?: FloatWithAggregatesFilter<"Producto"> | number
    alertaStock?: BoolWithAggregatesFilter<"Producto"> | boolean
    casa?: StringWithAggregatesFilter<"Producto"> | string
    cantUnidad?: IntWithAggregatesFilter<"Producto"> | number
    cantCaja?: IntWithAggregatesFilter<"Producto"> | number
    cantBlister?: IntWithAggregatesFilter<"Producto"> | number
    precioUnitario?: FloatWithAggregatesFilter<"Producto"> | number
    precioBlister?: FloatWithAggregatesFilter<"Producto"> | number
    precioCaja?: FloatWithAggregatesFilter<"Producto"> | number
    costoCompraUnitario?: FloatWithAggregatesFilter<"Producto"> | number
    costoCompraBlister?: FloatWithAggregatesFilter<"Producto"> | number
    costoCompraCaja?: FloatWithAggregatesFilter<"Producto"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
  }

  export type LoteWhereInput = {
    AND?: LoteWhereInput | LoteWhereInput[]
    OR?: LoteWhereInput[]
    NOT?: LoteWhereInput | LoteWhereInput[]
    id?: StringFilter<"Lote"> | string
    origen?: StringFilter<"Lote"> | string
    productoId?: StringFilter<"Lote"> | string
    nombre?: StringFilter<"Lote"> | string
    fechaVencimiento?: DateTimeNullableFilter<"Lote"> | Date | string | null
    stockTotal?: IntFilter<"Lote"> | number
    stockPorCaja?: IntFilter<"Lote"> | number
    stockPorBlister?: IntFilter<"Lote"> | number
    createdAt?: DateTimeFilter<"Lote"> | Date | string
    codigoBarrasId?: StringNullableFilter<"Lote"> | string | null
    compraId?: StringNullableFilter<"Lote"> | string | null
    codigoBarras?: XOR<CodigoDeBarrasNullableScalarRelationFilter, CodigoDeBarrasWhereInput> | null
    compra?: XOR<CompraNullableScalarRelationFilter, CompraWhereInput> | null
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type LoteOrderByWithRelationInput = {
    id?: SortOrder
    origen?: SortOrder
    productoId?: SortOrder
    nombre?: SortOrder
    fechaVencimiento?: SortOrderInput | SortOrder
    stockTotal?: SortOrder
    stockPorCaja?: SortOrder
    stockPorBlister?: SortOrder
    createdAt?: SortOrder
    codigoBarrasId?: SortOrderInput | SortOrder
    compraId?: SortOrderInput | SortOrder
    codigoBarras?: CodigoDeBarrasOrderByWithRelationInput
    compra?: CompraOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type LoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoteWhereInput | LoteWhereInput[]
    OR?: LoteWhereInput[]
    NOT?: LoteWhereInput | LoteWhereInput[]
    origen?: StringFilter<"Lote"> | string
    productoId?: StringFilter<"Lote"> | string
    nombre?: StringFilter<"Lote"> | string
    fechaVencimiento?: DateTimeNullableFilter<"Lote"> | Date | string | null
    stockTotal?: IntFilter<"Lote"> | number
    stockPorCaja?: IntFilter<"Lote"> | number
    stockPorBlister?: IntFilter<"Lote"> | number
    createdAt?: DateTimeFilter<"Lote"> | Date | string
    codigoBarrasId?: StringNullableFilter<"Lote"> | string | null
    compraId?: StringNullableFilter<"Lote"> | string | null
    codigoBarras?: XOR<CodigoDeBarrasNullableScalarRelationFilter, CodigoDeBarrasWhereInput> | null
    compra?: XOR<CompraNullableScalarRelationFilter, CompraWhereInput> | null
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "id">

  export type LoteOrderByWithAggregationInput = {
    id?: SortOrder
    origen?: SortOrder
    productoId?: SortOrder
    nombre?: SortOrder
    fechaVencimiento?: SortOrderInput | SortOrder
    stockTotal?: SortOrder
    stockPorCaja?: SortOrder
    stockPorBlister?: SortOrder
    createdAt?: SortOrder
    codigoBarrasId?: SortOrderInput | SortOrder
    compraId?: SortOrderInput | SortOrder
    _count?: LoteCountOrderByAggregateInput
    _avg?: LoteAvgOrderByAggregateInput
    _max?: LoteMaxOrderByAggregateInput
    _min?: LoteMinOrderByAggregateInput
    _sum?: LoteSumOrderByAggregateInput
  }

  export type LoteScalarWhereWithAggregatesInput = {
    AND?: LoteScalarWhereWithAggregatesInput | LoteScalarWhereWithAggregatesInput[]
    OR?: LoteScalarWhereWithAggregatesInput[]
    NOT?: LoteScalarWhereWithAggregatesInput | LoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lote"> | string
    origen?: StringWithAggregatesFilter<"Lote"> | string
    productoId?: StringWithAggregatesFilter<"Lote"> | string
    nombre?: StringWithAggregatesFilter<"Lote"> | string
    fechaVencimiento?: DateTimeNullableWithAggregatesFilter<"Lote"> | Date | string | null
    stockTotal?: IntWithAggregatesFilter<"Lote"> | number
    stockPorCaja?: IntWithAggregatesFilter<"Lote"> | number
    stockPorBlister?: IntWithAggregatesFilter<"Lote"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Lote"> | Date | string
    codigoBarrasId?: StringNullableWithAggregatesFilter<"Lote"> | string | null
    compraId?: StringNullableWithAggregatesFilter<"Lote"> | string | null
  }

  export type CompraWhereInput = {
    AND?: CompraWhereInput | CompraWhereInput[]
    OR?: CompraWhereInput[]
    NOT?: CompraWhereInput | CompraWhereInput[]
    id?: StringFilter<"Compra"> | string
    Proveedor?: StringFilter<"Compra"> | string
    proveedorId?: StringNullableFilter<"Compra"> | string | null
    observaciones?: StringFilter<"Compra"> | string
    correlativo?: IntFilter<"Compra"> | number
    Comprador?: StringFilter<"Compra"> | string
    visitador?: StringFilter<"Compra"> | string
    total?: IntFilter<"Compra"> | number
    estado?: StringFilter<"Compra"> | string
    fecha?: DateTimeFilter<"Compra"> | Date | string
    Lotes?: LoteListRelationFilter
    DetalleDeCompras?: DetalleDeComprasListRelationFilter
    Proveedores?: XOR<ProveedorNullableScalarRelationFilter, ProveedorWhereInput> | null
  }

  export type CompraOrderByWithRelationInput = {
    id?: SortOrder
    Proveedor?: SortOrder
    proveedorId?: SortOrderInput | SortOrder
    observaciones?: SortOrder
    correlativo?: SortOrder
    Comprador?: SortOrder
    visitador?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    fecha?: SortOrder
    Lotes?: LoteOrderByRelationAggregateInput
    DetalleDeCompras?: DetalleDeComprasOrderByRelationAggregateInput
    Proveedores?: ProveedorOrderByWithRelationInput
  }

  export type CompraWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompraWhereInput | CompraWhereInput[]
    OR?: CompraWhereInput[]
    NOT?: CompraWhereInput | CompraWhereInput[]
    Proveedor?: StringFilter<"Compra"> | string
    proveedorId?: StringNullableFilter<"Compra"> | string | null
    observaciones?: StringFilter<"Compra"> | string
    correlativo?: IntFilter<"Compra"> | number
    Comprador?: StringFilter<"Compra"> | string
    visitador?: StringFilter<"Compra"> | string
    total?: IntFilter<"Compra"> | number
    estado?: StringFilter<"Compra"> | string
    fecha?: DateTimeFilter<"Compra"> | Date | string
    Lotes?: LoteListRelationFilter
    DetalleDeCompras?: DetalleDeComprasListRelationFilter
    Proveedores?: XOR<ProveedorNullableScalarRelationFilter, ProveedorWhereInput> | null
  }, "id">

  export type CompraOrderByWithAggregationInput = {
    id?: SortOrder
    Proveedor?: SortOrder
    proveedorId?: SortOrderInput | SortOrder
    observaciones?: SortOrder
    correlativo?: SortOrder
    Comprador?: SortOrder
    visitador?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    fecha?: SortOrder
    _count?: CompraCountOrderByAggregateInput
    _avg?: CompraAvgOrderByAggregateInput
    _max?: CompraMaxOrderByAggregateInput
    _min?: CompraMinOrderByAggregateInput
    _sum?: CompraSumOrderByAggregateInput
  }

  export type CompraScalarWhereWithAggregatesInput = {
    AND?: CompraScalarWhereWithAggregatesInput | CompraScalarWhereWithAggregatesInput[]
    OR?: CompraScalarWhereWithAggregatesInput[]
    NOT?: CompraScalarWhereWithAggregatesInput | CompraScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Compra"> | string
    Proveedor?: StringWithAggregatesFilter<"Compra"> | string
    proveedorId?: StringNullableWithAggregatesFilter<"Compra"> | string | null
    observaciones?: StringWithAggregatesFilter<"Compra"> | string
    correlativo?: IntWithAggregatesFilter<"Compra"> | number
    Comprador?: StringWithAggregatesFilter<"Compra"> | string
    visitador?: StringWithAggregatesFilter<"Compra"> | string
    total?: IntWithAggregatesFilter<"Compra"> | number
    estado?: StringWithAggregatesFilter<"Compra"> | string
    fecha?: DateTimeWithAggregatesFilter<"Compra"> | Date | string
  }

  export type PagosRealizadosCompraWhereInput = {
    AND?: PagosRealizadosCompraWhereInput | PagosRealizadosCompraWhereInput[]
    OR?: PagosRealizadosCompraWhereInput[]
    NOT?: PagosRealizadosCompraWhereInput | PagosRealizadosCompraWhereInput[]
    id?: StringFilter<"PagosRealizadosCompra"> | string
    fechaPago?: DateTimeNullableFilter<"PagosRealizadosCompra"> | Date | string | null
    monto?: FloatFilter<"PagosRealizadosCompra"> | number
    proveedorId?: StringNullableFilter<"PagosRealizadosCompra"> | string | null
    Proveedores?: XOR<ProveedorNullableScalarRelationFilter, ProveedorWhereInput> | null
  }

  export type PagosRealizadosCompraOrderByWithRelationInput = {
    id?: SortOrder
    fechaPago?: SortOrderInput | SortOrder
    monto?: SortOrder
    proveedorId?: SortOrderInput | SortOrder
    Proveedores?: ProveedorOrderByWithRelationInput
  }

  export type PagosRealizadosCompraWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PagosRealizadosCompraWhereInput | PagosRealizadosCompraWhereInput[]
    OR?: PagosRealizadosCompraWhereInput[]
    NOT?: PagosRealizadosCompraWhereInput | PagosRealizadosCompraWhereInput[]
    fechaPago?: DateTimeNullableFilter<"PagosRealizadosCompra"> | Date | string | null
    monto?: FloatFilter<"PagosRealizadosCompra"> | number
    proveedorId?: StringNullableFilter<"PagosRealizadosCompra"> | string | null
    Proveedores?: XOR<ProveedorNullableScalarRelationFilter, ProveedorWhereInput> | null
  }, "id">

  export type PagosRealizadosCompraOrderByWithAggregationInput = {
    id?: SortOrder
    fechaPago?: SortOrderInput | SortOrder
    monto?: SortOrder
    proveedorId?: SortOrderInput | SortOrder
    _count?: PagosRealizadosCompraCountOrderByAggregateInput
    _avg?: PagosRealizadosCompraAvgOrderByAggregateInput
    _max?: PagosRealizadosCompraMaxOrderByAggregateInput
    _min?: PagosRealizadosCompraMinOrderByAggregateInput
    _sum?: PagosRealizadosCompraSumOrderByAggregateInput
  }

  export type PagosRealizadosCompraScalarWhereWithAggregatesInput = {
    AND?: PagosRealizadosCompraScalarWhereWithAggregatesInput | PagosRealizadosCompraScalarWhereWithAggregatesInput[]
    OR?: PagosRealizadosCompraScalarWhereWithAggregatesInput[]
    NOT?: PagosRealizadosCompraScalarWhereWithAggregatesInput | PagosRealizadosCompraScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PagosRealizadosCompra"> | string
    fechaPago?: DateTimeNullableWithAggregatesFilter<"PagosRealizadosCompra"> | Date | string | null
    monto?: FloatWithAggregatesFilter<"PagosRealizadosCompra"> | number
    proveedorId?: StringNullableWithAggregatesFilter<"PagosRealizadosCompra"> | string | null
  }

  export type VentaWhereInput = {
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    id?: StringFilter<"Venta"> | string
    nombreCliente?: StringFilter<"Venta"> | string
    fechaDePago?: DateTimeNullableFilter<"Venta"> | Date | string | null
    estado?: StringFilter<"Venta"> | string
    correlativo?: IntFilter<"Venta"> | number
    total?: FloatFilter<"Venta"> | number
    fecha?: DateTimeFilter<"Venta"> | Date | string
    noVenta?: IntFilter<"Venta"> | number
    gananciaTotal?: FloatFilter<"Venta"> | number
    clienteId?: StringNullableFilter<"Venta"> | string | null
    detalles?: ListaProductosListRelationFilter
    cliente?: XOR<ClienteNullableScalarRelationFilter, ClienteWhereInput> | null
  }

  export type VentaOrderByWithRelationInput = {
    id?: SortOrder
    nombreCliente?: SortOrder
    fechaDePago?: SortOrderInput | SortOrder
    estado?: SortOrder
    correlativo?: SortOrder
    total?: SortOrder
    fecha?: SortOrder
    noVenta?: SortOrder
    gananciaTotal?: SortOrder
    clienteId?: SortOrderInput | SortOrder
    detalles?: ListaProductosOrderByRelationAggregateInput
    cliente?: ClienteOrderByWithRelationInput
  }

  export type VentaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    noVenta?: number
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    nombreCliente?: StringFilter<"Venta"> | string
    fechaDePago?: DateTimeNullableFilter<"Venta"> | Date | string | null
    estado?: StringFilter<"Venta"> | string
    correlativo?: IntFilter<"Venta"> | number
    total?: FloatFilter<"Venta"> | number
    fecha?: DateTimeFilter<"Venta"> | Date | string
    gananciaTotal?: FloatFilter<"Venta"> | number
    clienteId?: StringNullableFilter<"Venta"> | string | null
    detalles?: ListaProductosListRelationFilter
    cliente?: XOR<ClienteNullableScalarRelationFilter, ClienteWhereInput> | null
  }, "id" | "noVenta">

  export type VentaOrderByWithAggregationInput = {
    id?: SortOrder
    nombreCliente?: SortOrder
    fechaDePago?: SortOrderInput | SortOrder
    estado?: SortOrder
    correlativo?: SortOrder
    total?: SortOrder
    fecha?: SortOrder
    noVenta?: SortOrder
    gananciaTotal?: SortOrder
    clienteId?: SortOrderInput | SortOrder
    _count?: VentaCountOrderByAggregateInput
    _avg?: VentaAvgOrderByAggregateInput
    _max?: VentaMaxOrderByAggregateInput
    _min?: VentaMinOrderByAggregateInput
    _sum?: VentaSumOrderByAggregateInput
  }

  export type VentaScalarWhereWithAggregatesInput = {
    AND?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    OR?: VentaScalarWhereWithAggregatesInput[]
    NOT?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Venta"> | string
    nombreCliente?: StringWithAggregatesFilter<"Venta"> | string
    fechaDePago?: DateTimeNullableWithAggregatesFilter<"Venta"> | Date | string | null
    estado?: StringWithAggregatesFilter<"Venta"> | string
    correlativo?: IntWithAggregatesFilter<"Venta"> | number
    total?: FloatWithAggregatesFilter<"Venta"> | number
    fecha?: DateTimeWithAggregatesFilter<"Venta"> | Date | string
    noVenta?: IntWithAggregatesFilter<"Venta"> | number
    gananciaTotal?: FloatWithAggregatesFilter<"Venta"> | number
    clienteId?: StringNullableWithAggregatesFilter<"Venta"> | string | null
  }

  export type PagosRealizadosVentasWhereInput = {
    AND?: PagosRealizadosVentasWhereInput | PagosRealizadosVentasWhereInput[]
    OR?: PagosRealizadosVentasWhereInput[]
    NOT?: PagosRealizadosVentasWhereInput | PagosRealizadosVentasWhereInput[]
    id?: StringFilter<"PagosRealizadosVentas"> | string
    fechaPago?: DateTimeNullableFilter<"PagosRealizadosVentas"> | Date | string | null
    monto?: FloatFilter<"PagosRealizadosVentas"> | number
    clienteId?: StringNullableFilter<"PagosRealizadosVentas"> | string | null
    cliente?: XOR<ClienteNullableScalarRelationFilter, ClienteWhereInput> | null
  }

  export type PagosRealizadosVentasOrderByWithRelationInput = {
    id?: SortOrder
    fechaPago?: SortOrderInput | SortOrder
    monto?: SortOrder
    clienteId?: SortOrderInput | SortOrder
    cliente?: ClienteOrderByWithRelationInput
  }

  export type PagosRealizadosVentasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PagosRealizadosVentasWhereInput | PagosRealizadosVentasWhereInput[]
    OR?: PagosRealizadosVentasWhereInput[]
    NOT?: PagosRealizadosVentasWhereInput | PagosRealizadosVentasWhereInput[]
    fechaPago?: DateTimeNullableFilter<"PagosRealizadosVentas"> | Date | string | null
    monto?: FloatFilter<"PagosRealizadosVentas"> | number
    clienteId?: StringNullableFilter<"PagosRealizadosVentas"> | string | null
    cliente?: XOR<ClienteNullableScalarRelationFilter, ClienteWhereInput> | null
  }, "id">

  export type PagosRealizadosVentasOrderByWithAggregationInput = {
    id?: SortOrder
    fechaPago?: SortOrderInput | SortOrder
    monto?: SortOrder
    clienteId?: SortOrderInput | SortOrder
    _count?: PagosRealizadosVentasCountOrderByAggregateInput
    _avg?: PagosRealizadosVentasAvgOrderByAggregateInput
    _max?: PagosRealizadosVentasMaxOrderByAggregateInput
    _min?: PagosRealizadosVentasMinOrderByAggregateInput
    _sum?: PagosRealizadosVentasSumOrderByAggregateInput
  }

  export type PagosRealizadosVentasScalarWhereWithAggregatesInput = {
    AND?: PagosRealizadosVentasScalarWhereWithAggregatesInput | PagosRealizadosVentasScalarWhereWithAggregatesInput[]
    OR?: PagosRealizadosVentasScalarWhereWithAggregatesInput[]
    NOT?: PagosRealizadosVentasScalarWhereWithAggregatesInput | PagosRealizadosVentasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PagosRealizadosVentas"> | string
    fechaPago?: DateTimeNullableWithAggregatesFilter<"PagosRealizadosVentas"> | Date | string | null
    monto?: FloatWithAggregatesFilter<"PagosRealizadosVentas"> | number
    clienteId?: StringNullableWithAggregatesFilter<"PagosRealizadosVentas"> | string | null
  }

  export type ListaProductosWhereInput = {
    AND?: ListaProductosWhereInput | ListaProductosWhereInput[]
    OR?: ListaProductosWhereInput[]
    NOT?: ListaProductosWhereInput | ListaProductosWhereInput[]
    id?: StringFilter<"ListaProductos"> | string
    ventaId?: StringFilter<"ListaProductos"> | string
    presentacion?: StringFilter<"ListaProductos"> | string
    productoId?: StringFilter<"ListaProductos"> | string
    nombreProducto?: StringFilter<"ListaProductos"> | string
    subGanancia?: FloatFilter<"ListaProductos"> | number
    cantidad?: IntFilter<"ListaProductos"> | number
    subtotal?: FloatFilter<"ListaProductos"> | number
    fechaDeVencimiento?: DateTimeNullableFilter<"ListaProductos"> | Date | string | null
    loteId?: StringFilter<"ListaProductos"> | string
    venta?: XOR<VentaScalarRelationFilter, VentaWhereInput>
  }

  export type ListaProductosOrderByWithRelationInput = {
    id?: SortOrder
    ventaId?: SortOrder
    presentacion?: SortOrder
    productoId?: SortOrder
    nombreProducto?: SortOrder
    subGanancia?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
    fechaDeVencimiento?: SortOrderInput | SortOrder
    loteId?: SortOrder
    venta?: VentaOrderByWithRelationInput
  }

  export type ListaProductosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListaProductosWhereInput | ListaProductosWhereInput[]
    OR?: ListaProductosWhereInput[]
    NOT?: ListaProductosWhereInput | ListaProductosWhereInput[]
    ventaId?: StringFilter<"ListaProductos"> | string
    presentacion?: StringFilter<"ListaProductos"> | string
    productoId?: StringFilter<"ListaProductos"> | string
    nombreProducto?: StringFilter<"ListaProductos"> | string
    subGanancia?: FloatFilter<"ListaProductos"> | number
    cantidad?: IntFilter<"ListaProductos"> | number
    subtotal?: FloatFilter<"ListaProductos"> | number
    fechaDeVencimiento?: DateTimeNullableFilter<"ListaProductos"> | Date | string | null
    loteId?: StringFilter<"ListaProductos"> | string
    venta?: XOR<VentaScalarRelationFilter, VentaWhereInput>
  }, "id">

  export type ListaProductosOrderByWithAggregationInput = {
    id?: SortOrder
    ventaId?: SortOrder
    presentacion?: SortOrder
    productoId?: SortOrder
    nombreProducto?: SortOrder
    subGanancia?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
    fechaDeVencimiento?: SortOrderInput | SortOrder
    loteId?: SortOrder
    _count?: ListaProductosCountOrderByAggregateInput
    _avg?: ListaProductosAvgOrderByAggregateInput
    _max?: ListaProductosMaxOrderByAggregateInput
    _min?: ListaProductosMinOrderByAggregateInput
    _sum?: ListaProductosSumOrderByAggregateInput
  }

  export type ListaProductosScalarWhereWithAggregatesInput = {
    AND?: ListaProductosScalarWhereWithAggregatesInput | ListaProductosScalarWhereWithAggregatesInput[]
    OR?: ListaProductosScalarWhereWithAggregatesInput[]
    NOT?: ListaProductosScalarWhereWithAggregatesInput | ListaProductosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ListaProductos"> | string
    ventaId?: StringWithAggregatesFilter<"ListaProductos"> | string
    presentacion?: StringWithAggregatesFilter<"ListaProductos"> | string
    productoId?: StringWithAggregatesFilter<"ListaProductos"> | string
    nombreProducto?: StringWithAggregatesFilter<"ListaProductos"> | string
    subGanancia?: FloatWithAggregatesFilter<"ListaProductos"> | number
    cantidad?: IntWithAggregatesFilter<"ListaProductos"> | number
    subtotal?: FloatWithAggregatesFilter<"ListaProductos"> | number
    fechaDeVencimiento?: DateTimeNullableWithAggregatesFilter<"ListaProductos"> | Date | string | null
    loteId?: StringWithAggregatesFilter<"ListaProductos"> | string
  }

  export type DetalleDeComprasWhereInput = {
    AND?: DetalleDeComprasWhereInput | DetalleDeComprasWhereInput[]
    OR?: DetalleDeComprasWhereInput[]
    NOT?: DetalleDeComprasWhereInput | DetalleDeComprasWhereInput[]
    id?: StringFilter<"DetalleDeCompras"> | string
    compraId?: StringFilter<"DetalleDeCompras"> | string
    productoId?: StringFilter<"DetalleDeCompras"> | string
    stockTotal?: IntFilter<"DetalleDeCompras"> | number
    stockPorCaja?: IntFilter<"DetalleDeCompras"> | number
    stockPorBlister?: IntFilter<"DetalleDeCompras"> | number
    precioCosto?: FloatFilter<"DetalleDeCompras"> | number
    fecha?: DateTimeFilter<"DetalleDeCompras"> | Date | string
    fechaDeVencimiento?: DateTimeFilter<"DetalleDeCompras"> | Date | string
    origen?: StringFilter<"DetalleDeCompras"> | string
    nombreProducto?: StringFilter<"DetalleDeCompras"> | string
    cantidad?: IntFilter<"DetalleDeCompras"> | number
    compra?: XOR<CompraScalarRelationFilter, CompraWhereInput>
  }

  export type DetalleDeComprasOrderByWithRelationInput = {
    id?: SortOrder
    compraId?: SortOrder
    productoId?: SortOrder
    stockTotal?: SortOrder
    stockPorCaja?: SortOrder
    stockPorBlister?: SortOrder
    precioCosto?: SortOrder
    fecha?: SortOrder
    fechaDeVencimiento?: SortOrder
    origen?: SortOrder
    nombreProducto?: SortOrder
    cantidad?: SortOrder
    compra?: CompraOrderByWithRelationInput
  }

  export type DetalleDeComprasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DetalleDeComprasWhereInput | DetalleDeComprasWhereInput[]
    OR?: DetalleDeComprasWhereInput[]
    NOT?: DetalleDeComprasWhereInput | DetalleDeComprasWhereInput[]
    compraId?: StringFilter<"DetalleDeCompras"> | string
    productoId?: StringFilter<"DetalleDeCompras"> | string
    stockTotal?: IntFilter<"DetalleDeCompras"> | number
    stockPorCaja?: IntFilter<"DetalleDeCompras"> | number
    stockPorBlister?: IntFilter<"DetalleDeCompras"> | number
    precioCosto?: FloatFilter<"DetalleDeCompras"> | number
    fecha?: DateTimeFilter<"DetalleDeCompras"> | Date | string
    fechaDeVencimiento?: DateTimeFilter<"DetalleDeCompras"> | Date | string
    origen?: StringFilter<"DetalleDeCompras"> | string
    nombreProducto?: StringFilter<"DetalleDeCompras"> | string
    cantidad?: IntFilter<"DetalleDeCompras"> | number
    compra?: XOR<CompraScalarRelationFilter, CompraWhereInput>
  }, "id">

  export type DetalleDeComprasOrderByWithAggregationInput = {
    id?: SortOrder
    compraId?: SortOrder
    productoId?: SortOrder
    stockTotal?: SortOrder
    stockPorCaja?: SortOrder
    stockPorBlister?: SortOrder
    precioCosto?: SortOrder
    fecha?: SortOrder
    fechaDeVencimiento?: SortOrder
    origen?: SortOrder
    nombreProducto?: SortOrder
    cantidad?: SortOrder
    _count?: DetalleDeComprasCountOrderByAggregateInput
    _avg?: DetalleDeComprasAvgOrderByAggregateInput
    _max?: DetalleDeComprasMaxOrderByAggregateInput
    _min?: DetalleDeComprasMinOrderByAggregateInput
    _sum?: DetalleDeComprasSumOrderByAggregateInput
  }

  export type DetalleDeComprasScalarWhereWithAggregatesInput = {
    AND?: DetalleDeComprasScalarWhereWithAggregatesInput | DetalleDeComprasScalarWhereWithAggregatesInput[]
    OR?: DetalleDeComprasScalarWhereWithAggregatesInput[]
    NOT?: DetalleDeComprasScalarWhereWithAggregatesInput | DetalleDeComprasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DetalleDeCompras"> | string
    compraId?: StringWithAggregatesFilter<"DetalleDeCompras"> | string
    productoId?: StringWithAggregatesFilter<"DetalleDeCompras"> | string
    stockTotal?: IntWithAggregatesFilter<"DetalleDeCompras"> | number
    stockPorCaja?: IntWithAggregatesFilter<"DetalleDeCompras"> | number
    stockPorBlister?: IntWithAggregatesFilter<"DetalleDeCompras"> | number
    precioCosto?: FloatWithAggregatesFilter<"DetalleDeCompras"> | number
    fecha?: DateTimeWithAggregatesFilter<"DetalleDeCompras"> | Date | string
    fechaDeVencimiento?: DateTimeWithAggregatesFilter<"DetalleDeCompras"> | Date | string
    origen?: StringWithAggregatesFilter<"DetalleDeCompras"> | string
    nombreProducto?: StringWithAggregatesFilter<"DetalleDeCompras"> | string
    cantidad?: IntWithAggregatesFilter<"DetalleDeCompras"> | number
  }

  export type UserCreateInput = {
    id?: string
    nombre: string
    password: string
    permisos?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nombre: string
    password: string
    permisos?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permisos?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permisos?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    nombre: string
    password: string
    permisos?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permisos?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permisos?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProveedorCreateInput = {
    id?: string
    nombre: string
    encargado: string
    telefono: string
    Departamento: string
    Municipio: string
    correlativo: number
    direccion: string
    email: string
    createdAt?: Date | string
    Compras?: CompraCreateNestedManyWithoutProveedoresInput
    PagosRealizadosCompra?: PagosRealizadosCompraCreateNestedManyWithoutProveedoresInput
  }

  export type ProveedorUncheckedCreateInput = {
    id?: string
    nombre: string
    encargado: string
    telefono: string
    Departamento: string
    Municipio: string
    correlativo: number
    direccion: string
    email: string
    createdAt?: Date | string
    Compras?: CompraUncheckedCreateNestedManyWithoutProveedoresInput
    PagosRealizadosCompra?: PagosRealizadosCompraUncheckedCreateNestedManyWithoutProveedoresInput
  }

  export type ProveedorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    encargado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    Municipio?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Compras?: CompraUpdateManyWithoutProveedoresNestedInput
    PagosRealizadosCompra?: PagosRealizadosCompraUpdateManyWithoutProveedoresNestedInput
  }

  export type ProveedorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    encargado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    Municipio?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Compras?: CompraUncheckedUpdateManyWithoutProveedoresNestedInput
    PagosRealizadosCompra?: PagosRealizadosCompraUncheckedUpdateManyWithoutProveedoresNestedInput
  }

  export type ProveedorCreateManyInput = {
    id?: string
    nombre: string
    encargado: string
    telefono: string
    Departamento: string
    Municipio: string
    correlativo: number
    direccion: string
    email: string
    createdAt?: Date | string
  }

  export type ProveedorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    encargado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    Municipio?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProveedorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    encargado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    Municipio?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateInput = {
    id?: string
    nombre: string
    encargado: string
    telefono: string
    Departamento: string
    Municipio: string
    correlativo: number
    direccion: string
    email: string
    createdAt?: Date | string
    ventas?: VentaCreateNestedManyWithoutClienteInput
    PagosRealizadosVenta?: PagosRealizadosVentasCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: string
    nombre: string
    encargado: string
    telefono: string
    Departamento: string
    Municipio: string
    correlativo: number
    direccion: string
    email: string
    createdAt?: Date | string
    ventas?: VentaUncheckedCreateNestedManyWithoutClienteInput
    PagosRealizadosVenta?: PagosRealizadosVentasUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    encargado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    Municipio?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ventas?: VentaUpdateManyWithoutClienteNestedInput
    PagosRealizadosVenta?: PagosRealizadosVentasUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    encargado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    Municipio?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ventas?: VentaUncheckedUpdateManyWithoutClienteNestedInput
    PagosRealizadosVenta?: PagosRealizadosVentasUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: string
    nombre: string
    encargado: string
    telefono: string
    Departamento: string
    Municipio: string
    correlativo: number
    direccion: string
    email: string
    createdAt?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    encargado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    Municipio?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    encargado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    Municipio?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasasCreateInput = {
    id?: string
    nombre: string
    producto?: ProductoCreateNestedOneWithoutCasasInput
  }

  export type CasasUncheckedCreateInput = {
    id?: string
    nombre: string
    productoId?: string | null
  }

  export type CasasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    producto?: ProductoUpdateOneWithoutCasasNestedInput
  }

  export type CasasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    productoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CasasCreateManyInput = {
    id?: string
    nombre: string
    productoId?: string | null
  }

  export type CasasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CasasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    productoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CodigoDeBarrasCreateInput = {
    id?: string
    nombre: string
    codigoBarras?: string | null
    productoId: string
    Lotes?: LoteCreateNestedManyWithoutCodigoBarrasInput
  }

  export type CodigoDeBarrasUncheckedCreateInput = {
    id?: string
    nombre: string
    codigoBarras?: string | null
    productoId: string
    Lotes?: LoteUncheckedCreateNestedManyWithoutCodigoBarrasInput
  }

  export type CodigoDeBarrasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    productoId?: StringFieldUpdateOperationsInput | string
    Lotes?: LoteUpdateManyWithoutCodigoBarrasNestedInput
  }

  export type CodigoDeBarrasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    productoId?: StringFieldUpdateOperationsInput | string
    Lotes?: LoteUncheckedUpdateManyWithoutCodigoBarrasNestedInput
  }

  export type CodigoDeBarrasCreateManyInput = {
    id?: string
    nombre: string
    codigoBarras?: string | null
    productoId: string
  }

  export type CodigoDeBarrasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    productoId?: StringFieldUpdateOperationsInput | string
  }

  export type CodigoDeBarrasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    productoId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoCreateInput = {
    id?: string
    nombre: string
    descripcion: string
    codigoBarras?: string | null
    presentacion: string
    generico: string
    gramaje: string
    costo: number
    precioVenta: number
    alertaStock: boolean
    casa: string
    cantUnidad?: number
    cantCaja: number
    cantBlister: number
    precioUnitario: number
    precioBlister: number
    precioCaja: number
    costoCompraUnitario: number
    costoCompraBlister: number
    costoCompraCaja: number
    createdAt?: Date | string
    Casas?: CasasCreateNestedManyWithoutProductoInput
    lotes?: LoteCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    id?: string
    nombre: string
    descripcion: string
    codigoBarras?: string | null
    presentacion: string
    generico: string
    gramaje: string
    costo: number
    precioVenta: number
    alertaStock: boolean
    casa: string
    cantUnidad?: number
    cantCaja: number
    cantBlister: number
    precioUnitario: number
    precioBlister: number
    precioCaja: number
    costoCompraUnitario: number
    costoCompraBlister: number
    costoCompraCaja: number
    createdAt?: Date | string
    Casas?: CasasUncheckedCreateNestedManyWithoutProductoInput
    lotes?: LoteUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    presentacion?: StringFieldUpdateOperationsInput | string
    generico?: StringFieldUpdateOperationsInput | string
    gramaje?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    precioVenta?: FloatFieldUpdateOperationsInput | number
    alertaStock?: BoolFieldUpdateOperationsInput | boolean
    casa?: StringFieldUpdateOperationsInput | string
    cantUnidad?: IntFieldUpdateOperationsInput | number
    cantCaja?: IntFieldUpdateOperationsInput | number
    cantBlister?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    precioBlister?: FloatFieldUpdateOperationsInput | number
    precioCaja?: FloatFieldUpdateOperationsInput | number
    costoCompraUnitario?: FloatFieldUpdateOperationsInput | number
    costoCompraBlister?: FloatFieldUpdateOperationsInput | number
    costoCompraCaja?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Casas?: CasasUpdateManyWithoutProductoNestedInput
    lotes?: LoteUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    presentacion?: StringFieldUpdateOperationsInput | string
    generico?: StringFieldUpdateOperationsInput | string
    gramaje?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    precioVenta?: FloatFieldUpdateOperationsInput | number
    alertaStock?: BoolFieldUpdateOperationsInput | boolean
    casa?: StringFieldUpdateOperationsInput | string
    cantUnidad?: IntFieldUpdateOperationsInput | number
    cantCaja?: IntFieldUpdateOperationsInput | number
    cantBlister?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    precioBlister?: FloatFieldUpdateOperationsInput | number
    precioCaja?: FloatFieldUpdateOperationsInput | number
    costoCompraUnitario?: FloatFieldUpdateOperationsInput | number
    costoCompraBlister?: FloatFieldUpdateOperationsInput | number
    costoCompraCaja?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Casas?: CasasUncheckedUpdateManyWithoutProductoNestedInput
    lotes?: LoteUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id?: string
    nombre: string
    descripcion: string
    codigoBarras?: string | null
    presentacion: string
    generico: string
    gramaje: string
    costo: number
    precioVenta: number
    alertaStock: boolean
    casa: string
    cantUnidad?: number
    cantCaja: number
    cantBlister: number
    precioUnitario: number
    precioBlister: number
    precioCaja: number
    costoCompraUnitario: number
    costoCompraBlister: number
    costoCompraCaja: number
    createdAt?: Date | string
  }

  export type ProductoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    presentacion?: StringFieldUpdateOperationsInput | string
    generico?: StringFieldUpdateOperationsInput | string
    gramaje?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    precioVenta?: FloatFieldUpdateOperationsInput | number
    alertaStock?: BoolFieldUpdateOperationsInput | boolean
    casa?: StringFieldUpdateOperationsInput | string
    cantUnidad?: IntFieldUpdateOperationsInput | number
    cantCaja?: IntFieldUpdateOperationsInput | number
    cantBlister?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    precioBlister?: FloatFieldUpdateOperationsInput | number
    precioCaja?: FloatFieldUpdateOperationsInput | number
    costoCompraUnitario?: FloatFieldUpdateOperationsInput | number
    costoCompraBlister?: FloatFieldUpdateOperationsInput | number
    costoCompraCaja?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    presentacion?: StringFieldUpdateOperationsInput | string
    generico?: StringFieldUpdateOperationsInput | string
    gramaje?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    precioVenta?: FloatFieldUpdateOperationsInput | number
    alertaStock?: BoolFieldUpdateOperationsInput | boolean
    casa?: StringFieldUpdateOperationsInput | string
    cantUnidad?: IntFieldUpdateOperationsInput | number
    cantCaja?: IntFieldUpdateOperationsInput | number
    cantBlister?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    precioBlister?: FloatFieldUpdateOperationsInput | number
    precioCaja?: FloatFieldUpdateOperationsInput | number
    costoCompraUnitario?: FloatFieldUpdateOperationsInput | number
    costoCompraBlister?: FloatFieldUpdateOperationsInput | number
    costoCompraCaja?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoteCreateInput = {
    id?: string
    origen: string
    nombre: string
    fechaVencimiento?: Date | string | null
    stockTotal?: number
    stockPorCaja?: number
    stockPorBlister?: number
    createdAt?: Date | string
    codigoBarras?: CodigoDeBarrasCreateNestedOneWithoutLotesInput
    compra?: CompraCreateNestedOneWithoutLotesInput
    producto: ProductoCreateNestedOneWithoutLotesInput
  }

  export type LoteUncheckedCreateInput = {
    id?: string
    origen: string
    productoId: string
    nombre: string
    fechaVencimiento?: Date | string | null
    stockTotal?: number
    stockPorCaja?: number
    stockPorBlister?: number
    createdAt?: Date | string
    codigoBarrasId?: string | null
    compraId?: string | null
  }

  export type LoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockTotal?: IntFieldUpdateOperationsInput | number
    stockPorCaja?: IntFieldUpdateOperationsInput | number
    stockPorBlister?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codigoBarras?: CodigoDeBarrasUpdateOneWithoutLotesNestedInput
    compra?: CompraUpdateOneWithoutLotesNestedInput
    producto?: ProductoUpdateOneRequiredWithoutLotesNestedInput
  }

  export type LoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockTotal?: IntFieldUpdateOperationsInput | number
    stockPorCaja?: IntFieldUpdateOperationsInput | number
    stockPorBlister?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codigoBarrasId?: NullableStringFieldUpdateOperationsInput | string | null
    compraId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LoteCreateManyInput = {
    id?: string
    origen: string
    productoId: string
    nombre: string
    fechaVencimiento?: Date | string | null
    stockTotal?: number
    stockPorCaja?: number
    stockPorBlister?: number
    createdAt?: Date | string
    codigoBarrasId?: string | null
    compraId?: string | null
  }

  export type LoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockTotal?: IntFieldUpdateOperationsInput | number
    stockPorCaja?: IntFieldUpdateOperationsInput | number
    stockPorBlister?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockTotal?: IntFieldUpdateOperationsInput | number
    stockPorCaja?: IntFieldUpdateOperationsInput | number
    stockPorBlister?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codigoBarrasId?: NullableStringFieldUpdateOperationsInput | string | null
    compraId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompraCreateInput = {
    id?: string
    Proveedor: string
    observaciones: string
    correlativo: number
    Comprador: string
    visitador: string
    total: number
    estado?: string
    fecha: Date | string
    Lotes?: LoteCreateNestedManyWithoutCompraInput
    DetalleDeCompras?: DetalleDeComprasCreateNestedManyWithoutCompraInput
    Proveedores?: ProveedorCreateNestedOneWithoutComprasInput
  }

  export type CompraUncheckedCreateInput = {
    id?: string
    Proveedor: string
    proveedorId?: string | null
    observaciones: string
    correlativo: number
    Comprador: string
    visitador: string
    total: number
    estado?: string
    fecha: Date | string
    Lotes?: LoteUncheckedCreateNestedManyWithoutCompraInput
    DetalleDeCompras?: DetalleDeComprasUncheckedCreateNestedManyWithoutCompraInput
  }

  export type CompraUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Proveedor?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    Comprador?: StringFieldUpdateOperationsInput | string
    visitador?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Lotes?: LoteUpdateManyWithoutCompraNestedInput
    DetalleDeCompras?: DetalleDeComprasUpdateManyWithoutCompraNestedInput
    Proveedores?: ProveedorUpdateOneWithoutComprasNestedInput
  }

  export type CompraUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Proveedor?: StringFieldUpdateOperationsInput | string
    proveedorId?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    Comprador?: StringFieldUpdateOperationsInput | string
    visitador?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Lotes?: LoteUncheckedUpdateManyWithoutCompraNestedInput
    DetalleDeCompras?: DetalleDeComprasUncheckedUpdateManyWithoutCompraNestedInput
  }

  export type CompraCreateManyInput = {
    id?: string
    Proveedor: string
    proveedorId?: string | null
    observaciones: string
    correlativo: number
    Comprador: string
    visitador: string
    total: number
    estado?: string
    fecha: Date | string
  }

  export type CompraUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    Proveedor?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    Comprador?: StringFieldUpdateOperationsInput | string
    visitador?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompraUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    Proveedor?: StringFieldUpdateOperationsInput | string
    proveedorId?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    Comprador?: StringFieldUpdateOperationsInput | string
    visitador?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagosRealizadosCompraCreateInput = {
    id?: string
    fechaPago?: Date | string | null
    monto: number
    Proveedores?: ProveedorCreateNestedOneWithoutPagosRealizadosCompraInput
  }

  export type PagosRealizadosCompraUncheckedCreateInput = {
    id?: string
    fechaPago?: Date | string | null
    monto: number
    proveedorId?: string | null
  }

  export type PagosRealizadosCompraUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto?: FloatFieldUpdateOperationsInput | number
    Proveedores?: ProveedorUpdateOneWithoutPagosRealizadosCompraNestedInput
  }

  export type PagosRealizadosCompraUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto?: FloatFieldUpdateOperationsInput | number
    proveedorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagosRealizadosCompraCreateManyInput = {
    id?: string
    fechaPago?: Date | string | null
    monto: number
    proveedorId?: string | null
  }

  export type PagosRealizadosCompraUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto?: FloatFieldUpdateOperationsInput | number
  }

  export type PagosRealizadosCompraUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto?: FloatFieldUpdateOperationsInput | number
    proveedorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VentaCreateInput = {
    id?: string
    nombreCliente: string
    fechaDePago?: Date | string | null
    estado: string
    correlativo: number
    total?: number
    fecha: Date | string
    noVenta?: number
    gananciaTotal?: number
    detalles?: ListaProductosCreateNestedManyWithoutVentaInput
    cliente?: ClienteCreateNestedOneWithoutVentasInput
  }

  export type VentaUncheckedCreateInput = {
    id?: string
    nombreCliente: string
    fechaDePago?: Date | string | null
    estado: string
    correlativo: number
    total?: number
    fecha: Date | string
    noVenta?: number
    gananciaTotal?: number
    clienteId?: string | null
    detalles?: ListaProductosUncheckedCreateNestedManyWithoutVentaInput
  }

  export type VentaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    fechaDePago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    gananciaTotal?: FloatFieldUpdateOperationsInput | number
    detalles?: ListaProductosUpdateManyWithoutVentaNestedInput
    cliente?: ClienteUpdateOneWithoutVentasNestedInput
  }

  export type VentaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    fechaDePago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    noVenta?: IntFieldUpdateOperationsInput | number
    gananciaTotal?: FloatFieldUpdateOperationsInput | number
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    detalles?: ListaProductosUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type VentaCreateManyInput = {
    id?: string
    nombreCliente: string
    fechaDePago?: Date | string | null
    estado: string
    correlativo: number
    total?: number
    fecha: Date | string
    noVenta?: number
    gananciaTotal?: number
    clienteId?: string | null
  }

  export type VentaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    fechaDePago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    gananciaTotal?: FloatFieldUpdateOperationsInput | number
  }

  export type VentaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    fechaDePago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    noVenta?: IntFieldUpdateOperationsInput | number
    gananciaTotal?: FloatFieldUpdateOperationsInput | number
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagosRealizadosVentasCreateInput = {
    id?: string
    fechaPago?: Date | string | null
    monto: number
    cliente?: ClienteCreateNestedOneWithoutPagosRealizadosVentaInput
  }

  export type PagosRealizadosVentasUncheckedCreateInput = {
    id?: string
    fechaPago?: Date | string | null
    monto: number
    clienteId?: string | null
  }

  export type PagosRealizadosVentasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto?: FloatFieldUpdateOperationsInput | number
    cliente?: ClienteUpdateOneWithoutPagosRealizadosVentaNestedInput
  }

  export type PagosRealizadosVentasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto?: FloatFieldUpdateOperationsInput | number
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagosRealizadosVentasCreateManyInput = {
    id?: string
    fechaPago?: Date | string | null
    monto: number
    clienteId?: string | null
  }

  export type PagosRealizadosVentasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto?: FloatFieldUpdateOperationsInput | number
  }

  export type PagosRealizadosVentasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto?: FloatFieldUpdateOperationsInput | number
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListaProductosCreateInput = {
    id?: string
    presentacion: string
    productoId: string
    nombreProducto: string
    subGanancia?: number
    cantidad: number
    subtotal?: number
    fechaDeVencimiento?: Date | string | null
    loteId: string
    venta: VentaCreateNestedOneWithoutDetallesInput
  }

  export type ListaProductosUncheckedCreateInput = {
    id?: string
    ventaId: string
    presentacion: string
    productoId: string
    nombreProducto: string
    subGanancia?: number
    cantidad: number
    subtotal?: number
    fechaDeVencimiento?: Date | string | null
    loteId: string
  }

  export type ListaProductosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    presentacion?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    nombreProducto?: StringFieldUpdateOperationsInput | string
    subGanancia?: FloatFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    fechaDeVencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loteId?: StringFieldUpdateOperationsInput | string
    venta?: VentaUpdateOneRequiredWithoutDetallesNestedInput
  }

  export type ListaProductosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ventaId?: StringFieldUpdateOperationsInput | string
    presentacion?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    nombreProducto?: StringFieldUpdateOperationsInput | string
    subGanancia?: FloatFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    fechaDeVencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loteId?: StringFieldUpdateOperationsInput | string
  }

  export type ListaProductosCreateManyInput = {
    id?: string
    ventaId: string
    presentacion: string
    productoId: string
    nombreProducto: string
    subGanancia?: number
    cantidad: number
    subtotal?: number
    fechaDeVencimiento?: Date | string | null
    loteId: string
  }

  export type ListaProductosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    presentacion?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    nombreProducto?: StringFieldUpdateOperationsInput | string
    subGanancia?: FloatFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    fechaDeVencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loteId?: StringFieldUpdateOperationsInput | string
  }

  export type ListaProductosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ventaId?: StringFieldUpdateOperationsInput | string
    presentacion?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    nombreProducto?: StringFieldUpdateOperationsInput | string
    subGanancia?: FloatFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    fechaDeVencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loteId?: StringFieldUpdateOperationsInput | string
  }

  export type DetalleDeComprasCreateInput = {
    id?: string
    productoId: string
    stockTotal?: number
    stockPorCaja?: number
    stockPorBlister?: number
    precioCosto: number
    fecha: Date | string
    fechaDeVencimiento: Date | string
    origen: string
    nombreProducto: string
    cantidad: number
    compra: CompraCreateNestedOneWithoutDetalleDeComprasInput
  }

  export type DetalleDeComprasUncheckedCreateInput = {
    id?: string
    compraId: string
    productoId: string
    stockTotal?: number
    stockPorCaja?: number
    stockPorBlister?: number
    precioCosto: number
    fecha: Date | string
    fechaDeVencimiento: Date | string
    origen: string
    nombreProducto: string
    cantidad: number
  }

  export type DetalleDeComprasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    stockTotal?: IntFieldUpdateOperationsInput | number
    stockPorCaja?: IntFieldUpdateOperationsInput | number
    stockPorBlister?: IntFieldUpdateOperationsInput | number
    precioCosto?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaDeVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    origen?: StringFieldUpdateOperationsInput | string
    nombreProducto?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    compra?: CompraUpdateOneRequiredWithoutDetalleDeComprasNestedInput
  }

  export type DetalleDeComprasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    compraId?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    stockTotal?: IntFieldUpdateOperationsInput | number
    stockPorCaja?: IntFieldUpdateOperationsInput | number
    stockPorBlister?: IntFieldUpdateOperationsInput | number
    precioCosto?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaDeVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    origen?: StringFieldUpdateOperationsInput | string
    nombreProducto?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleDeComprasCreateManyInput = {
    id?: string
    compraId: string
    productoId: string
    stockTotal?: number
    stockPorCaja?: number
    stockPorBlister?: number
    precioCosto: number
    fecha: Date | string
    fechaDeVencimiento: Date | string
    origen: string
    nombreProducto: string
    cantidad: number
  }

  export type DetalleDeComprasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    stockTotal?: IntFieldUpdateOperationsInput | number
    stockPorCaja?: IntFieldUpdateOperationsInput | number
    stockPorBlister?: IntFieldUpdateOperationsInput | number
    precioCosto?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaDeVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    origen?: StringFieldUpdateOperationsInput | string
    nombreProducto?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleDeComprasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    compraId?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    stockTotal?: IntFieldUpdateOperationsInput | number
    stockPorCaja?: IntFieldUpdateOperationsInput | number
    stockPorBlister?: IntFieldUpdateOperationsInput | number
    precioCosto?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaDeVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    origen?: StringFieldUpdateOperationsInput | string
    nombreProducto?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    password?: SortOrder
    permisos?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CompraListRelationFilter = {
    every?: CompraWhereInput
    some?: CompraWhereInput
    none?: CompraWhereInput
  }

  export type PagosRealizadosCompraListRelationFilter = {
    every?: PagosRealizadosCompraWhereInput
    some?: PagosRealizadosCompraWhereInput
    none?: PagosRealizadosCompraWhereInput
  }

  export type CompraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PagosRealizadosCompraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProveedorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    encargado?: SortOrder
    telefono?: SortOrder
    Departamento?: SortOrder
    Municipio?: SortOrder
    correlativo?: SortOrder
    direccion?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type ProveedorAvgOrderByAggregateInput = {
    correlativo?: SortOrder
  }

  export type ProveedorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    encargado?: SortOrder
    telefono?: SortOrder
    Departamento?: SortOrder
    Municipio?: SortOrder
    correlativo?: SortOrder
    direccion?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type ProveedorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    encargado?: SortOrder
    telefono?: SortOrder
    Departamento?: SortOrder
    Municipio?: SortOrder
    correlativo?: SortOrder
    direccion?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type ProveedorSumOrderByAggregateInput = {
    correlativo?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type VentaListRelationFilter = {
    every?: VentaWhereInput
    some?: VentaWhereInput
    none?: VentaWhereInput
  }

  export type PagosRealizadosVentasListRelationFilter = {
    every?: PagosRealizadosVentasWhereInput
    some?: PagosRealizadosVentasWhereInput
    none?: PagosRealizadosVentasWhereInput
  }

  export type VentaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PagosRealizadosVentasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    encargado?: SortOrder
    telefono?: SortOrder
    Departamento?: SortOrder
    Municipio?: SortOrder
    correlativo?: SortOrder
    direccion?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    correlativo?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    encargado?: SortOrder
    telefono?: SortOrder
    Departamento?: SortOrder
    Municipio?: SortOrder
    correlativo?: SortOrder
    direccion?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    encargado?: SortOrder
    telefono?: SortOrder
    Departamento?: SortOrder
    Municipio?: SortOrder
    correlativo?: SortOrder
    direccion?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    correlativo?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProductoNullableScalarRelationFilter = {
    is?: ProductoWhereInput | null
    isNot?: ProductoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CasasCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    productoId?: SortOrder
  }

  export type CasasMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    productoId?: SortOrder
  }

  export type CasasMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    productoId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type LoteListRelationFilter = {
    every?: LoteWhereInput
    some?: LoteWhereInput
    none?: LoteWhereInput
  }

  export type LoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CodigoDeBarrasCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigoBarras?: SortOrder
    productoId?: SortOrder
  }

  export type CodigoDeBarrasMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigoBarras?: SortOrder
    productoId?: SortOrder
  }

  export type CodigoDeBarrasMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigoBarras?: SortOrder
    productoId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CasasListRelationFilter = {
    every?: CasasWhereInput
    some?: CasasWhereInput
    none?: CasasWhereInput
  }

  export type CasasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    codigoBarras?: SortOrder
    presentacion?: SortOrder
    generico?: SortOrder
    gramaje?: SortOrder
    costo?: SortOrder
    precioVenta?: SortOrder
    alertaStock?: SortOrder
    casa?: SortOrder
    cantUnidad?: SortOrder
    cantCaja?: SortOrder
    cantBlister?: SortOrder
    precioUnitario?: SortOrder
    precioBlister?: SortOrder
    precioCaja?: SortOrder
    costoCompraUnitario?: SortOrder
    costoCompraBlister?: SortOrder
    costoCompraCaja?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    costo?: SortOrder
    precioVenta?: SortOrder
    cantUnidad?: SortOrder
    cantCaja?: SortOrder
    cantBlister?: SortOrder
    precioUnitario?: SortOrder
    precioBlister?: SortOrder
    precioCaja?: SortOrder
    costoCompraUnitario?: SortOrder
    costoCompraBlister?: SortOrder
    costoCompraCaja?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    codigoBarras?: SortOrder
    presentacion?: SortOrder
    generico?: SortOrder
    gramaje?: SortOrder
    costo?: SortOrder
    precioVenta?: SortOrder
    alertaStock?: SortOrder
    casa?: SortOrder
    cantUnidad?: SortOrder
    cantCaja?: SortOrder
    cantBlister?: SortOrder
    precioUnitario?: SortOrder
    precioBlister?: SortOrder
    precioCaja?: SortOrder
    costoCompraUnitario?: SortOrder
    costoCompraBlister?: SortOrder
    costoCompraCaja?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    codigoBarras?: SortOrder
    presentacion?: SortOrder
    generico?: SortOrder
    gramaje?: SortOrder
    costo?: SortOrder
    precioVenta?: SortOrder
    alertaStock?: SortOrder
    casa?: SortOrder
    cantUnidad?: SortOrder
    cantCaja?: SortOrder
    cantBlister?: SortOrder
    precioUnitario?: SortOrder
    precioBlister?: SortOrder
    precioCaja?: SortOrder
    costoCompraUnitario?: SortOrder
    costoCompraBlister?: SortOrder
    costoCompraCaja?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    costo?: SortOrder
    precioVenta?: SortOrder
    cantUnidad?: SortOrder
    cantCaja?: SortOrder
    cantBlister?: SortOrder
    precioUnitario?: SortOrder
    precioBlister?: SortOrder
    precioCaja?: SortOrder
    costoCompraUnitario?: SortOrder
    costoCompraBlister?: SortOrder
    costoCompraCaja?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CodigoDeBarrasNullableScalarRelationFilter = {
    is?: CodigoDeBarrasWhereInput | null
    isNot?: CodigoDeBarrasWhereInput | null
  }

  export type CompraNullableScalarRelationFilter = {
    is?: CompraWhereInput | null
    isNot?: CompraWhereInput | null
  }

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type LoteCountOrderByAggregateInput = {
    id?: SortOrder
    origen?: SortOrder
    productoId?: SortOrder
    nombre?: SortOrder
    fechaVencimiento?: SortOrder
    stockTotal?: SortOrder
    stockPorCaja?: SortOrder
    stockPorBlister?: SortOrder
    createdAt?: SortOrder
    codigoBarrasId?: SortOrder
    compraId?: SortOrder
  }

  export type LoteAvgOrderByAggregateInput = {
    stockTotal?: SortOrder
    stockPorCaja?: SortOrder
    stockPorBlister?: SortOrder
  }

  export type LoteMaxOrderByAggregateInput = {
    id?: SortOrder
    origen?: SortOrder
    productoId?: SortOrder
    nombre?: SortOrder
    fechaVencimiento?: SortOrder
    stockTotal?: SortOrder
    stockPorCaja?: SortOrder
    stockPorBlister?: SortOrder
    createdAt?: SortOrder
    codigoBarrasId?: SortOrder
    compraId?: SortOrder
  }

  export type LoteMinOrderByAggregateInput = {
    id?: SortOrder
    origen?: SortOrder
    productoId?: SortOrder
    nombre?: SortOrder
    fechaVencimiento?: SortOrder
    stockTotal?: SortOrder
    stockPorCaja?: SortOrder
    stockPorBlister?: SortOrder
    createdAt?: SortOrder
    codigoBarrasId?: SortOrder
    compraId?: SortOrder
  }

  export type LoteSumOrderByAggregateInput = {
    stockTotal?: SortOrder
    stockPorCaja?: SortOrder
    stockPorBlister?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DetalleDeComprasListRelationFilter = {
    every?: DetalleDeComprasWhereInput
    some?: DetalleDeComprasWhereInput
    none?: DetalleDeComprasWhereInput
  }

  export type ProveedorNullableScalarRelationFilter = {
    is?: ProveedorWhereInput | null
    isNot?: ProveedorWhereInput | null
  }

  export type DetalleDeComprasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompraCountOrderByAggregateInput = {
    id?: SortOrder
    Proveedor?: SortOrder
    proveedorId?: SortOrder
    observaciones?: SortOrder
    correlativo?: SortOrder
    Comprador?: SortOrder
    visitador?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    fecha?: SortOrder
  }

  export type CompraAvgOrderByAggregateInput = {
    correlativo?: SortOrder
    total?: SortOrder
  }

  export type CompraMaxOrderByAggregateInput = {
    id?: SortOrder
    Proveedor?: SortOrder
    proveedorId?: SortOrder
    observaciones?: SortOrder
    correlativo?: SortOrder
    Comprador?: SortOrder
    visitador?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    fecha?: SortOrder
  }

  export type CompraMinOrderByAggregateInput = {
    id?: SortOrder
    Proveedor?: SortOrder
    proveedorId?: SortOrder
    observaciones?: SortOrder
    correlativo?: SortOrder
    Comprador?: SortOrder
    visitador?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    fecha?: SortOrder
  }

  export type CompraSumOrderByAggregateInput = {
    correlativo?: SortOrder
    total?: SortOrder
  }

  export type PagosRealizadosCompraCountOrderByAggregateInput = {
    id?: SortOrder
    fechaPago?: SortOrder
    monto?: SortOrder
    proveedorId?: SortOrder
  }

  export type PagosRealizadosCompraAvgOrderByAggregateInput = {
    monto?: SortOrder
  }

  export type PagosRealizadosCompraMaxOrderByAggregateInput = {
    id?: SortOrder
    fechaPago?: SortOrder
    monto?: SortOrder
    proveedorId?: SortOrder
  }

  export type PagosRealizadosCompraMinOrderByAggregateInput = {
    id?: SortOrder
    fechaPago?: SortOrder
    monto?: SortOrder
    proveedorId?: SortOrder
  }

  export type PagosRealizadosCompraSumOrderByAggregateInput = {
    monto?: SortOrder
  }

  export type ListaProductosListRelationFilter = {
    every?: ListaProductosWhereInput
    some?: ListaProductosWhereInput
    none?: ListaProductosWhereInput
  }

  export type ClienteNullableScalarRelationFilter = {
    is?: ClienteWhereInput | null
    isNot?: ClienteWhereInput | null
  }

  export type ListaProductosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VentaCountOrderByAggregateInput = {
    id?: SortOrder
    nombreCliente?: SortOrder
    fechaDePago?: SortOrder
    estado?: SortOrder
    correlativo?: SortOrder
    total?: SortOrder
    fecha?: SortOrder
    noVenta?: SortOrder
    gananciaTotal?: SortOrder
    clienteId?: SortOrder
  }

  export type VentaAvgOrderByAggregateInput = {
    correlativo?: SortOrder
    total?: SortOrder
    noVenta?: SortOrder
    gananciaTotal?: SortOrder
  }

  export type VentaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombreCliente?: SortOrder
    fechaDePago?: SortOrder
    estado?: SortOrder
    correlativo?: SortOrder
    total?: SortOrder
    fecha?: SortOrder
    noVenta?: SortOrder
    gananciaTotal?: SortOrder
    clienteId?: SortOrder
  }

  export type VentaMinOrderByAggregateInput = {
    id?: SortOrder
    nombreCliente?: SortOrder
    fechaDePago?: SortOrder
    estado?: SortOrder
    correlativo?: SortOrder
    total?: SortOrder
    fecha?: SortOrder
    noVenta?: SortOrder
    gananciaTotal?: SortOrder
    clienteId?: SortOrder
  }

  export type VentaSumOrderByAggregateInput = {
    correlativo?: SortOrder
    total?: SortOrder
    noVenta?: SortOrder
    gananciaTotal?: SortOrder
  }

  export type PagosRealizadosVentasCountOrderByAggregateInput = {
    id?: SortOrder
    fechaPago?: SortOrder
    monto?: SortOrder
    clienteId?: SortOrder
  }

  export type PagosRealizadosVentasAvgOrderByAggregateInput = {
    monto?: SortOrder
  }

  export type PagosRealizadosVentasMaxOrderByAggregateInput = {
    id?: SortOrder
    fechaPago?: SortOrder
    monto?: SortOrder
    clienteId?: SortOrder
  }

  export type PagosRealizadosVentasMinOrderByAggregateInput = {
    id?: SortOrder
    fechaPago?: SortOrder
    monto?: SortOrder
    clienteId?: SortOrder
  }

  export type PagosRealizadosVentasSumOrderByAggregateInput = {
    monto?: SortOrder
  }

  export type VentaScalarRelationFilter = {
    is?: VentaWhereInput
    isNot?: VentaWhereInput
  }

  export type ListaProductosCountOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    presentacion?: SortOrder
    productoId?: SortOrder
    nombreProducto?: SortOrder
    subGanancia?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
    fechaDeVencimiento?: SortOrder
    loteId?: SortOrder
  }

  export type ListaProductosAvgOrderByAggregateInput = {
    subGanancia?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
  }

  export type ListaProductosMaxOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    presentacion?: SortOrder
    productoId?: SortOrder
    nombreProducto?: SortOrder
    subGanancia?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
    fechaDeVencimiento?: SortOrder
    loteId?: SortOrder
  }

  export type ListaProductosMinOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    presentacion?: SortOrder
    productoId?: SortOrder
    nombreProducto?: SortOrder
    subGanancia?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
    fechaDeVencimiento?: SortOrder
    loteId?: SortOrder
  }

  export type ListaProductosSumOrderByAggregateInput = {
    subGanancia?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
  }

  export type CompraScalarRelationFilter = {
    is?: CompraWhereInput
    isNot?: CompraWhereInput
  }

  export type DetalleDeComprasCountOrderByAggregateInput = {
    id?: SortOrder
    compraId?: SortOrder
    productoId?: SortOrder
    stockTotal?: SortOrder
    stockPorCaja?: SortOrder
    stockPorBlister?: SortOrder
    precioCosto?: SortOrder
    fecha?: SortOrder
    fechaDeVencimiento?: SortOrder
    origen?: SortOrder
    nombreProducto?: SortOrder
    cantidad?: SortOrder
  }

  export type DetalleDeComprasAvgOrderByAggregateInput = {
    stockTotal?: SortOrder
    stockPorCaja?: SortOrder
    stockPorBlister?: SortOrder
    precioCosto?: SortOrder
    cantidad?: SortOrder
  }

  export type DetalleDeComprasMaxOrderByAggregateInput = {
    id?: SortOrder
    compraId?: SortOrder
    productoId?: SortOrder
    stockTotal?: SortOrder
    stockPorCaja?: SortOrder
    stockPorBlister?: SortOrder
    precioCosto?: SortOrder
    fecha?: SortOrder
    fechaDeVencimiento?: SortOrder
    origen?: SortOrder
    nombreProducto?: SortOrder
    cantidad?: SortOrder
  }

  export type DetalleDeComprasMinOrderByAggregateInput = {
    id?: SortOrder
    compraId?: SortOrder
    productoId?: SortOrder
    stockTotal?: SortOrder
    stockPorCaja?: SortOrder
    stockPorBlister?: SortOrder
    precioCosto?: SortOrder
    fecha?: SortOrder
    fechaDeVencimiento?: SortOrder
    origen?: SortOrder
    nombreProducto?: SortOrder
    cantidad?: SortOrder
  }

  export type DetalleDeComprasSumOrderByAggregateInput = {
    stockTotal?: SortOrder
    stockPorCaja?: SortOrder
    stockPorBlister?: SortOrder
    precioCosto?: SortOrder
    cantidad?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CompraCreateNestedManyWithoutProveedoresInput = {
    create?: XOR<CompraCreateWithoutProveedoresInput, CompraUncheckedCreateWithoutProveedoresInput> | CompraCreateWithoutProveedoresInput[] | CompraUncheckedCreateWithoutProveedoresInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutProveedoresInput | CompraCreateOrConnectWithoutProveedoresInput[]
    createMany?: CompraCreateManyProveedoresInputEnvelope
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
  }

  export type PagosRealizadosCompraCreateNestedManyWithoutProveedoresInput = {
    create?: XOR<PagosRealizadosCompraCreateWithoutProveedoresInput, PagosRealizadosCompraUncheckedCreateWithoutProveedoresInput> | PagosRealizadosCompraCreateWithoutProveedoresInput[] | PagosRealizadosCompraUncheckedCreateWithoutProveedoresInput[]
    connectOrCreate?: PagosRealizadosCompraCreateOrConnectWithoutProveedoresInput | PagosRealizadosCompraCreateOrConnectWithoutProveedoresInput[]
    createMany?: PagosRealizadosCompraCreateManyProveedoresInputEnvelope
    connect?: PagosRealizadosCompraWhereUniqueInput | PagosRealizadosCompraWhereUniqueInput[]
  }

  export type CompraUncheckedCreateNestedManyWithoutProveedoresInput = {
    create?: XOR<CompraCreateWithoutProveedoresInput, CompraUncheckedCreateWithoutProveedoresInput> | CompraCreateWithoutProveedoresInput[] | CompraUncheckedCreateWithoutProveedoresInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutProveedoresInput | CompraCreateOrConnectWithoutProveedoresInput[]
    createMany?: CompraCreateManyProveedoresInputEnvelope
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
  }

  export type PagosRealizadosCompraUncheckedCreateNestedManyWithoutProveedoresInput = {
    create?: XOR<PagosRealizadosCompraCreateWithoutProveedoresInput, PagosRealizadosCompraUncheckedCreateWithoutProveedoresInput> | PagosRealizadosCompraCreateWithoutProveedoresInput[] | PagosRealizadosCompraUncheckedCreateWithoutProveedoresInput[]
    connectOrCreate?: PagosRealizadosCompraCreateOrConnectWithoutProveedoresInput | PagosRealizadosCompraCreateOrConnectWithoutProveedoresInput[]
    createMany?: PagosRealizadosCompraCreateManyProveedoresInputEnvelope
    connect?: PagosRealizadosCompraWhereUniqueInput | PagosRealizadosCompraWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompraUpdateManyWithoutProveedoresNestedInput = {
    create?: XOR<CompraCreateWithoutProveedoresInput, CompraUncheckedCreateWithoutProveedoresInput> | CompraCreateWithoutProveedoresInput[] | CompraUncheckedCreateWithoutProveedoresInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutProveedoresInput | CompraCreateOrConnectWithoutProveedoresInput[]
    upsert?: CompraUpsertWithWhereUniqueWithoutProveedoresInput | CompraUpsertWithWhereUniqueWithoutProveedoresInput[]
    createMany?: CompraCreateManyProveedoresInputEnvelope
    set?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    disconnect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    delete?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    update?: CompraUpdateWithWhereUniqueWithoutProveedoresInput | CompraUpdateWithWhereUniqueWithoutProveedoresInput[]
    updateMany?: CompraUpdateManyWithWhereWithoutProveedoresInput | CompraUpdateManyWithWhereWithoutProveedoresInput[]
    deleteMany?: CompraScalarWhereInput | CompraScalarWhereInput[]
  }

  export type PagosRealizadosCompraUpdateManyWithoutProveedoresNestedInput = {
    create?: XOR<PagosRealizadosCompraCreateWithoutProveedoresInput, PagosRealizadosCompraUncheckedCreateWithoutProveedoresInput> | PagosRealizadosCompraCreateWithoutProveedoresInput[] | PagosRealizadosCompraUncheckedCreateWithoutProveedoresInput[]
    connectOrCreate?: PagosRealizadosCompraCreateOrConnectWithoutProveedoresInput | PagosRealizadosCompraCreateOrConnectWithoutProveedoresInput[]
    upsert?: PagosRealizadosCompraUpsertWithWhereUniqueWithoutProveedoresInput | PagosRealizadosCompraUpsertWithWhereUniqueWithoutProveedoresInput[]
    createMany?: PagosRealizadosCompraCreateManyProveedoresInputEnvelope
    set?: PagosRealizadosCompraWhereUniqueInput | PagosRealizadosCompraWhereUniqueInput[]
    disconnect?: PagosRealizadosCompraWhereUniqueInput | PagosRealizadosCompraWhereUniqueInput[]
    delete?: PagosRealizadosCompraWhereUniqueInput | PagosRealizadosCompraWhereUniqueInput[]
    connect?: PagosRealizadosCompraWhereUniqueInput | PagosRealizadosCompraWhereUniqueInput[]
    update?: PagosRealizadosCompraUpdateWithWhereUniqueWithoutProveedoresInput | PagosRealizadosCompraUpdateWithWhereUniqueWithoutProveedoresInput[]
    updateMany?: PagosRealizadosCompraUpdateManyWithWhereWithoutProveedoresInput | PagosRealizadosCompraUpdateManyWithWhereWithoutProveedoresInput[]
    deleteMany?: PagosRealizadosCompraScalarWhereInput | PagosRealizadosCompraScalarWhereInput[]
  }

  export type CompraUncheckedUpdateManyWithoutProveedoresNestedInput = {
    create?: XOR<CompraCreateWithoutProveedoresInput, CompraUncheckedCreateWithoutProveedoresInput> | CompraCreateWithoutProveedoresInput[] | CompraUncheckedCreateWithoutProveedoresInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutProveedoresInput | CompraCreateOrConnectWithoutProveedoresInput[]
    upsert?: CompraUpsertWithWhereUniqueWithoutProveedoresInput | CompraUpsertWithWhereUniqueWithoutProveedoresInput[]
    createMany?: CompraCreateManyProveedoresInputEnvelope
    set?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    disconnect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    delete?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    update?: CompraUpdateWithWhereUniqueWithoutProveedoresInput | CompraUpdateWithWhereUniqueWithoutProveedoresInput[]
    updateMany?: CompraUpdateManyWithWhereWithoutProveedoresInput | CompraUpdateManyWithWhereWithoutProveedoresInput[]
    deleteMany?: CompraScalarWhereInput | CompraScalarWhereInput[]
  }

  export type PagosRealizadosCompraUncheckedUpdateManyWithoutProveedoresNestedInput = {
    create?: XOR<PagosRealizadosCompraCreateWithoutProveedoresInput, PagosRealizadosCompraUncheckedCreateWithoutProveedoresInput> | PagosRealizadosCompraCreateWithoutProveedoresInput[] | PagosRealizadosCompraUncheckedCreateWithoutProveedoresInput[]
    connectOrCreate?: PagosRealizadosCompraCreateOrConnectWithoutProveedoresInput | PagosRealizadosCompraCreateOrConnectWithoutProveedoresInput[]
    upsert?: PagosRealizadosCompraUpsertWithWhereUniqueWithoutProveedoresInput | PagosRealizadosCompraUpsertWithWhereUniqueWithoutProveedoresInput[]
    createMany?: PagosRealizadosCompraCreateManyProveedoresInputEnvelope
    set?: PagosRealizadosCompraWhereUniqueInput | PagosRealizadosCompraWhereUniqueInput[]
    disconnect?: PagosRealizadosCompraWhereUniqueInput | PagosRealizadosCompraWhereUniqueInput[]
    delete?: PagosRealizadosCompraWhereUniqueInput | PagosRealizadosCompraWhereUniqueInput[]
    connect?: PagosRealizadosCompraWhereUniqueInput | PagosRealizadosCompraWhereUniqueInput[]
    update?: PagosRealizadosCompraUpdateWithWhereUniqueWithoutProveedoresInput | PagosRealizadosCompraUpdateWithWhereUniqueWithoutProveedoresInput[]
    updateMany?: PagosRealizadosCompraUpdateManyWithWhereWithoutProveedoresInput | PagosRealizadosCompraUpdateManyWithWhereWithoutProveedoresInput[]
    deleteMany?: PagosRealizadosCompraScalarWhereInput | PagosRealizadosCompraScalarWhereInput[]
  }

  export type VentaCreateNestedManyWithoutClienteInput = {
    create?: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput> | VentaCreateWithoutClienteInput[] | VentaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutClienteInput | VentaCreateOrConnectWithoutClienteInput[]
    createMany?: VentaCreateManyClienteInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type PagosRealizadosVentasCreateNestedManyWithoutClienteInput = {
    create?: XOR<PagosRealizadosVentasCreateWithoutClienteInput, PagosRealizadosVentasUncheckedCreateWithoutClienteInput> | PagosRealizadosVentasCreateWithoutClienteInput[] | PagosRealizadosVentasUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PagosRealizadosVentasCreateOrConnectWithoutClienteInput | PagosRealizadosVentasCreateOrConnectWithoutClienteInput[]
    createMany?: PagosRealizadosVentasCreateManyClienteInputEnvelope
    connect?: PagosRealizadosVentasWhereUniqueInput | PagosRealizadosVentasWhereUniqueInput[]
  }

  export type VentaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput> | VentaCreateWithoutClienteInput[] | VentaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutClienteInput | VentaCreateOrConnectWithoutClienteInput[]
    createMany?: VentaCreateManyClienteInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type PagosRealizadosVentasUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<PagosRealizadosVentasCreateWithoutClienteInput, PagosRealizadosVentasUncheckedCreateWithoutClienteInput> | PagosRealizadosVentasCreateWithoutClienteInput[] | PagosRealizadosVentasUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PagosRealizadosVentasCreateOrConnectWithoutClienteInput | PagosRealizadosVentasCreateOrConnectWithoutClienteInput[]
    createMany?: PagosRealizadosVentasCreateManyClienteInputEnvelope
    connect?: PagosRealizadosVentasWhereUniqueInput | PagosRealizadosVentasWhereUniqueInput[]
  }

  export type VentaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput> | VentaCreateWithoutClienteInput[] | VentaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutClienteInput | VentaCreateOrConnectWithoutClienteInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutClienteInput | VentaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: VentaCreateManyClienteInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutClienteInput | VentaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutClienteInput | VentaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type PagosRealizadosVentasUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PagosRealizadosVentasCreateWithoutClienteInput, PagosRealizadosVentasUncheckedCreateWithoutClienteInput> | PagosRealizadosVentasCreateWithoutClienteInput[] | PagosRealizadosVentasUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PagosRealizadosVentasCreateOrConnectWithoutClienteInput | PagosRealizadosVentasCreateOrConnectWithoutClienteInput[]
    upsert?: PagosRealizadosVentasUpsertWithWhereUniqueWithoutClienteInput | PagosRealizadosVentasUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PagosRealizadosVentasCreateManyClienteInputEnvelope
    set?: PagosRealizadosVentasWhereUniqueInput | PagosRealizadosVentasWhereUniqueInput[]
    disconnect?: PagosRealizadosVentasWhereUniqueInput | PagosRealizadosVentasWhereUniqueInput[]
    delete?: PagosRealizadosVentasWhereUniqueInput | PagosRealizadosVentasWhereUniqueInput[]
    connect?: PagosRealizadosVentasWhereUniqueInput | PagosRealizadosVentasWhereUniqueInput[]
    update?: PagosRealizadosVentasUpdateWithWhereUniqueWithoutClienteInput | PagosRealizadosVentasUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PagosRealizadosVentasUpdateManyWithWhereWithoutClienteInput | PagosRealizadosVentasUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PagosRealizadosVentasScalarWhereInput | PagosRealizadosVentasScalarWhereInput[]
  }

  export type VentaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput> | VentaCreateWithoutClienteInput[] | VentaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutClienteInput | VentaCreateOrConnectWithoutClienteInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutClienteInput | VentaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: VentaCreateManyClienteInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutClienteInput | VentaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutClienteInput | VentaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type PagosRealizadosVentasUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PagosRealizadosVentasCreateWithoutClienteInput, PagosRealizadosVentasUncheckedCreateWithoutClienteInput> | PagosRealizadosVentasCreateWithoutClienteInput[] | PagosRealizadosVentasUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PagosRealizadosVentasCreateOrConnectWithoutClienteInput | PagosRealizadosVentasCreateOrConnectWithoutClienteInput[]
    upsert?: PagosRealizadosVentasUpsertWithWhereUniqueWithoutClienteInput | PagosRealizadosVentasUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PagosRealizadosVentasCreateManyClienteInputEnvelope
    set?: PagosRealizadosVentasWhereUniqueInput | PagosRealizadosVentasWhereUniqueInput[]
    disconnect?: PagosRealizadosVentasWhereUniqueInput | PagosRealizadosVentasWhereUniqueInput[]
    delete?: PagosRealizadosVentasWhereUniqueInput | PagosRealizadosVentasWhereUniqueInput[]
    connect?: PagosRealizadosVentasWhereUniqueInput | PagosRealizadosVentasWhereUniqueInput[]
    update?: PagosRealizadosVentasUpdateWithWhereUniqueWithoutClienteInput | PagosRealizadosVentasUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PagosRealizadosVentasUpdateManyWithWhereWithoutClienteInput | PagosRealizadosVentasUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PagosRealizadosVentasScalarWhereInput | PagosRealizadosVentasScalarWhereInput[]
  }

  export type ProductoCreateNestedOneWithoutCasasInput = {
    create?: XOR<ProductoCreateWithoutCasasInput, ProductoUncheckedCreateWithoutCasasInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutCasasInput
    connect?: ProductoWhereUniqueInput
  }

  export type ProductoUpdateOneWithoutCasasNestedInput = {
    create?: XOR<ProductoCreateWithoutCasasInput, ProductoUncheckedCreateWithoutCasasInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutCasasInput
    upsert?: ProductoUpsertWithoutCasasInput
    disconnect?: ProductoWhereInput | boolean
    delete?: ProductoWhereInput | boolean
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutCasasInput, ProductoUpdateWithoutCasasInput>, ProductoUncheckedUpdateWithoutCasasInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LoteCreateNestedManyWithoutCodigoBarrasInput = {
    create?: XOR<LoteCreateWithoutCodigoBarrasInput, LoteUncheckedCreateWithoutCodigoBarrasInput> | LoteCreateWithoutCodigoBarrasInput[] | LoteUncheckedCreateWithoutCodigoBarrasInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutCodigoBarrasInput | LoteCreateOrConnectWithoutCodigoBarrasInput[]
    createMany?: LoteCreateManyCodigoBarrasInputEnvelope
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
  }

  export type LoteUncheckedCreateNestedManyWithoutCodigoBarrasInput = {
    create?: XOR<LoteCreateWithoutCodigoBarrasInput, LoteUncheckedCreateWithoutCodigoBarrasInput> | LoteCreateWithoutCodigoBarrasInput[] | LoteUncheckedCreateWithoutCodigoBarrasInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutCodigoBarrasInput | LoteCreateOrConnectWithoutCodigoBarrasInput[]
    createMany?: LoteCreateManyCodigoBarrasInputEnvelope
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
  }

  export type LoteUpdateManyWithoutCodigoBarrasNestedInput = {
    create?: XOR<LoteCreateWithoutCodigoBarrasInput, LoteUncheckedCreateWithoutCodigoBarrasInput> | LoteCreateWithoutCodigoBarrasInput[] | LoteUncheckedCreateWithoutCodigoBarrasInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutCodigoBarrasInput | LoteCreateOrConnectWithoutCodigoBarrasInput[]
    upsert?: LoteUpsertWithWhereUniqueWithoutCodigoBarrasInput | LoteUpsertWithWhereUniqueWithoutCodigoBarrasInput[]
    createMany?: LoteCreateManyCodigoBarrasInputEnvelope
    set?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    disconnect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    delete?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    update?: LoteUpdateWithWhereUniqueWithoutCodigoBarrasInput | LoteUpdateWithWhereUniqueWithoutCodigoBarrasInput[]
    updateMany?: LoteUpdateManyWithWhereWithoutCodigoBarrasInput | LoteUpdateManyWithWhereWithoutCodigoBarrasInput[]
    deleteMany?: LoteScalarWhereInput | LoteScalarWhereInput[]
  }

  export type LoteUncheckedUpdateManyWithoutCodigoBarrasNestedInput = {
    create?: XOR<LoteCreateWithoutCodigoBarrasInput, LoteUncheckedCreateWithoutCodigoBarrasInput> | LoteCreateWithoutCodigoBarrasInput[] | LoteUncheckedCreateWithoutCodigoBarrasInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutCodigoBarrasInput | LoteCreateOrConnectWithoutCodigoBarrasInput[]
    upsert?: LoteUpsertWithWhereUniqueWithoutCodigoBarrasInput | LoteUpsertWithWhereUniqueWithoutCodigoBarrasInput[]
    createMany?: LoteCreateManyCodigoBarrasInputEnvelope
    set?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    disconnect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    delete?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    update?: LoteUpdateWithWhereUniqueWithoutCodigoBarrasInput | LoteUpdateWithWhereUniqueWithoutCodigoBarrasInput[]
    updateMany?: LoteUpdateManyWithWhereWithoutCodigoBarrasInput | LoteUpdateManyWithWhereWithoutCodigoBarrasInput[]
    deleteMany?: LoteScalarWhereInput | LoteScalarWhereInput[]
  }

  export type CasasCreateNestedManyWithoutProductoInput = {
    create?: XOR<CasasCreateWithoutProductoInput, CasasUncheckedCreateWithoutProductoInput> | CasasCreateWithoutProductoInput[] | CasasUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CasasCreateOrConnectWithoutProductoInput | CasasCreateOrConnectWithoutProductoInput[]
    createMany?: CasasCreateManyProductoInputEnvelope
    connect?: CasasWhereUniqueInput | CasasWhereUniqueInput[]
  }

  export type LoteCreateNestedManyWithoutProductoInput = {
    create?: XOR<LoteCreateWithoutProductoInput, LoteUncheckedCreateWithoutProductoInput> | LoteCreateWithoutProductoInput[] | LoteUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutProductoInput | LoteCreateOrConnectWithoutProductoInput[]
    createMany?: LoteCreateManyProductoInputEnvelope
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
  }

  export type CasasUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<CasasCreateWithoutProductoInput, CasasUncheckedCreateWithoutProductoInput> | CasasCreateWithoutProductoInput[] | CasasUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CasasCreateOrConnectWithoutProductoInput | CasasCreateOrConnectWithoutProductoInput[]
    createMany?: CasasCreateManyProductoInputEnvelope
    connect?: CasasWhereUniqueInput | CasasWhereUniqueInput[]
  }

  export type LoteUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<LoteCreateWithoutProductoInput, LoteUncheckedCreateWithoutProductoInput> | LoteCreateWithoutProductoInput[] | LoteUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutProductoInput | LoteCreateOrConnectWithoutProductoInput[]
    createMany?: LoteCreateManyProductoInputEnvelope
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CasasUpdateManyWithoutProductoNestedInput = {
    create?: XOR<CasasCreateWithoutProductoInput, CasasUncheckedCreateWithoutProductoInput> | CasasCreateWithoutProductoInput[] | CasasUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CasasCreateOrConnectWithoutProductoInput | CasasCreateOrConnectWithoutProductoInput[]
    upsert?: CasasUpsertWithWhereUniqueWithoutProductoInput | CasasUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: CasasCreateManyProductoInputEnvelope
    set?: CasasWhereUniqueInput | CasasWhereUniqueInput[]
    disconnect?: CasasWhereUniqueInput | CasasWhereUniqueInput[]
    delete?: CasasWhereUniqueInput | CasasWhereUniqueInput[]
    connect?: CasasWhereUniqueInput | CasasWhereUniqueInput[]
    update?: CasasUpdateWithWhereUniqueWithoutProductoInput | CasasUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: CasasUpdateManyWithWhereWithoutProductoInput | CasasUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: CasasScalarWhereInput | CasasScalarWhereInput[]
  }

  export type LoteUpdateManyWithoutProductoNestedInput = {
    create?: XOR<LoteCreateWithoutProductoInput, LoteUncheckedCreateWithoutProductoInput> | LoteCreateWithoutProductoInput[] | LoteUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutProductoInput | LoteCreateOrConnectWithoutProductoInput[]
    upsert?: LoteUpsertWithWhereUniqueWithoutProductoInput | LoteUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: LoteCreateManyProductoInputEnvelope
    set?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    disconnect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    delete?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    update?: LoteUpdateWithWhereUniqueWithoutProductoInput | LoteUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: LoteUpdateManyWithWhereWithoutProductoInput | LoteUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: LoteScalarWhereInput | LoteScalarWhereInput[]
  }

  export type CasasUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<CasasCreateWithoutProductoInput, CasasUncheckedCreateWithoutProductoInput> | CasasCreateWithoutProductoInput[] | CasasUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CasasCreateOrConnectWithoutProductoInput | CasasCreateOrConnectWithoutProductoInput[]
    upsert?: CasasUpsertWithWhereUniqueWithoutProductoInput | CasasUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: CasasCreateManyProductoInputEnvelope
    set?: CasasWhereUniqueInput | CasasWhereUniqueInput[]
    disconnect?: CasasWhereUniqueInput | CasasWhereUniqueInput[]
    delete?: CasasWhereUniqueInput | CasasWhereUniqueInput[]
    connect?: CasasWhereUniqueInput | CasasWhereUniqueInput[]
    update?: CasasUpdateWithWhereUniqueWithoutProductoInput | CasasUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: CasasUpdateManyWithWhereWithoutProductoInput | CasasUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: CasasScalarWhereInput | CasasScalarWhereInput[]
  }

  export type LoteUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<LoteCreateWithoutProductoInput, LoteUncheckedCreateWithoutProductoInput> | LoteCreateWithoutProductoInput[] | LoteUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutProductoInput | LoteCreateOrConnectWithoutProductoInput[]
    upsert?: LoteUpsertWithWhereUniqueWithoutProductoInput | LoteUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: LoteCreateManyProductoInputEnvelope
    set?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    disconnect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    delete?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    update?: LoteUpdateWithWhereUniqueWithoutProductoInput | LoteUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: LoteUpdateManyWithWhereWithoutProductoInput | LoteUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: LoteScalarWhereInput | LoteScalarWhereInput[]
  }

  export type CodigoDeBarrasCreateNestedOneWithoutLotesInput = {
    create?: XOR<CodigoDeBarrasCreateWithoutLotesInput, CodigoDeBarrasUncheckedCreateWithoutLotesInput>
    connectOrCreate?: CodigoDeBarrasCreateOrConnectWithoutLotesInput
    connect?: CodigoDeBarrasWhereUniqueInput
  }

  export type CompraCreateNestedOneWithoutLotesInput = {
    create?: XOR<CompraCreateWithoutLotesInput, CompraUncheckedCreateWithoutLotesInput>
    connectOrCreate?: CompraCreateOrConnectWithoutLotesInput
    connect?: CompraWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutLotesInput = {
    create?: XOR<ProductoCreateWithoutLotesInput, ProductoUncheckedCreateWithoutLotesInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutLotesInput
    connect?: ProductoWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CodigoDeBarrasUpdateOneWithoutLotesNestedInput = {
    create?: XOR<CodigoDeBarrasCreateWithoutLotesInput, CodigoDeBarrasUncheckedCreateWithoutLotesInput>
    connectOrCreate?: CodigoDeBarrasCreateOrConnectWithoutLotesInput
    upsert?: CodigoDeBarrasUpsertWithoutLotesInput
    disconnect?: CodigoDeBarrasWhereInput | boolean
    delete?: CodigoDeBarrasWhereInput | boolean
    connect?: CodigoDeBarrasWhereUniqueInput
    update?: XOR<XOR<CodigoDeBarrasUpdateToOneWithWhereWithoutLotesInput, CodigoDeBarrasUpdateWithoutLotesInput>, CodigoDeBarrasUncheckedUpdateWithoutLotesInput>
  }

  export type CompraUpdateOneWithoutLotesNestedInput = {
    create?: XOR<CompraCreateWithoutLotesInput, CompraUncheckedCreateWithoutLotesInput>
    connectOrCreate?: CompraCreateOrConnectWithoutLotesInput
    upsert?: CompraUpsertWithoutLotesInput
    disconnect?: CompraWhereInput | boolean
    delete?: CompraWhereInput | boolean
    connect?: CompraWhereUniqueInput
    update?: XOR<XOR<CompraUpdateToOneWithWhereWithoutLotesInput, CompraUpdateWithoutLotesInput>, CompraUncheckedUpdateWithoutLotesInput>
  }

  export type ProductoUpdateOneRequiredWithoutLotesNestedInput = {
    create?: XOR<ProductoCreateWithoutLotesInput, ProductoUncheckedCreateWithoutLotesInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutLotesInput
    upsert?: ProductoUpsertWithoutLotesInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutLotesInput, ProductoUpdateWithoutLotesInput>, ProductoUncheckedUpdateWithoutLotesInput>
  }

  export type LoteCreateNestedManyWithoutCompraInput = {
    create?: XOR<LoteCreateWithoutCompraInput, LoteUncheckedCreateWithoutCompraInput> | LoteCreateWithoutCompraInput[] | LoteUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutCompraInput | LoteCreateOrConnectWithoutCompraInput[]
    createMany?: LoteCreateManyCompraInputEnvelope
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
  }

  export type DetalleDeComprasCreateNestedManyWithoutCompraInput = {
    create?: XOR<DetalleDeComprasCreateWithoutCompraInput, DetalleDeComprasUncheckedCreateWithoutCompraInput> | DetalleDeComprasCreateWithoutCompraInput[] | DetalleDeComprasUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: DetalleDeComprasCreateOrConnectWithoutCompraInput | DetalleDeComprasCreateOrConnectWithoutCompraInput[]
    createMany?: DetalleDeComprasCreateManyCompraInputEnvelope
    connect?: DetalleDeComprasWhereUniqueInput | DetalleDeComprasWhereUniqueInput[]
  }

  export type ProveedorCreateNestedOneWithoutComprasInput = {
    create?: XOR<ProveedorCreateWithoutComprasInput, ProveedorUncheckedCreateWithoutComprasInput>
    connectOrCreate?: ProveedorCreateOrConnectWithoutComprasInput
    connect?: ProveedorWhereUniqueInput
  }

  export type LoteUncheckedCreateNestedManyWithoutCompraInput = {
    create?: XOR<LoteCreateWithoutCompraInput, LoteUncheckedCreateWithoutCompraInput> | LoteCreateWithoutCompraInput[] | LoteUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutCompraInput | LoteCreateOrConnectWithoutCompraInput[]
    createMany?: LoteCreateManyCompraInputEnvelope
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
  }

  export type DetalleDeComprasUncheckedCreateNestedManyWithoutCompraInput = {
    create?: XOR<DetalleDeComprasCreateWithoutCompraInput, DetalleDeComprasUncheckedCreateWithoutCompraInput> | DetalleDeComprasCreateWithoutCompraInput[] | DetalleDeComprasUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: DetalleDeComprasCreateOrConnectWithoutCompraInput | DetalleDeComprasCreateOrConnectWithoutCompraInput[]
    createMany?: DetalleDeComprasCreateManyCompraInputEnvelope
    connect?: DetalleDeComprasWhereUniqueInput | DetalleDeComprasWhereUniqueInput[]
  }

  export type LoteUpdateManyWithoutCompraNestedInput = {
    create?: XOR<LoteCreateWithoutCompraInput, LoteUncheckedCreateWithoutCompraInput> | LoteCreateWithoutCompraInput[] | LoteUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutCompraInput | LoteCreateOrConnectWithoutCompraInput[]
    upsert?: LoteUpsertWithWhereUniqueWithoutCompraInput | LoteUpsertWithWhereUniqueWithoutCompraInput[]
    createMany?: LoteCreateManyCompraInputEnvelope
    set?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    disconnect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    delete?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    update?: LoteUpdateWithWhereUniqueWithoutCompraInput | LoteUpdateWithWhereUniqueWithoutCompraInput[]
    updateMany?: LoteUpdateManyWithWhereWithoutCompraInput | LoteUpdateManyWithWhereWithoutCompraInput[]
    deleteMany?: LoteScalarWhereInput | LoteScalarWhereInput[]
  }

  export type DetalleDeComprasUpdateManyWithoutCompraNestedInput = {
    create?: XOR<DetalleDeComprasCreateWithoutCompraInput, DetalleDeComprasUncheckedCreateWithoutCompraInput> | DetalleDeComprasCreateWithoutCompraInput[] | DetalleDeComprasUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: DetalleDeComprasCreateOrConnectWithoutCompraInput | DetalleDeComprasCreateOrConnectWithoutCompraInput[]
    upsert?: DetalleDeComprasUpsertWithWhereUniqueWithoutCompraInput | DetalleDeComprasUpsertWithWhereUniqueWithoutCompraInput[]
    createMany?: DetalleDeComprasCreateManyCompraInputEnvelope
    set?: DetalleDeComprasWhereUniqueInput | DetalleDeComprasWhereUniqueInput[]
    disconnect?: DetalleDeComprasWhereUniqueInput | DetalleDeComprasWhereUniqueInput[]
    delete?: DetalleDeComprasWhereUniqueInput | DetalleDeComprasWhereUniqueInput[]
    connect?: DetalleDeComprasWhereUniqueInput | DetalleDeComprasWhereUniqueInput[]
    update?: DetalleDeComprasUpdateWithWhereUniqueWithoutCompraInput | DetalleDeComprasUpdateWithWhereUniqueWithoutCompraInput[]
    updateMany?: DetalleDeComprasUpdateManyWithWhereWithoutCompraInput | DetalleDeComprasUpdateManyWithWhereWithoutCompraInput[]
    deleteMany?: DetalleDeComprasScalarWhereInput | DetalleDeComprasScalarWhereInput[]
  }

  export type ProveedorUpdateOneWithoutComprasNestedInput = {
    create?: XOR<ProveedorCreateWithoutComprasInput, ProveedorUncheckedCreateWithoutComprasInput>
    connectOrCreate?: ProveedorCreateOrConnectWithoutComprasInput
    upsert?: ProveedorUpsertWithoutComprasInput
    disconnect?: ProveedorWhereInput | boolean
    delete?: ProveedorWhereInput | boolean
    connect?: ProveedorWhereUniqueInput
    update?: XOR<XOR<ProveedorUpdateToOneWithWhereWithoutComprasInput, ProveedorUpdateWithoutComprasInput>, ProveedorUncheckedUpdateWithoutComprasInput>
  }

  export type LoteUncheckedUpdateManyWithoutCompraNestedInput = {
    create?: XOR<LoteCreateWithoutCompraInput, LoteUncheckedCreateWithoutCompraInput> | LoteCreateWithoutCompraInput[] | LoteUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutCompraInput | LoteCreateOrConnectWithoutCompraInput[]
    upsert?: LoteUpsertWithWhereUniqueWithoutCompraInput | LoteUpsertWithWhereUniqueWithoutCompraInput[]
    createMany?: LoteCreateManyCompraInputEnvelope
    set?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    disconnect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    delete?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    update?: LoteUpdateWithWhereUniqueWithoutCompraInput | LoteUpdateWithWhereUniqueWithoutCompraInput[]
    updateMany?: LoteUpdateManyWithWhereWithoutCompraInput | LoteUpdateManyWithWhereWithoutCompraInput[]
    deleteMany?: LoteScalarWhereInput | LoteScalarWhereInput[]
  }

  export type DetalleDeComprasUncheckedUpdateManyWithoutCompraNestedInput = {
    create?: XOR<DetalleDeComprasCreateWithoutCompraInput, DetalleDeComprasUncheckedCreateWithoutCompraInput> | DetalleDeComprasCreateWithoutCompraInput[] | DetalleDeComprasUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: DetalleDeComprasCreateOrConnectWithoutCompraInput | DetalleDeComprasCreateOrConnectWithoutCompraInput[]
    upsert?: DetalleDeComprasUpsertWithWhereUniqueWithoutCompraInput | DetalleDeComprasUpsertWithWhereUniqueWithoutCompraInput[]
    createMany?: DetalleDeComprasCreateManyCompraInputEnvelope
    set?: DetalleDeComprasWhereUniqueInput | DetalleDeComprasWhereUniqueInput[]
    disconnect?: DetalleDeComprasWhereUniqueInput | DetalleDeComprasWhereUniqueInput[]
    delete?: DetalleDeComprasWhereUniqueInput | DetalleDeComprasWhereUniqueInput[]
    connect?: DetalleDeComprasWhereUniqueInput | DetalleDeComprasWhereUniqueInput[]
    update?: DetalleDeComprasUpdateWithWhereUniqueWithoutCompraInput | DetalleDeComprasUpdateWithWhereUniqueWithoutCompraInput[]
    updateMany?: DetalleDeComprasUpdateManyWithWhereWithoutCompraInput | DetalleDeComprasUpdateManyWithWhereWithoutCompraInput[]
    deleteMany?: DetalleDeComprasScalarWhereInput | DetalleDeComprasScalarWhereInput[]
  }

  export type ProveedorCreateNestedOneWithoutPagosRealizadosCompraInput = {
    create?: XOR<ProveedorCreateWithoutPagosRealizadosCompraInput, ProveedorUncheckedCreateWithoutPagosRealizadosCompraInput>
    connectOrCreate?: ProveedorCreateOrConnectWithoutPagosRealizadosCompraInput
    connect?: ProveedorWhereUniqueInput
  }

  export type ProveedorUpdateOneWithoutPagosRealizadosCompraNestedInput = {
    create?: XOR<ProveedorCreateWithoutPagosRealizadosCompraInput, ProveedorUncheckedCreateWithoutPagosRealizadosCompraInput>
    connectOrCreate?: ProveedorCreateOrConnectWithoutPagosRealizadosCompraInput
    upsert?: ProveedorUpsertWithoutPagosRealizadosCompraInput
    disconnect?: ProveedorWhereInput | boolean
    delete?: ProveedorWhereInput | boolean
    connect?: ProveedorWhereUniqueInput
    update?: XOR<XOR<ProveedorUpdateToOneWithWhereWithoutPagosRealizadosCompraInput, ProveedorUpdateWithoutPagosRealizadosCompraInput>, ProveedorUncheckedUpdateWithoutPagosRealizadosCompraInput>
  }

  export type ListaProductosCreateNestedManyWithoutVentaInput = {
    create?: XOR<ListaProductosCreateWithoutVentaInput, ListaProductosUncheckedCreateWithoutVentaInput> | ListaProductosCreateWithoutVentaInput[] | ListaProductosUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: ListaProductosCreateOrConnectWithoutVentaInput | ListaProductosCreateOrConnectWithoutVentaInput[]
    createMany?: ListaProductosCreateManyVentaInputEnvelope
    connect?: ListaProductosWhereUniqueInput | ListaProductosWhereUniqueInput[]
  }

  export type ClienteCreateNestedOneWithoutVentasInput = {
    create?: XOR<ClienteCreateWithoutVentasInput, ClienteUncheckedCreateWithoutVentasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutVentasInput
    connect?: ClienteWhereUniqueInput
  }

  export type ListaProductosUncheckedCreateNestedManyWithoutVentaInput = {
    create?: XOR<ListaProductosCreateWithoutVentaInput, ListaProductosUncheckedCreateWithoutVentaInput> | ListaProductosCreateWithoutVentaInput[] | ListaProductosUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: ListaProductosCreateOrConnectWithoutVentaInput | ListaProductosCreateOrConnectWithoutVentaInput[]
    createMany?: ListaProductosCreateManyVentaInputEnvelope
    connect?: ListaProductosWhereUniqueInput | ListaProductosWhereUniqueInput[]
  }

  export type ListaProductosUpdateManyWithoutVentaNestedInput = {
    create?: XOR<ListaProductosCreateWithoutVentaInput, ListaProductosUncheckedCreateWithoutVentaInput> | ListaProductosCreateWithoutVentaInput[] | ListaProductosUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: ListaProductosCreateOrConnectWithoutVentaInput | ListaProductosCreateOrConnectWithoutVentaInput[]
    upsert?: ListaProductosUpsertWithWhereUniqueWithoutVentaInput | ListaProductosUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: ListaProductosCreateManyVentaInputEnvelope
    set?: ListaProductosWhereUniqueInput | ListaProductosWhereUniqueInput[]
    disconnect?: ListaProductosWhereUniqueInput | ListaProductosWhereUniqueInput[]
    delete?: ListaProductosWhereUniqueInput | ListaProductosWhereUniqueInput[]
    connect?: ListaProductosWhereUniqueInput | ListaProductosWhereUniqueInput[]
    update?: ListaProductosUpdateWithWhereUniqueWithoutVentaInput | ListaProductosUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: ListaProductosUpdateManyWithWhereWithoutVentaInput | ListaProductosUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: ListaProductosScalarWhereInput | ListaProductosScalarWhereInput[]
  }

  export type ClienteUpdateOneWithoutVentasNestedInput = {
    create?: XOR<ClienteCreateWithoutVentasInput, ClienteUncheckedCreateWithoutVentasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutVentasInput
    upsert?: ClienteUpsertWithoutVentasInput
    disconnect?: ClienteWhereInput | boolean
    delete?: ClienteWhereInput | boolean
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutVentasInput, ClienteUpdateWithoutVentasInput>, ClienteUncheckedUpdateWithoutVentasInput>
  }

  export type ListaProductosUncheckedUpdateManyWithoutVentaNestedInput = {
    create?: XOR<ListaProductosCreateWithoutVentaInput, ListaProductosUncheckedCreateWithoutVentaInput> | ListaProductosCreateWithoutVentaInput[] | ListaProductosUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: ListaProductosCreateOrConnectWithoutVentaInput | ListaProductosCreateOrConnectWithoutVentaInput[]
    upsert?: ListaProductosUpsertWithWhereUniqueWithoutVentaInput | ListaProductosUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: ListaProductosCreateManyVentaInputEnvelope
    set?: ListaProductosWhereUniqueInput | ListaProductosWhereUniqueInput[]
    disconnect?: ListaProductosWhereUniqueInput | ListaProductosWhereUniqueInput[]
    delete?: ListaProductosWhereUniqueInput | ListaProductosWhereUniqueInput[]
    connect?: ListaProductosWhereUniqueInput | ListaProductosWhereUniqueInput[]
    update?: ListaProductosUpdateWithWhereUniqueWithoutVentaInput | ListaProductosUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: ListaProductosUpdateManyWithWhereWithoutVentaInput | ListaProductosUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: ListaProductosScalarWhereInput | ListaProductosScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutPagosRealizadosVentaInput = {
    create?: XOR<ClienteCreateWithoutPagosRealizadosVentaInput, ClienteUncheckedCreateWithoutPagosRealizadosVentaInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPagosRealizadosVentaInput
    connect?: ClienteWhereUniqueInput
  }

  export type ClienteUpdateOneWithoutPagosRealizadosVentaNestedInput = {
    create?: XOR<ClienteCreateWithoutPagosRealizadosVentaInput, ClienteUncheckedCreateWithoutPagosRealizadosVentaInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPagosRealizadosVentaInput
    upsert?: ClienteUpsertWithoutPagosRealizadosVentaInput
    disconnect?: ClienteWhereInput | boolean
    delete?: ClienteWhereInput | boolean
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutPagosRealizadosVentaInput, ClienteUpdateWithoutPagosRealizadosVentaInput>, ClienteUncheckedUpdateWithoutPagosRealizadosVentaInput>
  }

  export type VentaCreateNestedOneWithoutDetallesInput = {
    create?: XOR<VentaCreateWithoutDetallesInput, VentaUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: VentaCreateOrConnectWithoutDetallesInput
    connect?: VentaWhereUniqueInput
  }

  export type VentaUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: XOR<VentaCreateWithoutDetallesInput, VentaUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: VentaCreateOrConnectWithoutDetallesInput
    upsert?: VentaUpsertWithoutDetallesInput
    connect?: VentaWhereUniqueInput
    update?: XOR<XOR<VentaUpdateToOneWithWhereWithoutDetallesInput, VentaUpdateWithoutDetallesInput>, VentaUncheckedUpdateWithoutDetallesInput>
  }

  export type CompraCreateNestedOneWithoutDetalleDeComprasInput = {
    create?: XOR<CompraCreateWithoutDetalleDeComprasInput, CompraUncheckedCreateWithoutDetalleDeComprasInput>
    connectOrCreate?: CompraCreateOrConnectWithoutDetalleDeComprasInput
    connect?: CompraWhereUniqueInput
  }

  export type CompraUpdateOneRequiredWithoutDetalleDeComprasNestedInput = {
    create?: XOR<CompraCreateWithoutDetalleDeComprasInput, CompraUncheckedCreateWithoutDetalleDeComprasInput>
    connectOrCreate?: CompraCreateOrConnectWithoutDetalleDeComprasInput
    upsert?: CompraUpsertWithoutDetalleDeComprasInput
    connect?: CompraWhereUniqueInput
    update?: XOR<XOR<CompraUpdateToOneWithWhereWithoutDetalleDeComprasInput, CompraUpdateWithoutDetalleDeComprasInput>, CompraUncheckedUpdateWithoutDetalleDeComprasInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CompraCreateWithoutProveedoresInput = {
    id?: string
    Proveedor: string
    observaciones: string
    correlativo: number
    Comprador: string
    visitador: string
    total: number
    estado?: string
    fecha: Date | string
    Lotes?: LoteCreateNestedManyWithoutCompraInput
    DetalleDeCompras?: DetalleDeComprasCreateNestedManyWithoutCompraInput
  }

  export type CompraUncheckedCreateWithoutProveedoresInput = {
    id?: string
    Proveedor: string
    observaciones: string
    correlativo: number
    Comprador: string
    visitador: string
    total: number
    estado?: string
    fecha: Date | string
    Lotes?: LoteUncheckedCreateNestedManyWithoutCompraInput
    DetalleDeCompras?: DetalleDeComprasUncheckedCreateNestedManyWithoutCompraInput
  }

  export type CompraCreateOrConnectWithoutProveedoresInput = {
    where: CompraWhereUniqueInput
    create: XOR<CompraCreateWithoutProveedoresInput, CompraUncheckedCreateWithoutProveedoresInput>
  }

  export type CompraCreateManyProveedoresInputEnvelope = {
    data: CompraCreateManyProveedoresInput | CompraCreateManyProveedoresInput[]
    skipDuplicates?: boolean
  }

  export type PagosRealizadosCompraCreateWithoutProveedoresInput = {
    id?: string
    fechaPago?: Date | string | null
    monto: number
  }

  export type PagosRealizadosCompraUncheckedCreateWithoutProveedoresInput = {
    id?: string
    fechaPago?: Date | string | null
    monto: number
  }

  export type PagosRealizadosCompraCreateOrConnectWithoutProveedoresInput = {
    where: PagosRealizadosCompraWhereUniqueInput
    create: XOR<PagosRealizadosCompraCreateWithoutProveedoresInput, PagosRealizadosCompraUncheckedCreateWithoutProveedoresInput>
  }

  export type PagosRealizadosCompraCreateManyProveedoresInputEnvelope = {
    data: PagosRealizadosCompraCreateManyProveedoresInput | PagosRealizadosCompraCreateManyProveedoresInput[]
    skipDuplicates?: boolean
  }

  export type CompraUpsertWithWhereUniqueWithoutProveedoresInput = {
    where: CompraWhereUniqueInput
    update: XOR<CompraUpdateWithoutProveedoresInput, CompraUncheckedUpdateWithoutProveedoresInput>
    create: XOR<CompraCreateWithoutProveedoresInput, CompraUncheckedCreateWithoutProveedoresInput>
  }

  export type CompraUpdateWithWhereUniqueWithoutProveedoresInput = {
    where: CompraWhereUniqueInput
    data: XOR<CompraUpdateWithoutProveedoresInput, CompraUncheckedUpdateWithoutProveedoresInput>
  }

  export type CompraUpdateManyWithWhereWithoutProveedoresInput = {
    where: CompraScalarWhereInput
    data: XOR<CompraUpdateManyMutationInput, CompraUncheckedUpdateManyWithoutProveedoresInput>
  }

  export type CompraScalarWhereInput = {
    AND?: CompraScalarWhereInput | CompraScalarWhereInput[]
    OR?: CompraScalarWhereInput[]
    NOT?: CompraScalarWhereInput | CompraScalarWhereInput[]
    id?: StringFilter<"Compra"> | string
    Proveedor?: StringFilter<"Compra"> | string
    proveedorId?: StringNullableFilter<"Compra"> | string | null
    observaciones?: StringFilter<"Compra"> | string
    correlativo?: IntFilter<"Compra"> | number
    Comprador?: StringFilter<"Compra"> | string
    visitador?: StringFilter<"Compra"> | string
    total?: IntFilter<"Compra"> | number
    estado?: StringFilter<"Compra"> | string
    fecha?: DateTimeFilter<"Compra"> | Date | string
  }

  export type PagosRealizadosCompraUpsertWithWhereUniqueWithoutProveedoresInput = {
    where: PagosRealizadosCompraWhereUniqueInput
    update: XOR<PagosRealizadosCompraUpdateWithoutProveedoresInput, PagosRealizadosCompraUncheckedUpdateWithoutProveedoresInput>
    create: XOR<PagosRealizadosCompraCreateWithoutProveedoresInput, PagosRealizadosCompraUncheckedCreateWithoutProveedoresInput>
  }

  export type PagosRealizadosCompraUpdateWithWhereUniqueWithoutProveedoresInput = {
    where: PagosRealizadosCompraWhereUniqueInput
    data: XOR<PagosRealizadosCompraUpdateWithoutProveedoresInput, PagosRealizadosCompraUncheckedUpdateWithoutProveedoresInput>
  }

  export type PagosRealizadosCompraUpdateManyWithWhereWithoutProveedoresInput = {
    where: PagosRealizadosCompraScalarWhereInput
    data: XOR<PagosRealizadosCompraUpdateManyMutationInput, PagosRealizadosCompraUncheckedUpdateManyWithoutProveedoresInput>
  }

  export type PagosRealizadosCompraScalarWhereInput = {
    AND?: PagosRealizadosCompraScalarWhereInput | PagosRealizadosCompraScalarWhereInput[]
    OR?: PagosRealizadosCompraScalarWhereInput[]
    NOT?: PagosRealizadosCompraScalarWhereInput | PagosRealizadosCompraScalarWhereInput[]
    id?: StringFilter<"PagosRealizadosCompra"> | string
    fechaPago?: DateTimeNullableFilter<"PagosRealizadosCompra"> | Date | string | null
    monto?: FloatFilter<"PagosRealizadosCompra"> | number
    proveedorId?: StringNullableFilter<"PagosRealizadosCompra"> | string | null
  }

  export type VentaCreateWithoutClienteInput = {
    id?: string
    nombreCliente: string
    fechaDePago?: Date | string | null
    estado: string
    correlativo: number
    total?: number
    fecha: Date | string
    noVenta?: number
    gananciaTotal?: number
    detalles?: ListaProductosCreateNestedManyWithoutVentaInput
  }

  export type VentaUncheckedCreateWithoutClienteInput = {
    id?: string
    nombreCliente: string
    fechaDePago?: Date | string | null
    estado: string
    correlativo: number
    total?: number
    fecha: Date | string
    noVenta?: number
    gananciaTotal?: number
    detalles?: ListaProductosUncheckedCreateNestedManyWithoutVentaInput
  }

  export type VentaCreateOrConnectWithoutClienteInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput>
  }

  export type VentaCreateManyClienteInputEnvelope = {
    data: VentaCreateManyClienteInput | VentaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type PagosRealizadosVentasCreateWithoutClienteInput = {
    id?: string
    fechaPago?: Date | string | null
    monto: number
  }

  export type PagosRealizadosVentasUncheckedCreateWithoutClienteInput = {
    id?: string
    fechaPago?: Date | string | null
    monto: number
  }

  export type PagosRealizadosVentasCreateOrConnectWithoutClienteInput = {
    where: PagosRealizadosVentasWhereUniqueInput
    create: XOR<PagosRealizadosVentasCreateWithoutClienteInput, PagosRealizadosVentasUncheckedCreateWithoutClienteInput>
  }

  export type PagosRealizadosVentasCreateManyClienteInputEnvelope = {
    data: PagosRealizadosVentasCreateManyClienteInput | PagosRealizadosVentasCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type VentaUpsertWithWhereUniqueWithoutClienteInput = {
    where: VentaWhereUniqueInput
    update: XOR<VentaUpdateWithoutClienteInput, VentaUncheckedUpdateWithoutClienteInput>
    create: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput>
  }

  export type VentaUpdateWithWhereUniqueWithoutClienteInput = {
    where: VentaWhereUniqueInput
    data: XOR<VentaUpdateWithoutClienteInput, VentaUncheckedUpdateWithoutClienteInput>
  }

  export type VentaUpdateManyWithWhereWithoutClienteInput = {
    where: VentaScalarWhereInput
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyWithoutClienteInput>
  }

  export type VentaScalarWhereInput = {
    AND?: VentaScalarWhereInput | VentaScalarWhereInput[]
    OR?: VentaScalarWhereInput[]
    NOT?: VentaScalarWhereInput | VentaScalarWhereInput[]
    id?: StringFilter<"Venta"> | string
    nombreCliente?: StringFilter<"Venta"> | string
    fechaDePago?: DateTimeNullableFilter<"Venta"> | Date | string | null
    estado?: StringFilter<"Venta"> | string
    correlativo?: IntFilter<"Venta"> | number
    total?: FloatFilter<"Venta"> | number
    fecha?: DateTimeFilter<"Venta"> | Date | string
    noVenta?: IntFilter<"Venta"> | number
    gananciaTotal?: FloatFilter<"Venta"> | number
    clienteId?: StringNullableFilter<"Venta"> | string | null
  }

  export type PagosRealizadosVentasUpsertWithWhereUniqueWithoutClienteInput = {
    where: PagosRealizadosVentasWhereUniqueInput
    update: XOR<PagosRealizadosVentasUpdateWithoutClienteInput, PagosRealizadosVentasUncheckedUpdateWithoutClienteInput>
    create: XOR<PagosRealizadosVentasCreateWithoutClienteInput, PagosRealizadosVentasUncheckedCreateWithoutClienteInput>
  }

  export type PagosRealizadosVentasUpdateWithWhereUniqueWithoutClienteInput = {
    where: PagosRealizadosVentasWhereUniqueInput
    data: XOR<PagosRealizadosVentasUpdateWithoutClienteInput, PagosRealizadosVentasUncheckedUpdateWithoutClienteInput>
  }

  export type PagosRealizadosVentasUpdateManyWithWhereWithoutClienteInput = {
    where: PagosRealizadosVentasScalarWhereInput
    data: XOR<PagosRealizadosVentasUpdateManyMutationInput, PagosRealizadosVentasUncheckedUpdateManyWithoutClienteInput>
  }

  export type PagosRealizadosVentasScalarWhereInput = {
    AND?: PagosRealizadosVentasScalarWhereInput | PagosRealizadosVentasScalarWhereInput[]
    OR?: PagosRealizadosVentasScalarWhereInput[]
    NOT?: PagosRealizadosVentasScalarWhereInput | PagosRealizadosVentasScalarWhereInput[]
    id?: StringFilter<"PagosRealizadosVentas"> | string
    fechaPago?: DateTimeNullableFilter<"PagosRealizadosVentas"> | Date | string | null
    monto?: FloatFilter<"PagosRealizadosVentas"> | number
    clienteId?: StringNullableFilter<"PagosRealizadosVentas"> | string | null
  }

  export type ProductoCreateWithoutCasasInput = {
    id?: string
    nombre: string
    descripcion: string
    codigoBarras?: string | null
    presentacion: string
    generico: string
    gramaje: string
    costo: number
    precioVenta: number
    alertaStock: boolean
    casa: string
    cantUnidad?: number
    cantCaja: number
    cantBlister: number
    precioUnitario: number
    precioBlister: number
    precioCaja: number
    costoCompraUnitario: number
    costoCompraBlister: number
    costoCompraCaja: number
    createdAt?: Date | string
    lotes?: LoteCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutCasasInput = {
    id?: string
    nombre: string
    descripcion: string
    codigoBarras?: string | null
    presentacion: string
    generico: string
    gramaje: string
    costo: number
    precioVenta: number
    alertaStock: boolean
    casa: string
    cantUnidad?: number
    cantCaja: number
    cantBlister: number
    precioUnitario: number
    precioBlister: number
    precioCaja: number
    costoCompraUnitario: number
    costoCompraBlister: number
    costoCompraCaja: number
    createdAt?: Date | string
    lotes?: LoteUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutCasasInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutCasasInput, ProductoUncheckedCreateWithoutCasasInput>
  }

  export type ProductoUpsertWithoutCasasInput = {
    update: XOR<ProductoUpdateWithoutCasasInput, ProductoUncheckedUpdateWithoutCasasInput>
    create: XOR<ProductoCreateWithoutCasasInput, ProductoUncheckedCreateWithoutCasasInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutCasasInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutCasasInput, ProductoUncheckedUpdateWithoutCasasInput>
  }

  export type ProductoUpdateWithoutCasasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    presentacion?: StringFieldUpdateOperationsInput | string
    generico?: StringFieldUpdateOperationsInput | string
    gramaje?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    precioVenta?: FloatFieldUpdateOperationsInput | number
    alertaStock?: BoolFieldUpdateOperationsInput | boolean
    casa?: StringFieldUpdateOperationsInput | string
    cantUnidad?: IntFieldUpdateOperationsInput | number
    cantCaja?: IntFieldUpdateOperationsInput | number
    cantBlister?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    precioBlister?: FloatFieldUpdateOperationsInput | number
    precioCaja?: FloatFieldUpdateOperationsInput | number
    costoCompraUnitario?: FloatFieldUpdateOperationsInput | number
    costoCompraBlister?: FloatFieldUpdateOperationsInput | number
    costoCompraCaja?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lotes?: LoteUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutCasasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    presentacion?: StringFieldUpdateOperationsInput | string
    generico?: StringFieldUpdateOperationsInput | string
    gramaje?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    precioVenta?: FloatFieldUpdateOperationsInput | number
    alertaStock?: BoolFieldUpdateOperationsInput | boolean
    casa?: StringFieldUpdateOperationsInput | string
    cantUnidad?: IntFieldUpdateOperationsInput | number
    cantCaja?: IntFieldUpdateOperationsInput | number
    cantBlister?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    precioBlister?: FloatFieldUpdateOperationsInput | number
    precioCaja?: FloatFieldUpdateOperationsInput | number
    costoCompraUnitario?: FloatFieldUpdateOperationsInput | number
    costoCompraBlister?: FloatFieldUpdateOperationsInput | number
    costoCompraCaja?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lotes?: LoteUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type LoteCreateWithoutCodigoBarrasInput = {
    id?: string
    origen: string
    nombre: string
    fechaVencimiento?: Date | string | null
    stockTotal?: number
    stockPorCaja?: number
    stockPorBlister?: number
    createdAt?: Date | string
    compra?: CompraCreateNestedOneWithoutLotesInput
    producto: ProductoCreateNestedOneWithoutLotesInput
  }

  export type LoteUncheckedCreateWithoutCodigoBarrasInput = {
    id?: string
    origen: string
    productoId: string
    nombre: string
    fechaVencimiento?: Date | string | null
    stockTotal?: number
    stockPorCaja?: number
    stockPorBlister?: number
    createdAt?: Date | string
    compraId?: string | null
  }

  export type LoteCreateOrConnectWithoutCodigoBarrasInput = {
    where: LoteWhereUniqueInput
    create: XOR<LoteCreateWithoutCodigoBarrasInput, LoteUncheckedCreateWithoutCodigoBarrasInput>
  }

  export type LoteCreateManyCodigoBarrasInputEnvelope = {
    data: LoteCreateManyCodigoBarrasInput | LoteCreateManyCodigoBarrasInput[]
    skipDuplicates?: boolean
  }

  export type LoteUpsertWithWhereUniqueWithoutCodigoBarrasInput = {
    where: LoteWhereUniqueInput
    update: XOR<LoteUpdateWithoutCodigoBarrasInput, LoteUncheckedUpdateWithoutCodigoBarrasInput>
    create: XOR<LoteCreateWithoutCodigoBarrasInput, LoteUncheckedCreateWithoutCodigoBarrasInput>
  }

  export type LoteUpdateWithWhereUniqueWithoutCodigoBarrasInput = {
    where: LoteWhereUniqueInput
    data: XOR<LoteUpdateWithoutCodigoBarrasInput, LoteUncheckedUpdateWithoutCodigoBarrasInput>
  }

  export type LoteUpdateManyWithWhereWithoutCodigoBarrasInput = {
    where: LoteScalarWhereInput
    data: XOR<LoteUpdateManyMutationInput, LoteUncheckedUpdateManyWithoutCodigoBarrasInput>
  }

  export type LoteScalarWhereInput = {
    AND?: LoteScalarWhereInput | LoteScalarWhereInput[]
    OR?: LoteScalarWhereInput[]
    NOT?: LoteScalarWhereInput | LoteScalarWhereInput[]
    id?: StringFilter<"Lote"> | string
    origen?: StringFilter<"Lote"> | string
    productoId?: StringFilter<"Lote"> | string
    nombre?: StringFilter<"Lote"> | string
    fechaVencimiento?: DateTimeNullableFilter<"Lote"> | Date | string | null
    stockTotal?: IntFilter<"Lote"> | number
    stockPorCaja?: IntFilter<"Lote"> | number
    stockPorBlister?: IntFilter<"Lote"> | number
    createdAt?: DateTimeFilter<"Lote"> | Date | string
    codigoBarrasId?: StringNullableFilter<"Lote"> | string | null
    compraId?: StringNullableFilter<"Lote"> | string | null
  }

  export type CasasCreateWithoutProductoInput = {
    id?: string
    nombre: string
  }

  export type CasasUncheckedCreateWithoutProductoInput = {
    id?: string
    nombre: string
  }

  export type CasasCreateOrConnectWithoutProductoInput = {
    where: CasasWhereUniqueInput
    create: XOR<CasasCreateWithoutProductoInput, CasasUncheckedCreateWithoutProductoInput>
  }

  export type CasasCreateManyProductoInputEnvelope = {
    data: CasasCreateManyProductoInput | CasasCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type LoteCreateWithoutProductoInput = {
    id?: string
    origen: string
    nombre: string
    fechaVencimiento?: Date | string | null
    stockTotal?: number
    stockPorCaja?: number
    stockPorBlister?: number
    createdAt?: Date | string
    codigoBarras?: CodigoDeBarrasCreateNestedOneWithoutLotesInput
    compra?: CompraCreateNestedOneWithoutLotesInput
  }

  export type LoteUncheckedCreateWithoutProductoInput = {
    id?: string
    origen: string
    nombre: string
    fechaVencimiento?: Date | string | null
    stockTotal?: number
    stockPorCaja?: number
    stockPorBlister?: number
    createdAt?: Date | string
    codigoBarrasId?: string | null
    compraId?: string | null
  }

  export type LoteCreateOrConnectWithoutProductoInput = {
    where: LoteWhereUniqueInput
    create: XOR<LoteCreateWithoutProductoInput, LoteUncheckedCreateWithoutProductoInput>
  }

  export type LoteCreateManyProductoInputEnvelope = {
    data: LoteCreateManyProductoInput | LoteCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type CasasUpsertWithWhereUniqueWithoutProductoInput = {
    where: CasasWhereUniqueInput
    update: XOR<CasasUpdateWithoutProductoInput, CasasUncheckedUpdateWithoutProductoInput>
    create: XOR<CasasCreateWithoutProductoInput, CasasUncheckedCreateWithoutProductoInput>
  }

  export type CasasUpdateWithWhereUniqueWithoutProductoInput = {
    where: CasasWhereUniqueInput
    data: XOR<CasasUpdateWithoutProductoInput, CasasUncheckedUpdateWithoutProductoInput>
  }

  export type CasasUpdateManyWithWhereWithoutProductoInput = {
    where: CasasScalarWhereInput
    data: XOR<CasasUpdateManyMutationInput, CasasUncheckedUpdateManyWithoutProductoInput>
  }

  export type CasasScalarWhereInput = {
    AND?: CasasScalarWhereInput | CasasScalarWhereInput[]
    OR?: CasasScalarWhereInput[]
    NOT?: CasasScalarWhereInput | CasasScalarWhereInput[]
    id?: StringFilter<"Casas"> | string
    nombre?: StringFilter<"Casas"> | string
    productoId?: StringNullableFilter<"Casas"> | string | null
  }

  export type LoteUpsertWithWhereUniqueWithoutProductoInput = {
    where: LoteWhereUniqueInput
    update: XOR<LoteUpdateWithoutProductoInput, LoteUncheckedUpdateWithoutProductoInput>
    create: XOR<LoteCreateWithoutProductoInput, LoteUncheckedCreateWithoutProductoInput>
  }

  export type LoteUpdateWithWhereUniqueWithoutProductoInput = {
    where: LoteWhereUniqueInput
    data: XOR<LoteUpdateWithoutProductoInput, LoteUncheckedUpdateWithoutProductoInput>
  }

  export type LoteUpdateManyWithWhereWithoutProductoInput = {
    where: LoteScalarWhereInput
    data: XOR<LoteUpdateManyMutationInput, LoteUncheckedUpdateManyWithoutProductoInput>
  }

  export type CodigoDeBarrasCreateWithoutLotesInput = {
    id?: string
    nombre: string
    codigoBarras?: string | null
    productoId: string
  }

  export type CodigoDeBarrasUncheckedCreateWithoutLotesInput = {
    id?: string
    nombre: string
    codigoBarras?: string | null
    productoId: string
  }

  export type CodigoDeBarrasCreateOrConnectWithoutLotesInput = {
    where: CodigoDeBarrasWhereUniqueInput
    create: XOR<CodigoDeBarrasCreateWithoutLotesInput, CodigoDeBarrasUncheckedCreateWithoutLotesInput>
  }

  export type CompraCreateWithoutLotesInput = {
    id?: string
    Proveedor: string
    observaciones: string
    correlativo: number
    Comprador: string
    visitador: string
    total: number
    estado?: string
    fecha: Date | string
    DetalleDeCompras?: DetalleDeComprasCreateNestedManyWithoutCompraInput
    Proveedores?: ProveedorCreateNestedOneWithoutComprasInput
  }

  export type CompraUncheckedCreateWithoutLotesInput = {
    id?: string
    Proveedor: string
    proveedorId?: string | null
    observaciones: string
    correlativo: number
    Comprador: string
    visitador: string
    total: number
    estado?: string
    fecha: Date | string
    DetalleDeCompras?: DetalleDeComprasUncheckedCreateNestedManyWithoutCompraInput
  }

  export type CompraCreateOrConnectWithoutLotesInput = {
    where: CompraWhereUniqueInput
    create: XOR<CompraCreateWithoutLotesInput, CompraUncheckedCreateWithoutLotesInput>
  }

  export type ProductoCreateWithoutLotesInput = {
    id?: string
    nombre: string
    descripcion: string
    codigoBarras?: string | null
    presentacion: string
    generico: string
    gramaje: string
    costo: number
    precioVenta: number
    alertaStock: boolean
    casa: string
    cantUnidad?: number
    cantCaja: number
    cantBlister: number
    precioUnitario: number
    precioBlister: number
    precioCaja: number
    costoCompraUnitario: number
    costoCompraBlister: number
    costoCompraCaja: number
    createdAt?: Date | string
    Casas?: CasasCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutLotesInput = {
    id?: string
    nombre: string
    descripcion: string
    codigoBarras?: string | null
    presentacion: string
    generico: string
    gramaje: string
    costo: number
    precioVenta: number
    alertaStock: boolean
    casa: string
    cantUnidad?: number
    cantCaja: number
    cantBlister: number
    precioUnitario: number
    precioBlister: number
    precioCaja: number
    costoCompraUnitario: number
    costoCompraBlister: number
    costoCompraCaja: number
    createdAt?: Date | string
    Casas?: CasasUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutLotesInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutLotesInput, ProductoUncheckedCreateWithoutLotesInput>
  }

  export type CodigoDeBarrasUpsertWithoutLotesInput = {
    update: XOR<CodigoDeBarrasUpdateWithoutLotesInput, CodigoDeBarrasUncheckedUpdateWithoutLotesInput>
    create: XOR<CodigoDeBarrasCreateWithoutLotesInput, CodigoDeBarrasUncheckedCreateWithoutLotesInput>
    where?: CodigoDeBarrasWhereInput
  }

  export type CodigoDeBarrasUpdateToOneWithWhereWithoutLotesInput = {
    where?: CodigoDeBarrasWhereInput
    data: XOR<CodigoDeBarrasUpdateWithoutLotesInput, CodigoDeBarrasUncheckedUpdateWithoutLotesInput>
  }

  export type CodigoDeBarrasUpdateWithoutLotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    productoId?: StringFieldUpdateOperationsInput | string
  }

  export type CodigoDeBarrasUncheckedUpdateWithoutLotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    productoId?: StringFieldUpdateOperationsInput | string
  }

  export type CompraUpsertWithoutLotesInput = {
    update: XOR<CompraUpdateWithoutLotesInput, CompraUncheckedUpdateWithoutLotesInput>
    create: XOR<CompraCreateWithoutLotesInput, CompraUncheckedCreateWithoutLotesInput>
    where?: CompraWhereInput
  }

  export type CompraUpdateToOneWithWhereWithoutLotesInput = {
    where?: CompraWhereInput
    data: XOR<CompraUpdateWithoutLotesInput, CompraUncheckedUpdateWithoutLotesInput>
  }

  export type CompraUpdateWithoutLotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    Proveedor?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    Comprador?: StringFieldUpdateOperationsInput | string
    visitador?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    DetalleDeCompras?: DetalleDeComprasUpdateManyWithoutCompraNestedInput
    Proveedores?: ProveedorUpdateOneWithoutComprasNestedInput
  }

  export type CompraUncheckedUpdateWithoutLotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    Proveedor?: StringFieldUpdateOperationsInput | string
    proveedorId?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    Comprador?: StringFieldUpdateOperationsInput | string
    visitador?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    DetalleDeCompras?: DetalleDeComprasUncheckedUpdateManyWithoutCompraNestedInput
  }

  export type ProductoUpsertWithoutLotesInput = {
    update: XOR<ProductoUpdateWithoutLotesInput, ProductoUncheckedUpdateWithoutLotesInput>
    create: XOR<ProductoCreateWithoutLotesInput, ProductoUncheckedCreateWithoutLotesInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutLotesInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutLotesInput, ProductoUncheckedUpdateWithoutLotesInput>
  }

  export type ProductoUpdateWithoutLotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    presentacion?: StringFieldUpdateOperationsInput | string
    generico?: StringFieldUpdateOperationsInput | string
    gramaje?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    precioVenta?: FloatFieldUpdateOperationsInput | number
    alertaStock?: BoolFieldUpdateOperationsInput | boolean
    casa?: StringFieldUpdateOperationsInput | string
    cantUnidad?: IntFieldUpdateOperationsInput | number
    cantCaja?: IntFieldUpdateOperationsInput | number
    cantBlister?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    precioBlister?: FloatFieldUpdateOperationsInput | number
    precioCaja?: FloatFieldUpdateOperationsInput | number
    costoCompraUnitario?: FloatFieldUpdateOperationsInput | number
    costoCompraBlister?: FloatFieldUpdateOperationsInput | number
    costoCompraCaja?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Casas?: CasasUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutLotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    presentacion?: StringFieldUpdateOperationsInput | string
    generico?: StringFieldUpdateOperationsInput | string
    gramaje?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    precioVenta?: FloatFieldUpdateOperationsInput | number
    alertaStock?: BoolFieldUpdateOperationsInput | boolean
    casa?: StringFieldUpdateOperationsInput | string
    cantUnidad?: IntFieldUpdateOperationsInput | number
    cantCaja?: IntFieldUpdateOperationsInput | number
    cantBlister?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    precioBlister?: FloatFieldUpdateOperationsInput | number
    precioCaja?: FloatFieldUpdateOperationsInput | number
    costoCompraUnitario?: FloatFieldUpdateOperationsInput | number
    costoCompraBlister?: FloatFieldUpdateOperationsInput | number
    costoCompraCaja?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Casas?: CasasUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type LoteCreateWithoutCompraInput = {
    id?: string
    origen: string
    nombre: string
    fechaVencimiento?: Date | string | null
    stockTotal?: number
    stockPorCaja?: number
    stockPorBlister?: number
    createdAt?: Date | string
    codigoBarras?: CodigoDeBarrasCreateNestedOneWithoutLotesInput
    producto: ProductoCreateNestedOneWithoutLotesInput
  }

  export type LoteUncheckedCreateWithoutCompraInput = {
    id?: string
    origen: string
    productoId: string
    nombre: string
    fechaVencimiento?: Date | string | null
    stockTotal?: number
    stockPorCaja?: number
    stockPorBlister?: number
    createdAt?: Date | string
    codigoBarrasId?: string | null
  }

  export type LoteCreateOrConnectWithoutCompraInput = {
    where: LoteWhereUniqueInput
    create: XOR<LoteCreateWithoutCompraInput, LoteUncheckedCreateWithoutCompraInput>
  }

  export type LoteCreateManyCompraInputEnvelope = {
    data: LoteCreateManyCompraInput | LoteCreateManyCompraInput[]
    skipDuplicates?: boolean
  }

  export type DetalleDeComprasCreateWithoutCompraInput = {
    id?: string
    productoId: string
    stockTotal?: number
    stockPorCaja?: number
    stockPorBlister?: number
    precioCosto: number
    fecha: Date | string
    fechaDeVencimiento: Date | string
    origen: string
    nombreProducto: string
    cantidad: number
  }

  export type DetalleDeComprasUncheckedCreateWithoutCompraInput = {
    id?: string
    productoId: string
    stockTotal?: number
    stockPorCaja?: number
    stockPorBlister?: number
    precioCosto: number
    fecha: Date | string
    fechaDeVencimiento: Date | string
    origen: string
    nombreProducto: string
    cantidad: number
  }

  export type DetalleDeComprasCreateOrConnectWithoutCompraInput = {
    where: DetalleDeComprasWhereUniqueInput
    create: XOR<DetalleDeComprasCreateWithoutCompraInput, DetalleDeComprasUncheckedCreateWithoutCompraInput>
  }

  export type DetalleDeComprasCreateManyCompraInputEnvelope = {
    data: DetalleDeComprasCreateManyCompraInput | DetalleDeComprasCreateManyCompraInput[]
    skipDuplicates?: boolean
  }

  export type ProveedorCreateWithoutComprasInput = {
    id?: string
    nombre: string
    encargado: string
    telefono: string
    Departamento: string
    Municipio: string
    correlativo: number
    direccion: string
    email: string
    createdAt?: Date | string
    PagosRealizadosCompra?: PagosRealizadosCompraCreateNestedManyWithoutProveedoresInput
  }

  export type ProveedorUncheckedCreateWithoutComprasInput = {
    id?: string
    nombre: string
    encargado: string
    telefono: string
    Departamento: string
    Municipio: string
    correlativo: number
    direccion: string
    email: string
    createdAt?: Date | string
    PagosRealizadosCompra?: PagosRealizadosCompraUncheckedCreateNestedManyWithoutProveedoresInput
  }

  export type ProveedorCreateOrConnectWithoutComprasInput = {
    where: ProveedorWhereUniqueInput
    create: XOR<ProveedorCreateWithoutComprasInput, ProveedorUncheckedCreateWithoutComprasInput>
  }

  export type LoteUpsertWithWhereUniqueWithoutCompraInput = {
    where: LoteWhereUniqueInput
    update: XOR<LoteUpdateWithoutCompraInput, LoteUncheckedUpdateWithoutCompraInput>
    create: XOR<LoteCreateWithoutCompraInput, LoteUncheckedCreateWithoutCompraInput>
  }

  export type LoteUpdateWithWhereUniqueWithoutCompraInput = {
    where: LoteWhereUniqueInput
    data: XOR<LoteUpdateWithoutCompraInput, LoteUncheckedUpdateWithoutCompraInput>
  }

  export type LoteUpdateManyWithWhereWithoutCompraInput = {
    where: LoteScalarWhereInput
    data: XOR<LoteUpdateManyMutationInput, LoteUncheckedUpdateManyWithoutCompraInput>
  }

  export type DetalleDeComprasUpsertWithWhereUniqueWithoutCompraInput = {
    where: DetalleDeComprasWhereUniqueInput
    update: XOR<DetalleDeComprasUpdateWithoutCompraInput, DetalleDeComprasUncheckedUpdateWithoutCompraInput>
    create: XOR<DetalleDeComprasCreateWithoutCompraInput, DetalleDeComprasUncheckedCreateWithoutCompraInput>
  }

  export type DetalleDeComprasUpdateWithWhereUniqueWithoutCompraInput = {
    where: DetalleDeComprasWhereUniqueInput
    data: XOR<DetalleDeComprasUpdateWithoutCompraInput, DetalleDeComprasUncheckedUpdateWithoutCompraInput>
  }

  export type DetalleDeComprasUpdateManyWithWhereWithoutCompraInput = {
    where: DetalleDeComprasScalarWhereInput
    data: XOR<DetalleDeComprasUpdateManyMutationInput, DetalleDeComprasUncheckedUpdateManyWithoutCompraInput>
  }

  export type DetalleDeComprasScalarWhereInput = {
    AND?: DetalleDeComprasScalarWhereInput | DetalleDeComprasScalarWhereInput[]
    OR?: DetalleDeComprasScalarWhereInput[]
    NOT?: DetalleDeComprasScalarWhereInput | DetalleDeComprasScalarWhereInput[]
    id?: StringFilter<"DetalleDeCompras"> | string
    compraId?: StringFilter<"DetalleDeCompras"> | string
    productoId?: StringFilter<"DetalleDeCompras"> | string
    stockTotal?: IntFilter<"DetalleDeCompras"> | number
    stockPorCaja?: IntFilter<"DetalleDeCompras"> | number
    stockPorBlister?: IntFilter<"DetalleDeCompras"> | number
    precioCosto?: FloatFilter<"DetalleDeCompras"> | number
    fecha?: DateTimeFilter<"DetalleDeCompras"> | Date | string
    fechaDeVencimiento?: DateTimeFilter<"DetalleDeCompras"> | Date | string
    origen?: StringFilter<"DetalleDeCompras"> | string
    nombreProducto?: StringFilter<"DetalleDeCompras"> | string
    cantidad?: IntFilter<"DetalleDeCompras"> | number
  }

  export type ProveedorUpsertWithoutComprasInput = {
    update: XOR<ProveedorUpdateWithoutComprasInput, ProveedorUncheckedUpdateWithoutComprasInput>
    create: XOR<ProveedorCreateWithoutComprasInput, ProveedorUncheckedCreateWithoutComprasInput>
    where?: ProveedorWhereInput
  }

  export type ProveedorUpdateToOneWithWhereWithoutComprasInput = {
    where?: ProveedorWhereInput
    data: XOR<ProveedorUpdateWithoutComprasInput, ProveedorUncheckedUpdateWithoutComprasInput>
  }

  export type ProveedorUpdateWithoutComprasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    encargado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    Municipio?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PagosRealizadosCompra?: PagosRealizadosCompraUpdateManyWithoutProveedoresNestedInput
  }

  export type ProveedorUncheckedUpdateWithoutComprasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    encargado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    Municipio?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PagosRealizadosCompra?: PagosRealizadosCompraUncheckedUpdateManyWithoutProveedoresNestedInput
  }

  export type ProveedorCreateWithoutPagosRealizadosCompraInput = {
    id?: string
    nombre: string
    encargado: string
    telefono: string
    Departamento: string
    Municipio: string
    correlativo: number
    direccion: string
    email: string
    createdAt?: Date | string
    Compras?: CompraCreateNestedManyWithoutProveedoresInput
  }

  export type ProveedorUncheckedCreateWithoutPagosRealizadosCompraInput = {
    id?: string
    nombre: string
    encargado: string
    telefono: string
    Departamento: string
    Municipio: string
    correlativo: number
    direccion: string
    email: string
    createdAt?: Date | string
    Compras?: CompraUncheckedCreateNestedManyWithoutProveedoresInput
  }

  export type ProveedorCreateOrConnectWithoutPagosRealizadosCompraInput = {
    where: ProveedorWhereUniqueInput
    create: XOR<ProveedorCreateWithoutPagosRealizadosCompraInput, ProveedorUncheckedCreateWithoutPagosRealizadosCompraInput>
  }

  export type ProveedorUpsertWithoutPagosRealizadosCompraInput = {
    update: XOR<ProveedorUpdateWithoutPagosRealizadosCompraInput, ProveedorUncheckedUpdateWithoutPagosRealizadosCompraInput>
    create: XOR<ProveedorCreateWithoutPagosRealizadosCompraInput, ProveedorUncheckedCreateWithoutPagosRealizadosCompraInput>
    where?: ProveedorWhereInput
  }

  export type ProveedorUpdateToOneWithWhereWithoutPagosRealizadosCompraInput = {
    where?: ProveedorWhereInput
    data: XOR<ProveedorUpdateWithoutPagosRealizadosCompraInput, ProveedorUncheckedUpdateWithoutPagosRealizadosCompraInput>
  }

  export type ProveedorUpdateWithoutPagosRealizadosCompraInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    encargado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    Municipio?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Compras?: CompraUpdateManyWithoutProveedoresNestedInput
  }

  export type ProveedorUncheckedUpdateWithoutPagosRealizadosCompraInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    encargado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    Municipio?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Compras?: CompraUncheckedUpdateManyWithoutProveedoresNestedInput
  }

  export type ListaProductosCreateWithoutVentaInput = {
    id?: string
    presentacion: string
    productoId: string
    nombreProducto: string
    subGanancia?: number
    cantidad: number
    subtotal?: number
    fechaDeVencimiento?: Date | string | null
    loteId: string
  }

  export type ListaProductosUncheckedCreateWithoutVentaInput = {
    id?: string
    presentacion: string
    productoId: string
    nombreProducto: string
    subGanancia?: number
    cantidad: number
    subtotal?: number
    fechaDeVencimiento?: Date | string | null
    loteId: string
  }

  export type ListaProductosCreateOrConnectWithoutVentaInput = {
    where: ListaProductosWhereUniqueInput
    create: XOR<ListaProductosCreateWithoutVentaInput, ListaProductosUncheckedCreateWithoutVentaInput>
  }

  export type ListaProductosCreateManyVentaInputEnvelope = {
    data: ListaProductosCreateManyVentaInput | ListaProductosCreateManyVentaInput[]
    skipDuplicates?: boolean
  }

  export type ClienteCreateWithoutVentasInput = {
    id?: string
    nombre: string
    encargado: string
    telefono: string
    Departamento: string
    Municipio: string
    correlativo: number
    direccion: string
    email: string
    createdAt?: Date | string
    PagosRealizadosVenta?: PagosRealizadosVentasCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutVentasInput = {
    id?: string
    nombre: string
    encargado: string
    telefono: string
    Departamento: string
    Municipio: string
    correlativo: number
    direccion: string
    email: string
    createdAt?: Date | string
    PagosRealizadosVenta?: PagosRealizadosVentasUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutVentasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutVentasInput, ClienteUncheckedCreateWithoutVentasInput>
  }

  export type ListaProductosUpsertWithWhereUniqueWithoutVentaInput = {
    where: ListaProductosWhereUniqueInput
    update: XOR<ListaProductosUpdateWithoutVentaInput, ListaProductosUncheckedUpdateWithoutVentaInput>
    create: XOR<ListaProductosCreateWithoutVentaInput, ListaProductosUncheckedCreateWithoutVentaInput>
  }

  export type ListaProductosUpdateWithWhereUniqueWithoutVentaInput = {
    where: ListaProductosWhereUniqueInput
    data: XOR<ListaProductosUpdateWithoutVentaInput, ListaProductosUncheckedUpdateWithoutVentaInput>
  }

  export type ListaProductosUpdateManyWithWhereWithoutVentaInput = {
    where: ListaProductosScalarWhereInput
    data: XOR<ListaProductosUpdateManyMutationInput, ListaProductosUncheckedUpdateManyWithoutVentaInput>
  }

  export type ListaProductosScalarWhereInput = {
    AND?: ListaProductosScalarWhereInput | ListaProductosScalarWhereInput[]
    OR?: ListaProductosScalarWhereInput[]
    NOT?: ListaProductosScalarWhereInput | ListaProductosScalarWhereInput[]
    id?: StringFilter<"ListaProductos"> | string
    ventaId?: StringFilter<"ListaProductos"> | string
    presentacion?: StringFilter<"ListaProductos"> | string
    productoId?: StringFilter<"ListaProductos"> | string
    nombreProducto?: StringFilter<"ListaProductos"> | string
    subGanancia?: FloatFilter<"ListaProductos"> | number
    cantidad?: IntFilter<"ListaProductos"> | number
    subtotal?: FloatFilter<"ListaProductos"> | number
    fechaDeVencimiento?: DateTimeNullableFilter<"ListaProductos"> | Date | string | null
    loteId?: StringFilter<"ListaProductos"> | string
  }

  export type ClienteUpsertWithoutVentasInput = {
    update: XOR<ClienteUpdateWithoutVentasInput, ClienteUncheckedUpdateWithoutVentasInput>
    create: XOR<ClienteCreateWithoutVentasInput, ClienteUncheckedCreateWithoutVentasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutVentasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutVentasInput, ClienteUncheckedUpdateWithoutVentasInput>
  }

  export type ClienteUpdateWithoutVentasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    encargado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    Municipio?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PagosRealizadosVenta?: PagosRealizadosVentasUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutVentasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    encargado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    Municipio?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PagosRealizadosVenta?: PagosRealizadosVentasUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateWithoutPagosRealizadosVentaInput = {
    id?: string
    nombre: string
    encargado: string
    telefono: string
    Departamento: string
    Municipio: string
    correlativo: number
    direccion: string
    email: string
    createdAt?: Date | string
    ventas?: VentaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutPagosRealizadosVentaInput = {
    id?: string
    nombre: string
    encargado: string
    telefono: string
    Departamento: string
    Municipio: string
    correlativo: number
    direccion: string
    email: string
    createdAt?: Date | string
    ventas?: VentaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutPagosRealizadosVentaInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutPagosRealizadosVentaInput, ClienteUncheckedCreateWithoutPagosRealizadosVentaInput>
  }

  export type ClienteUpsertWithoutPagosRealizadosVentaInput = {
    update: XOR<ClienteUpdateWithoutPagosRealizadosVentaInput, ClienteUncheckedUpdateWithoutPagosRealizadosVentaInput>
    create: XOR<ClienteCreateWithoutPagosRealizadosVentaInput, ClienteUncheckedCreateWithoutPagosRealizadosVentaInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutPagosRealizadosVentaInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutPagosRealizadosVentaInput, ClienteUncheckedUpdateWithoutPagosRealizadosVentaInput>
  }

  export type ClienteUpdateWithoutPagosRealizadosVentaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    encargado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    Municipio?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ventas?: VentaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutPagosRealizadosVentaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    encargado?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    Municipio?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ventas?: VentaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type VentaCreateWithoutDetallesInput = {
    id?: string
    nombreCliente: string
    fechaDePago?: Date | string | null
    estado: string
    correlativo: number
    total?: number
    fecha: Date | string
    noVenta?: number
    gananciaTotal?: number
    cliente?: ClienteCreateNestedOneWithoutVentasInput
  }

  export type VentaUncheckedCreateWithoutDetallesInput = {
    id?: string
    nombreCliente: string
    fechaDePago?: Date | string | null
    estado: string
    correlativo: number
    total?: number
    fecha: Date | string
    noVenta?: number
    gananciaTotal?: number
    clienteId?: string | null
  }

  export type VentaCreateOrConnectWithoutDetallesInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutDetallesInput, VentaUncheckedCreateWithoutDetallesInput>
  }

  export type VentaUpsertWithoutDetallesInput = {
    update: XOR<VentaUpdateWithoutDetallesInput, VentaUncheckedUpdateWithoutDetallesInput>
    create: XOR<VentaCreateWithoutDetallesInput, VentaUncheckedCreateWithoutDetallesInput>
    where?: VentaWhereInput
  }

  export type VentaUpdateToOneWithWhereWithoutDetallesInput = {
    where?: VentaWhereInput
    data: XOR<VentaUpdateWithoutDetallesInput, VentaUncheckedUpdateWithoutDetallesInput>
  }

  export type VentaUpdateWithoutDetallesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    fechaDePago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    gananciaTotal?: FloatFieldUpdateOperationsInput | number
    cliente?: ClienteUpdateOneWithoutVentasNestedInput
  }

  export type VentaUncheckedUpdateWithoutDetallesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    fechaDePago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    noVenta?: IntFieldUpdateOperationsInput | number
    gananciaTotal?: FloatFieldUpdateOperationsInput | number
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompraCreateWithoutDetalleDeComprasInput = {
    id?: string
    Proveedor: string
    observaciones: string
    correlativo: number
    Comprador: string
    visitador: string
    total: number
    estado?: string
    fecha: Date | string
    Lotes?: LoteCreateNestedManyWithoutCompraInput
    Proveedores?: ProveedorCreateNestedOneWithoutComprasInput
  }

  export type CompraUncheckedCreateWithoutDetalleDeComprasInput = {
    id?: string
    Proveedor: string
    proveedorId?: string | null
    observaciones: string
    correlativo: number
    Comprador: string
    visitador: string
    total: number
    estado?: string
    fecha: Date | string
    Lotes?: LoteUncheckedCreateNestedManyWithoutCompraInput
  }

  export type CompraCreateOrConnectWithoutDetalleDeComprasInput = {
    where: CompraWhereUniqueInput
    create: XOR<CompraCreateWithoutDetalleDeComprasInput, CompraUncheckedCreateWithoutDetalleDeComprasInput>
  }

  export type CompraUpsertWithoutDetalleDeComprasInput = {
    update: XOR<CompraUpdateWithoutDetalleDeComprasInput, CompraUncheckedUpdateWithoutDetalleDeComprasInput>
    create: XOR<CompraCreateWithoutDetalleDeComprasInput, CompraUncheckedCreateWithoutDetalleDeComprasInput>
    where?: CompraWhereInput
  }

  export type CompraUpdateToOneWithWhereWithoutDetalleDeComprasInput = {
    where?: CompraWhereInput
    data: XOR<CompraUpdateWithoutDetalleDeComprasInput, CompraUncheckedUpdateWithoutDetalleDeComprasInput>
  }

  export type CompraUpdateWithoutDetalleDeComprasInput = {
    id?: StringFieldUpdateOperationsInput | string
    Proveedor?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    Comprador?: StringFieldUpdateOperationsInput | string
    visitador?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Lotes?: LoteUpdateManyWithoutCompraNestedInput
    Proveedores?: ProveedorUpdateOneWithoutComprasNestedInput
  }

  export type CompraUncheckedUpdateWithoutDetalleDeComprasInput = {
    id?: StringFieldUpdateOperationsInput | string
    Proveedor?: StringFieldUpdateOperationsInput | string
    proveedorId?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    Comprador?: StringFieldUpdateOperationsInput | string
    visitador?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Lotes?: LoteUncheckedUpdateManyWithoutCompraNestedInput
  }

  export type CompraCreateManyProveedoresInput = {
    id?: string
    Proveedor: string
    observaciones: string
    correlativo: number
    Comprador: string
    visitador: string
    total: number
    estado?: string
    fecha: Date | string
  }

  export type PagosRealizadosCompraCreateManyProveedoresInput = {
    id?: string
    fechaPago?: Date | string | null
    monto: number
  }

  export type CompraUpdateWithoutProveedoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    Proveedor?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    Comprador?: StringFieldUpdateOperationsInput | string
    visitador?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Lotes?: LoteUpdateManyWithoutCompraNestedInput
    DetalleDeCompras?: DetalleDeComprasUpdateManyWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateWithoutProveedoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    Proveedor?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    Comprador?: StringFieldUpdateOperationsInput | string
    visitador?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Lotes?: LoteUncheckedUpdateManyWithoutCompraNestedInput
    DetalleDeCompras?: DetalleDeComprasUncheckedUpdateManyWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateManyWithoutProveedoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    Proveedor?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    Comprador?: StringFieldUpdateOperationsInput | string
    visitador?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagosRealizadosCompraUpdateWithoutProveedoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto?: FloatFieldUpdateOperationsInput | number
  }

  export type PagosRealizadosCompraUncheckedUpdateWithoutProveedoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto?: FloatFieldUpdateOperationsInput | number
  }

  export type PagosRealizadosCompraUncheckedUpdateManyWithoutProveedoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto?: FloatFieldUpdateOperationsInput | number
  }

  export type VentaCreateManyClienteInput = {
    id?: string
    nombreCliente: string
    fechaDePago?: Date | string | null
    estado: string
    correlativo: number
    total?: number
    fecha: Date | string
    noVenta?: number
    gananciaTotal?: number
  }

  export type PagosRealizadosVentasCreateManyClienteInput = {
    id?: string
    fechaPago?: Date | string | null
    monto: number
  }

  export type VentaUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    fechaDePago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    gananciaTotal?: FloatFieldUpdateOperationsInput | number
    detalles?: ListaProductosUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    fechaDePago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    noVenta?: IntFieldUpdateOperationsInput | number
    gananciaTotal?: FloatFieldUpdateOperationsInput | number
    detalles?: ListaProductosUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    fechaDePago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    noVenta?: IntFieldUpdateOperationsInput | number
    gananciaTotal?: FloatFieldUpdateOperationsInput | number
  }

  export type PagosRealizadosVentasUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto?: FloatFieldUpdateOperationsInput | number
  }

  export type PagosRealizadosVentasUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto?: FloatFieldUpdateOperationsInput | number
  }

  export type PagosRealizadosVentasUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto?: FloatFieldUpdateOperationsInput | number
  }

  export type LoteCreateManyCodigoBarrasInput = {
    id?: string
    origen: string
    productoId: string
    nombre: string
    fechaVencimiento?: Date | string | null
    stockTotal?: number
    stockPorCaja?: number
    stockPorBlister?: number
    createdAt?: Date | string
    compraId?: string | null
  }

  export type LoteUpdateWithoutCodigoBarrasInput = {
    id?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockTotal?: IntFieldUpdateOperationsInput | number
    stockPorCaja?: IntFieldUpdateOperationsInput | number
    stockPorBlister?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    compra?: CompraUpdateOneWithoutLotesNestedInput
    producto?: ProductoUpdateOneRequiredWithoutLotesNestedInput
  }

  export type LoteUncheckedUpdateWithoutCodigoBarrasInput = {
    id?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockTotal?: IntFieldUpdateOperationsInput | number
    stockPorCaja?: IntFieldUpdateOperationsInput | number
    stockPorBlister?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    compraId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LoteUncheckedUpdateManyWithoutCodigoBarrasInput = {
    id?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockTotal?: IntFieldUpdateOperationsInput | number
    stockPorCaja?: IntFieldUpdateOperationsInput | number
    stockPorBlister?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    compraId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CasasCreateManyProductoInput = {
    id?: string
    nombre: string
  }

  export type LoteCreateManyProductoInput = {
    id?: string
    origen: string
    nombre: string
    fechaVencimiento?: Date | string | null
    stockTotal?: number
    stockPorCaja?: number
    stockPorBlister?: number
    createdAt?: Date | string
    codigoBarrasId?: string | null
    compraId?: string | null
  }

  export type CasasUpdateWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CasasUncheckedUpdateWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CasasUncheckedUpdateManyWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type LoteUpdateWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockTotal?: IntFieldUpdateOperationsInput | number
    stockPorCaja?: IntFieldUpdateOperationsInput | number
    stockPorBlister?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codigoBarras?: CodigoDeBarrasUpdateOneWithoutLotesNestedInput
    compra?: CompraUpdateOneWithoutLotesNestedInput
  }

  export type LoteUncheckedUpdateWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockTotal?: IntFieldUpdateOperationsInput | number
    stockPorCaja?: IntFieldUpdateOperationsInput | number
    stockPorBlister?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codigoBarrasId?: NullableStringFieldUpdateOperationsInput | string | null
    compraId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LoteUncheckedUpdateManyWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockTotal?: IntFieldUpdateOperationsInput | number
    stockPorCaja?: IntFieldUpdateOperationsInput | number
    stockPorBlister?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codigoBarrasId?: NullableStringFieldUpdateOperationsInput | string | null
    compraId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LoteCreateManyCompraInput = {
    id?: string
    origen: string
    productoId: string
    nombre: string
    fechaVencimiento?: Date | string | null
    stockTotal?: number
    stockPorCaja?: number
    stockPorBlister?: number
    createdAt?: Date | string
    codigoBarrasId?: string | null
  }

  export type DetalleDeComprasCreateManyCompraInput = {
    id?: string
    productoId: string
    stockTotal?: number
    stockPorCaja?: number
    stockPorBlister?: number
    precioCosto: number
    fecha: Date | string
    fechaDeVencimiento: Date | string
    origen: string
    nombreProducto: string
    cantidad: number
  }

  export type LoteUpdateWithoutCompraInput = {
    id?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockTotal?: IntFieldUpdateOperationsInput | number
    stockPorCaja?: IntFieldUpdateOperationsInput | number
    stockPorBlister?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codigoBarras?: CodigoDeBarrasUpdateOneWithoutLotesNestedInput
    producto?: ProductoUpdateOneRequiredWithoutLotesNestedInput
  }

  export type LoteUncheckedUpdateWithoutCompraInput = {
    id?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockTotal?: IntFieldUpdateOperationsInput | number
    stockPorCaja?: IntFieldUpdateOperationsInput | number
    stockPorBlister?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codigoBarrasId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LoteUncheckedUpdateManyWithoutCompraInput = {
    id?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockTotal?: IntFieldUpdateOperationsInput | number
    stockPorCaja?: IntFieldUpdateOperationsInput | number
    stockPorBlister?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codigoBarrasId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DetalleDeComprasUpdateWithoutCompraInput = {
    id?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    stockTotal?: IntFieldUpdateOperationsInput | number
    stockPorCaja?: IntFieldUpdateOperationsInput | number
    stockPorBlister?: IntFieldUpdateOperationsInput | number
    precioCosto?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaDeVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    origen?: StringFieldUpdateOperationsInput | string
    nombreProducto?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleDeComprasUncheckedUpdateWithoutCompraInput = {
    id?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    stockTotal?: IntFieldUpdateOperationsInput | number
    stockPorCaja?: IntFieldUpdateOperationsInput | number
    stockPorBlister?: IntFieldUpdateOperationsInput | number
    precioCosto?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaDeVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    origen?: StringFieldUpdateOperationsInput | string
    nombreProducto?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleDeComprasUncheckedUpdateManyWithoutCompraInput = {
    id?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    stockTotal?: IntFieldUpdateOperationsInput | number
    stockPorCaja?: IntFieldUpdateOperationsInput | number
    stockPorBlister?: IntFieldUpdateOperationsInput | number
    precioCosto?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaDeVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    origen?: StringFieldUpdateOperationsInput | string
    nombreProducto?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ListaProductosCreateManyVentaInput = {
    id?: string
    presentacion: string
    productoId: string
    nombreProducto: string
    subGanancia?: number
    cantidad: number
    subtotal?: number
    fechaDeVencimiento?: Date | string | null
    loteId: string
  }

  export type ListaProductosUpdateWithoutVentaInput = {
    id?: StringFieldUpdateOperationsInput | string
    presentacion?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    nombreProducto?: StringFieldUpdateOperationsInput | string
    subGanancia?: FloatFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    fechaDeVencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loteId?: StringFieldUpdateOperationsInput | string
  }

  export type ListaProductosUncheckedUpdateWithoutVentaInput = {
    id?: StringFieldUpdateOperationsInput | string
    presentacion?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    nombreProducto?: StringFieldUpdateOperationsInput | string
    subGanancia?: FloatFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    fechaDeVencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loteId?: StringFieldUpdateOperationsInput | string
  }

  export type ListaProductosUncheckedUpdateManyWithoutVentaInput = {
    id?: StringFieldUpdateOperationsInput | string
    presentacion?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    nombreProducto?: StringFieldUpdateOperationsInput | string
    subGanancia?: FloatFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    fechaDeVencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loteId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}