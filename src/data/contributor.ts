import { ProcessedContributorData } from '../types/contributor';
import { PagedResults } from '../types/paging';

export const contributors: PagedResults<ProcessedContributorData> = {
  items: [
    {
      author: 'Eberhardt R',
      clans_contributed_to: [
        'tRNA clan',
        'RNaseP clan',
        'Telomerase clan',
        'U1 clan',
        'mir-36 clan',
        'suhB sRNA clan',
        'SSU clan',
        'LSU clan',
      ],
      contribution_range: {
        start: new Date('2013-10-04T02:27:34.000Z'),
        end: new Date('2015-03-19T13:53:08.000Z'),
      },
      total_contributions: 8,
    },
    {
      author: 'Bateman A',
      clans_contributed_to: [
        'Hammerhead clan',
        'FinP-traJ clan',
        'RyeA/RyeB clan',
        'Csr-Rsm protein binding clan',
        'Ribosomal Protein S15 Leader clan',
      ],
      contribution_range: {
        start: new Date('2013-10-03T21:04:11.000Z'),
        end: new Date('2013-10-03T23:23:20.000Z'),
      },
      total_contributions: 7,
    },
    {
      author: 'Daub J',
      clans_contributed_to: [
        'SNORA35 clan',
        'SNORD58 clan',
        'SNORD88 clan',
        'SNORD100 clan',
        'SNORD110 clan',
        'LhrC clan',
        "Flavivirus 5' UTR clan",
      ],
      contribution_range: {
        start: new Date('2013-02-01T11:57:56.000Z'),
        end: new Date('2013-10-04T00:04:25.000Z'),
      },
      total_contributions: 7,
    },
    {
      author: 'Weinberg Z, Gardner PP',
      clans_contributed_to: ['Group II catalytic intron D1-D4 clan'],
      contribution_range: {
        start: new Date('2013-10-04T02:18:00.000Z'),
        end: new Date('2013-10-04T02:18:35.000Z'),
      },
      total_contributions: 7,
    },
    {
      author: 'Wilkinson A, Eberhardt R',
      clans_contributed_to: [
        'SNORD12 clan',
        'SNORD31 clan',
        'SNORD43 clan',
        'SNORD46 clan',
        'SNORD49 clan',
        'SNORD105 clan',
        'snR68 clan',
      ],
      contribution_range: {
        start: new Date('2013-10-04T01:21:46.000Z'),
        end: new Date('2013-10-04T01:28:10.000Z'),
      },
      total_contributions: 7,
    },
    {
      author: 'Gutell RR, Nawrocki E',
      clans_contributed_to: ['SSU clan', 'LSU clan'],
      contribution_range: {
        start: new Date('2013-10-03T22:45:40.000Z'),
        end: new Date('2014-07-14T01:57:59.000Z'),
      },
      total_contributions: 5,
    },
    {
      author: 'Argasinska J',
      clans_contributed_to: [
        'Csr-Rsm protein binding clan',
        'NiCo_riboswitches',
      ],
      contribution_range: {
        start: new Date('2013-10-03T22:34:19.000Z'),
        end: new Date('2017-11-07T16:08:44.000Z'),
      },
      total_contributions: 4,
    },
    {
      author: 'Griffiths-Jones SR, Daub J',
      clans_contributed_to: [
        'SNORD74 clan',
        'SNORD96 clan',
        'mir-15 clan',
        'mir-19 clan',
      ],
      contribution_range: {
        start: new Date('2013-10-03T22:22:22.000Z'),
        end: new Date('2013-10-03T23:24:31.000Z'),
      },
      total_contributions: 4,
    },
    {
      author: 'de la Pena M, Burge SW',
      clans_contributed_to: ['Hammerhead clan'],
      contribution_range: {
        start: new Date('2013-10-04T02:30:14.000Z'),
        end: new Date('2013-10-04T02:30:20.000Z'),
      },
      total_contributions: 3,
    },
    {
      author: 'Griffiths-Jones SR, Mifsud W',
      clans_contributed_to: ['RNaseP clan', 'LSU clan'],
      contribution_range: {
        start: new Date('2013-10-03T19:47:00.000Z'),
        end: new Date('2013-10-03T21:04:21.000Z'),
      },
      total_contributions: 3,
    },
  ],
  total: 61,
};
