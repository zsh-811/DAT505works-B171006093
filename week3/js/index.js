var container, stats;
var camera, scene, raycaster, renderer;

init();
render();


function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );

    camera.position.z+=200;
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf0f0f0 );

  var light = new THREE.DirectionalLight( 0xffffff, 2);
  light.position.set( 1, 1, 1 ).normalize();
  scene.add(light);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth/1.2, window.innerHeight/1.2);
  container.appendChild( renderer.domElement);
}
/////////////////////////
function heart1(){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("heart1.mtl", function(materials){
  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("heart1.obj", function(mesh){
  mesh.scale.set(10, 10, 10);
  scene.add(mesh);
  });
});
}
///////////////////////////////
function heart2(){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("heart2.mtl", function(materials){
  materials.preload();

  var objLoader = new THREE.OBJLoader();
	objLoader.setMaterials(materials);
  objLoader.load("heart2.obj", function(mesh){
  mesh.scale.set(10, 10, 10);
  scene.add(mesh);
  });
});
}
///////////////////////////////
function heart3(){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("heart3.mtl", function(materials){
  materials.preload();

  var objLoader = new THREE.OBJLoader();
	objLoader.setMaterials(materials);
  objLoader.load("heart3.obj", function(mesh){
  mesh.scale.set(10, 10, 10);
  scene.add(mesh);
  });
});
}
///////////////////////////
function render() {
  requestAnimationFrame(render);
  renderer.render(scene,camera);
  document.getElementById("showvirus1").addEventListener("click",heart1);
  document.getElementById("showvirus2").addEventListener("click",heart2);
  document.getElementById("showvirus3").addEventListener("click",heart3);
}
