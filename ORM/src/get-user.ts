import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const response = await prisma.user.findMany({});
  const response2 = await prisma.user.findUnique({
      where: {
          id: 1
        },
        include: {
            posts: true
        }
    })
    console.log( response, response2);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })