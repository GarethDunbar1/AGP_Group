#version 330 core

in vec2 TexCoords;

out vec4 color;

uniform sampler2D texture_diffuse;

void main( )
{
    color = vec4(texture( texture_diffuse, TexCoords ));
	//color = vec4(1.0, 0.0, 0.0, 1.0);
}