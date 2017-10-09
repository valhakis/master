console.log("test");

var THREE = require('three');

var siim=require("./siim.js");

var ColladaLoader = require('three-collada-loader');
 
var loader = new ColladaLoader();

var scene, camera, renderer;
var geometry, material, mesh;
 
init();
animate();
 
function init() {
 
    scene = new THREE.Scene();
 
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;
 
    geometry = new THREE.BoxGeometry( 200, 200, 200 );
    material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
 
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
loader.load( '/public.dae', function ( collada ) {
    // Use data here 
var animations = collada.animations;
					var avatar = collada.scene;
avatar.scale.set(100, 100, 100);
//avatar.material.color.setHex( 0xffffff );
					//var mixer = new THREE.AnimationMixer( avatar );
					//var action = mixer.clipAction( animations[ 0 ] ).play();
					scene.add( avatar );
});

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
 
    document.body.appendChild( renderer.domElement );
 
}
 
function animate() {
 
    requestAnimationFrame( animate );
 
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
 
    renderer.render( scene, camera );
 
}
