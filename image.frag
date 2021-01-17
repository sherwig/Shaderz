// image.frag

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

uniform sampler2D u_tex0; //HalfDome.jpg

// void main(){
//   vec2 coord =gl_FragCoord.xy/u_resolution;
//   vec3 color = vec3(0.0);
//
//   coord.x+=sin(u_time);
//   gl_FragColor =texture2D(u_tex0,coord);
//
// }

void main(){
  vec2 coord =gl_FragCoord.xy/u_resolution;
  vec3 color = vec3(0.0);
  // coord+=sin(u_time);
  vec4 image=texture2D(u_tex0,coord);
  image.r+=sin(u_time/4.0);
  image.b+=cos(u_time/6.0);
  // coord.x+=sin(u_time);
  gl_FragColor =vec4(image);

}
