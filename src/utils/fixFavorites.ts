import {collection, doc, getDocs, updateDoc} from 'firebase/firestore';
import {db} from '../config/firebase';

/**
 * Tüm ürünlerin favoriteCount değerlerini sıfırla
 * Console'dan çalıştırın: resetFavorites()
 */
export const resetFavorites = async () => {
    try {
        console.log('🔧 Favori sayaçları sıfırlanıyor...');

        const productsSnapshot = await getDocs(collection(db, 'products'));
        let updatedCount = 0;

        for (const productDoc of productsSnapshot.docs) {
            await updateDoc(doc(db, 'products', productDoc.id), {
                favoriteCount: 0
            });
            updatedCount++;
            console.log(`✅ ${productDoc.id} favoriteCount = 0`);
        }

        console.log(`✨ Tamamlandı! ${updatedCount} ürünün favori sayısı sıfırlandı.`);
        console.log('📊 Şimdi bir ürünü favorilere ekleyin ve sayacın arttığını görün!');
    } catch (error) {
        console.error('❌ Hata:', error);
    }
};

// Development modunda global olarak ekle
if (import.meta.env.DEV) {
    window.resetFavorites = resetFavorites;
    console.log('🔧 Favori sayaçlarını sıfırlamak için: resetFavorites()');
}
