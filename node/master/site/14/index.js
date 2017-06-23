/* global Sandcastle, Cesium */

var viewer = new Cesium.Viewer('container');

function addPoint() {
  Sandcastle.declare(addPoint);

  viewer.entities.add({
    position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
    name: 'POINT NAME',
    point: {
      pixelSize : 10,
      color : Cesium.Color.YELLOW
    }
  });
}
