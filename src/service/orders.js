import { db } from '../service/firebase';
import { addDoc, collection, doc, getDoc, serverTimestamp } from 'firebase/firestore';

export async function createOrder(order) {
  const payload = {
    ...order,
    status: 'created',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
  const ref = await addDoc(collection(db, 'orders'), payload);
  return ref.id;
}

export async function getOrderById(orderId) {
  const snap = await getDoc(doc(db, 'orders', orderId));
  if (!snap.exists()) throw new Error('Orden no encontrada');
  return { id: snap.id, ...snap.data() };
}
