import { _load } from './_load_library_msvcrt.ts';

function load() {

  const library = _load();

  const { 
    putwchar,
  } = library.symbols;

  return {
    putwchar,
    library,
  };
}

export {
  load,
}
