export default async (req, res) => {
 console.log(req.body);
 if (req.method === 'POST') {
  console.log(req.body);
  const strapiResponse = await fetch('http://localhost:1337/api/orders', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(req.body),
  });

  const data = await strapiResponse.json();

  // console.log(data);

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
