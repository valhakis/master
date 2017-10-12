package sample;

import sample.graphics.Screen;

import java.awt.Canvas;
import java.awt.Graphics;
import java.awt.Dimension;
import java.awt.Color;
import javax.swing.JFrame;
import java.awt.image.BufferStrategy;
import java.awt.image.BufferedImage;
import java.awt.image.DataBufferInt;

public class Game extends Canvas implements Runnable {
	private static final long serialVersionUID = 1L;

	public static int width = 200;
	public static int height = width / 16 * 9;
	public static int scale = 5;
	public static String title = "Game";

	private BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
	private int[] pixels = ((DataBufferInt)image.getRaster().getDataBuffer()).getData();

	private Thread thread;
	private JFrame frame;
	private boolean running = false;

	private Screen screen;

	public synchronized void start() {
		running = true;
		thread = new Thread(this, "Display");
		thread.start();
	}
	
	public synchronized void stop() {
		running = false;
		try {
			thread.join();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void run() {
		long lastTime = System.nanoTime();
		long timer = System.currentTimeMillis();
		final double ns = 1_000_000_000.0 / 60.0;
		double delta = 0;

		int frames = 0;
		int updates = 0;

		// new Game();

		while (running) {
			long now = System.nanoTime();
			delta += (now - lastTime) / ns;

			lastTime = now;

			while (delta >= 1) {
				update();
				updates += 1;
				delta -= 1;
			}
			//update();
			render();
			frames += 1;

			if (System.currentTimeMillis() - timer > 1_000) {
				timer += 1_000;

				frame.setTitle(title + " | " + updates + " updates per second, " + frames + " frames per second");

				updates = 0;
				frames = 0;
			}
		}
	}

	public void update() {

	}

	public void render() {
		BufferStrategy bs = getBufferStrategy();
		if (bs == null) {
			createBufferStrategy(3);
			return;
		}

		screen.clear();
		screen.render();

		for (int i=0; i<pixels.length; i++) {
			pixels[i] = screen.pixels[i];
		}

		Graphics g = bs.getDrawGraphics();
		//g.setColor(Color.BLACK);
		//g.setColor(new Color(80, 40, 100));
		//g.fillRect(0, 0, getWidth(), getHeight());
		g.drawImage(image, 0, 0, getWidth(), getHeight(), null);
		g.dispose();
		bs.show();
	}

	public Game() {
		Dimension size = new Dimension(width*scale, height*scale);
		setPreferredSize(size);

		screen = new Screen(width, height);
		frame = new JFrame();
	}

	public void example() {
		System.out.println("example has been executed.");
	}

	public static void main(String args[]) {
		Game game = new Game();

		game.example();

		System.out.println("Java application.");

		game.frame.setResizable(false);
		// game.frame.setTitle("Game");
		game.frame.setTitle(game.title);
		game.frame.add(game);
		game.frame.pack();
		game.frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		game.frame.setLocationRelativeTo(null);
		game.frame.setVisible(true);

		game.start();
	}
}
