/// <reference lib="deno.unstable" />

const CallSymbol = {
  "getwchar": {
    name: "getwchar",
    parameters: [],
    result: "i64",
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
