import Meat from "./assets/icons/meat.png";
import KebapIcon from "./assets/icons/kebap.png";
import Cup from "./assets/icons/cup.png";
import Leaf from "./assets/icons/leaf.png";

export const TypeProduct = new Map<number, string>(
    [
        [1, "ensaladas y entrantes"],
        [2, "kebaps"],
        [3, "platos tradicionales"],
        [4, "platos barbacoa"],
        [5, "postres"]
    ]
)

export const Allergen = new Map<number, string>(
    [
        [1, "gluten"],
        [2, "lactosa"],
        [3, "huevo"],
        [4, "frutos cáscara"],
        [5, "sulfitos"],
        [6, "mostaza"]
    ]
)

export interface Product {
    id: number,
    titleEsp: string,
    titleCat?: string,
    descriptionEsp?: string,
    descriptionCat?: string,
    price: number,
    vegetarian?: boolean,
    allergens: number[],
    image?: boolean
}

const EXTRA_CAT = "només carn, amb formatge feta"
const EXTRA_ESP = "solo carne, con queso feta"
const EXTRA_FALAFEL_CAT = "amb formatge feta"
const EXTRA_FALAFEL_ESP = "con queso feta"

export interface Kebap extends Product {
    extraEsp: string,
    extraCat: string
}

export interface menuItem {
    type: number,
    typeCat?: string,
    desciptionProduct?: string,
    products: (Product | Kebap)[]
}

export const menu: menuItem[] = [{
    type: 1,
    typeCat: "Amanides i entrants",
    products: [
        {
            id: 1,
            titleEsp: "ensalada mixta con queso feta",
            titleCat: "amanida mixta amb formatge feta",
            price: 4.90,
            vegetarian: true,
            allergens: [2]
        },
        {
            id: 2,
            titleEsp: "Tzaziki",
            descriptionCat: "crema de cogombre",
            descriptionEsp: "crema de pepino",
            price: 4.50,
            vegetarian: true,
            allergens: []
        },
        {
            id: 3,
            titleEsp: "Hummus",
            descriptionCat: "crema de cigrons",
            descriptionEsp: "crema de garbanzos",
            price: 4.50,
            vegetarian: true,
            allergens: [1],
            image: true
        },
        {
            id: 4,
            titleEsp: "Babaganoush",
            descriptionCat: "crema d'albergínia",
            descriptionEsp: "crema de berenjena",
            price: 4.50,
            vegetarian: true,
            allergens: []
        },
        {
            id: 5,
            titleEsp: "Tapas frías mixtas",
            titleCat: "Tapes fredes mixtes",
            descriptionCat: "hummus, tzaziki, sarma, falafel i babaganoush",
            descriptionEsp: "hummus, tzaziki, sarma, falafel y babaganoush",
            price: 7.90,
            vegetarian: true,
            allergens: [1, 5]
        },
        {
            id: 6,
            titleEsp: "Patatas fritas",
            titleCat: "Patates fregides",
            price: 2.50,
            vegetarian: true,
            allergens: []
        },
        {
            id: 7,
            titleEsp: "Patatas bravas turcas",
            titleCat: "Patates braves turques",
            price: 3.00,
            vegetarian: true,
            allergens: []
        },
        {
            id: 8,
            titleEsp: "Sarma (5u.)",
            descriptionEsp: "hojas de parra rellenas de arroz",
            descriptionCat: "fulles de parra farcides d'arròs",
            price: 4.50,
            vegetarian: true,
            allergens: [1],
            image: true
        },
        {
            id: 9,
            titleEsp: "Borek",
            descriptionEsp: "hojaldre relleno de queso y espinacas",
            descriptionCat: "pasta de full farcit de formatge i espinacs",
            price: 4.00,
            vegetarian: true,
            allergens: [1, 2]
        },
        {
            id: 10,
            titleEsp: "Lahmacun",
            descriptionCat: "pizza turca, picada de verdures amb carn picada",
            descriptionEsp: "pizza turca, picadillo de verduras con carne picada",
            price: 4.50,
            allergens: [1]
        },

    ]
},
{
    type: 2,
    products: [
        {
            id: 11,
            titleEsp: "döner kebap",
            descriptionEsp: "Pan turco (pita) relleno de ternera y/o pollo con lechuga, cebolla, tomate y col",
            descriptionCat: "Pa turc (pita) farcida de vadella i/o pollastre amb enciam, ceba, tomàquet i col",
            price: 3.80,
            allergens: [1],
            extraCat: EXTRA_CAT,
            extraEsp: EXTRA_ESP,
            image: true
        },
        {
            id: 12,
            titleEsp: "dürüm kebap",
            descriptionEsp: "Pan fino enrollado relleno de ternera y/o pollo con lechuga, cebolla, tomate y col",
            descriptionCat: "Pa fi enrotllat farcida de vadella i/o pollastre amb enciam, ceba, tomàquet i col",
            price: 4.00,
            allergens: [1],
            extraCat: EXTRA_CAT,
            extraEsp: EXTRA_ESP,
            image: true
        },
        {
            id: 13,
            titleEsp: "Falafel döner kebap",
            descriptionEsp: "Pan turco (pita) relleno de falafel con lechuga, cebolla, tomate y col",
            descriptionCat: "Pa turc (pita) farcida de falafel amb enciam, ceba, tomàquet i col",
            price: 3.80,
            vegetarian: true,
            allergens: [1],
            extraCat: EXTRA_FALAFEL_CAT,
            extraEsp: EXTRA_FALAFEL_ESP
        },
        {
            id: 14,
            titleEsp: "Falafel dürüm kebap",
            descriptionEsp: "Pan fino enrollado relleno de falafel con lechuga, cebolla, tomate y col",
            descriptionCat: "Pa fi enrotllat farcida de falafel amb enciam, ceba, tomàquet i col",
            price: 4.00,
            vegetarian: true,
            allergens: [1],
            extraCat: EXTRA_FALAFEL_CAT,
            extraEsp: EXTRA_FALAFEL_ESP
        },
        {
            id: 15,
            titleEsp: "adana dürüm",
            descriptionEsp: "Pan fino enrollado con un pincho de carne picada picante",
            descriptionCat: "Pa fi enrotllat amb un pinxo de carn picada picant",
            price: 5.50,
            allergens: [1],
            extraCat: EXTRA_CAT,
            extraEsp: EXTRA_ESP
        },
        {
            id: 16,
            titleEsp: "sis dürüm",
            descriptionEsp: "Pan fino enrollado con un pincho de pollo o cordero",
            descriptionCat: "Pa fi enrotllat amb un pinxo de pollastre o xai",
            price: 5.50,
            allergens: [1],
            extraCat: EXTRA_CAT,
            extraEsp: EXTRA_ESP
        },
        {
            id: 17,
            titleEsp: "doner al plato",
            titleCat: "doner al plat",
            descriptionEsp: "Ternera y/o pollo con ensalada, arroz o patatas fritas",
            descriptionCat: "Vadella i/o pollastre amb amannida, arròs o patates fregides",
            price: 7.90,
            allergens: [],
            image: true
        },
        {
            id: 18,
            titleEsp: "falafel al plato",
            titleCat: "falafel al plat",
            descriptionEsp: "Falafel con ensalada y patatas fritas",
            descriptionCat: "Falafel amb amannida i patates fregides",
            price: 6.90,
            vegetarian: true,
            allergens: [1],
            image: true
        }
    ] as Kebap[]
},
{
    type: 3,
    typeCat: "Plats tradicionals",
    products: [
        {
            id: 19,
            titleEsp: "iskender",
            descriptionEsp: "típico plato turco con carne de ternera, pan, arroz y salsa de tomate iskender con mantequilla fundida",
            descriptionCat: "típic plat turc amb carn de vadella, pa, arròs i salsa de tomàquet iskender amb mantega fosa",
            price: 9.90,
            allergens: [1, 2],
            image: true
        },
        {
            id: 20,
            titleEsp: "empanada del cazador",
            titleCat: "empanada del caçador",
            descriptionEsp: "carne de ternera y pollo, champiñones, mozarella, pimiento, huevo y zanahoria acompañado con patatas fritas, ensalada y babaganoush",
            descriptionCat: "carn de vadella i pollastre, xampinoys, mozarella, pebrot, ou i pastanaga acompanyat amb patates fregides, amanida i babaganoush",
            price: 7.90,
            allergens: [1, 3]
        },
        {
            id: 21,
            titleEsp: "ali nazik",
            descriptionEsp: "carne picada mezclada con babaganoush servida con verduras fritas, salsa de tomate y pan",
            descriptionCat: "carn picada barrejada amb babaganoush servit amb verdures fregides, salsa de tomàquet i pa",
            price: 9.90,
            allergens: []
        },
        {
            id: 22,
            titleEsp: "karniyarik",
            descriptionEsp: "berenjena rellena de carne picada acompañada con arroz, ensalada y yogur",
            descriptionCat: "albergínia farcida de carn picada acompañada amb arròs, amanida i iogurt",
            price: 9.90,
            allergens: [2]
        }
    ]
},
{
    type: 4,
    typeCat: "Plats barbacoa",
    products: [
        {
            id: 23,
            titleEsp: "köfte plat",
            descriptionCat: "mandonguilles de carn picada servides amb arròs o patates fregides, cremes i pa",
            descriptionEsp: "albóndigas de carne picada servidas con arroz o patatas fritas, cremas y pan",
            price: 9.50,
            allergens: []
        },
        {
            id: 24,
            titleEsp: "adana kebap",
            descriptionEsp: "pincho de carne picada picante (o sin picante) servido con arroz o patatas fritas, cremas y pan",
            descriptionCat: "pinxo de carn picada picant (o sense picant) servit amb arròs o patates fregides, cremes i pa",
            price: 8.90,
            allergens: [],
            image: true
        },
        {
            id: 25,
            titleEsp: "sis kebap",
            descriptionEsp: "pincho de cordero servido con arroz o patatas fritas, cremas y pan",
            descriptionCat: "pinxo de xai servit amb arròs o patates fergides, cremes i pa",
            price: 9.90,
            allergens: [],
            image: true
        },
        {
            id: 26,
            titleEsp: "sis tavuk",
            descriptionEsp: "pincho de pollo servido con arroz o patatas fritas, cremas y pan",
            descriptionCat: "pinxo de pollastre servit amb arròs o patates fergides, cremes i pa",
            price: 8.90,
            allergens: []
        },
        {
            id: 27,
            titleEsp: "beyti sarma",
            descriptionEsp: "pincho de carne picada de ternera y cordero enrollado en pan fino con salsa de tomate y mantequilla fundida servida con yogur y patatas fritas o arroz",
            descriptionCat: "pinxo de carn picada de vadella y xai enrotllat en pa fi amb salsa de tomàquet i mantega fosa servit amb igourt i patates fregides o arròs",
            price: 9.90,
            allergens: []
        },
        {
            id: 28,
            titleEsp: "alitas de pollo",
            descriptionEsp: "servidas con arroz o patatas fritas, cremas y pan",
            titleCat: "ales de pollastre",
            descriptionCat: "servides amb arròs o patates fergides, cremes i pa",
            price: 7.90,
            allergens: [],
            image: true
        },
        {
            id: 29,
            titleEsp: "pirzola",
            descriptionEsp: "costillas de cordero servidas con arroz o patatas fritas, cremas y pan",
            descriptionCat: "costelles de xai servides amb arròs o patates fregides, cremes i pa",
            price: 9.90,
            allergens: []
        },
        {
            id: 30,
            titleEsp: "plato capadocia para dos",
            titleCat: "plat capadocia per a dos",
            descriptionEsp: "distintas carnes a la barbacoa servidas con babaganoush, hummus de garbanzos, ensalada, arroz o patatas fritas y pan",
            descriptionCat: "diferents carns a la barbacoa servides amb babaganoush, hummus de cigrons, amanida, arròs o patates fregides i pa",
            price: 24.90,
            allergens: []
        }
    ]
},
{
    type: 5,
    products: [
        {
            id: 31,
            titleEsp: "Baklava (1 u.)",
            descriptionEsp: "típico postre tradicional hecho a base de capas de hojaldre, miel y pistacho o nuezes",
            descriptionCat: "típic postre tradicional fet a base de capes de pasta de full, mel y festucs o nous",
            price: 1.70,
            vegetarian: true,
            allergens: [1, 2, 4],
            image: true
        },
        {
            id: 32,
            titleEsp: "Yogur con miel o mermelada y nueces",
            titleCat: "Iogurt amb mel o mermelada i nous",
            price: 1.70,
            vegetarian: true,
            allergens: [2, 4]
        }
    ]
}]

export interface TargetListProp {
    image: string;
    title: string;
    description: string;
}

export const targetList: TargetListProp[] = [
    {
        image: Meat,
        title: "carne fresca",
        description: "Trabajamos con productos frescos y naturales.",
    },
    {
        image: KebapIcon,
        title: "kebab de calidad",
        description: "La carne del kebap es de elaboración propia.",
    },
    {
        image: Cup,
        title: "platos tradicionales",
        description: "Sumérgete en la cultura turca.",
    },
    {
        image: Leaf,
        title: "opción vegetariana",
        description: "Pensamos en vosotros, tenemos comida vegetariana.",
    },
];
