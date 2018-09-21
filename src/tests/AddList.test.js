import React from 'react';
import { expect } from 'chai';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import AddList from '../AddList';

configure({ adapter: new Adapter() });

describe('Test suite for AddList component', () => {
    it('Only has one input for creating new list', () => {
        const wrapper = shallow(<AddList/>);
        expect(wrapper.find('input[type="text"]')).to.have.length(1);
    });

    it('Only has one button for submit', () => {
        const wrapper = shallow(<AddList/>);
        expect(wrapper.find('button[id="submitList"]')).to.have.length(1);
    });

    it('Should update app state adding list', () => {
        const wrapper = mount(<App/>);
        wrapper.find(AddList).find('input').instance().value = 'Dogs';
        wrapper.find('button[id="submitList"]').simulate('click');
        expect(wrapper.state('lists')).to.equal(['Dogs']);
        expect(wrapper.state('items')).to.equal({Dogs: []});
    });
});
