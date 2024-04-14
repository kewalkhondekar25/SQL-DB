import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUserAndTodo = async (userId: number) => {
    const response = await prisma.todo.findMany({
        where: {
            userId
        },
        select: {
            id: true,
            title: true,
            done: true,
            user: true
        }
    });
    console.log(response);
};
getUserAndTodo(5)