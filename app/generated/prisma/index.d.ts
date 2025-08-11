
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
 * Model BlockProgress
 * 
 */
export type BlockProgress = $Result.DefaultSelection<Prisma.$BlockProgressPayload>
/**
 * Model EventTracking
 * 
 */
export type EventTracking = $Result.DefaultSelection<Prisma.$EventTrackingPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model Pair
 * 
 */
export type Pair = $Result.DefaultSelection<Prisma.$PairPayload>
/**
 * Model OhlcData
 * 
 */
export type OhlcData = $Result.DefaultSelection<Prisma.$OhlcDataPayload>
/**
 * Model UserPreference
 * 
 */
export type UserPreference = $Result.DefaultSelection<Prisma.$UserPreferencePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BlockProgresses
 * const blockProgresses = await prisma.blockProgress.findMany()
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
   * // Fetch zero or more BlockProgresses
   * const blockProgresses = await prisma.blockProgress.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.blockProgress`: Exposes CRUD operations for the **BlockProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockProgresses
    * const blockProgresses = await prisma.blockProgress.findMany()
    * ```
    */
  get blockProgress(): Prisma.BlockProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventTracking`: Exposes CRUD operations for the **EventTracking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventTrackings
    * const eventTrackings = await prisma.eventTracking.findMany()
    * ```
    */
  get eventTracking(): Prisma.EventTrackingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pair`: Exposes CRUD operations for the **Pair** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pairs
    * const pairs = await prisma.pair.findMany()
    * ```
    */
  get pair(): Prisma.PairDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ohlcData`: Exposes CRUD operations for the **OhlcData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OhlcData
    * const ohlcData = await prisma.ohlcData.findMany()
    * ```
    */
  get ohlcData(): Prisma.OhlcDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreference`: Exposes CRUD operations for the **UserPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreference.findMany()
    * ```
    */
  get userPreference(): Prisma.UserPreferenceDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    BlockProgress: 'BlockProgress',
    EventTracking: 'EventTracking',
    Token: 'Token',
    Pair: 'Pair',
    OhlcData: 'OhlcData',
    UserPreference: 'UserPreference'
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
      modelProps: "blockProgress" | "eventTracking" | "token" | "pair" | "ohlcData" | "userPreference"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BlockProgress: {
        payload: Prisma.$BlockProgressPayload<ExtArgs>
        fields: Prisma.BlockProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockProgressPayload>
          }
          findFirst: {
            args: Prisma.BlockProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockProgressPayload>
          }
          findMany: {
            args: Prisma.BlockProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockProgressPayload>[]
          }
          create: {
            args: Prisma.BlockProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockProgressPayload>
          }
          createMany: {
            args: Prisma.BlockProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlockProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockProgressPayload>[]
          }
          delete: {
            args: Prisma.BlockProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockProgressPayload>
          }
          update: {
            args: Prisma.BlockProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockProgressPayload>
          }
          deleteMany: {
            args: Prisma.BlockProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlockProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockProgressPayload>[]
          }
          upsert: {
            args: Prisma.BlockProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockProgressPayload>
          }
          aggregate: {
            args: Prisma.BlockProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlockProgress>
          }
          groupBy: {
            args: Prisma.BlockProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockProgressCountArgs<ExtArgs>
            result: $Utils.Optional<BlockProgressCountAggregateOutputType> | number
          }
        }
      }
      EventTracking: {
        payload: Prisma.$EventTrackingPayload<ExtArgs>
        fields: Prisma.EventTrackingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventTrackingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTrackingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventTrackingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTrackingPayload>
          }
          findFirst: {
            args: Prisma.EventTrackingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTrackingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventTrackingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTrackingPayload>
          }
          findMany: {
            args: Prisma.EventTrackingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTrackingPayload>[]
          }
          create: {
            args: Prisma.EventTrackingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTrackingPayload>
          }
          createMany: {
            args: Prisma.EventTrackingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventTrackingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTrackingPayload>[]
          }
          delete: {
            args: Prisma.EventTrackingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTrackingPayload>
          }
          update: {
            args: Prisma.EventTrackingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTrackingPayload>
          }
          deleteMany: {
            args: Prisma.EventTrackingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventTrackingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventTrackingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTrackingPayload>[]
          }
          upsert: {
            args: Prisma.EventTrackingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTrackingPayload>
          }
          aggregate: {
            args: Prisma.EventTrackingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventTracking>
          }
          groupBy: {
            args: Prisma.EventTrackingGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventTrackingGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventTrackingCountArgs<ExtArgs>
            result: $Utils.Optional<EventTrackingCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      Pair: {
        payload: Prisma.$PairPayload<ExtArgs>
        fields: Prisma.PairFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PairFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PairFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>
          }
          findFirst: {
            args: Prisma.PairFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PairFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>
          }
          findMany: {
            args: Prisma.PairFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>[]
          }
          create: {
            args: Prisma.PairCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>
          }
          createMany: {
            args: Prisma.PairCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PairCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>[]
          }
          delete: {
            args: Prisma.PairDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>
          }
          update: {
            args: Prisma.PairUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>
          }
          deleteMany: {
            args: Prisma.PairDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PairUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PairUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>[]
          }
          upsert: {
            args: Prisma.PairUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>
          }
          aggregate: {
            args: Prisma.PairAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePair>
          }
          groupBy: {
            args: Prisma.PairGroupByArgs<ExtArgs>
            result: $Utils.Optional<PairGroupByOutputType>[]
          }
          count: {
            args: Prisma.PairCountArgs<ExtArgs>
            result: $Utils.Optional<PairCountAggregateOutputType> | number
          }
        }
      }
      OhlcData: {
        payload: Prisma.$OhlcDataPayload<ExtArgs>
        fields: Prisma.OhlcDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OhlcDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OhlcDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OhlcDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OhlcDataPayload>
          }
          findFirst: {
            args: Prisma.OhlcDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OhlcDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OhlcDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OhlcDataPayload>
          }
          findMany: {
            args: Prisma.OhlcDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OhlcDataPayload>[]
          }
          create: {
            args: Prisma.OhlcDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OhlcDataPayload>
          }
          createMany: {
            args: Prisma.OhlcDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OhlcDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OhlcDataPayload>[]
          }
          delete: {
            args: Prisma.OhlcDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OhlcDataPayload>
          }
          update: {
            args: Prisma.OhlcDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OhlcDataPayload>
          }
          deleteMany: {
            args: Prisma.OhlcDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OhlcDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OhlcDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OhlcDataPayload>[]
          }
          upsert: {
            args: Prisma.OhlcDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OhlcDataPayload>
          }
          aggregate: {
            args: Prisma.OhlcDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOhlcData>
          }
          groupBy: {
            args: Prisma.OhlcDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<OhlcDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.OhlcDataCountArgs<ExtArgs>
            result: $Utils.Optional<OhlcDataCountAggregateOutputType> | number
          }
        }
      }
      UserPreference: {
        payload: Prisma.$UserPreferencePayload<ExtArgs>
        fields: Prisma.UserPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findFirst: {
            args: Prisma.UserPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findMany: {
            args: Prisma.UserPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          create: {
            args: Prisma.UserPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          createMany: {
            args: Prisma.UserPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          delete: {
            args: Prisma.UserPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          update: {
            args: Prisma.UserPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          deleteMany: {
            args: Prisma.UserPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          upsert: {
            args: Prisma.UserPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          aggregate: {
            args: Prisma.UserPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreference>
          }
          groupBy: {
            args: Prisma.UserPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceCountAggregateOutputType> | number
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
    blockProgress?: BlockProgressOmit
    eventTracking?: EventTrackingOmit
    token?: TokenOmit
    pair?: PairOmit
    ohlcData?: OhlcDataOmit
    userPreference?: UserPreferenceOmit
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type TokenCountOutputType
   */

  export type TokenCountOutputType = {
    pairsAsToken0: number
    pairsAsToken1: number
  }

  export type TokenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pairsAsToken0?: boolean | TokenCountOutputTypeCountPairsAsToken0Args
    pairsAsToken1?: boolean | TokenCountOutputTypeCountPairsAsToken1Args
  }

  // Custom InputTypes
  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenCountOutputType
     */
    select?: TokenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountPairsAsToken0Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PairWhereInput
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountPairsAsToken1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PairWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BlockProgress
   */

  export type AggregateBlockProgress = {
    _count: BlockProgressCountAggregateOutputType | null
    _avg: BlockProgressAvgAggregateOutputType | null
    _sum: BlockProgressSumAggregateOutputType | null
    _min: BlockProgressMinAggregateOutputType | null
    _max: BlockProgressMaxAggregateOutputType | null
  }

  export type BlockProgressAvgAggregateOutputType = {
    id: number | null
    lastBlockHeight: number | null
  }

  export type BlockProgressSumAggregateOutputType = {
    id: number | null
    lastBlockHeight: bigint | null
  }

  export type BlockProgressMinAggregateOutputType = {
    id: number | null
    network: string | null
    lastBlockHeight: bigint | null
    updatedAt: Date | null
  }

  export type BlockProgressMaxAggregateOutputType = {
    id: number | null
    network: string | null
    lastBlockHeight: bigint | null
    updatedAt: Date | null
  }

  export type BlockProgressCountAggregateOutputType = {
    id: number
    network: number
    lastBlockHeight: number
    updatedAt: number
    _all: number
  }


  export type BlockProgressAvgAggregateInputType = {
    id?: true
    lastBlockHeight?: true
  }

  export type BlockProgressSumAggregateInputType = {
    id?: true
    lastBlockHeight?: true
  }

  export type BlockProgressMinAggregateInputType = {
    id?: true
    network?: true
    lastBlockHeight?: true
    updatedAt?: true
  }

  export type BlockProgressMaxAggregateInputType = {
    id?: true
    network?: true
    lastBlockHeight?: true
    updatedAt?: true
  }

  export type BlockProgressCountAggregateInputType = {
    id?: true
    network?: true
    lastBlockHeight?: true
    updatedAt?: true
    _all?: true
  }

  export type BlockProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockProgress to aggregate.
     */
    where?: BlockProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockProgresses to fetch.
     */
    orderBy?: BlockProgressOrderByWithRelationInput | BlockProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlockProgresses
    **/
    _count?: true | BlockProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockProgressMaxAggregateInputType
  }

  export type GetBlockProgressAggregateType<T extends BlockProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockProgress[P]>
      : GetScalarType<T[P], AggregateBlockProgress[P]>
  }




  export type BlockProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockProgressWhereInput
    orderBy?: BlockProgressOrderByWithAggregationInput | BlockProgressOrderByWithAggregationInput[]
    by: BlockProgressScalarFieldEnum[] | BlockProgressScalarFieldEnum
    having?: BlockProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockProgressCountAggregateInputType | true
    _avg?: BlockProgressAvgAggregateInputType
    _sum?: BlockProgressSumAggregateInputType
    _min?: BlockProgressMinAggregateInputType
    _max?: BlockProgressMaxAggregateInputType
  }

  export type BlockProgressGroupByOutputType = {
    id: number
    network: string
    lastBlockHeight: bigint
    updatedAt: Date
    _count: BlockProgressCountAggregateOutputType | null
    _avg: BlockProgressAvgAggregateOutputType | null
    _sum: BlockProgressSumAggregateOutputType | null
    _min: BlockProgressMinAggregateOutputType | null
    _max: BlockProgressMaxAggregateOutputType | null
  }

  type GetBlockProgressGroupByPayload<T extends BlockProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockProgressGroupByOutputType[P]>
            : GetScalarType<T[P], BlockProgressGroupByOutputType[P]>
        }
      >
    >


  export type BlockProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    network?: boolean
    lastBlockHeight?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blockProgress"]>

  export type BlockProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    network?: boolean
    lastBlockHeight?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blockProgress"]>

  export type BlockProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    network?: boolean
    lastBlockHeight?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blockProgress"]>

  export type BlockProgressSelectScalar = {
    id?: boolean
    network?: boolean
    lastBlockHeight?: boolean
    updatedAt?: boolean
  }

  export type BlockProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "network" | "lastBlockHeight" | "updatedAt", ExtArgs["result"]["blockProgress"]>

  export type $BlockProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlockProgress"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      network: string
      lastBlockHeight: bigint
      updatedAt: Date
    }, ExtArgs["result"]["blockProgress"]>
    composites: {}
  }

  type BlockProgressGetPayload<S extends boolean | null | undefined | BlockProgressDefaultArgs> = $Result.GetResult<Prisma.$BlockProgressPayload, S>

  type BlockProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockProgressCountAggregateInputType | true
    }

  export interface BlockProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlockProgress'], meta: { name: 'BlockProgress' } }
    /**
     * Find zero or one BlockProgress that matches the filter.
     * @param {BlockProgressFindUniqueArgs} args - Arguments to find a BlockProgress
     * @example
     * // Get one BlockProgress
     * const blockProgress = await prisma.blockProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockProgressFindUniqueArgs>(args: SelectSubset<T, BlockProgressFindUniqueArgs<ExtArgs>>): Prisma__BlockProgressClient<$Result.GetResult<Prisma.$BlockProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlockProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockProgressFindUniqueOrThrowArgs} args - Arguments to find a BlockProgress
     * @example
     * // Get one BlockProgress
     * const blockProgress = await prisma.blockProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockProgressClient<$Result.GetResult<Prisma.$BlockProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockProgressFindFirstArgs} args - Arguments to find a BlockProgress
     * @example
     * // Get one BlockProgress
     * const blockProgress = await prisma.blockProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockProgressFindFirstArgs>(args?: SelectSubset<T, BlockProgressFindFirstArgs<ExtArgs>>): Prisma__BlockProgressClient<$Result.GetResult<Prisma.$BlockProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockProgressFindFirstOrThrowArgs} args - Arguments to find a BlockProgress
     * @example
     * // Get one BlockProgress
     * const blockProgress = await prisma.blockProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockProgressClient<$Result.GetResult<Prisma.$BlockProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlockProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockProgresses
     * const blockProgresses = await prisma.blockProgress.findMany()
     * 
     * // Get first 10 BlockProgresses
     * const blockProgresses = await prisma.blockProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockProgressWithIdOnly = await prisma.blockProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockProgressFindManyArgs>(args?: SelectSubset<T, BlockProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlockProgress.
     * @param {BlockProgressCreateArgs} args - Arguments to create a BlockProgress.
     * @example
     * // Create one BlockProgress
     * const BlockProgress = await prisma.blockProgress.create({
     *   data: {
     *     // ... data to create a BlockProgress
     *   }
     * })
     * 
     */
    create<T extends BlockProgressCreateArgs>(args: SelectSubset<T, BlockProgressCreateArgs<ExtArgs>>): Prisma__BlockProgressClient<$Result.GetResult<Prisma.$BlockProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlockProgresses.
     * @param {BlockProgressCreateManyArgs} args - Arguments to create many BlockProgresses.
     * @example
     * // Create many BlockProgresses
     * const blockProgress = await prisma.blockProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockProgressCreateManyArgs>(args?: SelectSubset<T, BlockProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlockProgresses and returns the data saved in the database.
     * @param {BlockProgressCreateManyAndReturnArgs} args - Arguments to create many BlockProgresses.
     * @example
     * // Create many BlockProgresses
     * const blockProgress = await prisma.blockProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlockProgresses and only return the `id`
     * const blockProgressWithIdOnly = await prisma.blockProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlockProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, BlockProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlockProgress.
     * @param {BlockProgressDeleteArgs} args - Arguments to delete one BlockProgress.
     * @example
     * // Delete one BlockProgress
     * const BlockProgress = await prisma.blockProgress.delete({
     *   where: {
     *     // ... filter to delete one BlockProgress
     *   }
     * })
     * 
     */
    delete<T extends BlockProgressDeleteArgs>(args: SelectSubset<T, BlockProgressDeleteArgs<ExtArgs>>): Prisma__BlockProgressClient<$Result.GetResult<Prisma.$BlockProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlockProgress.
     * @param {BlockProgressUpdateArgs} args - Arguments to update one BlockProgress.
     * @example
     * // Update one BlockProgress
     * const blockProgress = await prisma.blockProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockProgressUpdateArgs>(args: SelectSubset<T, BlockProgressUpdateArgs<ExtArgs>>): Prisma__BlockProgressClient<$Result.GetResult<Prisma.$BlockProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlockProgresses.
     * @param {BlockProgressDeleteManyArgs} args - Arguments to filter BlockProgresses to delete.
     * @example
     * // Delete a few BlockProgresses
     * const { count } = await prisma.blockProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockProgressDeleteManyArgs>(args?: SelectSubset<T, BlockProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockProgresses
     * const blockProgress = await prisma.blockProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockProgressUpdateManyArgs>(args: SelectSubset<T, BlockProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockProgresses and returns the data updated in the database.
     * @param {BlockProgressUpdateManyAndReturnArgs} args - Arguments to update many BlockProgresses.
     * @example
     * // Update many BlockProgresses
     * const blockProgress = await prisma.blockProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlockProgresses and only return the `id`
     * const blockProgressWithIdOnly = await prisma.blockProgress.updateManyAndReturn({
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
    updateManyAndReturn<T extends BlockProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, BlockProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlockProgress.
     * @param {BlockProgressUpsertArgs} args - Arguments to update or create a BlockProgress.
     * @example
     * // Update or create a BlockProgress
     * const blockProgress = await prisma.blockProgress.upsert({
     *   create: {
     *     // ... data to create a BlockProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockProgress we want to update
     *   }
     * })
     */
    upsert<T extends BlockProgressUpsertArgs>(args: SelectSubset<T, BlockProgressUpsertArgs<ExtArgs>>): Prisma__BlockProgressClient<$Result.GetResult<Prisma.$BlockProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlockProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockProgressCountArgs} args - Arguments to filter BlockProgresses to count.
     * @example
     * // Count the number of BlockProgresses
     * const count = await prisma.blockProgress.count({
     *   where: {
     *     // ... the filter for the BlockProgresses we want to count
     *   }
     * })
    **/
    count<T extends BlockProgressCountArgs>(
      args?: Subset<T, BlockProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlockProgressAggregateArgs>(args: Subset<T, BlockProgressAggregateArgs>): Prisma.PrismaPromise<GetBlockProgressAggregateType<T>>

    /**
     * Group by BlockProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockProgressGroupByArgs} args - Group by arguments.
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
      T extends BlockProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockProgressGroupByArgs['orderBy'] }
        : { orderBy?: BlockProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlockProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlockProgress model
   */
  readonly fields: BlockProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlockProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the BlockProgress model
   */
  interface BlockProgressFieldRefs {
    readonly id: FieldRef<"BlockProgress", 'Int'>
    readonly network: FieldRef<"BlockProgress", 'String'>
    readonly lastBlockHeight: FieldRef<"BlockProgress", 'BigInt'>
    readonly updatedAt: FieldRef<"BlockProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlockProgress findUnique
   */
  export type BlockProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockProgress
     */
    select?: BlockProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockProgress
     */
    omit?: BlockProgressOmit<ExtArgs> | null
    /**
     * Filter, which BlockProgress to fetch.
     */
    where: BlockProgressWhereUniqueInput
  }

  /**
   * BlockProgress findUniqueOrThrow
   */
  export type BlockProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockProgress
     */
    select?: BlockProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockProgress
     */
    omit?: BlockProgressOmit<ExtArgs> | null
    /**
     * Filter, which BlockProgress to fetch.
     */
    where: BlockProgressWhereUniqueInput
  }

  /**
   * BlockProgress findFirst
   */
  export type BlockProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockProgress
     */
    select?: BlockProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockProgress
     */
    omit?: BlockProgressOmit<ExtArgs> | null
    /**
     * Filter, which BlockProgress to fetch.
     */
    where?: BlockProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockProgresses to fetch.
     */
    orderBy?: BlockProgressOrderByWithRelationInput | BlockProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockProgresses.
     */
    cursor?: BlockProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockProgresses.
     */
    distinct?: BlockProgressScalarFieldEnum | BlockProgressScalarFieldEnum[]
  }

  /**
   * BlockProgress findFirstOrThrow
   */
  export type BlockProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockProgress
     */
    select?: BlockProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockProgress
     */
    omit?: BlockProgressOmit<ExtArgs> | null
    /**
     * Filter, which BlockProgress to fetch.
     */
    where?: BlockProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockProgresses to fetch.
     */
    orderBy?: BlockProgressOrderByWithRelationInput | BlockProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockProgresses.
     */
    cursor?: BlockProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockProgresses.
     */
    distinct?: BlockProgressScalarFieldEnum | BlockProgressScalarFieldEnum[]
  }

  /**
   * BlockProgress findMany
   */
  export type BlockProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockProgress
     */
    select?: BlockProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockProgress
     */
    omit?: BlockProgressOmit<ExtArgs> | null
    /**
     * Filter, which BlockProgresses to fetch.
     */
    where?: BlockProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockProgresses to fetch.
     */
    orderBy?: BlockProgressOrderByWithRelationInput | BlockProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlockProgresses.
     */
    cursor?: BlockProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockProgresses.
     */
    skip?: number
    distinct?: BlockProgressScalarFieldEnum | BlockProgressScalarFieldEnum[]
  }

  /**
   * BlockProgress create
   */
  export type BlockProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockProgress
     */
    select?: BlockProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockProgress
     */
    omit?: BlockProgressOmit<ExtArgs> | null
    /**
     * The data needed to create a BlockProgress.
     */
    data: XOR<BlockProgressCreateInput, BlockProgressUncheckedCreateInput>
  }

  /**
   * BlockProgress createMany
   */
  export type BlockProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlockProgresses.
     */
    data: BlockProgressCreateManyInput | BlockProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlockProgress createManyAndReturn
   */
  export type BlockProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockProgress
     */
    select?: BlockProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockProgress
     */
    omit?: BlockProgressOmit<ExtArgs> | null
    /**
     * The data used to create many BlockProgresses.
     */
    data: BlockProgressCreateManyInput | BlockProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlockProgress update
   */
  export type BlockProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockProgress
     */
    select?: BlockProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockProgress
     */
    omit?: BlockProgressOmit<ExtArgs> | null
    /**
     * The data needed to update a BlockProgress.
     */
    data: XOR<BlockProgressUpdateInput, BlockProgressUncheckedUpdateInput>
    /**
     * Choose, which BlockProgress to update.
     */
    where: BlockProgressWhereUniqueInput
  }

  /**
   * BlockProgress updateMany
   */
  export type BlockProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlockProgresses.
     */
    data: XOR<BlockProgressUpdateManyMutationInput, BlockProgressUncheckedUpdateManyInput>
    /**
     * Filter which BlockProgresses to update
     */
    where?: BlockProgressWhereInput
    /**
     * Limit how many BlockProgresses to update.
     */
    limit?: number
  }

  /**
   * BlockProgress updateManyAndReturn
   */
  export type BlockProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockProgress
     */
    select?: BlockProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockProgress
     */
    omit?: BlockProgressOmit<ExtArgs> | null
    /**
     * The data used to update BlockProgresses.
     */
    data: XOR<BlockProgressUpdateManyMutationInput, BlockProgressUncheckedUpdateManyInput>
    /**
     * Filter which BlockProgresses to update
     */
    where?: BlockProgressWhereInput
    /**
     * Limit how many BlockProgresses to update.
     */
    limit?: number
  }

  /**
   * BlockProgress upsert
   */
  export type BlockProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockProgress
     */
    select?: BlockProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockProgress
     */
    omit?: BlockProgressOmit<ExtArgs> | null
    /**
     * The filter to search for the BlockProgress to update in case it exists.
     */
    where: BlockProgressWhereUniqueInput
    /**
     * In case the BlockProgress found by the `where` argument doesn't exist, create a new BlockProgress with this data.
     */
    create: XOR<BlockProgressCreateInput, BlockProgressUncheckedCreateInput>
    /**
     * In case the BlockProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockProgressUpdateInput, BlockProgressUncheckedUpdateInput>
  }

  /**
   * BlockProgress delete
   */
  export type BlockProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockProgress
     */
    select?: BlockProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockProgress
     */
    omit?: BlockProgressOmit<ExtArgs> | null
    /**
     * Filter which BlockProgress to delete.
     */
    where: BlockProgressWhereUniqueInput
  }

  /**
   * BlockProgress deleteMany
   */
  export type BlockProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockProgresses to delete
     */
    where?: BlockProgressWhereInput
    /**
     * Limit how many BlockProgresses to delete.
     */
    limit?: number
  }

  /**
   * BlockProgress without action
   */
  export type BlockProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockProgress
     */
    select?: BlockProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockProgress
     */
    omit?: BlockProgressOmit<ExtArgs> | null
  }


  /**
   * Model EventTracking
   */

  export type AggregateEventTracking = {
    _count: EventTrackingCountAggregateOutputType | null
    _avg: EventTrackingAvgAggregateOutputType | null
    _sum: EventTrackingSumAggregateOutputType | null
    _min: EventTrackingMinAggregateOutputType | null
    _max: EventTrackingMaxAggregateOutputType | null
  }

  export type EventTrackingAvgAggregateOutputType = {
    id: number | null
    blockHeight: number | null
  }

  export type EventTrackingSumAggregateOutputType = {
    id: number | null
    blockHeight: bigint | null
  }

  export type EventTrackingMinAggregateOutputType = {
    id: number | null
    eventType: string | null
    blockHeight: bigint | null
    transactionHash: string | null
    processed: boolean | null
    error: string | null
    createdAt: Date | null
    updatedAt: Date | null
    network: string | null
    sequenceNumber: string | null
  }

  export type EventTrackingMaxAggregateOutputType = {
    id: number | null
    eventType: string | null
    blockHeight: bigint | null
    transactionHash: string | null
    processed: boolean | null
    error: string | null
    createdAt: Date | null
    updatedAt: Date | null
    network: string | null
    sequenceNumber: string | null
  }

  export type EventTrackingCountAggregateOutputType = {
    id: number
    eventType: number
    blockHeight: number
    transactionHash: number
    processed: number
    error: number
    createdAt: number
    updatedAt: number
    network: number
    sequenceNumber: number
    _all: number
  }


  export type EventTrackingAvgAggregateInputType = {
    id?: true
    blockHeight?: true
  }

  export type EventTrackingSumAggregateInputType = {
    id?: true
    blockHeight?: true
  }

  export type EventTrackingMinAggregateInputType = {
    id?: true
    eventType?: true
    blockHeight?: true
    transactionHash?: true
    processed?: true
    error?: true
    createdAt?: true
    updatedAt?: true
    network?: true
    sequenceNumber?: true
  }

  export type EventTrackingMaxAggregateInputType = {
    id?: true
    eventType?: true
    blockHeight?: true
    transactionHash?: true
    processed?: true
    error?: true
    createdAt?: true
    updatedAt?: true
    network?: true
    sequenceNumber?: true
  }

  export type EventTrackingCountAggregateInputType = {
    id?: true
    eventType?: true
    blockHeight?: true
    transactionHash?: true
    processed?: true
    error?: true
    createdAt?: true
    updatedAt?: true
    network?: true
    sequenceNumber?: true
    _all?: true
  }

  export type EventTrackingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventTracking to aggregate.
     */
    where?: EventTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTrackings to fetch.
     */
    orderBy?: EventTrackingOrderByWithRelationInput | EventTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventTrackings
    **/
    _count?: true | EventTrackingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventTrackingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventTrackingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventTrackingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventTrackingMaxAggregateInputType
  }

  export type GetEventTrackingAggregateType<T extends EventTrackingAggregateArgs> = {
        [P in keyof T & keyof AggregateEventTracking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventTracking[P]>
      : GetScalarType<T[P], AggregateEventTracking[P]>
  }




  export type EventTrackingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventTrackingWhereInput
    orderBy?: EventTrackingOrderByWithAggregationInput | EventTrackingOrderByWithAggregationInput[]
    by: EventTrackingScalarFieldEnum[] | EventTrackingScalarFieldEnum
    having?: EventTrackingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventTrackingCountAggregateInputType | true
    _avg?: EventTrackingAvgAggregateInputType
    _sum?: EventTrackingSumAggregateInputType
    _min?: EventTrackingMinAggregateInputType
    _max?: EventTrackingMaxAggregateInputType
  }

  export type EventTrackingGroupByOutputType = {
    id: number
    eventType: string
    blockHeight: bigint
    transactionHash: string
    processed: boolean
    error: string | null
    createdAt: Date
    updatedAt: Date
    network: string
    sequenceNumber: string | null
    _count: EventTrackingCountAggregateOutputType | null
    _avg: EventTrackingAvgAggregateOutputType | null
    _sum: EventTrackingSumAggregateOutputType | null
    _min: EventTrackingMinAggregateOutputType | null
    _max: EventTrackingMaxAggregateOutputType | null
  }

  type GetEventTrackingGroupByPayload<T extends EventTrackingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventTrackingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventTrackingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventTrackingGroupByOutputType[P]>
            : GetScalarType<T[P], EventTrackingGroupByOutputType[P]>
        }
      >
    >


  export type EventTrackingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    blockHeight?: boolean
    transactionHash?: boolean
    processed?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    network?: boolean
    sequenceNumber?: boolean
  }, ExtArgs["result"]["eventTracking"]>

  export type EventTrackingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    blockHeight?: boolean
    transactionHash?: boolean
    processed?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    network?: boolean
    sequenceNumber?: boolean
  }, ExtArgs["result"]["eventTracking"]>

  export type EventTrackingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    blockHeight?: boolean
    transactionHash?: boolean
    processed?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    network?: boolean
    sequenceNumber?: boolean
  }, ExtArgs["result"]["eventTracking"]>

  export type EventTrackingSelectScalar = {
    id?: boolean
    eventType?: boolean
    blockHeight?: boolean
    transactionHash?: boolean
    processed?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    network?: boolean
    sequenceNumber?: boolean
  }

  export type EventTrackingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventType" | "blockHeight" | "transactionHash" | "processed" | "error" | "createdAt" | "updatedAt" | "network" | "sequenceNumber", ExtArgs["result"]["eventTracking"]>

  export type $EventTrackingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventTracking"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventType: string
      blockHeight: bigint
      transactionHash: string
      processed: boolean
      error: string | null
      createdAt: Date
      updatedAt: Date
      network: string
      sequenceNumber: string | null
    }, ExtArgs["result"]["eventTracking"]>
    composites: {}
  }

  type EventTrackingGetPayload<S extends boolean | null | undefined | EventTrackingDefaultArgs> = $Result.GetResult<Prisma.$EventTrackingPayload, S>

  type EventTrackingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventTrackingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventTrackingCountAggregateInputType | true
    }

  export interface EventTrackingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventTracking'], meta: { name: 'EventTracking' } }
    /**
     * Find zero or one EventTracking that matches the filter.
     * @param {EventTrackingFindUniqueArgs} args - Arguments to find a EventTracking
     * @example
     * // Get one EventTracking
     * const eventTracking = await prisma.eventTracking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventTrackingFindUniqueArgs>(args: SelectSubset<T, EventTrackingFindUniqueArgs<ExtArgs>>): Prisma__EventTrackingClient<$Result.GetResult<Prisma.$EventTrackingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventTracking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventTrackingFindUniqueOrThrowArgs} args - Arguments to find a EventTracking
     * @example
     * // Get one EventTracking
     * const eventTracking = await prisma.eventTracking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventTrackingFindUniqueOrThrowArgs>(args: SelectSubset<T, EventTrackingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventTrackingClient<$Result.GetResult<Prisma.$EventTrackingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventTracking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTrackingFindFirstArgs} args - Arguments to find a EventTracking
     * @example
     * // Get one EventTracking
     * const eventTracking = await prisma.eventTracking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventTrackingFindFirstArgs>(args?: SelectSubset<T, EventTrackingFindFirstArgs<ExtArgs>>): Prisma__EventTrackingClient<$Result.GetResult<Prisma.$EventTrackingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventTracking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTrackingFindFirstOrThrowArgs} args - Arguments to find a EventTracking
     * @example
     * // Get one EventTracking
     * const eventTracking = await prisma.eventTracking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventTrackingFindFirstOrThrowArgs>(args?: SelectSubset<T, EventTrackingFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventTrackingClient<$Result.GetResult<Prisma.$EventTrackingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventTrackings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTrackingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventTrackings
     * const eventTrackings = await prisma.eventTracking.findMany()
     * 
     * // Get first 10 EventTrackings
     * const eventTrackings = await prisma.eventTracking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventTrackingWithIdOnly = await prisma.eventTracking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventTrackingFindManyArgs>(args?: SelectSubset<T, EventTrackingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventTracking.
     * @param {EventTrackingCreateArgs} args - Arguments to create a EventTracking.
     * @example
     * // Create one EventTracking
     * const EventTracking = await prisma.eventTracking.create({
     *   data: {
     *     // ... data to create a EventTracking
     *   }
     * })
     * 
     */
    create<T extends EventTrackingCreateArgs>(args: SelectSubset<T, EventTrackingCreateArgs<ExtArgs>>): Prisma__EventTrackingClient<$Result.GetResult<Prisma.$EventTrackingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventTrackings.
     * @param {EventTrackingCreateManyArgs} args - Arguments to create many EventTrackings.
     * @example
     * // Create many EventTrackings
     * const eventTracking = await prisma.eventTracking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventTrackingCreateManyArgs>(args?: SelectSubset<T, EventTrackingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventTrackings and returns the data saved in the database.
     * @param {EventTrackingCreateManyAndReturnArgs} args - Arguments to create many EventTrackings.
     * @example
     * // Create many EventTrackings
     * const eventTracking = await prisma.eventTracking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventTrackings and only return the `id`
     * const eventTrackingWithIdOnly = await prisma.eventTracking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventTrackingCreateManyAndReturnArgs>(args?: SelectSubset<T, EventTrackingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTrackingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventTracking.
     * @param {EventTrackingDeleteArgs} args - Arguments to delete one EventTracking.
     * @example
     * // Delete one EventTracking
     * const EventTracking = await prisma.eventTracking.delete({
     *   where: {
     *     // ... filter to delete one EventTracking
     *   }
     * })
     * 
     */
    delete<T extends EventTrackingDeleteArgs>(args: SelectSubset<T, EventTrackingDeleteArgs<ExtArgs>>): Prisma__EventTrackingClient<$Result.GetResult<Prisma.$EventTrackingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventTracking.
     * @param {EventTrackingUpdateArgs} args - Arguments to update one EventTracking.
     * @example
     * // Update one EventTracking
     * const eventTracking = await prisma.eventTracking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventTrackingUpdateArgs>(args: SelectSubset<T, EventTrackingUpdateArgs<ExtArgs>>): Prisma__EventTrackingClient<$Result.GetResult<Prisma.$EventTrackingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventTrackings.
     * @param {EventTrackingDeleteManyArgs} args - Arguments to filter EventTrackings to delete.
     * @example
     * // Delete a few EventTrackings
     * const { count } = await prisma.eventTracking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventTrackingDeleteManyArgs>(args?: SelectSubset<T, EventTrackingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTrackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTrackingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventTrackings
     * const eventTracking = await prisma.eventTracking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventTrackingUpdateManyArgs>(args: SelectSubset<T, EventTrackingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTrackings and returns the data updated in the database.
     * @param {EventTrackingUpdateManyAndReturnArgs} args - Arguments to update many EventTrackings.
     * @example
     * // Update many EventTrackings
     * const eventTracking = await prisma.eventTracking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventTrackings and only return the `id`
     * const eventTrackingWithIdOnly = await prisma.eventTracking.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventTrackingUpdateManyAndReturnArgs>(args: SelectSubset<T, EventTrackingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTrackingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventTracking.
     * @param {EventTrackingUpsertArgs} args - Arguments to update or create a EventTracking.
     * @example
     * // Update or create a EventTracking
     * const eventTracking = await prisma.eventTracking.upsert({
     *   create: {
     *     // ... data to create a EventTracking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventTracking we want to update
     *   }
     * })
     */
    upsert<T extends EventTrackingUpsertArgs>(args: SelectSubset<T, EventTrackingUpsertArgs<ExtArgs>>): Prisma__EventTrackingClient<$Result.GetResult<Prisma.$EventTrackingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventTrackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTrackingCountArgs} args - Arguments to filter EventTrackings to count.
     * @example
     * // Count the number of EventTrackings
     * const count = await prisma.eventTracking.count({
     *   where: {
     *     // ... the filter for the EventTrackings we want to count
     *   }
     * })
    **/
    count<T extends EventTrackingCountArgs>(
      args?: Subset<T, EventTrackingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventTrackingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventTracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTrackingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventTrackingAggregateArgs>(args: Subset<T, EventTrackingAggregateArgs>): Prisma.PrismaPromise<GetEventTrackingAggregateType<T>>

    /**
     * Group by EventTracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTrackingGroupByArgs} args - Group by arguments.
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
      T extends EventTrackingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventTrackingGroupByArgs['orderBy'] }
        : { orderBy?: EventTrackingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventTrackingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventTrackingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventTracking model
   */
  readonly fields: EventTrackingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventTracking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventTrackingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the EventTracking model
   */
  interface EventTrackingFieldRefs {
    readonly id: FieldRef<"EventTracking", 'Int'>
    readonly eventType: FieldRef<"EventTracking", 'String'>
    readonly blockHeight: FieldRef<"EventTracking", 'BigInt'>
    readonly transactionHash: FieldRef<"EventTracking", 'String'>
    readonly processed: FieldRef<"EventTracking", 'Boolean'>
    readonly error: FieldRef<"EventTracking", 'String'>
    readonly createdAt: FieldRef<"EventTracking", 'DateTime'>
    readonly updatedAt: FieldRef<"EventTracking", 'DateTime'>
    readonly network: FieldRef<"EventTracking", 'String'>
    readonly sequenceNumber: FieldRef<"EventTracking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EventTracking findUnique
   */
  export type EventTrackingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTracking
     */
    select?: EventTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTracking
     */
    omit?: EventTrackingOmit<ExtArgs> | null
    /**
     * Filter, which EventTracking to fetch.
     */
    where: EventTrackingWhereUniqueInput
  }

  /**
   * EventTracking findUniqueOrThrow
   */
  export type EventTrackingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTracking
     */
    select?: EventTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTracking
     */
    omit?: EventTrackingOmit<ExtArgs> | null
    /**
     * Filter, which EventTracking to fetch.
     */
    where: EventTrackingWhereUniqueInput
  }

  /**
   * EventTracking findFirst
   */
  export type EventTrackingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTracking
     */
    select?: EventTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTracking
     */
    omit?: EventTrackingOmit<ExtArgs> | null
    /**
     * Filter, which EventTracking to fetch.
     */
    where?: EventTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTrackings to fetch.
     */
    orderBy?: EventTrackingOrderByWithRelationInput | EventTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTrackings.
     */
    cursor?: EventTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTrackings.
     */
    distinct?: EventTrackingScalarFieldEnum | EventTrackingScalarFieldEnum[]
  }

  /**
   * EventTracking findFirstOrThrow
   */
  export type EventTrackingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTracking
     */
    select?: EventTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTracking
     */
    omit?: EventTrackingOmit<ExtArgs> | null
    /**
     * Filter, which EventTracking to fetch.
     */
    where?: EventTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTrackings to fetch.
     */
    orderBy?: EventTrackingOrderByWithRelationInput | EventTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTrackings.
     */
    cursor?: EventTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTrackings.
     */
    distinct?: EventTrackingScalarFieldEnum | EventTrackingScalarFieldEnum[]
  }

  /**
   * EventTracking findMany
   */
  export type EventTrackingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTracking
     */
    select?: EventTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTracking
     */
    omit?: EventTrackingOmit<ExtArgs> | null
    /**
     * Filter, which EventTrackings to fetch.
     */
    where?: EventTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTrackings to fetch.
     */
    orderBy?: EventTrackingOrderByWithRelationInput | EventTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventTrackings.
     */
    cursor?: EventTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTrackings.
     */
    skip?: number
    distinct?: EventTrackingScalarFieldEnum | EventTrackingScalarFieldEnum[]
  }

  /**
   * EventTracking create
   */
  export type EventTrackingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTracking
     */
    select?: EventTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTracking
     */
    omit?: EventTrackingOmit<ExtArgs> | null
    /**
     * The data needed to create a EventTracking.
     */
    data: XOR<EventTrackingCreateInput, EventTrackingUncheckedCreateInput>
  }

  /**
   * EventTracking createMany
   */
  export type EventTrackingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventTrackings.
     */
    data: EventTrackingCreateManyInput | EventTrackingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventTracking createManyAndReturn
   */
  export type EventTrackingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTracking
     */
    select?: EventTrackingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventTracking
     */
    omit?: EventTrackingOmit<ExtArgs> | null
    /**
     * The data used to create many EventTrackings.
     */
    data: EventTrackingCreateManyInput | EventTrackingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventTracking update
   */
  export type EventTrackingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTracking
     */
    select?: EventTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTracking
     */
    omit?: EventTrackingOmit<ExtArgs> | null
    /**
     * The data needed to update a EventTracking.
     */
    data: XOR<EventTrackingUpdateInput, EventTrackingUncheckedUpdateInput>
    /**
     * Choose, which EventTracking to update.
     */
    where: EventTrackingWhereUniqueInput
  }

  /**
   * EventTracking updateMany
   */
  export type EventTrackingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventTrackings.
     */
    data: XOR<EventTrackingUpdateManyMutationInput, EventTrackingUncheckedUpdateManyInput>
    /**
     * Filter which EventTrackings to update
     */
    where?: EventTrackingWhereInput
    /**
     * Limit how many EventTrackings to update.
     */
    limit?: number
  }

  /**
   * EventTracking updateManyAndReturn
   */
  export type EventTrackingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTracking
     */
    select?: EventTrackingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventTracking
     */
    omit?: EventTrackingOmit<ExtArgs> | null
    /**
     * The data used to update EventTrackings.
     */
    data: XOR<EventTrackingUpdateManyMutationInput, EventTrackingUncheckedUpdateManyInput>
    /**
     * Filter which EventTrackings to update
     */
    where?: EventTrackingWhereInput
    /**
     * Limit how many EventTrackings to update.
     */
    limit?: number
  }

  /**
   * EventTracking upsert
   */
  export type EventTrackingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTracking
     */
    select?: EventTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTracking
     */
    omit?: EventTrackingOmit<ExtArgs> | null
    /**
     * The filter to search for the EventTracking to update in case it exists.
     */
    where: EventTrackingWhereUniqueInput
    /**
     * In case the EventTracking found by the `where` argument doesn't exist, create a new EventTracking with this data.
     */
    create: XOR<EventTrackingCreateInput, EventTrackingUncheckedCreateInput>
    /**
     * In case the EventTracking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventTrackingUpdateInput, EventTrackingUncheckedUpdateInput>
  }

  /**
   * EventTracking delete
   */
  export type EventTrackingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTracking
     */
    select?: EventTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTracking
     */
    omit?: EventTrackingOmit<ExtArgs> | null
    /**
     * Filter which EventTracking to delete.
     */
    where: EventTrackingWhereUniqueInput
  }

  /**
   * EventTracking deleteMany
   */
  export type EventTrackingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventTrackings to delete
     */
    where?: EventTrackingWhereInput
    /**
     * Limit how many EventTrackings to delete.
     */
    limit?: number
  }

  /**
   * EventTracking without action
   */
  export type EventTrackingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTracking
     */
    select?: EventTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTracking
     */
    omit?: EventTrackingOmit<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    id: number | null
    decimals: number | null
    maxSupply: number | null
    circulatingSupply: number | null
  }

  export type TokenSumAggregateOutputType = {
    id: number | null
    decimals: number | null
    maxSupply: bigint | null
    circulatingSupply: bigint | null
  }

  export type TokenMinAggregateOutputType = {
    id: number | null
    network: string | null
    address: string | null
    wrappedAddress: string | null
    symbol: string | null
    name: string | null
    decimals: number | null
    maxSupply: bigint | null
    circulatingSupply: bigint | null
    createdAt: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    id: number | null
    network: string | null
    address: string | null
    wrappedAddress: string | null
    symbol: string | null
    name: string | null
    decimals: number | null
    maxSupply: bigint | null
    circulatingSupply: bigint | null
    createdAt: Date | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    network: number
    address: number
    wrappedAddress: number
    symbol: number
    name: number
    decimals: number
    maxSupply: number
    circulatingSupply: number
    createdAt: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    id?: true
    decimals?: true
    maxSupply?: true
    circulatingSupply?: true
  }

  export type TokenSumAggregateInputType = {
    id?: true
    decimals?: true
    maxSupply?: true
    circulatingSupply?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    network?: true
    address?: true
    wrappedAddress?: true
    symbol?: true
    name?: true
    decimals?: true
    maxSupply?: true
    circulatingSupply?: true
    createdAt?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    network?: true
    address?: true
    wrappedAddress?: true
    symbol?: true
    name?: true
    decimals?: true
    maxSupply?: true
    circulatingSupply?: true
    createdAt?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    network?: true
    address?: true
    wrappedAddress?: true
    symbol?: true
    name?: true
    decimals?: true
    maxSupply?: true
    circulatingSupply?: true
    createdAt?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: number
    network: string
    address: string
    wrappedAddress: string | null
    symbol: string
    name: string
    decimals: number
    maxSupply: bigint | null
    circulatingSupply: bigint | null
    createdAt: Date
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    network?: boolean
    address?: boolean
    wrappedAddress?: boolean
    symbol?: boolean
    name?: boolean
    decimals?: boolean
    maxSupply?: boolean
    circulatingSupply?: boolean
    createdAt?: boolean
    pairsAsToken0?: boolean | Token$pairsAsToken0Args<ExtArgs>
    pairsAsToken1?: boolean | Token$pairsAsToken1Args<ExtArgs>
    _count?: boolean | TokenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    network?: boolean
    address?: boolean
    wrappedAddress?: boolean
    symbol?: boolean
    name?: boolean
    decimals?: boolean
    maxSupply?: boolean
    circulatingSupply?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    network?: boolean
    address?: boolean
    wrappedAddress?: boolean
    symbol?: boolean
    name?: boolean
    decimals?: boolean
    maxSupply?: boolean
    circulatingSupply?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    network?: boolean
    address?: boolean
    wrappedAddress?: boolean
    symbol?: boolean
    name?: boolean
    decimals?: boolean
    maxSupply?: boolean
    circulatingSupply?: boolean
    createdAt?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "network" | "address" | "wrappedAddress" | "symbol" | "name" | "decimals" | "maxSupply" | "circulatingSupply" | "createdAt", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pairsAsToken0?: boolean | Token$pairsAsToken0Args<ExtArgs>
    pairsAsToken1?: boolean | Token$pairsAsToken1Args<ExtArgs>
    _count?: boolean | TokenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      pairsAsToken0: Prisma.$PairPayload<ExtArgs>[]
      pairsAsToken1: Prisma.$PairPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      network: string
      address: string
      wrappedAddress: string | null
      symbol: string
      name: string
      decimals: number
      maxSupply: bigint | null
      circulatingSupply: bigint | null
      createdAt: Date
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
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
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
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
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pairsAsToken0<T extends Token$pairsAsToken0Args<ExtArgs> = {}>(args?: Subset<T, Token$pairsAsToken0Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pairsAsToken1<T extends Token$pairsAsToken1Args<ExtArgs> = {}>(args?: Subset<T, Token$pairsAsToken1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'Int'>
    readonly network: FieldRef<"Token", 'String'>
    readonly address: FieldRef<"Token", 'String'>
    readonly wrappedAddress: FieldRef<"Token", 'String'>
    readonly symbol: FieldRef<"Token", 'String'>
    readonly name: FieldRef<"Token", 'String'>
    readonly decimals: FieldRef<"Token", 'Int'>
    readonly maxSupply: FieldRef<"Token", 'BigInt'>
    readonly circulatingSupply: FieldRef<"Token", 'BigInt'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token.pairsAsToken0
   */
  export type Token$pairsAsToken0Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    where?: PairWhereInput
    orderBy?: PairOrderByWithRelationInput | PairOrderByWithRelationInput[]
    cursor?: PairWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PairScalarFieldEnum | PairScalarFieldEnum[]
  }

  /**
   * Token.pairsAsToken1
   */
  export type Token$pairsAsToken1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    where?: PairWhereInput
    orderBy?: PairOrderByWithRelationInput | PairOrderByWithRelationInput[]
    cursor?: PairWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PairScalarFieldEnum | PairScalarFieldEnum[]
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model Pair
   */

  export type AggregatePair = {
    _count: PairCountAggregateOutputType | null
    _avg: PairAvgAggregateOutputType | null
    _sum: PairSumAggregateOutputType | null
    _min: PairMinAggregateOutputType | null
    _max: PairMaxAggregateOutputType | null
  }

  export type PairAvgAggregateOutputType = {
    id: number | null
    token0Id: number | null
    token1Id: number | null
    spikeyAmmReserve0: number | null
    spikeyAmmReserve1: number | null
  }

  export type PairSumAggregateOutputType = {
    id: number | null
    token0Id: number | null
    token1Id: number | null
    spikeyAmmReserve0: bigint | null
    spikeyAmmReserve1: bigint | null
  }

  export type PairMinAggregateOutputType = {
    id: number | null
    network: string | null
    token0Id: number | null
    token1Id: number | null
    spikeyAmmPairAddress: string | null
    spikeyAmmReserve0: bigint | null
    spikeyAmmReserve1: bigint | null
    lastStatsUpdate: Date | null
    createdAt: Date | null
  }

  export type PairMaxAggregateOutputType = {
    id: number | null
    network: string | null
    token0Id: number | null
    token1Id: number | null
    spikeyAmmPairAddress: string | null
    spikeyAmmReserve0: bigint | null
    spikeyAmmReserve1: bigint | null
    lastStatsUpdate: Date | null
    createdAt: Date | null
  }

  export type PairCountAggregateOutputType = {
    id: number
    network: number
    token0Id: number
    token1Id: number
    spikeyAmmPairAddress: number
    spikeyAmmReserve0: number
    spikeyAmmReserve1: number
    lastStatsUpdate: number
    createdAt: number
    _all: number
  }


  export type PairAvgAggregateInputType = {
    id?: true
    token0Id?: true
    token1Id?: true
    spikeyAmmReserve0?: true
    spikeyAmmReserve1?: true
  }

  export type PairSumAggregateInputType = {
    id?: true
    token0Id?: true
    token1Id?: true
    spikeyAmmReserve0?: true
    spikeyAmmReserve1?: true
  }

  export type PairMinAggregateInputType = {
    id?: true
    network?: true
    token0Id?: true
    token1Id?: true
    spikeyAmmPairAddress?: true
    spikeyAmmReserve0?: true
    spikeyAmmReserve1?: true
    lastStatsUpdate?: true
    createdAt?: true
  }

  export type PairMaxAggregateInputType = {
    id?: true
    network?: true
    token0Id?: true
    token1Id?: true
    spikeyAmmPairAddress?: true
    spikeyAmmReserve0?: true
    spikeyAmmReserve1?: true
    lastStatsUpdate?: true
    createdAt?: true
  }

  export type PairCountAggregateInputType = {
    id?: true
    network?: true
    token0Id?: true
    token1Id?: true
    spikeyAmmPairAddress?: true
    spikeyAmmReserve0?: true
    spikeyAmmReserve1?: true
    lastStatsUpdate?: true
    createdAt?: true
    _all?: true
  }

  export type PairAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pair to aggregate.
     */
    where?: PairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pairs to fetch.
     */
    orderBy?: PairOrderByWithRelationInput | PairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pairs
    **/
    _count?: true | PairCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PairAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PairSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PairMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PairMaxAggregateInputType
  }

  export type GetPairAggregateType<T extends PairAggregateArgs> = {
        [P in keyof T & keyof AggregatePair]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePair[P]>
      : GetScalarType<T[P], AggregatePair[P]>
  }




  export type PairGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PairWhereInput
    orderBy?: PairOrderByWithAggregationInput | PairOrderByWithAggregationInput[]
    by: PairScalarFieldEnum[] | PairScalarFieldEnum
    having?: PairScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PairCountAggregateInputType | true
    _avg?: PairAvgAggregateInputType
    _sum?: PairSumAggregateInputType
    _min?: PairMinAggregateInputType
    _max?: PairMaxAggregateInputType
  }

  export type PairGroupByOutputType = {
    id: number
    network: string
    token0Id: number
    token1Id: number
    spikeyAmmPairAddress: string | null
    spikeyAmmReserve0: bigint | null
    spikeyAmmReserve1: bigint | null
    lastStatsUpdate: Date | null
    createdAt: Date
    _count: PairCountAggregateOutputType | null
    _avg: PairAvgAggregateOutputType | null
    _sum: PairSumAggregateOutputType | null
    _min: PairMinAggregateOutputType | null
    _max: PairMaxAggregateOutputType | null
  }

  type GetPairGroupByPayload<T extends PairGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PairGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PairGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PairGroupByOutputType[P]>
            : GetScalarType<T[P], PairGroupByOutputType[P]>
        }
      >
    >


  export type PairSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    network?: boolean
    token0Id?: boolean
    token1Id?: boolean
    spikeyAmmPairAddress?: boolean
    spikeyAmmReserve0?: boolean
    spikeyAmmReserve1?: boolean
    lastStatsUpdate?: boolean
    createdAt?: boolean
    token0?: boolean | TokenDefaultArgs<ExtArgs>
    token1?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pair"]>

  export type PairSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    network?: boolean
    token0Id?: boolean
    token1Id?: boolean
    spikeyAmmPairAddress?: boolean
    spikeyAmmReserve0?: boolean
    spikeyAmmReserve1?: boolean
    lastStatsUpdate?: boolean
    createdAt?: boolean
    token0?: boolean | TokenDefaultArgs<ExtArgs>
    token1?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pair"]>

  export type PairSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    network?: boolean
    token0Id?: boolean
    token1Id?: boolean
    spikeyAmmPairAddress?: boolean
    spikeyAmmReserve0?: boolean
    spikeyAmmReserve1?: boolean
    lastStatsUpdate?: boolean
    createdAt?: boolean
    token0?: boolean | TokenDefaultArgs<ExtArgs>
    token1?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pair"]>

  export type PairSelectScalar = {
    id?: boolean
    network?: boolean
    token0Id?: boolean
    token1Id?: boolean
    spikeyAmmPairAddress?: boolean
    spikeyAmmReserve0?: boolean
    spikeyAmmReserve1?: boolean
    lastStatsUpdate?: boolean
    createdAt?: boolean
  }

  export type PairOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "network" | "token0Id" | "token1Id" | "spikeyAmmPairAddress" | "spikeyAmmReserve0" | "spikeyAmmReserve1" | "lastStatsUpdate" | "createdAt", ExtArgs["result"]["pair"]>
  export type PairInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token0?: boolean | TokenDefaultArgs<ExtArgs>
    token1?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type PairIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token0?: boolean | TokenDefaultArgs<ExtArgs>
    token1?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type PairIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token0?: boolean | TokenDefaultArgs<ExtArgs>
    token1?: boolean | TokenDefaultArgs<ExtArgs>
  }

  export type $PairPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pair"
    objects: {
      token0: Prisma.$TokenPayload<ExtArgs>
      token1: Prisma.$TokenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      network: string
      token0Id: number
      token1Id: number
      spikeyAmmPairAddress: string | null
      spikeyAmmReserve0: bigint | null
      spikeyAmmReserve1: bigint | null
      lastStatsUpdate: Date | null
      createdAt: Date
    }, ExtArgs["result"]["pair"]>
    composites: {}
  }

  type PairGetPayload<S extends boolean | null | undefined | PairDefaultArgs> = $Result.GetResult<Prisma.$PairPayload, S>

  type PairCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PairFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PairCountAggregateInputType | true
    }

  export interface PairDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pair'], meta: { name: 'Pair' } }
    /**
     * Find zero or one Pair that matches the filter.
     * @param {PairFindUniqueArgs} args - Arguments to find a Pair
     * @example
     * // Get one Pair
     * const pair = await prisma.pair.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PairFindUniqueArgs>(args: SelectSubset<T, PairFindUniqueArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pair that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PairFindUniqueOrThrowArgs} args - Arguments to find a Pair
     * @example
     * // Get one Pair
     * const pair = await prisma.pair.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PairFindUniqueOrThrowArgs>(args: SelectSubset<T, PairFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pair that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairFindFirstArgs} args - Arguments to find a Pair
     * @example
     * // Get one Pair
     * const pair = await prisma.pair.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PairFindFirstArgs>(args?: SelectSubset<T, PairFindFirstArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pair that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairFindFirstOrThrowArgs} args - Arguments to find a Pair
     * @example
     * // Get one Pair
     * const pair = await prisma.pair.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PairFindFirstOrThrowArgs>(args?: SelectSubset<T, PairFindFirstOrThrowArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pairs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pairs
     * const pairs = await prisma.pair.findMany()
     * 
     * // Get first 10 Pairs
     * const pairs = await prisma.pair.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pairWithIdOnly = await prisma.pair.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PairFindManyArgs>(args?: SelectSubset<T, PairFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pair.
     * @param {PairCreateArgs} args - Arguments to create a Pair.
     * @example
     * // Create one Pair
     * const Pair = await prisma.pair.create({
     *   data: {
     *     // ... data to create a Pair
     *   }
     * })
     * 
     */
    create<T extends PairCreateArgs>(args: SelectSubset<T, PairCreateArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pairs.
     * @param {PairCreateManyArgs} args - Arguments to create many Pairs.
     * @example
     * // Create many Pairs
     * const pair = await prisma.pair.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PairCreateManyArgs>(args?: SelectSubset<T, PairCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pairs and returns the data saved in the database.
     * @param {PairCreateManyAndReturnArgs} args - Arguments to create many Pairs.
     * @example
     * // Create many Pairs
     * const pair = await prisma.pair.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pairs and only return the `id`
     * const pairWithIdOnly = await prisma.pair.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PairCreateManyAndReturnArgs>(args?: SelectSubset<T, PairCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pair.
     * @param {PairDeleteArgs} args - Arguments to delete one Pair.
     * @example
     * // Delete one Pair
     * const Pair = await prisma.pair.delete({
     *   where: {
     *     // ... filter to delete one Pair
     *   }
     * })
     * 
     */
    delete<T extends PairDeleteArgs>(args: SelectSubset<T, PairDeleteArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pair.
     * @param {PairUpdateArgs} args - Arguments to update one Pair.
     * @example
     * // Update one Pair
     * const pair = await prisma.pair.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PairUpdateArgs>(args: SelectSubset<T, PairUpdateArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pairs.
     * @param {PairDeleteManyArgs} args - Arguments to filter Pairs to delete.
     * @example
     * // Delete a few Pairs
     * const { count } = await prisma.pair.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PairDeleteManyArgs>(args?: SelectSubset<T, PairDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pairs
     * const pair = await prisma.pair.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PairUpdateManyArgs>(args: SelectSubset<T, PairUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pairs and returns the data updated in the database.
     * @param {PairUpdateManyAndReturnArgs} args - Arguments to update many Pairs.
     * @example
     * // Update many Pairs
     * const pair = await prisma.pair.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pairs and only return the `id`
     * const pairWithIdOnly = await prisma.pair.updateManyAndReturn({
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
    updateManyAndReturn<T extends PairUpdateManyAndReturnArgs>(args: SelectSubset<T, PairUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pair.
     * @param {PairUpsertArgs} args - Arguments to update or create a Pair.
     * @example
     * // Update or create a Pair
     * const pair = await prisma.pair.upsert({
     *   create: {
     *     // ... data to create a Pair
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pair we want to update
     *   }
     * })
     */
    upsert<T extends PairUpsertArgs>(args: SelectSubset<T, PairUpsertArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairCountArgs} args - Arguments to filter Pairs to count.
     * @example
     * // Count the number of Pairs
     * const count = await prisma.pair.count({
     *   where: {
     *     // ... the filter for the Pairs we want to count
     *   }
     * })
    **/
    count<T extends PairCountArgs>(
      args?: Subset<T, PairCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PairCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PairAggregateArgs>(args: Subset<T, PairAggregateArgs>): Prisma.PrismaPromise<GetPairAggregateType<T>>

    /**
     * Group by Pair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairGroupByArgs} args - Group by arguments.
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
      T extends PairGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PairGroupByArgs['orderBy'] }
        : { orderBy?: PairGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PairGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPairGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pair model
   */
  readonly fields: PairFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pair.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PairClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    token0<T extends TokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenDefaultArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    token1<T extends TokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenDefaultArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pair model
   */
  interface PairFieldRefs {
    readonly id: FieldRef<"Pair", 'Int'>
    readonly network: FieldRef<"Pair", 'String'>
    readonly token0Id: FieldRef<"Pair", 'Int'>
    readonly token1Id: FieldRef<"Pair", 'Int'>
    readonly spikeyAmmPairAddress: FieldRef<"Pair", 'String'>
    readonly spikeyAmmReserve0: FieldRef<"Pair", 'BigInt'>
    readonly spikeyAmmReserve1: FieldRef<"Pair", 'BigInt'>
    readonly lastStatsUpdate: FieldRef<"Pair", 'DateTime'>
    readonly createdAt: FieldRef<"Pair", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pair findUnique
   */
  export type PairFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * Filter, which Pair to fetch.
     */
    where: PairWhereUniqueInput
  }

  /**
   * Pair findUniqueOrThrow
   */
  export type PairFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * Filter, which Pair to fetch.
     */
    where: PairWhereUniqueInput
  }

  /**
   * Pair findFirst
   */
  export type PairFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * Filter, which Pair to fetch.
     */
    where?: PairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pairs to fetch.
     */
    orderBy?: PairOrderByWithRelationInput | PairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pairs.
     */
    cursor?: PairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pairs.
     */
    distinct?: PairScalarFieldEnum | PairScalarFieldEnum[]
  }

  /**
   * Pair findFirstOrThrow
   */
  export type PairFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * Filter, which Pair to fetch.
     */
    where?: PairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pairs to fetch.
     */
    orderBy?: PairOrderByWithRelationInput | PairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pairs.
     */
    cursor?: PairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pairs.
     */
    distinct?: PairScalarFieldEnum | PairScalarFieldEnum[]
  }

  /**
   * Pair findMany
   */
  export type PairFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * Filter, which Pairs to fetch.
     */
    where?: PairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pairs to fetch.
     */
    orderBy?: PairOrderByWithRelationInput | PairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pairs.
     */
    cursor?: PairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pairs.
     */
    skip?: number
    distinct?: PairScalarFieldEnum | PairScalarFieldEnum[]
  }

  /**
   * Pair create
   */
  export type PairCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * The data needed to create a Pair.
     */
    data: XOR<PairCreateInput, PairUncheckedCreateInput>
  }

  /**
   * Pair createMany
   */
  export type PairCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pairs.
     */
    data: PairCreateManyInput | PairCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pair createManyAndReturn
   */
  export type PairCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * The data used to create many Pairs.
     */
    data: PairCreateManyInput | PairCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pair update
   */
  export type PairUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * The data needed to update a Pair.
     */
    data: XOR<PairUpdateInput, PairUncheckedUpdateInput>
    /**
     * Choose, which Pair to update.
     */
    where: PairWhereUniqueInput
  }

  /**
   * Pair updateMany
   */
  export type PairUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pairs.
     */
    data: XOR<PairUpdateManyMutationInput, PairUncheckedUpdateManyInput>
    /**
     * Filter which Pairs to update
     */
    where?: PairWhereInput
    /**
     * Limit how many Pairs to update.
     */
    limit?: number
  }

  /**
   * Pair updateManyAndReturn
   */
  export type PairUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * The data used to update Pairs.
     */
    data: XOR<PairUpdateManyMutationInput, PairUncheckedUpdateManyInput>
    /**
     * Filter which Pairs to update
     */
    where?: PairWhereInput
    /**
     * Limit how many Pairs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pair upsert
   */
  export type PairUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * The filter to search for the Pair to update in case it exists.
     */
    where: PairWhereUniqueInput
    /**
     * In case the Pair found by the `where` argument doesn't exist, create a new Pair with this data.
     */
    create: XOR<PairCreateInput, PairUncheckedCreateInput>
    /**
     * In case the Pair was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PairUpdateInput, PairUncheckedUpdateInput>
  }

  /**
   * Pair delete
   */
  export type PairDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * Filter which Pair to delete.
     */
    where: PairWhereUniqueInput
  }

  /**
   * Pair deleteMany
   */
  export type PairDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pairs to delete
     */
    where?: PairWhereInput
    /**
     * Limit how many Pairs to delete.
     */
    limit?: number
  }

  /**
   * Pair without action
   */
  export type PairDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
  }


  /**
   * Model OhlcData
   */

  export type AggregateOhlcData = {
    _count: OhlcDataCountAggregateOutputType | null
    _avg: OhlcDataAvgAggregateOutputType | null
    _sum: OhlcDataSumAggregateOutputType | null
    _min: OhlcDataMinAggregateOutputType | null
    _max: OhlcDataMaxAggregateOutputType | null
  }

  export type OhlcDataAvgAggregateOutputType = {
    id: number | null
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    volume: Decimal | null
    tradeCount: number | null
  }

  export type OhlcDataSumAggregateOutputType = {
    id: number | null
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    volume: Decimal | null
    tradeCount: number | null
  }

  export type OhlcDataMinAggregateOutputType = {
    id: number | null
    network: string | null
    ammSource: string | null
    timeframe: string | null
    timestamp: Date | null
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    volume: Decimal | null
    tradeCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    token0Address: string | null
    token1Address: string | null
  }

  export type OhlcDataMaxAggregateOutputType = {
    id: number | null
    network: string | null
    ammSource: string | null
    timeframe: string | null
    timestamp: Date | null
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    volume: Decimal | null
    tradeCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    token0Address: string | null
    token1Address: string | null
  }

  export type OhlcDataCountAggregateOutputType = {
    id: number
    network: number
    ammSource: number
    timeframe: number
    timestamp: number
    open: number
    high: number
    low: number
    close: number
    volume: number
    tradeCount: number
    createdAt: number
    updatedAt: number
    token0Address: number
    token1Address: number
    _all: number
  }


  export type OhlcDataAvgAggregateInputType = {
    id?: true
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
    tradeCount?: true
  }

  export type OhlcDataSumAggregateInputType = {
    id?: true
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
    tradeCount?: true
  }

  export type OhlcDataMinAggregateInputType = {
    id?: true
    network?: true
    ammSource?: true
    timeframe?: true
    timestamp?: true
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
    tradeCount?: true
    createdAt?: true
    updatedAt?: true
    token0Address?: true
    token1Address?: true
  }

  export type OhlcDataMaxAggregateInputType = {
    id?: true
    network?: true
    ammSource?: true
    timeframe?: true
    timestamp?: true
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
    tradeCount?: true
    createdAt?: true
    updatedAt?: true
    token0Address?: true
    token1Address?: true
  }

  export type OhlcDataCountAggregateInputType = {
    id?: true
    network?: true
    ammSource?: true
    timeframe?: true
    timestamp?: true
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
    tradeCount?: true
    createdAt?: true
    updatedAt?: true
    token0Address?: true
    token1Address?: true
    _all?: true
  }

  export type OhlcDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OhlcData to aggregate.
     */
    where?: OhlcDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OhlcData to fetch.
     */
    orderBy?: OhlcDataOrderByWithRelationInput | OhlcDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OhlcDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OhlcData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OhlcData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OhlcData
    **/
    _count?: true | OhlcDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OhlcDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OhlcDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OhlcDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OhlcDataMaxAggregateInputType
  }

  export type GetOhlcDataAggregateType<T extends OhlcDataAggregateArgs> = {
        [P in keyof T & keyof AggregateOhlcData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOhlcData[P]>
      : GetScalarType<T[P], AggregateOhlcData[P]>
  }




  export type OhlcDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OhlcDataWhereInput
    orderBy?: OhlcDataOrderByWithAggregationInput | OhlcDataOrderByWithAggregationInput[]
    by: OhlcDataScalarFieldEnum[] | OhlcDataScalarFieldEnum
    having?: OhlcDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OhlcDataCountAggregateInputType | true
    _avg?: OhlcDataAvgAggregateInputType
    _sum?: OhlcDataSumAggregateInputType
    _min?: OhlcDataMinAggregateInputType
    _max?: OhlcDataMaxAggregateInputType
  }

  export type OhlcDataGroupByOutputType = {
    id: number
    network: string
    ammSource: string
    timeframe: string
    timestamp: Date
    open: Decimal
    high: Decimal
    low: Decimal
    close: Decimal
    volume: Decimal
    tradeCount: number
    createdAt: Date
    updatedAt: Date
    token0Address: string
    token1Address: string
    _count: OhlcDataCountAggregateOutputType | null
    _avg: OhlcDataAvgAggregateOutputType | null
    _sum: OhlcDataSumAggregateOutputType | null
    _min: OhlcDataMinAggregateOutputType | null
    _max: OhlcDataMaxAggregateOutputType | null
  }

  type GetOhlcDataGroupByPayload<T extends OhlcDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OhlcDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OhlcDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OhlcDataGroupByOutputType[P]>
            : GetScalarType<T[P], OhlcDataGroupByOutputType[P]>
        }
      >
    >


  export type OhlcDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    network?: boolean
    ammSource?: boolean
    timeframe?: boolean
    timestamp?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    volume?: boolean
    tradeCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    token0Address?: boolean
    token1Address?: boolean
  }, ExtArgs["result"]["ohlcData"]>

  export type OhlcDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    network?: boolean
    ammSource?: boolean
    timeframe?: boolean
    timestamp?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    volume?: boolean
    tradeCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    token0Address?: boolean
    token1Address?: boolean
  }, ExtArgs["result"]["ohlcData"]>

  export type OhlcDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    network?: boolean
    ammSource?: boolean
    timeframe?: boolean
    timestamp?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    volume?: boolean
    tradeCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    token0Address?: boolean
    token1Address?: boolean
  }, ExtArgs["result"]["ohlcData"]>

  export type OhlcDataSelectScalar = {
    id?: boolean
    network?: boolean
    ammSource?: boolean
    timeframe?: boolean
    timestamp?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    volume?: boolean
    tradeCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    token0Address?: boolean
    token1Address?: boolean
  }

  export type OhlcDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "network" | "ammSource" | "timeframe" | "timestamp" | "open" | "high" | "low" | "close" | "volume" | "tradeCount" | "createdAt" | "updatedAt" | "token0Address" | "token1Address", ExtArgs["result"]["ohlcData"]>

  export type $OhlcDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OhlcData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      network: string
      ammSource: string
      timeframe: string
      timestamp: Date
      open: Prisma.Decimal
      high: Prisma.Decimal
      low: Prisma.Decimal
      close: Prisma.Decimal
      volume: Prisma.Decimal
      tradeCount: number
      createdAt: Date
      updatedAt: Date
      token0Address: string
      token1Address: string
    }, ExtArgs["result"]["ohlcData"]>
    composites: {}
  }

  type OhlcDataGetPayload<S extends boolean | null | undefined | OhlcDataDefaultArgs> = $Result.GetResult<Prisma.$OhlcDataPayload, S>

  type OhlcDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OhlcDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OhlcDataCountAggregateInputType | true
    }

  export interface OhlcDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OhlcData'], meta: { name: 'OhlcData' } }
    /**
     * Find zero or one OhlcData that matches the filter.
     * @param {OhlcDataFindUniqueArgs} args - Arguments to find a OhlcData
     * @example
     * // Get one OhlcData
     * const ohlcData = await prisma.ohlcData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OhlcDataFindUniqueArgs>(args: SelectSubset<T, OhlcDataFindUniqueArgs<ExtArgs>>): Prisma__OhlcDataClient<$Result.GetResult<Prisma.$OhlcDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OhlcData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OhlcDataFindUniqueOrThrowArgs} args - Arguments to find a OhlcData
     * @example
     * // Get one OhlcData
     * const ohlcData = await prisma.ohlcData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OhlcDataFindUniqueOrThrowArgs>(args: SelectSubset<T, OhlcDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OhlcDataClient<$Result.GetResult<Prisma.$OhlcDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OhlcData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OhlcDataFindFirstArgs} args - Arguments to find a OhlcData
     * @example
     * // Get one OhlcData
     * const ohlcData = await prisma.ohlcData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OhlcDataFindFirstArgs>(args?: SelectSubset<T, OhlcDataFindFirstArgs<ExtArgs>>): Prisma__OhlcDataClient<$Result.GetResult<Prisma.$OhlcDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OhlcData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OhlcDataFindFirstOrThrowArgs} args - Arguments to find a OhlcData
     * @example
     * // Get one OhlcData
     * const ohlcData = await prisma.ohlcData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OhlcDataFindFirstOrThrowArgs>(args?: SelectSubset<T, OhlcDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__OhlcDataClient<$Result.GetResult<Prisma.$OhlcDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OhlcData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OhlcDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OhlcData
     * const ohlcData = await prisma.ohlcData.findMany()
     * 
     * // Get first 10 OhlcData
     * const ohlcData = await prisma.ohlcData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ohlcDataWithIdOnly = await prisma.ohlcData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OhlcDataFindManyArgs>(args?: SelectSubset<T, OhlcDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OhlcDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OhlcData.
     * @param {OhlcDataCreateArgs} args - Arguments to create a OhlcData.
     * @example
     * // Create one OhlcData
     * const OhlcData = await prisma.ohlcData.create({
     *   data: {
     *     // ... data to create a OhlcData
     *   }
     * })
     * 
     */
    create<T extends OhlcDataCreateArgs>(args: SelectSubset<T, OhlcDataCreateArgs<ExtArgs>>): Prisma__OhlcDataClient<$Result.GetResult<Prisma.$OhlcDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OhlcData.
     * @param {OhlcDataCreateManyArgs} args - Arguments to create many OhlcData.
     * @example
     * // Create many OhlcData
     * const ohlcData = await prisma.ohlcData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OhlcDataCreateManyArgs>(args?: SelectSubset<T, OhlcDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OhlcData and returns the data saved in the database.
     * @param {OhlcDataCreateManyAndReturnArgs} args - Arguments to create many OhlcData.
     * @example
     * // Create many OhlcData
     * const ohlcData = await prisma.ohlcData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OhlcData and only return the `id`
     * const ohlcDataWithIdOnly = await prisma.ohlcData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OhlcDataCreateManyAndReturnArgs>(args?: SelectSubset<T, OhlcDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OhlcDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OhlcData.
     * @param {OhlcDataDeleteArgs} args - Arguments to delete one OhlcData.
     * @example
     * // Delete one OhlcData
     * const OhlcData = await prisma.ohlcData.delete({
     *   where: {
     *     // ... filter to delete one OhlcData
     *   }
     * })
     * 
     */
    delete<T extends OhlcDataDeleteArgs>(args: SelectSubset<T, OhlcDataDeleteArgs<ExtArgs>>): Prisma__OhlcDataClient<$Result.GetResult<Prisma.$OhlcDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OhlcData.
     * @param {OhlcDataUpdateArgs} args - Arguments to update one OhlcData.
     * @example
     * // Update one OhlcData
     * const ohlcData = await prisma.ohlcData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OhlcDataUpdateArgs>(args: SelectSubset<T, OhlcDataUpdateArgs<ExtArgs>>): Prisma__OhlcDataClient<$Result.GetResult<Prisma.$OhlcDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OhlcData.
     * @param {OhlcDataDeleteManyArgs} args - Arguments to filter OhlcData to delete.
     * @example
     * // Delete a few OhlcData
     * const { count } = await prisma.ohlcData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OhlcDataDeleteManyArgs>(args?: SelectSubset<T, OhlcDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OhlcData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OhlcDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OhlcData
     * const ohlcData = await prisma.ohlcData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OhlcDataUpdateManyArgs>(args: SelectSubset<T, OhlcDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OhlcData and returns the data updated in the database.
     * @param {OhlcDataUpdateManyAndReturnArgs} args - Arguments to update many OhlcData.
     * @example
     * // Update many OhlcData
     * const ohlcData = await prisma.ohlcData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OhlcData and only return the `id`
     * const ohlcDataWithIdOnly = await prisma.ohlcData.updateManyAndReturn({
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
    updateManyAndReturn<T extends OhlcDataUpdateManyAndReturnArgs>(args: SelectSubset<T, OhlcDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OhlcDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OhlcData.
     * @param {OhlcDataUpsertArgs} args - Arguments to update or create a OhlcData.
     * @example
     * // Update or create a OhlcData
     * const ohlcData = await prisma.ohlcData.upsert({
     *   create: {
     *     // ... data to create a OhlcData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OhlcData we want to update
     *   }
     * })
     */
    upsert<T extends OhlcDataUpsertArgs>(args: SelectSubset<T, OhlcDataUpsertArgs<ExtArgs>>): Prisma__OhlcDataClient<$Result.GetResult<Prisma.$OhlcDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OhlcData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OhlcDataCountArgs} args - Arguments to filter OhlcData to count.
     * @example
     * // Count the number of OhlcData
     * const count = await prisma.ohlcData.count({
     *   where: {
     *     // ... the filter for the OhlcData we want to count
     *   }
     * })
    **/
    count<T extends OhlcDataCountArgs>(
      args?: Subset<T, OhlcDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OhlcDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OhlcData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OhlcDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OhlcDataAggregateArgs>(args: Subset<T, OhlcDataAggregateArgs>): Prisma.PrismaPromise<GetOhlcDataAggregateType<T>>

    /**
     * Group by OhlcData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OhlcDataGroupByArgs} args - Group by arguments.
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
      T extends OhlcDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OhlcDataGroupByArgs['orderBy'] }
        : { orderBy?: OhlcDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OhlcDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOhlcDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OhlcData model
   */
  readonly fields: OhlcDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OhlcData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OhlcDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the OhlcData model
   */
  interface OhlcDataFieldRefs {
    readonly id: FieldRef<"OhlcData", 'Int'>
    readonly network: FieldRef<"OhlcData", 'String'>
    readonly ammSource: FieldRef<"OhlcData", 'String'>
    readonly timeframe: FieldRef<"OhlcData", 'String'>
    readonly timestamp: FieldRef<"OhlcData", 'DateTime'>
    readonly open: FieldRef<"OhlcData", 'Decimal'>
    readonly high: FieldRef<"OhlcData", 'Decimal'>
    readonly low: FieldRef<"OhlcData", 'Decimal'>
    readonly close: FieldRef<"OhlcData", 'Decimal'>
    readonly volume: FieldRef<"OhlcData", 'Decimal'>
    readonly tradeCount: FieldRef<"OhlcData", 'Int'>
    readonly createdAt: FieldRef<"OhlcData", 'DateTime'>
    readonly updatedAt: FieldRef<"OhlcData", 'DateTime'>
    readonly token0Address: FieldRef<"OhlcData", 'String'>
    readonly token1Address: FieldRef<"OhlcData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OhlcData findUnique
   */
  export type OhlcDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OhlcData
     */
    select?: OhlcDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OhlcData
     */
    omit?: OhlcDataOmit<ExtArgs> | null
    /**
     * Filter, which OhlcData to fetch.
     */
    where: OhlcDataWhereUniqueInput
  }

  /**
   * OhlcData findUniqueOrThrow
   */
  export type OhlcDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OhlcData
     */
    select?: OhlcDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OhlcData
     */
    omit?: OhlcDataOmit<ExtArgs> | null
    /**
     * Filter, which OhlcData to fetch.
     */
    where: OhlcDataWhereUniqueInput
  }

  /**
   * OhlcData findFirst
   */
  export type OhlcDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OhlcData
     */
    select?: OhlcDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OhlcData
     */
    omit?: OhlcDataOmit<ExtArgs> | null
    /**
     * Filter, which OhlcData to fetch.
     */
    where?: OhlcDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OhlcData to fetch.
     */
    orderBy?: OhlcDataOrderByWithRelationInput | OhlcDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OhlcData.
     */
    cursor?: OhlcDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OhlcData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OhlcData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OhlcData.
     */
    distinct?: OhlcDataScalarFieldEnum | OhlcDataScalarFieldEnum[]
  }

  /**
   * OhlcData findFirstOrThrow
   */
  export type OhlcDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OhlcData
     */
    select?: OhlcDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OhlcData
     */
    omit?: OhlcDataOmit<ExtArgs> | null
    /**
     * Filter, which OhlcData to fetch.
     */
    where?: OhlcDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OhlcData to fetch.
     */
    orderBy?: OhlcDataOrderByWithRelationInput | OhlcDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OhlcData.
     */
    cursor?: OhlcDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OhlcData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OhlcData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OhlcData.
     */
    distinct?: OhlcDataScalarFieldEnum | OhlcDataScalarFieldEnum[]
  }

  /**
   * OhlcData findMany
   */
  export type OhlcDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OhlcData
     */
    select?: OhlcDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OhlcData
     */
    omit?: OhlcDataOmit<ExtArgs> | null
    /**
     * Filter, which OhlcData to fetch.
     */
    where?: OhlcDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OhlcData to fetch.
     */
    orderBy?: OhlcDataOrderByWithRelationInput | OhlcDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OhlcData.
     */
    cursor?: OhlcDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OhlcData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OhlcData.
     */
    skip?: number
    distinct?: OhlcDataScalarFieldEnum | OhlcDataScalarFieldEnum[]
  }

  /**
   * OhlcData create
   */
  export type OhlcDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OhlcData
     */
    select?: OhlcDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OhlcData
     */
    omit?: OhlcDataOmit<ExtArgs> | null
    /**
     * The data needed to create a OhlcData.
     */
    data: XOR<OhlcDataCreateInput, OhlcDataUncheckedCreateInput>
  }

  /**
   * OhlcData createMany
   */
  export type OhlcDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OhlcData.
     */
    data: OhlcDataCreateManyInput | OhlcDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OhlcData createManyAndReturn
   */
  export type OhlcDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OhlcData
     */
    select?: OhlcDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OhlcData
     */
    omit?: OhlcDataOmit<ExtArgs> | null
    /**
     * The data used to create many OhlcData.
     */
    data: OhlcDataCreateManyInput | OhlcDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OhlcData update
   */
  export type OhlcDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OhlcData
     */
    select?: OhlcDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OhlcData
     */
    omit?: OhlcDataOmit<ExtArgs> | null
    /**
     * The data needed to update a OhlcData.
     */
    data: XOR<OhlcDataUpdateInput, OhlcDataUncheckedUpdateInput>
    /**
     * Choose, which OhlcData to update.
     */
    where: OhlcDataWhereUniqueInput
  }

  /**
   * OhlcData updateMany
   */
  export type OhlcDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OhlcData.
     */
    data: XOR<OhlcDataUpdateManyMutationInput, OhlcDataUncheckedUpdateManyInput>
    /**
     * Filter which OhlcData to update
     */
    where?: OhlcDataWhereInput
    /**
     * Limit how many OhlcData to update.
     */
    limit?: number
  }

  /**
   * OhlcData updateManyAndReturn
   */
  export type OhlcDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OhlcData
     */
    select?: OhlcDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OhlcData
     */
    omit?: OhlcDataOmit<ExtArgs> | null
    /**
     * The data used to update OhlcData.
     */
    data: XOR<OhlcDataUpdateManyMutationInput, OhlcDataUncheckedUpdateManyInput>
    /**
     * Filter which OhlcData to update
     */
    where?: OhlcDataWhereInput
    /**
     * Limit how many OhlcData to update.
     */
    limit?: number
  }

  /**
   * OhlcData upsert
   */
  export type OhlcDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OhlcData
     */
    select?: OhlcDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OhlcData
     */
    omit?: OhlcDataOmit<ExtArgs> | null
    /**
     * The filter to search for the OhlcData to update in case it exists.
     */
    where: OhlcDataWhereUniqueInput
    /**
     * In case the OhlcData found by the `where` argument doesn't exist, create a new OhlcData with this data.
     */
    create: XOR<OhlcDataCreateInput, OhlcDataUncheckedCreateInput>
    /**
     * In case the OhlcData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OhlcDataUpdateInput, OhlcDataUncheckedUpdateInput>
  }

  /**
   * OhlcData delete
   */
  export type OhlcDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OhlcData
     */
    select?: OhlcDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OhlcData
     */
    omit?: OhlcDataOmit<ExtArgs> | null
    /**
     * Filter which OhlcData to delete.
     */
    where: OhlcDataWhereUniqueInput
  }

  /**
   * OhlcData deleteMany
   */
  export type OhlcDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OhlcData to delete
     */
    where?: OhlcDataWhereInput
    /**
     * Limit how many OhlcData to delete.
     */
    limit?: number
  }

  /**
   * OhlcData without action
   */
  export type OhlcDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OhlcData
     */
    select?: OhlcDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OhlcData
     */
    omit?: OhlcDataOmit<ExtArgs> | null
  }


  /**
   * Model UserPreference
   */

  export type AggregateUserPreference = {
    _count: UserPreferenceCountAggregateOutputType | null
    _avg: UserPreferenceAvgAggregateOutputType | null
    _sum: UserPreferenceSumAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  export type UserPreferenceAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserPreferenceSumAggregateOutputType = {
    id: number | null
    userId: bigint | null
  }

  export type UserPreferenceMinAggregateOutputType = {
    id: number | null
    userId: bigint | null
    defaultTokenAddress: string | null
    defaultTimeframe: string | null
  }

  export type UserPreferenceMaxAggregateOutputType = {
    id: number | null
    userId: bigint | null
    defaultTokenAddress: string | null
    defaultTimeframe: string | null
  }

  export type UserPreferenceCountAggregateOutputType = {
    id: number
    userId: number
    defaultTokenAddress: number
    defaultTimeframe: number
    _all: number
  }


  export type UserPreferenceAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserPreferenceSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserPreferenceMinAggregateInputType = {
    id?: true
    userId?: true
    defaultTokenAddress?: true
    defaultTimeframe?: true
  }

  export type UserPreferenceMaxAggregateInputType = {
    id?: true
    userId?: true
    defaultTokenAddress?: true
    defaultTimeframe?: true
  }

  export type UserPreferenceCountAggregateInputType = {
    id?: true
    userId?: true
    defaultTokenAddress?: true
    defaultTimeframe?: true
    _all?: true
  }

  export type UserPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreference to aggregate.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPreferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPreferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type GetUserPreferenceAggregateType<T extends UserPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreference[P]>
      : GetScalarType<T[P], AggregateUserPreference[P]>
  }




  export type UserPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferenceWhereInput
    orderBy?: UserPreferenceOrderByWithAggregationInput | UserPreferenceOrderByWithAggregationInput[]
    by: UserPreferenceScalarFieldEnum[] | UserPreferenceScalarFieldEnum
    having?: UserPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferenceCountAggregateInputType | true
    _avg?: UserPreferenceAvgAggregateInputType
    _sum?: UserPreferenceSumAggregateInputType
    _min?: UserPreferenceMinAggregateInputType
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type UserPreferenceGroupByOutputType = {
    id: number
    userId: bigint
    defaultTokenAddress: string | null
    defaultTimeframe: string | null
    _count: UserPreferenceCountAggregateOutputType | null
    _avg: UserPreferenceAvgAggregateOutputType | null
    _sum: UserPreferenceSumAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  type GetUserPreferenceGroupByPayload<T extends UserPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    defaultTokenAddress?: boolean
    defaultTimeframe?: boolean
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    defaultTokenAddress?: boolean
    defaultTimeframe?: boolean
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    defaultTokenAddress?: boolean
    defaultTimeframe?: boolean
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectScalar = {
    id?: boolean
    userId?: boolean
    defaultTokenAddress?: boolean
    defaultTimeframe?: boolean
  }

  export type UserPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "defaultTokenAddress" | "defaultTimeframe", ExtArgs["result"]["userPreference"]>

  export type $UserPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreference"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: bigint
      defaultTokenAddress: string | null
      defaultTimeframe: string | null
    }, ExtArgs["result"]["userPreference"]>
    composites: {}
  }

  type UserPreferenceGetPayload<S extends boolean | null | undefined | UserPreferenceDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencePayload, S>

  type UserPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPreferenceCountAggregateInputType | true
    }

  export interface UserPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreference'], meta: { name: 'UserPreference' } }
    /**
     * Find zero or one UserPreference that matches the filter.
     * @param {UserPreferenceFindUniqueArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferenceFindUniqueArgs>(args: SelectSubset<T, UserPreferenceFindUniqueArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferenceFindUniqueOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferenceFindFirstArgs>(args?: SelectSubset<T, UserPreferenceFindFirstArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreference.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPreferenceFindManyArgs>(args?: SelectSubset<T, UserPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPreference.
     * @param {UserPreferenceCreateArgs} args - Arguments to create a UserPreference.
     * @example
     * // Create one UserPreference
     * const UserPreference = await prisma.userPreference.create({
     *   data: {
     *     // ... data to create a UserPreference
     *   }
     * })
     * 
     */
    create<T extends UserPreferenceCreateArgs>(args: SelectSubset<T, UserPreferenceCreateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPreferences.
     * @param {UserPreferenceCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferenceCreateManyArgs>(args?: SelectSubset<T, UserPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferenceCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPreference.
     * @param {UserPreferenceDeleteArgs} args - Arguments to delete one UserPreference.
     * @example
     * // Delete one UserPreference
     * const UserPreference = await prisma.userPreference.delete({
     *   where: {
     *     // ... filter to delete one UserPreference
     *   }
     * })
     * 
     */
    delete<T extends UserPreferenceDeleteArgs>(args: SelectSubset<T, UserPreferenceDeleteArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPreference.
     * @param {UserPreferenceUpdateArgs} args - Arguments to update one UserPreference.
     * @example
     * // Update one UserPreference
     * const userPreference = await prisma.userPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferenceUpdateArgs>(args: SelectSubset<T, UserPreferenceUpdateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferenceDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferenceDeleteManyArgs>(args?: SelectSubset<T, UserPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferenceUpdateManyArgs>(args: SelectSubset<T, UserPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences and returns the data updated in the database.
     * @param {UserPreferenceUpdateManyAndReturnArgs} args - Arguments to update many UserPreferences.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserPreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPreference.
     * @param {UserPreferenceUpsertArgs} args - Arguments to update or create a UserPreference.
     * @example
     * // Update or create a UserPreference
     * const userPreference = await prisma.userPreference.upsert({
     *   create: {
     *     // ... data to create a UserPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreference we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferenceUpsertArgs>(args: SelectSubset<T, UserPreferenceUpsertArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreference.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferenceCountArgs>(
      args?: Subset<T, UserPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPreferenceAggregateArgs>(args: Subset<T, UserPreferenceAggregateArgs>): Prisma.PrismaPromise<GetUserPreferenceAggregateType<T>>

    /**
     * Group by UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceGroupByArgs} args - Group by arguments.
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
      T extends UserPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreference model
   */
  readonly fields: UserPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserPreference model
   */
  interface UserPreferenceFieldRefs {
    readonly id: FieldRef<"UserPreference", 'Int'>
    readonly userId: FieldRef<"UserPreference", 'BigInt'>
    readonly defaultTokenAddress: FieldRef<"UserPreference", 'String'>
    readonly defaultTimeframe: FieldRef<"UserPreference", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserPreference findUnique
   */
  export type UserPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference findUniqueOrThrow
   */
  export type UserPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference findFirst
   */
  export type UserPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference findFirstOrThrow
   */
  export type UserPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference findMany
   */
  export type UserPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference create
   */
  export type UserPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data needed to create a UserPreference.
     */
    data: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
  }

  /**
   * UserPreference createMany
   */
  export type UserPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreference createManyAndReturn
   */
  export type UserPreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreference update
   */
  export type UserPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data needed to update a UserPreference.
     */
    data: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
    /**
     * Choose, which UserPreference to update.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference updateMany
   */
  export type UserPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
  }

  /**
   * UserPreference updateManyAndReturn
   */
  export type UserPreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
  }

  /**
   * UserPreference upsert
   */
  export type UserPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The filter to search for the UserPreference to update in case it exists.
     */
    where: UserPreferenceWhereUniqueInput
    /**
     * In case the UserPreference found by the `where` argument doesn't exist, create a new UserPreference with this data.
     */
    create: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
    /**
     * In case the UserPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
  }

  /**
   * UserPreference delete
   */
  export type UserPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Filter which UserPreference to delete.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference deleteMany
   */
  export type UserPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to delete.
     */
    limit?: number
  }

  /**
   * UserPreference without action
   */
  export type UserPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
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


  export const BlockProgressScalarFieldEnum: {
    id: 'id',
    network: 'network',
    lastBlockHeight: 'lastBlockHeight',
    updatedAt: 'updatedAt'
  };

  export type BlockProgressScalarFieldEnum = (typeof BlockProgressScalarFieldEnum)[keyof typeof BlockProgressScalarFieldEnum]


  export const EventTrackingScalarFieldEnum: {
    id: 'id',
    eventType: 'eventType',
    blockHeight: 'blockHeight',
    transactionHash: 'transactionHash',
    processed: 'processed',
    error: 'error',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    network: 'network',
    sequenceNumber: 'sequenceNumber'
  };

  export type EventTrackingScalarFieldEnum = (typeof EventTrackingScalarFieldEnum)[keyof typeof EventTrackingScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    network: 'network',
    address: 'address',
    wrappedAddress: 'wrappedAddress',
    symbol: 'symbol',
    name: 'name',
    decimals: 'decimals',
    maxSupply: 'maxSupply',
    circulatingSupply: 'circulatingSupply',
    createdAt: 'createdAt'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const PairScalarFieldEnum: {
    id: 'id',
    network: 'network',
    token0Id: 'token0Id',
    token1Id: 'token1Id',
    spikeyAmmPairAddress: 'spikeyAmmPairAddress',
    spikeyAmmReserve0: 'spikeyAmmReserve0',
    spikeyAmmReserve1: 'spikeyAmmReserve1',
    lastStatsUpdate: 'lastStatsUpdate',
    createdAt: 'createdAt'
  };

  export type PairScalarFieldEnum = (typeof PairScalarFieldEnum)[keyof typeof PairScalarFieldEnum]


  export const OhlcDataScalarFieldEnum: {
    id: 'id',
    network: 'network',
    ammSource: 'ammSource',
    timeframe: 'timeframe',
    timestamp: 'timestamp',
    open: 'open',
    high: 'high',
    low: 'low',
    close: 'close',
    volume: 'volume',
    tradeCount: 'tradeCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    token0Address: 'token0Address',
    token1Address: 'token1Address'
  };

  export type OhlcDataScalarFieldEnum = (typeof OhlcDataScalarFieldEnum)[keyof typeof OhlcDataScalarFieldEnum]


  export const UserPreferenceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    defaultTokenAddress: 'defaultTokenAddress',
    defaultTimeframe: 'defaultTimeframe'
  };

  export type UserPreferenceScalarFieldEnum = (typeof UserPreferenceScalarFieldEnum)[keyof typeof UserPreferenceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BlockProgressWhereInput = {
    AND?: BlockProgressWhereInput | BlockProgressWhereInput[]
    OR?: BlockProgressWhereInput[]
    NOT?: BlockProgressWhereInput | BlockProgressWhereInput[]
    id?: IntFilter<"BlockProgress"> | number
    network?: StringFilter<"BlockProgress"> | string
    lastBlockHeight?: BigIntFilter<"BlockProgress"> | bigint | number
    updatedAt?: DateTimeFilter<"BlockProgress"> | Date | string
  }

  export type BlockProgressOrderByWithRelationInput = {
    id?: SortOrder
    network?: SortOrder
    lastBlockHeight?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlockProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    network?: string
    AND?: BlockProgressWhereInput | BlockProgressWhereInput[]
    OR?: BlockProgressWhereInput[]
    NOT?: BlockProgressWhereInput | BlockProgressWhereInput[]
    lastBlockHeight?: BigIntFilter<"BlockProgress"> | bigint | number
    updatedAt?: DateTimeFilter<"BlockProgress"> | Date | string
  }, "id" | "network">

  export type BlockProgressOrderByWithAggregationInput = {
    id?: SortOrder
    network?: SortOrder
    lastBlockHeight?: SortOrder
    updatedAt?: SortOrder
    _count?: BlockProgressCountOrderByAggregateInput
    _avg?: BlockProgressAvgOrderByAggregateInput
    _max?: BlockProgressMaxOrderByAggregateInput
    _min?: BlockProgressMinOrderByAggregateInput
    _sum?: BlockProgressSumOrderByAggregateInput
  }

  export type BlockProgressScalarWhereWithAggregatesInput = {
    AND?: BlockProgressScalarWhereWithAggregatesInput | BlockProgressScalarWhereWithAggregatesInput[]
    OR?: BlockProgressScalarWhereWithAggregatesInput[]
    NOT?: BlockProgressScalarWhereWithAggregatesInput | BlockProgressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BlockProgress"> | number
    network?: StringWithAggregatesFilter<"BlockProgress"> | string
    lastBlockHeight?: BigIntWithAggregatesFilter<"BlockProgress"> | bigint | number
    updatedAt?: DateTimeWithAggregatesFilter<"BlockProgress"> | Date | string
  }

  export type EventTrackingWhereInput = {
    AND?: EventTrackingWhereInput | EventTrackingWhereInput[]
    OR?: EventTrackingWhereInput[]
    NOT?: EventTrackingWhereInput | EventTrackingWhereInput[]
    id?: IntFilter<"EventTracking"> | number
    eventType?: StringFilter<"EventTracking"> | string
    blockHeight?: BigIntFilter<"EventTracking"> | bigint | number
    transactionHash?: StringFilter<"EventTracking"> | string
    processed?: BoolFilter<"EventTracking"> | boolean
    error?: StringNullableFilter<"EventTracking"> | string | null
    createdAt?: DateTimeFilter<"EventTracking"> | Date | string
    updatedAt?: DateTimeFilter<"EventTracking"> | Date | string
    network?: StringFilter<"EventTracking"> | string
    sequenceNumber?: StringNullableFilter<"EventTracking"> | string | null
  }

  export type EventTrackingOrderByWithRelationInput = {
    id?: SortOrder
    eventType?: SortOrder
    blockHeight?: SortOrder
    transactionHash?: SortOrder
    processed?: SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    network?: SortOrder
    sequenceNumber?: SortOrderInput | SortOrder
  }

  export type EventTrackingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    network_transactionHash_sequenceNumber_eventType?: EventTrackingNetworkTransactionHashSequenceNumberEventTypeCompoundUniqueInput
    AND?: EventTrackingWhereInput | EventTrackingWhereInput[]
    OR?: EventTrackingWhereInput[]
    NOT?: EventTrackingWhereInput | EventTrackingWhereInput[]
    eventType?: StringFilter<"EventTracking"> | string
    blockHeight?: BigIntFilter<"EventTracking"> | bigint | number
    transactionHash?: StringFilter<"EventTracking"> | string
    processed?: BoolFilter<"EventTracking"> | boolean
    error?: StringNullableFilter<"EventTracking"> | string | null
    createdAt?: DateTimeFilter<"EventTracking"> | Date | string
    updatedAt?: DateTimeFilter<"EventTracking"> | Date | string
    network?: StringFilter<"EventTracking"> | string
    sequenceNumber?: StringNullableFilter<"EventTracking"> | string | null
  }, "id" | "network_transactionHash_sequenceNumber_eventType">

  export type EventTrackingOrderByWithAggregationInput = {
    id?: SortOrder
    eventType?: SortOrder
    blockHeight?: SortOrder
    transactionHash?: SortOrder
    processed?: SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    network?: SortOrder
    sequenceNumber?: SortOrderInput | SortOrder
    _count?: EventTrackingCountOrderByAggregateInput
    _avg?: EventTrackingAvgOrderByAggregateInput
    _max?: EventTrackingMaxOrderByAggregateInput
    _min?: EventTrackingMinOrderByAggregateInput
    _sum?: EventTrackingSumOrderByAggregateInput
  }

  export type EventTrackingScalarWhereWithAggregatesInput = {
    AND?: EventTrackingScalarWhereWithAggregatesInput | EventTrackingScalarWhereWithAggregatesInput[]
    OR?: EventTrackingScalarWhereWithAggregatesInput[]
    NOT?: EventTrackingScalarWhereWithAggregatesInput | EventTrackingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EventTracking"> | number
    eventType?: StringWithAggregatesFilter<"EventTracking"> | string
    blockHeight?: BigIntWithAggregatesFilter<"EventTracking"> | bigint | number
    transactionHash?: StringWithAggregatesFilter<"EventTracking"> | string
    processed?: BoolWithAggregatesFilter<"EventTracking"> | boolean
    error?: StringNullableWithAggregatesFilter<"EventTracking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EventTracking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventTracking"> | Date | string
    network?: StringWithAggregatesFilter<"EventTracking"> | string
    sequenceNumber?: StringNullableWithAggregatesFilter<"EventTracking"> | string | null
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: IntFilter<"Token"> | number
    network?: StringFilter<"Token"> | string
    address?: StringFilter<"Token"> | string
    wrappedAddress?: StringNullableFilter<"Token"> | string | null
    symbol?: StringFilter<"Token"> | string
    name?: StringFilter<"Token"> | string
    decimals?: IntFilter<"Token"> | number
    maxSupply?: BigIntNullableFilter<"Token"> | bigint | number | null
    circulatingSupply?: BigIntNullableFilter<"Token"> | bigint | number | null
    createdAt?: DateTimeFilter<"Token"> | Date | string
    pairsAsToken0?: PairListRelationFilter
    pairsAsToken1?: PairListRelationFilter
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    network?: SortOrder
    address?: SortOrder
    wrappedAddress?: SortOrderInput | SortOrder
    symbol?: SortOrder
    name?: SortOrder
    decimals?: SortOrder
    maxSupply?: SortOrderInput | SortOrder
    circulatingSupply?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    pairsAsToken0?: PairOrderByRelationAggregateInput
    pairsAsToken1?: PairOrderByRelationAggregateInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    wrappedAddress?: string
    network_address?: TokenNetworkAddressCompoundUniqueInput
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    network?: StringFilter<"Token"> | string
    address?: StringFilter<"Token"> | string
    symbol?: StringFilter<"Token"> | string
    name?: StringFilter<"Token"> | string
    decimals?: IntFilter<"Token"> | number
    maxSupply?: BigIntNullableFilter<"Token"> | bigint | number | null
    circulatingSupply?: BigIntNullableFilter<"Token"> | bigint | number | null
    createdAt?: DateTimeFilter<"Token"> | Date | string
    pairsAsToken0?: PairListRelationFilter
    pairsAsToken1?: PairListRelationFilter
  }, "id" | "wrappedAddress" | "network_address">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    network?: SortOrder
    address?: SortOrder
    wrappedAddress?: SortOrderInput | SortOrder
    symbol?: SortOrder
    name?: SortOrder
    decimals?: SortOrder
    maxSupply?: SortOrderInput | SortOrder
    circulatingSupply?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Token"> | number
    network?: StringWithAggregatesFilter<"Token"> | string
    address?: StringWithAggregatesFilter<"Token"> | string
    wrappedAddress?: StringNullableWithAggregatesFilter<"Token"> | string | null
    symbol?: StringWithAggregatesFilter<"Token"> | string
    name?: StringWithAggregatesFilter<"Token"> | string
    decimals?: IntWithAggregatesFilter<"Token"> | number
    maxSupply?: BigIntNullableWithAggregatesFilter<"Token"> | bigint | number | null
    circulatingSupply?: BigIntNullableWithAggregatesFilter<"Token"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
  }

  export type PairWhereInput = {
    AND?: PairWhereInput | PairWhereInput[]
    OR?: PairWhereInput[]
    NOT?: PairWhereInput | PairWhereInput[]
    id?: IntFilter<"Pair"> | number
    network?: StringFilter<"Pair"> | string
    token0Id?: IntFilter<"Pair"> | number
    token1Id?: IntFilter<"Pair"> | number
    spikeyAmmPairAddress?: StringNullableFilter<"Pair"> | string | null
    spikeyAmmReserve0?: BigIntNullableFilter<"Pair"> | bigint | number | null
    spikeyAmmReserve1?: BigIntNullableFilter<"Pair"> | bigint | number | null
    lastStatsUpdate?: DateTimeNullableFilter<"Pair"> | Date | string | null
    createdAt?: DateTimeFilter<"Pair"> | Date | string
    token0?: XOR<TokenScalarRelationFilter, TokenWhereInput>
    token1?: XOR<TokenScalarRelationFilter, TokenWhereInput>
  }

  export type PairOrderByWithRelationInput = {
    id?: SortOrder
    network?: SortOrder
    token0Id?: SortOrder
    token1Id?: SortOrder
    spikeyAmmPairAddress?: SortOrderInput | SortOrder
    spikeyAmmReserve0?: SortOrderInput | SortOrder
    spikeyAmmReserve1?: SortOrderInput | SortOrder
    lastStatsUpdate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    token0?: TokenOrderByWithRelationInput
    token1?: TokenOrderByWithRelationInput
  }

  export type PairWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    network_token0Id_token1Id?: PairNetworkToken0IdToken1IdCompoundUniqueInput
    network_spikeyAmmPairAddress?: PairNetworkSpikeyAmmPairAddressCompoundUniqueInput
    AND?: PairWhereInput | PairWhereInput[]
    OR?: PairWhereInput[]
    NOT?: PairWhereInput | PairWhereInput[]
    network?: StringFilter<"Pair"> | string
    token0Id?: IntFilter<"Pair"> | number
    token1Id?: IntFilter<"Pair"> | number
    spikeyAmmPairAddress?: StringNullableFilter<"Pair"> | string | null
    spikeyAmmReserve0?: BigIntNullableFilter<"Pair"> | bigint | number | null
    spikeyAmmReserve1?: BigIntNullableFilter<"Pair"> | bigint | number | null
    lastStatsUpdate?: DateTimeNullableFilter<"Pair"> | Date | string | null
    createdAt?: DateTimeFilter<"Pair"> | Date | string
    token0?: XOR<TokenScalarRelationFilter, TokenWhereInput>
    token1?: XOR<TokenScalarRelationFilter, TokenWhereInput>
  }, "id" | "network_token0Id_token1Id" | "network_spikeyAmmPairAddress">

  export type PairOrderByWithAggregationInput = {
    id?: SortOrder
    network?: SortOrder
    token0Id?: SortOrder
    token1Id?: SortOrder
    spikeyAmmPairAddress?: SortOrderInput | SortOrder
    spikeyAmmReserve0?: SortOrderInput | SortOrder
    spikeyAmmReserve1?: SortOrderInput | SortOrder
    lastStatsUpdate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PairCountOrderByAggregateInput
    _avg?: PairAvgOrderByAggregateInput
    _max?: PairMaxOrderByAggregateInput
    _min?: PairMinOrderByAggregateInput
    _sum?: PairSumOrderByAggregateInput
  }

  export type PairScalarWhereWithAggregatesInput = {
    AND?: PairScalarWhereWithAggregatesInput | PairScalarWhereWithAggregatesInput[]
    OR?: PairScalarWhereWithAggregatesInput[]
    NOT?: PairScalarWhereWithAggregatesInput | PairScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pair"> | number
    network?: StringWithAggregatesFilter<"Pair"> | string
    token0Id?: IntWithAggregatesFilter<"Pair"> | number
    token1Id?: IntWithAggregatesFilter<"Pair"> | number
    spikeyAmmPairAddress?: StringNullableWithAggregatesFilter<"Pair"> | string | null
    spikeyAmmReserve0?: BigIntNullableWithAggregatesFilter<"Pair"> | bigint | number | null
    spikeyAmmReserve1?: BigIntNullableWithAggregatesFilter<"Pair"> | bigint | number | null
    lastStatsUpdate?: DateTimeNullableWithAggregatesFilter<"Pair"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Pair"> | Date | string
  }

  export type OhlcDataWhereInput = {
    AND?: OhlcDataWhereInput | OhlcDataWhereInput[]
    OR?: OhlcDataWhereInput[]
    NOT?: OhlcDataWhereInput | OhlcDataWhereInput[]
    id?: IntFilter<"OhlcData"> | number
    network?: StringFilter<"OhlcData"> | string
    ammSource?: StringFilter<"OhlcData"> | string
    timeframe?: StringFilter<"OhlcData"> | string
    timestamp?: DateTimeFilter<"OhlcData"> | Date | string
    open?: DecimalFilter<"OhlcData"> | Decimal | DecimalJsLike | number | string
    high?: DecimalFilter<"OhlcData"> | Decimal | DecimalJsLike | number | string
    low?: DecimalFilter<"OhlcData"> | Decimal | DecimalJsLike | number | string
    close?: DecimalFilter<"OhlcData"> | Decimal | DecimalJsLike | number | string
    volume?: DecimalFilter<"OhlcData"> | Decimal | DecimalJsLike | number | string
    tradeCount?: IntFilter<"OhlcData"> | number
    createdAt?: DateTimeFilter<"OhlcData"> | Date | string
    updatedAt?: DateTimeFilter<"OhlcData"> | Date | string
    token0Address?: StringFilter<"OhlcData"> | string
    token1Address?: StringFilter<"OhlcData"> | string
  }

  export type OhlcDataOrderByWithRelationInput = {
    id?: SortOrder
    network?: SortOrder
    ammSource?: SortOrder
    timeframe?: SortOrder
    timestamp?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
    tradeCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token0Address?: SortOrder
    token1Address?: SortOrder
  }

  export type OhlcDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    network_ammSource_token0Address_token1Address_timeframe_timestamp?: OhlcDataNetworkAmmSourceToken0AddressToken1AddressTimeframeTimestampCompoundUniqueInput
    AND?: OhlcDataWhereInput | OhlcDataWhereInput[]
    OR?: OhlcDataWhereInput[]
    NOT?: OhlcDataWhereInput | OhlcDataWhereInput[]
    network?: StringFilter<"OhlcData"> | string
    ammSource?: StringFilter<"OhlcData"> | string
    timeframe?: StringFilter<"OhlcData"> | string
    timestamp?: DateTimeFilter<"OhlcData"> | Date | string
    open?: DecimalFilter<"OhlcData"> | Decimal | DecimalJsLike | number | string
    high?: DecimalFilter<"OhlcData"> | Decimal | DecimalJsLike | number | string
    low?: DecimalFilter<"OhlcData"> | Decimal | DecimalJsLike | number | string
    close?: DecimalFilter<"OhlcData"> | Decimal | DecimalJsLike | number | string
    volume?: DecimalFilter<"OhlcData"> | Decimal | DecimalJsLike | number | string
    tradeCount?: IntFilter<"OhlcData"> | number
    createdAt?: DateTimeFilter<"OhlcData"> | Date | string
    updatedAt?: DateTimeFilter<"OhlcData"> | Date | string
    token0Address?: StringFilter<"OhlcData"> | string
    token1Address?: StringFilter<"OhlcData"> | string
  }, "id" | "network_ammSource_token0Address_token1Address_timeframe_timestamp">

  export type OhlcDataOrderByWithAggregationInput = {
    id?: SortOrder
    network?: SortOrder
    ammSource?: SortOrder
    timeframe?: SortOrder
    timestamp?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
    tradeCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token0Address?: SortOrder
    token1Address?: SortOrder
    _count?: OhlcDataCountOrderByAggregateInput
    _avg?: OhlcDataAvgOrderByAggregateInput
    _max?: OhlcDataMaxOrderByAggregateInput
    _min?: OhlcDataMinOrderByAggregateInput
    _sum?: OhlcDataSumOrderByAggregateInput
  }

  export type OhlcDataScalarWhereWithAggregatesInput = {
    AND?: OhlcDataScalarWhereWithAggregatesInput | OhlcDataScalarWhereWithAggregatesInput[]
    OR?: OhlcDataScalarWhereWithAggregatesInput[]
    NOT?: OhlcDataScalarWhereWithAggregatesInput | OhlcDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OhlcData"> | number
    network?: StringWithAggregatesFilter<"OhlcData"> | string
    ammSource?: StringWithAggregatesFilter<"OhlcData"> | string
    timeframe?: StringWithAggregatesFilter<"OhlcData"> | string
    timestamp?: DateTimeWithAggregatesFilter<"OhlcData"> | Date | string
    open?: DecimalWithAggregatesFilter<"OhlcData"> | Decimal | DecimalJsLike | number | string
    high?: DecimalWithAggregatesFilter<"OhlcData"> | Decimal | DecimalJsLike | number | string
    low?: DecimalWithAggregatesFilter<"OhlcData"> | Decimal | DecimalJsLike | number | string
    close?: DecimalWithAggregatesFilter<"OhlcData"> | Decimal | DecimalJsLike | number | string
    volume?: DecimalWithAggregatesFilter<"OhlcData"> | Decimal | DecimalJsLike | number | string
    tradeCount?: IntWithAggregatesFilter<"OhlcData"> | number
    createdAt?: DateTimeWithAggregatesFilter<"OhlcData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OhlcData"> | Date | string
    token0Address?: StringWithAggregatesFilter<"OhlcData"> | string
    token1Address?: StringWithAggregatesFilter<"OhlcData"> | string
  }

  export type UserPreferenceWhereInput = {
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    OR?: UserPreferenceWhereInput[]
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    id?: IntFilter<"UserPreference"> | number
    userId?: BigIntFilter<"UserPreference"> | bigint | number
    defaultTokenAddress?: StringNullableFilter<"UserPreference"> | string | null
    defaultTimeframe?: StringNullableFilter<"UserPreference"> | string | null
  }

  export type UserPreferenceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    defaultTokenAddress?: SortOrderInput | SortOrder
    defaultTimeframe?: SortOrderInput | SortOrder
  }

  export type UserPreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: bigint | number
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    OR?: UserPreferenceWhereInput[]
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    defaultTokenAddress?: StringNullableFilter<"UserPreference"> | string | null
    defaultTimeframe?: StringNullableFilter<"UserPreference"> | string | null
  }, "id" | "userId">

  export type UserPreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    defaultTokenAddress?: SortOrderInput | SortOrder
    defaultTimeframe?: SortOrderInput | SortOrder
    _count?: UserPreferenceCountOrderByAggregateInput
    _avg?: UserPreferenceAvgOrderByAggregateInput
    _max?: UserPreferenceMaxOrderByAggregateInput
    _min?: UserPreferenceMinOrderByAggregateInput
    _sum?: UserPreferenceSumOrderByAggregateInput
  }

  export type UserPreferenceScalarWhereWithAggregatesInput = {
    AND?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
    OR?: UserPreferenceScalarWhereWithAggregatesInput[]
    NOT?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserPreference"> | number
    userId?: BigIntWithAggregatesFilter<"UserPreference"> | bigint | number
    defaultTokenAddress?: StringNullableWithAggregatesFilter<"UserPreference"> | string | null
    defaultTimeframe?: StringNullableWithAggregatesFilter<"UserPreference"> | string | null
  }

  export type BlockProgressCreateInput = {
    network: string
    lastBlockHeight: bigint | number
    updatedAt?: Date | string
  }

  export type BlockProgressUncheckedCreateInput = {
    id?: number
    network: string
    lastBlockHeight: bigint | number
    updatedAt?: Date | string
  }

  export type BlockProgressUpdateInput = {
    network?: StringFieldUpdateOperationsInput | string
    lastBlockHeight?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    lastBlockHeight?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockProgressCreateManyInput = {
    id?: number
    network: string
    lastBlockHeight: bigint | number
    updatedAt?: Date | string
  }

  export type BlockProgressUpdateManyMutationInput = {
    network?: StringFieldUpdateOperationsInput | string
    lastBlockHeight?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    lastBlockHeight?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTrackingCreateInput = {
    eventType: string
    blockHeight: bigint | number
    transactionHash: string
    processed?: boolean
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    network: string
    sequenceNumber?: string | null
  }

  export type EventTrackingUncheckedCreateInput = {
    id?: number
    eventType: string
    blockHeight: bigint | number
    transactionHash: string
    processed?: boolean
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    network: string
    sequenceNumber?: string | null
  }

  export type EventTrackingUpdateInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    blockHeight?: BigIntFieldUpdateOperationsInput | bigint | number
    transactionHash?: StringFieldUpdateOperationsInput | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: StringFieldUpdateOperationsInput | string
    sequenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventTrackingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    blockHeight?: BigIntFieldUpdateOperationsInput | bigint | number
    transactionHash?: StringFieldUpdateOperationsInput | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: StringFieldUpdateOperationsInput | string
    sequenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventTrackingCreateManyInput = {
    id?: number
    eventType: string
    blockHeight: bigint | number
    transactionHash: string
    processed?: boolean
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    network: string
    sequenceNumber?: string | null
  }

  export type EventTrackingUpdateManyMutationInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    blockHeight?: BigIntFieldUpdateOperationsInput | bigint | number
    transactionHash?: StringFieldUpdateOperationsInput | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: StringFieldUpdateOperationsInput | string
    sequenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventTrackingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    blockHeight?: BigIntFieldUpdateOperationsInput | bigint | number
    transactionHash?: StringFieldUpdateOperationsInput | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: StringFieldUpdateOperationsInput | string
    sequenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenCreateInput = {
    network: string
    address: string
    wrappedAddress?: string | null
    symbol: string
    name: string
    decimals: number
    maxSupply?: bigint | number | null
    circulatingSupply?: bigint | number | null
    createdAt?: Date | string
    pairsAsToken0?: PairCreateNestedManyWithoutToken0Input
    pairsAsToken1?: PairCreateNestedManyWithoutToken1Input
  }

  export type TokenUncheckedCreateInput = {
    id?: number
    network: string
    address: string
    wrappedAddress?: string | null
    symbol: string
    name: string
    decimals: number
    maxSupply?: bigint | number | null
    circulatingSupply?: bigint | number | null
    createdAt?: Date | string
    pairsAsToken0?: PairUncheckedCreateNestedManyWithoutToken0Input
    pairsAsToken1?: PairUncheckedCreateNestedManyWithoutToken1Input
  }

  export type TokenUpdateInput = {
    network?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    wrappedAddress?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    maxSupply?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    circulatingSupply?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pairsAsToken0?: PairUpdateManyWithoutToken0NestedInput
    pairsAsToken1?: PairUpdateManyWithoutToken1NestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    wrappedAddress?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    maxSupply?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    circulatingSupply?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pairsAsToken0?: PairUncheckedUpdateManyWithoutToken0NestedInput
    pairsAsToken1?: PairUncheckedUpdateManyWithoutToken1NestedInput
  }

  export type TokenCreateManyInput = {
    id?: number
    network: string
    address: string
    wrappedAddress?: string | null
    symbol: string
    name: string
    decimals: number
    maxSupply?: bigint | number | null
    circulatingSupply?: bigint | number | null
    createdAt?: Date | string
  }

  export type TokenUpdateManyMutationInput = {
    network?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    wrappedAddress?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    maxSupply?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    circulatingSupply?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    wrappedAddress?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    maxSupply?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    circulatingSupply?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairCreateInput = {
    network: string
    spikeyAmmPairAddress?: string | null
    spikeyAmmReserve0?: bigint | number | null
    spikeyAmmReserve1?: bigint | number | null
    lastStatsUpdate?: Date | string | null
    createdAt?: Date | string
    token0: TokenCreateNestedOneWithoutPairsAsToken0Input
    token1: TokenCreateNestedOneWithoutPairsAsToken1Input
  }

  export type PairUncheckedCreateInput = {
    id?: number
    network: string
    token0Id: number
    token1Id: number
    spikeyAmmPairAddress?: string | null
    spikeyAmmReserve0?: bigint | number | null
    spikeyAmmReserve1?: bigint | number | null
    lastStatsUpdate?: Date | string | null
    createdAt?: Date | string
  }

  export type PairUpdateInput = {
    network?: StringFieldUpdateOperationsInput | string
    spikeyAmmPairAddress?: NullableStringFieldUpdateOperationsInput | string | null
    spikeyAmmReserve0?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    spikeyAmmReserve1?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    lastStatsUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token0?: TokenUpdateOneRequiredWithoutPairsAsToken0NestedInput
    token1?: TokenUpdateOneRequiredWithoutPairsAsToken1NestedInput
  }

  export type PairUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    token0Id?: IntFieldUpdateOperationsInput | number
    token1Id?: IntFieldUpdateOperationsInput | number
    spikeyAmmPairAddress?: NullableStringFieldUpdateOperationsInput | string | null
    spikeyAmmReserve0?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    spikeyAmmReserve1?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    lastStatsUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairCreateManyInput = {
    id?: number
    network: string
    token0Id: number
    token1Id: number
    spikeyAmmPairAddress?: string | null
    spikeyAmmReserve0?: bigint | number | null
    spikeyAmmReserve1?: bigint | number | null
    lastStatsUpdate?: Date | string | null
    createdAt?: Date | string
  }

  export type PairUpdateManyMutationInput = {
    network?: StringFieldUpdateOperationsInput | string
    spikeyAmmPairAddress?: NullableStringFieldUpdateOperationsInput | string | null
    spikeyAmmReserve0?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    spikeyAmmReserve1?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    lastStatsUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    token0Id?: IntFieldUpdateOperationsInput | number
    token1Id?: IntFieldUpdateOperationsInput | number
    spikeyAmmPairAddress?: NullableStringFieldUpdateOperationsInput | string | null
    spikeyAmmReserve0?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    spikeyAmmReserve1?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    lastStatsUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OhlcDataCreateInput = {
    network: string
    ammSource: string
    timeframe: string
    timestamp: Date | string
    open: Decimal | DecimalJsLike | number | string
    high: Decimal | DecimalJsLike | number | string
    low: Decimal | DecimalJsLike | number | string
    close: Decimal | DecimalJsLike | number | string
    volume: Decimal | DecimalJsLike | number | string
    tradeCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    token0Address: string
    token1Address: string
  }

  export type OhlcDataUncheckedCreateInput = {
    id?: number
    network: string
    ammSource: string
    timeframe: string
    timestamp: Date | string
    open: Decimal | DecimalJsLike | number | string
    high: Decimal | DecimalJsLike | number | string
    low: Decimal | DecimalJsLike | number | string
    close: Decimal | DecimalJsLike | number | string
    volume: Decimal | DecimalJsLike | number | string
    tradeCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    token0Address: string
    token1Address: string
  }

  export type OhlcDataUpdateInput = {
    network?: StringFieldUpdateOperationsInput | string
    ammSource?: StringFieldUpdateOperationsInput | string
    timeframe?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    high?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    low?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tradeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token0Address?: StringFieldUpdateOperationsInput | string
    token1Address?: StringFieldUpdateOperationsInput | string
  }

  export type OhlcDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    ammSource?: StringFieldUpdateOperationsInput | string
    timeframe?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    high?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    low?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tradeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token0Address?: StringFieldUpdateOperationsInput | string
    token1Address?: StringFieldUpdateOperationsInput | string
  }

  export type OhlcDataCreateManyInput = {
    id?: number
    network: string
    ammSource: string
    timeframe: string
    timestamp: Date | string
    open: Decimal | DecimalJsLike | number | string
    high: Decimal | DecimalJsLike | number | string
    low: Decimal | DecimalJsLike | number | string
    close: Decimal | DecimalJsLike | number | string
    volume: Decimal | DecimalJsLike | number | string
    tradeCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    token0Address: string
    token1Address: string
  }

  export type OhlcDataUpdateManyMutationInput = {
    network?: StringFieldUpdateOperationsInput | string
    ammSource?: StringFieldUpdateOperationsInput | string
    timeframe?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    high?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    low?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tradeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token0Address?: StringFieldUpdateOperationsInput | string
    token1Address?: StringFieldUpdateOperationsInput | string
  }

  export type OhlcDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    ammSource?: StringFieldUpdateOperationsInput | string
    timeframe?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    high?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    low?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tradeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token0Address?: StringFieldUpdateOperationsInput | string
    token1Address?: StringFieldUpdateOperationsInput | string
  }

  export type UserPreferenceCreateInput = {
    userId: bigint | number
    defaultTokenAddress?: string | null
    defaultTimeframe?: string | null
  }

  export type UserPreferenceUncheckedCreateInput = {
    id?: number
    userId: bigint | number
    defaultTokenAddress?: string | null
    defaultTimeframe?: string | null
  }

  export type UserPreferenceUpdateInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    defaultTokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    defaultTimeframe?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPreferenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    defaultTokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    defaultTimeframe?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPreferenceCreateManyInput = {
    id?: number
    userId: bigint | number
    defaultTokenAddress?: string | null
    defaultTimeframe?: string | null
  }

  export type UserPreferenceUpdateManyMutationInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    defaultTokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    defaultTimeframe?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPreferenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    defaultTokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    defaultTimeframe?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type BlockProgressCountOrderByAggregateInput = {
    id?: SortOrder
    network?: SortOrder
    lastBlockHeight?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlockProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    lastBlockHeight?: SortOrder
  }

  export type BlockProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    network?: SortOrder
    lastBlockHeight?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlockProgressMinOrderByAggregateInput = {
    id?: SortOrder
    network?: SortOrder
    lastBlockHeight?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlockProgressSumOrderByAggregateInput = {
    id?: SortOrder
    lastBlockHeight?: SortOrder
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

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventTrackingNetworkTransactionHashSequenceNumberEventTypeCompoundUniqueInput = {
    network: string
    transactionHash: string
    sequenceNumber: string
    eventType: string
  }

  export type EventTrackingCountOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    blockHeight?: SortOrder
    transactionHash?: SortOrder
    processed?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    network?: SortOrder
    sequenceNumber?: SortOrder
  }

  export type EventTrackingAvgOrderByAggregateInput = {
    id?: SortOrder
    blockHeight?: SortOrder
  }

  export type EventTrackingMaxOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    blockHeight?: SortOrder
    transactionHash?: SortOrder
    processed?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    network?: SortOrder
    sequenceNumber?: SortOrder
  }

  export type EventTrackingMinOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    blockHeight?: SortOrder
    transactionHash?: SortOrder
    processed?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    network?: SortOrder
    sequenceNumber?: SortOrder
  }

  export type EventTrackingSumOrderByAggregateInput = {
    id?: SortOrder
    blockHeight?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type PairListRelationFilter = {
    every?: PairWhereInput
    some?: PairWhereInput
    none?: PairWhereInput
  }

  export type PairOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenNetworkAddressCompoundUniqueInput = {
    network: string
    address: string
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    network?: SortOrder
    address?: SortOrder
    wrappedAddress?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    decimals?: SortOrder
    maxSupply?: SortOrder
    circulatingSupply?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    id?: SortOrder
    decimals?: SortOrder
    maxSupply?: SortOrder
    circulatingSupply?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    network?: SortOrder
    address?: SortOrder
    wrappedAddress?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    decimals?: SortOrder
    maxSupply?: SortOrder
    circulatingSupply?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    network?: SortOrder
    address?: SortOrder
    wrappedAddress?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    decimals?: SortOrder
    maxSupply?: SortOrder
    circulatingSupply?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    id?: SortOrder
    decimals?: SortOrder
    maxSupply?: SortOrder
    circulatingSupply?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type TokenScalarRelationFilter = {
    is?: TokenWhereInput
    isNot?: TokenWhereInput
  }

  export type PairNetworkToken0IdToken1IdCompoundUniqueInput = {
    network: string
    token0Id: number
    token1Id: number
  }

  export type PairNetworkSpikeyAmmPairAddressCompoundUniqueInput = {
    network: string
    spikeyAmmPairAddress: string
  }

  export type PairCountOrderByAggregateInput = {
    id?: SortOrder
    network?: SortOrder
    token0Id?: SortOrder
    token1Id?: SortOrder
    spikeyAmmPairAddress?: SortOrder
    spikeyAmmReserve0?: SortOrder
    spikeyAmmReserve1?: SortOrder
    lastStatsUpdate?: SortOrder
    createdAt?: SortOrder
  }

  export type PairAvgOrderByAggregateInput = {
    id?: SortOrder
    token0Id?: SortOrder
    token1Id?: SortOrder
    spikeyAmmReserve0?: SortOrder
    spikeyAmmReserve1?: SortOrder
  }

  export type PairMaxOrderByAggregateInput = {
    id?: SortOrder
    network?: SortOrder
    token0Id?: SortOrder
    token1Id?: SortOrder
    spikeyAmmPairAddress?: SortOrder
    spikeyAmmReserve0?: SortOrder
    spikeyAmmReserve1?: SortOrder
    lastStatsUpdate?: SortOrder
    createdAt?: SortOrder
  }

  export type PairMinOrderByAggregateInput = {
    id?: SortOrder
    network?: SortOrder
    token0Id?: SortOrder
    token1Id?: SortOrder
    spikeyAmmPairAddress?: SortOrder
    spikeyAmmReserve0?: SortOrder
    spikeyAmmReserve1?: SortOrder
    lastStatsUpdate?: SortOrder
    createdAt?: SortOrder
  }

  export type PairSumOrderByAggregateInput = {
    id?: SortOrder
    token0Id?: SortOrder
    token1Id?: SortOrder
    spikeyAmmReserve0?: SortOrder
    spikeyAmmReserve1?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type OhlcDataNetworkAmmSourceToken0AddressToken1AddressTimeframeTimestampCompoundUniqueInput = {
    network: string
    ammSource: string
    token0Address: string
    token1Address: string
    timeframe: string
    timestamp: Date | string
  }

  export type OhlcDataCountOrderByAggregateInput = {
    id?: SortOrder
    network?: SortOrder
    ammSource?: SortOrder
    timeframe?: SortOrder
    timestamp?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
    tradeCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token0Address?: SortOrder
    token1Address?: SortOrder
  }

  export type OhlcDataAvgOrderByAggregateInput = {
    id?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
    tradeCount?: SortOrder
  }

  export type OhlcDataMaxOrderByAggregateInput = {
    id?: SortOrder
    network?: SortOrder
    ammSource?: SortOrder
    timeframe?: SortOrder
    timestamp?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
    tradeCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token0Address?: SortOrder
    token1Address?: SortOrder
  }

  export type OhlcDataMinOrderByAggregateInput = {
    id?: SortOrder
    network?: SortOrder
    ammSource?: SortOrder
    timeframe?: SortOrder
    timestamp?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
    tradeCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token0Address?: SortOrder
    token1Address?: SortOrder
  }

  export type OhlcDataSumOrderByAggregateInput = {
    id?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
    tradeCount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserPreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    defaultTokenAddress?: SortOrder
    defaultTimeframe?: SortOrder
  }

  export type UserPreferenceAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    defaultTokenAddress?: SortOrder
    defaultTimeframe?: SortOrder
  }

  export type UserPreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    defaultTokenAddress?: SortOrder
    defaultTimeframe?: SortOrder
  }

  export type UserPreferenceSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PairCreateNestedManyWithoutToken0Input = {
    create?: XOR<PairCreateWithoutToken0Input, PairUncheckedCreateWithoutToken0Input> | PairCreateWithoutToken0Input[] | PairUncheckedCreateWithoutToken0Input[]
    connectOrCreate?: PairCreateOrConnectWithoutToken0Input | PairCreateOrConnectWithoutToken0Input[]
    createMany?: PairCreateManyToken0InputEnvelope
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
  }

  export type PairCreateNestedManyWithoutToken1Input = {
    create?: XOR<PairCreateWithoutToken1Input, PairUncheckedCreateWithoutToken1Input> | PairCreateWithoutToken1Input[] | PairUncheckedCreateWithoutToken1Input[]
    connectOrCreate?: PairCreateOrConnectWithoutToken1Input | PairCreateOrConnectWithoutToken1Input[]
    createMany?: PairCreateManyToken1InputEnvelope
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
  }

  export type PairUncheckedCreateNestedManyWithoutToken0Input = {
    create?: XOR<PairCreateWithoutToken0Input, PairUncheckedCreateWithoutToken0Input> | PairCreateWithoutToken0Input[] | PairUncheckedCreateWithoutToken0Input[]
    connectOrCreate?: PairCreateOrConnectWithoutToken0Input | PairCreateOrConnectWithoutToken0Input[]
    createMany?: PairCreateManyToken0InputEnvelope
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
  }

  export type PairUncheckedCreateNestedManyWithoutToken1Input = {
    create?: XOR<PairCreateWithoutToken1Input, PairUncheckedCreateWithoutToken1Input> | PairCreateWithoutToken1Input[] | PairUncheckedCreateWithoutToken1Input[]
    connectOrCreate?: PairCreateOrConnectWithoutToken1Input | PairCreateOrConnectWithoutToken1Input[]
    createMany?: PairCreateManyToken1InputEnvelope
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type PairUpdateManyWithoutToken0NestedInput = {
    create?: XOR<PairCreateWithoutToken0Input, PairUncheckedCreateWithoutToken0Input> | PairCreateWithoutToken0Input[] | PairUncheckedCreateWithoutToken0Input[]
    connectOrCreate?: PairCreateOrConnectWithoutToken0Input | PairCreateOrConnectWithoutToken0Input[]
    upsert?: PairUpsertWithWhereUniqueWithoutToken0Input | PairUpsertWithWhereUniqueWithoutToken0Input[]
    createMany?: PairCreateManyToken0InputEnvelope
    set?: PairWhereUniqueInput | PairWhereUniqueInput[]
    disconnect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    delete?: PairWhereUniqueInput | PairWhereUniqueInput[]
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    update?: PairUpdateWithWhereUniqueWithoutToken0Input | PairUpdateWithWhereUniqueWithoutToken0Input[]
    updateMany?: PairUpdateManyWithWhereWithoutToken0Input | PairUpdateManyWithWhereWithoutToken0Input[]
    deleteMany?: PairScalarWhereInput | PairScalarWhereInput[]
  }

  export type PairUpdateManyWithoutToken1NestedInput = {
    create?: XOR<PairCreateWithoutToken1Input, PairUncheckedCreateWithoutToken1Input> | PairCreateWithoutToken1Input[] | PairUncheckedCreateWithoutToken1Input[]
    connectOrCreate?: PairCreateOrConnectWithoutToken1Input | PairCreateOrConnectWithoutToken1Input[]
    upsert?: PairUpsertWithWhereUniqueWithoutToken1Input | PairUpsertWithWhereUniqueWithoutToken1Input[]
    createMany?: PairCreateManyToken1InputEnvelope
    set?: PairWhereUniqueInput | PairWhereUniqueInput[]
    disconnect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    delete?: PairWhereUniqueInput | PairWhereUniqueInput[]
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    update?: PairUpdateWithWhereUniqueWithoutToken1Input | PairUpdateWithWhereUniqueWithoutToken1Input[]
    updateMany?: PairUpdateManyWithWhereWithoutToken1Input | PairUpdateManyWithWhereWithoutToken1Input[]
    deleteMany?: PairScalarWhereInput | PairScalarWhereInput[]
  }

  export type PairUncheckedUpdateManyWithoutToken0NestedInput = {
    create?: XOR<PairCreateWithoutToken0Input, PairUncheckedCreateWithoutToken0Input> | PairCreateWithoutToken0Input[] | PairUncheckedCreateWithoutToken0Input[]
    connectOrCreate?: PairCreateOrConnectWithoutToken0Input | PairCreateOrConnectWithoutToken0Input[]
    upsert?: PairUpsertWithWhereUniqueWithoutToken0Input | PairUpsertWithWhereUniqueWithoutToken0Input[]
    createMany?: PairCreateManyToken0InputEnvelope
    set?: PairWhereUniqueInput | PairWhereUniqueInput[]
    disconnect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    delete?: PairWhereUniqueInput | PairWhereUniqueInput[]
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    update?: PairUpdateWithWhereUniqueWithoutToken0Input | PairUpdateWithWhereUniqueWithoutToken0Input[]
    updateMany?: PairUpdateManyWithWhereWithoutToken0Input | PairUpdateManyWithWhereWithoutToken0Input[]
    deleteMany?: PairScalarWhereInput | PairScalarWhereInput[]
  }

  export type PairUncheckedUpdateManyWithoutToken1NestedInput = {
    create?: XOR<PairCreateWithoutToken1Input, PairUncheckedCreateWithoutToken1Input> | PairCreateWithoutToken1Input[] | PairUncheckedCreateWithoutToken1Input[]
    connectOrCreate?: PairCreateOrConnectWithoutToken1Input | PairCreateOrConnectWithoutToken1Input[]
    upsert?: PairUpsertWithWhereUniqueWithoutToken1Input | PairUpsertWithWhereUniqueWithoutToken1Input[]
    createMany?: PairCreateManyToken1InputEnvelope
    set?: PairWhereUniqueInput | PairWhereUniqueInput[]
    disconnect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    delete?: PairWhereUniqueInput | PairWhereUniqueInput[]
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    update?: PairUpdateWithWhereUniqueWithoutToken1Input | PairUpdateWithWhereUniqueWithoutToken1Input[]
    updateMany?: PairUpdateManyWithWhereWithoutToken1Input | PairUpdateManyWithWhereWithoutToken1Input[]
    deleteMany?: PairScalarWhereInput | PairScalarWhereInput[]
  }

  export type TokenCreateNestedOneWithoutPairsAsToken0Input = {
    create?: XOR<TokenCreateWithoutPairsAsToken0Input, TokenUncheckedCreateWithoutPairsAsToken0Input>
    connectOrCreate?: TokenCreateOrConnectWithoutPairsAsToken0Input
    connect?: TokenWhereUniqueInput
  }

  export type TokenCreateNestedOneWithoutPairsAsToken1Input = {
    create?: XOR<TokenCreateWithoutPairsAsToken1Input, TokenUncheckedCreateWithoutPairsAsToken1Input>
    connectOrCreate?: TokenCreateOrConnectWithoutPairsAsToken1Input
    connect?: TokenWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TokenUpdateOneRequiredWithoutPairsAsToken0NestedInput = {
    create?: XOR<TokenCreateWithoutPairsAsToken0Input, TokenUncheckedCreateWithoutPairsAsToken0Input>
    connectOrCreate?: TokenCreateOrConnectWithoutPairsAsToken0Input
    upsert?: TokenUpsertWithoutPairsAsToken0Input
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutPairsAsToken0Input, TokenUpdateWithoutPairsAsToken0Input>, TokenUncheckedUpdateWithoutPairsAsToken0Input>
  }

  export type TokenUpdateOneRequiredWithoutPairsAsToken1NestedInput = {
    create?: XOR<TokenCreateWithoutPairsAsToken1Input, TokenUncheckedCreateWithoutPairsAsToken1Input>
    connectOrCreate?: TokenCreateOrConnectWithoutPairsAsToken1Input
    upsert?: TokenUpsertWithoutPairsAsToken1Input
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutPairsAsToken1Input, TokenUpdateWithoutPairsAsToken1Input>, TokenUncheckedUpdateWithoutPairsAsToken1Input>
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type PairCreateWithoutToken0Input = {
    network: string
    spikeyAmmPairAddress?: string | null
    spikeyAmmReserve0?: bigint | number | null
    spikeyAmmReserve1?: bigint | number | null
    lastStatsUpdate?: Date | string | null
    createdAt?: Date | string
    token1: TokenCreateNestedOneWithoutPairsAsToken1Input
  }

  export type PairUncheckedCreateWithoutToken0Input = {
    id?: number
    network: string
    token1Id: number
    spikeyAmmPairAddress?: string | null
    spikeyAmmReserve0?: bigint | number | null
    spikeyAmmReserve1?: bigint | number | null
    lastStatsUpdate?: Date | string | null
    createdAt?: Date | string
  }

  export type PairCreateOrConnectWithoutToken0Input = {
    where: PairWhereUniqueInput
    create: XOR<PairCreateWithoutToken0Input, PairUncheckedCreateWithoutToken0Input>
  }

  export type PairCreateManyToken0InputEnvelope = {
    data: PairCreateManyToken0Input | PairCreateManyToken0Input[]
    skipDuplicates?: boolean
  }

  export type PairCreateWithoutToken1Input = {
    network: string
    spikeyAmmPairAddress?: string | null
    spikeyAmmReserve0?: bigint | number | null
    spikeyAmmReserve1?: bigint | number | null
    lastStatsUpdate?: Date | string | null
    createdAt?: Date | string
    token0: TokenCreateNestedOneWithoutPairsAsToken0Input
  }

  export type PairUncheckedCreateWithoutToken1Input = {
    id?: number
    network: string
    token0Id: number
    spikeyAmmPairAddress?: string | null
    spikeyAmmReserve0?: bigint | number | null
    spikeyAmmReserve1?: bigint | number | null
    lastStatsUpdate?: Date | string | null
    createdAt?: Date | string
  }

  export type PairCreateOrConnectWithoutToken1Input = {
    where: PairWhereUniqueInput
    create: XOR<PairCreateWithoutToken1Input, PairUncheckedCreateWithoutToken1Input>
  }

  export type PairCreateManyToken1InputEnvelope = {
    data: PairCreateManyToken1Input | PairCreateManyToken1Input[]
    skipDuplicates?: boolean
  }

  export type PairUpsertWithWhereUniqueWithoutToken0Input = {
    where: PairWhereUniqueInput
    update: XOR<PairUpdateWithoutToken0Input, PairUncheckedUpdateWithoutToken0Input>
    create: XOR<PairCreateWithoutToken0Input, PairUncheckedCreateWithoutToken0Input>
  }

  export type PairUpdateWithWhereUniqueWithoutToken0Input = {
    where: PairWhereUniqueInput
    data: XOR<PairUpdateWithoutToken0Input, PairUncheckedUpdateWithoutToken0Input>
  }

  export type PairUpdateManyWithWhereWithoutToken0Input = {
    where: PairScalarWhereInput
    data: XOR<PairUpdateManyMutationInput, PairUncheckedUpdateManyWithoutToken0Input>
  }

  export type PairScalarWhereInput = {
    AND?: PairScalarWhereInput | PairScalarWhereInput[]
    OR?: PairScalarWhereInput[]
    NOT?: PairScalarWhereInput | PairScalarWhereInput[]
    id?: IntFilter<"Pair"> | number
    network?: StringFilter<"Pair"> | string
    token0Id?: IntFilter<"Pair"> | number
    token1Id?: IntFilter<"Pair"> | number
    spikeyAmmPairAddress?: StringNullableFilter<"Pair"> | string | null
    spikeyAmmReserve0?: BigIntNullableFilter<"Pair"> | bigint | number | null
    spikeyAmmReserve1?: BigIntNullableFilter<"Pair"> | bigint | number | null
    lastStatsUpdate?: DateTimeNullableFilter<"Pair"> | Date | string | null
    createdAt?: DateTimeFilter<"Pair"> | Date | string
  }

  export type PairUpsertWithWhereUniqueWithoutToken1Input = {
    where: PairWhereUniqueInput
    update: XOR<PairUpdateWithoutToken1Input, PairUncheckedUpdateWithoutToken1Input>
    create: XOR<PairCreateWithoutToken1Input, PairUncheckedCreateWithoutToken1Input>
  }

  export type PairUpdateWithWhereUniqueWithoutToken1Input = {
    where: PairWhereUniqueInput
    data: XOR<PairUpdateWithoutToken1Input, PairUncheckedUpdateWithoutToken1Input>
  }

  export type PairUpdateManyWithWhereWithoutToken1Input = {
    where: PairScalarWhereInput
    data: XOR<PairUpdateManyMutationInput, PairUncheckedUpdateManyWithoutToken1Input>
  }

  export type TokenCreateWithoutPairsAsToken0Input = {
    network: string
    address: string
    wrappedAddress?: string | null
    symbol: string
    name: string
    decimals: number
    maxSupply?: bigint | number | null
    circulatingSupply?: bigint | number | null
    createdAt?: Date | string
    pairsAsToken1?: PairCreateNestedManyWithoutToken1Input
  }

  export type TokenUncheckedCreateWithoutPairsAsToken0Input = {
    id?: number
    network: string
    address: string
    wrappedAddress?: string | null
    symbol: string
    name: string
    decimals: number
    maxSupply?: bigint | number | null
    circulatingSupply?: bigint | number | null
    createdAt?: Date | string
    pairsAsToken1?: PairUncheckedCreateNestedManyWithoutToken1Input
  }

  export type TokenCreateOrConnectWithoutPairsAsToken0Input = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutPairsAsToken0Input, TokenUncheckedCreateWithoutPairsAsToken0Input>
  }

  export type TokenCreateWithoutPairsAsToken1Input = {
    network: string
    address: string
    wrappedAddress?: string | null
    symbol: string
    name: string
    decimals: number
    maxSupply?: bigint | number | null
    circulatingSupply?: bigint | number | null
    createdAt?: Date | string
    pairsAsToken0?: PairCreateNestedManyWithoutToken0Input
  }

  export type TokenUncheckedCreateWithoutPairsAsToken1Input = {
    id?: number
    network: string
    address: string
    wrappedAddress?: string | null
    symbol: string
    name: string
    decimals: number
    maxSupply?: bigint | number | null
    circulatingSupply?: bigint | number | null
    createdAt?: Date | string
    pairsAsToken0?: PairUncheckedCreateNestedManyWithoutToken0Input
  }

  export type TokenCreateOrConnectWithoutPairsAsToken1Input = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutPairsAsToken1Input, TokenUncheckedCreateWithoutPairsAsToken1Input>
  }

  export type TokenUpsertWithoutPairsAsToken0Input = {
    update: XOR<TokenUpdateWithoutPairsAsToken0Input, TokenUncheckedUpdateWithoutPairsAsToken0Input>
    create: XOR<TokenCreateWithoutPairsAsToken0Input, TokenUncheckedCreateWithoutPairsAsToken0Input>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutPairsAsToken0Input = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutPairsAsToken0Input, TokenUncheckedUpdateWithoutPairsAsToken0Input>
  }

  export type TokenUpdateWithoutPairsAsToken0Input = {
    network?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    wrappedAddress?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    maxSupply?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    circulatingSupply?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pairsAsToken1?: PairUpdateManyWithoutToken1NestedInput
  }

  export type TokenUncheckedUpdateWithoutPairsAsToken0Input = {
    id?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    wrappedAddress?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    maxSupply?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    circulatingSupply?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pairsAsToken1?: PairUncheckedUpdateManyWithoutToken1NestedInput
  }

  export type TokenUpsertWithoutPairsAsToken1Input = {
    update: XOR<TokenUpdateWithoutPairsAsToken1Input, TokenUncheckedUpdateWithoutPairsAsToken1Input>
    create: XOR<TokenCreateWithoutPairsAsToken1Input, TokenUncheckedCreateWithoutPairsAsToken1Input>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutPairsAsToken1Input = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutPairsAsToken1Input, TokenUncheckedUpdateWithoutPairsAsToken1Input>
  }

  export type TokenUpdateWithoutPairsAsToken1Input = {
    network?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    wrappedAddress?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    maxSupply?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    circulatingSupply?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pairsAsToken0?: PairUpdateManyWithoutToken0NestedInput
  }

  export type TokenUncheckedUpdateWithoutPairsAsToken1Input = {
    id?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    wrappedAddress?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    maxSupply?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    circulatingSupply?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pairsAsToken0?: PairUncheckedUpdateManyWithoutToken0NestedInput
  }

  export type PairCreateManyToken0Input = {
    id?: number
    network: string
    token1Id: number
    spikeyAmmPairAddress?: string | null
    spikeyAmmReserve0?: bigint | number | null
    spikeyAmmReserve1?: bigint | number | null
    lastStatsUpdate?: Date | string | null
    createdAt?: Date | string
  }

  export type PairCreateManyToken1Input = {
    id?: number
    network: string
    token0Id: number
    spikeyAmmPairAddress?: string | null
    spikeyAmmReserve0?: bigint | number | null
    spikeyAmmReserve1?: bigint | number | null
    lastStatsUpdate?: Date | string | null
    createdAt?: Date | string
  }

  export type PairUpdateWithoutToken0Input = {
    network?: StringFieldUpdateOperationsInput | string
    spikeyAmmPairAddress?: NullableStringFieldUpdateOperationsInput | string | null
    spikeyAmmReserve0?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    spikeyAmmReserve1?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    lastStatsUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token1?: TokenUpdateOneRequiredWithoutPairsAsToken1NestedInput
  }

  export type PairUncheckedUpdateWithoutToken0Input = {
    id?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    token1Id?: IntFieldUpdateOperationsInput | number
    spikeyAmmPairAddress?: NullableStringFieldUpdateOperationsInput | string | null
    spikeyAmmReserve0?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    spikeyAmmReserve1?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    lastStatsUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairUncheckedUpdateManyWithoutToken0Input = {
    id?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    token1Id?: IntFieldUpdateOperationsInput | number
    spikeyAmmPairAddress?: NullableStringFieldUpdateOperationsInput | string | null
    spikeyAmmReserve0?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    spikeyAmmReserve1?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    lastStatsUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairUpdateWithoutToken1Input = {
    network?: StringFieldUpdateOperationsInput | string
    spikeyAmmPairAddress?: NullableStringFieldUpdateOperationsInput | string | null
    spikeyAmmReserve0?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    spikeyAmmReserve1?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    lastStatsUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token0?: TokenUpdateOneRequiredWithoutPairsAsToken0NestedInput
  }

  export type PairUncheckedUpdateWithoutToken1Input = {
    id?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    token0Id?: IntFieldUpdateOperationsInput | number
    spikeyAmmPairAddress?: NullableStringFieldUpdateOperationsInput | string | null
    spikeyAmmReserve0?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    spikeyAmmReserve1?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    lastStatsUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairUncheckedUpdateManyWithoutToken1Input = {
    id?: IntFieldUpdateOperationsInput | number
    network?: StringFieldUpdateOperationsInput | string
    token0Id?: IntFieldUpdateOperationsInput | number
    spikeyAmmPairAddress?: NullableStringFieldUpdateOperationsInput | string | null
    spikeyAmmReserve0?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    spikeyAmmReserve1?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    lastStatsUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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