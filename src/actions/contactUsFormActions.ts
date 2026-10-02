"use server";
import { contactUsForm } from "@/db/schema";
import { db } from "@/db";

type ServicesNeededType = {
    webDevelopment: boolean;
    webDesign: boolean;
    consulting: boolean;
    other: boolean;
};

export const addContactUsForm = async (name: string, email: string, phone: string, message: string, servicesNeeded: ServicesNeededType) => {
    await db.insert(contactUsForm).values({
        name: name,
        email: email,
        phone: phone,
        message: message,
        servicesNeeded: servicesNeeded
    });
};
