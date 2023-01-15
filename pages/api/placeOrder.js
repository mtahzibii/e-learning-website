import { API_URL } from '../../config';

export default async (req, res) => {
 const { user, course } = req.body;
 if (req.method === 'POST') {
  const token = cookie.parse(req ? req.headers.cookie || '' : '');

  const strapiResponse = await fetch(`${API_URL}/api/orders`, {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
   },
   body: JSON.stringify({ user, course }),
  });

  const data = await strapiResponse.json();

  if (strapiResponse.ok) {
   res.status(200).json(data);
  } else {
   res.status(405).json({ message: 'something went wrong' });
  }
 } else {
  res.setHeader('Allow', ['POST']);
  res.status(405).json({ message: `Method ${req.method} not allowedsss` });
 }
};
