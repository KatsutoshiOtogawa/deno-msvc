import { _load } from './_load_library_user32.ts';

function load() {

  const library = _load();

  const { 
    MessageBoxExA,
    // FormatMessage,
  } = library.symbols;

  return {
    MessageBoxExA,
    // FormatMessage,
    library,
  };
}

export {
  load,
}
