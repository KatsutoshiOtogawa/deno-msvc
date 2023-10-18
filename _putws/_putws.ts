import { load } from "./load_library_msvcrt.ts";

function _putws(mes: ArrayBuffer): number | undefined {
    const { _putws, library} = load();

    let result: number | undefined;
    try {
      // 末端に文字列追加。
        result = _putws(mes);

    } finally {
        library.close();
    }
    return result;
}

export {
  _putws
}
