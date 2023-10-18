import { GnoWallet } from "./wallet";

export type Constructor<T> = new (...args: any[]) => T;

export type AnyFunction = (...args: any) => any;

export type UnionToIntersection<Union> =
  (Union extends any
    ? (argument: Union) => void
    : never
  ) extends (argument: infer Intersection) => void
      ? Intersection
  : never;

export type Return<T> =
  T extends AnyFunction
  ? ReturnType<T>
  : T extends AnyFunction[]
  ? UnionToIntersection<ReturnType<T[number]>>
      : never

export type RealmInterface = { [key: string]: any }
export type Realm = (instance: GnoWallet) => { realm: RealmInterface}
