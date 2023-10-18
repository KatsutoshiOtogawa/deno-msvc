import { load } from "./load_library_user32.ts";

function MessageBoxExW(hWnd: Deno.PointerValue<unknown>, lpText: Deno.PointerValue<unknown>, lpCaption: Deno.PointerValue<unknown>, uType: number, wLanguageId: number): number | undefined {
  const { MessageBoxExW, library } = load();

  let result: number | undefined;
  try {

    result = MessageBoxExW(
      hWnd,
      lpText,
      lpCaption,
      uType,
      wLanguageId
    );
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

