import { Prisma, PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

export const users: Prisma.UserCreateInput[] = [
	{
		nickname: "charlesmarques",
		name: "Charles Marques",
		password: "Abcd@1234",
		image: "https://cf.shopee.com.br/file/221108f3b6530ded97b52a48990017c0",
	},
];

export const user = async (prisma: PrismaClient) => {
	for (const obj of Object.values(users)) {
		await prisma.user.upsert({
			where: { nickname: obj.nickname },
			update: {},
			create: {
				...obj,
				password: await bcrypt.hash(obj.password, 10),
			},
		});
	}
};
