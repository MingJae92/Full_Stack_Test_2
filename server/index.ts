import express, { Request, Response } from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { readFileSync } from 'fs';
import { ParsedQs } from 'qs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 4502;

const filePath = new URL('file://' + path.resolve(__dirname, '../data/contributor.json')).pathname;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is your Express server!');
});

app.get('/contributors', (req: Request, res: Response) => {
  try {
    // Read and parse the JSON file
    const contributorsRaw = readFileSync(filePath, 'utf-8');
    const contributors = JSON.parse(contributorsRaw);

    // Get query parameters with type-checking
    const page: number = parseInt(req.query.page as string, 10) || 1;
    const pageSize: number = parseInt(req.query.page_size as string, 10) || 10;

    // Calculate start and end indices for pagination
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Get the specified page of contributors
    const contributorsPage = contributors.slice(startIndex, endIndex);

    // Return the paginated results
    res.json({
      page,
      page_size: pageSize,
      total_contributors: contributors.length,
      contributors: contributorsPage,
    });
  } catch (error) {
    console.error('Error reading or parsing contributors.json:', (error as Error).message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
