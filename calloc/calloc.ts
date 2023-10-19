import { load } from './load_library_msvcrt.ts';
import { size_t } from "../size_t/size_t.ts";


/**
 * Allocates an array in memory with elements initialized to 0.
 * @param num Number of elements.
 * @param size Length in bytes of each element.
 * @returns calloc returns a pointer to the allocated space. The storage space pointed to by the return value is suitably aligned for storage of any type of object. To get a pointer to a type other than void, use a type cast on the return value.
 */
function calloc(num: size_t, size: size_t): Deno.PointerValue<unknown> {
  if (!Number.isInteger(size) || size <= 0) {
    throw TypeError("nagative or not integer value!");
  }
  const {calloc, library } = load();

  let ptr: Deno.PointerValue<unknown> | undefined;
  try{
    ptr = calloc(num, size);
  } finally {
      library.close();
  }
  return ptr;
}

export {
  calloc
}
