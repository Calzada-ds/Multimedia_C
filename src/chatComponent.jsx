// src/ChatComponent.jsx
import React from "react";
import ChatBubble, { useConvaiClient } from "convai-chatui-sdk";

const ChatComponent = () => {

  /*CREDENCIALES DE PRUEBA
  const characterId = "c2df0b48-252a-11f0-bf51-42010a7be01a";
  const apiKey      = "d7edfc1b440dac9a71b601ecc251e450";
  const { client }  = useConvaiClient(characterId, apiKey);
  */
  const characterId = "928ceae8-2eb5-11f0-b7fa-42010a7be01f";
  const apiKey      = "2e6e0a70922531f3987aba54ac431376";
  const { client }  = useConvaiClient(characterId, apiKey);

  return (
    <div id="convai-root">
      <div className="convai-chatui-container">
        <ChatBubble
          client={client}
          chatHistory="Show"
          chatUiVariant="Sequential Line Chat"
          openOnInit={false}
        />
      </div>
    </div>
  );
};

export default ChatComponent;


/*SEGUIMIENTO DE CAMBIOS EN CSS 

- Se realiza cambio en section:nth-child(odd) styles.css:246
    sustitución:  white --> transparent

- Se realiza cambio en section:nth-child(even) styles.css:250
    sustitución:  --gray-100 --> black
*/
