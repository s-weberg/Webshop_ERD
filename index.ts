import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
app.use(express.json());
const PORT = 3000;

//Create a new product using req.body
app.post("/products", async (req, res) => {
    try {
        const newProduct = await prisma.product.create({ data: req.body });
        res.json(newProduct);
    } catch (error) {
        res.status(500).send({ error: error instanceof Error ? error.message : "Failed to create product" });
    }
});