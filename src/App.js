import { useEffect } from 'react';
import { queryParams, renderBotWidget } from 'utils';

import 'styles/globals.css';

const App = () => {
  const params = [
    'id',
    'botName',
    'botBackground',
    'userBackground',
    'userTextColor',
    'botTextColor',
  ].reduce((prev, acc) => {
    prev[acc] = queryParams.get(acc);
    return prev;
  }, {})

  useEffect(() => {
    if (params.id) {
      renderBotWidget({
        botId: params.id,
        botName: params.botName,
        botBackground: params.botBackground,
        userBackground: params.userBackground,
        botTextColor: params.botTextColor,
        userTextColor: params.userTextColor,
      });
    } else {
      alert('Missing bot id on query params! E.g http://myurl.com?id=YOUR_BOT_ID');
    }
  }, [params]);
};

export default App;
