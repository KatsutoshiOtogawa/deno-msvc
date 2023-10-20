// import { load } from "./load_library_user32.ts";

import { load } from "./load_library_user32.ts";
import { HWND } from "../HWND/HWND.ts";
import { LPCSTR } from "../LPCSTR/LPCSTR.ts";
import { UINT, type_gurad_UINT } from "../UINT/UINT.ts";
import { WORD, type_gurad_WORD } from "../WORD/WORD.ts";
import { DWORD } from "../DWORD/DWORD.ts";

function MessageBoxExW(hwnd: HWND,lpText: LPCSTR | null, lpCaption: LPCSTR | null, uType: UINT,wLanguageId: WORD): DWORD {
// function MessageBoxExW(hWnd: Deno.PointerValue<unknown>, lpText: Deno.PointerValue<unknown>, lpCaption: Deno.PointerValue<unknown>, uType: number, wLanguageId: number): number | undefined {
  const { MessageBoxExW, library } = load();

  let result: number | undefined;
  try {

    result = MessageBoxExW(
      hwnd,
      lpText,
      lpCaption,
      uType,
      wLanguageId
    );
    //   // errnoの値を一緒に返すほうがいいかも。
    //   if (result === 0) {
    //     const err = GetLastError();
    //       // errになる。
    //     console.log(err);

    //   }
  } finally {
    library.close();
  }
  return result;
}

export {
  MessageBoxExW
}

// /** main function */
// /** 手動チェック用 */
// if (import.meta.main) {
  
//   if (Deno.args.length >= 2) {

//     console.error("Too many args.")
//     Deno.exit(1);
//   }
//   if (Deno.args.length == 0) {
//     console.error("Few args.")
//     // Deno.exit(1);
//   }
//   const mes = Deno.args[0];

//   MessageBoxExW(mes);

// }

