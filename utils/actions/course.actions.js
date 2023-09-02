'use server';
import { prisma } from '@/utils/db';
import fs from 'fs/promises';

export const checkIfValidPath = async (path) => {
    try {
        await fs.access(path);
        const test = await fs.readdir(path, { recursive: true });
        if (test.length === 0) return { data: true, message: 'folder is empty' };
        else {
            return { data: false, message: null };
        }
    } catch (error) {
        return { data: true, message: 'folder does not exist' };
    }
};

export const createCourse = async ({ name, path, description }) => {
    await prisma.course.create({
        data: { description, name, path }
    });
};