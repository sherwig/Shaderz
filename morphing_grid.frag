// morphing_grid.frag


#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;


void main(){
  vec2 coord =gl_FragCoord.xy*1.0-u_resolution;
  vec3 color = vec3(0.0);

  color += abs(cos(coord.x/10.0+sin(u_time/2.0)*20.0)+sin(coord.y/15.0)-cos(u_time*2.0)+cos(coord.x/14.0+sin(u_time/3.0)*3.0));
  color *= sin(coord.y/15.0)-cos(u_time*1.0)+cos(coord.y/60.0+sin(u_time/3.0)*3.0);

  color.b+= cos(u_time);


  gl_FragColor =vec4(color,1.0);

}
