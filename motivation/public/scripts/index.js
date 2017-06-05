function update() {
  GetImages(images => {
    AddImages('#container', images);
  });
}

update();

AddImageUrl('#add-image-url');

var images = document.querySelectorAll('img');
