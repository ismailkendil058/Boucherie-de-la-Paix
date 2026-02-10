export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  priceUnit: "kg" | "piece";
  image: string;
  halalCertified: boolean;
  inStock: boolean;
  special: boolean;
}

export const products: Product[] = [
  // Bœuf
  { id: "b1", name: "Entrecôte de Bœuf", category: "boeuf", description: "Entrecôte tendre et persillée, idéale pour la grillade. Viande de bœuf sélectionnée avec soin, certifiée Halal AVS.", price: 32.90, priceUnit: "kg", image: "https://images.unsplash.com/photo-1588347818036-558601350947?w=600&q=80", halalCertified: true, inStock: true, special: false },
  { id: "b2", name: "Faux-filet de Bœuf", category: "boeuf", description: "Pièce noble du bœuf, savoureuse et juteuse. Parfaite pour une cuisson à la poêle ou au barbecue.", price: 29.90, priceUnit: "kg", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=600&q=80", halalCertified: true, inStock: true, special: false },
  { id: "b3", name: "Viande Hachée de Bœuf", category: "boeuf", description: "Viande hachée fraîche, 100% bœuf. Idéale pour burgers, boulettes et sauces bolognaise.", price: 16.90, priceUnit: "kg", image: "https://images.unsplash.com/photo-1602473812169-36a015ef8f09?w=600&q=80", halalCertified: true, inStock: true, special: false },
  { id: "b4", name: "Côte de Bœuf", category: "boeuf", description: "Pièce d'exception pour les grandes occasions. Maturation optimale pour un goût incomparable.", price: 38.90, priceUnit: "kg", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80", halalCertified: true, inStock: true, special: false },
  // Agneau
  { id: "a1", name: "Gigot d'Agneau", category: "agneau", description: "Gigot d'agneau entier, tendre et fondant. Pièce maîtresse de vos repas de fête.", price: 24.90, priceUnit: "kg", image: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?w=600&q=80", halalCertified: true, inStock: true, special: false },
  { id: "a2", name: "Côtelettes d'Agneau", category: "agneau", description: "Côtelettes premières, tendres et savoureuses. Cuisson rapide à la poêle ou au grill.", price: 28.90, priceUnit: "kg", image: "https://images.unsplash.com/photo-1624174503860-5ba7be868898?w=600&q=80", halalCertified: true, inStock: true, special: false },
  { id: "a3", name: "Épaule d'Agneau", category: "agneau", description: "Épaule désossée, parfaite pour un rôti lent au four. Viande fondante et parfumée.", price: 19.90, priceUnit: "kg", image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80", halalCertified: true, inStock: true, special: false },
  // Volaille
  { id: "v1", name: "Poulet Fermier Entier", category: "volaille", description: "Poulet fermier élevé en plein air. Chair ferme et savoureuse, certifié Halal AVS.", price: 9.90, priceUnit: "kg", image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=600&q=80", halalCertified: true, inStock: true, special: false },
  { id: "v2", name: "Cuisses de Poulet", category: "volaille", description: "Cuisses de poulet charnues et juteuses. Idéales pour le four ou le tajine.", price: 7.90, priceUnit: "kg", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82571?w=600&q=80", halalCertified: true, inStock: true, special: false },
  { id: "v3", name: "Blancs de Dinde", category: "volaille", description: "Filets de dinde maigres et tendres. Parfaits pour une cuisine légère et saine.", price: 12.90, priceUnit: "kg", image: "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?w=600&q=80", halalCertified: true, inStock: true, special: false },
  // Viandes préparées
  { id: "p1", name: "Merguez Artisanales", category: "preparees", description: "Merguez maison épicées, préparées chaque jour. Idéales pour le barbecue.", price: 14.90, priceUnit: "kg", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80", halalCertified: true, inStock: true, special: false },
  { id: "p2", name: "Kefta Maison", category: "preparees", description: "Boulettes de viande hachée épicées, recette traditionnelle. Prêtes à cuire.", price: 16.90, priceUnit: "kg", image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80", halalCertified: true, inStock: true, special: false },
  { id: "p3", name: "Brochettes Mixtes", category: "preparees", description: "Assortiment de brochettes bœuf et agneau marinées. Prêtes pour le grill.", price: 18.90, priceUnit: "kg", image: "/Mes brochettes maison.jpg", halalCertified: true, inStock: true, special: true },
];
