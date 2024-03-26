import {assertEquals} from 'https://deno.land/std/testing/asserts.ts';

import {hello} from '../mod.ts';

Deno.test('hello(World)', () => {
  assertEquals(hello('World'), 'Hello World!');
});
