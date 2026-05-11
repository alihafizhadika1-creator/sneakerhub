    // ==================== 42+ PRODUK NIKE + ADIDAS + PUMA dengan 3 ANGLE GAMBAR ====================
    const products = [
        // NIKE (1-15)
        { id: 1, name: "Nike Air Max 90", brand: "Nike", category: "Air Max", price: 1850000, images: ["image/nike-air max d.webp","image/nike-air max b.webp","image/nike-air max a.webp"], rating: 4.5 },
        { id: 2, name: "Nike Air Max 97", brand: "Nike", category: "Air Max", price: 2250000, images: ["image/AIR+MAX+97+d.avif","image/AIR+MAX+97.avif","image/AIR+MAX+97+a.avif"], rating: 4.7 },
        { id: 3, name: "Air Jordan 1 Mid", brand: "Nike", category: "Jordan", price: 2450000, images: ["image/AIR+JORDAN+1+MID+d.avif","image/AIR+JORDAN+1+MID+b.avif","image/AIR+JORDAN+1+MID+a.avif"], rating: 4.8 },
        { id: 4, name: "Air Jordan 4 Retro", brand: "Nike", category: "Jordan", price: 3250000, images: ["image/AIR+JORDAN+4+RETRO+d.avif","image/AIR+JORDAN+4+RETRO+OG+b.avif","image/AIR+JORDAN+4+RETRO+OG+a.avif"], rating: 4.9 },
        { id: 5, name: "Nike Dunk Low", brand: "Nike", category: "Dunk", price: 1690000, images: ["image/nike-dunk+d.webp","image/nike-dunk+b.webp","image/nike-dunk+a.webp"], rating: 4.6 },
        { id: 6, name: "Nike Dunk High", brand: "Nike", category: "Dunk", price: 1750000, images: ["image/nike-dunkhd.webp","image/nike+dunkb.webp","image/nike+dunka.webp"], rating: 4.5 },
        { id: 7, name: "Nike Revolution 6", brand: "Nike", category: "Running", price: 899000, images: ["image/nike=revd.webp","image/nike+revb.webp","image/nike=reva.webp"], rating: 4.3 },
        { id: 8, name: "Nike Air Zoom Pegasus 39", brand: "Nike", category: "Running", price: 1590000, images: ["image/nike=pegasusd.webp","image/nike=pegasusb.webp","image/nike=pegasusa.webp"], rating: 4.6 },
        { id: 9, name: "Nike Air Max Plus", brand: "Nike", category: "Air Max", price: 2150000, images: ["image/NIKE+AIR+MAX+PLUSd.avif","image/NIKE+AIR+MAX+PLUSb.avif","image/NIKE+AIR+MAX+PLUSa.avif"], rating: 4.7 },
        { id: 10, name: "Air Jordan 1 Low", brand: "Nike", category: "Jordan", price: 1990000, images: ["image/jordand.webp","image/jordanb.webp","image/jordana.webp"], rating: 4.6 },
        { id: 11, name: "Nike Dunk Low Retro", brand: "Nike", category: "Dunk", price: 1890000, images: ["image/nike dl d.webp","image/nike dl b.webp","image/nike dl a.webp"], rating: 4.7 },
        { id: 13, name: "Nike Air Force 1 '07", brand: "Nike", category: "Lifestyle", price: 1690000, images: ["image/airforced.webp","image/airforceb.webp","image/airforcea.webp"], rating: 4.4 },
        { id: 12, name: "Nike Vomero 16", brand: "Nike", category: "Running", price: 1450000, images: ["image/zoomd.avif","image/zoomb.avif","image/zooma.avif"], rating: 4.4 },
        { id: 14, name: "Nike Air Max 95", brand: "Nike", category: "Air Max", price: 2190000, images: ["image/legod.avif","image/legob.aivf","image/legoa.aivf"], rating: 4.6 },
        { id: 15, name: "Nike LeBron 20", brand: "Nike", category: "Basketball", price: 2350000, images: ["image/basketd.avif","image/basketb.avif","image/basketa.avif"], rating: 4.7 },
        // ADIDAS (16-28)
        { id: 16, name: "Adidas Ultraboost 22", brand: "Adidas", category: "Ultraboost", price: 2350000, images: ["image/ultrad.webp","image/ultrab.webp","image/ultaraa.webp"], rating: 4.7 },
        { id: 17, name: "Adidas Yeezy Boost 350 V2", brand: "Adidas", category: "Yeezy", price: 4250000, images: ["image/bostd.webp","image/bostb.webp","image/bosta.webp"], rating: 4.9 },
        { id: 18, name: "Adidas Samba OG", brand: "Adidas", category: "Original", price: 1490000, images: ["image/sambad.webp","image/sambab.webp","image/sambaa.webp"], rating: 4.5 },
        { id: 19, name: "Adidas NMD R1", brand: "Adidas", category: "NMD", price: 1890000, images: ["image/nmdd.webp","image/nmdb.webp","image/nmda.webp"], rating: 4.4 },
        { id: 20, name: "Adidas Forum Low", brand: "Adidas", category: "Basketball", price: 1590000, images: ["image/lowd.webp","image/lowb.webp","image/lowa.webp"], rating: 4.6 },
        { id: 21, name: "Adidas Superstar", brand: "Adidas", category: "Original", price: 1390000, images: ["image/superd.webp","image/superb.webp","image/supra.webp"], rating: 4.5 },
        { id: 22, name: "Adidas Adizero Adios Pro 4", brand: "Adidas", category: "Running", price: 2750000, images: ["image/adid.webp","image/adib.webp","image/adis.webp"], rating: 4.8 },
        { id: 23, name: "Adidas Yeezy 700 V3", brand: "Adidas", category: "Yeezy", price: 3650000, images: ["image/yed.webp","image/yeb.webp","image/yea.webp"], rating: 4.7 },
        { id: 24, name: "Adidas Gazelle", brand: "Adidas", category: "Original", price: 1290000, images: ["image/gaseld.webp","image/gaselb.webp","image/gasela.webp"], rating: 4.4 },
        { id: 25, name: "Adidas Climacool ", brand: "Adidas", category: "Ultraboost", price: 2490000, images: ["image/cimold.webp","image/cimolb.webp","image/cimola.webp"], rating: 4.8 },
        { id: 26, name: "Adidas Campus 00s", brand: "Adidas", category: "Original", price: 1440000, images: ["image/campusd.webp","image/campusb.webp","image/campusa.webp"], rating: 4.5 },
        { id: 27, name: "Adidas YUNG 2 OG", brand: "Adidas", category: "Training", price: 1190000, images: ["image/yungd.webp","image/yungb.webp","image/zoomd.avif"], rating: 4.3 },
        { id: 28, name: "Adidas Crazy 2", brand: "Adidas", category: "Lifestyle", price: 1590000, images: ["image/crayd.webp","image/crazyb.webp","image/crazya.webp"], rating: 4.4 },
        // PUMA (29-42)
        { id: 29, name: "Puma Suede Classic", brand: "Puma", category: "Suede", price: 1090000, images: ["image/suded.webp","image/sudeb.webp","image/sudea.webp"], rating: 4.4 },
        { id: 30, name: "Puma RS-X", brand: "Puma", category: "RS", price: 1490000, images: ["image/rsd.webp","image/rsb.webp","image/rsa.webp"], rating: 4.5 },
        { id: 31, name: "Puma Speedcat OG ", brand: "Puma", category: "Running", price: 1190000, images: ["image/cat.webp","image/catb.webp","image/cata.webphttps://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/373421/02/sv03/fnd/IND/w/1000/h/1000"], rating: 4.3 },
        { id: 32, name: "Puma MB.03 Toxic", brand: "Puma", category: "Running", price: 890000, images: ["image/toxicd.webp","image/toxicb.webp","image/toxica.webp"], rating: 4.2 },
        { id: 33, name: "Puma Clyde Court", brand: "Puma", category: "Basketball", price: 1590000, images: ["image/corut.webp","image/corutd.webp","image/coruta.webp"], rating: 4.4 },
        { id: 34, name: "Puma Smash V2", brand: "Puma", category: "Casual", price: 790000, images: ["image/nitro.webp","image/nitrob.webp","image/nitros.webp"], rating: 4.1 },
        { id: 35, name: "Puma Mirage Sport", brand: "Puma", category: "Sport", price: 1290000, images: ["image/mirage.webp","image/mirageb.webp","image/mirages.webp"], rating: 4.3 },
        { id: 36, name: "Puma x Ahluwalia ", brand: "Puma", category: "Original", price: 990000, images: ["image/ah.webp","image/ahb.webp","image/aha.webp"], rating: 4.2 },
        { id: 37, name: "Puma Axelion NXT", brand: "Puma", category: "Vintage", price: 1090000, images: ["image/ax.webp","image/axb.webp","image/axs.webp"], rating: 4.3 },
        { id: 38, name: "Puma Velocity Nitro 2", brand: "Puma", category: "Running", price: 1690000, images: ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/377066/01/sv01/fnd/IND/w/1000/h/1000","https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/377066/01/sv02/fnd/IND/w/1000/h/1000","https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/377066/01/sv03/fnd/IND/w/1000/h/1000"], rating: 4.6 },
        { id: 39, name: "Puma Scar 3", brand: "Puma", category: "Lifestyle", price: 1250000, images: ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/387654/01/sv01/fnd/IND/w/1000/h/1000","https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/387654/01/sv02/fnd/IND/w/1000/h/1000","https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/387654/01/sv03/fnd/IND/w/1000/h/1000"], rating: 4.3 },
        { id: 40, name: "Puma x BMW Motorsport", brand: "Puma", category: "Casual", price: 1190000, images: ["image/bmw.webp","image/bmwb.webp","image/bmws.webp"], rating: 4.4 },

    ];

    let cart = [], wishlist = [], currentFilter = "all", searchQuery = "";
    const productsGrid = document.getElementById("productsGrid"), cartSidebar = document.getElementById("cartSidebar"), overlay = document.getElementById("overlay");
    const cartCountSpan = document.getElementById("cartCount"), cartItemsList = document.getElementById("cartItemsList"), cartTotalPriceSpan = document.getElementById("cartTotalPrice");
    const searchInput = document.getElementById("searchInput"), transitionOverlay = document.getElementById("pageTransitionOverlay");
    const checkoutModal = document.getElementById("checkoutModal");

    function formatRupiah(amount) { return "Rp" + amount.toLocaleString("id-ID"); }
    function showToast(msg, icon = "✔️") { const toast = document.getElementById("toastMsg"); toast.innerText = `${icon} ${msg}`; toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 1800); }
    function saveData() { localStorage.setItem("sneaker_cart", JSON.stringify(cart)); localStorage.setItem("sneaker_wishlist", JSON.stringify(wishlist)); }
    function loadData() { const savedCart = localStorage.getItem("sneaker_cart"); if(savedCart) cart = JSON.parse(savedCart); const savedWish = localStorage.getItem("sneaker_wishlist"); if(savedWish) wishlist = JSON.parse(savedWish); updateCartUI(); renderProducts(); }

    function updateCartUI() { const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); cartCountSpan.innerText = totalItems; renderCartSidebar(); saveData(); }
    function renderCartSidebar() {
        if(cart.length === 0) { cartItemsList.innerHTML = `<div style="text-align:center; padding:2rem;">🛒 Keranjang masih kosong</div>`; cartTotalPriceSpan.innerText = `Total: Rp0`; return; }
        let html = "", total = 0;
        cart.forEach(item => { total += item.price * item.quantity; html += `<div class="cart-item" style="display:flex; gap:1rem; margin-bottom:1rem; border-bottom:1px solid #eee; padding-bottom:0.8rem;"><div style="width:70px; background:#f5f5f5; border-radius:12px; display:flex; align-items:center; justify-content:center;"><img src="${item.images[0]}" style="max-width:60px;" onerror="this.src='https://placehold.co/200x200?text=Shoes'"></div><div style="flex:1;"><div style="font-weight:600;">${item.name}</div><div style="font-size:0.8rem; color:#e63946;">${item.brand}</div><div>${formatRupiah(item.price)}</div><div style="display:flex; gap:0.5rem; margin-top:5px;"><button class="cart-qty-minus" data-id="${item.id}" style="background:#eee; border:none; width:28px; border-radius:20px; cursor:pointer;">-</button><span>${item.quantity}</span><button class="cart-qty-plus" data-id="${item.id}" style="background:#eee; border:none; width:28px; border-radius:20px; cursor:pointer;">+</button><span class="remove-item" data-id="${item.id}" style="color:#e63946; cursor:pointer; margin-left:8px;"><i class="fas fa-trash"></i></span></div></div></div>`; });
        cartItemsList.innerHTML = html; cartTotalPriceSpan.innerText = `Total: ${formatRupiah(total)}`;
        document.querySelectorAll(".cart-qty-minus").forEach(btn => btn.addEventListener("click", () => changeQuantity(parseInt(btn.dataset.id), -1)));
        document.querySelectorAll(".cart-qty-plus").forEach(btn => btn.addEventListener("click", () => changeQuantity(parseInt(btn.dataset.id), 1)));
        document.querySelectorAll(".remove-item").forEach(btn => btn.addEventListener("click", () => removeFromCart(parseInt(btn.dataset.id))));
    }
    function changeQuantity(id, delta) { const idx = cart.findIndex(i => i.id === id); if(idx !== -1) { cart[idx].quantity += delta; if(cart[idx].quantity <= 0) cart.splice(idx,1); updateCartUI(); renderProducts(); } }
    function removeFromCart(id) { cart = cart.filter(i => i.id !== id); updateCartUI(); renderProducts(); showToast("Dihapus dari keranjang", "🗑️"); }
    function addToCart(product) { const exist = cart.find(i => i.id === product.id); if(exist) exist.quantity += 1; else cart.push({ ...product, quantity: 1 }); updateCartUI(); renderProducts(); showToast(`${product.name} ditambahkan`, "🛍️"); document.getElementById("cartIconBtn").style.transform = "scale(1.2)"; setTimeout(() => document.getElementById("cartIconBtn").style.transform = "", 200); }
    function toggleWishlist(id) { const idx = wishlist.indexOf(id); if(idx === -1) { wishlist.push(id); showToast("Tersimpan di Wishlist", "❤️"); } else { wishlist.splice(idx,1); showToast("Dihapus dari Wishlist", "💔"); } saveData(); renderProducts(); }

    // CHECKOUT dengan ucapan terima kasih
    function processCheckout() {
        if(cart.length === 0) {
            showToast("Keranjang masih kosong!", "⚠️");
            return;
        }
        // Tampilkan modal ucapan terima kasih
        checkoutModal.classList.add("open");
        // Kosongkan keranjang
        cart = [];
        updateCartUI();
        renderProducts();
        // Tutup sidebar cart jika terbuka
        cartSidebar.classList.remove("open");
        overlay.classList.remove("active");
        showToast("Pesanan berhasil!", "🎉");
    }

    function showProductDetail(product) {
        const modal = document.getElementById("productModal"), inner = document.getElementById("modalInner");
        let brandClass = product.brand === "Nike" ? "brand-nike" : (product.brand === "Adidas" ? "brand-adidas" : "brand-puma");
        let angleThumbs = '';
        product.images.forEach((img, idx) => { angleThumbs += `<div class="angle-thumb" data-angle-index="${idx}"><img src="${img}" onerror="this.src='https://placehold.co/200x200?text=${product.brand}'"></div>`; });
        inner.innerHTML = `<div><img id="modalMainImg" class="main-product-img" src="${product.images[0]}" onerror="this.src='https://placehold.co/300x200?text=${product.brand}'"></div><div class="angle-gallery" id="angleGallery">${angleThumbs}</div><h3>${product.name}</h3><p class="brand-tag ${brandClass}" style="display:inline-block; padding:4px 12px; border-radius:20px;">${product.brand}</p><p style="margin:0.5rem 0; color:#777;">${product.category}</p><p style="font-size:1.6rem; font-weight:800; margin:0.5rem 0;">${formatRupiah(product.price)}</p><div style="margin-bottom:0.8rem;">⭐ ${product.rating} / 5.0</div><button class="close-modal">Tutup</button>`;
        modal.classList.add("open");
        const thumbs = document.querySelectorAll(".angle-thumb"), mainImg = document.getElementById("modalMainImg");
        thumbs.forEach((thumb, idx) => { thumb.addEventListener("click", () => { thumbs.forEach(t => t.classList.remove("active")); thumb.classList.add("active"); mainImg.src = product.images[idx]; }); if(idx === 0) thumb.classList.add("active"); });
        document.querySelector(".close-modal").onclick = () => modal.classList.remove("open");
    }

    function renderProducts() {
        let filtered = products.filter(p => { const matchFilter = currentFilter === "all" || p.brand === currentFilter || p.category === currentFilter; const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase()); return matchFilter && matchSearch; });
        if(filtered.length === 0) { productsGrid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:3rem;">😢 Tidak ada produk ditemukan</div>`; return; }
        productsGrid.style.opacity = "0"; productsGrid.style.transform = "translateY(10px)"; productsGrid.style.transition = "opacity 0.2s ease, transform 0.2s ease";
        setTimeout(() => {
            productsGrid.innerHTML = filtered.map(p => { let brandClass = p.brand === "Nike" ? "brand-nike" : (p.brand === "Adidas" ? "brand-adidas" : "brand-puma"); return `<div class="product-card" data-id="${p.id}" style="animation: fadeInUp 0.4s forwards;"><div class="product-img"><img src="${p.images[0]}" onerror="this.src='https://placehold.co/300x200?text=${p.brand}+Shoe'" loading="lazy"></div><div class="product-info"><span class="brand-tag ${brandClass}">${p.brand}</span><div class="product-title">${p.name}</div><div class="product-category">${p.category}</div><div class="price">${formatRupiah(p.price)}</div><div class="actions"><button class="btn-cart" data-id="${p.id}"><i class="fas fa-shopping-cart"></i> ${cart.some(i=>i.id===p.id) ? '+' : 'Beli'}</button><button class="btn-wish ${wishlist.includes(p.id) ? 'active-wish' : ''}" data-wish="${p.id}"><i class="fas fa-heart"></i></button></div></div></div>`; }).join("");
            productsGrid.style.opacity = "1"; productsGrid.style.transform = "translateY(0)";
            document.querySelectorAll(".btn-cart").forEach(btn => btn.addEventListener("click", (e) => { e.stopPropagation(); addToCart(products.find(p=>p.id===parseInt(btn.dataset.id))); }));
            document.querySelectorAll(".btn-wish").forEach(btn => btn.addEventListener("click", (e) => { e.stopPropagation(); toggleWishlist(parseInt(btn.dataset.wish)); }));
            document.querySelectorAll(".product-card").forEach(card => card.addEventListener("click", (e) => { if(!e.target.closest(".btn-cart") && !e.target.closest(".btn-wish")) showProductDetail(products.find(p=>p.id===parseInt(card.dataset.id))); }));
        }, 150);
    }

    function smoothTransition(callback) { transitionOverlay.classList.add("active"); setTimeout(() => { callback(); setTimeout(() => transitionOverlay.classList.remove("active"), 350); }, 200); }
    function setFilter(filter) { smoothTransition(() => { currentFilter = filter; document.querySelectorAll(".filter-btn").forEach(btn => { if(btn.dataset.filter === filter) btn.classList.add("active"); else btn.classList.remove("active"); }); renderProducts(); }); }
    function handleSearch() { smoothTransition(() => { searchQuery = searchInput.value.trim(); renderProducts(); }); }

    document.getElementById("cartIconBtn").addEventListener("click", () => { cartSidebar.classList.add("open"); overlay.classList.add("active"); renderCartSidebar(); });
    document.getElementById("closeCart").addEventListener("click", () => { cartSidebar.classList.remove("open"); overlay.classList.remove("active"); });
    overlay.addEventListener("click", () => { cartSidebar.classList.remove("open"); overlay.classList.remove("active"); });
    document.getElementById("checkoutBtn").addEventListener("click", processCheckout);
    document.getElementById("closeCheckoutModal").addEventListener("click", () => { checkoutModal.classList.remove("open"); });
    document.getElementById("wishlistIconBtn").addEventListener("click", () => { if(wishlist.length) { let names = wishlist.map(id=>products.find(p=>p.id===id)?.name).filter(n=>n); alert("❤️ Wishlist Anda:\n- "+names.join("\n- ")); } else showToast("Wishlist masih kosong", "💔"); });
    document.getElementById("userIcon").addEventListener("click", () => showToast("Selamat berbelanja di SneakerHub!", "👟"));
    document.querySelectorAll(".filter-btn").forEach(btn => btn.addEventListener("click", () => setFilter(btn.dataset.filter)));
    searchBtn.addEventListener("click", handleSearch); searchInput.addEventListener("keyup", (e) => { if(e.key === "Enter") handleSearch(); });
    document.querySelector(".logo h1").addEventListener("click", () => smoothTransition(() => { currentFilter = "all"; searchQuery = ""; searchInput.value = ""; document.querySelector(".filter-btn.active")?.classList.remove("active"); document.querySelector(".filter-btn[data-filter='all']").classList.add("active"); renderProducts(); }));
    
    loadData(); setFilter("all");