import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const categories = [
  { name: "Fresh Vegetables", slug: "fresh-vegetables", image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=900&q=80" },
  { name: "Fresh Fruits", slug: "fresh-fruits", image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=900&q=80" },
  { name: "Leafy Greens", slug: "leafy-greens", image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=900&q=80" },
  { name: "Cut & Peeled", slug: "cut-peeled", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80" }
];

const products = [
  { name: "Potato", slug: "potato", categorySlug: "fresh-vegetables", unit: "1 kg", mrp: 30, sale: 22, stock: 120 },
  { name: "Onion Red", slug: "onion-red", categorySlug: "fresh-vegetables", unit: "1 kg", mrp: 40, sale: 32, stock: 90 },
  { name: "Apple Kinnaur", slug: "apple-kinnaur", categorySlug: "fresh-fruits", unit: "500 g", mrp: 120, sale: 99, stock: 50 },
  { name: "Banana", slug: "banana", categorySlug: "fresh-fruits", unit: "1 dozen", mrp: 70, sale: 55, stock: 70 },
  { name: "Spinach", slug: "spinach", categorySlug: "leafy-greens", unit: "250 g", mrp: 30, sale: 24, stock: 35 },
  { name: "Mixed Salad Pack", slug: "mixed-salad-pack", categorySlug: "cut-peeled", unit: "300 g", mrp: 99, sale: 79, stock: 25 }
];

async function main() {
  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: category,
      create: category
    });
  }

  for (const product of products) {
    const category = await prisma.category.findUniqueOrThrow({ where: { slug: product.categorySlug } });
    const created = await prisma.product.upsert({
      where: { slug: product.slug },
      update: {
        name: product.name,
        categoryId: category.id,
        status: "ACTIVE",
        isFeatured: true
      },
      create: {
        name: product.name,
        slug: product.slug,
        description: `${product.name} sourced fresh for same-day grocery delivery.`,
        categoryId: category.id,
        brand: "Foydn Fresh",
        status: "ACTIVE",
        isFeatured: true,
        seoTitle: `${product.name} Online in Jaipur`,
        seoDescription: `Buy fresh ${product.name.toLowerCase()} online with quick delivery in Jaipur.`
      }
    });

    await prisma.productVariant.upsert({
      where: { sku: `FOY-${product.slug.toUpperCase()}` },
      update: {
        unitLabel: product.unit,
        mrp: product.mrp,
        salePrice: product.sale,
        stockQty: product.stock
      },
      create: {
        productId: created.id,
        sku: `FOY-${product.slug.toUpperCase()}`,
        unitLabel: product.unit,
        mrp: product.mrp,
        salePrice: product.sale,
        stockQty: product.stock
      }
    });
  }

  await prisma.deliveryZone.upsert({
    where: { pincode: "302021" },
    update: { name: "Vaishali Nagar", minOrder: 199, deliveryFee: 25, isActive: true },
    create: { name: "Vaishali Nagar", pincode: "302021", minOrder: 199, deliveryFee: 25, isActive: true }
  });
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
