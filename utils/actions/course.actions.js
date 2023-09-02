'use server';
import { prisma } from '@/utils/db';
import fs from 'fs';
import path from 'path';

export const checkIfValidPath = async (path) => {
    try {
        fs.accessSync(path);
        const test = fs.readdirSync(path, { recursive: true });
        if (test.length === 0) return { data: true, message: 'folder is empty' };
        else {
            return { data: false, message: null };
        }
    } catch (error) {
        console.log(error);
        return { data: true, message: 'folder does not exist' };
    }
};

function getFolderContents(folderPath) {
    const folderContents = {};

    const files = fs.readdirSync(folderPath);

    files.forEach(async file => {
        const filePath = path.join(folderPath, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            const subfolderContents = getFolderContents(filePath);
            folderContents[file] = subfolderContents;
        } else if (stats.isFile()) {
            folderContents[file] = file;
        }
    });

    return folderContents;
}

export const createCourse = async ({ name, path, description }) => {

    // const process = new ffmpeg('')
    // process.then(video => {
    //     video.metadata.duration.seconds  
    // })
    const content = JSON.stringify(getFolderContents(path));

    await prisma.course.create({
        data: { description, name, path, content }
    });
};