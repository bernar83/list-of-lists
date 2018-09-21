import React from 'react';
import { expect } from 'chai';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import AddList from '../AddList';
import Lists from '../Lists';

configure({ adapter: new Adapter() });

describe('Test suite for App component', () => {
  it('Only one element with App class', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('.App')).length(1);
  });
  
  it('Only one <AddList/>', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(AddList)).to.have.length(1);
  });

  it('Only one <Lists/> component', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(Lists)).to.have.length(1);
  });
});
