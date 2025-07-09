import express from 'express';
import ContactMessage from './ContactMessage.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();

    console.log(`New message from portfolio: ${name} (${email})`);

    res.status(200).json({ success: true, message: 'Message received!' });
  } catch (error) {
    console.error('Failed to save message:', error);
    res.status(500).json({ success: false, message: 'Failed to receive message' });
  }
});

router.get('/', async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ date: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch messages' });
  }
});

export default router;
