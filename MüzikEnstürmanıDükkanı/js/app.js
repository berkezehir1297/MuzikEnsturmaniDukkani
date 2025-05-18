class Enstruman {
  constructor(ad, stok) {
    this.ad = ad;
    this.stok = stok;
  }
}

class Musteri {
  constructor(ad, email) {
    this.ad = ad;
    this.email = email;
    this.siparisler = [];
  }
}

class Satis {
  constructor(id, enstrumanAdi, miktar) {
    this.id = id;
    this.enstrumanAdi = enstrumanAdi;
    this.miktar = miktar;
    this.tarih = new Date().toLocaleString();
  }
}

class DestekTalebi {
  constructor(id, musteriAdi, detay) {
    this.id = id;
    this.musteriAdi = musteriAdi;
    this.detay = detay;
    this.tarih = new Date().toLocaleString();
  }
}
