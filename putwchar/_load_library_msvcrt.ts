/// <reference lib="deno.unstable" />

const CallSymbol = {
  "putwchar": {
    name: "putwchar",
    parameters: ["i64"],
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
