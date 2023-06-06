import { Card } from './Card';
import imgProduct1 from './assets/product1.svg'
export default {
    title: 'Example/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };

  export const StyledCard = {
    args: {
        img: imgProduct1,
        title: 'Adicolor Classics Joggers',
        category: 'Dress',
        price:'$63.85'
    },
  };