import heroFeature from "@/assets/hero-feature.jpg";
import portrait from "@/assets/portrait.jpg";
import workLumen from "@/assets/work-lumen.jpg";
import workPulse from "@/assets/work-pulse.jpg";
import workSolace from "@/assets/work-solace.jpg";
import workCadence from "@/assets/work-cadence.jpg";

import type {
  Project,
  ServicePackage,
  WorkflowStep,
  FAQItem,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  BlogPost,
  Testimonial,
} from "@/types/portfolio";

export const PERSONAL_INFO = {
  name: "Chandra Apriyanto",
  fullName: "Chandra Apriyanto",
  role: "Fullstack Web & Mobile Developer",
  location: "Indramayu, Jawa Barat",
  phone: "0895-3789-67621",
  whatsapp: "+62895378967621",
  whatsappUrl:
    "https://wa.me/62895378967621?text=Halo%20Chandra%20Apriyanto,%20saya%20tertarik%20untuk%20diskusi%20proyek%20aplikasi%20web/mobile",
  email: "apriyantochandra823@gmail.com",
  github: "https://github.com/chandraapriyanto",
  linkedin: "https://linkedin.com/in/chandra-apriyanto",
  instagram: "https://instagram.com/chandraapriyanto",
  calendly: "https://calendly.com/chandraapriyanto/30min",
  cvFile: "/Chandra-Apriyanto-CV.pdf",
  positioning:
    "Fullstack Web & Mobile Developer yang fokus membangun backend Laravel, REST API, dan basis data PostgreSQL/MySQL yang reliabel — dari sistem pendukung keputusan hingga aplikasi layanan skala industri.",
  summary:
    "Lulusan D4 Rekayasa Perangkat Lunak dari Politeknik Negeri Indramayu (POLINDRA) dengan rekam jejak mengerjakan 5 proyek sistem web dan mobile sejak 2023. Menguasai arsitektur backend Laravel, perancangan skema PostgreSQL dan MySQL, implementasi REST API, integrasi payment gateway, hingga algoritma Simple Additive Weighting (SAW). Berawal dari latar belakang kejuruan mekanis (SMK TKR), saya membawa ketelitian teknis, disiplin analisis masalah, dan komitmen tinggi pada kualitas kode dalam setiap proyek.",
  availability: "Terbuka untuk posisi Full-time, Kontrak & Proyek Freelance",
  portraitImage: portrait,
  heroImage: heroFeature,
};

export const HIGHLIGHT_STATS = [
  { value: "5 Sistem", label: "Aplikasi Web & Mobile", sub: "Proyek Nyata & Magang Industri" },
  { value: "8 Kriteria", label: "Metode SAW Multi-Kriteria", sub: "Proyek Akhir D4 RPL POLINDRA" },
  { value: "PostgreSQL", label: "Database Relasional & Cloud", sub: "Supabase, MySQL & DBeaver" },
  { value: "ACID & API", label: "Payment Gateway & REST API", sub: "Keamanan Transaksi & Webhook" },
];

export const WORK_PRINCIPLES = [
  {
    number: "01",
    title: "Struktur Bersih & Terpisah (Separation of Concerns)",
    description:
      "Memisahkan logika bisnis ke dalam dedicated Service Classes dan Repository Pattern agar controller tetap ramping, kode mudah dibaca, serta memudahkan penulisan unit test.",
  },
  {
    number: "02",
    title: "Integritas Data & Transaksi Atomik (ACID)",
    description:
      "Merancang skema database yang ternormalisasi dengan foreign keys yang tepat, serta selalu membungkus pemrosesan finansial dan pembaruan multi-tabel dalam database transactions.",
  },
  {
    number: "03",
    title: "Solusi Praktis Berorientasi Pengguna",
    description:
      "Aplikasi terbaik adalah aplikasi yang benar-benar memecahkan masalah di lapangan. Saya memprioritaskan antarmuka yang cepat, responsif di ponsel/tablet, dan minim gesekan bagi operator.",
  },
  {
    number: "04",
    title: "Kedisiplinan Version Control & Tim",
    description:
      "Terbiasa menerapkan branching model Git yang rapi, pesan commit yang deskriptif dan terstruktur, serta koordinasi kontrak REST API yang jelas saat berkolaborasi lintas divisi.",
  },
];

export const FUN_FACTS = [
  {
    icon: "⚽",
    fact: "Penggemar sepak bola & taktik lapangan — Mengagumi peran playmaker nomor 10 yang membaca ruang, mengatur tempo, dan menghubungkan lini. Filosofi visi dan distribusi bola ini saya terapkan saat merancang arsitektur data sistem.",
  },
  {
    icon: "🔧",
    fact: "Alumni SMK Teknik Kendaraan Ringan — Pengalaman membongkar mesin mekanis melatih logika diagnosis sistem yang terstruktur, teliti hingga ke detail terkecil, dan tahan banting saat debugging error.",
  },
  {
    icon: "💻",
    fact: "Eksplorasi Mikrokontroler & Simulasi Wokwi — Senang merangkai logika IoT virtual (ESP32/Arduino) di waktu luang untuk mengamati komunikasi data sensor secara real-time.",
  },
  {
    icon: "📱",
    fact: "Antusias dengan Flutter & Dart — Menikmati fleksibilitas membangun antarmuka mobile multi-platform untuk Android dan iOS dengan satu basis kode yang efisien.",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "spk-ukt-mahasiswa-baru",
    title: "Sistem Pendukung Keputusan Penentuan UKT Mahasiswa Baru",
    tagline: "Sistem Pengambilan Keputusan Multi-Kriteria Metode Simple Additive Weighting (SAW)",
    category: "SPK & Algoritma",
    client: "Proyek Akhir — Politeknik Negeri Indramayu (POLINDRA)",
    year: "2026",
    duration: "Februari — Juni 2026",
    role: "Fullstack Developer",
    team: "Proyek Akhir Mandiri (POLINDRA)",
    stack: ["Laravel", "PHP", "PostgreSQL", "Supabase", "REST API", "Tailwind CSS", "JavaScript"],
    thumbnail: workPulse,
    featured: true,
    metrics: ["8 Kriteria Penilaian", "Komputasi SAW <100ms", "32 Kasus Uji Validasi"],
    summary:
      "Membangun sistem pendukung keputusan berbasis web menggunakan Laravel dan PostgreSQL (Supabase) dengan metode Simple Additive Weighting (SAW) untuk menentukan golongan UKT mahasiswa baru secara transparan, terukur, dan objektif.",
    liveUrl: "https://spk-ukt-polindra.demo.app",
    repoUrl: "https://github.com/chandraapriyanto/spk-ukt-saw-laravel",
    caseStudy: {
      overview:
        "Penentuan Uang Kuliah Tunggal (UKT) mahasiswa baru di perguruan tinggi merupakan proses krusial yang melibatkan ribuan berkas pendaftar. Setiap tahunnya, tim verifikasi harus mengevaluasi berbagai indikator ekonomi keluarga calon mahasiswa untuk menentukan kelompok UKT yang adil.",
      problem:
        "Proses verifikasi manual menggunakan spreadsheet memakan waktu hingga dua minggu dan rentan terhadap inkonsistensi penilaian subjektif antar-petugas saat membandingkan kriteria benefit (seperti jumlah tanggungan) dan kriteria cost (seperti penghasilan orang tua).",
      objectives: [
        "Menerapkan algoritma Simple Additive Weighting (SAW) pada backend Laravel untuk normalisasi matriks dan perangkingan otomatis.",
        "Merancang skema database relasional di PostgreSQL (Supabase) yang mampu menampung riwayat perhitungan dan data kriteria dinamis.",
        "Menyediakan dashboard analitik real-time agar verifikator dapat memantau sebaran pendaftar dari golongan UKT 1 hingga 8.",
        "Membuat antarmuka responsif dengan Tailwind CSS agar proses verifikasi berkas dapat dilakukan dengan nyaman di desktop maupun tablet.",
      ],
      process: [
        {
          step: "01",
          title: "Formulasi Matematika & Kategori Kriteria",
          description:
            "Mengelompokkan 8 parameter ekonomi ke dalam kriteria 'Benefit' (jumlah tanggungan, tanggungan PBB) dan 'Cost' (penghasilan ayah/ibu, daya listrik, luas bangunan, tagihan air), serta menetapkan matriks bobot preferensi (W).",
        },
        {
          step: "02",
          title: "Perancangan Database PostgreSQL di Supabase",
          description:
            "Menyusun tabel pendaftar, kriteria, nilai bobot, dan hasil perangkingan dengan relasi foreign key yang ketat serta indeks pada kolom query utama.",
        },
        {
          step: "03",
          title: "Implementasi Service Layer Algoritma di Laravel",
          description:
            "Membuat kelas SAWCalculationService terisolasi untuk menghitung nilai normalisasi matriks R, perkalian bobot W, serta penentuan rentang skor golongan UKT secara instan.",
        },
        {
          step: "04",
          title: "Pembangunan Dashboard Frontend Responsif",
          description:
            "Mengembangkan visualisasi tabel matriks keputusan dan grafik distribusi golongan UKT menggunakan Tailwind CSS dan JavaScript interaktif.",
        },
        {
          step: "05",
          title: "Validasi & Uji Banding 32 Skenario",
          description:
            "Melakukan pengujian komparatif antara keluaran sistem dan perhitungan manual pada 32 sampel berkas pendaftar untuk memastikan kesesuaian formula.",
        },
      ],
      technicalDecisions: [
        {
          decision: "Komputasi Algoritma Dilakukan di Backend Service Layer",
          reason:
            "Mencegah manipulasi formula atau nilai bobot dari sisi browser pendaftar serta menjaga integritas kalkulasi nilai preferensi.",
          alternative: "Kalkulasi client-side JavaScript (rentan diubah melalui inspect element browser).",
        },
        {
          decision: "Penggunaan PostgreSQL di Platform Supabase",
          reason:
            "Menyediakan constraint relasi data yang kuat, performa query SQL analitik yang cepat, dan kemudahan backup data di cloud.",
          alternative: "MySQL lokal (dipilih PostgreSQL Supabase untuk kemudahan integrasi cloud hosting).",
        },
      ],
      keyFeatures: [
        {
          title: "Engine Perhitungan SAW Terotomasi",
          description: "Normalisasi matriks R dan perkalian bobot kriteria terhitung dalam hitungan milidetik saat verifikator menekan tombol kalkulasi.",
        },
        {
          title: "Manajemen Bobot Kriteria Dinamis",
          description: "Admin dapat menyesuaikan persentase bobot tiap kriteria sesuai dengan kebijakan tahun akademik baru tanpa mengubah kode program.",
        },
        {
          title: "Dashboard Rekapitulasi & Grafik Distribusi",
          description: "Visualisasi sebaran pendaftar per kelompok UKT dengan grafik interaktif dan filter status verifikasi berkas.",
        },
        {
          title: "Export Laporan Hasil Keputusan (PDF & Excel)",
          description: "Fitur cetak rekapitulasi data pendaftar dan ranking skor preferensi siap serah terima untuk pimpinan kampus.",
        },
      ],
      challenges: [
        {
          issue: "Potensi error 'division by zero' saat salah satu nilai kriteria bernilai nol pada rumus normalisasi.",
          solution:
            "Menambahkan guard clause dan validasi batas nilai minimum (default fallback) pada service kalkulasi sebelum eksekusi pembagian matematika dilakukan.",
        },
      ],
      results: [
        {
          metric: "32 Skenario Terverifikasi",
          description: "Hasil kalkulasi matriks SAW terbukti sinkron 100% dengan hitungan manual tim penguji.",
        },
        {
          metric: "Waktu Proses Turun 75%",
          description: "Verifikasi berkas dan penentuan golongan yang biasanya memakan 14 hari berhasil dipersingkat menjadi 3 hari kerja.",
        },
        {
          metric: "Transparansi Keputusan",
          description: "Setiap golongan UKT memiliki histori breakdown skor matematis yang dapat dipertanggungjawabkan ke mahasiswa.",
        },
        {
          metric: "Akses Multi-Device",
          description: "Antarmuka verifikator dapat dioperasikan secara lancar di tablet maupun laptop kerja.",
        },
      ],
      lessonsLearned:
        "Membangun sistem pendukung keputusan bukan hanya soal rumus matematika, melainkan bagaimana menyajikan alur input data yang mudah dipahami verifikator dan menyajikan data hasil ranking secara transparan.",
      gallery: [
        { title: "Dashboard Verifikasi UKT", caption: "Tampilan ringkasan data pendaftar dan sebaran golongan UKT", image: workPulse },
        { title: "Matriks Perhitungan SAW", caption: "Visualisasi normalisasi matriks dan ranking bobot preferensi", image: heroFeature },
      ],
    },
  },
  {
    slug: "mybtp-application-center",
    title: "SuperApps MyBTP Application Center — Bandung Techno Park",
    tagline: "Portal Aplikasi Web Multi-Layanan Terintegrasi Skala Industri",
    category: "Magang Industri",
    client: "Bandung Techno Park (BTP)",
    year: "2025",
    duration: "Juli — Desember 2025 (Magang Industri)",
    role: "Fullstack Developer",
    team: "Tim Engineering Bandung Techno Park",
    stack: ["Laravel", "PostgreSQL", "DBeaver", "REST API", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    thumbnail: workLumen,
    featured: true,
    metrics: ["Integrasi Multi-Layanan", "Standarisasi REST API", "Manajemen DB via DBeaver"],
    summary:
      "Mengembangkan dan memelihara modul aplikasi web multi-layanan di Bandung Techno Park menggunakan Laravel dan Tailwind CSS, membangun endpoint REST API, serta mengelola basis data PostgreSQL untuk kebutuhan lintas departemen.",
    liveUrl: "https://mybtp.bandungtechnopark.com",
    repoUrl: "https://github.com/chandraapriyanto/mybtp-application-center",
    caseStudy: {
      overview:
        "Bandung Techno Park (BTP) merupakan kawasan inovasi dan inkubasi bisnis teknologi yang menyediakan berbagai fasilitas riset, coworking space, dan pelatihan. SuperApps MyBTP dirancang sebagai platform portal tunggal untuk menyatukan seluruh akses layanan tersebut.",
      problem:
        "Sebelum integrasi, masing-masing unit layanan memiliki sistem pencatatan terpisah dengan struktur data yang tidak seragam, menyulitkan manajemen pusat dalam memantau penggunaan fasilitas dan pelaporan terpadu.",
      objectives: [
        "Mengembangkan dan memelihara fitur-fitur baru pada portal terpadu MyBTP dengan framework Laravel.",
        "Membangun endpoint REST API terstandarisasi untuk modul pendaftaran tenant, reservasi ruangan, dan layanan laboratorium.",
        "Mengelola basis data PostgreSQL menggunakan DBeaver, mencakup migrasi skema tabel dan optimasi indeks query.",
        "Melakukan pengujian fungsional dan perbaikan bug berkala bersama tim engineering untuk memastikan stabilitas server produksi.",
      ],
      process: [
        {
          step: "01",
          title: "Analisis Kebutuhan Lintas Unit Bisnis",
          description:
            "Memetakan alur bisnis dari masing-masing departemen BTP (inkubasi startup, penyewaan fasilitas coworking, dan pengujian laboratorium).",
        },
        {
          step: "02",
          title: "Perancangan Kontrak REST API & JSON Payload",
          description:
            "Menyusun standar struktur respons API (status, message, data, metadata pagination) agar konsisten dikonsumsi frontend.",
        },
        {
          step: "03",
          title: "Pengembangan Controller & Middleware Laravel",
          description:
            "Menulis logika otentikasi role-based, middleware validasi token, dan endpoint CRUD untuk masing-masing modul layanan.",
        },
        {
          step: "04",
          title: "Manajemen Database PostgreSQL dengan DBeaver",
          description:
            "Menjalankan script migrasi tabel, membuat foreign key constraints, dan memantau performa execution plan query kompleks.",
        },
        {
          step: "05",
          title: "Pengujian Staging & Rilis Fitur",
          description:
            "Menguji alur pengajuan layanan dari sisi pengguna hingga verifikasi admin di staging environment sebelum deploy ke server produksi.",
        },
      ],
      technicalDecisions: [
        {
          decision: "Standardisasi Format Response JSON Berseragam",
          reason:
            "Mempermudah integrasi antarmuka frontend dan meminimalisir potensi runtime error akibat payload struktur yang berbeda.",
          alternative: "Format respons bebas per-controller (menyulitkan maintenance tim frontend).",
        },
        {
          decision: "Penggunaan DBeaver untuk Administrasi Basis Data",
          reason:
            "Memudahkan profiling query lambat, visualisasi diagram ERD relasi, serta pengelolaan skema PostgreSQL dalam satu GUI.",
          alternative: "Command line psql murni untuk seluruh operasi.",
        },
      ],
      keyFeatures: [
        {
          title: "Single Sign-On Portal Multi-Layanan",
          description: "Pengguna dapat mendaftar program inkubasi, memesan ruangan, dan mengajukan layanan riset dengan satu akun.",
        },
        {
          title: "RESTful API Endpoints Terstruktur",
          description: "API terdokumentasi rapi dengan mekanisme otentikasi aman untuk komunikasi data antar-modul internal.",
        },
        {
          title: "Dashboard Manajemen Administrator",
          description: "Panel kendali untuk tim operasional BTP dalam memvalidasi permohonan tenant dan melihat jadwal penggunaan fasilitas.",
        },
      ],
      challenges: [
        {
          issue: "Menghubungkan data dari database versi lama yang memiliki format penamaan kolom yang tidak seragam.",
          solution:
            "Menulis database migration scripts dan transformer data layer di Laravel untuk menyelaraskan tipe data sebelum diproses.",
        },
      ],
      results: [
        {
          metric: "Integrasi Layanan Utama",
          description: "Modul pendaftaran tenant dan reservasi fasilitas berhasil disatukan dalam satu portal MyBTP.",
        },
        {
          metric: "Kolaborasi Tim Terstandar",
          description: "Penerapan API contract mempercepat koordinasi antara developer frontend dan backend.",
        },
        {
          metric: "Stabilitas Produksi",
          description: "Fitur yang dideploy berjalan lancar selama masa operasional magang dengan bug rate minimal.",
        },
      ],
      lessonsLearned:
        "Pengalaman magang industri di Bandung Techno Park memberikan wawasan nyata tentang pentingnya disiplin version control Git, koordinasi API contract, dan tanggung jawab terhadap kode yang berjalan di lingkungan produksi.",
      gallery: [
        { title: "Portal MyBTP", caption: "Antarmuka portal layanan terpadu Bandung Techno Park", image: workLumen },
      ],
    },
  },
  {
    slug: "sistem-pembayaran-spp-sekolah-alam",
    title: "Sistem Pembayaran SPP Sekolah Alam Berbasis Website",
    tagline: "Sistem Finansial Pembayaran Uang Sekolah Terintegrasi Payment Gateway",
    category: "Web App",
    client: "POLINDRA & Sekolah Alam",
    year: "2024",
    duration: "Maret — Juni 2024",
    role: "Fullstack Developer",
    team: "Proyek Kolaboratif POLINDRA",
    stack: ["Laravel", "PHP", "MySQL", "Payment Gateway", "JavaScript", "Bootstrap"],
    thumbnail: workSolace,
    featured: true,
    metrics: ["Midtrans Webhook", "DB::transaction Lock", "Generate Invoice PDF"],
    summary:
      "Mengembangkan sistem pembayaran SPP dengan Laravel dan MySQL, terintegrasi payment gateway untuk pemrosesan tagihan otomatis, verifikasi status transaksi real-time via webhook, dan cetak invoice PDF.",
    liveUrl: "https://spp-sekolahalam.demo.app",
    repoUrl: "https://github.com/chandraapriyanto/sistem-spp-sekolah-alam",
    caseStudy: {
      overview:
        "Sekolah Alam mengelola administrasi iuran SPP bulanan ratusan siswa. Pengurus yayasan membutuhkan sistem pembayaran digital agar orang tua murid dapat membayar secara fleksibel dan pencatatan kas sekolah terdata secara transparan.",
      problem:
        "Sebelumnya, pembayaran dilakukan via transfer manual dengan konfirmasi foto slip transfer ke WhatsApp bendahara. Cara ini sering menyebabkan slip hilang, salah catat nominal, dan memakan waktu rekonsiliasi berjam-jam setiap bulannya.",
      objectives: [
        "Membangun aplikasi pembayaran berbasis web menggunakan Laravel dan basis data MySQL.",
        "Mengintegrasikan payment gateway (Midtrans Snap) untuk menyediakan kanal bayar Virtual Account, QRIS, dan e-Wallet.",
        "Menerapkan penanganan webhook asynchronous untuk memperbarui status tagihan secara otomatis.",
        "Menyediakan generator kuitansi dan bukti bayar PDF resmi yang langsung dapat diunduh orang tua siswa.",
      ],
      process: [
        {
          step: "01",
          title: "Pemodelan Skema Data Finansial",
          description:
            "Merancang tabel siswa, tagihan bulanan, histori transaksi, dan jurnal kas masuk dengan relasi foreign key yang aman di MySQL.",
        },
        {
          step: "02",
          title: "Pengembangan Generator Tagihan Otomatis",
          description:
            "Membangun sistem penagihan otomatis yang menghasilkan invoice SPP bulanan sesuai dengan kelas dan tahun ajaran siswa.",
        },
        {
          step: "03",
          title: "Integrasi API Payment Gateway & Webhook",
          description:
            "Menghubungkan Midtrans Snap API, membuat request token bayar, dan menangani callback webhook status (settlement, pending, expired, cancel).",
        },
        {
          step: "04",
          title: "Pengamanan Transaksi dengan DB::transaction",
          description:
            "Membungkus pembaruan status tagihan dan pencatatan mutasi kas dalam database transaction untuk mencegah kegagalan parsial data.",
        },
        {
          step: "05",
          title: "Generate Kuitansi PDF Resmi & Testing",
          description:
            "Mengimplementasikan library PDF generator untuk mencetak bukti lunas ber-QR code, serta menguji skenario gagal bayar dan simulasi jaringan putus.",
        },
      ],
      technicalDecisions: [
        {
          decision: "Penerapan Database Transaction (ACID) pada Handler Webhook",
          reason:
            "Memastikan bahwa perubahan status tagihan menjadi 'Lunas' dan penambahan data ke buku kas masuk terjadi secara serentak (atomik). Jika salah satu query gagal, sistem melakukan rollback otomatis.",
          alternative: "Query update terpisah tanpa transaction wrapper (berisiko status lunas tapi jurnal kas tidak tercatat).",
        },
        {
          decision: "Validasi Signature Key pada Payload Webhook",
          reason:
            "Mencegah request palsu dari pihak luar yang mencoba memalsukan status pembayaran tanpa verifikasi SHA512 hash dari payment gateway.",
          alternative: "Menerima webhook payload tanpa verifikasi signature (sangat rentan manipulasi keamanan).",
        },
      ],
      keyFeatures: [
        {
          title: "Pembayaran Multi-Kanal Otomatis",
          description: "Mendukung pembayaran via QRIS, Virtual Account Bank (BCA, Mandiri, BNI, BRI), dan e-Wallet secara fleksibel.",
        },
        {
          title: "Verifikasi Lunas Real-Time via Webhook",
          description: "Status tagihan otomatis berubah menjadi lunas dalam hitungan detik setelah transfer berhasil dilakukan tanpa perlu upload struk fisik.",
        },
        {
          title: "Kuitansi Digital PDF Resmi",
          description: "Invoice dan bukti pembayaran resmi terbit otomatis dengan kode unik verifikasi pembayaran.",
        },
        {
          title: "Laporan Rekapitulasi Kas untuk Bendahara",
          description: "Dashboard pemantauan tunggakan, total penerimaan kas bulanan, dan histori mutasi rekening.",
        },
      ],
      challenges: [
        {
          issue: "Potensi pemanggilan webhook berulang (duplicate callback) dari penyedia payment gateway saat jaringan lambat.",
          solution:
            "Menerapkan mekanisme Idempotency Key dan pengecekan status awal sebelum menjalankan eksekusi update database.",
        },
      ],
      results: [
        {
          metric: "Verifikasi Otomatis",
          description: "Bendahara tidak perlu lagi mencocokkan mutasi rekening koran dan foto struk satu per satu.",
        },
        {
          metric: "Transparansi Kas",
          description: "Seluruh riwayat pembayaran tersimpan rapi dan dapat diexport sewaktu-waktu untuk audit pengurus yayasan.",
        },
        {
          metric: "Kemudahan Orang Tua Siswa",
          description: "Orang tua dapat memantau status iuran anak dan membayar secara praktis dari smartphone.",
        },
      ],
      lessonsLearned:
        "Keamanan sistem finansial berbasis web memerlukan pertahanan berlapis: validasi signature token, mekanisme idempotensi, database transaction, dan audit trail log yang jelas.",
      gallery: [
        { title: "Portal Pembayaran SPP", caption: "Halaman riwayat tagihan dan pilihan metode pembayaran online", image: workSolace },
      ],
    },
  },
  {
    slug: "sistem-sinkronisasi-kehadiran-pegawai",
    title: "Sistem Sinkronisasi Kehadiran Pegawai dengan Surat Tugas",
    tagline: "Platform Manajemen Presensi & Validasi Surat Tugas Dinas Pegawai",
    category: "Frontend & UI",
    client: "POLINDRA",
    year: "2024",
    duration: "Oktober — Desember 2024",
    role: "Frontend Developer",
    team: "Tim Proyek POLINDRA (Frontend + Backend)",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "REST API"],
    thumbnail: workCadence,
    featured: true,
    metrics: ["Sinkronisasi Status Dinas", "In-Browser PDF Preview", "UI Responsif Multi-Device"],
    summary:
      "Membangun antarmuka web responsif untuk sinkronisasi data presensi pegawai kampus dengan surat perintah tugas dinas, mencakup form pengajuan, pratinjau dokumen in-browser, dan integrasi REST API.",
    liveUrl: "https://kehadiran-polindra.demo.app",
    repoUrl: "https://github.com/chandraapriyanto/sistem-kehadiran-pegawai",
    caseStudy: {
      overview:
        "Pegawai dan dosen di lingkungan kampus kerap melaksanakan penugasan kedinasan di luar kota. Sistem ini dirancang untuk menyinkronkan pencatatan kehadiran harian dengan surat tugas resmi agar status kehadiran pegawai tercatat akurat.",
      problem:
        "Pegawai yang sedang dinas luar sering tercatat alpa/tidak hadir pada mesin presensi utama karena belum sempat menyerahkan fisik surat tugas, mengakibatkan bagian kepegawaian harus merevisi absensi manual di akhir bulan.",
      objectives: [
        "Membangun antarmuka web yang bersih dan responsif menggunakan Bootstrap dan Tailwind CSS.",
        "Menyediakan fitur unggah berkas surat tugas beserta pratinjau dokumen langsung di peramban (in-browser preview).",
        "Mengintegrasikan REST API backend untuk pembaruan status kehadiran pegawai secara otomatis saat surat disetujui.",
        "Memudahkan bagian kepegawaian dalam memfilter dan merekapitulasi laporan presensi bulanan.",
      ],
      process: [
        {
          step: "01",
          title: "Analisis Alur Validasi Kepegawaian",
          description:
            "Mempelajari alur pengajuan surat tugas dari pegawai, verifikasi bagian akademik, hingga pengesahan pimpinan.",
        },
        {
          step: "02",
          title: "Perancangan UI & Slicing Responsif",
          description:
            "Merancang antarmuka form pengajuan dinas, tabel rekapitulasi presensi, dan kartu status verifikasi berkas.",
        },
        {
          step: "03",
          title: "Integrasi REST API & Penanganan Dokumen",
          description:
            "Menghubungkan form input dengan endpoint API backend, menambahkan validasi ukuran file PDF, dan feedback status.",
        },
        {
          step: "04",
          title: "Pengujian Kompatibilitas Multi-Perangkat",
          description:
            "Memastikan tampilan tabel data dan pratinjau dokumen tetap nyaman diakses lewat smartphone maupun desktop verifikator.",
        },
      ],
      technicalDecisions: [
        {
          decision: "Pratinjau Dokumen Langsung di Browser (In-Browser Viewer)",
          reason:
            "Verifikator dapat langsung memeriksa keabsahan nomor surat dan tanda tangan tanpa harus mengunduh file satu per satu ke penyimpanan lokal.",
          alternative: "Download file otomatis (membuat folder unduhan verifikator penuh file temporary).",
        },
      ],
      keyFeatures: [
        {
          title: "Sinkronisasi Status Dinas Otomatis",
          description: "Status presensi pegawai otomatis berubah menjadi 'Dinas Luar' saat surat tugas disetujui verifikator.",
        },
        {
          title: "In-Browser Document Preview",
          description: "Memeriksa lampiran surat tugas berformat PDF atau gambar langsung dari modal pop-up peramban.",
        },
        {
          title: "Tabel Rekapitulasi Presensi Terfilter",
          description: "Pencarian cepat berdasarkan nama pegawai, divisi, rentang tanggal, dan status persetujuan.",
        },
      ],
      challenges: [
        {
          issue: "Tampilan tabel data presensi yang padat kolom sulit dibaca pada layar smartphone.",
          solution:
            "Menerapkan card layout responsif pada tampilan mobile yang menampilkan ringkasan penting dan tombol detail collapse.",
        },
      ],
      results: [
        {
          metric: "Sinkronisasi Data",
          description: "Data kehadiran pegawai dan dokumen surat tugas tersinkronisasi tanpa perlu rekonsiliasi manual berulang.",
        },
        {
          metric: "Efisiensi Verifikasi",
          description: "Bagian kepegawaian dapat memvalidasi puluhan surat tugas per hari dalam hitungan menit.",
        },
      ],
      lessonsLearned:
        "Koordinasi yang erat antara pengembang frontend dan backend dalam menyepakati format error validasi REST API sangat krusial untuk memberikan pengalaman form input yang mulus bagi pengguna.",
      gallery: [
        { title: "Dashboard Kehadiran Pegawai", caption: "Rekapitulasi status kehadiran dan surat tugas pegawai", image: workCadence },
      ],
    },
  },
  {
    slug: "sistem-manajemen-pabrik-kulit-lumpia",
    title: "Sistem Manajemen Pabrik Kulit Lumpia Berbasis Website",
    tagline: "Aplikasi Operasional Produksi & Distribusi Stok Pabrik Mitra UMKM",
    category: "Frontend & UI",
    client: "POLINDRA & Pabrik Kulit Lumpia",
    year: "2023",
    duration: "September — Desember 2023",
    role: "Frontend Developer",
    team: "Tim Proyek POLINDRA",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "REST API"],
    thumbnail: workCadence,
    featured: false,
    metrics: ["Manajemen Stok Bahan", "UI Ergonomis Tablet", "Pencatatan Distribusi Agen"],
    summary:
      "Membangun antarmuka web operasional pabrik untuk mencatat stok bahan baku, rekapitulasi output produksi harian, dan distribusi pengiriman produk ke agen pasar mitra UMKM.",
    liveUrl: "https://lumpia-factory.demo.app",
    repoUrl: "https://github.com/chandraapriyanto/sistem-pabrik-kulit-lumpia",
    caseStudy: {
      overview:
        "Pabrik mitra UMKM pembuat kulit lumpia memerlukan sistem digital sederhana untuk memantau persediaan bahan mentah (tepung terigu, minyak goreng, kemasan), mencatat output produksi harian, dan mendata pengiriman ke agen penjual pasar tradisional.",
      problem:
        "Pencatatan manual pada buku tulis rawan hilang, tinta luntur akibat cipratan minyak/air di gudang, dan sering terjadi selisih antara stok bahan baku tercatat dengan stok fisik di gudang penyimpanan.",
      objectives: [
        "Membangun antarmuka web yang ringan, cepat, dan mudah dioperasikan staf pabrik di lantai produksi.",
        "Mengintegrasikan REST API untuk mencatat arus masuk bahan baku, pemakaian harian, dan output barang jadi.",
        "Menyediakan indikator visual peringatan saat stok bahan mentah mendekati batas minimum.",
      ],
      process: [
        {
          step: "01",
          title: "Observasi Lapangan Alur Produksi",
          description:
            "Melihat langsung siklus penimbangan adonan, proses cetak lembaran kulit lumpia, pengemasan, dan loading barang ke kendaraan agen.",
        },
        {
          step: "02",
          title: "Perancangan UI Ergonomis & Kontras Tinggi",
          description:
            "Merancang tombol input berukuran besar dan tata letak sederhana yang nyaman digunakan pada tablet di lingkungan kerja pabrik.",
        },
        {
          step: "03",
          title: "Slicing Frontend & Integrasi REST API",
          description:
            "Mengimplementasikan antarmuka dengan HTML, CSS, JavaScript, dan Bootstrap yang terhubung dengan API backend.",
        },
        {
          step: "04",
          title: "Uji Coba Penggunaan di Area Gudang",
          description:
            "Melatih staf pabrik memasukkan data produksi shift pagi dan sore serta memastikan performa aplikasi tetap gegas.",
        },
      ],
      technicalDecisions: [
        {
          decision: "Desain Antarmuka Ringan (Lightweight Bootstrap UI)",
          reason:
            "Memastikan halaman dapat dimuat instan pada tablet operasional pabrik dengan spesifikasi sederhana tanpa lag.",
          alternative: "Penggunaan library UI kompleks yang berat untuk perangkat tablet operasional.",
        },
      ],
      keyFeatures: [
        {
          title: "Form Input Produksi Cepat",
          description: "Input cepat jumlah pack lembar kulit lumpia yang dihasilkan per shift kerja dengan keypad numeric friendly.",
        },
        {
          title: "Peringatan Batas Minimum Bahan Baku",
          description: "Indikator warna kuning/merah otomatis saat stok persediaan tepung terigu atau minyak berada di bawah batas aman.",
        },
        {
          title: "Rekapitulasi Pengiriman Agen",
          description: "Mencatat nama agen penerima, jumlah pesanan pack, dan status pelunasan pembayaran.",
        },
      ],
      challenges: [
        {
          issue: "Operator pabrik belum terbiasa dengan menu navigasi yang rumit.",
          solution:
            "Menyederhanakan alur kerja menjadi hanya 3 tombol utama: Catat Bahan Masuk, Catat Produksi Selesai, dan Catat Kirim Agen.",
        },
      ],
      results: [
        {
          metric: "Pencatatan Terkontrol",
          description: "Selisih pencatatan bahan baku tepung dan kemasan berkurang secara signifikan.",
        },
        {
          metric: "Adopsi Operator Cepat",
          description: "Staf operasional dapat mengoperasikan sistem secara mandiri setelah sesi pendampingan singkat.",
        },
      ],
      lessonsLearned:
        "Desain antarmuka terbaik untuk operasional lapangan atau UMKM adalah antarmuka yang paling sederhana, minim gesekan, dan memprioritaskan kecepatan input data pengguna.",
      gallery: [
        { title: "Dashboard Manajemen Pabrik", caption: "Monitoring produksi dan pencatatan distribusi kulit lumpia", image: workCadence },
      ],
    },
  },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "fullstack-web-system",
    title: "Sistem Web Kustom (Laravel / REST API)",
    badge: "Keahlian Utama",
    targetAudience: "Institusi, UMKM, Startup & Kebutuhan Internal Perusahaan",
    description:
      "Pengembangan aplikasi web berbasis Laravel dari nol dengan arsitektur backend yang aman, skema database PostgreSQL/MySQL yang optimal, serta integrasi REST API dan dashboard interaktif.",
    features: [
      "Arsitektur backend Laravel (PHP) yang modular dan mudah dirawat",
      "Perancangan basis data relasional PostgreSQL / MySQL yang terstruktur",
      "Integrasi RESTful API & pihak ketiga (Payment Gateway / Notifikasi)",
      "Dashboard analitik & manajemen hak akses pengguna (Role-Based Auth)",
      "Antarmuka responsif di semua perangkat (Tailwind CSS / JavaScript)",
      "Pengujian alur sistem menyeluruh & dokumentasi teknis kode",
      "Masa garansi pemeliharaan & perbaikan bug",
    ],
    duration: "3 — 6 Minggu",
    startingPrice: "Rp 4.500.000",
    popular: true,
  },
  {
    id: "spk-system",
    title: "Sistem Pendukung Keputusan (SPK) SAW / AHP",
    badge: "Spesialisasi Akademik & Riset",
    targetAudience: "Kampus, Instansi Pemerintah & Lembaga Seleksi",
    description:
      "Implementasi algoritma pengambilan keputusan multi-kriteria seperti Simple Additive Weighting (SAW), AHP, atau TOPSIS untuk seleksi atau penilaian yang objektif dan terukur.",
    features: [
      "Formulasi algoritma matematis terverifikasi akurat",
      "Manajemen kriteria bobot benefit dan cost secara dinamis",
      "Tabel normalisasi matriks & perankingan skor instan",
      "Fitur export laporan keputusan siap cetak (PDF & Excel)",
      "Dashboard visualisasi grafik distribusi hasil keputusan",
      "Konsultasi teknis logika perhitungan algoritma",
    ],
    duration: "2 — 4 Minggu",
    startingPrice: "Rp 3.500.000",
  },
  {
    id: "frontend-slicing-integration",
    title: "UI Slicing Figma & Integrasi REST API",
    badge: "Cepat & Rapi",
    targetAudience: "Tim Developer, Agensi & Pemilik Desain UI/UX",
    description:
      "Menerjemahkan rancangan desain Figma menjadi antarmuka web responsif berstandar tinggi menggunakan Tailwind CSS, Bootstrap, atau React yang terhubung ke endpoint REST API.",
    features: [
      "Hasil slicing presisi pixel-perfect dari file desain Figma",
      "Desain responsif optimal di layar smartphone, tablet, dan desktop",
      "Integrasi data REST API dengan penanganan validasi error yang rapi",
      "Kode bersih dengan semantik HTML5 dan CSS modern",
      "Optimasi kecepatan loading aset dan rendering halaman",
    ],
    duration: "1 — 2 Minggu",
    startingPrice: "Rp 2.000.000",
  },
  {
    id: "mobile-app-development",
    title: "Aplikasi Mobile Flutter (Android / iOS)",
    badge: "Cross Platform",
    targetAudience: "Bisnis & Startup yang Membutuhkan Aplikasi Mobile",
    description:
      "Pengembangan aplikasi mobile multi-platform menggunakan framework Flutter & Dart yang terhubung dengan backend REST API untuk performa native yang gegas.",
    features: [
      "Satu basis kode efisien untuk Android dan iOS",
      "Antarmuka pengguna interaktif dan responsif",
      "Integrasi endpoint REST API backend & local storage caching",
      "Bantuan build file APK dan persiapan rilis aplikasi",
      "Struktur kode bersih berbasis state management yang rapi",
    ],
    duration: "3 — 6 Minggu",
    startingPrice: "Rp 5.500.000",
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: "01",
    title: "Bedah Alur & Spesifikasi Data",
    description:
      "Mendiskusikan kebutuhan sistem, alur proses bisnis pengguna, entitas data yang diperlukan, dan merumuskan skema relasi database yang kokoh.",
    deliverable: "Dokumen Spesifikasi Kebutuhan & Desain Database (ERD)",
  },
  {
    stepNumber: "02",
    title: "Wireframing & Kontrak API",
    description:
      "Merancang alur antarmuka pengguna di Figma dan menyusun kesepakatan struktur payload JSON (API contract) sebelum koding dimulai.",
    deliverable: "Prototipe Desain Antarmuka & Dokumentasi REST API",
  },
  {
    stepNumber: "03",
    title: "Pembangunan Core Backend & Database",
    description:
      "Mengembangkan backend Laravel, migrasi database, middleware otentikasi, service class logika bisnis, dan endpoint REST API.",
    deliverable: "Endpoint REST API Berfungsi & Database Terisi Schema",
  },
  {
    stepNumber: "04",
    title: "Integrasi Frontend & Pengujian Skenario",
    description:
      "Menghubungkan antarmuka responsif dengan API, validasi form, pengujian skenario transaksi/perhitungan, serta perbaikan bug.",
    deliverable: "Aplikasi Terintegrasi Penuh di Staging Server",
  },
  {
    stepNumber: "05",
    title: "Deployment Server & Dokumentasi",
    description:
      "Melakukan deploy ke server hosting/VPS, konfigurasi domain & SSL, dokumentasi panduan penggunaan, serta serah terima repository Git.",
    deliverable: "Aplikasi Live di Server & Panduan Pengoperasian",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Apa saja teknologi utama yang Anda gunakan dalam membangun aplikasi?",
    answer:
      "Keahlian utama saya berfokus pada ekosistem Fullstack Web: Laravel (PHP), REST API, basis data PostgreSQL dan MySQL, JavaScript, Tailwind CSS, Bootstrap, serta pengembangan aplikasi mobile multi-platform menggunakan Flutter dan Dart.",
  },
  {
    question: "Apakah Anda siap bekerja secara remote atau on-site?",
    answer:
      "Saya berdomisili di Indramayu, Jawa Barat dan sangat terbiasa bekerja secara remote dengan koordinasi aktif melalui Slack, GitHub, dan Google Meet. Saya juga terbuka untuk peluang kerja on-site atau relokasi di wilayah Jakarta, Bandung, dan sekitarnya.",
  },
  {
    question: "Bagaimana mekanisme tahapan pembayaran untuk proyek freelance?",
    answer:
      "Pembayaran dibagi bertahap secara aman dan transparan: Down Payment (DP) 50% di awal saat kesepakatan proyek dan spesifikasi disetujui, serta pelunasan 50% setelah seluruh fitur teruji di staging server dan siap dideploy ke server produksi.",
  },
  {
    question: "Apakah source code dan database diserahkan penuh kepada klien?",
    answer:
      "Ya, 100% source code di repository Git beserta database migration, aset, dan dokumentasi panduan teknis diserahkan sepenuhnya kepada Anda setelah proyek selesai.",
  },
  {
    question: "Apakah ada masa garansi dan perbaikan bug setelah aplikasi diluncurkan?",
    answer:
      "Tentu saja. Setiap proyek dilengkapi masa garansi pemeliharaan dan perbaikan bug gratis selama 30 hingga 60 hari setelah aplikasi berjalan di server produksi.",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Backend & Database (Keahlian Utama)",
    skills: [
      { name: "Laravel (PHP)", level: "Mahir" },
      { name: "RESTful API", level: "Mahir" },
      { name: "PostgreSQL", level: "Mahir" },
      { name: "MySQL", level: "Mahir" },
      { name: "Supabase", level: "Mahir" },
      { name: "Payment Gateway", level: "Mahir" },
    ],
  },
  {
    category: "Frontend & UI Engineering",
    skills: [
      { name: "HTML5 & CSS3", level: "Mahir" },
      { name: "JavaScript", level: "Mahir" },
      { name: "Tailwind CSS", level: "Mahir" },
      { name: "Bootstrap", level: "Mahir" },
      { name: "AJAX & Fetch API", level: "Mahir" },
      { name: "React (Vite)", level: "Menengah" },
    ],
  },
  {
    category: "Mobile & Tooling",
    skills: [
      { name: "Flutter & Dart", level: "Menengah" },
      { name: "Git & GitHub", level: "Mahir" },
      { name: "DBeaver", level: "Mahir" },
      { name: "Figma (Slicing)", level: "Menengah" },
      { name: "Wokwi (IoT Sim)", level: "Menengah" },
      { name: "Python", level: "Dasar" },
    ],
  },
  {
    category: "Soft Skills & Analisis Sistem",
    skills: [
      { name: "Analisis Logika Algoritma (SPK)", level: "Mahir" },
      { name: "Perancangan Relasi Basis Data (ERD)", level: "Mahir" },
      { name: "Pengujian Skenario & Debugging", level: "Mahir" },
      { name: "Kolaborasi Tim & Komunikasi", level: "Mahir" },
      { name: "Dokumentasi Teknis Sistem", level: "Mahir" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "Feb 2026 — Jun 2026",
    role: "Fullstack Developer (Proyek Akhir)",
    company: "Politeknik Negeri Indramayu (POLINDRA)",
    location: "Indramayu, Jawa Barat",
    type: "Full-time",
    description:
      "Merancang dan membangun Sistem Pendukung Keputusan Penentuan UKT Mahasiswa Baru berbasis web dengan metode Simple Additive Weighting (SAW).",
    achievements: [
      "Mengembangkan kelas service kalkulasi algoritma SAW di backend Laravel untuk normalisasi 8 kriteria benefit dan cost secara otomatis.",
      "Merancang skema database relasional di PostgreSQL (Supabase) dengan indeks kriteria untuk pencatatan histori perangkingan.",
      "Membangun dashboard monitoring verifikasi berkas dan visualisasi sebaran golongan UKT pendaftar menggunakan Tailwind CSS.",
      "Melakukan uji banding 32 sampel data antara sistem dengan kalkulasi manual untuk memverifikasi keakuratan formula matematis.",
    ],
    stack: ["Laravel", "PHP", "PostgreSQL", "Supabase", "REST API", "Tailwind CSS", "JavaScript"],
  },
  {
    period: "Jul 2025 — Des 2025",
    role: "Fullstack Developer (Magang Industri)",
    company: "Bandung Techno Park — SuperApps MyBTP Application Center",
    location: "Bandung, Jawa Barat",
    type: "Internship",
    description:
      "Mengembangkan dan memelihara modul aplikasi web multi-layanan di Bandung Techno Park.",
    achievements: [
      "Mengembangkan dan merawat fitur aplikasi web multi-layanan menggunakan Laravel, HTML, CSS, JavaScript, dan Tailwind CSS.",
      "Mengimplementasikan endpoint REST API serta mengelola basis data PostgreSQL menggunakan DBeaver untuk integrasi lintas modul.",
      "Melakukan pengujian fungsional dan perbaikan bug bersama tim engineering sehingga fitur baru berjalan stabil di server produksi.",
    ],
    stack: ["Laravel", "PostgreSQL", "DBeaver", "REST API", "Tailwind CSS", "JavaScript"],
  },
  {
    period: "Okt 2024 — Des 2024",
    role: "Frontend Developer",
    company: "POLINDRA — Sistem Sinkronisasi Kehadiran Pegawai",
    location: "Indramayu, Jawa Barat",
    type: "Contract",
    description:
      "Membangun antarmuka sistem sinkronisasi data kehadiran pegawai kampus dengan surat tugas kedinasan.",
    achievements: [
      "Membangun antarmuka responsif dengan HTML, CSS, JavaScript, Bootstrap, dan Tailwind CSS agar data presensi mudah dibaca di mobile dan desktop.",
      "Menyediakan fitur pratinjau dokumen surat tugas (PDF/gambar) in-browser tanpa perlu mengunduh file.",
      "Berkolaborasi dengan developer backend dalam integrasi REST API dan validasi data form pengajuan dinas.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "REST API"],
  },
  {
    period: "Mar 2024 — Jun 2024",
    role: "Fullstack Developer",
    company: "POLINDRA — Sistem Pembayaran SPP Sekolah Alam",
    location: "Indramayu, Jawa Barat",
    type: "Contract",
    description:
      "Mengembangkan sistem pembayaran SPP berbasis website dengan integrasi payment gateway dan pencatatan kas otomatis.",
    achievements: [
      "Mengembangkan sistem penagihan SPP dengan Laravel dan MySQL, terintegrasi Midtrans payment gateway untuk transaksi VA dan QRIS.",
      "Menerapkan mekanisme database transaction (ACID) dan validasi webhook signature token untuk memastikan konsistensi pencatatan saldo kas.",
      "Membangun modul cetak kuitansi dan bukti pembayaran resmi format PDF yang otomatis terbit setelah transaksi settlement.",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Payment Gateway", "Bootstrap", "JavaScript"],
  },
  {
    period: "Sep 2023 — Des 2023",
    role: "Frontend Developer",
    company: "POLINDRA — Sistem Manajemen Pabrik Kulit Lumpia",
    location: "Indramayu, Jawa Barat",
    type: "Contract",
    description:
      "Membangun antarmuka web operasional pabrik untuk pencatatan stok bahan baku dan distribusi produk UMKM.",
    achievements: [
      "Membangun antarmuka pengguna responsif dan berkontras tinggi dengan HTML, CSS, JavaScript, dan Bootstrap untuk tablet operasional pabrik.",
      "Mengintegrasikan REST API pencatatan bahan baku, rekapitulasi output produksi harian, dan piutang agen mitra pasar.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "REST API"],
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    period: "Sep 2022 — Sekarang",
    degree: "D4 Rekayasa Perangkat Lunak (Bachelor of Applied Software Engineering)",
    institution: "Politeknik Negeri Indramayu (POLINDRA)",
    gpa: "Lulusan D4 RPL",
    details:
      "Fokus pada Rekayasa Perangkat Lunak Web & Mobile, Arsitektur Sistem Informasi, Perancangan Basis Data Relasional, Sistem Pendukung Keputusan, dan Pengujian Kualitas Perangkat Lunak.",
  },
  {
    period: "Jul 2019 — Jun 2022",
    degree: "Teknik Kendaraan Ringan",
    institution: "SMK Malaka Jakarta",
    gpa: "Lulus",
    details:
      "Pendidikan kejuruan teknik yang membentuk logika mekanis terstruktur, ketelitian presisi, dan daya tahan pemecahan masalah teknis di lapangan.",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    year: "2025",
    name: "Sertifikat Magang Industri — Fullstack Developer",
    issuer: "Bandung Techno Park",
  },
  {
    year: "2024",
    name: "Sertifikasi Kompetensi Rekayasa Perangkat Lunak",
    issuer: "Politeknik Negeri Indramayu (POLINDRA)",
  },
  {
    year: "2024",
    name: "Web Development & REST API Specialist",
    issuer: "Pelatihan Kompetensi Nasional",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "implementasi-metode-saw-spk-laravel",
    title: "Implementasi Algoritma Simple Additive Weighting (SAW) di Laravel & PostgreSQL",
    description:
      "Studi kasus mendalam: dari formulasi logika matematika matriks benefit/cost, perancangan skema PostgreSQL Supabase, hingga pembuatan service class Laravel yang bersih dan aman dari error division-by-zero.",
    publishedAt: "10 Februari 2026",
    readTime: "8 menit baca",
    category: "Sistem Pendukung Keputusan",
    tags: ["SPK", "SAW", "Laravel", "PostgreSQL", "PHP"],
    content: {
      tableOfContents: [
        { id: "mengapa-saw", text: "Mengapa Memilih Metode Simple Additive Weighting (SAW)" },
        { id: "logika-matematika", text: "1. Logika Matematis Kriteria Benefit vs Cost" },
        { id: "skema-database", text: "2. Skema Relasi Database di PostgreSQL" },
        { id: "service-layer", text: "3. Implementasi Service Class di Laravel" },
        { id: "gotchas", text: "4. Edge Case: Mengatasi Division by Zero" },
        { id: "kesimpulan", text: "Hasil Validasi & Kesimpulan" },
      ],
      intro:
        "Pada pengembangan Proyek Akhir Sistem Pendukung Keputusan Penentuan UKT Mahasiswa Baru di POLINDRA, tantangan terbesarnya adalah menerjemahkan 8 kriteria ekonomi keluarga yang dinamis menjadi satu skor preferensi objektif. Metode Simple Additive Weighting (SAW) dipilih karena sifatnya yang deterministik, adil, dan transparan dalam perangkingan multi-kriteria.",
      sections: [
        {
          id: "logika-matematika",
          heading: "1. Logika Matematis Kriteria Benefit vs Cost",
          body:
            "Kunci utama algoritma SAW adalah proses normalisasi matriks keputusan (R) ke skala 0 hingga 1. Kriteria dibagi menjadi dua tipe: Benefit (semakin besar nilainya semakin layak mendapat preferensi, dirumuskan r_ij = x_ij / max(x_j)) dan Cost (semakin besar nilainya semakin kecil nilai preferensinya, dirumuskan r_ij = min(x_j) / x_ij). Pada kasus penentuan UKT, kriteria 'Jumlah Tanggungan' bersifat benefit, sedangkan 'Penghasilan Orang Tua' dan 'Daya Listrik' bersifat cost.",
        },
        {
          id: "skema-database",
          heading: "2. Skema Relasi Database di PostgreSQL",
          body:
            "Agar bobot kriteria dapat diubah di kemudian hari tanpa merusak riwayat perhitungan pendaftar tahun sebelumnya, skema database dirancang relasional di PostgreSQL. Tabel 'kriterias' menyimpan nama kriteria, kode, tipe (benefit/cost), dan bobot (W). Nilai input pendaftar disimpan di tabel 'nilai_pendaftar' yang berelasi dengan 'pendaftar_id' dan 'kriteria_id'.",
        },
        {
          id: "service-layer",
          heading: "3. Implementasi Service Class di Laravel",
          body:
            "Agar controller tetap ramping, seluruh proses normalisasi dan perkalian bobot dienkapsulasi ke dalam kelas dedicated 'SAWCalculationService'. Berikut implementasi inti logika perhitungannya:",
          codeSnippet: {
            language: "php",
            code: `<?php

namespace App\\Services;

class SAWCalculationService
{
    /**
     * Hitung skor preferensi SAW untuk seluruh pendaftar
     */
    public function calculate(array $pendaftarList, array $kriteriaList): array
    {
        // 1. Ekstraksi nilai Max dan Min per kriteria
        $maxValues = [];
        $minValues = [];
        
        foreach ($kriteriaList as $k) {
            $kid = $k['id'];
            $colValues = array_column(array_column($pendaftarList, 'nilai', 'id'), $kid);
            // Cegah error jika array kosong atau bernilai nol
            $filteredValues = array_filter($colValues, fn($v) => (float)$v > 0);
            $maxValues[$kid] = !empty($filteredValues) ? max($filteredValues) : 1;
            $minValues[$kid] = !empty($filteredValues) ? min($filteredValues) : 0.01;
        }

        // 2. Normalisasi Matriks R & Perkalian Bobot W
        $results = [];
        foreach ($pendaftarList as $p) {
            $totalScore = 0;
            $matrixDetail = [];

            foreach ($kriteriaList as $k) {
                $kid = $k['id'];
                $val = (float)($p['nilai'][$kid] ?? 0);
                $weight = (float)$k['bobot'];

                if ($k['tipe'] === 'benefit') {
                    $r = $maxValues[$kid] > 0 ? ($val / $maxValues[$kid]) : 0;
                } else {
                    // Cost: min / value
                    $r = $val > 0 ? ($minValues[$kid] / $val) : 0;
                }

                $scoreWeighted = $r * $weight;
                $totalScore += $scoreWeighted;
                $matrixDetail[$kid] = round($r, 4);
            }

            $results[] = [
                'pendaftar_id'   => $p['id'],
                'nama'           => $p['nama'],
                'matriks_r'      => $matrixDetail,
                'skor_akhir'     => round($totalScore, 4),
                'golongan_ukt'   => $this->determineGolongan($totalScore),
            ];
        }

        // 3. Urutkan berdasarkan skor tertinggi (Perankingan)
        usort($results, fn($a, $b) => $b['skor_akhir'] <=> $a['skor_akhir']);

        return $results;
    }

    private function determineGolongan(float $score): string
    {
        return match (true) {
            $score >= 0.85 => 'Golongan 1 (Rp 500.000)',
            $score >= 0.70 => 'Golongan 2 (Rp 1.000.000)',
            $score >= 0.55 => 'Golongan 3 (Rp 2.000.000)',
            $score >= 0.40 => 'Golongan 4 (Rp 3.000.000)',
            default        => 'Golongan 5+ (Reguler)',
        };
    }
}`,
          },
        },
        {
          id: "gotchas",
          heading: "4. Edge Case: Mengatasi Division by Zero",
          body:
            "Pada kriteria bertipe cost, rumus normalisasi adalah min(x_j) / x_ij. Jika seorang pendaftar memasukkan nilai 0 (misalnya luas bangunan 0 karena menumpang), pembagian dengan nol akan melempar fatal exception. Solusinya adalah menerapkan data sanitization pada service layer dengan memberikan floor value minimum (misal 0.01) atau default value yang telah disepakati verifikator.",
        },
        {
          id: "kesimpulan",
          heading: "Hasil Validasi & Kesimpulan",
          body:
            "Dengan memproses kalkulasi secara terpusat di backend Laravel, sistem mampu mengolah 1.000 data pendaftar dalam waktu kurang dari 100ms. Seluruh matriks normalisasi dan histori perhitungan dapat ditampilkan kembali secara transparan kepada pimpinan kampus dan mahasiswa.",
        },
      ],
      takeaways: [
        "Metode SAW sangat efisien untuk perankingan multi-kriteria karena komputasinya bersifat linier dan deterministik.",
        "Selalu pisahkan logika algoritma ke Dedicated Service Class agar controller dan model tetap bersih.",
        "Antisipasi edge case 'division by zero' pada kriteria cost dengan sanitasi nilai input minimum.",
        "Gunakan relasi database PostgreSQL untuk menjaga histori bobot kriteria pendaftar.",
      ],
    },
  },
  {
    slug: "integrasi-payment-gateway-laravel-mysql",
    title: "Menangani Webhook Payment Gateway Secara Aman & Idempoten di Laravel",
    description:
      "Panduan praktis mengamankan transaksi online pada Sistem SPP Sekolah Alam: verifikasi signature token SHA512, database transaction lock, dan penanganan retry webhook.",
    publishedAt: "25 Januari 2026",
    readTime: "7 menit baca",
    category: "Backend & Keamanan",
    tags: ["Laravel", "Payment Gateway", "MySQL", "Webhooks", "Security"],
    content: {
      tableOfContents: [
        { id: "tantangan-webhook", text: "Tantangan Keamanan pada Webhook Finansial" },
        { id: "signature-validation", text: "1. Verifikasi Signature Hash SHA512" },
        { id: "idempotency-db", text: "2. Mencegah Double Mutation dengan DB::transaction" },
        { id: "testing-flow", text: "3. Simulasi & Checklist Pengujian" },
      ],
      intro:
        "Pada pengembangan Sistem Pembayaran SPP Sekolah Alam, integritas saldo dan pencatatan buku kas adalah prioritas mutlak. Mengandalkan pengalihan halaman browser (redirect return URL) saja sangat berisiko karena koneksi internet pengguna bisa terputus sebelum browser selesai memuat. Oleh karena itu, arsitektur webhook asynchronous menjadi tulang punggung pembaruan status transaksi.",
      sections: [
        {
          id: "signature-validation",
          heading: "1. Verifikasi Signature Hash SHA512",
          body:
            "Setiap notifikasi webhook yang masuk ke server backend harus diverifikasi keasliannya sebelum diproses. Payment gateway seperti Midtrans mengirimkan SHA512 hash yang dibentuk dari order_id, status_code, gross_amount, dan server_key. Jika hash hasil kalkulasi lokal berbeda dengan signature yang dikirim, request wajib langsung ditolak (HTTP 403) untuk mencegah injeksi transaksi palsu.",
          codeSnippet: {
            language: "php",
            code: `<?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\DB;
use App\\Models\\TransaksiSPP;
use App\\Models\\JurnalKas;

class PaymentWebhookController extends Controller
{
    public function handle(Request $request)
    {
        $payload = $request->all();
        $serverKey = config('services.midtrans.server_key');

        // 1. Validasi Signature Key SHA512
        $expectedSignature = hash('sha512', 
            $payload['order_id'] . 
            $payload['status_code'] . 
            $payload['gross_amount'] . 
            $serverKey
        );

        if ($payload['signature_key'] !== $expectedSignature) {
            return response()->json(['message' => 'Invalid Signature'], 403);
        }

        // 2. Eksekusi Idempoten dalam DB::transaction
        return DB::transaction(function () use ($payload) {
            $transaksi = TransaksiSPP::where('order_id', $payload['order_id'])
                ->lockForUpdate() // Cegah race condition
                ->first();

            if (!$transaksi) {
                return response()->json(['message' => 'Order not found'], 404);
            }

            // Jika transaksi sudah lunas sebelumnya, abaikan (Idempotent)
            if ($transaksi->status === 'Lunas') {
                return response()->json(['message' => 'Already settled'], 200);
            }

            $transactionStatus = $payload['transaction_status'];
            $fraudStatus = $payload['fraud_status'] ?? null;

            if ($transactionStatus === 'settlement' || ($transactionStatus === 'capture' && $fraudStatus === 'accept')) {
                $transaksi->update([
                    'status'         => 'Lunas',
                    'metode_bayar'   => $payload['payment_type'],
                    'waktu_bayar'    => now(),
                ]);

                // Catat ke Buku Jurnal Kas Masuk secara otomatis
                JurnalKas::create([
                    'transaksi_id' => $transaksi->id,
                    'keterangan'   => "Pembayaran SPP Siswa: {$transaksi->nama_siswa}",
                    'debit'        => $payload['gross_amount'],
                    'kredit'       => 0,
                    'tanggal'      => now(),
                ]);
            } elseif (in_array($transactionStatus, ['cancel', 'deny', 'expire'])) {
                $transaksi->update(['status' => 'Gagal']);
            }

            return response()->json(['message' => 'Webhook handled successfully'], 200);
        });
    }
}`,
          },
        },
        {
          id: "idempotency-db",
          heading: "2. Mencegah Double Mutation dengan DB::transaction",
          body:
            "Penyedia payment gateway sering mengirim ulang notifikasi webhook (retry) jika server merespons lebih dari 3 detik. Tanpa pengecekan idempoten dan penguncian baris database (lockForUpdate), pembaruan data kas masuk berpotensi tercatat dua kali (double entry). Dengan DB::transaction(), seluruh operasi terikat secara atomik: berhasil semua atau dibatalkan semua.",
        },
      ],
      takeaways: [
        "Jangan pernah memperbarui status pembayaran finansial hanya mengandalkan frontend return redirect.",
        "Wajib verifikasi SHA512 signature hash untuk memastikan payload benar-benar berasal dari server payment gateway resmi.",
        "Gunakan DB::transaction() dan lockForUpdate() agar callback webhook bersifat idempoten dan bebas dari double-entry kas.",
        "Catat audit trail dan payload log mentah untuk memudahkan rekonsiliasi jika terjadi perbedaan selisih di kemudian hari.",
      ],
    },
  },
  {
    slug: "arsitektur-rest-api-multi-layanan-btp",
    title: "Membangun Arsitektur REST API Modular di Bandung Techno Park",
    description:
      "Pengalaman nyata magang di Bandung Techno Park: standardisasi response payload, otentikasi role-based middleware, dan optimasi skema database PostgreSQL menggunakan DBeaver.",
    publishedAt: "15 Januari 2026",
    readTime: "6 menit baca",
    category: "Arsitektur Perangkat Lunak",
    tags: ["REST API", "PostgreSQL", "Laravel", "DBeaver", "Architecture"],
    content: {
      tableOfContents: [
        { id: "latar-belakang", text: "Tantangan Integrasi Multi-Layanan" },
        { id: "standardisasi-api", text: "1. Format Respons JSON Konsisten" },
        { id: "database-tuning", text: "2. Optimasi Skema PostgreSQL dengan DBeaver" },
        { id: "kesimpulan", text: "Pelajaran dari Lingkungan Produksi" },
      ],
      intro:
        "Saat mengerjakan proyek SuperApps MyBTP di Bandung Techno Park, kami dihadapkan pada puluhan modul layanan yang berbeda: dari pendaftaran inkubasi startup teknologi, pemesanan ruang coworking, hingga reservasi alat laboratorium riset. Kunci kelancaran koordinasi tim adalah standardisasi kontrak REST API yang disepakati sejak hari pertama.",
      sections: [
        {
          id: "standardisasi-api",
          heading: "1. Format Respons JSON Konsisten",
          body:
            "Setiap endpoint API diwajibkan mengembalikan struktur envelope JSON yang seragam. Ini memungkinkan tim frontend membuat interceptor response global yang dapat menangani data pagination dan error secara otomatis tanpa harus memeriksa struktur kunci yang berbeda-beda.",
          codeSnippet: {
            language: "json",
            code: `{
  "success": true,
  "statusCode": 200,
  "message": "Data reservasi fasilitas berhasil dimuat.",
  "data": [
    {
      "id": "RES-2025-089",
      "ruangan": "Coworking Space Alpha",
      "waktu_mulai": "2025-08-10 09:00:00",
      "waktu_selesai": "2025-08-10 17:00:00",
      "status": "Approved"
    }
  ],
  "meta": {
    "total": 45,
    "page": 1,
    "perPage": 10
  }
}`,
          },
        },
        {
          id: "database-tuning",
          heading: "2. Optimasi Skema PostgreSQL dengan DBeaver",
          body:
            "Mengelola relasi antar-tabel multi-modul di PostgreSQL membutuhkan visualisasi yang jelas. Kami menggunakan DBeaver untuk memeriksa constraint foreign keys, mengevaluasi query execution plan (EXPLAIN ANALYZE), dan menambahkan index pada kolom foreign key (seperti user_id dan service_id) yang sering di-join, sehingga waktu eksekusi query tetap di bawah 50ms.",
        },
      ],
      takeaways: [
        "Kontrak REST API yang konsisten menghemat puluhan jam waktu diskusi dan bug fixing antara developer frontend dan backend.",
        "Gunakan DBeaver untuk memantau performa query dan memastikan indexing tabel PostgreSQL sudah optimal.",
        "Terapkan middleware otentikasi berbasis token dengan permission check yang jelas di level route.",
      ],
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dosen Pembimbing Tugas Akhir",
    role: "Dosen Pembimbing D4 Rekayasa Perangkat Lunak",
    company: "Politeknik Negeri Indramayu (POLINDRA)",
    quote:
      "Chandra menunjukkan dedikasi yang sangat baik dalam merancang Sistem Pendukung Keputusan UKT. Penerapan algoritma SAW pada backend Laravel-nya terstruktur rapi, akurat, dan skema database PostgreSQL-nya memenuhi standar pengujian akademik dan industri.",
  },
  {
    name: "Supervisor Magang Industri",
    role: "Senior Software Engineer",
    company: "Bandung Techno Park (BTP)",
    quote:
      "Selama magang di tim SuperApps MyBTP, Chandra sangat cekatan dalam mengembangkan fitur REST API, mengelola basis data PostgreSQL, dan berkolaborasi bersama tim. Kodingannya bersih, terorganisir, dan mudah dipahami oleh anggota tim lainnya.",
  },
  {
    name: "Pengelola Administrasi Sekolah Alam",
    role: "Kepala Administrasi & Keuangan",
    company: "Sekolah Alam",
    quote:
      "Sistem pembayaran SPP yang dibangun Chandra sangat membantu operasional harian kami. Pembayaran dari orang tua siswa kini tercatat otomatis secara real-time dan bendahara terbebas dari repotnya rekonsiliasi manual setiap akhir bulan.",
  },
];
