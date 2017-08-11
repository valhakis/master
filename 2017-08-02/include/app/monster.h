#ifndef MY_MONSTER_H
#define MY_MONSTER_H

struct Monster {
	int program;
	unsigned int vbo, vao;
	float vertices[3][3];
};

struct Monster MonsterCreate(int program);
void RenderMonster(struct Monster *monster);

#endif
