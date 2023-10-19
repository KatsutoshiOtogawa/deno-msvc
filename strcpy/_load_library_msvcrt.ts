/// <reference lib="deno.unstable" />

const CallSymbol = {
  "strcpy": {
    name: "strcpy",
    parameters: [
      //  コピー先の文字列
      "buffer",
      //  コピー元の文字列
      "buffer",
    ],
    result: "pointer"
  },
     
} as const

const libname = 'C:/Windows/System32/msvcrt.dll';

function _load() {

  const library = Deno.dlopen(libname, CallSymbol);

  return library;
}

export {
  libname,
  type CallSymbol,
  _load
}
