import { Button } from './Button';
import iconShop from './assets/icon-shop.svg'
import iconFilter from './assets/icon-filter.svg'
import iconArrow from './assets/arrow.svg'
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ShopNow = {
  args: {
    width: '223px',
    height: '72px',
    padding: ' 19px 26px',
    gap: '8px',
    color: 'white',
    backgroundColor: '#1E2832',
    label: 'ShopNow',
    icon: iconShop,

    //fonts
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '29px',
    lineHeight: '34px',
    /* identical to box height */

    textTransform: 'capitalize',
  },
};

export const Filter = {
  args: {
    width: '92px',
    height: '32px',
    padding: '5px 15px',
    gap: '4px',
    color: 'white',
    backgroundColor: ' #1E2832',
    label: 'Filter',
    icon: iconFilter,
    position: 'relative',
    top: '0px',
    //font
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '22px',
    /* identical to box height */

    textTransform: 'capitalize',
  },
};

export const SeeCollection = {
  args: {
    width: ' 245px',
    height: '72px',
    padding: '19px 26px',
    gap: '8px',
    label: 'See Collection',
    color: '#1E283',
    backgroundColor: '#FFFFFF',

    //fonts
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '29px',
    lineHeight: '34px',
    /* identical to box height */

    textTransform: 'capitalize',
  },
};

export const ShowAll = {
  args: {
    width: '105px',
    height: ' 32px',
    padding: '5px 15px',
    gap: '4px',
    color: 'white',
    backgroundColor: ' #1E2832',
    label: 'Show All',

    //fonts
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '22px',
    /* identical to box height */

    textTransform: 'capitalize',
  },
};
export const ScrollToTop = {
  args: {
    width: "150px",
    height: "32px",
    padding: ' 5px 15px',
    gap: '4px',
    color: 'white',
    backgroundColor: '#1E2832',
    label: 'Scroll To Top',
    icon2: iconArrow,

    //fonts
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '22px',
    /* identical to box height */

    textTransform: 'capitalize',
  },
};
