import { _load } from './_load_library_kernel32.ts';

function load() {

  const library = _load();

  const { 
    FormatMessageA,
    GetLastError,
  } = library.symbols;

  return {
    FormatMessageA,
    GetLastError,
    library,
  };
}

export {
  load,
}
