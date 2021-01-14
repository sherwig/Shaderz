//lights.frag


#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

// void main(){
//   vec2 coord =(gl_FragCoord.xy*2.0-u_resolution)/min(u_resolution.x,u_resolution.y);
//   float color = 0.0;
//
//   coord.x+= sin(u_time)+cos(u_time*2.1);
//   coord.y+= cos(u_time)+sin(u_time*1.6);
//
//   color += 0.1* (abs(sin(u_time))+0.1) /length(coord);
//
//   gl_FragColor =vec4(vec3(color),1.0);
//
// }


//CIRCLE OF LIGHTS
void main(){
  vec2 coord =gl_FragCoord.xy/u_resolution;
  vec3 color = vec3(0.0);

  vec2 translate = vec2(-0.5,-0.5);
  coord+=translate;

  for (int i=0; i<40; i++)
  {
    float radius=0.3;
    float rad = radians(360.0/40.0)*float(i);
    color += 0.002/length(coord+vec2(radius*cos(rad), radius *sin(rad)));

    vec2 translate2 = vec2(radius*cos(rad*u_time)+radius*sin(rad*u_time),radius*sin(rad*u_time));
    coord+=translate2;
  }


  gl_FragColor =vec4(color,1.0);

}
