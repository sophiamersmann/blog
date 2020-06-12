import generateReferences from './modules/references.js';

function updateProgressBar(selector, docHeight, winHeight) {
  // determine scroll position in current window
  const scrollTop = $(window).scrollTop();
  const scrollPercent = Math.round((scrollTop / (docHeight - winHeight)) * 100);

  $(selector).attr('aria-valuenow', scrollPercent);
  $(selector).css('width', `${scrollPercent}%`);
}

$(document).ready(() => {
  const docHeight = $(document).height();
  const winHeight = $(window).height();

  // init progress bar
  updateProgressBar('.progress-bar', docHeight, winHeight);

  // update progress bar on scrolling
  $(window).scroll(() => {
    updateProgressBar('.progress-bar', docHeight, winHeight);
  });

  // generate references from .bib file
  generateReferences(
    'data/master-thesis-bib.json',
    '.list-of-references',
    '.cite-ref>a',
  );
});
