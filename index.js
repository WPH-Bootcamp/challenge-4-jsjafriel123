const prompt = require("prompt-sync")({ sigint: true });

let todos = [];

function generateUniqueId() {
  // TODO: Implementasi fungsi untuk menghasilkan ID unik
  // Ini akan digunakan secara internal untuk setiap objek to-do
  // Contoh: Gabungan waktu saat ini dan angka acak
  let uniqueId =
    Date.now().toString() + Math.floor(Math.random() * 1000).toString();
  return uniqueId;
}

function addTodo() {
  // TODO: Implementasi logika untuk menambah to-do baru
  // TODO: Implementasi logika untuk menambah to-do baru
  // 1. Minta input teks to-do dari user menggunakan `prompt()`
  let newTodo = "";

  // 2. Validasi input: Pastikan teks tidak kosong atau hanya spasi
  newTodo = prompt("Enter your new To-Do: ", "");
  newTodo = newTodo.trim();
  if (newTodo == "" || newTodo == " ") {
    console.log("Empty value is invalid!");
    return;
  }
  // 3. Buat objek to-do baru dengan properti: id (dari generateUniqueId), text, dan isCompleted (boolean, default false)
  let newId = generateUniqueId();
  // 4. Tambahkan objek to-do ini ke array `todos`
  todos.push({ id: newId, text: newTodo, isCompleted: false });
  // 5. Beri feedback ke user bahwa to-do berhasil ditambahkan
  console.log(`A new To-Do "${newTodo}" has been added with id: ${newId}.`);
}

function markTodoCompleted() {
  // TODO: Implementasi logika untuk menandai to-do sebagai selesai
  // 1. Panggil `listTodos()` untuk menampilkan daftar to-do
  let maxTodo = listTodos();
  if (maxTodo == 0) {
    return;
  }
  // 2. Minta user memasukkan NOMOR to-do yang ingin ditandai sebagai selesai
  let inIndex = "";
  while (inIndex == "" || inIndex == " ") {
    inIndex = prompt("Enter the number of To-Do to be completed: ", "");
    inIndex = inIndex.trim();
  }
  // 3. Validasi input: Pastikan nomor adalah angka, dalam rentang yang valid (1 sampai jumlah to-do)
  if (isNaN(inIndex) || Number(inIndex) < 1 || Number(inIndex) > maxTodo) {
    console.log("Invalid number. Please enter a valid number from the list.");
  } else {
    toDo = todos[Number(inIndex) - 1];
    // 4. Ubah properti `isCompleted` dari to-do yang dipilih menjadi `true`
    if (toDo.isCompleted == true) {
      // 5. Beri feedback ke user bahwa to-do berhasil ditandai selesai
      console.log("Your chosen To-Do is already completed!");
    } else {
      toDo.isCompleted = true;
      todos[Number(inIndex) - 1] = toDo;
      listTodos();
      // 5. Beri feedback ke user bahwa to-do berhasil ditandai selesai
      console.log("The chosen To-Do has been set to [DONE].");
    }
  }

  // 6. Tangani kasus jika to-do sudah selesai
}

function deleteTodo() {
  // TODO: Implementasi logika untuk menghapus to-do
  // 1. Panggil `listTodos()` untuk menampilkan daftar to-do
  let tdRecords = listTodos();
  if (tdRecords == 0) {
    return;
  }
  // 2. Minta user memasukkan NOMOR to-do yang ingin dihapus
  let inIndex = "";
  inIndex = prompt(
    "Enter the list number of To-Do that you want to delete: ",
    ""
  );
  inIndex = inIndex.trim();
  if (inIndex == "" || inIndex == " ") {
    console.log("Invalid number. Please enter a valid number from the list.");
    return;
  }
  // 3. Validasi input: Pastikan nomor adalah angka, dalam rentang yang valid
  if (isNaN(inIndex) || Number(inIndex) < 1 || Number(inIndex) > tdRecords) {
    console.log("Invalid number. Please enter a valid number from the list.");
    inIndex = "";
  } else {
    // 4. Hapus to-do yang dipilih dari array `todos`
    todos.splice(Number(inIndex) - 1, 1);
    tdRecords = listTodos();
    // 5. Beri feedback ke user bahwa to-do berhasil dihapus
    console.log("Your chosen record has been deleted.");
  }
}

function listTodos() {
  // TODO: Implementasi logika untuk menampilkan semua to-do
  // 1. Tampilkan judul daftar (misal: "--- YOUR TO-DO LIST ---")
  console.log("---------- YOUR TO-DO LIST ----------");
  // 2. Cek apakah array `todos` kosong. Jika ya, tampilkan pesan "No to-dos to display."
  if (todos.length === 0) {
    console.log("No to-dos to display.");
    return todos.length;
  } else {
    // 3. Jika tidak kosong, iterasi (loop) melalui array `todos`
    let toDo = new Array();
    let tdStatus = "";

    for (let i = 0; i < todos.length; i++) {
      toDo = todos[i];
      if (toDo.isCompleted == false) {
        tdStatus = "[ACTIVE]";
      } else {
        tdStatus = "[DONE]";
      }
      // 4. Untuk setiap to-do, tampilkan nomor urut, status ([DONE] atau [ACTIVE]), dan teks to-do
      //    Contoh format: "1. [ACTIVE] | Belajar JavaScript"
      console.log(`${i + 1}. ${tdStatus} | ${toDo.text}`);
    }

    // 5. Tampilkan garis penutup daftar
    console.log("------------End of List--------------");
    return todos.length;
  }
}

function runTodoApp() {
  // TODO: Implementasi logika utama aplikasi (menu interaktif)
  // Ini adalah "otak" aplikasi yang terus berjalan sampai user memilih untuk keluar
  let running = true;
  while (running) {
    // 1. Tampilkan menu perintah yang tersedia (add, complete, delete, list, exit)
    // 2. Minta user memasukkan perintah menggunakan `prompt()`
    let inMenu = "";
    while (inMenu == "" || inMenu == " ") {
      console.log("TO-DO MENU");
      console.log("1. Add");
      console.log("2. Complete");
      console.log("3. Delete");
      console.log("4. List");
      console.log("5. Exit");
      inMenu = prompt("Enter a To-Do Menu: ", "");
      inMenu = inMenu.trim();
      // 3. Gunakan `switch` state
      // ment atau `if/else if` untuk memanggil fungsi yang sesuai
      //    berdasarkan perintah yang dimasukkan user
      if (
        // /^(12345)$/.test(inMenu) &&
        Number(inMenu) > 0 &&
        Number(inMenu) < 6
      ) {
        switch (inMenu) {
          case "1": // Add To-Do
            addTodo();
            inMenu = "";
            break;
          case "2": // Mark To-Do as Complete
            markTodoCompleted();
            inMenu = "";
            break;
          case "3": // Delete To-Do
            deleteTodo();
            inMenu = "";
            break;
          case "4": // List To-Do
            listTodos();
            inMenu = "";
            break;
          case "5": // Exit App
            // 4. Tangani perintah 'exit' untuk menghentikan loop aplikasi
            console.log("Terima kasih sudah menggunakan aplikasi ini...");
            running = false; // Stop running
        }
      } else {
        console.log("Nomor Menu tidak valid!");
      }
    }
    // 5. Tangani input perintah yang tidak valid
  }
}

// Jangan ubah bagian di bawah ini. Ini adalah cara Node.js menjalankan fungsi utama
// dan mengekspor fungsi-fungsi untuk pengujian (jika nanti ada).

if (require.main === module) {
  runTodoApp();
}

module.exports = {
  todos,
  generateUniqueId,
  addTodo,
  markTodoCompleted,
  deleteTodo,
  listTodos,
  runTodoApp,
};
