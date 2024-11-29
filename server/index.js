import express from "express";

const app = express();
const PORT = process.env.PORT;

// Middleware untuk menangani route utama
app.get("/", (req, res) => {
    res.status(200).json({
        message: "hello world",
    });
});

// Middleware untuk menangani request yang tidak ditemukan (404)
app.use('*', (req, res) => {
    res.status(404).json({ 
        message: "not found", 
    });
});

// Menjalankan server Express
app.listen(PORT, () => {
    console.log(`Server berhasil dijalankan pada port ${PORT}`);
});
