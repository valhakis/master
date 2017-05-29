<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>App</title>
    <link rel="stylesheet" href="/index.css">
  </head>
  <body ng-app="app" ng-controller="MainController as main">

    <form>
      <div>
        <label>Title</label>
        <input name="title">
      </div>
      <div>
        <label>Content</label>
        <textarea name="content"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>

    <% 'sample text' %>
    <% posts | json %>

    <!--
    <ul>
      {{ #posts }}
      <li><h4>{{ title }}</h4><div>{{ content }}</div></li>
      {{ /posts }}
    </ul>
    -->

    <script src="/angular.js"></script>
    <script src="/socket.io.js"></script>
    <script src="/index.js"></script>
  </body>
</html>
