/// <reference lib="deno.unstable" />

const CallSymbol = {
  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-messageboxexw
  "MessageBoxExW": {
    // errno変数へのアドレスが入ったポインタ。
    name: "MessageBoxExW",
    parameters: [
//   [in, optional] HWND    hWnd,
      "pointer",
// [in, optional] LPCWSTR lpText
      "pointer",
//   [in, optional] LPCWSTR lpCaption,
      "pointer",
//   [in]           UINT    uType
      "u32",
      //  [in]           WORD   wLanguageId
      "u32",
    ],
    // DWORDはu32
    result: "i32"
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
