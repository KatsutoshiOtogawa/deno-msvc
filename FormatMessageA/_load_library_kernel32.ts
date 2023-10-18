/// <reference lib="deno.unstable" />

const CallSymbol = {
  "GetLastError": {
    // errno変数へのアドレスが入ったポインタ。
    name: "GetLastError",
    parameters: [
    ],
    // DWORDはu32
    result: "u32"
  },
    "FormatMessageA": {
    // errno変数へのアドレスが入ったポインタ。
    name: "FormatMessageA",
    parameters: [
  //   [in]           DWORD   dwFlags,
      "u32",
      // optionalはnullpointer
      // [in, optional] LPCVOID lpSource,
      "pointer",
  // [in]           DWORD   dwMessageId,
      "u32",
  // [in]           DWORD   dwLanguageId,
      "u32",
  // [out]          LPTSTR  lpBuffer,
      "pointer",
  // [in]           DWORD   nSize,
      "pointer",
  // [in, optional] va_list *Arguments
      "pointer",
    ],
    // DWORDはu32
    result: "u32"
  },
//   int MultiByteToWideChar(
// );
     
} as const

const libname = 'C:/Windows/System32/kernel32.dll';

function _load() {

  const library = Deno.dlopen(libname, CallSymbol);

  return library;
}

export {
  type CallSymbol,
  libname,
  _load
}
