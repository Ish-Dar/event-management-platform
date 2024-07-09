import { Request, Response } from 'express';
import { Event } from '../models/event';
import { v4 as uuidv4 } from 'uuid';

const events: Event[] = [];

export const addEvent = (req: Request, res: Response) => {
    const newEvent: Event = {
        ...req.body,
        id: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date()
    };
    events.push(newEvent);
    res.status(201).json(newEvent);
};

export const updateEvent = (req: Request, res: Response) => {
    const { id } = req.params;
    const index = events.findIndex(event => event.id === id);
    if (index !== -1) {
        events[index] = { ...events[index], ...req.body, updatedAt: new Date() };
        res.status(200).json(events[index]);
    } else {
        res.status(404).json({ message: "Event not found" });
    }
};

export const deleteEvent = (req: Request, res: Response) => {
    const { id } = req.params;
    const index = events.findIndex(event => event.id === id);
    if (index !== -1) {
        const deletedEvent = events.splice(index, 1);
        res.status(200).json(deletedEvent[0]);
    } else {
        res.status(404).json({ message: "Event not found" });
    }
};

export const getEventById = (req: Request, res: Response) => {
    const { id } = req.params;
    const event = events.find(event => event.id === id);
    if (event) {
        res.status(200).json(event);
    } else {
        res.status(404).json({ message: "Event not found" });
    }
};

export const listEvents = (req: Request, res: Response) => {
    const { eventName, organizer, city, state } = req.query;
    let filteredEvents = events;

    if (eventName) {
        filteredEvents = filteredEvents.filter(event => event.eventName.includes(eventName as string));
    }
    if (organizer) {
        filteredEvents = filteredEvents.filter(event => event.organizer.includes(organizer as string));
    }
    if (city) {
        filteredEvents = filteredEvents.filter(event => event.location.city.includes(city as string));
    }
    if (state) {
        filteredEvents = filteredEvents.filter(event => event.location.state.includes(state as string));
    }

    res.status(200).json(filteredEvents);
};
