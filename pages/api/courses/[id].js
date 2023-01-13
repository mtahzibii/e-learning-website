const { courses } = require('./data.json');

export default (req, res) => {
 const course = courses.filter((crs) => crs.id === req.query.id);

 if (req.method === 'GET') {
  res.status(200).json(course);
 } else {
  res.setHeader('Allow', 'GET');
  res.status(405).json({ message: `${req.method} is not allowed` });
 }
};
