import { db } from './firebase.js';
import { collection, setDoc, doc } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
import { logAction } from './logger.js';

export async function saveSport(sport) {
  try {
    const ref = doc(db, 'sports_categories', sport.toLowerCase());
    await setDoc(ref, { name: sport });
    logAction('Admin added/updated sport category', sport);
    alert(`Sport category '${sport}' saved!`);
  } catch (error) {
    logAction('Admin failed to save sport category', error.message);
    alert(error.message);
  }
}

export async function saveCity(city) {
  try {
    const ref = doc(db, 'cities', city.toLowerCase());
    await setDoc(ref, { name: city });
    logAction('Admin added/updated city', city);
    alert(`City '${city}' saved!`);
  } catch (error) {
    logAction('Admin failed to save city', error.message);
    alert(error.message);
  }
}

export async function saveArea(area) {
  try {
    const ref = doc(db, 'areas', area.toLowerCase());
    await setDoc(ref, { name: area });
    logAction('Admin added/updated area', area);
    alert(`Area '${area}' saved!`);
  } catch (error) {
    logAction('Admin failed to save area', error.message);
    alert(error.message);
  }
}