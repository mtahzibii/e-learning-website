export default async (req, res) => {
 if (req.method === 'POST') {
  const strapiResponse = await fetch('http://localhost:1337/api/orders', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(req.body),
  });

  const data = await strapiResponse.json();
  console.log(data);

  if (strapiResponse.ok) {
   res.status(200).json(data);
  } else {
   res.status(405).json({ message: 'something went wrong' });
  }
 } else {
  res.setHeader('Allow', ['GET']);
  res.status(405).json({ message: `${req.method} not allowedsss` });
 }
};
