import { load } from "./load_library_user32.ts";

function MessageBoxExA(mes: string) {
    const { MessageBoxExA, library } = load();

    try {
      // // 末端に文字列追加。
        const buforig = new TextEncoder().encode(mes);
        const buf = new Uint8Array(buforig.length + 1);
        buf.set(buforig);
        buf[buf.length] = 0; // \0 terminator
        // let result = puts(buf);

      MessageBoxExA(
        NULL,
        buf,
        NULL,
        1,
        0
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
}

export {
  MessageBoxExA
}

/** main function */
/** 手動チェック用 */
if (import.meta.main) {
  
  if (Deno.args.length >= 2) {

    console.error("Too many args.")
    Deno.exit(1);
  }
  if (Deno.args.length == 0) {
    console.error("Few args.")
    // Deno.exit(1);
  }
  const mes = Deno.args[0];

  MessageBoxExA(mes);

}

