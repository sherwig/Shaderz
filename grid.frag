// grid.frag

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;


void main(){


  vec2 position =gl_FragCoord.xy/u_resolution;
  vec3 color= vec3(sin(u_time),cos(u_time),cos(u_time/10.0));
  color+=sin(position.x*cos(u_time/30.0)*60.0)+sin(position.y*cos(u_time/15.0)*10.0);
  color+=cos(position.y*sin(u_time/30.0)*30.0)+cos(position.x*sin(u_time/15.0)*30.0);
  color+=cos(position.y*cos(u_time/30.0)*40.0)+cos(position.x*sin(u_time/15.0)*70.0);
  color+=sin(position.y*sin(u_time/30.0)*40.0)+cos(position.x*sin(u_time/15.0)*70.0);
  // color+=tan(position.y*atan(u_time/50.0)*40.0);

  color*= sin(u_time/10.0)*abs(sin(u_time/5.0));
  gl_FragColor =vec4(color,1.0);

}
