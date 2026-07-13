// navigation.js - Menguruskan Header, Footer dan Sistem Navigasi OSCA KKKP
document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById('header-container');
    const footerContainer = document.getElementById('footer-container');

    // 1. TEMPLATE HEADER (TEMA KUNING EMAS & PUTIH - RESPONSIVE MOBILE)
    const headerHTML = `
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Brand Logo -->
                <div class="flex items-center space-x-3">
                    <img src="images/logo/logo-jata-negara.png" style="max-width: 28px;" class="w-full h-auto object-contain mx-auto md:max-w-[42px]">
                    <img src="images/logo/logo-osca-kkkp.webp" style="max-width: 80px;" class="md:max-w-[130px]">
                </div>

                <!-- Desktop Navigation Links (Hidden on Mobile) -->
                <nav class="hidden lg:flex space-x-8 text-xs uppercase tracking-widest font-semibold text-slate-600">
                    <a href="index.html" id="nav-index" class="py-2 px-1 hover:text-brandDark transition">Utama</a>
                    <a href="perkhidmatan.html" id="nav-perkhidmatan" class="py-2 px-1 hover:text-brandDark transition">Perkhidmatan</a>
                    <a href="organisasi.html" id="nav-organisasi" class="py-2 px-1 hover:text-brandDark transition">Carta Organisasi</a>
                    <a href="aktiviti.html" id="nav-aktiviti" class="py-2 px-1 hover:text-brandDark transition">Aktiviti</a>
                    <a href="rujukan.html" id="nav-rujukan" class="py-2 px-1 hover:text-brandDark transition">Bahan Rujukan</a>
                    <a href="saringan.html" id="nav-saringan" class="py-2 px-1 hover:text-brandDark transition">Saringan Digital</a>
                </nav>

                <!-- Mobile Menu Button (Hamburger) -->
                <div class="lg:hidden flex items-center">
                    <button id="mobile-menu-btn" class="p-2 text-slate-600 hover:text-brandDark focus:outline-none">
                        <!-- Icon Hamburger -->
                        <svg id="menu-icon" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                        <!-- Icon Close (X) -->
                        <svg id="close-icon" class="w-7 h-7 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Navigation Panel (Dropdown) -->
        <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-2xl transition-all duration-300">
            <div class="px-4 py-4 space-y-1 flex flex-col text-sm font-bold text-slate-600">
                <a href="index.html" id="nav-index-mob" class="block py-3 px-4 rounded-xl hover:bg-slate-50 transition">Utama</a>
                <a href="perkhidmatan.html" id="nav-perkhidmatan-mob" class="block py-3 px-4 rounded-xl hover:bg-slate-50 transition">Perkhidmatan</a>
                <a href="organisasi.html" id="nav-organisasi-mob" class="block py-3 px-4 rounded-xl hover:bg-slate-50 transition">Carta Organisasi</a>
                <a href="aktiviti.html" id="nav-aktiviti-mob" class="block py-3 px-4 rounded-xl hover:bg-slate-50 transition">Aktiviti</a>
                <a href="rujukan.html" id="nav-rujukan-mob" class="block py-3 px-4 rounded-xl hover:bg-slate-50 transition">Bahan Rujukan</a>
                <a href="saringan.html" id="nav-saringan-mob" class="block py-3 px-4 rounded-xl hover:bg-slate-50 transition">Saringan Digital</a>
            </div>
        </div>
    </header>
    `;

    // 2. TEMPLATE FOOTER (KEKAL SAMA)
    const footerHTML = `
    <footer class="bg-brandDark text-slate-400 py-12 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div class="space-y-4">
                    <span class="text-lg font-bold text-white block">OSCA KK Kuala Perlis</span>
                    <p class="text-xs text-slate-500 leading-relaxed mx-auto md:mx-0 max-w-sm">
                        Pusat rawatan dan intervensi ketagihan berintegrasi di bawah Unit Kawalan Penyakit Tidak Berjangkit (NCD) Pejabat Kesihatan Daerah Kangar dan JKN Perlis.
                    </p>
                </div>
                <div class="space-y-4">
                    <span class="text-xs uppercase font-bold tracking-wider text-white block">Pautan Pantas</span>
                    <div class="flex flex-col space-y-3 md:space-y-2 text-xs">
                        <a href="perkhidmatan.html" class="hover:text-white transition">Skim Perkhidmatan</a>
                        <a href="organisasi.html" class="hover:text-white transition">Kakitangan Klinik</a>
                        <a href="saringan.html" class="hover:text-white transition">Saringan Digital</a>
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

    if (headerContainer) headerContainer.innerHTML = headerHTML;
    if (footerContainer) footerContainer.innerHTML = footerHTML;

    // LOGIK BUTANG MENU TELEFON PINTAR (HAMBURGER TOGGLE)
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if(btn) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }

    // LOGIK PENANDA HALAMAN AKTIF (DESKTOP & MOBILE)
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";
    let activeId = "nav-index";

    if (page.includes("perkhidmatan")) activeId = "nav-perkhidmatan";
    else if (page.includes("organisasi")) activeId = "nav-organisasi";
    else if (page.includes("aktiviti")) activeId = "nav-aktiviti";
    else if (page.includes("rujukan")) activeId = "nav-rujukan";
    else if (page.includes("saringan")) activeId = "nav-saringan";

    // Warnakan menu Desktop
    const activeLink = document.getElementById(activeId);
    if (activeLink) activeLink.className = "py-2 px-1 text-slate-900 border-b-2 border-brandYellow-500 font-extrabold";

    // Warnakan menu Mobile
    const activeLinkMob = document.getElementById(activeId + "-mob");
    if (activeLinkMob) activeLinkMob.className = "block py-3 px-4 rounded-xl bg-brandYellow-50 text-brandYellow-600 font-extrabold";
});