#version 120

// #version 330 core
// out vec3 color;
// uniform -> access CPU and GPU

varying vec2 texCoord0;// shared between shaders

uniform sampler2D diffuse;

void main(){
	// color = vec3(1,0,0);
	// gl_FragColor = vec4(1.0f, 1.0f, 0.0f, 1.0f);
	gl_FragColor = texture2D(diffuse, vec2(texCoord0.x, texCoord0.y)); // unit 0
} // void main |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|
