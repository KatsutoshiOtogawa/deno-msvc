import { _load } from './_load_library_kernel32.ts';

function load() {

  const library = _load();

  const { 
    FormatMessageA,
  } = library.symbols;

  return {
    FormatMessageA,
    library,
  };
}

export {
  load,
}
