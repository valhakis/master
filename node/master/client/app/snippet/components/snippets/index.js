module.exports = {
   bindings: { snippets: '<' },
   template: `
      <h4>Some snippets.</h4>
      <ul>
         <li ng-repeat="snippet in $ctrl.snippets">
            <a ui-sref="snippet.single({snippetId: snippet._id})">{{snippet.name}}</a>
         </li>
      </ul>
   `
};
