// navigation.js - Menguruskan Header, Footer dan Sistem Navigasi OSCA KKKPs (v4 - Antaramuka Stabil Tanpa Shifting/Lari)
document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById('header-container');
    const footerContainer = document.getElementById('footer-container');

    // 1. TEMPLATE HEADER (TEMA KUNING EMAS & PUTIH - RESPONSIVE MOBILE & DROPDOWNS)
    const headerHTML = `
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                
                <!-- Brand Logo (KK KUALA PERLIS) -->
                <div class="flex items-center space-x-3">
                    <img src="images/logo/logo-jata-negara.png" style="max-width: 28px;" class="w-full h-auto object-contain mx-auto md:max-w-[42px]">
                    <img src="images/logo/logo-osca-kkkp.webp" style="max-width: 80px;" class="md:max-w-[130px]">
                </div>

                <!-- Desktop Navigation Links (Stabil, Tanpa Shifting) -->
                <nav class="hidden lg:flex items-center space-x-6 text-xs uppercase tracking-widest font-bold text-slate-600">
                    
                    <!-- Utama -->
                    <a href="index.html" id="nav-index" class="py-2 px-2 text-slate-600 hover:text-slate-900 border-b-2 border-transparent transition-all duration-200">
                        UTAMA
                    </a>

                    <!-- Dropdown: Program -->
                    <div class="relative dropdown-parent py-2">
                        <button class="flex items-center space-x-1 py-2 px-2 text-slate-600 hover:text-slate-900 border-b-2 border-transparent transition-all duration-200 focus:outline-none">
                            <span>PROGRAM</span>
                            <svg class="w-3.5 h-3.5 transform transition-transform duration-200 dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="absolute left-0 mt-2 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl py-2 opacity-0 invisible translate-y-2 transition-all duration-200 dropdown-menu z-50">
                            <a href="perkhidmatan.html" id="nav-perkhidmatan" class="block px-4 py-2.5 text-[11px] text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                Skim Perkhidmatan
                            </a>
                            <a href="aktiviti.html" id="nav-aktiviti" class="block px-4 py-2.5 text-[11px] text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                Aktiviti Klinik
                            </a>
                        </div>
                    </div>

                    <!-- Saringan -->
                    <a href="saringan.html" id="nav-saringan" class="py-2 px-2 text-slate-600 hover:text-slate-900 border-b-2 border-transparent transition-all duration-200">
                        Saringan Digital
                    </a>

                    <!-- Dropdown: Pusat Sumber -->
                    <div class="relative dropdown-parent py-2">
                        <button class="flex items-center space-x-1 py-2 px-2 text-slate-600 hover:text-slate-900 border-b-2 border-transparent transition-all duration-200 focus:outline-none">
                            <span>PUSAT SUMBER</span>
                            <svg class="w-3.5 h-3.5 transform transition-transform duration-200 dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="absolute left-0 mt-2 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl py-2 opacity-0 invisible translate-y-2 transition-all duration-200 dropdown-menu z-50">
                            <a href="rujukan.html" id="nav-rujukan" class="block px-4 py-2.5 text-[11px] text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                Bahan Rujukan
                            </a>
                            <a href="faq.html" id="nav-faq" class="block px-4 py-2.5 text-[11px] text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                Soalan Lazim (FAQ)
                            </a>
                        </div>
                    </div>

                    <!-- Dropdown: Mengenai Kami -->
                    <div class="relative dropdown-parent py-2">
                        <button class="flex items-center space-x-1 py-2 px-2 text-slate-600 hover:text-slate-900 border-b-2 border-transparent transition-all duration-200 focus:outline-none">
                            <span>MENGENAI KAMI</span>
                            <svg class="w-3.5 h-3.5 transform transition-transform duration-200 dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="absolute left-0 mt-2 w-52 bg-white border border-slate-100 rounded-2xl shadow-xl py-2 opacity-0 invisible translate-y-2 transition-all duration-200 dropdown-menu z-50">
                            <a href="organisasi.html" id="nav-organisasi" class="block px-4 py-2.5 text-[11px] text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                Carta Organisasi
                            </a>
                            <a href="hubungi.html" id="nav-hubungi" class="block px-4 py-2.5 text-[11px] text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                Hubungi & Janji Temu
                            </a>
                        </div>
                    </div>

                </nav>

                <!-- Mobile Menu Button (Hamburger) -->
                <div class="lg:hidden flex items-center">
                    <button id="mobile-menu-btn" class="p-2 rounded-xl hover:bg-slate-50 text-slate-600 hover:text-slate-900 focus:outline-none transition-colors">
                        <!-- Icon Hamburger -->
                        <svg id="menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                        <!-- Icon Close (X) -->
                        <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Navigation Panel (Dropdown Accordions) -->
        <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-2xl z-50 transition-all duration-300">
            <div class="px-4 py-4 space-y-2 flex flex-col text-sm font-bold text-slate-600">
                
                <!-- Utama -->
                <a href="index.html" id="nav-index-mob" class="block py-3 px-4 rounded-xl border border-transparent hover:bg-slate-50 transition">
                    UTAMA
                </a>

                <!-- Accordion: Program -->
                <div class="border-b border-slate-100 pb-2">
                    <button class="w-full flex justify-between items-center py-3 px-4 rounded-xl hover:bg-slate-50 text-left transition focus:outline-none mobile-accordion-btn">
                        <span>PROGRAM</span>
                        <svg class="w-4 h-4 transform transition-transform duration-200 accordion-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="hidden pl-6 pr-4 py-1 space-y-1 transition-all duration-200 mobile-accordion-content">
                        <a href="perkhidmatan.html" id="nav-perkhidmatan-mob" class="block py-2.5 px-4 rounded-lg text-xs text-slate-500 hover:bg-slate-50 transition">
                            Skim Perkhidmatan
                        </a>
                        <a href="aktiviti.html" id="nav-aktiviti-mob" class="block py-2.5 px-4 rounded-lg text-xs text-slate-500 hover:bg-slate-50 transition">
                            Aktiviti Klinik
                        </a>
                    </div>
                </div>

                <!-- Saringan -->
                <a href="saringan.html" id="nav-saringan-mob" class="block py-3 px-4 rounded-xl border border-transparent hover:bg-slate-50 transition">
                    SARINGAN DIGITAL
                </a>

                <!-- Accordion: Pusat Sumber -->
                <div class="border-b border-slate-100 pb-2">
                    <button class="w-full flex justify-between items-center py-3 px-4 rounded-xl hover:bg-slate-50 text-left transition focus:outline-none mobile-accordion-btn">
                        <span>PUSAT SUMBER</span>
                        <svg class="w-4 h-4 transform transition-transform duration-200 accordion-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="hidden pl-6 pr-4 py-1 space-y-1 transition-all duration-200 mobile-accordion-content">
                        <a href="rujukan.html" id="nav-rujukan-mob" class="block py-2.5 px-4 rounded-lg text-xs text-slate-500 hover:bg-slate-50 transition">
                            Bahan Rujukan
                        </a>
                        <a href="faq.html" id="nav-faq-mob" class="block py-2.5 px-4 rounded-lg text-xs text-slate-500 hover:bg-slate-50 transition">
                            Soalan Lazim (FAQ)
                        </a>
                    </div>
                </div>

                <!-- Accordion: Mengenai Kami -->
                <div class="pb-2">
                    <button class="w-full flex justify-between items-center py-3 px-4 rounded-xl hover:bg-slate-50 text-left transition focus:outline-none mobile-accordion-btn">
                        <span>MENGENAI KAMI</span>
                        <svg class="w-4 h-4 transform transition-transform duration-200 accordion-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="hidden pl-6 pr-4 py-1 space-y-1 transition-all duration-200 mobile-accordion-content">
                        <a href="organisasi.html" id="nav-organisasi-mob" class="block py-2.5 px-4 rounded-lg text-xs text-slate-500 hover:bg-slate-50 transition">
                            Carta Organisasi
                        </a>
                        <a href="hubungi.html" id="nav-hubungi-mob" class="block py-2.5 px-4 rounded-lg text-xs text-slate-500 hover:bg-slate-50 transition">
                            Hubungi & Janji Temu
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </header>
    `;

    // 2. TEMPLATE FOOTER
    const footerHTML = `
    <footer class="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div class="space-y-4">
                    <img src="images/logo/logo-osca-kkkp-white.png" class="md:max-w-[130px]">
                    <p class="text-xs text-slate-500 leading-relaxed mx-auto md:mx-0 max-w-sm">
                        Pusat rawatan dan intervensi ketagihan berintegrasi di bawah Unit Kawalan Penyakit Tidak Berjangkit (NCD) Pejabat Kesihatan Daerah Kangar dan JKN Perlis.
                    </p>
                </div>
                <div class="space-y-4">
                    <span class="text-xs uppercase font-bold tracking-wider text-white block">Pautan Pantas</span>
                    <div class="flex flex-col space-y-3 md:space-y-2 text-xs">
                        <a href="perkhidmatan.html" class="hover:text-white transition-colors">Skim Perkhidmatan</a>
                        <a href="organisasi.html" class="hover:text-white transition-colors">Kakitangan Klinik</a>
                        <a href="saringan.html" class="hover:text-white transition-colors">Saringan Digital</a>
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
            <hr class="my-8 border-slate-800/80">
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

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }

    // DESKTOP DROPDOWN HOVER & FOCUS HANDLING (STABIL)
    const dropdownParents = document.querySelectorAll('.dropdown-parent');
    dropdownParents.forEach(parent => {
        const btn = parent.querySelector('button');
        const dMenu = parent.querySelector('.dropdown-menu');
        const arrow = parent.querySelector('.dropdown-arrow');

        // Hover Desktop
        parent.addEventListener('mouseenter', () => {
            if (window.innerWidth >= 1024) {
                dMenu.classList.remove('opacity-0', 'invisible', 'translate-y-2');
                dMenu.classList.add('opacity-100', 'visible', 'translate-y-0');
                if (arrow) arrow.classList.add('rotate-180');
            }
        });
        parent.addEventListener('mouseleave', () => {
            if (window.innerWidth >= 1024) {
                dMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
                dMenu.classList.add('opacity-0', 'invisible', 'translate-y-2');
                if (arrow) arrow.classList.remove('rotate-180');
            }
        });

        // Click focus fallback
        if (btn) {
            btn.addEventListener('click', (e) => {
                if (window.innerWidth >= 1024) {
                    e.stopPropagation();
                    const isOpen = dMenu.classList.contains('opacity-100');
                    // Tutup dropdown lain
                    document.querySelectorAll('.dropdown-menu').forEach(m => {
                        m.classList.remove('opacity-100', 'visible', 'translate-y-0');
                        m.classList.add('opacity-0', 'invisible', 'translate-y-2');
                    });
                    document.querySelectorAll('.dropdown-arrow').forEach(a => a.classList.remove('rotate-180'));

                    if (!isOpen) {
                        dMenu.classList.remove('opacity-0', 'invisible', 'translate-y-2');
                        dMenu.classList.add('opacity-100', 'visible', 'translate-y-0');
                        if (arrow) arrow.classList.add('rotate-180');
                    }
                }
            });
        }
    });

    // Tutup dropdown desktop jika klik di luar
    document.addEventListener('click', () => {
        if (window.innerWidth >= 1024) {
            document.querySelectorAll('.dropdown-menu').forEach(m => {
                m.classList.remove('opacity-100', 'visible', 'translate-y-0');
                m.classList.add('opacity-0', 'invisible', 'translate-y-2');
            });
            document.querySelectorAll('.dropdown-arrow').forEach(a => a.classList.remove('rotate-180'));
        }
    });

    // MOBILE ACCORDION TOGGLE (LIPATAN KEMAS)
    const accordionBtns = document.querySelectorAll('.mobile-accordion-btn');
    accordionBtns.forEach(accBtn => {
        accBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const content = accBtn.nextElementSibling;
            const arrow = accBtn.querySelector('.accordion-arrow');

            if (content) {
                const isHidden = content.classList.contains('hidden');
                
                // Tutup accordion lain demi kekemasan
                document.querySelectorAll('.mobile-accordion-content').forEach(c => c.classList.add('hidden'));
                document.querySelectorAll('.accordion-arrow').forEach(a => a.classList.remove('rotate-180'));

                if (isHidden) {
                    content.classList.remove('hidden');
                    if (arrow) arrow.classList.add('rotate-180');
                }
            }
        });
    });

    // LOGIK PENANDA HALAMAN AKTIF PINTAR (STABIL TANPA FONT SHIFTING)
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";

    // Set IDs untuk desktop & mobile
    let activeId = "nav-index";
    let isSubmenu = false;
    let parentBtnId = "";

    if (page.includes("perkhidmatan")) {
        activeId = "nav-perkhidmatan";
        isSubmenu = true;
    } else if (page.includes("aktiviti")) {
        activeId = "nav-aktiviti";
        isSubmenu = true;
    } else if (page.includes("saringan")) {
        activeId = "nav-saringan";
    } else if (page.includes("rujukan")) {
        activeId = "nav-rujukan";
        isSubmenu = true;
    } else if (page.includes("faq")) {
        activeId = "nav-faq";
        isSubmenu = true;
    } else if (page.includes("organisasi")) {
        activeId = "nav-organisasi";
        isSubmenu = true;
    } else if (page.includes("hubungi")) {
        activeId = "nav-hubungi";
        isSubmenu = true;
    }

    // 1. WARNAKAN MENU DESKTOP DENGAN TEPAT (TANPA SHIFTING)
    const activeLink = document.getElementById(activeId);
    if (activeLink) {
        // Hilangkan kelas default/inactive
        activeLink.classList.remove('text-slate-600', 'border-transparent');
        // Tambahkan kelas active: teks gelap dan border kuning emas tanpa ubah padding/weight
        activeLink.classList.add('text-amber-600', 'border-amber-500');

        // Jika halaman aktif adalah sebahagian daripada sub-menu dropdown, warnakan juga butang parentnya
        if (isSubmenu) {
            const parent = activeLink.closest('.dropdown-parent');
            if (parent) {
                const parentBtn = parent.querySelector('button');
                if (parentBtn) {
                    parentBtn.classList.remove('text-slate-600', 'border-transparent');
                    parentBtn.classList.add('text-amber-600', 'border-amber-500');
                }
            }
        }
    }

    // 2. WARNAKAN MENU MOBILE DENGAN TEPAT & KEMAS
    const activeLinkMob = document.getElementById(activeId + "-mob");
    if (activeLinkMob) {
        activeLinkMob.classList.remove('text-slate-600', 'text-slate-500', 'border-transparent');
        activeLinkMob.classList.add('bg-amber-50', 'text-amber-700', 'border-amber-200');

        // Kembangkan accordion parent secara automatik di telefon
        if (isSubmenu) {
            const accordionContent = activeLinkMob.closest('.mobile-accordion-content');
            if (accordionContent) {
                accordionContent.classList.remove('hidden');
                const accordionBtn = accordionContent.previousElementSibling;
                if (accordionBtn) {
                    accordionBtn.classList.add('bg-amber-50/50', 'text-amber-700');
                    const arrow = accordionBtn.querySelector('.accordion-arrow');
                    if (arrow) arrow.classList.add('rotate-180');
                }
            }
        }
    }
});
