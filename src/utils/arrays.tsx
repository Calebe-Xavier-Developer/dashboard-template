import { CarsType, Intention, UserType } from "./interfaces";
import chevroletPrisma from '../assets/img/chevrolet-prisma.png';
import fordEcosport from '../assets/img/ford-ecosport.png';
import fordEcosportGray from '../assets/img/ford-ecosport-gray.png';
import jeepCompass from '../assets/img/jeep-compass.png';
import toyotaCorolla from '../assets/img/toyota-corolla.png';
import hyundaiLogo from '../assets/img/hyundai_logo.png';
import chevroletLogo from '../assets/img/chevrolet_logo.png';
import jeepLogo from '../assets/img/jeep_logo.png';
import volkswagenLogo from '../assets/img/volkswagen_logo.png';
import nissanLogo from '../assets/img/nissan_logo.png';

export const cars: Array<CarsType> = [
  {
    id: 1,
    name: "jeep compass",
    model: "GDL8019",
    year: "2018",
    typeFuel: "diesel",
    exchange: "automático",
    mileage: "70.972 KM",
    price: "R$ 115.560",
    minPrice: "R$ 115.560",
    img: jeepCompass,
  },
  {
    id: 2,
    name: "ford ecosport",
    model: "GDL8019",
    year: "2018",
    typeFuel: "flex",
    exchange: "automático",
    mileage: "70.972 KM",
    price: "R$ 38.900",
    minPrice: "R$ 36.900",
    img: fordEcosport,
  },
  {
    id: 3,
    name: "chevrolet prisma",
    model: "GDL8019",
    year: "2018",
    typeFuel: "flex",
    exchange: "automático",
    mileage: "70.972 KM",
    price: "R$ 41.200",
    minPrice: "R$ 40.000",
    img: chevroletPrisma,
  },
  {
    id: 4,
    name: "toyota corolla",
    model: "GDL8019",
    year: "2018",
    typeFuel: "fles",
    exchange: "automático",
    mileage: "70.972 KM",
    price: "R$ 56.500",
    minPrice: "R$ 55.000",
    img: toyotaCorolla,
  },
  {
    id: 5,
    name: "ford ecosport",
    model: "GDL8019",
    year: "2018",
    typeFuel: "flex",
    exchange: "mrcânico",
    mileage: "70.972 KM",
    price: "R$ 27.100",
    minPrice: "R$ 25.600",
    img: fordEcosportGray,
  },
];

export const buyIntention: Array<Intention> = [
  {
    id: 1,
    name: "HB20",
    rating: 197,
    image: hyundaiLogo,
  },
  {
    id: 2,
    name: "Onix",
    rating: 183,
    image: chevroletLogo,
  },
  {
    id: 3,
    name: "Renegade",
    rating: 125,
    image: jeepLogo,
  },
  {
    id: 4,
    name: "T-Cross",
    rating: 109,
    image: volkswagenLogo,
  },
  {
    id: 5,
    name: "Kicks",
    rating: 86,
    image: nissanLogo,
  },
];

export const users: Array<UserType> = [
  {id: 1, name: 'Paulo Henrique Mattos', status: 'Cliente', tel: '(16)99653-8899', email: 'ph.mattos@gmail.com'},
  {id: 2, name: 'Juliana Martins Silva', status: 'Cliente', tel: '(16)99819-3112', email: 'jumartins.silva@hotmail.com'},
  {id: 3, name: 'Luís Rocha', status: 'Cliente', tel: '(16)99776-9290', email: 'luisrocha@yahoo.com.br'},
  {id: 4, name: 'Adilson Vieira Antunes', status: 'Lead', tel: '(16)99664-0187', email: 'a.vieira@uol.com.br'},
  {id: 5, name: 'Felipe Alves', status: 'Lead', tel: '(16)99660-7765', email: 'felipe_alves@hotmail.com'},
  {id: 6, name: 'Roberta Vianna', status: 'Cliente', tel: '(16)99765-2233', email: 'robertavianna@gmail.com'},
  {id: 7, name: 'Silvia Pereira', status: 'Cliente', tel: '(16)99642-8721', email: 'silvia.pereira@outlook.com'},
  {id: 8, name: 'Eduardo Oliveira', status: 'Cliente', tel: '(16)99872-3254', email: 'eduoliveira@hotmail.com'},
  {id: 9, name: 'Maria Antônia Silva Santos', status: 'Cliente', tel: '(16)99443-9986', email: 'maria.ss@uol.com.br'},
  {id: 10, name: 'Rodrigo Ribeiro Costa', status: 'Cliente', tel: '(16)99876-0012', email: 'rrc@gmail.com'},
];
