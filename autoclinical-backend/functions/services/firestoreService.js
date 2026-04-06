const { db } = require("../config/firebase.config");

// Get a single document
const getDoc = async (collection, docId) => {
  const doc = await db.collection(collection).doc(docId).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
};

// Get all documents in a collection with optional filter
const getDocs = async (collection, field, value) => {
  let query = db.collection(collection);
  if (field && value) {
    query = query.where(field, "==", value);
  }
  const snap = await query.get();
  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Add a new document
const addDoc = async (collection, data) => {
  const ref = await db.collection(collection).add({
    ...data,
    createdAt: new Date().toISOString()
  });
  return ref.id;
};

// Update a document
const updateDoc = async (collection, docId, data) => {
  await db.collection(collection).doc(docId).update(data);
  return true;
};

// Delete a document
const deleteDoc = async (collection, docId) => {
  await db.collection(collection).doc(docId).delete();
  return true;
};

module.exports = { getDoc, getDocs, addDoc, updateDoc, deleteDoc };
