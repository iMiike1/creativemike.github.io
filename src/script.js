import './style.css'
import * as THREE from 'three'
import { AmbientLight, Group, Material, Mesh, MeshBasicMaterial, MeshToonMaterial, TetrahedronBufferGeometry } from 'three'
import gsap from 'gsap'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

// to import from three folder use line below
//import typeFacefont from 'three/examples/fonts/helvetiker_bold.typeface.json'








// /*
// ███████╗ ██████╗███████╗███╗   ██╗███████╗
// ██╔════╝██╔════╝██╔════╝████╗  ██║██╔════╝
// ███████╗██║     █████╗  ██╔██╗ ██║█████╗
// ╚════██║██║     ██╔══╝  ██║╚██╗██║██╔══╝
// ███████║╚██████╗███████╗██║ ╚████║███████╗
// ╚══════╝ ╚═════╝╚══════╝╚═╝  ╚═══╝╚══════╝

// */
const scene = new THREE.Scene()













/*
██╗     ██╗ ██████╗ ██╗  ██╗████████╗███████╗
██║     ██║██╔════╝ ██║  ██║╚══██╔══╝██╔════╝
██║     ██║██║  ███╗███████║   ██║   ███████╗
██║     ██║██║   ██║██╔══██║   ██║   ╚════██║
███████╗██║╚██████╔╝██║  ██║   ██║   ███████║
╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝

*/


const ambientLIght = new THREE.AmbientLight()
AmbientLight.color = new THREE.Color(0x00ff40)
ambientLIght.intensity = 0.6
scene.add(ambientLIght)


let directionalLight = new THREE.DirectionalLight(0x00ff40);
directionalLight.position.set(0,0,1);
scene.add(directionalLight);






const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}




/*
 ██████╗ ██████╗      ██╗███████╗ ██████╗████████╗███████╗
██╔═══██╗██╔══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
██║   ██║██████╔╝     ██║█████╗  ██║        ██║   ███████╗
██║   ██║██╔══██╗██   ██║██╔══╝  ██║        ██║   ╚════██║
╚██████╔╝██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
 ╚═════╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝

*/




let cloudParticles = [];
const loader = new THREE.TextureLoader();
loader.load("smoke.png", function(texture){

    const cloudGeo = new THREE.PlaneBufferGeometry(500,500);
    const cloudMat = new THREE.MeshToonMaterial({

        map:texture,
        transparent: true
    });

for (let i = 0; i <50; i++){

    let cloud = new THREE.Mesh(cloudGeo, cloudMat);
    cloud.position.set(

        Math.random()*800 -400,
        500,
        Math.random()*500 -500
    
    )
    cloud.rotation.x = 1.16;
    cloud.rotation.y = -0.12;
    cloud.rotation.z = Math.random()*2*Math.PI;
    
    cloud.material.opacity = 0.25;
    cloudParticles.push(cloud)
    scene.add(cloud)
}


});









//Sizes


/*
███████╗██╗   ██╗███████╗███╗   ██╗████████╗    ██╗     ██╗███████╗████████╗███████╗███╗   ██╗███████╗██████╗ ███████╗
██╔════╝██║   ██║██╔════╝████╗  ██║╚══██╔══╝    ██║     ██║██╔════╝╚══██╔══╝██╔════╝████╗  ██║██╔════╝██╔══██╗██╔════╝
█████╗  ██║   ██║█████╗  ██╔██╗ ██║   ██║       ██║     ██║███████╗   ██║   █████╗  ██╔██╗ ██║█████╗  ██████╔╝███████╗
██╔══╝  ╚██╗ ██╔╝██╔══╝  ██║╚██╗██║   ██║       ██║     ██║╚════██║   ██║   ██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗╚════██║
███████╗ ╚████╔╝ ███████╗██║ ╚████║   ██║       ███████╗██║███████║   ██║   ███████╗██║ ╚████║███████╗██║  ██║███████║
╚══════╝  ╚═══╝  ╚══════╝╚═╝  ╚═══╝   ╚═╝       ╚══════╝╚═╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚══════╝

*/

// AUTOMATIC UPDATE OF DYNAIC STUFF

window.addEventListener('resize', () => {


    //UPdate sizes 
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    //Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    
    renderer.setSize(sizes.width, sizes.height)


    console.log('window has been resized')


})


window.addEventListener('dblclick', () =>{
   
    if (!document.fullscreenElement)
    {
        canvas.requestFullscreen()
        console.log('gofull')
    }
    else
    {        document.exitFullscreen()
        console.log('leaveFull')
    }
})
 

/*
 ██████╗ █████╗ ███╗   ██╗██╗   ██╗ █████╗ ███████╗
██╔════╝██╔══██╗████╗  ██║██║   ██║██╔══██╗██╔════╝
██║     ███████║██╔██╗ ██║██║   ██║███████║███████╗
██║     ██╔══██║██║╚██╗██║╚██╗ ██╔╝██╔══██║╚════██║
╚██████╗██║  ██║██║ ╚████║ ╚████╔╝ ██║  ██║███████║
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝  ╚═══╝  ╚═╝  ╚═╝╚══════╝

*/



// Canvas
const canvas = document.querySelector('.webgl')



/*
 ██████╗ █████╗ ███╗   ███╗███████╗██████╗  █████╗
██╔════╝██╔══██╗████╗ ████║██╔════╝██╔══██╗██╔══██╗
██║     ███████║██╔████╔██║█████╗  ██████╔╝███████║
██║     ██╔══██║██║╚██╔╝██║██╔══╝  ██╔══██╗██╔══██║
╚██████╗██║  ██║██║ ╚═╝ ██║███████╗██║  ██║██║  ██║
 ╚═════╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝



 
*/

const axis = new THREE.AxesHelper();
scene.add(axis)


// Base camera
const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height,1,1000)
camera.position.z = 1;
camera.rotation.x = 1.16;
camera.rotation.y = -0.12;
camera.rotation.z = 0.27;
scene.add(camera)








// // CONTROLS

// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true;

// controls.autoRotate = false
// controls.autoRotateSpeed = 5


// controls.update();



/*
██████╗ ███████╗███╗   ██╗██████╗ ███████╗██████╗ ███████╗██████╗
██╔══██╗██╔════╝████╗  ██║██╔══██╗██╔════╝██╔══██╗██╔════╝██╔══██╗
██████╔╝█████╗  ██╔██╗ ██║██║  ██║█████╗  ██████╔╝█████╗  ██████╔╝
██╔══██╗██╔══╝  ██║╚██╗██║██║  ██║██╔══╝  ██╔══██╗██╔══╝  ██╔══██╗
██║  ██║███████╗██║ ╚████║██████╔╝███████╗██║  ██║███████╗██║  ██║
╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝

*/

// RENDERER // 
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
//renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))



const clock = new THREE.Clock();





scene.fog = new THREE.FogExp2(0x03544e, 0.001);
renderer.setClearColor(scene.fog.color)







/*
████████╗██╗ ██████╗██╗  ██╗
╚══██╔══╝██║██╔════╝██║ ██╔╝
   ██║   ██║██║     █████╔╝
   ██║   ██║██║     ██╔═██╗
   ██║   ██║╚██████╗██║  ██╗
   ╚═╝   ╚═╝ ╚═════╝╚═╝  ╚═╝

*/


const tick = () =>
{       

    cloudParticles.forEach(p => {

        p.rotation.z -=0.001



    });



const elapsedTime = clock.getElapsedTime();
//console.log(elapsedTime)

//controls.update()
    


renderer.render(scene, camera)
//camera.lookAt(cube1.position)
window.requestAnimationFrame(tick)

}


tick()

