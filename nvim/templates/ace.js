var ace = require('brace');
require('brace/mode/javascript');
require('brace/theme/monokai');

this.editor = ace.edit('editor');
this.editor.getSession().setMode('ace/mode/javascript');
this.editor.setTheme('ace/theme/monokai');
