import { shallow } from 'enzyme';
import * as React from 'react';
import {Menu, MenuButton, MenuItem} from './Menu';

// 1. On click handler triggered when clicked
// 2. Aria stuff 
describe('MenuButton Test Suite', () => {
   //A function that does nothing
  const noop = () => {};

  //Test 1 in Jest
  it('triggers onClick event handler when clicked', () => {
    //Create a mock function and then we will inspect this mock function's state to 
    //ensure the onClick works as expected
    //Can simulate clicks with this
    const onClick = jest.fn(); // mock onClick function
    shallow(<MenuButton onClick={onClick} open={false} />).simulate('click');

    //Google jest expect
    expect(onClick).toBeCalledTimes(2);
  });
  
  it('aria-label attribute is defined', () => {
    const button = shallow(<MenuButton onClick={noop} open={false} />);
    expect(button.props()['aria-label']).toBeDefined();
  });

  it('sets aria-expanded to false when closed', () => {
    const button = shallow(<MenuButton onClick={noop} open={false} />);
    expect(button.props()['aria-expanded']).toBe(false);
  });

  it('sets aria-expanded to true when open', () => {
    const button = shallow(<MenuButton onClick={noop} open={true} />);
    expect(button.props()['aria-expanded']).toBe(true);
  });
});

// 1. Title exists
// 2. Title is customised
describe('MenuItem', () => {
  //A function that does nothing
  const noop = () => {};

  it('triggers onClick event handler with title when clicked', () => {
    const onClick = jest.fn();

    shallow(<MenuItem onClick={onClick} title={'A title'} />).simulate('click');

    //The final check 
    expect(onClick).toBeCalledWith('A title');
  });

  it('renders with custom title', () => {
    const title = 'My custom title';
    const button = shallow(<MenuItem onClick={noop} title={title} />);
    expect(button.text()).toBe(title);
  })
});

// 1. Closed by default
// 2. Menu item created for each provided item
describe('Menu', () => {
  const noop = () => {};
  const items = ['Item 1', 'Item 2', 'Item 3'];

  it('is closed by default', () => {
    const menu = shallow(<Menu onClick={noop} items={items} />);
    //google enzyme find
    expect(menu.find(MenuButton)).toBeDefined(); //Menu button is defined
    expect(menu.find(MenuItem).length).toBe(0); //Menu item has length = 0 i.e. it is 
  });

  it('creates a MenuItem for every provided item', () => {
    const menu = shallow(<Menu onClick={noop} items={items} />);
    expect(menu.find(MenuItem).length).toBe(0);

    menu.find(MenuButton).first().simulate('click');
    expect(menu.find(MenuItem).length).toBe(3);
  });
});
