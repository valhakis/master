document.body.style.maxWidth = '900px';
document.body.style.margin = '0px auto';

var start_this = false;

(function() {
	if (start_this != true) return;
	var container;
	var camera, controls, scene, renderer;
	var ambient, keyLight, fillLight, backLight;

	container = document.createElement('div');
	container.style.border = '1px solid #000';
	container.style.margin = '10px';
	container.style.minHeight = '200px';
	container.style.backgroundColor = '#CCC';
	document.body.appendChild(container);

	var width = 800;
	var height = 600;

	camera = new THREE.PerspectiveCamera(45, width/height, 1, 1000);
	camera.position.z = 3;

	scene = new THREE.Scene();
	ambient = new THREE.AmbientLight(0xffffff, 1.0);
	scene.add(ambient);

	keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
	keyLight.position.set(-100, 0, 100);

	fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
	fillLight.position.set(100, 0, 100);

	backLight = new THREE.DirectionalLight(0xffffff, 1.0);
	backLight.position.set(100, 0, -100).normalize();

	scene.add(keyLight);
	scene.add(fillLight);
	scene.add(backLight);

	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setBaseUrl('mtl/');
	mtlLoader.setPath('mtl/');
	mtlLoader.load('laptop/Lowpoly_Notebook_2.mtl', function (materials) {

		materials.preload();

		//materials.materials.default.map.magFilter = THREE.NearestFilter;
		//materials.materials.default.map.minFilter = THREE.LinearFilter;

		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials(materials);
		objLoader.setPath('assets/');
		objLoader.load('laptop/Lowpoly_Notebook_2.obj', function (object) {

			scene.add(object);

		});

	});

})();

class Box {
	constructor() {
		this.sectionList = [];
		this.container = document.createElement('div');
		this.container.style.margin = '20px';
		this.container.style.padding = '10px';
		this.container.style.border = '1px solid #000';
		this.container.style.minHeight = '200px';
		document.body.appendChild(this.container);
		this.init();
	}

	init() {
		this.title = document.createElement('h1');
		this.title.style.border = '1px solid #000';
		this.title.style.padding = '10px';
		this.title.style.margin = '0px';
		this.title.style.lineHeight = '30px';
		this.container.appendChild(this.title);
		this.setTitle('NO TITLE HAS BEEN SET');

		this.sections = document.createElement('div');
		this.sections.style.border = '1px solid #000';
		this.sections.style.margin = '5px 0px 0px 0px';
		this.sections.style.minHeight = '50px';
		this.container.appendChild(this.sections);

		this.createSection('section 1');
		this.createSection('images');
	}

	createSection(xid) {
		var section = document.createElement('div');
		var heading = document.createElement('h2');
		heading.style.border = '1px solid #000';
		heading.style.margin = '5px';
		heading.style.padding = '5px';
		heading.innerText = `SECTION HEADING | xid: ${xid}`;
		section.appendChild(heading);
		section.style.border = '1px solid #000';
		section.style.margin = '5px';
		section.setAttribute('xid', xid);
		this.sectionList.push(section);
		this.sections.appendChild(section);
	}

	setTitle(title) {
		this.title.innerText = title;
	}

	getSection(xid) {
		return this.sections.querySelector(`div[xid="${xid}"`);
	}

	addImage(src) {
		var container = this.getSection('images');
		var img = document.createElement('img');
		var imgContainer = document.createElement('div');
		imgContainer.style.border = '1px solid #000';
		imgContainer.style.margin = '5px';
		img.style.display = 'block';
		img.style.width = '100%';
		img.src = src;
		imgContainer.appendChild(img);
		imgContainer.style.overflow = 'hidden';
		container.appendChild(imgContainer);
	}
}

(function() {
	return;
	var box = new Box();

	box.setTitle('THE NEW TITLE');

	box.addImage('http://www.floridatomatoes.org/wp-content/uploads/2016/03/2016-Basket-of-Tomatoes-EventBrite.jpg');
	box.addImage('https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/potatoes.jpg?itok=d3eNaCzk');
	box.addImage('https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg');
	box.addImage('https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/tomatoplant.jpg?itok=KJNBeA6X');
	box.addImage('http://assets.nydailynews.com/polopoly_fs/1.2834910.1476795531!/img/httpImage/image.jpg_gen/derivatives/article_750/488059328.jpg');
	box.addImage('http://www.pngmart.com/files/1/Tomato-Clip-Art-PNG.png');
	box.addImage('http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg');
})();
