#include "app/mesh.h"
#include "app/share.h"

#include "obj_loader.h"

#include <vector>

Mesh::Mesh(Vertex* vertices, unsigned int numVertices, unsigned int* indices, unsigned int numIndices) {
  IndexedModel model;

	for (unsigned int i=0; i<numVertices; i++) {
		model.positions.push_back(*vertices[i].GetPos());
		model.texCoords.push_back(*vertices[i].GetTexCoord());
		model.normals.push_back(*vertices[i].GetNormal());
	}

	std::vector<glm::vec3> positions;
	std::vector<glm::vec2> texCoords;

	for (unsigned int i=0; i<numIndices; i++) {
	  model.indices.push_back(indices[i]);
  }

  InitMesh(model);
  /*
	// m_drawCount = numVertices;
	m_drawCount = numIndices;

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

	glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, m_vbos[INDEX_VB]);
	glBufferData(GL_ELEMENT_ARRAY_BUFFER, numIndices * sizeof(indices[0]), &indices[0], GL_STATIC_DRAW);

	glBindBuffer(GL_ARRAY_BUFFER, 0);
	glBindVertexArray(0);
	*/
}

Mesh::Mesh(const std::string& fileName) {
  IndexedModel model = OBJModel(fileName).ToIndexedModel();
  InitMesh(model);
}

void Mesh::InitMesh(const IndexedModel& model) {

  m_drawCount = model.indices.size();

	glGenVertexArrays(1, &m_vao);
	glBindVertexArray(m_vao);
	glGenBuffers(NUM_BUFFERS, m_vbos);

	// POSITIONS BUFFER
	glBindBuffer(GL_ARRAY_BUFFER, m_vbos[POSITION_VB]);
	glBufferData(GL_ARRAY_BUFFER, model.positions.size() * sizeof(model.positions[0]), &model.positions[0], GL_STATIC_DRAW);

	glEnableVertexAttribArray(0);
	glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 0, 0);

	// TEXTURE COORDINATES BUFFER
	glBindBuffer(GL_ARRAY_BUFFER, m_vbos[TEXCOORD_VB]);
	glBufferData(GL_ARRAY_BUFFER, model.positions.size() * sizeof(model.texCoords[0]), &model.texCoords[0], GL_STATIC_DRAW);

	glEnableVertexAttribArray(1);
	glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE, 0, 0);

	// NROMALS BUFFER
	glBindBuffer(GL_ARRAY_BUFFER, m_vbos[NORMAL_VB]);
	glBufferData(GL_ARRAY_BUFFER, model.normals.size() * sizeof(model.normals[0]), &model.normals[0], GL_STATIC_DRAW);

	glEnableVertexAttribArray(2);
	glVertexAttribPointer(2, 3, GL_FLOAT, GL_FALSE, 0, 0);

	// INDICES BUFFER
	glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, m_vbos[INDEX_VB]);
	glBufferData(GL_ELEMENT_ARRAY_BUFFER, model.indices.size() * sizeof(model.indices[0]), &model.indices[0], GL_STATIC_DRAW);

	glBindBuffer(GL_ARRAY_BUFFER, 0);
	glBindVertexArray(0);

}

Mesh::~Mesh() {
  share::print("MESH DESTRUCTION");

  glDeleteVertexArrays(1, &m_vao);
}

void Mesh::Draw() {
  glBindVertexArray(m_vao);
  // glDrawArrays(GL_TRIANGLES, 0, m_drawCount);
  glDrawElements(GL_TRIANGLES, m_drawCount, GL_UNSIGNED_INT, 0);
  glBindVertexArray(0);
}

