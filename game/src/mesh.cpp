#include <app/mesh.h>
#include <app/share.h>

#include <vector>

Mesh::Mesh(Vertex* vertices, unsigned int numVertices) {
	share::print("MESH CONSTRUCTION");

	m_drawCount = numVertices;

	glGenVertexArrays(1, &m_vao);
	glBindVertexArray(m_vao);

	std::vector<glm::vec3> positions;
	std::vector<glm::vec2> texCoords;

	positions.reserve(numVertices);
	texCoords.reserve(numVertices);

	for (int i=0; i<numVertices; i++) {
		positions.push_back(*vertices[i].GetPos());
		texCoords.push_back(*vertices[i].GetTexCoord());
	}

	glGenBuffers(NUM_BUFFERS, m_vbos);

	// POSITIONS BUFFER
	glBindBuffer(GL_ARRAY_BUFFER, m_vbos[POSITION_VB]);
	glBufferData(GL_ARRAY_BUFFER, numVertices * sizeof(positions[0]), &positions[0], GL_STATIC_DRAW);

	glEnableVertexAttribArray(0);
	glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 0, 0);

	// TEXTURE COORDINATES BUFFER
	glBindBuffer(GL_ARRAY_BUFFER, m_vbos[TEXCOORD_VB]);
	glBufferData(GL_ARRAY_BUFFER, numVertices * sizeof(texCoords[0]), &texCoords[0], GL_STATIC_DRAW);

	glEnableVertexAttribArray(1);
	glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE, 0, 0);

	glBindBuffer(GL_ARRAY_BUFFER, 0);
	glBindVertexArray(0);
}

Mesh::~Mesh() {
	share::print("MESH DESTRUCTION");

	glDeleteVertexArrays(1, &m_vao);
}

void Mesh::Draw() {
	glBindVertexArray(m_vao);
	glDrawArrays(GL_TRIANGLES, 0, m_drawCount);
	glBindVertexArray(0);
}

