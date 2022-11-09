import { useEffect } from 'react';
import { queryParams, renderBotWidget } from 'utils';

import 'styles/globals.css';

const App = () => {
  const params = [
    'id',
    'bot-name',
    'bot-bg-color',
    'user-bg-color',
    'user-text-color',
    'bot-text-color',
  ].reduce((prev, acc) => {
    prev[acc] = queryParams.get(acc);
    return prev;
  }, {})

  useEffect(() => {
    if (params.id) {
      renderBotWidget({
        botId: params.id,
        botName: params['bot-name'],
        botBackground: params['bot-bg-color'],
        userBackground: params['user-bg-color'],
        botTextColor: params['bot-text-color'],
        userTextColor: params['user-text-color'],
      });
    } else {
      alert('Missing bot id on query params! E.g http://myurl.com?id=YOUR_BOT_ID');
    }
  }, [params]);
};

export default App;
