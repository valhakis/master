<!DOCTYPE html>
<html lang="en">
  <head>
    <base href="/sample/">
    <meta charset="UTF-8">
    <title>Sample</title>
    <link rel="stylesheet" href="/bootstrap/dist/css/bootstrap.css">
  </head>
  <body>

    <div class="container-fluid">
      <h1>Sample</h1>

      <h2>Create Post</h2>

      <form method="post" action="posts">
        <div class="form-group">
          <label>Title</label>
          <input class="form-control" type="text" name="title">
        </div>
        <div class="form-group">
          <label>Title</label>
          <textarea class="form-control" name="body"></textarea>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>

    </div>

  </body>
</html>
