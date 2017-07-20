// using System

public class App:System.Windows.Forms.Form 
{
	public System.Windows.Forms.TextBox textBox1;
	public System.Windows.Forms.Button button1;

	App() 
	{
		this.SuspendLayout();

		// set up button
		button1 = new System.Windows.Forms.Button();
		button1.Location = new System.Drawing.Point(30, 40);
		button1.Text = "click me";

		button1.Click += new System.EventHandler(button1_click);

		// set up text box

		textBox1 = new System.Windows.Forms.TextBox();
		textBox1.Location = new System.Drawing.Point(20, 20);

		this.Controls.Add(button1);
		this.Controls.Add(textBox1);

		// form title
		this.Text = "Title of every character";

		this.ResumeLayout(false);
	}

	public void button1_click(System.Object Sender, System.EventArgs e) 
	{
		System.Windows.Forms.MessageBox.Show("You clicked on me, how rude!");
	}

	public static void Main(string[] args)
	{
		System.Console.WriteLine("William Valhakis");
		System.Console.WriteLine("Number of arguments: {0}", args.Length);

		for (int i=0; i<args.Length; i++)
		{
			System.Console.WriteLine("Argument: {0} -> {1}", i, args[i]);
		}

		System.Windows.Forms.Application.Run(new App());
	}
}
