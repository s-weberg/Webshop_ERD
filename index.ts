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
    } catch (error) { res.status(500).send(error instanceof Error ? error.message : 'Unknown error'); }
});


//Filter products by category and price
app.get("/products", async (req, res) => {
  try {
    const { category, minPrice, maxPrice } = req.query;
    const products = await prisma.product.findMany({
        where: {
            category: category ? { name: String(category) } : undefined,
            price: {
                gte: minPrice ? Number(minPrice) : undefined,
                lte: maxPrice ? Number(maxPrice) : undefined,
            },
        },
        include: { category: true },
    });
    res.json(products);
    } catch (error) { res.status(500).send(error instanceof Error ? error.message : 'Unknown error'); }
});

//Uppdate product by id
app.patch("/products/:id", async (req, res) => {
    try {
        const updatedProduct = await prisma.product.update({
            where: { id: Number(req.params.id) },
            data: req.body,
        });
        res.json(updatedProduct);
    } catch (error) { res.status(500).send(error instanceof Error ? error.message : 'Unknown error'); }
});

//Delete product by id
app.delete("/products/:id", async (req, res) => {
    try {
        const deletedProduct = await prisma.product.delete({
            where: { id: Number(req.params.id) },
        });
        res.json(deletedProduct);
    } catch (error) { res.status(500).send(error instanceof Error ? error.message : 'Unknown error'); }
});





app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});