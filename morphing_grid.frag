// morphing_grid.frag


#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;


//Grid
// void main(){
//   vec2 coord =gl_FragCoord.xy*1.0-u_resolution;
//   vec3 color = vec3(0.0);
//
//   color += abs(cos(coord.x/10.0+sin(u_time/2.0)*20.0)+sin(coord.y/15.0)-cos(u_time*2.0)+cos(coord.x/14.0+sin(u_time/3.0)*3.0));
//   color *= sin(coord.y/15.0)-cos(u_time*1.0)+cos(coord.y/60.0+sin(u_time/3.0)*3.0);
//
//   color.b+= cos(u_time);
//
//
//   gl_FragColor =vec4(color,1.0);
//
// }


//Random Grid
float random2d(vec2 coord){

  return fract(sin(dot(coord.xy,vec2(12.9898,78.233)))*43578.5453);

}


void main(){
  vec2 coord =gl_FragCoord.xy*abs(sin(u_time/4.0)*0.012);
  vec3 color = vec3(0.0);

  coord-=u_time +vec2(sin(coord.y),cos(coord.x));

  float rand1=fract(random2d(floor(coord))+u_time/60.0);
  float rand2=fract(random2d(floor(coord))+u_time/40.0);

  rand1*=0.4-length(fract(coord));
  gl_FragColor =vec4(0.0,rand2*rand1*4.0*cos(u_time),rand1*sin(u_time)*4.0,1.0);

}
