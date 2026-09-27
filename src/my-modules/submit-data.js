import {addDoc,collection} from "firebase/firestore";

export const submitData = async (e,db) => {
    e.preventDefault();

    const formData = new FormData(e.target);
  try {
    const docRef = await addDoc(collection(db, "reports"), {
      date: formData.get("date"),
      name: formData.get("name"),
      work: formData.get("work"),
      comment: formData.get("comment")
    });
    console.log("Document written with ID: ", docRef.id);
   } catch (e) {
    console.error("Error adding document: ", e);
   }
  };

console.log("typeof addDoc:", typeof addDoc);
console.log("typeof collection:", typeof collection);
console.log("db:", db);