//control-shift-G to preview
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

const float PI= 3.1415926535;

mat2 scale(vec2 scale){
  return mat2(scale.x,0.0,0.0,scale.y);
}

mat2 rotate(float angle){
  return mat2(cos(angle),-sin(angle), sin(angle),cos(angle));
}

float circleShape(vec2 position, float radius){
  return step(radius, length(position-vec2(0.5)));
}

float rectShape(vec2 position, vec2 scale){
  scale = vec2(0.5)-scale*0.5;
  vec2 shaper = vec2(step(scale.x,position.x),step(scale.y,position.y));
  shaper *= vec2(step(scale.x,1.0-position.x),step(scale.y,1.0-position.y));
  return shaper.x * shaper.y;
}

float polygonShape(vec2 position, float radius, float sides){
  position=position*2.0-1.0;
  float angle = atan(position.x,position.y);
  float slice = PI * 2.0/sides;

  return step(radius,cos(floor(0.5+angle/slice)*slice-angle)*length(position));
}

void main(){
  // vec3 color= vec3(0.9,0.5,0.3);
  // gl_FragColor =vec4(color,0.3);

  vec2 position =gl_FragCoord.xy/u_resolution;

  vec3 color = vec3(0.0);

  float circle = circleShape(position,0.35);
  float rect = rectShape(position,vec2(0.3,0.3));
  float polygon=polygonShape(position,0.4,8.4);

  vec2 translate =vec2(sin(u_time/5.0),cos(u_time));
  // position+=translate*0.5;
  // position-=vec2(0.5);
  // position=scale(vec2(sin(u_time)+2.0))*position;
  // position+=vec2(0.5);


  // color+=vec3(circleShape(position,sin(u_time/2.0)/2.0+.3));
   position-= vec2(0.5);
   position= rotate(sin(u_time)/2.0)*position;
   position+= vec2(0.5);
   color+=vec3(rectShape(position,vec2(sin(u_time/2.0)/2.0+.3,cos(u_time/2.0)/3.0+.3)));

   color+=vec3(polygonShape(position,abs(sin(u_time/2.0)/2.0+.1),abs(cos(u_time/4.0)*32.0)));

  // color=vec3(circleShape(position,sin(u_time/2.0)/2.0+.3));
  // color=vec3(rectShape(position,vec2(sin(u_time/2.0)/2.0+.3,cos(u_time/2.0)+.3)));
  // color=vec3(polygonShape(position,.3,8.4));

  gl_FragColor =vec4(color,1.0);


}
