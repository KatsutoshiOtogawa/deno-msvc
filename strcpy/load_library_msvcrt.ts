import { _load } from './_load_library_msvcrt.ts';

function load() {

  const library = _load();

  const { 
    strcpy,
  } = library.symbols;

  return {
    strcpy,
    library,
  };
}

export {
  load,
}
