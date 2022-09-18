function BookLibrary(option) {
  this.teredia = option.teredia;
  this.books = option.books;
}

let gramediaSudarso = new BookLibrary ({
  teredia: 'yes',
  books: ['Sinar Dunia', 'Deli', 'Kiky']
})

let gramediaTamrin = new BookLibrary ({
  teredia: 'yes',
  books: ['Estudee', 'Joyko', 'Big Boss']
})


BookLibrary.prototype.returnBook = function () {
  let bukuTersedia = confirm('Apakah Anda ingin mereturn Merek Book ?')
  if(bukuTersedia) {
      return alert(this.books.join(', '))
  } else {
    return alert('Anda membatalkan')
  }
}

BookLibrary.prototype.borrowBook = function () {
  for(let i = 0; i < this.books.length; i++) {
      let pinjamBooks = prompt('Masukkan Buku : ') 
      if(this.books[i] === pinjamBooks) {
        return alert('Anda meminjam buku ' + pinjamBooks)
    } else {
        return alert('Buku, Tidak tersedia')
    }
  }
  
}

function cetakGramediaSudarso() {
  let pilih = prompt('1. Meminjam Buku\n2. Return Books\n Masukkan pilihan Anda : ');
  if(pilih == '1') {
    gramediaSudarso.borrowBook();
  } else if (pilih == '2') {
    gramediaSudarso.returnBook();
  } else {
    return alert('Masukkan angaka 1 dan 2')
  }
}

function cetakGramediaTamrin() {
  let pilih = prompt('1. Meminjam Buku\n2. Return Books\n Masukkan pilihan Anda : ');
  if(pilih == '1') {
    gramediaTamrin.borrowBook();
  } else if (pilih == '2') {
    gramediaTamrin.returnBook();
  }
}