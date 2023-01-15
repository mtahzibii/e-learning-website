import { API_URL } from '../../config';
import cookie from 'cookie';
import { API_URL } from '../../config';

// Get request to authorize user
export default async (req, res) => {
 if (req.method === 'GET') {
  if (!req.headers.cookie) {
   res.status(403).json({ message: 'Not Authorized' });
   return;
  }
  const { token } = cookie.parse(req.headers.cookie);

  const strapiResponse = await fetch(`${API_URL}/api/users/me`, {
   method: 'GET',
   headers: {
    Authorization: `Bearer ${token}`,
   },
  });

  const user = await strapiResponse.json();
  if (strapiResponse.ok) {
   res.status(200).json({ user });
  } else {
   res.status(403).json({ message: 'User forbidden' });
  }
 } else {
  res.setHeader('Allow', ['GET']);
  res.status(405).json({ message: `${req.method} not allowed` });
 }
};
