import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with petroleum equipment...');

  const products = [
    {
      name: 'Diamond Drill Bits for Petroleum Drill',
      description: 'High-performance diamond drill bits engineered for deep petroleum extraction and tough rock formations.',
      price: 520.00,
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop', // Placeholder industrial image
      category: 'Drilling Equipment'
    },
    {
      name: 'Petroleum Equipment Casing Spool',
      description: 'Made in China Petroleum Equipment Casing Spool, tested for high pressure and extreme conditions.',
      price: 315.00,
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
      category: 'Wellhead Equipment'
    },
    {
      name: 'High Pressure Mud Pump',
      description: 'Heavy-duty triplex mud pump designed for continuous and reliable operation in onshore and offshore drilling.',
      price: 15000.00,
      imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop',
      category: 'Pumps & Circulation'
    },
    {
      name: 'Drilling Rig Top Drive',
      description: 'Advanced automated top drive system to increase drilling efficiency and safety.',
      price: 45000.00,
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop',
      category: 'Rig Components'
    },
    {
      name: 'Blowout Preventer (BOP) Stack',
      description: 'Essential safety blowout preventer to control wellhead pressure and prevent blowouts.',
      price: 25000.00,
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
      category: 'Safety Equipment'
    },
    {
      name: 'Premium Drill Pipe (Per Joint)',
      description: 'High-grade steel drill pipes built to withstand immense torque and pressure during deep drilling.',
      price: 800.00,
      imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop',
      category: 'Tubulars'
    },
    {
      name: 'Offshore Drilling Platform Crane',
      description: 'Heavy lifting crane designed specifically for harsh offshore marine environments.',
      price: 120000.00,
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop',
      category: 'Lifting Equipment'
    },
    {
      name: 'Petroleum Storage Tank',
      description: 'Large capacity welded steel tank for safe storage of crude oil and refined products.',
      price: 35000.00,
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
      category: 'Storage'
    }
  ];

  for (const p of products) {
    await prisma.product.create({
      data: p
    });
  }

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
