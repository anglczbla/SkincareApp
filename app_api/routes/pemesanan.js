const express = require("express");
const router = express.Router();
const pemesananController = require("../controllers/pemesananController");

// Route untuk mendapatkan semua data pemesanan
router.get("/", pemesananController.getAllPemesanan);

// Route untuk membuat data pemesanan baru
router.post("/",pemesananController.createPemesanan);

// Route untuk mendapatkan data pemesanan berdasarkan ID
router.get("/:id", pemesananController.getPemesananById);

// Route untuk memperbarui data pemesanan berdasarkan ID
router.put("/:id", pemesananController.updatePemesanan);

// Route untuk menghapus data pemesanan berdasarkan ID
router.delete("/:id", pemesananController.deletePemesanan);

module.exports = router;
