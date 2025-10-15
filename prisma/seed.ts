import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
    const electronics = await prisma.category.create({data: { name: 'Electronics' }});
    const books = await prisma.category.create({data: { name: 'Books' }});

    const product1 = await prisma.product.create({data: { name: 'Laptop', price: 8500, stock: 10, category_id: electronics.id }});
    const product2 = await prisma.product.create({data: { name: 'Fantasy Book', price: 249, stock: 100, category_id: books.id }});

    const Doris = await prisma.customer.create({data: { name: 'Doris', email: 'doris@example.com' }});
    const Disa = await prisma.customer.create({data: { name: 'Disa', email: 'disa@example.com' }});

    const order1 = await prisma.order.create({data: { customer_id: Doris.id }});
    const order2 = await prisma.order.create({data: { customer_id: Disa.id }});