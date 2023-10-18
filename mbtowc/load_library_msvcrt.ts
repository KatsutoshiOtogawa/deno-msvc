import { _load } from './_load_library_msvcrt.ts';

function load() {

  const library = _load();

  const { 
    mbtowc,
  } = library.symbols;

  return {
    mbtowc,
    library,
  };
}

export {
  load,
}
