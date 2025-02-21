class VoiceShopper extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                #chat-container {
                    width: 300px; height: 400px; 
                    border: 1px solid #ccc; 
                    display: flex; flex-direction: column; 
                    position: fixed; bottom: 20px; right: 20px; 
                    background: white; padding: 10px; border-radius: 10px;
                }
                #messages { flex-grow: 1; overflow-y: auto; padding: 10px; }
                #input-container { display: flex; padding: 5px; }
                #input { flex-grow: 1; padding: 5px; }
                button { background: #007bff; color: white; border: none; padding: 5px 10px; cursor: pointer; }
            </style>
            <div id="chat-container">
                <div id="messages"></div>
                <div id="input-container">
                    <input type="text" id="input" placeholder="Type a message...">
                    <button id="send-btn">Send</button>
                </div>
            </div>
        `;

        this.messagesContainer = this.shadowRoot.querySelector("#messages");
        this.inputField = this.shadowRoot.querySelector("#input");
        this.sendButton = this.shadowRoot.querySelector("#send-btn");

        this.sendButton.addEventListener("click", () => this.sendMessage());
    }

    sendMessage() {
        const message = this.inputField.value.trim();
        if (!message) return;
        this.displayMessage("You", message);
        this.inputField.value = "";
    }

    displayMessage(sender, message) {
        const msgElement = document.createElement("p");
        msgElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        this.messagesContainer.appendChild(msgElement);
    }
}

customElements.define("chat-widget", VoiceShopper);