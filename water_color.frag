// water_color.frag

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
const int amount=18;
// Water Color 1

// void main(){
//
//   vec2 coord =9.0*gl_FragCoord.xy/u_resolution;
//
//   for(int n=1; n<16; n++)
//   {
//     float i= float(n);
//     coord+=vec2(0.7/i*sin(i*coord.y+u_time+0.3*i)+0.8,0.4/i*sin(i*coord.x+u_time+0.3)+1.6);
//   }
//   // coord-=vec2(0.7/sin(coord.y+u_time+0.7)+0.8,0.4/sin(coord.x+u_time+0.3)+1.6);
//
//   vec3 color= vec3(0.5*sin(coord.x)+0.5,0.5*sin(coord.y)+0.5,sin(coord.x+coord.y));
//   // vec3 color= vec3(0.5*sin(coord.x)+0.5*abs(sin(u_time)),0.5*cos(coord.y)+0.5*0.5*cos(coord.y)+0.5,tan(coord.x+coord.y));
//
//   gl_FragColor =vec4(color,1.0);
//
// }


void main(){

  vec2 coord = 20.0*(gl_FragCoord.xy-u_resolution/2.0)/min(u_resolution.y,u_resolution.x);

  float len;

  for(int i=0; i<amount; i++)
  {
    len = length(vec2(coord.x,coord.y));
    coord.x=coord.x-cos(coord.y+sin(len))+cos(u_time/9.0);
    coord.y=coord.y+sin(coord.x+cos(len))+sin(u_time/4.0);
    // coord.y=coord.y+sin(coord.x+sin(len))+sin(u_time/24.0);

  }

  gl_FragColor =vec4(cos(len*1.0),cos(len*1.0),cos(len*4.0)+cos(u_time/9.0)*0.1,1.0);

}
