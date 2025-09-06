Fisheries WebGIS-AI: Solusi Digital untuk UMKM Perikanan Provinsi Sulawesi Tenggara

WebGIS AI untuk memperkuat kinerja UMKM perikanan di Sulawesi Tenggara melalui akses pasar, inklusi keuangan, dan adopsi teknologi digital.

Tujuan Proyek
Proyek ini menjawab tiga masalah utama UMKM perikanan di Sulawesi Tenggara:
1) Asimetri informasi pasar(harga/permintaan tak merata),
2) Rendahnya inklusi keuangan (minim rekam jejak transaksi),
3) Adopsi teknologi digital yang lambat (kurangnya panduan praktis).

Solusi: platform WebGIS-AI yang menggabungkan peta interaktif, analitik prediktif, transaksi digital, dan asisten virtual agar pelaku UMKM:
- menemukan pasar terdekat/terbaik,
- memantau dan memprediksi harga,
- membangun rekam jejak keuangan (via QRIS),
- belajar dan mengambil keputusan berbasis data.

Fitur Utama
- Peta Interaktif 
  Visualisasi lokasi nelayan, TPI, pelabuhan, pusat pengolahan, cold storage, rute distribusi, dan hotspot permintaan.
- Analisis Prediktif AI 
  Prediksi harga ikan menggunakan fitur cuaca (curah hujan, gelombang), pasokan historis, dan musim. Metrik evaluasi: MAE/RMSE/SMAPE.
- Integrasi QRIS
  Pencatatan transaksi digital untuk membangun rekam jejak keuangan UMKM (volume transaksi, frekuensi, AOV).
- Chatbot Asisten Virtual  
  Tanya-jawab literasi digital/keuangan, rekomendasi rute distribusi, dan tips kualitas pascapanen.

Teknologi yang Digunakan
Frontend
- React (Vite/Next.js), Mapbox GL JS atau MapLibre GL JS, Tailwind CSS
- State: React Query/Zustand; Charting: Recharts

Backend (Menyusul)
- Python: FastAPI (alternatif: Django/Flask)
- Database spasial: PostgreSQL + PostGIS
- GeoServer untuk publikasi layer geospasial (WMS/WFS/WC*S)
- Message/Task (opsional): Celery + Redis
- Kontainerisasi & orkestrasi: Docker & docker-compose

Prasyarat
- Node.js ≥ 18, pnpm/yarn/npm
- Python ≥ 3.10, pip/uv
- Docker & docker-compose
- Mapbox token (jika pakai Mapbox GL JS) atau gunakan MapLibre (tanpa token)
