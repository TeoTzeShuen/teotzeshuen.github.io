(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=new Map;function t(t){if(!e.has(t)){let n=`/melbourne-report/data/${t}`;e.set(t,fetch(n).then(e=>{if(!e.ok)throw Error(`Failed to load ${n} (${e.status})`);return e.json()}))}return e.get(t)}async function n(){let e=`/melbourne-report/data/`,[n,r,i]=await Promise.all([fetch(`${e}meta.json`).then(e=>e.json()),fetch(`${e}listings.bin`).then(e=>e.arrayBuffer()),fetch(`${e}councils.json`).then(e=>e.json())]),a={};for(let e of n.columns)a[e.name]=e.dtype===`float32`?new Float32Array(r,e.offset,e.length):new Uint8Array(r,e.offset,e.length);return{count:n.count,cols:a,meta:n,councils:i,loadJson:t}}var r=1e3,i=1001,a=1002,o=1003,s=1004,c=1005,l=1006,u=1007,d=1008,f=1009,p=1010,m=1011,h=1012,g=1013,_=1014,v=1015,y=1016,b=1017,x=1018,S=1020,C=35902,w=35899,T=1021,E=1022,D=1023,O=1026,k=1027,A=1028,j=1029,M=1030,N=1031,P=1033,F=33776,I=33777,L=33778,R=33779,z=35840,B=35841,ee=35842,V=35843,te=36196,H=37492,U=37496,ne=37488,re=37489,W=37490,ie=37491,ae=37808,oe=37809,G=37810,se=37811,ce=37812,le=37813,ue=37814,de=37815,fe=37816,pe=37817,me=37818,he=37819,ge=37820,_e=37821,ve=36492,ye=36494,be=36495,xe=36283,Se=36284,Ce=36285,K=36286,we=2300,Te=2301,Ee=2302,q=2303,De=2400,J=2401,Oe=2402,ke=3200,Ae=`srgb`,je=`srgb-linear`,Me=`linear`,Ne=`srgb`,Pe=7680,Fe=35044,Ie=35048,Le=2e3;function Re(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ze(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Be(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ve(){let e=Be(`canvas`);return e.style.display=`block`,e}var He={};function Ue(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function We(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function Y(...e){e=We(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function X(...e){e=We(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ge(...e){let t=e.join(` `);t in He||(He[t]=!0,Y(...e))}function Ke(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var qe={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},Je=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Ye=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Xe=Math.PI/180,Ze=180/Math.PI;function Qe(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ye[e&255]+Ye[e>>8&255]+Ye[e>>16&255]+Ye[e>>24&255]+`-`+Ye[t&255]+Ye[t>>8&255]+`-`+Ye[t>>16&15|64]+Ye[t>>24&255]+`-`+Ye[n&63|128]+Ye[n>>8&255]+`-`+Ye[n>>16&255]+Ye[n>>24&255]+Ye[r&255]+Ye[r>>8&255]+Ye[r>>16&255]+Ye[r>>24&255]).toLowerCase()}function $e(e,t,n){return Math.max(t,Math.min(n,e))}function et(e,t){return(e%t+t)%t}function tt(e,t,n){return(1-n)*e+n*t}function nt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function rt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function it(e,t){if(t.constructor===Float32Array)return e;let n=rt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function at(e,t){if(t.constructor===Float32Array)return e;let n=rt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var ot=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},st=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:Y(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ct.copy(this).projectOnVector(e),this.sub(ct)}reflect(e){return this.sub(ct.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ct=new Z,lt=new st,Q=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ge(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(ut.makeScale(e,t)),this}rotate(e){return Ge(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(ut.makeRotation(-e)),this}translate(e,t){return Ge(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(ut.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ut=new Q,dt=new Q().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ft=new Q().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pt(){let e={enabled:!0,workingColorSpace:je,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=ht(e.r),e.g=ht(e.g),e.b=ht(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=gt(e.r),e.g=gt(e.g),e.b=gt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Me:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[je]:{primaries:t,whitePoint:r,transfer:Me,toXYZ:dt,fromXYZ:ft,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:t,whitePoint:r,transfer:Ne,toXYZ:dt,fromXYZ:ft,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}}),e}var mt=pt();function ht(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function gt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var _t,vt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_t===void 0&&(_t=Be(`canvas`)),_t.width=e.width,_t.height=e.height;let t=_t.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=_t}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Be(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=ht(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(ht(t[e]/255)*255):t[e]=ht(t[e]);return{data:t,width:e.width,height:e.height}}return Y(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},yt=0,bt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yt++}),this.uuid=Qe(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(xt(r[t].image)):e.push(xt(r[t]))}else e=xt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function xt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?vt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Y(`Texture: Unable to serialize Texture.`),{})}var St=0,Ct=new Z,wt=class e extends Je{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=i,a=i,o=l,s=d,c=D,u=f,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:St++}),this.uuid=Qe(),this.name=``,this.source=new bt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=u,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Q,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ct).x}get height(){return this.source.getSize(Ct).y}get depth(){return this.source.getSize(Ct).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Y(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?Y(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case r:e.x-=Math.floor(e.x);break;case i:e.x=e.x<0?0:1;break;case a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case r:e.y-=Math.floor(e.y);break;case i:e.y=e.y<0?0:1;break;case a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wt.DEFAULT_IMAGE=null,wt.DEFAULT_MAPPING=300,wt.DEFAULT_ANISOTROPY=1;var Tt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Et=class extends Je{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:l,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new wt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:l,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new bt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Dt=class extends Et{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ot=class extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=o,this.minFilter=o,this.wrapR=i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},kt=class extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=o,this.minFilter=o,this.wrapR=i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},At=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/jt.setFromMatrixColumn(e,0).length(),i=1/jt.setFromMatrixColumn(e,1).length(),a=1/jt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nt,e,Pt)}lookAt(e,t,n){let r=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),Ft.crossVectors(n,Lt),Ft.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),Ft.crossVectors(n,Lt)),Ft.normalize(),It.crossVectors(Lt,Ft),r[0]=Ft.x,r[4]=It.x,r[8]=Lt.x,r[1]=Ft.y,r[5]=It.y,r[9]=Lt.y,r[2]=Ft.z,r[6]=It.z,r[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=jt.set(r[0],r[1],r[2]).length(),o=jt.set(r[4],r[5],r[6]).length(),s=jt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Mt.copy(this);let c=1/a,l=1/o,u=1/s;return Mt.elements[0]*=c,Mt.elements[1]*=c,Mt.elements[2]*=c,Mt.elements[4]*=l,Mt.elements[5]*=l,Mt.elements[6]*=l,Mt.elements[8]*=u,Mt.elements[9]*=u,Mt.elements[10]*=u,t.setFromRotationMatrix(Mt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Le,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Le,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},jt=new Z,Mt=new At,Nt=new Z(0,0,0),Pt=new Z(1,1,1),Ft=new Z,It=new Z,Lt=new Z,Rt=new At,zt=new st,Bt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-$e(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin($e(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:Y(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zt.setFromEuler(this),this.setFromQuaternion(zt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bt.DEFAULT_ORDER=`XYZ`;var Vt=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Ht=0,Ut=new Z,Wt=new st,Gt=new At,Kt=new Z,qt=new Z,Jt=new Z,Yt=new st,Xt=new Z(1,0,0),Zt=new Z(0,1,0),Qt=new Z(0,0,1),$t={type:`added`},en={type:`removed`},tn={type:`childadded`,child:null},nn={type:`childremoved`,child:null},rn=class e extends Je{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ht++}),this.uuid=Qe(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Z,n=new Bt,r=new st,i=new Z(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new At},normalMatrix:{value:new Q}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wt.setFromAxisAngle(e,t),this.quaternion.multiply(Wt),this}rotateOnWorldAxis(e,t){return Wt.setFromAxisAngle(e,t),this.quaternion.premultiply(Wt),this}rotateX(e){return this.rotateOnAxis(Xt,e)}rotateY(e){return this.rotateOnAxis(Zt,e)}rotateZ(e){return this.rotateOnAxis(Qt,e)}translateOnAxis(e,t){return Ut.copy(e).applyQuaternion(this.quaternion),this.position.add(Ut.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xt,e)}translateY(e){return this.translateOnAxis(Zt,e)}translateZ(e){return this.translateOnAxis(Qt,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kt.copy(e):Kt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),qt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gt.lookAt(qt,Kt,this.up):Gt.lookAt(Kt,qt,this.up),this.quaternion.setFromRotationMatrix(Gt),r&&(Gt.extractRotation(r.matrixWorld),Wt.setFromRotationMatrix(Gt),this.quaternion.premultiply(Wt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(X(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($t),tn.child=e,this.dispatchEvent(tn),tn.child=null):X(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(en),nn.child=e,this.dispatchEvent(nn),nn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($t),tn.child=e,this.dispatchEvent(tn),tn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qt,e,Jt),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qt,Yt,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};rn.DEFAULT_UP=new Z(0,1,0),rn.DEFAULT_MATRIX_AUTO_UPDATE=!0,rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=class extends rn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},on={type:`move`},sn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(on)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new an;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},cn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ln={h:0,s:0,l:0},un={h:0,s:0,l:0};function dn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var fn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ae){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=mt.workingColorSpace){if(e=et(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=dn(i,r,e+1/3),this.g=dn(i,r,e),this.b=dn(i,r,e-1/3)}return mt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ae){function n(t){t!==void 0&&parseFloat(t)<1&&Y(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:Y(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);Y(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ae){let n=cn[e.toLowerCase()];return n===void 0?Y(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ht(e.r),this.g=ht(e.g),this.b=ht(e.b),this}copyLinearToSRGB(e){return this.r=gt(e.r),this.g=gt(e.g),this.b=gt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ae){return mt.workingToColorSpace(pn.copy(this),e),Math.round($e(pn.r*255,0,255))*65536+Math.round($e(pn.g*255,0,255))*256+Math.round($e(pn.b*255,0,255))}getHexString(e=Ae){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(pn.copy(this),t);let n=pn.r,r=pn.g,i=pn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Ae){mt.workingToColorSpace(pn.copy(this),e);let t=pn.r,n=pn.g,r=pn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(ln),this.setHSL(ln.h+e,ln.s+t,ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ln),e.getHSL(un);let n=tt(ln.h,un.h,t),r=tt(ln.s,un.s,t),i=tt(ln.l,un.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new fn;fn.NAMES=cn;var mn=class extends rn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bt,this.environmentIntensity=1,this.environmentRotation=new Bt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},hn=new Z,gn=new Z,_n=new Z,vn=new Z,yn=new Z,bn=new Z,xn=new Z,Sn=new Z,Cn=new Z,wn=new Z,Tn=new Tt,En=new Tt,Dn=new Tt,On=class e{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),hn.subVectors(e,t),r.cross(hn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){hn.subVectors(r,t),gn.subVectors(n,t),_n.subVectors(e,t);let a=hn.dot(hn),o=hn.dot(gn),s=hn.dot(_n),c=gn.dot(gn),l=gn.dot(_n),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,vn)!==null&&vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,vn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,vn.x),s.addScaledVector(a,vn.y),s.addScaledVector(o,vn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Tn.setScalar(0),En.setScalar(0),Dn.setScalar(0),Tn.fromBufferAttribute(e,t),En.fromBufferAttribute(e,n),Dn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Tn,i.x),a.addScaledVector(En,i.y),a.addScaledVector(Dn,i.z),a}static isFrontFacing(e,t,n,r){return hn.subVectors(n,t),gn.subVectors(e,t),hn.cross(gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),hn.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;yn.subVectors(r,n),bn.subVectors(i,n),Sn.subVectors(e,n);let s=yn.dot(Sn),c=bn.dot(Sn);if(s<=0&&c<=0)return t.copy(n);Cn.subVectors(e,r);let l=yn.dot(Cn),u=bn.dot(Cn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(yn,a);wn.subVectors(e,i);let f=yn.dot(wn),p=bn.dot(wn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(bn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return xn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(xn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(yn,a).addScaledVector(bn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kn=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,jn):jn.fromBufferAttribute(r,t),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Mn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Mn.copy(e.boundingBox)),Mn.applyMatrix4(e.matrixWorld),this.union(Mn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zn),Bn.subVectors(this.max,zn),Nn.subVectors(e.a,zn),Pn.subVectors(e.b,zn),Fn.subVectors(e.c,zn),In.subVectors(Pn,Nn),Ln.subVectors(Fn,Pn),Rn.subVectors(Nn,Fn);let t=[0,-In.z,In.y,0,-Ln.z,Ln.y,0,-Rn.z,Rn.y,In.z,0,-In.x,Ln.z,0,-Ln.x,Rn.z,0,-Rn.x,-In.y,In.x,0,-Ln.y,Ln.x,0,-Rn.y,Rn.x,0];return!Un(t,Nn,Pn,Fn,Bn)||(t=[1,0,0,0,1,0,0,0,1],!Un(t,Nn,Pn,Fn,Bn))?!1:(Vn.crossVectors(In,Ln),t=[Vn.x,Vn.y,Vn.z],Un(t,Nn,Pn,Fn,Bn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},An=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],jn=new Z,Mn=new kn,Nn=new Z,Pn=new Z,Fn=new Z,In=new Z,Ln=new Z,Rn=new Z,zn=new Z,Bn=new Z,Vn=new Z,Hn=new Z;function Un(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Hn.fromArray(e,a);let o=i.x*Math.abs(Hn.x)+i.y*Math.abs(Hn.y)+i.z*Math.abs(Hn.z),s=t.dot(Hn),c=n.dot(Hn),l=r.dot(Hn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Wn=new Z,Gn=new ot,Kn=0,qn=class extends Je{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Fe,this.updateRanges=[],this.gpuType=v,this.version=0,this._normalizationScale=e===void 0?void 0:rt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix3(e),this.setXY(t,Gn.x,Gn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix3(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?it(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?at(e,this.array):Math.round(e*t)}},Jn=class extends qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Yn=class extends qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Xn=class extends qn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zn=new kn,Qn=new Z,$n=new Z,er=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Zn.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qn.subVectors(e,this.center);let t=Qn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Qn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($n.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qn.copy(e.center).add($n)),this.expandByPoint(Qn.copy(e.center).sub($n))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},tr=0,nr=new At,rr=new rn,ir=new Z,ar=new kn,or=new kn,sr=new Z,cr=class e extends Je{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tr++}),this.uuid=Qe(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Re(e)?Yn:Jn)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Q().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return nr.makeRotationFromQuaternion(e),this.applyMatrix4(nr),this}rotateX(e){return nr.makeRotationX(e),this.applyMatrix4(nr),this}rotateY(e){return nr.makeRotationY(e),this.applyMatrix4(nr),this}rotateZ(e){return nr.makeRotationZ(e),this.applyMatrix4(nr),this}translate(e,t,n){return nr.makeTranslation(e,t,n),this.applyMatrix4(nr),this}scale(e,t,n){return nr.makeScale(e,t,n),this.applyMatrix4(nr),this}lookAt(e){return rr.lookAt(e),rr.updateMatrix(),this.applyMatrix4(rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Xn(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&Y(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)X(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ar.setFromBufferAttribute(n),this.morphTargetsRelative?(sr.addVectors(this.boundingBox.min,ar.min),this.boundingBox.expandByPoint(sr),sr.addVectors(this.boundingBox.max,ar.max),this.boundingBox.expandByPoint(sr)):(this.boundingBox.expandByPoint(ar.min),this.boundingBox.expandByPoint(ar.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&X(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)X(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Z,1/0);else if(e){let n=this.boundingSphere.center;if(ar.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];or.setFromBufferAttribute(n),this.morphTargetsRelative?(sr.addVectors(ar.min,or.min),ar.expandByPoint(sr),sr.addVectors(ar.max,or.max),ar.expandByPoint(sr)):(ar.expandByPoint(or.min),ar.expandByPoint(or.max))}ar.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)sr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(sr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)sr.fromBufferAttribute(a,t),o&&(ir.fromBufferAttribute(e,t),sr.add(ir)),r=Math.max(r,n.distanceToSquared(sr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&X(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){X(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new qn(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new Z,s[e]=new Z;let l=new Z,u=new Z,d=new Z,f=new ot,p=new ot,m=new ot,h=new Z,g=new Z;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new Z,b=new Z,x=new Z,S=new Z;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new qn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Z,i=new Z,a=new Z,o=new Z,s=new Z,c=new Z,l=new Z,u=new Z;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sr.fromBufferAttribute(e,t),sr.normalize(),e.setXYZ(t,sr.x,sr.y,sr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new qn(a,r,i)}if(this.index===null)return Y(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},lr=new Z,ur=new Z,dr=new Q,fr=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=lr.subVectors(n,t).cross(ur.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(lr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||dr.getNormalMatrix(e),r=this.coplanarPoint(lr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},pr=0,mr=class extends Je{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pr++}),this.uuid=Qe(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pe,this.stencilZFail=Pe,this.stencilZPass=Pe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Y(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?Y(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new fn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new fr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new ot().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},hr=new Z,gr=new Z,_r=new Z,vr=new Z,yr=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hr.copy(this.origin).addScaledVector(this.direction,t),hr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){gr.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(gr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(_r),o=vr.dot(this.direction),s=-vr.dot(_r),c=vr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(gr).addScaledVector(_r,d),f}intersectSphere(e,t){if(e.radius<0)return null;hr.subVectors(e.center,this.origin);let n=hr.dot(this.direction),r=hr.dot(hr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,hr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,L=T-P*D,R=E-F*D,z=O-P*A,B=k-F*A,ee=j-P*N,V=M-F*N,te=ee*B-V*z,H=L*V-R*ee,U=z*R-B*L;if(r){if(te<0||H<0||U<0)return null}else if((te<0||H<0||U<0)&&(te>0||H>0||U>0))return null;let ne=te+H+U;if(ne===0)return null;let re=I*(te*D+H*A+U*N);return(ne>0?re<0:re>0)?null:this.at(re/ne,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},br=class extends mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new fn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xr=new At,Sr=new yr,Cr=new er,wr=new Z,Tr=new Z,Er=new Z,Dr=new Z,Or=new Z,kr=new Z,Ar=new Z,jr=new Z,Mr=class extends rn{constructor(e=new cr,t=new br){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){kr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Or.fromBufferAttribute(s,e),a?kr.addScaledVector(Or,r):kr.addScaledVector(Or.sub(t),r))}t.add(kr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(i),Sr.copy(e.ray).recast(e.near),Cr.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Cr,wr)===null||Sr.origin.distanceToSquared(wr)>(e.far-e.near)**2)||(xr.copy(i).invert(),Sr.copy(e.ray).applyMatrix4(xr),(n.boundingBox===null||Sr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Sr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Pr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Pr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Pr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Pr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Nr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;jr.copy(s),jr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(jr);return l<n.near||l>n.far?null:{distance:l,point:jr.clone(),object:e}}function Pr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Tr),e.getVertexPosition(c,Er),e.getVertexPosition(l,Dr);let u=Nr(e,t,n,r,Tr,Er,Dr,Ar);if(u){let e=new Z;On.getBarycoord(Ar,Tr,Er,Dr,e),i&&(u.uv=On.getInterpolatedAttribute(i,s,c,l,e,new ot)),a&&(u.uv1=On.getInterpolatedAttribute(a,s,c,l,e,new ot)),o&&(u.normal=On.getInterpolatedAttribute(o,s,c,l,e,new Z),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Z,materialIndex:0};On.getNormal(Tr,Er,Dr,t.normal),u.face=t,u.barycoord=e}return u}var Fr=class extends wt{constructor(e=null,t=1,n=1,r,i,a,s,c,l=o,u=o,d,f){super(null,a,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ir=new er,Lr=new ot(.5,.5),Rr=new Z,zr=class{constructor(e=new fr,t=new fr,n=new fr,r=new fr,i=new fr,a=new fr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Le,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476+Lr.distanceTo(e.center),Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Rr.x=r.normal.x>0?e.max.x:e.min.x,Rr.y=r.normal.y>0?e.max.y:e.min.y,Rr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Br=new At,Vr=class e{constructor(){this.coordinateSystem=Le,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Br.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new zr),n[e].setFromProjectionMatrix(Br,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new zr),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Hr=class extends mr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new fn(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ur=new At,Wr=new yr,Gr=new er,Kr=new Z,qr=class extends rn{constructor(e=new cr,t=new Hr){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(r),Gr.radius+=i,e.ray.intersectsSphere(Gr)===!1)return;Ur.copy(r).invert(),Wr.copy(e.ray).applyMatrix4(Ur);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Kr.fromBufferAttribute(l,n),Jr(Kr,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Kr.fromBufferAttribute(l,a),Jr(Kr,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Jr(e,t,n,r,i,a,o){let s=Wr.distanceSqToPoint(e);if(s<n){let n=new Z;Wr.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Yr=class extends wt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xr=class extends wt{constructor(e,t,n=_,r,i,a,s=o,c=o,l,u=O,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,a,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Zr=class extends Xr{constructor(e,t=_,n=301,r,i,a=o,s=o,c,l=O){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,a,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Qr=class extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},$r=class e extends cr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Xn(c,3)),this.setAttribute(`normal`,new Xn(l,3)),this.setAttribute(`uv`,new Xn(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Z;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ei=class e extends cr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Xn(p,3)),this.setAttribute(`normal`,new Xn(m,3)),this.setAttribute(`uv`,new Xn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function ti(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ri(i))i.isRenderTargetTexture?(Y(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ri(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ni(e){let t={};for(let n=0;n<e.length;n++){let r=ti(e[n]);for(let e in r)t[e]=r[e]}return t}function ri(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ii(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ai(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:mt.workingColorSpace}var oi={clone:ti,merge:ni},si=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ci=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,li=class extends mr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=si,this.fragmentShader=ci,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ti(e.uniforms),this.uniformsGroups=ii(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new fn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new ot().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new Z().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Tt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Q().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new At().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ui=class extends li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},di=class extends mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ke,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fi=class extends mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function pi(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function mi(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var hi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},gi=class extends hi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:De,endingEnd:De}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case J:i=e,o=2*t-n;break;case Oe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case J:a=e,s=2*n-t;break;case Oe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},_i=class extends hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},vi=class extends hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},yi=class extends hi{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Si(n,t,g,y,r);i[p]=bi(x,o,_,b,m)}return i}};function bi(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function xi(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Si(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=bi(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=xi(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ci=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=pi(t,this.TimeBufferType),this.values=pi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pi(e.times,Array),values:pi(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),mi(e.settings)&&(n.settings={inTangents:pi(e.settings.inTangents,Array),outTangents:pi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _i(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new yi(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case we:t=this.InterpolantFactoryMethodDiscrete;break;case Te:t=this.InterpolantFactoryMethodLinear;break;case Ee:t=this.InterpolantFactoryMethodSmooth;break;case q:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return Y(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return we;case this.InterpolantFactoryMethodLinear:return Te;case this.InterpolantFactoryMethodSmooth:return Ee;case this.InterpolantFactoryMethodBezier:return q}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;mi(this.settings)&&(wi(this.settings.inTangents,e),wi(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;mi(this.settings)&&(Ti(this.settings.inTangents,e),Ti(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(X(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(X(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){X(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){X(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&ze(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){X(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ee,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,mi(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function wi(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Ti(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ci.prototype.ValueTypeName=``,Ci.prototype.TimeBufferType=Float32Array,Ci.prototype.ValueBufferType=Float32Array,Ci.prototype.DefaultInterpolation=Te;var Ei=class extends Ci{constructor(e,t,n){super(e,t,n)}};Ei.prototype.ValueTypeName=`bool`,Ei.prototype.ValueBufferType=Array,Ei.prototype.DefaultInterpolation=we,Ei.prototype.InterpolantFactoryMethodLinear=void 0,Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends Ci{constructor(e,t,n,r){super(e,t,n,r)}};Di.prototype.ValueTypeName=`color`;var Oi=class extends Ci{constructor(e,t,n,r){super(e,t,n,r)}};Oi.prototype.ValueTypeName=`number`;var ki=class extends hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)st.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ai=class extends Ci{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ki(this.times,this.values,this.getValueSize(),e)}};Ai.prototype.ValueTypeName=`quaternion`,Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends Ci{constructor(e,t,n){super(e,t,n)}};ji.prototype.ValueTypeName=`string`,ji.prototype.ValueBufferType=Array,ji.prototype.DefaultInterpolation=we,ji.prototype.InterpolantFactoryMethodLinear=void 0,ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends Ci{constructor(e,t,n,r){super(e,t,n,r)}};Mi.prototype.ValueTypeName=`vector`;var Ni=new Z,Pi=new st,Fi=new Z,Ii=class extends rn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Le,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ni,Pi,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ni,Pi,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ni,Pi,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ni,Pi,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Li=new Z,Ri=new ot,zi=new ot,Bi=class extends Ii{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ze*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xe*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ze*2*Math.atan(Math.tan(Xe*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Ri,zi),t.subVectors(zi,Ri)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xe*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vi=class extends Ii{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hi=-90,Ui=1,Wi=class extends rn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Bi(Hi,Ui,e,t);r.layers=this.layers,this.add(r);let i=new Bi(Hi,Ui,e,t);i.layers=this.layers,this.add(i);let a=new Bi(Hi,Ui,e,t);a.layers=this.layers,this.add(a);let o=new Bi(Hi,Ui,e,t);o.layers=this.layers,this.add(o);let s=new Bi(Hi,Ui,e,t);s.layers=this.layers,this.add(s);let c=new Bi(Hi,Ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Gi=class extends Bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Ki=`\\[\\]\\.:\\/`,qi=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ji=`[^\\[\\]\\.:\\/]`,Yi=`[^`+Ki.replace(`\\.`,``)+`]`,Xi=`((?:WC+[\\/:])*)`.replace(`WC`,Ji),Zi=`(WCOD+)?`.replace(`WCOD`,Yi),Qi=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ji),$i=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ji),ea=RegExp(`^`+Xi+Zi+Qi+$i+`$`),ta=[`material`,`materials`,`bones`,`map`],na=class{constructor(e,t,n){let r=n||ra.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ra=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(qi,``)}static parseTrackName(e){let t=ea.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ta.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Y(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){X(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){X(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){X(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){X(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){X(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){X(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){X(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;X(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){X(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){X(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ra.Composite=na,ra.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ra.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ra.prototype.GetterByBindingType=[ra.prototype._getValue_direct,ra.prototype._getValue_array,ra.prototype._getValue_arrayElement,ra.prototype._getValue_toArray],ra.prototype.SetterByBindingTypeAndVersioning=[[ra.prototype._setValue_direct,ra.prototype._setValue_direct_setNeedsUpdate,ra.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ra.prototype._setValue_array,ra.prototype._setValue_array_setNeedsUpdate,ra.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ra.prototype._setValue_arrayElement,ra.prototype._setValue_arrayElement_setNeedsUpdate,ra.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ra.prototype._setValue_fromArray,ra.prototype._setValue_fromArray_setNeedsUpdate,ra.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function ia(e,t,n,r){let i=aa(r);switch(n){case T:return e*t;case A:return e*t/i.components*i.byteLength;case j:return e*t/i.components*i.byteLength;case M:return e*t*2/i.components*i.byteLength;case N:return e*t*2/i.components*i.byteLength;case E:return e*t*3/i.components*i.byteLength;case D:return e*t*4/i.components*i.byteLength;case P:return e*t*4/i.components*i.byteLength;case F:case I:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case L:case R:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case B:case V:return Math.max(e,16)*Math.max(t,8)/4;case z:case ee:return Math.max(e,8)*Math.max(t,8)/2;case te:case H:case ne:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case U:case W:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case G:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case se:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ce:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case le:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ue:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case de:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case fe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case me:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case he:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ge:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case _e:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ve:case ye:case be:return Math.ceil(e/4)*Math.ceil(t/4)*16;case xe:case Se:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ce:case K:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function aa(e){switch(e){case f:case p:return{byteLength:1,components:1};case h:case m:case y:return{byteLength:2,components:1};case b:case x:return{byteLength:2,components:4};case _:case g:case v:return{byteLength:4,components:1};case C:case w:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?Y(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function oa(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function sa(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var ca={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},$={common:{diffuse:{value:new fn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Q},alphaMap:{value:null},alphaMapTransform:{value:new Q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Q}},envmap:{envMap:{value:null},envMapRotation:{value:new Q},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Q},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new fn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Q},alphaTest:{value:0},uvTransform:{value:new Q}},sprite:{diffuse:{value:new fn(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Q},alphaMap:{value:null},alphaMapTransform:{value:new Q},alphaTest:{value:0}}},la={basic:{uniforms:ni([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:ca.meshbasic_vert,fragmentShader:ca.meshbasic_frag},lambert:{uniforms:ni([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new fn(0)},envMapIntensity:{value:1}}]),vertexShader:ca.meshlambert_vert,fragmentShader:ca.meshlambert_frag},phong:{uniforms:ni([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new fn(0)},specular:{value:new fn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ca.meshphong_vert,fragmentShader:ca.meshphong_frag},standard:{uniforms:ni([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new fn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ca.meshphysical_vert,fragmentShader:ca.meshphysical_frag},toon:{uniforms:ni([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new fn(0)}}]),vertexShader:ca.meshtoon_vert,fragmentShader:ca.meshtoon_frag},matcap:{uniforms:ni([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:ca.meshmatcap_vert,fragmentShader:ca.meshmatcap_frag},points:{uniforms:ni([$.points,$.fog]),vertexShader:ca.points_vert,fragmentShader:ca.points_frag},dashed:{uniforms:ni([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ca.linedashed_vert,fragmentShader:ca.linedashed_frag},depth:{uniforms:ni([$.common,$.displacementmap]),vertexShader:ca.depth_vert,fragmentShader:ca.depth_frag},normal:{uniforms:ni([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:ca.meshnormal_vert,fragmentShader:ca.meshnormal_frag},sprite:{uniforms:ni([$.sprite,$.fog]),vertexShader:ca.sprite_vert,fragmentShader:ca.sprite_frag},background:{uniforms:{uvTransform:{value:new Q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ca.background_vert,fragmentShader:ca.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Q}},vertexShader:ca.backgroundCube_vert,fragmentShader:ca.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ca.cube_vert,fragmentShader:ca.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ca.equirect_vert,fragmentShader:ca.equirect_frag},distance:{uniforms:ni([$.common,$.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ca.distance_vert,fragmentShader:ca.distance_frag},shadow:{uniforms:ni([$.lights,$.fog,{color:{value:new fn(0)},opacity:{value:1}}]),vertexShader:ca.shadow_vert,fragmentShader:ca.shadow_frag}};la.physical={uniforms:ni([la.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Q},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Q},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Q},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Q},sheen:{value:0},sheenColor:{value:new fn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Q},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Q},attenuationDistance:{value:0},attenuationColor:{value:new fn(0)},specularColor:{value:new fn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Q},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Q}}]),vertexShader:ca.meshphysical_vert,fragmentShader:ca.meshphysical_frag};var ua={r:0,b:0,g:0},da=new At,fa=new Q;fa.set(-1,0,0,0,1,0,0,0,1);function pa(e,t,n,r,i,a){let o=new fn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Mr(new $r(1,1,1),new li({name:`BackgroundCubeMaterial`,uniforms:ti(la.backgroundCube.uniforms),vertexShader:la.backgroundCube.vertexShader,fragmentShader:la.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(da.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(fa),l.material.toneMapped=mt.getTransfer(i.colorSpace)!==Ne,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Mr(new ei(2,2),new li({name:`BackgroundMaterial`,uniforms:ti(la.background.uniforms),vertexShader:la.background.vertexShader,fragmentShader:la.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=mt.getTransfer(i.colorSpace)!==Ne,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ua,ai(e)),n.buffers.color.setClear(ua.r,ua.g,ua.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ma(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ha(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ga(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(Y(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&Y(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&Y(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function _a(e){let t=this,n=null,r=0,i=!1,a=!1,o=new fr,s=new Q,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var va=class extends Dt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Yr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $r(5,5,5),i=new li({name:`CubemapFromEquirect`,uniforms:ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Mr(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=l),new Wi(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},ya=256,ba=3,xa=20,Sa=256,Ca=16,wa=3,Ta=new Z,Ea=new fn,Da=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Wi(1,10,null),this._boxMesh=new Mr(new $r(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ta}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Ea));let h=new Wi(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Na(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ya,nt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?ya:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Oa(e,!1,!1),n=Math.log2(e)-ba;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Oa(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pa()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Na()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Aa(),this._integrationMaterial=ja());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Ca);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-wa)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Sa*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ma());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Oa(e,t,n){return new va(e,{minFilter:d,generateMipmaps:t,type:y,colorSpace:je,depthBuffer:n})}function ka(e,t,n){return new li({name:e,uniforms:t,vertexShader:ca.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Aa(){return ka(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Sa}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ja(){return ka(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ca}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ma(){return ka(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${xa}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Na(){return ka(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Pa(){return ka(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Fa(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new va(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Da(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Da(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ia(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ge(`WebGLRenderer: `+e+` extension not supported.`),t}}}function La(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?Yn:Jn)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Ra(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function za(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:X(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ba(e,t,n){let r=new WeakMap,i=new Tt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Ot(h,p,m,u);g.type=v,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new ot(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Va(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ha={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ua(e,t,n,r,i,a){let o=new Dt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new cr;u.setAttribute(`position`,new Xn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Xn([0,2,0,0,2,0],2));let d=new ui({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Mr(u,d),p=new Vi(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,b=[],x=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<b.length;n++){let r=b[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){b=e,x=b.length>0&&b[0].isRenderPass===!0;let t=o.width,n=o.height;b.length>0&&s===null&&(s=new Dt(t,n,{type:y,depthBuffer:!1,stencilBuffer:!1}),c=new Dt(t,n,{type:y,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&b.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Xr(t,n),a===!0&&(l.format=k,l.type=S)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<b.length;e++){let i=b[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&b.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return x===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return x},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<b.length;i++){let a=b[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},mt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Ha[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Wa=new wt,Ga=new Xr(1,1),Ka=new Zr(1),qa=new Ot,Ja=new kt,Ya=new Yr,Xa=[],Za=[],Qa=new Float32Array(16),$a=new Float32Array(9),eo=new Float32Array(4);function to(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Xa[i];if(a===void 0&&(a=new Float32Array(i),Xa[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function no(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ro(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function io(e,t){let n=Za[t];n===void 0&&(n=new Int32Array(t),Za[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function ao(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function oo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(no(n,t))return;e.uniform2fv(this.addr,t),ro(n,t)}}function so(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(no(n,t))return;e.uniform3fv(this.addr,t),ro(n,t)}}function co(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(no(n,t))return;e.uniform4fv(this.addr,t),ro(n,t)}}function lo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(no(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ro(n,t)}else{if(no(n,r))return;eo.set(r),e.uniformMatrix2fv(this.addr,!1,eo),ro(n,r)}}function uo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(no(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ro(n,t)}else{if(no(n,r))return;$a.set(r),e.uniformMatrix3fv(this.addr,!1,$a),ro(n,r)}}function fo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(no(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ro(n,t)}else{if(no(n,r))return;Qa.set(r),e.uniformMatrix4fv(this.addr,!1,Qa),ro(n,r)}}function po(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function mo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(no(n,t))return;e.uniform2iv(this.addr,t),ro(n,t)}}function ho(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(no(n,t))return;e.uniform3iv(this.addr,t),ro(n,t)}}function go(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(no(n,t))return;e.uniform4iv(this.addr,t),ro(n,t)}}function _o(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function vo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(no(n,t))return;e.uniform2uiv(this.addr,t),ro(n,t)}}function yo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(no(n,t))return;e.uniform3uiv(this.addr,t),ro(n,t)}}function bo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(no(n,t))return;e.uniform4uiv(this.addr,t),ro(n,t)}}function xo(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function So(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?xo(Ga):Wa,n.setTexture2D(t||a,i)}function Co(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ja,i)}function wo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?xo(Ka):Ya,n.setTextureCube(t||a,i)}function To(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||qa,i)}function Eo(e){switch(e){case 5126:return ao;case 35664:return oo;case 35665:return so;case 35666:return co;case 35674:return lo;case 35675:return uo;case 35676:return fo;case 5124:case 35670:return po;case 35667:case 35671:return mo;case 35668:case 35672:return ho;case 35669:case 35673:return go;case 5125:return _o;case 36294:return vo;case 36295:return yo;case 36296:return bo;case 35678:case 36198:case 36298:case 36306:case 35682:return So;case 35679:case 36299:case 36307:return Co;case 35680:case 36300:case 36308:case 36293:return wo;case 36289:case 36303:case 36311:case 36292:return To}}function Do(e,t){e.uniform1fv(this.addr,t)}function Oo(e,t){let n=to(t,this.size,2);e.uniform2fv(this.addr,n)}function ko(e,t){let n=to(t,this.size,3);e.uniform3fv(this.addr,n)}function Ao(e,t){let n=to(t,this.size,4);e.uniform4fv(this.addr,n)}function jo(e,t){let n=to(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Mo(e,t){let n=to(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function No(e,t){let n=to(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Po(e,t){e.uniform1iv(this.addr,t)}function Fo(e,t){e.uniform2iv(this.addr,t)}function Io(e,t){e.uniform3iv(this.addr,t)}function Lo(e,t){e.uniform4iv(this.addr,t)}function Ro(e,t){e.uniform1uiv(this.addr,t)}function zo(e,t){e.uniform2uiv(this.addr,t)}function Bo(e,t){e.uniform3uiv(this.addr,t)}function Vo(e,t){e.uniform4uiv(this.addr,t)}function Ho(e,t,n){let r=this.cache,i=t.length,a=io(n,i);no(r,a)||(e.uniform1iv(this.addr,a),ro(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?xo(Ga):Wa;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Uo(e,t,n){let r=this.cache,i=t.length,a=io(n,i);no(r,a)||(e.uniform1iv(this.addr,a),ro(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ja,a[e])}function Wo(e,t,n){let r=this.cache,i=t.length,a=io(n,i);no(r,a)||(e.uniform1iv(this.addr,a),ro(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?xo(Ka):Ya;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Go(e,t,n){let r=this.cache,i=t.length,a=io(n,i);no(r,a)||(e.uniform1iv(this.addr,a),ro(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||qa,a[e])}function Ko(e){switch(e){case 5126:return Do;case 35664:return Oo;case 35665:return ko;case 35666:return Ao;case 35674:return jo;case 35675:return Mo;case 35676:return No;case 5124:case 35670:return Po;case 35667:case 35671:return Fo;case 35668:case 35672:return Io;case 35669:case 35673:return Lo;case 5125:return Ro;case 36294:return zo;case 36295:return Bo;case 36296:return Vo;case 35678:case 36198:case 36298:case 36306:case 35682:return Ho;case 35679:case 36299:case 36307:return Uo;case 35680:case 36300:case 36308:case 36293:return Wo;case 36289:case 36303:case 36311:case 36292:return Go}}var qo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Eo(t.type)}},Jo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ko(t.type)}},Yo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Xo=/(\w+)(\])?(\[|\.)?/g;function Zo(e,t){e.seq.push(t),e.map[t.id]=t}function Qo(e,t,n){let r=e.name,i=r.length;for(Xo.lastIndex=0;;){let a=Xo.exec(r),o=Xo.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Zo(n,l===void 0?new qo(s,e,t):new Jo(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Yo(s),Zo(n,e)),n=e}}}var $o=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Qo(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function es(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var ts=37297,ns=0;function rs(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var is=new Q;function as(e){mt._getMatrix(is,mt.workingColorSpace,e);let t=`mat3( ${is.elements.map(e=>e.toFixed(4))} )`;switch(mt.getTransfer(e)){case Me:return[t,`LinearTransferOETF`];case Ne:return[t,`sRGBTransferOETF`];default:return Y(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function os(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+rs(e.getShaderSource(t),r)}return i}function ss(e,t){let n=as(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var cs={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ls(e,t){let n=cs[t];return n===void 0?(Y(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var us=new Z;function ds(){return mt.getLuminanceCoefficients(us),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${us.x.toFixed(4)}, ${us.y.toFixed(4)}, ${us.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function fs(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(hs).join(`
`)}function ps(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ms(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function hs(e){return e!==``}function gs(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function _s(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var vs=/^[ \t]*#include +<([\w\d./]+)>/gm;function ys(e){return e.replace(vs,bs)}function bs(e,t){let n=ca[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return ys(n)}var xs=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ss(e){return e.replace(xs,Cs)}function Cs(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ws(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ts={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Es(e){return Ts[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Ds={302:`ENVMAP_MODE_REFRACTION`};function Os(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Ds[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var ks={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function As(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:ks[e.combine]||`ENVMAP_BLENDING_NONE`}function js(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Es(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Os(n),d=As(n),f=fs(n),p=ps(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(hs).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(hs).join(`
`),g.length>0&&(g+=`
`)):(h=[ws(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(hs).join(`
`),g=[ws(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:ca.tonemapping_pars_fragment,n.toneMapping===0?``:ls(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,ca.colorspace_pars_fragment,ss(`linearToOutputTexel`,n.outputColorSpace),ds(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(hs).join(`
`)),o=ys(o),o=gs(o,n),o=_s(o,n),s=ys(s),s=gs(s,n),s=_s(s,n),o=Ss(o),s=Ss(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=es(i,i.VERTEX_SHADER,v),x=es(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=os(i,b,`vertex`),n=os(i,x,`fragment`);X(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):Y(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new $o(i,m),w=ms(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,ts)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ns++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Ms=0,Ns=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ps(e),t.set(e,n)),n}},Ps=class{constructor(e){this.id=Ms++,this.code=e,this.usedTimes=0}};function Fs(e){return e===1030||e===37490||e===36285}function Is(e,t,n,r,i,a){let o=new Vt,s=new Ns,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&Y(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=la[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,P=!!i.map,F=!!i.matcap,I=!!b,L=I&&b.isPMREMTexture===!0,R=!!i.aoMap,z=!!i.lightMap,B=!!i.bumpMap&&i.wireframe===!1,ee=!!i.normalMap,V=!!i.displacementMap,te=!!i.emissiveMap,H=!!i.metalnessMap,U=!!i.roughnessMap,ne=i.anisotropy>0,re=i.clearcoat>0,W=i.diffuseRoughness>0,ie=i.dispersion>0,ae=i.retroreflectivity>0,oe=i.iridescence>0,G=i.sheen>0,se=i.transmission>0,ce=ne&&!!i.anisotropyMap,le=re&&!!i.clearcoatMap,ue=re&&!!i.clearcoatNormalMap,de=re&&!!i.clearcoatRoughnessMap,fe=W&&!!i.diffuseRoughnessMap,pe=oe&&!!i.iridescenceMap,me=oe&&!!i.iridescenceThicknessMap,he=G&&!!i.sheenColorMap,ge=G&&!!i.sheenRoughnessMap,_e=!!i.specularMap,ve=!!i.specularColorMap,ye=!!i.specularIntensityMap,be=se&&!!i.transmissionMap,xe=se&&!!i.thicknessMap,Se=!!i.gradientMap,Ce=!!i.alphaMap,K=i.alphaTest>0,we=!!i.alphaHash,Te=!!i.extensions,Ee=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ee=e.toneMapping);let q=L?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,De={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:mt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:F,envMap:I,envMapMode:I&&b.mapping,envMapPMREM:L,envMapMaxLod:L?q.length-1:null,envMapSize:L?q[0].width:null,aoMap:R,lightMap:z,bumpMap:B,normalMap:ee,displacementMap:V,emissiveMap:te,normalMapObjectSpace:ee&&i.normalMapType===1,normalMapTangentSpace:ee&&i.normalMapType===0,packedNormalMap:ee&&i.normalMapType===0&&Fs(i.normalMap.format),metalnessMap:H,roughnessMap:U,anisotropy:ne,anisotropyMap:ce,clearcoat:re,clearcoatMap:le,clearcoatNormalMap:ue,clearcoatRoughnessMap:de,diffuseRoughness:W,diffuseRoughnessMap:fe,dispersion:ie,retroreflection:ae,iridescence:oe,iridescenceMap:pe,iridescenceThicknessMap:me,sheen:G,sheenColorMap:he,sheenRoughnessMap:ge,specularMap:_e,specularColorMap:ve,specularIntensityMap:ye,transmission:se,transmissionMap:be,thicknessMap:xe,gradientMap:Se,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ce,alphaTest:K,alphaHash:we,combine:i.combine,mapUv:P&&p(i.map.channel),aoMapUv:R&&p(i.aoMap.channel),lightMapUv:z&&p(i.lightMap.channel),bumpMapUv:B&&p(i.bumpMap.channel),normalMapUv:ee&&p(i.normalMap.channel),displacementMapUv:V&&p(i.displacementMap.channel),emissiveMapUv:te&&p(i.emissiveMap.channel),metalnessMapUv:H&&p(i.metalnessMap.channel),roughnessMapUv:U&&p(i.roughnessMap.channel),anisotropyMapUv:ce&&p(i.anisotropyMap.channel),clearcoatMapUv:le&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:ue&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:pe&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:me&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:he&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:ge&&p(i.sheenRoughnessMap.channel),specularMapUv:_e&&p(i.specularMap.channel),specularColorMapUv:ve&&p(i.specularColorMap.channel),specularIntensityMapUv:ye&&p(i.specularIntensityMap.channel),transmissionMapUv:be&&p(i.transmissionMap.channel),thicknessMapUv:xe&&p(i.thicknessMap.channel),alphaMapUv:Ce&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ee||ne),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(P||Ce),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ee===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ee,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&mt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:te&&i.emissiveMap.isVideoTexture===!0&&mt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Te&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Te&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=la[t];n=oi.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new js(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Ls(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Rs(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function zs(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Bs(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Rs),r.length>1&&r.sort(t||zs),i.length>1&&i.sort(t||zs)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Vs(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Bs,e.set(t,[i])):n>=r.length?(i=new Bs,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Hs(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new Z,color:new fn};break;case`SpotLight`:n={position:new Z,direction:new Z,color:new fn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Z,color:new fn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Z,skyColor:new fn,groundColor:new fn};break;case`RectAreaLight`:n={color:new fn,position:new Z,halfWidth:new Z,halfHeight:new Z}}return e[t.id]=n,n}}}function Us(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ws=0;function Gs(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ks(e){let t=new Hs,n=Us(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Z);let i=new Z,a=new At,o=new At;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Gs);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Ws++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function qs(e){let t=new Ks(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Js(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new qs(e),t.set(n,[a])):r>=i.length?(a=new qs(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ys=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xs=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Zs=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Qs=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],$s=new At,ec=new Z,tc=new Z;function nc(e,t,n){let r=new zr,i=new ot,a=new ot,s=new Tt,c=new di,u=new fi,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Ys,fragmentShader:Xs}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new cr;g.setAttribute(`position`,new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Mr(g,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,c){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(Y(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){Y(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let g=p.getFrameExtents();i.multiply(g),a.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/g.x),i.x=a.x*g.x,p.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/g.y),i.y=a.y*g.y,p.mapSize.y=a.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){Y(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Dt(i.x,i.y,{format:M,type:y,minFilter:l,magFilter:l,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Xr(i.x,i.y,v),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=O,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o}else d.isPointLight?(p.map=new va(i.x),p.map.depthTexture=new Zr(i.x,_)):(p.map=new Dt(i.x,i.y),p.map.depthTexture=new Xr(i.x,i.y,_)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=O,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=l,p.map.depthTexture.magFilter=l):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==i.x||p.map.height!==i.y)&&p.map.setSize(i.x,i.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,c);let S=p.camera.layers.mask&4294967294?p.camera.layers:c.layers;for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ec.setFromMatrixPosition(d.matrixWorld),e.position.copy(ec),tc.copy(e.position),tc.add(Zs[t]),e.up.copy(Qs[t]),e.lookAt(tc),e.updateMatrixWorld(),n.makeTranslation(-ec.x,-ec.y,-ec.z),$s.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix($s,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),m.viewport(s)}r=p.getFrustum(t),T(n,c,i,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,c),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new Dt(i.x,i.y,{format:M,type:y}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)T(l[e],i,a,o,s,c)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function rc(e,t){function n(){let t=!1,n=new Tt,r=null,i=new Tt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?H(e.DEPTH_TEST):U(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=qe[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?H(e.STENCIL_TEST):U(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new fn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,L={},R=e.getParameter(e.SCISSOR_BOX),z=e.getParameter(e.VIEWPORT),B=new Tt().fromArray(R),ee=new Tt().fromArray(z);function V(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let te={};te[e.TEXTURE_2D]=V(e.TEXTURE_2D,e.TEXTURE_2D,1),te[e.TEXTURE_CUBE_MAP]=V(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[e.TEXTURE_2D_ARRAY]=V(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),te[e.TEXTURE_3D]=V(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),H(e.DEPTH_TEST),o.setFunc(3),se(!1),ce(1),H(e.CULL_FACE),oe(0);function H(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function U(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ne(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function re(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function W(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ie={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ie[103]=e.MIN,ie[104]=e.MAX;let ae={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function oe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(U(e.BLEND),g=!1);else if(g===!1&&(H(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:X(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:X(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:X(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:X(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ie[n],ie[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ae[r],ae[i],ae[o],ae[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function G(t,n){t.side===2?U(e.CULL_FACE):H(e.CULL_FACE);let r=t.side===1;n&&(r=!r),se(r),t.blending===1&&t.transparent===!1?oe(0):oe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ue(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?H(e.SAMPLE_ALPHA_TO_COVERAGE):U(e.SAMPLE_ALPHA_TO_COVERAGE)}function se(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ce(t){t===0?U(e.CULL_FACE):(H(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function le(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ue(t,n,r){t?(H(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):U(e.POLYGON_OFFSET_FILL)}function de(t){t?H(e.SCISSOR_TEST):U(e.SCISSOR_TEST)}function fe(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function pe(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=L[r];i===void 0&&(i={type:void 0,texture:void 0},L[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||te[t]),i.type=t,i.texture=n)}function me(){let t=L[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function he(){try{e.compressedTexImage2D(...arguments)}catch(e){X(`WebGLState:`,e)}}function ge(){try{e.compressedTexImage3D(...arguments)}catch(e){X(`WebGLState:`,e)}}function _e(){try{e.texSubImage2D(...arguments)}catch(e){X(`WebGLState:`,e)}}function ve(){try{e.texSubImage3D(...arguments)}catch(e){X(`WebGLState:`,e)}}function ye(){try{e.compressedTexSubImage2D(...arguments)}catch(e){X(`WebGLState:`,e)}}function be(){try{e.compressedTexSubImage3D(...arguments)}catch(e){X(`WebGLState:`,e)}}function xe(){try{e.texStorage2D(...arguments)}catch(e){X(`WebGLState:`,e)}}function Se(){try{e.texStorage3D(...arguments)}catch(e){X(`WebGLState:`,e)}}function Ce(){try{e.texImage2D(...arguments)}catch(e){X(`WebGLState:`,e)}}function K(){try{e.texImage3D(...arguments)}catch(e){X(`WebGLState:`,e)}}function we(t){return d[t]===void 0?e.getParameter(t):d[t]}function Te(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ee(t){B.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),B.copy(t))}function q(t){ee.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ee.copy(t))}function De(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function J(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Oe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,L={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new fn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,B.set(0,0,e.canvas.width,e.canvas.height),ee.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:H,disable:U,bindFramebuffer:ne,drawBuffers:re,useProgram:W,setBlending:oe,setMaterial:G,setFlipSided:se,setCullFace:ce,setLineWidth:le,setPolygonOffset:ue,setScissorTest:de,activeTexture:fe,bindTexture:pe,unbindTexture:me,compressedTexImage2D:he,compressedTexImage3D:ge,texImage2D:Ce,texImage3D:K,pixelStorei:Te,getParameter:we,updateUBOMapping:De,uniformBlockBinding:J,texStorage2D:xe,texStorage3D:Se,texSubImage2D:_e,texSubImage3D:ve,compressedTexSubImage2D:ye,compressedTexSubImage3D:be,scissor:Ee,viewport:q,reset:Oe}}function ic(e,t,n,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new ot,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):Be(`canvas`)}function D(e,t,n){let r=1,i=Oe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=E(n,a));let o=t?E(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),Y(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&Y(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function O(e){return e.generateMipmaps}function A(t){e.generateMipmap(t)}function j(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];Y(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||Y(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Me:mt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function N(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,Y(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function P(e,t){return O(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function F(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function I(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function L(e){z(e.target)}function R(e){B(e.target)}function z(e){e.removeEventListener(`dispose`,L),I(e),V(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function B(e){e.removeEventListener(`dispose`,R),I(e),H(e)}function ee(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?B(t):z(t))}C.clear(),b.clear()}function V(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&te(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function te(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function H(t){let n=f.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let r=t.depthTexture;if(r&&r.renderTarget===t&&z(r),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=f.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(i[t])}f.remove(t)}let U=0;function ne(){U=0}function re(){return U}function W(e){U=e}function ie(){let e=U;return e>=p.maxTextures&&Y(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),U+=1,e}function ae(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function oe(t,r){let i=f.get(t);if(t.isVideoTexture&&De(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&i.__version!==t.version){let e=t.image;if(e===null)Y(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)Y(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ge(i,t,r);return}}else t.isExternalTexture&&(i.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,i.__webglTexture,e.TEXTURE0+r)}function G(t,r){let i=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&i.__version!==t.version?ge(i,t,r):(t.isExternalTexture&&(i.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,i.__webglTexture,e.TEXTURE0+r))}function se(t,r){let i=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&i.__version!==t.version?ge(i,t,r):n.bindTexture(e.TEXTURE_3D,i.__webglTexture,e.TEXTURE0+r)}function ce(t,r){let i=f.get(t);t.version>0&&i.__version!==t.version?_e(i,t,r):n.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture,e.TEXTURE0+r)}let le={[r]:e.REPEAT,[i]:e.CLAMP_TO_EDGE,[a]:e.MIRRORED_REPEAT},ue={[o]:e.NEAREST,[s]:e.NEAREST_MIPMAP_NEAREST,[c]:e.NEAREST_MIPMAP_LINEAR,[l]:e.LINEAR,[u]:e.LINEAR_MIPMAP_NEAREST,[d]:e.LINEAR_MIPMAP_LINEAR},de={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function fe(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&Y(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,le[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,le[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,le[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ue[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ue[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,de[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function pe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,L),F(n));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=ae(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&te(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function me(e,t,n){return Math.floor(Math.floor(e/n)/t)}function he(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=me(n.start,r.width,4),c=me(t.start,r.width,4);n.start<=i+1&&a===c&&me(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ge(t,r,i){let a=e.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(a=e.TEXTURE_2D_ARRAY),r.isData3DTexture&&(a=e.TEXTURE_3D);let o=pe(t,r),s=r.source;n.bindTexture(a,t.__webglTexture,e.TEXTURE0+i);let c=f.get(s);if(s.version!==c.__version||o===!0){if(n.activeTexture(e.TEXTURE0+i),!(typeof ImageBitmap<`u`&&r.image instanceof ImageBitmap)){let t=mt.getPrimaries(mt.workingColorSpace),i=r.colorSpace===``?null:mt.getPrimaries(r.colorSpace),a=r.colorSpace===``||t===i?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment);let t=D(r.image,!1,p.maxTextureSize);t=J(r,t);let l=m.convert(r.format,r.colorSpace),u=m.convert(r.type),d=M(r.internalFormat,l,u,r.normalized,r.colorSpace,r.isVideoTexture);fe(a,r);let f,h=r.mipmaps,g=r.isVideoTexture!==!0,_=c.__version===void 0||o===!0,v=s.dataReady,y=P(r,t);if(r.isDepthTexture)d=N(r.format===k,r.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,d,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,l,u,null));else if(r.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,l,u,f.data);r.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height),v&&he(r,t,l,u)):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,l,u,t.data)}else if(r.isCompressedTexture){if(r.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(f=h[i],r.format!==1023){if(l!==null){if(g){if(v){if(r.layerUpdates.size>0){let t=ia(f.width,f.height,r.format,r.type);for(let a of r.layerUpdates){let r=f.data.subarray(a*t/f.data.BYTES_PER_ELEMENT,(a+1)*t/f.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,f.width,f.height,1,l,r)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,f.width,f.height,t.depth,l,f.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,d,f.width,f.height,t.depth,0,f.data,0,0)}else Y(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,f.width,f.height,t.depth,l,u,f.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,d,f.width,f.height,t.depth,0,l,u,f.data);r.layerUpdates.size>0&&r.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)f=h[t],r.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,l,u,f.data):l===null?Y(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,f.data):n.compressedTexImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,f.data)}}else if(r.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,t.width,t.height,t.depth),v){if(r.layerUpdates.size>0){let i=ia(t.width,t.height,r.format,r.type);for(let a of r.layerUpdates){let r=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,l,u,r)}r.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,l,u,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,d,t.width,t.height,t.depth,0,l,u,t.data)}else if(r.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,d,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,l,u,t.data)):n.texImage3D(e.TEXTURE_3D,0,d,t.width,t.height,t.depth,0,l,u,t.data);else if(r.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height);else{let r=t.width,i=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,d,r,i,0,l,u,null),r>>=1,i>>=1}}}else if(r.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(r),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Oe(h[0]);n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height)}for(let t=0,r=h.length;t<r;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,l,u,f):n.texImage2D(e.TEXTURE_2D,t,d,l,u,f);r.generateMipmaps=!1}else if(g){if(_){let r=Oe(t);n.texStorage2D(e.TEXTURE_2D,y,d,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,l,u,t)}else n.texImage2D(e.TEXTURE_2D,0,d,l,u,t);O(r)&&r.mipmapsAutoUpdate===!0&&A(a),c.__version=s.version,r.onUpdate&&r.onUpdate(r)}t.__version=r.version}function _e(t,r,i){if(r.image.length!==6)return;let a=pe(t,r),o=r.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+i);let s=f.get(o);if(o.version!==s.__version||a===!0){n.activeTexture(e.TEXTURE0+i);let t=mt.getPrimaries(mt.workingColorSpace),c=r.colorSpace===``?null:mt.getPrimaries(r.colorSpace),l=r.colorSpace===``||t===c?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=r.isCompressedTexture||r.image[0].isCompressedTexture,d=r.image[0]&&r.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!u&&!d?f[e]=D(r.image[e],!0,p.maxCubemapSize):f[e]=d?r.image[e].image:r.image[e],f[e]=J(r,f[e]);let h=f[0],g=m.convert(r.format,r.colorSpace),_=m.convert(r.type),v=M(r.internalFormat,g,_,r.normalized,r.colorSpace),y=r.isVideoTexture!==!0,b=s.__version===void 0||a===!0,x=o.dataReady,S=P(r,h);fe(e.TEXTURE_CUBE_MAP,r);let C;if(r.isDepthTexture){if(v=N(r.format===k,r.type),b){if(y)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(u){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let i=0;i<C.length;i++){let a=C[i];r.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,_,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,g,_,a.data):g===null?Y(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,a.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,a.data)}}}else{if(C=r.mipmaps,y&&b){C.length>0&&S++;let t=Oe(f[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(d){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}O(r)&&r.mipmapsAutoUpdate===!0&&A(e.TEXTURE_CUBE_MAP),s.__version=o.version,r.onUpdate&&r.onUpdate(r)}t.__version=r.version}function ve(t,r,i,a,o,s){let c=m.convert(i.format,i.colorSpace),l=m.convert(i.type),u=M(i.internalFormat,c,l,i.normalized,i.colorSpace),d=f.get(r),p=f.get(i);if(p.__renderTarget=r,!d.__hasExternalTextures){let t=Math.max(1,r.width>>s),i=Math.max(1,r.height>>s);o===e.TEXTURE_3D||o===e.TEXTURE_2D_ARRAY?n.texImage3D(o,s,u,t,i,r.depth,0,c,l,null):n.texImage2D(o,s,u,t,i,0,c,l,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),q(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,a,o,p.__webglTexture,0,Ee(r)):(o===e.TEXTURE_2D||o>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&o<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,a,o,p.__webglTexture,s),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=N(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;q(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=M(a.internalFormat,o,s,a.normalized,a.colorSpace);q(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function be(t,r,i){let a=r.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let o=f.get(r.depthTexture);o.__renderTarget=r;let s=a?r.depthTexture.image[0]:r.depthTexture.image;o.__webglTexture&&s.width===r.width&&s.height===r.height||(s.width=r.width,s.height=r.height,r.depthTexture.needsUpdate=!0),a?ce(r.depthTexture,0):oe(r.depthTexture,0);let c=o.__webglTexture,l=Ee(r),u=a?e.TEXTURE_CUBE_MAP_POSITIVE_X+i:e.TEXTURE_2D,d=r.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(r.depthTexture.format===1026)q(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else if(r.depthTexture.format===1027)q(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function xe(t){let r=f.get(t),i=t.isWebGLCubeRenderTarget===!0;if(r.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(r.__depthDisposeCallback&&r.__depthDisposeCallback(),e){let t=()=>{delete r.__boundDepthTexture,delete r.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),r.__depthDisposeCallback=t}r.__boundDepthTexture=e}if(t.depthTexture&&!r.__autoAllocateDepthBuffer){if(i)for(let e=0;e<6;e++)be(r.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?be(r.__webglFramebuffer[0],t,0):be(r.__webglFramebuffer,t,0)}else if(i){r.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[i]),r.__webglDepthbuffer[i]===void 0)r.__webglDepthbuffer[i]=e.createRenderbuffer(),ye(r.__webglDepthbuffer[i],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=r.__webglDepthbuffer[i];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer===void 0)r.__webglDepthbuffer=e.createRenderbuffer(),ye(r.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=r.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,i)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(t,n,r){let i=f.get(t);n!==void 0&&ve(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&xe(t)}function Ce(t){let r=t.texture,i=f.get(t),a=f.get(r);t.addEventListener(`dispose`,R),F(t);let o=t.textures,s=t.isWebGLCubeRenderTarget===!0,c=o.length>1;if(c||(a.__webglTexture===void 0&&(a.__webglTexture=e.createTexture()),a.__version=r.version,h.memory.textures++),s){i.__webglFramebuffer=[];for(let t=0;t<6;t++)if(r.mipmaps.length>0){i.__webglFramebuffer[t]=[];for(let n=0;n<r.mipmaps.length;n++)i.__webglFramebuffer[t][n]=e.createFramebuffer()}else i.__webglFramebuffer[t]=e.createFramebuffer()}else{if(r.mipmaps.length>0){i.__webglFramebuffer=[];for(let t=0;t<r.mipmaps.length;t++)i.__webglFramebuffer[t]=e.createFramebuffer()}else i.__webglFramebuffer=e.createFramebuffer();if(c)for(let t=0,n=o.length;t<n;t++){let n=f.get(o[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&q(t)===!1){i.__webglMultisampledFramebuffer=e.createFramebuffer(),i.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,i.__webglMultisampledFramebuffer);for(let n=0;n<o.length;n++){let r=o[n];i.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,i.__webglColorRenderbuffer[n]);let a=m.convert(r.format,r.colorSpace),s=m.convert(r.type),c=M(r.internalFormat,a,s,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),l=Ee(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,i.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(i.__webglDepthRenderbuffer=e.createRenderbuffer(),ye(i.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(s){n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),fe(e.TEXTURE_CUBE_MAP,r);for(let n=0;n<6;n++)if(r.mipmaps.length>0)for(let a=0;a<r.mipmaps.length;a++)ve(i.__webglFramebuffer[n][a],t,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,a);else ve(i.__webglFramebuffer[n],t,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);O(r)?A(e.TEXTURE_CUBE_MAP):r.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,r.mipmaps.length-1),n.unbindTexture()}else if(c){for(let r=0,a=o.length;r<a;r++){let a=o[r],s=f.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,s.__webglTexture),fe(c,a),ve(i.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+r,c,0),O(a)&&A(c)}n.unbindTexture()}else{let o=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(o=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(o,a.__webglTexture),fe(o,r),r.mipmaps.length>0)for(let n=0;n<r.mipmaps.length;n++)ve(i.__webglFramebuffer[n],t,r,e.COLOR_ATTACHMENT0,o,n);else ve(i.__webglFramebuffer,t,r,e.COLOR_ATTACHMENT0,o,0);O(r)?A(o):r.mipmaps.length>0&&e.texParameteri(o,e.TEXTURE_MAX_LEVEL,r.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&xe(t)}function K(e){let t=e.textures;for(let r=0,i=t.length;r<i;r++){let i=t[r];if(O(i)&&i.mipmapsAutoUpdate===!0){let t=j(e),r=f.get(i).__webglTexture;n.bindTexture(t,r),A(t),n.unbindTexture()}}}let we=[];function Te(t){if(t.samples>0){if(q(t)===!1){let r=t.textures,i=t.width,a=t.height,o=e.COLOR_BUFFER_BIT,s=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,c=f.get(t),l=r.length>1;if(l)for(let t=0;t<r.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,c.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglFramebuffer);for(let n=0;n<r.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(o|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(o|=e.STENCIL_BUFFER_BIT)),l){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,c.__webglColorRenderbuffer[n]);let t=f.get(r[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,i,a,0,0,i,a,o,e.NEAREST),_===!0&&(we.length=0,we.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&we.push(s),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,we))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),l)for(let t=0;t<r.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,c.__webglColorRenderbuffer[t]);let i=f.get(r[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,i,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ee(e){return Math.min(p.maxSamples,e.samples)}function q(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function De(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function J(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(mt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&Y(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):X(`WebGLTextures: Unsupported texture color space:`,n)),t}function Oe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ie,this.resetTextureUnits=ne,this.getTextureUnits=re,this.setTextureUnits=W,this.setTexture2D=oe,this.setTexture2DArray=G,this.setTexture3D=se,this.setTextureCube=ce,this.rebindTextures=Se,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=q,this.dispose=ee}function ac(e,t){function n(n,r=``){let i,a=mt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var oc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sc=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,cc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Qr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new li({vertexShader:oc,fragmentShader:sc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mr(new ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lc=class extends Je{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,g=new cc,v={},y=t.getContextAttributes(),b=null,x=null,C=[],w=[],T=new ot,E=null,A=null,j=new Bi;j.viewport=new Tt;let M=new Bi;M.viewport=new Tt;let N=[j,M],P=new Gi,F=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new sn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new sn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new sn,C[e]=t),t.getHandSpace()};function L(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function R(){r.removeEventListener(`select`,L),r.removeEventListener(`selectstart`,L),r.removeEventListener(`selectend`,L),r.removeEventListener(`squeeze`,L),r.removeEventListener(`squeezestart`,L),r.removeEventListener(`squeezeend`,L),r.removeEventListener(`end`,R),r.removeEventListener(`inputsourceschange`,z);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}F=null,I=null,g.reset();for(let e in v)delete v[e];if(e.setRenderTarget(b),p=null,d=null,u=null,r=null,x=null,H.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&Y(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&Y(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?p:d},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,L),r.addEventListener(`selectstart`,L),r.addEventListener(`selectend`,L),r.addEventListener(`squeeze`,L),r.addEventListener(`squeezestart`,L),r.addEventListener(`squeezeend`,L),r.addEventListener(`end`,R),r.addEventListener(`inputsourceschange`,z),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?k:O,a=y.stencil?S:_);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Dt(d.textureWidth,d.textureHeight,{format:D,type:f,depthTexture:new Xr(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Dt(p.framebufferWidth,p.framebufferHeight,{format:D,type:f,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),H.setContext(r),H.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function B(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(F!==P.near||I!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,I=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;B(P,i);for(let e=0;e<a.length;e++)B(a[e],i);P.projectionMatrix.copy(j.projectionMatrix),P.projectionMatrixInverse.copy(j.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),ee(e,P,i)};function ee(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ze*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(d!==null||p!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(e){return v[e]};let V=null;function te(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=N[n];o===void 0&&(o=new Bi,o.layers.enable(n),o.viewport=new Tt,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Qr,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}V&&V(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let H=new oa;H.setAnimationLoop(te),this.setAnimationLoop=function(e){V=e},this.dispose=function(){}}},uc=new At,dc=new Q;dc.set(-1,0,0,0,1,0,0,0,1);function fc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ai(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(uc.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(dc),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function pc(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?Y(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):Y(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var mc=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hc=null;function gc(){return hc===null&&(hc=new Fr(mc,16,16,M,y),hc.name=`DFG_LUT`,hc.minFilter=l,hc.magFilter=l,hc.wrapS=i,hc.wrapT=i,hc.generateMipmaps=!1,hc.needsUpdate=!0),hc}var _c=class{constructor(e={}){let{canvas:t=Ve(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1,outputBufferType:m=f}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);g=n.getContextAttributes().alpha}else g=a;let v=m,C=new Set([P,N,j]),w=new Set([f,_,h,S,b,x]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},O=null,k=null,A=[],M=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,R=null,z=null,B=null,ee=null;this._outputColorSpace=Ae;let V=0,te=0,H=null,U=-1,ne=null,re=new Tt,W=new Tt,ie=null,ae=new fn(0),oe=0,G=t.width,se=t.height,ce=1,le=null,ue=null,de=new Tt(0,0,G,se),fe=new Tt(0,0,G,se),pe=!1,me=new zr,he=new Vr,ge=!1,_e=!1,ve=new At,ye=new Z,be=new Tt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Ce(){return H===null?ce:1}let K=n;function we(e,n){return t.getContext(e,n)}let Te,Ee,q,De,J,Oe,ke,je,Me,Ne,Pe,Fe,Ie,Re,ze,Be,He,We,Ge,qe,Je,Ye,Xe;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,$e,!1),t.addEventListener(`webglcontextrestored`,et,!1),t.addEventListener(`webglcontextcreationerror`,tt,!1),K===null){let t=`webgl2`;if(K=we(t,e),K===null)throw we(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Ze()}catch(e){throw t.removeEventListener(`webglcontextlost`,$e,!1),t.removeEventListener(`webglcontextrestored`,et,!1),t.removeEventListener(`webglcontextcreationerror`,tt,!1),X(`WebGLRenderer: `+e.message),e}function Ze(){Te=new Ia(K),Te.init(),Je=new ac(K,Te),Ee=new ga(K,Te,e,Je),q=new rc(K,Te),Ee.reversedDepthBuffer&&p&&q.buffers.depth.setReversed(!0),z=K.createFramebuffer(),B=K.createFramebuffer(),ee=K.createFramebuffer(),De=new za(K),J=new Ls,Oe=new ic(K,Te,q,J,Ee,Je,De),ke=new Fa(I),je=new sa(K),Ye=new ma(K,je),Me=new La(K,je,De,Ye),Ne=new Va(K,Me,je,Ye,De),We=new Ba(K,Ee,Oe),ze=new _a(J),Pe=new Is(I,ke,Te,Ee,Ye,ze),Fe=new fc(I,J),Ie=new Vs,Re=new Js(Te),He=new pa(I,ke,q,Ne,g,s),Be=new nc(I,Ne,Ee),Xe=new pc(K,De,Ee,q),Ge=new ha(K,Te,De),qe=new Ra(K,Te,De),De.programs=Pe.programs,I.capabilities=Ee,I.extensions=Te,I.properties=J,I.renderLists=Ie,I.shadowMap=Be,I.state=q,I.info=De}v!==1009&&(F=new Ua(v,t.width,t.height,o,r,i));let Qe=new lc(I,K);this.xr=Qe,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let e=Te.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Te.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(e){e!==void 0&&(ce=e,this.setSize(G,se,!1))},this.getSize=function(e){return e.set(G,se)},this.setSize=function(e,n,r=!0){Qe.isPresenting?Y(`WebGLRenderer: Can't change size while VR device is presenting.`):(G=e,se=n,t.width=Math.floor(e*ce),t.height=Math.floor(n*ce),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(G*ce,se*ce).floor()},this.setDrawingBufferSize=function(e,n,r){G=e,se=n,ce=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(v===1009)X(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){Y(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}F.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(re)},this.getViewport=function(e){return e.copy(de)},this.setViewport=function(e,t,n,r){e.isVector4?de.set(e.x,e.y,e.z,e.w):de.set(e,t,n,r),q.viewport(re.copy(de).multiplyScalar(Ce()).round())},this.getScissor=function(e){return e.copy(fe)},this.setScissor=function(e,t,n,r){e.isVector4?fe.set(e.x,e.y,e.z,e.w):fe.set(e,t,n,r),q.scissor(W.copy(fe).multiplyScalar(Ce()).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(e){q.setScissorTest(pe=e)},this.setOpaqueSort=function(e){le=e},this.setTransparentSort=function(e){ue=e},this.getClearColor=function(e){return e.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(H!==null){let t=H.texture.format;e=C.has(t)}if(e){let e=H.texture.type,t=w.has(e),n=He.getClearColor(),r=He.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,K.clearBufferuiv(K.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,K.clearBufferiv(K.COLOR,0,E))}else r|=K.COLOR_BUFFER_BIT}t&&(r|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&K.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),R=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,$e,!1),t.removeEventListener(`webglcontextrestored`,et,!1),t.removeEventListener(`webglcontextcreationerror`,tt,!1),He.dispose(),Ie.dispose(),Re.dispose(),Oe.dispose(),J.dispose(),ke.dispose(),Ne.dispose(),Me.dispose(),Ye.dispose(),Xe.dispose(),Pe.dispose(),Qe.dispose(),Qe.removeEventListener(`sessionstart`,ct),Qe.removeEventListener(`sessionend`,lt),Q.stop()};function $e(e){e.preventDefault(),Ue(`WebGLRenderer: Context Lost.`),L=!0}function et(){Ue(`WebGLRenderer: Context Restored.`),L=!1;let e=De.autoReset,t=Be.enabled,n=Be.autoUpdate,r=Be.needsUpdate,i=Be.type;Ze(),De.autoReset=e,Be.enabled=t,Be.autoUpdate=n,Be.needsUpdate=r,Be.type=i}function tt(e){X(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function nt(e){let t=e.target;t.removeEventListener(`dispose`,nt),rt(t)}function rt(e){it(e),J.remove(e)}function it(e){let t=J.get(e).programs;t!==void 0&&(t.forEach(function(e){Pe.releaseProgram(e)}),e.isShaderMaterial&&Pe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=xe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=xt(e,t,n,r,i);q.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Me.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ye.setup(i,r,s,n,c);let h,g=Ge;if(c!==null&&(h=je.get(c),g=qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(q.setLineWidth(r.wireframeLinewidth*Ce()),g.setMode(K.LINES)):g.setMode(K.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),q.setLineWidth(e*Ce()),i.isLineSegments?g.setMode(K.LINES):i.isLineLoop?g.setMode(K.LINE_LOOP):g.setMode(K.LINE_STRIP)}else i.isPoints?g.setMode(K.POINTS):i.isSprite&&g.setMode(K.TRIANGLES);if(i.isBatchedMesh){if(Te.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?je.get(c).bytesPerElement:1,o=J.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(K,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function at(e,t,n,r){R!==null&&e.isNodeMaterial&&R.setObject(r,e),ge===!0&&ze.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,_t(e,t,r),e.side=0,e.needsUpdate=!0,_t(e,t,r),e.side=2):_t(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),R!==null&&R.renderStart(e,t,n),k=Re.get(n),k.init(t),M.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),R!==null&&R.updateLights(k.state.lightsArray),_e=this.localClippingEnabled,ge=ze.init(this.clippingPlanes,_e),ge===!0&&ze.setGlobalState(this.clippingPlanes,t),R!==null&&Be.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];at(o,n,t,e),r.add(o)}else at(i,n,t,e),r.add(i)}}),k=M.pop(),R!==null&&R.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=J.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Te.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ot=null;function st(e){ot&&ot(e)}function ct(){Q.stop()}function lt(){Q.start()}let Q=new oa;Q.setAnimationLoop(st),typeof self<`u`&&Q.setContext(self),this.setAnimationLoop=function(e){ot=e,Qe.setAnimationLoop(e),e===null?Q.stop():Q.start()},Qe.addEventListener(`sessionstart`,ct),Qe.addEventListener(`sessionend`,lt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){X(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(L===!0)return;R!==null&&R.renderStart(e,t);let n=Qe.enabled===!0&&Qe.isPresenting===!0,r=F!==null&&(H===null||n)&&F.begin(I,H);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(t),t=Qe.getCamera()),e.isScene===!0&&e.onBeforeRender(I,e,t,H),k=Re.get(e,M.length),k.init(t),k.state.textureUnits=Oe.getTextureUnits(),M.push(k),ve.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?he.setFromArrayCamera(t):me.setFromProjectionMatrix(ve,Le,t.reversedDepth),_e=this.localClippingEnabled,ge=ze.init(this.clippingPlanes,_e),O=Ie.get(e,A.length),O.init(),A.push(O),this.info.render.frame++,Qe.enabled===!0&&Qe.isPresenting===!0){let e=I.xr.getDepthSensingMesh();e!==null&&ut(e,t,-1/0,I.sortObjects)}ut(e,t,0,I.sortObjects),O.finish(),R!==null&&R.updateLights(k.state.lightsArray),I.sortObjects===!0&&O.sort(le,ue),Se=Qe.enabled===!1||Qe.isPresenting===!1||Qe.hasDepthSensing()===!1,Se&&He.addToRenderList(O,e),this.info.autoReset===!0&&this.info.reset(),ge===!0&&ze.beginShadows();let i=k.state.shadowsArray;if(Be.render(i,e,t),ge===!0&&ze.endShadows(),(r&&F.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];ft(n,r,e,a)}Se&&He.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];dt(O,e,n,n.viewport)}}else r.length>0&&ft(n,r,e,t),Se&&He.render(e),dt(O,e,t)}H!==null&&te===0&&(Oe.updateMultisampleRenderTarget(H),Oe.updateRenderTargetMipmap(H)),r&&F.end(I),e.isScene===!0&&e.onAfterRender(I,e,t),Ye.resetDefaultState(),U=-1,ne=null,M.pop(),M.length>0?(k=M[M.length-1],Oe.setTextureUnits(k.state.textureUnits),ge===!0&&ze.setGlobalState(I.clippingPlanes,k.state.camera)):k=null,A.pop(),O=A.length>0?A[A.length-1]:null,R!==null&&R.renderEnd()};function ut(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?he:me;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&be.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ve);let i=Ne.update(e),a=e.material;a.visible&&O.push(e,i,a,n,be.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?he:me;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ne.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),be.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),be.copy(e.boundingSphere.center)),be.applyMatrix4(e.matrixWorld).applyMatrix4(ve)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,be.z,s,t)}}else a.visible&&O.push(e,i,a,n,be.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ut(i[e],t,n,r)}function dt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),ge===!0&&ze.setGlobalState(I.clippingPlanes,n),r&&q.viewport(re.copy(r)),i.length>0&&pt(i,t,n),a.length>0&&pt(a,t,n),o.length>0&&pt(o,t,n),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function ft(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Te.has(`EXT_color_buffer_half_float`)||Te.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new Dt(1,1,{generateMipmaps:!0,type:e?y:f,minFilter:d,samples:Math.max(4,Ee.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:mt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||re;a.setSize(o.z*I.transmissionResolutionScale,o.w*I.transmissionResolutionScale);let s=I.getRenderTarget(),c=I.getActiveCubeFace(),l=I.getActiveMipmapLevel();I.setRenderTarget(a),I.getClearColor(ae),oe=I.getClearAlpha(),oe<1&&I.setClearColor(16777215,.5),I.clear(),Se&&He.render(n);let u=I.toneMapping;I.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),ge===!0&&ze.setGlobalState(I.clippingPlanes,r),pt(e,n,r),Oe.updateMultisampleRenderTarget(a),Oe.updateRenderTargetMipmap(a),Te.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,ht(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Oe.updateMultisampleRenderTarget(a),Oe.updateRenderTargetMipmap(a))}I.setRenderTarget(s,c,l),I.setClearColor(ae,oe),p!==void 0&&(r.viewport=p),I.toneMapping=u}function pt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&ht(o,t,n,s,l,c)}}function ht(e,t,n,r,i,a){R!==null&&i.isNodeMaterial&&R.setObject(e,i),e.onBeforeRender(I,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(I,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=2):I.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(I,t,n,r,i,a)}function gt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function _t(e,t,n){t.isScene!==!0&&(t=xe);let r=J.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Pe.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Pe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ke.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,nt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return bt(e,s),d}else s.uniforms=Pe.getUniforms(e),R!==null&&e.isNodeMaterial&&R.build(e,n,s),e.onBeforeCompile(s,I),d=Pe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=ze.uniform),bt(e,s),r.needsLights=Ct(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=gt(k.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function vt(e,t,n,r,i){let a=J.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=_t(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function yt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=$o.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function bt(e,t){let n=J.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function xt(e,t,n,r,i){t.isScene!==!0&&(t=xe),Oe.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=H===null?I.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:mt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ke.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(h=I.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=J.get(r),y=k.state.lights;if(ge===!0&&(_e===!0||e!==ne)){let t=e===ne&&r.id===U;ze.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==ze.numPlanes||v.numIntersection!==ze.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===gt(k.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?vt(r,t,i,s,h):_t(r,t,i),R&&r.isNodeMaterial&&R.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(q.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==U&&(U=r.id,w=!0),C||ne!==e){q.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(K,`projectionMatrix`,e.projectionMatrix),E.setValue(K,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(K,ye.setFromMatrixPosition(e.matrixWorld)),Ee.logarithmicDepthBuffer&&E.setValue(K,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(K,`isOrthographic`,e.isOrthographicCamera===!0),ne!==e&&(ne=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(K,`sunShadowMap`,y.state.sunShadowMap,Oe),y.state.directionalShadowMap.length>0&&E.setValue(K,`directionalShadowMap`,y.state.directionalShadowMap,Oe),y.state.spotShadowMap.length>0&&E.setValue(K,`spotShadowMap`,y.state.spotShadowMap,Oe),y.state.pointShadowMap.length>0&&E.setValue(K,`pointShadowMap`,y.state.pointShadowMap,Oe)),i.isSkinnedMesh){E.setOptional(K,i,`bindMatrix`),E.setOptional(K,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(K,`boneTexture`,e.boneTexture,Oe))}i.isBatchedMesh&&(E.setOptional(K,i,`batchingTexture`),E.setValue(K,`batchingTexture`,i._matricesTexture,Oe),E.setOptional(K,i,`batchingIdTexture`),E.setValue(K,`batchingIdTexture`,i._indirectTexture,Oe),E.setOptional(K,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(K,`batchingColorTexture`,i._colorsTexture,Oe));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&We.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(K,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=gc()),w){if(E.setValue(K,`toneMappingExposure`,I.toneMappingExposure),v.needsLights&&St(O,T),a&&r.fog===!0&&Fe.refreshFogUniforms(O,a),Fe.refreshMaterialUniforms(O,r,ce,se,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of k.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}$o.upload(K,yt(v),O,Oe)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&($o.upload(K,yt(v),O,Oe),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(K,`center`,i.center),E.setValue(K,`modelViewMatrix`,i.modelViewMatrix),E.setValue(K,`normalMatrix`,i.normalMatrix),E.setValue(K,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Xe.update(n,S),Xe.bind(n,S)}}return S}function St(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ct(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(e,t,n){let r=J.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),J.get(e.texture).__webglTexture=t,J.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=J.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){H=e,V=t,te=n;let r=null,i=!1,a=!1;if(e){let o=J.get(e);if(o.__useDefaultFramebuffer!==void 0){q.bindFramebuffer(K.FRAMEBUFFER,o.__webglFramebuffer),re.copy(e.viewport),W.copy(e.scissor),ie=e.scissorTest,q.viewport(re),q.scissor(W),q.setScissorTest(ie),U=-1;return}if(o.__webglFramebuffer===void 0)Oe.setupRenderTarget(e);else if(o.__hasExternalTextures)Oe.rebindTextures(e,J.get(e.texture).__webglTexture,J.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&J.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Oe.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=J.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Oe.useMultisampledRTT(e)===!1?J.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,re.copy(e.viewport),W.copy(e.scissor),ie=e.scissorTest}else re.copy(de).multiplyScalar(ce).floor(),W.copy(fe).multiplyScalar(ce).floor(),ie=pe;if(n!==0&&(r=z),q.bindFramebuffer(K.FRAMEBUFFER,r)&&q.drawBuffers(e,r),q.viewport(re),q.scissor(W),q.setScissorTest(ie),i){let r=J.get(e.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=J.get(e.textures[t]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=J.get(e.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,t.__webglTexture,n)}U=-1};function wt(e){let t=J.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ee.textureFormatReadable(e.format),t.__typeReadable=Ee.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){X(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=J.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){q.bindFramebuffer(K.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+s);let u=wt(o);if(u.__formatReadable===!1){X(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){X(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&K.readPixels(t,n,r,i,Je.convert(c),Je.convert(l),a)}finally{let e=H===null?null:J.get(H).__webglFramebuffer;q.bindFramebuffer(K.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=J.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){q.bindFramebuffer(K.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+s);let d=wt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,f),K.bufferData(K.PIXEL_PACK_BUFFER,a.byteLength,K.STREAM_READ),K.readPixels(t,n,r,i,Je.convert(l),Je.convert(u),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);let p=H===null?null:J.get(H).__webglFramebuffer;q.bindFramebuffer(K.FRAMEBUFFER,p);let m=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await Ke(K,m,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,f),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,a),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(f),K.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Oe.setTexture2D(e,0),K.copyTexSubImage2D(K.TEXTURE_2D,n,0,0,o,s,i,a),q.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Je.convert(t.format),_=Je.convert(t.type),v;t.isData3DTexture?(Oe.setTexture3D(t,0),v=K.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Oe.setTexture2DArray(t,0),v=K.TEXTURE_2D_ARRAY):(Oe.setTexture2D(t,0),v=K.TEXTURE_2D),q.activeTexture(K.TEXTURE0),q.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,t.flipY),q.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),q.pixelStorei(K.UNPACK_ALIGNMENT,t.unpackAlignment);let y=q.getParameter(K.UNPACK_ROW_LENGTH),b=q.getParameter(K.UNPACK_IMAGE_HEIGHT),x=q.getParameter(K.UNPACK_SKIP_PIXELS),S=q.getParameter(K.UNPACK_SKIP_ROWS),C=q.getParameter(K.UNPACK_SKIP_IMAGES);q.pixelStorei(K.UNPACK_ROW_LENGTH,h.width),q.pixelStorei(K.UNPACK_IMAGE_HEIGHT,h.height),q.pixelStorei(K.UNPACK_SKIP_PIXELS,l),q.pixelStorei(K.UNPACK_SKIP_ROWS,u),q.pixelStorei(K.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=J.get(e),r=J.get(t),h=J.get(n.__renderTarget),g=J.get(r.__renderTarget);q.bindFramebuffer(K.READ_FRAMEBUFFER,h.__webglFramebuffer),q.bindFramebuffer(K.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,J.get(e).__webglTexture,i,d+n),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,J.get(t).__webglTexture,a,m+n)),K.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,K.DEPTH_BUFFER_BIT,K.NEAREST);q.bindFramebuffer(K.READ_FRAMEBUFFER,null),q.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||J.has(e)){let n=J.get(e),r=J.get(t);q.bindFramebuffer(K.READ_FRAMEBUFFER,B),q.bindFramebuffer(K.DRAW_FRAMEBUFFER,ee);for(let e=0;e<c;e++)w?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,n.__webglTexture,i),T?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,r.__webglTexture,a),i===0?T?K.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):K.copyTexSubImage2D(v,a,f,p,l,u,o,s):K.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,K.COLOR_BUFFER_BIT,K.NEAREST);q.bindFramebuffer(K.READ_FRAMEBUFFER,null),q.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?K.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?K.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):K.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):K.texSubImage2D(K.TEXTURE_2D,a,f,p,o,s,g,_,h);q.pixelStorei(K.UNPACK_ROW_LENGTH,y),q.pixelStorei(K.UNPACK_IMAGE_HEIGHT,b),q.pixelStorei(K.UNPACK_SKIP_PIXELS,x),q.pixelStorei(K.UNPACK_SKIP_ROWS,S),q.pixelStorei(K.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&K.generateMipmap(v),q.unbindTexture()},this.initRenderTarget=function(e){J.get(e).__webglFramebuffer===void 0&&Oe.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Oe.setTextureCube(e,0):e.isData3DTexture?Oe.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Oe.setTexture2DArray(e,0):Oe.setTexture2D(e,0),q.unbindTexture()},this.resetState=function(){V=0,te=0,H=null,q.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Le}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}};function vc(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function yc(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var bc={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},xc={duration:.5,overwrite:!1,delay:0},Sc,Cc,wc,Tc=1e8,Ec=1/Tc,Dc=Math.PI*2,Oc=Dc/4,kc=0,Ac=Math.sqrt,jc=Math.cos,Mc=Math.sin,Nc=function(e){return typeof e==`string`},Pc=function(e){return typeof e==`function`},Fc=function(e){return typeof e==`number`},Ic=function(e){return e===void 0},Lc=function(e){return typeof e==`object`},Rc=function(e){return e!==!1},zc=function(){return typeof window<`u`},Bc=function(e){return Pc(e)||Nc(e)},Vc=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},Hc=Array.isArray,Uc=/random\([^)]+\)/g,Wc=/,\s*/g,Gc=/(?:-?\.?\d|\.)+/gi,Kc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,qc=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Jc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yc=/[+-]=-?[.\d]+/,Xc=/[^,'"\[\]\s]+/gi,Zc=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Qc,$c,el,tl,nl={},rl={},il,al=function(e){return(rl=Ll(e,nl))&&nf},ol=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},sl=function(e,t){return!t&&console.warn(e)},cl=function(e,t){return e&&(nl[e]=t)&&rl&&(rl[e]=t)||nl},ll=function(){return 0},ul={suppressEvents:!0,isStart:!0,kill:!1},dl={suppressEvents:!0,kill:!1},fl={suppressEvents:!0},pl={},ml=[],hl={},gl,_l={},vl={},yl=30,bl=[],xl=``,Sl=function(e){var t=e[0],n,r;if(Lc(t)||Pc(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=bl.length;r--&&!bl[r].targetTest(t););n=bl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new fd(e[r],n)))||e.splice(r,1);return e},Cl=function(e){return e._gsap||Sl(bu(e))[0]._gsap},wl=function(e,t,n){return(n=e[t])&&Pc(n)?e[t]():Ic(n)&&e.getAttribute&&e.getAttribute(t)||n},Tl=function(e,t){return(e=e.split(`,`)).forEach(t)||e},El=function(e){return Math.round(e*1e5)/1e5||0},Dl=function(e){return Math.round(e*1e7)/1e7||0},Ol=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},kl=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Al=function(){var e=ml.length,t=ml.slice(0),n,r;for(hl={},ml.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},jl=function(e){return!!(e._initted||e._startAt||e.add)},Ml=function(e,t,n,r){ml.length&&!Cc&&Al(),e.render(t,n,r||!!(Cc&&t<0&&jl(e))),ml.length&&!Cc&&Al()},Nl=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(Xc).length<2?t:Nc(e)?e.trim():e},Pl=function(e){return e},Fl=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Il=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},Ll=function(e,t){for(var n in t)e[n]=t[n];return e},Rl=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=Lc(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},zl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Bl=function(e){var t=e.parent||Qc,n=e.keyframes?Il(Hc(e.keyframes)):Fl;if(Rc(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Vl=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Hl=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Ul=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Wl=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Gl=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Kl=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ql=function(e,t,n,r){return e._startAt&&(Cc?e._startAt.revert(dl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Jl=function e(t){return!t||t._ts&&e(t.parent)},Yl=function(e){return e._repeat?Xl(e._tTime,e=e.duration()+e._rDelay)*e:0},Xl=function(e,t){var n=Math.floor(e=Dl(e/t));return e&&n===e?n-1:n},Zl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ql=function(e){return e._end=Dl(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ec)||0))},$l=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Dl(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ql(e),n._dirty||Gl(n,e)),e},eu=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Zl(e.rawTime(),t),(!t._dur||mu(0,t.totalDuration(),n)-t._tTime>Ec)&&t.render(n,!0)),Gl(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ec}},tu=function(e,t,n,r){return t.parent&&Wl(t),t._start=Dl((Fc(n)?n:!n&&au(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Qc?du(e,n,t):e._time)+t._delay),t._end=Dl(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Hl(e,t,`_first`,`_last`,e._sort?`_start`:0),au(t)||(e._recent=t),r||eu(e,t),e._ts<0&&$l(e,e._tTime),e},nu=function(e,t){return(nl.ScrollTrigger||ol(`scrollTrigger`,t))&&nl.ScrollTrigger.create(t,e)},ru=function(e,t,n,r,i){if(xd(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!Cc&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&gl!==Qu.frame)return ml.push(e),e._lazy=[i,r],1},iu=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},au=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},ou=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&iu(e)&&(e._initted||!au(e))||(e._ts<0||e._dp._ts<0)&&!au(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=mu(0,e._tDur,t),l=Xl(s,o),e._yoyo&&l&1&&(a=1-a),l!==Xl(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||Cc||r||e._zTime===Ec||!t&&e._zTime){if(!e._initted&&ru(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?Ec:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&ql(e,t,n,!0),e._onUpdate&&!n&&Lu(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&Lu(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Wl(e,1),!n&&!Cc&&(Lu(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},su=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},cu=function(e,t,n,r){var i=e._repeat,a=Dl(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:Dl(a*(i+1)+e._rDelay*i):a,o>0&&!r&&$l(e,e._tTime=e._tDur*o),e.parent&&Ql(e),n||Gl(e.parent,e),e},lu=function(e){return e instanceof md?Gl(e):cu(e,e._dur)},uu={_start:0,endTime:ll,totalDuration:ll},du=function e(t,n,r){var i=t.labels,a=t._recent||uu,o=t.duration()>=Tc?a.endTime(!1):t._dur,s,c,l;return Nc(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(Hc(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},fu=function(e,t,n){var r=Fc(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=Rc(s.vars.inherit)&&s.parent;a.immediateRender=Rc(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new Od(t[0],a,t[i+1])},pu=function(e,t){return e||e===0?t(e):t},mu=function(e,t,n){return n<e?e:n>t?t:n},hu=function(e,t){return!Nc(e)||!(t=Zc.exec(e))?``:t[1]},gu=function(e,t,n){return pu(n,function(n){return mu(e,t,n)})},_u=[].slice,vu=function(e,t){return e&&Lc(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&Lc(e[0]))&&!e.nodeType&&e!==$c},yu=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return Nc(e)&&!t||vu(e,1)?(r=n).push.apply(r,bu(e)):n.push(e)})||n},bu=function(e,t,n){return wc&&!t&&wc.selector?wc.selector(e):Nc(e)&&!n&&(el||!$u())?_u.call((t||tl).querySelectorAll(e),0):Hc(e)?yu(e,n):vu(e)?_u.call(e,0):e?[e]:[]},xu=function(e){return e=bu(e)[0]||sl(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return bu(t,n.querySelectorAll?n:n===e?sl(`Invalid scope`)||tl.createElement(`div`):e)}},Su=function(e){return e.sort(function(){return .5-Math.random()})},Cu=function(e){if(Pc(e))return e;var t=Lc(e)?e:{each:e},n=sd(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return Nc(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,Tc])[1],!S){for(b=-Tc;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===Tc?0:s?f*u/S-.5:r/S|0,b=0,x=Tc,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):Ac(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&Su(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=hu(t.amount||t.each)||0,n=n&&f<0?od(n):n}return f=(p[e]-p.min)/p.max||0,Dl(p.b+(n?n(f):f)*p.v)+p.u}},wu=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=Dl(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Fc(n)?0:hu(n))}},Tu=function(e,t){var n=Hc(e),r,i;return!n&&Lc(e)&&(r=n=e.radius||Tc,e.values?(e=bu(e.values),(i=!Fc(e[0]))&&(r*=r)):e=wu(e.increment)),pu(t,n?Pc(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=Tc,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||Fc(t)?s:s+hu(t)}:wu(e))},Eu=function(e,t,n,r){return pu(Hc(e)?!t:n===!0?!!(n=0):!r,function(){return Hc(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Du=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},Ou=function(e,t){return function(n){return e(parseFloat(n))+(t||hu(n))}},ku=function(e,t,n){return Pu(e,t,0,1,n)},Au=function(e,t,n){return pu(n,function(n){return e[~~t(n)]})},ju=function e(t,n,r){var i=n-t;return Hc(t)?Au(t,e(0,t.length),n):pu(r,function(e){return(i+(e-t)%i)%i+t})},Mu=function e(t,n,r){var i=n-t,a=i*2;return Hc(t)?Au(t,e(0,t.length-1),n):pu(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},Nu=function(e){return e.replace(Uc,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(Wc);return Eu(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},Pu=function(e,t,n,r,i){var a=t-e,o=r-n;return pu(i,function(t){return n+((t-e)/a*o||0)})},Fu=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=Nc(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(Hc(t)&&!Hc(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=Ll(Hc(t)?[]:{},t));if(!u){for(c in n)gd.call(s,t,c,`get`,n[c]);a=function(e){return Ld(e,s)||(o?t.p:t)}}}return pu(r,a)},Iu=function(e,t,n){var r=e.labels,i=Tc,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},Lu=function(e,t,n){var r=e.vars,i=r[t],a=wc,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&ml.length&&Al(),o&&(wc=o),l=s?i.apply(c,s):i.call(c),wc=a,l},Ru=function(e){return Wl(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Cc),e.progress()<1&&Lu(e,`onInterrupt`),e},zu,Bu=[],Vu=function(e){if(e){if(e=!e.name&&e.default||e,zc()||e.headless){var t=e.name,n=Pc(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:ll,render:Ld,add:gd,kill:zd,modifier:Rd,rawVars:0},a={targetTest:0,get:0,getSetter:Nd,aliases:{},register:0};if($u(),e!==r){if(_l[t])return;Fl(r,Fl(zl(e,i),a)),Ll(r.prototype,Ll(i,zl(e,a))),_l[r.prop=t]=r,e.targetTest&&(bl.push(r),pl[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}cl(t,r),e.register&&e.register(nf,r,Hd)}else Bu.push(e)}},Hu=255,Uu={aqua:[0,Hu,Hu],lime:[0,Hu,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Hu],navy:[0,0,128],white:[Hu,Hu,Hu],olive:[128,128,0],yellow:[Hu,Hu,0],orange:[Hu,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Hu,0,0],pink:[Hu,192,203],cyan:[0,Hu,Hu],transparent:[Hu,Hu,Hu,0]},Wu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Hu+.5|0},Gu=function(e,t,n){var r=e?Fc(e)?[e>>16,e>>8&Hu,e&Hu]:0:Uu.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),Uu[e])r=Uu[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Hu,r&Hu,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Hu,e&Hu]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(Gc),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=Wu(s+1/3,i,a),r[1]=Wu(s,i,a),r[2]=Wu(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(Kc),n&&r.length<4&&(r[3]=1),r}else r=e.match(Gc)||Uu.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/Hu,a=r[1]/Hu,o=r[2]/Hu,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},Ku=function(e){var t=[],n=[],r=-1;return e.split(Ju).forEach(function(e){var i=e.match(qc)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},qu=function(e,t,n){var r=``,i=(e+r).match(Ju),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=Gu(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=Ku(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Ju,`1`).split(qc),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Ju),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Ju=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in Uu)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),Yu=/hsl[a]?\(/,Xu=function(e){var t=e.join(` `),n;if(Ju.lastIndex=0,Ju.test(t))return n=Yu.test(t),e[1]=qu(e[1],n),e[0]=qu(e[0],n,Ku(e[1])),!0},Zu,Qu=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?0:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){il&&(!el&&zc()&&($c=el=window,tl=$c.document||{},nl.gsap=nf,($c.gsapVersions||($c.gsapVersions=[])).push(nf.version),al(rl||$c.GreenSockGlobals||!$c.gsap&&$c||{}),Bu.forEach(Vu)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},Zu=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Zu=0,l=ll},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),$u(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),$u=function(){return!Zu&&Qu.wake()},ed={},td=/^[\d.\-M][\d.\-,\s]/,nd=/["']/g,rd=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(nd,``).trim():+c,r=s.substr(o+1).trim();return t},id=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},ad=function(e){var t=(e+``).split(`(`),n=ed[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[rd(t[1])]:id(e).split(`,`).map(Nl)):ed._CE&&td.test(e)?ed._CE(``,e):n},od=function(e){return function(t){return 1-e(1-t)}},sd=function(e,t){return e&&(Pc(e)?e:ed[e]||ad(e))||t},cd=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return Tl(e,function(e){for(var t in ed[e]=nl[e]=i,ed[a=e.toLowerCase()]=n,i)ed[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=ed[e+`.`+t]=i[t]}),i},ld=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ud=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/Dc*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*Mc((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:ld(s);return a=Dc/a,c.config=function(n,r){return e(t,n,r)},c},dd=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:ld(r);return i.config=function(n){return e(t,n)},i};Tl(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;cd(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),ed.Linear.easeNone=ed.none=ed.Linear.easeIn,cd(`Elastic`,ud(`in`),ud(`out`),ud()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};cd(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),cd(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),cd(`Circ`,function(e){return-(Ac(1-e*e)-1)}),cd(`Sine`,function(e){return e===1?1:-jc(e*Oc)+1}),cd(`Back`,dd(`in`),dd(`out`),dd()),ed.SteppedEase=ed.steps=nl.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-Ec;return function(e){return((r*mu(0,a,e)|0)+i)*n}}},xc.ease=ed[`quad.out`],Tl(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return xl+=e+`,`+e+`Params,`});var fd=function(e,t){this.id=kc++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:wl,this.set=t?t.getSetter:Nd},pd=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,cu(this,+e.duration,1,1),this.data=e.data,wc&&(this._ctx=wc,wc.data.push(this)),Zu||Qu.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,cu(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if($u(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for($l(this,e),!n._dp||n.parent||eu(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&tu(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===Ec||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),Ml(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Yl(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+Yl(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?Xl(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-Ec?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?Zl(this.parent._time,this):this._tTime,r=this._rts<0;this._rts=+e||0,this._ts=this._ps||e===-Ec?0:this._rts;var i=this.totalDuration();return(r!==this._rts<0||n>0&&n<i)&&this.totalTime(mu(-Math.abs(this._delay),i,n),t!==!1),Ql(this),Kl(this)},t.paused=function(e){if(!arguments.length)return this._ps;if(this._ps!==e){if(this._ps=e,e)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{$u(),this._ts=this._rts;var t=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,n=this.progress()===1&&Math.abs(this._zTime)!==Ec,r;if(n)for(this._tTime-=Ec,r=this._first;r;){if(!r._dur&&r._zTime<0&&r._ts&&r._start<=t+Ec){n=!1;break}r=r._next}this.totalTime(t,n)}}return this},t.startTime=function(e){if(arguments.length){this._start=Dl(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&tu(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(Rc(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Zl(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=fl);var t=Cc;return Cc=e,jl(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),Cc=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,lu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,lu(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(du(this,e),Rc(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,Rc(t)),this._dur||(this._zTime=-Ec),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-Ec:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ec,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-Ec)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=Pc(e)?e:Pl,a=function(){var e=t.then;t.then=null,n&&n(),Pc(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){Ru(this)},e}();Fl(pd.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ec,_prom:0,_ps:!1,_rts:1});var md=function(e){yc(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=Rc(t.sortChildren),Qc&&tu(t.parent||Qc,vc(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&nu(vc(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return fu(0,arguments,this),this},n.from=function(e,t,n){return fu(1,arguments,this),this},n.fromTo=function(e,t,n,r){return fu(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,Bl(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new Od(e,t,du(this,n),1),this},n.call=function(e,t,n){return tu(this,Od.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new Od(e,n,du(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,Bl(n).immediateRender=Rc(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,Bl(r).immediateRender=Rc(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:Dl(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==Qc&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=Dl(o%f),o===i?(d=this._repeat,c=a):(_=Dl(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=Xl(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:Dl(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&Lu(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,_=d),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=su(this,Dl(r),Dl(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!_&&(Lu(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-Ec);break}}l=u}else{l=this._last;for(var S=e<0?e:c;l;){if(u=l._prev,(l._act||S<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(S-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(S-l._start)*l._ts,t,n||Cc&&jl(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=S?-Ec:Ec);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-Ec)._zTime=c>=r?1:-1,this._ts))return this._start=g,Ql(this),this.render(e,t,n);this._onUpdate&&!t&&Lu(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g!==this._start&&Math.abs(h)===Math.abs(this._ts)||this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&Wl(this,1),t||e<0&&!r||!o&&!r&&i||(Lu(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(Fc(t)||(t=du(this,t,e)),!(e instanceof pd)){if(Hc(e))return e.forEach(function(e){return n.add(e,t)}),this;if(Nc(e))return this.addLabel(e,t);if(Pc(e))e=Od.delayedCall(0,e);else return this}return this===e?this:tu(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-Tc);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof Od?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return Nc(e)?this.removeLabel(e):Pc(e)?this.killTweensOf(e):(e.parent===this&&Ul(this,e),e===this._recent&&(this._recent=this._last),Gl(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dl(Qu.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=du(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=Od.delayedCall(0,t||ll,n);return r.data=`isPause`,this._hasPause=1,tu(this,r,du(this,e))},n.removePause=function(e){var t=this._first;for(e=du(this,e);t;)t._start===e&&t.data===`isPause`&&Wl(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)yd!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=bu(e),i=this._first,a=Fc(t),o;i;)i instanceof Od?kl(i._targets,r)&&(a?(!yd||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=du(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=Od.to(n,Fl({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||Ec,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&cu(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,Fl({startAt:{time:du(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),Iu(this,du(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),Iu(this,du(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+Ec)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=Dl(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return Gl(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Gl(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=Tc,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,tu(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=Dl(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;cu(n,n===Qc&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(Qc._ts&&(Ml(Qc,Zl(e,Qc)),gl=Qu.frame),Qu.frame>=yl){yl+=bc.autoSleep||120;var t=Qc._first;if((!t||!t._ts)&&bc.autoSleep&&Qu._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||Qu.sleep()}}},t}(pd);Fl(md.prototype,{_lock:0,_hasPause:0,_forcing:0});var hd=function(e,t,n,r,i,a,o){var s=new Hd(this._pt,e,t,0,1,Id,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=Nu(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(Jc)||[];u=Jc.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?Ol(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=Jc.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(Yc.test(r)||g)&&(s.e=0),this._pt=s,s},gd=function(e,t,n,r,i,a,o,s,c,l){Pc(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?Pc(u)?c?e[t.indexOf(`set`)||!Pc(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=Pc(u)?c?jd:Ad:kd,p;if(Nc(r)&&(~r.indexOf(`random(`)&&(r=Nu(r)),r.charAt(1)===`=`&&(p=Ol(d,r)+(hu(d)||0),(p||p===0)&&(r=p))),!l||d!==r||bd)return!isNaN(d*r)&&r!==``?(p=new Hd(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?Fd:Pd,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&ol(t,r),hd.call(this,e,t,d,r,f,s||bc.stringFilter,c))},_d=function(e,t,n,r,i){if(Pc(e)&&(e=Td(e,i,t,n,r)),!Lc(e)||e.style&&e.nodeType||Hc(e)||Vc(e))return Nc(e)?Td(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=Td(e[o],i,t,n,r);return a},vd=function(e,t,n,r,i,a){var o,s,c,l;if(_l[e]&&(o=new _l[e]).init(i,o.rawVars?t[e]:_d(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new Hd(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==zu))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},yd,bd,xd=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!Sc,b=t.timeline,x=i.easeReverse||d,S,C,w,T,E,D,O,k,A,j,M,N,P;if(!b||f&&a||(a=`none`),t._ease=sd(a,xc.ease),t._rEase=x&&(sd(x)||t._ease),t._from=!b&&!!i.runBackwards,t._from&&(t.ratio=1),!b||f&&!i.stagger){if(k=g[0]?Cl(g[0]).harness:0,N=k&&i[k.prop],S=zl(i,pl),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?dl:ul),h._lazy=0),o){if(Wl(t._startAt=Od.set(g,Fl({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&Rc(c),startAt:null,delay:0,onUpdate:l&&function(){return Lu(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Cc||!s&&!p)&&t._startAt.revert(dl),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),w=Fl({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&Rc(c),immediateRender:s,stagger:0,parent:_},S),N&&(w[k.prop]=N),Wl(t._startAt=Od.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Cc?t._startAt.revert(dl):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,Ec,Ec);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&Rc(c)||c&&!m,C=0;C<g.length;C++){if(E=g[C],O=E._gsap||Sl(g)[C]._gsap,t._ptLookup[C]=j={},hl[O.id]&&ml.length&&Al(),M=v===g?C:v.indexOf(E),k&&(A=new k).init(E,N||S,t,M,v)!==!1&&(t._pt=T=new Hd(t._pt,E,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(e){j[e]=T}),A.priority&&(D=1)),!k||N)for(w in S)_l[w]&&(A=vd(w,S,t,M,E,v))?A.priority&&(D=1):j[w]=T=gd.call(t,E,w,`get`,S[w],M,v,0,i.stringFilter);t._op&&t._op[C]&&t.kill(E,t._op[C]),y&&t._pt&&(yd=t,Qc.killTweensOf(E,j,t.globalTime(n)),P=!t.parent,yd=0),t._pt&&c&&(hl[O.id]=1)}D&&Vd(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!P,f&&n<=0&&b.render(Tc,!0,!0)},Sd=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return bd=1,e.vars[t]=`+=0`,xd(e,o),bd=0,s?sl(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=El(n)+hu(u.e)),u.b&&(u.b=l.s+hu(u.b))},Cd=function(e,t){var n=e[0]?Cl(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=Ll({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},wd=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(Hc(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},Td=function(e,t,n,r,i){return Pc(e)?e.call(t,n,r,i):Nc(e)&&~e.indexOf(`random(`)?Nu(e):e},Ed=xl+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,Dd={};Tl(Ed+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return Dd[e]=1}),Ed=Ed.split(`,`);var Od=function(e){yc(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:Bl(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=n.parent||Qc,g=(Hc(t)||Vc(t)?Fc(t[0]):`length`in n)?[t]:bu(t),_,v,y,b,x,S,C,w;if(a._targets=g.length?Sl(g):sl(`GSAP target `+t+` not found. https://gsap.com`,!bc.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||Bc(s)||Bc(c)){n=a.vars;var T=n.easeReverse||n.yoyoEase;if(_=a.timeline=new md({data:`nested`,defaults:p||{},targets:h&&h.data===`nested`?h.vars.targets:g}),_.kill(),_.parent=_._dp=vc(a),_._start=0,u||Bc(s)||Bc(c)){if(b=g.length,C=u&&Cu(u),Lc(u))for(x in u)~Ed.indexOf(x)&&(w||={},w[x]=u[x]);for(v=0;v<b;v++)y=zl(n,Dd),y.stagger=0,T&&(y.easeReverse=T),w&&Ll(y,w),S=g[v],y.duration=+Td(s,vc(a),v,S,g),y.delay=(+Td(c,vc(a),v,S,g)||0)-a._delay,!u&&b===1&&y.delay&&(a._delay=c=y.delay,a._start+=c,y.delay=0),_.to(S,y,C?C(v,S,g):0),_._ease=ed.none;_.duration()?s=c=0:a.timeline=0}else if(f){Bl(Fl(_.vars.defaults,{ease:`none`})),_._ease=sd(f.ease||n.ease||`none`);var E=0,D,O,k;if(Hc(f))f.forEach(function(e){return _.to(g,e,`>`)}),_.duration();else{for(x in y={},f)x===`ease`||x===`easeEach`||wd(x,f[x],y,f.easeEach);for(x in y)for(D=y[x].sort(function(e,t){return e.t-t.t}),E=0,v=0;v<D.length;v++)O=D[v],k={ease:O.e,duration:(O.t-(v?D[v-1].t:0))/100*s},k[x]=O.v,_.to(g,k,E),E+=k.duration;_.duration()<s&&_.to({},{duration:s-_.duration()})}}s||a.duration(s=_.duration())}else a.timeline=0;return d===!0&&!Sc&&(yd=vc(a),Qc.killTweensOf(g),yd=0),tu(h,vc(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===Dl(h._time)&&Rc(l)&&Jl(vc(a))&&h.data!==`nested`)&&(a._tTime=-Ec,a.render(Math.max(0,-c)||0)),m&&nu(vc(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-Ec&&!o?i:e<Ec?0:e,c,l,u,d,f,p,m,h;if(!a)ou(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=Dl(s%d),s===i?(u=this._repeat,c=a):(f=Dl(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(c=a-c),f=Xl(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(Dl(d*u),!0).invalidate()._lock=0)}if(!this._initted){if(ru(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var g=c<r;if(g!==this._inv){var _=g?r:a-r;this._inv=g,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=_?(g?-1:1)/_:0,this._invScale=g?-this.ratio:1-this.ratio,this._invEase=g?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/a);if(this._from&&(this.ratio=m=1-m),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!f&&(Lu(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&ql(this,e,t,n),Lu(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&Lu(this,`onRepeat`),s!==this._tDur&&s||this._tTime!==s||(o&&!this._onUpdate&&ql(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&Wl(this,1),!t&&(!o||r)&&(s||r||p)&&(Lu(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){Zu||Qu.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||xd(this,a),o=this._ease(a/this._dur),Sd(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):($l(this,0),this.parent||Hl(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?Ru(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Cc),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,yd&&yd.vars.overwrite!==!0)._first||Ru(this),this.parent&&n!==this.timeline.totalDuration()&&cu(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?bu(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&Vl(r,i))return t===`all`&&(this._pt=0),Ru(this);for(s=this._op=this._op||[],t!==`all`&&(Nc(t)&&(d={},Tl(t,function(e){return d[e]=1}),t=d),t=Cd(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&(`kill`in f.d&&f.d.kill(d)!==!0||Ul(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&Ru(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return fu(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return fu(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return Qc.killTweensOf(e,t,n)},t}(pd);Fl(Od.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Tl(`staggerTo,staggerFrom,staggerFromTo`,function(e){Od[e]=function(){var t=new md,n=_u.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var kd=function(e,t,n){return e[t]=n},Ad=function(e,t,n){return e[t](n)},jd=function(e,t,n,r){return e[t](r.fp,n)},Md=function(e,t,n){return e.setAttribute(t,n)},Nd=function(e,t){return Pc(e[t])?Ad:Ic(e[t])&&e.setAttribute?Md:kd},Pd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Fd=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Id=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Ld=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Rd=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},zd=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ul(this,t,`_pt`):t.dep||(n=1),t=r;return!n},Bd=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Vd=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},Hd=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Pd,this.d=o||this,this.set=s||kd,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=Bd,this.m=e,this.mt=n,this.tween=t},e}();Tl(xl+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return pl[e]=1}),nl.TweenMax=nl.TweenLite=Od,nl.TimelineLite=nl.TimelineMax=md,Qc=new md({sortChildren:!1,defaults:xc,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),bc.stringFilter=Xu;var Ud=[],Wd={},Gd=[],Kd=0,qd=0,Jd=function(e){return(Wd[e]||Gd).map(function(e){return e()})},Yd=function(){var e=Date.now(),t=[];e-Kd>2&&(Jd(`matchMediaInit`),Ud.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=$c.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),Jd(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Kd=e,Jd(`matchMedia`))},Xd=function(){function e(e,t){this.selector=t&&xu(t),this.data=[],this._r=[],this.isReverted=!1,this.id=qd++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){Pc(e)&&(n=t,t=e,e=Pc);var r=this,i=function(){var e=wc,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=xu(n)),wc=r,a=t.apply(r,arguments),Pc(a)&&r._r.push(a),wc=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===Pc?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=wc;wc=null,e(this),wc=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof Od&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof md?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof Od)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t){for(var r=Ud.length;r--;)Ud[r].id===this.id&&Ud.splice(r,1);this._mqs&&this._mqs.forEach(function(e){return e.removeListener?e.removeListener(Yd):e.removeEventListener(`change`,Yd)}),this._mqs=null}},t.revert=function(e){this.kill(e||{})},e}(),Zd=function(){function e(e){this.contexts=[],this.scope=e,wc&&wc.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){Lc(e)||(e={matches:e});var r=new Xd(0,n||this.scope),i=r.conditions={},a,o,s;for(o in wc&&!r.selector&&(r.selector=wc.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=$c.matchMedia(e[o]),a&&(Ud.indexOf(r)<0&&Ud.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(Yd):a.addEventListener(`change`,Yd),(r._mqs||=[]).push(a)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Qd={registerPlugin:function(){[...arguments].forEach(function(e){return Vu(e)})},timeline:function(e){return new md(e)},getTweensOf:function(e,t){return Qc.getTweensOf(e,t)},getProperty:function(e,t,n,r){Nc(e)&&(e=bu(e)[0]);var i=Cl(e||{}).get,a=n?Pl:Nl;return n===`native`&&(n=``),e&&(t?a((_l[t]&&_l[t].get||i)(e,t,n,r)):function(t,n,r){return a((_l[t]&&_l[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=bu(e),e.length>1){var r=e.map(function(e){return nf.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=_l[t],o=Cl(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;zu._pt=0,r.init(e,n?t+n:t,zu,0,[e]),r.render(1,r),zu._pt&&Ld(1,zu)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=nf.to(e,Fl((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return Qc.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=sd(e.ease,xc.ease)),Rl(xc,e||{})},config:function(e){return Rl(bc,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!_l[e]&&!nl[e]&&sl(t+` effect requires `+e+` plugin.`)}),vl[t]=function(e,t,r){return n(bu(e),Fl(t||{},i),r)},a&&(md.prototype[t]=function(e,n,r){return this.add(vl[t](e,Lc(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){ed[e]=sd(t)},parseEase:function(e,t){return arguments.length?sd(e,t):ed},getById:function(e){return Qc.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new md(e),r,i;for(n.smoothChildTiming=Rc(e.smoothChildTiming),Qc.remove(n),n._dp=0,n._time=n._tTime=Qc._time,r=Qc._first;r;)i=r._next,(t||!(!r._dur&&r instanceof Od&&r.vars.onComplete===r._targets[0]))&&tu(n,r,r._start-r._delay),r=i;return tu(Qc,n,0),n},context:function(e,t){return e?new Xd(e,t):wc},matchMedia:function(e){return new Zd(e)},matchMediaRefresh:function(){return Ud.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Yd()},addEventListener:function(e,t){var n=Wd[e]||(Wd[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Wd[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:ju,wrapYoyo:Mu,distribute:Cu,random:Eu,snap:Tu,normalize:ku,getUnit:hu,clamp:gu,splitColor:Gu,toArray:bu,selector:xu,mapRange:Pu,pipe:Du,unitize:Ou,interpolate:Fu,shuffle:Su},install:al,effects:vl,ticker:Qu,updateRoot:md.updateRoot,plugins:_l,globalTimeline:Qc,core:{PropTween:Hd,globals:cl,Tween:Od,Timeline:md,Animation:pd,getCache:Cl,_removeLinkedListItem:Ul,reverting:function(){return Cc},context:function(e){return e&&wc&&(wc.data.push(e),e._ctx=wc),wc},suppressOverwrites:function(e){return Sc=e}}};Tl(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return Qd[e]=Od[e]}),Qu.add(md.updateRoot),zu=Qd.to({},{duration:0});var $d=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ef=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=$d(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},tf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(Nc(n)&&(r={},Tl(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}ef(e,n)}}}},nf=Qd.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Cc?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},tf(`roundProps`,wu),tf(`modifiers`),tf(`snap`,Tu))||Qd;Od.version=md.version=nf.version=`3.15.1`,il=1,zc()&&$u(),ed.Power0,ed.Power1,ed.Power2,ed.Power3,ed.Power4,ed.Linear,ed.Quad,ed.Cubic,ed.Quart,ed.Quint,ed.Strong,ed.Elastic,ed.Back,ed.SteppedEase,ed.Bounce,ed.Sine,ed.Expo,ed.Circ;var rf,af,of,sf,cf,lf,uf,df=function(){return typeof window<`u`},ff={},pf=180/Math.PI,mf=Math.PI/180,hf=Math.atan2,gf=1e8,_f=/([A-Z])/g,vf=/(left|right|width|margin|padding|x)/i,yf=/[\s,\(]\S/,bf={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},xf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Sf=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Cf=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},wf=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Tf=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ef=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Df=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},Of=function(e,t,n){return e.style[t]=n},kf=function(e,t,n){return e.style.setProperty(t,n)},Af=function(e,t,n){return e._gsap[t]=n},jf=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Mf=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},Nf=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},Pf=`transform`,Ff=Pf+`Origin`,If=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in ff&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=bf[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=tp(i,e)}):this.tfm[t]=o.x?o[t]:tp(i,t),t===Ff&&(this.tfm.zOrigin=o.zOrigin);else return bf.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(Pf)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(Ff,n,``)),t=Pf}(a||n)&&this.props.push(t,n,a[t])},Lf=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},Rf=function(){for(var e=this.props,t=this.target,n=t.style,r=t._gsap,i=0,a;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(_f,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=uf(),i&&i.isStart||n[Pf]||(Lf(n),r.zOrigin&&n[Ff]&&(n[Ff]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},zf=function(e,t){var n={target:e,props:[],revert:Rf,save:If};return e._gsap||nf.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},Bf,Vf=function(e,t){var n=af.createElementNS?af.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):af.createElement(e);return n&&n.style?n:af.createElement(e)},Hf=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(_f,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,Wf(n)||n,1)||``},Uf=`O,Moz,ms,Ms,Webkit`.split(`,`),Wf=function(e,t,n){var r=(t||cf).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(Uf[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?Uf[i]:``)+e},Gf=function(){df()&&window.document&&(rf=window,af=rf.document,of=af.documentElement,cf=Vf(`div`)||{style:{}},Vf(`div`),Pf=Wf(Pf),Ff=Pf+`Origin`,cf.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,Bf=!!Wf(`perspective`),uf=nf.core.reverting,sf=1)},Kf=function(e){var t=e.ownerSVGElement,n=Vf(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),of.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),of.removeChild(n),i},qf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Jf=function(e){var t,n;try{t=e.getBBox()}catch{t=Kf(e),n=1}return t&&(t.width||t.height)||n||(t=Kf(e)),t&&!t.width&&!t.x&&!t.y?{x:+qf(e,[`x`,`cx`,`x1`])||0,y:+qf(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},Yf=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!Jf(e))},Xf=function(e,t){if(t){var n=e.style,r;t in ff&&t!==Ff&&(t=Pf),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(_f,`-$1`).toLowerCase())):n.removeAttribute(t)}},Zf=function(e,t,n,r,i,a){var o=new Hd(e._pt,t,n,0,1,a?Df:Ef);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},Qf={deg:1,rad:1,turn:1},$f={grid:1,flex:1},ep=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=cf.style,c=vf.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||Qf[i]||Qf[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&Yf(t),(p||o===`%`)&&(ff[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],El(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),h&&h!==af&&h.appendChild||(h=af.body),g=h._gsap,g&&p&&g.width&&c&&g.time===Qu.time&&!g.uncache)return El(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:Xf(t,n)}else(p||o===`%`)&&!$f[Hf(h,`display`)]&&(s.position=Hf(t,`position`)),h===t&&(s.position=`static`),h.appendChild(cf),m=cf[u],h.removeChild(cf),s.position=`absolute`;return c&&p&&(g=Cl(h),g.time=Qu.time,g.width=h[u]),El(f?m*a/d:m&&a?d/m*a:0)},tp=function(e,t,n,r){var i;return sf||Gf(),t in bf&&t!==`transform`&&(t=bf[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),ff[t]&&t!==`transform`?(i=pp(e,r),i=t===`transformOrigin`?i.svg?i.origin:mp(Hf(e,Ff))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=op[t]&&op[t](e,t,n)||Hf(e,t)||wl(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?ep(e,t,i,n)+n:i},np=function(e,t,n,r){if(!n||n===`none`){var i=Wf(t,e,1),a=i&&Hf(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=Hf(e,`borderTopColor`))}var o=new Hd(this._pt,e.style,t,0,1,Id),s=0,c=0,l,u,d,f,p,m,h,g,_,v,y,b;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=Hf(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(m=e.style[t],e.style[t]=r,r=Hf(e,t)||r,m?e.style[t]=m:Xf(e,t)),l=[n,r],Xu(l),n=l[0],r=l[1],d=n.match(qc)||[],b=r.match(qc)||[],b.length){for(;u=qc.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,y=m.substr((f+``).length),h.charAt(1)===`=`&&(h=Ol(f,h)+y),g=parseFloat(h),v=h.substr((g+``).length),s=qc.lastIndex-v.length,v||(v=v||bc.units[t]||y,s===r.length&&(r+=v,o.e+=v)),y!==v&&(f=ep(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?Df:Ef;return Yc.test(r)&&(o.e=0),this._pt=o,o},rp={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},ip=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=rp[n]||n,t[1]=rp[r]||r,t.join(` `)},ap=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],ff[o]&&(s=1,o=o===`transformOrigin`?Ff:Pf),Xf(n,o);s&&(Xf(n,Pf),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,pp(n,1),a.uncache=1,Lf(r)))}},op={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new Hd(e._pt,t,n,0,0,ap);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},sp=[1,0,0,1,0,0],cp={},lp=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},up=function(e){var t=Hf(e,Pf);return lp(t)?sp:t.substr(7).match(Kc).map(El)},dp=function(e,t){var n=e._gsap||Cl(e),r=e.style,i=up(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?sp:i):(i===sp&&!e.offsetParent&&e!==of&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,a&&(e.offsetParent||e.getBoundingClientRect().width)||(c=1,o=e.nextElementSibling,of.appendChild(e)),i=up(e),s?r.display=s:Xf(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):of.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},fp=function(e,t,n,r,i,a){var o=e._gsap,s=i||dp(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==sp&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=Jf(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Ff]=`0px 0px`,a&&(Zf(a,o,`xOrigin`,c,y),Zf(a,o,`yOrigin`,l,b),Zf(a,o,`xOffset`,u,o.xOffset),Zf(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},pp=function(e,t){var n=e._gsap||new fd(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=Hf(e,Ff)||`0`,l=u=d=m=h=g=_=v=y=0,u,d,f=p=1,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;return n.svg=!!(e.getCTM&&Yf(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[Pf]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[Pf]===`none`?``:s[Pf])),r.scale=r.rotate=r.translate=`none`),S=dp(e,n.svg),n.svg&&(n.uncache?(N=e.getBBox(),c=n.xOrigin-N.x+`px `+(n.yOrigin-N.y)+`px`,M=``):M=!t&&e.getAttribute(`data-svg-origin`),fp(e,M||c,!!M||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,x=n.yOrigin||0,S!==sp&&(E=S[0],D=S[1],O=S[2],k=S[3],l=A=S[4],u=j=S[5],S.length===6?(f=Math.sqrt(E*E+D*D),p=Math.sqrt(k*k+O*O),m=E||D?hf(D,E)*pf:0,_=O||k?hf(O,k)*pf+m:0,_&&(p*=Math.abs(Math.cos(_*mf))),n.svg&&(l-=b-(b*E+x*O),u-=x-(b*D+x*k))):(B=S[6],R=S[7],F=S[8],I=S[9],L=S[10],z=S[11],l=S[12],u=S[13],d=S[14],C=hf(B,L),h=C*pf,C&&(w=Math.cos(-C),T=Math.sin(-C),M=A*w+F*T,N=j*w+I*T,P=B*w+L*T,F=A*-T+F*w,I=j*-T+I*w,L=B*-T+L*w,z=R*-T+z*w,A=M,j=N,B=P),C=hf(-O,L),g=C*pf,C&&(w=Math.cos(-C),T=Math.sin(-C),M=E*w-F*T,N=D*w-I*T,P=O*w-L*T,z=k*T+z*w,E=M,D=N,O=P),C=hf(D,E),m=C*pf,C&&(w=Math.cos(C),T=Math.sin(C),M=E*w+D*T,N=A*w+j*T,D=D*w-E*T,j=j*w-A*T,E=M,A=N),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=El(Math.sqrt(E*E+D*D+O*O)),p=El(Math.sqrt(j*j+B*B)),C=hf(A,j),_=Math.abs(C)>2e-4?C*pf:0,y=z?1/(z<0?-z:z):0),n.svg&&(M=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!lp(Hf(e,Pf)),M&&e.setAttribute(`transform`,M))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=El(f),n.scaleY=El(p),n.rotation=El(m)+o,n.rotationX=El(h)+o,n.rotationY=El(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[Ff]=mp(c)),n.xOffset=n.yOffset=0,n.force3D=bc.force3D,n.renderTransform=n.svg?xp:Bf?bp:gp,n.uncache=0,n},mp=function(e){return(e=e.split(` `))[0]+` `+e[1]},hp=function(e,t,n){var r=hu(t);return El(parseFloat(t)+parseFloat(ep(e,`x`,n+`px`,r)))+r},gp=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,bp(e,t)},_p=`0deg`,vp=`0px`,yp=`) `,bp=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==_p||l!==_p)){var x=parseFloat(l)*mf,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*mf,w=Math.cos(x),a=hp(_,a,S*w*-v),o=hp(_,o,-Math.sin(x)*-v),s=hp(_,s,C*w*-v+v)}h!==vp&&(y+=`perspective(`+h+yp),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==vp||o!==vp||s!==vp)&&(y+=s!==vp||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+yp),c!==_p&&(y+=`rotate(`+c+yp),l!==_p&&(y+=`rotateY(`+l+yp),u!==_p&&(y+=`rotateX(`+u+yp),(d!==_p||f!==_p)&&(y+=`skew(`+d+`, `+f+yp),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+yp),_.style[Pf]=y||`translate(0, 0)`},xp=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=mf,c*=mf,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=mf,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=El(b),x=El(x),S=El(S),C=El(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=ep(f,`x`,a,`px`),y=ep(f,`y`,o,`px`)),(p||m||h||g)&&(v=El(v+p-(p*b+m*S)+h),y=El(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=El(v+r/100*w.width),y=El(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[Pf]=w)},Sp=function(e,t,n,r,i){var a=360,o=Nc(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?pf:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*gf)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*gf)%a-~~(s/a)*a)),e._pt=u=new Hd(e._pt,t,n,r,s,Sf),u.e=c,u.u=`deg`,e._props.push(n),u},Cp=function(e,t){for(var n in t)e[n]=t[n];return e},wp=function(e,t,n){var r=Cp({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[Pf]=t,o=pp(n,1),Xf(n,Pf),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[Pf],a[Pf]=t,o=pp(n,1),a[Pf]=c),ff)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=hu(c),p=hu(l),u=f===p?parseFloat(c):ep(n,s,c,p),d=parseFloat(l),e._pt=new Hd(e._pt,o,s,u,d-u,xf),e._pt.u=p||0,e._props.push(s));Cp(o,r)};Tl(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});op[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return tp(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var Tp={name:`css`,register:Gf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;for(m in sf||Gf(),this.styles=this.styles||zf(e),C=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(_l[m]&&vd(m,t,n,r,e,i)))){if(f=typeof l,p=op[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=Nu(l)),p)p(this,e,m,l,n)&&(S=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,Ju.lastIndex=0,Ju.test(c)||(h=hu(c),g=hu(l),g?h!==g&&(c=ep(e,m,c,g)+g):h&&(l+=h)),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),C.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],Nc(c)&&~c.indexOf(`random(`)&&(c=Nu(c)),hu(c+``)||c===`auto`||(c+=bc.units[m]||hu(tp(e,m))||``),(c+``).charAt(1)===`=`&&(c=tp(e,m))):c=tp(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in bf&&(m===`autoAlpha`&&(d===1&&tp(e,`visibility`)===`hidden`&&u&&(d=0),C.push(`visibility`,0,o.visibility),Zf(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=bf[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in ff,v){if(this.styles.save(m),w=l,f===`string`&&l.substring(0,6)===`var(--`){if(l=Hf(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var T=e.style.perspective;e.style.perspective=l,l=Hf(e,`perspective`),T?e.style.perspective=T:Xf(e,`perspective`)}u=parseFloat(l)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||pp(e,t.parseTransform),x=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new Hd(this._pt,o,Pf,0,1,b.renderTransform,b,0,-1),y.dep=1),m===`scale`)this._pt=new Hd(this._pt,b,`scaleY`,b.scaleY,(_?Ol(b.scaleY,_+u):u)-b.scaleY||0,xf),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){C.push(Ff,0,o[Ff]),l=ip(l),b.svg?fp(e,l,0,x,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==b.zOrigin&&Zf(this,b,`zOrigin`,b.zOrigin,g),Zf(this,o,m,mp(c),mp(l)));continue}else if(m===`svgOrigin`){fp(e,l,1,x,0,this);continue}else if(m in cp){Sp(this,b,m,d,_?Ol(d,_+l):l);continue}else if(m===`smoothOrigin`){Zf(this,b,`smooth`,b.smooth,l);continue}else if(m===`force3D`){b[m]=l;continue}else if(m===`transform`){wp(this,l,e);continue}}else m in o||(m=Wf(m)||m);if(v||(u||u===0)&&(d||d===0)&&!yf.test(l)&&m in o)h=(c+``).substr((d+``).length),u||=0,g=hu(l)||(m in bc.units?bc.units[m]:h),h!==g&&(d=ep(e,m,c,g)),this._pt=new Hd(this._pt,v?b:o,m,d,(_?Ol(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?Tf:xf),this._pt.u=g||0,v&&w!==l?(this._pt.b=c,this._pt.e=w,this._pt.r=wf):h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=Cf);else if(m in o)np.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){ol(m,l);continue}v||(m in o?C.push(m,0,o[m]):typeof e[m]==`function`?C.push(m,2,e[m]()):C.push(m,1,c||e[m])),a.push(m)}}S&&Vd(this)},render:function(e,t){if(t.tween._time||!uf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:tp,aliases:bf,getSetter:function(e,t,n){var r=bf[t];return r&&r.indexOf(`,`)<0&&(t=r),t in ff&&t!==Ff&&(e._gsap.x||tp(e,`x`))?n&&lf===n?t===`scale`?jf:Af:(lf=n||{})&&(t===`scale`?Mf:Nf):e.style&&!Ic(e.style[t])?Of:~t.indexOf(`-`)?kf:Nd(e,t)},core:{_removeProperty:Xf,_getMatrix:dp}};nf.utils.checkPrefix=Wf,nf.core.getStyleSaver=zf,(function(e,t,n,r){var i=Tl(e+`,`+t+`,`+n,function(e){ff[e]=1});Tl(t,function(e){bc.units[e]=`deg`,cp[e]=1}),bf[i[13]]=e+`,`+t,Tl(r,function(e){var t=e.split(`:`);bf[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),Tl(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){bc.units[e]=`px`}),nf.registerPlugin(Tp);var Ep=nf.registerPlugin(Tp)||nf;Ep.core.Tween;var Dp=`varying vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Op=`// Tone-map the additive HDR particle buffer and composite it over the night sky.
// Hue-preserving: the brightest channel is compressed, the others follow, so a dense
// CBD climbs from amber towards --amber-hot and never clips to white.

uniform sampler2D tScene;
uniform vec3 uBg;
uniform vec3 uGlow;       // colour added by the soft radial glow
uniform float uGlowAmt;
uniform vec3 uHot;        // colour dense areas tend towards
uniform float uExposure;
uniform float uHotStart;  // HDR level where the shift towards uHot begins
uniform float uHotEnd;
uniform float uHotMix;    // how far it gets at most
uniform float uVignette;
uniform float uAspect;
uniform float uLight;     // 0 dark theme .. 1 light theme (themeMap.js)
uniform vec3 uBgL;        // paper colour
uniform vec3 uGlowL;      // light theme: a faint lift at the centre
uniform float uShadeL;    // light theme: warm shade towards the edges
uniform vec3 uDeepL;      // light theme: per-channel ink multiplier at full depth (density heat; leans a little warm so gold never goes olive)
uniform float uDeepFrom;  // light theme: optical depth where the deepening starts
uniform float uDeepTo;    // ... and where it is complete

varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec4 tex = texture2D(tScene, vUv);
  vec3 c = tex.rgb * uExposure;
  float m = max(c.r, max(c.g, c.b));
  vec3 hue = c / max(m, 1e-4);
  float l = 1.0 - exp(-m);
  vec3 col = hue * l;
  col = mix(col, uHot * min(1.0, l * 1.05), smoothstep(uHotStart, uHotEnd, m) * uHotMix);

  vec2 q = vUv - 0.5;
  q.x *= uAspect;
  float r2 = dot(q, q);
  vec3 sky = uBg + uGlow * (uGlowAmt * exp(-r2 * 2.6));
  float vig = 1.0 - uVignette * smoothstep(0.15, 0.9, r2);

  vec3 outc = (sky + col * (1.0 - 0.35 * dot(sky, vec3(0.33)))) * vig;
  if (uLight > 0.001) {
    // light theme: the scene buffer holds premultiplied ink (rgb) and coverage (a), no tone mapping
    vec3 paper = uBgL * (1.0 - uShadeL * smoothstep(0.1, 0.85, r2)) + uGlowL * exp(-r2 * 2.6);
    // density heat: where coverage piles up the ink deepens (same hue), so the CBD reads as the hottest spot
    float depth = -log(max(1.0 - min(tex.a, 0.9995), 0.0005)); // optical depth: grows with every overlapping dot, unlike coverage which saturates
    vec3 ink = tex.rgb * mix(vec3(1.0), uDeepL, smoothstep(uDeepFrom, uDeepTo, depth));
    vec3 outl = ink + paper * (1.0 - tex.a);
    outc = mix(outc, outl, uLight);
  }
  outc += (hash(gl_FragCoord.xy) - 0.5) / 255.0; // dither, stops banding in the dark gradient
  gl_FragColor = vec4(outc, 1.0);
}
`,kp=typeof matchMedia==`function`?matchMedia(`(prefers-reduced-motion: reduce)`):null,Ap={reduced:!!(kp&&kp.matches),debug:new URLSearchParams(location.search).has(`debug`)};kp?.addEventListener?.(`change`,e=>{Ap.reduced=e.matches});function jp(e){let t=parseInt(e.slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var Mp={bg:jp(`#060a14`),amber:jp(`#ffb35c`),amberHot:jp(`#ffd9a0`),slate:jp(`#5d7290`),gold:jp(`#f5c542`),red:jp(`#ff6b5b`)};function Np(){return{bg:[...Mp.bg],amber:[...Mp.amber],amberHot:[...Mp.amberHot],slate:[...Mp.slate],gold:[...Mp.gold],red:[...Mp.red]}}var Pp={uLight:{value:0},uRes:{value:new ot(1920,1080)},uPR:{value:1}},Fp={blending:5,blendEquation:100,blendSrc:201,blendDst:205},Ip=[[0,`#c23a3a`],[14,`#c23a3a`],[32,`#cf5f17`],[47,`#c29418`],[75,`#6f8a1a`],[125,`#3a8a3a`],[175,`#1f9a8c`],[215,`BLUE`],[255,`#6c5cc4`],[300,`#9b3fb0`],[345,`#b8334f`],[360,`#c23a3a`]],Lp=`#1b2030`,Rp=`#6b2a12`,zp=`#5a6f8f`,Bp=`#2457b3`,Vp=e=>{let t=parseInt(e.slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]},Hp=(e,t,n)=>e.map((e,r)=>e+(t[r]-e)*n),Up=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function Wp([e,t,n]){let r=Math.max(e,t,n),i=r-Math.min(e,t,n),a=0;return i>1e-6&&(a=r===e?((t-n)/i+6)%6:r===t?(n-e)/i+2:(e-t)/i+4),[a/6,r>0?i/r:0,r]}function Gp(e){let t=Math.max(e[0],e[1],e[2]),[n,r]=Wp(e.map(e=>e/Math.max(t,1e-4))),i=0;for(;i<Ip.length-2&&n*360>=Ip[i+1][0];)i++;let a=e=>e[1]===`BLUE`?Hp(Vp(zp),Vp(Bp),Up(.4,.7,r)):Vp(e[1]),o=Ip[i],s=Ip[i+1],c=Math.min(1,Math.max(0,(n*360-o[0])/(s[0]-o[0]))),l=Hp(a(o),a(s),c),u=.18-.09*(1-Up(0,.17,Math.abs(n-215/360))),d=Up(.1,.17,r)*(1-Up(.1,.2,n));return Hp(Hp(Vp(Lp),Vp(Rp),d),l,Up(u,u+.17,r))}var Kp=e=>`vec3(${e.map(e=>e.toFixed(4)).join(`, `)})`,qp=Ip.length,Jp=`
uniform float uLight;
const float TH_HUE[${qp}] = float[${qp}](${Ip.map(e=>(e[0]/360).toFixed(5)).join(`, `)});
const vec3 TH_COL[${qp}] = vec3[${qp}](${Ip.map(e=>e[1]===`BLUE`?Kp(Vp(zp)):Kp(Vp(e[1]))).join(`, `)});
const vec3 TH_INK = ${Kp(Vp(Lp))};
const vec3 TH_WARM = ${Kp(Vp(Rp))};
const vec3 TH_COURT = ${Kp(Vp(Bp))};

vec3 thHsv(vec3 c) {
  float mx = max(c.r, max(c.g, c.b));
  float d = mx - min(c.r, min(c.g, c.b));
  float h = 0.0;
  if (d > 1e-6) {
    if (mx == c.r) h = mod((c.g - c.b) / d + 6.0, 6.0);
    else if (mx == c.g) h = (c.b - c.r) / d + 2.0;
    else h = (c.r - c.g) / d + 4.0;
  }
  return vec3(h / 6.0, mx > 0.0 ? d / mx : 0.0, mx);
}

vec3 lightColor(vec3 col) {
  float v = max(col.r, max(col.g, col.b));
  vec3 hs = thHsv(col / max(v, 1e-4));
  float hue = hs.x;
  float s = hs.y;
  int i = 0;
  for (int k = 0; k < ${qp-2}; k++) {
    if (hue >= TH_HUE[k + 1]) i = k + 1;
  }
  vec3 ca = TH_COL[i];
  vec3 cb = TH_COL[i + 1];
  vec3 blueMix = mix(TH_COL[${Ip.findIndex(e=>e[1]===`BLUE`)}], TH_COURT, smoothstep(0.4, 0.7, s));
  if (i == ${Ip.findIndex(e=>e[1]===`BLUE`)}) ca = blueMix;
  if (i + 1 == ${Ip.findIndex(e=>e[1]===`BLUE`)}) cb = blueMix;
  float t = clamp((hue - TH_HUE[i]) / (TH_HUE[i + 1] - TH_HUE[i]), 0.0, 1.0);
  vec3 chroma = mix(ca, cb, t);
  float blue = 1.0 - smoothstep(0.0, 0.17, abs(hue - 0.59722));
  float lo = 0.18 - 0.09 * blue;
  float warm = smoothstep(0.1, 0.17, s) * (1.0 - smoothstep(0.1, 0.2, hue));
  return mix(mix(TH_INK, TH_WARM, warm), chroma, smoothstep(lo, lo + 0.17, s));
}

// col: the colour as authored for the night sky; a: how much light (additive intensity); gain: how strongly it reads on paper.
vec4 themeOut(vec3 col, float a, float gain) {
  vec3 dark = col * a;
  if (uLight < 0.001) return vec4(dark, 0.0);
  float v = max(col.r, max(col.g, col.b));
  float la = clamp(a * pow(v, 1.3) * gain, 0.0, 1.0);
  return vec4(mix(dark, lightColor(col) * la, uLight), la * uLight);
}

// The same for soft glow sprites (Sparks, Shockwave). A low-saturation glow (white-hot, cream) would map to a dark ink and
// show as a smudge on paper: it becomes a warm (or, for cool whites, slate) wash capped at about 0.3. Saturated glows are as themeOut.
const vec3 TH_GLOW_WARM = ${Kp(Vp(`#cf5f17`))};
const vec3 TH_GLOW_COOL = ${Kp(Vp(zp))};
vec4 themeGlow(vec3 col, float a, float gain) {
  vec3 dark = col * a;
  if (uLight < 0.001) return vec4(dark, 0.0);
  float v = max(col.r, max(col.g, col.b));
  vec3 hs = thHsv(col / max(v, 1e-4));
  float lowSat = 1.0 - smoothstep(0.12, 0.4, hs.y);
  float la = clamp(a * pow(v, 1.3) * gain, 0.0, 1.0);
  la = mix(la, 0.3 * (1.0 - exp(-la / 0.3)), lowSat);
  float cool = 1.0 - smoothstep(0.06, 0.16, abs(hs.x - 0.59722)) ;
  vec3 tint = mix(lightColor(col), mix(TH_GLOW_WARM, TH_GLOW_COOL, cool * smoothstep(0.05, 0.12, hs.y)), lowSat);
  return vec4(mix(dark, tint * la, uLight), la * uLight);
}
`;mt.enabled=!1;var Yp={fov:35,maxDpr:2,msaaSamples:4,exposure:1.15,hotStart:1.8,hotEnd:7,hotMix:.6,glowAmt:1,glowColor:[.05,.045,.06],vignette:.28,driftDeg:1.2,driftPeriod:44,parallaxDeg:.7,refAspect:1.6,paper:[.9686,.9569,.9294],paperGlow:[.018,.016,.01],paperShade:.036,deepInk:[.74,.64,.58],deepFrom:2.1,deepTo:7.2},Xp=Math.PI/180;function Zp(){return{x:0,y:0,z:0,distance:66,azimuth:0,polar:58,dolly:1,fit:.55,ambAz:0,ambPolar:0,flat:0}}var Qp=class{constructor(){let e=Yp;this.canvas=document.createElement(`canvas`),this.canvas.id=`stage`,this.canvas.className=`stage-canvas`,this.canvas.setAttribute(`aria-hidden`,`true`),this.container=null,this.paused=!0,this.theme=Np(),this.renderer=new _c({canvas:this.canvas,antialias:!0,alpha:!1,powerPreference:`high-performance`}),this.renderer.outputColorSpace=je,this.renderer.setClearColor(new fn(...this.theme.bg),1),this.scene=new mn,this.camera=new Bi(e.fov,1.6,.1,800),this.rig=Zp(),this.aspect=1.6,this.pixelRatio=1,this.width=960,this.height=600,this.listeners=[],this.frameListeners=[],this.time=0;let t=this.renderer.extensions;if(this.useTarget=this.renderer.capabilities.isWebGL2&&(t.has(`EXT_color_buffer_float`)||t.has(`EXT_color_buffer_half_float`)),this.useTarget){this.target=new Dt(4,4,{type:y,format:D,depthBuffer:!1,samples:e.msaaSamples}),this.postUniforms={tScene:{value:this.target.texture},uBg:{value:new Z(...this.theme.bg)},uGlow:{value:new Z(...e.glowColor)},uGlowAmt:{value:e.glowAmt},uHot:{value:new Z(...this.theme.amberHot)},uExposure:{value:e.exposure},uHotStart:{value:e.hotStart},uHotEnd:{value:e.hotEnd},uHotMix:{value:e.hotMix},uVignette:{value:e.vignette},uAspect:{value:1.6},uLight:Pp.uLight,uBgL:{value:new Z(...e.paper)},uGlowL:{value:new Z(...e.paperGlow)},uShadeL:{value:e.paperShade},uDeepL:{value:new Z(...e.deepInk)},uDeepFrom:{value:e.deepFrom},uDeepTo:{value:e.deepTo}},this.postScene=new mn,this.postCamera=new Vi(-1,1,1,-1,0,1);let t=new Mr(new ei(2,2),new li({uniforms:this.postUniforms,vertexShader:Dp,fragmentShader:Op,depthTest:!1,depthWrite:!1}));t.frustumCulled=!1,this.postScene.add(t)}this._mx=0,this._my=0,this._px=0,this._py=0,window.addEventListener(`pointermove`,e=>{if(!this.container||this.paused)return;let t=this.canvas.getBoundingClientRect();if(t.width<1||t.height<1)return;let n=(e.clientX-t.left)/t.width*2-1,r=(e.clientY-t.top)/t.height*2-1;this._mx=Math.max(-1,Math.min(1,n)),this._my=Math.max(-1,Math.min(1,r))},{passive:!0}),this._tmpTarget=new Z,this._ro=typeof ResizeObserver==`function`?new ResizeObserver(()=>this.resize()):null,window.addEventListener(`resize`,()=>this.resize())}add(e){this.scene.add(e)}attachTo(e){e?(this.container!==e&&(this.container&&this._ro&&this._ro.unobserve(this.container),this.container=e,e.prepend(this.canvas),this._ro&&this._ro.observe(e),this.resize()),this.paused=!1):this.paused=!0}setPaused(e){this.paused=!!e}detach(){this.paused=!0,this.container&&this._ro&&this._ro.unobserve(this.container),this.container=null,this.canvas.remove(),this._sizedOnce=!1}setThemeMix(e){if(Pp.uLight.value=e,!this.useTarget){let t=this.theme.bg,n=Yp.paper;this.renderer.setClearColor(new fn(t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e),1)}}onFrame(e){this.frameListeners.push(e)}onResize(e){this.listeners.push(e),e(this)}resize(){if(!this.container)return;let e=this.container.getBoundingClientRect(),t=Math.max(1,Math.round(e.width)),n=Math.max(1,Math.round(e.height)),r=Math.min(devicePixelRatio||1,Yp.maxDpr);if(!(t===this.width&&n===this.height&&r===this.pixelRatio&&this._sizedOnce)){this._sizedOnce=!0,this.width=t,this.height=n,this.pixelRatio=r,this.renderer.setPixelRatio(r),this.renderer.setSize(t,n,!1),Pp.uRes.value.set(Math.round(t*r),Math.round(n*r)),Pp.uPR.value=r,this.aspect=t/n,this.camera.aspect=this.aspect,this.camera.updateProjectionMatrix(),this.target&&(this.target.setSize(Math.round(t*r),Math.round(n*r)),this.postUniforms.uAspect.value=this.aspect);for(let e of this.listeners)e(this)}}_updateCamera(e){let t=Yp,n=this.rig,r=Math.min(1,Math.max(0,n.flat||0)),i=1-r,a=n.azimuth+n.ambAz*i,o=n.polar+n.ambPolar*i;if(!Ap.reduced&&i>1e-4){a+=Math.sin(this.time*Math.PI*2/t.driftPeriod)*t.driftDeg*i;let n=1-Math.exp(-e*3);this._px+=(this._mx-this._px)*n,this._py+=(this._my-this._py)*n,a+=this._px*t.parallaxDeg*i,o+=this._py*t.parallaxDeg*.6*i}let s=Math.max(1,t.refAspect/this.aspect)**+n.fit,c=n.distance*n.dolly*s;if(r>=.999&&Math.abs(o-90)<1e-4&&Math.abs(a)<1e-4){this.camera.position.set(n.x,n.y,n.z+c),this.camera.up.set(0,1,0),this.camera.lookAt(this._tmpTarget.set(n.x,n.y,n.z));return}let l=Math.min(Math.max(o,1),179)*Xp,u=a*Xp;this.camera.position.set(n.x+c*Math.sin(l)*Math.sin(u),n.y+c*Math.cos(l),n.z+c*Math.sin(l)*Math.cos(u)),this.camera.lookAt(this._tmpTarget.set(n.x,n.y,n.z))}render(e,t){if(document.hidden||this.paused||!this.container)return;this.time=e,this._updateCamera(Math.min(t,100)/1e3),this.camera.updateMatrixWorld();for(let e of this.frameListeners)e(this);let n=this.renderer;this.useTarget?(n.setRenderTarget(this.target),n.setClearColor(0,0),n.clear(),n.render(this.scene,this.camera),n.setRenderTarget(null),n.render(this.postScene,this.postCamera)):n.render(this.scene,this.camera)}start(e){this.stop(),Ep.ticker.lagSmoothing(0),this._tickFn=(t,n)=>{e?.(t,n),this.render(t,n)},Ep.ticker.add(this._tickFn)}stop(){this._tickFn&&=(Ep.ticker.remove(this._tickFn),null),this.paused=!0}},$p=`// One draw call for every listing.
// Each particle blends between two layouts (position = "from", aTo = "to").
// Tunable numbers come in as uniforms (see ParticleField.js, FIELD_CONFIG).

#define PI 3.14159265359
#define TAU 6.28318530718

uniform float uMorph;       // 0..1 blend between the two bound layouts
uniform float uTime;
uniform float uPixelRatio;
uniform float uBaseSize;    // px at uRefDist
uniform float uStagger;     // 0..1 how spread out the per-particle start times are
uniform float uLift;        // km, height of the arc flown during a morph
uniform float uLiftZ;       // km, the same arc pushed towards +z (the camera side of a chart)
uniform float uIntro;       // 0..1 load sequence: lights switching on from the CBD outwards
uniform float uGlobalAlpha;
uniform float uRefDist;     // camera distance at which a size of 1 is uBaseSize px
uniform float uSizePow;     // how strongly points grow when the camera gets closer
uniform float uMinPx;
uniform float uMaxPx;
uniform float uTwinkle;     // amplitude of the brightness flicker
uniform float uIntroSpread; // fraction of the intro each light takes to fade in
uniform float uIntroFall;   // km, how far above its spot a light starts
uniform vec3 uCursor;       // pointer hit point on the map plane
uniform float uCursorStrength;
uniform float uCursorRadius;
uniform float uCursorBoost;
uniform float uCursorSize;
uniform float uHL;          // group id that is highlighted (see ParticleField.setGroups / highlight)
uniform float uHLAmt;       // 0..1 how strongly the highlight is on
uniform float uHLBoost;     // alpha multiplier of the highlighted group
uniform float uHLDim;       // alpha multiplier of every other group
uniform vec4 uPulse0;       // shockwave: x, z (map plane), radius (km), strength. strength 0 = off (ParticleField.setPulse)
uniform vec4 uPulse1;
uniform float uPulseW;      // km, half width of the ring
uniform float uPulseBoost;  // extra alpha at the ring
uniform float uPulseSize;   // extra size at the ring
uniform float uLampMode;    // 0..1: how much the "lamp" effect below applies (chapter 7's start lights)
uniform float uLampDir;     // +1: the lamp layout is the morph's target (effect grows with each particle's own progress), -1: its source (fades with it), 0: not morphing
uniform float uLamp[5];     // 0..1 per lamp group: 0 unlit (dim, slate-red), 1 lit (the layout's colour, brighter and bigger)
uniform vec3 uLampCol;      // colour of an unlit lamp
uniform float uLampDim;     // alpha multiplier of an unlit lamp
uniform float uLampBoost;   // alpha multiplier of a lit lamp
uniform float uLampSize;    // extra size of a lit lamp
uniform float uShape;       // 0 = soft round point, 1 = soft-edged rounded square (chapter 8's tiles); tweened by the chapter (ParticleField.setShape)
uniform float uFlip;        // 1: each particle turns into a tile as its own morph progress p goes 0 -> 1 (and a scale pulse on the way), see ParticleField.setFlip
uniform float uDrift;       // km: slow wander of every point (0 = off), ParticleField.setDrift
uniform float uLight;       // 0 dark theme .. 1 light theme (themeMap.js)
uniform float uFlipPulse;   // peak extra size of that pulse (0.4 = 1 -> 1.4 -> 1)

attribute vec3 aTo;
attribute vec4 aColorFrom;
attribute vec4 aColorTo;
attribute float aSizeFrom;
attribute float aSizeTo;
attribute float aRand;
attribute float aOrder;     // 0..1 start-time key of the target layout (see layouts.js \`order\`)
attribute float aGroup;     // chapter-defined group id (hover highlight), 255 = none
attribute float aIntro;     // 0 at the CBD .. 1 at the edge (rank by distance)
attribute float aLamp;      // 0 none, 1..5 the lamp group of the particle (ParticleField.setLampTags)

varying vec3 vColor;
varying float vAlpha;
varying float vShape;

void main() {
  float t = clamp((uMorph - aOrder * uStagger) / max(1.0 - uStagger, 0.001), 0.0, 1.0);
  float p = t * t * (3.0 - 2.0 * t);

  vec3 pos = mix(position, aTo, p);
  vec3 d = aTo - position;
  float travels = step(0.000001, dot(d, d)); // only particles that actually move get the arc
  float arc = sin(PI * p) * (0.4 + 0.6 * aRand) * travels;
  pos.y += uLift * arc;
  pos.z += uLiftZ * arc;

  vec4 col = mix(aColorFrom, aColorTo, p);
  float size = mix(aSizeFrom, aSizeTo, p);
  float shp = max(uShape, uFlip * p);
  size *= 1.0 + uFlip * uFlipPulse * sin(PI * p) * (1.0 - travels);

  pos += uDrift * vec3(sin(uTime * 0.21 + aRand * TAU), 0.7 * sin(uTime * 0.17 + aRand * 17.0), 0.6 * cos(uTime * 0.13 + aRand * 9.0)) * (0.35 + aRand);

  float k = clamp((uIntro * (1.0 + uIntroSpread) - aIntro) / uIntroSpread, 0.0, 1.0);
  k = k * k * (3.0 - 2.0 * k);
  pos.y += (1.0 - k) * uIntroFall;

  float alpha = col.a * k * uGlobalAlpha;
  alpha *= 1.0 + uTwinkle * sin(uTime * (1.2 + 2.5 * aRand) + aRand * TAU);

  if (uHLAmt > 0.0) {
    float hit = 1.0 - step(0.5, abs(aGroup - uHL));
    alpha *= mix(1.0, mix(uHLDim, uHLBoost, hit), uHLAmt);
  }

  if (uLampMode > 0.0 && aLamp > 0.5) {
    float on = uLamp[int(aLamp - 0.5)];
    float lw = uLampMode * (uLampDir > 0.5 ? p : (uLampDir < -0.5 ? 1.0 - p : 1.0));
    col.rgb = mix(col.rgb, mix(uLampCol, col.rgb, on), lw);
    alpha *= mix(1.0, mix(uLampDim, uLampBoost, on), lw);
    size *= mix(1.0, 1.0 + uLampSize * on, lw);
  }

  float pulse = 0.0;
  if (uPulse0.w > 0.0) {
    float q = (distance(pos.xz, uPulse0.xy) - uPulse0.z) / uPulseW;
    pulse += uPulse0.w * exp(-q * q);
  }
  if (uPulse1.w > 0.0) {
    float q = (distance(pos.xz, uPulse1.xy) - uPulse1.z) / uPulseW;
    pulse += uPulse1.w * exp(-q * q);
  }
  alpha *= 1.0 + uPulseBoost * pulse;
  size *= 1.0 + uPulseSize * pulse;

  float torch = 0.0;
  if (uCursorStrength > 0.0) {
    torch = 1.0 - smoothstep(0.0, 1.0, distance(pos.xz, uCursor.xz) / uCursorRadius);
    torch *= uCursorStrength;
    alpha *= 1.0 + uCursorBoost * torch;
    size *= 1.0 + uCursorSize * torch;
  }

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  float dist = max(-mv.z, 0.1);
  float raw = size * uBaseSize * uPixelRatio * pow(uRefDist / dist, uSizePow);
  raw *= 1.0 + 0.22 * uLight; // light theme: larger points (ink needs more area than light to read)
  float s = clamp(raw, uMinPx * uPixelRatio, uMaxPx * uPixelRatio);
  alpha *= min(1.0, (raw * raw) / (s * s)); // sub-pixel points fade instead of shimmering

  vColor = col.rgb;
  vAlpha = alpha;
  vShape = shp;
  gl_PointSize = s;
  gl_Position = k <= 0.0 ? vec4(2.0, 2.0, 2.0, 1.0) : projectionMatrix * mv;
}
`,em=`// Soft round point: bright core plus a faint wide halo. Output is added into
// an HDR target; Stage.js tone-maps it so dense areas stay warm, never white.
// With vShape = 1 the sprite is a soft-edged rounded square instead (chapter 8's tiles): a flat fill with a slight
// inner gradient and a subtle glow in the margin around it. The tile fills TILE_HALF of the sprite's half-width.

const float CORE_FALLOFF = 8.0; // bigger = tighter core
const float HALO_FALLOFF = 2.2;
const float HALO_AMOUNT = 0.22;
const float TILE_HALF = 0.78; // half-extent of the tile body, in sprite units (1 = the sprite edge)
const float TILE_RADIUS = 0.2; // corner radius, same units
const float TILE_FILL = 0.92; // brightness of the body
const float TILE_GLOW = 0.16; // brightness of the glow just outside it
const float LIGHT_DISC = 0.85; // light theme: peak opacity of a point (before the colour's own brightness)
const float LIGHT_GAIN = 1.05; // light theme: how strongly a point's brightness (alpha * colour) reads as ink opacity
const vec3 LIGHT_DIM_INK = vec3(0.580, 0.502, 0.431); // #94806e, the muted warm grey of dimmed dots
const float LIGHT_DIM_LEVEL = 1.0; // the brightness a dimmed dot is treated as having (steadier opacity)
const float LIGHT_CORE = 3.4; // light theme: core falloff (a soft ink dot)
const float LIGHT_HALO = 1.2; // light theme: halo falloff
const float LIGHT_HALO_AMOUNT = 0.26; // light theme: the faint paper glow around a dot

varying vec3 vColor;
varying float vAlpha;
varying float vShape;

void main() {
  vec2 c = gl_PointCoord - 0.5;
  float roundA = 0.0;
  float r2 = dot(c, c) * 4.0; // 0 at centre, 1 at the sprite edge
  if (vShape < 0.999 && r2 < 1.0) {
    float core = exp(-r2 * CORE_FALLOFF);
    float halo = exp(-r2 * HALO_FALLOFF) * HALO_AMOUNT;
    float edge = 1.0 - smoothstep(0.55, 1.0, r2);
    roundA = (core + halo) * edge;
    // light theme: a soft ink core plus a faint wide halo (the paper's "glow"); one dot is clear, overlaps build up
    float lightA = (exp(-r2 * LIGHT_CORE) + exp(-r2 * LIGHT_HALO) * LIGHT_HALO_AMOUNT) * edge * LIGHT_DISC;
    roundA = mix(roundA, lightA, uLight);
  }
  float tileA = 0.0;
  if (vShape > 0.001) {
    vec2 q = abs(c) * 2.0; // 0 centre .. 1 sprite edge on each axis
    vec2 d = q - (TILE_HALF - TILE_RADIUS);
    float sd = length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - TILE_RADIUS; // < 0 inside the rounded square
    float aa = fwidth(sd) * 0.8 + 0.012;
    float body = 1.0 - smoothstep(-aa, aa, sd);
    float inner = 1.0 - 0.18 * smoothstep(0.0, 0.6, length(q)); // slightly brighter in the middle
    float glow = exp(-max(sd, 0.0) * 14.0) * TILE_GLOW * (1.0 - smoothstep(0.0, 0.22, max(sd, 0.0)));
    tileA = body * TILE_FILL * inner + glow;
  }
  float a = mix(roundA, tileA, vShape) * vAlpha;
  if (a < 0.0004) discard;
  vec4 o = themeOut(vColor, a, LIGHT_GAIN);
  if (uLight > 0.001) {
    // light theme: a dimmed warm colour (the "rest" of a chart, brightness well under the full colour) is an intentionally muted
    // warm grey at a steadier opacity, not a pale tint of its hue. Cool slate keeps its own colour.
    float v = max(vColor.r, max(vColor.g, vColor.b));
    vec3 hs = thHsv(vColor / max(v, 1e-4));
    float dimW = (1.0 - smoothstep(0.42, 0.58, v)) * smoothstep(0.1, 0.2, abs(hs.x - 0.59722)) * smoothstep(0.08, 0.2, hs.y);
    if (dimW > 0.001) {
      float la = clamp(a * pow(mix(v, LIGHT_DIM_LEVEL, dimW), 1.3) * LIGHT_GAIN, 0.0, 1.0);
      o = mix(o, vec4(mix(lightColor(vColor), LIGHT_DIM_INK, dimW) * la, la), dimW * uLight);
    }
  }
  gl_FragColor = o;
}
`,tm={map:{keptAlpha:.85,droppedAlpha:.48,droppedDim:.6,droppedCool:.36,jitterKm:.04,sizeVsPrice:.2,densityCell:.25,densityRef:12,densityAlphaPow:.55,densitySizePow:.2}},nm=new Map,rm=new Map;function im(e,t){nm.set(e,t),rm.delete(e)}function am(e,t){if(!rm.has(e)){let n=nm.get(e);if(!n)throw Error(`Unknown layout "${e}"`);rm.set(e,n(t))}return rm.get(e)}function om(e){let t=parseInt(e.slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function sm(e){let{x:t,y:n}=e.cols,r=e.count,i=new Float32Array(r),a=new Uint32Array(r);for(let e=0;e<r;e++)i[e]=Math.hypot(t[e],n[e]),a[e]=e;a.sort((e,t)=>i[e]-i[t]);let o=new Float32Array(r);for(let e=0;e<r;e++)o[a[e]]=e/(r-1);return o}im(`map`,e=>{let t=tm.map,n=Np(),r=e.count,{x:i,y:a,drop_stage:o,price:s,rand:c}=e.cols,l=new Float32Array(r*3),u=new Float32Array(r*3),d=new Float32Array(r),f=new Float32Array(r),p=new Map,m=e=>Math.floor(i[e]/t.densityCell)*8192+Math.floor(a[e]/t.densityCell);for(let e=0;e<r;e++)p.set(m(e),(p.get(m(e))||0)+1);let h=n.amber,g=[.72,.8,.95],_=h.map((e,n)=>(e*(1-t.droppedCool)+g[n]*t.droppedCool)*t.droppedDim),[v,,y]=e.meta.stats.price_q,b=Math.log(v),x=Math.log(y)-b;for(let e=0;e<r;e++){l[e*3]=i[e],l[e*3+1]=(c[e]-.5)*t.jitterKm,l[e*3+2]=-a[e];let n=p.get(m(e)),r=Math.max(1,n/t.densityRef),g=o[e]===0,v=g?h:_;u[e*3]=v[0],u[e*3+1]=v[1],u[e*3+2]=v[2],f[e]=(g?t.keptAlpha:t.droppedAlpha)/r**+t.densityAlphaPow;let y=1;if(g&&Number.isFinite(s[e])){let n=Math.min(1,Math.max(0,(Math.log(s[e])-b)/x));y=1+t.sizeVsPrice*(2*n-1)}else g||(y=.9);d[e]=y/r**+t.densitySizePow}return{positions:l,colors:u,sizes:d,alphas:f}});var cm={baseSize:3.2,refDist:80,sizePow:.45,minPx:1.6,maxPx:26,twinkle:.08,waveMix:.55,orderMix:.85,introSpread:.16,introFall:.3,cursor:{radius:3.4,refDistance:68,boost:1,size:.4,inTau:.12,outTau:.32,idleMs:140},highlight:{boost:1.5,dim:.4,tau:.05},pulse:{width:.45,boost:5.5,size:.9},lamp:{dim:.17,boost:1.7,size:.2,unlit:[.62,.36,.4]},shape:{flipPulse:.4,tweenSec:.55},morph:{duration:1.8,ease:`power2.inOut`,stagger:.45,lift:3,liftZ:0}},lm=e=>e*e*(3-2*e),um=new Set([`map`,`hero_spires`,`a1_map`,`a1_datasets`]);function dm(e){um.add(e)}var fm=e=>um.has(e),pm=class{constructor(e,{pixelRatio:t=1}={}){this.data=e;let n=this.n=e.count;this._packed=new Map,this._key=null,this._proxy={v:0},this._tween=null;let r=this.geometry=new cr,i=e=>new qn(new Float32Array(n*e),e);this.aFrom=i(3),this.aTo=i(3),this.aColorFrom=i(4),this.aColorTo=i(4),this.aSizeFrom=i(1),this.aSizeTo=i(1),this.aOrder=i(1);for(let e of[this.aFrom,this.aTo,this.aColorFrom,this.aColorTo,this.aSizeFrom,this.aSizeTo,this.aOrder])e.setUsage(Ie);r.setAttribute(`position`,this.aFrom),r.setAttribute(`aTo`,this.aTo),r.setAttribute(`aColorFrom`,this.aColorFrom),r.setAttribute(`aColorTo`,this.aColorTo),r.setAttribute(`aSizeFrom`,this.aSizeFrom),r.setAttribute(`aSizeTo`,this.aSizeTo),r.setAttribute(`aOrder`,this.aOrder),this.aRand=new qn(new Float32Array(e.cols.rand),1),this.aIntro=new qn(sm(e),1),r.setAttribute(`aRand`,this.aRand),r.setAttribute(`aIntro`,this.aIntro),this.aGroup=new qn(new Float32Array(n).fill(255),1),r.setAttribute(`aGroup`,this.aGroup),this.aLamp=new qn(new Float32Array(n),1),r.setAttribute(`aLamp`,this.aLamp),this._hl={target:0,amt:0,id:-1,last:0},r.setDrawRange(0,n);let a=cm;this.uniforms={...Pp,uMorph:{value:0},uTime:{value:0},uPixelRatio:{value:t},uBaseSize:{value:a.baseSize},uStagger:{value:0},uLift:{value:0},uLiftZ:{value:0},uIntro:{value:1},uGlobalAlpha:{value:1},uRefDist:{value:a.refDist},uSizePow:{value:a.sizePow},uMinPx:{value:a.minPx},uMaxPx:{value:a.maxPx},uTwinkle:{value:Ap.reduced?0:a.twinkle},uIntroSpread:{value:a.introSpread},uIntroFall:{value:a.introFall},uCursor:{value:new Z},uCursorStrength:{value:0},uCursorRadius:{value:a.cursor.radius},uCursorBoost:{value:a.cursor.boost},uCursorSize:{value:a.cursor.size},uHL:{value:-1},uHLAmt:{value:0},uHLBoost:{value:a.highlight.boost},uHLDim:{value:a.highlight.dim},uPulse0:{value:new Tt(0,0,0,0)},uPulse1:{value:new Tt(0,0,0,0)},uPulseW:{value:a.pulse.width},uPulseBoost:{value:a.pulse.boost},uPulseSize:{value:a.pulse.size},uLampMode:{value:0},uLampDir:{value:0},uLamp:{value:[1,1,1,1,1]},uLampCol:{value:new Z(...a.lamp.unlit)},uLampDim:{value:a.lamp.dim},uLampBoost:{value:a.lamp.boost},uLampSize:{value:a.lamp.size},uShape:{value:0},uFlip:{value:0},uFlipPulse:{value:a.shape.flipPulse},uDrift:{value:0}},this.material=new li({uniforms:this.uniforms,vertexShader:$p,fragmentShader:Jp+em,transparent:!0,depthTest:!1,depthWrite:!1,...Fp}),this.points=new qr(r,this.material),this.points.frustumCulled=!1}get object3d(){return this.points}_pack(e){if(!this._packed.has(e)){let t=am(e,this.data),n=this.n,r=new Float32Array(n*4);for(let e=0;e<n;e++)r[e*4]=t.colors?t.colors[e*3]:1,r[e*4+1]=t.colors?t.colors[e*3+1]:1,r[e*4+2]=t.colors?t.colors[e*3+2]:1,r[e*4+3]=t.alphas?t.alphas[e]:1;let i=this.aRand.array,a=this.aIntro.array,o=cm,s=new Float32Array(n);for(let e=0;e<n;e++)s[e]=t.order?o.orderMix*t.order[e]+(1-o.orderMix)*i[e]:i[e]+(a[e]-i[e])*o.waveMix;this._packed.set(e,{pos:t.positions,col:r,size:t.sizes||new Float32Array(n).fill(1),order:s})}return this._packed.get(e)}_write(e,t){let n=this._pack(t),[r,i,a]=e===`from`?[this.aFrom,this.aColorFrom,this.aSizeFrom]:[this.aTo,this.aColorTo,this.aSizeTo];r.array.set(n.pos),i.array.set(n.col),a.array.set(n.size),r.needsUpdate=i.needsUpdate=a.needsUpdate=!0,e===`to`&&(this.aOrder.array.set(n.order),this.aOrder.needsUpdate=!0)}_bind(e,t){let n=`${e}|${t}`;this._key!==n&&(this._write(`from`,e),this._write(`to`,t),this._key=n)}_opts(e={}){let t=cm.morph,n=Ap.reduced;return{duration:n?.45:e.duration??t.duration,ease:e.ease??t.ease,stagger:n?0:e.stagger??t.stagger,lift:n?0:e.lift??t.lift,liftZ:n?0:e.liftZ??t.liftZ,onComplete:e.onComplete}}get mapWeight(){let e=this._key,t=this.uniforms.uMorph.value;if(!e)return 0;let[n,r]=e.split(`|`);return fm(n)&&fm(r)?1:fm(n)?Math.max(0,1-t*3):fm(r)?Math.max(0,t*3-2):0}showLayout(e){this._tween?.kill(),this._tween=null,this._bind(e,e),this.uniforms.uMorph.value=0,this.uniforms.uStagger.value=0,this.uniforms.uLift.value=0,this.uniforms.uLiftZ.value=0}setLayoutImmediate(e){this._key=null,this.showLayout(e)}_bake(){let e=this.uniforms,t=e.uMorph.value,n=e.uStagger.value,r=e.uLift.value,i=e.uLiftZ.value,a=this.aRand.array,o=this.aOrder.array,s=this.aFrom.array,c=this.aTo.array,l=this.aColorFrom.array,u=this.aColorTo.array,d=this.aSizeFrom.array,f=this.aSizeTo.array,p=Math.max(1-n,.001);for(let e=0;e<this.n;e++){let m=lm(Math.min(1,Math.max(0,(t-o[e]*n)/p))),h=c[e*3]-s[e*3],g=c[e*3+1]-s[e*3+1],_=c[e*3+2]-s[e*3+2],v=h*h+g*g+_*_>1e-6;if(s[e*3]+=h*m,s[e*3+1]+=g*m,s[e*3+2]+=_*m,v){let t=Math.sin(Math.PI*m)*(.4+.6*a[e]);s[e*3+1]+=r*t,s[e*3+2]+=i*t}for(let t=0;t<4;t++)l[e*4+t]+=(u[e*4+t]-l[e*4+t])*m;d[e]+=(f[e]-d[e])*m}this.aFrom.needsUpdate=this.aColorFrom.needsUpdate=this.aSizeFrom.needsUpdate=!0,this._key=null}setLayout(e,t={}){let n=this._opts(t);this._tween?.kill(),this._bake(),this._write(`to`,e),this._key=`*|${e}`;let r=this.uniforms;return r.uMorph.value=0,r.uStagger.value=n.stagger,r.uLift.value=n.lift,r.uLiftZ.value=n.liftZ,this._proxy.v=0,this._tween=Ep.to(this._proxy,{v:1,duration:n.duration,ease:n.ease,onUpdate:()=>r.uMorph.value=this._proxy.v,onComplete:()=>{this._tween=null,n.onComplete?.()}}),this._tween}scrubBetween(e,t,n={}){let r=this,i=this._opts(n);return{get progress(){return r.uniforms.uMorph.value},set progress(n){r._tween?.kill(),r._tween=null,r._bind(e,t),r.uniforms.uStagger.value=i.stagger,r.uniforms.uLift.value=i.lift,r.uniforms.uLiftZ.value=i.liftZ,r.uniforms.uMorph.value=n}}}morph(e,t,n,r={}){let i=this._opts(r);this._tween?.kill(),this._tween=null,this._bind(e,t),this.uniforms.uStagger.value=i.stagger,this.uniforms.uLift.value=i.lift,this.uniforms.uLiftZ.value=i.liftZ,this.uniforms.uMorph.value=n}setGroups(e){this.aGroup.array.set(e),this.aGroup.needsUpdate=!0}setPulse(e,t,n,r,i){(e?this.uniforms.uPulse1:this.uniforms.uPulse0).value.set(t,n,r,i)}setShape(e,t=cm.shape.tweenSec){let n=this.uniforms.uShape;this._shapeTo!==e&&(this._shapeTo=e,this._shapeTween?.kill(),!t||Ap.reduced?n.value=e:this._shapeTween=Ep.to(n,{value:e,duration:t,ease:`power2.inOut`,overwrite:!0}))}setDrift(e){this.uniforms.uDrift.value=Ap.reduced?0:e}setFlip(e){this.uniforms.uFlip.value=+!!e}retarget(e,t={}){return this._packed.delete(e),this.setLayout(e,t)}highlight(e){let t=this._hl;e==null?t.target=0:(t.target=1,t.id=e,this.uniforms.uHL.value=e)}update(e){this.uniforms.uTime.value=e;let t=this._hl,n=Math.min(.1,Math.max(0,e-t.last));if(t.last=e,t.amt!==t.target){let e=1-Math.exp(-n/cm.highlight.tau);t.amt+=(t.target-t.amt)*e,Math.abs(t.target-t.amt)<.002&&(t.amt=t.target),this.uniforms.uHLAmt.value=t.amt}}setPixelRatio(e){this.uniforms.uPixelRatio.value=e}};function mm(e,t={}){let n=e.length/6,r=new cr,i=new Float32Array(n*12),a=new Float32Array(n*12),o=new Float32Array(n*12),s=new Float32Array(n*8),c=new Uint32Array(n*6),l=(t,n)=>e[t]===e[n]&&e[t+1]===e[n+1]&&e[t+2]===e[n+2];for(let t=0;t<n;t++){let r=t>0&&l(t*6,(t-1)*6+3)?(t-1)*6:-1,u=t<n-1&&l(t*6+3,(t+1)*6)?(t+1)*6+3:-1;for(let n=0;n<4;n++){let c=n>>1,l=(t*4+n)*3,d=c?u:r;for(let n=0;n<3;n++)i[l+n]=e[t*6+c*3+n],a[l+n]=e[t*6+(1-c)*3+n],o[l+n]=d>=0?e[d+n]:2*i[l+n]-a[l+n];s[(t*4+n)*2]=n&1?-1:1,s[(t*4+n)*2+1]=c}let d=t*4;c.set([d,d+1,d+2,d+1,d+3,d+2],t*6)}r.setAttribute(`position`,new qn(i,3)),r.setAttribute(`aOther`,new qn(a,3)),r.setAttribute(`aAdj`,new qn(o,3)),r.setAttribute(`aQ`,new qn(s,2)),r.setIndex(new qn(c,1));for(let[e,{size:i,data:a}]of Object.entries(t)){let t=new Float32Array(n*4*i);for(let e=0;e<n;e++)for(let n=0;n<4;n++){let r=n>>1;for(let o=0;o<i;o++)t[(e*4+n)*i+o]=a[(e*2+r)*i+o]}r.setAttribute(e,new qn(t,i))}return r}var hm=`
  uniform vec2 uRes;      // drawing buffer size in device pixels
  uniform float uPR;      // device pixel ratio (widths are in CSS px)
  uniform float uLight;
  uniform vec2 uLineW;    // line width in CSS px: dark theme, light theme
  attribute vec3 aOther;
  attribute vec3 aAdj;
  attribute vec2 aQ;
  varying vec2 vLine;     // (px from the centre line, half width in px)
  vec2 quadScreen(vec4 c) { return c.xy / c.w * uRes * 0.5; }
  vec4 quadLinePos(vec3 self, float wMul) {
    mat4 m = projectionMatrix * modelViewMatrix;
    vec4 cs = m * vec4(self, 1.0);
    vec4 co = m * vec4(aOther, 1.0);
    vec4 ca = m * vec4(aAdj, 1.0);
    const float NEAR = 0.05;
    if (cs.w < NEAR && co.w < NEAR) { vLine = vec2(0.0); return vec4(2.0, 2.0, 2.0, 1.0); }
    if (cs.w < NEAR) cs = mix(cs, co, (NEAR - cs.w) / (co.w - cs.w));
    else if (co.w < NEAR) co = mix(co, cs, (NEAR - co.w) / (cs.w - co.w));
    vec2 ps = quadScreen(cs);
    vec2 a = quadScreen(co) - ps;                       // into this segment
    float la = length(a);
    a = la > 1e-4 ? a / la : vec2(1.0, 0.0);
    vec2 t = a;                                         // line direction at this vertex, pointing into this segment
    if (ca.w > NEAR) {
      vec2 b = quadScreen(ca) - ps;                     // into the neighbouring segment
      float lb = length(b);
      if (lb > 1e-4) {
        b /= lb;
        vec2 mt = a - b;                                // miter tangent (a and -b both run the same way through the vertex)
        float lm = length(mt);
        if (lm > 0.3) t = mt / lm * (dot(mt, a) < 0.0 ? -1.0 : 1.0);
      }
    }
    vec2 n = vec2(-t.y, t.x);
    vec2 nOwn = vec2(-a.y, a.x);
    float k = 1.0 / max(abs(dot(n, nOwn)), 0.5);        // miter length, capped
    float hw = 0.5 * mix(uLineW.x, uLineW.y, uLight) * uPR * wMul;
    float ext = hw + 1.0;                               // plus 1 px for the antialiased edge
    float side = aQ.x * (aQ.y > 0.5 ? -1.0 : 1.0) * (dot(n, nOwn) < 0.0 ? -1.0 : 1.0); // a points backwards at end B, so its normal flips
    vec2 off = n * side * ext * k;
    cs.xy += off / (uRes * 0.5) * cs.w;
    vLine = vec2(aQ.x * ext, hw);
    return cs;
  }
`,gm=`
  varying vec2 vLine;
  float quadLineCover() {
    return clamp(vLine.y + 0.5 - abs(vLine.x), 0.0, 1.0);
  }
`,_m={opacity:.15,innerBoost:1.6,inner:[`Melbourne`,`Port Phillip`,`Yarra`,`Stonnington`],y:-.01,drawEdge:.06,width:{dark:1,light:1.7},innerWidth:1.25,lightGain:5.6},vm=hm+`
  uniform float uInnerW;
  attribute float aT;
  attribute float aInner;
  varying float vT;
  varying float vInner;
  void main() {
    vT = aT;
    vInner = aInner;
    gl_Position = quadLinePos(position, mix(1.0, uInnerW, aInner * uLight));
  }
`,ym=gm+`
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform float uDraw;
  uniform float uInnerBoost;
  uniform float uEdge;
  uniform float uLightGain;
  varying float vT;
  varying float vInner;
  void main() {
    float reveal = 1.0 - smoothstep(uDraw - uEdge, uDraw, vT);
    if (reveal <= 0.0) discard;
    float a = uOpacity * reveal * mix(1.0, uInnerBoost, vInner) * quadLineCover();
    gl_FragColor = themeOut(uColor, a, uLightGain); // the gain only acts in light mode (ink opacity); dark mode is unchanged
  }
`,bm=class{constructor(e){let t=_m,n=[],r=[],i=[];e.forEach((e,a)=>{let o=+!!t.inner.includes(e.name),s=a*.6180339%1*.25;for(let a of e.rings){let e=a.length/2,c=[0],l=0;for(let t=1;t<e;t++)l+=Math.hypot(a[t*2]-a[t*2-2],a[t*2+1]-a[t*2-1]),c.push(l);for(let u=0;u<e-1;u++)for(let e of[u,u+1])n.push(a[e*2],t.y,-a[e*2+1]),r.push(s+.75*(c[e]/(l||1))),i.push(o)}});let a=mm(n,{aT:{size:1,data:r},aInner:{size:1,data:i}}),o=Np();this.uniforms={...Pp,uColor:{value:new Z(...o.slate)},uOpacity:{value:t.opacity},uDraw:{value:1},uInnerBoost:{value:t.innerBoost},uEdge:{value:t.drawEdge},uLineW:{value:new ot(t.width.dark,t.width.light)},uInnerW:{value:t.innerWidth},uLightGain:{value:t.lightGain}},this.material=new li({uniforms:this.uniforms,vertexShader:vm,fragmentShader:Jp+ym,transparent:!0,depthTest:!1,depthWrite:!1,side:2,...Fp}),this.object3d=new Mr(a,this.material),this.object3d.frustumCulled=!1,this.object3d.renderOrder=-1,this._visible=1,this._draw=1,this._dim=1}set draw(e){this._draw=e,this.uniforms.uDraw.value=e*(1+_m.drawEdge),this._sync()}get draw(){return this._draw}set visibility(e){this._visible=e,this._sync()}get visibility(){return this._visible}set dim(e){this._dim=e,this._sync()}get dim(){return this._dim}_sync(){this.uniforms.uOpacity.value=_m.opacity*this._visible*this._dim,this.object3d.visible=this._visible>.001&&this._draw>0}},xm=`http://www.w3.org/2000/svg`,Sm=class{constructor(e){this.stage=e,this.items=[],this.flags=[],this._v=new Z,this._v2=new Z,this._w=e.width,this._h=e.height,this.root=document.createElement(`div`),this.root.className=`fig-overlays`,this.root.setAttribute(`aria-hidden`,`true`),this.root.setAttribute(`data-non-report`,``),this._svg=document.createElementNS(xm,`svg`),this._svg.setAttribute(`class`,`flag-layer`),this._svg.setAttribute(`aria-hidden`,`true`),this.root.appendChild(this._svg),this.container=null,e.onResize(e=>{this._w=e.width,this._h=e.height;for(let e of this.items)e.x=e.y=NaN;for(let e of this.flags)e.k=``}),e.onFrame(()=>this.update())}hideAll(){for(let e=0;e<this.items.length;e++)this.items[e].el.style.opacity=`0`;for(let e=0;e<this.flags.length;e++)this.flags[e].setOpacity(0);for(let e of this.root.children)e!==this._svg&&(e.style.opacity=`0`)}attachTo(e){if(e&&this.container!==e){this.container=e,e.appendChild(this.root),this._w=this.stage.width,this._h=this.stage.height;for(let e of this.items)e.x=e.y=NaN;for(let e of this.flags)e.k=``}}add(e,t,{parent:n=this.root,offset:r=[0,0]}={}){n&&n.appendChild(e);let i={el:e,position:Array.isArray(t)?new Z(...t):t.clone(),offset:r,x:NaN,y:NaN,hidden:!1,remove:null};return i.remove=()=>{let t=this.items.indexOf(i);t>=0&&this.items.splice(t,1),e.remove()},this.items.push(i),i}addFlag(e,t,{parent:n=this.root,height:r=8,offset:i=[0,0],gap:a=6,dot:o=2.5,cls:s=``,below:c=!1}={}){n&&n.appendChild(e);let l=document.createElementNS(xm,`g`);l.setAttribute(`class`,s?`flag ${s}`:`flag`);let u=document.createElementNS(xm,`line`);u.setAttribute(`class`,`flag-line`);let d=document.createElementNS(xm,`circle`);d.setAttribute(`class`,`flag-dot`),d.setAttribute(`r`,o),l.append(u,d),l.style.opacity=`0`,e.style.opacity=`0`,this._svg.appendChild(l);let f={el:e,g:l,line:u,dot:d,position:Array.isArray(t)?new Z(...t):t.clone(),height:r,offset:i,gap:c?-a:a,hidden:!1,k:``,setOpacity(t){e.style.opacity=t,l.style.opacity=t},remove:()=>{let t=this.flags.indexOf(f);t>=0&&this.flags.splice(t,1),e.remove(),l.remove()}};return this.flags.push(f),f}_updateFlags(){let e=this.stage.camera,t=this._v,n=this._v2,r=this._w*.5,i=this._h*.5;for(let a=0;a<this.flags.length;a++){let o=this.flags[a];if(o.el.style.opacity===`0`)continue;t.copy(o.position).project(e),n.copy(o.position),n.y+=o.height,n.project(e);let s=t.z>1||t.z<-1||n.z>1||n.z<-1;if(s!==o.hidden&&(o.hidden=s,o.el.style.display=s?`none`:``,o.g.style.display=s?`none`:``),s)continue;let c=Math.round((t.x*r+r)*10)/10,l=Math.round((-t.y*i+i)*10)/10,u=Math.round((t.x*r+r+o.offset[0])*10)/10,d=Math.round((-n.y*i+i+o.offset[1])*10)/10,f=`${c},${l},${u},${d}`;f!==o.k&&(o.k=f,o.el.style.transform=`translate3d(${u}px,${d}px,0)`,o.line.setAttribute(`x1`,c),o.line.setAttribute(`y1`,l),o.line.setAttribute(`x2`,u),o.line.setAttribute(`y2`,d+o.gap),o.dot.setAttribute(`cx`,c),o.dot.setAttribute(`cy`,l))}}update(){if(!this.container)return;this._updateFlags();let e=this.stage.camera,t=this._v,n=this._w*.5,r=this._h*.5;for(let i=0;i<this.items.length;i++){let a=this.items[i];if(a.el.style.opacity===`0`)continue;t.copy(a.position).project(e);let o=t.z>1||t.z<-1;if(o!==a.hidden&&(a.hidden=o,a.el.style.display=o?`none`:``),o)continue;let s=Math.round((t.x*n+n+a.offset[0])*10)/10,c=Math.round((-t.y*r+r+a.offset[1])*10)/10;(s!==a.x||c!==a.y)&&(a.x=s,a.y=c,a.el.style.transform=`translate3d(${s}px,${c}px,0)`)}}},Cm=`melb.report.theme`,wm=`melb.report.animations`,Tm=.4,Em={get(e){try{return localStorage.getItem(e)}catch{return null}},set(e,t){try{localStorage.setItem(e,t)}catch{}}},Dm=new class{constructor(){let e=new URLSearchParams(location.search),t=e.get(`theme`)??Em.get(Cm);this.light=t!==`dark`,this.themeMix=+!!this.light,this.labelScale=1;let n=e.get(`animations`),r=Em.get(wm);this.animations=n===`on`||n===`off`?n===`on`:r===`on`||r===`off`?r===`on`:!Ap.reduced,Pp.uLight.value=this.themeMix,this.stage=null,this._ls={theme:[],animations:[]},this._tween=null,this._apply(),e.has(`theme`)&&Em.set(Cm,this.light?`light`:`dark`),(n===`on`||n===`off`)&&Em.set(wm,this.animations?`on`:`off`)}on(e,t){this._ls[e]?.push(t)}_emit(e){for(let t of this._ls[e]||[])t(this)}_apply(){document.documentElement.dataset.theme=this.light?`light`:`dark`,document.documentElement.dataset.animations=this.animations?`on`:`off`;let e=document.querySelector(`meta[name="theme-color"]`);e&&e.setAttribute(`content`,this.light?`#f3efe6`:`#060a14`)}setAnimations(e,{persist:t=!0}={}){let n=!!e;n!==this.animations&&(this.animations=n,t&&Em.set(wm,n?`on`:`off`),this._apply(),this._emit(`animations`))}toggleAnimations(){this.setAnimations(!this.animations)}attach({stage:e}){this.stage=e,e?.setThemeMix(this.themeMix)}setTheme(e,{animate:t=!1}={}){e=!!e;let n=+!!e;if(!(e===this.light&&Math.abs(this.themeMix-n)<.001)){if(this.light=e,Em.set(Cm,e?`light`:`dark`),this._apply(),this._tween?.kill(),this._tween=null,!t||Ap.reduced||!this.animations)this._setMix(n),this.stage?.render(this.stage.time||0,16);else{let e={v:this.themeMix};this._tween=Ep.to(e,{v:n,duration:Tm,ease:`power1.inOut`,onUpdate:()=>this._setMix(e.v),onComplete:()=>this._setMix(n)})}this._emit(`theme`)}}_setMix(e){this.themeMix=e,Pp.uLight.value=e,this.stage?.setThemeMix(e)}toggleTheme(){this.setTheme(!this.light,{animate:!0})}start(){window.addEventListener(`keydown`,e=>{if(e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;t&&(t.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))||(e.key===`t`||e.key===`T`)&&this.toggleTheme()})}},Om={enabled:!0,samples:26,sampleMs:14,subdivide:2,headWidth:5.5,taper:1.3,fadePow:1.6,coreAlpha:.9,glowLayers:[[4,.04],[2.6,.065],[1.6,.1]],stiffness:380,damping:30,headSize:14,breathe:.03,sparkSpeed:1150,sparkMax:48,sparkLifeMs:560,sparkEveryMs:28,sparkSize:3,leaveFadeMs:260,light:{headWidth:2.5,coreAlpha:.72,dot:6}},km=16,Am=class{constructor(e,t){let n=Om;this.stage=e,this.field=t;let r=matchMedia(`(hover: none), (pointer: coarse)`).matches;if(this.on=n.enabled&&!Ap.reduced&&!r,!this.on)return;this.theme=Np(),this.canvas=document.createElement(`canvas`),this.canvas.id=`trail`,this.canvas.setAttribute(`aria-hidden`,`true`),this.canvas.setAttribute(`data-non-report`,``),document.body.appendChild(this.canvas),this.ctx=this.canvas.getContext(`2d`),this.dpr=1,this.w=1,this.h=1;let i=n.samples;this.sx=new Float32Array(i),this.sy=new Float32Array(i),this.head=0,this.acc=0;let a=i*n.subdivide+4;this.px=new Float32Array(a),this.py=new Float32Array(a),this.lx=new Float32Array(a),this.ly=new Float32Array(a),this.tx=this.ty=0,this.hx=this.hy=0,this.vx=this.vy=0,this.speed=0,this.inside=!1,this.seen=!1,this.alpha=0,this.lastMove=-1e9,this.fresh=!0;let o=n.sparkMax;this.ex=new Float32Array(o),this.ey=new Float32Array(o),this.evx=new Float32Array(o),this.eyv=new Float32Array(o),this.eage=new Float32Array(o).fill(1e9),this.sparkTimer=0,this.light=0,this.hit=new Z,this.dir=new Z,this.glowOn=!!t,this._buildStyles(),this._buildSprites(),window.addEventListener(`pointermove`,e=>this._move(e),{passive:!0}),window.addEventListener(`mouseout`,e=>{e.relatedTarget||(this.inside=!1)}),document.addEventListener(`mouseenter`,()=>this.fresh=!0),window.addEventListener(`blur`,()=>this.inside=!1),this._resize(),window.addEventListener(`resize`,()=>this._resize())}_buildStyles(){let e=Om;this._light=Dm.themeMix>.5;let t=this.theme.amberHot.map(e=>Math.round(e*255)),n=this.theme.amber.map(e=>Math.round(e*255));this._light&&(t=n=Gp(this.theme.amber).map(e=>Math.round(e*255))),this.styles=[];let r=this._light?e.glowLayers.map(()=>0).concat(e.light.coreAlpha):e.glowLayers.map(e=>e[1]).concat(e.coreAlpha);for(let i of r){let r=[];for(let a=0;a<km;a++){let o=(a+.5)/km,s=t.map((e,t)=>Math.round(e+(n[t]-e)*o));r.push(`rgba(${s[0]},${s[1]},${s[2]},${(i*(1-o)**e.fadePow).toFixed(4)})`)}this.styles.push(r)}}_buildSprites(){let e=this._light,t=(e?Gp(this.theme.amber):this.theme.amberHot).map(e=>Math.round(e*255)).join(`,`),n=(e?Gp(this.theme.amber):this.theme.amber).map(e=>Math.round(e*255)).join(`,`),r=document.createElement(`canvas`);r.width=r.height=64;let i=r.getContext(`2d`),a=i.createRadialGradient(32,32,0,32,32,32);e?(a.addColorStop(0,`rgba(${t},1)`),a.addColorStop(.42,`rgba(${t},0.92)`),a.addColorStop(.5,`rgba(${t},0)`),a.addColorStop(1,`rgba(${t},0)`)):(a.addColorStop(0,`rgba(${t},1)`),a.addColorStop(.18,`rgba(${t},0.85)`),a.addColorStop(.5,`rgba(${n},0.25)`),a.addColorStop(1,`rgba(${n},0)`)),i.fillStyle=a,i.fillRect(0,0,64,64),this.dotSprite=r}_resize(){let e=Math.min(devicePixelRatio||1,2);this.dpr=e,this.w=innerWidth,this.h=innerHeight,this.canvas.width=Math.round(this.w*e),this.canvas.height=Math.round(this.h*e),this._drawn=!1}_move(e){e.pointerType!==`touch`&&(this.tx=e.clientX,this.ty=e.clientY,this.lastMove=performance.now(),this.inside&&!this.fresh&&this.seen||(this.hx=this.tx,this.hy=this.ty,this.vx=this.vy=0,this.sx.fill(this.tx),this.sy.fill(this.ty),this.eage.fill(1e9),this.fresh=!1),this.inside=!0,this.seen=!0)}setEnabled(e){this.canvas&&(this.on=!!e,this.canvas.hidden=!this.on,this.on||(this.inside=!1,this.alpha=0,this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this._drawn=!1))}update(e,t){if(!this.on)return;let n=Math.min(t,50)/1e3;this._updateLight(n),Dm.themeMix>.5!==this._light&&(this._buildStyles(),this._buildSprites()),this._updateTrail(n,t)}_updateLight(e){if(!this.glowOn||!this.stage||this.stage.paused)return;let t=cm.cursor,n=this.field.uniforms,r=this.stage.canvas.getBoundingClientRect(),i=this.inside&&r.width>1&&r.height>1&&this.tx>=r.left&&this.tx<=r.right&&this.ty>=r.top&&this.ty<=r.bottom&&performance.now()-this.lastMove<t.idleMs,a=i?t.inTau:t.outTau;this.light+=(+!!i-this.light)*(1-Math.exp(-e/a));let o=this.light*this.field.mapWeight;if(o<.002){n.uCursorStrength.value=0;return}let s=(this.tx-r.left)/r.width*2-1,c=-((this.ty-r.top)/r.height)*2+1,l=this.stage.camera;if(this.dir.set(s,c,.5).unproject(l).sub(l.position),this.dir.y>-1e-5){n.uCursorStrength.value=0;return}let u=-l.position.y/this.dir.y;this.hit.copy(this.dir).multiplyScalar(u).add(l.position),n.uCursor.value.copy(this.hit),n.uCursorStrength.value=o,n.uCursorRadius.value=t.radius*(l.position.distanceTo(this.hit)/t.refDistance)}_updateTrail(e,t){let n=Om,r=+!!this.inside,i=t/n.leaveFadeMs;if(this.alpha+=Math.max(-i,Math.min(i,r-this.alpha)),this.alpha<=.002&&!this.inside){this._drawn&&=(this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),!1);return}if(!this.seen)return;let a=(this.tx-this.hx)*n.stiffness-this.vx*n.damping,o=(this.ty-this.hy)*n.stiffness-this.vy*n.damping;this.vx+=a*e,this.vy+=o*e,this.hx+=this.vx*e,this.hy+=this.vy*e;let s=Math.hypot(this.vx,this.vy);this.speed+=(s-this.speed)*Math.min(1,e*12),this.acc+=Math.min(t,60);let c=0;for(;this.acc>=n.sampleMs&&c++<5;)this.acc-=n.sampleMs,this.head=(this.head+1)%n.samples,this.sx[this.head]=this.hx,this.sy[this.head]=this.hy;this.sparkTimer-=t,this.inside&&this.speed>n.sparkSpeed&&this.sparkTimer<=0&&(this.sparkTimer=n.sparkEveryMs,this._spawn());let l=this.ctx;l.setTransform(this.dpr,0,0,this.dpr,0,0),l.clearRect(0,0,this.w,this.h),l.globalCompositeOperation=this._light?`source-over`:`lighter`,l.globalAlpha=this.alpha,this._drawRibbon(l),this._light||this._drawEmbers(l,t/1e3),this._drawHead(l),l.globalAlpha=1,this._drawn=!0}_spawn(){let e=Om;for(let t=0;t<e.sparkMax;t++)if(this.eage[t]>=e.sparkLifeMs){let e=this.speed||1;this.ex[t]=this.hx+(Math.random()-.5)*4,this.ey[t]=this.hy+(Math.random()-.5)*4,this.evx[t]=-(this.vx/e)*60*Math.random()+(Math.random()-.5)*90,this.eyv[t]=-(this.vy/e)*60*Math.random()+(Math.random()-.5)*90,this.eage[t]=0;return}}_drawEmbers(e,t){let n=Om,r=Math.exp(-t*3.2);for(let i=0;i<n.sparkMax;i++){if(this.eage[i]>=n.sparkLifeMs)continue;this.eage[i]+=t*1e3,this.evx[i]*=r,this.eyv[i]*=r,this.ex[i]+=this.evx[i]*t,this.ey[i]+=this.eyv[i]*t;let a=1-this.eage[i]/n.sparkLifeMs;if(a<=0)continue;let o=n.sparkSize*(.6+.4*a);e.globalAlpha=this.alpha*a*a,e.drawImage(this.dotSprite,this.ex[i]-o/2,this.ey[i]-o/2,o,o)}e.globalAlpha=this.alpha}_drawHead(e){let t=Om,n=performance.now()/1e3,r=1+t.breathe*Math.sin(n*2.4),i=this._light?t.light.dot:t.headSize*r*(1+Math.min(this.speed/4e3,.5));e.drawImage(this.dotSprite,this.hx-i/2,this.hy-i/2,i,i)}_drawRibbon(e){let t=Om,n=t.samples,r=t.subdivide,i=this.px,a=this.py,o=0;i[o]=this.hx,a[o++]=this.hy;let s=this.hx,c=this.hy,l=this.hx,u=this.hy;for(let e=0;e<n;e++){let t=(this.head-e+n)%n,d=this.sx[t],f=this.sy[t],p=(l+d)/2,m=(u+f)/2;if(e===0)i[o]=p,a[o++]=m;else for(let e=1;e<=r;e++){let t=e/r,n=(1-t)*(1-t),d=2*(1-t)*t,f=t*t;i[o]=n*s+d*l+f*p,a[o++]=n*c+d*u+f*m}s=p,c=m,l=d,u=f}let d=0;for(let e=1;e<o;e++)d+=Math.abs(i[e]-i[e-1])+Math.abs(a[e]-a[e-1]);if(d<1.5)return;let f=o-1;for(let e=0;e<=f;e++){let t=Math.max(0,e-1),n=Math.min(f,e+1),r=i[n]-i[t],o=a[n]-a[t],s=Math.hypot(r,o);s<1e-4?(r=1,o=0):(r/=s,o/=s),this.lx[e]=-o,this.ly[e]=r}let p=t.glowLayers.length+1,m=this._light?t.light.headWidth:t.headWidth;for(let n=this._light?p-1:0;n<p;n++){let r=n<p-1?t.glowLayers[n][0]:1,o=this.styles[n];for(let n=0;n<f;n++){let s=n/f,c=(n+1)/f,l=m*r*(1-s)**t.taper/2,u=m*r*(1-c)**t.taper/2;if(l<.05)break;e.fillStyle=o[Math.min(15,(s+c)*.5*km|0)],e.beginPath(),e.moveTo(i[n]+this.lx[n]*l,a[n]+this.ly[n]*l),e.lineTo(i[n+1]+this.lx[n+1]*u,a[n+1]+this.ly[n+1]*u),e.lineTo(i[n+1]-this.lx[n+1]*u,a[n+1]-this.ly[n+1]*u),e.lineTo(i[n]-this.lx[n]*l,a[n]-this.ly[n]*l),e.closePath(),e.fill()}}}},jm=`1.3.27`;function Mm(e,t,n){return Math.max(e,Math.min(t,n))}function Nm(e,t,n){return(1-n)*e+n*t}function Pm(e,t,n,r){return Nm(e,t,1-Math.exp(-n*r))}function Fm(e,t){return(e%t+t)%t}var Im=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(e){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;let n=Mm(0,this.currentTime/this.duration,1);t=n>=1;let r=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=Pm(this.value,this.to,this.lerp*60,e),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:a,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,a?.(),this.onUpdate=o}};function Lm(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(this,r)},t)}}var Rm=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){this.wrapper=e,this.content=t,n&&(this.debouncedResize=Lm(this.resize,r),this.wrapper instanceof Window?window.addEventListener(`resize`,this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener(`resize`,this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},zm=class{events={};emit(e,...t){let n=this.events[e]||[];for(let e=0,r=n.length;e<r;e++)n[e]?.(...t)}on(e,t){return this.events[e]?this.events[e].push(t):this.events[e]=[t],()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}off(e,t){this.events[e]=this.events[e]?.filter(e=>t!==e)}destroy(){this.events={}}},Bm=100/6,Vm={passive:!1};function Hm(e,t){return e===1?Bm:e===2?t:1}var Um=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new zm;constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){this.element=e,this.options=t,window.addEventListener(`resize`,this.onWindowResize),this.onWindowResize(),this.element.addEventListener(`wheel`,this.onWheel,Vm),this.element.addEventListener(`touchstart`,this.onTouchStart,Vm),this.element.addEventListener(`touchmove`,this.onTouchMove,Vm),this.element.addEventListener(`touchend`,this.onTouchEnd,Vm)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener(`resize`,this.onWindowResize),this.element.removeEventListener(`wheel`,this.onWheel,Vm),this.element.removeEventListener(`touchstart`,this.onTouchStart,Vm),this.element.removeEventListener(`touchmove`,this.onTouchMove,Vm),this.element.removeEventListener(`touchend`,this.onTouchEnd,Vm)}onTouchStart=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit(`scroll`,{deltaX:0,deltaY:0,event:e})};onTouchMove=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit(`scroll`,{deltaX:r,deltaY:i,event:e})};onTouchEnd=e=>{this.emitter.emit(`scroll`,{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})};onWheel=e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e,i=Hm(r,this.window.width),a=Hm(r,this.window.height);t*=i,n*=a,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit(`scroll`,{deltaX:t,deltaY:n,event:e})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Wm=e=>Math.min(1,1.001-2**(-10*e)),Gm=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia(`(prefers-reduced-motion: reduce)`);isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Im;emitter=new zm;dimensions;virtualScroll;constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:a=.075,touchInertiaExponent:o=1.7,duration:s,easing:c,lerp:l=.1,infinite:u=!1,orientation:d=`vertical`,gestureOrientation:f=d===`horizontal`?`both`:`vertical`,touchMultiplier:p=1,wheelMultiplier:m=1,autoResize:h=!0,prevent:g,virtualScroll:_,overscroll:v=!0,autoRaf:y=!1,anchors:b=!1,autoToggle:x=!1,allowNestedScroll:S=!1,__experimental__naiveDimensions:C=!1,naiveDimensions:w=C,stopInertiaOnNavigate:T=!1,respectReducedMotion:E=!0}={}){window.lenisVersion=jm,window.lenis||(window.lenis={}),window.lenis.version=jm,d===`horizontal`&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),e&&e!==document.documentElement||(e=window),typeof s==`number`&&typeof c!=`function`?c=Wm:typeof c==`function`&&typeof s!=`number`&&(s=1),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:a,touchInertiaExponent:o,duration:s,easing:c,lerp:l,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:p,wheelMultiplier:m,autoResize:h,prevent:g,virtualScroll:_,overscroll:v,autoRaf:y,anchors:b,autoToggle:x,allowNestedScroll:S,naiveDimensions:w,stopInertiaOnNavigate:T,respectReducedMotion:E},this.dimensions=new Rm(e,t,{autoResize:h}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.addEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener(`click`,this.onClick),this.options.wrapper.addEventListener(`pointerdown`,this.onPointerDown),this.virtualScroll=new Um(n,{touchMultiplier:p,wheelMultiplier:m}),this.virtualScroll.on(`scroll`,this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener(`transitionend`,this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.removeEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener(`pointerdown`,this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener(`click`,this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}onScrollEnd=e=>{e instanceof CustomEvent||(this.isScrolling===`smooth`||this.isScrolling===!1)&&e.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent(`scrollend`,{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let e=this.isHorizontal?`overflow-x`:`overflow-y`;return getComputedStyle(this.rootElement)[e]}checkOverflow(){[`hidden`,`clip`].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=e=>{e.propertyName?.includes(`overflow`)&&e.target===this.rootElement&&this.checkOverflow()};setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:`instant`}):this.options.wrapper.scrollTo({top:e,behavior:`instant`})}onClick=e=>{let t=e.composedPath().filter(e=>e instanceof HTMLAnchorElement&&e.href).map(e=>new URL(e.href)),n=new URL(window.location.href);if(this.options.anchors){let e=t.find(e=>n.host===e.host&&n.pathname===e.pathname&&e.hash);if(e){let t=typeof this.options.anchors==`object`&&this.options.anchors?this.options.anchors:void 0,n=decodeURIComponent(e.hash);this.scrollTo(n,t);return}}this.options.stopInertiaOnNavigate&&t.some(e=>n.host===e.host&&n.pathname!==e.pathname)&&this.reset()};onPointerDown=e=>{e.button===1&&this.reset()};isTouchOnSelectionHandle(e){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let n=e.targetTouches[0]??e.changedTouches[0];if(!n)return!1;let r=t.getRangeAt(0).getClientRects();if(r.length===0)return!1;let i=r[0],a=r[r.length-1],o=Math.hypot(n.clientX-i.left,n.clientY-i.top)<=40,s=Math.hypot(n.clientX-a.right,n.clientY-a.bottom)<=40;return o||s}onVirtualScroll=e=>{if(typeof this.options.virtualScroll==`function`&&this.options.virtualScroll(e)===!1)return;let{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit(`virtual-scroll`,{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;let i=r.type.includes(`touch`),a=r.type.includes(`wheel`);if(i&&this.isIos&&(r.type===`touchstart`&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(r)),this._isDraggingSelection)){r.type===`touchend`&&(this._isDraggingSelection=!1);return}this.isTouching=r.type===`touchstart`||r.type===`touchmove`;let o=t===0&&n===0;if(this.options.syncTouch&&i&&r.type===`touchstart`&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let s=this.options.gestureOrientation===`vertical`&&n===0||this.options.gestureOrientation===`horizontal`&&t===0;if(o||s)return;let c=r.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let l=this.options.prevent,u=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`;if(c.find(e=>e instanceof HTMLElement&&(typeof l==`function`&&l?.(e)||e.hasAttribute?.(`data-lenis-prevent`)||u===`vertical`&&e.hasAttribute?.(`data-lenis-prevent-vertical`)||u===`horizontal`&&e.hasAttribute?.(`data-lenis-prevent-horizontal`)||i&&e.hasAttribute?.(`data-lenis-prevent-touch`)||a&&e.hasAttribute?.(`data-lenis-prevent-wheel`)||this.options.allowNestedScroll&&this.hasNestedScroll(e,{deltaX:t,deltaY:n}))))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&a)){this.isScrolling=`native`,this.animate.stop(),r.lenisStopPropagation=!0;return}let d=n;this.options.gestureOrientation===`both`?d=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation===`horizontal`&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();let f=i&&this.options.syncTouch,p=i&&r.type===`touchend`;p&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit(`scroll`,this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent)this._preventNextNativeScrollEvent=!1;else if(this.isScrolling===!1||this.isScrolling===`native`){let e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling=`native`),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.options.autoToggle?this.rootElement.style.removeProperty(`overflow`):this.internalStart())}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){this.isStopped||(this.options.autoToggle?this.rootElement.style.setProperty(`overflow`,`clip`):this.internalStop())}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=e=>{let t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,programmatic:i=!0,lerp:a=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:s=i?this.options.easing:void 0,onStart:c,onComplete:l,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?n=!0:(a=1,o=void 0,s=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=e,p=t;if(typeof f==`string`&&[`top`,`left`,`start`,`#`].includes(f))f=0;else if(typeof f==`string`&&[`bottom`,`right`,`end`].includes(f))f=this.limit;else{let e=null;if(typeof f==`string`?(e=f.startsWith(`#`)?document.getElementById(f.slice(1)):document.querySelector(f),e||(f===`#top`?f=0:console.warn(`Lenis: Target not found`,f))):f instanceof Element&&(e=f),e){if(this.options.wrapper!==window){let e=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?e.left:e.top}let t=e.getBoundingClientRect(),n=getComputedStyle(e),r=this.isHorizontal?Number.parseFloat(n.scrollMarginLeft):Number.parseFloat(n.scrollMarginTop),i=getComputedStyle(this.rootElement),a=this.isHorizontal?Number.parseFloat(i.scrollPaddingLeft):Number.parseFloat(i.scrollPaddingTop);f=(this.isHorizontal?t.left:t.top)+this.animatedScroll-(Number.isNaN(r)?0:r)-(Number.isNaN(a)?0:a)}}if(typeof f==`number`){if(f+=p,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let e=f-this.animatedScroll;e>this.limit/2?f-=this.limit:e<-this.limit/2&&(f+=this.limit)}}else f=Mm(0,f,this.limit);f===this.targetScroll?(c?.(this),l?.(this)):(this.userData=d??{},n?(this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()})):(i||(this.targetScroll=f),typeof o==`number`&&typeof s!=`function`?s=Wm:typeof s==`function`&&typeof o!=`number`&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:s,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=`smooth`,c?.(this)},onUpdate:(e,t)=>{this.isScrolling=`smooth`,this.lastVelocity=this.velocity,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),i&&(this.targetScroll=e),t||this.emit(),t&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})))}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(e,{deltaX:t,deltaY:n}){let r=Date.now();e._lenis||={};let i=e._lenis,a,o,s,c,l,u,d,f,p,m;if(r-(i.time??0)>2e3){i.time=Date.now();let t=window.getComputedStyle(e);if(i.computedStyle=t,a=[`auto`,`overlay`,`scroll`].includes(t.overflowX),o=[`auto`,`overlay`,`scroll`].includes(t.overflowY),l=[`auto`].includes(t.overscrollBehaviorX),u=[`auto`].includes(t.overscrollBehaviorY),i.hasOverflowX=a,i.hasOverflowY=o,!(a||o))return!1;d=e.scrollWidth,f=e.scrollHeight,p=e.clientWidth,m=e.clientHeight,s=d>p,c=f>m,i.isScrollableX=s,i.isScrollableY=c,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=p,i.clientHeight=m,i.hasOverscrollBehaviorX=l,i.hasOverscrollBehaviorY=u}else s=i.isScrollableX,c=i.isScrollableY,a=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,p=i.clientWidth,m=i.clientHeight,l=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(a&&s||o&&c))return!1;let h=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`,g,_,v,y,b,x;if(h===`horizontal`)g=Math.round(e.scrollLeft),_=d-p,v=t,y=a,b=s,x=l;else if(h===`vertical`)g=Math.round(e.scrollTop),_=f-m,v=n,y=o,b=c,x=u;else return!1;return!x&&(g>=_||g<=0)||(v>0?g<_:g>0)&&y&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?`x`:`y`]}get isHorizontal(){return this.options.orientation===`horizontal`}get actualScroll(){let e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?Fm(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling===`smooth`}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let e=`lenis`;return this.options.autoToggle&&(e+=` lenis-autoToggle`),this.isStopped&&(e+=` lenis-stopped`),this.isLocked&&(e+=` lenis-locked`),this.isScrolling&&(e+=` lenis-scrolling`),this.isScrolling===`smooth`&&(e+=` lenis-smooth`),e}updateClassName(){this.cleanUpClassName(),this.className.split(` `).forEach(e=>{this.rootElement.classList.add(e)})}cleanUpClassName(){for(let e of Array.from(this.rootElement.classList))(e===`lenis`||e.startsWith(`lenis-`))&&this.rootElement.classList.remove(e)}},Km=e=>Math.min(1,Math.max(0,e)),qm=e=>(e=Km(e),e*e*(3-2*e)),Jm=e=>(e=Km(e),e*e*e*(e*(e*6-15)+10)),Ym=(e,t,n)=>Km((e-t)/(n-t));function Xm(e,t,n,r,i=r){e.x=t.x+(n.x-t.x)*r,e.y=t.y+(n.y-t.y)*r,e.z=t.z+(n.z-t.z)*r,e.distance=Math.exp(Math.log(t.distance)+(Math.log(n.distance)-Math.log(t.distance))*r),e.azimuth=t.azimuth+(n.azimuth-t.azimuth)*i,e.polar=t.polar+(n.polar-t.polar)*i,e.fit=(t.fit??.55)+((n.fit??.55)-(t.fit??.55))*r,e.flat=(t.flat??0)+((n.flat??0)-(t.flat??0))*i}function Zm(e,t){e.x=t.x,e.y=t.y,e.z=t.z,e.distance=t.distance,e.azimuth=t.azimuth,e.polar=t.polar,e.fit=t.fit??.55,e.flat=t.flat??0}var Qm=`http://www.w3.org/2000/svg`,$m=new Set,eh={};function th(){return eh}function nh(){for(let e of $m)e.hideAll()}function rh(){let e=Np();return{amber:e.amber,amberHot:e.amberHot,slate:om(`#6f89b0`),slateDim:om(`#586f92`),red:e.red,teal:om(`#4fc1b8`),violet:om(`#a98bff`)}}function ih({x:e=0,y:t=0,z:n=0,distance:r=60,fit:i=1}={}){return{x:e,y:t,z:n,distance:r,azimuth:0,polar:90,fit:i,flat:1}}function ah(e,{enter:t=null,exit:n=null}={}){let r=1;return t&&(r*=qm(Ym(e,t[0],t[1]))),n&&(r*=1-qm(Ym(e,n[0],n[1]))),r<.005?0:Math.min(1,r)}function oh(e,t,n,r){let i=t-e||1,a=r-n,o=t=>n+(t-e)/i*a;return o.domain=[e,t],o.range=[n,r],o.clamp=n=>o(Math.min(Math.max(e,t),Math.max(Math.min(e,t),n))),o.invert=t=>e+(t-n)/(a||1)*i,o}function sh(e,t,n,r){let i=Math.log(Math.max(1e-6,e)),a=Math.log(Math.max(1e-6,t))-i||1,o=r-n,s=e=>n+(Math.log(Math.max(1e-6,e))-i)/a*o;return s.domain=[e,t],s.range=[n,r],s.clamp=n=>s(Math.min(Math.max(e,t),Math.max(Math.min(e,t),n))),s.invert=e=>Math.exp(i+(e-n)/(o||1)*a),s}function ch(e,t,n,{paddingInner:r=.24,paddingOuter:i=.14}={}){let a=Math.max(1,e.length),o=n-t,s=a-r+2*i,c=o/Math.max(s,1e-6),l=c*(1-r),u=new Map(e.map((e,t)=>[e,t])),d=e=>typeof e==`number`?e:u.get(e)??0,f=e=>t+(i+d(e))*c,p=e=>f(e)+l*.5;return p.domain=[...e],p.range=[t,n],p.step=c,p.bandwidth=l,p.start=f,p.end=e=>f(e)+l,p}function lh({x:e,y:t,width:n,height:r,xScale:i=null,yScale:a=null}){let o=e,s=e+n,c=t,l=t+r,u=i||oh(0,1,o,s),d=a||oh(0,1,c,l);return{left:o,right:s,bottom:c,top:l,width:n,height:r,cx:(o+s)*.5,cy:(c+l)*.5,xScale:u,yScale:d,fx:u,fy:d,point:(e,t)=>[u(e),d(t),0],barRect:(e,t,n,r)=>({x0:Math.min(e,t),x1:Math.max(e,t),y0:Math.min(n,r),y1:Math.max(n,r)})}}function uh(e){let t=new Float32Array(e*3),n=new Float32Array(e*3),r=new Float32Array(e),i=new Float32Array(e),a=new Float32Array(e);for(let n=0;n<e;n++)t[n*3+1]=-24;return{positions:t,colors:n,sizes:r,alphas:i,order:a}}function dh(e,t,{minPerItem:n=24}={}){let r=e.length,i=t.reduce((e,t)=>e+Math.max(0,t),0)||1,a=t.map(e=>e>0?Math.max(n,Math.round(e/i*r)):0),o=a.reduce((e,t)=>e+t,0);if(o>r){let e=r/o;for(let t=0;t<a.length;t++)a[t]=Math.floor(a[t]*e);o=a.reduce((e,t)=>e+t,0)}let s=r-o,c=t.map((e,t)=>t).sort((e,n)=>t[n]-t[e]);for(let e=0;e<c.length&&s>0;e++)t[c[e]]>0&&(a[c[e]]++,s--);let l=[],u=0;for(let t=0;t<a.length;t++)l.push(e.slice(u,u+a[t])),u+=a[t];return l}function fh(e,t,n,{color:r,alpha:i=.88,size:a=1,orderBase:o=0,orderSpan:s=.25,orientation:c=`vertical`}={}){let l=t.length,u=Math.min(e.x0,e.x1),d=Math.max(e.x0,e.x1),f=Math.min(e.y0,e.y1),p=Math.max(e.y0,e.y1),m=d-u,h=p-f;if(l===0||m<1e-4||h<1e-4)return;let{positions:g,colors:_,sizes:v,alphas:y,order:b}=n,[x,S,C]=r;if(l===1){let e=t[0];g[e*3]=(u+d)*.5,g[e*3+1]=(f+p)*.5,g[e*3+2]=0,_[e*3]=x,_[e*3+1]=S,_[e*3+2]=C,y[e]=i,v[e]=a,b[e]=o;return}if(c===`horizontal`){let e=Math.max(1,Math.min(l,Math.round(Math.sqrt(m/h*l)))),n=Math.floor(l/e),r=l-n*e,c=m/e,w=0;for(let l=0;l<e;l++){let m=n+ +(l<r);if(m===0)continue;let T=e===1?(u+d)*.5:u+(l+.5)*c,E=h/m;for(let n=0;n<m;n++){let r=t[w++];g[r*3]=T,g[r*3+1]=m===1?(f+p)*.5:f+(n+.5)*E,g[r*3+2]=0,_[r*3]=x,_[r*3+1]=S,_[r*3+2]=C,y[r]=i,v[r]=a,b[r]=o+l/Math.max(1,e-1)*s}}return}let w=Math.max(1,Math.min(l,Math.round(Math.sqrt(h/m*l)))),T=Math.floor(l/w),E=l-T*w,D=h/w,O=0;for(let e=0;e<w;e++){let n=T+ +(e<E);if(n===0)continue;let r=w===1?(f+p)*.5:f+(e+.5)*D,c=m/n;for(let l=0;l<n;l++){let f=t[O++];g[f*3]=n===1?(u+d)*.5:u+(l+.5)*c,g[f*3+1]=r,g[f*3+2]=0,_[f*3]=x,_[f*3+1]=S,_[f*3+2]=C,y[f]=i,v[f]=a,b[f]=o+e/Math.max(1,w-1)*s}}}function ph(e,t,n,r,{gap:i=.08,orderBase:a=0,orderSpan:o=.25}={}){let s=n.length;for(let c=0;c<s;c++){let l=n[c],u=c===0?l.y0:l.y0+i*.5,d=c===s-1?l.y1:l.y1-i*.5;d<=u||fh({x0:e,x1:t,y0:u,y1:d},l.indices,r,{color:l.color,alpha:l.alpha??.88,size:l.size??1,orderBase:a+c/Math.max(1,s)*o,orderSpan:o/Math.max(1,s),orientation:`vertical`})}}function mh(e,t,n,r,i,{color:a,alpha:o=.9,size:s=1,orderBase:c=0}={}){let l=r.length;if(l===0)return;let{positions:u,colors:d,sizes:f,alphas:p,order:m}=i,[h,g,_]=a,v=Math.max(1,Math.ceil(Math.sqrt(l*4/Math.PI))),y=[];for(;y.length<l;){y=[];for(let e=0;e<v;e++){let t=(e+.5)/v*2-1;for(let e=0;e<v;e++){let r=(e+.5)/v*2-1,i=r*r+t*t;i<=1&&y.push([r*n,t*n,i])}}y.length<l&&v++}y.sort((e,t)=>e[2]-t[2]);for(let n=0;n<l;n++){let i=r[n];u[i*3]=e+y[n][0],u[i*3+1]=t+y[n][1],u[i*3+2]=0,d[i*3]=h,d[i*3+1]=g,d[i*3+2]=_,p[i]=o,f[i]=s,m[i]=c+n/l*.15}}function hh(e,t,n){let{positions:r,colors:i,sizes:a,alphas:o,order:s}=n;for(let n=0;n<e.length;n++){let c=e[n],l=t(c);l&&(r[c*3]=l.x,r[c*3+1]=l.y,r[c*3+2]=0,i[c*3]=l.color[0],i[c*3+1]=l.color[1],i[c*3+2]=l.color[2],o[c]=l.alpha??.82,a[c]=l.size??.9,s[c]=l.order??0)}}function gh(e,t={}){let n=document.createElementNS(Qm,e);for(let[e,r]of Object.entries(t))n.setAttribute(e,String(r));return n}function _h(e,t){let{stage:n}=e,r=document.querySelector(`[data-viewport="${t}"]`),i=document.createElement(`div`);i.className=`ck-overlay`,i.dataset.ckFig=t,i.setAttribute(`aria-hidden`,`true`),i.setAttribute(`data-non-report`,``),i.style.display=`none`,i.style.opacity=`0`,r&&r.appendChild(i);let a=new Map;eh[t]=eh[t]||{};let o=new Z,s=new Z,c=0,l=0,u=``,d=(e,t,r,i)=>(o.set(e,t,0).project(n.camera),[(o.x*.5+.5)*r,(-o.y*.5+.5)*i]);function f(e,n){let r=document.createElement(`div`);r.className=`ck-step`,r.dataset.ckStep=String(e),r.style.display=`none`,r.style.opacity=`0`;let o=gh(`svg`,{class:`ck-svg`,"aria-hidden":`true`});r.appendChild(o);let s=[],c=[],l=n.marks||[],u=[],d=({a:e,b:t,kind:n=`gridline`,cls:r=``,dashed:i=!1,registerAxis:a=!0})=>{let c=Math.abs(e[1]-t[1])<1e-4?`horizontal`:Math.abs(e[0]-t[0])<1e-4?`vertical`:`other`,l=gh(`line`,{class:`ck-line ck-line-${n}${r?` ${r}`:``}${i?` is-dashed`:``}`,"data-kind":n,"data-orient":c});o.appendChild(l);let d={el:l,a:e,b:t,kind:n,orient:c,registerAxis:a};return s.push(d),a&&(c===`horizontal`||c===`vertical`)&&u.push(d),d},f=({text:e,html:t=null,at:n,role:i=`tick`,align:a=`center`,valign:o=`middle`,offset:s=[0,0],cls:l=``,categoryFor:u=null})=>{let d=document.createElement(`div`);d.className=`ck-text ck-${i} is-align-${a} is-valign-${o}${l?` ${l}`:``}`,u!=null&&(d.dataset.ckCategory=String(u)),t==null?d.textContent=e:d.innerHTML=t,r.appendChild(d);let f={el:d,at:n,offset:s,role:i};return c.push(f),f};for(let e of n.lines||[])d(e);let p=[];for(let e of n.ticks||[]){let t=gh(`line`,{class:`ck-line ck-line-tick${e.cls?` ${e.cls}`:``}`,"data-kind":`tick`});o.appendChild(t),p.push({el:t,at:e.at,dx:e.dx??0,dy:e.dy??0})}for(let e of n.labels||[])f(e);let m=null;if(n.legend&&n.legend.items?.length){let e=document.createElement(`div`);e.className=`ck-legend${n.legend.cls?` ${n.legend.cls}`:``}`;for(let t of n.legend.items){let n=document.createElement(`span`);n.className=`ck-legend-item`,n.innerHTML=`<span class="ck-swatch is-${t.color}" aria-hidden="true"></span><span class="ck-legend-label">${t.label}</span>`,e.appendChild(n)}r.appendChild(e),m={el:e,at:n.legend.at||null,align:n.legend.align||`left`,valign:n.legend.valign||`middle`,offset:n.legend.offset||[0,0]},m.at&&e.classList.add(`is-align-${m.align}`,`is-valign-${m.valign}`)}i.appendChild(r);let h={stepIndex:e,kind:n.kind||`bar`,stepEl:r,svg:o,lineNodes:s,tickNodes:p,textNodes:c,legendNode:m,markSpecs:l,axisSpecs:u,opacity:0};return a.set(e,h),eh[t][e]={kind:h.kind,marks:[],axes:[]},h}function p(e,r,i){e.svg.setAttribute(`viewBox`,`0 0 ${r} ${i}`);let a=[];for(let t of e.lineNodes){let[e,n]=d(t.a[0],t.a[1],r,i),[o,s]=d(t.b[0],t.b[1],r,i),c=Math.round(e*10)/10,l=Math.round(n*10)/10,u=Math.round(o*10)/10,f=Math.round(s*10)/10;t.el.setAttribute(`x1`,c),t.el.setAttribute(`y1`,l),t.el.setAttribute(`x2`,u),t.el.setAttribute(`y2`,f),t.registerAxis&&a.push({kind:t.kind,orientation:t.orient,x1:c,y1:l,x2:u,y2:f})}for(let t of e.tickNodes){let[e,n]=d(t.at[0],t.at[1],r,i),a=Math.round(e*10)/10,o=Math.round(n*10)/10;t.el.setAttribute(`x1`,a),t.el.setAttribute(`y1`,o),t.el.setAttribute(`x2`,a+t.dx),t.el.setAttribute(`y2`,o+t.dy)}for(let t of e.textNodes){let[e,n]=d(t.at[0],t.at[1],r,i),a=Math.round((e+t.offset[0])*10)/10,o=Math.round((n+t.offset[1])*10)/10;t.el.style.transform=`translate3d(${a}px, ${o}px, 0)`}if(e.legendNode?.at){let[t,n]=d(e.legendNode.at[0],e.legendNode.at[1],r,i),a=Math.round((t+e.legendNode.offset[0])*10)/10,o=Math.round((n+e.legendNode.offset[1])*10)/10;e.legendNode.el.style.transform=`translate3d(${a}px, ${o}px, 0)`}let c=[];for(let t of e.markSpecs){let e=t.rect;o.set(e.x0,e.y0,0).project(n.camera),s.set(e.x1,e.y1,0).project(n.camera);let a=(o.x*.5+.5)*r,l=(-o.y*.5+.5)*i,u=(s.x*.5+.5)*r,d=(-s.y*.5+.5)*i,f=Math.round(Math.min(a,u)*100)/100,p=Math.round(Math.max(a,u)*100)/100,m=Math.round(Math.min(l,d)*100)/100,h=Math.round(Math.max(l,d)*100)/100;c.push({label:t.label,group:t.group||`default`,orientation:t.orientation||`vertical`,value:t.value,baseValue:t.baseValue??0,stacked:!!t.stacked,categoryLabel:t.categoryLabel??t.label,rect:{left:f,top:m,right:p,bottom:h,width:Math.round((p-f)*100)/100,height:Math.round((h-m)*100)/100}})}eh[t][e.stepIndex]={kind:e.kind,marks:c,axes:a}}function m(e=!1){if(i.style.display===`none`||!n.container||n.container!==r)return;let t=n.width,o=n.height;if(t<10||o<10)return;let s=n.camera.projectionMatrix.elements,d=n.camera.position,f=`${t}x${o}|${d.x.toFixed(3)},${d.y.toFixed(3)},${d.z.toFixed(3)}|${s[0].toFixed(4)},${s[5].toFixed(4)}`;if(e||f!==u||t!==c||o!==l){c=t,l=o,u=f;for(let e of a.values())e.opacity>.005&&p(e,t,o)}}n.onFrame(()=>m(!1)),n.onResize(()=>m(!0));let h={root:i,defineStep:f,setVisibilities(e){let t=0;for(let[n,r]of Object.entries(e)){let e=Number(n),i=a.get(e);if(!i)continue;let o=r<.005?0:Math.min(1,r);i.opacity=o,o>t&&(t=o),o<=0?(i.stepEl.style.opacity=`0`,i.stepEl.style.display=`none`):(i.stepEl.style.display=``,i.stepEl.style.opacity=String(o))}t<=0?(i.style.opacity=`0`,i.style.display=`none`):(i.style.display=``,i.style.opacity=`1`,m(!0))},hideAll(){for(let e of a.values())e.opacity=0,e.stepEl.style.opacity=`0`,e.stepEl.style.display=`none`;i.style.opacity=`0`,i.style.display=`none`}};return $m.add(h),h}var vh={x:1.5,y:0,z:.5,distance:64,azimuth:-10,polar:50,fit:.55},yh={id:`__fallback`,heightVh:145,mount(e){let{registerLayout:t,registerMapLike:n}=e,r=Np();n(`active_map`),t(`active_map`,e=>{let t=e.count,{x:n,y:i,drop_stage:a,price:o,rand:s}=e.cols,c=new Float32Array(t*3),l=new Float32Array(t*3),u=new Float32Array(t),d=new Float32Array(t),f=new Map,p=e=>Math.floor(n[e]/.28)*8192+Math.floor(i[e]/.28);for(let e=0;e<t;e++)a[e]===0&&f.set(p(e),(f.get(p(e))||0)+1);let[m,,h]=e.meta.stats.price_q,g=Math.log(m),_=Math.log(h)-g;for(let e=0;e<t;e++){if(c[e*3]=n[e],c[e*3+1]=(s[e]-.5)*.04,c[e*3+2]=-i[e],a[e]!==0){d[e]=0,u[e]=0;continue}let t=Math.max(1,(f.get(p(e))||1)/12);l[e*3]=r.amber[0],l[e*3+1]=r.amber[1],l[e*3+2]=r.amber[2],d[e]=.84/t**.54;let m=Number.isFinite(o[e])?Math.min(1,Math.max(0,(Math.log(Math.max(15,o[e]))-g)/_)):.5;u[e]=(.85+.35*m)/t**.2}return{positions:c,colors:l,sizes:u,alphas:d}})},enter(){},leave(){},update(e,t,n){let{rig:r,field:i,lines:a,env:o}=t,s=o.reduced?0:Math.sin(n*.14)*4;Zm(r,{...vh,azimuth:vh.azimuth+s+(e-.5)*14}),i.showLayout(`active_map`),i.setShape(0,0),i.setDrift(0),i.highlight(null),a.visibility=.85}},bh=180,xh=class{constructor({stage:e,field:t,lines:n,data:r,pins:i,sections:a,slots:o,scenes:s,onTocSync:c}){this.stage=e,this.field=t,this.lines=n,this.data=r,this.pins=i,this.sections=a,this.slots=o,this.onTocSync=c||null,this.sceneMap=new Map(s.map(e=>[e.id,e])),this.activeSlot=null,this.lenis=null,this._lenisTick=null,this._mounted=new Set,this.suspended=!1,this.ctx={stage:e,field:t,lines:n,data:r,pins:i,overlays:i?.root||null,rig:e?.rig,env:Ap,registerLayout:im,registerMapLike:dm,activeSlotId:null},this.setLenisEnabled(!0),Ep.ticker.lagSmoothing(0)}setLenisEnabled(e){e&&!Ap.reduced?this.lenis||(this.lenis=new Gm({autoRaf:!1,lerp:.12,wheelMultiplier:.95}),this._lenisTick=e=>this.lenis?.raf(e*1e3),Ep.ticker.add(this._lenisTick)):this.lenis&&=(this._lenisTick&&=(Ep.ticker.remove(this._lenisTick),null),this.lenis.destroy(),null)}lock(){this.lenis?this.lenis.stop():document.documentElement.classList.add(`is-locked`)}unlock(){this.lenis&&this.lenis.start(),document.documentElement.classList.remove(`is-locked`)}mount(){if(this.stage){let e=[...this.sceneMap.values(),yh];for(let t of e)this._mounted.has(t)||(t.mount?.(this.ctx),this._mounted.add(t))}for(let e of this.slots)e.scene=this.sceneMap.get(e.id)||yh,e._lastStep=-1}suspend(){this.suspended=!0,this.activeSlot&&(this.activeSlot.scene.finishIntro?.(this.ctx),this.activeSlot.scene.leave?.(this.ctx),this.activeSlot.viewportEl.classList.remove(`is-live`),this.activeSlot=null,this.ctx.activeSlotId=null),this.pins?.hideAll(),nh(),this.stage?.stop(),this.stage?.detach(),this.setLenisEnabled(!1)}resume(){this.suspended=!1,this.setLenisEnabled(!0)}scrollToElement(e,{offset:t=40,immediate:n=!1}={}){if(!e)return;let r=Math.max(0,e.getBoundingClientRect().top+window.scrollY-t);this._scrollToY(r,{immediate:n})}scrollToSection(e,{immediate:t=!1}={}){let n=this.sections.find(t=>t.id===e);if(!n)return;let r=e===`hero`?0:Math.max(0,n.el.getBoundingClientRect().top+window.scrollY-36);this._scrollToY(r,{immediate:t})}scrollToFigure(e,t=0,{immediate:n=!1}={}){let r=this.slots.find(t=>t.id===e);if(!r)return;if(r.isHero){this._scrollToY(0,{immediate:n});return}let i=r.wrapEl.getBoundingClientRect().top+window.scrollY,a=parseFloat(getComputedStyle(r.stickyEl).top)||56,o=r.stickyEl.offsetHeight,s=Math.max(0,r.wrapEl.offsetHeight-o),c=Math.max(0,i-a+s*Km(t));this._scrollToY(c,{immediate:n})}_scrollToY(e,{immediate:t=!1}={}){t||Ap.reduced||!this.lenis?(this.lenis?this.lenis.scrollTo(e,{immediate:!0,force:!0}):window.scrollTo(0,e),this.update(this.stage?.time||0,16),this.stage?.render(this.stage.time||0,16)):this.lenis.scrollTo(e,{duration:.95})}_slotProgress(e){if(e.isHero)return 0;let t=e.wrapEl.getBoundingClientRect(),n=parseFloat(getComputedStyle(e.stickyEl).top)||56,r=e.stickyEl.offsetHeight,i=e.wrapEl.offsetHeight-r;return i<=2?0:Km((n-t.top)/i)}_updateSlotCaption(e,t){if(e.isHero)return;e.progressFill&&(e.progressFill.style.transform=`scaleX(${t.toFixed(4)})`);let n=e.scene.captions;if(!n||!n.length)return;let r=0;for(let e=0;e<n.length;e++)t>=n[e].at-.001&&(r=e);if(r!==e._lastStep){e._lastStep=r,e.stepCaption&&(e.stepCaption.textContent=n[r].text),e.stepTag&&(e.stepTag.textContent=`${r+1} / ${n.length}`);for(let t=0;t<e.pips.length;t++)e.pips[t].classList.toggle(`is-active`,t===r)}}update(e,t){if(this.suspended||(typeof window<`u`&&window.__report&&!window.__report.charts&&(window.__report.charts=th()),this.onTocSync?.(this.activeSlot),!this.stage))return;if(window.innerWidth<900){this.stage.setPaused(!0);return}let n=window.innerHeight,r=n*.5,i=null,a=1/0;for(let e of this.slots){let t=e.viewportEl.getBoundingClientRect();if(t.height<10||t.bottom<-180||t.top>n+bh)continue;e.isHero||this._updateSlotCaption(e,this._slotProgress(e));let o=Math.abs((t.top+t.bottom)*.5-r);o<a&&(a=o,i=e)}if(i!==this.activeSlot){let e=this.activeSlot;e&&(e.scene.finishIntro?.(this.ctx),e.scene.leave?.(this.ctx),e.viewportEl.classList.remove(`is-live`)),this.pins?.hideAll(),nh(),this.stage?.rig&&(this.stage.rig.flat=0),this.field?.setPulse(0,0,0,0,0),this.field?.setPulse(1,0,0,0,0),this.field?.highlight(null),this.field?.setShape(0,0),this.field?.setDrift(0),this.lines&&(this.lines.visibility=0),this.activeSlot=i,this.ctx.activeSlotId=i?i.id:null,i?(i.viewportEl.classList.add(`is-live`),this.stage.attachTo(i.viewportEl),this.pins?.attachTo(i.viewportEl),i.scene.enter?.(this.ctx)):this.stage.setPaused(!0)}if(i){let n=this._slotProgress(i);this._updateSlotCaption(i,n),i.scene.update(n,this.ctx,e,t)}}},Sh=[{id:`a1-selection`,part:`Part A`,railLabel:`A1 Data selection`,blocks:[{type:`part-heading`,text:`Part A. Data selection and exploratory analysis`},{type:`section-heading`,text:`A1 Data selection`},{type:`subheading`,text:`Airbnb sample`},{type:`paragraph`,text:`We use the Inside Airbnb snapshot for Melbourne compiled on 16 September 2026 (Inside Airbnb, 2026): 25,715 listings and 90 fields, plus the calendar and reviews. We keep listings with a review since 1 January 2023. We chose Melbourne for three reasons. After cleaning, 15,463 active listings remain, enough to split by council, distance band and property type. The sample runs from CBD towers to farm stays 80 km out. And Inside Airbnb's neighbourhood field is the local government area (LGA), where Victoria publishes rents (Department of Families, Fairness and Housing [DFFH], 2026), so the two match on all 30 areas.`},{type:`subheading`,text:`External datasets`},{type:`table`,headers:[`Dataset`,`Publisher`,`Coverage`,`Accessed`],rows:[[`Long-term rents (main dataset): median weekly rents of new bonds by council, dwelling type and bedrooms`,`DFFH (2026), rental report (Australia only)`,`June 1999 to June 2026; we use September 2025 to June 2026`,`18 November 2026`],[`School terms and public holidays`,`Department of Government Services (2026), DataVic`,`2018 to 2030; term dates only to 2025`,`18 November 2026`],[`Major events (group-compiled)`,`Group 09 (2026), from organiser, venue and government pages`,`2021 to 2027: Grand Prix, Australian Open, Melbourne Cup Carnival, AFL Grand Final`,`18 November 2026`]]},{type:`paragraph`,text:`Files: External02_Group09.csv (rents), External03_Group09.csv (dates), External01_Group09.csv (events). Rents join to each entire home by council, dwelling type and bedrooms, and the other two by date. We built annual rent (last four quarterly medians, averaged, times 52), event-night flags, and distance to the nearest venue.`},{type:`subheading`,text:`Data decisions log`},{type:`table`,headers:[`Change Details`,`Reason and Justification`],rows:[[`Used listings.csv.gz; dropped 40 empty, link, metadata and duplicate columns (90 to 50)`,`The summary file lacks review scores, capacity and amenities.`],[`Removed listings never reviewed or last reviewed in 2022 or earlier (25,715 to 18,327)`,`No recent trading, and many are dormant.`],[`Parsed price from text; removed listings with no price (18,327 to 15,826), prices above the 99th percentile, $1,226 (to 15,667) and rows missing minimum nights, bedrooms, beds or bathrooms (to 15,463)`,`Price is needed almost everywhere, and placeholder prices distort averages. Missing room counts are dropped, since guessed counts would feed price comparisons.`],[`Kept one calendar row per listing, and the full calendar for events`,`Events need individual nights. Other analyses need only the unavailable share.`],[`Defined "popular" as the top 10% by reviews in 12 months (36 or more, 1,590 listings)`,`Airbnb publishes no bookings, and guests review only after a stay.`],[`Dropped crime, public transport and arrivals data`,`Crime and transport added nothing once CBD distance was known, and the arrivals gain was unstable.`],[`Matched Moreland to Merri-bek; derived school holidays from the gaps between terms`,`Old council name. The file's holiday rows have no source, stop in 2025 and skip weekends.`],[`Matched each entire home to its council's median rent by dwelling type and bedrooms (280 cabins and similar left out; 13 Cardinia flats have no rent)`,`Flats and houses rent differently.`],[`Treated revenue above 1.5 times annual rent as roughly break-even`,`Revenue is gross. With costs at 33%, revenue must reach 1 / (1 - 0.33), about 1.5 times the rent.`]]},{type:`paragraph`,text:`The final sample is 15,463 listings, 60.1% of the raw file, of which 12,389 are entire homes (80.1%), 2,943 private rooms (19.0%), 113 shared rooms and 18 hotel rooms. Data cleaning raised the entire-home share from 73.7% because private rooms were more often never reviewed (29.6% vs 13.5% of entire homes) or unpriced (34.3% vs 23.5%). The final mix therefore reflects the active market.`},{type:`paragraph`,text:`Because the never-reviewed rule also removes brand-new listings, the results describe established listings, not new entrants.`}]},{id:`a2-q1-popular`,part:`Part A`,railLabel:`A2 Q1 Popular listings`,blocks:[{type:`section-heading`,text:`A2 Guided analysis`},{type:`subheading`,text:`Question 1. What do the most popular listings look like?`},{type:`paragraph`,text:`We define a listing as popular if it is in the top 10% by reviews received in the 12 months before the snapshot: 36 or more reviews, which gives 1,590 listings (10.3%, slightly over 10% because of ties at 36). Airbnb publishes no bookings, and guests can only review after a stay, so recent reviews are our closest measure of demand. The 1,590 popular listings differ from the other 13,873 (Mann-Whitney and chi-square tests), with a median of 47 reviews in 12 months against 7.`},{type:`table`,headers:[`Characteristic`,`Popular`,`Others`],numericCols:[1,2],rows:[[`Entire home`,`93.3%`,`78.6%`],[`Superhost`,`79.7%`,`40.4%`],[`Median nightly price`,`$265`,`$267`],[`Median number of amenities`,`45`,`42`]]},{type:`paragraph`,text:`Superhost status is the largest difference: such listings are five times as likely to be popular (18.5% against 3.7%), though the badge goes to hosts who already have many stays, so part of this runs backwards. One-night minimums come next (16.4% popular against 1.5% with three nights), partly because short stays produce more reviews. Price does not separate the groups (p = 0.18). Inside Airbnb's occupancy estimate correlates 0.98 with our measure because both use review counts, so the independent check is the calendar: popular listings are unavailable for 46% of the next 90 nights, versus 33%. Popular listings also list slightly more amenities (median 45 against 42), mostly small comforts and self check-in, though this partly reflects that they are mostly central, professionally run apartments. Popularity comes more from the host and booking terms than from price.`}]},{id:`a2-q2-ratings`,part:`Part A`,railLabel:`A2 Q2 Price & ratings`,blocks:[{type:`subheading`,text:`Question 2. Price and guest ratings`},{type:`paragraph`,text:`Ratings sit in a narrow band (median 4.86), so we use Spearman correlation. Price and rating are weakly related (0.085, p < 0.001). Price correlates most with the location score (0.197) and slightly negatively with the value score (-0.036), so guests who pay more get a better location and judge value about the same. Superhosts average 4.879 against 4.681 at almost the same price. These are cross-sectional associations.`},{type:`paragraph`,text:`Price matters more at the bottom of the rating scale than at the top. Among listings with 5 or more reviews, the share rated below 4.5 falls from 12.5% in the cheapest fifth to 6.9% in the priciest, while the share rated 4.8 or higher rises only from 58.7% to 67.8%. Paying more mainly lowers the risk of a bad stay.`},{type:`table`,headers:[`Price fifth`,`Nightly price`,`Mean rating`,`Rated 4.8 or higher`,`Rated below 4.5`],numericCols:[1,2,3,4],rows:[[`Cheapest`,`$15 to $170`,`4.759`,`58.7%`,`12.5%`],[`Second`,`$170 to $238`,`4.766`,`58.6%`,`10.2%`],[`Middle`,`$238 to $302`,`4.776`,`60.5%`,`9.5%`],[`Fourth`,`$302 to $396`,`4.796`,`63.5%`,`7.9%`],[`Priciest`,`$396 to $1,225`,`4.813`,`67.8%`,`6.9%`]]}]},{id:`a2-q3-location`,part:`Part A`,railLabel:`A2 Q3 Location`,blocks:[{type:`subheading`,text:`Question 3. Location, characteristics and performance`},{type:`figure`,id:`fig-1`,images:[{src:`figures/fig-000.png`,alt:`Performance metrics including mean reviews in the last 12 months by distance band from the CBD`,label:`Figure 1 (left panel source)`},{src:`figures/fig-001.png`,alt:`Property type mix by distance band from the CBD`,label:`Figure 1 (right panel)`}],caption:`[Figure 1. Mean reviews in the last 12 months (left) and property type mix (right) by distance band from the CBD. Source: notebook sections 6.2 and 6.4]`},{type:`paragraph`,text:`Performance, measured by reviews in the last 12 months, follows a U-shape with distance from the CBD (Figure 1): mean reviews fall from 19.0 within 2 km to 9.0 at 10 to 20 km and recover to 12.8 beyond 20 km. Two kinds of areas do well: the inner city, where the City of Melbourne earns 45.3% of estimated revenue from 36.3% of listings, and the outer east, where Yarra Ranges has the highest median price ($360) and revenue ($28,425). Suburbs with no tourist draw do worst, with median revenue of $3,400 to $3,900 in Melton, Greater Dandenong and Wyndham.`},{type:`paragraph`,text:`Location mostly decides the product (Cramér’s V 0.65): 88.4% of listings within 2 km are apartments, compared with 7.0% beyond 20 km. Amenities change in kind, not number: elevators and pools in the centre, free parking and backyards further out. The centre’s lower cleanliness score is a host effect: in every distance band, hosts with fewer than six listings score 0.11 to 0.20 higher than large hosts, more than any gap between bands (0.09 at most).`}]},{id:`a3-events`,part:`Part A`,railLabel:`A3 Major events`,blocks:[{type:`section-heading`,text:`A3 Unguided analysis`},{type:`subheading`,text:`Analysis 1. Do major events lift bookings near their venues?`},{type:`paragraph`,text:`A listing's location is fixed, but demand moves through the year, so we use the events and school-holiday datasets to test whether Melbourne's four largest events fill listings near their venues. We compared listings within 5 km of each venue with those 15 km or more away, on event nights against the same nights one to three weeks either side, in the nightly calendar for the next 12 months. Figure 2 sets each lift against placebo windows, which repeat the calculation on every other window at the same venue. The Grand Prix (16.6 points more booked near the venue than far; none of 181 placebo windows as large) and the Australian Open (11.7; none of 148) are clear, the Grand Final is smaller (8.7; 2.1%), and the Melbourne Cup shows nothing (minus 4.2; 91%).`},{type:`figure`,id:`fig-2`,images:[{src:`figures/fig-002.png`,alt:`Share of nights booked for listings within 5 km vs 15 km or more from Albert Park and Melbourne Park`,label:`Figure 2`}],caption:`[Figure 2. Near-minus-far change in booked share on event nights, against placebo windows. Source: notebook section 14.1]`},{type:`paragraph`,text:`School holidays could mimic an event, since all 4 Grand Prix nights and 10 of 15 Australian Open nights fall in them. Matching event nights to nights with the same school holiday status raises the lifts (18.8 and 13.4), though the Grand Final's matched lift (15.0) rests on two comparison nights. A booking model with two event variables cuts the error on an unseen event from 12.4 to 8.0 points for the Grand Prix and from 7.7 to 5.1 for the Australian Open, and worsens it for the Melbourne Cup. The extra demand goes mainly to independently hosted homes: on Grand Prix nights, the B2 segment of independently hosted inner and middle suburb homes gains 27.0 points near Albert Park, compared with 14.9 for central apartments run at scale. The calendar cannot separate booked from blocked nights and has no prices.`}]},{id:`a3-rents`,part:`Part A`,railLabel:`A3 Long-term rents`,blocks:[{type:`subheading`,text:`Analysis 2. Would these homes earn more from a long-term tenant?`},{type:`paragraph`,text:`The main alternative to Airbnb for an entire home is a long-term lease, so we compare each home's estimated Airbnb revenue with the rent a tenant would pay for a similar home. We matched 12,096 entire homes to the median rent for new bonds in their council for the same dwelling type and bedrooms. Revenue is below the rent for 8,185 homes (67.7%); the median ratio is 0.61, and 18.0% earn more than 1.5 times the rent, before fees, cleaning, utilities and vacancy. Groups differ more than home types (Figure 3): superhosts have a median ratio of 0.99 against 0.36 for other hosts; Yarra Ranges (1.16) and Nillumbik (1.03) are the only councils where the median home matches or beats the rent, and homes 5 to 20 km from the CBD are weakest (0.49 and 0.43).`},{type:`figure`,id:`fig-3`,images:[{src:`figures/fig-003.png`,alt:`Median ratio of estimated Airbnb revenue to annual long-term rent by council`,label:`Figure 3`}],caption:`[Figure 3. Median ratio of Airbnb revenue to long-term rent, by council and host group. Source: notebook section 14.5]`},{type:`paragraph`,text:`A check using the forward calendar as nights booked agrees on the order of the groups but gives different gaps (with 33% costs, 41.3% to 46.4% of homes in each of five groups (superhosts, non-superhosts, Yarra Ranges, Melbourne and Bayside) reach the rent, against 3.5% to 40.1% on review-based nights). The calendar counts blocked nights, so the size of the gaps rests on review-based nights, which depend on the assumed review rate. At 30% instead of 50%, the median ratio becomes 1.01, so whether the typical host beats the rent cannot be settled here.`}]},{id:`b1-price-model`,part:`Part B`,railLabel:`B1 Elastic net price`,blocks:[{type:`part-heading`,text:`Part B. Machine learning analysis, interpretation and limitations`},{type:`section-heading`,text:`B1 Supervised model: elastic net regression on nightly price`},{type:`subheading`,text:`Objective`},{type:`paragraph`,text:`Estimate the price a listing would be expected to charge, so hosts can compare their own price and see which features carry a premium.`},{type:`subheading`,text:`How the model works`},{type:`paragraph`,text:`Linear regression fits one coefficient per predictor to minimise squared error. Elastic net (Zou & Hastie, 2005) adds a penalty. Its L1 part can set a coefficient to exactly zero, removing that predictor, and its L2 part shrinks coefficients and shares weight across correlated ones. Alpha sets the strength (zero gives ordinary least squares, OLS) and l1_ratio the mix.`},{type:`subheading`,text:`Variables and data preparation`},{type:`paragraph`,text:`The target is log nightly price, so a coefficient reads as a percentage effect. The 28 predictors cover product type, size, amenities, rating, superhost, shared bathroom, host size, minimum nights and distance to the CBD, with review counts, nights and revenue left out as outcomes of price. The data is split 80/20 into 12,370 training and 3,093 test rows; predictors are standardised in a scikit-learn pipeline (Pedregosa et al., 2011), and alpha and l1_ratio come from five-fold cross-validation.`},{type:`subheading`,text:`Results and performance`},{type:`table`,headers:[`Model`,`Predictors kept`,`Test R²`,`Test MAE`,`Median error`],numericCols:[1,2,3,4],rows:[[`Baseline: median price`,``,``,`$127`,`33.9%`],[`OLS, no penalty`,`28`,`0.679`,`$78.44`,`21.5%`],[`Elastic net, lowest CV error`,`28`,`0.679`,`$78.44`,`21.5%`],[`Elastic net, one-standard-error rule`,`24`,`0.674`,`$78.87`,`21.7%`]]},{type:`paragraph`,text:`Cross-validation chose almost no penalty, which reproduces OLS, and near-identical training, cross-validated and test scores show no overfitting. We therefore applied the one-standard-error rule (Hastie et al., 2009), which takes the strongest penalty within one standard error of the best cross-validated error. It gives up 0.005 of R-squared for four fewer predictors, removes a little over a third of the baseline error and puts 46.8% of predictions within 20% of the actual price. Most of the explained variation comes from what the listing is: product type and size alone reach a test R-squared of 0.631, and listing, host and location features add only about 0.04 more. Price is set mainly by the product, and distance adds little once product type is known, because apartments sit in the centre and houses further out. Adding distance to the nearest event venue (External 1) lifts the OLS score from 0.679 to 0.684, but it correlates 0.83 with CBD distance and is untested in the elastic net.`},{type:`table`,headers:[`Predictor`,`Elastic net`,`OLS`],numericCols:[1,2],rows:[[`Each extra bedroom`,`+12.1%`,`+12.2%`],[`Indoor fireplace`,`+18.0%`,`+19.7%`],[`Doubling distance to CBD`,`-2.3%`,`-3.2%`],[`Private room`,`-42.7%`,`-42.9%`],[`Shared bathroom`,`-21.8%`,`-21.5%`]]},{type:`paragraph`,text:`Comparing each listing's price with its out-of-fold estimate, listings priced 5% to 20% above it earn the highest median revenue ($17,208). Those priced 20% to 40% below are booked the most (98 nights a year), and those more than 50% above the estimate are booked the least (54 nights), while listings more than 40% below earn the least ($5,815).`},{type:`subheading`,text:`Issues met and how they were handled`},{type:`paragraph`,text:`Cross-validation could not choose the settings because the error curve is nearly flat, so we fixed l1_ratio at 0.5 and report OLS beside the final model. Bedrooms and capacity overlap (variance inflation factors 4.4 and 4.2), so beds were dropped.`},{type:`subheading`,text:`Limitations`},{type:`paragraph`,text:`The elastic net predicts no better than OLS, and its coefficients are biased towards zero, so the OLS column is the better size estimate for strong predictors. Predictions are pulled to the middle (25.9% too high in the cheapest fifth, 27.4% too low in the priciest), neighbourhood effects are missing, and about a third of price variation is unexplained. Coefficients are associations on one date's price.`}]},{id:`b2-clustering`,part:`Part B`,railLabel:`B2 Clustering`,blocks:[{type:`section-heading`,text:`B2 Unsupervised model: k-means clustering of listings`},{type:`subheading`,text:`Objective`},{type:`paragraph`,text:`Find the distinct product segments in the market from the data alone, then describe how each performs.`},{type:`subheading`,text:`How the model works`},{type:`paragraph`,text:`K-means splits listings into k groups. It starts with k centres, assigns each listing to the nearest centre, moves each centre to its group's average, and repeats until assignments stop changing. We score with the silhouette (Rousseeuw, 1987), which compares each listing's closeness to its own cluster with the nearest other cluster, from -1 to 1, and set 0.55 as the mark of well-separated clusters.`},{type:`subheading`,text:`Variables and data preparation`},{type:`paragraph`,text:`The first specification used seven inputs (price, bedrooms, entire home, distance to the CBD, minimum nights, host listings, amenities). The final one uses log price, bedrooms and entire home. Inputs are standardised, with 20 random starts per fit.`},{type:`subheading`,text:`Results and performance`},{type:`paragraph`,text:`The seven-input model scores 0.229 at k = 5, and no k from 2 to 10 exceeds 0.311 because its inputs vary smoothly with no gaps. The final model at k = 3 scores 0.553, with identical assignments over five refits (k = 2 scores 0.597 but only splits rooms from entire homes).`},{type:`table`,headers:[`Segment`,`Listings`,`Median price`,`Median revenue`,`Share of revenue`],numericCols:[1,2,3,4],rows:[[`Rooms`,`3,028 (20%)`,`$105`,`$2,400`,`4.5%`],[`Small entire homes`,`9,259 (60%)`,`$267`,`$18,794`,`63.6%`],[`Large entire homes`,`3,176 (21%)`,`$461`,`$23,041`,`31.9%`]]},{type:`paragraph`,text:`The segments differ strongly on nights, revenue and distance from the CBD; none were used to form them (Kruskal-Wallis p < 0.001). Rooms earn little. Small entire homes (80% apartments, 2.5 km from the CBD) are a volume business at 95 nights, and large homes, mostly houses 12.6 km out, earn the most per listing from fewer, pricier bookings. The seven-input model splits entire homes near the city by host: centrally located apartments run at scale take 39.2% of revenue at a rating of 4.679, and independently hosted homes are rated 4.812.`},{type:`paragraph`,text:`DBSCAN on coordinates (Ester et al., 1996) finds 12 hotspots. Yarra Ranges hotspots earn the most (median $25,647 to $41,472), while Wyndham and Brimbank hotspots earn the least ($2,751 to $4,932), so dense listings are not always a destination. Ward clustering (Ward, 1963) of the 30 councils scores 0.239 across four groups, forming a gradient with median revenue falling from $19,059 in the inner councils to $8,694 in the middle suburbs and recovering to $14,760 further out. Of the three methods, the council grouping gives the clearest picture of where each listing type sits: k-means largely restates room type and size, and DBSCAN merges the inner city into one hotspot holding 77.6% of listings. The three silhouettes cannot be ranked against each other, because each is computed on different units.`},{type:`subheading`,text:`Issues met and how they were handled`},{type:`paragraph`,text:`The first specification could not reach the target at any k, so we changed the inputs and kept both. Exact silhouettes compare every pair of listings, so the scans use a sample of 6,000.`},{type:`subheading`,text:`Limitations`},{type:`paragraph`,text:`The higher score was obtained with a model that cannot see host scale, minimum stay or location. Two of the three inputs take few values, so many listings share a point, which raises the silhouette by construction, and the score clears 0.55 by a small margin. K-means also gives every listing one group, and 135 two-bedroom homes went with the large homes.`}]},{id:`b3-transformer`,part:`Part B`,railLabel:`B3 Review transformer`,blocks:[{type:`section-heading`,text:`B3 Model 3: complaint detection in review text with a fine-tuned transformer`},{type:`subheading`,text:`Objective`},{type:`paragraph`,text:`Star ratings barely separate listings (median 4.86), but review text does. The model flags what each guest complained about, so complaint rates can explain why large hosts rate lower and what complaints cost in bookings.`},{type:`subheading`,text:`How the model works`},{type:`paragraph`,text:`A transformer encoder (Vaswani et al., 2017) lets every word weigh every other word in the passage (self-attention), so "clean" and "not clean" get different representations, which word counts cannot do. We fine-tuned RoBERTa-large (Liu et al., 2019), a pretrained 355-million-parameter English encoder, with a small output layer. It gives nine outputs per review: six complaint flags (cleanliness, noise, check-in or host, accuracy, comfort and amenities, value) and overall tone.`},{type:`subheading`,text:`Variables and data preparation`},{type:`paragraph`,text:`We sampled 600 of the 621,842 reviews written since 2023, drawn equally from listings rated below 4.0, 4.0 to 4.5 and 4.5 and above, because a random draw would be almost all praise. Ninety-nine were labelled by hand before training as the test set, and a second member relabelled 49. A large language model (Claude Fable 5.2; Anthropic, 2026) labelled 490 of the other 501 under written rules. Because noise, value, and accuracy complaints had only 25 to 37 examples, we added 300 reviews selected to include them, labelled them the same way, and checked about 80 machine labels by hand. The model trains on 801 reviews for 10 epochs at a learning rate of 2e-5 and a batch size of 8, and is tested only on human labels. Cross-validation sets each flag's threshold, and a TF-IDF logistic regression is the reference. The model scored 571,522 English reviews, and the analysis uses the 9,891 listings with 10 or more scored reviews.`},{type:`subheading`,text:`Results and performance`},{type:`paragraph`,text:`Precision is the share of flagged reviews that truly contain the complaint, recall the share of real complaints found, and F1 combines them.`},{type:`table`,headers:[`Label`,`Test cases`,`Precision`,`Recall`,`F1`,`TF-IDF F1`,`Human kappa`],numericCols:[1,2,3,4,5,6],rows:[[`Cleanliness`,`22`,`0.92`,`1.00`,`0.96`,`0.77`,`0.93`],[`Noise`,`4`,`0.80`,`1.00`,`0.89`,`0.33`,`0.66`],[`Comfort and amenities`,`25`,`0.71`,`1.00`,`0.83`,`0.76`,`0.80`],[`Accuracy of listing`,`11`,`0.89`,`0.73`,`0.80`,`0.67`,`0.66`],[`Check-in or host`,`11`,`0.60`,`0.55`,`0.57`,`0.54`,`1.00`],[`Value`,`5`,`0.50`,`0.20`,`0.29`,`0.13`,`0.00`]]},{type:`paragraph`,text:`Overall, the tone is 90.9% accurate, compared with 85.9% for the reference. The transformer beats the reference on every flag, barely so on check-in or host, where it finds 6 of 11. It finds 1 of 5 value complaints, and the human labellers disagreed on them, so value is left out below. The 300 picked reviews made the largest difference of anything we tried (with RoBERTa-base, check-in or host rose from 0.61 to 0.78). RoBERTa-large, chosen on cross-validation, raised cleanliness from 0.89 to 0.96 but lowered check-in or host from 0.78 to 0.57, leaving the encoders level on average (0.72 and 0.73). The drop comes from the 0.60 threshold, which sits above the probabilities the larger model assigns to passing mentions (0.30 would have found 9 of 11). We kept it because changing it now would tune the model on the test set, and the rates apply equally to every listing, so group comparisons hold.`},{type:`paragraph`,text:`The listing-level rates agree with Airbnb's own sub-scores, which the model never saw (Spearman -0.67 for cleanliness, -0.74 for any complaint against the overall rating). On average, 13.0% of reviews carry a complaint.`},{type:`paragraph`,text:`Cleanliness costs the most stars: a 10-point rise in its complaint rate is associated with a 0.114-point lower rating, compared with 0.083 for comfort and 0.070 for check-in or host. Large hosts face more criticism: cleanliness complaints rise from 1.6% of reviews for single-listing hosts to 4.5% for hosts with 21 or more listings, and check-in or host complaints rise from 1.2% to 4.7%. The written complaints account for 67% of the large-host gap in the cleanliness score. Complaints cost bookings past a threshold (Figure 4): among listings with 30 or more reviews, bookings hold at 154 to 161 nights a year while fewer than one review in five carries a complaint, then fall to 122 and to 96 above 30%, with no sign in price (median $259 to $276 in every band).`},{type:`figure`,id:`fig-4`,images:[{src:`figures/fig-004.png`,alt:`Nights booked against peers, revenue relative to peer median, and share in top 10% of revenue by complaint share band`,label:`Figure 4`}],caption:`[Figure 4. Estimated nights booked by band of complaint share (listings with 30 or more reviews). Source: notebook section 13.6]`},{type:`subheading`,text:`Issues met and how they were handled`},{type:`paragraph`,text:`The 300 added reviews raised the cross-validated mean F1 of the six flags from 0.76 to 0.80 up to 0.86 to 0.88. Thinly reviewed listings distort the booking comparison, so it uses listings with 30 or more reviews.`},{type:`subheading`,text:`Limitations`},{type:`paragraph`,text:`The test set has 99 reviews (4 noise cases, 5 value), so only the cleanliness and comfort scores are steady. It was scored four times, once after each of three earlier setups and once for the final model, so it is not a single untouched evaluation. Training labels came mostly from a language model and test labels from people, so part of the measured error is a labelling difference, and cross-validated scores flatter the model. The test sample was rich in complaints, so ordinary reviews will bring more false alarms. Only English reviews were scored (8.1% left out), and booking results are associations on nights estimated from review counts (Inside Airbnb, n.d.).`}]},{id:`c1-summary`,part:`Part C`,railLabel:`Summary`,blocks:[{type:`part-heading`,text:`Part C. Summary and business recommendations`},{type:`subheading`,text:`Summary`},{type:`paragraph`,text:`First, Melbourne's short-stay market has several product types, and location mostly determines which one is on offer. The clustering models and the price regression describe the same split between apartments run at scale in the centre, rooms in private homes through the suburbs, and whole houses and rural stays in the outer east. Performance is strong in the centre and destination areas and weak in suburbs with no tourist draw.`},{type:`paragraph`,text:`Second, demand follows the host, the booking terms and the guest experience more than price. Popular listings charge the same as others but are more often run by superhosts and open to one-night stays, and complaints cost nights without showing in price. Complaints also explain why large operators rate lower, which star ratings alone could not.`},{type:`paragraph`,text:`Third, external data place these results in time and against other uses of the home. Events lift bookings near their venues when they draw visitors, and short-term letting often earns less than a long-term lease, with superhosts and destination councils the exceptions. The order of the groups is firmer than the gaps between them.`}]},{id:`c2-recommendations`,part:`Part C`,railLabel:`Recommendations`,blocks:[{type:`section-heading`,text:`Recommendations`},{type:`list`,intro:`For hosts:`,items:[{num:`1.`,text:`Set prices at or up to about 20% above the model's estimate for a comparable listing. Median revenue peaks at 5% to 20% above the estimate ($17,208); bookings fall as prices rise further, and deep discounts don't pay: listings more than 40% below their estimate earn the least ($5,815). This uses one date's price and estimated nights.`},{num:`2.`,text:`Work towards Superhost standards and consider accepting one-night stays. Superhost listings are five times as likely to be popular, their homes earn about as much as a long-term lease (median ratio 0.99 against 0.36 for other hosts), and one-night minimums go with popularity. Both are partly circular, since the badge requires completed stays and good ratings, and short stays produce more reviews, which is how popularity is measured.`},{num:`3.`,text:`Keep complaints below one review in five and fix cleaning first. Cleanliness complaints cost the most stars, and bookings fall once complaints pass that point at the same price. Operators of many central apartments should start with cleaning turnover and guest access. Reading the last 20 to 30 reviews is our untested way to track this.`},{num:`4.`,text:`Fit amenities to the product, matching what comparable popular listings offer. Popular listings list slightly more amenities, partly because they are mostly central apartments, and an indoor fireplace goes with a price about 18% higher. That coefficient is market-wide, so it will not hold for every listing.`}]},{type:`list`,intro:`For investors choosing what and where to list:`,items:[{num:`1.`,text:`Avoid private rooms as a revenue business, and choose between small entire homes near the centre and large homes in destination areas. Rooms account for 20% of listings and 4.5% of revenue, and large homes earn more in the main hotspot ($27,300) than in isolated areas ($16,686). Revenue is estimated from reviews.`},{num:`2.`,text:`Investors and hosts should compare Airbnb income with a long-term lease before committing. Revenue is below the median rent for 67.7% of comparable homes, so a host outside a destination area who can't meet Superhost standards may do better with a tenant. This is a screen, since it sets gross revenue against median rents and depends on the assumed review rate.`},{num:`3.`,text:`When buying an existing listing or portfolio, read the reviews as well as the rating. Ratings are compressed near the top, while the share of reviews with a complaint tracks bookings, though the model was tested on only 99 reviews.`}]},{type:`list`,intro:`For property managers, Airbnb and the state government:`,items:[{num:`1.`,text:`Property managers and Airbnb should build the event calendar into demand forecasts, and hosts near Albert Park and Melbourne Park should set event-date rates and book cleaning cover early, since event nights there fill well ahead. The Melbourne Cup is not worth planning around, and the Grand Final lift is less firm. Because the extra demand goes mainly to independently hosted homes within 5 km, Airbnb or co-hosting firms could invite nearby residents to list for event week only, as a trial campaign. The calendar has no prices, so the right increase must be tested.`},{num:`2.`,text:`The state government can treat the homes that earn the least against their rent, concentrated 5 to 20 km from the CBD, as the stock most likely to suit long-term letting. The data cannot say whether owners would let long term, sell or use the home themselves.`}]},{type:`paragraph`,text:`All of these rest on associations in a single snapshot and do not prove that changing one feature would produce the same result. Nights and revenue are estimated from review counts, except in the first recommendation for property managers, which uses the forward calendar. The rent levels depend on the assumed 50% review rate; at 30%, the median home would match the rent. The complaint rates come from a model whose 99-review test set was scored several times.`}]},{id:`references`,part:`References`,railLabel:`References`,blocks:[{type:`part-heading`,text:`References`},{type:`references`,items:[{text:`Anthropic. (2026). Claude Fable 5.2 [Large language model]. https://www.anthropic.com/claude`},{text:`Department of Families, Fairness and Housing. (2026). Rental report: Quarterly median rents by local government area, June quarter 2026 [Data set]. Victorian Government. Retrieved November 18, 2026, from https://www.dffh.vic.gov.au/publications/rental-report`,note:`Note. At the time of retrieval the DFFH website was accessible only from within Australia.`},{text:`Department of Government Services. (2026). Victorian Government - Important dates API - data (Important Dates - October 2026) [Data set]. DataVic. Retrieved November 18, 2026, from https://discover.data.vic.gov.au/dataset/government-dates-api-data`},{text:`Ester, M., Kriegel, H.-P., Sander, J., & Xu, X. (1996). A density-based algorithm for discovering clusters in large spatial databases with noise. In E. Simoudis, J. Han, & U. Fayyad (Eds.), Proceedings of the Second International Conference on Knowledge Discovery and Data Mining (pp. 226–231). AAAI Press. https://aaai.org/papers/kdd96-037-a-density-based-algorithm-for-discovering-clusters-in-large-spatial-databases-with-noise/`},{text:`Group 09. (2026). Melbourne major events 2021–2027: Dates, venues and attendance [Unpublished raw data compiled from public sources; submitted as External01_Group09.csv].`,note:`Note. Each row of the data set cites its source page, all checked on November 18, 2026: the Australian Grand Prix Corporation 2026 annual report, Victorian Government media releases (premier.vic.gov.au), ABC News and AAP for the Formula 1 Australian Grand Prix; Tennis Australia (ausopen.com) and Melbourne Park for the Australian Open; the Victoria Racing Club for the Melbourne Cup Carnival; and the Melbourne Cricket Ground and the AFL for the AFL Grand Final. Two figures need a note. The 2026 Grand Prix attendance in the file is the Australian Grand Prix Corporation's 483,934, while the Victorian Government's 2027 release gives about 500,000. The 2022 Australian Open figure covers the whole tournament, not only the main draw.`},{text:`Hastie, T., Tibshirani, R., & Friedman, J. (2009). The elements of statistical learning: Data mining, inference, and prediction (2nd ed.). Springer. https://doi.org/10.1007/978-0-387-84858-7`},{text:`Inside Airbnb. (n.d.). Data assumptions. Retrieved November 18, 2026, from https://insideairbnb.com/data-assumptions/`},{text:`Inside Airbnb. (2026). Melbourne, Victoria, Australia: Snapshot compiled 16 September 2026 [Data set]. Retrieved November 14, 2026, from https://insideairbnb.com/get-the-data/ (CC BY 4.0)`},{text:`Liu, Y., Ott, M., Goyal, N., Du, J., Joshi, M., Chen, D., Levy, O., Lewis, M., Zettlemoyer, L., & Stoyanov, V. (2019). RoBERTa: A robustly optimized BERT pretraining approach (arXiv:1907.11692). arXiv. https://doi.org/10.48550/arXiv.1907.11692`},{text:`Pedregosa, F., Varoquaux, G., Gramfort, A., Michel, V., Thirion, B., Grisel, O., Blondel, M., Prettenhofer, P., Weiss, R., Dubourg, V., Vanderplas, J., Passos, A., Cournapeau, D., Brucher, M., Perrot, M., & Duchesnay, É. (2011). Scikit-learn: Machine learning in Python. Journal of Machine Learning Research, 12, 2825–2830. https://jmlr.org/papers/v12/pedregosa11a.html`},{text:`Rousseeuw, P. J. (1987). Silhouettes: A graphical aid to the interpretation and validation of cluster analysis. Journal of Computational and Applied Mathematics, 20, 53–65. https://doi.org/10.1016/0377-0427(87)90125-7`},{text:`Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention is all you need. In I. Guyon, U. V. Luxburg, S. Bengio, H. Wallach, R. Fergus, S. Vishwanathan, & R. Garnett (Eds.), Advances in Neural Information Processing Systems 30 (pp. 5998–6008). Curran Associates. https://papers.nips.cc/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html`},{text:`Ward, J. H., Jr. (1963). Hierarchical grouping to optimize an objective function. Journal of the American Statistical Association, 58(301), 236–244. https://doi.org/10.1080/01621459.1963.10500845`},{text:`Zou, H., & Hastie, T. (2005). Regularization and variable selection via the elastic net. Journal of the Royal Statistical Society: Series B (Statistical Methodology), 67(2), 301–320. https://doi.org/10.1111/j.1467-9868.2005.00503.x`}]}]}];function Ch(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function wh(e,t,n,r){let i=t-e||1;return t=>n+(t-e)/i*(r-n)}function Th(e,t,n,{padInner:r=.28,padOuter:i=.14}={}){let a=Math.max(1,e),o=(n-t)/(a+r*(a-1)+2*i),s=o*(1+r),c=t+i*o;return{width:o,step:s,start:e=>c+e*s,end:e=>c+e*s+o,center:e=>c+e*s+o*.5}}function Eh({width:e,height:t,label:n,body:r,cls:i=``}){return`<svg class="st-svg${i?` ${i}`:``}" viewBox="0 0 ${e} ${t}" role="img" aria-label="${Ch(n)}" xmlns="http://www.w3.org/2000/svg">`+r+`</svg>`}function Dh(e,t,n,r,i=``){return`<line x1="${e.toFixed(1)}" y1="${t.toFixed(1)}" x2="${n.toFixed(1)}" y2="${r.toFixed(1)}" class="${i}"/>`}function Oh(e,t,n,r,i=``,a=0,o=``){let s=a?` rx="${a}"`:``,c=o?`<title>${Ch(o)}</title>`:``;return`<rect x="${e.toFixed(1)}" y="${t.toFixed(1)}" width="${Math.max(0,n).toFixed(1)}" height="${Math.max(0,r).toFixed(1)}"${s} class="${i}">${c}</rect>`}function kh(e,t,n,r=``,i=`start`,a=`auto`){let o=i===`start`?``:` text-anchor="${i}"`,s=a===`auto`?``:` dominant-baseline="${a}"`;return`<text x="${e.toFixed(1)}" y="${t.toFixed(1)}" class="${r}"${o}${s}>${Ch(n)}</text>`}function Ah(e){if(!e.length)return 0;let t=[...e].sort((e,t)=>e-t),n=Math.floor(t.length/2);return t.length%2==1?t[n]:(t[n-1]+t[n])*.5}var jh={"0 to 2 km":`0–2 km`,"2 to 5 km":`2–5 km`,"5 to 10 km":`5–10 km`,"10 to 20 km":`10–20 km`,"over 20 km":`>20 km`},Mh={Apartment:{fill:`st-fill-amber`,lightText:!0},"House or townhouse":{fill:`st-fill-teal`,lightText:!0},"Private or shared room":{fill:`st-fill-slate`,lightText:!0},"Guesthouse or guest suite":{fill:`st-fill-violet`,lightText:!0},"Cottage, cabin or farm stay":{fill:`st-fill-earth`,lightText:!0},"Hotel or hostel room":{fill:`st-fill-mist`,lightText:!1}};function Nh({bands:e,x0:t,y0:n,pw:r,ph:i,title:a,getVal:o,yMin:s,yMax:c,ticks:l,fmtTick:u,fmtVal:d,highlightMode:f}){let p=t+54,m=t+r-14,h=n+38,g=n+i-34,_=Th(e.length,p,m,{padInner:.28,padOuter:.14}),v=wh(s,c,g,h),y=[];y.push(kh(p,n+20,a,`st-title-sm`));for(let e of l){let t=v(e);e>s+1e-6&&y.push(Dh(p,t,m,t,`st-grid`)),y.push(Dh(p-5,t,p,t,`st-tick-mark`)),y.push(kh(p-9,t,u(e),`st-tick`,`end`,`central`))}return y.push(Dh(p,g,m,g,`st-axis`)),y.push(Dh(p,h,p,g,`st-axis`)),e.forEach((e,t)=>{let n=o(e),r=_.start(t),i=_.width,a=v(n),s=Math.max(1,g-a),c=`st-bar st-fill-slate`,l=`st-val-sm`;f===`u-shape`?t===0?(c=`st-bar st-fill-amber`,l=`st-val-sm st-txt-amber`):t===4&&(c=`st-bar st-fill-teal`,l=`st-val-sm st-txt-teal`):f===`peak`&&t===1?(c=`st-bar st-fill-amber`,l=`st-val-sm st-txt-amber`):f===`low-cbd`&&t===0?(c=`st-bar st-fill-red`,l=`st-val-sm st-txt-red`):f===`inner-high`&&(t===0||t===1)&&(c=`st-bar st-fill-amber`,l=`st-val-sm st-txt-amber`);let u=jh[e.band]||e.band;y.push(Oh(r,a,i,s,c,2,`${e.band}: ${d(n)} (n = ${e.listings.toLocaleString()})`)),y.push(kh(_.center(t),a-7,d(n),l,`middle`,`auto`)),y.push(kh(_.center(t),g+21,u,`st-cat-sm`,`middle`,`auto`))}),y.join(``)}function Ph(e){let t=e.bands,n=[];return n.push(Nh({bands:t,x0:0,y0:4,pw:468,ph:246,title:`Median price per person (AUD)`,getVal:e=>e.median_price_per_person,yMin:0,yMax:105,ticks:[0,20,40,60,80,100],fmtTick:e=>`$${e}`,fmtVal:e=>`$${Math.round(e)}`,highlightMode:`peak`})),n.push(Nh({bands:t,x0:492,y0:4,pw:468,ph:246,title:`Mean reviews, last 12 months`,getVal:e=>e.mean_reviews_12m,yMin:0,yMax:22,ticks:[0,5,10,15,20],fmtTick:e=>String(e),fmtVal:e=>e.toFixed(1),highlightMode:`u-shape`})),n.push(Nh({bands:t,x0:0,y0:272,pw:468,ph:246,title:`Mean overall rating`,getVal:e=>e.mean_rating,yMin:4.5,yMax:5,ticks:[4.5,4.6,4.7,4.8,4.9,5],fmtTick:e=>e.toFixed(1),fmtVal:e=>e.toFixed(2),highlightMode:`low-cbd`})),n.push(Nh({bands:t,x0:492,y0:272,pw:468,ph:246,title:`Mean location score`,getVal:e=>e.mean_location_score,yMin:4.5,yMax:5,ticks:[4.5,4.6,4.7,4.8,4.9,5],fmtTick:e=>e.toFixed(1),fmtVal:e=>e.toFixed(2),highlightMode:`inner-high`})),n.push(kh(480,550,`Distance from CBD (active listings, n = 15,463)`,`st-axis-label`,`middle`,`auto`)),Eh({width:960,height:560,label:`Median price per person, mean reviews in the last 12 months, mean overall rating, and mean location score by distance band from the CBD`,body:n.join(``)})}function Fh(e){let t=e.bands,n=e.propertyGroups,r=Th(t.length,64,664,{padInner:.24,padOuter:.1}),i=wh(0,100,310,48),a=[];a.push(kh(64,24,`Property type mix by distance from the CBD`,`st-title`));for(let e of[0,20,40,60,80,100]){let t=i(e);e>0&&a.push(Dh(64,t,664,t,`st-grid`)),a.push(Dh(59,t,64,t,`st-tick-mark`)),a.push(kh(54,t,`${e}%`,`st-tick`,`end`,`central`))}return a.push(Dh(64,310,664,310,`st-axis`)),a.push(Dh(64,48,64,310,`st-axis`)),t.forEach((e,t)=>{let o=r.start(t),s=r.width,c=r.center(t),l=0;for(let t of n){let n=e.mix[t]||0,r=i(l),u=i(Math.min(100,l+n)),d=Math.max(0,r-u),f=Mh[t]||{fill:`st-fill-slate`,lightText:!0};if(d>.3&&a.push(Oh(o,u,s,d,`st-bar st-stack-seg ${f.fill}`,0,`${e.band} — ${t}: ${n.toFixed(1)}%`)),n>=14){let e=f.lightText?`st-val-in`:`st-val-in-dark`;a.push(kh(c,(u+r)*.5,`${Math.round(n)}%`,e,`middle`,`central`))}l+=n}a.push(kh(c,332,e.band,`st-cat-sm`,`middle`,`auto`))}),a.push(kh(364,364,`Distance from CBD`,`st-axis-label`,`middle`,`auto`)),n.forEach((e,t)=>{let n=72+t*34,r=Mh[e]||{fill:`st-fill-slate`};a.push(Oh(692,n-7,15,15,`st-stack-key ${r.fill}`,2)),a.push(kh(715,n,e,`st-legend-txt`,`start`,`central`))}),Eh({width:960,height:376,label:`Property type mix by distance band from the CBD across six property groups`,body:a.join(``)})}function Ih({staticFigs:e}){let t=e.fig1;return`<div class="static-fig-panels static-fig-panels-stack"><div class="static-fig-panel" data-panel="fig-1-left">${Ph(t)}</div><div class="static-fig-panel static-fig-panel-sep" data-panel="fig-1-right">${Fh(t)}</div></div>`}var Lh=864e5;function Rh(e){let[t,n,r]=e.split(`-`).map(Number);return Date.UTC(t,n-1,r)}function zh(e,t,n){let r=[],i=[];for(let a=0;a<e.length;a++){let o=t[a];o===null||!Number.isFinite(o)?(i.length>=2&&r.push(i.join(` `)),i=[]):i.push(`${e[a].toFixed(1)},${n(o).toFixed(1)}`)}return i.length>=2&&r.push(i.join(` `)),r}function Bh({datesMs:e,series:t,venueKey:n,title:r,badge:i,events:a,schoolHolidays:o,topY:s,panelH:c,plotL:l,plotR:u,tStart:d,tEnd:f,monthTicks:p,showXLabels:m}){let h=s+32,g=s+c-(m?36:12),_=wh(d,f,l,u),v=wh(.14,1.03,g,h),y=[];y.push(kh(l,s+18,r,`st-title-sm`)),y.push(kh(u,s+18,i,`st-val-sm st-txt-amber`,`end`));for(let e of a){let t=Math.max(l,_(Rh(e.start))),r=Math.min(u,_(Rh(e.endExclusive))),i=Math.max(2.5,r-t),a=e.venueKey===n?`st-band-ev-this`:`st-band-ev-other`;y.push(Oh(t,h,i,g-h,a,0,`${e.event} (${e.start} to ${e.end})`))}for(let e of o){let t=Math.max(l,_(Rh(e.start))),n=Math.min(u,_(Rh(e.endExclusive)));n>t&&y.push(Oh(t,g-11,n-t,11,`st-band-holiday`,1,e.name))}for(let e of p){let t=_(e.ms);if(t>l+2&&t<u-2&&y.push(Dh(t,h,t,g,`st-grid`)),m){y.push(Dh(t,g,t,g+5,`st-tick-mark`));let n=e.anchor||`middle`;y.push(kh(t,g+22,e.label,`st-tick`,n,`auto`))}}for(let e of[.2,.4,.6,.8,1]){let t=v(e);y.push(Dh(l,t,u,t,`st-grid`)),y.push(Dh(l-5,t,l,t,`st-tick-mark`)),y.push(kh(l-10,t,e.toFixed(1),`st-tick`,`end`,`central`))}y.push(Dh(l,g,u,g,`st-axis`)),y.push(Dh(l,h,l,g,`st-axis`));let b=(h+g)*.5;y.push(`<text x="18" y="${b.toFixed(1)}" class="st-axis-label" text-anchor="middle" transform="rotate(-90 18 ${b.toFixed(1)})">Booked share</text>`);let x=e.map(e=>_(e));for(let e of zh(x,t.far,v))y.push(`<polyline points="${e}" class="st-line-slate"/>`);for(let e of zh(x,t.near,v))y.push(`<polyline points="${e}" class="st-line-amber"/>`);return y.join(``)}function Vh({staticFigs:e}){let t=e.fig2,n=t.dates.map(Rh),r=n[0],i=n[n.length-1]+Lh,a=[{label:`2026-09`,ms:r,anchor:`start`},{label:`2026-11`,ms:Rh(`2026-11-01`)},{label:`2027-01`,ms:Rh(`2027-01-01`)},{label:`2027-03`,ms:Rh(`2027-03-01`)},{label:`2027-05`,ms:Rh(`2027-05-01`)},{label:`2027-07`,ms:Rh(`2027-07-01`)},{label:`2027-09`,ms:Rh(`2027-09-01`)}],o=[],s=68;return o.push(Dh(s,18,s+24,18,`st-line-amber`)),o.push(kh(s+32,18,`Within 5 km`,`st-legend-txt`,`start`,`central`)),s+=148,o.push(Dh(s,18,s+24,18,`st-line-slate`)),o.push(kh(s+32,18,`15 km or more`,`st-legend-txt`,`start`,`central`)),s=68,o.push(Oh(s,37,16,14,`st-band-ev-this-key`,2)),o.push(kh(s+24,44,`Event nights (this venue)`,`st-legend-txt`,`start`,`central`)),s+=224,o.push(Oh(s,37,16,14,`st-band-ev-other-key`,2)),o.push(kh(s+24,44,`Other major events`,`st-legend-txt`,`start`,`central`)),s+=186,o.push(Oh(s,39,18,10,`st-band-holiday`,1)),o.push(kh(s+26,44,`School holidays`,`st-legend-txt`,`start`,`central`)),o.push(Bh({datesMs:n,series:t.albert_park,venueKey:`albert_park`,title:`Share of nights booked, listings by distance from Albert Park (F1)`,badge:`+${t.albert_park.diff_pp.toFixed(1)} pp · ${t.albert_park.placebo_as_large}/${t.albert_park.placebo_windows} placebos`,events:t.events,schoolHolidays:t.schoolHolidays,topY:66,panelH:246,plotL:68,plotR:940,tStart:r,tEnd:i,monthTicks:a,showXLabels:!1})),o.push(Bh({datesMs:n,series:t.melbourne_park,venueKey:`melbourne_park`,title:`Share of nights booked, listings by distance from Melbourne Park (Australian Open)`,badge:`+${t.melbourne_park.diff_pp.toFixed(1)} pp · ${t.melbourne_park.placebo_as_large}/${t.melbourne_park.placebo_windows} placebos`,events:t.events,schoolHolidays:t.schoolHolidays,topY:320,panelH:270,plotL:68,plotR:940,tStart:r,tEnd:i,monthTicks:a,showXLabels:!0})),Eh({width:960,height:600,label:`Full 12-month share of nights booked (September 2026 to September 2027) for listings within 5 km versus 15 km or more from Albert Park and Melbourne Park, with event nights and school holidays`,body:o.join(``)})}function Hh({rents:e}){let t=e.byCouncil.filter(e=>e.n>=30).map(e=>({name:e.name===`Moreland`?`Merri-bek`:e.name,n:e.n,median:e.median})).sort((e,t)=>t.median-e.median),n=76+t.length*24,r=n+64,i=wh(0,1.6,176,932),a=[];a.push(kh(176,24,`Airbnb revenue against long-term rent by council (councils with 30+ matched homes)`,`st-title`));let o=176;a.push(Oh(o,44,12,12,`st-fill-teal`,2)),a.push(kh(o+18,50,`≥ 1.0× rent`,`st-legend-txt`,`start`,`central`)),o+=116,a.push(Oh(o,44,12,12,`st-fill-slate`,2)),a.push(kh(o+18,50,`< 1.0× rent`,`st-legend-txt`,`start`,`central`)),o+=120,a.push(Dh(o,50,o+20,50,`st-ref-ink`)),a.push(kh(o+26,50,`1.0×: equals rent`,`st-legend-txt`,`start`,`central`)),o+=174,a.push(Dh(o,50,o+20,50,`st-ref-red`)),a.push(kh(o+26,50,`1.5×: ~break-even (33% costs)`,`st-legend-txt`,`start`,`central`));for(let e of[0,.2,.4,.6,.8,1,1.2,1.4,1.6]){let t=i(e);e>0&&a.push(Dh(t,76,t,n,`st-grid`)),a.push(Dh(t,n,t,n+5,`st-tick-mark`)),a.push(kh(t,n+22,e.toFixed(1),`st-tick`,`middle`,`auto`))}return t.forEach((e,t)=>{let n=76+(t+.5)*24,r=n-7.5,o=i(e.median),s=e.median>=1,c=s?`st-bar st-fill-teal`:`st-bar st-fill-slate`,l=s?`st-val-sm st-txt-teal`:`st-val-sm`;a.push(kh(166,n,e.name,`st-cat-sm`,`end`,`central`)),a.push(Oh(176,r,o-176,15,c,2,`${e.name}: ${e.median.toFixed(2)}× median revenue-to-rent ratio (n = ${e.n.toLocaleString()})`)),a.push(kh(o+7,n,e.median.toFixed(2),l,`start`,`central`))}),a.push(Dh(i(1),72,i(1),n+4,`st-ref-ink`)),a.push(Dh(i(1.5),72,i(1.5),n+4,`st-ref-red`)),a.push(Dh(176,76,176,n,`st-axis`)),a.push(Dh(176,n,932,n,`st-axis`)),a.push(kh(554,r-14,`Median of (estimated Airbnb revenue / annual long-term rent)`,`st-axis-label`,`middle`,`auto`)),Eh({width:960,height:r,label:`Median ratio of estimated Airbnb revenue to annual long-term rent across all 30 Melbourne councils`,body:a.join(``)})}var Uh=[{key:`0–5`,full:`0 to 5%`},{key:`5–10`,full:`5 to 10%`},{key:`10–20`,full:`10 to 20%`},{key:`20–30`,full:`20 to 30%`},{key:`>30`,full:`over 30%`}];function Wh(e){let{drop_stage:t,room_type:n,bedrooms:r,dist_band:i,nights:a,revenue:o,n_scored:s,cr_any:c}=e.cols,l=[],u=[],d=[];for(let n=0;n<e.count;n++)t[n]===0&&(Number.isFinite(o[n])&&l.push(o[n]),s[n]>=10&&Number.isFinite(c[n])&&u.push(n),s[n]>=30&&Number.isFinite(c[n])&&d.push(n));l.sort((e,t)=>e-t);let f=l[Math.floor(l.length*.9)]||0,p=e=>`${n[e]}_${Math.min(4,Math.round(r[e]))}_${i[e]}`,m=new Map;for(let e of u){let t=p(e),n=m.get(t);n||(n={nightsSum:0,count:0,revs:[]},m.set(t,n)),n.nightsSum+=a[e],n.count++,n.revs.push(o[e])}let h=new Map;for(let[e,t]of m)h.set(e,{meanNights:t.nightsSum/t.count,medRev:Math.max(1,Ah(t.revs))});let g=Array.from({length:5},()=>[]);for(let e of d){let t=c[e];g[t<=.050001000000000004?0:t<=.100001?1:t<=.200001?2:t<=.30000099999999996?3:4].push(e)}return Uh.map((e,t)=>{let n=g[t],r=Math.max(1,n.length),i=0,s=0,c=[];for(let e of n){let t=h.get(p(e));i+=a[e]-t.meanNights,c.push(o[e]/t.medRev),o[e]>=f&&s++}return{...e,n:n.length,nightsDiff:i/r,revRatio:Ah(c),top10Share:s/r,isCliff:t>=3}})}function Gh({rows:e,x0:t,panelW:n,plotT:r,plotB:i,title:a,yMin:o,yMax:s,ticks:c,fmtTick:l,getVal:u,fmtVal:d,refZero:f=!1,refLine:p=null}){let m=t+48,h=t+n-8,g=Th(e.length,m,h,{padInner:.24,padOuter:.1}),_=wh(o,s,i,r),v=[];v.push(kh((m+h)*.5,r-18,a,`st-title-sm`,`middle`,`auto`));for(let e of c){let t=_(e);v.push(Dh(m,t,h,t,e===0&&f?`st-axis`:`st-grid`)),v.push(Dh(m-4,t,m,t,`st-tick-mark`)),v.push(kh(m-8,t,l(e),`st-tick`,`end`,`central`))}if(p!==null){let e=_(p);v.push(Dh(m,e,h,e,`st-ref-ink-dash`))}v.push(Dh(m,r,m,i,`st-axis`)),v.push(Dh(m,i,h,i,`st-axis`));let y=_(0);return e.forEach((e,t)=>{let n=u(e),r=g.start(t),a=g.width,o=g.center(t),s=_(n),c=Math.min(s,y),l=Math.abs(y-s),f=e.isCliff?`st-bar st-fill-red`:`st-bar st-fill-amber`,p=e.isCliff?`st-val-sm st-txt-red`:`st-val-sm st-txt-amber`;v.push(Oh(r,c,a,l,f,2,`${e.full}: ${d(n)} (n = ${e.n.toLocaleString()})`)),n>=0?v.push(kh(o,c-6,d(n),p,`middle`,`auto`)):v.push(kh(o,c+l+15,d(n),p,`middle`,`auto`)),v.push(kh(o,i+20,e.key,`st-cat-sm`,`middle`,`auto`))}),v.join(``)}function Kh({data:e}){let t=Wh(e),n=928/3,r=[],i=48;return r.push(Oh(i,18,12,12,`st-fill-amber`,2)),r.push(kh(i+18,24,`Below 20% complaints (steady performance)`,`st-legend-txt`,`start`,`central`)),i+=340,r.push(Oh(i,18,12,12,`st-fill-red`,2)),r.push(kh(i+18,24,`20%+ complaints (drop-off)`,`st-legend-txt`,`start`,`central`)),r.push(Gh({rows:t,x0:0,panelW:n,plotT:82,plotB:312,title:`Nights booked vs peers (mean diff)`,yMin:-45,yMax:55,ticks:[-40,-20,0,20,40],fmtTick:e=>e>0?`+${e}`:e<0?`−${Math.abs(e)}`:`0`,getVal:e=>e.nightsDiff,fmtVal:e=>e>=0?`+${Math.round(e)}`:`−${Math.abs(Math.round(e))}`,refZero:!0})),r.push(Gh({rows:t,x0:325.3333333333333,panelW:n,plotT:82,plotB:312,title:`Revenue vs peer median`,yMin:0,yMax:1.85,ticks:[0,.4,.8,1.2,1.6],fmtTick:e=>e.toFixed(1),getVal:e=>e.revRatio,fmtVal:e=>`${e.toFixed(2)}`,refLine:1})),r.push(Gh({rows:t,x0:650.6666666666666,panelW:n,plotT:82,plotB:312,title:`Share in top 10% of revenue`,yMin:0,yMax:.34,ticks:[0,.1,.2,.3],fmtTick:e=>`${Math.round(e*100)}%`,getVal:e=>e.top10Share,fmtVal:e=>`${(e*100).toFixed(1)}%`})),r.push(kh(480,363,`Share of reviews with any complaint (%, listings with 30+ reviews)`,`st-axis-label`,`middle`,`auto`)),Eh({width:960,height:375,label:`Nights booked against peers, revenue relative to peer median, and share in top 10% of revenue by complaint share band`,body:r.join(``)})}var qh={"fig-1":Ih,"fig-2":Vh,"fig-3":Hh,"fig-4":Kh};function Jh(e,t){let n=qh[e];if(!n)throw Error(`Unknown static report figure: ${e}`);return n(t)}function Yh(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function Xh(e){return Yh(e).replace(/(https?:\/\/[^\s)]+)/g,`<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>`)}var Zh=[{re:/\(Claude Fable 5\.2; Anthropic, 2026\)/g,ref:0},{re:/\(Department of Families, Fairness and Housing \[DFFH\], 2026\)/g,ref:1},{re:/\bDFFH \(2026\)/g,ref:1},{re:/\bDepartment of Government Services \(2026\)/g,ref:2},{re:/\(Ester et al\., 1996\)/g,ref:3},{re:/\bGroup 09 \(2026\)/g,ref:4},{re:/\(Hastie et al\., 2009\)/g,ref:5},{re:/\(Inside Airbnb, n\.d\.\)/g,ref:6},{re:/\(Inside Airbnb, 2026\)/g,ref:7},{re:/\(Liu et al\., 2019\)/g,ref:8},{re:/\(Pedregosa et al\., 2011\)/g,ref:9},{re:/\(Rousseeuw, 1987\)/g,ref:10},{re:/\(Vaswani et al\., 2017\)/g,ref:11},{re:/\(Ward, 1963\)/g,ref:12},{re:/\(Zou &amp; Hastie, 2005\)/g,ref:13}];function Qh(e){let t=Yh(e);for(let{re:e,ref:n}of Zh)t=t.replace(e,e=>`<a href="#ref-${n}" class="cite-link" data-ref="${n}">${e}</a>`);return t}var $h={"a1-selection":`Data selection and filtering`,"a2-q1-popular":`Popular listings across Greater Melbourne`,"a2-q2-ratings":`Nightly price and guest ratings`,"a2-q3-location":`Location, distance bands and performance`,"a3-events":`Major events near Melbourne venues`,"a3-rents":`Airbnb revenue against long-term rent`,"b1-price-model":`Elastic net price model`,"b2-clustering":`Market segments and spatial clusters`,"b3-transformer":`Review complaint detection and bookings`,"c1-summary":`Market summary across Melbourne`,"c2-recommendations":`Recommendations by stakeholder group`};function eg({figNum:e,sectionId:t,scene:n,reportFig:r}){let i=n?.figureTitle||$h[t]||t,a=n?.heightVh??145,o=n?.captions?.length||1,s=n?.captions?.[0]?.text||`Active Melbourne sample (15,463 listings across 30 councils).`,c=r?`<button type="button" class="fig-orig-btn" data-fig-open="${Yh(r.id)}">Original figure</button>`:``,l=o>1?`<span class="fig-steps" aria-hidden="true">${Array.from({length:o},(e,t)=>`<i class="fig-pip${t===0?` is-active`:``}" data-pip="${t}"></i>`).join(``)}</span>`:``,u=r?`<figcaption class="report-verbatim-caption">${Yh(r.caption)}</figcaption>`:``;return`<div class="scrolly-fig-wrap" data-fig-slot="${Yh(t)}" style="--fig-scroll-h:${a}vh"><div class="scrolly-fig-sticky"><figure class="scrolly-fig-card"><div class="fig-frame-head" data-non-report><span class="fig-frame-title"><strong>Interactive figure ${e}.</strong> ${Yh(i)}</span><div class="fig-frame-actions">${l}${c}</div></div><div class="fig-viewport" data-viewport="${Yh(t)}"><div class="fig-placeholder" data-non-report><span>Interactive 3D view loads on scroll</span></div></div><div class="fig-frame-foot" data-non-report><div class="fig-progress-track" aria-hidden="true"><div class="fig-progress-fill"></div></div><div class="fig-foot-row"><span class="fig-step-tag">${o>1?`1 / ${o}`:`Interactive`}</span><p class="fig-step-caption">${Yh(s)}</p></div></div>`+u+`</figure></div></div>`}function tg(e,t){let n=Jh(e.id,t);return`<figure class="static-fig-card" data-static-fig="${Yh(e.id)}"><div class="static-fig-body" data-non-report>${n}</div><div class="static-fig-foot"><figcaption class="report-verbatim-caption">${Yh(e.caption)}</figcaption><button type="button" class="static-orig-link" data-fig-open="${Yh(e.id)}" data-non-report>View original</button></div></figure>`}function ng(e,{sectionId:t,headingIdxRef:n,mode:r,scene:i,nextFigNum:a,figInsertedRef:o,datasets:s}){switch(e.type){case`part-heading`:return`<h2 class="part-heading" data-anchor-id="${Yh(`${t}__h${n.n++}`)}">${Yh(e.text)}</h2>`;case`section-heading`:return`<h3 class="section-heading" data-anchor-id="${Yh(`${t}__h${n.n++}`)}">${Yh(e.text)}</h3>`;case`subheading`:return`<h4 class="subheading" data-anchor-id="${Yh(`${t}__h${n.n++}`)}">${Yh(e.text)}</h4>`;case`paragraph`:return`<p class="prose">${Qh(e.text)}</p>`;case`table`:{let t=new Set(e.numericCols||[]);return`<div class="table-wrap"><table class="data-table"><thead><tr>${e.headers.map((e,n)=>`<th scope="col"${t.has(n)?` class="is-num"`:``}>${Yh(e)}</th>`).join(``)}</tr></thead><tbody>${e.rows.map(e=>`<tr>`+e.map((e,n)=>`<td${t.has(n)?` class="is-num"`:``}>${Qh(e)}</td>`).join(``)+`</tr>`).join(``)}</tbody></table></div>`}case`figure`:return r===`static`?tg(e,s):(o.done=!0,eg({figNum:a(),sectionId:t,scene:i,reportFig:e}));case`list`:return`${e.intro?`<p class="list-intro">${Yh(e.intro)}</p>`:``}<ol class="report-list">${e.items.map(e=>`<li><span class="li-num">${Yh(e.num)}</span><span class="li-body">${Qh(e.text)}</span></li>`).join(``)}</ol>`;case`references`:return`<ol class="ref-list">${e.items.map((e,t)=>{let n=e.note?`<p class="ref-note">${Yh(e.note)}</p>`:``;return`<li class="ref-item" id="ref-${t}"><p class="ref-entry">${Xh(e.text)}</p>${n}</li>`}).join(``)}</ol>`;default:throw Error(`Unknown block type: ${e.type}`)}}function rg(e){let t=document.createElement(`div`);t.className=`wiki-shell`;let n=document.createElement(`button`);n.type=`button`,n.className=`toc-reopen`,n.setAttribute(`aria-label`,`Show table of contents`),n.setAttribute(`data-non-report`,``),n.textContent=`Contents`,n.hidden=!0,document.body.appendChild(n);let r=document.createElement(`aside`);r.className=`toc-aside`,r.setAttribute(`aria-label`,`Table of contents`),r.setAttribute(`data-non-report`,``),r.innerHTML=`<div class="toc-inner"><div class="toc-head"><span class="toc-heading">Contents</span><button type="button" class="toc-toggle" aria-expanded="true" aria-label="Hide table of contents">hide</button></div><nav class="toc-nav"><ol class="toc-list" id="toc-list"></ol></nav></div>`;let i=document.createElement(`div`);i.className=`wiki-gutter`,i.setAttribute(`aria-hidden`,`true`),t.append(r,i),e.appendChild(t);let a=new Map,o=[],s=[{id:`hero`,part:``,label:`Top`,isSub:!1}];for(let e of Sh){for(let t of e.blocks)t.type===`figure`&&a.set(t.id,t),t.type===`references`&&(o=t.items);let t=e.id.startsWith(`a2-`)||e.id.startsWith(`a3-`);s.push({id:e.id,part:e.part,label:e.railLabel,isSub:t})}let c=r.querySelector(`.toc-toggle`),l=e=>{t.classList.toggle(`toc-collapsed`,e),c.setAttribute(`aria-expanded`,e?`false`:`true`),n.hidden=!e};return c.addEventListener(`click`,()=>l(!0)),n.addEventListener(`click`,()=>l(!1)),{shell:t,tocAside:r,tocListEl:r.querySelector(`#toc-list`),rightGutter:i,figureMap:a,refItems:o,tocEntries:s}}function ig(e){let t=document.createElement(`div`);t.className=`wiki-main`;let n=document.createElement(`header`);n.id=`hero`,n.className=`hero-block`,n.setAttribute(`data-non-report`,``),n.innerHTML=`
    <div class="hero-header-copy">
      <p class="hero-meta" data-hero-in><span>AY 2026/27 Trimester 1</span><span class="meta-sep" aria-hidden="true">·</span><span>Group 09</span></p>
      <h1 class="hero-course" data-hero-in data-anchor-id="hero">ACC2125-Data Analytics and Machine Learning</h1>
      <dl class="hero-counters" data-hero-in>
        <div class="hero-counter"><dt>listings</dt><dd data-counter="25715">25,715</dd></div>
        <div class="hero-counter"><dt>active listings</dt><dd>15,463</dd></div>
        <div class="hero-counter"><dt>councils</dt><dd>30</dd></div>
      </dl>
    </div>
    <figure class="hero-figure" data-fig-slot="hero">
      <div class="fig-viewport hero-viewport" data-viewport="hero"></div>
    </figure>
  `,t.appendChild(n);let r=document.createElement(`article`);r.className=`article-col`,r.setAttribute(`aria-label`,`Final report`);let i=[{id:`hero`,part:``,label:`Top`,isSub:!1,el:n}],a=0,o=()=>++a;for(let t of Sh){let n=e.get(t.id)||null,a=document.createElement(`section`);a.id=t.id,a.className=`report-sec sec-${t.id}`;let s=t.blocks.some(e=>e.type===`figure`),c=t.id!==`references`,l=n?.afterParagraph??0,u={done:!1},d={n:0},f=[],p=0;for(let e of t.blocks)c&&!s&&!u.done&&e.type===`list`&&(u.done=!0,f.push(eg({figNum:o(),sectionId:t.id,scene:n,reportFig:null}))),f.push(ng(e,{sectionId:t.id,headingIdxRef:d,mode:`interactive`,scene:n,nextFigNum:o,figInsertedRef:u})),e.type===`paragraph`&&(c&&!s&&!u.done&&p===l&&(u.done=!0,f.push(eg({figNum:o(),sectionId:t.id,scene:n,reportFig:null}))),p++);a.innerHTML=f.join(`
`),r.appendChild(a);let m=t.id.startsWith(`a2-`)||t.id.startsWith(`a3-`);i.push({id:t.id,part:t.part,label:t.railLabel,isSub:m,el:a})}t.appendChild(r);let s=[];for(let e of t.querySelectorAll(`[data-fig-slot]`)){let t=e.dataset.figSlot;s.push({id:t,isHero:t===`hero`,wrapEl:e,stickyEl:e.querySelector(`.scrolly-fig-sticky`)||e,viewportEl:e.querySelector(`[data-viewport]`),placeholderEl:e.querySelector(`.fig-placeholder`),progressFill:e.querySelector(`.fig-progress-fill`),stepTag:e.querySelector(`.fig-step-tag`),stepCaption:e.querySelector(`.fig-step-caption`),pips:[...e.querySelectorAll(`.fig-pip`)]})}return{mainCol:t,heroEl:n,sections:i,slots:s}}function ag(e){let t=document.createElement(`div`);t.className=`wiki-main wiki-main-static`;let n=document.createElement(`header`);n.id=`hero`,n.className=`hero-block hero-static`,n.setAttribute(`data-non-report`,``),n.innerHTML=`
    <div class="hero-header-copy">
      <p class="hero-meta"><span>AY 2026/27 Trimester 1</span><span class="meta-sep" aria-hidden="true">·</span><span>Group 09</span></p>
      <h1 class="hero-course" data-anchor-id="hero">ACC2125-Data Analytics and Machine Learning</h1>
      <dl class="hero-counters">
        <div class="hero-counter"><dt>listings</dt><dd>25,715</dd></div>
        <div class="hero-counter"><dt>active listings</dt><dd>15,463</dd></div>
        <div class="hero-counter"><dt>councils</dt><dd>30</dd></div>
      </dl>
    </div>
  `,t.appendChild(n);let r=document.createElement(`article`);r.className=`article-col article-static`,r.setAttribute(`aria-label`,`Final report`);let i=[{id:`hero`,part:``,label:`Top`,isSub:!1,el:n}];for(let t of Sh){let n=document.createElement(`section`);n.id=t.id,n.className=`report-sec sec-${t.id}`;let a={n:0},o=[];for(let n of t.blocks)o.push(ng(n,{sectionId:t.id,headingIdxRef:a,mode:`static`,datasets:e}));n.innerHTML=o.join(`
`),r.appendChild(n);let s=t.id.startsWith(`a2-`)||t.id.startsWith(`a3-`);i.push({id:t.id,part:t.part,label:t.railLabel,isSub:s,el:n})}return t.appendChild(r),{mainCol:t,heroEl:n,sections:i}}function og({refItems:e,onJump:t}){let n=document.getElementById(`cite-popup`),r=document.getElementById(`cite-popup-body`),i=document.getElementById(`cite-popup-jump`),a=null,o=null;function s(t){let s=Number(t.dataset.ref),c=e[s];if(!c)return;clearTimeout(a),o=t,r.innerHTML=Xh(c.text),i.setAttribute(`href`,`#ref-${s}`),i.dataset.refTarget=String(s),n.hidden=!1;let l=t.getBoundingClientRect(),u=n.getBoundingClientRect(),d=l.left+l.width*.5-u.width*.5;d=Math.max(12,Math.min(window.innerWidth-u.width-12,d));let f=l.top-u.height-10;f<12&&(f=l.bottom+10),f=Math.max(12,Math.min(window.innerHeight-u.height-12,f)),n.style.left=`${Math.round(d)}px`,n.style.top=`${Math.round(f)}px`}function c(){clearTimeout(a),a=setTimeout(()=>{n.hidden=!0,o=null},180)}function l(e){n.hidden=!0;let r=document.getElementById(`ref-${e}`);r&&(t?.(r),r.classList.remove(`is-flash`),r.offsetWidth,r.classList.add(`is-flash`))}return document.addEventListener(`pointerover`,e=>{let t=e.target.closest(`.cite-link`);t&&s(t)}),document.addEventListener(`pointerout`,e=>{let t=e.target.closest(`.cite-link`);t&&t===o&&c()}),document.addEventListener(`focusin`,e=>{let t=e.target.closest(`.cite-link`);t&&s(t)}),document.addEventListener(`focusout`,e=>{e.target.closest(`.cite-link`)&&!n.contains(e.relatedTarget)&&c()}),document.addEventListener(`click`,e=>{let t=e.target.closest(`.cite-link`);t&&(e.preventDefault(),l(Number(t.dataset.ref)))}),n.addEventListener(`pointerenter`,()=>clearTimeout(a)),n.addEventListener(`pointerleave`,c),window.addEventListener(`scroll`,()=>{n.hidden||(n.hidden=!0,o=null)},{passive:!0}),i.addEventListener(`click`,e=>{e.preventDefault(),l(Number(i.dataset.refTarget))}),{showFirst(){let e=document.querySelector(`.cite-link`);e&&s(e)},showIndex(e){let t=document.querySelectorAll(`.cite-link`);t[e]&&s(t[e])},hide(){n.hidden=!0}}}function sg({figureMap:e,onOpen:t,onClose:n}){let r=document.getElementById(`lightbox`),i=document.getElementById(`lightbox-media`),a=document.getElementById(`lightbox-caption`),o=document.getElementById(`lightbox-title`),s=r.querySelector(`.lightbox-close`);function c(n){let s=e.get(n);s&&(o.textContent=s.images.length>1?`Original report figure (${s.images.length} panels)`:`Original report figure`,i.innerHTML=s.images.map(e=>`<figure class="lb-panel"><img src="/melbourne-report/${Yh(e.src)}" alt="${Yh(e.alt)}" />`+(s.images.length>1&&e.label?`<figcaption class="lb-panel-label">${Yh(e.label)}</figcaption>`:``)+`</figure>`).join(``),a.textContent=s.caption,t?.(),r.showModal())}if(document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-fig-open]`);t&&c(t.dataset.figOpen)}),s.addEventListener(`click`,()=>r.close()),r.addEventListener(`close`,()=>{r.returnValue=``,n?.()}),!(`closedBy`in HTMLDialogElement.prototype)){let e=e=>{let t=r.getBoundingClientRect();return e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom},t=!1;r.addEventListener(`pointerdown`,n=>{t=e(n)}),r.addEventListener(`pointerup`,n=>{t&&e(n)&&r.close()})}return{openFigure:c,dialog:r}}var cg={width:{dark:1,light:1.75},lightGain:1.95,faintBoost:1.6},lg=hm+`
  attribute vec4 aColor;
  attribute float aT;
  varying vec4 vColor;
  varying float vT;
  void main() {
    vColor = aColor;
    vT = aT;
    gl_Position = quadLinePos(position, 1.0);
  }
`,ug=gm+`
  uniform float uOpacity;
  uniform vec2 uLightK; // gain, extra gain for faint lines
  uniform float uReveal;
  varying vec4 vColor;
  varying float vT;
  void main() {
    if (vT > uReveal + 0.0001) discard;
    float faint = 1.0 + uLightK.y * (1.0 - smoothstep(0.12, 0.5, vColor.a));
    vec4 o = themeOut(vColor.rgb, vColor.a * uOpacity * quadLineCover(), uLightK.x * faint);
    // light theme: a line never reaches full coverage, so the post pass's density deepening (Stage deepFrom) leaves solid
    // lines their own ink (stop 69's red and orange stayed apart); dark mode has o.a = 0 and is untouched
    float cap = mix(1.0, 0.85, uLight);
    if (o.a > cap) o *= cap / o.a;
    gl_FragColor = o;
  }
`,dg=class{constructor(){this.uniforms={...Pp,uOpacity:{value:1},uReveal:{value:1},uLineW:{value:new ot(cg.width.dark,cg.width.light)},uLightK:{value:new ot(cg.lightGain,cg.faintBoost)}},this.material=new li({uniforms:this.uniforms,vertexShader:lg,fragmentShader:Jp+ug,transparent:!0,depthTest:!1,depthWrite:!1,side:2,...Fp}),this.object3d=new Mr(new cr,this.material),this.object3d.frustumCulled=!1,this.object3d.visible=!1,this._v=0}set(e){let t=new Float32Array(e.length*6),n=new Float32Array(e.length*8),r=new Float32Array(e.length*2);e.forEach((e,i)=>{t.set(e.a,i*6),t.set(e.b,i*6+3),n.set([...e.color,e.alpha,...e.color,e.alpha],i*8),r[i*2]=e.ta??0,r[i*2+1]=e.tb??0});let i=this.object3d.geometry;this.object3d.geometry=mm(t,{aColor:{size:4,data:n},aT:{size:1,data:r}}),i.dispose()}set reveal(e){this.uniforms.uReveal.value=e}get reveal(){return this.uniforms.uReveal.value}set visibility(e){this._v=e,this.uniforms.uOpacity.value=e,this.object3d.visible=e>.002}get visibility(){return this._v}},fg=`
  attribute vec4 aColor;
  attribute float aSize;
  uniform float uPixelRatio;
  uniform float uRefDist;
  uniform float uSizePow;
  uniform float uMaxPx;
  varying vec4 vCol;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float dist = max(-mv.z, 0.1);
    float s = aSize * uPixelRatio * pow(uRefDist / dist, uSizePow);
    gl_PointSize = clamp(s, 0.0, uMaxPx * uPixelRatio);
    vCol = aColor;
    gl_Position = projectionMatrix * mv;
  }
`,pg=`
  uniform float uOpacity;
  uniform float uFall;
  varying vec4 vCol;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float r2 = dot(c, c) * 4.0;
    if (r2 >= 1.0) discard;
    float a = exp(-r2 * uFall * (1.0 + 1.6 * uLight)) * (1.0 - smoothstep(0.6, 1.0, r2)) * vCol.a * uOpacity;
    gl_FragColor = themeGlow(vCol.rgb, a, 1.8);
  }
`,mg=class{constructor(e,t,{fall:n=6,refDist:r=68,sizePow:i=.45,maxPx:a=300}={}){this.count=t,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.size=new Float32Array(t),this.uniforms={...Pp,uPixelRatio:{value:e.pixelRatio},uRefDist:{value:r},uSizePow:{value:i},uMaxPx:{value:a},uOpacity:{value:1},uFall:{value:n}};let o=new cr;this.aPos=new qn(this.pos,3).setUsage(Ie),this.aCol=new qn(this.col,4).setUsage(Ie),this.aSize=new qn(this.size,1).setUsage(Ie),o.setAttribute(`position`,this.aPos),o.setAttribute(`aColor`,this.aCol),o.setAttribute(`aSize`,this.aSize),this.material=new li({uniforms:this.uniforms,vertexShader:fg,fragmentShader:Jp+pg,transparent:!0,depthTest:!1,depthWrite:!1,...Fp}),this.object3d=new qr(o,this.material),this.object3d.frustumCulled=!1,this.object3d.visible=!1,this._v=0,e.onResize(e=>this.uniforms.uPixelRatio.value=e.pixelRatio)}commit(){this.aPos.needsUpdate=this.aCol.needsUpdate=this.aSize.needsUpdate=!0}set visibility(e){this._v=e,this.uniforms.uOpacity.value=e,this.object3d.visible=e>.002}get visibility(){return this._v}},hg={x:2.5,y:2,z:1,distance:58,azimuth:-14,polar:64,fit:.55};function gg(e,t,n,r,i=96){let a=[];for(let o=0;o<i;o++){let s=o/i*Math.PI*2,c=(o+1)/i*Math.PI*2;a.push({a:[Math.cos(s)*e,t,Math.sin(s)*e],b:[Math.cos(c)*e,t,Math.sin(c)*e],color:n,alpha:r})}return a}var _g={id:`hero`,mount(e){let{stage:t,registerLayout:n,registerMapLike:r}=e,i=Np(),a=om(`#4fc1b8`),o=om(`#6c84ab`);r(`hero_spires`),n(`hero_spires`,e=>{let t=e.count,{x:n,y:r,drop_stage:a,price:s,reviews_ltm:c,rand:l}=e.cols,u=new Float32Array(t*3),d=new Float32Array(t*3),f=new Float32Array(t),p=new Float32Array(t),m=new Float32Array(t),[h,,g]=e.meta.stats.price_q,_=Math.log(h),v=Math.log(g)-_,y=new Map,b=e=>Math.floor(n[e]/.3)*8192+Math.floor(r[e]/.3);for(let e=0;e<t;e++)y.set(b(e),(y.get(b(e))||0)+1);for(let e=0;e<t;e++){let t=n[e],h=-r[e],g=Math.hypot(t,h),x=a[e]===0,S=Math.max(1,(y.get(b(e))||1)/14),C;if(x){let t=Number.isFinite(s[e])?Math.min(1,Math.max(0,(Math.log(Math.max(15,s[e]))-_)/v)):.4,n=Number.isFinite(c[e])?Math.min(1,c[e]/48):0,r=1/(1+g/14);C=.25+(3.2*t+6.4*n)*(.35+.65*r)+l[e]*.65;let a=Math.min(1,n*.8+t*.25);d[e*3]=i.amber[0]+(i.amberHot[0]-i.amber[0])*a,d[e*3+1]=i.amber[1]+(i.amberHot[1]-i.amber[1])*a,d[e*3+2]=i.amber[2]+(i.amberHot[2]-i.amber[2])*a,p[e]=.88/S**.52*(.75+.25*a),f[e]=(.95+.45*t)/S**.2,m[e]=Math.min(1,g/65)*.7}else C=-1.1-l[e]*2.4,d[e*3]=o[0]*.78,d[e*3+1]=o[1]*.82,d[e*3+2]=o[2]*.9,p[e]=.36/S**.5,f[e]=.82/S**.2,m[e]=.3+Math.min(1,g/65)*.7;u[e*3]=t,u[e*3+1]=C,u[e*3+2]=h}return{positions:u,colors:d,sizes:f,alphas:p,order:m}}),this.rings=new dg,this.rings.set([...gg(5,0,i.amber,.24,72),...gg(15,0,i.slate,.16,96),...gg(30,0,i.slate,.11,112),{a:[0,-2.5,0],b:[0,12.2,0],color:i.amberHot,alpha:.38},{a:[0,0,0],b:[42,0,0],color:a,alpha:.14}]),this.rings.visibility=0,t.add(this.rings.object3d),this.beacon=new mg(t,2,{fall:3.2,refDist:58,maxPx:140}),this.beacon.pos.set([0,.4,0,0,11,0]),this.beacon.col.set([i.amber[0],i.amber[1],i.amber[2],.55,i.amberHot[0],i.amberHot[1],i.amberHot[2],.45]),this.beacon.size.set([46,20]),this.beacon.commit(),this.beacon.visibility=0,t.add(this.beacon.object3d)},enter(){this.rings&&(this.rings.visibility=1),this.beacon&&(this.beacon.visibility=1)},leave(){this.rings&&(this.rings.visibility=0),this.beacon&&(this.beacon.visibility=0)},update(e,t,n){let{rig:r,field:i,lines:a,env:o}=t,s=o.reduced?0:Math.sin(n*.16)*5;Zm(r,{...hg,azimuth:hg.azimuth+s}),i.showLayout(`hero_spires`),i.setShape(0,0),i.setDrift(0),i.highlight(null),a.visibility=.85,this.rings.visibility=1,this.beacon.visibility=1},finishIntro(e){let t=this._introTl;t&&(this._introTl=null,t.progress(1),t.kill()),e?.field&&(e.field.uniforms.uIntro.value=1),e?.lines&&(e.lines.draw=1),e?.rig&&(e.rig.dolly=1)},intro(e,t){let{field:n,lines:r,rig:i,env:a}=e,o=[...t.querySelectorAll(`[data-hero-in]`)],s=t.querySelector(`[data-counter]`);if(!n||a.reduced)return n&&(n.uniforms.uIntro.value=1),r&&(r.draw=1),s&&(s.textContent=`25,715`),Ep.set(o,{autoAlpha:1,y:0}),Promise.resolve();let c={intro:0,draw:0,dolly:1.14};return Ep.set(o,{autoAlpha:0,y:12}),n.uniforms.uIntro.value=0,r.draw=0,i.dolly=c.dolly,new Promise(e=>{let t=Ep.timeline({onComplete:()=>{this._introTl=null,e()}});this._introTl=t,t.to(c,{draw:1,duration:.9,ease:`power1.inOut`,onUpdate:()=>r.draw=c.draw},0),t.to(c,{intro:1,duration:2,ease:`power2.out`,onUpdate:()=>{n.uniforms.uIntro.value=c.intro,s&&(s.textContent=Math.round(c.intro*25715).toLocaleString(`en-US`))},onComplete:()=>{n.uniforms.uIntro.value=1,s&&(s.textContent=`25,715`)}},.2),t.to(c,{dolly:1,duration:2.2,ease:`power2.out`,onUpdate:()=>i.dolly=c.dolly},0),o.forEach((e,n)=>{t.to(e,{autoAlpha:1,y:0,duration:.65,ease:`power2.out`},.1+n*.12)})})}},vg={x:4,y:0,z:2,distance:112,azimuth:0,polar:8,fit:.55,flat:1},yg={x:1.5,y:0,z:1,distance:76,azimuth:0,polar:8,fit:.55,flat:1},bg=ih({distance:60}),xg=[{name:`Albert Park`,x:.4309,z:3.9917},{name:`Melbourne Park`,x:1.3543,z:.8846},{name:`MCG`,x:1.7853,z:.7077},{name:`Flemington`,x:-4.4763,z:-2.5321}];function Sg(e,t,n,r,i,a,o=96){let s=[];for(let c=0;c<o;c++){let l=c/o*Math.PI*2,u=(c+1)/o*Math.PI*2;s.push({a:[e+Math.cos(l)*n,r,t+Math.sin(l)*n],b:[e+Math.cos(u)*n,r,t+Math.sin(u)*n],color:i,alpha:a})}return s}function Cg(e,t,n,r){let i=[];for(let a of e)for(let e of a.rings){let a=e.length/2;for(let o=0;o<a-1;o++)i.push({a:[e[o*2],t,-e[o*2+1]],b:[e[(o+1)*2],t,-e[(o+1)*2+1]],color:n,alpha:r})}return i}function wg(e,t=``,n=``){let r=document.createElement(`div`);return r.className=`sc-pin${n?` ${n}`:``}`,r.style.opacity=`0`,r.innerHTML=`<div class="sc-pin-in"><span class="sc-pin-title">${e}</span>`+(t?`<span class="sc-pin-detail">${t}</span>`:``)+`</div>`,r}var Tg={id:`a1-selection`,figureTitle:`From 25,715 raw listings to the 15,463 active sample`,heightVh:260,afterParagraph:0,captions:[{at:0,text:`All 25,715 Inside Airbnb listings across Melbourne’s 30 local government areas, running from CBD towers to farm stays 80 km out.`},{at:.25,text:`External datasets joined to the sample: DFFH long-term rents across 30 areas, Victorian school terms and holidays, and four major events.`},{at:.5,text:`Cleaning removes 7,388 never-reviewed or pre-2023 listings, 2,501 unpriced, 159 above $1,226 (p99), and 204 missing room counts — leaving 15,463 (60.1%).`},{at:.78,text:`Active sample mix: 12,389 entire homes (80.1%, up from 73.7%), 2,943 private rooms (19.0%), 113 shared rooms and 18 hotel rooms.`}],mount(e){let{stage:t,data:n,pins:r,registerLayout:i,registerMapLike:a}=e,o=rh();a(`a1_map`),i(`a1_map`,e=>{let t=e.count,{x:n,y:r,drop_stage:i,price:a}=e.cols,s=new Float32Array(t*3),c=new Float32Array(t*3),l=new Float32Array(t),u=new Float32Array(t),d=new Map,f=e=>Math.floor(n[e]/.28)*8192+Math.floor(r[e]/.28);for(let e=0;e<t;e++)d.set(f(e),(d.get(f(e))||0)+1);let[p,,m]=e.meta.stats.price_q,h=Math.log(p),g=Math.log(m)-h;for(let e=0;e<t;e++){s[e*3]=n[e],s[e*3+1]=0,s[e*3+2]=-r[e];let t=Math.max(1,(d.get(f(e))||1)/12),p=i[e]===0,m=p?o.amber:o.slate;c[e*3]=m[0],c[e*3+1]=m[1],c[e*3+2]=m[2],u[e]=(p?.86:.44)/t**.55;let _=.92;p&&Number.isFinite(a[e])&&(_=.86+.36*Math.min(1,Math.max(0,(Math.log(Math.max(15,a[e]))-h)/g))),l[e]=_/t**.2}return{positions:s,colors:c,sizes:l,alphas:u}});let s=n.meta.stats.dropCounts,c=s[0],l=s[2],u=s[3],d=s[4],f=s[6],p=c-l,m=l-u,h=u-d,g=d-f,_=(f/c*100).toFixed(1),v=24.5,y=oh(0,26e3,-10,v),b=2.15,x=[{label:`Raw snapshot`,xStart:0,xEnd:c,value:c,baseValue:0,valueText:c.toLocaleString(`en-AU`),cls:`is-slate`,color:o.slate,alpha:.84,cy:9.2},{label:`Dormant / ≤ 2022`,xStart:l,xEnd:c,value:p,baseValue:l,valueText:`−${p.toLocaleString(`en-AU`)}`,cls:`is-red`,color:o.red,alpha:.9,cy:5.4},{label:`No price`,xStart:u,xEnd:l,value:m,baseValue:u,valueText:`−${m.toLocaleString(`en-AU`)}`,cls:`is-red`,color:o.red,alpha:.9,cy:1.6},{label:`Above $1,226 (p99)`,xStart:d,xEnd:u,value:h,baseValue:d,valueText:`−${h.toLocaleString(`en-AU`)}`,cls:`is-red`,color:o.red,alpha:.95,cy:-2.2},{label:`Missing counts`,xStart:f,xEnd:d,value:g,baseValue:f,valueText:`−${g.toLocaleString(`en-AU`)}`,cls:`is-red`,color:o.red,alpha:.95,cy:-6},{label:`Active sample`,xStart:0,xEnd:f,value:f,baseValue:0,valueText:`${f.toLocaleString(`en-AU`)} (${_}%)`,cls:`is-amber`,color:o.amber,alpha:.94,cy:-9.8}],S=[],C=[];for(let e of x){let t={x0:y(e.xStart),x1:y(e.xEnd),y0:e.cy-b*.5,y1:e.cy+b*.5};C.push(t),S.push({label:e.label,categoryLabel:e.label,group:`waterfall`,orientation:`horizontal`,value:e.value,baseValue:e.baseValue,rect:t})}let w=Array.from({length:n.count},(e,t)=>t);i(`a1_waterfall`,e=>{let t=uh(e.count),n=dh(w,x.map(e=>e.value),{minPerItem:48});for(let e=0;e<x.length;e++){let r=x[e];fh(C[e],n[e],t,{color:r.color,alpha:r.alpha,size:r.value<500?1.05:.9,orderBase:e*.14,orderSpan:.18,orientation:`horizontal`})}return t});let{drop_stage:T,room_type:E}=n.cols,D=[[],[],[]],O=0,k=0;for(let e=0;e<n.count;e++){if(T[e]!==0)continue;let t=E[e];t===0?D[0].push(e):t===1?D[1].push(e):(D[2].push(e),t===2?O++:t===3&&k++)}let A=D[0].length,j=D[1].length,M=D[2].length,N=Math.max(1,A+j+M),P=A/N*100,F=j/N*100,I=M/N*100,L=oh(0,100,-24,24),R=-5.2,z=.8,B=[{label:`Entire homes`,base:0,val:P,count:A,indices:D[0],color:o.amber,alpha:.94,size:.95},{label:`Private rooms`,base:P,val:F,count:j,indices:D[1],color:o.teal,alpha:.92,size:.98},{label:`Shared & hotel`,base:P+F,val:I,count:M,indices:D[2],color:o.violet,alpha:.98,size:1.15}],ee=B.map(e=>({label:e.label,categoryLabel:e.label,group:`room-mix`,orientation:`horizontal`,value:e.val,baseValue:e.base,stacked:!0,rect:{x0:L(e.base),x1:L(e.base+e.val),y0:R,y1:z}}));i(`a1_mix`,e=>{let t=uh(e.count),n=.12;for(let e=0;e<B.length;e++){let r=B[e],i=e===0?L(r.base):L(r.base)+n*.5,a=e===B.length-1?L(r.base+r.val):L(r.base+r.val)-n*.5;fh({x0:i,x1:Math.max(i+.08,a),y0:R,y1:z},r.indices,t,{color:r.color,alpha:r.alpha,size:r.size,orderBase:e*.25,orderSpan:.22,orientation:`horizontal`})}return t}),this.mapRingLines=new dg,this.mapRingLines.set(Sg(0,0,20,.05,o.slate,.42,96)),t.add(this.mapRingLines.object3d),this.lgaHighlightLines=new dg,this.lgaHighlightLines.set(Cg(n.councils,.04,o.amber,.34)),t.add(this.lgaHighlightLines.object3d),this.venueSparks=new mg(t,xg.length,{fall:5.5,refDist:76,maxPx:42}),xg.forEach((e,t)=>{this.venueSparks.pos.set([e.x,.08,e.z],t*3),this.venueSparks.col.set([o.teal[0],o.teal[1],o.teal[2],.98],t*4),this.venueSparks.size[t]=24}),this.venueSparks.commit(),t.add(this.venueSparks.object3d),this.chart=_h(e,this.id),this.chart.defineStep(0,{kind:`map`,lines:[],marks:[],legend:{cls:`ck-pos-tl`,items:[{color:`amber`,label:`Active sample (15,463)`},{color:`slate`,label:`Removed in cleaning (10,252)`}]}}),this.chart.defineStep(1,{kind:`map`,lines:[],marks:[],legend:{cls:`ck-pos-tl`,items:[{color:`amber`,label:`30 LGAs (DFFH rents)`},{color:`teal`,label:`4 major event venues`}]}});let V=[{a:[-10,-12],b:[v,-12],kind:`baseline`},{a:[-10,-12],b:[-10,11.2],kind:`axis`}],te=[],H=[{text:`Listings`,at:[7.25,-16.4],role:`axis-title`,align:`center`,valign:`top`}];for(let e of[0,5e3,1e4,15e3,2e4,25e3]){let t=y(e);e>0&&V.push({a:[t,-12],b:[t,11.2],kind:`gridline`}),te.push({at:[t,-12],dx:0,dy:6}),H.push({text:e===0?`0`:`${e/1e3}k`,at:[t,-12],offset:[0,9],role:`tick`,align:`center`,valign:`top`})}let U=[c,l,u,d,f];for(let e=0;e<U.length;e++){let t=y(U[e]);V.push({a:[t,x[e].cy-b*.5],b:[t,x[e+1].cy+b*.5],kind:`leader`,dashed:!0,registerAxis:!1})}for(let e of x)H.push({text:e.label,at:[-10,e.cy],offset:[-12,0],role:`category`,align:`right`,valign:`middle`,categoryFor:e.label},{text:e.valueText,at:[y(e.xEnd),e.cy],offset:[10,0],role:`value`,align:`left`,valign:`middle`,cls:e.cls});this.chart.defineStep(2,{kind:`bar`,lines:V,ticks:te,labels:H,legend:{at:[v,14.4],align:`right`,valign:`middle`,items:[{color:`slate`,label:`Raw total`},{color:`red`,label:`Removed`},{color:`amber`,label:`Active sample`}]},marks:S});let ne=-8.4,re=L(73.7),W=(100-Number(P.toFixed(1))-Number(F.toFixed(1))).toFixed(1),ie=[{a:[-24,ne],b:[24,ne],kind:`baseline`},{a:[re,ne],b:[re,2.2],kind:`refline`,dashed:!0},{a:[L(P+F*.5),1],b:[L(P+F*.5),3.4],kind:`leader`,cls:`is-teal`,registerAxis:!1},{a:[L(P+F+I*.5),1],b:[L(P+F+I*.5),8.8],kind:`leader`,cls:`is-violet`,registerAxis:!1}],ae=[],oe=[{text:`Share of active listings (%, n = ${N.toLocaleString(`en-AU`)})`,at:[0,-13.100000000000001],role:`axis-title`,align:`center`,valign:`top`},{text:`Entire homes · ${A.toLocaleString(`en-AU`)} (${P.toFixed(1)}%)`,at:[L(P*.4),3.4],offset:[0,-6],role:`category`,align:`center`,valign:`bottom`,cls:`is-amber`,categoryFor:`Entire homes`},{text:`Private rooms · ${j.toLocaleString(`en-AU`)} (${F.toFixed(1)}%)`,at:[L(P+F*.5),3.7],offset:[0,-6],role:`category`,align:`center`,valign:`bottom`,cls:`is-teal`,categoryFor:`Private rooms`},{text:`Shared (${O}) & hotel (${k}) · ${W}%`,at:[24,9.2],offset:[0,-4],role:`category`,align:`right`,valign:`bottom`,cls:`is-violet`,categoryFor:`Shared & hotel`}];for(let e of[0,20,40,60,80,100]){let t=L(e);ie.push({a:[t,ne],b:[t,-5.7],kind:`gridline`}),ae.push({at:[t,ne],dx:0,dy:6}),oe.push({text:`${e}%`,at:[t,ne],offset:[0,10],role:`tick`,align:`center`,valign:`top`})}this.chart.defineStep(3,{kind:`stacked-bar`,lines:ie,ticks:ae,labels:oe,legend:{at:[-24,14.5],align:`left`,valign:`middle`,items:[{color:`amber`,label:`Entire homes`},{color:`teal`,label:`Private rooms`},{color:`violet`,label:`Shared & hotel`}]},marks:ee}),this.pinGroups={map:[],datasets:[],waterfall:[],mix:[]},this.pinGroups.map.push(r.addFlag(wg(`25,715 raw listings`,`90 fields · 16 Sep 2026`,`is-amber is-right`),[0,0,0],{height:0,offset:[-120,-90]}),r.add(wg(`30 Melbourne LGAs`,`CBD to 80 km out`,`is-slate is-left`),[24,0,-14]),r.add(wg(`20 km`,``,`is-dim is-bare`),[0,0,20],{offset:[0,20]}));let G=n.councils.find(e=>e.name===`Hobsons Bay`),se=G?[G.centroid[0],0,-G.centroid[1]]:[-13.5,0,4.5];this.pinGroups.datasets.push(r.addFlag(wg(`4 major event venues`,`Albert Park · Melb Park · MCG · Flemington`,`is-teal is-left`),[xg[1].x,.08,xg[1].z],{height:0,offset:[95,-96],cls:`cl-teal`}),r.addFlag(wg(`30 LGAs, DFFH rents`,`Sep 2025 – Jun 2026`,`is-amber is-right`),se,{height:0,offset:[-70,72],below:!0}),r.add(wg(`School terms & holidays`,`DataVic · 2018–2030 (by date)`,`is-slate is-left`),[9,0,14])),this.pinGroups.mix.push(r.addFlag(wg(`Up from 73.7% raw`,`Private rooms more often unpriced`,`is-amber is-right`),[re,2.2,0],{height:6.4,offset:[-110,-4]})),this._hideAll()},_setGroupOpacity(e,t){let n=t<.01?0:Math.min(1,t);for(let t of e)t.setOpacity?t.setOpacity(n):t.el.style.opacity=String(n)},_hideAll(){this.chart.hideAll(),this.mapRingLines.visibility=0,this.lgaHighlightLines.visibility=0,this.venueSparks.visibility=0;for(let e of Object.values(this.pinGroups))this._setGroupOpacity(e,0)},enter(){},leave(){this._hideAll()},update(e,t){let{rig:n,field:r,lines:i}=t,a=qm(Ym(e,.2,.32)),o=qm(Ym(e,.45,.58)),s=qm(Ym(e,.74,.86));e<.45?Xm(n,vg,yg,a,Jm(Ym(e,.2,.32))):e<.74?Xm(n,yg,bg,o,Jm(Ym(e,.45,.58))):Xm(n,bg,bg,s),e<.45?r.showLayout(`a1_map`):e<.74?o<=.001?r.showLayout(`a1_map`):o>=.999?r.showLayout(`a1_waterfall`):r.morph(`a1_map`,`a1_waterfall`,o,{stagger:.38,lift:1.5,liftZ:2}):s<=.001?r.showLayout(`a1_waterfall`):s>=.999?r.showLayout(`a1_mix`):r.morph(`a1_waterfall`,`a1_mix`,s,{stagger:.35,lift:1.5,liftZ:2.2}),r.setShape(0,0),r.setDrift(0),r.highlight(null);let c=ah(e,{exit:[.18,.26]}),l=ah(e,{enter:[.27,.34],exit:[.43,.49]}),u=ah(e,{enter:[.54,.61],exit:[.72,.78]}),d=ah(e,{enter:[.82,.89]});i.visibility=Math.max(c*.85,l*.55),this.mapRingLines.visibility=c,this.lgaHighlightLines.visibility=l,this.venueSparks.visibility=l,this.chart.setVisibilities({0:c,1:l,2:u,3:d}),this._setGroupOpacity(this.pinGroups.map,c),this._setGroupOpacity(this.pinGroups.datasets,l),this._setGroupOpacity(this.pinGroups.waterfall,u),this._setGroupOpacity(this.pinGroups.mix,d)}},Eg=ih({distance:60}),Dg=4,Og=100,kg=26,Ag=36/Dg,jg=5e3,Mg=[{key:`entire`,label:`Entire home`,max:100,pop:93.3,oth:78.6,fmt:e=>`${e.toFixed(1)}%`,cy:8},{key:`superhost`,label:`Superhost`,max:100,pop:79.7,oth:40.4,fmt:e=>`${e.toFixed(1)}%`,cy:1.6},{key:`price`,label:`Median price`,max:320,pop:265,oth:267,fmt:e=>`$${e}`,cy:-4.8},{key:`amenities`,label:`Median amenities`,max:55,pop:45,oth:42,fmt:e=>`${e}`,cy:-11.2}],Ng=[{id:`host`,title:`Popular rate: host`,cx:-15,bars:[{label:`Superhost`,value:18.5,fmt:`18.5%`,x:-18.5,colorKey:`amber`},{label:`Other host`,value:3.7,fmt:`3.7%`,x:-11.5,colorKey:`slate`}]},{id:`minstay`,title:`Popular rate: min stay`,cx:3,bars:[{label:`1-night`,value:16.4,fmt:`16.4%`,x:-.5,colorKey:`amber`},{label:`3-night`,value:1.5,fmt:`1.5%`,x:6.5,colorKey:`slate`}]},{id:`calendar`,title:`Next 90 nights unavail.`,cx:21,bars:[{label:`Popular`,value:46,fmt:`46%`,x:17.5,colorKey:`amber`},{label:`Others`,value:33,fmt:`33%`,x:24.5,colorKey:`slate`}]}];function Pg(e,t=``,n=``){let r=document.createElement(`div`);return r.className=`pa-pin${n?` ${n}`:``}`,r.style.opacity=`0`,r.innerHTML=`<div class="pa-pin-in"><span class="pa-pin-title">${e}</span>`+(t?`<span class="pa-pin-detail">${t}</span>`:``)+`</div>`,r}var Fg={id:`a2-q1-popular`,figureTitle:`Popular listings versus the rest of the active market`,heightVh:220,afterParagraph:0,captions:[{at:0,text:`Popular listings (top 10%, 36+ reviews in 12 months) comprise 1,590 listings with a median of 47 reviews versus 7 for the other 13,873.`},{at:.36,text:`Popular listings are far more likely to be entire homes (93.3% vs 78.6%) and run by Superhosts (79.7% vs 40.4%), at virtually the same median price ($265 vs $267).`},{at:.7,text:`Superhost listings are five times as likely to be popular (18.5% vs 3.7%), one-night minimums reach 16.4% vs 1.5%, and forward calendars are 46% vs 33% unavailable.`}],mount(e){let{pins:t,registerLayout:n,data:r}=e,i=rh(),{drop_stage:a,reviews_ltm:o}=r.cols,s=[],c=Array.from({length:kg},()=>[]);for(let e=0;e<r.count;e++){if(a[e]!==0)continue;s.push(e);let t=Number.isFinite(o[e])?Math.max(0,o[e]):0;c[t>=Og?25:Math.floor(t/Dg)].push(e)}let l=lh({x:-21.5,y:-10.5,width:49,height:22.5,xScale:oh(0,104,-21.5,27.5),yScale:oh(0,jg,-10.5,12)}),u=[],d=[],f=.24;for(let e=0;e<kg;e++){let t=c[e].length,n={x0:l.fx(e*Dg)+f*.5,x1:l.fx((e+1)*Dg)-f*.5,y0:l.fy(0),y1:l.fy(t)};d.push(n);let r=e<25?`${e*Dg}–${(e+1)*Dg-1}`:`100+`;u.push({label:r,group:`hist`,orientation:`vertical`,value:t,baseValue:0,rect:n})}n(`a2q1_hist`,e=>{let t=uh(e.count);for(let e=0;e<kg;e++){let n=e>=Ag;fh(d[e],c[e],t,{color:n?i.amber:i.slate,alpha:n?.94:.78,size:n?.95:.85,orderBase:e/kg*.45,orderSpan:.2,orientation:`vertical`})}return t});let p=1.65,m=.34,h=[],g=[];for(let e=0;e<Mg.length;e++){let t=Mg[e],n=oh(0,t.max,-10,16.5),r={x0:-10,x1:n(t.pop),y0:t.cy+m*.5,y1:t.cy+m*.5+p},a={x0:-10,x1:n(t.oth),y0:t.cy-m*.5-p,y1:t.cy-m*.5};h.push({rect:r,color:i.amber,alpha:.92,weight:r.x1-r.x0,orderBase:e*.14},{rect:a,color:i.slate,alpha:.8,weight:a.x1-a.x0,orderBase:e*.14+.06}),g.push({label:`${t.label} (Popular)`,categoryLabel:t.label,group:`row-${t.key}`,orientation:`horizontal`,value:t.pop,baseValue:0,rect:r},{label:`${t.label} (Others)`,categoryLabel:t.label,group:`row-${t.key}`,orientation:`horizontal`,value:t.oth,baseValue:0,rect:a})}n(`a2q1_traits`,e=>{let t=uh(e.count),n=dh(s,h.map(e=>e.weight));for(let e=0;e<h.length;e++){let r=h[e];fh(r.rect,n[e],t,{color:r.color,alpha:r.alpha,size:.92,orderBase:r.orderBase,orderSpan:.22,orientation:`horizontal`})}return t});let _=oh(0,50,-10.5,11),v=4.2,y=[],b=[];for(let e=0;e<Ng.length;e++){let t=Ng[e];for(let n=0;n<t.bars.length;n++){let r=t.bars[n],a={x0:r.x-v*.5,x1:r.x+v*.5,y0:_(0),y1:_(r.value)},o=r.colorKey===`amber`;y.push({rect:a,color:o?i.amber:i.slate,alpha:o?.93:.8,weight:Math.max(.5,r.value),orderBase:e*.22+n*.08}),b.push({label:r.label,categoryLabel:r.label,group:`drivers-pct`,orientation:`vertical`,value:r.value,baseValue:0,rect:a})}}n(`a2q1_drivers`,e=>{let t=uh(e.count),n=dh(s,y.map(e=>e.weight),{minPerItem:160});for(let e=0;e<y.length;e++){let r=y[e];fh(r.rect,n[e],t,{color:r.color,alpha:r.alpha,size:.94,orderBase:r.orderBase,orderSpan:.22,orientation:`vertical`})}return t}),this.chart=_h(e,this.id);let x=[{a:[l.left,l.bottom],b:[l.right,l.bottom],kind:`baseline`},{a:[l.left,l.bottom],b:[l.left,l.top],kind:`axis`},{a:[l.fx(36),l.bottom],b:[l.fx(36),l.top],kind:`refline`,dashed:!0}],S=[],C=[{text:`Listings`,at:[l.left,l.top+1.8],role:`axis-title`,align:`left`,valign:`bottom`},{text:`Reviews, last 12 months (capped at 100+)`,at:[l.cx,l.bottom-4.7],role:`axis-title`,align:`center`,valign:`top`}];for(let e of[0,1e3,2e3,3e3,4e3,5e3]){let t=l.fy(e);e>0&&x.push({a:[l.left,t],b:[l.right,t],kind:`gridline`}),S.push({at:[l.left,t],dx:-6,dy:0}),C.push({text:e.toLocaleString(`en-AU`),at:[l.left,t],offset:[-11,0],role:`tick`,align:`right`,valign:`middle`})}for(let[e,t,n]of[[0,`0`,!1],[20,`20`,!1],[36,`36`,!0],[60,`60`,!1],[80,`80`,!1],[102,`100+`,!1]]){let r=l.fx(e);S.push({at:[r,l.bottom],dx:0,dy:6}),C.push({text:t,at:[r,l.bottom],offset:[0,10],role:`tick`,align:`center`,valign:`top`,cls:n?`is-amber`:``})}this.chart.defineStep(0,{kind:`histogram`,lines:x,ticks:S,labels:C,legend:{at:[l.right,l.top+2.5],align:`right`,valign:`middle`,items:[{color:`amber`,label:`Popular (36+, n = 1,590)`},{color:`slate`,label:`Others (<36, n = 13,873)`}]},marks:u});let w=[],T=[{text:`Each row on its own zero-based scale`,at:[27.5,14.2],role:`note`,align:`right`,valign:`middle`}];for(let e of Mg){let t=oh(0,e.max,-10,16.5);w.push({a:[-10,e.cy-m*.5-p-.3],b:[-10,e.cy+m*.5+p+.3],kind:`baseline`}),T.push({text:e.label,at:[-10,e.cy],offset:[-14,0],role:`category`,align:`right`,valign:`middle`,categoryFor:e.label},{text:e.fmt(e.pop),at:[t(e.pop),e.cy+m*.5+p*.5],offset:[10,0],role:`value`,align:`left`,valign:`middle`,cls:`is-amber`},{text:e.fmt(e.oth),at:[t(e.oth),e.cy-m*.5-p*.5],offset:[10,0],role:`value`,align:`left`,valign:`middle`,cls:`is-slate`})}this.chart.defineStep(1,{kind:`grouped-bar`,lines:w,labels:T,legend:{at:[-26.5,14.2],align:`left`,valign:`middle`,items:[{color:`amber`,label:`Popular (1,590)`},{color:`slate`,label:`Others (13,873)`}]},marks:g});let E=-24.5,D=27.6,O=[{a:[E,_(0)],b:[D,_(0)],kind:`baseline`},{a:[E,_(0)],b:[E,_(50)],kind:`axis`}],k=[],A=[{text:`Share (%)`,at:[E,_(50)+1.5],role:`axis-title`,align:`left`,valign:`bottom`}];for(let e of[0,10,20,30,40,50]){let t=_(e);e>0&&O.push({a:[E,t],b:[D,t],kind:`gridline`}),k.push({at:[E,t],dx:-6,dy:0}),A.push({text:`${e}%`,at:[E,t],offset:[-10,0],role:`tick`,align:`right`,valign:`middle`})}for(let e of Ng){A.push({text:e.title,at:[e.cx,14.8],role:`panel-title`,align:`center`,valign:`middle`});for(let t of e.bars)A.push({text:t.label,at:[t.x,_(0)],offset:[0,11],role:`category`,align:`center`,valign:`top`,categoryFor:t.label},{text:t.fmt,at:[t.x,_(t.value)],offset:[0,-8],role:`value`,align:`center`,valign:`bottom`,cls:t.colorKey===`amber`?`is-amber`:`is-slate`})}this.chart.defineStep(2,{kind:`grouped-bar`,lines:O,ticks:k,labels:A,legend:{at:[2,-15.4],align:`center`,valign:`middle`,items:[{color:`amber`,label:`Focus group`},{color:`slate`,label:`Comparison group`}]},marks:b}),this.pinGroups={hist:[],traits:[],drivers:[]},this.pinGroups.hist.push(t.addFlag(Pg(`Popular: 1,590 (10.3%)`,`36+ reviews · median 47`,`is-amber is-left`),[l.fx(36),l.fy(1800),0],{height:2.2,offset:[32,-8]}),t.add(Pg(`13,873 others`,`Median 7 reviews`,`is-slate is-left`),[l.fx(8.2),l.fy(3650),0])),this.pinGroups.traits.push(t.add(Pg(`p = 0.18`,`No price gap`,`is-slate is-left`),[18.8,-4.8,0])),this.pinGroups.drivers.push(t.add(Pg(`Superhost: 5× rate`,`18.5% vs 3.7% popular`,`is-amber`),[-15,_(36),0])),this._hideAll()},_setPinOpacity(e,t){let n=t<.01?0:Math.min(1,t);for(let t of e)t.setOpacity?t.setOpacity(n):t.el.style.opacity=String(n)},_hideAll(){this.chart.hideAll();for(let e of Object.values(this.pinGroups))this._setPinOpacity(e,0)},enter(){},leave(){this._hideAll()},update(e,t){let{rig:n,field:r,lines:i}=t;Zm(n,Eg);let a=qm(Ym(e,.28,.44)),o=qm(Ym(e,.62,.78));e<.62?a<=.001?r.showLayout(`a2q1_hist`):a>=.999?r.showLayout(`a2q1_traits`):r.morph(`a2q1_hist`,`a2q1_traits`,a,{stagger:.35,lift:1.6,liftZ:2.4}):o<=.001?r.showLayout(`a2q1_traits`):o>=.999?r.showLayout(`a2q1_drivers`):r.morph(`a2q1_traits`,`a2q1_drivers`,o,{stagger:.35,lift:1.6,liftZ:2.4}),r.setShape(0,0),r.setDrift(0),r.highlight(null),i.visibility=0;let s=ah(e,{exit:[.25,.33]}),c=ah(e,{enter:[.39,.47],exit:[.6,.67]}),l=ah(e,{enter:[.73,.81]});this.chart.setVisibilities({0:s,1:c,2:l}),this._setPinOpacity(this.pinGroups.hist,s),this._setPinOpacity(this.pinGroups.traits,c),this._setPinOpacity(this.pinGroups.drivers,l)}},Ig=ih({distance:60});function Lg(e){return`$${Math.round(e).toLocaleString(`en-AU`)}`}function Rg(e,t=``,n=``){let r=document.createElement(`div`);return r.className=`pa-pin${n?` ${n}`:``}`,r.style.opacity=`0`,r.innerHTML=`<div class="pa-pin-in"><span class="pa-pin-title">${e}</span>`+(t?`<span class="pa-pin-detail">${t}</span>`:``)+`</div>`,r}var zg={id:`a2-q2-ratings`,figureTitle:`Nightly price, rating ceiling and low-rating risk`,heightVh:220,afterParagraph:0,captions:[{at:0,text:`Ratings cluster near the ceiling (median 4.86; Spearman 0.085 with price); location correlates most (+0.197) and value slightly negatively (−0.036).`},{at:.45,text:`Across price fifths (5+ reviews), the share rated below 4.5 drops from 12.5% to 6.9%, while 4.8+ rises more modestly from 58.7% to 67.8%.`}],mount(e){let{pins:t,registerLayout:n,data:r}=e,i=rh(),{drop_stage:a,price:o,rating:s,n_reviews:c,rand:l}=r.cols,u=[],d=0;for(let e=0;e<r.count;e++)a[e]!==0||c[e]<5||!Number.isFinite(s[e])||s[e]<=0||(u.push(e),s[e]<4&&d++);let f=(d/Math.max(1,u.length)*100).toFixed(1),p=u.map(e=>o[e]).sort((e,t)=>e-t),m=e=>p[Math.min(p.length-1,Math.floor(e*(p.length-1)))],h=p[0],g=p[p.length-1],_=[m(.2),m(.4),m(.6),m(.8)],v=[{lo:0,hi:_[0],label:`${Lg(h)}–${Lg(_[0])}`},{lo:_[0],hi:_[1],label:`${Lg(_[0])}–${Lg(_[1])}`},{lo:_[1],hi:_[2],label:`${Lg(_[1])}–${Lg(_[2])}`},{lo:_[2],hi:_[3],label:`${Lg(_[2])}–${Lg(_[3])}`},{lo:_[3],hi:1/0,label:`${Lg(_[3])}–${Lg(g)}`}].map(e=>({...e,bands:[[],[],[]],total:0}));for(let e=0;e<u.length;e++){let t=u[e],n=o[t],r=4;for(let e=0;e<5;e++)if(n<=v[e].hi){r=e;break}let i=s[t]<4.5?0:s[t]<4.8?1:2;v[r].bands[i].push(t),v[r].total++}for(let e of v){let t=Math.max(1,e.total);e.lowPct=e.bands[0].length/t*100,e.midPct=e.bands[1].length/t*100,e.highPct=e.bands[2].length/t*100}let y=lh({x:-22.5,y:-10.5,width:46,height:21,xScale:sh(15,1300,-22.5,23.5),yScale:oh(4,5,-10.5,10.5)});n(`a2q2_scatter`,e=>{let t=uh(e.count);return hh(u,e=>{let t=s[e];if(t<4)return null;let n=y.fx(Math.max(15,Math.min(1300,o[e]))),r=y.fy(Math.min(5,t)),a,c,u;return t<4.5?(a=i.red,c=.84,u=.9):t<4.8?(a=i.slate,c=.56,u=.78):(a=i.amber,c=.48,u=.78),{x:n,y:r,color:a,alpha:c,size:u,order:(n-y.left)/y.width*.7+l[e]*.25}},t),t});let b=ch(v.map(e=>e.label),-17.5,22.5,{paddingInner:.34,paddingOuter:.14}),x=oh(0,100,-10.5,11.5),S=[],C=[];for(let e=0;e<v.length;e++){let t=v[e],n=b.start(e),r=b.end(e),a=x(0),o=x(t.lowPct),s=x(t.lowPct+t.midPct),c=x(100),l=[{y0:a,y1:o,indices:t.bands[0],color:i.red,alpha:.96,size:1.24},{y0:o,y1:s,indices:t.bands[1],color:i.slate,alpha:.86,size:1.16},{y0:s,y1:c,indices:t.bands[2],color:i.amber,alpha:.95,size:1.2}];C.push({x0:n,x1:r,segs:l,qi:e}),S.push({label:`${t.label} (<4.5)`,categoryLabel:t.label,group:`quintiles-pct`,orientation:`vertical`,value:t.lowPct,baseValue:0,stacked:!0,rect:{x0:n,x1:r,y0:a,y1:o}},{label:`${t.label} (4.5–4.8)`,categoryLabel:t.label,group:`quintiles-pct`,orientation:`vertical`,value:t.midPct,baseValue:t.lowPct,stacked:!0,rect:{x0:n,x1:r,y0:o,y1:s}},{label:`${t.label} (4.8+)`,categoryLabel:t.label,group:`quintiles-pct`,orientation:`vertical`,value:t.highPct,baseValue:t.lowPct+t.midPct,stacked:!0,rect:{x0:n,x1:r,y0:s,y1:c}})}n(`a2q2_quintiles`,e=>{let t=uh(e.count);for(let e of C)ph(e.x0,e.x1,e.segs,t,{gap:.14,orderBase:e.qi*.14,orderSpan:.25});return t}),this.chart=_h(e,this.id);let w=[{a:[y.left,y.bottom],b:[y.right,y.bottom],kind:`baseline`},{a:[y.left,y.bottom],b:[y.left,y.top],kind:`axis`},{a:[y.left,y.fy(4.86)],b:[y.right,y.fy(4.86)],kind:`refline`,dashed:!0}],T=[],E=[{text:`Guest rating`,at:[y.left,y.top+1],role:`axis-title`,align:`left`,valign:`bottom`},{text:`Nightly price, log scale (5+ reviews)`,at:[y.left,y.bottom-4.5],role:`axis-title`,align:`left`,valign:`top`},{text:`Ratings below 4.0 not shown (${f}%)`,at:[y.right+4,y.bottom-4.5],role:`note`,align:`right`,valign:`top`},{text:`Med. 4.86`,at:[y.right,y.fy(4.86)],offset:[8,0],role:`value`,align:`left`,valign:`middle`,cls:`is-amber`}];for(let e of[4,4.2,4.4,4.6,4.8,5]){let t=y.fy(e);e>4&&w.push({a:[y.left,t],b:[y.right,t],kind:`gridline`}),T.push({at:[y.left,t],dx:-6,dy:0}),E.push({text:e.toFixed(1),at:[y.left,t],offset:[-10,0],role:`tick`,align:`right`,valign:`middle`})}for(let e of[25,50,100,250,500,1e3]){let t=y.fx(e);w.push({a:[t,y.bottom],b:[t,y.top],kind:`gridline`}),T.push({at:[t,y.bottom],dx:0,dy:6}),E.push({text:Lg(e),at:[t,y.bottom],offset:[0,10],role:`tick`,align:`center`,valign:`top`})}this.chart.defineStep(0,{kind:`scatter`,lines:w,ticks:T,labels:E,legend:{at:[y.left,15.2],align:`left`,valign:`middle`,items:[{color:`amber`,label:`4.8+`},{color:`slate`,label:`4.5–4.8`},{color:`red`,label:`Below 4.5`}]},marks:[]});let D=[{a:[-25,x(0)],b:[23,x(0)],kind:`baseline`},{a:[-25,x(0)],b:[-25,x(100)],kind:`axis`}],O=[],k=[{text:`Share of listings, %`,at:[-25,x(100)+1.8],role:`axis-title`,align:`left`,valign:`bottom`},{text:`Nightly price fifth (5+ reviews, n = 12,463)`,at:[2.5,x(0)-4.7],role:`axis-title`,align:`center`,valign:`top`}];for(let e of[0,25,50,75,100]){let t=x(e);e>0&&D.push({a:[-25,t],b:[23,t],kind:`gridline`}),O.push({at:[-25,t],dx:-6,dy:0}),k.push({text:`${e}%`,at:[-25,t],offset:[-10,0],role:`tick`,align:`right`,valign:`middle`})}for(let e=0;e<v.length;e++)k.push({text:v[e].label,at:[b(e),x(0)],offset:[0,11],role:`category`,align:`center`,valign:`top`,categoryFor:v[e].label});let A=v[0],j=v[4],M=b.start(0),N=b.end(4),P=x(100-A.highPct*.5),F=x(A.lowPct*.5),I=x(100-j.highPct*.5),L=x(j.lowPct*.5);D.push({a:[M-.9,P],b:[M-.2,P],kind:`leader`,cls:`is-amber`,registerAxis:!1},{a:[M-.9,F],b:[M-.2,F],kind:`leader`,cls:`is-red`,registerAxis:!1},{a:[N+.2,I],b:[N+.9,I],kind:`leader`,cls:`is-amber`,registerAxis:!1},{a:[N+.2,L],b:[N+.9,L],kind:`leader`,cls:`is-red`,registerAxis:!1}),k.push({text:`${A.highPct.toFixed(1)}%`,at:[M-1.2,P],role:`value`,align:`right`,valign:`middle`,cls:`is-amber`},{text:`${A.lowPct.toFixed(1)}%`,at:[M-1.2,F],role:`value`,align:`right`,valign:`middle`,cls:`is-red`},{text:`${j.highPct.toFixed(1)}%`,at:[N+1.2,I],role:`value`,align:`left`,valign:`middle`,cls:`is-amber`},{text:`${j.lowPct.toFixed(1)}%`,at:[N+1.2,L],role:`value`,align:`left`,valign:`middle`,cls:`is-red`}),this.chart.defineStep(1,{kind:`stacked-bar`,lines:D,ticks:O,labels:k,legend:{at:[27.5,x(100)+2.8],align:`right`,valign:`middle`,items:[{color:`amber`,label:`4.8+`},{color:`slate`,label:`4.5–4.8`},{color:`red`,label:`Below 4.5`}]},marks:S}),this.pinGroups={scatter:[],quintiles:[]},this.pinGroups.scatter.push(t.add(Rg(`Spearman 0.085, p < 0.001`,`Weak link with price`,`is-amber is-right`),[28,14.5,0])),this._hideAll()},_setPinOpacity(e,t){let n=t<.01?0:Math.min(1,t);for(let t of e)t.setOpacity?t.setOpacity(n):t.el.style.opacity=String(n)},_hideAll(){this.chart.hideAll();for(let e of Object.values(this.pinGroups))this._setPinOpacity(e,0)},enter(){},leave(){this._hideAll()},update(e,t){let{rig:n,field:r,lines:i}=t;Zm(n,Ig);let a=qm(Ym(e,.36,.56));a<=.001?r.showLayout(`a2q2_scatter`):a>=.999?r.showLayout(`a2q2_quintiles`):r.morph(`a2q2_scatter`,`a2q2_quintiles`,a,{stagger:.35,lift:1.6,liftZ:2.2}),r.setShape(0,0),r.setDrift(0),r.highlight(null),i.visibility=0;let o=ah(e,{exit:[.33,.42]}),s=ah(e,{enter:[.5,.59]});this.chart.setVisibilities({0:o,1:s}),this._setPinOpacity(this.pinGroups.scatter,o),this._setPinOpacity(this.pinGroups.quintiles,s)}},Bg=ih({distance:60}),Vg={x:10,y:0,z:2,distance:128,azimuth:0,polar:8,fit:.55,flat:1},Hg=[`0–2 km`,`2–5 km`,`5–10 km`,`10–20 km`,`20+ km`];function Ug(e,t,n,r){let i=[];if(!e)return i;for(let a of e.rings){let e=a.length/2;for(let o=0;o<e-1;o++)i.push({a:[a[o*2],t,-a[o*2+1]],b:[a[(o+1)*2],t,-a[(o+1)*2+1]],color:n,alpha:r})}return i}function Wg(e,t=``,n=``){let r=document.createElement(`div`);return r.className=`pa-pin${n?` ${n}`:``}`,r.style.opacity=`0`,r.innerHTML=`<div class="pa-pin-in"><span class="pa-pin-title">${e}</span>`+(t?`<span class="pa-pin-detail">${t}</span>`:``)+`</div>`,r}var Gg={id:`a2-q3-location`,figureTitle:`Distance from the CBD: U-shaped demand and property mix`,heightVh:250,afterParagraph:0,captions:[{at:0,text:`Mean reviews in the last 12 months follow a U-shape by distance from the CBD: 19.0 within 2 km, 9.0 at 10–20 km, recovering to 12.8 beyond 20 km.`},{at:.35,text:`Location mostly decides the product (Cramér’s V 0.65): 88.4% of listings within 2 km are apartments versus 7.0% beyond 20 km.`},{at:.68,text:`City of Melbourne (45.3% of revenue) and Yarra Ranges ($28,425 median) lead while non-tourist suburbs trail ($3,400–$3,900); hosts with <6 listings score 0.11–0.20 higher on cleanliness.`}],mount(e){let{stage:t,data:n,pins:r,registerLayout:i,registerMapLike:a}=e,o=rh(),{drop_stage:s,dist_band:c,reviews_ltm:l,is_apartment:u,room_type:d}=n.cols,f=[],p=Hg.map(e=>({label:e,n:0,sumRev:0,meanRev:0,aptCount:0,houseCount:0,roomCount:0,aptPct:0,housePct:0,roomPct:0}));for(let e=0;e<n.count;e++){if(s[e]!==0||c[e]>=5)continue;f.push(e);let t=p[c[e]];t.n++,t.sumRev+=Number.isFinite(l[e])?l[e]:0,u[e]===1?t.aptCount++:d[e]===0?t.houseCount++:t.roomCount++}for(let e of p){let t=Math.max(1,e.n);e.meanRev=e.sumRev/t,e.aptPct=e.aptCount/t*100,e.housePct=e.houseCount/t*100,e.roomPct=e.roomCount/t*100}let m=-22.5,h=ch(Hg,-20.5,24,{paddingInner:.34,paddingOuter:.14}),g=oh(0,20,-10.5,11.5),_=[o.amber,o.slate,o.slate,o.slateDim,o.teal],v=[`is-amber`,`is-slate`,`is-slate`,`is-slate`,`is-teal`],y=[],b=[];for(let e=0;e<5;e++){let t={x0:h.start(e),x1:h.end(e),y0:g(0),y1:g(p[e].meanRev)};b.push(t),y.push({label:Hg[e],categoryLabel:Hg[e],group:`mean-reviews`,orientation:`vertical`,value:p[e].meanRev,baseValue:0,rect:t})}i(`a2q3_u`,e=>{let t=uh(e.count),n=dh(f,p.map(e=>e.meanRev),{minPerItem:220});for(let e=0;e<5;e++)fh(b[e],n[e],t,{color:_[e],alpha:e===0||e===4?.94:.82,size:.94,orderBase:e*.14,orderSpan:.22,orientation:`vertical`});return t});let x=-24.5,S=22.8,C=ch(Hg,-17.5,22,{paddingInner:.34,paddingOuter:.14}),w=oh(0,100,-10.8,10.6),T=dh(f,[1,1,1,1,1]),E=[],D=[];for(let e=0;e<5;e++){let t=p[e],n=C.start(e),r=C.end(e),i=w(0),a=w(t.aptPct),s=w(t.aptPct+t.housePct),c=w(100),l=dh(T[e],[t.aptPct,t.housePct,t.roomPct],{minPerItem:28}),u=[{y0:i,y1:a,indices:l[0],color:o.amber,alpha:.95,size:1.02},{y0:a,y1:s,indices:l[1],color:o.teal,alpha:.9,size:1.02},{y0:s,y1:c,indices:l[2],color:o.slate,alpha:.84,size:1}];D.push({x0:n,x1:r,segs:u,b:e}),E.push({label:`${t.label} (Apartments)`,categoryLabel:t.label,group:`prop-mix-pct`,orientation:`vertical`,value:t.aptPct,baseValue:0,stacked:!0,rect:{x0:n,x1:r,y0:i,y1:a}},{label:`${t.label} (Houses & other entire)`,categoryLabel:t.label,group:`prop-mix-pct`,orientation:`vertical`,value:t.housePct,baseValue:t.aptPct,stacked:!0,rect:{x0:n,x1:r,y0:a,y1:s}},{label:`${t.label} (Rooms & hotel)`,categoryLabel:t.label,group:`prop-mix-pct`,orientation:`vertical`,value:t.roomPct,baseValue:t.aptPct+t.housePct,stacked:!0,rect:{x0:n,x1:r,y0:s,y1:c}})}i(`a2q3_mix`,e=>{let t=uh(e.count);for(let e of D)ph(e.x0,e.x1,e.segs,t,{gap:.14,orderBase:e.b*.14,orderSpan:.24});return t});let O=new Map(n.meta.councils.map((e,t)=>[e,t])),k=O.get(`Melbourne`),A=O.get(`Yarra Ranges`),j=new Set([O.get(`Melton`),O.get(`Greater Dandenong`),O.get(`Wyndham`)]);a(`a2q3_map`),i(`a2q3_map`,e=>{let t=e.count,{x:n,y:r,drop_stage:i,council:a}=e.cols,s=new Float32Array(t*3),c=new Float32Array(t*3),l=new Float32Array(t),u=new Float32Array(t),d=new Float32Array(t),f=new Map,p=e=>Math.floor(n[e]/.32)*8192+Math.floor(r[e]/.32);for(let e=0;e<t;e++)i[e]===0&&f.set(p(e),(f.get(p(e))||0)+1);for(let e=0;e<t;e++){if(i[e]!==0){s[e*3]=n[e],s[e*3+1]=-10,s[e*3+2]=-r[e],u[e]=0,l[e]=0;continue}let t=n[e],m=-r[e],h=Math.max(1,(f.get(p(e))||1)/14),g=a[e],_,v,y;g===k?(_=o.amber,v=.92/h**.45,y=1.08/h**.16,d[e]=.12):g===A?(_=o.teal,v=.94,y=1.18,d[e]=.28):j.has(g)?(_=o.red,v=.92,y=1.16,d[e]=.44):(_=o.slate,v=.3/h**.5,y=.74/h**.18,d[e]=.65),s[e*3]=t,s[e*3+1]=0,s[e*3+2]=m,c[e*3]=_[0],c[e*3+1]=_[1],c[e*3+2]=_[2],u[e]=v,l[e]=y}return{positions:s,colors:c,sizes:l,alphas:u,order:d}});let M=new Map(n.councils.map(e=>[e.name,e]));this.councilHighlights=new dg,this.councilHighlights.set([...Ug(M.get(`Melbourne`),.06,o.amber,.9),...Ug(M.get(`Yarra Ranges`),.06,o.teal,.85),...Ug(M.get(`Melton`),.06,o.red,.82),...Ug(M.get(`Greater Dandenong`),.06,o.red,.82),...Ug(M.get(`Wyndham`),.06,o.red,.82)]),t.add(this.councilHighlights.object3d),this.chart=_h(e,this.id);let N=[{a:[m,g(0)],b:[25,g(0)],kind:`baseline`},{a:[m,g(0)],b:[m,g(20)],kind:`axis`}],P=[],F=[{text:`Mean reviews, last 12 months`,at:[m,g(20)+1.8],role:`axis-title`,align:`left`,valign:`bottom`},{text:`Distance from CBD`,at:[1.8,g(0)-4.7],role:`axis-title`,align:`center`,valign:`top`}];for(let e of[0,5,10,15,20]){let t=g(e);e>0&&N.push({a:[m,t],b:[25,t],kind:`gridline`}),P.push({at:[m,t],dx:-6,dy:0}),F.push({text:String(e),at:[m,t],offset:[-10,0],role:`tick`,align:`right`,valign:`middle`})}for(let e=0;e<5;e++){let t=p[e];F.push({text:t.label,at:[h(e),g(0)],offset:[0,11],role:`category`,align:`center`,valign:`top`,categoryFor:t.label},{text:t.meanRev.toFixed(1),at:[h(e),g(t.meanRev)],offset:[0,-8],role:`value`,align:`center`,valign:`bottom`,cls:v[e]})}this.chart.defineStep(0,{kind:`bar`,lines:N,ticks:P,labels:F,legend:{at:[27.5,g(20)+2.6],align:`right`,valign:`middle`,items:[{color:`amber`,label:`Inner peak`},{color:`slate`,label:`Suburban trough`},{color:`teal`,label:`Outer recovery`}]},marks:y});let I=[{a:[x,w(0)],b:[S,w(0)],kind:`baseline`},{a:[x,w(0)],b:[x,w(100)],kind:`axis`}],L=[],R=[{text:`Share of listings, %`,at:[x,w(100)+1.1],role:`axis-title`,align:`left`,valign:`bottom`},{text:`Distance from CBD`,at:[2.2,w(0)-4.5],role:`axis-title`,align:`center`,valign:`top`}];for(let e of[0,25,50,75,100]){let t=w(e);e>0&&I.push({a:[x,t],b:[S,t],kind:`gridline`}),L.push({at:[x,t],dx:-6,dy:0}),R.push({text:`${e}%`,at:[x,t],offset:[-10,0],role:`tick`,align:`right`,valign:`middle`})}for(let e=0;e<5;e++)R.push({text:Hg[e],at:[C(e),w(0)],offset:[0,11],role:`category`,align:`center`,valign:`top`,categoryFor:Hg[e]});let z=p[0],B=p[4],ee=C.start(0),V=C.end(4),te=w(z.aptPct*.5),H=w(B.aptPct*.5),U=w(B.aptPct+B.housePct*.5);I.push({a:[ee-.9,te],b:[ee-.2,te],kind:`leader`,cls:`is-amber`,registerAxis:!1},{a:[V+.2,H],b:[V+.9,H],kind:`leader`,cls:`is-amber`,registerAxis:!1},{a:[V+.2,U],b:[V+.9,U],kind:`leader`,cls:`is-teal`,registerAxis:!1}),R.push({text:`${z.aptPct.toFixed(1)}%`,at:[ee-1.2,te],role:`value`,align:`right`,valign:`middle`,cls:`is-amber`},{text:`${B.aptPct.toFixed(1)}%`,at:[V+1.2,H],role:`value`,align:`left`,valign:`middle`,cls:`is-amber`},{text:`${B.housePct.toFixed(1)}%`,at:[V+1.2,U],role:`value`,align:`left`,valign:`middle`,cls:`is-teal`}),this.chart.defineStep(1,{kind:`stacked-bar`,lines:I,ticks:L,labels:R,legend:{at:[27.8,15.2],align:`right`,valign:`middle`,items:[{color:`amber`,label:`Apartments`},{color:`teal`,label:`Houses & other entire`},{color:`slate`,label:`Rooms & hotel`}]},marks:E}),this.chart.defineStep(2,{kind:`map`,lines:[],marks:[],legend:{cls:`ck-pos-tl`,items:[{color:`amber`,label:`City of Melbourne`},{color:`teal`,label:`Yarra Ranges`},{color:`red`,label:`Melton · Dandenong · Wyndham`}]}}),this.pinGroups={u:[],mix:[],map:[]},this.pinGroups.u.push(r.addFlag(Wg(`U-shaped demand`,`Trough 9.0 at 10–20 km`,`is-slate`),[h(3),g(p[3].meanRev)+2,0],{height:5,offset:[-26,-12],cls:`cl-slate`})),this.pinGroups.mix.push(r.add(Wg(`Cramér’s V = 0.65`,``,`is-amber is-left`),[x,15.2,0]));let ne=e=>{let t=M.get(e);return t?[t.centroid[0],.06,-t.centroid[1]]:[0,.06,0]},re=ne(`Melbourne`),W=ne(`Yarra Ranges`),ie=ne(`Wyndham`);this.pinGroups.map.push(r.addFlag(Wg(`City of Melbourne`,`45.3% rev. · 36.3% listings`,`is-amber`),re,{height:0,offset:[-68,-110]}),r.addFlag(Wg(`Yarra Ranges`,`$28,425 med. · $360/night`,`is-teal is-right`),W,{height:0,offset:[-58,-118],cls:`cl-teal`}),r.addFlag(Wg(`Melton · Wyndham · Dandenong`,`$3,400–$3,900 median rev.`,`is-red is-left`),ie,{height:0,offset:[24,96],cls:`cl-red`,below:!0})),this._hideAll()},_setGroupOpacity(e,t){let n=t<.01?0:Math.min(1,t);for(let t of e)t.setOpacity?t.setOpacity(n):t.el.style.opacity=String(n)},_hideAll(){this.chart.hideAll(),this.councilHighlights.visibility=0;for(let e of Object.values(this.pinGroups))this._setGroupOpacity(e,0)},enter(){},leave(){this._hideAll()},update(e,t){let{rig:n,field:r,lines:i}=t,a=qm(Ym(e,.27,.43)),o=qm(Ym(e,.6,.76));e<.6?Zm(n,Bg):Xm(n,Bg,Vg,o,Jm(Ym(e,.6,.76))),e<.6?a<=.001?r.showLayout(`a2q3_u`):a>=.999?r.showLayout(`a2q3_mix`):r.morph(`a2q3_u`,`a2q3_mix`,a,{stagger:.36,lift:1.6,liftZ:2.2}):o<=.001?r.showLayout(`a2q3_mix`):o>=.999?r.showLayout(`a2q3_map`):r.morph(`a2q3_mix`,`a2q3_map`,o,{stagger:.38,lift:2.2}),r.setShape(0,0),r.setDrift(0),r.highlight(null);let s=ah(e,{exit:[.25,.33]}),c=ah(e,{enter:[.39,.46],exit:[.58,.65]}),l=ah(e,{enter:[.72,.8]});i.visibility=l*.65,this.councilHighlights.visibility=l,this.chart.setVisibilities({0:s,1:c,2:l}),this._setGroupOpacity(this.pinGroups.u,s),this._setGroupOpacity(this.pinGroups.mix,c),this._setGroupOpacity(this.pinGroups.map,l)}},Kg={x:.5,y:0,z:1,distance:72,azimuth:0,polar:6,fit:.55,flat:1},qg=ih({distance:60}),Jg=[{key:`albert_park`,name:`Albert Park`,event:`Grand Prix`,x:.4309,z:3.9917},{key:`melbourne_park`,name:`Melbourne Park`,event:`Australian Open`,x:1.3543,z:.8846},{key:`mcg`,name:`MCG`,event:`AFL Grand Final`,x:1.7853,z:.7077},{key:`flemington`,name:`Flemington`,event:`Melbourne Cup`,x:-4.4763,z:-2.5321}],Yg=[{key:`gp`,label:`Grand Prix`,lift:16.6,tag:`+16.6 pp (0/181)`,colorKey:`amber`,cy:8.2},{key:`ao`,label:`Australian Open`,lift:11.7,tag:`+11.7 pp (0/148)`,colorKey:`teal`,cy:2.7},{key:`gf`,label:`AFL Grand Final`,lift:8.7,tag:`+8.7 pp (2.1%)`,colorKey:`amber`,cy:-2.8},{key:`cup`,label:`Melbourne Cup`,lift:-4.2,tag:`−4.2 pp (91%)`,colorKey:`red`,cy:-8.3}],Xg=[{label:`GP`,value:18.8,fmt:`+18.8`,x:-20,colorKey:`amber`},{label:`AO`,value:13.4,fmt:`+13.4`,x:-14.8,colorKey:`amber`},{label:`Indep.`,value:27,fmt:`+27.0`,x:-6.8,colorKey:`teal`},{label:`Apts`,value:14.9,fmt:`+14.9`,x:-1.6,colorKey:`slate`}],Zg=[{label:`GP (without)`,category:`GP`,value:12.4,fmt:`12.4`,x:11.8,colorKey:`slate`},{label:`GP (with)`,category:`GP`,value:8,fmt:`8.0`,x:15.8,colorKey:`teal`},{label:`AO (without)`,category:`AO`,value:7.7,fmt:`7.7`,x:21.8,colorKey:`slate`},{label:`AO (with)`,category:`AO`,value:5.1,fmt:`5.1`,x:25.8,colorKey:`teal`}];function Qg(e,t,n,r,i,a,{steps:o=72,dashed:s=!1}={}){let c=[];for(let l=0;l<o;l++){if(s&&l%2==1)continue;let u=l/o*Math.PI*2,d=(l+1)/o*Math.PI*2;c.push({a:[e+Math.cos(u)*n,r,t+Math.sin(u)*n],b:[e+Math.cos(d)*n,r,t+Math.sin(d)*n],color:i,alpha:a})}return c}function $g(e,t=``,n=``){let r=document.createElement(`div`);return r.className=`pa-pin${n?` ${n}`:``}`,r.style.opacity=`0`,r.innerHTML=`<div class="pa-pin-in"><span class="pa-pin-title">${e}</span>`+(t?`<span class="pa-pin-detail">${t}</span>`:``)+`</div>`,r}var e_={id:`a3-events`,figureTitle:`Near-venue booking lifts on major Melbourne event nights`,heightVh:250,afterParagraph:0,captions:[{at:0,text:`Listings within 5 km of each venue are compared against listings 15 km or more away on event nights versus one to three weeks either side.`},{at:.35,text:`The Grand Prix (+16.6 pp; 0 of 181 placebos) and Australian Open (+11.7 pp; 0 of 148) show clear near-venue lifts; Grand Final is smaller (+8.7 pp) and Melbourne Cup shows none (−4.1 pp).`},{at:.72,text:`Matching school holidays raises lifts to +18.8 and +13.4 pp; near Albert Park, independently hosted homes gain +27.0 pp versus +14.9 pp for scaled central apartments.`}],mount(e){let{stage:t,data:n,pins:r,registerLayout:i,registerMapLike:a}=e,o=rh(),s=e=>o[e]||o.slate,{drop_stage:c}=n.cols,l=[];for(let e=0;e<n.count;e++)c[e]===0&&l.push(e);a(`a3ev_map`),i(`a3ev_map`,e=>{let t=e.count,{x:n,y:r,drop_stage:i}=e.cols,a=new Float32Array(t*3),s=new Float32Array(t*3),c=new Float32Array(t),l=new Float32Array(t),u=new Float32Array(t),d=new Map,f=e=>Math.floor(n[e]/.32)*8192+Math.floor(r[e]/.32);for(let e=0;e<t;e++)i[e]===0&&d.set(f(e),(d.get(f(e))||0)+1);for(let e=0;e<t;e++){if(i[e]!==0){a[e*3]=n[e],a[e*3+1]=-10,a[e*3+2]=-r[e],l[e]=0,c[e]=0;continue}let t=n[e],p=-r[e],m=Math.max(1,(d.get(f(e))||1)/14),h=1/0;for(let e of Jg){let n=Math.hypot(t-e.x,p-e.z);n<h&&(h=n)}let g=Math.hypot(t,p),_,v,y;h<=5?(_=o.amber,v=.88/m**.45,y=1.04/m**.16,u[e]=.12+h/5*.2):g>=15?(_=o.teal,v=.84/m**.36,y=1.06/m**.14,u[e]=.45):(_=o.slate,v=.28/m**.5,y=.72/m**.18,u[e]=.7),a[e*3]=t,a[e*3+1]=0,a[e*3+2]=p,s[e*3]=_[0],s[e*3+1]=_[1],s[e*3+2]=_[2],l[e]=v,c[e]=y}return{positions:a,colors:s,sizes:c,alphas:l,order:u}});let u=oh(-12,24,-12,24),d=u(0),f=1.15,p=1.05,m=[],h=[];for(let e=0;e<Yg.length;e++){let t=Yg[e],n=d,r=u(t.lift),i={x0:Math.min(n,r),x1:Math.max(n,r),y0:t.cy-f*.5,y1:t.cy+f*.5};h.push({rect:i,cx:r,cy:t.cy,color:s(t.colorKey),weight:Math.abs(t.lift),r:e}),m.push({label:t.label,categoryLabel:t.label,group:t.lift>=0?`lift-pos`:`lift-neg`,orientation:`horizontal`,value:Math.abs(t.lift),baseValue:t.lift>=0?0:t.lift,rect:i})}i(`a3ev_placebo`,e=>{let t=uh(e.count),n=Math.floor(l.length*.72),r=l.slice(0,n),i=l.slice(n),a=dh(r,h.map(e=>e.weight),{minPerItem:280}),o=dh(i,[1,1,1,1]);for(let e=0;e<h.length;e++){let n=h[e];fh(n.rect,a[e],t,{color:n.color,alpha:.9,size:.9,orderBase:e*.16,orderSpan:.2,orientation:`horizontal`}),mh(n.cx,n.cy,p,o[e],t,{color:n.color,alpha:.98,size:.96,orderBase:e*.16+.12})}return t});let g=-10.5,_=10.2,v=oh(0,30,g,_),y=oh(0,15,g,_),b=3.2,x=[],S=[];for(let e=0;e<Xg.length;e++){let t=Xg[e],n={x0:t.x-b*.5,x1:t.x+b*.5,y0:v(0),y1:v(t.value)};x.push({rect:n,color:s(t.colorKey),weight:t.value,orderBase:e*.1}),S.push({label:t.label,categoryLabel:t.label,group:`lift-pp`,orientation:`vertical`,value:t.value,baseValue:0,rect:n})}for(let e=0;e<Zg.length;e++){let t=Zg[e],n={x0:t.x-1.5,x1:t.x+1.5,y0:y(0),y1:y(t.value)};x.push({rect:n,color:s(t.colorKey),weight:t.value*2,orderBase:.45+e*.1}),S.push({label:t.label,categoryLabel:t.category,group:`error-pp`,orientation:`vertical`,value:t.value,baseValue:0,rect:n})}i(`a3ev_split`,e=>{let t=uh(e.count),n=dh(l,x.map(e=>e.weight),{minPerItem:240});for(let e=0;e<x.length;e++){let r=x[e];fh(r.rect,n[e],t,{color:r.color,alpha:.92,size:.94,orderBase:r.orderBase,orderSpan:.2,orientation:`vertical`})}return t}),this.mapLines=new dg;let C=[...Qg(0,0,15,.06,o.teal,.52,{steps:96,dashed:!0})];for(let e of Jg)C.push(...Qg(e.x,e.z,5,.07,o.amber,.58,{steps:64}));this.mapLines.set(C),t.add(this.mapLines.object3d),this.venueSparks=new mg(t,Jg.length,{fall:5.5,refDist:72,maxPx:40}),Jg.forEach((e,t)=>{this.venueSparks.pos.set([e.x,.09,e.z],t*3),this.venueSparks.col.set([o.amberHot[0],o.amberHot[1],o.amberHot[2],.98],t*4),this.venueSparks.size[t]=22}),this.venueSparks.commit(),t.add(this.venueSparks.object3d),this.placeboSparks=new mg(t,360,{fall:6.2,refDist:60,maxPx:26}),t.add(this.placeboSparks.object3d),n.loadJson(`events.json`).then(e=>{let t=0,n=[{arr:e.placebo?.gp||[],cy:Yg[0].cy},{arr:e.placebo?.ao||[],cy:Yg[1].cy}];for(let e of n){let n=e.arr.filter(e=>!e.event);for(let r=0;r<n.length&&t<360;r++){let i=n[r].lift,a=r*7%11/10-.5,s=e.cy+a*2.8;this.placeboSparks.pos.set([u(i),s,0],t*3),this.placeboSparks.col.set([o.slate[0],o.slate[1],o.slate[2],.86],t*4),this.placeboSparks.size[t]=11.5,t++}}this.placeboSparks.commit()}).catch(e=>console.error(e)),this.chart=_h(e,this.id),this.chart.defineStep(0,{kind:`map`,lines:[],marks:[],legend:{cls:`ck-pos-tl`,items:[{color:`amber`,label:`Within 5 km of venue`},{color:`teal`,label:`15 km+ control zone`}]}});let w=-11.6,T=[{a:[-12,w],b:[24,w],kind:`baseline`},{a:[d,w],b:[d,11.2],kind:`axis`}],E=[],D=[{text:`Near-minus-far booked share change (pp)`,at:[6,-16],role:`axis-title`,align:`center`,valign:`top`}];for(let e of[-10,-5,0,5,10,15,20]){let t=u(e);e!==0&&T.push({a:[t,w],b:[t,11.2],kind:`gridline`}),E.push({at:[t,w],dx:0,dy:6}),D.push({text:e>0?`+${e}`:e<0?`−${Math.abs(e)}`:`0`,at:[t,w],offset:[0,9],role:`tick`,align:`center`,valign:`top`})}for(let e of Yg){T.push({a:[-12,e.cy],b:[24,e.cy],kind:`gridline`}),D.push({text:e.label,at:[-12,e.cy],offset:[-14,0],role:`category`,align:`right`,valign:`middle`,categoryFor:e.label});let t=e.lift<0;D.push({text:e.tag,at:[t?d:u(e.lift)+p,e.cy],offset:[12,0],role:`value`,align:`left`,valign:`middle`,cls:`is-${e.colorKey}`})}this.chart.defineStep(1,{kind:`bar`,lines:T,ticks:E,labels:D,legend:{at:[-12,14.4],align:`left`,valign:`middle`,items:[{color:`amber`,label:`Event lift (GP / GF)`},{color:`teal`,label:`Aus Open`},{color:`red`,label:`Melb Cup`},{color:`slate`,label:`Placebo windows`}]},marks:m});let O=1.2,k=[{a:[-23,v(0)],b:[O,v(0)],kind:`baseline`},{a:[-23,v(0)],b:[-23,v(30)],kind:`axis`},{a:[9,y(0)],b:[28,y(0)],kind:`baseline`},{a:[9,y(0)],b:[9,y(15)],kind:`axis`}],A=[],j=[{text:`Near-venue lift (pp)`,at:[-23,v(30)+1.5],role:`axis-title`,align:`left`,valign:`bottom`},{text:`Holiday-matched`,at:[-17.4,14.8],role:`panel-title`,align:`center`,valign:`middle`},{text:`Albert Park GP`,at:[-4.2,14.8],role:`panel-title`,align:`center`,valign:`middle`},{text:`Unseen-event error (pp)`,at:[9,y(15)+1.5],role:`axis-title`,align:`left`,valign:`bottom`},{text:`Forecast error`,at:[18.8,14.8],role:`panel-title`,align:`center`,valign:`middle`}];for(let e of[0,10,20,30]){let t=v(e);e>0&&k.push({a:[-23,t],b:[O,t],kind:`gridline`}),A.push({at:[-23,t],dx:-6,dy:0}),j.push({text:e===0?`0`:`+${e}`,at:[-23,t],offset:[-10,0],role:`tick`,align:`right`,valign:`middle`})}for(let e of[0,5,10,15]){let t=y(e);e>0&&k.push({a:[9,t],b:[28,t],kind:`gridline`}),A.push({at:[9,t],dx:-6,dy:0}),j.push({text:String(e),at:[9,t],offset:[-10,0],role:`tick`,align:`right`,valign:`middle`})}for(let e of Xg)j.push({text:e.label,at:[e.x,v(0)],offset:[0,11],role:`category`,align:`center`,valign:`top`,categoryFor:e.label},{text:e.fmt,at:[e.x,v(e.value)],offset:[0,-8],role:`value`,align:`center`,valign:`bottom`,cls:`is-${e.colorKey}`});j.push({text:`GP`,at:[13.8,y(0)],offset:[0,11],role:`category`,align:`center`,valign:`top`,categoryFor:`GP`},{text:`AO`,at:[23.8,y(0)],offset:[0,11],role:`category`,align:`center`,valign:`top`,categoryFor:`AO`});for(let e of Zg)j.push({text:e.fmt,at:[e.x,y(e.value)],offset:[0,-8],role:`value`,align:`center`,valign:`bottom`,cls:`is-${e.colorKey}`});this.chart.defineStep(2,{kind:`grouped-bar`,lines:k,ticks:A,labels:j,legend:{at:[18.8,-15.3],align:`center`,valign:`middle`,items:[{color:`slate`,label:`Without events`},{color:`teal`,label:`With events`}]},marks:S}),this.pinGroups={map:[],placebo:[],split:[]},this.pinGroups.map.push(r.addFlag($g(`Flemington`,`Melbourne Cup`,`is-amber is-right`),[Jg[3].x,.09,Jg[3].z],{height:0,offset:[-110,-84]}),r.addFlag($g(`MCG`,`AFL Grand Final`,`is-amber is-left`),[Jg[2].x,.09,Jg[2].z],{height:0,offset:[112,-98]}),r.addFlag($g(`Melbourne Park`,`Australian Open`,`is-amber is-left`),[Jg[1].x,.09,Jg[1].z],{height:0,offset:[128,18]}),r.addFlag($g(`Albert Park`,`Grand Prix`,`is-amber is-right`),[Jg[0].x,.09,Jg[0].z],{height:0,offset:[-110,88],below:!0}),r.add($g(`15 km+ control zone`,``,`is-teal is-bare is-left`),[15.8,.06,11.2])),this._hideAll()},_setGroupOpacity(e,t){let n=t<.01?0:Math.min(1,t);for(let t of e)t.setOpacity?t.setOpacity(n):t.el.style.opacity=String(n)},_hideAll(){this.chart.hideAll(),this.mapLines.visibility=0,this.venueSparks.visibility=0,this.placeboSparks.visibility=0;for(let e of Object.values(this.pinGroups))this._setGroupOpacity(e,0)},enter(){},leave(){this._hideAll()},update(e,t){let{rig:n,field:r,lines:i}=t,a=qm(Ym(e,.27,.43)),o=qm(Ym(e,.64,.8));e<.64?Xm(n,Kg,qg,a,Jm(Ym(e,.27,.43))):Zm(n,qg),e<.64?a<=.001?r.showLayout(`a3ev_map`):a>=.999?r.showLayout(`a3ev_placebo`):r.morph(`a3ev_map`,`a3ev_placebo`,a,{stagger:.36,lift:1.8}):o<=.001?r.showLayout(`a3ev_placebo`):o>=.999?r.showLayout(`a3ev_split`):r.morph(`a3ev_placebo`,`a3ev_split`,o,{stagger:.35,lift:1.6,liftZ:2.2}),r.setShape(0,0),r.setDrift(0),r.highlight(null);let s=ah(e,{exit:[.25,.33]}),c=ah(e,{enter:[.39,.47],exit:[.62,.69]}),l=ah(e,{enter:[.76,.84]});i.visibility=s*.7,this.mapLines.visibility=s,this.venueSparks.visibility=s,this.placeboSparks.visibility=c,this.chart.setVisibilities({0:s,1:c,2:l}),this._setGroupOpacity(this.pinGroups.map,s),this._setGroupOpacity(this.pinGroups.placebo,c),this._setGroupOpacity(this.pinGroups.split,l)}},t_=ih({distance:60}),n_=.1,r_=2.5,i_=26,a_=2e3;function o_(e){if(!e.length)return 0;let t=[...e].sort((e,t)=>e-t),n=Math.floor(t.length/2);return t.length%2==1?t[n]:(t[n-1]+t[n])*.5}function s_(e,t=``,n=``){let r=document.createElement(`div`);return r.className=`pa-pin${n?` ${n}`:``}`,r.style.opacity=`0`,r.innerHTML=`<div class="pa-pin-in"><span class="pa-pin-title">${e}</span>`+(t?`<span class="pa-pin-detail">${t}</span>`:``)+`</div>`,r}var c_={id:`a3-rents`,figureTitle:`Estimated Airbnb revenue against annual long-term rent`,heightVh:250,afterParagraph:0,captions:[{at:0,text:`Across 12,096 matched entire homes, estimated Airbnb revenue falls below median long-term rent for 8,185 homes (67.7%; median ratio 0.61; 18.0% above 1.5×).`},{at:.36,text:`Yarra Ranges (1.16) and Nillumbik (1.03) are the only councils where the median home matches or beats long-term rent; Superhosts reach 0.99 versus 0.36 for other hosts.`},{at:.72,text:`Lowering the assumed review rate from 50% to 30% shifts the median ratio from 0.61 to 1.01, leaving whether the typical host beats rent unsettled.`}],mount(e){let{data:t,pins:n,registerLayout:r}=e,i=rh(),{drop_stage:a,council:o,rent_ratio:s,superhost:c,dist_band:l}=t.cols,u=[],d=Array.from({length:i_},()=>[]),f=Array.from({length:t.meta.councils.length},()=>[]),p=[],m=[],h=[[],[],[],[],[]],g=0,_=0;for(let e=0;e<t.count;e++){if(a[e]!==0||!Number.isFinite(s[e]))continue;let t=Math.max(0,s[e]);u.push(e),d[t>=r_?25:Math.floor(t/n_)].push(e),f[o[e]].push(t),(c[e]?p:m).push(t),l[e]<5&&h[l[e]].push(t),t<1&&g++,t>=1.5&&_++}let v=u.length,y=o_(u.map(e=>s[e])),b=(g/Math.max(1,v)*100).toFixed(1),x=(_/Math.max(1,v)*100).toFixed(1),S=(100-parseFloat(b)-parseFloat(x)).toFixed(1),C=lh({x:-22,y:-10.5,width:49,height:21.8,xScale:oh(0,i_*n_,-22,27),yScale:oh(0,a_,-10.5,11.3)}),w=[],T=[],E=.22;for(let e=0;e<i_;e++){let t=d[e].length,n={x0:C.fx(e*n_)+E*.5,x1:C.fx((e+1)*n_)-E*.5,y0:C.fy(0),y1:C.fy(t)};T.push(n);let r=e<25?`${(e*n_).toFixed(1)}–${((e+1)*n_).toFixed(1)}×`:`2.5×+`;w.push({label:r,group:`rent-hist`,orientation:`vertical`,value:t,baseValue:0,rect:n})}r(`a3rn_hist`,e=>{let t=uh(e.count);for(let e=0;e<i_;e++){let n=e<10?i.red:e<15?i.amber:i.teal;fh(T[e],d[e],t,{color:n,alpha:e<10?.86:.94,size:.92,orderBase:e/i_*.45,orderSpan:.2,orientation:`vertical`})}return t});let D=f.map((e,n)=>({name:t.meta.councils[n]===`Moreland`?`Merri-bek`:t.meta.councils[n],n:e.length,median:o_(e)})).sort((e,t)=>t.median-e.median),O=D.slice(0,6),k=D.slice(-4).map(e=>({...e,shortName:e.name===`Greater Dandenong`?`Dandenong`:e.name})),A=D[D.length-5].median.toFixed(2),j=D[6].median.toFixed(2),M=-17.2,N=-.5,P=oh(0,1.55,M,N),F=12.2,I=27.7,L=oh(0,1.55,F,I),R=1.24,z=[...O.map((e,t)=>({label:e.name,val:e.median,cy:10.2-t*2,color:e.median>=1?i.teal:i.slate,cls:e.median>=1?`is-teal`:`is-slate`})),...k.map((e,t)=>({label:e.shortName,val:e.median,cy:-3.8-t*2,color:i.slate,cls:`is-slate`}))],B=[{label:`Superhosts`,val:o_(p),cy:10.2,color:i.amber,cls:`is-amber`},{label:`Other hosts`,val:o_(m),cy:8.2,color:i.slate,cls:`is-slate`},...[`0–2 km`,`2–5 km`,`5–10 km`,`10–20 km`,`20+ km`].map((e,t)=>{let n=t===2||t===3;return{label:e,val:o_(h[t]),cy:2-t*2,color:n?i.red:i.slate,cls:n?`is-red`:`is-slate`}})],ee=[],V=[];for(let e=0;e<z.length;e++){let t=z[e],n={x0:M,x1:P(t.val),y0:t.cy-R*.5,y1:t.cy+R*.5};ee.push({rect:n,color:t.color,weight:t.val,orderBase:e*.04}),V.push({label:t.label,categoryLabel:t.label,group:`by-council`,orientation:`horizontal`,value:t.val,baseValue:0,rect:n})}for(let e=0;e<B.length;e++){let t=B[e],n={x0:F,x1:L(t.val),y0:t.cy-R*.5,y1:t.cy+R*.5};ee.push({rect:n,color:t.color,weight:t.val,orderBase:.45+e*.05}),V.push({label:t.label,categoryLabel:t.label,group:`by-group`,orientation:`horizontal`,value:t.val,baseValue:0,rect:n})}r(`a3rn_bars`,e=>{let t=uh(e.count),n=dh(u,ee.map(e=>e.weight),{minPerItem:180});for(let e=0;e<ee.length;e++){let r=ee[e];fh(r.rect,n[e],t,{color:r.color,alpha:.92,size:.92,orderBase:r.orderBase,orderSpan:.16,orientation:`horizontal`})}return t});let te=[];for(let e=50;e>=30;e--)te.push({rate:e,median:50/e*y});let H=lh({x:-20,y:-10.5,width:44,height:22,xScale:oh(50,30,-20,24),yScale:oh(0,1.2,-10.5,11.5)});r(`a3rn_sens`,e=>{let t=uh(e.count),n=2800,r=u.slice(0,Math.max(0,u.length-n)),a=u.slice(Math.max(0,u.length-n)),{positions:o,colors:s,sizes:c,alphas:l,order:d}=t,f=Math.max(1,r.length);for(let e=0;e<r.length;e++){let t=r[e],n=e/f,a=50-n*20,u=50/a*y,p=(e%7-3)*.065,m=u>=1?i.teal:i.red;o[t*3]=H.fx(a),o[t*3+1]=H.fy(u)+p,o[t*3+2]=0,s[t*3]=m[0],s[t*3+1]=m[1],s[t*3+2]=m[2],l[t]=.72,c[t]=.85,d[t]=n*.85}let p=dh(a,[3,1.4,3]);return mh(H.fx(50),H.fy(y),1.05,p[0],t,{color:i.red,alpha:.98,size:.98,orderBase:.05}),mh(H.fx(40),H.fy(50/40*y),.72,p[1],t,{color:i.slate,alpha:.9,size:.92,orderBase:.45}),mh(H.fx(30),H.fy(50/30*y),1.05,p[2],t,{color:i.teal,alpha:.98,size:.98,orderBase:.85}),t}),this.chart=_h(e,this.id);let U=[{a:[C.left,C.bottom],b:[C.right,C.bottom],kind:`baseline`},{a:[C.left,C.bottom],b:[C.left,C.top],kind:`axis`},{a:[C.fx(y),C.bottom],b:[C.fx(y),C.top],kind:`refline`,cls:`is-red`,dashed:!0},{a:[C.fx(1),C.bottom],b:[C.fx(1),C.top],kind:`refline`,dashed:!0},{a:[C.fx(1.5),C.bottom],b:[C.fx(1.5),C.top],kind:`refline`,cls:`is-teal`,dashed:!0}],ne=[],re=[{text:`Entire homes`,at:[C.left,C.top+1.8],role:`axis-title`,align:`left`,valign:`bottom`},{text:`Estimated Airbnb revenue / annual long-term rent (capped at 2.5×+)`,at:[C.cx,C.bottom-4.7],role:`axis-title`,align:`center`,valign:`top`},{text:`Med. 0.61`,at:[C.fx(y),C.top+.5],role:`value`,align:`center`,valign:`bottom`,cls:`is-red`},{text:`1.0× rent`,at:[C.fx(1),C.top+.5],role:`value`,align:`center`,valign:`bottom`,cls:`is-amber`},{text:`1.5×`,at:[C.fx(1.5),C.top+.5],role:`value`,align:`center`,valign:`bottom`,cls:`is-teal`}];for(let e of[0,500,1e3,1500,2e3]){let t=C.fy(e);e>0&&U.push({a:[C.left,t],b:[C.right,t],kind:`gridline`}),ne.push({at:[C.left,t],dx:-6,dy:0}),re.push({text:e.toLocaleString(`en-AU`),at:[C.left,t],offset:[-12,e===0?-3:0],role:`tick`,align:`right`,valign:`middle`})}for(let[e,t]of[[0,`0.0×`],[.5,`0.5×`],[1,`1.0×`],[1.5,`1.5×`],[2,`2.0×`],[2.55,`2.5×+`]]){let n=C.fx(e);ne.push({at:[n,C.bottom],dx:0,dy:6}),re.push({text:t,at:[n,C.bottom],offset:[e===0?4:0,12],role:`tick`,align:`center`,valign:`top`})}this.chart.defineStep(0,{kind:`histogram`,lines:U,ticks:ne,labels:re,legend:{at:[C.right,15.2],align:`right`,valign:`middle`,items:[{color:`red`,label:`Below 1.0× (${b}%)`},{color:`amber`,label:`1.0–1.5× (${S}%)`},{color:`teal`,label:`Above 1.5× (${x}%)`}]},marks:w});let W=-11.6,ie=11.4,ae=[{a:[M,W],b:[N,W],kind:`baseline`},{a:[M,W],b:[M,ie],kind:`axis`},{a:[P(1),-.7],b:[P(1),ie],kind:`refline`},{a:[P(1),W],b:[P(1),-2.9],kind:`refline`},{a:[P(1.5),-.7],b:[P(1.5),ie],kind:`refline`,cls:`is-teal`,dashed:!0},{a:[P(1.5),W],b:[P(1.5),-2.9],kind:`refline`,cls:`is-teal`,dashed:!0},{a:[F,W],b:[I,W],kind:`baseline`},{a:[F,W],b:[F,ie],kind:`axis`},{a:[L(1),6.8],b:[L(1),ie],kind:`refline`},{a:[L(1),W],b:[L(1),3.2],kind:`refline`},{a:[L(1.5),6.8],b:[L(1.5),ie],kind:`refline`,cls:`is-teal`,dashed:!0},{a:[L(1.5),W],b:[L(1.5),3.2],kind:`refline`,cls:`is-teal`,dashed:!0}],oe=[],G=[{text:`Top 6 & bottom 4 councils (of 30)`,at:[M,14.2],role:`panel-title`,align:`left`,valign:`middle`},{text:`Host group & distance band`,at:[F,14.2],role:`panel-title`,align:`left`,valign:`middle`},{text:`20 middle councils: ${A}–${j}`,at:[-16.599999999999998,-1.8],role:`note`,align:`left`,valign:`middle`},{text:`Distance from CBD`,at:[12.6,4.9],role:`axis-title`,align:`left`,valign:`middle`},{text:`Median revenue / annual rent (1.0× solid · 1.5× dashed)`,at:[4.5,-16],role:`axis-title`,align:`center`,valign:`top`}];for(let e of[0,.5,1,1.5]){let t=P(e),n=L(e);e===.5&&ae.push({a:[t,-.7],b:[t,ie],kind:`gridline`},{a:[t,W],b:[t,-2.9],kind:`gridline`},{a:[n,6.8],b:[n,ie],kind:`gridline`},{a:[n,W],b:[n,3.2],kind:`gridline`}),oe.push({at:[t,W],dx:0,dy:6},{at:[n,W],dx:0,dy:6});let r=e.toFixed(1);G.push({text:r,at:[t,W],offset:[0,9],role:`tick`,align:`center`,valign:`top`},{text:r,at:[n,W],offset:[0,9],role:`tick`,align:`center`,valign:`top`})}for(let e of z)G.push({text:e.label,at:[M,e.cy],offset:[-10,0],role:`category`,align:`right`,valign:`middle`,categoryFor:e.label},{text:e.val.toFixed(2),at:[P(e.val),e.cy],offset:[8,0],role:`value`,align:`left`,valign:`middle`,cls:e.cls});for(let e of B)G.push({text:e.label,at:[F,e.cy],offset:[-10,0],role:`category`,align:`right`,valign:`middle`,categoryFor:e.label},{text:e.val.toFixed(2),at:[L(e.val),e.cy],offset:[8,0],role:`value`,align:`left`,valign:`middle`,cls:e.cls});this.chart.defineStep(1,{kind:`bar`,lines:ae,ticks:oe,labels:G,marks:V});let se=[{a:[H.left,H.bottom],b:[H.right,H.bottom],kind:`baseline`},{a:[H.left,H.bottom],b:[H.left,H.top],kind:`axis`},{a:[H.left,H.fy(1)],b:[H.right,H.fy(1)],kind:`refline`,dashed:!0}];for(let e=0;e<te.length-1;e++){let t=te[e],n=te[e+1];se.push({a:[H.fx(t.rate),H.fy(t.median)],b:[H.fx(n.rate),H.fy(n.median)],kind:`curve`,cls:n.median>=1?``:`is-red`,registerAxis:!1})}let ce=[],le=[{text:`Median revenue / rent ratio`,at:[H.left,H.top+1.8],role:`axis-title`,align:`left`,valign:`bottom`},{text:`Assumed guest review rate (50% baseline → 30%)`,at:[H.cx,H.bottom-4.7],role:`axis-title`,align:`center`,valign:`top`},{text:`1.0× rent`,at:[H.right,H.fy(1)],offset:[24,0],role:`value`,align:`left`,valign:`middle`,cls:`is-amber`},{text:`0.61×`,at:[H.fx(50),H.fy(y)],offset:[18,18],role:`value`,align:`left`,valign:`top`,cls:`is-red`},{text:`1.01×`,at:[H.fx(30),H.fy(50/30*y)],offset:[0,-22],role:`value`,align:`center`,valign:`bottom`,cls:`is-teal`}];for(let e of[0,.2,.4,.6,.8,1,1.2]){let t=H.fy(e);e>0&&Math.abs(e-1)>1e-4&&se.push({a:[H.left,t],b:[H.right,t],kind:`gridline`}),ce.push({at:[H.left,t],dx:-6,dy:0}),le.push({text:`${e.toFixed(1)}×`,at:[H.left,t],offset:[-12,e===0?-3:0],role:`tick`,align:`right`,valign:`middle`})}for(let e of[50,45,40,35,30]){let t=H.fx(e);e<50&&se.push({a:[t,H.bottom],b:[t,H.top],kind:`gridline`}),ce.push({at:[t,H.bottom],dx:0,dy:6}),le.push({text:`${e}%`,at:[t,H.bottom],offset:[e===50?4:0,12],role:`tick`,align:`center`,valign:`top`})}this.chart.defineStep(2,{kind:`line`,lines:se,ticks:ce,labels:le,marks:[]}),this.pinGroups={hist:[],bars:[],sens:[]},this.pinGroups.hist.push(n.addFlag(s_(`67.7% below rent (${g.toLocaleString(`en-AU`)})`,`Median ratio 0.61 · 12,096 homes`,`is-red is-left`),[C.fx(y),C.fy(1280),0],{height:2.2,offset:[26,-8],cls:`cl-red`}),n.addFlag(s_(`18.0% above 1.5× rent`,`Roughly break-even at 33% costs`,`is-teal is-left`),[C.fx(1.5),C.fy(580),0],{height:2.6,offset:[24,-8],cls:`cl-teal`})),this.pinGroups.sens.push(n.add(s_(`50% review rate (baseline)`,`Median 0.61× · 67.7% below rent`,`is-red is-left`),[-17.2,H.fy(.32),0]),n.add(s_(`30% review rate`,`Median 1.01× · crosses 1.0× parity`,`is-teal is-right`),[17.5,H.fy(1.13),0])),this._hideAll()},_setGroupOpacity(e,t){let n=t<.01?0:Math.min(1,t);for(let t of e)t.setOpacity?t.setOpacity(n):t.el.style.opacity=String(n)},_hideAll(){this.chart.hideAll();for(let e of Object.values(this.pinGroups))this._setGroupOpacity(e,0)},enter(){},leave(){this._hideAll()},update(e,t){let{rig:n,field:r,lines:i}=t;Zm(n,t_);let a=qm(Ym(e,.28,.44)),o=qm(Ym(e,.64,.8));e<.64?a<=.001?r.showLayout(`a3rn_hist`):a>=.999?r.showLayout(`a3rn_bars`):r.morph(`a3rn_hist`,`a3rn_bars`,a,{stagger:.36,lift:1.6,liftZ:2.2}):o<=.001?r.showLayout(`a3rn_bars`):o>=.999?r.showLayout(`a3rn_sens`):r.morph(`a3rn_bars`,`a3rn_sens`,o,{stagger:.35,lift:1.6,liftZ:2.2}),r.setShape(0,0),r.setDrift(0),r.highlight(null),i.visibility=0;let s=ah(e,{exit:[.25,.33]}),c=ah(e,{enter:[.4,.48],exit:[.62,.69]}),l=ah(e,{enter:[.76,.84]});this.chart.setVisibilities({0:s,1:c,2:l}),this._setGroupOpacity(this.pinGroups.hist,s),this._setGroupOpacity(this.pinGroups.bars,c),this._setGroupOpacity(this.pinGroups.sens,l)}},l_=`http://www.w3.org/2000/svg`,u_=ih({distance:60}),d_=[{label:`Indoor fireplace`,en:18,ols:19.7,colorKey:`amber`,cls:`is-amber`},{label:`Extra bedroom`,en:12.1,ols:12.2,colorKey:`amber`,cls:`is-amber`},{label:`2× CBD distance`,en:-2.3,ols:-3.2,colorKey:`slate`,cls:`is-slate`},{label:`Shared bathroom`,en:-21.8,ols:-21.5,colorKey:`red`,cls:`is-red`},{label:`Private room`,en:-42.7,ols:-42.9,colorKey:`red`,cls:`is-red`}],f_=[{key:`b0`,label:`<−40%`,html:`<−40%`,rev:5815,revLbl:`$5,815`,nights:84.16},{key:`b1`,label:`−40 to −20%`,html:`−40 to<br>−20%`,rev:13413,revLbl:`$13.4k`,nights:97.67},{key:`b2`,label:`−20 to −5%`,html:`−20 to<br>−5%`,rev:14778,revLbl:`$14.8k`,nights:88.99},{key:`b3`,label:`−5 to +5%`,html:`−5 to<br>+5%`,rev:15588,revLbl:`$15.6k`,nights:85.19},{key:`b4`,label:`+5 to +20%`,html:`+5 to<br>+20%`,rev:17208,revLbl:`$17,208`,nights:78.18},{key:`b5`,label:`+20 to +50%`,html:`+20 to<br>+50%`,rev:15891,revLbl:`$15.9k`,nights:71.12},{key:`b6`,label:`>+50%`,html:`>+50%`,rev:12656,revLbl:`$12.7k`,nights:54.05}];function p_(e){return`$${Math.round(e).toLocaleString(`en-AU`)}`}function m_(e){return`${e>0?`+`:`−`}${Math.abs(e).toFixed(1)}%`}function h_(e,t=``,n=``){let r=document.createElement(`div`);return r.className=`b1-pin${n?` ${n}`:``}`,r.style.opacity=`0`,r.innerHTML=`<div class="b1-pin-in"><span class="b1-pin-title">${e}</span>`+(t?`<span class="b1-pin-sub">${t}</span>`:``)+`</div>`,r}function g_(e,t={}){let n=document.createElementNS(l_,e);for(let[e,r]of Object.entries(t))n.setAttribute(e,String(r));return n}var __={id:`b1-price-model`,figureTitle:`Elastic net regression on nightly price`,heightVh:260,afterParagraph:0,captions:[{at:0,text:`The one-standard-error elastic net keeps 24 of 28 predictors (Test R² 0.674, MAE $78.87 vs $127 baseline), placing 46.8% of estimates within 20% of actual price.`},{at:.32,text:`Product type and size alone explain 0.631 of test R²; listing, host and location features add only about 0.04 more.`},{at:.56,text:`Strongest price effects: private rooms (−42.7%), shared bathrooms (−21.8%), indoor fireplaces (+18.0%) and each extra bedroom (+12.1%).`},{at:.78,text:`Median revenue peaks at 5% to 20% above the estimate ($17,208); deep discounts (>40% below) earn the least ($5,815).`}],mount(e){let{stage:t,data:n,pins:r,registerLayout:i}=e,a=rh(),{drop_stage:o,price:s,pred_price:c,is_test:l,rand:u}=n.cols,d=[],f=[];for(let e=0;e<n.count;e++)o[e]===0&&(d.push(e),l[e]===1&&Number.isFinite(s[e])&&Number.isFinite(c[e])&&c[e]>0&&f.push(e));let p=1300,m=lh({x:-20,y:-10.5,width:22,height:22,xScale:sh(30,p,-20,2),yScale:sh(30,p,-10.5,11.5)});i(`b1_scatter`,e=>{let t=uh(e.count);return hh(f,e=>{let t=s[e],n=c[e];if(t<30||t>p||n<30||n>p)return null;let r=Math.abs(n-t)/t<=.2;return{x:m.fx(n),y:m.fy(t),color:r?a.amber:a.slate,alpha:r?.84:.58,size:r?.96:.84,order:(m.fx(n)-m.left)/m.width*.65+u[e]*.25}},t),t});let h=oh(0,1,-23,25),g=-2.8,_=2.6,v=[{key:`prod`,label:`Product type & size`,v0:0,v1:.631,val:.631,valText:`0.631`,color:a.amber,alpha:.92,cls:`is-amber`},{key:`add`,label:`Listing, host & location`,v0:.631,v1:.674,val:.043,valText:`+0.04`,color:a.teal,alpha:.95,cls:`is-teal`},{key:`unexp`,label:`Unexplained (~1/3)`,v0:.674,v1:1,val:.326,valText:`0.326`,color:a.slate,alpha:.62,cls:`is-slate`}],y=v.map(e=>({label:e.label,categoryLabel:e.label,group:`r2-bar`,orientation:`horizontal`,value:e.val,baseValue:e.v0,stacked:!0,rect:{x0:h(e.v0),x1:h(e.v1),y0:g,y1:_}}));i(`b1_r2`,e=>{let t=uh(e.count),n=dh(d,v.map(e=>e.val),{minPerItem:400}),r=.14;for(let e=0;e<v.length;e++){let i=v[e];fh({x0:e===0?h(i.v0):h(i.v0)+r*.5,x1:e===v.length-1?h(i.v1):h(i.v1)-r*.5,y0:g,y1:_},n[e],t,{color:i.color,alpha:i.alpha,size:.96,orderBase:e*.28,orderSpan:.24,orientation:`horizontal`})}return t});let b=oh(-55,30,-13,25.5),x=[8,3.6,-.8,-5.2,-9.6],S=2.3,C=[],w=[];for(let e=0;e<d_.length;e++){let t=d_[e],n=x[e],r=b(0),i=b(t.en),o={x0:Math.min(r,i),x1:Math.max(r,i),y0:n-S*.5,y1:n+S*.5};C.push({rect:o,color:a[t.colorKey],alpha:t.colorKey===`slate`?.85:.92,weight:Math.abs(t.en),orderBase:e*.14}),w.push({label:t.label,categoryLabel:t.label,group:`coef`,orientation:`horizontal`,value:Math.abs(t.en),baseValue:t.en>=0?0:t.en,rect:o})}i(`b1_coef`,e=>{let t=uh(e.count),n=dh(d,C.map(e=>e.weight),{minPerItem:260});for(let e=0;e<C.length;e++){let r=C[e];fh(r.rect,n[e],t,{color:r.color,alpha:r.alpha,size:.94,orderBase:r.orderBase,orderSpan:.18,orientation:`horizontal`})}return t});let T=ch(f_.map(e=>e.key),-21,26.5,{paddingInner:.32,paddingOuter:.12}),E=oh(0,2e4,.2,11.8),D=oh(0,110,-9.6,-2.6),O=-21.5,k=26.8,A=[],j=[];for(let e=0;e<f_.length;e++){let t=f_[e],n={x0:T.start(e),x1:T.end(e),y0:E(0),y1:E(t.rev)},r=e===4?a.amber:e===0?a.red:a.slate;A.push({rect:n,color:r,alpha:e===4||e===0?.94:.78,weight:t.rev,orderBase:e*.1}),j.push({label:t.label,categoryLabel:t.label,group:`rev-bands`,orientation:`vertical`,value:t.rev,baseValue:0,rect:n})}i(`b1_bands`,e=>{let t=uh(e.count),n=dh(d,A.map(e=>e.weight),{minPerItem:400});for(let e=0;e<A.length;e++){let r=A[e];fh(r.rect,n[e],t,{color:r.color,alpha:r.alpha,size:.94,orderBase:r.orderBase,orderSpan:.18,orientation:`vertical`})}return t}),this.chart=_h(e,this.id);let M=document.querySelector(`[data-viewport="${this.id}"]`),N=[{a:[m.left,m.bottom],b:[m.right,m.bottom],kind:`baseline`},{a:[m.left,m.bottom],b:[m.left,m.top],kind:`axis`}],P=[],F=[{text:`Actual price, log scale`,at:[m.left,m.top+1.1],role:`axis-title`,align:`left`,valign:`bottom`},{text:`Predicted nightly price, log scale (test set, n = 3,093)`,at:[m.cx+4.5,m.bottom-4.6],role:`axis-title`,align:`center`,valign:`top`},{text:`y = x (±20%)`,at:[m.fx(1050),m.fy(1050)],offset:[12,0],role:`value`,align:`left`,valign:`middle`,cls:`is-amber`}];for(let e of[50,100,250,500,1e3]){let t=m.fx(e),n=m.fy(e);N.push({a:[t,m.bottom],b:[t,m.top],kind:`gridline`},{a:[m.left,n],b:[m.right,n],kind:`gridline`}),P.push({at:[t,m.bottom],dx:0,dy:6},{at:[m.left,n],dx:-6,dy:0}),F.push({text:p_(e),at:[t,m.bottom],offset:[0,10],role:`tick`,align:`center`,valign:`top`},{text:p_(e),at:[m.left,n],offset:[-10,0],role:`tick`,align:`right`,valign:`middle`})}let I=this.chart.defineStep(0,{kind:`scatter`,lines:N,ticks:P,labels:F,legend:{at:[m.left,15.2],align:`left`,valign:`middle`,items:[{color:`amber`,label:`Within ±20% (46.8%)`},{color:`slate`,label:`Outside ±20%`}]},marks:[]}),L=g_(`polygon`,{class:`b1-band-poly`}),R=g_(`line`,{class:`b1-band-edge`}),z=g_(`line`,{class:`b1-band-edge`}),B=g_(`line`,{class:`b1-diag-line`});I.svg.prepend(L,R,z,B);let ee=[{a:[h(0),-6.2],b:[h(1),-6.2],kind:`baseline`},{a:[h(.674),-6.2],b:[h(.674),4.4],kind:`refline`,dashed:!0}],V=[],te=[{text:`Share of test log-price variance (R², 0 to 1)`,at:[h(0),-11.6],role:`axis-title`,align:`left`,valign:`top`},{text:`Product type & size`,at:[h(.3155),5.6],role:`category`,align:`center`,valign:`bottom`,categoryFor:v[0].label},{text:`0.631`,at:[h(.3155),3.3],role:`value`,align:`center`,valign:`bottom`,cls:`is-amber`},{text:`Listing, host & location`,at:[h(.6525),9.6],role:`category`,align:`center`,valign:`bottom`,categoryFor:v[1].label},{text:`+0.04`,at:[h(.6525),7.3],role:`value`,align:`center`,valign:`bottom`,cls:`is-teal`},{text:`Unexplained (~1/3)`,at:[h(.865),5.6],role:`category`,align:`center`,valign:`bottom`,categoryFor:v[2].label},{text:`0.326`,at:[h(.865),3.3],role:`value`,align:`center`,valign:`bottom`,cls:`is-slate`},{text:`Total Test R² = 0.674`,at:[h(.674),-4.5],offset:[-10,0],role:`value`,align:`right`,valign:`middle`,cls:`is-amber`}];ee.push({a:[h(.6525),2.8],b:[h(.6525),6.9],kind:`leader`,cls:`is-teal`,registerAxis:!1});for(let e of[0,.2,.4,.6,.8,1]){let t=h(e);ee.push({a:[t,-6.2],b:[t,2.8],kind:`gridline`}),V.push({at:[t,-6.2],dx:0,dy:6}),te.push({text:e.toFixed(1),at:[t,-6.2],offset:[0,10],role:`tick`,align:`center`,valign:`top`})}this.chart.defineStep(1,{kind:`stacked-bar`,lines:ee,ticks:V,labels:te,legend:{at:[-23,14.5],align:`left`,valign:`middle`,items:[{color:`amber`,label:`Product type & size`},{color:`teal`,label:`Listing, host & location`},{color:`slate`,label:`Unexplained`}]},marks:y});let H=10.6,U=[{a:[b(-55),-12],b:[b(30),-12],kind:`baseline`},{a:[b(0),-12],b:[b(0),H],kind:`axis`}],ne=[],re=[{text:`Effect on nightly price, % (holding other predictors fixed)`,at:[b(-12.5),-15.6],role:`axis-title`,align:`center`,valign:`top`}];for(let e of[-50,-40,-30,-20,-10,0,10,20,30]){let t=b(e);e!==0&&U.push({a:[t,-12],b:[t,H],kind:`gridline`}),(e%20==0||e===-50||e===30)&&(ne.push({at:[t,-12],dx:0,dy:6}),re.push({text:e>0?`+${e}%`:e<0?`−${Math.abs(e)}%`:`0%`,at:[t,-12],offset:[0,9],role:`tick`,align:`center`,valign:`top`}))}for(let e=0;e<d_.length;e++){let t=d_[e],n=x[e],r=t.en>=0,i=r?Math.max(b(t.en),b(t.ols)):Math.min(b(t.en),b(t.ols));re.push({text:t.label,at:[-14.2,n],role:`category`,align:`right`,valign:`middle`,categoryFor:t.label},{text:m_(t.en),at:[i,n],offset:[r?10:-10,0],role:`value`,align:r?`left`:`right`,valign:`middle`,cls:t.cls})}let W=this.chart.defineStep(2,{kind:`bar`,lines:U,ticks:ne,labels:re,legend:{at:[-26.5,14.4],align:`left`,valign:`middle`,items:[{color:`amber`,label:`Premium (elastic net)`},{color:`red`,label:`Discount (elastic net)`},{color:`teal`,label:`OLS comparison tick`}]},marks:w}),ie=d_.map(()=>g_(`line`,{class:`b1-ols-tick`}));for(let e of ie)W.svg.appendChild(e);let ae=[{a:[O,E(0)],b:[k,E(0)],kind:`baseline`},{a:[O,E(0)],b:[O,E(2e4)],kind:`axis`},{a:[O,D(0)],b:[k,D(0)],kind:`baseline`},{a:[O,D(0)],b:[O,D(110)],kind:`axis`}],oe=[],G=[{text:`Median revenue ($/yr)`,at:[O,E(2e4)+1.2],role:`axis-title`,align:`left`,valign:`bottom`},{text:`Mean nights / yr`,at:[O,D(110)+.5],offset:[0,-4],role:`axis-title`,align:`left`,valign:`bottom`,cls:`is-teal`},{text:`Actual price vs model estimate`,at:[2.75,-14.7],role:`axis-title`,align:`center`,valign:`top`}];for(let e of[0,5e3,1e4,15e3,2e4]){let t=E(e);e>0&&ae.push({a:[O,t],b:[k,t],kind:`gridline`}),oe.push({at:[O,t],dx:-6,dy:0}),G.push({text:e===0?`$0`:`$${e/1e3}k`,at:[O,t],offset:[-10,0],role:`tick`,align:`right`,valign:`middle`})}for(let e of[0,50,100]){let t=D(e);e>0&&ae.push({a:[O,t],b:[k,t],kind:`gridline`}),oe.push({at:[O,t],dx:-6,dy:0}),G.push({text:String(e),at:[O,t],offset:[-10,0],role:`tick`,align:`right`,valign:`middle`,cls:`is-teal`})}for(let e=0;e<f_.length;e++){let t=f_[e],n=T(e),r=e===4?`is-amber`:e===0?`is-red`:`is-slate`;G.push({html:t.html,at:[n,D(0)],offset:[0,10],role:`category`,align:`center`,valign:`top`,cls:`b1-cat-two-line`,categoryFor:t.label},{text:t.revLbl,at:[n,E(t.rev)],offset:[0,-7],role:`value`,align:`center`,valign:`bottom`,cls:r},{text:String(Math.round(t.nights)),at:[n,D(t.nights)],offset:[0,e===0?-7:e===6?-10:-11],role:`value`,align:`center`,valign:`bottom`,cls:`is-teal`})}let se=this.chart.defineStep(3,{kind:`bar`,lines:ae,ticks:oe,labels:G,legend:{at:[k,14.6],align:`right`,valign:`middle`,items:[{color:`amber`,label:`Peak ($17,208)`},{color:`red`,label:`Lowest ($5,815)`},{color:`teal`,label:`Mean nights`}]},marks:j}),ce=g_(`polyline`,{class:`b1-nights-line`});se.svg.appendChild(ce);let le=f_.map(()=>{let e=g_(`circle`,{class:`b1-nights-dot`,r:4.5});return se.svg.appendChild(e),e}),ue=new Z,de=(e,n,r,i)=>(ue.set(e,n,0).project(t.camera),[(ue.x*.5+.5)*r,(-ue.y*.5+.5)*i]),fe=()=>{if(!t.container||t.container!==M)return;let e=t.width,n=t.height;if(!(e<10||n<10)){if(I.opacity>.005){let[t,r]=de(m.left,m.bottom,e,n),[i,a]=de(m.right,m.top,e,n);B.setAttribute(`x1`,t.toFixed(1)),B.setAttribute(`y1`,r.toFixed(1)),B.setAttribute(`x2`,i.toFixed(1)),B.setAttribute(`y2`,a.toFixed(1));let o=de(m.fx(30),m.fy(37.5),e,n),s=de(m.fx(1040),m.fy(p),e,n),c=de(m.right,m.top,e,n),l=de(m.fx(p),m.fy(1083.3333333333335),e,n),u=de(m.fx(36),m.fy(30),e,n),d=de(m.left,m.bottom,e,n);L.setAttribute(`points`,[d,o,s,c,l,u].map(e=>`${e[0].toFixed(1)},${e[1].toFixed(1)}`).join(` `)),R.setAttribute(`x1`,o[0].toFixed(1)),R.setAttribute(`y1`,o[1].toFixed(1)),R.setAttribute(`x2`,s[0].toFixed(1)),R.setAttribute(`y2`,s[1].toFixed(1)),z.setAttribute(`x1`,u[0].toFixed(1)),z.setAttribute(`y1`,u[1].toFixed(1)),z.setAttribute(`x2`,l[0].toFixed(1)),z.setAttribute(`y2`,l[1].toFixed(1))}if(W.opacity>.005)for(let t=0;t<d_.length;t++){let r=d_[t],i=x[t],a=b(r.ols),[o,s]=de(a,i-S*.62,e,n),[c,l]=de(a,i+S*.62,e,n);ie[t].setAttribute(`x1`,o.toFixed(1)),ie[t].setAttribute(`y1`,s.toFixed(1)),ie[t].setAttribute(`x2`,c.toFixed(1)),ie[t].setAttribute(`y2`,l.toFixed(1))}if(se.opacity>.005){let t=[];for(let r=0;r<f_.length;r++){let[i,a]=de(T(r),D(f_[r].nights),e,n);t.push(`${i.toFixed(1)},${a.toFixed(1)}`),le[r].setAttribute(`cx`,i.toFixed(1)),le[r].setAttribute(`cy`,a.toFixed(1))}ce.setAttribute(`points`,t.join(` `))}}};t.onFrame(fe),t.onResize(fe),this.pinGroups={s1:[],s2:[],s3:[],s4:[]},this.pinGroups.s1.push(r.add(h_(`Test R² 0.674`,`MAE $78.87 vs $127 base`,`is-amber is-left`),[7.2,4.5,0]),r.add(h_(`24 of 28 kept (4 dropped)`,`Median err. 21.7% vs 33.9%`,`is-slate is-left`),[7.2,-3.5,0])),this.pinGroups.s2.push(r.add(h_(`OLS 0.679 vs Elastic net 0.674`,`4 fewer predictors`,`is-amber is-right`),[25,-13,0])),this.pinGroups.s3.push(r.add(h_(`Elastic net ≈ OLS`,`Shrinks weak terms`,`is-teal is-left`),[b(0)+1.2,-7.2,0])),this._hideAll()},_setPinOpacity(e,t){let n=t<.01?0:Math.min(1,t);for(let t of e)t.setOpacity?t.setOpacity(n):t.el.style.opacity=String(n)},_hideAll(){this.chart.hideAll();for(let e of Object.values(this.pinGroups))this._setPinOpacity(e,0)},enter(){},leave(){this._hideAll()},update(e,t){let{rig:n,field:r,lines:i}=t;Zm(n,u_);let a=qm(Ym(e,.25,.36)),o=qm(Ym(e,.5,.6)),s=qm(Ym(e,.74,.84));e<.5?a<=.001?r.showLayout(`b1_scatter`):a>=.999?r.showLayout(`b1_r2`):r.morph(`b1_scatter`,`b1_r2`,a,{stagger:.35,lift:1.6,liftZ:2.4}):e<.74?o<=.001?r.showLayout(`b1_r2`):o>=.999?r.showLayout(`b1_coef`):r.morph(`b1_r2`,`b1_coef`,o,{stagger:.35,lift:1.6,liftZ:2.2}):s<=.001?r.showLayout(`b1_coef`):s>=.999?r.showLayout(`b1_bands`):r.morph(`b1_coef`,`b1_bands`,s,{stagger:.35,lift:1.6,liftZ:2.4}),r.setShape(0,0),r.setDrift(0),r.highlight(null),i.visibility=0;let c=ah(e,{exit:[.22,.29]}),l=ah(e,{enter:[.33,.39],exit:[.47,.53]}),u=ah(e,{enter:[.57,.63],exit:[.71,.77]}),d=ah(e,{enter:[.81,.87]});this.chart.setVisibilities({0:c,1:l,2:u,3:d}),this._setPinOpacity(this.pinGroups.s1,c),this._setPinOpacity(this.pinGroups.s2,l),this._setPinOpacity(this.pinGroups.s3,u),this._setPinOpacity(this.pinGroups.s4,d)}},v_=`http://www.w3.org/2000/svg`,y_={x:0,y:.2,z:0,distance:56,azimuth:-30,polar:68,fit:.65,flat:0},b_=ih({distance:60}),x_={x:11.5,y:0,z:2,distance:120,azimuth:0,polar:4,fit:.68,flat:1},S_={x:11.5,y:0,z:2,distance:120,azimuth:0,polar:4,fit:.68,flat:1},C_=Math.log(30),w_=Math.log(1200),T_=-13,E_=13,D_=-7.6,O_=8.4,k_=-5,A_=5;function j_(e){return T_+Math.min(1,Math.max(0,(Math.log(Math.max(30,e))-C_)/(w_-C_)))*26}function M_(e){return D_+Math.min(1,Math.max(0,e/6))*16}var N_=[{key:`rooms`,label:`Rooms`,listShare:20,revShare:4.5,listText:`20%`,revText:`4.5%`,medPrice:`$105`,medRev:`$2,400`},{key:`small`,label:`Small entire homes`,listShare:60,revShare:63.6,listText:`60%`,revText:`63.6%`,medPrice:`$267`,medRev:`$18,794`},{key:`large`,label:`Large entire homes`,listShare:21,revShare:31.9,listText:`21%`,revText:`31.9%`,medPrice:`$461`,medRev:`$23,041`}],P_=new Set([2,4,5]),F_=new Set([3,7,8,11]),I_={Melbourne:1,"Port Phillip":1,Stonnington:1,Yarra:1,Banyule:2,Boroondara:2,Darebin:2,"Glen Eira":2,"Hobsons Bay":2,Maribyrnong:2,Monash:2,"Moonee Valley":2,Moreland:2,Whitehorse:2,Bayside:3,Cardinia:3,Frankston:3,Hume:3,Kingston:3,Knox:3,Manningham:3,Maroondah:3,Nillumbik:3,Whittlesea:3,"Yarra Ranges":3,Brimbank:4,Casey:4,"Greater Dandenong":4,Melton:4,Wyndham:4};function L_(e,t=``,n=``){let r=document.createElement(`div`);return r.className=`b2-pin${n?` ${n}`:``}`,r.style.opacity=`0`,r.innerHTML=`<div class="b2-pin-in"><span class="b2-pin-title">${e}</span>`+(t?`<span class="b2-pin-sub">${t}</span>`:``)+`</div>`,r}function R_(e,t={}){let n=document.createElementNS(v_,e);for(let[e,r]of Object.entries(t))n.setAttribute(e,String(r));return n}var z_={id:`b2-clustering`,figureTitle:`K-means segments, DBSCAN hotspots and Ward councils`,heightVh:260,afterParagraph:0,captions:[{at:0,text:`Three standardised inputs (log price, bedrooms, entire home) reach a silhouette of 0.553 at k = 3, versus 0.229 for the seven-input specification.`},{at:.3,text:`Small entire homes (60%) generate 63.6% of revenue at 95 nights; large homes (21%) earn the highest median ($23,041); rooms (20%) take 4.5%.`},{at:.6,text:`DBSCAN finds 12 spatial hotspots: Yarra Ranges hotspots earn $25,647–$41,472 while Wyndham and Brimbank hotspots earn $2,751–$4,932.`},{at:.8,text:`Ward clustering of the 30 councils (silhouette 0.239) traces a revenue gradient from $19,059 inner to $8,694 middle suburbs, recovering to $14,760 outer.`}],mount(e){let{stage:t,data:n,pins:r,registerLayout:i,registerMapLike:a}=e,o=rh(),s=Np(),c=[o.violet,o.amber,o.teal],l=n.meta.councils.map(e=>I_[e]||2),u=[];for(let e=0;e<n.count;e++)n.cols.drop_stage[e]===0&&u.push(e);i(`b2_space`,e=>{let t=uh(e.count),{drop_stage:n,price:r,bedrooms:i,room_type:a,km3:o,rand:s}=e.cols,{positions:l,colors:u,sizes:d,alphas:f,order:p}=t;for(let t=0;t<e.count;t++){if(n[t]!==0||o[t]>2)continue;let e=j_(r[t]),m=M_(i[t])+(t*.6180339%1-.5)*.75,h=(a[t]===0?A_:k_)+(s[t]-.5)*1.1,g=o[t],_=c[g];l[t*3]=e,l[t*3+1]=m,l[t*3+2]=h,u[t*3]=_[0],u[t*3+1]=_[1],u[t*3+2]=_[2],f[t]=g===1?.54:.74,d[t]=g===1?.86:.94,p[t]=g*.28+s[t]*.16}return t}),this.spaceLines=new dg;let d=[{a:[T_,D_,-6.5],b:[E_,D_,-6.5],color:s.slate,alpha:.32},{a:[T_,D_,6.5],b:[E_,D_,6.5],color:s.slate,alpha:.58},{a:[T_,D_,-6.5],b:[T_,D_,6.5],color:s.slate,alpha:.45},{a:[E_,D_,-6.5],b:[E_,D_,6.5],color:s.slate,alpha:.55},{a:[T_,D_,6.5],b:[T_,O_,6.5],color:s.slate,alpha:.58},{a:[T_,D_,-6.5],b:[T_,O_,-6.5],color:s.slate,alpha:.25},{a:[T_,D_,0],b:[E_,D_,0],color:s.slate,alpha:.22}],f=[50,150,400,1e3];for(let e of f){let t=j_(e);d.push({a:[t,D_,6.5],b:[t,D_,7.3],color:s.slate,alpha:.6},{a:[t,D_,-6.5],b:[t,D_,6.5],color:s.slate,alpha:.14})}let p=[0,2,4,6];for(let e of p){let t=M_(e);d.push({a:[-13.8,t,6.5],b:[T_,t,6.5],color:s.slate,alpha:.6},{a:[T_,t,-6.5],b:[T_,t,6.5],color:s.slate,alpha:.14})}for(let e of[k_,A_])d.push({a:[E_,D_,e],b:[13.9,D_,e],color:s.slate,alpha:.6});this.spaceLines.set(d),t.add(this.spaceLines.object3d);let m=ch(N_.map(e=>e.key),-17,24.5,{paddingInner:.28,paddingOuter:.12}),h=oh(0,70,-5.8,11.4),g=-18.5,_=25.5,v=3.8,y=.65,b=[],x=[];for(let e=0;e<N_.length;e++){let t=N_[e],n=m(e),r={x0:n-y*.5-v,x1:n-y*.5,y0:h(0),y1:h(t.listShare)},i={x0:n+y*.5,x1:n+y*.5+v,y0:h(0),y1:h(t.revShare)};b.push({rect:r,color:o.slate,alpha:.82,weight:t.listShare,orderBase:e*.2},{rect:i,color:o.amber,alpha:.94,weight:t.revShare,orderBase:e*.2+.08}),x.push({label:`${t.label} (Listings)`,categoryLabel:t.label,group:`seg-shares`,orientation:`vertical`,value:t.listShare,baseValue:0,rect:r},{label:`${t.label} (Revenue)`,categoryLabel:t.label,group:`seg-shares`,orientation:`vertical`,value:t.revShare,baseValue:0,rect:i})}i(`b2_bars`,e=>{let t=uh(e.count),n=dh(u,b.map(e=>e.weight),{minPerItem:280});for(let e=0;e<b.length;e++){let r=b[e];fh(r.rect,n[e],t,{color:r.color,alpha:r.alpha,size:.96,orderBase:r.orderBase,orderSpan:.2,orientation:`vertical`})}return t}),a(`b2_dbscan`),i(`b2_dbscan`,e=>{let t=uh(e.count),{drop_stage:n,x:r,y:i,dbscan:a}=e.cols,{positions:s,colors:c,sizes:l,alphas:u,order:d}=t,f=new Map,p=e=>Math.floor(r[e]/.45)*8192+Math.floor(i[e]/.45);for(let t=0;t<e.count;t++)n[t]===0&&f.set(p(t),(f.get(p(t))||0)+1);for(let t=0;t<e.count;t++){if(n[t]!==0)continue;let e=a[t],m=Math.max(1,(f.get(p(t))||1)/14),h,g,_,v;e===0?(h=o.slateDim,g=.2,_=.65,v=.05):e===1?(h=o.amber,g=.84/m**.48,_=.94/m**.16,v=.25):P_.has(e)?(h=o.teal,g=.94,_=1.32,v=.58):F_.has(e)?(h=o.red,g=.92,_=1.28,v=.45):(h=o.violet,g=.86,_=1.16,v=.72),s[t*3]=r[t],s[t*3+1]=0,s[t*3+2]=-i[t],c[t*3]=h[0],c[t*3+1]=h[1],c[t*3+2]=h[2],u[t]=g,l[t]=_,d[t]=v}return t}),a(`b2_ward`),i(`b2_ward`,e=>{let t=uh(e.count),{drop_stage:n,x:r,y:i,council:a}=e.cols,{positions:s,colors:c,sizes:u,alphas:d,order:f}=t,p=new Map,m=e=>Math.floor(r[e]/.45)*8192+Math.floor(i[e]/.45);for(let t=0;t<e.count;t++)n[t]===0&&p.set(m(t),(p.get(m(t))||0)+1);for(let t=0;t<e.count;t++){if(n[t]!==0)continue;let e=l[a[t]]||2,h=Math.max(1,(p.get(m(t))||1)/14),g,_,v,y;e===1?(g=o.amber,_=.86/h**.48,v=.96/h**.16,y=.15):e===2?(g=o.slate,_=.76/h**.34,v=1/h**.12,y=.42):e===3?(g=o.teal,_=.86/h**.28,v=1.08/h**.1,y=.68):(g=o.red,_=.82,v=1.04,y=.86),s[t*3]=r[t],s[t*3+1]=0,s[t*3+2]=-i[t],c[t*3]=g[0],c[t*3+1]=g[1],c[t*3+2]=g[2],d[t]=_,u[t]=v,f[t]=y}return t}),this.chart=_h(e,this.id);let S=document.querySelector(`[data-viewport="${this.id}"]`),C=this.chart.defineStep(0,{kind:`3d-scatter`,lines:[],labels:[],legend:{cls:`b2-legend-tl`,items:[{color:`violet`,label:`Rooms`},{color:`amber`,label:`Small entire homes`},{color:`teal`,label:`Large entire homes`}]},marks:[]}),w=[],T=({text:e,at:t,role:n=`tick`,align:r=`center`,valign:i=`middle`,offset:a=[0,0]})=>{let o=document.createElement(`div`);o.className=`ck-text ck-${n} is-align-${r} is-valign-${i}`,o.textContent=e,C.stepEl.appendChild(o),w.push({el:o,at:t,offset:a})};for(let e of f)T({text:`$${e.toLocaleString(`en-AU`)}`,at:[j_(e),D_,7.8],role:`tick`,align:`center`,valign:`top`,offset:[0,4]});T({text:`Nightly price (log scale)`,at:[0,-10.2,8.6],role:`axis-title`,align:`center`,valign:`top`,offset:[0,10]});for(let e of p)T({text:e===6?`6+`:String(e),at:[-14.3,M_(e),6.5],role:`tick`,align:`right`,valign:`middle`,offset:[-6,0]});T({text:`Bedrooms`,at:[T_,10.600000000000001,6.5],role:`axis-title`,align:`center`,valign:`bottom`}),T({text:`Rooms (0)`,at:[17.8,D_,k_],role:`tick`,align:`left`,valign:`middle`,offset:[14,-4]}),T({text:`Entire home (1)`,at:[16.2,D_,A_],role:`tick`,align:`left`,valign:`middle`,offset:[12,0]});let E=[{a:[g,h(0)],b:[_,h(0)],kind:`baseline`},{a:[g,h(0)],b:[g,h(70)],kind:`axis`},{a:[-27,-9.8],b:[_,-9.8],kind:`gridline`,cls:`b2-table-rule`},{a:[-27,-12.9],b:[_,-12.9],kind:`gridline`,cls:`b2-table-rule`}],D=[],O=[{text:`Market share (%)`,at:[g,h(70)+1.5],role:`axis-title`,align:`left`,valign:`bottom`},{text:`Median price`,at:[-26.8,-11.35],role:`axis-title`,align:`left`,valign:`middle`},{text:`Median revenue`,at:[-26.8,-14.45],role:`axis-title`,align:`left`,valign:`middle`}];for(let e of[0,20,40,60]){let t=h(e);e>0&&E.push({a:[g,t],b:[_,t],kind:`gridline`}),D.push({at:[g,t],dx:-6,dy:0}),O.push({text:`${e}%`,at:[g,t],offset:[-10,0],role:`tick`,align:`right`,valign:`middle`})}for(let e=0;e<N_.length;e++){let t=N_[e],n=m(e),r=n-y*.5-v*.5,i=n+y*.5+v*.5;O.push({text:t.label,at:[n,h(0)],offset:[0,12],role:`category`,align:`center`,valign:`top`,categoryFor:t.label},{text:t.listText,at:[r,h(t.listShare)],offset:[0,-7],role:`value`,align:`center`,valign:`bottom`,cls:`is-slate`},{text:t.revText,at:[i,h(t.revShare)],offset:[0,-7],role:`value`,align:`center`,valign:`bottom`,cls:`is-amber`},{text:t.medPrice,at:[n,-11.35],role:`value`,align:`center`,valign:`middle`},{text:t.medRev,at:[n,-14.45],role:`value`,align:`center`,valign:`middle`,cls:e===2?`is-amber`:``})}this.chart.defineStep(1,{kind:`grouped-bar`,lines:E,ticks:D,labels:O,legend:{at:[_,14.5],align:`right`,valign:`middle`,items:[{color:`slate`,label:`Share of listings`},{color:`amber`,label:`Share of revenue`}]},marks:x}),this.chart.defineStep(2,{kind:`map`,lines:[],labels:[],legend:{cls:`b2-legend-db`,items:[{color:`amber`,label:`Inner hotspot`},{color:`teal`,label:`Yarra Ranges`},{color:`red`,label:`Wyndham & Brimbank`},{color:`violet`,label:`Other hotspots`},{color:`slate`,label:`Isolated`}]},marks:[]});let k=this.chart.defineStep(3,{kind:`map`,lines:[],labels:[],legend:{cls:`b2-legend-bl`,items:[{color:`amber`,label:`Inner councils (4) · $19,059`},{color:`slate`,label:`Middle suburbs (10) · $8,694`},{color:`teal`,label:`Outer / destination (11) · $14,760`},{color:`red`,label:`Outer-west (5) · $4,517`}]},marks:[]}),A=n.councils.map(e=>{let t=R_(`path`,{class:`b2-ward-poly is-g${I_[e.name]||2}`});return k.svg.appendChild(t),{path:t,rings:e.rings}}),j=new Z,M=``,N=()=>{if(!t.container||t.container!==S)return;let e=t.width,n=t.height;if(!(e<10||n<10)){if(C.opacity>.005)for(let r of w){j.set(r.at[0],r.at[1],r.at[2]).project(t.camera);let i=(j.x*.5+.5)*e+r.offset[0],a=(-j.y*.5+.5)*n+r.offset[1];r.el.style.transform=`translate3d(${i.toFixed(1)}px, ${a.toFixed(1)}px, 0)`}if(k.opacity>.005){let r=t.camera.position,i=`${e}x${n}|${r.x.toFixed(2)},${r.y.toFixed(2)},${r.z.toFixed(2)}`;if(i!==M){M=i,k.svg.setAttribute(`viewBox`,`0 0 ${e} ${n}`);for(let r of A){let i=``;for(let a of r.rings){let r=a.length/2;for(let o=0;o<r;o++){j.set(a[o*2],0,-a[o*2+1]).project(t.camera);let r=(j.x*.5+.5)*e,s=(-j.y*.5+.5)*n;i+=`${o===0?`M`:`L`}${r.toFixed(1)},${s.toFixed(1)}`}i+=`Z`}r.path.setAttribute(`d`,i)}}}}};t.onFrame(N),t.onResize(()=>{M=``,N()}),this.pinGroups={s1:[],s2:[],s3:[],s4:[]};let P=document.createElement(`div`);P.className=`b2-hud pos-tr is-amber`,P.style.opacity=`0`,P.innerHTML=`<span class="b2-pin-title">k = 3 silhouette 0.553</span><span class="b2-pin-sub">7-input k = 5: 0.229 (max 0.311)</span>`,e.overlays.appendChild(P),this.pinGroups.s1.push({el:P}),this.pinGroups.s2.push(r.add(L_(`135 two-bedroom homes`,`Assigned to Large homes`,`is-slate is-right`),[27,h(56),0])),this.pinGroups.s3.push(r.addFlag(L_(`Inner hotspot · 77.6%`,`12,001 listings`,`is-amber is-right`),[1.3,0,.96],{height:0,offset:[-16,-80]}),r.addFlag(L_(`Yarra Ranges hotspots`,`$25,647–$41,472 median`,`is-teal`),[48.97,0,-17.49],{height:0,offset:[-26,108],cls:`cl-teal`,below:!0}),r.addFlag(L_(`Wyndham & Brimbank`,`$2,751–$4,932 median`,`is-red is-left`),[-18.98,0,9.41],{height:0,offset:[-22,68],cls:`cl-red`,below:!0}));let F=document.createElement(`div`);F.className=`b2-hud pos-tr is-amber`,F.style.opacity=`0`,F.innerHTML=`<span class="b2-pin-title">Ward clustering · 30 councils</span><span class="b2-pin-sub">4 groups · silhouette 0.239</span>`,e.overlays.appendChild(F),this.pinGroups.s4.push({el:F}),this._hideAll()},_setPinOpacity(e,t){let n=t<.01?0:Math.min(1,t);for(let t of e)t.setOpacity?t.setOpacity(n):t.el.style.opacity=String(n)},_hideAll(){this.chart.hideAll(),this.spaceLines.visibility=0;for(let e of Object.values(this.pinGroups))this._setPinOpacity(e,0)},enter(){},leave(){this._hideAll()},update(e,t){let{rig:n,field:r,lines:i}=t,a=qm(Ym(e,.24,.36)),o=qm(Ym(e,.54,.63)),s=qm(Ym(e,.76,.86));e<.54?a<=.001?Zm(n,y_):a>=.999?Zm(n,b_):Xm(n,y_,b_,a,Jm(Ym(e,.24,.36))):e<.76?o<=.001?Zm(n,b_):o>=.999?Zm(n,x_):Xm(n,b_,x_,o,Jm(Ym(e,.54,.63))):s<=.001?Zm(n,x_):s>=.999?Zm(n,S_):Xm(n,x_,S_,s,Jm(Ym(e,.76,.86))),e<.54?a<=.001?r.showLayout(`b2_space`):a>=.999?r.showLayout(`b2_bars`):r.morph(`b2_space`,`b2_bars`,a,{stagger:.36,lift:2,liftZ:2.4}):e<.76?o<=.001?r.showLayout(`b2_bars`):o>=.999?r.showLayout(`b2_dbscan`):r.morph(`b2_bars`,`b2_dbscan`,o,{stagger:.38,lift:2.6}):s<=.001?r.showLayout(`b2_dbscan`):s>=.999?r.showLayout(`b2_ward`):r.morph(`b2_dbscan`,`b2_ward`,s,{stagger:.34,lift:1.5}),r.setShape(0,0),r.setDrift(0),r.highlight(null);let c=ah(e,{exit:[.21,.28]}),l=ah(e,{enter:[.33,.39],exit:[.51,.57]}),u=ah(e,{enter:[.6,.65],exit:[.74,.8]}),d=ah(e,{enter:[.83,.88]});i.visibility=u,this.spaceLines.visibility=c,this.chart.setVisibilities({0:c,1:l,2:u,3:d}),this._setPinOpacity(this.pinGroups.s1,c),this._setPinOpacity(this.pinGroups.s2,l),this._setPinOpacity(this.pinGroups.s3,u),this._setPinOpacity(this.pinGroups.s4,d)}},B_=`http://www.w3.org/2000/svg`,V_=ih({distance:60}),H_=[{x0:-26.6,x1:-15.6,cx:-21.1,title:`1. Labelled set`,line1:`801 train`,line2:`99 human test`,cls:``},{x0:-12.6,x1:-1.6,cx:-7.1,title:`2. RoBERTa-large`,line1:`355M params`,line2:`6 flags + tone`,cls:`is-focus`},{x0:1.4,x1:12.4,cx:6.9,title:`3. Full corpus`,line1:`571,522 English`,line2:`reviews scored`,cls:``},{x0:15.4,x1:26.4,cx:20.9,title:`4. Listings (10+)`,line1:`9,891 listings`,line2:`13.0% flagged`,line2Cls:`is-red`,cls:`is-flag`}],U_=-4.6,W_=7,G_=-4,K_=-.5,q_=[{key:`clean`,label:`Cleanliness`,tf:.96,base:.77,excluded:!1},{key:`noise`,label:`Noise`,tf:.89,base:.33,excluded:!1},{key:`comfort`,label:`Comfort`,tf:.83,base:.76,excluded:!1},{key:`accuracy`,label:`Accuracy`,tf:.8,base:.67,excluded:!1},{key:`checkin`,label:`Check-in`,tf:.57,base:.54,excluded:!1},{key:`value`,label:`Value (excl.)`,tf:.29,base:.13,excluded:!0}],J_=[{label:`Cleanliness`,drop:.114,fmt:`−0.114★`,colorKey:`red`,cls:`is-red`},{label:`Comfort`,drop:.083,fmt:`−0.083★`,colorKey:`amber`,cls:`is-amber`},{label:`Check-in`,drop:.07,fmt:`−0.070★`,colorKey:`violet`,cls:`is-violet`}],Y_=[{key:`h1`,label:`1 listing`,clean:1.57,checkin:1.17,cleanLbl:`1.6%`,checkLbl:`1.2%`},{key:`h2`,label:`2–5`,clean:2.55,checkin:1.91,cleanLbl:`2.5%`,checkLbl:`1.9%`},{key:`h3`,label:`6–20`,clean:3.9,checkin:3.12,cleanLbl:`3.9%`,checkLbl:`3.1%`},{key:`h4`,label:`21+`,clean:4.45,checkin:4.73,cleanLbl:`4.5%`,checkLbl:`4.7%`}],X_=[{key:`c0`,label:`0–5%`,nights:154.38,lbl:`154`},{key:`c1`,label:`5–10%`,nights:160.97,lbl:`161`},{key:`c2`,label:`10–20%`,nights:154.16,lbl:`154`},{key:`c3`,label:`20–30%`,nights:122.25,lbl:`122`},{key:`c4`,label:`>30%`,nights:95.91,lbl:`96`}];function Z_(e,t=``,n=``){let r=document.createElement(`div`);return r.className=`b3-pin${n?` ${n}`:``}`,r.style.opacity=`0`,r.innerHTML=`<div class="b3-pin-in"><span class="b3-pin-title">${e}</span>`+(t?`<span class="b3-pin-sub">${t}</span>`:``)+`</div>`,r}function Q_(e,t={}){let n=document.createElementNS(B_,e);for(let[e,r]of Object.entries(t))n.setAttribute(e,String(r));return n}var $_={id:`b3-transformer`,figureTitle:`Review complaint detection with RoBERTa-large`,heightVh:260,captions:[{at:0,text:`Fine-tuned RoBERTa-large (355M parameters, trained on 801 reviews and tested on 99 human-labelled reviews) scored 571,522 English reviews.`},{at:.28,text:`The transformer beats TF-IDF on every flag (cleanliness F1 0.96 vs 0.77; tone 90.9% vs 85.9%); value (F1 0.29) is excluded from analysis.`},{at:.54,text:`Cleanliness costs the most stars (−0.114 per 10-point rise); cleanliness complaints rise from 1.6% for single-listing hosts to 4.5% for 21+ listing hosts, explaining 67% of the cleanliness gap.`},{at:.76,text:`Among listings with 30+ reviews, estimated bookings hold at 154–161 nights below 20% complaints, then drop to 122 (20–30%) and 96 above 30% at unchanged prices ($259–$276).`}],mount(e){let{stage:t,data:n,pins:r,registerLayout:i}=e,a=rh(),{drop_stage:o}=n.cols,s=[];for(let e=0;e<n.count;e++)o[e]===0&&s.push(e);i(`b3_pipeline`,e=>{let t=uh(e.count),n=.65,r=H_[0].x1-H_[0].x0-n*2,i=H_[3].x1-H_[3].x0-n*2,o=[{rect:{x0:H_[0].x0+n,x1:H_[0].x0+n+r*.86,y0:G_,y1:K_},color:a.slate,alpha:.78,weight:.86,orderBase:0},{rect:{x0:H_[0].x0+n+r*.89,x1:H_[0].x1-n,y0:G_,y1:K_},color:a.amber,alpha:.94,weight:.14,orderBase:.12},{rect:{x0:H_[1].x0+n,x1:H_[1].x1-n,y0:G_,y1:K_},color:a.amber,alpha:.88,weight:1,orderBase:.25},{rect:{x0:H_[2].x0+n,x1:H_[2].x1-n,y0:G_,y1:K_},color:a.teal,alpha:.86,weight:1,orderBase:.5},{rect:{x0:H_[3].x0+n,x1:H_[3].x0+n+i*.84,y0:G_,y1:K_},color:a.slate,alpha:.74,weight:.84,orderBase:.74},{rect:{x0:H_[3].x0+n+i*.87,x1:H_[3].x1-n,y0:G_,y1:K_},color:a.red,alpha:.94,weight:.16,orderBase:.88}],c=dh(s,o.map(e=>e.weight),{minPerItem:220});for(let e=0;e<o.length;e++){let n=o[e];fh(n.rect,c[e],t,{color:n.color,alpha:n.alpha,size:.92,orderBase:n.orderBase,orderSpan:.14,orientation:`horizontal`})}return t});let c=ch(q_.map(e=>e.key),-21.5,26.5,{paddingInner:.22,paddingOuter:.08}),l=oh(0,1,-10.5,11.2),u=-22.2,d=2.65,f=.55,p=[],m=[],h=[];for(let e=0;e<q_.length;e++){let t=q_[e],n=c(e),r={x0:n-f*.5-d,x1:n-f*.5,y0:l(0),y1:l(t.tf)},i={x0:n+f*.5,x1:n+f*.5+d,y0:l(0),y1:l(t.base)};t.excluded&&h.push(r,i),p.push({rect:r,color:t.excluded?a.slateDim:a.amber,alpha:t.excluded?.34:.94,weight:t.tf,orderBase:e*.12},{rect:i,color:t.excluded?a.slateDim:a.slate,alpha:t.excluded?.26:.8,weight:t.base,orderBase:e*.12+.05}),m.push({label:`${t.label} (RoBERTa)`,categoryLabel:t.label,group:`f1`,orientation:`vertical`,value:t.tf,baseValue:0,rect:r},{label:`${t.label} (TF-IDF)`,categoryLabel:t.label,group:`f1`,orientation:`vertical`,value:t.base,baseValue:0,rect:i})}i(`b3_f1`,e=>{let t=uh(e.count),n=dh(s,p.map(e=>e.weight),{minPerItem:180});for(let e=0;e<p.length;e++){let r=p[e];fh(r.rect,n[e],t,{color:r.color,alpha:r.alpha,size:.94,orderBase:r.orderBase,orderSpan:.16,orientation:`vertical`})}return t});let g=oh(-.15,0,-25.5,-4.5),_=[5.4,-.4,-6.2],v=2.4,y=3.2,b=27.2,x=ch(Y_.map(e=>e.key),5.2,26.8,{paddingInner:.26,paddingOuter:.08}),S=oh(0,5.5,-9.4,8.2),C=1.75,w=.36,T=[],E=[];for(let e=0;e<J_.length;e++){let t=J_[e],n=_[e],r={x0:g(-t.drop),x1:g(0),y0:n-v*.5,y1:n+v*.5};T.push({rect:r,color:a[t.colorKey],alpha:.92,weight:t.drop*42,orientation:`horizontal`,orderBase:e*.12}),E.push({label:t.label,categoryLabel:t.label,group:`star-drop`,orientation:`horizontal`,value:t.drop,baseValue:-t.drop,rect:r})}for(let e=0;e<Y_.length;e++){let t=Y_[e],n=x(e),r={x0:n-w*.5-C,x1:n-w*.5,y0:S(0),y1:S(t.clean)},i={x0:n+w*.5,x1:n+w*.5+C,y0:S(0),y1:S(t.checkin)};T.push({rect:r,color:a.red,alpha:.92,weight:t.clean,orientation:`vertical`,orderBase:.4+e*.1},{rect:i,color:a.violet,alpha:.88,weight:t.checkin,orientation:`vertical`,orderBase:.45+e*.1}),E.push({label:`${t.label} (Cleanliness)`,categoryLabel:t.label,group:`host-rate`,orientation:`vertical`,value:t.clean,baseValue:0,rect:r},{label:`${t.label} (Check-in)`,categoryLabel:t.label,group:`host-rate`,orientation:`vertical`,value:t.checkin,baseValue:0,rect:i})}i(`b3_host`,e=>{let t=uh(e.count),n=dh(s,T.map(e=>e.weight),{minPerItem:240});for(let e=0;e<T.length;e++){let r=T[e];fh(r.rect,n[e],t,{color:r.color,alpha:r.alpha,size:.94,orderBase:r.orderBase,orderSpan:.16,orientation:r.orientation})}return t});let D=ch(X_.map(e=>e.key),-20,25.5,{paddingInner:.34,paddingOuter:.14}),O=oh(0,180,-10.5,11.4),k=-21.2,A=26.2,j=(D.end(2)+D.start(3))*.5,M=[],N=[];for(let e=0;e<X_.length;e++){let t=X_[e],n={x0:D.start(e),x1:D.end(e),y0:O(0),y1:O(t.nights)},r=e>=3;M.push({rect:n,color:r?a.red:a.amber,alpha:r?.94:.9,weight:t.nights,orderBase:e*.14}),N.push({label:t.label,categoryLabel:t.label,group:`cliff-nights`,orientation:`vertical`,value:t.nights,baseValue:0,rect:n})}i(`b3_cliff`,e=>{let t=uh(e.count),n=dh(s,M.map(e=>e.weight),{minPerItem:600});for(let e=0;e<M.length;e++){let r=M[e];fh(r.rect,n[e],t,{color:r.color,alpha:r.alpha,size:.96,orderBase:r.orderBase,orderSpan:.18,orientation:`vertical`})}return t}),this.chart=_h(e,this.id);let P=document.querySelector(`[data-viewport="${this.id}"]`),F=[],I=[[H_[0].x1+.3,H_[1].x0-.5],[H_[1].x1+.3,H_[2].x0-.5],[H_[2].x1+.3,H_[3].x0-.5]];for(let[e,t]of I)F.push({a:[e,1.2],b:[t,1.2],kind:`axis`});let L=[{text:`Review complaint-detection pipeline`,at:[-26.6,12.2],role:`panel-title`,align:`left`,valign:`middle`},{text:`Self-attention separates "clean" from "not clean" · 8.1% non-English reviews excluded`,at:[0,-9.8],role:`note`,align:`center`,valign:`middle`}];for(let e of H_)L.push({text:e.title,at:[e.cx,5.2],role:`panel-title`,align:`center`,valign:`middle`},{text:e.line1,at:[e.cx,2.7],role:`value`,align:`center`,valign:`middle`},{text:e.line2,at:[e.cx,.5],role:`tick`,align:`center`,valign:`middle`,cls:e.line2Cls||``});let R=this.chart.defineStep(0,{kind:`diagram`,lines:F,labels:L,legend:{at:[26.4,12.2],align:`right`,valign:`middle`,items:[{color:`amber`,label:`Model / test`},{color:`teal`,label:`Scored corpus`},{color:`red`,label:`13.0% flagged`}]},marks:[]}),z=H_.map(e=>{let t=Q_(`rect`,{class:`b3-pipe-box${e.cls?` ${e.cls}`:``}`});return R.svg.prepend(t),t}),B=I.map(()=>{let e=Q_(`polygon`,{class:`b3-pipe-arrow-head`});return R.svg.appendChild(e),e}),ee=[{a:[u,l(0)],b:[27,l(0)],kind:`baseline`},{a:[u,l(0)],b:[u,l(1)],kind:`axis`}],V=[],te=[{text:`Test F1 score (99 human-labelled reviews)`,at:[u,l(1)+1.5],role:`axis-title`,align:`left`,valign:`bottom`}];for(let e of[0,.2,.4,.6,.8,1]){let t=l(e);e>0&&ee.push({a:[u,t],b:[27,t],kind:`gridline`}),V.push({at:[u,t],dx:-6,dy:0}),te.push({text:e.toFixed(1),at:[u,t],offset:[-10,0],role:`tick`,align:`right`,valign:`middle`})}for(let e=0;e<q_.length;e++){let t=q_[e],n=c(e),r=n-f*.5-d*.5,i=n+f*.5+d*.5;te.push({text:t.label,at:[n,l(0)],offset:[0,11],role:`category`,align:`center`,valign:`top`,cls:t.excluded?`is-dim`:``,categoryFor:t.label},{text:t.tf.toFixed(2),at:[r,l(t.tf)],offset:[0,-7],role:`value`,align:`center`,valign:`bottom`,cls:t.excluded?`is-dim`:`is-amber`},{text:t.base.toFixed(2),at:[i,l(t.base)],offset:[0,-7],role:`value`,align:`center`,valign:`bottom`,cls:t.excluded?`is-dim`:`is-slate`})}let H=this.chart.defineStep(1,{kind:`grouped-bar`,lines:ee,ticks:V,labels:te,legend:{at:[27,14.5],align:`right`,valign:`middle`,items:[{color:`amber`,label:`RoBERTa-large`},{color:`slate`,label:`TF-IDF baseline`}]},marks:m}),U=Q_(`defs`),ne=Q_(`pattern`,{id:`b3-hatch-pat`,width:8,height:8,patternUnits:`userSpaceOnUse`,patternTransform:`rotate(45)`});ne.appendChild(Q_(`line`,{x1:0,y1:0,x2:0,y2:8,class:`b3-hatch-stroke`})),U.appendChild(ne),H.svg.prepend(U);let re=h.map(()=>{let e=Q_(`rect`,{class:`b3-excluded-hatch`,fill:`url(#b3-hatch-pat)`});return H.svg.appendChild(e),e}),W=-9.4,ie=8.2,ae=[{a:[g(-.15),W],b:[g(0),W],kind:`baseline`},{a:[g(0),W],b:[g(0),ie],kind:`axis`},{a:[y,S(0)],b:[b,S(0)],kind:`baseline`},{a:[y,S(0)],b:[y,S(5.5)],kind:`axis`}],oe=[],G=[{text:`Star drop per +10 pp complaints`,at:[-15,11.2],role:`panel-title`,align:`center`,valign:`middle`},{text:`Complaint rate by host scale`,at:[15.8,11.2],role:`panel-title`,align:`center`,valign:`middle`},{text:`Rating change (stars)`,at:[-15,-13.3],role:`axis-title`,align:`center`,valign:`top`},{text:`Host portfolio size (listings)`,at:[15.8,S(0)-3.9],role:`axis-title`,align:`center`,valign:`top`},{text:`% of reviews`,at:[y,S(5.5)+.7],role:`axis-title`,align:`left`,valign:`bottom`}];for(let e of[-.15,-.1,-.05,0]){let t=g(e);e<0&&ae.push({a:[t,W],b:[t,ie],kind:`gridline`}),oe.push({at:[t,W],dx:0,dy:6}),G.push({text:e===0?`0`:`−${Math.abs(e).toFixed(2)}`,at:[t,W],offset:[0,9],role:`tick`,align:`center`,valign:`top`})}for(let e=0;e<J_.length;e++){let t=J_[e],n=_[e];G.push({text:t.label,at:[g(0)-.5,n+v*.5+.55],role:`category`,align:`right`,valign:`bottom`,categoryFor:t.label},{text:t.fmt,at:[g(-t.drop),n],offset:[-8,0],role:`value`,align:`right`,valign:`middle`,cls:t.cls})}for(let e of[0,1,2,3,4,5]){let t=S(e);e>0&&ae.push({a:[y,t],b:[b,t],kind:`gridline`}),oe.push({at:[y,t],dx:-6,dy:0}),G.push({text:`${e}%`,at:[y,t],offset:[-9,0],role:`tick`,align:`right`,valign:`middle`})}for(let e=0;e<Y_.length;e++){let t=Y_[e],n=x(e),r=n-w*.5-C*.5,i=n+w*.5+C*.5;G.push({text:t.label,at:[n,S(0)],offset:[0,9],role:`category`,align:`center`,valign:`top`,categoryFor:t.label}),e===0?G.push({text:t.cleanLbl,at:[n-w*.5,S(t.clean)],offset:[-2,-7],role:`value`,align:`right`,valign:`bottom`,cls:`is-red`},{text:t.checkLbl,at:[n+w*.5,S(t.checkin)],offset:[2,-7],role:`value`,align:`left`,valign:`bottom`,cls:`is-violet`}):e===3&&G.push({text:t.cleanLbl,at:[r,S(t.clean)],offset:[-2,-7],role:`value`,align:`right`,valign:`bottom`,cls:`is-red`},{text:t.checkLbl,at:[i,S(t.checkin)],offset:[2,-7],role:`value`,align:`left`,valign:`bottom`,cls:`is-violet`})}this.chart.defineStep(2,{kind:`grouped-bar`,lines:ae,ticks:oe,labels:G,legend:{at:[b,15.2],align:`right`,valign:`middle`,items:[{color:`red`,label:`Cleanliness`},{color:`violet`,label:`Check-in / host`}]},marks:E});let se=[{a:[k,O(0)],b:[A,O(0)],kind:`baseline`},{a:[k,O(0)],b:[k,O(180)],kind:`axis`},{a:[j,O(0)],b:[j,O(176)],kind:`refline`,cls:`is-red`,dashed:!0}],ce=[],le=[{text:`Estimated nights / yr (30+ reviews)`,at:[k,O(180)+1.1],role:`axis-title`,align:`left`,valign:`bottom`},{text:`Share of reviews with any complaint`,at:[2.5,O(0)-4.4],role:`axis-title`,align:`center`,valign:`top`},{text:`20% cliff`,at:[j,O(178)],offset:[0,-6],role:`value`,align:`center`,valign:`bottom`,cls:`is-red`}];for(let e of[0,40,80,120,160]){let t=O(e);e>0&&se.push({a:[k,t],b:[A,t],kind:`gridline`}),ce.push({at:[k,t],dx:-6,dy:0}),le.push({text:String(e),at:[k,t],offset:[-10,0],role:`tick`,align:`right`,valign:`middle`})}for(let e=0;e<X_.length;e++){let t=X_[e],n=D(e);le.push({text:t.label,at:[n,O(0)],offset:[0,11],role:`category`,align:`center`,valign:`top`,categoryFor:t.label},{text:t.lbl,at:[n,O(t.nights)],offset:[0,-8],role:`value`,align:`center`,valign:`bottom`,cls:e>=3?`is-red`:`is-amber`})}this.chart.defineStep(3,{kind:`bar`,lines:se,ticks:ce,labels:le,legend:{at:[A,15.2],align:`right`,valign:`middle`,items:[{color:`amber`,label:`Below 20% complaints`},{color:`red`,label:`20%+ complaints`}]},marks:N});let ue=new Z,de=(e,n,r,i)=>(ue.set(e,n,0).project(t.camera),[(ue.x*.5+.5)*r,(-ue.y*.5+.5)*i]),fe=()=>{if(!t.container||t.container!==P)return;let e=t.width,n=t.height;if(!(e<10||n<10)){if(R.opacity>.005){for(let t=0;t<H_.length;t++){let r=H_[t],[i,a]=de(r.x0,U_,e,n),[o,s]=de(r.x1,W_,e,n);z[t].setAttribute(`x`,i.toFixed(1)),z[t].setAttribute(`y`,s.toFixed(1)),z[t].setAttribute(`width`,Math.max(1,o-i).toFixed(1)),z[t].setAttribute(`height`,Math.max(1,a-s).toFixed(1))}for(let t=0;t<I.length;t++){let[r,i]=de(I[t][1]+.2,1.2,e,n);B[t].setAttribute(`points`,`${r.toFixed(1)},${i.toFixed(1)} ${(r-8).toFixed(1)},${(i-4.5).toFixed(1)} ${(r-8).toFixed(1)},${(i+4.5).toFixed(1)}`)}}if(H.opacity>.005)for(let t=0;t<h.length;t++){let r=h[t],[i,a]=de(r.x0,r.y0,e,n),[o,s]=de(r.x1,r.y1,e,n);re[t].setAttribute(`x`,i.toFixed(1)),re[t].setAttribute(`y`,s.toFixed(1)),re[t].setAttribute(`width`,Math.max(1,o-i).toFixed(1)),re[t].setAttribute(`height`,Math.max(1,a-s).toFixed(1))}}};t.onFrame(fe),t.onResize(fe),this.pinGroups={s1:[],s2:[],s3:[],s4:[]},this.pinGroups.s2.push(r.add(Z_(`Tone accuracy: 90.9%`,`vs 85.9% TF-IDF`,`is-amber is-right`),[27,l(.84),0])),this.pinGroups.s3.push(r.add(Z_(`Explains 67% of gap`,`Large-host cleanliness deficit`,`is-amber is-left`),[-25.5,15.5,0])),this.pinGroups.s4.push(r.add(Z_(`Median price stays flat`,`$259–$276 across all bands`,`is-teal is-right`),[A,O(158),0])),this._hideAll()},_setPinOpacity(e,t){let n=t<.01?0:Math.min(1,t);for(let t of e)t.setOpacity?t.setOpacity(n):t.el.style.opacity=String(n)},_hideAll(){this.chart.hideAll();for(let e of Object.values(this.pinGroups))this._setPinOpacity(e,0)},enter(){},leave(){this._hideAll()},update(e,t){let{rig:n,field:r,lines:i}=t;Zm(n,V_);let a=qm(Ym(e,.22,.32)),o=qm(Ym(e,.47,.57)),s=qm(Ym(e,.73,.83));e<.47?a<=.001?r.showLayout(`b3_pipeline`):a>=.999?r.showLayout(`b3_f1`):r.morph(`b3_pipeline`,`b3_f1`,a,{stagger:.35,lift:1.6,liftZ:2.2}):e<.73?o<=.001?r.showLayout(`b3_f1`):o>=.999?r.showLayout(`b3_host`):r.morph(`b3_f1`,`b3_host`,o,{stagger:.35,lift:1.6,liftZ:2.2}):s<=.001?r.showLayout(`b3_host`):s>=.999?r.showLayout(`b3_cliff`):r.morph(`b3_host`,`b3_cliff`,s,{stagger:.35,lift:1.6,liftZ:2.4}),r.setShape(0,0),r.setDrift(0),r.highlight(null),i.visibility=0;let c=ah(e,{exit:[.19,.26]}),l=ah(e,{enter:[.29,.35],exit:[.44,.5]}),u=ah(e,{enter:[.54,.6],exit:[.7,.76]}),d=ah(e,{enter:[.8,.86]});this.chart.setVisibilities({0:c,1:l,2:u,3:d}),this._setPinOpacity(this.pinGroups.s1,c),this._setPinOpacity(this.pinGroups.s2,l),this._setPinOpacity(this.pinGroups.s3,u),this._setPinOpacity(this.pinGroups.s4,d)}},ev={x:20,y:0,z:-2,distance:132,azimuth:0,polar:4,fit:.72,flat:1},tv=ih({distance:60}),nv=[{label:`Albert Park GP`,value:16.6,fmt:`+16.6 pp`,colorKey:`teal`},{label:`Melb. Park AO`,value:11.7,fmt:`+11.7 pp`,colorKey:`teal`},{label:`MCG Grand Final`,value:8.7,fmt:`+8.7 pp`,colorKey:`slate`},{label:`Flemington Cup`,value:-4.2,fmt:`−4.2 pp`,colorKey:`red`}],rv=[{label:`<5%`,value:154.4,fmt:`154`,high:!1},{label:`5–10`,value:161,fmt:`161`,high:!1},{label:`10–20`,value:154.2,fmt:`154`,high:!1},{label:`20–30`,value:122.2,fmt:`122`,high:!0},{label:`>30%`,value:95.9,fmt:`96`,high:!0}];function iv(e,t,n,r,i){let a=[],o=new Set(t);for(let t of e)if(o.has(t.name))for(let e of t.rings){let t=e.length/2;for(let o=0;o<t-1;o++)a.push({a:[e[o*2],n,-e[o*2+1]],b:[e[(o+1)*2],n,-e[(o+1)*2+1]],color:r,alpha:i})}return a}function av(e,t,n=.04){let r=e.find(e=>e.name===t);return!r||!r.centroid?[0,n,0]:[r.centroid[0],n,-r.centroid[1]]}function ov(e){if(!e.length)return 0;let t=[...e].sort((e,t)=>e-t),n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])*.5}function sv(e,t,n,r=.35){let i=new Map,a=n=>Math.floor(e[n]/r)*8192+Math.floor(t[n]/r);for(let t=0;t<e.length;t++)n[t]===0&&i.set(a(t),(i.get(a(t))||0)+1);return{counts:i,keyOf:a}}function cv(e,t=``,n=``){let r=document.createElement(`div`);return r.className=`c1-pin${n?` ${n}`:``}`,r.style.opacity=`0`,r.innerHTML=`<div class="c1-pin-in"><span class="c1-pin-title">${e}</span>`+(t?`<span class="c1-pin-detail">${t}</span>`:``)+`</div>`,r}var lv={id:`c1-summary`,figureTitle:`Three-pillar synthesis across Melbourne`,heightVh:230,afterParagraph:0,captions:[{at:0,text:`First: location mostly determines the product — apartments run at scale in the centre, the Rooms segment (20% of listings), and whole houses and rural stays in the outer east.`},{at:.34,text:`Second: demand follows host standards, booking terms and guest experience more than price, with complaints costing nights without showing in price.`},{at:.68,text:`Third: major visitor events lift near-venue bookings, while short-term letting often earns less than a long-term lease outside Superhosts and destination councils.`}],mount(e){let{stage:t,data:n,pins:r,registerLayout:i,registerMapLike:a}=e,o=rh(),{drop_stage:s,superhost:c,popular:l,min_nights:u,rent_ratio:d,council:f}=n.cols,p=[],m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0,S=[],C=[],w=[],T=[],E=[],D=n.meta.councils.indexOf(`Yarra Ranges`),O=n.meta.councils.indexOf(`Nillumbik`),k=0;for(let e=0;e<n.count;e++){if(s[e]!==0)continue;p.push(e),c[e]===1?(m++,l[e]&&h++):(g++,l[e]&&_++),u[e]===1?(v++,l[e]&&y++):u[e]===3&&(b++,l[e]&&x++);let t=d[e];Number.isFinite(t)&&(S.push(t),t<1&&k++,c[e]===1?C.push(t):w.push(t),f[e]===D&&T.push(t),f[e]===O&&E.push(t))}let A=h/Math.max(1,m)*100,j=_/Math.max(1,g)*100,M=y/Math.max(1,v)*100,N=x/Math.max(1,b)*100,P=k/Math.max(1,S.length)*100,F=[{label:`Yarra Ranges`,value:ov(T),color:o.teal,cls:`is-teal`},{label:`Nillumbik`,value:ov(E),color:o.teal,cls:`is-teal`},{label:`Superhosts`,value:ov(C),color:o.amber,cls:`is-amber`},{label:`All homes`,value:ov(S),color:o.red,cls:`is-red`},{label:`Other hosts`,value:ov(w),color:o.slate,cls:`is-slate`}];a(`c1_map_km3`),i(`c1_map_km3`,e=>{let t=uh(e.count),{x:n,y:r,drop_stage:i,km3:a,rand:s}=e.cols,{counts:c,keyOf:l}=sv(n,r,i,.35);for(let u=0;u<e.count;u++){if(i[u]!==0)continue;let e=Math.max(1,(c.get(l(u))||1)/10),d=a[u],f,p,m,h;d===1?(f=o.amber,p=.84/e**.48,m=1.05/e**.16,h=.15+s[u]*.15):d===2?(f=o.teal,p=.9/e**.42,m=1.18/e**.15,h=.45+s[u]*.15):(f=o.slate,p=.72/e**.45,m=.94/e**.16,h=.75+s[u]*.15),t.positions[u*3]=n[u],t.positions[u*3+1]=0,t.positions[u*3+2]=-r[u],t.colors[u*3]=f[0],t.colors[u*3+1]=f[1],t.colors[u*3+2]=f[2],t.alphas[u]=p,t.sizes[u]=m,t.order[u]=h}return t}),this.mapOutlines=new dg,this.mapOutlines.set([...iv(n.councils,[`Melbourne`],.03,o.amber,.72),...iv(n.councils,[`Yarra Ranges`],.03,o.teal,.68)]),t.add(this.mapOutlines.object3d);let I=-9.8,L=9.8,R=oh(0,20,I,L),z=oh(0,200,I,L),B=-25.2,ee=-.6,V=6.2,te=28.6,H=[],U=[],ne=[{label:`Superhost`,value:A,fmt:`${A.toFixed(1)}%`,x:-21.6,color:o.amber,cls:`is-amber`},{label:`Other`,value:j,fmt:`${j.toFixed(1)}%`,x:-15.4,color:o.slate,cls:`is-slate`},{label:`1-night`,value:M,fmt:`${M.toFixed(1)}%`,x:-8.6,color:o.amber,cls:`is-amber`},{label:`3-night`,value:N,fmt:`${N.toFixed(1)}%`,x:-3.2,color:o.slate,cls:`is-slate`}],re=3.2;for(let e=0;e<ne.length;e++){let t=ne[e],n={x0:t.x-re*.5,x1:t.x+re*.5,y0:R(0),y1:R(t.value)};H.push({rect:n,color:t.color,alpha:t.cls===`is-amber`?.93:.82,weight:Math.max(.4,(n.x1-n.x0)*(n.y1-n.y0)),orderBase:e*.1}),U.push({label:t.label,categoryLabel:t.label,group:`popular-rate`,orientation:`vertical`,value:t.value,baseValue:0,rect:n})}let W=ch(rv.map(e=>e.label),6.7,te,{paddingInner:.28,paddingOuter:.1});for(let e=0;e<rv.length;e++){let t=rv[e],n={x0:W.start(e),x1:W.end(e),y0:z(0),y1:z(t.value)};H.push({rect:n,color:t.high?o.red:o.slate,alpha:t.high?.94:.82,weight:Math.max(.4,(n.x1-n.x0)*(n.y1-n.y0)),orderBase:.42+e*.08}),U.push({label:t.label,categoryLabel:t.label,group:`complaint-nights`,orientation:`vertical`,value:t.value,baseValue:0,rect:n})}i(`c1_standards_bars`,e=>{let t=uh(e.count),n=dh(p,H.map(e=>e.weight),{minPerItem:180});for(let e=0;e<H.length;e++){let r=H[e];fh(r.rect,n[e],t,{color:r.color,alpha:r.alpha,size:.94,orderBase:r.orderBase,orderSpan:.2,orientation:`vertical`})}return t});let ie=oh(-6,20,-16.8,-3.4),ae=[7,2.2,-2.6,-7.4],oe=2.3,G=oh(0,1.5,10.6,28.4),se=[7.6,3.8,0,-3.8,-7.6],ce=2.05,le=[],ue=[];for(let e=0;e<nv.length;e++){let t=nv[e],n=ae[e],r=Math.min(ie(0),ie(t.value)),i=Math.max(ie(0),ie(t.value)),a={x0:r,x1:i,y0:n-oe*.5,y1:n+oe*.5},s=t.colorKey===`teal`?o.teal:t.colorKey===`red`?o.red:o.slate;le.push({rect:a,color:s,alpha:t.colorKey===`slate`?.82:.94,weight:Math.max(.4,(i-r)*oe),orderBase:e*.1}),ue.push({label:t.label,categoryLabel:t.label,group:t.value>=0?`event-pos`:`event-neg`,orientation:`horizontal`,value:Math.abs(t.value),baseValue:0,rect:a})}for(let e=0;e<F.length;e++){let t=F[e],n=se[e],r={x0:G(0),x1:G(t.value),y0:n-ce*.5,y1:n+ce*.5};le.push({rect:r,color:t.color,alpha:t.cls===`is-slate`?.82:.94,weight:Math.max(.4,(r.x1-r.x0)*ce),orderBase:.45+e*.08}),ue.push({label:t.label,categoryLabel:t.label,group:`rent-ratio`,orientation:`horizontal`,value:t.value,baseValue:0,rect:r})}i(`c1_external_bars`,e=>{let t=uh(e.count),n=dh(p,le.map(e=>e.weight),{minPerItem:240});for(let e=0;e<le.length;e++){let r=le[e];fh(r.rect,n[e],t,{color:r.color,alpha:r.alpha,size:.94,orderBase:r.orderBase,orderSpan:.2,orientation:`horizontal`})}return t}),this.chart=_h(e,this.id),this.chart.defineStep(0,{kind:`map`,lines:[],ticks:[],labels:[],legend:{cls:`c1-map-legend`,items:[{color:`amber`,label:`Small entire homes (60%)`},{color:`teal`,label:`Large entire homes (21%)`},{color:`slate`,label:`Rooms (20%)`}]},marks:[]});let de=[{a:[B,I],b:[ee,I],kind:`baseline`},{a:[B,I],b:[B,L],kind:`axis`},{a:[V,I],b:[te,I],kind:`baseline`},{a:[V,I],b:[V,L],kind:`axis`}],fe=[],pe=[{text:`Popular rate (%)`,at:[B,11.100000000000001],role:`axis-title`,align:`left`,valign:`bottom`},{text:`Host badge`,at:[-18.5,14.3],role:`panel-title`,align:`center`,valign:`middle`},{text:`Min. stay`,at:[-5.9,14.3],role:`panel-title`,align:`center`,valign:`middle`},{text:`Est. nights / yr`,at:[V,11.100000000000001],role:`axis-title`,align:`left`,valign:`bottom`},{text:`Complaint share (30+ rev.)`,at:[17.5,14.3],role:`panel-title`,align:`center`,valign:`middle`}];for(let e of[0,5,10,15,20]){let t=R(e);e>0&&de.push({a:[B,t],b:[ee,t],kind:`gridline`}),fe.push({at:[B,t],dx:-6,dy:0}),pe.push({text:`${e}%`,at:[B,t],offset:[-9,0],role:`tick`,align:`right`,valign:`middle`})}for(let e of[0,50,100,150,200]){let t=z(e);e>0&&de.push({a:[V,t],b:[te,t],kind:`gridline`}),fe.push({at:[V,t],dx:-6,dy:0}),pe.push({text:`${e}`,at:[V,t],offset:[-9,0],role:`tick`,align:`right`,valign:`middle`})}for(let e of ne)pe.push({text:e.label,at:[e.x,I],offset:[0,10],role:`category`,align:`center`,valign:`top`,categoryFor:e.label},{text:e.fmt,at:[e.x,R(e.value)],offset:[0,-7],role:`value`,align:`center`,valign:`bottom`,cls:e.cls});for(let e=0;e<rv.length;e++){let t=rv[e],n=W(e);pe.push({text:t.label,at:[n,I],offset:[0,10],role:`category`,align:`center`,valign:`top`,categoryFor:t.label},{text:t.fmt,at:[n,z(t.value)],offset:[0,-7],role:`value`,align:`center`,valign:`bottom`,cls:t.high?`is-red`:`is-slate`})}let me=(W.end(2)+W.start(3))*.5;de.push({a:[me,I],b:[me,L],kind:`refline`,cls:`is-red`,dashed:!0}),pe.push({text:`20% cliff`,at:[me,z(184)],offset:[8,0],role:`value`,align:`left`,valign:`middle`,cls:`is-red`}),this.chart.defineStep(1,{kind:`grouped-bar`,lines:de,ticks:fe,labels:pe,legend:{at:[1.5,-15.3],align:`center`,valign:`middle`,items:[{color:`amber`,label:`Focus (Superhost / 1-night)`},{color:`slate`,label:`Baseline / <20% complaints`},{color:`red`,label:`≥20% complaints`}]},marks:U});let he=9.8,ge=-9.8,_e=[{a:[ie(0),ge],b:[ie(0),he],kind:`baseline`},{a:[ie(-6),ge],b:[ie(20),ge],kind:`axis`},{a:[G(0),ge],b:[G(0),he],kind:`baseline`},{a:[G(0),ge],b:[G(1.5),ge],kind:`axis`},{a:[G(1),ge],b:[G(1),he],kind:`refline`,cls:`is-amber`},{a:[G(1.5),ge],b:[G(1.5),he],kind:`refline`,cls:`is-slate`,dashed:!0}],ve=[],ye=[{text:`Event booking lifts (pp)`,at:[-12,14.3],role:`panel-title`,align:`center`,valign:`middle`},{text:`Airbnb revenue / annual rent`,at:[19.4,14.3],role:`panel-title`,align:`center`,valign:`middle`},{text:`1.0× rent`,at:[G(1),10.5],role:`value`,align:`center`,valign:`bottom`,cls:`is-amber`},{text:`1.5×`,at:[G(1.5),10.5],role:`note`,align:`center`,valign:`bottom`}];for(let e of[-5,0,10,20]){let t=ie(e);e!==0&&_e.push({a:[t,ge],b:[t,he],kind:`gridline`}),ve.push({at:[t,ge],dx:0,dy:6}),ye.push({text:e>0?`+${e}`:e<0?`−${Math.abs(e)}`:`0`,at:[t,ge],offset:[0,10],role:`tick`,align:`center`,valign:`top`})}for(let e=0;e<nv.length;e++){let t=nv[e],n=ae[e];ye.push({text:t.label,at:[-17.4,n],role:`category`,align:`right`,valign:`middle`,categoryFor:t.label}),t.value>=0?ye.push({text:t.fmt,at:[ie(t.value),n],offset:[8,0],role:`value`,align:`left`,valign:`middle`,cls:t.colorKey===`teal`?`is-teal`:`is-slate`}):ye.push({text:t.fmt,at:[ie(0),n],offset:[8,0],role:`value`,align:`left`,valign:`middle`,cls:`is-red`})}for(let e of[0,.5,1,1.5]){let t=G(e);e>0&&e!==1&&e!==1.5&&_e.push({a:[t,ge],b:[t,he],kind:`gridline`}),ve.push({at:[t,ge],dx:0,dy:6}),ye.push({text:`${e.toFixed(1)}×`,at:[t,ge],offset:[0,10],role:`tick`,align:`center`,valign:`top`})}for(let e=0;e<F.length;e++){let t=F[e],n=se[e];ye.push({text:t.label,at:[9.9,n],role:`category`,align:`right`,valign:`middle`,categoryFor:t.label},{text:`${t.value.toFixed(2)}×`,at:[G(t.value),n],offset:[6,0],role:`value`,align:`left`,valign:`middle`,cls:t.cls})}this.chart.defineStep(2,{kind:`grouped-bar`,lines:_e,ticks:ve,labels:ye,legend:{at:[-11.5,-15.3],align:`center`,valign:`middle`,items:[{color:`teal`,label:`Clear lift / ≥1.0× rent`},{color:`amber`,label:`Superhosts`},{color:`red`,label:`No lift / below rent`}]},marks:ue}),this.pinGroups={map:[],standards:[],external:[]};let be=av(n.councils,`Melbourne`,.04),xe=av(n.councils,`Yarra Ranges`,.04);this.pinGroups.map.push(r.addFlag(cv(`Central apartments`,`88.4% within 2 km`,`is-amber is-right`),be,{height:0,offset:[-26,-64]}),r.addFlag(cv(`Outer-east houses`,`Yarra Ranges $28,425`,`is-teal is-right`),xe,{height:0,offset:[-20,-68],cls:`cl-teal`}));let Se=document.createElement(`div`);Se.className=`c1-corner-pin is-slate`,Se.style.opacity=`0`,Se.innerHTML=`<div class="c1-pin-in"><span class="c1-pin-title">Rooms</span><span class="c1-pin-detail">20% of listings · 4.5% of revenue</span></div>`,r.root.appendChild(Se),this.pinGroups.map.push({el:Se}),this.pinGroups.external.push(r.add(cv(`${P.toFixed(1)}% below rent (8,185)`,`Median ratio 0.61×`,`is-red`),[19.5,-14.8,0])),this._hideAll()},_setGroupOpacity(e,t){let n=t<.01?0:Math.min(1,t);for(let t of e)t.setOpacity?t.setOpacity(n):t.el.style.opacity=String(n)},_hideAll(){this.mapOutlines.visibility=0,this.chart.hideAll();for(let e of Object.values(this.pinGroups))this._setGroupOpacity(e,0)},enter(){},leave(){this._hideAll()},update(e,t){let{rig:n,field:r,lines:i}=t,a=qm(Ym(e,.27,.41)),o=qm(Ym(e,.62,.76));e<.62?a<=.001?Zm(n,ev):a>=.999?Zm(n,tv):Xm(n,ev,tv,a,Jm(Ym(e,.27,.41))):Zm(n,tv),e<.62?a<=.001?r.showLayout(`c1_map_km3`):a>=.999?r.showLayout(`c1_standards_bars`):r.morph(`c1_map_km3`,`c1_standards_bars`,a,{stagger:.35,lift:1.8,liftZ:2.2}):o<=.001?r.showLayout(`c1_standards_bars`):o>=.999?r.showLayout(`c1_external_bars`):r.morph(`c1_standards_bars`,`c1_external_bars`,o,{stagger:.35,lift:1.6,liftZ:2.2}),r.setShape(0,0),r.setDrift(0),r.highlight(null);let s=ah(e,{exit:[.24,.31]}),c=ah(e,{enter:[.38,.45],exit:[.6,.67]}),l=ah(e,{enter:[.73,.8]});i.visibility=.85*s,this.mapOutlines.visibility=s,this.chart.setVisibilities({0:s,1:c,2:l}),this._setGroupOpacity(this.pinGroups.map,s),this._setGroupOpacity(this.pinGroups.standards,c),this._setGroupOpacity(this.pinGroups.external,l)}},uv=ih({distance:60}),dv={x:2.5,y:0,z:1.5,distance:66,azimuth:0,polar:4,fit:.72,flat:1},fv=[{key:`albert_park`,label:`Albert Park`,x:.4309,y:-3.9917,primary:!0},{key:`melbourne_park`,label:`Melbourne Park`,x:1.3543,y:-.8846,primary:!0},{key:`mcg`,label:`MCG`,x:1.7853,y:-.7077,primary:!1},{key:`flemington`,label:`Flemington`,x:-4.4763,y:2.5321,primary:!1}],pv=[{key:`>40% below`,html:`&gt;40%<br>below`,role:`red`},{key:`20–40% below`,html:`20–40%<br>below`,role:`slate`},{key:`5–20% below`,html:`5–20%<br>below`,role:`slate`},{key:`Within ±5%`,html:`Within<br>±5%`,role:`slate`},{key:`+5–20% above`,html:`+5–20%<br>above`,role:`amber`},{key:`+20–50% above`,html:`+20–50%<br>above`,role:`slate`},{key:`>50% above`,html:`&gt;50%<br>above`,role:`slate`}];function mv(e){return`$${Math.round(e).toLocaleString(`en-AU`)}`}function hv(e){if(!e.length)return 0;let t=[...e].sort((e,t)=>e-t),n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])*.5}function gv(e,t,n,r,i,a,o=84){let s=[];for(let c=0;c<o;c++){let l=c/o*Math.PI*2,u=(c+1)/o*Math.PI*2;s.push({a:[e+Math.cos(l)*n,r,t+Math.sin(l)*n],b:[e+Math.cos(u)*n,r,t+Math.sin(u)*n],color:i,alpha:a})}return s}function _v(e,t,n,r,i,a){return[{a:[e-n,r,t],b:[e+n,r,t],color:i,alpha:a},{a:[e,r,t-n],b:[e,r,t+n],color:i,alpha:a}]}function vv(e,t,n=.04){let r=e.find(e=>e.name===t);return!r||!r.centroid?[0,n,0]:[r.centroid[0],n,-r.centroid[1]]}function yv(e,t,n,r=.32){let i=new Map,a=n=>Math.floor(e[n]/r)*8192+Math.floor(t[n]/r);for(let t=0;t<e.length;t++)n[t]===0&&i.set(a(t),(i.get(a(t))||0)+1);return{counts:i,keyOf:a}}function bv(e,t=``,n=``){let r=document.createElement(`div`);return r.className=`c2-pin${n?` ${n}`:``}`,r.style.opacity=`0`,r.innerHTML=`<div class="c2-pin-in"><span class="c2-pin-title">${e}</span>`+(t?`<span class="c2-pin-detail">${t}</span>`:``)+`</div>`,r}var xv=[_g,Tg,Fg,zg,Gg,e_,c_,__,z_,$_,lv,{id:`c2-recommendations`,figureTitle:`Actionable priorities by stakeholder group`,heightVh:240,afterParagraph:0,captions:[{at:0,text:`For hosts: price at or up to 20% above comparable estimates ($17,208 peak median), aim for Superhost and one-night stays, and keep complaints below 20%.`},{at:.36,text:`For investors: favour small entire homes near the centre or large homes in the main hotspot ($27,300 vs $16,686 isolated) over Rooms (20% of listings, 4.5% of revenue), and screen against long-term rent (67.7% below).`},{at:.7,text:`For property managers, Airbnb and government: price and staff ahead for Albert Park and Melbourne Park events, and treat low-ratio 5–20 km homes as top long-term rental candidates.`}],mount(e){let{stage:t,data:n,pins:r,registerLayout:i,registerMapLike:a}=e,o=rh(),{drop_stage:s,est_bucket:c,revenue:l,km3:u,dbscan:d,dist_cbd:f,rent_ratio:p}=n.cols,m=[],h=Array.from({length:7},()=>[]),g=[0,0,0],_=[0,0,0],v=[],y=[],b=[],x=[],S=0;for(let e=0;e<n.count;e++){if(s[e]!==0)continue;m.push(e);let t=l[e],n=c[e];n<7&&Number.isFinite(t)&&h[n].push(t);let r=u[e];r<3&&(g[r]++,Number.isFinite(t)&&(_[r]+=t,S+=t)),r===2&&Number.isFinite(t)&&(d[e]===1?v.push(t):d[e]===0&&y.push(t));let i=p[e];Number.isFinite(i)&&(f[e]>=5&&f[e]<10?b.push(i):f[e]>=10&&f[e]<20&&x.push(i))}let C=h.map(e=>hv(e)),w=m.length||1,T=[{label:`Rooms`,listPct:g[0]/w*100,listFmt:`${Math.round(g[0]/w*100)}%`,revPct:_[0]/Math.max(1,S)*100,revFmt:`${(_[0]/Math.max(1,S)*100).toFixed(1)}%`},{label:`Small homes`,listPct:g[1]/w*100,listFmt:`${Math.round(g[1]/w*100)}%`,revPct:_[1]/Math.max(1,S)*100,revFmt:`${(_[1]/Math.max(1,S)*100).toFixed(1)}%`},{label:`Large homes`,listPct:g[2]/w*100,listFmt:`${Math.round(g[2]/w*100)}%`,revPct:_[2]/Math.max(1,S)*100,revFmt:`${(_[2]/Math.max(1,S)*100).toFixed(1)}%`}],E=hv(v),D=hv(y),O=hv(b),k=hv(x),A=27.5,j=-8.8,M=10.6,N=ch(pv.map(e=>e.key),-22.4,A,{paddingInner:.28,paddingOuter:.08}),P=oh(0,2e4,j,M),F=[],I=[];for(let e=0;e<pv.length;e++){let t=pv[e],n=C[e],r={x0:N.start(e),x1:N.end(e),y0:P(0),y1:P(n)},i=t.role===`amber`?o.amber:t.role===`red`?o.red:o.slate;F.push({rect:r,color:i,alpha:t.role===`slate`?.8:.94,weight:Math.max(.5,n),orderBase:e*.08}),I.push({label:t.key,categoryLabel:t.key,group:`hosts-rev`,orientation:`vertical`,value:n,baseValue:0,rect:r})}i(`c2_hosts_rev`,e=>{let t=uh(e.count),n=dh(m,F.map(e=>e.weight),{minPerItem:280});for(let e=0;e<F.length;e++){let r=F[e];fh(r.rect,n[e],t,{color:r.color,alpha:r.alpha,size:.94,orderBase:r.orderBase,orderSpan:.2,orientation:`vertical`})}return t});let L=10.5,R=-24.2,z=5.4,B=12.8,ee=27.6,V=oh(0,70,-10,L),te=oh(0,3e4,-10,L),H=[-18.4,-8.8,.8],U=3.2,ne=2.05,re=[],W=[];for(let e=0;e<T.length;e++){let t=T[e],n=H[e],r=n-ne,i=n+ne,a={x0:r-U*.5,x1:r+U*.5,y0:V(0),y1:V(t.listPct)},s={x0:i-U*.5,x1:i+U*.5,y0:V(0),y1:V(t.revPct)};re.push({rect:a,color:o.slate,alpha:.82,weight:Math.max(.4,(a.x1-a.x0)*(a.y1-a.y0)),orderBase:e*.14},{rect:s,color:o.amber,alpha:.94,weight:Math.max(.4,(s.x1-s.x0)*(s.y1-s.y0)),orderBase:e*.14+.06}),W.push({label:`${t.label} (listings)`,categoryLabel:t.label,group:`seg-share`,orientation:`vertical`,value:t.listPct,baseValue:0,rect:a},{label:`${t.label} (revenue)`,categoryLabel:t.label,group:`seg-share`,orientation:`vertical`,value:t.revPct,baseValue:0,rect:s})}let ie=[{label:`Main hotspot`,value:E,x:16.8,color:o.teal,cls:`is-teal`},{label:`Isolated`,value:D,x:24,color:o.slate,cls:`is-slate`}],ae=3.8;for(let e=0;e<ie.length;e++){let t=ie[e],n={x0:t.x-ae*.5,x1:t.x+ae*.5,y0:te(0),y1:te(t.value)};re.push({rect:n,color:t.color,alpha:t.cls===`is-teal`?.94:.82,weight:Math.max(.4,(n.x1-n.x0)*(n.y1-n.y0)),orderBase:.55+e*.12}),W.push({label:t.label,categoryLabel:t.label,group:`hotspot-rev`,orientation:`vertical`,value:t.value,baseValue:0,rect:n})}i(`c2_investors_bars`,e=>{let t=uh(e.count),n=dh(m,re.map(e=>e.weight),{minPerItem:220});for(let e=0;e<re.length;e++){let r=re[e];fh(r.rect,n[e],t,{color:r.color,alpha:r.alpha,size:.94,orderBase:r.orderBase,orderSpan:.2,orientation:`vertical`})}return t});let oe=fv[0],G=fv[1];a(`c2_policy_map`),i(`c2_policy_map`,e=>{let t=uh(e.count),{x:n,y:r,drop_stage:i,km7:a,dist_cbd:s,rent_ratio:c,rand:l}=e.cols,{counts:u,keyOf:d}=yv(n,r,i,.32);for(let f=0;f<e.count;f++){if(i[f]!==0)continue;let e=Math.max(1,(u.get(d(f))||1)/10),p=Math.hypot(n[f]-oe.x,r[f]-oe.y),m=Math.hypot(n[f]-G.x,r[f]-G.y),h=p<=5||m<=5,g=s[f]>=5&&s[f]<20&&Number.isFinite(c[f])&&c[f]<1,_,v,y,b;if(h){let t=a[f]===2;_=o.teal,v=(t?.94:.7)/e**.45,y=(t?1.18:.96)/e**.16,b=.15+l[f]*.15}else g?(_=o.red,v=.9/e**.42,y=1.16/e**.15,b=.5+l[f]*.15):(_=o.slateDim,v=.34/e**.52,y=.82/e**.18,b=.8+l[f]*.15);t.positions[f*3]=n[f],t.positions[f*3+1]=0,t.positions[f*3+2]=-r[f],t.colors[f*3]=_[0],t.colors[f*3+1]=_[1],t.colors[f*3+2]=_[2],t.alphas[f]=v,t.sizes[f]=y,t.order[f]=b}return t}),this.policyLines=new dg;let se=[];for(let e of fv){let t=-e.y;se.push(...gv(e.x,t,5,.04,o.teal,e.primary?.72:.34,84),..._v(e.x,t,.55,.05,o.teal,e.primary?.95:.55))}this.policyLines.set(se),t.add(this.policyLines.object3d),this.chart=_h(e,this.id);let ce=[{a:[-23,j],b:[A,j],kind:`baseline`},{a:[-23,j],b:[-23,M],kind:`axis`}],le=[],ue=[{text:`Median annual revenue ($)`,at:[-23,12],role:`axis-title`,align:`left`,valign:`bottom`},{text:`Listed price versus model estimate`,at:[2.2,-15.4],role:`axis-title`,align:`center`,valign:`top`}];for(let e of[0,5e3,1e4,15e3,2e4]){let t=P(e);e>0&&ce.push({a:[-23,t],b:[A,t],kind:`gridline`}),le.push({at:[-23,t],dx:-6,dy:0}),ue.push({text:e===0?`$0`:`$${e/1e3}k`,at:[-23,t],offset:[-10,0],role:`tick`,align:`right`,valign:`middle`})}for(let e=0;e<pv.length;e++){let t=pv[e],n=C[e],r=N(e);ue.push({html:t.html,at:[r,j],offset:[0,9],role:`category`,align:`center`,valign:`top`,cls:`c2-multiline`,categoryFor:t.key},{text:mv(n),at:[r,P(n)],offset:[0,-7],role:`value`,align:`center`,valign:`bottom`,cls:t.role===`amber`?`is-amber`:t.role===`red`?`is-red`:`is-slate`})}this.chart.defineStep(0,{kind:`bar`,lines:ce,ticks:le,labels:ue,legend:{at:[A,15.4],align:`right`,valign:`middle`,items:[{color:`amber`,label:`Sweet spot (+5–20%)`},{color:`red`,label:`Deep discount (>40% below)`},{color:`slate`,label:`Other bands`}]},marks:I});let de=[{a:[R,-10],b:[z,-10],kind:`baseline`},{a:[R,-10],b:[R,L],kind:`axis`},{a:[B,-10],b:[ee,-10],kind:`baseline`},{a:[B,-10],b:[B,L],kind:`axis`}],fe=[],pe=[{text:`Share of market (%)`,at:[R,11.8],role:`axis-title`,align:`left`,valign:`bottom`},{text:`Market segments (k = 3)`,at:[-8.8,14.8],role:`panel-title`,align:`center`,valign:`middle`},{text:`Median revenue ($)`,at:[B,11.8],role:`axis-title`,align:`left`,valign:`bottom`},{text:`Large homes by location`,at:[20.4,14.8],role:`panel-title`,align:`center`,valign:`middle`}];for(let e of[0,20,40,60]){let t=V(e);e>0&&de.push({a:[R,t],b:[z,t],kind:`gridline`}),fe.push({at:[R,t],dx:-6,dy:0}),pe.push({text:`${e}%`,at:[R,t],offset:[-9,0],role:`tick`,align:`right`,valign:`middle`})}for(let e=0;e<T.length;e++){let t=T[e],n=H[e];pe.push({text:t.label,at:[n,-10],offset:[0,10],role:`category`,align:`center`,valign:`top`,categoryFor:t.label},{text:t.listFmt,at:[n-ne,V(t.listPct)],offset:[0,-7],role:`value`,align:`center`,valign:`bottom`,cls:`is-slate`},{text:t.revFmt,at:[n+ne,V(t.revPct)],offset:[0,-7],role:`value`,align:`center`,valign:`bottom`,cls:`is-amber`})}for(let e of[0,1e4,2e4,3e4]){let t=te(e);e>0&&de.push({a:[B,t],b:[ee,t],kind:`gridline`}),fe.push({at:[B,t],dx:-6,dy:0}),pe.push({text:e===0?`$0`:`$${e/1e3}k`,at:[B,t],offset:[-9,0],role:`tick`,align:`right`,valign:`middle`})}for(let e of ie)pe.push({text:e.label,at:[e.x,-10],offset:[0,10],role:`category`,align:`center`,valign:`top`,categoryFor:e.label},{text:mv(e.value),at:[e.x,te(e.value)],offset:[0,-7],role:`value`,align:`center`,valign:`bottom`,cls:e.cls});this.chart.defineStep(1,{kind:`grouped-bar`,lines:de,ticks:fe,labels:pe,legend:{at:[-9.2,-15.1],align:`center`,valign:`middle`,items:[{color:`slate`,label:`Listings / Isolated`},{color:`amber`,label:`Revenue share`},{color:`teal`,label:`Main hotspot`}]},marks:W}),this.chart.defineStep(2,{kind:`map`,lines:[],ticks:[],labels:[],legend:{cls:`c2-map-legend`,items:[{color:`teal`,label:`≤5 km of event venues`},{color:`red`,label:`5–20 km below rent`},{color:`slate`,label:`Other listings`}]},marks:[]}),this.pinGroups={hosts:[],investors:[],policy:[]},this.pinGroups.investors.push(r.add(bv(`67.7% below rent`,`Screen vs long-term lease`,`is-red`),[20.2,-15,0]));let me=vv(n.councils,`Monash`,.05);this.pinGroups.policy.push(r.addFlag(bv(`Albert Park (5 km)`,`GP +16.6 pp · Indep. +27.0 pp`,`is-teal is-right`),[oe.x,.05,-oe.y],{height:0,offset:[-102,78],cls:`cl-teal`,below:!0}),r.addFlag(bv(`Melbourne Park (5 km)`,`Aus Open +11.7 pp`,`is-teal is-left`),[G.x,.05,-G.y],{height:0,offset:[86,-82],cls:`cl-teal`}),r.addFlag(bv(`5–20 km low-ratio belt`,`${O.toFixed(2)}× (5–10) · ${k.toFixed(2)}× (10–20 km)`,`is-red`),me,{height:0,offset:[-12,54],cls:`cl-red`,below:!0})),this._hideAll()},_setGroupOpacity(e,t){let n=t<.01?0:Math.min(1,t);for(let t of e)t.setOpacity?t.setOpacity(n):t.el.style.opacity=String(n)},_hideAll(){this.policyLines.visibility=0,this.chart.hideAll();for(let e of Object.values(this.pinGroups))this._setGroupOpacity(e,0)},enter(){},leave(){this._hideAll()},update(e,t){let{rig:n,field:r,lines:i}=t,a=qm(Ym(e,.29,.43)),o=qm(Ym(e,.64,.78));e<.64||o<=.001?Zm(n,uv):o>=.999?Zm(n,dv):Xm(n,uv,dv,o,Jm(Ym(e,.64,.78))),e<.64?a<=.001?r.showLayout(`c2_hosts_rev`):a>=.999?r.showLayout(`c2_investors_bars`):r.morph(`c2_hosts_rev`,`c2_investors_bars`,a,{stagger:.35,lift:1.6,liftZ:2.2}):o<=.001?r.showLayout(`c2_investors_bars`):o>=.999?r.showLayout(`c2_policy_map`):r.morph(`c2_investors_bars`,`c2_policy_map`,o,{stagger:.35,lift:1.8,liftZ:2.2}),r.setShape(0,0),r.setDrift(0),r.highlight(null);let s=ah(e,{exit:[.26,.33]}),c=ah(e,{enter:[.4,.47],exit:[.62,.69]}),l=ah(e,{enter:[.75,.82]});i.visibility=.85*l,this.policyLines.visibility=l,this.chart.setVisibilities({0:s,1:c,2:l}),this._setGroupOpacity(this.pinGroups.hosts,s),this._setGroupOpacity(this.pinGroups.investors,c),this._setGroupOpacity(this.pinGroups.policy,l)}}];history.scrollRestoration=`manual`,window.scrollTo(0,0),document.querySelector(`.narrow-dismiss`)?.addEventListener(`click`,()=>{document.getElementById(`narrow-banner`)?.setAttribute(`hidden`,``)});function Sv(e){if(!e||window.scrollY<40)return{anchorId:`hero`,desiredTop:0,isTop:!0};let t=[...e.querySelectorAll(`[data-anchor-id]`)];if(!t.length)return{anchorId:`hero`,desiredTop:0,isTop:!0};let n=null,r=1/0;for(let e of t){let t=e.getBoundingClientRect().top;if(t>=-48&&t<=window.innerHeight*.45){let i=Math.abs(t-36);i<r&&(r=i,n=e)}}if(!n)for(let e of t)e.getBoundingClientRect().top<=116&&(n=e);n||=t[0];let i=n.getBoundingClientRect().top,a=i>=0&&i<=180?Math.round(i):36;return{anchorId:n.dataset.anchorId,desiredTop:a,isTop:n.dataset.anchorId===`hero`&&i>=0}}function Cv({onJumpReferences:e,onSelectAnimations:t}){let n=document.createElement(`div`);n.className=`anim-ctl`,n.setAttribute(`role`,`group`),n.setAttribute(`aria-label`,`Animation mode`),n.setAttribute(`data-non-report`,``),n.innerHTML=`<button type="button" class="anim-seg" data-anim="on">animations on</button><span class="anim-sep" aria-hidden="true">|</span><button type="button" class="anim-seg" data-anim="off">animations off</button>`,document.body.appendChild(n);let r=n.querySelector(`[data-anim="on"]`),i=n.querySelector(`[data-anim="off"]`),a=()=>{r.setAttribute(`aria-pressed`,Dm.animations?`true`:`false`),i.setAttribute(`aria-pressed`,Dm.animations?`false`:`true`)};a(),Dm.on(`animations`,a),r.addEventListener(`click`,e=>{t(!0),e.detail&&r.blur()}),i.addEventListener(`click`,e=>{t(!1),e.detail&&i.blur()});let o=document.createElement(`div`);o.className=`mode-ctl`,o.setAttribute(`role`,`group`),o.setAttribute(`aria-label`,`Display controls`),o.setAttribute(`data-non-report`,``),o.innerHTML=`<a class="mode-link" data-mode="references" href="#references">references</a><span class="mode-sep" aria-hidden="true">·</span><button type="button" class="mode-link" data-mode="theme"></button>`,document.body.appendChild(o);let s=o.querySelector(`[data-mode="references"]`),c=o.querySelector(`[data-mode="theme"]`),l=()=>{c.textContent=Dm.light?`dark`:`light`,c.setAttribute(`aria-label`,Dm.light?`Switch to dark mode`:`Switch to light mode`)};l(),Dm.on(`theme`,l),s.addEventListener(`click`,t=>{t.preventDefault(),e(),t.detail&&s.blur()}),c.addEventListener(`click`,e=>{Dm.toggleTheme(),e.detail&&c.blur()})}function wv(e,t,n){let r=new Map,i=``;for(let a of t){if(a.part&&a.part!==i&&a.part!==`References`){let t=document.createElement(`li`);t.className=`toc-part`,t.textContent=a.part,e.appendChild(t),i=a.part}let t=document.createElement(`li`);t.className=`toc-item${a.isSub?` is-sub`:``}`;let o=document.createElement(`a`);o.className=`toc-link`,o.href=`#${a.id}`,o.textContent=a.label,o.addEventListener(`click`,e=>{e.preventDefault(),n(a.id)}),t.appendChild(o),e.appendChild(t),r.set(a.id,o)}return r}async function Tv(){let e=Promise.all([document.fonts.load(`380 2.5rem "Fraunces Variable"`),document.fonts.load(`400 1.125rem "IBM Plex Sans"`),document.fonts.load(`500 1rem "IBM Plex Sans"`),document.fonts.load(`600 1rem "IBM Plex Sans"`),document.fonts.load(`400 0.85rem "IBM Plex Mono"`),document.fonts.load(`500 0.85rem "IBM Plex Mono"`)]).catch(()=>{}),r=new Map(xv.map(e=>[e.id,e])),{shell:i,tocListEl:a,rightGutter:o,figureMap:s,refItems:c,tocEntries:l}=rg(document.getElementById(`app`)),[u,d,f,p]=await Promise.all([n(),t(`events.json`),t(`rents.json`),t(`static_figs.json`)]),m={data:u,events:d,rents:f,staticFigs:p};Dm.start();let h=null,g=null,_=null,v=null,y=[],b=null,x=wv(a,l,e=>D(e));function S(e=null){if(!y.length)return;let t=window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-8,n=window.innerHeight*.28,r=y[0]?.id;if(t)r=y[y.length-1].id;else if(e&&!e.isHero&&x.has(e.id)){let t=e.wrapEl.getBoundingClientRect();if(t.top<=n&&t.bottom>=n)r=e.id;else for(let e of y)e.el.getBoundingClientRect().top<=n&&(r=e.id)}else for(let e of y)e.el.getBoundingClientRect().top<=n&&(r=e.id);if(r&&r!==b){b=r;for(let[e,t]of x){let n=e===r;t.classList.toggle(`is-current`,n),n?t.setAttribute(`aria-current`,`location`):t.removeAttribute(`aria-current`)}}}let C=!1,w=()=>{_===`off`&&S(null)};function T(e){e&&!C?(window.addEventListener(`scroll`,w,{passive:!0}),C=!0):!e&&C&&(window.removeEventListener(`scroll`,w),C=!1)}function E(e,{offset:t=40,immediate:n=!1}={}){if(e){if(_===`on`&&g?.manager)g.manager.scrollToElement(e,{offset:t,immediate:n});else{let n=Math.max(0,e.getBoundingClientRect().top+window.scrollY-t);window.scrollTo(0,n),S(null)}}}function D(e,{immediate:t=!1}={}){if(_===`on`&&g?.manager)g.manager.scrollToSection(e,{immediate:t});else{let t=y.find(t=>t.id===e);if(!t)return;let n=e===`hero`?0:Math.max(0,t.el.getBoundingClientRect().top+window.scrollY-36);window.scrollTo(0,n),S(null)}}function O(e,t=0,{immediate:n=!1}={}){_===`on`&&g?.manager&&g.manager.scrollToFigure(e,t,{immediate:n})}function k(){return h||=ag(m),h}function A(){if(g)return g;let{mainCol:e,heroEl:t,sections:n,slots:a}=ig(r);i.insertBefore(e,o);let s=null;try{s=new Qp}catch(e){console.warn(`WebGL unavailable, showing readable text view`,e)}Dm.attach({stage:s});let c=null,l=null,d=null,f=null;s?(c=new pm(u,{pixelRatio:s.pixelRatio}),l=new bm(u.councils),s.add(l.object3d),s.add(c.object3d),s.onResize(e=>c.setPixelRatio(e.pixelRatio)),d=new Sm(s)):document.documentElement.classList.add(`no-webgl`);let p=new xh({stage:s,field:c,lines:l,data:u,pins:d,sections:n,slots:a,scenes:xv,onTocSync:e=>S(e)});return p.mount(),s&&(c.setLayoutImmediate(`hero_spires`),f=new Am(s,c)),g={mainCol:e,heroEl:t,sections:n,slots:a,stage:s,field:c,lines:l,pins:d,cursor:f,manager:p},g}function j(e){e.stage&&(e.stage.setThemeMix(Dm.themeMix),e.manager.update(e.stage.time||0,16),e.stage.render(e.stage.time||0,16),e.stage.start((t,n)=>{e.manager.update(t,n),e.stage.paused||e.field.update(t),e.cursor?.update(t,n)}))}function M(e,t){if(!e||e.isTop){t===`on`&&g?.manager?g.manager._scrollToY(0,{immediate:!0}):window.scrollTo(0,0),S(null);return}let n=v?.querySelector(`[data-anchor-id="${CSS.escape(e.anchorId)}"]`);if(!n)return;let r=Math.max(0,n.getBoundingClientRect().top+window.scrollY-e.desiredTop);t===`on`&&g?.manager?g.manager._scrollToY(r,{immediate:!0}):window.scrollTo(0,r),S(t===`on`?g?.manager?.activeSlot:null)}function N(e,{preserveAnchor:t=!0,runIntro:n=!1}={}){let r=e?`on`:`off`;if(r===_)return;let a=t&&v?Sv(v):null;if(r===`off`){g&&(_g.finishIntro(g.manager.ctx),g.manager.suspend(),g.cursor?.setEnabled(!1),g.mainCol.remove());let e=k();e.mainCol.isConnected||i.insertBefore(e.mainCol,o),v=e.mainCol,y=e.sections,_=`off`,T(!0),I(),a?M(a,`off`):S(null)}else{T(!1),h&&h.mainCol.remove();let e=!g,t=A();t.mainCol.isConnected||i.insertBefore(t.mainCol,o),v=t.mainCol,y=t.sections,_=`on`,t.cursor?.setEnabled(!0),t.manager.resume(),I(),n||_g.finishIntro(t.manager.ctx),j(t),a?M(a,`on`):S(t.manager.activeSlot),e&&n&&_g.intro(t.manager.ctx,t.heroEl)}}let P=og({refItems:c,onJump:e=>E(e,{offset:80})}),F=sg({figureMap:s,onOpen:()=>{_===`on`&&g?.manager?g.manager.lock():document.documentElement.classList.add(`is-locked`)},onClose:()=>{_===`on`&&g?.manager&&g.manager.unlock(),document.documentElement.classList.remove(`is-locked`)}});Cv({onJumpReferences:()=>D(`references`),onSelectAnimations:e=>Dm.setAnimations(e)});function I(){window.__report={manager:g?.manager||null,stage:g?.stage||null,field:g?.field||null,lines:g?.lines||null,charts:window.__report?.charts||null,modes:Dm,lightbox:F,citations:P,get animations(){return Dm.animations},setAnimations:e=>Dm.setAnimations(e),scrollToSection:e=>D(e,{immediate:!0}),scrollToFigure:(e,t=0)=>O(e,t,{immediate:!0})}}Dm.on(`animations`,()=>{N(Dm.animations,{preserveAnchor:!0,runIntro:!1})}),await e,N(Dm.animations,{preserveAnchor:!1,runIntro:Dm.animations})}Tv().catch(e=>{console.error(e),document.documentElement.classList.add(`no-webgl`)});