import '../src/assets/index.scss';
import { HtmlHandler } from './markdown';

;((doc) => {

  const init = () => {
    render();
  }

  function render() {
    new HtmlHandler().TextChangeHandler("main", "preview");
  }

  init();
})(document)