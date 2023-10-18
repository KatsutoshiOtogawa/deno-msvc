import { _load } from './_load_library_user32.ts';

function load() {

  const library = _load();

  const { 
    MessageBoxExW,
    // FormatMessage,
  } = library.symbols;

  return {
    MessageBoxExW,
    // FormatMessage,
    library,
  };
}

export {
  load,
}
