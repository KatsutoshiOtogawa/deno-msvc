import { _load } from './_load_library_msvcrt.ts';

function load() {

  const library = _load();

  const { 
    free,
    // malloc,
  } = library.symbols;

  return {
    free,
    // malloc,
    library,
  };
}

export {
  load,
}
