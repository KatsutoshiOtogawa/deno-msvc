import { load } from "./load_library_user32.ts";
import { HWND } from "../HWND/HWND.ts";
import { LPCSTR } from "../LPCSTR/LPCSTR.ts";
import { UINT, type_gurad_UINT } from "../UINT/UINT.ts";
import { WORD, type_gurad_WORD } from "../WORD/WORD.ts";
import { DWORD } from "../DWORD/DWORD.ts";

function MessageBoxExA(hwnd: HWND,lpText: LPCSTR | null, lpCaption: LPCSTR | null, uType: UINT,wLanguageId: WORD): DWORD {
    const { MessageBoxExA, library } = load();

    let result: DWORD | undefined;
    try {
      result = MessageBoxExA(
        hwnd,
        lpText,
        lpCaption,
        uType,
        wLanguageId
      )
      //   // errnoの値を一緒に返すほうがいいかも。
      //   if (result < 0) {
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
  MessageBoxExA
}
