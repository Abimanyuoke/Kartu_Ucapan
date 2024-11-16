let kartu = document.getElementById("kartu");
    function ubahKartu() {
    kartu.innerHTML = `<h1 class="font-semibold text-wrap animate__animated animate__zoomIn text-center">Selamat ulang tahun! Semoga tahun ini makin banyak kebahagiaan, rezeki lancar, dan segala impian jadi kenyataan. Semoga kita terus bisa bareng - bareng, seru - seruanm dan saling dukung ya! 🎉🎂</h1>
    <h2 class="mt-3 animate__animated  animate__fadeIn font-semibold text-slate-700">- Dari : Abim -</h2>
    <button class="p-2 bg-slate-600 text-white rounded mt-5 hover:bg-slate-900 transition ease-in w-full font-semibold animate__animated animate__delay-1s animate__tada" onclick="refresh()">Tutup</button>
    `
    }
    function refresh() {
        location.reload()
    }