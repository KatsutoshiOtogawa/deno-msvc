/// <reference lib="deno.unstable" />

const CallSymbol = {
  "malloc": {
    name: "malloc",
    // usizeだけど、denoは64bitのみなのでキメ打ち。
    parameters: ["u64"],
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
