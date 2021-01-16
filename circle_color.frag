// circle_color.frag


#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;


void main(){
  vec2 coord =gl_FragCoord.xy/u_resolution;
  vec3 color = vec3(0.0);
  vec2 translate = vec2(cos(u_time/10.0)/4.0,sin(u_time/10.0)/4.0);
  coord+=translate;

  color.r+=abs(0.1+length(coord)-0.6*abs(sin(u_time*0.9/12.0)));
  color.g+=abs(0.015+length(coord)-0.3*abs(sin(u_time*0.6/4.0)-sin(u_time/18.0)));
  color.b+=abs(0.01+length(coord)-0.9*abs(sin(u_time*0.3/9.0)+cos(u_time/3.0)));


  gl_FragColor =vec4(0.1/color,1.0);

}
