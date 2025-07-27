import tkinter as tk
from tkinter import filedialog, messagebox
import requests
import os

GITHUB_URL = "https://raw.githubusercontent.com/Ak4LaZ/GptAssistant/main/GptAssistant.plugin.js"
PLUGIN_FILENAME = "GptAssistant.plugin.js"

class InstallerApp(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("BetterDiscord Plugin Installer")
        self.geometry("500x350")
        self.configure(bg="#23272A")
        self.resizable(False, False)
        self.create_widgets()

    def create_widgets(self):
        self.grid_columnconfigure(0, weight=1)
        self.grid_rowconfigure(0, weight=1)
        main_frame = tk.Frame(self, bg="#23272A")
        main_frame.grid(sticky="nsew")
        main_frame.grid_columnconfigure(0, weight=1)
        tk.Label(main_frame, text="Instalador de Plugin para BetterDiscord", font=("Segoe UI", 16, "bold"), fg="#7289DA", bg="#23272A").grid(row=0, column=0, pady=(20,5), sticky="ew")
        tk.Label(main_frame, text="Selecciona la carpeta de plugins de BetterDiscord", font=("Segoe UI", 11), fg="#FFFFFF", bg="#23272A").grid(row=1, column=0, pady=5, sticky="ew")
        self.path_var = tk.StringVar()
        path_entry = tk.Entry(main_frame, textvariable=self.path_var, font=("Segoe UI", 10), width=40, bg="#2C2F33", fg="#FFFFFF", bd=0, relief="flat", highlightthickness=2, highlightbackground="#7289DA")
        path_entry.grid(row=2, column=0, pady=5, padx=40, sticky="ew")
        self.selected_path_label = tk.Label(main_frame, text="", font=("Segoe UI", 9), fg="#99AAB5", bg="#23272A")
        self.selected_path_label.grid(row=3, column=0, pady=2, sticky="ew")
        self.btn_folder = tk.Button(main_frame, text="Buscar carpeta", command=self.select_folder, font=("Segoe UI", 10, "bold"), bg="#7289DA", fg="#FFFFFF", bd=0, activebackground="#99AAB5", relief="flat")
        self.btn_folder.grid(row=4, column=0, pady=5, ipadx=10, ipady=2)
        self.btn_install = tk.Button(main_frame, text="Instalar Plugin", command=self.install_plugin, font=("Segoe UI", 12, "bold"), bg="#43B581", fg="#FFFFFF", bd=0, activebackground="#99AAB5", height=2, width=20, relief="flat")
        self.btn_install.grid(row=5, column=0, pady=20, ipadx=10, ipady=4)
        self.status_label = tk.Label(main_frame, text="", font=("Segoe UI", 10), fg="#99AAB5", bg="#23272A")
        self.status_label.grid(row=6, column=0, pady=10, sticky="ew")
        self.progress = tk.Canvas(main_frame, width=300, height=20, bg="#23272A", highlightthickness=0)
        self.progress.grid(row=7, column=0, pady=5)
        self.progress_bar = self.progress.create_rectangle(0, 0, 0, 20, fill="#7289DA", width=0)

        main_frame.grid_rowconfigure(10, weight=1)
        self.credits_label = tk.Label(main_frame, text="by Ak4LaZ", font=("Segoe UI", 10, "bold"), fg="#7289DA", bg="#23272A")
        self.credits_label.grid(row=11, column=0, pady=(0,10), sticky="sew")
        self.btn_folder.bind("<Enter>", lambda e: self.smooth_color(self.btn_folder, "#7289DA", "#99AAB5"))
        self.btn_folder.bind("<Leave>", lambda e: self.smooth_color(self.btn_folder, "#99AAB5", "#7289DA"))
        self.btn_install.bind("<Enter>", lambda e: self.smooth_color(self.btn_install, "#43B581", "#99AAB5"))
        self.btn_install.bind("<Leave>", lambda e: self.smooth_color(self.btn_install, "#99AAB5", "#43B581"))
        self.bind('<Configure>', self.on_resize)

    def smooth_color(self, widget, from_color, to_color, steps=10, delay=10):
        def hex_to_rgb(h):
            h = h.lstrip('#')
            return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))
        def rgb_to_hex(r,g,b):
            return f'#{r:02x}{g:02x}{b:02x}'
        fc = hex_to_rgb(from_color)
        tc = hex_to_rgb(to_color)
        for i in range(steps):
            r = int(fc[0] + (tc[0]-fc[0])*(i+1)/steps)
            g = int(fc[1] + (tc[1]-fc[1])*(i+1)/steps)
            b = int(fc[2] + (tc[2]-fc[2])*(i+1)/steps)
            widget.config(bg=rgb_to_hex(r,g,b))
            widget.update()
            widget.after(delay)

    def on_resize(self, event):
        # Responsive layout
        self.update_idletasks()
        w = self.winfo_width()
        self.progress.config(width=max(200, w-200))

    def select_folder(self):
        folder_selected = filedialog.askdirectory(title="Selecciona la carpeta de plugins de BetterDiscord")
        if folder_selected:
            self.path_var.set(folder_selected)
            self.selected_path_label.config(text=f"Ruta seleccionada: {folder_selected}")
        else:
            self.selected_path_label.config(text="")

    def animate_progress(self):
        for i in range(0, self.progress.winfo_width()+1, 10):
            self.progress.coords(self.progress_bar, 0, 0, i, 20)
            self.update()
            self.after(15)

    def install_plugin(self):
        plugin_path = self.path_var.get()
        if not plugin_path or not os.path.isdir(plugin_path):
            self.status_label.config(text="Selecciona una carpeta válida de plugins.", fg="#FF5555")
            messagebox.showerror("Error", "Selecciona una carpeta válida de plugins.")
            return
        try:
            self.status_label.config(text="Descargando plugin...", fg="#99AAB5")
            self.animate_progress()
            self.update()
            response = requests.get(GITHUB_URL)
            response.raise_for_status()
            with open(os.path.join(plugin_path, PLUGIN_FILENAME), "wb") as f:
                f.write(response.content)
            self.status_label.config(text="¡Plugin instalado correctamente!", fg="#43B581")
            self.progress.coords(self.progress_bar, 0, 0, self.progress.winfo_width(), 20)
            messagebox.showinfo("Éxito", "El plugin se ha instalado en la carpeta de plugins.")
        except Exception as e:
            self.status_label.config(text="Error al instalar el plugin.", fg="#FF5555")
            self.progress.coords(self.progress_bar, 0, 0, 0, 20)
            messagebox.showerror("Error", f"No se pudo instalar el plugin: {e}")

if __name__ == "__main__":
    app = InstallerApp()
    app.mainloop()
