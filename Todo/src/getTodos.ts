import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getTodo = async (userId: number) => {
    const response = await prisma.todo.findMany({
        where: {
            userId
        }
    });
    console.log(response);
};
getTodo(6);