/// <reference lib="deno.unstable" />

const CallSymbol = {
  "getchar": {
    name: "getchar",
    parameters: [],
    result: "i32",
  },
     
} as const

const libname = 'C:/Windows/System32/msvcrt.dll';

function _load() {

  const library = Deno.dlopen(libname, CallSymbol);

  return library;
}

export {
  type CallSymbol,
  libname,
  _load
}
