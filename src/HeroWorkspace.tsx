import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function textureFor(kind: 'screen' | 'clips' | 'wave' | 'grade') {
  const c = document.createElement('canvas'); c.width = 1000; c.height = 620;
  const x = c.getContext('2d')!;
  x.fillStyle = '#111d32'; x.fillRect(0, 0, 1000, 620);
  x.fillStyle = '#0a1426'; x.fillRect(0, 0, 1000, 42);
  x.fillStyle = '#d8e9ff'; x.font = '600 16px Arial'; x.fillText(kind === 'screen' ? 'KYRO  /  EDIT SUITE' : kind === 'clips' ? 'CLIP SELECT' : kind === 'wave' ? 'AUDIO MIX' : 'COLOR GRADE', 28, 27);
  if (kind === 'screen') {
    const g = x.createLinearGradient(30, 60, 730, 430); g.addColorStop(0, '#176caa'); g.addColorStop(.5, '#7db9dc'); g.addColorStop(1, '#e7b17a');
    x.fillStyle = g; x.fillRect(25, 60, 690, 360);
    x.fillStyle = '#15304c'; x.beginPath(); x.moveTo(25, 350); x.lineTo(190, 205); x.lineTo(345, 315); x.lineTo(480, 165); x.lineTo(715, 330); x.lineTo(715, 420); x.lineTo(25, 420); x.fill();
    x.fillStyle = '#fff'; x.font = '700 35px Arial'; x.fillText('THE PERFECT CUT', 55, 385);
    x.fillStyle = '#1b2d47'; x.fillRect(735, 60, 240, 360);
    for (let i = 0; i < 5; i++) { x.fillStyle = ['#3188ff','#54b7eb','#9279f3','#39b9a8','#efb66f'][i]; x.fillRect(755, 100+i*55, 125+(i%2)*65, 12); x.fillStyle='#536b8b'; x.fillRect(755, 119+i*55, 190, 4); }
    x.fillStyle='#0a1425'; x.fillRect(25,440,950,155);
    for(let row=0;row<3;row++){for(let i=0;i<7;i++){x.fillStyle=[['#3289ff','#9279f3','#35b9a7'][row]];x.fillRect(35+i*133,465+row*39,110+(i%2)*12,28);}}
    x.strokeStyle='#fff';x.lineWidth=3;x.beginPath();x.moveTo(430,450);x.lineTo(430,595);x.stroke();
  } else if (kind === 'clips') {
    ['#7bb6e9','#1e4b7b','#e6b884','#4184b5','#8ac9ba','#4776b6'].forEach((v,i)=>{x.fillStyle=v;x.fillRect(30+(i%3)*315,75+Math.floor(i/3)*160,285,135);});
    x.fillStyle='#0875ff';x.fillRect(30,420,930,8);
  } else if (kind === 'wave') {
    x.strokeStyle='#1680ff';x.lineWidth=4;x.beginPath();for(let i=0;i<900;i+=3){const y=300+Math.sin(i*.09)*(15+65*Math.abs(Math.sin(i*.021)));if(!i)x.moveTo(i+40,y);else x.lineTo(i+40,y);}x.stroke();
    x.fillStyle='#8ebcff';x.fillRect(35,440,920,10);
  } else {
    ['#1f73d8','#5ba8ed','#91bff0'].forEach((v,i)=>{x.fillStyle=v;x.beginPath();x.arc(200+i*300,290,80,0,Math.PI*2);x.fill();x.fillStyle='#e7f2ff';x.beginPath();x.arc(200+i*300,290,30,0,Math.PI*2);x.fill();});
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export default function HeroWorkspace() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = host.current; if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ alpha:true, antialias:true, powerPreference:'high-performance' }); }
    catch { el.classList.add('km-workspace-fallback'); return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7)); renderer.setSize(el.clientWidth,el.clientHeight);
    renderer.outputColorSpace=THREE.SRGBColorSpace; renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=1.15;
    el.appendChild(renderer.domElement);
    const scene=new THREE.Scene();
    const camera=new THREE.PerspectiveCamera(34,el.clientWidth/el.clientHeight,.1,100);camera.position.set(0,2.1,10.8);camera.lookAt(0,.1,0);
    scene.add(new THREE.HemisphereLight(0xf4f9ff,0x8ca9ce,2.1));
    const key=new THREE.DirectionalLight(0xffffff,3);key.position.set(-4,7,6);scene.add(key);
    const blue=new THREE.PointLight(0x368eff,85,14);blue.position.set(4,2,2);scene.add(blue);
    const root=new THREE.Group();scene.add(root);
    const laptop=new THREE.Group();root.add(laptop);
    const silver=new THREE.MeshStandardMaterial({color:0xcbd5e1,metalness:.8,roughness:.24});
    const edge=new THREE.MeshStandardMaterial({color:0x879ab2,metalness:.7,roughness:.3});
    const box=(w:number,h:number,d:number,mat:THREE.Material,x:number,y:number,z:number,parent:THREE.Object3D=laptop)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);parent.add(m);return m;};
    box(5.35,.17,3.05,silver,0,-.9,.35);
    box(5.22,.035,.12,edge,0,-.8,1.84);
    box(1.15,.018,.68,new THREE.MeshStandardMaterial({color:0xaab8ca,metalness:.3,roughness:.4}),0,-.805,1.02);
    box(4.3,.025,1.08,edge,0,-.8,.34);
    const keys=new THREE.Group();laptop.add(keys);
    const keyMat=new THREE.MeshStandardMaterial({color:0x52647d,metalness:.2,roughness:.4});
    for(let r=0;r<4;r++)for(let col=0;col<15;col++){const k=new THREE.Mesh(new THREE.BoxGeometry(.22,.025,.15),keyMat);k.position.set(-1.92+col*.275,-.775,-.04+r*.24);keys.add(k);}
    box(4.72,.1,.13,edge,0,-.8,-.95);
    const frame=box(4.72,2.98,.15,edge,0,.62,-1.13);frame.rotation.x=-.07;
    const screenBg=box(4.59,2.85,.025,new THREE.MeshStandardMaterial({color:0x101b2e}),0,.62,-1.04);screenBg.rotation.x=-.07;
    const screenTex=textureFor('screen');
    const screen=new THREE.Mesh(new THREE.PlaneGeometry(4.45,2.72),new THREE.MeshBasicMaterial({map:screenTex}));screen.position.set(0,.62,-1.02);screen.rotation.x=-.07;laptop.add(screen);
    const dot=new THREE.Mesh(new THREE.SphereGeometry(.025,12,8),new THREE.MeshBasicMaterial({color:0x5f91cb}));dot.position.set(0,2.02,-1.03);laptop.add(dot);

    const panels=new THREE.Group();root.add(panels);
    const glassMat=new THREE.MeshPhysicalMaterial({color:0xeaf4ff,metalness:.12,roughness:.2,transparent:true,opacity:.26,clearcoat:1,side:THREE.DoubleSide});
    const defs=[{kind:'clips' as const,x:-3.05,y:.8,z:-.1,w:1.8,h:1.2,ry:.24,rz:-.1},{kind:'wave' as const,x:3.05,y:.12,z:.35,w:1.8,h:1.2,ry:-.25,rz:.08},{kind:'grade' as const,x:2.4,y:1.95,z:-.7,w:1.45,h:.98,ry:-.2,rz:.06}];
    const textures:THREE.CanvasTexture[]=[screenTex];
    defs.forEach((d,i)=>{const g=new THREE.Group();g.position.set(d.x,d.y,d.z);g.rotation.set(0,d.ry,d.rz);g.userData.baseY=d.y;g.userData.phase=i*1.7;panels.add(g);
      const pane=box(d.w,d.h,.055,glassMat,0,0,0,g);
      const tex=textureFor(d.kind);textures.push(tex);
      const face=new THREE.Mesh(new THREE.PlaneGeometry(d.w-.07,d.h-.07),new THREE.MeshBasicMaterial({map:tex,transparent:true,side:THREE.DoubleSide}));face.position.z=.032;g.add(face);
      g.add(new THREE.LineSegments(new THREE.EdgesGeometry(pane.geometry),new THREE.LineBasicMaterial({color:0x81b9ff,transparent:true,opacity:.9})));
    });
    const glow=new THREE.Mesh(new THREE.CircleGeometry(4.1,64),new THREE.MeshBasicMaterial({color:0x94c6ff,transparent:true,opacity:.13,depthWrite:false}));glow.rotation.x=-Math.PI/2;glow.scale.set(1.35,.58,1);glow.position.set(0,-1.06,.25);scene.add(glow);
    const pointer={x:0,y:0},target={x:0,y:0};
    const move=(e:PointerEvent)=>{const r=el.getBoundingClientRect();target.x=((e.clientX-r.left)/r.width-.5)*2;target.y=((e.clientY-r.top)/r.height-.5)*2;};
    const leave=()=>{target.x=0;target.y=0;};el.addEventListener('pointermove',move);el.addEventListener('pointerleave',leave);
    const resize=()=>{const w=Math.max(1,el.clientWidth),h=Math.max(1,el.clientHeight);camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h);};
    const observer=new ResizeObserver(resize);observer.observe(el);
    let raf=0;const clock=new THREE.Clock();
    const animate=()=>{raf=requestAnimationFrame(animate);const t=clock.getElapsedTime();if(!reduced){pointer.x+=(target.x-pointer.x)*.045;pointer.y+=(target.y-pointer.y)*.045;root.rotation.y=pointer.x*.13+Math.sin(t*.38)*.025;root.rotation.x=-pointer.y*.045+Math.sin(t*.52)*.012;laptop.position.y=Math.sin(t*.8)*.05;panels.children.forEach(p=>{p.position.y=p.userData.baseY+Math.sin(t*.72+p.userData.phase)*.085;});}renderer.render(scene,camera);};animate();
    return ()=>{cancelAnimationFrame(raf);observer.disconnect();el.removeEventListener('pointermove',move);el.removeEventListener('pointerleave',leave);scene.traverse(o=>{if(o instanceof THREE.Mesh||o instanceof THREE.LineSegments){o.geometry.dispose();const mats=Array.isArray(o.material)?o.material:[o.material];mats.forEach(m=>m.dispose());}});textures.forEach(t=>t.dispose());renderer.dispose();renderer.domElement.remove();};
  },[]);
  return <div className="km-hero-art km-hero-workspace" ref={host} role="img" aria-label="Interactive three-dimensional laptop with a video editing timeline and floating glass panels for clips, audio and color grading"><div className="km-workspace-glow"/><div className="km-workspace-caption"><span className="km-live-dot"/> EDITING WORKSPACE <span>01 / 03</span></div></div>;
}
