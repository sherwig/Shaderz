// image.frag

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

uniform sampler2D u_tex0; //HalfDome.jpg
float size = 6.0;
float speed= -10.0;
bool flip = false;

float amount=0.6;

// void main(){
//   vec2 coord =gl_FragCoord.xy/u_resolution;
//   vec3 color = vec3(0.0);
//
//   coord.x+=sin(u_time);
//   gl_FragColor =texture2D(u_tex0,coord);
//
// }

//Color Change
// void main(){
//   vec2 coord =gl_FragCoord.xy/u_resolution;
//   vec3 color = vec3(0.0);
//   // coord+=sin(u_time);
//   vec4 image=texture2D(u_tex0,coord);
//   image.r+=sin(u_time/4.0);
//   image.b+=cos(u_time/6.0);
//   // coord.x+=sin(u_time);
//   gl_FragColor =vec4(image);
//
// }

//Image color dots
// void main(){
//   vec2 coord =gl_FragCoord.xy/u_resolution;
//   vec3 color = vec3(0.0);
//   // coord+=sin(u_time);
//   vec4 image=texture2D(u_tex0,coord);
//   // coord.x+= sin(u_time);
//   image.r+=sin(coord.x*90.0+cos(u_time));
//   // image.r+=cos(coord.y*90.0+sin(u_time));
//   image.r+=cos(coord.y*90.0+cos(u_time*40.0)/30.0);
//   image.b+=cos(coord.y*90.0+sin(u_time));
//
// image.r+=abs(0.1+length(coord)-0.6*abs(sin(u_time*0.9/12.0)));
// image.g+=abs(0.015+length(coord)-0.3*abs(sin(u_time*0.6/4.0)-sin(u_time/18.0)));
// image.b+=abs(0.01+length(coord)-0.9*abs(sin(u_time*0.3/9.0)+cos(u_time/3.0)));
//   gl_FragColor =vec4(image);
//
// }


//Load image with mix
// void main(){
//   vec2 coord =gl_FragCoord.xy/u_resolution;
//   vec3 color = vec3(0.0);
//   vec4 image=texture2D(u_tex0,coord);
//
//   color = mix(color, image.rgb, image.a);
//
//   gl_FragColor =vec4(image);
//
// }


//Scan Image

// void main(){
//   vec2 coord =gl_FragCoord.xy/u_resolution;
//   vec3 color = vec3(0.0);
//   vec4 image=texture2D(u_tex0,coord);
//   if (flip){
//     image.a = sin(floor(coord.x*size)-u_time*speed);
//   }
//   else{
//     image.a = sin(floor(coord.y*size)-u_time*speed);
//   }
//
//   gl_FragColor =image;
//
// }


//Random Grid
float random2d(vec2 coord){
  return fract(sin(dot(coord.xy,vec2(12.9898,78.233)))*43578.5453);
}


float noise1d(float value){
  return cos(value+cos(value*90.0)*100.0)*0.5+0.5;
}

// Noise image
void main(){
  vec2 coord =gl_FragCoord.xy/u_resolution;
  vec3 color = vec3(0.0);
  vec4 image=texture2D(u_tex0,coord);

  float noise= (random2d(coord)-0.5)*amount;
  image.r+=noise;
  image.b+=noise;
  image.g+=noise1d(u_time*3.0);

  gl_FragColor =image;

}
