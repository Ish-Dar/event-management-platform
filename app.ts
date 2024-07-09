import express from 'express';
import { addEvent, updateEvent, deleteEvent, getEventById, listEvents } from './controllers/eventController';

const app = express();
app.use(express.json());

app.post('/events', addEvent);
app.put('/events/:id', updateEvent);
app.delete('/events/:id', deleteEvent);
app.get('/events/:id', getEventById);
app.get('/events', listEvents);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
