/// <reference lib="deno.unstable" />

const CallSymbol = {
  "MessageBoxExA": {
    // errno変数へのアドレスが入ったポインタ。
    name: "MessageBoxExA",
    parameters: [
//   [in, optional] HWND    hWnd,
      "pointer",
      // ANSI文字列へのポインタ
//   [in, optional] LPCTSTR lpText,
      "pointer",
//   [in, optional] LPCTSTR lpCaption,
      "pointer",
//   [in]           UINT    uType
      "u32",
      //  [in]           WORD   wLanguageId
      "u16",
    ],
    // DWORDはu32
    result: "u32"
  },
     
} as const

const libname = 'C:/Windows/System32/User32.dll';

function _load() {

  const library = Deno.dlopen(libname, CallSymbol);

  return library;
}

export {
  type CallSymbol,
  libname,
  _load
}
