import generateReferences from './modules/references.js';

$(document).ready(() => {
  generateReferences(
    'data/master-thesis-bib.json',
    '.list-of-references',
    '.cite-ref>a',
  );
});
