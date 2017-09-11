#version 330 core

in vec3 ACol; 
in vec2 TexCoord;

out vec4 FragColor; 

uniform bool useCustomColor = false; 
uniform bool useTexture1 = false; 
uniform bool useVertexColor = false; 
uniform bool useBothTextures = false; 
uniform vec3 InColor; 

uniform sampler2D ourTexture1;
uniform sampler2D ourTexture2;

void main() { 
  if (useBothTextures) {
    // linearly interpolate both textures (80% first and 20% second)
    FragColor = mix(texture(ourTexture1, TexCoord), texture(ourTexture2, TexCoord), 0.5f);
  } else if (useVertexColor && useTexture1) {
    FragColor = texture(ourTexture1, TexCoord) * vec4(ACol, 1.0f);
  } else if (useCustomColor) { 
    FragColor = vec4(InColor, 1.0f); 
  } else if (useTexture1) {
    FragColor = texture(ourTexture1, TexCoord);
  } else if (useVertexColor) { 
    FragColor = vec4(ACol, 1.0f); 
  } else {
    FragColor = vec4(ACol, 1.0f); 
  }

}
