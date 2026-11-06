import axios from "axios";
import { type Event } from "@/lib/types";

const getEvents = async () => {
  try {
    const response = await axios.get<{ events: Event[] }>(
      `${process.env.ATLAS_API_URL}/v1/public/events`,
    );
    const events = response.data.events ?? [];
    events.forEach((event) => {
      event.end = new Date(event.end);
      event.start = new Date(event.start);
    });
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

export default getEvents;
