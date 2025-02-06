import axios from 'axios';
import  { type Event } from "@/lib/types"

const getEvents = async () => {
    try {
        const response = await axios.get<Event[]>('https://calendario.cesium.di.uminho.pt/api/transfer/events');
        return Array.isArray(response.data) ? response.data : [response.data];
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};

export default getEvents;