export class Book {
  id!: number;
  title!: string;
  author!: string;
  publishingHouse!: string;
  collection!: string;
  available!: boolean;
  language: any[] = [{label: "ROMANA"},
    {label:"ENGLEZA"},
    {label:"GERMANA"},
    {label:"FRANCEZA"},
    {label:"SPANIOLA"}];
  selectedLanguage !: string;
  numberOfPages!: number;
  yearOfLaunch!: number;
  category!: string;
  bookCode!: string;
  reviews!: string;
}
