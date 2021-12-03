<template>
  <div class="my-2">
    <p>LAB #1</p>
    <p>DASAR RANGKAIAN DIGITAL</p>
    <p>Tujuan</p>
    <p>1. Untuk mempelajari operasi dari gerbang logika dasar.</p>
    <p>2. Untuk membangun rangkaian logika dari persamaan Boolean.</p>
    <p>3. Untuk memperkenalkan beberapa konsep dasar dan teknik laboratorium dalam bekerja menggunakan gerbang logika digital.</p>
    <p>Pendahuluan</p>
    <p>
      Sebuah gerbang logika adalah sekumpulan rangkaian dasar dari rangkaian digital.
      Kebanyakan gerbang logika memiliki dua input dan satu output. Pada setiap saat, setiap
      terminal dalam satu dari dua kondisi biner LOW (0) atau HIGH (1), diwakili oleh level
      tegangan yang berbeda. Keadaan logika terminal bisa, dan umumnya tidak, sering
      berubah-ubah, sebagai data rangkaian proses. Dalam kebanyakan gerbang logika, kondisi
      LOW adalah sekitar nol volt (0 V), sedangkan kondisi HIGH adalah sekitar lima volt
      positif (+5 V).
      Gerbang logika merupakan komponen yang paling sederhana dari setiap sirkuit logika.
      Jadi, untuk memahami logika komputer, Anda harus memahami dan menguasai operator
      logika (gerbang). Gerbang adalah rangkaian elektronik digital yang hanya memiliki satu
      output tetapi satu atau lebih input. Output atau sinyal akan muncul pada output gerbang
      hanya pada kombinasi sinyal input tertentu.
      Ada banyak jenis gerbang logika; seperti AND, OR dan NOT, yang biasanya disebut tiga
      gerbang dasar. Gerbang populer lainnya adalah NAND dan gerbang NOR; yang hanya
      kombinasi AND atau gerbang OR dengan gerbang NOT dimasukkan sebelum sinyal
      keluaran. Gerbang XOR lainnya termasuk "Exclusive-OR" dan XNOR gerbang
      "Exclusive NOR".
      Menggunakan kombinasi gerbang logika, operasi yang kompleks dapat dilakukan. Secara
      teori, tidak ada batasan untuk jumlah gerbang yang dapat tersusun bersama dalam satu
      perangkat. Tapi dalam prakteknya, ada batasan untuk jumlah gerbang yang dapat dikemas
      ke dalam ruang fisik yang diberikan. Array gerbang logika ditemukan dalam sirkuit
      digital terintegrasi (IC). Sebagai kemajuan teknologi IC, volume fisik yang diperlukan
      untuk setiap penurunan gerbang logika individu dan perangkat digital dengan ukuran
      yang sama atau lebih kecil menjadi mampu melakukan operasi yang terus lebih-rumit
      pada kecepatan yang terus meningkat.
      Dalam percobaan ini, kita akan menyelidiki semua gerbang logika dikenal dan
      mempelajari operasi mereka sesuai dengan tabel kebenaran.
      </p>
  </div>
</template>

<script>
import Input from '@/components/Input.vue'
import Output from '@/components/Output.vue'

export default {
  name: 'Modul1',

  components: {
    Input,
    Output
  },
}
</script>

<style scoped>
.grid {
  display: grid;
  place-items: center;
}
</style>