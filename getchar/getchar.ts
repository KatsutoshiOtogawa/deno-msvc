import { load } from "./load_library_msvcrt.ts";

function getchar(): number | undefined {
    const { getchar, library} = load();

    let result: number | undefined;
    try {
        result = getchar();

    } finally {
        library.close();
    }
    return result;
}

export {
  getchar
}
