import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';

// function that returns `MarkedOptions` with renderer override
export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.heading = (text: string, level) => {
    if (level === 1) {
      return '<h1 class="desc-h1">' + text + '</h1>';
    }
    if (level === 2) {
      return '<h2 class="desc-h2">' + text + '</h2>';
    }
    if (level === 3) {
      return '<h3 class="desc-h3">' + text + '</h3>';
    }
    if (level === 4) {
      return '<h4 class="desc-h4">' + text + '</h4>';
    }
    if (level === 5) {
      return '<h5 class="desc-h5">' + text + '</h5>';
    }
    return '<h6 class="desc-h6">' + text + '</h6>';
  };

  return {
    renderer: renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
    smartLists: true,
    smartypants: false,
  };
}
