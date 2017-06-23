import './style.scss';
/* global ace */
// import 'ace-builds/src/ace';

module.exports = function editorDirective() {
  return {
    template: `
      <div class="editor"></div>
    `,
    link: link
  };
};

function link(scope, element, attributes) {
  var xEditor = element[0].querySelector('.editor');
  var editor = ace.edit(xEditor);
  editor.setTheme('ace/theme/monokai');
  editor.getSession().setMode('ace/mode/php');
}
