import { db } from './firebaseConfig';
import { collection, addDoc, getDocs, query, where, serverTimestamp } from "firebase/firestore";

// Save a newly analyzed report to the database
export const saveReportData = async (userId, reportTitle, score, riskLevel, insights) => {
  try {
    const docRef = await addDoc(collection(db, "reports"), {
      userId,
      title: reportTitle,
      score,
      riskLevel,
      insights,
      createdAt: serverTimestamp()
    });
    return { id: docRef.id, error: null };
  } catch (error) {
    return { id: null, error: error.message };
  }
};

// Fetch all reports for a specific patient/user
export const getUserReports = async (userId) => {
  try {
    const q = query(collection(db, "reports"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const reports = [];
    querySnapshot.forEach((doc) => {
      reports.push({ id: doc.id, ...doc.data() });
    });
    return { reports, error: null };
  } catch (error) {
    return { reports: [], error: error.message };
  }
};
