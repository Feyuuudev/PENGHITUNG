function hitungWR() {
    const totalMatch = parseInt(document.getElementById("totalMatch").value);
    const totalWR = parseFloat(document.getElementById("totalWR").value);
    const targetWR = parseFloat(document.getElementById("targetWR").value);

    if (isNaN(totalMatch) || isNaN(totalWR) || isNaN(targetWR)) {
        alert("Harap masukkan semua nilai dengan benar!");
        return;
    }

    if (targetWR <= totalWR) {
        document.getElementById("hasil").innerHTML = `WR yang diinginkan lebih kecil atau sama dengan WR saat ini.`;
        return;
    }

    const kemenanganSaatIni = Math.round((totalWR / 100) * totalMatch);
    const kemenanganDiperlukan = Math.ceil(((targetWR / 100) * totalMatch - kemenanganSaatIni) / (1 - targetWR / 100));

    if (kemenanganDiperlukan > 0) {
        document.getElementById("hasil").innerHTML = `Kamu perlu ${kemenanganDiperlukan} kemenangan tanpa kalah untuk mencapai WR ${targetWR}%.`;
    } else {
        document.getElementById("hasil").innerHTML = `WR kamu sudah lebih dari ${targetWR}%!`;
    }
}
