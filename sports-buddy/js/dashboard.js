import { db } from './firebase.js';
import { collection, addDoc, Timestamp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
import { logAction } from './logger.js';

export async function addEvent(eventData) {
  try {
    await addDoc(collection(db, "sports_events"), {
      ...eventData,
      timestamp: Timestamp.fromDate(new Date(eventData.time))
    });
    logAction("User added new event", JSON.stringify(eventData));
    alert("Event successfully added!");
  } catch (error) {
    logAction("Failed to add event", error.message);
    alert(error.message);
  }
}