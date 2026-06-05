import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";

import {
  db,
} from "../firebase/firebase";

export const saveTrip =
  async (
    tripData
  ) => {
    return addDoc(
      collection(
        db,
        "trips"
      ),
      tripData
    );
  };

  export const getTrips =
  async (
    userId
  ) => {
    const q = query(
      collection(
        db,
        "trips"
      ),
      where(
        "userId",
        "==",
        userId
      )
    );

    const snapshot =
      await getDocs(q);

    return snapshot.docs.map(
      (doc) => ({
        id: doc.id,
        ...doc.data(),
      })
    );
  };

  export const deleteTrip =
  async (
    tripId
  ) => {
    return deleteDoc(
      doc(
        db,
        "trips",
        tripId
      )
    );
  };

  