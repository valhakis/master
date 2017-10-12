#include <app/transform.h>
#include <app/share.h>

/*
Transform::Transform (
		const glm::vec3& pos,
		const glm::vec3& rot,
		const glm::vec3& scale
		) :
	m_pos(pos), 
	m_rot(rot), 
	m_scale(scale)
{
	share::printf("TRANSFORM CONSTRUCTION");
	share::printf("POS\t->\t[%.2f, %.2f, %.2f].", pos.x, pos.y, pos.z);
	share::printf("M-POS\t->\t[%.2f, %.2f, %.2f].", m_pos.x, m_pos.y, m_pos.z);
	share::printf("ROT\t->\t[%.2f, %.2f, %.2f].", rot.x, rot.y, rot.z);
	share::printf("M-ROT\t->\t[%.2f, %.2f, %.2f].", m_rot.x, m_rot.y, m_rot.z);
}; // Transform |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|
*/

Transform::~Transform() {
	share::printf("TRANSFORM DESTRUCTION");
}; // ~Transform |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|
