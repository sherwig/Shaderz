#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;


//Random Grid
float random2d(vec2 coord){
  return fract(sin(dot(coord.xy,vec2(12.9898,78.233)))*43578.5453);
}



void main(){
  vec2 coord =gl_FragCoord.xy/u_resolution;
  coord.x-=0.5;
  coord.y-=0.5;
  vec3 color = vec3(0.0);
  float grain=0.0;

  grain=random2d(vec2(cos(coord)/ 5000.0*sin(u_time/100000.0*9999.99)));

  color = vec3(grain);

  gl_FragColor =vec4(color,1.0);

}
