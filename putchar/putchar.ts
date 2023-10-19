import { load } from "./load_library_msvcrt.ts";

function putchar(a: number): number | undefined {
    const { putchar, library} = load();

    let result: number | undefined;
    try {
        result = putchar(a);

    } finally {
        library.close();
    }
    return result;
}

export {
  putchar
}
