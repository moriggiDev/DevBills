import { z } from "zod";
import { ObjectId } from "mongodb";
import { TransactionType } from "@prisma/client";


const isValidobjectId = (id: string): boolean => ObjectId.isValid(id);

export const createTransaction = z.object({

    description: z.string().min(1, "A descrição é obrigatória"),
    amount: z.number().positive("O valor deve ser positivo"),
    date: z.coerce.date({
        message: "A data é obrigatória e deve ser uma data válida"
    }),
    categoryId: z.string().refine(isValidobjectId, {
        message: "Categoria inválida"
    }),
    type: z.enum([TransactionType.EXPENSE, TransactionType.INCOME], {
        message: "Dever ser do tipo 'EXPENSE' ou 'INCOME'"
    })
});