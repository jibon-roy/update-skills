import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'public', 'menu.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const newData = req.body;

        // Read the existing data
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.status(500).json({ error: 'Failed to read data' });
                return;
            }

            // Parse the existing JSON data
            let jsonData = JSON.parse(data);

            // Add the new data to the existing data
            jsonData.push(newData);

            // Write the updated JSON data back to the file
            fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
                if (err) {
                    res.status(500).json({ error: 'Failed to update data' });
                    return;
                }

                res.status(200).json({ message: 'Data updated successfully' });
            });
        });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
