import { useState, useEffect } from "react";
import { appFirestore } from "../firebase/config";

//collection == images > we will get the documents from
const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  //communicate with database (inside useEffect == to re-run with the docs change) to get docs
  useEffect(() => {
    //after all is done it return a func <<unsub>> can used to un subscribe from the collection
    //need to do that if we unmount ImageGrid component
    //onSnapshot >> fire a callback function everytime a change occurs inside this collection and at first
    const unsub = appFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        //snap obj represent a snapshot at that moment in the time of the db collection
        //take a snapshot of the collection and see all the docs at that moment in the time
        //snap contain docs === with every update it takes a snapshot === real-time listening
        console.log(snap);
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    //unsubscribe from the collection if we don't use it
    return () => unsub();
  }, [collection]);
  return { docs };
};

export default useFirestore;
