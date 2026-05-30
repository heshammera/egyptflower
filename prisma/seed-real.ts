import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const realProducts = [
  {
    name: "Tricone Drill Bit 12.25 inch",
    description: "Premium Tungsten Carbide Insert (TCI) tricone rock bit designed for medium to hard formations. Features sealed journal bearings for extended drilling life.",
    price: 5500.00,
    category: "Drilling Tools",
    imageUrl: "/products/drill_bit.png"
  },
  {
    name: "PDC Drill Bit Matrix Body 8.5 inch",
    description: "High-performance Polycrystalline Diamond Compact (PDC) bit with matrix body. Engineered for superior wear resistance in highly abrasive applications.",
    price: 15000.00,
    category: "Drilling Tools",
    imageUrl: "/products/drill_bit.png"
  },
  {
    name: "API 16A Annular Blowout Preventer",
    description: "13-5/8 inch 5000 PSI Annular BOP. Critical safety equipment designed to close the wellbore around any shape of pipe or completely shut off the open hole.",
    price: 125000.00,
    category: "Well Control",
    imageUrl: "/products/blowout_preventer.png"
  },
  {
    name: "Cameron Type U Ram Blowout Preventer",
    description: "Double Ram BOP 13-5/8 inch 10,000 PSI. Provides robust shear and seal capabilities under extreme pressure conditions.",
    price: 180000.00,
    category: "Well Control",
    imageUrl: "/products/blowout_preventer.png"
  },
  {
    name: "F-1600 Triplex Mud Pump",
    description: "Heavy-duty 1600 HP triplex mud pump. Delivers high-pressure drilling fluid circulation required for deep well drilling.",
    price: 85000.00,
    category: "Pumping Systems",
    imageUrl: "/products/mud_pump.png"
  },
  {
    name: "Centrifugal Sand Pump 6x8",
    description: "High-volume centrifugal pump designed for handling abrasive drilling fluids and charging triplex mud pumps.",
    price: 8500.00,
    category: "Pumping Systems",
    imageUrl: "/products/mud_pump.png"
  },
  {
    name: "API 6A Gate Valve 4-1/16 10K",
    description: "High-pressure manually operated gate valve, 10,000 PSI working pressure. Essential for manifold and wellhead flow control.",
    price: 12000.00,
    category: "Valves & Manifolds",
    imageUrl: "/products/valves.png"
  },
  {
    name: "Choke Manifold 10,000 PSI",
    description: "Complete choke manifold assembly with adjustable and positive chokes for precise well pressure control during drilling operations.",
    price: 45000.00,
    category: "Well Control",
    imageUrl: "/products/valves.png"
  },
  {
    name: "Top Drive System 500 Ton",
    description: "AC electric Top Drive with 500-ton hoisting capacity. Enhances drilling efficiency and safety by allowing drilling with triple stands.",
    price: 195000.00,
    category: "Rig Equipment",
    imageUrl: "/products/mud_pump.png"
  },
  {
    name: "Drawworks 2000 HP",
    description: "AC gear-driven drawworks designed for 20,000 ft drilling depth. Features disc brakes and precise auto-drilling controls.",
    price: 200000.00,
    category: "Rig Equipment",
    imageUrl: "/products/mud_pump.png"
  },
  {
    name: "Shale Shaker Linear Motion",
    description: "High-G force linear motion shale shaker. First line of defense in solid control, separating drill cuttings from valuable mud.",
    price: 25000.00,
    category: "Solid Control",
    imageUrl: "/products/valves.png"
  },
  {
    name: "Vacuum Degasser 1000 GPM",
    description: "Efficiently removes entrained gases from drilling fluids to maintain mud density and prevent well kicks.",
    price: 18000.00,
    category: "Solid Control",
    imageUrl: "/products/mud_pump.png"
  },
  {
    name: "Mud Cleaner System",
    description: "Integrated desander and desilter cones mounted over a shaker screen for secondary and tertiary solid removal.",
    price: 35000.00,
    category: "Solid Control",
    imageUrl: "/products/blowout_preventer.png"
  },
  {
    name: "Sucker Rod Pump API",
    description: "Standard API downhole sucker rod pump for beam pumping applications in conventional oil wells.",
    price: 6000.00,
    category: "Artificial Lift",
    imageUrl: "/products/pumpjack.png"
  },
  {
    name: "Progressing Cavity Pump (PCP)",
    description: "Surface-driven PCP system designed for lifting heavy oil and fluids with high sand content.",
    price: 14000.00,
    category: "Artificial Lift",
    imageUrl: "/products/pumpjack.png"
  },
  {
    name: "Electrical Submersible Pump (ESP)",
    description: "Complete ESP system for high-volume artificial lift, including downhole pump, motor, and protector.",
    price: 85000.00,
    category: "Artificial Lift",
    imageUrl: "/products/pumpjack.png"
  },
  {
    name: "Wellhead Christmas Tree 15K",
    description: "15,000 PSI high-pressure Christmas tree assembly for severe service and high-yield gas wells.",
    price: 65000.00,
    category: "Wellhead",
    imageUrl: "/products/valves.png"
  },
  {
    name: "Casing Slip Type B 13-3/8",
    description: "Heavy-duty rotary casing slips designed to safely grip and hold casing strings during make-up.",
    price: 5200.00,
    category: "Handling Tools",
    imageUrl: "/products/drill_bit.png"
  },
  {
    name: "Hydraulic Power Tongs",
    description: "High-torque hydraulic tongs for fast, safe, and precise make-up of drill pipe and casing connections.",
    price: 28000.00,
    category: "Handling Tools",
    imageUrl: "/products/mud_pump.png"
  },
  {
    name: "Elevator Links 350 Ton",
    description: "Forged weldless elevator links (bails) rated for 350-ton lifting capacity. API certified.",
    price: 9500.00,
    category: "Handling Tools",
    imageUrl: "/products/blowout_preventer.png"
  }
]

async function main() {
  console.log('Clearing old products...')
  await prisma.product.deleteMany()

  console.log('Seeding 20 real petroleum equipment products with local images...')
  for (const product of realProducts) {
    await prisma.product.create({
      data: product
    })
  }
  
  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
