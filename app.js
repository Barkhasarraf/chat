const jonySelectorBtn = document.querySelector('#jony-selector')
const jemmySelectorBtn = document.querySelector('#jemmy-selector')
const chatHeader = document.querySelector('.chat-header')
const chatMessages = document.querySelector('.chat-messages')
const chatInputForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')
const clearChatBtn = document.querySelector('.clear-chat-button')

const message = []

const createchatMessageElement = (message) => 
        `<div class="message ${message.sender === 'jony' ? 'blue-bg' : 'gray-bg'}">
<div class="message-sender">${message.sender}</div>
<div class="message-text">${message.text}</div>
<div class="message-timestamp">${message.timestamp}</div>
</div>`

    
let messageSender = 'jony'

const updateMessageSender = (name) =>  {
     messageSender = name
     chatHeader.innerText =`${messageSender} chatting...`
     chatInput.placeholder = `Type here, ${messageSender}...`


     if (name === 'jony') {
        jonySelectorBtn.classList.add('active-person')
        jemmySelectorBtn.classList.remove('active-person')
     }

     if (name === 'jemmy') {
        jonySelectorBtn.classList.remove('active-person')
        jemmySelectorBtn.classList.add('active-person')
     }
     chatInput.focus()
    }
jonySelectorBtn.onclick = () => updateMessageSender('jony')
jemmySelectorBtn.onclick = () => updateMessageSender('jemmy')

const sendMessage = (e) => {
    e.preventDefault()

    const timestamp = new Date().toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})
    const message = {
        sender: messageSender,
        text: chatInput.value,
        timestamp,
    }

    
    
    localStorage.setItem(`messages`,JSON.stringify(message))
    chatMessages.innerHTML += createchatMessageElement(message)

    chatInputForm.reset()
    chatMessages.scrollTop = chatMessages.scrollHeight
}

 
chatInputForm.addEventListener('submit',sendMessage);




