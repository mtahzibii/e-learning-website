import cookie from 'cookie';

// Log out request
export default async (req, res) => {
 if (req.method === 'POST') {
  // clear cookie
  res.setHeader(
   'Set-Cookie',
   cookie.serialize('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: new Date(0),
    sameSite: 'strict',
    path: '/',
   })
  );

  res.status(200).json({ message: 'Logged out' });
 } else {
  res.setHeader('Allow', ['POST']);
  res.status(405).json({ message: `${req.method} not allowed` });
 }
};
