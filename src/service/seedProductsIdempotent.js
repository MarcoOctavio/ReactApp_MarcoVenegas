// src/services/seedProductsIdempotent.js
import { db } from '../service/firebase';
import { collection, query, where, getDocs, addDoc, updateDoc, serverTimestamp } from 'firebase/firestore';

const normalizeCategory = (raw) => {
  const v = (raw || '').toString().toLowerCase();
  if (v === 'top10') return 'top10';
  const allowed = ['cerveza', 'hidromiel', 'sidra', 'vino'];
  if (allowed.includes(v)) return v;
  return v.replace(/\s+/g, '-');
};

export async function seedProductsIdempotent(productos) {
  const col = collection(db, 'products');

  for (const p of productos) {
    const category = normalizeCategory(p.category);
    const payload = {
      name: p.name,
      description: p.description,
      price: Number(p.price),
      stock: Number(p.stock),
      category,
      categorySlug: category,
      img: p.img ?? '',
      active: true,
      sku: p.id ?? null,
      updatedAt: serverTimestamp(),
    };

    // busca por sku
    const q = query(col, where('sku', '==', p.id ?? null));
    const snap = await getDocs(q);

    if (snap.empty) {
      await addDoc(col, { ...payload, createdAt: serverTimestamp() }); // crea nuevo (auto-ID)
    } else {
      // actualiza el primero que coincida
      const docRef = snap.docs[0].ref;
      await updateDoc(docRef, payload);
    }
  }
}
