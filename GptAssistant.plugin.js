/**
 * @name GPTAssistant
 * @author Zalt
 * @description Plugin que añade un botón para consultar Gemini AI en mensajes y chat, con soporte multi-idioma y estilo futurista.
 * @version 1.4.1
 * @donate https://ai.google.dev/
 * @website https://github.com
 * @source https://github.com
 */

const DEFAULT_CUSTOM_PROMPT =
  "You are GPTAssistant, a fast and friendly assistant built into Discord via BetterDiscord, created by Zalt to help users understand, rewrite, or respond to messages directly in chat—stay clear, informal, and never mention anything outside of Discord.";

const i18nStrings = {
  en: {
    settingsTitle: "AI Assistant Settings",
    changeApiKeyButton: "Change API Key",
    googleApiKeyLabel: "Google AI API Key:",
    popupWidthLabel: "Popup Width:",
    popupHeightLabel: "Popup Height (optional):",
    customPromptLabel: "Custom AI Prompt (optional):",
    saveChangesButton: "Save Changes",
    cancelButton: "Cancel",
    apiKeyModalTitle: "Configure Google AI API Key",
    apiKeyModalDesc: "Enter your Google AI Studio API key (for Gemini).",
    apiKeyModalPlaceholder: "Your Google AI API Key...",
    apiKeySaveButton: "Save",
    apiKeyInvalid: "Invalid API Key. Please ensure it's correct.",
    apiKeyEmpty: "API Key cannot be empty.",
    apiKeySavedToast: "Google AI API Key saved.",
    settingsSavedToast: "Settings saved.",
    chatPopupTitle: "AI Assistant (Google AI)",
    chatPopupPlaceholder: "What do you want to ask GptAssistant?",
    chatPopupSendButton: "Send",
    chatPopupSendToChatboxButton: "↪️ Send to Chatbox",
    chatPopupQuerying: "Querying AI...",
    chatPopupNoApiKey:
      "Error: Google AI API Key not found. Please configure it via ⚙️.",
    chatPopupErrorPrefix: "Error",
    chatPopupBlockedPrefix: "Response blocked by AI due to:",
    chatPopupNoValidResponse: "No valid text response received from AI.",
    chatPopupConnectionError:
      "❌ Connection error with AI or parsing response.",
    toolbarButtonText: "AI",
    toolbarButtonTitle: "Open AI Assistant",
    messageButtonText: "✨ AI",
    chatboxButtonTitle: "Open AI Assistant",
    confirmUseExistingKeyTitle: "Google AI API Key",
    confirmUseExistingKeyMessage:
      "You already have an API Key saved. What would you like to do?",
    confirmUseExisting: "Use Existing",
    confirmEnterNew: "Enter New",
    responseSentToChatboxToast: "Response sent to chatbox.",
    noValidResponseToSentToast: "No valid response to send.",
    languageLabel: "Language:",
    languageEnglish: "English",
    languageSpanish: "Spanish",
    languageFrench: "French",
    languagePortuguese: "Portuguese",
    customPromptPlaceholder: "Define the base behavior of the AI...",
    apiKeyChangedChatClosed: "Google AI API Key changed. The chat was closed.",
    apiKeyChanged: "Google AI API Key changed.",
    errorSavingApiKey: "Error: BdApi.Data.save is not available for API Key.",
    errorSavingSettings:
      "Error: BdApi.Data.save is not available for settings.",
    errorLoadingSettings:
      "[AI_Assistant][start] BdApi.Data.load is not available. Cannot load settings.",
    errorBdApiNotAvailable:
      "Error: BdApi is not available. Cannot save settings.",
    errorPermissionDenied:
      "Error: Permission denied. Check your API Key's access to Gemini API.",
    errorRateLimit:
      "Error: Rate limit reached or too many requests. Try again later.",
  },
  es: {
    settingsTitle: "Configuración del Asistente AI",
    changeApiKeyButton: "Cambiar API Key",
    googleApiKeyLabel: "Google AI API Key:",
    popupWidthLabel: "Ancho del Popup:",
    popupHeightLabel: "Alto del Popup (opcional):",
    customPromptLabel: "Prompt Personalizado para IA (opcional):",
    saveChangesButton: "Guardar Cambios",
    cancelButton: "Cancelar",
    apiKeyModalTitle: "Configurar Google AI API Key",
    apiKeyModalDesc: "Introduce tu API key de Google AI Studio (para Gemini).",
    apiKeyModalPlaceholder: "Tu API Key de Google AI...",
    apiKeySaveButton: "Guardar",
    apiKeyInvalid: "API Key inválida. Por favor, asegúrate de que es correcta.",
    apiKeyEmpty: "La API Key no puede estar vacía.",
    apiKeySavedToast: "Google AI API Key guardada.",
    settingsSavedToast: "Configuración guardada.",
    chatPopupTitle: "Asistente AI (Google AI)",
    chatPopupPlaceholder: "¿Qué quieres preguntarle a GptAssistant?",
    chatPopupSendButton: "Enviar",
    chatPopupSendToChatboxButton: "↪️ Enviar al Chatbox",
    chatPopupQuerying: "Consultando a la IA...",
    chatPopupNoApiKey:
      "Error: No se encontró la Google AI API Key. Por favor, configúrala desde ⚙️.",
    chatPopupErrorPrefix: "Error",
    chatPopupBlockedPrefix: "Respuesta bloqueada por la IA debido a:",
    chatPopupNoValidResponse:
      "No se recibió una respuesta de texto válida de la IA.",
    chatPopupConnectionError:
      "❌ Error de conexión con la IA o al procesar la respuesta.",
    toolbarButtonText: "IA",
    toolbarButtonTitle: "Abrir Asistente AI",
    messageButtonText: "✨ IA",
    chatboxButtonTitle: "Abrir Asistente AI",
    confirmUseExistingKeyTitle: "Google AI API Key",
    confirmUseExistingKeyMessage:
      "Ya tienes una API Key guardada. ¿Qué deseas hacer?",
    confirmUseExisting: "Usar Existente",
    confirmEnterNew: "Ingresar Nueva",
    responseSentToChatboxToast: "Respuesta enviada al chatbox.",
    noValidResponseToSentToast: "No hay una respuesta válida para enviar.",
    languageLabel: "Idioma:",
    languageEnglish: "Inglés",
    languageSpanish: "Español",
    languageFrench: "Francés",
    languagePortuguese: "Portugués",
    customPromptPlaceholder: "Define el comportamiento base de la IA...",
    apiKeyChangedChatClosed: "Google AI API Key cambiada. El chat se cerró.",
    apiKeyChanged: "Google AI API Key cambiada.",
    errorSavingApiKey:
      "Error: BdApi.Data.save no está disponible para la API Key.",
    errorSavingSettings:
      "Error: BdApi.Data.save no está disponible para la configuración.",
    errorLoadingSettings:
      "[AI_Assistant][start] BdApi.Data.load no está disponible. No se pueden cargar las configuraciones.",
    errorBdApiNotAvailable:
      "Error: BdApi no está disponible. No se pueden guardar las configuraciones.",
    errorPermissionDenied:
      "Error: Permiso denegado. Verifica que tu API Key tenga acceso a Gemini API.",
    errorRateLimit:
      "Error: Límite de cuota o muchas solicitudes. Intenta más tarde.",
  },
  fr: {
    settingsTitle: "Paramètres de l'Assistant IA",
    changeApiKeyButton: "Changer la clé API",
    googleApiKeyLabel: "Clé API Google AI:",
    popupWidthLabel: "Largeur du Popup:",
    popupHeightLabel: "Hauteur du Popup (optionnel):",
    customPromptLabel: "Prompt IA personnalisé (optionnel):",
    saveChangesButton: "Enregistrer",
    cancelButton: "Annuler",
    apiKeyModalTitle: "Configurer la clé API Google AI",
    apiKeyModalDesc: "Entrez votre clé API Google AI Studio (pour Gemini).",
    apiKeyModalPlaceholder: "Votre clé API Google AI...",
    apiKeySaveButton: "Enregistrer",
    apiKeyInvalid: "Clé API invalide.",
    apiKeyEmpty: "La clé API est vide.",
    apiKeySavedToast: "Clé API Google AI enregistrée.",
    settingsSavedToast: "Paramètres enregistrés.",
    chatPopupTitle: "Assistant IA (Google AI)",
    chatPopupPlaceholder: "Demandez à GptAssistant...",
    chatPopupSendButton: "Envoyer",
    chatPopupSendToChatboxButton: "↪️ Envoyer au Chatbox",
    chatPopupQuerying: "Interrogation de l'IA...",
    chatPopupNoApiKey:
      "Erreur: Clé API Google AI non trouvée. Configurez via ⚙️.",
    chatPopupErrorPrefix: "Erreur",
    chatPopupBlockedPrefix: "Réponse bloquée par l'IA:",
    chatPopupNoValidResponse: "Aucune réponse valide de l'IA.",
    chatPopupConnectionError: "❌ Erreur de connexion IA.",
    toolbarButtonText: "IA",
    toolbarButtonTitle: "Ouvrir l'Assistant IA",
    messageButtonText: "✨ IA",
    chatboxButtonTitle: "Ouvrir l'Assistant IA",
    confirmUseExistingKeyTitle: "Clé API Google AI",
    confirmUseExistingKeyMessage: "Clé API existante. Que faire?",
    confirmUseExisting: "Utiliser l'existante",
    confirmEnterNew: "Entrer nouvelle",
    responseSentToChatboxToast: "Réponse envoyée au chatbox.",
    noValidResponseToSentToast: "Aucune réponse valide à envoyer.",
    languageLabel: "Langue:",
    languageEnglish: "Anglais",
    languageSpanish: "Espagnol",
    languageFrench: "Français",
    languagePortuguese: "Portugais",
    customPromptPlaceholder: "Définir le comportement de l'IA...",
    apiKeyChangedChatClosed: "Clé API changée. Chat fermé.",
    apiKeyChanged: "Clé API changée.",
    errorSavingApiKey: "Erreur: BdApi.Data.save non disponible (Clé API).",
    errorSavingSettings: "Erreur: BdApi.Data.save non disponible (Paramètres).",
    errorLoadingSettings:
      "[AI_Assistant][start] BdApi.Data.load non disponible.",
    errorBdApiNotAvailable: "Erreur: BdApi non disponible.",
    errorPermissionDenied:
      "Erreur: Permission refusée. Vérifiez l'accès de votre clé API à l'API Gemini.",
    errorRateLimit:
      "Erreur: Limite de taux atteinte ou trop de requêtes. Réessayez plus tard.",
  },
  pt: {
    settingsTitle: "Config. Assistente IA",
    changeApiKeyButton: "Mudar Chave API",
    googleApiKeyLabel: "Chave API Google AI:",
    popupWidthLabel: "Largura do Popup:",
    popupHeightLabel: "Altura do Popup (opc.):",
    customPromptLabel: "Prompt IA Personalizado (opc.):",
    saveChangesButton: "Salvar",
    cancelButton: "Cancelar",
    apiKeyModalTitle: "Configurar Chave API Google AI",
    apiKeyModalDesc: "Insira sua chave API do Google AI Studio (para Gemini).",
    apiKeyModalPlaceholder: "Sua Chave API Google AI...",
    apiKeySaveButton: "Salvar",
    apiKeyInvalid: "Chave API inválida.",
    apiKeyEmpty: "Chave API vazia.",
    apiKeySavedToast: "Chave API Google AI salva.",
    settingsSavedToast: "Configurações salvas.",
    chatPopupTitle: "Assistente IA (Google AI)",
    chatPopupPlaceholder: "Pergunte ao GptAssistant...",
    chatPopupSendButton: "Enviar",
    chatPopupSendToChatboxButton: "↪️ Enviar ao Chatbox",
    chatPopupQuerying: "Consultando IA...",
    chatPopupNoApiKey:
      "Erro: Chave API Google AI não encontrada. Configure via ⚙️.",
    chatPopupErrorPrefix: "Erro",
    chatPopupBlockedPrefix: "Resposta bloqueada pela IA:",
    chatPopupNoValidResponse: "Sem resposta válida da IA.",
    chatPopupConnectionError: "❌ Erro de conexão IA.",
    toolbarButtonText: "IA",
    toolbarButtonTitle: "Abrir Assistente IA",
    messageButtonText: "✨ IA",
    chatboxButtonTitle: "Abrir Assistente IA",
    confirmUseExistingKeyTitle: "Chave API Google AI",
    confirmUseExistingKeyMessage: "Chave API existente. O que fazer?",
    confirmUseExisting: "Usar Existente",
    confirmEnterNew: "Inserir Nova",
    responseSentToChatboxToast: "Resposta enviada ao chatbox.",
    noValidResponseToSentToast: "Nenhuma resposta válida para enviar.",
    languageLabel: "Idioma:",
    languageEnglish: "Inglês",
    languageSpanish: "Espanhol",
    languageFrench: "Francês",
    languagePortuguese: "Português",
    customPromptPlaceholder: "Definir comportamento da IA...",
    apiKeyChangedChatClosed: "Chave API alterada. Chat fechado.",
    apiKeyChanged: "Chave API alterada.",
    errorSavingApiKey: "Erro: BdApi.Data.save indisponível (Chave API).",
    errorSavingSettings: "Erro: BdApi.Data.save indisponível (Config).",
    errorLoadingSettings: "[AI_Assistant][start] BdApi.Data.load indisponível.",
    errorBdApiNotAvailable: "Erro: BdApi indisponível.",
    errorPermissionDenied:
      "Erro: Permissão negada. Verifique o acesso da sua chave de API à API Gemini.",
    errorRateLimit:
      "Erro: Limite de taxa atingido ou muitas solicitações. Tente novamente mais tarde.",
  },
};

const CSS_ID = "aiAssistantStyles";
const FUTURISTIC_CSS = `
  @keyframes ai-popup-fade-in-scale { from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); } }
  @keyframes ai-popup-fade-out-scale { from { opacity: 1; transform: translate(-50%, -50%) scale(1); } to { opacity: 0; transform: translate(-50%, -50%) scale(0.9); } }
  @keyframes ai-modal-content-fade-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
  @keyframes ai-modal-content-fade-out { from { opacity: 1; transform: scale(1); } to { opacity: 0; transform: scale(0.95); } }

  .ai-assistant-popup-base {
    background: linear-gradient(145deg, #282b30, #2f3136);
    border: 1px solid #44484e;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.4), 0 0 10px rgba(79, 84, 92, 0.2);
    color: #dcddde;
  }

  #ai-popup.ai-assistant-popup-base {
    animation: ai-popup-fade-in-scale 0.3s ease-out forwards;
  }
  #ai-popup.ai-assistant-popup-base.closing {
    animation: ai-popup-fade-out-scale 0.3s ease-in forwards;
  }

  #ai-settings-modal .ai-assistant-popup-base,
  #ai-apikey-modal .ai-assistant-popup-base {
    animation: ai-modal-content-fade-in 0.25s ease-out forwards;
    transform: none !important;
  }
  #ai-settings-modal.closing .ai-assistant-popup-base,
  #ai-apikey-modal.closing .ai-assistant-popup-base {
    animation: ai-modal-content-fade-out 0.25s ease-in forwards;
  }

  .ai-assistant-popup-base #ai-popup-header { border-bottom: 1px solid #44484e; padding-bottom: 10px; margin-bottom: 10px; }
  .ai-assistant-popup-base #ai-popup-header h3 { color: #fff; font-weight: 500; text-shadow: 0 0 6px rgba(88, 101, 242, 0.6); }
  .ai-assistant-popup-base #ai-popup-header button { color: #b9bbbe; transition: color 0.2s ease, transform 0.2s ease; background: transparent; border: none; font-size: 16px; cursor: pointer; padding: 5px; }
  .ai-assistant-popup-base #ai-popup-header button:hover { color: #fff; transform: scale(1.15); }

  .ai-assistant-popup-base #ai-user-input,
  .ai-assistant-popup-base #ai-response-container,
  #ai-settings-modal input[type="text"],
  #ai-settings-modal textarea,
  #ai-settings-modal select,
  #ai-apikey-modal input[type="text"] {
    background-color: #202225; border: 1px solid #18191c; box-shadow: inset 0 1px 2px rgba(0,0,0,0.1); color: #dcddde;
    border-radius: 3px; padding: 10px; font-family: inherit; font-size: 14px;
  }
  .ai-assistant-popup-base #ai-user-input:focus,
  #ai-settings-modal input[type="text"]:focus,
  #ai-settings-modal textarea:focus,
  #ai-settings-modal select:focus,
  #ai-apikey-modal input[type="text"]:focus {
    border-color: #5865F2; box-shadow: inset 0 1px 2px rgba(0,0,0,0.1), 0 0 5px rgba(88, 101, 242, 0.5);
  }
  .ai-assistant-popup-base #ai-response { color: #e0e0e0; opacity: 0; animation: ai-response-fade-in 0.5s 0.2s ease-out forwards; }
  @keyframes ai-response-fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

  .ai-assistant-popup-base button,
  #ai-settings-modal button,
  #ai-apikey-modal button {
    border-radius: 5px !important;
    transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease !important;
    text-shadow: 0 1px 1px rgba(0,0,0,0.2) !important;
    padding: 8px 12px !important;
    font-size: 13px !important;
    border: none !important;
    color: white !important;
    cursor: pointer;
  }
  .ai-assistant-popup-base #ai-popup-header button {
      padding: 5px !important;
      font-size: 16px !important;
      text-shadow: none !important;
      box-shadow: none !important;
  }
  .ai-assistant-popup-base #ai-popup-header button#ai-settings { margin-right: 5px; }

  .ai-assistant-popup-base button:hover,
  #ai-settings-modal button:not(#ai-popup-header button):hover,
  #ai-apikey-modal button:not(#ai-popup-header button):hover {
    transform: translateY(-1px) !important;
    box-shadow: 0 3px 10px rgba(0,0,0,0.25) !important;
  }
  .ai-assistant-popup-base button:active,
  #ai-settings-modal button:not(#ai-popup-header button):active,
  #ai-apikey-modal button:not(#ai-popup-header button):active {
    transform: translateY(0px) !important;
    box-shadow: 0 1px 5px rgba(0,0,0,0.2) !important;
  }

  .ai-assistant-popup-base #ai-send,
  #ai-settings-modal #ai-settings-save,
  #ai-apikey-modal #ai-apikey-save {
    background-color: #4a90e2 !important;
    padding: 10px 15px !important; font-size: 14px !important; font-weight: 500 !important;
  }
  .ai-assistant-popup-base #ai-send:hover,
  #ai-settings-modal #ai-settings-save:hover,
  #ai-apikey-modal #ai-apikey-save:hover {
    background-color: #5aa4f2 !important;
  }

  .ai-assistant-popup-base #ai-send-to-chatbox,
  #ai-settings-modal #ai-settings-cancel,
  #ai-settings-modal #ai-setting-change-apikey,
  #ai-apikey-modal #ai-apikey-cancel {
    background-color: #4f545c !important;
  }
   #ai-settings-modal #ai-settings-cancel, #ai-settings-modal #ai-settings-save { padding: 10px 15px !important; }
   #ai-apikey-modal #ai-apikey-cancel, #ai-apikey-modal #ai-apikey-save { padding: 10px 15px !important; }

  .ai-assistant-popup-base #ai-send-to-chatbox:hover,
  #ai-settings-modal #ai-settings-cancel:hover,
  #ai-settings-modal #ai-setting-change-apikey:hover,
  #ai-apikey-modal #ai-apikey-cancel:hover {
    background-color: #5e636a !important;
  }
  #ai-apikey-modal .ai-assistant-popup-base,
  #ai-settings-modal .ai-assistant-popup-base {
      background: linear-gradient(145deg, #282b30, #2f3136) !important;
      border: 1px solid #44484e !important;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.4), 0 0 10px rgba(79, 84, 92, 0.2) !important;
  }
`;

module.exports = class GPTAssistant {
  constructor() {
    this.apiKey = null;
    this.popup = null;
    this.observer = null;
    this.interval = null;
    this.chatboxButtonInterval = null;
    this._pendingTextForPopup = null;
    this.apiKeyPromptModal = null;
    this.settingsModal = null;
    this.popupSettings = {
      width: "30%",
      height: null,
      top: "50%",
      left: "50%",
    };
    this.customPrompt = DEFAULT_CUSTOM_PROMPT;
    this.language = "en";
    this.isDragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;
    this.popupInitialX = 0;
    this.popupInitialY = 0;
    this.popupHeader = null;
  }

  getString(key, lang = this.language) {
    return i18nStrings[lang]?.[key] || i18nStrings.en[key] || `Missing: ${key}`;
  }
  load() {}

  start() {
    try {
      if (typeof BdApi !== "undefined" && BdApi.DOM && BdApi.DOM.addStyle) {
        BdApi.DOM.addStyle(CSS_ID, FUTURISTIC_CSS);
      }
      if (typeof BdApi !== "undefined" && BdApi.Data && BdApi.Data.load) {
        this.apiKey = BdApi.Data.load("GPTAssistant", "geminiApiKey") || null;
        this.popupSettings = BdApi.Data.load(
          "GPTAssistant",
          "popupSettings"
        ) || { width: "450px", height: null, top: "50%", left: "50%" };
        const loadedCustomPrompt = BdApi.Data.load(
          "GPTAssistant",
          "customPrompt"
        );
        if (
          loadedCustomPrompt !== null &&
          typeof loadedCustomPrompt !== "undefined"
        )
          this.customPrompt = loadedCustomPrompt;
        const savedLang = BdApi.Data.load("GPTAssistant", "language");
        if (savedLang && i18nStrings[savedLang]) this.language = savedLang;
        else {
          this.language = "en";
          if (BdApi.Data.save)
            BdApi.Data.save("GPTAssistant", "language", this.language);
        }
      } else {
        console.error(this.getString("errorLoadingSettings", "en"));
        this.apiKey = null;
        this.popupSettings = {
          width: "450px",
          height: null,
          top: "50%",
          left: "50%",
        };
        this.language = "en";
      }
      this.addButtonToToolbar();
      this.addChatboxButton();
      this.observeMessages();
      console.log(
        `AI Assistant (using ${this.getString(
          "chatPopupTitle"
        )}) plugin started successfully. Language: ${this.language}.`
      );
    } catch (error) {
      console.error(
        `[${this.getString("chatPopupTitle")}] CRITICAL Error in start():`,
        error
      );
      if (typeof BdApi !== "undefined" && BdApi.showToast)
        BdApi.showToast("AI Assistant could not be started. Check console.", {
          type: "error",
        });
    }
  }

  stop() {
    if (this.popup) this.popup.remove();
    if (this.apiKeyPromptModal) this.apiKeyPromptModal.remove();
    if (this.settingsModal) this.settingsModal.remove();
    if (this.observer) this.observer.disconnect();
    if (this.interval) clearInterval(this.interval);
    if (this.chatboxButtonInterval) clearInterval(this.chatboxButtonInterval);
    this.removeButtons();
    document.removeEventListener("mousemove", this.onDragMouseMove);
    document.removeEventListener("mouseup", this.onDragMouseUp);
    if (typeof BdApi !== "undefined" && BdApi.DOM && BdApi.DOM.removeStyle)
      BdApi.DOM.removeStyle(CSS_ID);
  }

  addButtonToToolbar() {
    this.interval = setInterval(() => {
      const toolbar = document.querySelector('[class*="buttons-"]');
      if (toolbar && !toolbar.querySelector(".ai-toolbar-btn")) {
        const btn = document.createElement("button");
        btn.innerText = this.getString("toolbarButtonText");
        btn.className = "ai-toolbar-btn";
        btn.title = this.getString("toolbarButtonTitle");
        btn.style.cssText =
          "margin-left: 8px; padding: 4px 8px; background:#4285F4; color:#fff; border:none; border-radius:4px; cursor:pointer;";
        btn.onclick = () => this.openChatOrPromptKey();
        toolbar.appendChild(btn);
      }
    }, 2000);
  }

  addChatboxButton() {
    this.chatboxButtonInterval = setInterval(() => {
      const chatTextArea = document.querySelector(
        'div[class*="channelTextArea__"]'
      );
      if (!chatTextArea) return;
      const buttonsContainer = chatTextArea.querySelector(
        'div[class*="buttons__"]'
      );
      if (
        buttonsContainer &&
        !buttonsContainer.querySelector(".ai-chatbox-btn")
      ) {
        const btn = document.createElement("button");
        btn.innerHTML = "✨";
        btn.className = "ai-chatbox-btn";
        btn.title = this.getString("chatboxButtonTitle");
        Object.assign(btn.style, {
          background: "transparent",
          border: "none",
          color: "var(--interactive-normal)",
          padding: "0px",
          margin: "0 4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "24px",
          height: "24px",
          cursor: "pointer",
          fontSize: "18px",
        });
        btn.onmouseover = () => (btn.style.color = "var(--interactive-hover)");
        btn.onmouseout = () => (btn.style.color = "var(--interactive-normal)");
        btn.onclick = () => this.openChatOrPromptKey();
        buttonsContainer.prepend(btn);
      }
    }, 1000);
  }

  observeMessages() {
    const MESSAGE_SELECTOR = 'div[class*="message__"][class*="wrapper_"]';
    const CONTENT_SELECTOR = '[class*="messageContent_"]';
    const ACCESSORIES_SELECTOR = '[class*="messageAccessories-"]';
    const BUTTON_CONTAINER_SELECTOR = '[class*="buttonContainer_"]';
    const processNode = (node) => {
      if (node.nodeType !== 1) return;
      let currentMessageElement = null;
      if (typeof node.matches === "function" && node.matches(MESSAGE_SELECTOR))
        currentMessageElement = node;
      else if (typeof node.querySelectorAll === "function") {
        const elements = node.querySelectorAll(MESSAGE_SELECTOR);
        if (elements.length > 0) {
          elements.forEach(addHoverListeners);
          return;
        }
      }
      if (currentMessageElement) addHoverListeners(currentMessageElement);
    };
    const addHoverListeners = (messageElement) => {
      if (
        !messageElement ||
        typeof messageElement.matches !== "function" ||
        messageElement.dataset.aiButtonListenerAttached === "true"
      )
        return;
      messageElement.dataset.aiButtonListenerAttached = "true";
      messageElement.addEventListener("mouseenter", handleMouseEnter);
      messageElement.addEventListener("mouseleave", handleMouseLeave);
    };
    const handleMouseEnter = (event) => {
      const messageElement = event.currentTarget;
      const msgContentEl = messageElement.querySelector(CONTENT_SELECTOR);
      if (!msgContentEl || messageElement.querySelector(".ai-msg-btn")) return;
      const btn = document.createElement("button");
      btn.innerText = this.getString("messageButtonText");
      btn.className = "ai-msg-btn";
      Object.assign(btn.style, {
        position: "absolute",
        right: "5px",
        top: "5px",
        zIndex: "1050",
        background: "#4285F4",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        padding: "3px 7px",
        fontSize: "11px",
        cursor: "pointer",
        boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
      });
      const messageText =
        msgContentEl.innerText || msgContentEl.textContent || "";
      btn.dataset.messageText = messageText;
      btn.onclick = (e) => {
        e.stopPropagation();
        this.openChatPopupWithText(btn.dataset.messageText);
      };
      let appendTarget =
        messageElement.querySelector(ACCESSORIES_SELECTOR) ||
        messageElement.querySelector(BUTTON_CONTAINER_SELECTOR);
      if (!appendTarget && messageElement.style) {
        messageElement.style.position = "relative";
        appendTarget = messageElement;
      }
      if (appendTarget) appendTarget.appendChild(btn);
    };
    const handleMouseLeave = (event) => {
      const messageElement = event.currentTarget;
      const existingBtn = messageElement.querySelector(".ai-msg-btn");
      if (existingBtn) existingBtn.remove();
    };
    this.observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0)
          mutation.addedNodes.forEach(processNode);
      }
    });
    try {
      const chatArea =
        document.querySelector('[class*="chatContent-"]') ||
        document.querySelector('[class*="messagesWrapper-"]');
      if (chatArea)
        this.observer.observe(chatArea, { childList: true, subtree: true });
      else
        this.observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
    } catch (e) {
      console.error(
        `[${this.getString("chatPopupTitle")}] Error starting observer:`,
        e
      );
      try {
        this.observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      } catch (e2) {
        console.error(
          `[${this.getString(
            "chatPopupTitle"
          )}] CRITICAL ERROR: Failed to start observer on document.body in CATCH block:`,
          e2
        );
      }
    }
  }

  _showApiKeyPromptModal(callback) {
    if (this.apiKeyPromptModal) this.apiKeyPromptModal.remove();
    this.apiKeyPromptModal = document.createElement("div");
    this.apiKeyPromptModal.id = "ai-apikey-modal";
    Object.assign(this.apiKeyPromptModal.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.7)",
      zIndex: "10001",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    });
    const modalContent = document.createElement("div");
    modalContent.classList.add("ai-assistant-popup-base");
    Object.assign(modalContent.style, {
      padding: "25px",
      borderRadius: "8px",
      minWidth: "350px",
      maxWidth: "500px",
    });
    modalContent.innerHTML = `
      <h3 style="margin-top:0; margin-bottom:15px; text-align:center;">${this.getString(
        "apiKeyModalTitle"
      )}</h3>
      <p style="font-size:14px; margin-bottom:10px; color:#b9bbbe;">${this.getString(
        "apiKeyModalDesc"
      )}</p>
      <input type="text" id="ai-apikey-input" placeholder="${this.getString(
        "apiKeyModalPlaceholder"
      )}" style="width:calc(100% - 22px); padding:10px; margin-bottom:20px; border-radius:3px; font-size:14px;">
      <div style="display:flex; justify-content:flex-end; gap:10px;">
        <button id="ai-apikey-cancel">${this.getString("cancelButton")}</button>
        <button id="ai-apikey-save">${this.getString(
          "apiKeySaveButton"
        )}</button>
      </div>`;
    this.apiKeyPromptModal.appendChild(modalContent);
    document.body.appendChild(this.apiKeyPromptModal);
    const apiKeyInput =
      this.apiKeyPromptModal.querySelector("#ai-apikey-input");
    apiKeyInput.focus();
    const closeModal = (success) => {
      if (this.apiKeyPromptModal) {
        const innerContent = this.apiKeyPromptModal.querySelector(
          ".ai-assistant-popup-base"
        );
        if (innerContent)
          innerContent.style.animation =
            "ai-modal-content-fade-out 0.25s ease-in forwards";
        this.apiKeyPromptModal.style.backgroundColor = "rgba(0,0,0,0)";
        setTimeout(() => {
          if (this.apiKeyPromptModal) this.apiKeyPromptModal.remove();
          this.apiKeyPromptModal = null;
        }, 250);
      }
      document.removeEventListener("keydown", handleEsc);
      if (callback) callback(success);
    };
    const handleEsc = (event) => {
      if (event.key === "Escape") closeModal(false);
    };
    document.addEventListener("keydown", handleEsc);
    this.apiKeyPromptModal.querySelector("#ai-apikey-save").onclick = () => {
      const userKey = apiKeyInput.value.trim();
      if (userKey) {
        if (typeof BdApi !== "undefined" && BdApi.Data && BdApi.Data.save) {
          BdApi.Data.save("GPTAssistant", "geminiApiKey", userKey);
          this.apiKey = userKey;
          BdApi.UI.showToast
            ? BdApi.UI.showToast(this.getString("apiKeySavedToast"), {
                type: "success",
              })
            : alert(this.getString("apiKeySavedToast"));
          closeModal(true);
        } else {
          alert(this.getString("errorSavingApiKey"));
          closeModal(false);
        }
      } else {
        alert(this.getString("apiKeyEmpty"));
        apiKeyInput.focus();
      }
    };
    this.apiKeyPromptModal.querySelector("#ai-apikey-cancel").onclick = () =>
      closeModal(false);
  }

  _promptForApiKey(callback) {
    this._showApiKeyPromptModal(callback);
  }

  _showSettingsModal() {
    if (this.settingsModal) this.settingsModal.remove();
    this.settingsModal = document.createElement("div");
    this.settingsModal.id = "ai-settings-modal";
    Object.assign(this.settingsModal.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.7)",
      zIndex: "10002",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    });
    const modalContent = document.createElement("div");
    modalContent.classList.add("ai-assistant-popup-base");
    Object.assign(modalContent.style, {
      padding: "25px",
      borderRadius: "8px",
      minWidth: "450px",
      maxWidth: "600px",
    });
    const currentWidth = this.popupSettings.width || "30%";
    const currentHeight = this.popupSettings.height || "Auto";
    const currentCustomPrompt = this.customPrompt;
    modalContent.innerHTML = `
      <h3 style="margin-top:0; margin-bottom:20px; text-align:center;">${this.getString(
        "settingsTitle"
      )}</h3>
      <div style="margin-bottom:15px;"><label style="display:block; margin-bottom:5px; font-size:14px; color:#b9bbbe;">${this.getString(
        "languageLabel"
      )}</label><select id="ai-setting-language" style="width:100%; padding:10px; border-radius:3px; font-size:14px;"><option value="en" ${
      this.language === "en" ? "selected" : ""
    }>${this.getString("languageEnglish")}</option><option value="es" ${
      this.language === "es" ? "selected" : ""
    }>${this.getString("languageSpanish")}</option><option value="fr" ${
      this.language === "fr" ? "selected" : ""
    }>${this.getString("languageFrench")}</option><option value="pt" ${
      this.language === "pt" ? "selected" : ""
    }>${this.getString("languagePortuguese")}</option></select></div>
      <div style="margin-bottom:15px;"><label style="display:block; margin-bottom:5px; font-size:14px; color:#b9bbbe;">${this.getString(
        "googleApiKeyLabel"
      )}</label><button id="ai-setting-change-apikey">${this.getString(
      "changeApiKeyButton"
    )}</button></div>
      <div style="margin-bottom:15px;"><label for="ai-setting-width" style="display:block; margin-bottom:5px; font-size:14px; color:#b9bbbe;">${this.getString(
        "popupWidthLabel"
      )}</label><input type="text" id="ai-setting-width" value="${currentWidth}" placeholder="Ej: 500px o 40%" style="width:calc(100% - 22px); padding:10px; border-radius:3px; font-size:14px;"></div>
      <div style="margin-bottom:15px;"><label for="ai-setting-height" style="display:block; margin-bottom:5px; font-size:14px; color:#b9bbbe;">${this.getString(
        "popupHeightLabel"
      )}</label><input type="text" id="ai-setting-height" value="${currentHeight}" placeholder="Ej: 600px o Auto" style="width:calc(100% - 22px); padding:10px; border-radius:3px; font-size:14px;"></div>
      <div style="margin-bottom:25px;"><label for="ai-setting-customprompt" style="display:block; margin-bottom:5px; font-size:14px; color:#b9bbbe;">${this.getString(
        "customPromptLabel"
      )}</label><textarea id="ai-setting-customprompt" rows="4" placeholder="${this.getString(
      "customPromptPlaceholder"
    )}" style="width:calc(100% - 22px); padding:10px; border-radius:3px; font-size:14px; resize: vertical;">${currentCustomPrompt}</textarea></div>
      <div style="display:flex; justify-content:flex-end; gap:10px;"><button id="ai-settings-cancel">${this.getString(
        "cancelButton"
      )}</button><button id="ai-settings-save">${this.getString(
      "saveChangesButton"
    )}</button></div>`;
    this.settingsModal.appendChild(modalContent);
    document.body.appendChild(this.settingsModal);
    const widthInput = this.settingsModal.querySelector("#ai-setting-width");
    const heightInput = this.settingsModal.querySelector("#ai-setting-height");
    const customPromptInput = this.settingsModal.querySelector(
      "#ai-setting-customprompt"
    );
    const languageSelect = this.settingsModal.querySelector(
      "#ai-setting-language"
    );
    languageSelect.focus();
    const closeSettingsModal = () => {
      if (this.settingsModal) {
        const innerContent = this.settingsModal.querySelector(
          ".ai-assistant-popup-base"
        );
        if (innerContent)
          innerContent.style.animation =
            "ai-modal-content-fade-out 0.25s ease-in forwards";
        this.settingsModal.style.backgroundColor = "rgba(0,0,0,0)";
        setTimeout(() => {
          if (this.settingsModal) this.settingsModal.remove();
          this.settingsModal = null;
        }, 250);
      }
      document.removeEventListener("keydown", handleSettingsEsc);
    };
    const handleSettingsEsc = (event) => {
      if (event.key === "Escape") closeSettingsModal();
    };
    document.addEventListener("keydown", handleSettingsEsc);
    this.settingsModal.querySelector("#ai-setting-change-apikey").onclick =
      () => {
        this._showApiKeyPromptModal((success) => {
          if (success) {
            if (this.popup) {
              this.popup.remove();
              this.popup = null;
              BdApi.UI.showToast
                ? BdApi.UI.showToast(
                    this.getString("apiKeyChangedChatClosed"),
                    { type: "info" }
                  )
                : alert(this.getString("apiKeyChangedChatClosed"));
            } else {
              BdApi.UI.showToast
                ? BdApi.UI.showToast(this.getString("apiKeyChanged"), {
                    type: "success",
                  })
                : alert(this.getString("apiKeyChanged"));
            }
          }
        });
      };
    this.settingsModal.querySelector("#ai-settings-save").onclick = () => {
      const newWidth = widthInput.value.trim();
      const newHeight = heightInput.value.trim();
      const newCustomPrompt = customPromptInput.value.trim();
      const newLanguage = languageSelect.value;
      this.popupSettings.width = newWidth || "30%";
      this.popupSettings.height =
        newHeight.toLowerCase() === "auto" || !newHeight ? null : newHeight;
      this.customPrompt = newCustomPrompt;
      this.language = newLanguage;
      if (
        this.popup &&
        this.popup.style.left &&
        this.popup.style.top &&
        (this.popup.style.left !== "50%" || this.popup.style.top !== "50%")
      ) {
        this.popupSettings.left = this.popup.style.left;
        this.popupSettings.top = this.popup.style.top;
      } else {
        this.popupSettings.left = "50%";
        this.popupSettings.top = "50%";
      }
      if (typeof BdApi !== "undefined" && BdApi.Data && BdApi.Data.save) {
        BdApi.Data.save("GPTAssistant", "popupSettings", this.popupSettings);
        BdApi.Data.save("GPTAssistant", "customPrompt", this.customPrompt);
        BdApi.Data.save("GPTAssistant", "language", this.language);
        BdApi.UI.showToast
          ? BdApi.UI.showToast(this.getString("settingsSavedToast"), {
              type: "success",
            })
          : alert(this.getString("settingsSavedToast"));
      } else {
        alert(this.getString("errorBdApiNotAvailable"));
      }
      if (this.popup) {
        const currentText =
          this.popup.querySelector("#ai-user-input")?.value || "";
        const currentResponse =
          this.popup.querySelector("#ai-response")?.innerText || "";
        this.popup.remove();
        this.popup = null;
        this.showChatPopup(currentText);
        if (this.popup && this.popup.querySelector("#ai-response"))
          this.popup.querySelector("#ai-response").innerText = currentResponse;
      }
      this.updateToolbarButtonText();
      closeSettingsModal();
    };
    this.settingsModal.querySelector("#ai-settings-cancel").onclick =
      closeSettingsModal;
  }

  updateToolbarButtonText() {
    const toolbarBtn = document.querySelector(".ai-toolbar-btn");
    if (toolbarBtn) {
      toolbarBtn.innerText = this.getString("toolbarButtonText");
      toolbarBtn.title = this.getString("toolbarButtonTitle");
    }
    const chatboxBtn = document.querySelector(".ai-chatbox-btn");
    if (chatboxBtn) {
      chatboxBtn.title = this.getString("chatboxButtonTitle");
    }
  }

  openChatOrPromptKey() {
    if (this.apiKey) {
      if (
        typeof BdApi !== "undefined" &&
        BdApi.UI &&
        BdApi.UI.showConfirmationModal
      ) {
        BdApi.UI.showConfirmationModal(
          this.getString("confirmUseExistingKeyTitle"),
          this.getString("confirmUseExistingKeyMessage"),
          {
            confirmText: this.getString("confirmUseExisting"),
            cancelText: this.getString("confirmEnterNew"),
            onConfirm: () => this.showChatPopup(),
            onCancel: () => {
              this._promptForApiKey((success) => {
                if (success) this.showChatPopup();
              });
            },
          }
        );
      } else {
        if (
          confirm(
            `${this.getString(
              "confirmUseExistingKeyMessage"
            )} (OK=${this.getString(
              "confirmUseExisting"
            )}, Cancelar=${this.getString("confirmEnterNew")})`
          )
        ) {
          this.showChatPopup();
        } else {
          this._promptForApiKey((success) => {
            if (success) this.showChatPopup();
          });
        }
      }
    } else {
      this._promptForApiKey((success) => {
        if (success) this.showChatPopup();
      });
    }
  }

  openChatPopupWithText(text) {
    if (!this.apiKey) {
      this._pendingTextForPopup = text;
      this.openChatOrPromptKey();
    } else {
      this.showChatPopup(text);
    }
  }

  onDragMouseDown = (e) => {
    if (e.button !== 0) return;
    let targetElement = e.target;
    while (targetElement && targetElement !== this.popupHeader) {
      if (targetElement.tagName === "BUTTON") return;
      targetElement = targetElement.parentElement;
    }
    if (targetElement !== this.popupHeader) return;
    this.isDragging = true;
    this.dragStartX = e.clientX;
    this.dragStartY = e.clientY;
    this.popupInitialX = this.popup.offsetLeft;
    this.popupInitialY = this.popup.offsetTop;
    this.popup.style.transform = "none";
    document.addEventListener("mousemove", this.onDragMouseMove);
    document.addEventListener("mouseup", this.onDragMouseUp);
    if (this.popupHeader) this.popupHeader.style.cursor = "grabbing";
  };
  onDragMouseMove = (e) => {
    if (!this.isDragging || !this.popup) return;
    e.preventDefault();
    const dx = e.clientX - this.dragStartX;
    const dy = e.clientY - this.dragStartY;
    this.popup.style.left = `${this.popupInitialX + dx}px`;
    this.popup.style.top = `${this.popupInitialY + dy}px`;
  };
  onDragMouseUp = () => {
    if (!this.isDragging) return;
    this.isDragging = false;
    document.removeEventListener("mousemove", this.onDragMouseMove);
    document.removeEventListener("mouseup", this.onDragMouseUp);
    if (this.popupHeader) this.popupHeader.style.cursor = "grab";
    if (
      this.popup &&
      typeof BdApi !== "undefined" &&
      BdApi.Data &&
      BdApi.Data.save
    ) {
      this.popupSettings.left = this.popup.style.left;
      this.popupSettings.top = this.popup.style.top;
      this.popupSettings.width =
        this.popup.style.width || this.popupSettings.width;
      this.popupSettings.height =
        this.popup.style.height || this.popupSettings.height;
      BdApi.Data.save("GPTAssistant", "popupSettings", this.popupSettings);
    }
  };

  showChatPopup(preloadedText = "") {
    if (this._pendingTextForPopup) {
      preloadedText = this._pendingTextForPopup;
      this._pendingTextForPopup = null;
    }
    if (this.popup) this.popup.remove();
    const popup = document.createElement("div");
    this.popup = popup;
    popup.classList.add("ai-assistant-popup-base");
    popup.style.width = this.popupSettings.width || "450px";
    if (
      this.popupSettings.height &&
      this.popupSettings.height !== "Auto" &&
      this.popupSettings.height !== "auto"
    )
      popup.style.height = this.popupSettings.height;
    else popup.style.maxHeight = "80vh";
    let initialLeft = this.popupSettings.left || "50%";
    let initialTop = this.popupSettings.top || "50%";
    let initialTransform =
      initialLeft === "50%" && initialTop === "50%"
        ? "translate(-50%, -50%)"
        : "none";
    Object.assign(popup.style, {
      position: "fixed",
      left: initialLeft,
      top: initialTop,
      transform: initialTransform,
      padding: "20px",
      zIndex: "10000",
      display: "flex",
      flexDirection: "column",
    });
    popup.id = "ai-popup";
    popup.innerHTML = `
      <div id="ai-popup-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-shrink: 0; cursor: grab; user-select: none; padding-bottom:10px;">
        <h3 style="margin: 0; pointer-events: none;">${this.getString(
          "chatPopupTitle"
        )}</h3>
        <div>
          <button id="ai-settings" title="${this.getString(
            "settingsTitle"
          )}">⚙️</button>
          <button id="ai-close" title="${this.getString(
            "cancelButton"
          )}">&times;</button>
        </div>
      </div>
      <textarea id="ai-user-input" rows="5" style="width:100%; box-sizing: border-box; margin-bottom:10px; resize:vertical; border-radius:3px; padding:10px; font-family:inherit; font-size:14px; flex-shrink: 0;" placeholder="${this.getString(
        "chatPopupPlaceholder"
      )}">${preloadedText}</textarea>
      <div style="display:flex; gap:10px; margin-bottom:15px; flex-shrink: 0;">
        <button id="ai-send" style="flex:1; font-size:14px; font-weight:500;">${this.getString(
          "chatPopupSendButton"
        )}</button>
      </div>
      <div id="ai-response-container" style="border-radius:3px; padding:10px; min-height: 50px; flex-grow: 1; overflow-y:auto;">
        <div id="ai-response" style="white-space:pre-wrap; font-size:14px;"></div>
      </div>
      <div style="margin-top: 15px; flex-shrink: 0; text-align: right;">
        <button id="ai-send-to-chatbox" title="${this.getString(
          "chatPopupSendToChatboxButton"
        )}">${this.getString("chatPopupSendToChatboxButton")}</button>
      </div>`;
    document.body.appendChild(popup);
    this.popupHeader = popup.querySelector("#ai-popup-header");
    if (this.popupHeader)
      this.popupHeader.addEventListener("mousedown", this.onDragMouseDown);
    const responseBox = popup.querySelector("#ai-response");
    const inputBox = popup.querySelector("#ai-user-input");
    popup.querySelector("#ai-settings").onclick = () =>
      this._showSettingsModal();
    popup.querySelector("#ai-close").onclick = () => {
      if (this.popup) {
        this.popup.classList.add("closing");
        setTimeout(() => {
          if (this.popup) this.popup.remove();
          this.popup = null;
        }, 300);
      }
    };
    popup.querySelector("#ai-send").onclick = async () => {
      const promptValue = inputBox.value.trim();
      if (!promptValue) return;
      responseBox.innerText = this.getString("chatPopupQuerying");
      responseBox.style.animation = "none";
      void responseBox.offsetWidth;
      responseBox.style.animation = null;
      const aiReply = await this.queryGemini(promptValue);
      responseBox.innerText = aiReply;
      responseBox.style.animation =
        "ai-response-fade-in 0.5s 0.1s ease-out forwards";
    };
    popup.querySelector("#ai-send-to-chatbox").onclick = () => {
      const responseText = responseBox.innerText;
      if (
        responseText &&
        responseText !== this.getString("chatPopupQuerying") &&
        !responseText.startsWith(this.getString("chatPopupErrorPrefix")) &&
        !responseText.startsWith("❌")
      ) {
        this.insertIntoTextArea(responseText);
        BdApi.UI.showToast
          ? BdApi.UI.showToast(this.getString("responseSentToChatboxToast"), {
              type: "success",
            })
          : alert(this.getString("responseSentToChatboxToast"));
      } else if (responseText) {
        BdApi.UI.showToast
          ? BdApi.UI.showToast(this.getString("noValidResponseToSentToast"), {
              type: "error",
            })
          : alert(this.getString("noValidResponseToSentToast"));
      }
    };
    if (preloadedText && inputBox) inputBox.focus();
    else if (inputBox) inputBox.focus();
  }

  async queryGemini(promptText) {
    if (!this.apiKey) return this.getString("chatPopupNoApiKey");
    let fullPrompt = promptText;
    const activeCustomPrompt = this.customPrompt;
    if (activeCustomPrompt && activeCustomPrompt.trim() !== "")
      fullPrompt = `${activeCustomPrompt}\n\nUsuario: ${promptText}`;
    const languageMap = {
      en: "English",
      es: "Español",
      fr: "Français",
      pt: "Português",
    };
    const targetLanguageName = languageMap[this.language];
    if (targetLanguageName)
      fullPrompt += `\n\n(SYSTEM INSTRUCTION: Please respond in ${targetLanguageName}.)`;
    const API_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${this.apiKey}`;
    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: fullPrompt }] }],
          generationConfig: { temperature: 0.7 },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
          ],
        }),
      });
      const responseData = await res.json();
      if (!res.ok) {
        console.error(
          `[${this.getString("chatPopupTitle")}] Gemini API Error:`,
          res.status,
          responseData
        );
        let errorMsg = `${this.getString("chatPopupErrorPrefix")} API Gemini: ${
          res.status
        }`;
        if (responseData.error && responseData.error.message)
          errorMsg += ` - ${responseData.error.message}`;
        else errorMsg += ` - ${res.statusText || "Error desconocido"}`;
        if (responseData.error?.details)
          responseData.error.details.forEach((detail) => {
            if (
              detail["@type"] === "type.googleapis.com/google.rpc.ErrorInfo" &&
              detail.reason
            )
              errorMsg += ` (Razón: ${detail.reason})`;
          });
        if (res.status === 400 && errorMsg.includes("API_KEY_INVALID"))
          errorMsg = this.getString("apiKeyInvalid");
        else if (res.status === 403)
          errorMsg = this.getString("errorPermissionDenied");
        else if (res.status === 429)
          errorMsg = this.getString("errorRateLimit");
        return errorMsg;
      }
      if (
        responseData.candidates?.[0]?.content?.parts?.[0]?.text &&
        typeof responseData.candidates[0].content.parts[0].text === "string"
      )
        return responseData.candidates[0].content.parts[0].text.trim();
      else if (responseData.promptFeedback?.blockReason)
        return `${this.getString("chatPopupBlockedPrefix")} ${
          responseData.promptFeedback.blockReason
        }.`;
      else return this.getString("chatPopupNoValidResponse");
    } catch (e) {
      console.error(
        `[${this.getString(
          "chatPopupTitle"
        )}] Error connecting to Gemini API or parsing response:`,
        e
      );
      return this.getString("chatPopupConnectionError");
    }
  }

  insertIntoTextArea(text) {
    const textarea = document.querySelector(
      'div[class*="slateContainer-"] textarea'
    );
    if (textarea) {
      textarea.focus();
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLTextAreaElement.prototype,
        "value"
      ).set;
      nativeInputValueSetter.call(textarea, text);
      const event = new Event("input", { bubbles: true });
      textarea.dispatchEvent(event);
    } else {
      console.warn(
        `[${this.getString(
          "chatPopupTitle"
        )}] Could not find main chat textarea.`
      );
      BdApi.UI.showToast
        ? BdApi.UI.showToast(this.getString("noValidResponseToSentToast"), {
            type: "error",
          })
        : alert(this.getString("noValidResponseToSentToast"));
    }
  }

  removeButtons() {
    document.querySelectorAll(".ai-toolbar-btn").forEach((btn) => btn.remove());
    document.querySelectorAll(".ai-chatbox-btn").forEach((btn) => btn.remove());
    document.querySelectorAll(".ai-msg-btn").forEach((btn) => btn.remove());
  }
};
