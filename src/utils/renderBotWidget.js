import { waitForElement } from '.';

export default function renderBotWidget({
  botId,
  botName,
  botBackground,
  userBackground,
  userTextColor,
  botTextColor,
}) {
  window.renderBotWidget(botId);
  
  // user-text-color
  if (userTextColor) {
    document.documentElement.style.setProperty('--user-text-color', `#${userTextColor}`);
  }

  // bot-text-color
  if (botTextColor) {
    document.documentElement.style.setProperty('--bot-text-color', `#${botTextColor}`);
  }

  // bot-bg-color
  waitForElement('.code7-boteria-bot-widget-chat-message').then((elm) => {
    if (botBackground) {
      document.documentElement.style.setProperty('--bot-background', `#${botBackground}`);
    } else {
      document.documentElement.style.setProperty('--bot-background', elm.style.backgroundColor);
    }
  });

  // user-bg-color
  waitForElement('#code7-boteria-bot-widget-chat-header').then((elm) => {
    if (userBackground) {
      document.documentElement.style.setProperty('--user-background', `#${userBackground}`);
    } else {
      document.documentElement.style.setProperty('--user-background', elm.style.backgroundColor);
    }
  })

  waitForElement('#code7-boteria-bot-widget-image-faq').then(() => window.toggleChat());

  // bot-name
  waitForElement('#code7-boteria-bot-headerBotNome').then(() => {
    if (botName) 
      document.getElementById('code7-boteria-bot-headerBotNome').textContent = botName;
  })
}
