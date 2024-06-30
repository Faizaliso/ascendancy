"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function registerAction(_, formData) {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!username || !email || !password) {
    return {
      success: "false",
      message: "All fields are required",
      data: {
			username,
			email,
			password,
		}
    };
  }

  if (password.length < 6) {
    return {
      success: "false",
      message: "Password must be at least 6 characters long",
      data: {
			username,
			email,
			password,
		}
    };
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 13);

    await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return {
      success: "true",
      message: "Register success, please login",
    };
  } catch (error) {
    console.log(error);

    return {
      success: "false",
      message: "Something went wrong",
    };
  }
}
