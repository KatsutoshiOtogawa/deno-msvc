import { load } from './load_library_msvcrt.ts';
import { size_t } from "../size_t/size_t.ts";

function malloc(size: size_t): Deno.PointerValue<unknown> {
  if (!Number.isInteger(size) || size <= 0) {
    throw TypeError("nagative or not integer value!");
  }
  const {malloc, library } = load();

  let ptr: Deno.PointerValue<unknown> | undefined;
  try{
    ptr = malloc(size);
  } finally {
      library.close();
  }
  return ptr;
}

export {
  malloc
}
