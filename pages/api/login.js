// import { API_URL } from '../../config'
import { NEXT_URL } from '../../config';
import cookie from 'cookie';

export default async (req, res) => {
 if (req.method === 'POST') {
  const { email: identifier, password } = req.body;

  const strapiResponse = await fetch(`http://localhost:1337/api/auth/local`, {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify({ identifier, password }),
  });

  const data = await strapiResponse.json();

  if (strapiResponse.ok) {
   // Set cookie
   res.setHeader(
    'Set-Cookie',
    cookie.serialize('token', data.jwt, {
     httpOnly: true,
     secure: process.env.NODE_ENV !== 'development',
     maxAge: 60 * 60 * 24 * 7, // 1 week
     sameSite: 'strict',
     path: '/',
    })
   );

   res.status(200).json({ user: data.user });
  } else {
   res.status(data.error.status).json({ message: data.error.message });
  }
 } else {
  res.setHeader('Allow', 'POST');
  res.status(405).json({ message: `${req.method} not allowed` });
 }
};
