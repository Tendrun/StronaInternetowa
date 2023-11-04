const { PrismaClient }  = require('@prisma/client');

const prisma = new PrismaClient()

export async function GetUsers(){
    const allUsers = await prisma.tabletest.findMany();
    return allUsers;
}

GetUsers()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })