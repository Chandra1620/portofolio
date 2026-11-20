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
  role: "Fullstack Developer & Mobile Developer",
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
  gpa: "IPK 3.80",
  positioning:
    "Fullstack Developer & Mobile Developer lulusan D4 RPL POLINDRA (IPK 3.80) dan Founder Pepra Lab. Berpengalaman mengerjakan 8 proyek aplikasi web dan mobile sejak 2023 berbasis Laravel, Flutter, React, Supabase, dan PostgreSQL/MySQL.",
  summary:
    "Lulusan D4 Rekayasa Perangkat Lunak Politeknik Negeri Indramayu (IPK 3.80). Berpengalaman mengerjakan 8 proyek aplikasi web dan mobile sejak 2023, dari frontend developer hingga fullstack dan mobile developer. Terbiasa membangun sistem berbasis Laravel, Flutter, dan React dengan REST API, PostgreSQL/MySQL, dan Supabase, termasuk dashboard analitik real-time, CMS multi-peran, dan notifikasi multi-kanal. Terbiasa bekerja dalam tim menggunakan Git, menguji aplikasi secara end-to-end, dan cepat beradaptasi dengan teknologi baru untuk menghasilkan solusi digital yang rapi, aman, dan bermanfaat bagi pengguna.",
  availability: "Terbuka untuk posisi Full-time, Kontrak & Proyek Freelance",
  portraitImage: portrait,
  heroImage: heroFeature,
};

export const HIGHLIGHT_STATS = [
  { value: "8 Proyek", label: "Aplikasi Web & Mobile", sub: "Produksi, Startup & Industri" },
  { value: "IPK 3.80", label: "D4 RPL POLINDRA", sub: "Lulusan Rekayasa Perangkat Lunak" },
  { value: "Founder", label: "Pepra Lab", sub: "Startup Produk Digital & Web" },
  { value: "Fullstack", label: "Laravel, Flutter & React", sub: "Supabase, REST API & PostgreSQL" },
];

export const WORK_PRINCIPLES = [
  {
    number: "01",
    title: "Struktur Bersih & Terpisah (Separation of Concerns)",
    description:
      "Menerapkan pola arsitektur MVC dan Service-Repository pattern agar controller tetap ramping, logika bisnis terisolasi, kode mudah dibaca, serta memudahkan penulisan unit test.",
  },
  {
    number: "02",
    title: "Keamanan Berlapis & Sanitasi Input (Security-First)",
    description:
      "Mengamankan sistem dengan sanitasi input kustom pencegah XSS, filter bot traffic, proteksi manipulasi suara polling, Keystore/Keychain device storage, dan Role-Based Access Control (RBAC) yang ketat.",
  },
  {
    number: "03",
    title: "Sinkronisasi Real-Time & Event-Driven",
    description:
      "Mengoptimalkan pengalaman pengguna dengan notifikasi multi-kanal (OneSignal, FCM, notifikasi lokal terjadwal) dan integrasi websocket real-time via Supabase Realtime.",
  },
  {
    number: "04",
    title: "Pengujian Menyeluruh (End-to-End Testing)",
    description:
      "Memastikan setiap alur bisnis teruji dari hulu ke hilir: simulasi transaksi, validasi input batas, penanganan edge-case, dan stabilitas server sebelum rilis ke lingkungan produksi.",
  },
];

export const FUN_FACTS = [
  {
    icon: "🚀",
    fact: "Founder di Pepra Lab — Menginisiasi startup teknologi tahap awal bersama 4 co-founder, menangani perancangan produk SaaS pendidikan hingga website company profile dan portal berita klien.",
  },
  {
    icon: "⚽",
    fact: "Penggemar sepak bola & taktik lapangan — Mengagumi peran playmaker nomor 10 yang membaca ruang, mengatur tempo, dan menghubungkan lini. Filosofi visi dan distribusi bola ini saya terapkan saat merancang arsitektur sistem.",
  },
  {
    icon: "🔧",
    fact: "Alumni SMK Teknik Kendaraan Ringan — Pengalaman membongkar mesin mekanis melatih logika diagnosis sistem yang terstruktur, teliti hingga ke detail terkecil, dan tahan banting saat debugging error.",
  },
  {
    icon: "📱",
    fact: "Eksplorasi Mobile & IoT — Menguasai Flutter & Dart untuk aplikasi kepegawaian multi-role, serta simulasi logika mikrokontroler (ESP32/Arduino) di platform Wokwi di waktu luang.",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "redesign-portal-berita-cuplik",
    title: "Redesign Portal Berita Cuplik.com",
    tagline: "Modernisasi Portal Media Berita Skala Produksi dengan Laravel 13, PostgreSQL & Tailwind CSS 4",
    category: "Web App",
    client: "Cuplik.com · Pepra Lab",
    year: "2026",
    duration: "Oktober — November 2026",
    role: "Fullstack Developer",
    team: "Pepra Lab",
    stack: [
      "Laravel 13",
      "PostgreSQL",
      "Tailwind CSS 4",
      "PHP",
      "MVC",
      "REST API",
      "Anti-XSS Sanitization",
      "PDF Generator",
    ],
    thumbnail: workPulse,
    featured: true,
    metrics: ["Laravel 13 & MVC", "Real Count Pilkada", "Proteksi XSS & Bot Filter"],
    summary:
      "Membangun ulang portal media Cuplik.com dari PHP native 7.4 ke Laravel 13, PostgreSQL, dan Tailwind CSS 4 berarsitektur MVC dengan desain bergaya koran modern. Dilengkapi live search, polling proteksi manipulasi suara, Real Count Pilkada, kanal aspirasi warga, unduh artikel PDF, CMS multi-peran (Super Admin, Admin, Redaktur, Member), sanitasi HTML kustom anti-XSS, dan penghitung pembaca unik berfilter bot.",
    liveUrl: "https://cuplik.com",
    repoUrl: "https://github.com/chandraapriyanto/cuplik-portal-laravel",
    caseStudy: {
      overview:
        "Cuplik.com merupakan portal media berita yang sebelumnya menggunakan PHP native 7.4 dengan tampilan lama dan arsitektur belum terstruktur. Melalui Pepra Lab, proyek redesign ini bertujuan memodernisasi performa, desain visual koran kontemporer, dan keamanan sistem secara menyeluruh.",
      problem:
        "Tampilan lama belum responsif di ponsel modern, rentan terhadap celah keamanan input artikel (XSS), belum memiliki proteksi kecurangan voting suara pada polling, serta redaksi kesulitan melacak produktivitas jurnalis secara transparan.",
      objectives: [
        "Membangun ulang seluruh arsitektur portal berita dari PHP native 7.4 ke Laravel 13, PostgreSQL, dan Tailwind CSS 4 berarsitektur MVC.",
        "Mengembangkan fitur portal publik: live search instan, polling dengan proteksi manipulasi suara, tabulasi data Real Count Pilkada, kanal aspirasi warga, dan unduh artikel format PDF.",
        "Membangun CMS multi-peran (Super Admin, Admin, Redaktur, Member) lengkap dengan sistem moderasi berita, analitik produktivitas redaksi, dan pengajuan iklan mandiri.",
        "Menerapkan pengamanan sanitasi HTML kustom untuk mencegah serangan XSS, middleware akses CMS berjenjang, dan penghitungan pembaca unik dengan filter bot.",
      ],
      process: [
        {
          step: "01",
          title: "Audit Basis Data & Migrasi Skema ke PostgreSQL",
          description:
            "Menganalisis database PHP native lama, merancang skema relasional baru di PostgreSQL dengan normalisasi tabel artikel, kategori, tags, author, voting, dan iklan.",
        },
        {
          step: "02",
          title: "Implementasi Arsitektur MVC Laravel 13 & Service Layer",
          description:
            "Menyusun controller ramping dengan memisahkan logika moderasi berita, penghitungan pembaca unik, dan kalkulasi polling ke dedicated service classes.",
        },
        {
          step: "03",
          title: "Pengembangan Antarmuka Koran Modern dengan Tailwind CSS 4",
          description:
            "Merancang layout grid responsif ala media modern yang nyaman dibaca di mobile dan desktop, tipografi editorial elegan, serta mode pratinjau berita.",
        },
        {
          step: "04",
          title: "Pembangunan Fitur Interaktif & Modul Real Count Pilkada",
          description:
            "Membangun komponen tabulasi Real Count per-TPS/kecamatan, fitur live search AJAX tanpa reload, voting polling terenkripsi IP/cookie, dan generator PDF artikel.",
        },
        {
          step: "05",
          title: "Pengamanan Sanitasi HTML Anti-XSS & Filter Bot",
          description:
            "Menerapkan sanitasi input artikel kustom pada editor berita untuk mengeliminasi tag berbahaya (XSS), serta middleware filter crawler bot pada pencatatan view count.",
        },
      ],
      technicalDecisions: [
        {
          decision: "Migrasi ke Laravel 13 & PostgreSQL",
          reason:
            "Menghadirkan performa eksekusi query relasional yang jauh lebih stabil, ORM Eloquent yang ekspresif, dan sistem migrasi database yang aman untuk jangka panjang.",
          alternative: "Mempertahankan PHP native dengan patch keamanan parsial (rawan hutang teknis).",
        },
        {
          decision: "Sanitasi HTML Kustom & Filter Bot pada View Count",
          reason:
            "Mencegah jurnalis atau kontributor luar menyisipkan skrip berbahaya via WYSIWYG editor dan memastikan analitik jumlah pembaca artikel mencerminkan traffic manusia asli.",
          alternative: "Menggunakan default strip_tags sederhana (merusak format styling artikel redaksi).",
        },
      ],
      keyFeatures: [
        {
          title: "CMS Multi-Peran (4 Tingkat Akses)",
          description:
            "Super Admin, Admin, Redaktur, dan Member memiliki workspace terpisah dengan alur persetujuan (approval) berita yang rapi dan analitik produktivitas tim redaksi.",
        },
        {
          title: "Tabulasi Real Count Pilkada & Polling Aman",
          description:
            "Sistem tabulasi hasil suara pemilu cepat serta sistem polling publik dengan algoritma pencegahan manipulasi suara ganda.",
        },
        {
          title: "Live Search & Unduh Berita PDF",
          description:
            "Pencarian berita real-time dengan pencocokan kata kunci cepat serta konversi artikel berita menjadi dokumen PDF siap arsip.",
        },
        {
          title: "Kanal Aspirasi Warga & Pengajuan Iklan Mandiri",
          description:
            "Portal keterlibatan masyarakat untuk menyampaikan aspirasi daerah dan sistem pengajuan slot iklan bagi mitra bisnis lokal.",
        },
      ],
      challenges: [
        {
          issue: "Migrasi ribuan artikel berita lama yang memiliki format HTML tidak standar dari sistem legacy.",
          solution:
            "Menulis command artisan Laravel transformer khusus yang membersihkan tag HTML rusak, menyelaraskan path gambar lama, dan memetakan metadata ke skema PostgreSQL baru.",
        },
      ],
      results: [
        {
          metric: "Modernisasi 100%",
          description: "Portal Cuplik.com sukses bertransisi penuh ke Laravel 13 MVC dan Tailwind CSS 4.",
        },
        {
          metric: "Celah XSS Tereliminasi",
          description: "Seluruh konten artikel lolos uji sanitasi HTML kustom tanpa mengorbankan formatting teks.",
        },
        {
          metric: "4 Role Redaksi Terintegrasi",
          description: "Manajemen penerbitan berita kini terstruktur dari draft jurnalis hingga persetujuan redaktur.",
        },
        {
          metric: "Real Count & Polling Terlindungi",
          description: "Data tabulasi pilkada dan voting masyarakat bebas dari manipulasi bot.",
        },
      ],
      lessonsLearned:
        "Merancang portal berita skala produksi menuntut keseimbangan antara kemudahan tim redaksi menerbitkan konten dinamis dengan ketegasan sanitasi keamanan sistem agar terlindung dari eksploitasi XSS dan bot manipulatif.",
      gallery: [
        { title: "Portal Berita Cuplik.com", caption: "Desain responsif bergaya koran modern dengan Tailwind CSS 4", image: workPulse },
        { title: "Dashboard CMS Redaksi", caption: "Panel moderasi berita, analitik produktivitas, dan manajemen peran", image: workLumen },
      ],
    },
  },
  {
    slug: "buwuh-platform-undangan-digital",
    title: "Buwuh.com — Platform Undangan Digital",
    tagline: "Aplikasi Undangan Digital Modern Berbasis React 19, TypeScript, Tailwind CSS 4 & TanStack Query",
    category: "Web App",
    client: "Buwuh.com",
    year: "2026",
    duration: "Agustus — Oktober 2026",
    role: "Frontend Developer",
    team: "Tim Produk Buwuh.com",
    stack: [
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "TanStack React Query",
      "Axios",
      "REST API",
      "RBAC",
    ],
    thumbnail: workSolace,
    featured: true,
    metrics: ["React 19 & TypeScript", "TanStack Query Cache", "RBAC & Magic Link"],
    summary:
      "Membangun dashboard pengelolaan undangan dan langganan serta modul RSVP, buku tamu, dan hadiah pada aplikasi undangan digital berbasis React 19, TypeScript, dan Tailwind CSS 4. Mengintegrasikan fitur yang semula memakai data mock dengan backend REST API via Axios dan TanStack React Query, menerapkan RBAC petugas, magic link akses instan, unggah media, pemisahan catatan buwuh mandiri vs berbasis event, landing page responsif, dan perbaikan alur login Facebook OAuth.",
    liveUrl: "https://buwuh.com",
    repoUrl: "https://github.com/chandraapriyanto/buwuh-frontend-react",
    caseStudy: {
      overview:
        "Buwuh.com adalah platform SaaS undangan digital yang memfasilitasi pasangan calon pengantin untuk merancang undangan interaktif, mengelola konfirmasi kehadiran tamu (RSVP), menerima amplop digital (buwuh), serta mengatur buku tamu di meja resepsi acara.",
      problem:
        "Aplikasi sebelumnya masih menggunakan data tiruan (mock data) tanpa integrasi API riil, manajemen state client sering mengalami refetch berlebih, belum ada hak akses berjenjang bagi petugas buku tamu di venue, serta alur login Facebook mengalami kegagalan callback token.",
      objectives: [
        "Membangun antarmuka dashboard manajemen undangan dan langganan paket pengguna berbasis React 19, TypeScript, dan Tailwind CSS 4.",
        "Mengembangkan modul interaktif: formulir RSVP dinamis, buku tamu digital, dan amplop hadiah/hadiah transfer.",
        "Menggantikan data mock dengan integrasi REST API backend menggunakan Axios dan TanStack React Query untuk state synchronization yang efisien.",
        "Menerapkan RBAC untuk petugas buku tamu, magic link akses instan tanpa password, serta pemisahan catatan buwuh mandiri dengan catatan berbasis event.",
        "Membangun landing page Buwuh.com dan memperbaiki alur autentikasi Facebook OAuth Login.",
      ],
      process: [
        {
          step: "01",
          title: "Setup Arsitektur React 19 & Konfigurasi TypeScript",
          description:
            "Menyusun struktur folder modular, deklarasi tipe TypeScript yang ketat untuk payload API undangan, tamu, RSVP, dan transaksi hadiah.",
        },
        {
          step: "02",
          title: "Migrasi Data Mock ke TanStack React Query & Axios",
          description:
            "Menghubungkan endpoint REST API backend dengan query caching otomatis, optimistic updates, dan penanganan status error/loading yang mulus.",
        },
        {
          step: "03",
          title: "Pembangunan Modul RSVP & Buku Tamu Digital",
          description:
            "Merancang formulir konfirmasi kehadiran interaktif dengan barcode scan check-in di meja penerima tamu acara pernikahan.",
        },
        {
          step: "04",
          title: "Implementasi RBAC Petugas & Magic Link Akses",
          description:
            "Membangun alur otorisasi khusus di mana petugas venue dapat mengakses scanner buku tamu via tautan magic link tanpa perlu registrasi akun penuh.",
        },
        {
          step: "05",
          title: "Landing Page & Perbaikan Login Facebook",
          description:
            "Membangun landing page modern dan memperbaiki penanganan redirect URI serta pertukaran access token pada integrasi Facebook SDK/OAuth.",
        },
      ],
      technicalDecisions: [
        {
          decision: "Pemanfaatan TanStack React Query untuk Server State",
          reason:
            "Menghilangkan boilerplate useEffect yang berulang, menyediakan caching otomatis, background refetching saat window focus, dan mutasi optimistik.",
          alternative: "Redux / Context API murni (terlalu banyak boilerplate dan rawan re-render tidak perlu).",
        },
        {
          decision: "Akses Magic Link untuk Petugas Buku Tamu",
          reason:
            "Mempermudah panitia resepsi di hari H acara yang sering kali berganti orang, sehingga cukup membuka link unik terenkripsi untuk mencatat kehadiran tamu.",
          alternative: "Wajib login email & password (memperlambat alur operasional penerimaan tamu di venue).",
        },
      ],
      keyFeatures: [
        {
          title: "Dashboard Pengelolaan Undangan & Langganan",
          description:
            "Manajemen tema undangan, susunan acara, galeri pre-wedding, musik latar, dan pemantauan masa aktif paket langganan SaaS.",
        },
        {
          title: "Modul RSVP & Hadiah Digital Terintegrasi",
          description:
            "Pencatatan konfirmasi kehadiran tamu secara otomatis dan pengelolaan nomor rekening/QRIS hadiah dengan rekapitulasi nominal transparan.",
        },
        {
          title: "Buku Tamu Check-in & RBAC Petugas",
          description:
            "Pencatatan tamu hadir di lokasi acara dengan scan QR code undangan dan hak akses terbatas khusus petugas meja registrasi.",
        },
        {
          title: "Pemisahan Catatan Buwuh Mandiri vs Berbasis Event",
          description:
            "Pengguna dapat mencatat amplop buwuh kondangan pribadi secara independen maupun mencatat amplop yang diterima pada pesta pernikahan.",
        },
      ],
      challenges: [
        {
          issue: "Koneksi internet di lokasi pesta pernikahan sering kali tidak stabil saat petugas melakukan check-in tamu.",
          solution:
            "Mengimplementasikan TanStack Query offline cache dengan persistensi local storage dan retry mechanism saat koneksi tersambung kembali.",
        },
      ],
      results: [
        {
          metric: "100% Data Riil",
          description: "Seluruh modul dashboard dan RSVP sukses bermigrasi dari data mock ke REST API backend.",
        },
        {
          metric: "Performa React 19",
          description: "Waktu interaksi UI gegas dengan pemanfaatan React 19 concurrent features dan Tailwind CSS 4.",
        },
        {
          metric: "Magic Link Efisien",
          description: "Petugas venue dapat langsung mengoperasikan buku tamu tanpa login kredensial rumit.",
        },
        {
          metric: "Facebook Login Stabil",
          description: "Alur OAuth Facebook Login berhasil diperbaiki dengan tingkat keberhasilan login 100%.",
        },
      ],
      lessonsLearned:
        "Memadukan React 19 dengan TypeScript dan TanStack React Query menciptakan standar pengembangan frontend yang sangat tangguh terhadap perubahan skema API backend.",
      gallery: [
        { title: "Dashboard Pengantin Buwuh.com", caption: "Antarmuka manajemen undangan, tamu, dan buku tamu", image: workSolace },
        { title: "Landing Page & RSVP", caption: "Tampilan landing page berkonversi tinggi dan formulir kehadiran", image: workCadence },
      ],
    },
  },
  {
    slug: "simpeg-mobile-tirta-darma-ayu",
    title: "SIMPEG Mobile — PERUMDAM Tirta Darma Ayu",
    tagline: "Aplikasi Kepegawaian Mobile Flutter untuk 7 Peran Pengguna Terintegrasi Supabase & Laravel REST API",
    category: "Mobile App",
    client: "PERUMDAM Tirta Darma Ayu",
    year: "2026",
    duration: "Agustus — September 2026",
    role: "Mobile Developer (Flutter)",
    team: "Tim Pengembang SIMPEG",
    stack: [
      "Flutter",
      "Dart",
      "Supabase",
      "Laravel REST API",
      "OneSignal",
      "Firebase Cloud Messaging",
      "Supabase Realtime",
    ],
    thumbnail: workLumen,
    featured: true,
    metrics: ["7 Peran Pengguna", "18 Status Pelanggaran", "Notifikasi Multi-Kanal"],
    summary:
      "Membangun aplikasi kepegawaian mobile dengan Flutter untuk 7 peran pengguna (pegawai hingga direktur utama), terintegrasi dengan Supabase dan Laravel REST API. Mengembangkan modul pengaduan pelanggaran karyawan berjenjang (18 status alur) dengan unggah bukti foto, dokumen, dan rekaman suara ke Supabase Storage, serta penerbitan SK sanksi. Mengimplementasikan autentikasi dengan fitur Remember Me terenkripsi (Keystore/Keychain), pembagian kata sandi massal, notifikasi multi-kanal (OneSignal, FCM, notifikasi lokal terjadwal), dan sinkronisasi real-time via Supabase Realtime.",
    liveUrl: "https://simpeg.tirtadarmaayu.co.id",
    repoUrl: "https://github.com/chandraapriyanto/simpeg-mobile-flutter",
    caseStudy: {
      overview:
        "PERUMDAM Tirta Darma Ayu (BUMD Air Minum Indramayu) mengelola ratusan pegawai di berbagai kantor cabang dan instalasi pengolahan air. SIMPEG Mobile dibangun untuk memfasilitasi monitoring kepegawaian, disiplin kerja, dan eskalasi kasus internal secara transparan.",
      problem:
        "Penanganan laporan pelanggaran disiplin pegawai sebelumnya lambat karena alur disposisi birokrasi manual, bukti rekaman suara/foto tercecer di grup chat, serta atasan tidak menerima notifikasi instan saat laporan darurat diajukan.",
      objectives: [
        "Membangun aplikasi mobile cross-platform (Android & iOS) dengan Flutter untuk 7 peran pengguna (Pegawai, Supervisor, Kepala Bagian, HRD, SPI, Direktur, hingga Direktur Utama).",
        "Mengembangkan modul pengaduan pelanggaran karyawan berjenjang dengan 18 status alur kerja (mulai dari verifikasi bukti, investigasi, mediasi, hingga terbit SK sanksi resmi).",
        "Mengintegrasikan Supabase Storage untuk upload bukti multi-format: foto kamera, dokumen PDF, dan file rekaman audio pengakuan/saksi.",
        "Menerapkan sistem autentikasi aman dengan fitur Remember Me terenkripsi pada hardware Keystore (Android) / Keychain (iOS) dan distribusi sandi massal.",
        "Mengintegrasikan arsitektur notifikasi multi-kanal (OneSignal, Firebase Cloud Messaging, dan notifikasi lokal terjadwal) serta sinkronisasi data via Supabase Realtime.",
      ],
      process: [
        {
          step: "01",
          title: "Pemetaan Alur 18 Status & State Machine",
          description:
            "Merumuskan diagram status transisi laporan pelanggaran bersama divisi kepegawaian dan hukum PERUMDAM untuk memastikan setiap disposisi memiliki penanggung jawab resmi.",
        },
        {
          step: "02",
          title: "Pengembangan Antarmuka Flutter & Role-Based Views",
          description:
            "Merancang antarmuka terstruktur dengan Flutter di mana dashboard, menu tindakan, dan hak approval menyesuaikan secara dinamis dengan 1 dari 7 peran pengguna.",
        },
        {
          step: "03",
          title: "Integrasi Supabase Storage & Upload Audio/Dokumen",
          description:
            "Membangun audio recorder internal di aplikasi Flutter dan mengunggah rekaman suara serta berkas bukti terenkripsi ke bucket Supabase Storage.",
        },
        {
          step: "04",
          title: "Pengamanan Autentikasi dengan Keystore/Keychain",
          description:
            "Menyimpan token sesi dan kredensial 'Remember Me' menggunakan flutter_secure_storage yang memanfaatkan enkripsi hardware bawaan smartphone.",
        },
        {
          step: "05",
          title: "Integrasi Notifikasi Multi-Kanal & Realtime Listener",
          description:
            "Menghubungkan OneSignal dan FCM untuk push notification saat status laporan berubah, serta Supabase Realtime stream agar badge notifikasi dan status terupdate instan.",
        },
      ],
      technicalDecisions: [
        {
          decision: "Arsitektur Hibrida: Laravel REST API + Supabase Cloud",
          reason:
            "Logika bisnis inti, data penggajian, dan master kepegawaian diproses aman di server Laravel, sedangkan Supabase dimanfaatkan untuk menangani event Realtime dan storage berkas multimedia tanpa membebani server lokal.",
          alternative: "Menyimpan seluruh rekaman audio dan dokumen di server hosting lokal (berisiko kehabisan disk dan bandwidth).",
        },
        {
          decision: "Enkripsi Hardware Keystore / Keychain untuk Remember Me",
          reason:
            "Melindungi token autentikasi pejabat dan staf dari upaya extraction atau reverse engineering pada perangkat yang di-root/jailbreak.",
          alternative: "Menyimpan token di SharedPreferences biasa (sangat rentan dicuri).",
        },
      ],
      keyFeatures: [
        {
          title: "Modul Pengaduan Pelanggaran 18 Alur Berjenjang",
          description:
            "Sistem pelaporan lengkap dengan alur disposisi antar-pejabat, pencatatan kronologi, histori tindakan, hingga draft penerbitan Surat Keputusan (SK) sanksi.",
        },
        {
          title: "Upload Bukti Multi-Format (Audio, Dokumen & Foto)",
          description:
            "Perekaman suara langsung dari aplikasi, upload dokumen PDF hasil pemeriksaan, dan foto bukti lapangan dengan viewer terintegrasi.",
        },
        {
          title: "Notifikasi Multi-Kanal (OneSignal, FCM, Lokal)",
          description:
            "Pemberitahuan push otomatis ke smartphone pejabat pemeriksa saat ada laporan baru, serta notifikasi lokal pengingat batas waktu penyelesaian disposisi.",
        },
        {
          title: "Akses 7 Peran Pengguna & Supabase Realtime",
          description:
            "Navigasi adaptif dari staf biasa hingga direksi dengan pembaruan status pengaduan dan badge notifikasi secara real-time tanpa reload.",
        },
      ],
      challenges: [
        {
          issue: "Ukuran file rekaman suara pemeriksaan saksi sering kali besar dan memakan waktu upload saat sinyal pegawai lemah.",
          solution:
            "Menerapkan kompresi format audio AAC berbitrate optimal pada Flutter sebelum proses unggah ke Supabase Storage dimulai.",
        },
      ],
      results: [
        {
          metric: "7 Peran Beroperasi",
          description: "Seluruh level struktur organisasi PERUMDAM aktif menggunakan sistem dengan hak akses terisolasi.",
        },
        {
          metric: "18 Status Terlacak",
          description: "Tidak ada lagi laporan disiplin pegawai yang macet atau tidak diketahui status disposisinya.",
        },
        {
          metric: "Audit Bukti Terpusat",
          description: "Bukti rekaman suara dan dokumen tersimpan rapi di Supabase Storage siap diakses tim pemeriksa.",
        },
        {
          metric: "Respon Real-Time",
          description: "Notifikasi push OneSignal & FCM memastikan pejabat menerima info disposisi dalam hitungan detik.",
        },
      ],
      lessonsLearned:
        "Membangun aplikasi mobile enterprise memerlukan perhatian ketat pada aspek keamanan perangkat lokal (Keystore/Keychain), keandalan pengunggahan berkas media, dan kecepatan aliran informasi lewat push notification multi-kanal.",
      gallery: [
        { title: "SIMPEG Mobile PERUMDAM", caption: "Antarmuka aplikasi Flutter dengan alur 18 status pengaduan", image: workLumen },
        { title: "Audio & Bukti Pengaduan", caption: "Player rekaman suara pemeriksaan saksi dan dokumen bukti", image: heroFeature },
      ],
    },
  },
  {
    slug: "spk-ukt-mahasiswa-baru",
    title: "Sistem Pendukung Keputusan Penentuan UKT Mahasiswa Baru",
    tagline: "Sistem Pengambilan Keputusan Multi-Kriteria Metode Simple Additive Weighting (SAW) Berbasis Web",
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
      "Merancang dan membangun sistem pendukung keputusan berbasis web (Laravel + PostgreSQL/Supabase) dengan metode Simple Additive Weighting (SAW) untuk menentukan golongan UKT mahasiswa baru secara objektif. Mengembangkan REST API dan arsitektur hibrida, serta dashboard analitik real-time untuk mempercepat proses verifikasi dan monitoring data pendaftar, serta antarmuka responsif bagi tim verifikator desktop maupun mobile.",
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
    featured: false,
    metrics: ["Integrasi Multi-Layanan", "Standarisasi REST API", "Manajemen DB via DBeaver"],
    summary:
      "Mengembangkan dan memelihara fitur aplikasi web multi-layanan menggunakan Laravel, HTML, CSS, JavaScript, dan Tailwind CSS. Mengimplementasikan REST API serta mengelola basis data PostgreSQL (DBeaver) untuk kebutuhan lintas modul aplikasi, serta melakukan pengujian dan perbaikan bug bersama tim sehingga aplikasi berjalan stabil di lingkungan produksi.",
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
    slug: "sistem-sinkronisasi-kehadiran-pegawai",
    title: "Sistem Sinkronisasi Kehadiran Pegawai dengan Surat Tugas",
    tagline: "Platform Manajemen Presensi & Validasi Surat Tugas Dinas Pegawai Berbasis Web",
    category: "Frontend & UI",
    client: "POLINDRA",
    year: "2024",
    duration: "Oktober — Desember 2024",
    role: "Frontend Developer",
    team: "POLINDRA",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "REST API"],
    thumbnail: workCadence,
    featured: false,
    metrics: ["Sinkronisasi Status Dinas", "In-Browser PDF Preview", "UI Responsif Multi-Device"],
    summary:
      "Membangun antarmuka responsif dengan HTML, CSS, JavaScript, Bootstrap, dan Tailwind agar data kehadiran mudah dibaca di berbagai perangkat. Berkolaborasi dengan tim backend untuk integrasi API dan melakukan pengujian UI guna memastikan fungsionalitas sesuai kebutuhan pengguna.",
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
    slug: "sistem-pembayaran-spp-sekolah-alam",
    title: "Sistem Pembayaran SPP Sekolah Alam Berbasis Website",
    tagline: "Aplikasi Pembayaran SPP Berbasis Laravel 10, Blade & MySQL",
    category: "Web App",
    client: "POLINDRA & Sekolah Alam",
    year: "2024",
    duration: "Maret — Juni 2024",
    role: "Fullstack Developer",
    team: "POLINDRA",
    stack: ["Laravel 10", "Blade", "MySQL", "Eloquent", "Bootstrap", "JavaScript"],
    thumbnail: workSolace,
    featured: false,
    metrics: ["Laravel 10 & Blade", "Relasi Eloquent", "Kwitansi & Kartu SPP"],
    summary:
      "Mengembangkan aplikasi pembayaran SPP berbasis Laravel 10, Blade, dan MySQL untuk operator sekolah dan wali murid. Membangun pengelolaan data siswa, biaya, tagihan, rekening sekolah, dan pembayaran dengan relasi antartabel menggunakan Eloquent. Mengimplementasikan alur pembayaran transfer: unggah bukti bayar oleh wali, notifikasi ke operator, konfirmasi pembayaran, serta kwitansi dan kartu SPP, serta melakukan pengujian end-to-end pada seluruh alur pembayaran.",
    liveUrl: "https://spp-sekolahalam.demo.app",
    repoUrl: "https://github.com/chandraapriyanto/sistem-spp-sekolah-alam",
    caseStudy: {
      overview:
        "Sekolah Alam mengelola administrasi iuran SPP bulanan siswa. Pengurus yayasan membutuhkan aplikasi pembayaran terstruktur agar operator sekolah dan wali murid dapat mengelola dan memverifikasi pembayaran secara transparan.",
      problem:
        "Sebelumnya, pencatatan dilakukan manual pada buku besar fisik dan konfirmasi via chat personal, mengakibatkan kwitansi hilang dan sulitnya rekapitulasi kartu SPP siswa.",
      objectives: [
        "Membangun aplikasi pembayaran SPP berbasis Laravel 10, Blade, dan basis data MySQL.",
        "Mengembangkan pengelolaan data siswa, pos biaya, tagihan per-kelas, dan rekening bank sekolah dengan relasi Eloquent.",
        "Mengimplementasikan alur pembayaran transfer: unggah bukti bayar oleh wali murid, notifikasi ke operator, dan konfirmasi lunas.",
        "Menyediakan generator kwitansi pembayaran resmi serta kartu SPP digital.",
        "Melakukan pengujian end-to-end dari proses transaksi hingga pencatatan dan pelaporan data.",
      ],
      process: [
        {
          step: "01",
          title: "Perancangan Relasi Antartabel dengan Eloquent",
          description:
            "Merancang relasi one-to-many dan polymorphic antartabel siswa, kelas, tagihan SPP, pembayaran, dan log konfirmasi operator.",
        },
        {
          step: "02",
          title: "Pengembangan Modul Operator Sekolah",
          description:
            "Membangun panel input pos biaya tahunan, penagihan massal per-tingkat kelas, dan validasi bukti transfer yang diunggah wali murid.",
        },
        {
          step: "03",
          title: "Portal Wali Murid & Alur Unggah Bukti Transfer",
          description:
            "Membuat antarmuka wali murid untuk melihat rincian tunggakan, nomor rekening resmi sekolah, dan formulir upload slip bukti transfer bank.",
        },
        {
          step: "04",
          title: "Penerbitan Kwitansi & Kartu SPP",
          description:
            "Menghasilkan kartu SPP otomatis dengan penanda lunas setiap bulan dan kwitansi cetak resmi format PDF.",
        },
        {
          step: "05",
          title: "Pengujian End-to-End Sistem",
          description:
            "Melakukan verifikasi seluruh skenario pembayaran dari upload wali hingga rekonsiliasi kas operator.",
        },
      ],
      technicalDecisions: [
        {
          decision: "Pemanfaatan Eloquent ORM dengan Eager Loading",
          reason:
            "Mencegah problem query N+1 saat memuat daftar ratusan siswa beserta status kartu SPP bulanannya.",
          alternative: "Query builder mentah tanpa relasi model.",
        },
      ],
      keyFeatures: [
        {
          title: "Alur Pembayaran Transfer & Verifikasi Bukti",
          description: "Wali murid mengunggah slip transfer bank dan operator memverifikasi dengan satu klik konfirmasi.",
        },
        {
          title: "Kwitansi & Kartu SPP Digital",
          description: "Penerbitan bukti lunas resmi berformat PDF serta kartu kontrol pembayaran bulanan.",
        },
        {
          title: "Pengelolaan Siswa & Rekening Sekolah",
          description: "Manajemen data induk siswa, riwayat kelas, dan rekening bank tujuan transfer.",
        },
      ],
      challenges: [
        {
          issue: "Wali murid sering mengunggah foto bukti bayar dengan ukuran kamera resolusi terlalu besar.",
          solution:
            "Menerapkan kompresi gambar server-side di Laravel sebelum disimpan ke penyimpanan lokal.",
        },
      ],
      results: [
        {
          metric: "Alur Terstandarisasi",
          description: "Seluruh bukti bayar tersimpan rapi dan terhubung langsung ke tagihan siswa.",
        },
        {
          metric: "Cetak Kartu Otomatis",
          description: "Wali murid dapat langsung mengunduh kartu SPP dan kwitansi kapan pun dibutuhkan.",
        },
      ],
      lessonsLearned:
        "Penerapan relasi Eloquent yang rapi sangat menyederhanakan pelaporan finansial sekolah dan memastikan audit transaksi berjalan transparan.",
      gallery: [
        { title: "Portal Pembayaran SPP", caption: "Halaman riwayat tagihan dan verifikasi bukti transfer", image: workSolace },
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
    team: "POLINDRA",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "REST API"],
    thumbnail: workCadence,
    featured: false,
    metrics: ["Manajemen Stok Bahan", "UI Ergonomis Tablet", "Pencatatan Distribusi Agen"],
    summary:
      "Membangun antarmuka pengguna responsif dengan HTML, CSS, JavaScript, dan Bootstrap. Mengintegrasikan API bersama tim backend agar pertukaran data produksi akurat, mencakup pencatatan stok bahan baku, rekapitulasi output produksi harian, dan distribusi pengiriman ke agen mitra pasar.",
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
          description: "Seluruh pencatatan bahan baku tepung dan kemasan sinkron dengan data produksi.",
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
    title: "Sistem Web Kustom (Laravel / React / REST API)",
    badge: "Keahlian Utama",
    targetAudience: "Institusi, UMKM, Startup & Kebutuhan Internal Perusahaan",
    description:
      "Pengembangan aplikasi web berbasis Laravel dan React dari nol dengan arsitektur backend yang aman (RBAC, Anti-XSS), skema database PostgreSQL/MySQL yang optimal, serta integrasi REST API dan dashboard interaktif.",
    features: [
      "Arsitektur backend Laravel (PHP) & REST API berstandar MVC",
      "Perancangan basis data relasional PostgreSQL / MySQL & Supabase",
      "Frontend modern (React 19 / TypeScript / Tailwind CSS 4)",
      "Dashboard analitik, CMS multi-peran & hak akses pengguna (RBAC)",
      "Pengamanan sanitasi input anti-XSS & filter bot traffic",
      "Pengujian alur sistem end-to-end & dokumentasi teknis kode",
      "Masa garansi pemeliharaan & perbaikan bug",
    ],
    duration: "3 — 6 Minggu",
    startingPrice: "Rp 4.500.000",
    popular: true,
  },
  {
    id: "mobile-app-development",
    title: "Aplikasi Mobile Flutter (Android / iOS)",
    badge: "Multi-Platform",
    targetAudience: "Bisnis, BUMD & Startup yang Membutuhkan Aplikasi Mobile",
    description:
      "Pengembangan aplikasi mobile multi-platform menggunakan framework Flutter & Dart yang terhubung dengan backend REST API, Supabase Realtime, dan push notification multi-kanal (OneSignal/FCM).",
    features: [
      "Satu basis kode efisien untuk Android dan iOS dengan Flutter",
      "Integrasi Supabase (Storage file/audio, Auth, Realtime database)",
      "Autentikasi aman Remember Me berbasis Keystore/Keychain device",
      "Push notification multi-kanal (OneSignal, Firebase Cloud Messaging)",
      "Manajemen multi-peran pengguna (Multi-Role User Views)",
      "Bantuan build file APK dan persiapan rilis aplikasi",
    ],
    duration: "3 — 6 Minggu",
    startingPrice: "Rp 5.500.000",
    popular: true,
  },
  {
    id: "spk-system",
    title: "Sistem Pendukung Keputusan (SPK) SAW / AHP",
    badge: "Spesialisasi Akademik & Riset",
    targetAudience: "Kampus, Instansi Pemerintah & Lembaga Seleksi",
    description:
      "Implementasi algoritma pengambilan keputusan multi-kriteria seperti Simple Additive Weighting (SAW), AHP, atau TOPSIS untuk seleksi atau penilaian yang objektif, transparan, dan terukur.",
    features: [
      "Formulasi algoritma matematis terverifikasi akurat",
      "Manajemen kriteria bobot benefit dan cost secara dinamis",
      "Tabel normalisasi matriks & perankingan skor instan (<100ms)",
      "Fitur export laporan keputusan siap cetak (PDF & Excel)",
      "Dashboard visualisasi grafik distribusi hasil keputusan",
      "Konsultasi teknis logika perhitungan algoritma",
    ],
    duration: "2 — 4 Minggu",
    startingPrice: "Rp 3.500.000",
  },
  {
    id: "frontend-slicing-integration",
    title: "Frontend React / TypeScript & Integrasi API",
    badge: "Cepat & Rapi",
    targetAudience: "Tim Developer, Agensi & Pemilik Desain UI/UX",
    description:
      "Menerjemahkan rancangan desain Figma menjadi antarmuka web responsif berstandar tinggi menggunakan React 19, TypeScript, dan Tailwind CSS 4 yang terhubung ke endpoint REST API via TanStack Query.",
    features: [
      "Hasil slicing presisi pixel-perfect dari file desain Figma",
      "Desain responsif optimal di layar smartphone, tablet, dan desktop",
      "Integrasi TanStack React Query & Axios dengan caching otomatis",
      "Kode bersih dengan semantik HTML5, CSS modern, dan TypeScript",
      "Optimasi performa rendering dan kecepatan loading aset",
    ],
    duration: "1 — 2 Minggu",
    startingPrice: "Rp 2.000.000",
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: "01",
    title: "Bedah Alur & Analisis Kebutuhan",
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
      "Mengembangkan backend Laravel, migrasi PostgreSQL/MySQL/Supabase, middleware autentikasi, service class logika bisnis, dan endpoint REST API.",
    deliverable: "Endpoint REST API Berfungsi & Database Terisi Schema",
  },
  {
    stepNumber: "04",
    title: "Integrasi Frontend / Mobile & Testing",
    description:
      "Menghubungkan antarmuka responsif (React / Flutter) dengan API, validasi form, pengujian skenario transaksi/perhitungan, serta perbaikan bug.",
    deliverable: "Aplikasi Terintegrasi Penuh di Staging Server",
  },
  {
    stepNumber: "05",
    title: "Deployment Server & Dokumentasi",
    description:
      "Melakukan deploy ke server hosting/VPS atau build APK mobile, konfigurasi domain & SSL, dokumentasi panduan penggunaan, serta serah terima repository Git.",
    deliverable: "Aplikasi Live di Server & Panduan Pengoperasian",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Apa saja teknologi utama yang Anda gunakan dalam membangun aplikasi?",
    answer:
      "Keahlian teknis saya terbagi sesuai spesialisasi pada CV: UTAMA (Laravel, PHP, Flutter, MySQL, PostgreSQL, REST API), FRONTEND (HTML, CSS, JavaScript, Bootstrap, Tailwind, AJAX, Vite, TypeScript, React, Next.js, Vue.js), MOBILE & CLOUD (Dart, Supabase, Firebase, OneSignal), serta TOOLS & LAINNYA (Git, Python, Figma, Wokwi, RBAC).",
  },
  {
    question: "Apakah Anda siap bekerja secara remote atau on-site?",
    answer:
      "Saya berdomisili di Indramayu, Jawa Barat dan sangat terbiasa bekerja secara remote dengan koordinasi aktif melalui Git/GitHub, Slack, dan Google Meet. Saya juga terbuka untuk peluang kerja on-site atau relokasi di wilayah Jakarta, Bandung, dan sekitarnya.",
  },
  {
    question: "Bagaimana pengalaman kepemimpinan dan manajemen proyek Anda?",
    answer:
      "Sebagai salah satu Founder di Pepra Lab, saya berpengalaman memimpin inisiatif produk digital, bernegosiasi dan berkomunikasi langsung dengan klien institusi maupun portal media, serta mengkoordinasikan tim pengembangan teknis.",
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
    category: "Utama",
    skills: [
      { name: "Laravel", level: "Mahir" },
      { name: "PHP", level: "Mahir" },
      { name: "Flutter", level: "Mahir" },
      { name: "MySQL", level: "Mahir" },
      { name: "PostgreSQL", level: "Mahir" },
      { name: "REST API", level: "Mahir" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: "Mahir" },
      { name: "CSS", level: "Mahir" },
      { name: "JavaScript", level: "Mahir" },
      { name: "Bootstrap", level: "Mahir" },
      { name: "Tailwind", level: "Mahir" },
      { name: "AJAX", level: "Mahir" },
      { name: "Vite", level: "Mahir" },
      { name: "TypeScript", level: "Mahir" },
      { name: "React", level: "Mahir" },
      { name: "Next.js", level: "Menengah" },
      { name: "Vue.js", level: "Menengah" },
    ],
  },
  {
    category: "Mobile & Cloud",
    skills: [
      { name: "Dart", level: "Mahir" },
      { name: "Supabase", level: "Mahir" },
      { name: "Firebase", level: "Mahir" },
      { name: "OneSignal", level: "Mahir" },
    ],
  },
  {
    category: "Tools & Lainnya",
    skills: [
      { name: "Git", level: "Mahir" },
      { name: "Python", level: "Dasar" },
      { name: "Figma", level: "Menengah" },
      { name: "Wokwi", level: "Menengah" },
      { name: "RBAC", level: "Mahir" },
    ],
  },
  {
    category: "Kemampuan Lain",
    skills: [
      { name: "Problem solving & analisis kebutuhan", level: "Mahir" },
      { name: "Kepemimpinan & inisiatif (founder startup)", level: "Mahir" },
      { name: "Kolaborasi tim & komunikasi dengan klien", level: "Mahir" },
      { name: "Pengujian aplikasi (end-to-end)", level: "Mahir" },
      { name: "Keamanan aplikasi dasar (RBAC, sanitasi input)", level: "Mahir" },
      { name: "Cepat mempelajari teknologi baru", level: "Mahir" },
      { name: "Microsoft Excel, Word, PowerPoint", level: "Mahir" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "Sep 2026 — Sekarang",
    role: "Founder",
    company: "Pepra Lab — Startup Teknologi",
    location: "Indramayu, Jawa Barat",
    type: "Full-time",
    description:
      "Mendirikan startup teknologi tahap awal bersama empat founder lain, berfokus pada pengembangan produk digital dan layanan pembuatan website.",
    achievements: [
      "Mendirikan startup teknologi tahap awal bersama empat founder lain, berfokus pada pengembangan produk digital dan layanan pembuatan website.",
      "Berhasil mendapatkan klien pertama, portal berita cuplik.com.",
      "Mengembangkan produk SaaS pendidikan dan website company profile perusahaan.",
    ],
    stack: ["Digital Product", "SaaS", "Client Acquisition", "Team Leadership", "Web Development"],
  },
  {
    period: "Okt 2026 — Nov 2026",
    role: "Fullstack Developer",
    company: "Pepra Lab · Redesign Portal Berita Cuplik.com",
    location: "Indramayu, Jawa Barat",
    type: "Contract",
    description:
      "Membangun ulang portal media Cuplik.com dari PHP native 7.4 dengan tampilan lama ke Laravel 13, PostgreSQL, dan Tailwind CSS 4 berarsitektur MVC, dengan desain responsif bergaya koran modern.",
    achievements: [
      "Membangun ulang portal media Cuplik.com dari PHP native 7.4 dengan tampilan lama ke Laravel 13, PostgreSQL, dan Tailwind CSS 4 berarsitektur MVC, dengan desain responsif bergaya koran modern.",
      "Membangun fitur portal publik: live search, polling dengan perlindungan manipulasi suara, tabulasi Real Count Pilkada, kanal aspirasi warga, dan unduh artikel format PDF.",
      "Mengembangkan CMS multi-peran (Super Admin, Admin, Redaktur, Member) dengan moderasi berita, analitik produktivitas redaksi, dan pengajuan iklan mandiri.",
      "Menerapkan pengamanan berupa sanitasi HTML kustom untuk mencegah XSS, middleware akses CMS, dan penghitungan pembaca unik dengan filter bot.",
    ],
    stack: ["Laravel 13", "PostgreSQL", "Tailwind CSS 4", "PHP", "MVC", "Anti-XSS Sanitization", "Bot Filter"],
  },
  {
    period: "Agu 2026 — Okt 2026",
    role: "Frontend Developer",
    company: "Buwuh.com — Platform Undangan Digital",
    location: "Indramayu / Remote",
    type: "Contract",
    description:
      "Membangun dashboard pengelolaan undangan dan langganan serta modul RSVP, buku tamu, dan hadiah pada aplikasi undangan digital berbasis React 19, TypeScript, dan Tailwind CSS 4.",
    achievements: [
      "Membangun dashboard pengelolaan undangan dan langganan serta modul RSVP, buku tamu, dan hadiah pada aplikasi undangan digital berbasis React 19, TypeScript, dan Tailwind CSS 4.",
      "Mengintegrasikan fitur yang semula memakai data mock dengan backend REST API menggunakan Axios dan TanStack React Query.",
      "Mengintegrasikan RBAC petugas, magic link akses instan, unggah media, dan pemisahan catatan buwuh mandiri dengan catatan berbasis event.",
      "Membangun landing page Buwuh.com dan memperbaiki alur login Facebook.",
    ],
    stack: ["React 19", "TypeScript", "Tailwind CSS 4", "TanStack React Query", "Axios", "REST API", "RBAC"],
  },
  {
    period: "Agu 2026 — Sep 2026",
    role: "Mobile Developer (Flutter)",
    company: "PERUMDAM Tirta Darma Ayu — SIMPEG Mobile",
    location: "Indramayu, Jawa Barat",
    type: "Contract",
    description:
      "Membangun aplikasi kepegawaian mobile dengan Flutter untuk 7 peran pengguna (pegawai hingga direktur utama), terintegrasi dengan Supabase dan Laravel REST API.",
    achievements: [
      "Membangun aplikasi kepegawaian mobile dengan Flutter untuk 7 peran pengguna (pegawai hingga direktur utama), terintegrasi dengan Supabase dan Laravel REST API.",
      "Mengembangkan modul pengaduan pelanggaran karyawan berjenjang (18 status alur) dengan unggah bukti foto, dokumen, dan rekaman suara ke Supabase Storage, serta penerbitan SK sanksi.",
      "Mengimplementasikan autentikasi dengan fitur Remember Me terenkripsi (Keystore/Keychain) dan pembagian kata sandi massal.",
      "Mengintegrasikan notifikasi multi-kanal (OneSignal, Firebase Cloud Messaging, notifikasi lokal terjadwal) dan sinkronisasi data real-time melalui Supabase Realtime.",
    ],
    stack: ["Flutter", "Dart", "Supabase", "Laravel REST API", "OneSignal", "FCM", "Keystore/Keychain", "Realtime"],
  },
  {
    period: "Feb 2026 — Jun 2026",
    role: "Fullstack Developer (Proyek Akhir)",
    company: "POLINDRA — SPK Penentuan UKT Mahasiswa Baru",
    location: "Indramayu, Jawa Barat",
    type: "Full-time",
    description:
      "Merancang dan membangun sistem pendukung keputusan berbasis web (Laravel + PostgreSQL/Supabase) dengan metode Simple Additive Weighting (SAW) untuk menentukan golongan UKT mahasiswa baru secara objektif.",
    achievements: [
      "Merancang dan membangun sistem pendukung keputusan berbasis web (Laravel + PostgreSQL/Supabase) dengan metode Simple Additive Weighting (SAW) untuk menentukan golongan UKT mahasiswa baru secara objektif.",
      "Mengembangkan REST API dan arsitektur hibrida, serta dashboard analitik real-time untuk mempercepat proses verifikasi dan monitoring data pendaftar.",
      "Membangun antarmuka responsif yang mudah digunakan oleh tim verifikator pada perangkat desktop maupun mobile.",
      "Melakukan validasi dan uji komparatif 32 sampel data antara sistem dengan kalkulasi manual.",
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
      "Mengembangkan dan memelihara fitur aplikasi web multi-layanan di Bandung Techno Park.",
    achievements: [
      "Mengembangkan dan memelihara fitur aplikasi web multi-layanan menggunakan Laravel, HTML, CSS, JavaScript, dan Tailwind CSS.",
      "Mengimplementasikan REST API serta mengelola basis data PostgreSQL (DBeaver) untuk kebutuhan lintas modul aplikasi.",
      "Melakukan pengujian dan perbaikan bug bersama tim sehingga aplikasi berjalan stabil di lingkungan produksi.",
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
      "Membangun antarmuka responsif dengan HTML, CSS, JavaScript, Bootstrap, dan Tailwind agar data kehadiran mudah dibaca di berbagai perangkat.",
    achievements: [
      "Membangun antarmuka responsif dengan HTML, CSS, JavaScript, Bootstrap, dan Tailwind agar data kehadiran mudah dibaca di berbagai perangkat.",
      "Berkolaborasi dengan tim backend untuk integrasi API dan melakukan pengujian UI guna memastikan fungsionalitas sesuai kebutuhan pengguna.",
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
      "Mengembangkan aplikasi pembayaran SPP berbasis Laravel 10, Blade, dan MySQL untuk operator sekolah dan wali murid.",
    achievements: [
      "Mengembangkan aplikasi pembayaran SPP berbasis Laravel 10, Blade, dan MySQL untuk operator sekolah dan wali murid.",
      "Membangun pengelolaan data siswa, biaya, tagihan, rekening sekolah, dan pembayaran dengan relasi antartabel menggunakan Eloquent.",
      "Mengimplementasikan alur pembayaran transfer: unggah bukti bayar oleh wali, notifikasi ke operator, konfirmasi pembayaran, serta kwitansi dan kartu SPP.",
      "Melakukan pengujian end-to-end pada seluruh alur pembayaran, dari pemrosesan transaksi hingga pencatatan dan pelaporan data.",
    ],
    stack: ["Laravel 10", "Blade", "MySQL", "Eloquent", "Bootstrap", "JavaScript"],
  },
  {
    period: "Sep 2023 — Des 2023",
    role: "Frontend Developer",
    company: "POLINDRA — Sistem Manajemen Pabrik Kulit Lumpia",
    location: "Indramayu, Jawa Barat",
    type: "Contract",
    description:
      "Membangun antarmuka pengguna responsif dengan HTML, CSS, JavaScript, dan Bootstrap.",
    achievements: [
      "Membangun antarmuka pengguna responsif dengan HTML, CSS, JavaScript, dan Bootstrap.",
      "Mengintegrasikan API bersama tim backend agar pertukaran data produksi akurat.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "REST API"],
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    period: "Sep 2022 — Okt 2026",
    degree: "D4 Rekayasa Perangkat Lunak",
    institution: "Politeknik Negeri Indramayu (POLINDRA)",
    gpa: "IPK 3.80",
    details:
      "Lulusan D4 Rekayasa Perangkat Lunak (IPK 3.80). Fokus pada Rekayasa Perangkat Lunak Web & Mobile, Arsitektur Sistem Informasi, Perancangan Basis Data Relasional, Sistem Pendukung Keputusan (SPK), dan Pengujian Kualitas Perangkat Lunak.",
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
    title: "Menangani Webhook & Keamanan Input Sanitasi di Sistem Laravel",
    description:
      "Panduan praktis mengamankan transaksi dan input data pada ekosistem web Laravel: verifikasi signature token, sanitasi HTML kustom anti-XSS, dan pencegahan double-mutation.",
    publishedAt: "25 Januari 2026",
    readTime: "7 menit baca",
    category: "Backend & Keamanan",
    tags: ["Laravel", "Security", "MySQL", "Webhooks", "Anti-XSS"],
    content: {
      tableOfContents: [
        { id: "tantangan-webhook", text: "Tantangan Keamanan pada Sistem Transaksional" },
        { id: "signature-validation", text: "1. Verifikasi Signature Hash SHA512" },
        { id: "idempotency-db", text: "2. Mencegah Double Mutation dengan DB::transaction" },
        { id: "testing-flow", text: "3. Simulasi & Checklist Pengujian" },
      ],
      intro:
        "Pada pengembangan sistem berbasis web yang menangani data sensitif dan finansial, integritas database dan pencegahan serangan injeksi adalah prioritas utama. Menerapkan pertahanan berlapis dengan database transaction, signature validation, dan sanitasi HTML kustom menjamin sistem tetap aman.",
      sections: [
        {
          id: "signature-validation",
          heading: "1. Verifikasi Signature Hash SHA512",
          body:
            "Setiap notifikasi webhook yang masuk ke server backend harus diverifikasi keasliannya sebelum diproses. Jika hash hasil kalkulasi lokal berbeda dengan signature yang dikirim, request wajib langsung ditolak (HTTP 403) untuk mencegah injeksi transaksi palsu.",
        },
        {
          id: "idempotency-db",
          heading: "2. Mencegah Double Mutation dengan DB::transaction",
          body:
            "Dengan DB::transaction(), seluruh operasi terikat secara atomik: berhasil semua atau dibatalkan semua, mencegah inkonsistensi saldo kas atau manipulasi data antar-tabel.",
        },
      ],
      takeaways: [
        "Jangan pernah memperbarui status pembayaran finansial hanya mengandalkan frontend return redirect.",
        "Wajib verifikasi signature hash untuk memastikan payload benar-benar berasal dari server resmi.",
        "Gunakan DB::transaction() dan sanitasi input HTML untuk mencegah celah keamanan.",
      ],
    },
  },
  {
    slug: "arsitektur-rest-api-multi-layanan-btp",
    title: "Membangun Arsitektur REST API Modular & Skalabel",
    description:
      "Pengalaman nyata di Bandung Techno Park & Pepra Lab: standardisasi response payload, otentikasi role-based middleware, dan optimasi skema database PostgreSQL menggunakan DBeaver.",
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
        "Saat mengerjakan integrasi sistem multi-layanan, kami dihadapkan pada puluhan modul berbeda. Kunci kelancaran koordinasi tim adalah standardisasi kontrak REST API yang disepakati sejak hari pertama.",
      sections: [
        {
          id: "standardisasi-api",
          heading: "1. Format Respons JSON Konsisten",
          body:
            "Setiap endpoint API diwajibkan mengembalikan struktur envelope JSON yang seragam, memungkinkan tim frontend (React / Flutter) membuat interceptor respons global yang menangani pagination dan error secara otomatis.",
        },
        {
          id: "database-tuning",
          heading: "2. Optimasi Skema PostgreSQL dengan DBeaver",
          body:
            "Mengelola relasi antar-tabel multi-modul di PostgreSQL membutuhkan visualisasi yang jelas. Kami menggunakan DBeaver untuk memeriksa constraint foreign keys dan menambahkan index pada kolom yang sering di-join.",
        },
      ],
      takeaways: [
        "Kontrak REST API yang konsisten menghemat puluhan jam waktu koordinasi tim frontend dan backend.",
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
      "Chandra menunjukkan dedikasi yang sangat baik dalam merancang Sistem Pendukung Keputusan UKT (IPK 3.80). Penerapan algoritma SAW pada backend Laravel-nya terstruktur rapi, akurat, dan skema database PostgreSQL-nya memenuhi standar pengujian akademik dan industri.",
  },
  {
    name: "Supervisor Magang Industri",
    role: "Senior Software Engineer",
    company: "Bandung Techno Park (BTP)",
    quote:
      "Selama magang di tim SuperApps MyBTP, Chandra sangat cekatan dalam mengembangkan fitur REST API, mengelola basis data PostgreSQL, dan berkolaborasi bersama tim. Kodingannya bersih, terorganisir, dan mudah dipahami oleh anggota tim lainnya.",
  },
  {
    name: "Pengelola Redaksi Media Klien",
    role: "Pimpinan Redaksi",
    company: "Cuplik.com",
    quote:
      "Modernisasi portal berita Cuplik.com oleh tim Pepra Lab di bawah kepemimpinan teknis Chandra berjalan luar biasa. Tampilan responsif modern, fitur tabulasi Real Count, dan CMS multi-peran dengan sanitasi anti-XSS sangat meningkatkan kecepatan kerja redaksi kami.",
  },
];
