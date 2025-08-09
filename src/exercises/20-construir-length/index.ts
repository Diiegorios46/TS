/* _____________ Aqui va tu codigo _____________ */
type MyLength<S extends string> = StringToArray<S>['length'];

type StringToArray<S extends string, A extends any[] = []> = 
  S extends `${infer First}${infer Rest}` 
    ? StringToArray<Rest, [...A, First]>
    : A;

/* _____________ Casos de prueba  _____________ */

import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<MyLength<'hola siigers'>, 12>>,
  Expect<Equal<MyLength<''>, 0>>,
  Expect<Equal<MyLength<'a'>, 1>>,
  Expect<Equal<MyLength<'Siigo'>, 5>>,
];
