import { PrismaClient } from '../generated/prisma';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Hash passwords
  const password = await bcrypt.hash('password123', 10);
  // Create dummy users
  const users = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      password: password,
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: password,
    },
    {
      name: 'Bob Johnson',
      email: 'bob@example.com',
      password: password,
    },
    {
      name: 'Alice Brown',
      email: 'alice@example.com',
      password: password,
    },
    {
      name: 'Charlie Wilson',
      email: 'charlie@example.com',
      password: password,
    },
  ];

  // Clear existing users (optional)
  await prisma.user.deleteMany({});

  // Create users
  for (const userData of users) {
    const user = await prisma.user.create({
      data: userData,
    });
    console.log(`✅ Created user: ${user.name} (${user.email})`);
  }

  console.log('🎉 Seed completed!');
  console.log('\n📋 Test credentials:');
  console.log('Email: john@example.com, Password: password123');
  console.log('Email: jane@example.com, Password: password123');
  console.log('Email: bob@example.com, Password: password123');
  console.log('Email: alice@example.com, Password: password123');
  console.log('Email: charlie@example.com, Password: password123');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
