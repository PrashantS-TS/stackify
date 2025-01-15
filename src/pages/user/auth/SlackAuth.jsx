import React from 'react'
import { useLocation } from 'react-router-dom';
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

const SlackAuth = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const fetchToken = async () => {
    try {
      const response = await fetch('https://login.microsoftonline.com/common/oauth2/v2.0/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_SLACK_BOT_TOKEN}`
        },
        body: {
          'client_id': clientId,
          'client_secret': clientSecret,
          'code': queryParams.get('code'),
          'redirect_uri': 'https://stackify.vercel.app/user/slack',
          // 'grant_type'=authorization_code,
        }
      });

      const data = await response.json();
      if (response.ok) console.log('Token response:', data);
      else console.error('Error response:', data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchToken();
  }, [])

  return (
    <div>Slack Loading</div>
  )
}

export default SlackAuth