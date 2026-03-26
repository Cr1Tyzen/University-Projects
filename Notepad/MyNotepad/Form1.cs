using System;
using System.IO;
using System.Drawing;
using System.Windows.Forms;

namespace MyNotepad
{
    public class Form1 : Form
    {
        private string currentFilePath = string.Empty;
        private MenuStrip menuStrip1;
        private RichTextBox richTextBox1;

        public Form1()
        {
            InitializeComponent();
        }

        private void InitializeComponent()
        {
            this.menuStrip1 = new MenuStrip();
            this.richTextBox1 = new RichTextBox();

            // --- FILE MENU ---
            ToolStripMenuItem fileMenu = new ToolStripMenuItem("File");
            ToolStripMenuItem newItem = new ToolStripMenuItem("New", null, NewFile);
            ToolStripMenuItem openItem = new ToolStripMenuItem("Open", null, OpenFile);
            ToolStripMenuItem saveItem = new ToolStripMenuItem("Save", null, SaveFile);
            ToolStripMenuItem saveAsItem = new ToolStripMenuItem("Save As", null, SaveAsFile);
            ToolStripMenuItem exitItem = new ToolStripMenuItem("Exit", null, (s, e) => Application.Exit());
            fileMenu.DropDownItems.AddRange(new ToolStripItem[] { newItem, openItem, saveItem, saveAsItem, new ToolStripSeparator(), exitItem });

            // --- EDIT MENU ---
            ToolStripMenuItem editMenu = new ToolStripMenuItem("Edit");
            ToolStripMenuItem cutItem = new ToolStripMenuItem("Cut", null, (s, e) => richTextBox1.Cut());
            ToolStripMenuItem copyItem = new ToolStripMenuItem("Copy", null, (s, e) => richTextBox1.Copy());
            ToolStripMenuItem pasteItem = new ToolStripMenuItem("Paste", null, (s, e) => richTextBox1.Paste());
            editMenu.DropDownItems.AddRange(new ToolStripItem[] { cutItem, copyItem, pasteItem });

            // --- FORMAT MENU ---
            ToolStripMenuItem formatMenu = new ToolStripMenuItem("Format");

            ToolStripMenuItem wordWrapItem = new ToolStripMenuItem("Word Wrap");
            wordWrapItem.Checked = true;
            wordWrapItem.CheckOnClick = true;
            wordWrapItem.CheckedChanged += (s, e) =>
            {
                richTextBox1.WordWrap = wordWrapItem.Checked;
            };
            formatMenu.DropDownItems.Add(wordWrapItem);

            ToolStripMenuItem fontItem = new ToolStripMenuItem("Font...");
            fontItem.Click += (s, e) =>
            {
                using (FontDialog fontDialog = new FontDialog())
                {
                    fontDialog.Font = richTextBox1.Font;
                    if (fontDialog.ShowDialog() == DialogResult.OK)
                    {
                        richTextBox1.Font = fontDialog.Font;
                    }
                }
            };
            formatMenu.DropDownItems.Add(fontItem);

            // --- HELP MENU ---
            ToolStripMenuItem helpMenu = new ToolStripMenuItem("Help");
            ToolStripMenuItem aboutItem = new ToolStripMenuItem("About", null, (s, e) =>
                MessageBox.Show("Notepad\nCreated in C#", "About"));
            ToolStripMenuItem getHelp = new ToolStripMenuItem("Get Help", null, (s, e) =>
                System.Diagnostics.Process.Start(new System.Diagnostics.ProcessStartInfo
                {
                    FileName = "https://www.google.com/search?q=help+in+notepad",
                    UseShellExecute = true
                }));
            helpMenu.DropDownItems.AddRange(new ToolStripItem[] { getHelp, aboutItem });

            // --- THEME MENU ---
            ToolStripMenuItem themeMenu = new ToolStripMenuItem("Theme");
            ToolStripMenuItem lightTheme = new ToolStripMenuItem("Light", null, (s, e) => ApplyTheme("light"));
            ToolStripMenuItem darkTheme = new ToolStripMenuItem("Dark", null, (s, e) => ApplyTheme("dark"));
            themeMenu.DropDownItems.AddRange(new ToolStripItem[] { lightTheme, darkTheme });

            // --- ADD TO MENUSTRIP ---
            this.menuStrip1.Items.AddRange(new ToolStripItem[] {
                fileMenu, editMenu, formatMenu, helpMenu, themeMenu
            });

            // --- RICHTEXTBOX ---
            this.richTextBox1.Dock = DockStyle.Fill;
            this.richTextBox1.Font = new Font("Consolas", 12);
            this.richTextBox1.WordWrap = true;

            // --- FORM ---
            this.Controls.Add(richTextBox1);
            this.Controls.Add(menuStrip1);
            this.MainMenuStrip = menuStrip1;
            this.menuStrip1.Dock = DockStyle.Top;
            this.Text = "My Notepad";
            this.Width = 800;
            this.Height = 600;

            ApplyTheme("light");
        }

        private void NewFile(object sender, EventArgs e)
        {
            richTextBox1.Clear();
            currentFilePath = string.Empty;
        }

        private void OpenFile(object sender, EventArgs e)
        {
            OpenFileDialog ofd = new OpenFileDialog
            {
                Filter = "Text Files|*.txt|All Files|*.*"
            };
            if (ofd.ShowDialog() == DialogResult.OK)
            {
                richTextBox1.Text = File.ReadAllText(ofd.FileName);
                currentFilePath = ofd.FileName;
            }
        }

        private void SaveFile(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(currentFilePath))
                SaveAsFile(sender, e);
            else
                File.WriteAllText(currentFilePath, richTextBox1.Text);
        }

        private void SaveAsFile(object sender, EventArgs e)
        {
            SaveFileDialog sfd = new SaveFileDialog
            {
                Filter = "Text Files|*.txt|All Files|*.*"
            };
            if (sfd.ShowDialog() == DialogResult.OK)
            {
                File.WriteAllText(sfd.FileName, richTextBox1.Text);
                currentFilePath = sfd.FileName;
            }
        }

        private void ApplyTheme(string theme)
        {
            if (theme == "dark")
            {
                this.BackColor = Color.FromArgb(30, 30, 30);
                richTextBox1.BackColor = Color.FromArgb(45, 45, 45);
                richTextBox1.ForeColor = Color.WhiteSmoke;
                menuStrip1.BackColor = Color.FromArgb(40, 40, 40);
                menuStrip1.ForeColor = Color.White;
            }
            else // light
            {
                this.BackColor = SystemColors.Control;
                richTextBox1.BackColor = Color.White;
                richTextBox1.ForeColor = Color.Black;
                menuStrip1.BackColor = SystemColors.Control;
                menuStrip1.ForeColor = Color.Black;
            }
        }
    }
}
