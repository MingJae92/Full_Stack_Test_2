"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 4501;
// Define types
// interface ProcessedContributorData {
//   author: string;
//   total_contributions: number;
//   contribution_range: {
//     start: Date;
//     end: Date;
//   };
//   clans_contributed_to: string[];
// }
// interface RawContributorData {
//   author: string;
//   total_contributions: number;
//   first_contribution: string;
//   last_contribution: string;
//   clans_contributed_to: string;
// }
// // Get the full path to the JSON file
const filePath = path_1.default.join(__dirname, 'data', 'contributors.json');
// // Read raw contributor data from the file with error handling
// let rawData: RawContributorData[];
// try {
//   const fileContent = fs.readFileSync(filePath, 'utf8');
//   rawData = JSON.parse(fileContent);
// } catch (error) {
//   console.error('Error reading or parsing the file:', error);
//   process.exit(1); // Exit the process with an error code
// }
// // Log rawData to check if it's correctly loaded
// console.log('Raw Data:', rawData);
// // Convert date strings to Date objects
// const processedContributorData: ProcessedContributorData[] = rawData.map(
//   (contributor) => ({
//     author: contributor.author,
//     total_contributions: contributor.total_contributions,
//     contribution_range: {
//       start: new Date(contributor.first_contribution),
//       end: new Date(contributor.last_contribution),
//     },
//     clans_contributed_to: contributor.clans_contributed_to.split(','),
//   })
// );
// // Log processedContributorData to check if it's correctly processed
// console.log('Processed Data:', processedContributorData);
// // Define routes
// app.get('/', (req: { query: any }, res: { send: (arg0: string) => void }) => {
//   const query = req.query;
//   res.send(`
//     Hello World!
//     Query was ${JSON.stringify(query)}
//   `);
// });
// Start the server
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
