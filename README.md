# Webshop ERD API

A RESTful API for a webshop system built with Node.js, Express, TypeScript, and Prisma ORM with PostgreSQL database.

## Table of Contents

- [Features](#features)
- [Database Schema](#database-schema)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Testing with Insomnia](#testing-with-insomnia)
- [Database Management with Prisma Studio](#database-management-with-prisma-studio)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Features

- **Product Management**: Create, read, update, and delete products
- **Category System**: Organize products by categories
- **Customer Management**: Handle customer data
- **Order Processing**: Manage orders and order items
- **Filtering**: Filter products by category and price range
- **Type Safety**: Full TypeScript support
- **Database Relations**: Proper relational database design

## Database Schema

The database consists of 5 main entities:

- **Customer**: Stores customer information (id, name, email, created_at)
- **Category**: Product categories (id, name)
- **Product**: Product details (id, name, price, stock, category_id)
- **Order**: Customer orders (id, order_date, customer_id)
- **OrderItem**: Individual items in orders (id, order_id, product_id, quantity)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd webshop_erd
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Configuration

1. **Create environment file**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/webshop_db"
   ```

2. **Configure database connection**
   Replace the connection string with your PostgreSQL credentials:
   - `username`: Your PostgreSQL username
   - `password`: Your PostgreSQL password
   - `localhost:5432`: Your PostgreSQL host and port
   - `webshop_db`: Your database name

## Database Setup

1. **Push the database schema**
   ```bash
   npx prisma db push
   ```

2. **Generate Prisma client**
   ```bash
   npx prisma generate
   ```

3. **Seed the database** (optional)
   ```bash
   npx prisma db seed
   ```

4. **View data in Prisma Studio** (optional)
   ```bash
   npx prisma studio
   ```

## Running the Application

### Development Mode
```bash
npm run dev
```
The server will start on `http://localhost:3000` with hot reload enabled.

### Production Mode
```bash
npm start
```

## API Endpoints

### Products

#### Create Product
- **POST** `/products`
- **Body**: 
  ```json
  {
    "name": "Product Name",
    "price": 99.99,
    "stock": 50,
    "category_id": 1
  }
  ```

#### Get Products (with filtering)
- **GET** `/products`
- **Query Parameters**:
  - `category`: Filter by category name
  - `minPrice`: Minimum price filter
  - `maxPrice`: Maximum price filter
- **Example**: `/products?category=Electronics&minPrice=100&maxPrice=1000`

#### Update Product
- **PATCH** `/products/:id`
- **Body**: Partial product data to update

#### Delete Product
- **DELETE** `/products/:id`

### Example API Usage


## Testing with Insomnia

[Insomnia](https://insomnia.rest/) is a great tool for testing REST APIs. Here's how to set up and test the endpoints:

### Setup
1. Download and install Insomnia
2. Create a new Request Collection called "Webshop API"
3. Set the base URL to `http://localhost:3000`

### Test Endpoints

#### 1. Create Product
- **Method**: POST
- **URL**: `http://localhost:3000/products`
- **Headers**: `Content-Type: application/json`
- **Body** (JSON):
```json
{
  "name": "Gaming Laptop",
  "price": 1299.99,
  "stock": 15,
  "category_id": 1
}
```

#### 2. Get All Products
- **Method**: GET
- **URL**: `http://localhost:3000/products`

#### 3. Filter Products
- **Method**: GET
- **URL**: `http://localhost:3000/products?category=Electronics&minPrice=500&maxPrice=2000`

#### 4. Update Product
- **Method**: PATCH
- **URL**: `http://localhost:3000/products/1`
- **Headers**: `Content-Type: application/json`
- **Body** (JSON):
```json
{
  "price": 1199.99,
  "stock": 20
}
```

#### 5. Delete Product
- **Method**: DELETE
- **URL**: `http://localhost:3000/products/1`


## Database Management with Prisma Studio

[Prisma Studio](https://www.prisma.io/studio) is a visual database browser that comes built-in with Prisma. It provides an intuitive interface to view, create, update, and delete data in your database.

### Starting Prisma Studio

```bash
npx prisma studio
```

This will open Prisma Studio in your default browser at `http://localhost:5555`

### Features

#### **Visual Data Browser**
- View all your database tables in a clean, organized interface
- See relationships between tables visually
- Browse data with pagination for large datasets

#### **Data Management**
- **Create**: Add new records directly through the UI
- **Read**: View and search through existing data
- **Update**: Edit records inline with form validation
- **Delete**: Remove records with confirmation prompts

#### **Advanced Features**
- **Search and Filter**: Find specific records quickly
- **Sorting**: Order data by any column
- **Relationships**: Navigate between related records
- **Schema Visualization**: Understand your database structure

### Using Prisma Studio with Your Webshop

1. **View Products**: Browse all products with their categories
2. **Manage Categories**: Create and organize product categories
3. **Customer Data**: View customer information and their orders
4. **Order Management**: See order details and associated items
5. **Data Relationships**: Click through related data (e.g., from product to category)

### Pro Tips for Prisma Studio
- **Use alongside API testing**: Verify that your API calls are working by checking data changes in Studio
- **Data seeding verification**: After running seed scripts, use Studio to confirm data was created correctly
- **Quick prototyping**: Test data scenarios before implementing API endpoints
- **Database exploration**: Understand your data structure and relationships visually

### Studio vs API Testing
- **Prisma Studio**: Great for direct database management and data exploration
- **Insomnia**: Perfect for testing API endpoints and HTTP requests
- **Combined workflow**: Use both tools together for comprehensive development and testing

## Project Structure

```
webshop_erd/
├── prisma/
│   ├── migrations/           # Database migration files
│   ├── schema.prisma        # Database schema definition
│   └── seed.ts              # Database seeding script
├── index.ts                 # Main application file
├── package.json             # Project dependencies and scripts
└── README.md               # Project documentation
```

## Technologies Used

- **[Node.js](https://nodejs.org/)** - Runtime environment for TypeScript/JavaScript
- **[Express.js](https://expressjs.com/)** - Web application framework
- **[TypeScript](https://www.typescriptlang.org/)** - Strongly typed programming language that builds on JavaScript
- **[Prisma](https://www.prisma.io/)** - Database ORM and query builder
- **[PostgreSQL](https://www.postgresql.org/)** - Relational database
- **[Nodemon](https://nodemon.io/)** - Development server with hot reload

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Database operations
npx prisma db push          # Apply schema changes
npx prisma generate         # Generate Prisma client
npx prisma db seed          # Seed database with sample data
npx prisma studio           # Open Prisma Studio
npx prisma migrate dev      # Create and apply migration

# Check database migration status
npx prisma migrate status
```

## Notes

- The application uses ES modules (`"type": "module"`)
- All API responses are in JSON format
- Error handling is implemented for all endpoints
- The database schema supports relationships between entities
- TypeScript provides compile-time type checking

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

This project is licensed under the ISC License.