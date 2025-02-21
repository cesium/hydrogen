import axios from 'axios';
import  { type Event } from "@/lib/types"

const getEvents = async () => {
    try {
        const response = await axios.get<Event[]>('https://calendario.cesium.di.uminho.pt/api/transfer/events?filterId=-1&groupId=0&groupId=7&groupId=9&groupId=10&groupId=11&groupId=12');
        response.data.forEach(event => {
            event.end = new Date(event.end);
            event.start = new Date(event.start);
        });
        return Array.isArray(response.data) ? response.data : [response.data];
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};

export default getEvents;