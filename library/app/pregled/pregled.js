'use strict';

class Knjiga {
    constructor(id, naziv, datumStampanja, url, opis, popularnost, tip) {
        this.id = id;
        this.naziv = naziv;
        this.datumStampanja = datumStampanja;
        this.url = url;
        this.opis = opis;
        this.popularnost = popularnost;
        this.tip = tip;
    }
}

let knjige = [];

function ucitajKnjige() {
    let podaci = localStorage.getItem('knjige');
    if (podaci) {
        knjige = JSON.parse(podaci);
    } else {
        knjige = [
            { id: "1", naziv: "Na Drini ćuprija", datumStampanja: "1945", url: "https://laguna.rs/_img/korice/6291/na_drini_cuprija-ivo_andric_v.png", opis: "Roman Ive Andrića o mostu na Drini.", popularnost: 5 },
            { id: "2", naziv: "Prokleta avlija", datumStampanja: "1954", url: "https://delfi.rs/_img/artikli/2015/05/prokleta_avlija_vv.jpg", opis: "Kratki roman o zatočenicima u turskom zatvoru.", popularnost: 4 },
            { id: "3", naziv: "Seobe", datumStampanja: "1929", url: "https://dereta.rs/cached/dereta.rs/Images/Seobe0-1000x0-000005212235.jpg", opis: "Roman Miloša Crnjanskog o seobama Srba u XVIII veku.", popularnost: 5 }
        ];
        localStorage.setItem('knjige', JSON.stringify(knjige));
    }
}

function sacuvajKnjige() {
    localStorage.setItem('knjige', JSON.stringify(knjige));
}

function popuniTabelu() {
    let tbody = document.querySelector('#tabelaKnjiga');
    tbody.innerHTML = '';

    for (let i = 0; i < knjige.length; i++) {
        let knjiga = knjige[i];

        let tr = document.createElement('tr');

        let tdBr = document.createElement('td');
        tdBr.textContent = i + 1;

        let tdNaziv = document.createElement('td');
        tdNaziv.textContent = knjiga.naziv;

        let tdObrisi = document.createElement('td');
        let btnObrisi = document.createElement('button');
        btnObrisi.textContent = 'Obriši';
        btnObrisi.addEventListener('click', function() {
            obrisiKnjigu(i);
        });
        tdObrisi.appendChild(btnObrisi);

        tr.appendChild(tdBr);
        tr.appendChild(tdNaziv);
        tr.appendChild(tdObrisi);
        tbody.appendChild(tr);
    }
}

function obrisiKnjigu(index) {
    knjige.splice(index, 1);
    sacuvajKnjige();
    popuniTabelu();
}

document.addEventListener('DOMContentLoaded', function() {
    ucitajKnjige();
    popuniTabelu();
});