
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model MessageReaction
 * 
 */
export type MessageReaction = $Result.DefaultSelection<Prisma.$MessageReactionPayload>
/**
 * Model Notifications
 * 
 */
export type Notifications = $Result.DefaultSelection<Prisma.$NotificationsPayload>
/**
 * Model SharedPost
 * 
 */
export type SharedPost = $Result.DefaultSelection<Prisma.$SharedPostPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PostType: {
  POST: 'POST',
  REEL: 'REEL'
};

export type PostType = (typeof PostType)[keyof typeof PostType]


export const CommentType: {
  FOLLOW: 'FOLLOW',
  LIKE: 'LIKE',
  COMMENT: 'COMMENT',
  SHARE: 'SHARE'
};

export type CommentType = (typeof CommentType)[keyof typeof CommentType]

}

export type PostType = $Enums.PostType

export const PostType: typeof $Enums.PostType

export type CommentType = $Enums.CommentType

export const CommentType: typeof $Enums.CommentType

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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageReaction`: Exposes CRUD operations for the **MessageReaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageReactions
    * const messageReactions = await prisma.messageReaction.findMany()
    * ```
    */
  get messageReaction(): Prisma.MessageReactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **Notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.NotificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sharedPost`: Exposes CRUD operations for the **SharedPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SharedPosts
    * const sharedPosts = await prisma.sharedPost.findMany()
    * ```
    */
  get sharedPost(): Prisma.SharedPostDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    User: 'User',
    Account: 'Account',
    Post: 'Post',
    Comments: 'Comments',
    Conversation: 'Conversation',
    Message: 'Message',
    MessageReaction: 'MessageReaction',
    Notifications: 'Notifications',
    SharedPost: 'SharedPost'
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
      modelProps: "user" | "account" | "post" | "comments" | "conversation" | "message" | "messageReaction" | "notifications" | "sharedPost"
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
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      MessageReaction: {
        payload: Prisma.$MessageReactionPayload<ExtArgs>
        fields: Prisma.MessageReactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageReactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageReactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionPayload>
          }
          findFirst: {
            args: Prisma.MessageReactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageReactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionPayload>
          }
          findMany: {
            args: Prisma.MessageReactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionPayload>[]
          }
          create: {
            args: Prisma.MessageReactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionPayload>
          }
          createMany: {
            args: Prisma.MessageReactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageReactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionPayload>[]
          }
          delete: {
            args: Prisma.MessageReactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionPayload>
          }
          update: {
            args: Prisma.MessageReactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionPayload>
          }
          deleteMany: {
            args: Prisma.MessageReactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageReactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageReactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionPayload>[]
          }
          upsert: {
            args: Prisma.MessageReactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionPayload>
          }
          aggregate: {
            args: Prisma.MessageReactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageReaction>
          }
          groupBy: {
            args: Prisma.MessageReactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageReactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageReactionCountArgs<ExtArgs>
            result: $Utils.Optional<MessageReactionCountAggregateOutputType> | number
          }
        }
      }
      Notifications: {
        payload: Prisma.$NotificationsPayload<ExtArgs>
        fields: Prisma.NotificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findFirst: {
            args: Prisma.NotificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findMany: {
            args: Prisma.NotificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          create: {
            args: Prisma.NotificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          createMany: {
            args: Prisma.NotificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          delete: {
            args: Prisma.NotificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          update: {
            args: Prisma.NotificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          deleteMany: {
            args: Prisma.NotificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          upsert: {
            args: Prisma.NotificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.NotificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      SharedPost: {
        payload: Prisma.$SharedPostPayload<ExtArgs>
        fields: Prisma.SharedPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SharedPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SharedPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPostPayload>
          }
          findFirst: {
            args: Prisma.SharedPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SharedPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPostPayload>
          }
          findMany: {
            args: Prisma.SharedPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPostPayload>[]
          }
          create: {
            args: Prisma.SharedPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPostPayload>
          }
          createMany: {
            args: Prisma.SharedPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SharedPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPostPayload>[]
          }
          delete: {
            args: Prisma.SharedPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPostPayload>
          }
          update: {
            args: Prisma.SharedPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPostPayload>
          }
          deleteMany: {
            args: Prisma.SharedPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SharedPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SharedPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPostPayload>[]
          }
          upsert: {
            args: Prisma.SharedPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPostPayload>
          }
          aggregate: {
            args: Prisma.SharedPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSharedPost>
          }
          groupBy: {
            args: Prisma.SharedPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<SharedPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.SharedPostCountArgs<ExtArgs>
            result: $Utils.Optional<SharedPostCountAggregateOutputType> | number
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
    user?: UserOmit
    account?: AccountOmit
    post?: PostOmit
    comments?: CommentsOmit
    conversation?: ConversationOmit
    message?: MessageOmit
    messageReaction?: MessageReactionOmit
    notifications?: NotificationsOmit
    sharedPost?: SharedPostOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    posts: number
    userComments: number
    notifications: number
    sentNotifications: number
    likedPosts: number
    likedComments: number
    savedPosts: number
    conversations1: number
    conversations2: number
    messages: number
    receivedMessages: number
    sharedPosts: number
    receivedShares: number
    messageReactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    userComments?: boolean | UserCountOutputTypeCountUserCommentsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    sentNotifications?: boolean | UserCountOutputTypeCountSentNotificationsArgs
    likedPosts?: boolean | UserCountOutputTypeCountLikedPostsArgs
    likedComments?: boolean | UserCountOutputTypeCountLikedCommentsArgs
    savedPosts?: boolean | UserCountOutputTypeCountSavedPostsArgs
    conversations1?: boolean | UserCountOutputTypeCountConversations1Args
    conversations2?: boolean | UserCountOutputTypeCountConversations2Args
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
    sharedPosts?: boolean | UserCountOutputTypeCountSharedPostsArgs
    receivedShares?: boolean | UserCountOutputTypeCountReceivedSharesArgs
    messageReactions?: boolean | UserCountOutputTypeCountMessageReactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConversations1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConversations2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessageReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageReactionWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    postComments: number
    likes: number
    savedBy: number
    notifications: number
    sharedPosts: number
    sharedMessages: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postComments?: boolean | PostCountOutputTypeCountPostCommentsArgs
    likes?: boolean | PostCountOutputTypeCountLikesArgs
    savedBy?: boolean | PostCountOutputTypeCountSavedByArgs
    notifications?: boolean | PostCountOutputTypeCountNotificationsArgs
    sharedPosts?: boolean | PostCountOutputTypeCountSharedPostsArgs
    sharedMessages?: boolean | PostCountOutputTypeCountSharedMessagesArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPostCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountSharedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedPostWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountSharedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type CommentsCountOutputType
   */

  export type CommentsCountOutputType = {
    replies: number
    commentLikes: number
    notifications: number
  }

  export type CommentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentsCountOutputTypeCountRepliesArgs
    commentLikes?: boolean | CommentsCountOutputTypeCountCommentLikesArgs
    notifications?: boolean | CommentsCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentsCountOutputType
     */
    select?: CommentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountCommentLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
  }


  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    messages: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    reactions: number
    notification: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reactions?: boolean | MessageCountOutputTypeCountReactionsArgs
    notification?: boolean | MessageCountOutputTypeCountNotificationArgs
  }

  // Custom InputTypes
  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageReactionWhereInput
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
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
    name: string | null
    userName: string | null
    email: string | null
    emailVerified: Date | null
    bio: string | null
    image: string | null
    hashedPassword: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userName: string | null
    email: string | null
    emailVerified: Date | null
    bio: string | null
    image: string | null
    hashedPassword: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    userName: number
    email: number
    emailVerified: number
    bio: number
    image: number
    hashedPassword: number
    createdAt: number
    updatedAt: number
    followingIds: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    userName?: true
    email?: true
    emailVerified?: true
    bio?: true
    image?: true
    hashedPassword?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    userName?: true
    email?: true
    emailVerified?: true
    bio?: true
    image?: true
    hashedPassword?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    userName?: true
    email?: true
    emailVerified?: true
    bio?: true
    image?: true
    hashedPassword?: true
    createdAt?: true
    updatedAt?: true
    followingIds?: true
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
    name: string | null
    userName: string | null
    email: string | null
    emailVerified: Date | null
    bio: string | null
    image: string | null
    hashedPassword: string | null
    createdAt: Date
    updatedAt: Date
    followingIds: string[]
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
    name?: boolean
    userName?: boolean
    email?: boolean
    emailVerified?: boolean
    bio?: boolean
    image?: boolean
    hashedPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    followingIds?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    userComments?: boolean | User$userCommentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    sentNotifications?: boolean | User$sentNotificationsArgs<ExtArgs>
    likedPosts?: boolean | User$likedPostsArgs<ExtArgs>
    likedComments?: boolean | User$likedCommentsArgs<ExtArgs>
    savedPosts?: boolean | User$savedPostsArgs<ExtArgs>
    conversations1?: boolean | User$conversations1Args<ExtArgs>
    conversations2?: boolean | User$conversations2Args<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    sharedPosts?: boolean | User$sharedPostsArgs<ExtArgs>
    receivedShares?: boolean | User$receivedSharesArgs<ExtArgs>
    messageReactions?: boolean | User$messageReactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userName?: boolean
    email?: boolean
    emailVerified?: boolean
    bio?: boolean
    image?: boolean
    hashedPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    followingIds?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userName?: boolean
    email?: boolean
    emailVerified?: boolean
    bio?: boolean
    image?: boolean
    hashedPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    followingIds?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    userName?: boolean
    email?: boolean
    emailVerified?: boolean
    bio?: boolean
    image?: boolean
    hashedPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    followingIds?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userName" | "email" | "emailVerified" | "bio" | "image" | "hashedPassword" | "createdAt" | "updatedAt" | "followingIds", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    userComments?: boolean | User$userCommentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    sentNotifications?: boolean | User$sentNotificationsArgs<ExtArgs>
    likedPosts?: boolean | User$likedPostsArgs<ExtArgs>
    likedComments?: boolean | User$likedCommentsArgs<ExtArgs>
    savedPosts?: boolean | User$savedPostsArgs<ExtArgs>
    conversations1?: boolean | User$conversations1Args<ExtArgs>
    conversations2?: boolean | User$conversations2Args<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    sharedPosts?: boolean | User$sharedPostsArgs<ExtArgs>
    receivedShares?: boolean | User$receivedSharesArgs<ExtArgs>
    messageReactions?: boolean | User$messageReactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      userComments: Prisma.$CommentsPayload<ExtArgs>[]
      notifications: Prisma.$NotificationsPayload<ExtArgs>[]
      sentNotifications: Prisma.$NotificationsPayload<ExtArgs>[]
      likedPosts: Prisma.$PostPayload<ExtArgs>[]
      likedComments: Prisma.$CommentsPayload<ExtArgs>[]
      savedPosts: Prisma.$PostPayload<ExtArgs>[]
      conversations1: Prisma.$ConversationPayload<ExtArgs>[]
      conversations2: Prisma.$ConversationPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagePayload<ExtArgs>[]
      sharedPosts: Prisma.$SharedPostPayload<ExtArgs>[]
      receivedShares: Prisma.$SharedPostPayload<ExtArgs>[]
      messageReactions: Prisma.$MessageReactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      userName: string | null
      email: string | null
      emailVerified: Date | null
      bio: string | null
      image: string | null
      hashedPassword: string | null
      createdAt: Date
      updatedAt: Date
      followingIds: string[]
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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userComments<T extends User$userCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$userCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentNotifications<T extends User$sentNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedPosts<T extends User$likedPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$likedPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedComments<T extends User$likedCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$likedCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedPosts<T extends User$savedPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$savedPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversations1<T extends User$conversations1Args<ExtArgs> = {}>(args?: Subset<T, User$conversations1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversations2<T extends User$conversations2Args<ExtArgs> = {}>(args?: Subset<T, User$conversations2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sharedPosts<T extends User$sharedPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$sharedPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedShares<T extends User$receivedSharesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedSharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messageReactions<T extends User$messageReactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$messageReactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly bio: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly followingIds: FieldRef<"User", 'String[]'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.userComments
   */
  export type User$userCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * User.sentNotifications
   */
  export type User$sentNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * User.likedPosts
   */
  export type User$likedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.likedComments
   */
  export type User$likedCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * User.savedPosts
   */
  export type User$savedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.conversations1
   */
  export type User$conversations1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * User.conversations2
   */
  export type User$conversations2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.sharedPosts
   */
  export type User$sharedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPost
     */
    select?: SharedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPost
     */
    omit?: SharedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostInclude<ExtArgs> | null
    where?: SharedPostWhereInput
    orderBy?: SharedPostOrderByWithRelationInput | SharedPostOrderByWithRelationInput[]
    cursor?: SharedPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedPostScalarFieldEnum | SharedPostScalarFieldEnum[]
  }

  /**
   * User.receivedShares
   */
  export type User$receivedSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPost
     */
    select?: SharedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPost
     */
    omit?: SharedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostInclude<ExtArgs> | null
    where?: SharedPostWhereInput
    orderBy?: SharedPostOrderByWithRelationInput | SharedPostOrderByWithRelationInput[]
    cursor?: SharedPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedPostScalarFieldEnum | SharedPostScalarFieldEnum[]
  }

  /**
   * User.messageReactions
   */
  export type User$messageReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    where?: MessageReactionWhereInput
    orderBy?: MessageReactionOrderByWithRelationInput | MessageReactionOrderByWithRelationInput[]
    cursor?: MessageReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageReactionScalarFieldEnum | MessageReactionScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    caption: string | null
    type: $Enums.PostType | null
    createdAt: Date | null
    userId: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    caption: string | null
    type: $Enums.PostType | null
    createdAt: Date | null
    userId: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    caption: number
    postImage: number
    type: number
    createdAt: number
    userId: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    caption?: true
    type?: true
    createdAt?: true
    userId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    caption?: true
    type?: true
    createdAt?: true
    userId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    caption?: true
    postImage?: true
    type?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    caption: string | null
    postImage: JsonValue[]
    type: $Enums.PostType
    createdAt: Date
    userId: string
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caption?: boolean
    postImage?: boolean
    type?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    postComments?: boolean | Post$postCommentsArgs<ExtArgs>
    likes?: boolean | Post$likesArgs<ExtArgs>
    savedBy?: boolean | Post$savedByArgs<ExtArgs>
    notifications?: boolean | Post$notificationsArgs<ExtArgs>
    sharedPosts?: boolean | Post$sharedPostsArgs<ExtArgs>
    sharedMessages?: boolean | Post$sharedMessagesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caption?: boolean
    postImage?: boolean
    type?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caption?: boolean
    postImage?: boolean
    type?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    caption?: boolean
    postImage?: boolean
    type?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "caption" | "postImage" | "type" | "createdAt" | "userId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    postComments?: boolean | Post$postCommentsArgs<ExtArgs>
    likes?: boolean | Post$likesArgs<ExtArgs>
    savedBy?: boolean | Post$savedByArgs<ExtArgs>
    notifications?: boolean | Post$notificationsArgs<ExtArgs>
    sharedPosts?: boolean | Post$sharedPostsArgs<ExtArgs>
    sharedMessages?: boolean | Post$sharedMessagesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      postComments: Prisma.$CommentsPayload<ExtArgs>[]
      likes: Prisma.$UserPayload<ExtArgs>[]
      savedBy: Prisma.$UserPayload<ExtArgs>[]
      notifications: Prisma.$NotificationsPayload<ExtArgs>[]
      sharedPosts: Prisma.$SharedPostPayload<ExtArgs>[]
      sharedMessages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      caption: string | null
      postImage: Prisma.JsonValue[]
      type: $Enums.PostType
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    postComments<T extends Post$postCommentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$postCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Post$likesArgs<ExtArgs> = {}>(args?: Subset<T, Post$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedBy<T extends Post$savedByArgs<ExtArgs> = {}>(args?: Subset<T, Post$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Post$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Post$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sharedPosts<T extends Post$sharedPostsArgs<ExtArgs> = {}>(args?: Subset<T, Post$sharedPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sharedMessages<T extends Post$sharedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Post$sharedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly caption: FieldRef<"Post", 'String'>
    readonly postImage: FieldRef<"Post", 'Json[]'>
    readonly type: FieldRef<"Post", 'PostType'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly userId: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.postComments
   */
  export type Post$postCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Post.likes
   */
  export type Post$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Post.savedBy
   */
  export type Post$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Post.notifications
   */
  export type Post$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Post.sharedPosts
   */
  export type Post$sharedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPost
     */
    select?: SharedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPost
     */
    omit?: SharedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostInclude<ExtArgs> | null
    where?: SharedPostWhereInput
    orderBy?: SharedPostOrderByWithRelationInput | SharedPostOrderByWithRelationInput[]
    cursor?: SharedPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedPostScalarFieldEnum | SharedPostScalarFieldEnum[]
  }

  /**
   * Post.sharedMessages
   */
  export type Post$sharedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsMinAggregateOutputType = {
    id: string | null
    body: string | null
    createdAt: Date | null
    postId: string | null
    userId: string | null
    parentId: string | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: string | null
    body: string | null
    createdAt: Date | null
    postId: string | null
    userId: string | null
    parentId: string | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    body: number
    createdAt: number
    postId: number
    userId: number
    parentId: number
    _all: number
  }


  export type CommentsMinAggregateInputType = {
    id?: true
    body?: true
    createdAt?: true
    postId?: true
    userId?: true
    parentId?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    body?: true
    createdAt?: true
    postId?: true
    userId?: true
    parentId?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    body?: true
    createdAt?: true
    postId?: true
    userId?: true
    parentId?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: string
    body: string
    createdAt: Date
    postId: string
    userId: string
    parentId: string | null
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    createdAt?: boolean
    postId?: boolean
    userId?: boolean
    parentId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Comments$parentArgs<ExtArgs>
    replies?: boolean | Comments$repliesArgs<ExtArgs>
    commentLikes?: boolean | Comments$commentLikesArgs<ExtArgs>
    notifications?: boolean | Comments$notificationsArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    createdAt?: boolean
    postId?: boolean
    userId?: boolean
    parentId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Comments$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    createdAt?: boolean
    postId?: boolean
    userId?: boolean
    parentId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Comments$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectScalar = {
    id?: boolean
    body?: boolean
    createdAt?: boolean
    postId?: boolean
    userId?: boolean
    parentId?: boolean
  }

  export type CommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "body" | "createdAt" | "postId" | "userId" | "parentId", ExtArgs["result"]["comments"]>
  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Comments$parentArgs<ExtArgs>
    replies?: boolean | Comments$repliesArgs<ExtArgs>
    commentLikes?: boolean | Comments$commentLikesArgs<ExtArgs>
    notifications?: boolean | Comments$notificationsArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Comments$parentArgs<ExtArgs>
  }
  export type CommentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Comments$parentArgs<ExtArgs>
  }

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      parent: Prisma.$CommentsPayload<ExtArgs> | null
      replies: Prisma.$CommentsPayload<ExtArgs>[]
      commentLikes: Prisma.$UserPayload<ExtArgs>[]
      notifications: Prisma.$NotificationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      body: string
      createdAt: Date
      postId: string
      userId: string
      parentId: string | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentsFindManyArgs>(args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends CommentsCreateArgs>(args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentsCreateManyArgs>(args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentsCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends CommentsDeleteArgs>(args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentsUpdateArgs>(args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentsDeleteManyArgs>(args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentsUpdateManyArgs>(args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentsUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
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
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Comments$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comments$parentArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comments$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comments$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commentLikes<T extends Comments$commentLikesArgs<ExtArgs> = {}>(args?: Subset<T, Comments$commentLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Comments$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Comments$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", 'String'>
    readonly body: FieldRef<"Comments", 'String'>
    readonly createdAt: FieldRef<"Comments", 'DateTime'>
    readonly postId: FieldRef<"Comments", 'String'>
    readonly userId: FieldRef<"Comments", 'String'>
    readonly parentId: FieldRef<"Comments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments createManyAndReturn
   */
  export type CommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments updateManyAndReturn
   */
  export type CommentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comments.parent
   */
  export type Comments$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
  }

  /**
   * Comments.replies
   */
  export type Comments$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments.commentLikes
   */
  export type Comments$commentLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Comments.notifications
   */
  export type Comments$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
  }


  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    lastMessageAt: Date | null
    user1Id: string | null
    user2Id: string | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    lastMessageAt: Date | null
    user1Id: string | null
    user2Id: string | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    createdAt: number
    lastMessageAt: number
    user1Id: number
    user2Id: number
    _all: number
  }


  export type ConversationMinAggregateInputType = {
    id?: true
    createdAt?: true
    lastMessageAt?: true
    user1Id?: true
    user2Id?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    lastMessageAt?: true
    user1Id?: true
    user2Id?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    createdAt?: true
    lastMessageAt?: true
    user1Id?: true
    user2Id?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: string
    createdAt: Date
    lastMessageAt: Date
    user1Id: string
    user2Id: string
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    lastMessageAt?: boolean
    user1Id?: boolean
    user2Id?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    lastMessageAt?: boolean
    user1Id?: boolean
    user2Id?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    lastMessageAt?: boolean
    user1Id?: boolean
    user2Id?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    lastMessageAt?: boolean
    user1Id?: boolean
    user2Id?: boolean
  }

  export type ConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "lastMessageAt" | "user1Id" | "user2Id", ExtArgs["result"]["conversation"]>
  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      user1: Prisma.$UserPayload<ExtArgs>
      user2: Prisma.$UserPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      lastMessageAt: Date
      user1Id: string
      user2Id: string
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationFindManyArgs>(args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends ConversationCreateArgs>(args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationCreateManyArgs>(args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends ConversationDeleteArgs>(args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationUpdateArgs>(args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationDeleteManyArgs>(args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationUpdateManyArgs>(args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {ConversationUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
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
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Conversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Conversation model
   */
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'String'>
    readonly createdAt: FieldRef<"Conversation", 'DateTime'>
    readonly lastMessageAt: FieldRef<"Conversation", 'DateTime'>
    readonly user1Id: FieldRef<"Conversation", 'String'>
    readonly user2Id: FieldRef<"Conversation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation createManyAndReturn
   */
  export type ConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation updateManyAndReturn
   */
  export type ConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversation.messages
   */
  export type Conversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    body: string | null
    media: string | null
    createdAt: Date | null
    senderId: string | null
    receiverId: string | null
    conversationId: string | null
    seen: boolean | null
    delivered: boolean | null
    sharedPostId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    body: string | null
    media: string | null
    createdAt: Date | null
    senderId: string | null
    receiverId: string | null
    conversationId: string | null
    seen: boolean | null
    delivered: boolean | null
    sharedPostId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    body: number
    media: number
    createdAt: number
    senderId: number
    receiverId: number
    conversationId: number
    seen: number
    delivered: number
    sharedPostId: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    body?: true
    media?: true
    createdAt?: true
    senderId?: true
    receiverId?: true
    conversationId?: true
    seen?: true
    delivered?: true
    sharedPostId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    body?: true
    media?: true
    createdAt?: true
    senderId?: true
    receiverId?: true
    conversationId?: true
    seen?: true
    delivered?: true
    sharedPostId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    body?: true
    media?: true
    createdAt?: true
    senderId?: true
    receiverId?: true
    conversationId?: true
    seen?: true
    delivered?: true
    sharedPostId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    body: string | null
    media: string | null
    createdAt: Date
    senderId: string
    receiverId: string
    conversationId: string
    seen: boolean
    delivered: boolean
    sharedPostId: string | null
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    media?: boolean
    createdAt?: boolean
    senderId?: boolean
    receiverId?: boolean
    conversationId?: boolean
    seen?: boolean
    delivered?: boolean
    sharedPostId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sharedPost?: boolean | Message$sharedPostArgs<ExtArgs>
    reactions?: boolean | Message$reactionsArgs<ExtArgs>
    notification?: boolean | Message$notificationArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    media?: boolean
    createdAt?: boolean
    senderId?: boolean
    receiverId?: boolean
    conversationId?: boolean
    seen?: boolean
    delivered?: boolean
    sharedPostId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sharedPost?: boolean | Message$sharedPostArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    media?: boolean
    createdAt?: boolean
    senderId?: boolean
    receiverId?: boolean
    conversationId?: boolean
    seen?: boolean
    delivered?: boolean
    sharedPostId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sharedPost?: boolean | Message$sharedPostArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    body?: boolean
    media?: boolean
    createdAt?: boolean
    senderId?: boolean
    receiverId?: boolean
    conversationId?: boolean
    seen?: boolean
    delivered?: boolean
    sharedPostId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "body" | "media" | "createdAt" | "senderId" | "receiverId" | "conversationId" | "seen" | "delivered" | "sharedPostId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sharedPost?: boolean | Message$sharedPostArgs<ExtArgs>
    reactions?: boolean | Message$reactionsArgs<ExtArgs>
    notification?: boolean | Message$notificationArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sharedPost?: boolean | Message$sharedPostArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sharedPost?: boolean | Message$sharedPostArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
      conversation: Prisma.$ConversationPayload<ExtArgs>
      sharedPost: Prisma.$PostPayload<ExtArgs> | null
      reactions: Prisma.$MessageReactionPayload<ExtArgs>[]
      notification: Prisma.$NotificationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      body: string | null
      media: string | null
      createdAt: Date
      senderId: string
      receiverId: string
      conversationId: string
      seen: boolean
      delivered: boolean
      sharedPostId: string | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sharedPost<T extends Message$sharedPostArgs<ExtArgs> = {}>(args?: Subset<T, Message$sharedPostArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reactions<T extends Message$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, Message$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notification<T extends Message$notificationArgs<ExtArgs> = {}>(args?: Subset<T, Message$notificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly body: FieldRef<"Message", 'String'>
    readonly media: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly receiverId: FieldRef<"Message", 'String'>
    readonly conversationId: FieldRef<"Message", 'String'>
    readonly seen: FieldRef<"Message", 'Boolean'>
    readonly delivered: FieldRef<"Message", 'Boolean'>
    readonly sharedPostId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.sharedPost
   */
  export type Message$sharedPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * Message.reactions
   */
  export type Message$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    where?: MessageReactionWhereInput
    orderBy?: MessageReactionOrderByWithRelationInput | MessageReactionOrderByWithRelationInput[]
    cursor?: MessageReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageReactionScalarFieldEnum | MessageReactionScalarFieldEnum[]
  }

  /**
   * Message.notification
   */
  export type Message$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model MessageReaction
   */

  export type AggregateMessageReaction = {
    _count: MessageReactionCountAggregateOutputType | null
    _min: MessageReactionMinAggregateOutputType | null
    _max: MessageReactionMaxAggregateOutputType | null
  }

  export type MessageReactionMinAggregateOutputType = {
    id: string | null
    emoji: string | null
    createdAt: Date | null
    messageId: string | null
    userId: string | null
  }

  export type MessageReactionMaxAggregateOutputType = {
    id: string | null
    emoji: string | null
    createdAt: Date | null
    messageId: string | null
    userId: string | null
  }

  export type MessageReactionCountAggregateOutputType = {
    id: number
    emoji: number
    createdAt: number
    messageId: number
    userId: number
    _all: number
  }


  export type MessageReactionMinAggregateInputType = {
    id?: true
    emoji?: true
    createdAt?: true
    messageId?: true
    userId?: true
  }

  export type MessageReactionMaxAggregateInputType = {
    id?: true
    emoji?: true
    createdAt?: true
    messageId?: true
    userId?: true
  }

  export type MessageReactionCountAggregateInputType = {
    id?: true
    emoji?: true
    createdAt?: true
    messageId?: true
    userId?: true
    _all?: true
  }

  export type MessageReactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageReaction to aggregate.
     */
    where?: MessageReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReactions to fetch.
     */
    orderBy?: MessageReactionOrderByWithRelationInput | MessageReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageReactions
    **/
    _count?: true | MessageReactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageReactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageReactionMaxAggregateInputType
  }

  export type GetMessageReactionAggregateType<T extends MessageReactionAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageReaction[P]>
      : GetScalarType<T[P], AggregateMessageReaction[P]>
  }




  export type MessageReactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageReactionWhereInput
    orderBy?: MessageReactionOrderByWithAggregationInput | MessageReactionOrderByWithAggregationInput[]
    by: MessageReactionScalarFieldEnum[] | MessageReactionScalarFieldEnum
    having?: MessageReactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageReactionCountAggregateInputType | true
    _min?: MessageReactionMinAggregateInputType
    _max?: MessageReactionMaxAggregateInputType
  }

  export type MessageReactionGroupByOutputType = {
    id: string
    emoji: string
    createdAt: Date
    messageId: string
    userId: string
    _count: MessageReactionCountAggregateOutputType | null
    _min: MessageReactionMinAggregateOutputType | null
    _max: MessageReactionMaxAggregateOutputType | null
  }

  type GetMessageReactionGroupByPayload<T extends MessageReactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageReactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageReactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageReactionGroupByOutputType[P]>
            : GetScalarType<T[P], MessageReactionGroupByOutputType[P]>
        }
      >
    >


  export type MessageReactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emoji?: boolean
    createdAt?: boolean
    messageId?: boolean
    userId?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageReaction"]>

  export type MessageReactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emoji?: boolean
    createdAt?: boolean
    messageId?: boolean
    userId?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageReaction"]>

  export type MessageReactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emoji?: boolean
    createdAt?: boolean
    messageId?: boolean
    userId?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageReaction"]>

  export type MessageReactionSelectScalar = {
    id?: boolean
    emoji?: boolean
    createdAt?: boolean
    messageId?: boolean
    userId?: boolean
  }

  export type MessageReactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "emoji" | "createdAt" | "messageId" | "userId", ExtArgs["result"]["messageReaction"]>
  export type MessageReactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageReactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageReactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessageReactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageReaction"
    objects: {
      message: Prisma.$MessagePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      emoji: string
      createdAt: Date
      messageId: string
      userId: string
    }, ExtArgs["result"]["messageReaction"]>
    composites: {}
  }

  type MessageReactionGetPayload<S extends boolean | null | undefined | MessageReactionDefaultArgs> = $Result.GetResult<Prisma.$MessageReactionPayload, S>

  type MessageReactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageReactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageReactionCountAggregateInputType | true
    }

  export interface MessageReactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageReaction'], meta: { name: 'MessageReaction' } }
    /**
     * Find zero or one MessageReaction that matches the filter.
     * @param {MessageReactionFindUniqueArgs} args - Arguments to find a MessageReaction
     * @example
     * // Get one MessageReaction
     * const messageReaction = await prisma.messageReaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageReactionFindUniqueArgs>(args: SelectSubset<T, MessageReactionFindUniqueArgs<ExtArgs>>): Prisma__MessageReactionClient<$Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageReaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageReactionFindUniqueOrThrowArgs} args - Arguments to find a MessageReaction
     * @example
     * // Get one MessageReaction
     * const messageReaction = await prisma.messageReaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageReactionFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageReactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageReactionClient<$Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageReaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionFindFirstArgs} args - Arguments to find a MessageReaction
     * @example
     * // Get one MessageReaction
     * const messageReaction = await prisma.messageReaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageReactionFindFirstArgs>(args?: SelectSubset<T, MessageReactionFindFirstArgs<ExtArgs>>): Prisma__MessageReactionClient<$Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageReaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionFindFirstOrThrowArgs} args - Arguments to find a MessageReaction
     * @example
     * // Get one MessageReaction
     * const messageReaction = await prisma.messageReaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageReactionFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageReactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageReactionClient<$Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageReactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageReactions
     * const messageReactions = await prisma.messageReaction.findMany()
     * 
     * // Get first 10 MessageReactions
     * const messageReactions = await prisma.messageReaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageReactionWithIdOnly = await prisma.messageReaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageReactionFindManyArgs>(args?: SelectSubset<T, MessageReactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageReaction.
     * @param {MessageReactionCreateArgs} args - Arguments to create a MessageReaction.
     * @example
     * // Create one MessageReaction
     * const MessageReaction = await prisma.messageReaction.create({
     *   data: {
     *     // ... data to create a MessageReaction
     *   }
     * })
     * 
     */
    create<T extends MessageReactionCreateArgs>(args: SelectSubset<T, MessageReactionCreateArgs<ExtArgs>>): Prisma__MessageReactionClient<$Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageReactions.
     * @param {MessageReactionCreateManyArgs} args - Arguments to create many MessageReactions.
     * @example
     * // Create many MessageReactions
     * const messageReaction = await prisma.messageReaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageReactionCreateManyArgs>(args?: SelectSubset<T, MessageReactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageReactions and returns the data saved in the database.
     * @param {MessageReactionCreateManyAndReturnArgs} args - Arguments to create many MessageReactions.
     * @example
     * // Create many MessageReactions
     * const messageReaction = await prisma.messageReaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageReactions and only return the `id`
     * const messageReactionWithIdOnly = await prisma.messageReaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageReactionCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageReactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageReaction.
     * @param {MessageReactionDeleteArgs} args - Arguments to delete one MessageReaction.
     * @example
     * // Delete one MessageReaction
     * const MessageReaction = await prisma.messageReaction.delete({
     *   where: {
     *     // ... filter to delete one MessageReaction
     *   }
     * })
     * 
     */
    delete<T extends MessageReactionDeleteArgs>(args: SelectSubset<T, MessageReactionDeleteArgs<ExtArgs>>): Prisma__MessageReactionClient<$Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageReaction.
     * @param {MessageReactionUpdateArgs} args - Arguments to update one MessageReaction.
     * @example
     * // Update one MessageReaction
     * const messageReaction = await prisma.messageReaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageReactionUpdateArgs>(args: SelectSubset<T, MessageReactionUpdateArgs<ExtArgs>>): Prisma__MessageReactionClient<$Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageReactions.
     * @param {MessageReactionDeleteManyArgs} args - Arguments to filter MessageReactions to delete.
     * @example
     * // Delete a few MessageReactions
     * const { count } = await prisma.messageReaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageReactionDeleteManyArgs>(args?: SelectSubset<T, MessageReactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageReactions
     * const messageReaction = await prisma.messageReaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageReactionUpdateManyArgs>(args: SelectSubset<T, MessageReactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageReactions and returns the data updated in the database.
     * @param {MessageReactionUpdateManyAndReturnArgs} args - Arguments to update many MessageReactions.
     * @example
     * // Update many MessageReactions
     * const messageReaction = await prisma.messageReaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageReactions and only return the `id`
     * const messageReactionWithIdOnly = await prisma.messageReaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageReactionUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageReactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageReaction.
     * @param {MessageReactionUpsertArgs} args - Arguments to update or create a MessageReaction.
     * @example
     * // Update or create a MessageReaction
     * const messageReaction = await prisma.messageReaction.upsert({
     *   create: {
     *     // ... data to create a MessageReaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageReaction we want to update
     *   }
     * })
     */
    upsert<T extends MessageReactionUpsertArgs>(args: SelectSubset<T, MessageReactionUpsertArgs<ExtArgs>>): Prisma__MessageReactionClient<$Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionCountArgs} args - Arguments to filter MessageReactions to count.
     * @example
     * // Count the number of MessageReactions
     * const count = await prisma.messageReaction.count({
     *   where: {
     *     // ... the filter for the MessageReactions we want to count
     *   }
     * })
    **/
    count<T extends MessageReactionCountArgs>(
      args?: Subset<T, MessageReactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageReactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageReaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageReactionAggregateArgs>(args: Subset<T, MessageReactionAggregateArgs>): Prisma.PrismaPromise<GetMessageReactionAggregateType<T>>

    /**
     * Group by MessageReaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionGroupByArgs} args - Group by arguments.
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
      T extends MessageReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageReactionGroupByArgs['orderBy'] }
        : { orderBy?: MessageReactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageReactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageReaction model
   */
  readonly fields: MessageReactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageReaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageReactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MessageReaction model
   */
  interface MessageReactionFieldRefs {
    readonly id: FieldRef<"MessageReaction", 'String'>
    readonly emoji: FieldRef<"MessageReaction", 'String'>
    readonly createdAt: FieldRef<"MessageReaction", 'DateTime'>
    readonly messageId: FieldRef<"MessageReaction", 'String'>
    readonly userId: FieldRef<"MessageReaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MessageReaction findUnique
   */
  export type MessageReactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    /**
     * Filter, which MessageReaction to fetch.
     */
    where: MessageReactionWhereUniqueInput
  }

  /**
   * MessageReaction findUniqueOrThrow
   */
  export type MessageReactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    /**
     * Filter, which MessageReaction to fetch.
     */
    where: MessageReactionWhereUniqueInput
  }

  /**
   * MessageReaction findFirst
   */
  export type MessageReactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    /**
     * Filter, which MessageReaction to fetch.
     */
    where?: MessageReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReactions to fetch.
     */
    orderBy?: MessageReactionOrderByWithRelationInput | MessageReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageReactions.
     */
    cursor?: MessageReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageReactions.
     */
    distinct?: MessageReactionScalarFieldEnum | MessageReactionScalarFieldEnum[]
  }

  /**
   * MessageReaction findFirstOrThrow
   */
  export type MessageReactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    /**
     * Filter, which MessageReaction to fetch.
     */
    where?: MessageReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReactions to fetch.
     */
    orderBy?: MessageReactionOrderByWithRelationInput | MessageReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageReactions.
     */
    cursor?: MessageReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageReactions.
     */
    distinct?: MessageReactionScalarFieldEnum | MessageReactionScalarFieldEnum[]
  }

  /**
   * MessageReaction findMany
   */
  export type MessageReactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    /**
     * Filter, which MessageReactions to fetch.
     */
    where?: MessageReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReactions to fetch.
     */
    orderBy?: MessageReactionOrderByWithRelationInput | MessageReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageReactions.
     */
    cursor?: MessageReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReactions.
     */
    skip?: number
    distinct?: MessageReactionScalarFieldEnum | MessageReactionScalarFieldEnum[]
  }

  /**
   * MessageReaction create
   */
  export type MessageReactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageReaction.
     */
    data: XOR<MessageReactionCreateInput, MessageReactionUncheckedCreateInput>
  }

  /**
   * MessageReaction createMany
   */
  export type MessageReactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageReactions.
     */
    data: MessageReactionCreateManyInput | MessageReactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageReaction createManyAndReturn
   */
  export type MessageReactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * The data used to create many MessageReactions.
     */
    data: MessageReactionCreateManyInput | MessageReactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageReaction update
   */
  export type MessageReactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageReaction.
     */
    data: XOR<MessageReactionUpdateInput, MessageReactionUncheckedUpdateInput>
    /**
     * Choose, which MessageReaction to update.
     */
    where: MessageReactionWhereUniqueInput
  }

  /**
   * MessageReaction updateMany
   */
  export type MessageReactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageReactions.
     */
    data: XOR<MessageReactionUpdateManyMutationInput, MessageReactionUncheckedUpdateManyInput>
    /**
     * Filter which MessageReactions to update
     */
    where?: MessageReactionWhereInput
    /**
     * Limit how many MessageReactions to update.
     */
    limit?: number
  }

  /**
   * MessageReaction updateManyAndReturn
   */
  export type MessageReactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * The data used to update MessageReactions.
     */
    data: XOR<MessageReactionUpdateManyMutationInput, MessageReactionUncheckedUpdateManyInput>
    /**
     * Filter which MessageReactions to update
     */
    where?: MessageReactionWhereInput
    /**
     * Limit how many MessageReactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageReaction upsert
   */
  export type MessageReactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageReaction to update in case it exists.
     */
    where: MessageReactionWhereUniqueInput
    /**
     * In case the MessageReaction found by the `where` argument doesn't exist, create a new MessageReaction with this data.
     */
    create: XOR<MessageReactionCreateInput, MessageReactionUncheckedCreateInput>
    /**
     * In case the MessageReaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageReactionUpdateInput, MessageReactionUncheckedUpdateInput>
  }

  /**
   * MessageReaction delete
   */
  export type MessageReactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    /**
     * Filter which MessageReaction to delete.
     */
    where: MessageReactionWhereUniqueInput
  }

  /**
   * MessageReaction deleteMany
   */
  export type MessageReactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageReactions to delete
     */
    where?: MessageReactionWhereInput
    /**
     * Limit how many MessageReactions to delete.
     */
    limit?: number
  }

  /**
   * MessageReaction without action
   */
  export type MessageReactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
  }


  /**
   * Model Notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: string | null
    body: string | null
    createdAt: Date | null
    markRead: boolean | null
    userId: string | null
    senderId: string | null
    postId: string | null
    commentId: string | null
    messageId: string | null
    type: $Enums.CommentType | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: string | null
    body: string | null
    createdAt: Date | null
    markRead: boolean | null
    userId: string | null
    senderId: string | null
    postId: string | null
    commentId: string | null
    messageId: string | null
    type: $Enums.CommentType | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    body: number
    createdAt: number
    markRead: number
    userId: number
    senderId: number
    postId: number
    commentId: number
    messageId: number
    type: number
    _all: number
  }


  export type NotificationsMinAggregateInputType = {
    id?: true
    body?: true
    createdAt?: true
    markRead?: true
    userId?: true
    senderId?: true
    postId?: true
    commentId?: true
    messageId?: true
    type?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    body?: true
    createdAt?: true
    markRead?: true
    userId?: true
    senderId?: true
    postId?: true
    commentId?: true
    messageId?: true
    type?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    body?: true
    createdAt?: true
    markRead?: true
    userId?: true
    senderId?: true
    postId?: true
    commentId?: true
    messageId?: true
    type?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to aggregate.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type NotificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithAggregationInput | NotificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: NotificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: string
    body: string
    createdAt: Date
    markRead: boolean | null
    userId: string
    senderId: string | null
    postId: string | null
    commentId: string | null
    messageId: string | null
    type: $Enums.CommentType
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends NotificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type NotificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    createdAt?: boolean
    markRead?: boolean
    userId?: boolean
    senderId?: boolean
    postId?: boolean
    commentId?: boolean
    messageId?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | Notifications$senderArgs<ExtArgs>
    post?: boolean | Notifications$postArgs<ExtArgs>
    comment?: boolean | Notifications$commentArgs<ExtArgs>
    message?: boolean | Notifications$messageArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    createdAt?: boolean
    markRead?: boolean
    userId?: boolean
    senderId?: boolean
    postId?: boolean
    commentId?: boolean
    messageId?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | Notifications$senderArgs<ExtArgs>
    post?: boolean | Notifications$postArgs<ExtArgs>
    comment?: boolean | Notifications$commentArgs<ExtArgs>
    message?: boolean | Notifications$messageArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    createdAt?: boolean
    markRead?: boolean
    userId?: boolean
    senderId?: boolean
    postId?: boolean
    commentId?: boolean
    messageId?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | Notifications$senderArgs<ExtArgs>
    post?: boolean | Notifications$postArgs<ExtArgs>
    comment?: boolean | Notifications$commentArgs<ExtArgs>
    message?: boolean | Notifications$messageArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectScalar = {
    id?: boolean
    body?: boolean
    createdAt?: boolean
    markRead?: boolean
    userId?: boolean
    senderId?: boolean
    postId?: boolean
    commentId?: boolean
    messageId?: boolean
    type?: boolean
  }

  export type NotificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "body" | "createdAt" | "markRead" | "userId" | "senderId" | "postId" | "commentId" | "messageId" | "type", ExtArgs["result"]["notifications"]>
  export type NotificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | Notifications$senderArgs<ExtArgs>
    post?: boolean | Notifications$postArgs<ExtArgs>
    comment?: boolean | Notifications$commentArgs<ExtArgs>
    message?: boolean | Notifications$messageArgs<ExtArgs>
  }
  export type NotificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | Notifications$senderArgs<ExtArgs>
    post?: boolean | Notifications$postArgs<ExtArgs>
    comment?: boolean | Notifications$commentArgs<ExtArgs>
    message?: boolean | Notifications$messageArgs<ExtArgs>
  }
  export type NotificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | Notifications$senderArgs<ExtArgs>
    post?: boolean | Notifications$postArgs<ExtArgs>
    comment?: boolean | Notifications$commentArgs<ExtArgs>
    message?: boolean | Notifications$messageArgs<ExtArgs>
  }

  export type $NotificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notifications"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs> | null
      post: Prisma.$PostPayload<ExtArgs> | null
      comment: Prisma.$CommentsPayload<ExtArgs> | null
      message: Prisma.$MessagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      body: string
      createdAt: Date
      markRead: boolean | null
      userId: string
      senderId: string | null
      postId: string | null
      commentId: string | null
      messageId: string | null
      type: $Enums.CommentType
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type NotificationsGetPayload<S extends boolean | null | undefined | NotificationsDefaultArgs> = $Result.GetResult<Prisma.$NotificationsPayload, S>

  type NotificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface NotificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notifications'], meta: { name: 'Notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {NotificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationsFindUniqueArgs>(args: SelectSubset<T, NotificationsFindUniqueArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationsFindFirstArgs>(args?: SelectSubset<T, NotificationsFindFirstArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationsFindManyArgs>(args?: SelectSubset<T, NotificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {NotificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends NotificationsCreateArgs>(args: SelectSubset<T, NotificationsCreateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationsCreateManyArgs>(args?: SelectSubset<T, NotificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {NotificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends NotificationsDeleteArgs>(args: SelectSubset<T, NotificationsDeleteArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {NotificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationsUpdateArgs>(args: SelectSubset<T, NotificationsUpdateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationsDeleteManyArgs>(args?: SelectSubset<T, NotificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationsUpdateManyArgs>(args: SelectSubset<T, NotificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {NotificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends NotificationsUpsertArgs>(args: SelectSubset<T, NotificationsUpsertArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationsCountArgs>(
      args?: Subset<T, NotificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsGroupByArgs} args - Group by arguments.
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
      T extends NotificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notifications model
   */
  readonly fields: NotificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends Notifications$senderArgs<ExtArgs> = {}>(args?: Subset<T, Notifications$senderArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    post<T extends Notifications$postArgs<ExtArgs> = {}>(args?: Subset<T, Notifications$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comment<T extends Notifications$commentArgs<ExtArgs> = {}>(args?: Subset<T, Notifications$commentArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    message<T extends Notifications$messageArgs<ExtArgs> = {}>(args?: Subset<T, Notifications$messageArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notifications model
   */
  interface NotificationsFieldRefs {
    readonly id: FieldRef<"Notifications", 'String'>
    readonly body: FieldRef<"Notifications", 'String'>
    readonly createdAt: FieldRef<"Notifications", 'DateTime'>
    readonly markRead: FieldRef<"Notifications", 'Boolean'>
    readonly userId: FieldRef<"Notifications", 'String'>
    readonly senderId: FieldRef<"Notifications", 'String'>
    readonly postId: FieldRef<"Notifications", 'String'>
    readonly commentId: FieldRef<"Notifications", 'String'>
    readonly messageId: FieldRef<"Notifications", 'String'>
    readonly type: FieldRef<"Notifications", 'CommentType'>
  }
    

  // Custom InputTypes
  /**
   * Notifications findUnique
   */
  export type NotificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findUniqueOrThrow
   */
  export type NotificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findFirst
   */
  export type NotificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findFirstOrThrow
   */
  export type NotificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findMany
   */
  export type NotificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications create
   */
  export type NotificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Notifications.
     */
    data: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
  }

  /**
   * Notifications createMany
   */
  export type NotificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notifications createManyAndReturn
   */
  export type NotificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications update
   */
  export type NotificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Notifications.
     */
    data: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
    /**
     * Choose, which Notifications to update.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications updateMany
   */
  export type NotificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notifications updateManyAndReturn
   */
  export type NotificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications upsert
   */
  export type NotificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Notifications to update in case it exists.
     */
    where: NotificationsWhereUniqueInput
    /**
     * In case the Notifications found by the `where` argument doesn't exist, create a new Notifications with this data.
     */
    create: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
    /**
     * In case the Notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
  }

  /**
   * Notifications delete
   */
  export type NotificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter which Notifications to delete.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications deleteMany
   */
  export type NotificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notifications.sender
   */
  export type Notifications$senderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Notifications.post
   */
  export type Notifications$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * Notifications.comment
   */
  export type Notifications$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
  }

  /**
   * Notifications.message
   */
  export type Notifications$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
  }

  /**
   * Notifications without action
   */
  export type NotificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
  }


  /**
   * Model SharedPost
   */

  export type AggregateSharedPost = {
    _count: SharedPostCountAggregateOutputType | null
    _min: SharedPostMinAggregateOutputType | null
    _max: SharedPostMaxAggregateOutputType | null
  }

  export type SharedPostMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    postId: string | null
    sharedById: string | null
    sharedToId: string | null
  }

  export type SharedPostMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    postId: string | null
    sharedById: string | null
    sharedToId: string | null
  }

  export type SharedPostCountAggregateOutputType = {
    id: number
    createdAt: number
    postId: number
    sharedById: number
    sharedToId: number
    _all: number
  }


  export type SharedPostMinAggregateInputType = {
    id?: true
    createdAt?: true
    postId?: true
    sharedById?: true
    sharedToId?: true
  }

  export type SharedPostMaxAggregateInputType = {
    id?: true
    createdAt?: true
    postId?: true
    sharedById?: true
    sharedToId?: true
  }

  export type SharedPostCountAggregateInputType = {
    id?: true
    createdAt?: true
    postId?: true
    sharedById?: true
    sharedToId?: true
    _all?: true
  }

  export type SharedPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedPost to aggregate.
     */
    where?: SharedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedPosts to fetch.
     */
    orderBy?: SharedPostOrderByWithRelationInput | SharedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SharedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SharedPosts
    **/
    _count?: true | SharedPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SharedPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SharedPostMaxAggregateInputType
  }

  export type GetSharedPostAggregateType<T extends SharedPostAggregateArgs> = {
        [P in keyof T & keyof AggregateSharedPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSharedPost[P]>
      : GetScalarType<T[P], AggregateSharedPost[P]>
  }




  export type SharedPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedPostWhereInput
    orderBy?: SharedPostOrderByWithAggregationInput | SharedPostOrderByWithAggregationInput[]
    by: SharedPostScalarFieldEnum[] | SharedPostScalarFieldEnum
    having?: SharedPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SharedPostCountAggregateInputType | true
    _min?: SharedPostMinAggregateInputType
    _max?: SharedPostMaxAggregateInputType
  }

  export type SharedPostGroupByOutputType = {
    id: string
    createdAt: Date
    postId: string
    sharedById: string
    sharedToId: string
    _count: SharedPostCountAggregateOutputType | null
    _min: SharedPostMinAggregateOutputType | null
    _max: SharedPostMaxAggregateOutputType | null
  }

  type GetSharedPostGroupByPayload<T extends SharedPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SharedPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SharedPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharedPostGroupByOutputType[P]>
            : GetScalarType<T[P], SharedPostGroupByOutputType[P]>
        }
      >
    >


  export type SharedPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    postId?: boolean
    sharedById?: boolean
    sharedToId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    sharedBy?: boolean | UserDefaultArgs<ExtArgs>
    sharedTo?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedPost"]>

  export type SharedPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    postId?: boolean
    sharedById?: boolean
    sharedToId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    sharedBy?: boolean | UserDefaultArgs<ExtArgs>
    sharedTo?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedPost"]>

  export type SharedPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    postId?: boolean
    sharedById?: boolean
    sharedToId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    sharedBy?: boolean | UserDefaultArgs<ExtArgs>
    sharedTo?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedPost"]>

  export type SharedPostSelectScalar = {
    id?: boolean
    createdAt?: boolean
    postId?: boolean
    sharedById?: boolean
    sharedToId?: boolean
  }

  export type SharedPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "postId" | "sharedById" | "sharedToId", ExtArgs["result"]["sharedPost"]>
  export type SharedPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    sharedBy?: boolean | UserDefaultArgs<ExtArgs>
    sharedTo?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SharedPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    sharedBy?: boolean | UserDefaultArgs<ExtArgs>
    sharedTo?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SharedPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    sharedBy?: boolean | UserDefaultArgs<ExtArgs>
    sharedTo?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SharedPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SharedPost"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      sharedBy: Prisma.$UserPayload<ExtArgs>
      sharedTo: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      postId: string
      sharedById: string
      sharedToId: string
    }, ExtArgs["result"]["sharedPost"]>
    composites: {}
  }

  type SharedPostGetPayload<S extends boolean | null | undefined | SharedPostDefaultArgs> = $Result.GetResult<Prisma.$SharedPostPayload, S>

  type SharedPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SharedPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SharedPostCountAggregateInputType | true
    }

  export interface SharedPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SharedPost'], meta: { name: 'SharedPost' } }
    /**
     * Find zero or one SharedPost that matches the filter.
     * @param {SharedPostFindUniqueArgs} args - Arguments to find a SharedPost
     * @example
     * // Get one SharedPost
     * const sharedPost = await prisma.sharedPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SharedPostFindUniqueArgs>(args: SelectSubset<T, SharedPostFindUniqueArgs<ExtArgs>>): Prisma__SharedPostClient<$Result.GetResult<Prisma.$SharedPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SharedPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SharedPostFindUniqueOrThrowArgs} args - Arguments to find a SharedPost
     * @example
     * // Get one SharedPost
     * const sharedPost = await prisma.sharedPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SharedPostFindUniqueOrThrowArgs>(args: SelectSubset<T, SharedPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SharedPostClient<$Result.GetResult<Prisma.$SharedPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharedPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPostFindFirstArgs} args - Arguments to find a SharedPost
     * @example
     * // Get one SharedPost
     * const sharedPost = await prisma.sharedPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SharedPostFindFirstArgs>(args?: SelectSubset<T, SharedPostFindFirstArgs<ExtArgs>>): Prisma__SharedPostClient<$Result.GetResult<Prisma.$SharedPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharedPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPostFindFirstOrThrowArgs} args - Arguments to find a SharedPost
     * @example
     * // Get one SharedPost
     * const sharedPost = await prisma.sharedPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SharedPostFindFirstOrThrowArgs>(args?: SelectSubset<T, SharedPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__SharedPostClient<$Result.GetResult<Prisma.$SharedPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SharedPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SharedPosts
     * const sharedPosts = await prisma.sharedPost.findMany()
     * 
     * // Get first 10 SharedPosts
     * const sharedPosts = await prisma.sharedPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sharedPostWithIdOnly = await prisma.sharedPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SharedPostFindManyArgs>(args?: SelectSubset<T, SharedPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SharedPost.
     * @param {SharedPostCreateArgs} args - Arguments to create a SharedPost.
     * @example
     * // Create one SharedPost
     * const SharedPost = await prisma.sharedPost.create({
     *   data: {
     *     // ... data to create a SharedPost
     *   }
     * })
     * 
     */
    create<T extends SharedPostCreateArgs>(args: SelectSubset<T, SharedPostCreateArgs<ExtArgs>>): Prisma__SharedPostClient<$Result.GetResult<Prisma.$SharedPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SharedPosts.
     * @param {SharedPostCreateManyArgs} args - Arguments to create many SharedPosts.
     * @example
     * // Create many SharedPosts
     * const sharedPost = await prisma.sharedPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SharedPostCreateManyArgs>(args?: SelectSubset<T, SharedPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SharedPosts and returns the data saved in the database.
     * @param {SharedPostCreateManyAndReturnArgs} args - Arguments to create many SharedPosts.
     * @example
     * // Create many SharedPosts
     * const sharedPost = await prisma.sharedPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SharedPosts and only return the `id`
     * const sharedPostWithIdOnly = await prisma.sharedPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SharedPostCreateManyAndReturnArgs>(args?: SelectSubset<T, SharedPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SharedPost.
     * @param {SharedPostDeleteArgs} args - Arguments to delete one SharedPost.
     * @example
     * // Delete one SharedPost
     * const SharedPost = await prisma.sharedPost.delete({
     *   where: {
     *     // ... filter to delete one SharedPost
     *   }
     * })
     * 
     */
    delete<T extends SharedPostDeleteArgs>(args: SelectSubset<T, SharedPostDeleteArgs<ExtArgs>>): Prisma__SharedPostClient<$Result.GetResult<Prisma.$SharedPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SharedPost.
     * @param {SharedPostUpdateArgs} args - Arguments to update one SharedPost.
     * @example
     * // Update one SharedPost
     * const sharedPost = await prisma.sharedPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SharedPostUpdateArgs>(args: SelectSubset<T, SharedPostUpdateArgs<ExtArgs>>): Prisma__SharedPostClient<$Result.GetResult<Prisma.$SharedPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SharedPosts.
     * @param {SharedPostDeleteManyArgs} args - Arguments to filter SharedPosts to delete.
     * @example
     * // Delete a few SharedPosts
     * const { count } = await prisma.sharedPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SharedPostDeleteManyArgs>(args?: SelectSubset<T, SharedPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SharedPosts
     * const sharedPost = await prisma.sharedPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SharedPostUpdateManyArgs>(args: SelectSubset<T, SharedPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedPosts and returns the data updated in the database.
     * @param {SharedPostUpdateManyAndReturnArgs} args - Arguments to update many SharedPosts.
     * @example
     * // Update many SharedPosts
     * const sharedPost = await prisma.sharedPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SharedPosts and only return the `id`
     * const sharedPostWithIdOnly = await prisma.sharedPost.updateManyAndReturn({
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
    updateManyAndReturn<T extends SharedPostUpdateManyAndReturnArgs>(args: SelectSubset<T, SharedPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SharedPost.
     * @param {SharedPostUpsertArgs} args - Arguments to update or create a SharedPost.
     * @example
     * // Update or create a SharedPost
     * const sharedPost = await prisma.sharedPost.upsert({
     *   create: {
     *     // ... data to create a SharedPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SharedPost we want to update
     *   }
     * })
     */
    upsert<T extends SharedPostUpsertArgs>(args: SelectSubset<T, SharedPostUpsertArgs<ExtArgs>>): Prisma__SharedPostClient<$Result.GetResult<Prisma.$SharedPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SharedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPostCountArgs} args - Arguments to filter SharedPosts to count.
     * @example
     * // Count the number of SharedPosts
     * const count = await prisma.sharedPost.count({
     *   where: {
     *     // ... the filter for the SharedPosts we want to count
     *   }
     * })
    **/
    count<T extends SharedPostCountArgs>(
      args?: Subset<T, SharedPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SharedPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SharedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SharedPostAggregateArgs>(args: Subset<T, SharedPostAggregateArgs>): Prisma.PrismaPromise<GetSharedPostAggregateType<T>>

    /**
     * Group by SharedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPostGroupByArgs} args - Group by arguments.
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
      T extends SharedPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SharedPostGroupByArgs['orderBy'] }
        : { orderBy?: SharedPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SharedPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSharedPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SharedPost model
   */
  readonly fields: SharedPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SharedPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SharedPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sharedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sharedTo<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SharedPost model
   */
  interface SharedPostFieldRefs {
    readonly id: FieldRef<"SharedPost", 'String'>
    readonly createdAt: FieldRef<"SharedPost", 'DateTime'>
    readonly postId: FieldRef<"SharedPost", 'String'>
    readonly sharedById: FieldRef<"SharedPost", 'String'>
    readonly sharedToId: FieldRef<"SharedPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SharedPost findUnique
   */
  export type SharedPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPost
     */
    select?: SharedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPost
     */
    omit?: SharedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostInclude<ExtArgs> | null
    /**
     * Filter, which SharedPost to fetch.
     */
    where: SharedPostWhereUniqueInput
  }

  /**
   * SharedPost findUniqueOrThrow
   */
  export type SharedPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPost
     */
    select?: SharedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPost
     */
    omit?: SharedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostInclude<ExtArgs> | null
    /**
     * Filter, which SharedPost to fetch.
     */
    where: SharedPostWhereUniqueInput
  }

  /**
   * SharedPost findFirst
   */
  export type SharedPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPost
     */
    select?: SharedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPost
     */
    omit?: SharedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostInclude<ExtArgs> | null
    /**
     * Filter, which SharedPost to fetch.
     */
    where?: SharedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedPosts to fetch.
     */
    orderBy?: SharedPostOrderByWithRelationInput | SharedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedPosts.
     */
    cursor?: SharedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedPosts.
     */
    distinct?: SharedPostScalarFieldEnum | SharedPostScalarFieldEnum[]
  }

  /**
   * SharedPost findFirstOrThrow
   */
  export type SharedPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPost
     */
    select?: SharedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPost
     */
    omit?: SharedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostInclude<ExtArgs> | null
    /**
     * Filter, which SharedPost to fetch.
     */
    where?: SharedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedPosts to fetch.
     */
    orderBy?: SharedPostOrderByWithRelationInput | SharedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedPosts.
     */
    cursor?: SharedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedPosts.
     */
    distinct?: SharedPostScalarFieldEnum | SharedPostScalarFieldEnum[]
  }

  /**
   * SharedPost findMany
   */
  export type SharedPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPost
     */
    select?: SharedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPost
     */
    omit?: SharedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostInclude<ExtArgs> | null
    /**
     * Filter, which SharedPosts to fetch.
     */
    where?: SharedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedPosts to fetch.
     */
    orderBy?: SharedPostOrderByWithRelationInput | SharedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SharedPosts.
     */
    cursor?: SharedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedPosts.
     */
    skip?: number
    distinct?: SharedPostScalarFieldEnum | SharedPostScalarFieldEnum[]
  }

  /**
   * SharedPost create
   */
  export type SharedPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPost
     */
    select?: SharedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPost
     */
    omit?: SharedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostInclude<ExtArgs> | null
    /**
     * The data needed to create a SharedPost.
     */
    data: XOR<SharedPostCreateInput, SharedPostUncheckedCreateInput>
  }

  /**
   * SharedPost createMany
   */
  export type SharedPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SharedPosts.
     */
    data: SharedPostCreateManyInput | SharedPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SharedPost createManyAndReturn
   */
  export type SharedPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPost
     */
    select?: SharedPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPost
     */
    omit?: SharedPostOmit<ExtArgs> | null
    /**
     * The data used to create many SharedPosts.
     */
    data: SharedPostCreateManyInput | SharedPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SharedPost update
   */
  export type SharedPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPost
     */
    select?: SharedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPost
     */
    omit?: SharedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostInclude<ExtArgs> | null
    /**
     * The data needed to update a SharedPost.
     */
    data: XOR<SharedPostUpdateInput, SharedPostUncheckedUpdateInput>
    /**
     * Choose, which SharedPost to update.
     */
    where: SharedPostWhereUniqueInput
  }

  /**
   * SharedPost updateMany
   */
  export type SharedPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SharedPosts.
     */
    data: XOR<SharedPostUpdateManyMutationInput, SharedPostUncheckedUpdateManyInput>
    /**
     * Filter which SharedPosts to update
     */
    where?: SharedPostWhereInput
    /**
     * Limit how many SharedPosts to update.
     */
    limit?: number
  }

  /**
   * SharedPost updateManyAndReturn
   */
  export type SharedPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPost
     */
    select?: SharedPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPost
     */
    omit?: SharedPostOmit<ExtArgs> | null
    /**
     * The data used to update SharedPosts.
     */
    data: XOR<SharedPostUpdateManyMutationInput, SharedPostUncheckedUpdateManyInput>
    /**
     * Filter which SharedPosts to update
     */
    where?: SharedPostWhereInput
    /**
     * Limit how many SharedPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SharedPost upsert
   */
  export type SharedPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPost
     */
    select?: SharedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPost
     */
    omit?: SharedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostInclude<ExtArgs> | null
    /**
     * The filter to search for the SharedPost to update in case it exists.
     */
    where: SharedPostWhereUniqueInput
    /**
     * In case the SharedPost found by the `where` argument doesn't exist, create a new SharedPost with this data.
     */
    create: XOR<SharedPostCreateInput, SharedPostUncheckedCreateInput>
    /**
     * In case the SharedPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SharedPostUpdateInput, SharedPostUncheckedUpdateInput>
  }

  /**
   * SharedPost delete
   */
  export type SharedPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPost
     */
    select?: SharedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPost
     */
    omit?: SharedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostInclude<ExtArgs> | null
    /**
     * Filter which SharedPost to delete.
     */
    where: SharedPostWhereUniqueInput
  }

  /**
   * SharedPost deleteMany
   */
  export type SharedPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedPosts to delete
     */
    where?: SharedPostWhereInput
    /**
     * Limit how many SharedPosts to delete.
     */
    limit?: number
  }

  /**
   * SharedPost without action
   */
  export type SharedPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPost
     */
    select?: SharedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPost
     */
    omit?: SharedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostInclude<ExtArgs> | null
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
    name: 'name',
    userName: 'userName',
    email: 'email',
    emailVerified: 'emailVerified',
    bio: 'bio',
    image: 'image',
    hashedPassword: 'hashedPassword',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    followingIds: 'followingIds'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    caption: 'caption',
    postImage: 'postImage',
    type: 'type',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    body: 'body',
    createdAt: 'createdAt',
    postId: 'postId',
    userId: 'userId',
    parentId: 'parentId'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    lastMessageAt: 'lastMessageAt',
    user1Id: 'user1Id',
    user2Id: 'user2Id'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    body: 'body',
    media: 'media',
    createdAt: 'createdAt',
    senderId: 'senderId',
    receiverId: 'receiverId',
    conversationId: 'conversationId',
    seen: 'seen',
    delivered: 'delivered',
    sharedPostId: 'sharedPostId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const MessageReactionScalarFieldEnum: {
    id: 'id',
    emoji: 'emoji',
    createdAt: 'createdAt',
    messageId: 'messageId',
    userId: 'userId'
  };

  export type MessageReactionScalarFieldEnum = (typeof MessageReactionScalarFieldEnum)[keyof typeof MessageReactionScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    body: 'body',
    createdAt: 'createdAt',
    markRead: 'markRead',
    userId: 'userId',
    senderId: 'senderId',
    postId: 'postId',
    commentId: 'commentId',
    messageId: 'messageId',
    type: 'type'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const SharedPostScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    postId: 'postId',
    sharedById: 'sharedById',
    sharedToId: 'sharedToId'
  };

  export type SharedPostScalarFieldEnum = (typeof SharedPostScalarFieldEnum)[keyof typeof SharedPostScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'PostType'
   */
  export type EnumPostTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostType'>
    


  /**
   * Reference to a field of type 'PostType[]'
   */
  export type ListEnumPostTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'CommentType'
   */
  export type EnumCommentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommentType'>
    


  /**
   * Reference to a field of type 'CommentType[]'
   */
  export type ListEnumCommentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommentType[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    userName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    bio?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    followingIds?: StringNullableListFilter<"User">
    accounts?: AccountListRelationFilter
    posts?: PostListRelationFilter
    userComments?: CommentsListRelationFilter
    notifications?: NotificationsListRelationFilter
    sentNotifications?: NotificationsListRelationFilter
    likedPosts?: PostListRelationFilter
    likedComments?: CommentsListRelationFilter
    savedPosts?: PostListRelationFilter
    conversations1?: ConversationListRelationFilter
    conversations2?: ConversationListRelationFilter
    messages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    sharedPosts?: SharedPostListRelationFilter
    receivedShares?: SharedPostListRelationFilter
    messageReactions?: MessageReactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    userName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    followingIds?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    userComments?: CommentsOrderByRelationAggregateInput
    notifications?: NotificationsOrderByRelationAggregateInput
    sentNotifications?: NotificationsOrderByRelationAggregateInput
    likedPosts?: PostOrderByRelationAggregateInput
    likedComments?: CommentsOrderByRelationAggregateInput
    savedPosts?: PostOrderByRelationAggregateInput
    conversations1?: ConversationOrderByRelationAggregateInput
    conversations2?: ConversationOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    receivedMessages?: MessageOrderByRelationAggregateInput
    sharedPosts?: SharedPostOrderByRelationAggregateInput
    receivedShares?: SharedPostOrderByRelationAggregateInput
    messageReactions?: MessageReactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    userName?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    bio?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    followingIds?: StringNullableListFilter<"User">
    accounts?: AccountListRelationFilter
    posts?: PostListRelationFilter
    userComments?: CommentsListRelationFilter
    notifications?: NotificationsListRelationFilter
    sentNotifications?: NotificationsListRelationFilter
    likedPosts?: PostListRelationFilter
    likedComments?: CommentsListRelationFilter
    savedPosts?: PostListRelationFilter
    conversations1?: ConversationListRelationFilter
    conversations2?: ConversationListRelationFilter
    messages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    sharedPosts?: SharedPostListRelationFilter
    receivedShares?: SharedPostListRelationFilter
    messageReactions?: MessageReactionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    userName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    followingIds?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    userName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    hashedPassword?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    followingIds?: StringNullableListFilter<"User">
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringFilter<"Account"> | string
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringFilter<"Account"> | string
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringWithAggregatesFilter<"Account"> | string
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    caption?: StringNullableFilter<"Post"> | string | null
    postImage?: JsonNullableListFilter<"Post">
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType
    createdAt?: DateTimeFilter<"Post"> | Date | string
    userId?: StringFilter<"Post"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    postComments?: CommentsListRelationFilter
    likes?: UserListRelationFilter
    savedBy?: UserListRelationFilter
    notifications?: NotificationsListRelationFilter
    sharedPosts?: SharedPostListRelationFilter
    sharedMessages?: MessageListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    caption?: SortOrderInput | SortOrder
    postImage?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    postComments?: CommentsOrderByRelationAggregateInput
    likes?: UserOrderByRelationAggregateInput
    savedBy?: UserOrderByRelationAggregateInput
    notifications?: NotificationsOrderByRelationAggregateInput
    sharedPosts?: SharedPostOrderByRelationAggregateInput
    sharedMessages?: MessageOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    caption?: StringNullableFilter<"Post"> | string | null
    postImage?: JsonNullableListFilter<"Post">
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType
    createdAt?: DateTimeFilter<"Post"> | Date | string
    userId?: StringFilter<"Post"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    postComments?: CommentsListRelationFilter
    likes?: UserListRelationFilter
    savedBy?: UserListRelationFilter
    notifications?: NotificationsListRelationFilter
    sharedPosts?: SharedPostListRelationFilter
    sharedMessages?: MessageListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    caption?: SortOrderInput | SortOrder
    postImage?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    caption?: StringNullableWithAggregatesFilter<"Post"> | string | null
    postImage?: JsonNullableListFilter<"Post">
    type?: EnumPostTypeWithAggregatesFilter<"Post"> | $Enums.PostType
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    userId?: StringWithAggregatesFilter<"Post"> | string
  }

  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: StringFilter<"Comments"> | string
    body?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    postId?: StringFilter<"Comments"> | string
    userId?: StringFilter<"Comments"> | string
    parentId?: StringNullableFilter<"Comments"> | string | null
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<CommentsNullableScalarRelationFilter, CommentsWhereInput> | null
    replies?: CommentsListRelationFilter
    commentLikes?: UserListRelationFilter
    notifications?: NotificationsListRelationFilter
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    post?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    parent?: CommentsOrderByWithRelationInput
    replies?: CommentsOrderByRelationAggregateInput
    commentLikes?: UserOrderByRelationAggregateInput
    notifications?: NotificationsOrderByRelationAggregateInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    body?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    postId?: StringFilter<"Comments"> | string
    userId?: StringFilter<"Comments"> | string
    parentId?: StringNullableFilter<"Comments"> | string | null
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<CommentsNullableScalarRelationFilter, CommentsWhereInput> | null
    replies?: CommentsListRelationFilter
    commentLikes?: UserListRelationFilter
    notifications?: NotificationsListRelationFilter
  }, "id">

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comments"> | string
    body?: StringWithAggregatesFilter<"Comments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
    postId?: StringWithAggregatesFilter<"Comments"> | string
    userId?: StringWithAggregatesFilter<"Comments"> | string
    parentId?: StringNullableWithAggregatesFilter<"Comments"> | string | null
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: StringFilter<"Conversation"> | string
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    lastMessageAt?: DateTimeFilter<"Conversation"> | Date | string
    user1Id?: StringFilter<"Conversation"> | string
    user2Id?: StringFilter<"Conversation"> | string
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    lastMessageAt?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    user1?: UserOrderByWithRelationInput
    user2?: UserOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user1Id_user2Id?: ConversationUser1IdUser2IdCompoundUniqueInput
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    lastMessageAt?: DateTimeFilter<"Conversation"> | Date | string
    user1Id?: StringFilter<"Conversation"> | string
    user2Id?: StringFilter<"Conversation"> | string
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
  }, "id" | "user1Id_user2Id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    lastMessageAt?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conversation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    lastMessageAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    user1Id?: StringWithAggregatesFilter<"Conversation"> | string
    user2Id?: StringWithAggregatesFilter<"Conversation"> | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    body?: StringNullableFilter<"Message"> | string | null
    media?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    conversationId?: StringFilter<"Message"> | string
    seen?: BoolFilter<"Message"> | boolean
    delivered?: BoolFilter<"Message"> | boolean
    sharedPostId?: StringNullableFilter<"Message"> | string | null
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
    sharedPost?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    reactions?: MessageReactionListRelationFilter
    notification?: NotificationsListRelationFilter
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    body?: SortOrderInput | SortOrder
    media?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    conversationId?: SortOrder
    seen?: SortOrder
    delivered?: SortOrder
    sharedPostId?: SortOrderInput | SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    conversation?: ConversationOrderByWithRelationInput
    sharedPost?: PostOrderByWithRelationInput
    reactions?: MessageReactionOrderByRelationAggregateInput
    notification?: NotificationsOrderByRelationAggregateInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    body?: StringNullableFilter<"Message"> | string | null
    media?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    conversationId?: StringFilter<"Message"> | string
    seen?: BoolFilter<"Message"> | boolean
    delivered?: BoolFilter<"Message"> | boolean
    sharedPostId?: StringNullableFilter<"Message"> | string | null
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
    sharedPost?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    reactions?: MessageReactionListRelationFilter
    notification?: NotificationsListRelationFilter
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    body?: SortOrderInput | SortOrder
    media?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    conversationId?: SortOrder
    seen?: SortOrder
    delivered?: SortOrder
    sharedPostId?: SortOrderInput | SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    body?: StringNullableWithAggregatesFilter<"Message"> | string | null
    media?: StringNullableWithAggregatesFilter<"Message"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    receiverId?: StringWithAggregatesFilter<"Message"> | string
    conversationId?: StringWithAggregatesFilter<"Message"> | string
    seen?: BoolWithAggregatesFilter<"Message"> | boolean
    delivered?: BoolWithAggregatesFilter<"Message"> | boolean
    sharedPostId?: StringNullableWithAggregatesFilter<"Message"> | string | null
  }

  export type MessageReactionWhereInput = {
    AND?: MessageReactionWhereInput | MessageReactionWhereInput[]
    OR?: MessageReactionWhereInput[]
    NOT?: MessageReactionWhereInput | MessageReactionWhereInput[]
    id?: StringFilter<"MessageReaction"> | string
    emoji?: StringFilter<"MessageReaction"> | string
    createdAt?: DateTimeFilter<"MessageReaction"> | Date | string
    messageId?: StringFilter<"MessageReaction"> | string
    userId?: StringFilter<"MessageReaction"> | string
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageReactionOrderByWithRelationInput = {
    id?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    message?: MessageOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MessageReactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    messageId_userId?: MessageReactionMessageIdUserIdCompoundUniqueInput
    AND?: MessageReactionWhereInput | MessageReactionWhereInput[]
    OR?: MessageReactionWhereInput[]
    NOT?: MessageReactionWhereInput | MessageReactionWhereInput[]
    emoji?: StringFilter<"MessageReaction"> | string
    createdAt?: DateTimeFilter<"MessageReaction"> | Date | string
    messageId?: StringFilter<"MessageReaction"> | string
    userId?: StringFilter<"MessageReaction"> | string
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "messageId_userId">

  export type MessageReactionOrderByWithAggregationInput = {
    id?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    _count?: MessageReactionCountOrderByAggregateInput
    _max?: MessageReactionMaxOrderByAggregateInput
    _min?: MessageReactionMinOrderByAggregateInput
  }

  export type MessageReactionScalarWhereWithAggregatesInput = {
    AND?: MessageReactionScalarWhereWithAggregatesInput | MessageReactionScalarWhereWithAggregatesInput[]
    OR?: MessageReactionScalarWhereWithAggregatesInput[]
    NOT?: MessageReactionScalarWhereWithAggregatesInput | MessageReactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageReaction"> | string
    emoji?: StringWithAggregatesFilter<"MessageReaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MessageReaction"> | Date | string
    messageId?: StringWithAggregatesFilter<"MessageReaction"> | string
    userId?: StringWithAggregatesFilter<"MessageReaction"> | string
  }

  export type NotificationsWhereInput = {
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    id?: StringFilter<"Notifications"> | string
    body?: StringFilter<"Notifications"> | string
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    markRead?: BoolNullableFilter<"Notifications"> | boolean | null
    userId?: StringFilter<"Notifications"> | string
    senderId?: StringNullableFilter<"Notifications"> | string | null
    postId?: StringNullableFilter<"Notifications"> | string | null
    commentId?: StringNullableFilter<"Notifications"> | string | null
    messageId?: StringNullableFilter<"Notifications"> | string | null
    type?: EnumCommentTypeFilter<"Notifications"> | $Enums.CommentType
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    comment?: XOR<CommentsNullableScalarRelationFilter, CommentsWhereInput> | null
    message?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
  }

  export type NotificationsOrderByWithRelationInput = {
    id?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    markRead?: SortOrderInput | SortOrder
    userId?: SortOrder
    senderId?: SortOrderInput | SortOrder
    postId?: SortOrderInput | SortOrder
    commentId?: SortOrderInput | SortOrder
    messageId?: SortOrderInput | SortOrder
    type?: SortOrder
    user?: UserOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
    comment?: CommentsOrderByWithRelationInput
    message?: MessageOrderByWithRelationInput
  }

  export type NotificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    body?: StringFilter<"Notifications"> | string
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    markRead?: BoolNullableFilter<"Notifications"> | boolean | null
    userId?: StringFilter<"Notifications"> | string
    senderId?: StringNullableFilter<"Notifications"> | string | null
    postId?: StringNullableFilter<"Notifications"> | string | null
    commentId?: StringNullableFilter<"Notifications"> | string | null
    messageId?: StringNullableFilter<"Notifications"> | string | null
    type?: EnumCommentTypeFilter<"Notifications"> | $Enums.CommentType
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    comment?: XOR<CommentsNullableScalarRelationFilter, CommentsWhereInput> | null
    message?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
  }, "id">

  export type NotificationsOrderByWithAggregationInput = {
    id?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    markRead?: SortOrderInput | SortOrder
    userId?: SortOrder
    senderId?: SortOrderInput | SortOrder
    postId?: SortOrderInput | SortOrder
    commentId?: SortOrderInput | SortOrder
    messageId?: SortOrderInput | SortOrder
    type?: SortOrder
    _count?: NotificationsCountOrderByAggregateInput
    _max?: NotificationsMaxOrderByAggregateInput
    _min?: NotificationsMinOrderByAggregateInput
  }

  export type NotificationsScalarWhereWithAggregatesInput = {
    AND?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    OR?: NotificationsScalarWhereWithAggregatesInput[]
    NOT?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notifications"> | string
    body?: StringWithAggregatesFilter<"Notifications"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notifications"> | Date | string
    markRead?: BoolNullableWithAggregatesFilter<"Notifications"> | boolean | null
    userId?: StringWithAggregatesFilter<"Notifications"> | string
    senderId?: StringNullableWithAggregatesFilter<"Notifications"> | string | null
    postId?: StringNullableWithAggregatesFilter<"Notifications"> | string | null
    commentId?: StringNullableWithAggregatesFilter<"Notifications"> | string | null
    messageId?: StringNullableWithAggregatesFilter<"Notifications"> | string | null
    type?: EnumCommentTypeWithAggregatesFilter<"Notifications"> | $Enums.CommentType
  }

  export type SharedPostWhereInput = {
    AND?: SharedPostWhereInput | SharedPostWhereInput[]
    OR?: SharedPostWhereInput[]
    NOT?: SharedPostWhereInput | SharedPostWhereInput[]
    id?: StringFilter<"SharedPost"> | string
    createdAt?: DateTimeFilter<"SharedPost"> | Date | string
    postId?: StringFilter<"SharedPost"> | string
    sharedById?: StringFilter<"SharedPost"> | string
    sharedToId?: StringFilter<"SharedPost"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    sharedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    sharedTo?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SharedPostOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
    sharedById?: SortOrder
    sharedToId?: SortOrder
    post?: PostOrderByWithRelationInput
    sharedBy?: UserOrderByWithRelationInput
    sharedTo?: UserOrderByWithRelationInput
  }

  export type SharedPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId_sharedById_sharedToId?: SharedPostPostIdSharedByIdSharedToIdCompoundUniqueInput
    AND?: SharedPostWhereInput | SharedPostWhereInput[]
    OR?: SharedPostWhereInput[]
    NOT?: SharedPostWhereInput | SharedPostWhereInput[]
    createdAt?: DateTimeFilter<"SharedPost"> | Date | string
    postId?: StringFilter<"SharedPost"> | string
    sharedById?: StringFilter<"SharedPost"> | string
    sharedToId?: StringFilter<"SharedPost"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    sharedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    sharedTo?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "postId_sharedById_sharedToId">

  export type SharedPostOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
    sharedById?: SortOrder
    sharedToId?: SortOrder
    _count?: SharedPostCountOrderByAggregateInput
    _max?: SharedPostMaxOrderByAggregateInput
    _min?: SharedPostMinOrderByAggregateInput
  }

  export type SharedPostScalarWhereWithAggregatesInput = {
    AND?: SharedPostScalarWhereWithAggregatesInput | SharedPostScalarWhereWithAggregatesInput[]
    OR?: SharedPostScalarWhereWithAggregatesInput[]
    NOT?: SharedPostScalarWhereWithAggregatesInput | SharedPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SharedPost"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SharedPost"> | Date | string
    postId?: StringWithAggregatesFilter<"SharedPost"> | string
    sharedById?: StringWithAggregatesFilter<"SharedPost"> | string
    sharedToId?: StringWithAggregatesFilter<"SharedPost"> | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userComments?: CommentsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
    likedPosts?: PostCreateNestedManyWithoutLikesInput
    likedComments?: CommentsCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationCreateNestedManyWithoutUser1Input
    conversations2?: ConversationCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userComments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
    likedPosts?: PostUncheckedCreateNestedManyWithoutLikesInput
    likedComments?: CommentsUncheckedCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostUncheckedCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    conversations2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostUncheckedCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userComments?: CommentsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userComments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUncheckedUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUncheckedUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUncheckedUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUncheckedUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token: string
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token: string
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token: string
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateInput = {
    id?: string
    caption?: string | null
    postImage?: PostCreatepostImageInput | InputJsonValue[]
    type?: $Enums.PostType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    postComments?: CommentsCreateNestedManyWithoutPostInput
    likes?: UserCreateNestedManyWithoutLikedPostsInput
    savedBy?: UserCreateNestedManyWithoutSavedPostsInput
    notifications?: NotificationsCreateNestedManyWithoutPostInput
    sharedPosts?: SharedPostCreateNestedManyWithoutPostInput
    sharedMessages?: MessageCreateNestedManyWithoutSharedPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    caption?: string | null
    postImage?: PostCreatepostImageInput | InputJsonValue[]
    type?: $Enums.PostType
    createdAt?: Date | string
    userId: string
    postComments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    likes?: UserUncheckedCreateNestedManyWithoutLikedPostsInput
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedPostsInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutPostInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutPostInput
    sharedMessages?: MessageUncheckedCreateNestedManyWithoutSharedPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    postComments?: CommentsUpdateManyWithoutPostNestedInput
    likes?: UserUpdateManyWithoutLikedPostsNestedInput
    savedBy?: UserUpdateManyWithoutSavedPostsNestedInput
    notifications?: NotificationsUpdateManyWithoutPostNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutPostNestedInput
    sharedMessages?: MessageUpdateManyWithoutSharedPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postComments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    likes?: UserUncheckedUpdateManyWithoutLikedPostsNestedInput
    savedBy?: UserUncheckedUpdateManyWithoutSavedPostsNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutPostNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutPostNestedInput
    sharedMessages?: MessageUncheckedUpdateManyWithoutSharedPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    caption?: string | null
    postImage?: PostCreatepostImageInput | InputJsonValue[]
    type?: $Enums.PostType
    createdAt?: Date | string
    userId: string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsCreateInput = {
    id?: string
    body: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutPostCommentsInput
    user: UserCreateNestedOneWithoutUserCommentsInput
    parent?: CommentsCreateNestedOneWithoutRepliesInput
    replies?: CommentsCreateNestedManyWithoutParentInput
    commentLikes?: UserCreateNestedManyWithoutLikedCommentsInput
    notifications?: NotificationsCreateNestedManyWithoutCommentInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: string
    body: string
    createdAt?: Date | string
    postId: string
    userId: string
    parentId?: string | null
    replies?: CommentsUncheckedCreateNestedManyWithoutParentInput
    commentLikes?: UserUncheckedCreateNestedManyWithoutLikedCommentsInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPostCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutUserCommentsNestedInput
    parent?: CommentsUpdateOneWithoutRepliesNestedInput
    replies?: CommentsUpdateManyWithoutParentNestedInput
    commentLikes?: UserUpdateManyWithoutLikedCommentsNestedInput
    notifications?: NotificationsUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentsUncheckedUpdateManyWithoutParentNestedInput
    commentLikes?: UserUncheckedUpdateManyWithoutLikedCommentsNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentsCreateManyInput = {
    id?: string
    body: string
    createdAt?: Date | string
    postId: string
    userId: string
    parentId?: string | null
  }

  export type CommentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversationCreateInput = {
    id?: string
    createdAt?: Date | string
    lastMessageAt?: Date | string
    user1: UserCreateNestedOneWithoutConversations1Input
    user2: UserCreateNestedOneWithoutConversations2Input
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    lastMessageAt?: Date | string
    user1Id: string
    user2Id: string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutConversations1NestedInput
    user2?: UserUpdateOneRequiredWithoutConversations2NestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: string
    createdAt?: Date | string
    lastMessageAt?: Date | string
    user1Id: string
    user2Id: string
  }

  export type ConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateInput = {
    id?: string
    body?: string | null
    media?: string | null
    createdAt?: Date | string
    seen?: boolean
    delivered?: boolean
    sender: UserCreateNestedOneWithoutMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    conversation: ConversationCreateNestedOneWithoutMessagesInput
    sharedPost?: PostCreateNestedOneWithoutSharedMessagesInput
    reactions?: MessageReactionCreateNestedManyWithoutMessageInput
    notification?: NotificationsCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    body?: string | null
    media?: string | null
    createdAt?: Date | string
    senderId: string
    receiverId: string
    conversationId: string
    seen?: boolean
    delivered?: boolean
    sharedPostId?: string | null
    reactions?: MessageReactionUncheckedCreateNestedManyWithoutMessageInput
    notification?: NotificationsUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    delivered?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
    sharedPost?: PostUpdateOneWithoutSharedMessagesNestedInput
    reactions?: MessageReactionUpdateManyWithoutMessageNestedInput
    notification?: NotificationsUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    delivered?: BoolFieldUpdateOperationsInput | boolean
    sharedPostId?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: MessageReactionUncheckedUpdateManyWithoutMessageNestedInput
    notification?: NotificationsUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageCreateManyInput = {
    id?: string
    body?: string | null
    media?: string | null
    createdAt?: Date | string
    senderId: string
    receiverId: string
    conversationId: string
    seen?: boolean
    delivered?: boolean
    sharedPostId?: string | null
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    delivered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    delivered?: BoolFieldUpdateOperationsInput | boolean
    sharedPostId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageReactionCreateInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    message: MessageCreateNestedOneWithoutReactionsInput
    user: UserCreateNestedOneWithoutMessageReactionsInput
  }

  export type MessageReactionUncheckedCreateInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    messageId: string
    userId: string
  }

  export type MessageReactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutReactionsNestedInput
    user?: UserUpdateOneRequiredWithoutMessageReactionsNestedInput
  }

  export type MessageReactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageReactionCreateManyInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    messageId: string
    userId: string
  }

  export type MessageReactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageReactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationsCreateInput = {
    id?: string
    body: string
    createdAt?: Date | string
    markRead?: boolean | null
    type?: $Enums.CommentType
    user: UserCreateNestedOneWithoutNotificationsInput
    sender?: UserCreateNestedOneWithoutSentNotificationsInput
    post?: PostCreateNestedOneWithoutNotificationsInput
    comment?: CommentsCreateNestedOneWithoutNotificationsInput
    message?: MessageCreateNestedOneWithoutNotificationInput
  }

  export type NotificationsUncheckedCreateInput = {
    id?: string
    body: string
    createdAt?: Date | string
    markRead?: boolean | null
    userId: string
    senderId?: string | null
    postId?: string | null
    commentId?: string | null
    messageId?: string | null
    type?: $Enums.CommentType
  }

  export type NotificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: EnumCommentTypeFieldUpdateOperationsInput | $Enums.CommentType
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    sender?: UserUpdateOneWithoutSentNotificationsNestedInput
    post?: PostUpdateOneWithoutNotificationsNestedInput
    comment?: CommentsUpdateOneWithoutNotificationsNestedInput
    message?: MessageUpdateOneWithoutNotificationNestedInput
  }

  export type NotificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCommentTypeFieldUpdateOperationsInput | $Enums.CommentType
  }

  export type NotificationsCreateManyInput = {
    id?: string
    body: string
    createdAt?: Date | string
    markRead?: boolean | null
    userId: string
    senderId?: string | null
    postId?: string | null
    commentId?: string | null
    messageId?: string | null
    type?: $Enums.CommentType
  }

  export type NotificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: EnumCommentTypeFieldUpdateOperationsInput | $Enums.CommentType
  }

  export type NotificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCommentTypeFieldUpdateOperationsInput | $Enums.CommentType
  }

  export type SharedPostCreateInput = {
    id?: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutSharedPostsInput
    sharedBy: UserCreateNestedOneWithoutSharedPostsInput
    sharedTo: UserCreateNestedOneWithoutReceivedSharesInput
  }

  export type SharedPostUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    postId: string
    sharedById: string
    sharedToId: string
  }

  export type SharedPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutSharedPostsNestedInput
    sharedBy?: UserUpdateOneRequiredWithoutSharedPostsNestedInput
    sharedTo?: UserUpdateOneRequiredWithoutReceivedSharesNestedInput
  }

  export type SharedPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    sharedById?: StringFieldUpdateOperationsInput | string
    sharedToId?: StringFieldUpdateOperationsInput | string
  }

  export type SharedPostCreateManyInput = {
    id?: string
    createdAt?: Date | string
    postId: string
    sharedById: string
    sharedToId: string
  }

  export type SharedPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    sharedById?: StringFieldUpdateOperationsInput | string
    sharedToId?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: NotificationsWhereInput
    some?: NotificationsWhereInput
    none?: NotificationsWhereInput
  }

  export type ConversationListRelationFilter = {
    every?: ConversationWhereInput
    some?: ConversationWhereInput
    none?: ConversationWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type SharedPostListRelationFilter = {
    every?: SharedPostWhereInput
    some?: SharedPostWhereInput
    none?: SharedPostWhereInput
  }

  export type MessageReactionListRelationFilter = {
    every?: MessageReactionWhereInput
    some?: MessageReactionWhereInput
    none?: MessageReactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SharedPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageReactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    followingIds?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableListFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumPostTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostTypeFilter<$PrismaModel> | $Enums.PostType
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    caption?: SortOrder
    postImage?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    caption?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    caption?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumPostTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostTypeWithAggregatesFilter<$PrismaModel> | $Enums.PostType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostTypeFilter<$PrismaModel>
    _max?: NestedEnumPostTypeFilter<$PrismaModel>
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type CommentsNullableScalarRelationFilter = {
    is?: CommentsWhereInput | null
    isNot?: CommentsWhereInput | null
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
  }

  export type ConversationUser1IdUser2IdCompoundUniqueInput = {
    user1Id: string
    user2Id: string
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    lastMessageAt?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    lastMessageAt?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    lastMessageAt?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ConversationScalarRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    media?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    conversationId?: SortOrder
    seen?: SortOrder
    delivered?: SortOrder
    sharedPostId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    media?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    conversationId?: SortOrder
    seen?: SortOrder
    delivered?: SortOrder
    sharedPostId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    media?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    conversationId?: SortOrder
    seen?: SortOrder
    delivered?: SortOrder
    sharedPostId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MessageScalarRelationFilter = {
    is?: MessageWhereInput
    isNot?: MessageWhereInput
  }

  export type MessageReactionMessageIdUserIdCompoundUniqueInput = {
    messageId: string
    userId: string
  }

  export type MessageReactionCountOrderByAggregateInput = {
    id?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
  }

  export type MessageReactionMaxOrderByAggregateInput = {
    id?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
  }

  export type MessageReactionMinOrderByAggregateInput = {
    id?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumCommentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentType | EnumCommentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CommentType[] | ListEnumCommentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentType[] | ListEnumCommentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentTypeFilter<$PrismaModel> | $Enums.CommentType
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MessageNullableScalarRelationFilter = {
    is?: MessageWhereInput | null
    isNot?: MessageWhereInput | null
  }

  export type NotificationsCountOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    markRead?: SortOrder
    userId?: SortOrder
    senderId?: SortOrder
    postId?: SortOrder
    commentId?: SortOrder
    messageId?: SortOrder
    type?: SortOrder
  }

  export type NotificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    markRead?: SortOrder
    userId?: SortOrder
    senderId?: SortOrder
    postId?: SortOrder
    commentId?: SortOrder
    messageId?: SortOrder
    type?: SortOrder
  }

  export type NotificationsMinOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    markRead?: SortOrder
    userId?: SortOrder
    senderId?: SortOrder
    postId?: SortOrder
    commentId?: SortOrder
    messageId?: SortOrder
    type?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumCommentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentType | EnumCommentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CommentType[] | ListEnumCommentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentType[] | ListEnumCommentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentTypeWithAggregatesFilter<$PrismaModel> | $Enums.CommentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommentTypeFilter<$PrismaModel>
    _max?: NestedEnumCommentTypeFilter<$PrismaModel>
  }

  export type SharedPostPostIdSharedByIdSharedToIdCompoundUniqueInput = {
    postId: string
    sharedById: string
    sharedToId: string
  }

  export type SharedPostCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
    sharedById?: SortOrder
    sharedToId?: SortOrder
  }

  export type SharedPostMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
    sharedById?: SortOrder
    sharedToId?: SortOrder
  }

  export type SharedPostMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
    sharedById?: SortOrder
    sharedToId?: SortOrder
  }

  export type UserCreatefollowingIdsInput = {
    set: string[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type NotificationsCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type NotificationsCreateNestedManyWithoutSenderInput = {
    create?: XOR<NotificationsCreateWithoutSenderInput, NotificationsUncheckedCreateWithoutSenderInput> | NotificationsCreateWithoutSenderInput[] | NotificationsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutSenderInput | NotificationsCreateOrConnectWithoutSenderInput[]
    createMany?: NotificationsCreateManySenderInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutLikesInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput> | PostCreateWithoutLikesInput[] | PostUncheckedCreateWithoutLikesInput[]
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput | PostCreateOrConnectWithoutLikesInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentsCreateNestedManyWithoutCommentLikesInput = {
    create?: XOR<CommentsCreateWithoutCommentLikesInput, CommentsUncheckedCreateWithoutCommentLikesInput> | CommentsCreateWithoutCommentLikesInput[] | CommentsUncheckedCreateWithoutCommentLikesInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutCommentLikesInput | CommentsCreateOrConnectWithoutCommentLikesInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutSavedByInput = {
    create?: XOR<PostCreateWithoutSavedByInput, PostUncheckedCreateWithoutSavedByInput> | PostCreateWithoutSavedByInput[] | PostUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSavedByInput | PostCreateOrConnectWithoutSavedByInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ConversationCreateNestedManyWithoutUser1Input = {
    create?: XOR<ConversationCreateWithoutUser1Input, ConversationUncheckedCreateWithoutUser1Input> | ConversationCreateWithoutUser1Input[] | ConversationUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUser1Input | ConversationCreateOrConnectWithoutUser1Input[]
    createMany?: ConversationCreateManyUser1InputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type ConversationCreateNestedManyWithoutUser2Input = {
    create?: XOR<ConversationCreateWithoutUser2Input, ConversationUncheckedCreateWithoutUser2Input> | ConversationCreateWithoutUser2Input[] | ConversationUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUser2Input | ConversationCreateOrConnectWithoutUser2Input[]
    createMany?: ConversationCreateManyUser2InputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type SharedPostCreateNestedManyWithoutSharedByInput = {
    create?: XOR<SharedPostCreateWithoutSharedByInput, SharedPostUncheckedCreateWithoutSharedByInput> | SharedPostCreateWithoutSharedByInput[] | SharedPostUncheckedCreateWithoutSharedByInput[]
    connectOrCreate?: SharedPostCreateOrConnectWithoutSharedByInput | SharedPostCreateOrConnectWithoutSharedByInput[]
    createMany?: SharedPostCreateManySharedByInputEnvelope
    connect?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
  }

  export type SharedPostCreateNestedManyWithoutSharedToInput = {
    create?: XOR<SharedPostCreateWithoutSharedToInput, SharedPostUncheckedCreateWithoutSharedToInput> | SharedPostCreateWithoutSharedToInput[] | SharedPostUncheckedCreateWithoutSharedToInput[]
    connectOrCreate?: SharedPostCreateOrConnectWithoutSharedToInput | SharedPostCreateOrConnectWithoutSharedToInput[]
    createMany?: SharedPostCreateManySharedToInputEnvelope
    connect?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
  }

  export type MessageReactionCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageReactionCreateWithoutUserInput, MessageReactionUncheckedCreateWithoutUserInput> | MessageReactionCreateWithoutUserInput[] | MessageReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageReactionCreateOrConnectWithoutUserInput | MessageReactionCreateOrConnectWithoutUserInput[]
    createMany?: MessageReactionCreateManyUserInputEnvelope
    connect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type NotificationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type NotificationsUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<NotificationsCreateWithoutSenderInput, NotificationsUncheckedCreateWithoutSenderInput> | NotificationsCreateWithoutSenderInput[] | NotificationsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutSenderInput | NotificationsCreateOrConnectWithoutSenderInput[]
    createMany?: NotificationsCreateManySenderInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutLikesInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput> | PostCreateWithoutLikesInput[] | PostUncheckedCreateWithoutLikesInput[]
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput | PostCreateOrConnectWithoutLikesInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutCommentLikesInput = {
    create?: XOR<CommentsCreateWithoutCommentLikesInput, CommentsUncheckedCreateWithoutCommentLikesInput> | CommentsCreateWithoutCommentLikesInput[] | CommentsUncheckedCreateWithoutCommentLikesInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutCommentLikesInput | CommentsCreateOrConnectWithoutCommentLikesInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutSavedByInput = {
    create?: XOR<PostCreateWithoutSavedByInput, PostUncheckedCreateWithoutSavedByInput> | PostCreateWithoutSavedByInput[] | PostUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSavedByInput | PostCreateOrConnectWithoutSavedByInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutUser1Input = {
    create?: XOR<ConversationCreateWithoutUser1Input, ConversationUncheckedCreateWithoutUser1Input> | ConversationCreateWithoutUser1Input[] | ConversationUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUser1Input | ConversationCreateOrConnectWithoutUser1Input[]
    createMany?: ConversationCreateManyUser1InputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutUser2Input = {
    create?: XOR<ConversationCreateWithoutUser2Input, ConversationUncheckedCreateWithoutUser2Input> | ConversationCreateWithoutUser2Input[] | ConversationUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUser2Input | ConversationCreateOrConnectWithoutUser2Input[]
    createMany?: ConversationCreateManyUser2InputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type SharedPostUncheckedCreateNestedManyWithoutSharedByInput = {
    create?: XOR<SharedPostCreateWithoutSharedByInput, SharedPostUncheckedCreateWithoutSharedByInput> | SharedPostCreateWithoutSharedByInput[] | SharedPostUncheckedCreateWithoutSharedByInput[]
    connectOrCreate?: SharedPostCreateOrConnectWithoutSharedByInput | SharedPostCreateOrConnectWithoutSharedByInput[]
    createMany?: SharedPostCreateManySharedByInputEnvelope
    connect?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
  }

  export type SharedPostUncheckedCreateNestedManyWithoutSharedToInput = {
    create?: XOR<SharedPostCreateWithoutSharedToInput, SharedPostUncheckedCreateWithoutSharedToInput> | SharedPostCreateWithoutSharedToInput[] | SharedPostUncheckedCreateWithoutSharedToInput[]
    connectOrCreate?: SharedPostCreateOrConnectWithoutSharedToInput | SharedPostCreateOrConnectWithoutSharedToInput[]
    createMany?: SharedPostCreateManySharedToInputEnvelope
    connect?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
  }

  export type MessageReactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageReactionCreateWithoutUserInput, MessageReactionUncheckedCreateWithoutUserInput> | MessageReactionCreateWithoutUserInput[] | MessageReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageReactionCreateOrConnectWithoutUserInput | MessageReactionCreateOrConnectWithoutUserInput[]
    createMany?: MessageReactionCreateManyUserInputEnvelope
    connect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdatefollowingIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type NotificationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUserInput | NotificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUserInput | NotificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUserInput | NotificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type NotificationsUpdateManyWithoutSenderNestedInput = {
    create?: XOR<NotificationsCreateWithoutSenderInput, NotificationsUncheckedCreateWithoutSenderInput> | NotificationsCreateWithoutSenderInput[] | NotificationsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutSenderInput | NotificationsCreateOrConnectWithoutSenderInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutSenderInput | NotificationsUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: NotificationsCreateManySenderInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutSenderInput | NotificationsUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutSenderInput | NotificationsUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type PostUpdateManyWithoutLikesNestedInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput> | PostCreateWithoutLikesInput[] | PostUncheckedCreateWithoutLikesInput[]
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput | PostCreateOrConnectWithoutLikesInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutLikesInput | PostUpsertWithWhereUniqueWithoutLikesInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutLikesInput | PostUpdateWithWhereUniqueWithoutLikesInput[]
    updateMany?: PostUpdateManyWithWhereWithoutLikesInput | PostUpdateManyWithWhereWithoutLikesInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentsUpdateManyWithoutCommentLikesNestedInput = {
    create?: XOR<CommentsCreateWithoutCommentLikesInput, CommentsUncheckedCreateWithoutCommentLikesInput> | CommentsCreateWithoutCommentLikesInput[] | CommentsUncheckedCreateWithoutCommentLikesInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutCommentLikesInput | CommentsCreateOrConnectWithoutCommentLikesInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutCommentLikesInput | CommentsUpsertWithWhereUniqueWithoutCommentLikesInput[]
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutCommentLikesInput | CommentsUpdateWithWhereUniqueWithoutCommentLikesInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutCommentLikesInput | CommentsUpdateManyWithWhereWithoutCommentLikesInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type PostUpdateManyWithoutSavedByNestedInput = {
    create?: XOR<PostCreateWithoutSavedByInput, PostUncheckedCreateWithoutSavedByInput> | PostCreateWithoutSavedByInput[] | PostUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSavedByInput | PostCreateOrConnectWithoutSavedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutSavedByInput | PostUpsertWithWhereUniqueWithoutSavedByInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutSavedByInput | PostUpdateWithWhereUniqueWithoutSavedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutSavedByInput | PostUpdateManyWithWhereWithoutSavedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ConversationUpdateManyWithoutUser1NestedInput = {
    create?: XOR<ConversationCreateWithoutUser1Input, ConversationUncheckedCreateWithoutUser1Input> | ConversationCreateWithoutUser1Input[] | ConversationUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUser1Input | ConversationCreateOrConnectWithoutUser1Input[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUser1Input | ConversationUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: ConversationCreateManyUser1InputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUser1Input | ConversationUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUser1Input | ConversationUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type ConversationUpdateManyWithoutUser2NestedInput = {
    create?: XOR<ConversationCreateWithoutUser2Input, ConversationUncheckedCreateWithoutUser2Input> | ConversationCreateWithoutUser2Input[] | ConversationUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUser2Input | ConversationCreateOrConnectWithoutUser2Input[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUser2Input | ConversationUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: ConversationCreateManyUser2InputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUser2Input | ConversationUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUser2Input | ConversationUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type SharedPostUpdateManyWithoutSharedByNestedInput = {
    create?: XOR<SharedPostCreateWithoutSharedByInput, SharedPostUncheckedCreateWithoutSharedByInput> | SharedPostCreateWithoutSharedByInput[] | SharedPostUncheckedCreateWithoutSharedByInput[]
    connectOrCreate?: SharedPostCreateOrConnectWithoutSharedByInput | SharedPostCreateOrConnectWithoutSharedByInput[]
    upsert?: SharedPostUpsertWithWhereUniqueWithoutSharedByInput | SharedPostUpsertWithWhereUniqueWithoutSharedByInput[]
    createMany?: SharedPostCreateManySharedByInputEnvelope
    set?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    disconnect?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    delete?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    connect?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    update?: SharedPostUpdateWithWhereUniqueWithoutSharedByInput | SharedPostUpdateWithWhereUniqueWithoutSharedByInput[]
    updateMany?: SharedPostUpdateManyWithWhereWithoutSharedByInput | SharedPostUpdateManyWithWhereWithoutSharedByInput[]
    deleteMany?: SharedPostScalarWhereInput | SharedPostScalarWhereInput[]
  }

  export type SharedPostUpdateManyWithoutSharedToNestedInput = {
    create?: XOR<SharedPostCreateWithoutSharedToInput, SharedPostUncheckedCreateWithoutSharedToInput> | SharedPostCreateWithoutSharedToInput[] | SharedPostUncheckedCreateWithoutSharedToInput[]
    connectOrCreate?: SharedPostCreateOrConnectWithoutSharedToInput | SharedPostCreateOrConnectWithoutSharedToInput[]
    upsert?: SharedPostUpsertWithWhereUniqueWithoutSharedToInput | SharedPostUpsertWithWhereUniqueWithoutSharedToInput[]
    createMany?: SharedPostCreateManySharedToInputEnvelope
    set?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    disconnect?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    delete?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    connect?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    update?: SharedPostUpdateWithWhereUniqueWithoutSharedToInput | SharedPostUpdateWithWhereUniqueWithoutSharedToInput[]
    updateMany?: SharedPostUpdateManyWithWhereWithoutSharedToInput | SharedPostUpdateManyWithWhereWithoutSharedToInput[]
    deleteMany?: SharedPostScalarWhereInput | SharedPostScalarWhereInput[]
  }

  export type MessageReactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageReactionCreateWithoutUserInput, MessageReactionUncheckedCreateWithoutUserInput> | MessageReactionCreateWithoutUserInput[] | MessageReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageReactionCreateOrConnectWithoutUserInput | MessageReactionCreateOrConnectWithoutUserInput[]
    upsert?: MessageReactionUpsertWithWhereUniqueWithoutUserInput | MessageReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageReactionCreateManyUserInputEnvelope
    set?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    disconnect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    delete?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    connect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    update?: MessageReactionUpdateWithWhereUniqueWithoutUserInput | MessageReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageReactionUpdateManyWithWhereWithoutUserInput | MessageReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageReactionScalarWhereInput | MessageReactionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type NotificationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUserInput | NotificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUserInput | NotificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUserInput | NotificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type NotificationsUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<NotificationsCreateWithoutSenderInput, NotificationsUncheckedCreateWithoutSenderInput> | NotificationsCreateWithoutSenderInput[] | NotificationsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutSenderInput | NotificationsCreateOrConnectWithoutSenderInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutSenderInput | NotificationsUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: NotificationsCreateManySenderInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutSenderInput | NotificationsUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutSenderInput | NotificationsUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutLikesNestedInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput> | PostCreateWithoutLikesInput[] | PostUncheckedCreateWithoutLikesInput[]
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput | PostCreateOrConnectWithoutLikesInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutLikesInput | PostUpsertWithWhereUniqueWithoutLikesInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutLikesInput | PostUpdateWithWhereUniqueWithoutLikesInput[]
    updateMany?: PostUpdateManyWithWhereWithoutLikesInput | PostUpdateManyWithWhereWithoutLikesInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutCommentLikesNestedInput = {
    create?: XOR<CommentsCreateWithoutCommentLikesInput, CommentsUncheckedCreateWithoutCommentLikesInput> | CommentsCreateWithoutCommentLikesInput[] | CommentsUncheckedCreateWithoutCommentLikesInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutCommentLikesInput | CommentsCreateOrConnectWithoutCommentLikesInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutCommentLikesInput | CommentsUpsertWithWhereUniqueWithoutCommentLikesInput[]
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutCommentLikesInput | CommentsUpdateWithWhereUniqueWithoutCommentLikesInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutCommentLikesInput | CommentsUpdateManyWithWhereWithoutCommentLikesInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutSavedByNestedInput = {
    create?: XOR<PostCreateWithoutSavedByInput, PostUncheckedCreateWithoutSavedByInput> | PostCreateWithoutSavedByInput[] | PostUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSavedByInput | PostCreateOrConnectWithoutSavedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutSavedByInput | PostUpsertWithWhereUniqueWithoutSavedByInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutSavedByInput | PostUpdateWithWhereUniqueWithoutSavedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutSavedByInput | PostUpdateManyWithWhereWithoutSavedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: XOR<ConversationCreateWithoutUser1Input, ConversationUncheckedCreateWithoutUser1Input> | ConversationCreateWithoutUser1Input[] | ConversationUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUser1Input | ConversationCreateOrConnectWithoutUser1Input[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUser1Input | ConversationUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: ConversationCreateManyUser1InputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUser1Input | ConversationUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUser1Input | ConversationUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: XOR<ConversationCreateWithoutUser2Input, ConversationUncheckedCreateWithoutUser2Input> | ConversationCreateWithoutUser2Input[] | ConversationUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUser2Input | ConversationCreateOrConnectWithoutUser2Input[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUser2Input | ConversationUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: ConversationCreateManyUser2InputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUser2Input | ConversationUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUser2Input | ConversationUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type SharedPostUncheckedUpdateManyWithoutSharedByNestedInput = {
    create?: XOR<SharedPostCreateWithoutSharedByInput, SharedPostUncheckedCreateWithoutSharedByInput> | SharedPostCreateWithoutSharedByInput[] | SharedPostUncheckedCreateWithoutSharedByInput[]
    connectOrCreate?: SharedPostCreateOrConnectWithoutSharedByInput | SharedPostCreateOrConnectWithoutSharedByInput[]
    upsert?: SharedPostUpsertWithWhereUniqueWithoutSharedByInput | SharedPostUpsertWithWhereUniqueWithoutSharedByInput[]
    createMany?: SharedPostCreateManySharedByInputEnvelope
    set?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    disconnect?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    delete?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    connect?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    update?: SharedPostUpdateWithWhereUniqueWithoutSharedByInput | SharedPostUpdateWithWhereUniqueWithoutSharedByInput[]
    updateMany?: SharedPostUpdateManyWithWhereWithoutSharedByInput | SharedPostUpdateManyWithWhereWithoutSharedByInput[]
    deleteMany?: SharedPostScalarWhereInput | SharedPostScalarWhereInput[]
  }

  export type SharedPostUncheckedUpdateManyWithoutSharedToNestedInput = {
    create?: XOR<SharedPostCreateWithoutSharedToInput, SharedPostUncheckedCreateWithoutSharedToInput> | SharedPostCreateWithoutSharedToInput[] | SharedPostUncheckedCreateWithoutSharedToInput[]
    connectOrCreate?: SharedPostCreateOrConnectWithoutSharedToInput | SharedPostCreateOrConnectWithoutSharedToInput[]
    upsert?: SharedPostUpsertWithWhereUniqueWithoutSharedToInput | SharedPostUpsertWithWhereUniqueWithoutSharedToInput[]
    createMany?: SharedPostCreateManySharedToInputEnvelope
    set?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    disconnect?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    delete?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    connect?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    update?: SharedPostUpdateWithWhereUniqueWithoutSharedToInput | SharedPostUpdateWithWhereUniqueWithoutSharedToInput[]
    updateMany?: SharedPostUpdateManyWithWhereWithoutSharedToInput | SharedPostUpdateManyWithWhereWithoutSharedToInput[]
    deleteMany?: SharedPostScalarWhereInput | SharedPostScalarWhereInput[]
  }

  export type MessageReactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageReactionCreateWithoutUserInput, MessageReactionUncheckedCreateWithoutUserInput> | MessageReactionCreateWithoutUserInput[] | MessageReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageReactionCreateOrConnectWithoutUserInput | MessageReactionCreateOrConnectWithoutUserInput[]
    upsert?: MessageReactionUpsertWithWhereUniqueWithoutUserInput | MessageReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageReactionCreateManyUserInputEnvelope
    set?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    disconnect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    delete?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    connect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    update?: MessageReactionUpdateWithWhereUniqueWithoutUserInput | MessageReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageReactionUpdateManyWithWhereWithoutUserInput | MessageReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageReactionScalarWhereInput | MessageReactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type PostCreatepostImageInput = {
    set: InputJsonValue[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentsCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutLikedPostsInput = {
    create?: XOR<UserCreateWithoutLikedPostsInput, UserUncheckedCreateWithoutLikedPostsInput> | UserCreateWithoutLikedPostsInput[] | UserUncheckedCreateWithoutLikedPostsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedPostsInput | UserCreateOrConnectWithoutLikedPostsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutSavedPostsInput = {
    create?: XOR<UserCreateWithoutSavedPostsInput, UserUncheckedCreateWithoutSavedPostsInput> | UserCreateWithoutSavedPostsInput[] | UserUncheckedCreateWithoutSavedPostsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSavedPostsInput | UserCreateOrConnectWithoutSavedPostsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NotificationsCreateNestedManyWithoutPostInput = {
    create?: XOR<NotificationsCreateWithoutPostInput, NotificationsUncheckedCreateWithoutPostInput> | NotificationsCreateWithoutPostInput[] | NotificationsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutPostInput | NotificationsCreateOrConnectWithoutPostInput[]
    createMany?: NotificationsCreateManyPostInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type SharedPostCreateNestedManyWithoutPostInput = {
    create?: XOR<SharedPostCreateWithoutPostInput, SharedPostUncheckedCreateWithoutPostInput> | SharedPostCreateWithoutPostInput[] | SharedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SharedPostCreateOrConnectWithoutPostInput | SharedPostCreateOrConnectWithoutPostInput[]
    createMany?: SharedPostCreateManyPostInputEnvelope
    connect?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSharedPostInput = {
    create?: XOR<MessageCreateWithoutSharedPostInput, MessageUncheckedCreateWithoutSharedPostInput> | MessageCreateWithoutSharedPostInput[] | MessageUncheckedCreateWithoutSharedPostInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSharedPostInput | MessageCreateOrConnectWithoutSharedPostInput[]
    createMany?: MessageCreateManySharedPostInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutLikedPostsInput = {
    create?: XOR<UserCreateWithoutLikedPostsInput, UserUncheckedCreateWithoutLikedPostsInput> | UserCreateWithoutLikedPostsInput[] | UserUncheckedCreateWithoutLikedPostsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedPostsInput | UserCreateOrConnectWithoutLikedPostsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutSavedPostsInput = {
    create?: XOR<UserCreateWithoutSavedPostsInput, UserUncheckedCreateWithoutSavedPostsInput> | UserCreateWithoutSavedPostsInput[] | UserUncheckedCreateWithoutSavedPostsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSavedPostsInput | UserCreateOrConnectWithoutSavedPostsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NotificationsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<NotificationsCreateWithoutPostInput, NotificationsUncheckedCreateWithoutPostInput> | NotificationsCreateWithoutPostInput[] | NotificationsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutPostInput | NotificationsCreateOrConnectWithoutPostInput[]
    createMany?: NotificationsCreateManyPostInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type SharedPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<SharedPostCreateWithoutPostInput, SharedPostUncheckedCreateWithoutPostInput> | SharedPostCreateWithoutPostInput[] | SharedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SharedPostCreateOrConnectWithoutPostInput | SharedPostCreateOrConnectWithoutPostInput[]
    createMany?: SharedPostCreateManyPostInputEnvelope
    connect?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSharedPostInput = {
    create?: XOR<MessageCreateWithoutSharedPostInput, MessageUncheckedCreateWithoutSharedPostInput> | MessageCreateWithoutSharedPostInput[] | MessageUncheckedCreateWithoutSharedPostInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSharedPostInput | MessageCreateOrConnectWithoutSharedPostInput[]
    createMany?: MessageCreateManySharedPostInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type PostUpdatepostImageInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type EnumPostTypeFieldUpdateOperationsInput = {
    set?: $Enums.PostType
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type CommentsUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutPostInput | CommentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutPostInput | CommentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutPostInput | CommentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type UserUpdateManyWithoutLikedPostsNestedInput = {
    create?: XOR<UserCreateWithoutLikedPostsInput, UserUncheckedCreateWithoutLikedPostsInput> | UserCreateWithoutLikedPostsInput[] | UserUncheckedCreateWithoutLikedPostsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedPostsInput | UserCreateOrConnectWithoutLikedPostsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLikedPostsInput | UserUpsertWithWhereUniqueWithoutLikedPostsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLikedPostsInput | UserUpdateWithWhereUniqueWithoutLikedPostsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLikedPostsInput | UserUpdateManyWithWhereWithoutLikedPostsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutSavedPostsNestedInput = {
    create?: XOR<UserCreateWithoutSavedPostsInput, UserUncheckedCreateWithoutSavedPostsInput> | UserCreateWithoutSavedPostsInput[] | UserUncheckedCreateWithoutSavedPostsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSavedPostsInput | UserCreateOrConnectWithoutSavedPostsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSavedPostsInput | UserUpsertWithWhereUniqueWithoutSavedPostsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSavedPostsInput | UserUpdateWithWhereUniqueWithoutSavedPostsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSavedPostsInput | UserUpdateManyWithWhereWithoutSavedPostsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NotificationsUpdateManyWithoutPostNestedInput = {
    create?: XOR<NotificationsCreateWithoutPostInput, NotificationsUncheckedCreateWithoutPostInput> | NotificationsCreateWithoutPostInput[] | NotificationsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutPostInput | NotificationsCreateOrConnectWithoutPostInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutPostInput | NotificationsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: NotificationsCreateManyPostInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutPostInput | NotificationsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutPostInput | NotificationsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type SharedPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<SharedPostCreateWithoutPostInput, SharedPostUncheckedCreateWithoutPostInput> | SharedPostCreateWithoutPostInput[] | SharedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SharedPostCreateOrConnectWithoutPostInput | SharedPostCreateOrConnectWithoutPostInput[]
    upsert?: SharedPostUpsertWithWhereUniqueWithoutPostInput | SharedPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SharedPostCreateManyPostInputEnvelope
    set?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    disconnect?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    delete?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    connect?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    update?: SharedPostUpdateWithWhereUniqueWithoutPostInput | SharedPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SharedPostUpdateManyWithWhereWithoutPostInput | SharedPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SharedPostScalarWhereInput | SharedPostScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSharedPostNestedInput = {
    create?: XOR<MessageCreateWithoutSharedPostInput, MessageUncheckedCreateWithoutSharedPostInput> | MessageCreateWithoutSharedPostInput[] | MessageUncheckedCreateWithoutSharedPostInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSharedPostInput | MessageCreateOrConnectWithoutSharedPostInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSharedPostInput | MessageUpsertWithWhereUniqueWithoutSharedPostInput[]
    createMany?: MessageCreateManySharedPostInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSharedPostInput | MessageUpdateWithWhereUniqueWithoutSharedPostInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSharedPostInput | MessageUpdateManyWithWhereWithoutSharedPostInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutPostInput | CommentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutPostInput | CommentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutPostInput | CommentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutLikedPostsNestedInput = {
    create?: XOR<UserCreateWithoutLikedPostsInput, UserUncheckedCreateWithoutLikedPostsInput> | UserCreateWithoutLikedPostsInput[] | UserUncheckedCreateWithoutLikedPostsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedPostsInput | UserCreateOrConnectWithoutLikedPostsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLikedPostsInput | UserUpsertWithWhereUniqueWithoutLikedPostsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLikedPostsInput | UserUpdateWithWhereUniqueWithoutLikedPostsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLikedPostsInput | UserUpdateManyWithWhereWithoutLikedPostsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutSavedPostsNestedInput = {
    create?: XOR<UserCreateWithoutSavedPostsInput, UserUncheckedCreateWithoutSavedPostsInput> | UserCreateWithoutSavedPostsInput[] | UserUncheckedCreateWithoutSavedPostsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSavedPostsInput | UserCreateOrConnectWithoutSavedPostsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSavedPostsInput | UserUpsertWithWhereUniqueWithoutSavedPostsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSavedPostsInput | UserUpdateWithWhereUniqueWithoutSavedPostsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSavedPostsInput | UserUpdateManyWithWhereWithoutSavedPostsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NotificationsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<NotificationsCreateWithoutPostInput, NotificationsUncheckedCreateWithoutPostInput> | NotificationsCreateWithoutPostInput[] | NotificationsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutPostInput | NotificationsCreateOrConnectWithoutPostInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutPostInput | NotificationsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: NotificationsCreateManyPostInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutPostInput | NotificationsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutPostInput | NotificationsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type SharedPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<SharedPostCreateWithoutPostInput, SharedPostUncheckedCreateWithoutPostInput> | SharedPostCreateWithoutPostInput[] | SharedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SharedPostCreateOrConnectWithoutPostInput | SharedPostCreateOrConnectWithoutPostInput[]
    upsert?: SharedPostUpsertWithWhereUniqueWithoutPostInput | SharedPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SharedPostCreateManyPostInputEnvelope
    set?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    disconnect?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    delete?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    connect?: SharedPostWhereUniqueInput | SharedPostWhereUniqueInput[]
    update?: SharedPostUpdateWithWhereUniqueWithoutPostInput | SharedPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SharedPostUpdateManyWithWhereWithoutPostInput | SharedPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SharedPostScalarWhereInput | SharedPostScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSharedPostNestedInput = {
    create?: XOR<MessageCreateWithoutSharedPostInput, MessageUncheckedCreateWithoutSharedPostInput> | MessageCreateWithoutSharedPostInput[] | MessageUncheckedCreateWithoutSharedPostInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSharedPostInput | MessageCreateOrConnectWithoutSharedPostInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSharedPostInput | MessageUpsertWithWhereUniqueWithoutSharedPostInput[]
    createMany?: MessageCreateManySharedPostInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSharedPostInput | MessageUpdateWithWhereUniqueWithoutSharedPostInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSharedPostInput | MessageUpdateManyWithWhereWithoutSharedPostInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutPostCommentsInput = {
    create?: XOR<PostCreateWithoutPostCommentsInput, PostUncheckedCreateWithoutPostCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserCommentsInput = {
    create?: XOR<UserCreateWithoutUserCommentsInput, UserUncheckedCreateWithoutUserCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentsCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentsCreateWithoutRepliesInput, CommentsUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentsCreateOrConnectWithoutRepliesInput
    connect?: CommentsWhereUniqueInput
  }

  export type CommentsCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput> | CommentsCreateWithoutParentInput[] | CommentsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentInput | CommentsCreateOrConnectWithoutParentInput[]
    createMany?: CommentsCreateManyParentInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutLikedCommentsInput = {
    create?: XOR<UserCreateWithoutLikedCommentsInput, UserUncheckedCreateWithoutLikedCommentsInput> | UserCreateWithoutLikedCommentsInput[] | UserUncheckedCreateWithoutLikedCommentsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedCommentsInput | UserCreateOrConnectWithoutLikedCommentsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NotificationsCreateNestedManyWithoutCommentInput = {
    create?: XOR<NotificationsCreateWithoutCommentInput, NotificationsUncheckedCreateWithoutCommentInput> | NotificationsCreateWithoutCommentInput[] | NotificationsUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutCommentInput | NotificationsCreateOrConnectWithoutCommentInput[]
    createMany?: NotificationsCreateManyCommentInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput> | CommentsCreateWithoutParentInput[] | CommentsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentInput | CommentsCreateOrConnectWithoutParentInput[]
    createMany?: CommentsCreateManyParentInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutLikedCommentsInput = {
    create?: XOR<UserCreateWithoutLikedCommentsInput, UserUncheckedCreateWithoutLikedCommentsInput> | UserCreateWithoutLikedCommentsInput[] | UserUncheckedCreateWithoutLikedCommentsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedCommentsInput | UserCreateOrConnectWithoutLikedCommentsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NotificationsUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<NotificationsCreateWithoutCommentInput, NotificationsUncheckedCreateWithoutCommentInput> | NotificationsCreateWithoutCommentInput[] | NotificationsUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutCommentInput | NotificationsCreateOrConnectWithoutCommentInput[]
    createMany?: NotificationsCreateManyCommentInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type PostUpdateOneRequiredWithoutPostCommentsNestedInput = {
    create?: XOR<PostCreateWithoutPostCommentsInput, PostUncheckedCreateWithoutPostCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostCommentsInput
    upsert?: PostUpsertWithoutPostCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPostCommentsInput, PostUpdateWithoutPostCommentsInput>, PostUncheckedUpdateWithoutPostCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutUserCommentsNestedInput = {
    create?: XOR<UserCreateWithoutUserCommentsInput, UserUncheckedCreateWithoutUserCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCommentsInput
    upsert?: UserUpsertWithoutUserCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserCommentsInput, UserUpdateWithoutUserCommentsInput>, UserUncheckedUpdateWithoutUserCommentsInput>
  }

  export type CommentsUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentsCreateWithoutRepliesInput, CommentsUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentsCreateOrConnectWithoutRepliesInput
    upsert?: CommentsUpsertWithoutRepliesInput
    disconnect?: CommentsWhereInput | boolean
    delete?: CommentsWhereInput | boolean
    connect?: CommentsWhereUniqueInput
    update?: XOR<XOR<CommentsUpdateToOneWithWhereWithoutRepliesInput, CommentsUpdateWithoutRepliesInput>, CommentsUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentsUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput> | CommentsCreateWithoutParentInput[] | CommentsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentInput | CommentsCreateOrConnectWithoutParentInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutParentInput | CommentsUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentsCreateManyParentInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutParentInput | CommentsUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutParentInput | CommentsUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type UserUpdateManyWithoutLikedCommentsNestedInput = {
    create?: XOR<UserCreateWithoutLikedCommentsInput, UserUncheckedCreateWithoutLikedCommentsInput> | UserCreateWithoutLikedCommentsInput[] | UserUncheckedCreateWithoutLikedCommentsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedCommentsInput | UserCreateOrConnectWithoutLikedCommentsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLikedCommentsInput | UserUpsertWithWhereUniqueWithoutLikedCommentsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLikedCommentsInput | UserUpdateWithWhereUniqueWithoutLikedCommentsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLikedCommentsInput | UserUpdateManyWithWhereWithoutLikedCommentsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NotificationsUpdateManyWithoutCommentNestedInput = {
    create?: XOR<NotificationsCreateWithoutCommentInput, NotificationsUncheckedCreateWithoutCommentInput> | NotificationsCreateWithoutCommentInput[] | NotificationsUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutCommentInput | NotificationsCreateOrConnectWithoutCommentInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutCommentInput | NotificationsUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: NotificationsCreateManyCommentInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutCommentInput | NotificationsUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutCommentInput | NotificationsUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput> | CommentsCreateWithoutParentInput[] | CommentsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentInput | CommentsCreateOrConnectWithoutParentInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutParentInput | CommentsUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentsCreateManyParentInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutParentInput | CommentsUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutParentInput | CommentsUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutLikedCommentsNestedInput = {
    create?: XOR<UserCreateWithoutLikedCommentsInput, UserUncheckedCreateWithoutLikedCommentsInput> | UserCreateWithoutLikedCommentsInput[] | UserUncheckedCreateWithoutLikedCommentsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedCommentsInput | UserCreateOrConnectWithoutLikedCommentsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLikedCommentsInput | UserUpsertWithWhereUniqueWithoutLikedCommentsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLikedCommentsInput | UserUpdateWithWhereUniqueWithoutLikedCommentsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLikedCommentsInput | UserUpdateManyWithWhereWithoutLikedCommentsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NotificationsUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<NotificationsCreateWithoutCommentInput, NotificationsUncheckedCreateWithoutCommentInput> | NotificationsCreateWithoutCommentInput[] | NotificationsUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutCommentInput | NotificationsCreateOrConnectWithoutCommentInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutCommentInput | NotificationsUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: NotificationsCreateManyCommentInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutCommentInput | NotificationsUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutCommentInput | NotificationsUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutConversations1Input = {
    create?: XOR<UserCreateWithoutConversations1Input, UserUncheckedCreateWithoutConversations1Input>
    connectOrCreate?: UserCreateOrConnectWithoutConversations1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutConversations2Input = {
    create?: XOR<UserCreateWithoutConversations2Input, UserUncheckedCreateWithoutConversations2Input>
    connectOrCreate?: UserCreateOrConnectWithoutConversations2Input
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutConversations1NestedInput = {
    create?: XOR<UserCreateWithoutConversations1Input, UserUncheckedCreateWithoutConversations1Input>
    connectOrCreate?: UserCreateOrConnectWithoutConversations1Input
    upsert?: UserUpsertWithoutConversations1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConversations1Input, UserUpdateWithoutConversations1Input>, UserUncheckedUpdateWithoutConversations1Input>
  }

  export type UserUpdateOneRequiredWithoutConversations2NestedInput = {
    create?: XOR<UserCreateWithoutConversations2Input, UserUncheckedCreateWithoutConversations2Input>
    connectOrCreate?: UserCreateOrConnectWithoutConversations2Input
    upsert?: UserUpsertWithoutConversations2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConversations2Input, UserUpdateWithoutConversations2Input>, UserUncheckedUpdateWithoutConversations2Input>
  }

  export type MessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutSharedMessagesInput = {
    create?: XOR<PostCreateWithoutSharedMessagesInput, PostUncheckedCreateWithoutSharedMessagesInput>
    connectOrCreate?: PostCreateOrConnectWithoutSharedMessagesInput
    connect?: PostWhereUniqueInput
  }

  export type MessageReactionCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageReactionCreateWithoutMessageInput, MessageReactionUncheckedCreateWithoutMessageInput> | MessageReactionCreateWithoutMessageInput[] | MessageReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReactionCreateOrConnectWithoutMessageInput | MessageReactionCreateOrConnectWithoutMessageInput[]
    createMany?: MessageReactionCreateManyMessageInputEnvelope
    connect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
  }

  export type NotificationsCreateNestedManyWithoutMessageInput = {
    create?: XOR<NotificationsCreateWithoutMessageInput, NotificationsUncheckedCreateWithoutMessageInput> | NotificationsCreateWithoutMessageInput[] | NotificationsUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutMessageInput | NotificationsCreateOrConnectWithoutMessageInput[]
    createMany?: NotificationsCreateManyMessageInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type MessageReactionUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageReactionCreateWithoutMessageInput, MessageReactionUncheckedCreateWithoutMessageInput> | MessageReactionCreateWithoutMessageInput[] | MessageReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReactionCreateOrConnectWithoutMessageInput | MessageReactionCreateOrConnectWithoutMessageInput[]
    createMany?: MessageReactionCreateManyMessageInputEnvelope
    connect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
  }

  export type NotificationsUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<NotificationsCreateWithoutMessageInput, NotificationsUncheckedCreateWithoutMessageInput> | NotificationsCreateWithoutMessageInput[] | NotificationsUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutMessageInput | NotificationsCreateOrConnectWithoutMessageInput[]
    createMany?: NotificationsCreateManyMessageInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    upsert?: ConversationUpsertWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMessagesInput, ConversationUpdateWithoutMessagesInput>, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type PostUpdateOneWithoutSharedMessagesNestedInput = {
    create?: XOR<PostCreateWithoutSharedMessagesInput, PostUncheckedCreateWithoutSharedMessagesInput>
    connectOrCreate?: PostCreateOrConnectWithoutSharedMessagesInput
    upsert?: PostUpsertWithoutSharedMessagesInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutSharedMessagesInput, PostUpdateWithoutSharedMessagesInput>, PostUncheckedUpdateWithoutSharedMessagesInput>
  }

  export type MessageReactionUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageReactionCreateWithoutMessageInput, MessageReactionUncheckedCreateWithoutMessageInput> | MessageReactionCreateWithoutMessageInput[] | MessageReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReactionCreateOrConnectWithoutMessageInput | MessageReactionCreateOrConnectWithoutMessageInput[]
    upsert?: MessageReactionUpsertWithWhereUniqueWithoutMessageInput | MessageReactionUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageReactionCreateManyMessageInputEnvelope
    set?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    disconnect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    delete?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    connect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    update?: MessageReactionUpdateWithWhereUniqueWithoutMessageInput | MessageReactionUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageReactionUpdateManyWithWhereWithoutMessageInput | MessageReactionUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageReactionScalarWhereInput | MessageReactionScalarWhereInput[]
  }

  export type NotificationsUpdateManyWithoutMessageNestedInput = {
    create?: XOR<NotificationsCreateWithoutMessageInput, NotificationsUncheckedCreateWithoutMessageInput> | NotificationsCreateWithoutMessageInput[] | NotificationsUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutMessageInput | NotificationsCreateOrConnectWithoutMessageInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutMessageInput | NotificationsUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: NotificationsCreateManyMessageInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutMessageInput | NotificationsUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutMessageInput | NotificationsUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type MessageReactionUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageReactionCreateWithoutMessageInput, MessageReactionUncheckedCreateWithoutMessageInput> | MessageReactionCreateWithoutMessageInput[] | MessageReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReactionCreateOrConnectWithoutMessageInput | MessageReactionCreateOrConnectWithoutMessageInput[]
    upsert?: MessageReactionUpsertWithWhereUniqueWithoutMessageInput | MessageReactionUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageReactionCreateManyMessageInputEnvelope
    set?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    disconnect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    delete?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    connect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    update?: MessageReactionUpdateWithWhereUniqueWithoutMessageInput | MessageReactionUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageReactionUpdateManyWithWhereWithoutMessageInput | MessageReactionUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageReactionScalarWhereInput | MessageReactionScalarWhereInput[]
  }

  export type NotificationsUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<NotificationsCreateWithoutMessageInput, NotificationsUncheckedCreateWithoutMessageInput> | NotificationsCreateWithoutMessageInput[] | NotificationsUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutMessageInput | NotificationsCreateOrConnectWithoutMessageInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutMessageInput | NotificationsUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: NotificationsCreateManyMessageInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutMessageInput | NotificationsUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutMessageInput | NotificationsUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type MessageCreateNestedOneWithoutReactionsInput = {
    create?: XOR<MessageCreateWithoutReactionsInput, MessageUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutReactionsInput
    connect?: MessageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessageReactionsInput = {
    create?: XOR<UserCreateWithoutMessageReactionsInput, UserUncheckedCreateWithoutMessageReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessageReactionsInput
    connect?: UserWhereUniqueInput
  }

  export type MessageUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<MessageCreateWithoutReactionsInput, MessageUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutReactionsInput
    upsert?: MessageUpsertWithoutReactionsInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutReactionsInput, MessageUpdateWithoutReactionsInput>, MessageUncheckedUpdateWithoutReactionsInput>
  }

  export type UserUpdateOneRequiredWithoutMessageReactionsNestedInput = {
    create?: XOR<UserCreateWithoutMessageReactionsInput, UserUncheckedCreateWithoutMessageReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessageReactionsInput
    upsert?: UserUpsertWithoutMessageReactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessageReactionsInput, UserUpdateWithoutMessageReactionsInput>, UserUncheckedUpdateWithoutMessageReactionsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentNotificationsInput = {
    create?: XOR<UserCreateWithoutSentNotificationsInput, UserUncheckedCreateWithoutSentNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<PostCreateWithoutNotificationsInput, PostUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: PostCreateOrConnectWithoutNotificationsInput
    connect?: PostWhereUniqueInput
  }

  export type CommentsCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<CommentsCreateWithoutNotificationsInput, CommentsUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: CommentsCreateOrConnectWithoutNotificationsInput
    connect?: CommentsWhereUniqueInput
  }

  export type MessageCreateNestedOneWithoutNotificationInput = {
    create?: XOR<MessageCreateWithoutNotificationInput, MessageUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: MessageCreateOrConnectWithoutNotificationInput
    connect?: MessageWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type EnumCommentTypeFieldUpdateOperationsInput = {
    set?: $Enums.CommentType
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateOneWithoutSentNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutSentNotificationsInput, UserUncheckedCreateWithoutSentNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentNotificationsInput
    upsert?: UserUpsertWithoutSentNotificationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentNotificationsInput, UserUpdateWithoutSentNotificationsInput>, UserUncheckedUpdateWithoutSentNotificationsInput>
  }

  export type PostUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<PostCreateWithoutNotificationsInput, PostUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: PostCreateOrConnectWithoutNotificationsInput
    upsert?: PostUpsertWithoutNotificationsInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutNotificationsInput, PostUpdateWithoutNotificationsInput>, PostUncheckedUpdateWithoutNotificationsInput>
  }

  export type CommentsUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<CommentsCreateWithoutNotificationsInput, CommentsUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: CommentsCreateOrConnectWithoutNotificationsInput
    upsert?: CommentsUpsertWithoutNotificationsInput
    disconnect?: CommentsWhereInput | boolean
    delete?: CommentsWhereInput | boolean
    connect?: CommentsWhereUniqueInput
    update?: XOR<XOR<CommentsUpdateToOneWithWhereWithoutNotificationsInput, CommentsUpdateWithoutNotificationsInput>, CommentsUncheckedUpdateWithoutNotificationsInput>
  }

  export type MessageUpdateOneWithoutNotificationNestedInput = {
    create?: XOR<MessageCreateWithoutNotificationInput, MessageUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: MessageCreateOrConnectWithoutNotificationInput
    upsert?: MessageUpsertWithoutNotificationInput
    disconnect?: MessageWhereInput | boolean
    delete?: MessageWhereInput | boolean
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutNotificationInput, MessageUpdateWithoutNotificationInput>, MessageUncheckedUpdateWithoutNotificationInput>
  }

  export type PostCreateNestedOneWithoutSharedPostsInput = {
    create?: XOR<PostCreateWithoutSharedPostsInput, PostUncheckedCreateWithoutSharedPostsInput>
    connectOrCreate?: PostCreateOrConnectWithoutSharedPostsInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSharedPostsInput = {
    create?: XOR<UserCreateWithoutSharedPostsInput, UserUncheckedCreateWithoutSharedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedPostsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedSharesInput = {
    create?: XOR<UserCreateWithoutReceivedSharesInput, UserUncheckedCreateWithoutReceivedSharesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedSharesInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutSharedPostsNestedInput = {
    create?: XOR<PostCreateWithoutSharedPostsInput, PostUncheckedCreateWithoutSharedPostsInput>
    connectOrCreate?: PostCreateOrConnectWithoutSharedPostsInput
    upsert?: PostUpsertWithoutSharedPostsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutSharedPostsInput, PostUpdateWithoutSharedPostsInput>, PostUncheckedUpdateWithoutSharedPostsInput>
  }

  export type UserUpdateOneRequiredWithoutSharedPostsNestedInput = {
    create?: XOR<UserCreateWithoutSharedPostsInput, UserUncheckedCreateWithoutSharedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedPostsInput
    upsert?: UserUpsertWithoutSharedPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSharedPostsInput, UserUpdateWithoutSharedPostsInput>, UserUncheckedUpdateWithoutSharedPostsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedSharesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedSharesInput, UserUncheckedCreateWithoutReceivedSharesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedSharesInput
    upsert?: UserUpsertWithoutReceivedSharesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedSharesInput, UserUpdateWithoutReceivedSharesInput>, UserUncheckedUpdateWithoutReceivedSharesInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedEnumPostTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostTypeFilter<$PrismaModel> | $Enums.PostType
  }

  export type NestedEnumPostTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostTypeWithAggregatesFilter<$PrismaModel> | $Enums.PostType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostTypeFilter<$PrismaModel>
    _max?: NestedEnumPostTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumCommentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentType | EnumCommentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CommentType[] | ListEnumCommentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentType[] | ListEnumCommentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentTypeFilter<$PrismaModel> | $Enums.CommentType
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumCommentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentType | EnumCommentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CommentType[] | ListEnumCommentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentType[] | ListEnumCommentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentTypeWithAggregatesFilter<$PrismaModel> | $Enums.CommentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommentTypeFilter<$PrismaModel>
    _max?: NestedEnumCommentTypeFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token: string
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token: string
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutUserInput = {
    id?: string
    caption?: string | null
    postImage?: PostCreatepostImageInput | InputJsonValue[]
    type?: $Enums.PostType
    createdAt?: Date | string
    postComments?: CommentsCreateNestedManyWithoutPostInput
    likes?: UserCreateNestedManyWithoutLikedPostsInput
    savedBy?: UserCreateNestedManyWithoutSavedPostsInput
    notifications?: NotificationsCreateNestedManyWithoutPostInput
    sharedPosts?: SharedPostCreateNestedManyWithoutPostInput
    sharedMessages?: MessageCreateNestedManyWithoutSharedPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: string
    caption?: string | null
    postImage?: PostCreatepostImageInput | InputJsonValue[]
    type?: $Enums.PostType
    createdAt?: Date | string
    postComments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    likes?: UserUncheckedCreateNestedManyWithoutLikedPostsInput
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedPostsInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutPostInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutPostInput
    sharedMessages?: MessageUncheckedCreateNestedManyWithoutSharedPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentsCreateWithoutUserInput = {
    id?: string
    body: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutPostCommentsInput
    parent?: CommentsCreateNestedOneWithoutRepliesInput
    replies?: CommentsCreateNestedManyWithoutParentInput
    commentLikes?: UserCreateNestedManyWithoutLikedCommentsInput
    notifications?: NotificationsCreateNestedManyWithoutCommentInput
  }

  export type CommentsUncheckedCreateWithoutUserInput = {
    id?: string
    body: string
    createdAt?: Date | string
    postId: string
    parentId?: string | null
    replies?: CommentsUncheckedCreateNestedManyWithoutParentInput
    commentLikes?: UserUncheckedCreateNestedManyWithoutLikedCommentsInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentsCreateOrConnectWithoutUserInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsCreateManyUserInputEnvelope = {
    data: CommentsCreateManyUserInput | CommentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationsCreateWithoutUserInput = {
    id?: string
    body: string
    createdAt?: Date | string
    markRead?: boolean | null
    type?: $Enums.CommentType
    sender?: UserCreateNestedOneWithoutSentNotificationsInput
    post?: PostCreateNestedOneWithoutNotificationsInput
    comment?: CommentsCreateNestedOneWithoutNotificationsInput
    message?: MessageCreateNestedOneWithoutNotificationInput
  }

  export type NotificationsUncheckedCreateWithoutUserInput = {
    id?: string
    body: string
    createdAt?: Date | string
    markRead?: boolean | null
    senderId?: string | null
    postId?: string | null
    commentId?: string | null
    messageId?: string | null
    type?: $Enums.CommentType
  }

  export type NotificationsCreateOrConnectWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput>
  }

  export type NotificationsCreateManyUserInputEnvelope = {
    data: NotificationsCreateManyUserInput | NotificationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationsCreateWithoutSenderInput = {
    id?: string
    body: string
    createdAt?: Date | string
    markRead?: boolean | null
    type?: $Enums.CommentType
    user: UserCreateNestedOneWithoutNotificationsInput
    post?: PostCreateNestedOneWithoutNotificationsInput
    comment?: CommentsCreateNestedOneWithoutNotificationsInput
    message?: MessageCreateNestedOneWithoutNotificationInput
  }

  export type NotificationsUncheckedCreateWithoutSenderInput = {
    id?: string
    body: string
    createdAt?: Date | string
    markRead?: boolean | null
    userId: string
    postId?: string | null
    commentId?: string | null
    messageId?: string | null
    type?: $Enums.CommentType
  }

  export type NotificationsCreateOrConnectWithoutSenderInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutSenderInput, NotificationsUncheckedCreateWithoutSenderInput>
  }

  export type NotificationsCreateManySenderInputEnvelope = {
    data: NotificationsCreateManySenderInput | NotificationsCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutLikesInput = {
    id?: string
    caption?: string | null
    postImage?: PostCreatepostImageInput | InputJsonValue[]
    type?: $Enums.PostType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    postComments?: CommentsCreateNestedManyWithoutPostInput
    savedBy?: UserCreateNestedManyWithoutSavedPostsInput
    notifications?: NotificationsCreateNestedManyWithoutPostInput
    sharedPosts?: SharedPostCreateNestedManyWithoutPostInput
    sharedMessages?: MessageCreateNestedManyWithoutSharedPostInput
  }

  export type PostUncheckedCreateWithoutLikesInput = {
    id?: string
    caption?: string | null
    postImage?: PostCreatepostImageInput | InputJsonValue[]
    type?: $Enums.PostType
    createdAt?: Date | string
    userId: string
    postComments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedPostsInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutPostInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutPostInput
    sharedMessages?: MessageUncheckedCreateNestedManyWithoutSharedPostInput
  }

  export type PostCreateOrConnectWithoutLikesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
  }

  export type CommentsCreateWithoutCommentLikesInput = {
    id?: string
    body: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutPostCommentsInput
    user: UserCreateNestedOneWithoutUserCommentsInput
    parent?: CommentsCreateNestedOneWithoutRepliesInput
    replies?: CommentsCreateNestedManyWithoutParentInput
    notifications?: NotificationsCreateNestedManyWithoutCommentInput
  }

  export type CommentsUncheckedCreateWithoutCommentLikesInput = {
    id?: string
    body: string
    createdAt?: Date | string
    postId: string
    userId: string
    parentId?: string | null
    replies?: CommentsUncheckedCreateNestedManyWithoutParentInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentsCreateOrConnectWithoutCommentLikesInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutCommentLikesInput, CommentsUncheckedCreateWithoutCommentLikesInput>
  }

  export type PostCreateWithoutSavedByInput = {
    id?: string
    caption?: string | null
    postImage?: PostCreatepostImageInput | InputJsonValue[]
    type?: $Enums.PostType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    postComments?: CommentsCreateNestedManyWithoutPostInput
    likes?: UserCreateNestedManyWithoutLikedPostsInput
    notifications?: NotificationsCreateNestedManyWithoutPostInput
    sharedPosts?: SharedPostCreateNestedManyWithoutPostInput
    sharedMessages?: MessageCreateNestedManyWithoutSharedPostInput
  }

  export type PostUncheckedCreateWithoutSavedByInput = {
    id?: string
    caption?: string | null
    postImage?: PostCreatepostImageInput | InputJsonValue[]
    type?: $Enums.PostType
    createdAt?: Date | string
    userId: string
    postComments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    likes?: UserUncheckedCreateNestedManyWithoutLikedPostsInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutPostInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutPostInput
    sharedMessages?: MessageUncheckedCreateNestedManyWithoutSharedPostInput
  }

  export type PostCreateOrConnectWithoutSavedByInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutSavedByInput, PostUncheckedCreateWithoutSavedByInput>
  }

  export type ConversationCreateWithoutUser1Input = {
    id?: string
    createdAt?: Date | string
    lastMessageAt?: Date | string
    user2: UserCreateNestedOneWithoutConversations2Input
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutUser1Input = {
    id?: string
    createdAt?: Date | string
    lastMessageAt?: Date | string
    user2Id: string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutUser1Input = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutUser1Input, ConversationUncheckedCreateWithoutUser1Input>
  }

  export type ConversationCreateManyUser1InputEnvelope = {
    data: ConversationCreateManyUser1Input | ConversationCreateManyUser1Input[]
    skipDuplicates?: boolean
  }

  export type ConversationCreateWithoutUser2Input = {
    id?: string
    createdAt?: Date | string
    lastMessageAt?: Date | string
    user1: UserCreateNestedOneWithoutConversations1Input
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutUser2Input = {
    id?: string
    createdAt?: Date | string
    lastMessageAt?: Date | string
    user1Id: string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutUser2Input = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutUser2Input, ConversationUncheckedCreateWithoutUser2Input>
  }

  export type ConversationCreateManyUser2InputEnvelope = {
    data: ConversationCreateManyUser2Input | ConversationCreateManyUser2Input[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    body?: string | null
    media?: string | null
    createdAt?: Date | string
    seen?: boolean
    delivered?: boolean
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    conversation: ConversationCreateNestedOneWithoutMessagesInput
    sharedPost?: PostCreateNestedOneWithoutSharedMessagesInput
    reactions?: MessageReactionCreateNestedManyWithoutMessageInput
    notification?: NotificationsCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    body?: string | null
    media?: string | null
    createdAt?: Date | string
    receiverId: string
    conversationId: string
    seen?: boolean
    delivered?: boolean
    sharedPostId?: string | null
    reactions?: MessageReactionUncheckedCreateNestedManyWithoutMessageInput
    notification?: NotificationsUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutReceiverInput = {
    id?: string
    body?: string | null
    media?: string | null
    createdAt?: Date | string
    seen?: boolean
    delivered?: boolean
    sender: UserCreateNestedOneWithoutMessagesInput
    conversation: ConversationCreateNestedOneWithoutMessagesInput
    sharedPost?: PostCreateNestedOneWithoutSharedMessagesInput
    reactions?: MessageReactionCreateNestedManyWithoutMessageInput
    notification?: NotificationsCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: string
    body?: string | null
    media?: string | null
    createdAt?: Date | string
    senderId: string
    conversationId: string
    seen?: boolean
    delivered?: boolean
    sharedPostId?: string | null
    reactions?: MessageReactionUncheckedCreateNestedManyWithoutMessageInput
    notification?: NotificationsUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageCreateManyReceiverInputEnvelope = {
    data: MessageCreateManyReceiverInput | MessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type SharedPostCreateWithoutSharedByInput = {
    id?: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutSharedPostsInput
    sharedTo: UserCreateNestedOneWithoutReceivedSharesInput
  }

  export type SharedPostUncheckedCreateWithoutSharedByInput = {
    id?: string
    createdAt?: Date | string
    postId: string
    sharedToId: string
  }

  export type SharedPostCreateOrConnectWithoutSharedByInput = {
    where: SharedPostWhereUniqueInput
    create: XOR<SharedPostCreateWithoutSharedByInput, SharedPostUncheckedCreateWithoutSharedByInput>
  }

  export type SharedPostCreateManySharedByInputEnvelope = {
    data: SharedPostCreateManySharedByInput | SharedPostCreateManySharedByInput[]
    skipDuplicates?: boolean
  }

  export type SharedPostCreateWithoutSharedToInput = {
    id?: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutSharedPostsInput
    sharedBy: UserCreateNestedOneWithoutSharedPostsInput
  }

  export type SharedPostUncheckedCreateWithoutSharedToInput = {
    id?: string
    createdAt?: Date | string
    postId: string
    sharedById: string
  }

  export type SharedPostCreateOrConnectWithoutSharedToInput = {
    where: SharedPostWhereUniqueInput
    create: XOR<SharedPostCreateWithoutSharedToInput, SharedPostUncheckedCreateWithoutSharedToInput>
  }

  export type SharedPostCreateManySharedToInputEnvelope = {
    data: SharedPostCreateManySharedToInput | SharedPostCreateManySharedToInput[]
    skipDuplicates?: boolean
  }

  export type MessageReactionCreateWithoutUserInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    message: MessageCreateNestedOneWithoutReactionsInput
  }

  export type MessageReactionUncheckedCreateWithoutUserInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    messageId: string
  }

  export type MessageReactionCreateOrConnectWithoutUserInput = {
    where: MessageReactionWhereUniqueInput
    create: XOR<MessageReactionCreateWithoutUserInput, MessageReactionUncheckedCreateWithoutUserInput>
  }

  export type MessageReactionCreateManyUserInputEnvelope = {
    data: MessageReactionCreateManyUserInput | MessageReactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringFilter<"Account"> | string
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    caption?: StringNullableFilter<"Post"> | string | null
    postImage?: JsonNullableListFilter<"Post">
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType
    createdAt?: DateTimeFilter<"Post"> | Date | string
    userId?: StringFilter<"Post"> | string
  }

  export type CommentsUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
  }

  export type CommentsUpdateManyWithWhereWithoutUserInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    id?: StringFilter<"Comments"> | string
    body?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    postId?: StringFilter<"Comments"> | string
    userId?: StringFilter<"Comments"> | string
    parentId?: StringNullableFilter<"Comments"> | string | null
  }

  export type NotificationsUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutUserInput, NotificationsUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutUserInput, NotificationsUncheckedUpdateWithoutUserInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutUserInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationsScalarWhereInput = {
    AND?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    OR?: NotificationsScalarWhereInput[]
    NOT?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    id?: StringFilter<"Notifications"> | string
    body?: StringFilter<"Notifications"> | string
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    markRead?: BoolNullableFilter<"Notifications"> | boolean | null
    userId?: StringFilter<"Notifications"> | string
    senderId?: StringNullableFilter<"Notifications"> | string | null
    postId?: StringNullableFilter<"Notifications"> | string | null
    commentId?: StringNullableFilter<"Notifications"> | string | null
    messageId?: StringNullableFilter<"Notifications"> | string | null
    type?: EnumCommentTypeFilter<"Notifications"> | $Enums.CommentType
  }

  export type NotificationsUpsertWithWhereUniqueWithoutSenderInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutSenderInput, NotificationsUncheckedUpdateWithoutSenderInput>
    create: XOR<NotificationsCreateWithoutSenderInput, NotificationsUncheckedCreateWithoutSenderInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutSenderInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutSenderInput, NotificationsUncheckedUpdateWithoutSenderInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutSenderInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutSenderInput>
  }

  export type PostUpsertWithWhereUniqueWithoutLikesInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>
    create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
  }

  export type PostUpdateWithWhereUniqueWithoutLikesInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>
  }

  export type PostUpdateManyWithWhereWithoutLikesInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutLikesInput>
  }

  export type CommentsUpsertWithWhereUniqueWithoutCommentLikesInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutCommentLikesInput, CommentsUncheckedUpdateWithoutCommentLikesInput>
    create: XOR<CommentsCreateWithoutCommentLikesInput, CommentsUncheckedCreateWithoutCommentLikesInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutCommentLikesInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutCommentLikesInput, CommentsUncheckedUpdateWithoutCommentLikesInput>
  }

  export type CommentsUpdateManyWithWhereWithoutCommentLikesInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutCommentLikesInput>
  }

  export type PostUpsertWithWhereUniqueWithoutSavedByInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutSavedByInput, PostUncheckedUpdateWithoutSavedByInput>
    create: XOR<PostCreateWithoutSavedByInput, PostUncheckedCreateWithoutSavedByInput>
  }

  export type PostUpdateWithWhereUniqueWithoutSavedByInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutSavedByInput, PostUncheckedUpdateWithoutSavedByInput>
  }

  export type PostUpdateManyWithWhereWithoutSavedByInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutSavedByInput>
  }

  export type ConversationUpsertWithWhereUniqueWithoutUser1Input = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutUser1Input, ConversationUncheckedUpdateWithoutUser1Input>
    create: XOR<ConversationCreateWithoutUser1Input, ConversationUncheckedCreateWithoutUser1Input>
  }

  export type ConversationUpdateWithWhereUniqueWithoutUser1Input = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutUser1Input, ConversationUncheckedUpdateWithoutUser1Input>
  }

  export type ConversationUpdateManyWithWhereWithoutUser1Input = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutUser1Input>
  }

  export type ConversationScalarWhereInput = {
    AND?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    OR?: ConversationScalarWhereInput[]
    NOT?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    id?: StringFilter<"Conversation"> | string
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    lastMessageAt?: DateTimeFilter<"Conversation"> | Date | string
    user1Id?: StringFilter<"Conversation"> | string
    user2Id?: StringFilter<"Conversation"> | string
  }

  export type ConversationUpsertWithWhereUniqueWithoutUser2Input = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutUser2Input, ConversationUncheckedUpdateWithoutUser2Input>
    create: XOR<ConversationCreateWithoutUser2Input, ConversationUncheckedCreateWithoutUser2Input>
  }

  export type ConversationUpdateWithWhereUniqueWithoutUser2Input = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutUser2Input, ConversationUncheckedUpdateWithoutUser2Input>
  }

  export type ConversationUpdateManyWithWhereWithoutUser2Input = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutUser2Input>
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    body?: StringNullableFilter<"Message"> | string | null
    media?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    conversationId?: StringFilter<"Message"> | string
    seen?: BoolFilter<"Message"> | boolean
    delivered?: BoolFilter<"Message"> | boolean
    sharedPostId?: StringNullableFilter<"Message"> | string | null
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type SharedPostUpsertWithWhereUniqueWithoutSharedByInput = {
    where: SharedPostWhereUniqueInput
    update: XOR<SharedPostUpdateWithoutSharedByInput, SharedPostUncheckedUpdateWithoutSharedByInput>
    create: XOR<SharedPostCreateWithoutSharedByInput, SharedPostUncheckedCreateWithoutSharedByInput>
  }

  export type SharedPostUpdateWithWhereUniqueWithoutSharedByInput = {
    where: SharedPostWhereUniqueInput
    data: XOR<SharedPostUpdateWithoutSharedByInput, SharedPostUncheckedUpdateWithoutSharedByInput>
  }

  export type SharedPostUpdateManyWithWhereWithoutSharedByInput = {
    where: SharedPostScalarWhereInput
    data: XOR<SharedPostUpdateManyMutationInput, SharedPostUncheckedUpdateManyWithoutSharedByInput>
  }

  export type SharedPostScalarWhereInput = {
    AND?: SharedPostScalarWhereInput | SharedPostScalarWhereInput[]
    OR?: SharedPostScalarWhereInput[]
    NOT?: SharedPostScalarWhereInput | SharedPostScalarWhereInput[]
    id?: StringFilter<"SharedPost"> | string
    createdAt?: DateTimeFilter<"SharedPost"> | Date | string
    postId?: StringFilter<"SharedPost"> | string
    sharedById?: StringFilter<"SharedPost"> | string
    sharedToId?: StringFilter<"SharedPost"> | string
  }

  export type SharedPostUpsertWithWhereUniqueWithoutSharedToInput = {
    where: SharedPostWhereUniqueInput
    update: XOR<SharedPostUpdateWithoutSharedToInput, SharedPostUncheckedUpdateWithoutSharedToInput>
    create: XOR<SharedPostCreateWithoutSharedToInput, SharedPostUncheckedCreateWithoutSharedToInput>
  }

  export type SharedPostUpdateWithWhereUniqueWithoutSharedToInput = {
    where: SharedPostWhereUniqueInput
    data: XOR<SharedPostUpdateWithoutSharedToInput, SharedPostUncheckedUpdateWithoutSharedToInput>
  }

  export type SharedPostUpdateManyWithWhereWithoutSharedToInput = {
    where: SharedPostScalarWhereInput
    data: XOR<SharedPostUpdateManyMutationInput, SharedPostUncheckedUpdateManyWithoutSharedToInput>
  }

  export type MessageReactionUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageReactionWhereUniqueInput
    update: XOR<MessageReactionUpdateWithoutUserInput, MessageReactionUncheckedUpdateWithoutUserInput>
    create: XOR<MessageReactionCreateWithoutUserInput, MessageReactionUncheckedCreateWithoutUserInput>
  }

  export type MessageReactionUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageReactionWhereUniqueInput
    data: XOR<MessageReactionUpdateWithoutUserInput, MessageReactionUncheckedUpdateWithoutUserInput>
  }

  export type MessageReactionUpdateManyWithWhereWithoutUserInput = {
    where: MessageReactionScalarWhereInput
    data: XOR<MessageReactionUpdateManyMutationInput, MessageReactionUncheckedUpdateManyWithoutUserInput>
  }

  export type MessageReactionScalarWhereInput = {
    AND?: MessageReactionScalarWhereInput | MessageReactionScalarWhereInput[]
    OR?: MessageReactionScalarWhereInput[]
    NOT?: MessageReactionScalarWhereInput | MessageReactionScalarWhereInput[]
    id?: StringFilter<"MessageReaction"> | string
    emoji?: StringFilter<"MessageReaction"> | string
    createdAt?: DateTimeFilter<"MessageReaction"> | Date | string
    messageId?: StringFilter<"MessageReaction"> | string
    userId?: StringFilter<"MessageReaction"> | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    posts?: PostCreateNestedManyWithoutUserInput
    userComments?: CommentsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
    likedPosts?: PostCreateNestedManyWithoutLikesInput
    likedComments?: CommentsCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationCreateNestedManyWithoutUser1Input
    conversations2?: ConversationCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userComments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
    likedPosts?: PostUncheckedCreateNestedManyWithoutLikesInput
    likedComments?: CommentsUncheckedCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostUncheckedCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    conversations2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostUncheckedCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    posts?: PostUpdateManyWithoutUserNestedInput
    userComments?: CommentsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userComments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUncheckedUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUncheckedUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUncheckedUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUncheckedUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    userComments?: CommentsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
    likedPosts?: PostCreateNestedManyWithoutLikesInput
    likedComments?: CommentsCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationCreateNestedManyWithoutUser1Input
    conversations2?: ConversationCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userComments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
    likedPosts?: PostUncheckedCreateNestedManyWithoutLikesInput
    likedComments?: CommentsUncheckedCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostUncheckedCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    conversations2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostUncheckedCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type CommentsCreateWithoutPostInput = {
    id?: string
    body: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserCommentsInput
    parent?: CommentsCreateNestedOneWithoutRepliesInput
    replies?: CommentsCreateNestedManyWithoutParentInput
    commentLikes?: UserCreateNestedManyWithoutLikedCommentsInput
    notifications?: NotificationsCreateNestedManyWithoutCommentInput
  }

  export type CommentsUncheckedCreateWithoutPostInput = {
    id?: string
    body: string
    createdAt?: Date | string
    userId: string
    parentId?: string | null
    replies?: CommentsUncheckedCreateNestedManyWithoutParentInput
    commentLikes?: UserUncheckedCreateNestedManyWithoutLikedCommentsInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentsCreateOrConnectWithoutPostInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput>
  }

  export type CommentsCreateManyPostInputEnvelope = {
    data: CommentsCreateManyPostInput | CommentsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutLikedPostsInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userComments?: CommentsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
    likedComments?: CommentsCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationCreateNestedManyWithoutUser1Input
    conversations2?: ConversationCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedPostsInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userComments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
    likedComments?: CommentsUncheckedCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostUncheckedCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    conversations2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostUncheckedCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedPostsInput, UserUncheckedCreateWithoutLikedPostsInput>
  }

  export type UserCreateWithoutSavedPostsInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userComments?: CommentsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
    likedPosts?: PostCreateNestedManyWithoutLikesInput
    likedComments?: CommentsCreateNestedManyWithoutCommentLikesInput
    conversations1?: ConversationCreateNestedManyWithoutUser1Input
    conversations2?: ConversationCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedPostsInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userComments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
    likedPosts?: PostUncheckedCreateNestedManyWithoutLikesInput
    likedComments?: CommentsUncheckedCreateNestedManyWithoutCommentLikesInput
    conversations1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    conversations2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostUncheckedCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedPostsInput, UserUncheckedCreateWithoutSavedPostsInput>
  }

  export type NotificationsCreateWithoutPostInput = {
    id?: string
    body: string
    createdAt?: Date | string
    markRead?: boolean | null
    type?: $Enums.CommentType
    user: UserCreateNestedOneWithoutNotificationsInput
    sender?: UserCreateNestedOneWithoutSentNotificationsInput
    comment?: CommentsCreateNestedOneWithoutNotificationsInput
    message?: MessageCreateNestedOneWithoutNotificationInput
  }

  export type NotificationsUncheckedCreateWithoutPostInput = {
    id?: string
    body: string
    createdAt?: Date | string
    markRead?: boolean | null
    userId: string
    senderId?: string | null
    commentId?: string | null
    messageId?: string | null
    type?: $Enums.CommentType
  }

  export type NotificationsCreateOrConnectWithoutPostInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutPostInput, NotificationsUncheckedCreateWithoutPostInput>
  }

  export type NotificationsCreateManyPostInputEnvelope = {
    data: NotificationsCreateManyPostInput | NotificationsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type SharedPostCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    sharedBy: UserCreateNestedOneWithoutSharedPostsInput
    sharedTo: UserCreateNestedOneWithoutReceivedSharesInput
  }

  export type SharedPostUncheckedCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    sharedById: string
    sharedToId: string
  }

  export type SharedPostCreateOrConnectWithoutPostInput = {
    where: SharedPostWhereUniqueInput
    create: XOR<SharedPostCreateWithoutPostInput, SharedPostUncheckedCreateWithoutPostInput>
  }

  export type SharedPostCreateManyPostInputEnvelope = {
    data: SharedPostCreateManyPostInput | SharedPostCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSharedPostInput = {
    id?: string
    body?: string | null
    media?: string | null
    createdAt?: Date | string
    seen?: boolean
    delivered?: boolean
    sender: UserCreateNestedOneWithoutMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    conversation: ConversationCreateNestedOneWithoutMessagesInput
    reactions?: MessageReactionCreateNestedManyWithoutMessageInput
    notification?: NotificationsCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutSharedPostInput = {
    id?: string
    body?: string | null
    media?: string | null
    createdAt?: Date | string
    senderId: string
    receiverId: string
    conversationId: string
    seen?: boolean
    delivered?: boolean
    reactions?: MessageReactionUncheckedCreateNestedManyWithoutMessageInput
    notification?: NotificationsUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutSharedPostInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSharedPostInput, MessageUncheckedCreateWithoutSharedPostInput>
  }

  export type MessageCreateManySharedPostInputEnvelope = {
    data: MessageCreateManySharedPostInput | MessageCreateManySharedPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userComments?: CommentsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userComments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUncheckedUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUncheckedUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUncheckedUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUncheckedUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentsUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutPostInput, CommentsUncheckedUpdateWithoutPostInput>
    create: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutPostInput, CommentsUncheckedUpdateWithoutPostInput>
  }

  export type CommentsUpdateManyWithWhereWithoutPostInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutPostInput>
  }

  export type UserUpsertWithWhereUniqueWithoutLikedPostsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutLikedPostsInput, UserUncheckedUpdateWithoutLikedPostsInput>
    create: XOR<UserCreateWithoutLikedPostsInput, UserUncheckedCreateWithoutLikedPostsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutLikedPostsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutLikedPostsInput, UserUncheckedUpdateWithoutLikedPostsInput>
  }

  export type UserUpdateManyWithWhereWithoutLikedPostsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutLikedPostsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    userName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    bio?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    followingIds?: StringNullableListFilter<"User">
  }

  export type UserUpsertWithWhereUniqueWithoutSavedPostsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSavedPostsInput, UserUncheckedUpdateWithoutSavedPostsInput>
    create: XOR<UserCreateWithoutSavedPostsInput, UserUncheckedCreateWithoutSavedPostsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSavedPostsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSavedPostsInput, UserUncheckedUpdateWithoutSavedPostsInput>
  }

  export type UserUpdateManyWithWhereWithoutSavedPostsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSavedPostsInput>
  }

  export type NotificationsUpsertWithWhereUniqueWithoutPostInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutPostInput, NotificationsUncheckedUpdateWithoutPostInput>
    create: XOR<NotificationsCreateWithoutPostInput, NotificationsUncheckedCreateWithoutPostInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutPostInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutPostInput, NotificationsUncheckedUpdateWithoutPostInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutPostInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutPostInput>
  }

  export type SharedPostUpsertWithWhereUniqueWithoutPostInput = {
    where: SharedPostWhereUniqueInput
    update: XOR<SharedPostUpdateWithoutPostInput, SharedPostUncheckedUpdateWithoutPostInput>
    create: XOR<SharedPostCreateWithoutPostInput, SharedPostUncheckedCreateWithoutPostInput>
  }

  export type SharedPostUpdateWithWhereUniqueWithoutPostInput = {
    where: SharedPostWhereUniqueInput
    data: XOR<SharedPostUpdateWithoutPostInput, SharedPostUncheckedUpdateWithoutPostInput>
  }

  export type SharedPostUpdateManyWithWhereWithoutPostInput = {
    where: SharedPostScalarWhereInput
    data: XOR<SharedPostUpdateManyMutationInput, SharedPostUncheckedUpdateManyWithoutPostInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutSharedPostInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSharedPostInput, MessageUncheckedUpdateWithoutSharedPostInput>
    create: XOR<MessageCreateWithoutSharedPostInput, MessageUncheckedCreateWithoutSharedPostInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSharedPostInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSharedPostInput, MessageUncheckedUpdateWithoutSharedPostInput>
  }

  export type MessageUpdateManyWithWhereWithoutSharedPostInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSharedPostInput>
  }

  export type PostCreateWithoutPostCommentsInput = {
    id?: string
    caption?: string | null
    postImage?: PostCreatepostImageInput | InputJsonValue[]
    type?: $Enums.PostType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    likes?: UserCreateNestedManyWithoutLikedPostsInput
    savedBy?: UserCreateNestedManyWithoutSavedPostsInput
    notifications?: NotificationsCreateNestedManyWithoutPostInput
    sharedPosts?: SharedPostCreateNestedManyWithoutPostInput
    sharedMessages?: MessageCreateNestedManyWithoutSharedPostInput
  }

  export type PostUncheckedCreateWithoutPostCommentsInput = {
    id?: string
    caption?: string | null
    postImage?: PostCreatepostImageInput | InputJsonValue[]
    type?: $Enums.PostType
    createdAt?: Date | string
    userId: string
    likes?: UserUncheckedCreateNestedManyWithoutLikedPostsInput
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedPostsInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutPostInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutPostInput
    sharedMessages?: MessageUncheckedCreateNestedManyWithoutSharedPostInput
  }

  export type PostCreateOrConnectWithoutPostCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostCommentsInput, PostUncheckedCreateWithoutPostCommentsInput>
  }

  export type UserCreateWithoutUserCommentsInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
    likedPosts?: PostCreateNestedManyWithoutLikesInput
    likedComments?: CommentsCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationCreateNestedManyWithoutUser1Input
    conversations2?: ConversationCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserCommentsInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
    likedPosts?: PostUncheckedCreateNestedManyWithoutLikesInput
    likedComments?: CommentsUncheckedCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostUncheckedCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    conversations2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostUncheckedCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserCommentsInput, UserUncheckedCreateWithoutUserCommentsInput>
  }

  export type CommentsCreateWithoutRepliesInput = {
    id?: string
    body: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutPostCommentsInput
    user: UserCreateNestedOneWithoutUserCommentsInput
    parent?: CommentsCreateNestedOneWithoutRepliesInput
    commentLikes?: UserCreateNestedManyWithoutLikedCommentsInput
    notifications?: NotificationsCreateNestedManyWithoutCommentInput
  }

  export type CommentsUncheckedCreateWithoutRepliesInput = {
    id?: string
    body: string
    createdAt?: Date | string
    postId: string
    userId: string
    parentId?: string | null
    commentLikes?: UserUncheckedCreateNestedManyWithoutLikedCommentsInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentsCreateOrConnectWithoutRepliesInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutRepliesInput, CommentsUncheckedCreateWithoutRepliesInput>
  }

  export type CommentsCreateWithoutParentInput = {
    id?: string
    body: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutPostCommentsInput
    user: UserCreateNestedOneWithoutUserCommentsInput
    replies?: CommentsCreateNestedManyWithoutParentInput
    commentLikes?: UserCreateNestedManyWithoutLikedCommentsInput
    notifications?: NotificationsCreateNestedManyWithoutCommentInput
  }

  export type CommentsUncheckedCreateWithoutParentInput = {
    id?: string
    body: string
    createdAt?: Date | string
    postId: string
    userId: string
    replies?: CommentsUncheckedCreateNestedManyWithoutParentInput
    commentLikes?: UserUncheckedCreateNestedManyWithoutLikedCommentsInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentsCreateOrConnectWithoutParentInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput>
  }

  export type CommentsCreateManyParentInputEnvelope = {
    data: CommentsCreateManyParentInput | CommentsCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutLikedCommentsInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userComments?: CommentsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
    likedPosts?: PostCreateNestedManyWithoutLikesInput
    savedPosts?: PostCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationCreateNestedManyWithoutUser1Input
    conversations2?: ConversationCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedCommentsInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userComments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
    likedPosts?: PostUncheckedCreateNestedManyWithoutLikesInput
    savedPosts?: PostUncheckedCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    conversations2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostUncheckedCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedCommentsInput, UserUncheckedCreateWithoutLikedCommentsInput>
  }

  export type NotificationsCreateWithoutCommentInput = {
    id?: string
    body: string
    createdAt?: Date | string
    markRead?: boolean | null
    type?: $Enums.CommentType
    user: UserCreateNestedOneWithoutNotificationsInput
    sender?: UserCreateNestedOneWithoutSentNotificationsInput
    post?: PostCreateNestedOneWithoutNotificationsInput
    message?: MessageCreateNestedOneWithoutNotificationInput
  }

  export type NotificationsUncheckedCreateWithoutCommentInput = {
    id?: string
    body: string
    createdAt?: Date | string
    markRead?: boolean | null
    userId: string
    senderId?: string | null
    postId?: string | null
    messageId?: string | null
    type?: $Enums.CommentType
  }

  export type NotificationsCreateOrConnectWithoutCommentInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutCommentInput, NotificationsUncheckedCreateWithoutCommentInput>
  }

  export type NotificationsCreateManyCommentInputEnvelope = {
    data: NotificationsCreateManyCommentInput | NotificationsCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithoutPostCommentsInput = {
    update: XOR<PostUpdateWithoutPostCommentsInput, PostUncheckedUpdateWithoutPostCommentsInput>
    create: XOR<PostCreateWithoutPostCommentsInput, PostUncheckedCreateWithoutPostCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPostCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPostCommentsInput, PostUncheckedUpdateWithoutPostCommentsInput>
  }

  export type PostUpdateWithoutPostCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    likes?: UserUpdateManyWithoutLikedPostsNestedInput
    savedBy?: UserUpdateManyWithoutSavedPostsNestedInput
    notifications?: NotificationsUpdateManyWithoutPostNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutPostNestedInput
    sharedMessages?: MessageUpdateManyWithoutSharedPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPostCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    likes?: UserUncheckedUpdateManyWithoutLikedPostsNestedInput
    savedBy?: UserUncheckedUpdateManyWithoutSavedPostsNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutPostNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutPostNestedInput
    sharedMessages?: MessageUncheckedUpdateManyWithoutSharedPostNestedInput
  }

  export type UserUpsertWithoutUserCommentsInput = {
    update: XOR<UserUpdateWithoutUserCommentsInput, UserUncheckedUpdateWithoutUserCommentsInput>
    create: XOR<UserCreateWithoutUserCommentsInput, UserUncheckedCreateWithoutUserCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserCommentsInput, UserUncheckedUpdateWithoutUserCommentsInput>
  }

  export type UserUpdateWithoutUserCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUncheckedUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUncheckedUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUncheckedUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUncheckedUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentsUpsertWithoutRepliesInput = {
    update: XOR<CommentsUpdateWithoutRepliesInput, CommentsUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentsCreateWithoutRepliesInput, CommentsUncheckedCreateWithoutRepliesInput>
    where?: CommentsWhereInput
  }

  export type CommentsUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentsWhereInput
    data: XOR<CommentsUpdateWithoutRepliesInput, CommentsUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentsUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPostCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutUserCommentsNestedInput
    parent?: CommentsUpdateOneWithoutRepliesNestedInput
    commentLikes?: UserUpdateManyWithoutLikedCommentsNestedInput
    notifications?: NotificationsUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    commentLikes?: UserUncheckedUpdateManyWithoutLikedCommentsNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutParentInput, CommentsUncheckedUpdateWithoutParentInput>
    create: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutParentInput, CommentsUncheckedUpdateWithoutParentInput>
  }

  export type CommentsUpdateManyWithWhereWithoutParentInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutParentInput>
  }

  export type UserUpsertWithWhereUniqueWithoutLikedCommentsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutLikedCommentsInput, UserUncheckedUpdateWithoutLikedCommentsInput>
    create: XOR<UserCreateWithoutLikedCommentsInput, UserUncheckedCreateWithoutLikedCommentsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutLikedCommentsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutLikedCommentsInput, UserUncheckedUpdateWithoutLikedCommentsInput>
  }

  export type UserUpdateManyWithWhereWithoutLikedCommentsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutLikedCommentsInput>
  }

  export type NotificationsUpsertWithWhereUniqueWithoutCommentInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutCommentInput, NotificationsUncheckedUpdateWithoutCommentInput>
    create: XOR<NotificationsCreateWithoutCommentInput, NotificationsUncheckedCreateWithoutCommentInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutCommentInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutCommentInput, NotificationsUncheckedUpdateWithoutCommentInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutCommentInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutCommentInput>
  }

  export type UserCreateWithoutConversations1Input = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userComments?: CommentsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
    likedPosts?: PostCreateNestedManyWithoutLikesInput
    likedComments?: CommentsCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostCreateNestedManyWithoutSavedByInput
    conversations2?: ConversationCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConversations1Input = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userComments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
    likedPosts?: PostUncheckedCreateNestedManyWithoutLikesInput
    likedComments?: CommentsUncheckedCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostUncheckedCreateNestedManyWithoutSavedByInput
    conversations2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostUncheckedCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConversations1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConversations1Input, UserUncheckedCreateWithoutConversations1Input>
  }

  export type UserCreateWithoutConversations2Input = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userComments?: CommentsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
    likedPosts?: PostCreateNestedManyWithoutLikesInput
    likedComments?: CommentsCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationCreateNestedManyWithoutUser1Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConversations2Input = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userComments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
    likedPosts?: PostUncheckedCreateNestedManyWithoutLikesInput
    likedComments?: CommentsUncheckedCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostUncheckedCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostUncheckedCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConversations2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConversations2Input, UserUncheckedCreateWithoutConversations2Input>
  }

  export type MessageCreateWithoutConversationInput = {
    id?: string
    body?: string | null
    media?: string | null
    createdAt?: Date | string
    seen?: boolean
    delivered?: boolean
    sender: UserCreateNestedOneWithoutMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    sharedPost?: PostCreateNestedOneWithoutSharedMessagesInput
    reactions?: MessageReactionCreateNestedManyWithoutMessageInput
    notification?: NotificationsCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutConversationInput = {
    id?: string
    body?: string | null
    media?: string | null
    createdAt?: Date | string
    senderId: string
    receiverId: string
    seen?: boolean
    delivered?: boolean
    sharedPostId?: string | null
    reactions?: MessageReactionUncheckedCreateNestedManyWithoutMessageInput
    notification?: NotificationsUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageCreateManyConversationInputEnvelope = {
    data: MessageCreateManyConversationInput | MessageCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutConversations1Input = {
    update: XOR<UserUpdateWithoutConversations1Input, UserUncheckedUpdateWithoutConversations1Input>
    create: XOR<UserCreateWithoutConversations1Input, UserUncheckedCreateWithoutConversations1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConversations1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConversations1Input, UserUncheckedUpdateWithoutConversations1Input>
  }

  export type UserUpdateWithoutConversations1Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userComments?: CommentsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUpdateManyWithoutSavedByNestedInput
    conversations2?: ConversationUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConversations1Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userComments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUncheckedUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUncheckedUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUncheckedUpdateManyWithoutSavedByNestedInput
    conversations2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUncheckedUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutConversations2Input = {
    update: XOR<UserUpdateWithoutConversations2Input, UserUncheckedUpdateWithoutConversations2Input>
    create: XOR<UserCreateWithoutConversations2Input, UserUncheckedCreateWithoutConversations2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConversations2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConversations2Input, UserUncheckedUpdateWithoutConversations2Input>
  }

  export type UserUpdateWithoutConversations2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userComments?: CommentsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUpdateManyWithoutUser1NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConversations2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userComments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUncheckedUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUncheckedUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUncheckedUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUncheckedUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userComments?: CommentsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
    likedPosts?: PostCreateNestedManyWithoutLikesInput
    likedComments?: CommentsCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationCreateNestedManyWithoutUser1Input
    conversations2?: ConversationCreateNestedManyWithoutUser2Input
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userComments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
    likedPosts?: PostUncheckedCreateNestedManyWithoutLikesInput
    likedComments?: CommentsUncheckedCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostUncheckedCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    conversations2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostUncheckedCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userComments?: CommentsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
    likedPosts?: PostCreateNestedManyWithoutLikesInput
    likedComments?: CommentsCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationCreateNestedManyWithoutUser1Input
    conversations2?: ConversationCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    sharedPosts?: SharedPostCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userComments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
    likedPosts?: PostUncheckedCreateNestedManyWithoutLikesInput
    likedComments?: CommentsUncheckedCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostUncheckedCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    conversations2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostUncheckedCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type ConversationCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    lastMessageAt?: Date | string
    user1: UserCreateNestedOneWithoutConversations1Input
    user2: UserCreateNestedOneWithoutConversations2Input
  }

  export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    lastMessageAt?: Date | string
    user1Id: string
    user2Id: string
  }

  export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
  }

  export type PostCreateWithoutSharedMessagesInput = {
    id?: string
    caption?: string | null
    postImage?: PostCreatepostImageInput | InputJsonValue[]
    type?: $Enums.PostType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    postComments?: CommentsCreateNestedManyWithoutPostInput
    likes?: UserCreateNestedManyWithoutLikedPostsInput
    savedBy?: UserCreateNestedManyWithoutSavedPostsInput
    notifications?: NotificationsCreateNestedManyWithoutPostInput
    sharedPosts?: SharedPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutSharedMessagesInput = {
    id?: string
    caption?: string | null
    postImage?: PostCreatepostImageInput | InputJsonValue[]
    type?: $Enums.PostType
    createdAt?: Date | string
    userId: string
    postComments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    likes?: UserUncheckedCreateNestedManyWithoutLikedPostsInput
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedPostsInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutPostInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutSharedMessagesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutSharedMessagesInput, PostUncheckedCreateWithoutSharedMessagesInput>
  }

  export type MessageReactionCreateWithoutMessageInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMessageReactionsInput
  }

  export type MessageReactionUncheckedCreateWithoutMessageInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    userId: string
  }

  export type MessageReactionCreateOrConnectWithoutMessageInput = {
    where: MessageReactionWhereUniqueInput
    create: XOR<MessageReactionCreateWithoutMessageInput, MessageReactionUncheckedCreateWithoutMessageInput>
  }

  export type MessageReactionCreateManyMessageInputEnvelope = {
    data: MessageReactionCreateManyMessageInput | MessageReactionCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type NotificationsCreateWithoutMessageInput = {
    id?: string
    body: string
    createdAt?: Date | string
    markRead?: boolean | null
    type?: $Enums.CommentType
    user: UserCreateNestedOneWithoutNotificationsInput
    sender?: UserCreateNestedOneWithoutSentNotificationsInput
    post?: PostCreateNestedOneWithoutNotificationsInput
    comment?: CommentsCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationsUncheckedCreateWithoutMessageInput = {
    id?: string
    body: string
    createdAt?: Date | string
    markRead?: boolean | null
    userId: string
    senderId?: string | null
    postId?: string | null
    commentId?: string | null
    type?: $Enums.CommentType
  }

  export type NotificationsCreateOrConnectWithoutMessageInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutMessageInput, NotificationsUncheckedCreateWithoutMessageInput>
  }

  export type NotificationsCreateManyMessageInputEnvelope = {
    data: NotificationsCreateManyMessageInput | NotificationsCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userComments?: CommentsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUpdateManyWithoutUser2NestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userComments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUncheckedUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUncheckedUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUncheckedUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUncheckedUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userComments?: CommentsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userComments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUncheckedUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUncheckedUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUncheckedUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUncheckedUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConversationUpsertWithoutMessagesInput = {
    update: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutConversations1NestedInput
    user2?: UserUpdateOneRequiredWithoutConversations2NestedInput
  }

  export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpsertWithoutSharedMessagesInput = {
    update: XOR<PostUpdateWithoutSharedMessagesInput, PostUncheckedUpdateWithoutSharedMessagesInput>
    create: XOR<PostCreateWithoutSharedMessagesInput, PostUncheckedCreateWithoutSharedMessagesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutSharedMessagesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutSharedMessagesInput, PostUncheckedUpdateWithoutSharedMessagesInput>
  }

  export type PostUpdateWithoutSharedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    postComments?: CommentsUpdateManyWithoutPostNestedInput
    likes?: UserUpdateManyWithoutLikedPostsNestedInput
    savedBy?: UserUpdateManyWithoutSavedPostsNestedInput
    notifications?: NotificationsUpdateManyWithoutPostNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutSharedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postComments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    likes?: UserUncheckedUpdateManyWithoutLikedPostsNestedInput
    savedBy?: UserUncheckedUpdateManyWithoutSavedPostsNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutPostNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type MessageReactionUpsertWithWhereUniqueWithoutMessageInput = {
    where: MessageReactionWhereUniqueInput
    update: XOR<MessageReactionUpdateWithoutMessageInput, MessageReactionUncheckedUpdateWithoutMessageInput>
    create: XOR<MessageReactionCreateWithoutMessageInput, MessageReactionUncheckedCreateWithoutMessageInput>
  }

  export type MessageReactionUpdateWithWhereUniqueWithoutMessageInput = {
    where: MessageReactionWhereUniqueInput
    data: XOR<MessageReactionUpdateWithoutMessageInput, MessageReactionUncheckedUpdateWithoutMessageInput>
  }

  export type MessageReactionUpdateManyWithWhereWithoutMessageInput = {
    where: MessageReactionScalarWhereInput
    data: XOR<MessageReactionUpdateManyMutationInput, MessageReactionUncheckedUpdateManyWithoutMessageInput>
  }

  export type NotificationsUpsertWithWhereUniqueWithoutMessageInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutMessageInput, NotificationsUncheckedUpdateWithoutMessageInput>
    create: XOR<NotificationsCreateWithoutMessageInput, NotificationsUncheckedCreateWithoutMessageInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutMessageInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutMessageInput, NotificationsUncheckedUpdateWithoutMessageInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutMessageInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutMessageInput>
  }

  export type MessageCreateWithoutReactionsInput = {
    id?: string
    body?: string | null
    media?: string | null
    createdAt?: Date | string
    seen?: boolean
    delivered?: boolean
    sender: UserCreateNestedOneWithoutMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    conversation: ConversationCreateNestedOneWithoutMessagesInput
    sharedPost?: PostCreateNestedOneWithoutSharedMessagesInput
    notification?: NotificationsCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutReactionsInput = {
    id?: string
    body?: string | null
    media?: string | null
    createdAt?: Date | string
    senderId: string
    receiverId: string
    conversationId: string
    seen?: boolean
    delivered?: boolean
    sharedPostId?: string | null
    notification?: NotificationsUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutReactionsInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReactionsInput, MessageUncheckedCreateWithoutReactionsInput>
  }

  export type UserCreateWithoutMessageReactionsInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userComments?: CommentsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
    likedPosts?: PostCreateNestedManyWithoutLikesInput
    likedComments?: CommentsCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationCreateNestedManyWithoutUser1Input
    conversations2?: ConversationCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostCreateNestedManyWithoutSharedToInput
  }

  export type UserUncheckedCreateWithoutMessageReactionsInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userComments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
    likedPosts?: PostUncheckedCreateNestedManyWithoutLikesInput
    likedComments?: CommentsUncheckedCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostUncheckedCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    conversations2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostUncheckedCreateNestedManyWithoutSharedToInput
  }

  export type UserCreateOrConnectWithoutMessageReactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessageReactionsInput, UserUncheckedCreateWithoutMessageReactionsInput>
  }

  export type MessageUpsertWithoutReactionsInput = {
    update: XOR<MessageUpdateWithoutReactionsInput, MessageUncheckedUpdateWithoutReactionsInput>
    create: XOR<MessageCreateWithoutReactionsInput, MessageUncheckedCreateWithoutReactionsInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutReactionsInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutReactionsInput, MessageUncheckedUpdateWithoutReactionsInput>
  }

  export type MessageUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    delivered?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
    sharedPost?: PostUpdateOneWithoutSharedMessagesNestedInput
    notification?: NotificationsUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    delivered?: BoolFieldUpdateOperationsInput | boolean
    sharedPostId?: NullableStringFieldUpdateOperationsInput | string | null
    notification?: NotificationsUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type UserUpsertWithoutMessageReactionsInput = {
    update: XOR<UserUpdateWithoutMessageReactionsInput, UserUncheckedUpdateWithoutMessageReactionsInput>
    create: XOR<UserCreateWithoutMessageReactionsInput, UserUncheckedCreateWithoutMessageReactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessageReactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessageReactionsInput, UserUncheckedUpdateWithoutMessageReactionsInput>
  }

  export type UserUpdateWithoutMessageReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userComments?: CommentsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUpdateManyWithoutSharedToNestedInput
  }

  export type UserUncheckedUpdateWithoutMessageReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userComments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUncheckedUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUncheckedUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUncheckedUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUncheckedUpdateManyWithoutSharedToNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userComments?: CommentsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
    likedPosts?: PostCreateNestedManyWithoutLikesInput
    likedComments?: CommentsCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationCreateNestedManyWithoutUser1Input
    conversations2?: ConversationCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userComments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
    likedPosts?: PostUncheckedCreateNestedManyWithoutLikesInput
    likedComments?: CommentsUncheckedCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostUncheckedCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    conversations2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostUncheckedCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserCreateWithoutSentNotificationsInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userComments?: CommentsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    likedPosts?: PostCreateNestedManyWithoutLikesInput
    likedComments?: CommentsCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationCreateNestedManyWithoutUser1Input
    conversations2?: ConversationCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentNotificationsInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userComments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    likedPosts?: PostUncheckedCreateNestedManyWithoutLikesInput
    likedComments?: CommentsUncheckedCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostUncheckedCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    conversations2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutSharedByInput
    receivedShares?: SharedPostUncheckedCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentNotificationsInput, UserUncheckedCreateWithoutSentNotificationsInput>
  }

  export type PostCreateWithoutNotificationsInput = {
    id?: string
    caption?: string | null
    postImage?: PostCreatepostImageInput | InputJsonValue[]
    type?: $Enums.PostType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    postComments?: CommentsCreateNestedManyWithoutPostInput
    likes?: UserCreateNestedManyWithoutLikedPostsInput
    savedBy?: UserCreateNestedManyWithoutSavedPostsInput
    sharedPosts?: SharedPostCreateNestedManyWithoutPostInput
    sharedMessages?: MessageCreateNestedManyWithoutSharedPostInput
  }

  export type PostUncheckedCreateWithoutNotificationsInput = {
    id?: string
    caption?: string | null
    postImage?: PostCreatepostImageInput | InputJsonValue[]
    type?: $Enums.PostType
    createdAt?: Date | string
    userId: string
    postComments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    likes?: UserUncheckedCreateNestedManyWithoutLikedPostsInput
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedPostsInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutPostInput
    sharedMessages?: MessageUncheckedCreateNestedManyWithoutSharedPostInput
  }

  export type PostCreateOrConnectWithoutNotificationsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutNotificationsInput, PostUncheckedCreateWithoutNotificationsInput>
  }

  export type CommentsCreateWithoutNotificationsInput = {
    id?: string
    body: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutPostCommentsInput
    user: UserCreateNestedOneWithoutUserCommentsInput
    parent?: CommentsCreateNestedOneWithoutRepliesInput
    replies?: CommentsCreateNestedManyWithoutParentInput
    commentLikes?: UserCreateNestedManyWithoutLikedCommentsInput
  }

  export type CommentsUncheckedCreateWithoutNotificationsInput = {
    id?: string
    body: string
    createdAt?: Date | string
    postId: string
    userId: string
    parentId?: string | null
    replies?: CommentsUncheckedCreateNestedManyWithoutParentInput
    commentLikes?: UserUncheckedCreateNestedManyWithoutLikedCommentsInput
  }

  export type CommentsCreateOrConnectWithoutNotificationsInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutNotificationsInput, CommentsUncheckedCreateWithoutNotificationsInput>
  }

  export type MessageCreateWithoutNotificationInput = {
    id?: string
    body?: string | null
    media?: string | null
    createdAt?: Date | string
    seen?: boolean
    delivered?: boolean
    sender: UserCreateNestedOneWithoutMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    conversation: ConversationCreateNestedOneWithoutMessagesInput
    sharedPost?: PostCreateNestedOneWithoutSharedMessagesInput
    reactions?: MessageReactionCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutNotificationInput = {
    id?: string
    body?: string | null
    media?: string | null
    createdAt?: Date | string
    senderId: string
    receiverId: string
    conversationId: string
    seen?: boolean
    delivered?: boolean
    sharedPostId?: string | null
    reactions?: MessageReactionUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutNotificationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutNotificationInput, MessageUncheckedCreateWithoutNotificationInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userComments?: CommentsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userComments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUncheckedUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUncheckedUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUncheckedUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUncheckedUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutSentNotificationsInput = {
    update: XOR<UserUpdateWithoutSentNotificationsInput, UserUncheckedUpdateWithoutSentNotificationsInput>
    create: XOR<UserCreateWithoutSentNotificationsInput, UserUncheckedCreateWithoutSentNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentNotificationsInput, UserUncheckedUpdateWithoutSentNotificationsInput>
  }

  export type UserUpdateWithoutSentNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userComments?: CommentsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    likedPosts?: PostUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userComments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    likedPosts?: PostUncheckedUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUncheckedUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUncheckedUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUncheckedUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutNotificationsInput = {
    update: XOR<PostUpdateWithoutNotificationsInput, PostUncheckedUpdateWithoutNotificationsInput>
    create: XOR<PostCreateWithoutNotificationsInput, PostUncheckedCreateWithoutNotificationsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutNotificationsInput, PostUncheckedUpdateWithoutNotificationsInput>
  }

  export type PostUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    postComments?: CommentsUpdateManyWithoutPostNestedInput
    likes?: UserUpdateManyWithoutLikedPostsNestedInput
    savedBy?: UserUpdateManyWithoutSavedPostsNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutPostNestedInput
    sharedMessages?: MessageUpdateManyWithoutSharedPostNestedInput
  }

  export type PostUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postComments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    likes?: UserUncheckedUpdateManyWithoutLikedPostsNestedInput
    savedBy?: UserUncheckedUpdateManyWithoutSavedPostsNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutPostNestedInput
    sharedMessages?: MessageUncheckedUpdateManyWithoutSharedPostNestedInput
  }

  export type CommentsUpsertWithoutNotificationsInput = {
    update: XOR<CommentsUpdateWithoutNotificationsInput, CommentsUncheckedUpdateWithoutNotificationsInput>
    create: XOR<CommentsCreateWithoutNotificationsInput, CommentsUncheckedCreateWithoutNotificationsInput>
    where?: CommentsWhereInput
  }

  export type CommentsUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: CommentsWhereInput
    data: XOR<CommentsUpdateWithoutNotificationsInput, CommentsUncheckedUpdateWithoutNotificationsInput>
  }

  export type CommentsUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPostCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutUserCommentsNestedInput
    parent?: CommentsUpdateOneWithoutRepliesNestedInput
    replies?: CommentsUpdateManyWithoutParentNestedInput
    commentLikes?: UserUpdateManyWithoutLikedCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentsUncheckedUpdateManyWithoutParentNestedInput
    commentLikes?: UserUncheckedUpdateManyWithoutLikedCommentsNestedInput
  }

  export type MessageUpsertWithoutNotificationInput = {
    update: XOR<MessageUpdateWithoutNotificationInput, MessageUncheckedUpdateWithoutNotificationInput>
    create: XOR<MessageCreateWithoutNotificationInput, MessageUncheckedCreateWithoutNotificationInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutNotificationInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutNotificationInput, MessageUncheckedUpdateWithoutNotificationInput>
  }

  export type MessageUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    delivered?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
    sharedPost?: PostUpdateOneWithoutSharedMessagesNestedInput
    reactions?: MessageReactionUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    delivered?: BoolFieldUpdateOperationsInput | boolean
    sharedPostId?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: MessageReactionUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type PostCreateWithoutSharedPostsInput = {
    id?: string
    caption?: string | null
    postImage?: PostCreatepostImageInput | InputJsonValue[]
    type?: $Enums.PostType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    postComments?: CommentsCreateNestedManyWithoutPostInput
    likes?: UserCreateNestedManyWithoutLikedPostsInput
    savedBy?: UserCreateNestedManyWithoutSavedPostsInput
    notifications?: NotificationsCreateNestedManyWithoutPostInput
    sharedMessages?: MessageCreateNestedManyWithoutSharedPostInput
  }

  export type PostUncheckedCreateWithoutSharedPostsInput = {
    id?: string
    caption?: string | null
    postImage?: PostCreatepostImageInput | InputJsonValue[]
    type?: $Enums.PostType
    createdAt?: Date | string
    userId: string
    postComments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    likes?: UserUncheckedCreateNestedManyWithoutLikedPostsInput
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedPostsInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutPostInput
    sharedMessages?: MessageUncheckedCreateNestedManyWithoutSharedPostInput
  }

  export type PostCreateOrConnectWithoutSharedPostsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutSharedPostsInput, PostUncheckedCreateWithoutSharedPostsInput>
  }

  export type UserCreateWithoutSharedPostsInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userComments?: CommentsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
    likedPosts?: PostCreateNestedManyWithoutLikesInput
    likedComments?: CommentsCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationCreateNestedManyWithoutUser1Input
    conversations2?: ConversationCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    receivedShares?: SharedPostCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSharedPostsInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userComments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
    likedPosts?: PostUncheckedCreateNestedManyWithoutLikesInput
    likedComments?: CommentsUncheckedCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostUncheckedCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    conversations2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    receivedShares?: SharedPostUncheckedCreateNestedManyWithoutSharedToInput
    messageReactions?: MessageReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSharedPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSharedPostsInput, UserUncheckedCreateWithoutSharedPostsInput>
  }

  export type UserCreateWithoutReceivedSharesInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userComments?: CommentsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
    likedPosts?: PostCreateNestedManyWithoutLikesInput
    likedComments?: CommentsCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationCreateNestedManyWithoutUser1Input
    conversations2?: ConversationCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostCreateNestedManyWithoutSharedByInput
    messageReactions?: MessageReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedSharesInput = {
    id?: string
    name?: string | null
    userName?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    bio?: string | null
    image?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followingIds?: UserCreatefollowingIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userComments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
    likedPosts?: PostUncheckedCreateNestedManyWithoutLikesInput
    likedComments?: CommentsUncheckedCreateNestedManyWithoutCommentLikesInput
    savedPosts?: PostUncheckedCreateNestedManyWithoutSavedByInput
    conversations1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    conversations2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sharedPosts?: SharedPostUncheckedCreateNestedManyWithoutSharedByInput
    messageReactions?: MessageReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedSharesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedSharesInput, UserUncheckedCreateWithoutReceivedSharesInput>
  }

  export type PostUpsertWithoutSharedPostsInput = {
    update: XOR<PostUpdateWithoutSharedPostsInput, PostUncheckedUpdateWithoutSharedPostsInput>
    create: XOR<PostCreateWithoutSharedPostsInput, PostUncheckedCreateWithoutSharedPostsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutSharedPostsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutSharedPostsInput, PostUncheckedUpdateWithoutSharedPostsInput>
  }

  export type PostUpdateWithoutSharedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    postComments?: CommentsUpdateManyWithoutPostNestedInput
    likes?: UserUpdateManyWithoutLikedPostsNestedInput
    savedBy?: UserUpdateManyWithoutSavedPostsNestedInput
    notifications?: NotificationsUpdateManyWithoutPostNestedInput
    sharedMessages?: MessageUpdateManyWithoutSharedPostNestedInput
  }

  export type PostUncheckedUpdateWithoutSharedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postComments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    likes?: UserUncheckedUpdateManyWithoutLikedPostsNestedInput
    savedBy?: UserUncheckedUpdateManyWithoutSavedPostsNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutPostNestedInput
    sharedMessages?: MessageUncheckedUpdateManyWithoutSharedPostNestedInput
  }

  export type UserUpsertWithoutSharedPostsInput = {
    update: XOR<UserUpdateWithoutSharedPostsInput, UserUncheckedUpdateWithoutSharedPostsInput>
    create: XOR<UserCreateWithoutSharedPostsInput, UserUncheckedCreateWithoutSharedPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSharedPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSharedPostsInput, UserUncheckedUpdateWithoutSharedPostsInput>
  }

  export type UserUpdateWithoutSharedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userComments?: CommentsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    receivedShares?: SharedPostUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSharedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userComments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUncheckedUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUncheckedUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUncheckedUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    receivedShares?: SharedPostUncheckedUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedSharesInput = {
    update: XOR<UserUpdateWithoutReceivedSharesInput, UserUncheckedUpdateWithoutReceivedSharesInput>
    create: XOR<UserCreateWithoutReceivedSharesInput, UserUncheckedCreateWithoutReceivedSharesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedSharesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedSharesInput, UserUncheckedUpdateWithoutReceivedSharesInput>
  }

  export type UserUpdateWithoutReceivedSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userComments?: CommentsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutSharedByNestedInput
    messageReactions?: MessageReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userComments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUncheckedUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUncheckedUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUncheckedUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutSharedByNestedInput
    messageReactions?: MessageReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token: string
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type PostCreateManyUserInput = {
    id?: string
    caption?: string | null
    postImage?: PostCreatepostImageInput | InputJsonValue[]
    type?: $Enums.PostType
    createdAt?: Date | string
  }

  export type CommentsCreateManyUserInput = {
    id?: string
    body: string
    createdAt?: Date | string
    postId: string
    parentId?: string | null
  }

  export type NotificationsCreateManyUserInput = {
    id?: string
    body: string
    createdAt?: Date | string
    markRead?: boolean | null
    senderId?: string | null
    postId?: string | null
    commentId?: string | null
    messageId?: string | null
    type?: $Enums.CommentType
  }

  export type NotificationsCreateManySenderInput = {
    id?: string
    body: string
    createdAt?: Date | string
    markRead?: boolean | null
    userId: string
    postId?: string | null
    commentId?: string | null
    messageId?: string | null
    type?: $Enums.CommentType
  }

  export type ConversationCreateManyUser1Input = {
    id?: string
    createdAt?: Date | string
    lastMessageAt?: Date | string
    user2Id: string
  }

  export type ConversationCreateManyUser2Input = {
    id?: string
    createdAt?: Date | string
    lastMessageAt?: Date | string
    user1Id: string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    body?: string | null
    media?: string | null
    createdAt?: Date | string
    receiverId: string
    conversationId: string
    seen?: boolean
    delivered?: boolean
    sharedPostId?: string | null
  }

  export type MessageCreateManyReceiverInput = {
    id?: string
    body?: string | null
    media?: string | null
    createdAt?: Date | string
    senderId: string
    conversationId: string
    seen?: boolean
    delivered?: boolean
    sharedPostId?: string | null
  }

  export type SharedPostCreateManySharedByInput = {
    id?: string
    createdAt?: Date | string
    postId: string
    sharedToId: string
  }

  export type SharedPostCreateManySharedToInput = {
    id?: string
    createdAt?: Date | string
    postId: string
    sharedById: string
  }

  export type MessageReactionCreateManyUserInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    messageId: string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postComments?: CommentsUpdateManyWithoutPostNestedInput
    likes?: UserUpdateManyWithoutLikedPostsNestedInput
    savedBy?: UserUpdateManyWithoutSavedPostsNestedInput
    notifications?: NotificationsUpdateManyWithoutPostNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutPostNestedInput
    sharedMessages?: MessageUpdateManyWithoutSharedPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postComments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    likes?: UserUncheckedUpdateManyWithoutLikedPostsNestedInput
    savedBy?: UserUncheckedUpdateManyWithoutSavedPostsNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutPostNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutPostNestedInput
    sharedMessages?: MessageUncheckedUpdateManyWithoutSharedPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPostCommentsNestedInput
    parent?: CommentsUpdateOneWithoutRepliesNestedInput
    replies?: CommentsUpdateManyWithoutParentNestedInput
    commentLikes?: UserUpdateManyWithoutLikedCommentsNestedInput
    notifications?: NotificationsUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentsUncheckedUpdateManyWithoutParentNestedInput
    commentLikes?: UserUncheckedUpdateManyWithoutLikedCommentsNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: EnumCommentTypeFieldUpdateOperationsInput | $Enums.CommentType
    sender?: UserUpdateOneWithoutSentNotificationsNestedInput
    post?: PostUpdateOneWithoutNotificationsNestedInput
    comment?: CommentsUpdateOneWithoutNotificationsNestedInput
    message?: MessageUpdateOneWithoutNotificationNestedInput
  }

  export type NotificationsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCommentTypeFieldUpdateOperationsInput | $Enums.CommentType
  }

  export type NotificationsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCommentTypeFieldUpdateOperationsInput | $Enums.CommentType
  }

  export type NotificationsUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: EnumCommentTypeFieldUpdateOperationsInput | $Enums.CommentType
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    post?: PostUpdateOneWithoutNotificationsNestedInput
    comment?: CommentsUpdateOneWithoutNotificationsNestedInput
    message?: MessageUpdateOneWithoutNotificationNestedInput
  }

  export type NotificationsUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCommentTypeFieldUpdateOperationsInput | $Enums.CommentType
  }

  export type NotificationsUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCommentTypeFieldUpdateOperationsInput | $Enums.CommentType
  }

  export type PostUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    postComments?: CommentsUpdateManyWithoutPostNestedInput
    savedBy?: UserUpdateManyWithoutSavedPostsNestedInput
    notifications?: NotificationsUpdateManyWithoutPostNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutPostNestedInput
    sharedMessages?: MessageUpdateManyWithoutSharedPostNestedInput
  }

  export type PostUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postComments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    savedBy?: UserUncheckedUpdateManyWithoutSavedPostsNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutPostNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutPostNestedInput
    sharedMessages?: MessageUncheckedUpdateManyWithoutSharedPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsUpdateWithoutCommentLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPostCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutUserCommentsNestedInput
    parent?: CommentsUpdateOneWithoutRepliesNestedInput
    replies?: CommentsUpdateManyWithoutParentNestedInput
    notifications?: NotificationsUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutCommentLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentsUncheckedUpdateManyWithoutParentNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateManyWithoutCommentLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    postComments?: CommentsUpdateManyWithoutPostNestedInput
    likes?: UserUpdateManyWithoutLikedPostsNestedInput
    notifications?: NotificationsUpdateManyWithoutPostNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutPostNestedInput
    sharedMessages?: MessageUpdateManyWithoutSharedPostNestedInput
  }

  export type PostUncheckedUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postComments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    likes?: UserUncheckedUpdateManyWithoutLikedPostsNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutPostNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutPostNestedInput
    sharedMessages?: MessageUncheckedUpdateManyWithoutSharedPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    postImage?: PostUpdatepostImageInput | InputJsonValue[]
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user2?: UserUpdateOneRequiredWithoutConversations2NestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user2Id?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user2Id?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutConversations1NestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1Id?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1Id?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    delivered?: BoolFieldUpdateOperationsInput | boolean
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
    sharedPost?: PostUpdateOneWithoutSharedMessagesNestedInput
    reactions?: MessageReactionUpdateManyWithoutMessageNestedInput
    notification?: NotificationsUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    delivered?: BoolFieldUpdateOperationsInput | boolean
    sharedPostId?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: MessageReactionUncheckedUpdateManyWithoutMessageNestedInput
    notification?: NotificationsUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    delivered?: BoolFieldUpdateOperationsInput | boolean
    sharedPostId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    delivered?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
    sharedPost?: PostUpdateOneWithoutSharedMessagesNestedInput
    reactions?: MessageReactionUpdateManyWithoutMessageNestedInput
    notification?: NotificationsUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    delivered?: BoolFieldUpdateOperationsInput | boolean
    sharedPostId?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: MessageReactionUncheckedUpdateManyWithoutMessageNestedInput
    notification?: NotificationsUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    delivered?: BoolFieldUpdateOperationsInput | boolean
    sharedPostId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SharedPostUpdateWithoutSharedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutSharedPostsNestedInput
    sharedTo?: UserUpdateOneRequiredWithoutReceivedSharesNestedInput
  }

  export type SharedPostUncheckedUpdateWithoutSharedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    sharedToId?: StringFieldUpdateOperationsInput | string
  }

  export type SharedPostUncheckedUpdateManyWithoutSharedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    sharedToId?: StringFieldUpdateOperationsInput | string
  }

  export type SharedPostUpdateWithoutSharedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutSharedPostsNestedInput
    sharedBy?: UserUpdateOneRequiredWithoutSharedPostsNestedInput
  }

  export type SharedPostUncheckedUpdateWithoutSharedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    sharedById?: StringFieldUpdateOperationsInput | string
  }

  export type SharedPostUncheckedUpdateManyWithoutSharedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    sharedById?: StringFieldUpdateOperationsInput | string
  }

  export type MessageReactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type MessageReactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageReactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsCreateManyPostInput = {
    id?: string
    body: string
    createdAt?: Date | string
    userId: string
    parentId?: string | null
  }

  export type NotificationsCreateManyPostInput = {
    id?: string
    body: string
    createdAt?: Date | string
    markRead?: boolean | null
    userId: string
    senderId?: string | null
    commentId?: string | null
    messageId?: string | null
    type?: $Enums.CommentType
  }

  export type SharedPostCreateManyPostInput = {
    id?: string
    createdAt?: Date | string
    sharedById: string
    sharedToId: string
  }

  export type MessageCreateManySharedPostInput = {
    id?: string
    body?: string | null
    media?: string | null
    createdAt?: Date | string
    senderId: string
    receiverId: string
    conversationId: string
    seen?: boolean
    delivered?: boolean
  }

  export type CommentsUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserCommentsNestedInput
    parent?: CommentsUpdateOneWithoutRepliesNestedInput
    replies?: CommentsUpdateManyWithoutParentNestedInput
    commentLikes?: UserUpdateManyWithoutLikedCommentsNestedInput
    notifications?: NotificationsUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentsUncheckedUpdateManyWithoutParentNestedInput
    commentLikes?: UserUncheckedUpdateManyWithoutLikedCommentsNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateWithoutLikedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userComments?: CommentsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
    likedComments?: CommentsUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userComments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
    likedComments?: CommentsUncheckedUpdateManyWithoutCommentLikesNestedInput
    savedPosts?: PostUncheckedUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUncheckedUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutLikedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
  }

  export type UserUpdateWithoutSavedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userComments?: CommentsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUpdateManyWithoutCommentLikesNestedInput
    conversations1?: ConversationUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userComments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUncheckedUpdateManyWithoutLikesNestedInput
    likedComments?: CommentsUncheckedUpdateManyWithoutCommentLikesNestedInput
    conversations1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUncheckedUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSavedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
  }

  export type NotificationsUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: EnumCommentTypeFieldUpdateOperationsInput | $Enums.CommentType
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    sender?: UserUpdateOneWithoutSentNotificationsNestedInput
    comment?: CommentsUpdateOneWithoutNotificationsNestedInput
    message?: MessageUpdateOneWithoutNotificationNestedInput
  }

  export type NotificationsUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCommentTypeFieldUpdateOperationsInput | $Enums.CommentType
  }

  export type NotificationsUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCommentTypeFieldUpdateOperationsInput | $Enums.CommentType
  }

  export type SharedPostUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sharedBy?: UserUpdateOneRequiredWithoutSharedPostsNestedInput
    sharedTo?: UserUpdateOneRequiredWithoutReceivedSharesNestedInput
  }

  export type SharedPostUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sharedById?: StringFieldUpdateOperationsInput | string
    sharedToId?: StringFieldUpdateOperationsInput | string
  }

  export type SharedPostUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sharedById?: StringFieldUpdateOperationsInput | string
    sharedToId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUpdateWithoutSharedPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    delivered?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
    reactions?: MessageReactionUpdateManyWithoutMessageNestedInput
    notification?: NotificationsUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutSharedPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    delivered?: BoolFieldUpdateOperationsInput | boolean
    reactions?: MessageReactionUncheckedUpdateManyWithoutMessageNestedInput
    notification?: NotificationsUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutSharedPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    delivered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentsCreateManyParentInput = {
    id?: string
    body: string
    createdAt?: Date | string
    postId: string
    userId: string
  }

  export type NotificationsCreateManyCommentInput = {
    id?: string
    body: string
    createdAt?: Date | string
    markRead?: boolean | null
    userId: string
    senderId?: string | null
    postId?: string | null
    messageId?: string | null
    type?: $Enums.CommentType
  }

  export type CommentsUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPostCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutUserCommentsNestedInput
    replies?: CommentsUpdateManyWithoutParentNestedInput
    commentLikes?: UserUpdateManyWithoutLikedCommentsNestedInput
    notifications?: NotificationsUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    replies?: CommentsUncheckedUpdateManyWithoutParentNestedInput
    commentLikes?: UserUncheckedUpdateManyWithoutLikedCommentsNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutLikedCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userComments?: CommentsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUpdateManyWithoutLikesNestedInput
    savedPosts?: PostUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userComments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
    likedPosts?: PostUncheckedUpdateManyWithoutLikesNestedInput
    savedPosts?: PostUncheckedUpdateManyWithoutSavedByNestedInput
    conversations1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    conversations2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sharedPosts?: SharedPostUncheckedUpdateManyWithoutSharedByNestedInput
    receivedShares?: SharedPostUncheckedUpdateManyWithoutSharedToNestedInput
    messageReactions?: MessageReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutLikedCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingIds?: UserUpdatefollowingIdsInput | string[]
  }

  export type NotificationsUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: EnumCommentTypeFieldUpdateOperationsInput | $Enums.CommentType
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    sender?: UserUpdateOneWithoutSentNotificationsNestedInput
    post?: PostUpdateOneWithoutNotificationsNestedInput
    message?: MessageUpdateOneWithoutNotificationNestedInput
  }

  export type NotificationsUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCommentTypeFieldUpdateOperationsInput | $Enums.CommentType
  }

  export type NotificationsUncheckedUpdateManyWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCommentTypeFieldUpdateOperationsInput | $Enums.CommentType
  }

  export type MessageCreateManyConversationInput = {
    id?: string
    body?: string | null
    media?: string | null
    createdAt?: Date | string
    senderId: string
    receiverId: string
    seen?: boolean
    delivered?: boolean
    sharedPostId?: string | null
  }

  export type MessageUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    delivered?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    sharedPost?: PostUpdateOneWithoutSharedMessagesNestedInput
    reactions?: MessageReactionUpdateManyWithoutMessageNestedInput
    notification?: NotificationsUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    delivered?: BoolFieldUpdateOperationsInput | boolean
    sharedPostId?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: MessageReactionUncheckedUpdateManyWithoutMessageNestedInput
    notification?: NotificationsUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    delivered?: BoolFieldUpdateOperationsInput | boolean
    sharedPostId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageReactionCreateManyMessageInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    userId: string
  }

  export type NotificationsCreateManyMessageInput = {
    id?: string
    body: string
    createdAt?: Date | string
    markRead?: boolean | null
    userId: string
    senderId?: string | null
    postId?: string | null
    commentId?: string | null
    type?: $Enums.CommentType
  }

  export type MessageReactionUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessageReactionsNestedInput
  }

  export type MessageReactionUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageReactionUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationsUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: EnumCommentTypeFieldUpdateOperationsInput | $Enums.CommentType
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    sender?: UserUpdateOneWithoutSentNotificationsNestedInput
    post?: PostUpdateOneWithoutNotificationsNestedInput
    comment?: CommentsUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCommentTypeFieldUpdateOperationsInput | $Enums.CommentType
  }

  export type NotificationsUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCommentTypeFieldUpdateOperationsInput | $Enums.CommentType
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