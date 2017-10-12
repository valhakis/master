#!/bin/python

import tkinter as tk

class Application(tk.Frame):
    def __init__(self, master=None):
        super().__init__(master)
        self.master.bind("<Button-1>", self.button1Cb)
        self.master.bind("<Key>", self.keyCb)
        self.master.bind("<Escape>", self.escCb)

        # Button
        self.button = tk.Button(self, text="YAMA BUTTON", command=self.buttonCb)
        self.button.pack()

        # Canvas
        self.canvas = tk.Canvas(self, bg="black", height=300, width=300)
        self.canvas.pack()

        # Arc
        self.arc = self.canvas.create_arc(0, 0, 100, 100, start=0, extent=359, fill="white")

        # Oval
        self.oval = self.canvas.create_oval(100, 100, 100, 100, fill="white")

        # Frame1 / Label / Entry
        # ================================================================================
        self.frame1 = tk.Frame(self, bg="#111", borderwidth=3)
        self.frame1.pack()

        self.label = tk.Label(self.frame1, text="Awesome")
        self.label.pack(side="left")

        self.entry = tk.Entry(self.frame1, bd=5)
        self.entry.pack(side="right")
        # ================================================================================

        # ================================================================================
        # LIST BOX

        self.box = tk.Listbox(self)
        self.box.insert(1, "I'M AT POSITION 1")
        self.box.insert(2, "I'M AT POSITION 2")
        self.box.pack()

        # ================================================================================

        self.pack()
        self.create_widgets()

    def buttonCb(event):
        print("BUTTON PRESSED")


    def button1Cb(dunno, event):
        print("Button 1 [%d, %d]" % (event.x, event.y))

    def escCb(dunno, event):
        root.destroy()
        root.quit()

    def keyCb(dunno, event):
        print("Key [%s] [%d, %d]" % (repr(event.char), event.x, event.y))

    def create_widgets(self):
        self.hi_there = tk.Button(self)
        self.hi_there["text"] = "Hello World\n(click me)"
        self.hi_there["command"] = self.say_hi
        self.hi_there.pack(side="top")

        self.quit = tk.Button(self, text="QUIT", fg="red",
                command=root.destroy)
        self.quit.pack(side="bottom")

    def say_hi(self):
        print("hi there, everyone!")

root = tk.Tk()
app = Application(master=root)
app.mainloop()
