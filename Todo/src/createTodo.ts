import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createTodo = async (title: string, userId: number ) => {
    const response = await prisma.todo.create({
        data: {
            title,
            userId
        }
    });
    console.log(response);
};
createTodo(
    "learn magic",
    5
)