// navigation.js - Menguruskan Header, Footer dan Sistem Navigasi OSCA KKKP
document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById('header-container');
    const footerContainer = document.getElementById('footer-container');

    // 1. TEMPLATE HEADER (TEMA KUNING EMAS & PUTIH)
    const headerHTML = `
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Brand Logo -->
                <div class="flex items-center space-x-3">
                    <img src="images/logo/logo-jata-negara.png" style="max-width: 28px;" class="w-full h-auto object-contain mx-auto md:max-w-[42px]">
                    <img src="images/logo/logo-osca-kkkp.webp" style="max-width: 80px;" class="md:max-w-[130px]">
                </div>

                <!-- Desktop Navigation Links -->
                <nav class="hidden md:flex space-x-8 text-xs uppercase tracking-widest font-semibold text-slate-600">
                    <a href="index.html" id="nav-index" class="py-2 px-1 hover:text-brandDark transition">Utama</a>
                    <a href="perkhidmatan.html" id="nav-perkhidmatan" class="py-2 px-1 hover:text-brandDark transition">Perkhidmatan</a>
                    <a href="organisasi.html" id="nav-organisasi" class="py-2 px-1 hover:text-brandDark transition">Carta Organisasi</a>
                    <a href="aktiviti.html" id="nav-aktiviti" class="py-2 px-1 hover:text-brandDark transition">Aktiviti</a>
                    <a href="rujukan.html" id="nav-rujukan" class="py-2 px-1 hover:text-brandDark transition">Bahan Rujukan</a>
                    <a href="saringan.html" id="nav-saringan" class="py-2 px-1 hover:text-brandDark transition">Saringan Digital</a>
                </nav>
            </div>
        </div>
    </header>
    `;

    // 2. TEMPLATE FOOTER (TEMA GELAP PREMIUM)
    const footerHTML = `
    <footer class="bg-brandDark text-slate-400 py-12 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="space-y-4">
                    <span class="text-lg font-bold text-white block">One Stop Centre for Addiction (OSCA)</span>
                    <p class="text-xs text-slate-500 leading-relaxed max-w-sm">
                        Pusat rawatan dan intervensi ketagihan berintegrasi di bawah Unit Kawalan Penyakit Tidak Berjangkit (NCD) Pejabat Kesihatan Daerah Kangar dan JKN Perlis.
                    </p>
                </div>
                <div class="space-y-4">
                    <span class="text-xs uppercase font-bold tracking-wider text-white block">Pautan Pantas</span>
                    <div class="flex flex-col space-y-2 text-xs">
                        <a href="index.html" class="text-left hover:text-white transition">Halaman Utama</a>
                        <a href="perkhidmatan.html" class="text-left hover:text-white transition">Skim Perkhidmatan</a>
                        <a href="organisasi.html" class="text-left hover:text-white transition">Kakitangan Klinik</a>
                        <a href="aktiviti.html" class="text-left hover:text-white transition">Aktiviti & Advokasi</a>
                        <a href="rujukan.html" class="text-left hover:text-white transition">Bahan Rujukan</a>
                        <a href="saringan.html" class="text-left hover:text-white transition">Saringan Digital</a>
                    </div>
                </div>
                <div class="space-y-4">
                    <span class="text-xs uppercase font-bold tracking-wider text-white block">Lokasi Klinik</span>
                    <p class="text-xs text-slate-500 leading-relaxed">
                        Klinik Kesihatan Kuala Perlis,<br>
                        02000 Kuala Perlis,<br>
                        Perlis Indera Kayangan.
                    </p>
                </div>
            </div>
            <hr class="my-8 border-slate-800">
            <div class="flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-600">
                <p>© 2026 OSCA Klinik Kesihatan Kuala Perlis. Hak Cipta Terpelihara.</p>
                <p class="mt-2 md:mt-0">Dikuasakan oleh Jabatan Kesihatan Negeri Perlis</p>
            </div>
        </div>
    </footer>
    `;

    // Suntik kandungan ke dalam kontena HTML
    if (headerContainer) headerContainer.innerHTML = headerHTML;
    if (footerContainer) footerContainer.innerHTML = footerHTML;

    // Kesan dan nyatakan tab yang aktif secara dinamik mengikut URL fail semasa
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";
    let activeId = "nav-index";

    if (page === "perkhidmatan.html") activeId = "nav-perkhidmatan";
    else if (page === "organisasi.html") activeId = "nav-organisasi";
    else if (page === "aktiviti.html") activeId = "nav-aktiviti";
    else if (page === "rujukan.html") activeId = "nav-rujukan";
    else if (page === "saringan.html") activeId = "nav-saringan";

    const activeLink = document.getElementById(activeId);
    if (activeLink) {
        activeLink.className = "py-2 px-1 text-slate-900 border-b-2 border-brandYellow-500 font-extrabold";
    }
});