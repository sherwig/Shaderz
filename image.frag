// image.frag

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

uniform sampler2D u_tex0;

void main(){
  vec2 coord =gl_FragCoord.xy/u_resolution;
  vec3 color = vec3(0.0);

  // u_tex0= "Half Dome.jpg";

  gl_FragColor =texture2D(u_tex0,coord);

}
