// warpLines.frag


#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;


// void main(){
//
//
//   vec2 coord =(gl_FragCoord.xy/u_resolution.xy);
//
//   float color=0.0;
//
//   color+=sin(coord.x*50.0+cos(u_time+coord.y*20.0+sin(coord.x*50.0+u_time*2.0)))*2.0;
//   color+=cos(coord.x*20.0+sin(u_time+coord.y*15.0+cos(coord.x*50.0+u_time*2.0)))*2.0;
//   color+=sin(coord.x*30.0+cos(u_time+coord.y*20.0+sin(coord.x*50.0+u_time*2.0)))*2.0;
//   color+=cos(coord.x*90.0+sin(u_time+coord.y*10.0+cos(coord.x*50.0+u_time*2.0)))*2.0;
//
//   gl_FragColor =vec4(vec3(color*coord.y,color*coord.x,color),1.0);
//
// }


void main(){

  vec2 coord =(gl_FragCoord.xy/u_resolution.xy);

  float color=0.0;
  
  color+=sin(coord.x*12.0*abs(sin(u_time/4.0))+sin(u_time+coord.y*90.0+cos(coord.x*30.0+u_time*2.0)))*0.5;
  // color+=cos(coord.y*8.0+cos(u_time+coord.x*90.0+sin(coord.y*30.0+u_time*2.0)))*0.5;
  gl_FragColor =vec4(vec3(color*coord.x+sin(u_time/2.0),color*coord.y+cos(u_time/2.0),color),1.0);

}
