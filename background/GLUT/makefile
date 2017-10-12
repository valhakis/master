CC = gcc

LIBS += -lGL -lGLU -lglut
OBJECTS += main.o

../bin/bg-glut: $(OBJECTS)
	$(CC) -o $@ $^ $(LIBS)

