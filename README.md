# 🤖 AI Assistant for BetterDiscord (Gemini Powered)

**AI Assistant** (anteriormente GPT Assistant) es un plugin personalizado para **BetterDiscord** que te permite interactuar directamente con **Google AI (Gemini)** desde tu chat de Discord. Obtén respuestas, reformula texto, o genera ideas sin salir de la aplicación.

<p align="center">
  <img src="https://i.imgur.com/Lcy7eCz.png" width="600" alt="AI Assistant Banner">
</p>

---

## ✨ Funcionalidades Principales

- 🧠 **Botón "✨ AI" en Mensajes:** Analiza o responde a mensajes existentes usando Gemini AI con un solo clic.
- 💬 **Ventana de Chat Flotante:** Interfaz de chat dedicada dentro de Discord, ahora con un estilo moderno y futurista.
    - ↔️ **Arrastrable:** Mueve la ventana del asistente a cualquier lugar de tu pantalla.
    - 📏 **Tamaño Configurable:** Ajusta el ancho y alto del popup a tu gusto.
- 🔑 **API Key Personal de Google AI:** Usa tu propia clave de Google AI Studio, guardada de forma segura y local.
- 📝 **Enviar al Chatbox:** Inserta fácilmente la respuesta de la IA en tu caja de texto de Discord.
- ✨ **Botón de Acceso Rápido en Chatbox:** Inicia el asistente directamente desde el área de escritura de mensajes.
- 🔧 **Configuración Avanzada:**
    - 🗣️ **Prompt Personalizado:** Define un comportamiento base o "personalidad" para la IA.
    - 🌍 **Multi-idioma:** Interfaz y respuestas de la IA en Inglés, Español, Francés, o Portugués.
- 🎨 **Estilo Mejorado:** Interfaz con un toque futurista y animaciones suaves.
- 🧩 **Compatibilidad:** Diseñado para BetterDiscord.

---

## 📸 Vista Previa

> Ventana emergente del Asistente AI dentro de Discord:

![Preview](https://i.imgur.com/khMVVuK.png)

---

## 🚀 Instalación

### 1. Requisitos
- Debes tener **BetterDiscord** instalado en tu cliente de Discord.
  👉 [Descargar BetterDiscord](https://betterdiscord.app)

### 2. Instalar el Plugin

1.  **Descarga el archivo del plugin:**
    [`GPTAssistant.plugin.js`](./GPTAssistant.plugin.js)
    *(Nota: Aunque el nombre del archivo aún es GPTAssistant, el plugin ha sido actualizado a Gemini).*

2.  **Abre tu carpeta de plugins de BetterDiscord.**
    *   En Discord, ve a `User Settings > BetterDiscord > Plugins`.
    *   Haz clic en el botón "Open Plugins Folder".

3.  **Mueve el archivo `GPTAssistant.plugin.js` descargado a esta carpeta.**

4.  **Activa el plugin en Discord.**
    *   Vuelve a la sección de Plugins en Discord.
    *   Busca "AI Assistant" (o "GPTAssistant" si aún no se ha actualizado el nombre en la lista) y activa el interruptor.
    *   Si no aparece, intenta recargar Discord (Ctrl+R o Cmd+R).

---

## 🔑 Uso y Configuración

### Primera Vez:

1.  Al intentar usar una función que requiera la IA (ej. hacer clic en "✨ AI" en un mensaje, o en los botones "AI" de la toolbar/chatbox), se te pedirá tu **Google AI API Key**.
2.  **Obtén tu API Key:**
    *   Ve a [Google AI Studio](https://aistudio.google.com/).
    *   Crea un nuevo proyecto o selecciona uno existente.
    *   Genera una API Key (asegúrate de que esté habilitada para la API de Gemini).
3.  Ingresa la clave en la modal que aparece en Discord.
    *   Tu clave se guarda **localmente** en tu configuración de BetterDiscord y no se comparte.

### Configuración General (⚙️):

-   Una vez que el popup del Asistente AI está abierto, haz clic en el icono de **engranaje (⚙️)** en la esquina superior derecha.
-   Desde aquí puedes:
    -   **Cambiar tu API Key.**
    -   **Ajustar el ancho y alto** del popup del asistente.
    -   Establecer un **Prompt Personalizado** para guiar el comportamiento de la IA.
    -   Cambiar el **idioma** de la interfaz del plugin y de las respuestas de la IA.

---

## 📌 Notas Importantes

-   Este plugin **no envía mensajes automáticamente** a los chats de Discord. Tú controlas cuándo y qué se envía usando el botón "Enviar al Chatbox".
-   Toda la configuración, incluyendo tu API key, se guarda **localmente** usando las funciones de almacenamiento de BetterDiscord.
-   El uso de la API de Gemini puede estar sujeto a los [términos de servicio y políticas de uso de Google AI](https://ai.google.dev/terms), incluyendo posibles límites en el nivel gratuito.

---

## 🛠 Créditos

Desarrollado con cariño por [@s.rose02] | Zalt.

---

## 📜 Licencia

MIT © 2025 - Libre para modificar, compartir y usar.
