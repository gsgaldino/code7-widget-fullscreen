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

  if (botBackground) {
    document.documentElement.style.setProperty('--bot-background', `#${botBackground}`);
  }

  if (userBackground) {
    document.documentElement.style.setProperty('--user-background', `#${userBackground}`);
  }
  
  if (userTextColor) {
    document.documentElement.style.setProperty('--user-text-color', `#${userTextColor}`);
  }

  if (botTextColor) {
    document.documentElement.style.setProperty('--bot-text-color', `#${botTextColor}`);
  }


  waitForElement('#code7-boteria-bot-widget-image-faq').then(() => window.toggleChat());
  waitForElement('#code7-boteria-bot-headerBotNome').then(() => {
    document.getElementById('code7-boteria-bot-headerBotNome').innerHTML = botName;
  })
}
