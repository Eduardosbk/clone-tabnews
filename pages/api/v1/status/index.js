function status(req, res) {
  res.status(200).json({ message: 'Tudo funcionando' });
}

export default status;