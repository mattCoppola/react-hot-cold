import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
      shallow(<TopNav />);
    });

    it('Renders the New Game anchor', () => {
        const wrapper = shallow(<TopNav />);
        expect(wrapper.find('.new').hasClass('new')).toEqual(true);
    });

    it('Renders the How to Play anchor', () => {
        const wrapper = shallow(<TopNav />);
        expect(wrapper.find('.what').hasClass('what')).toEqual(true);
    });

    it('Resets game when New anchor is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onRestartGame={callback} />);
        wrapper.find('.new').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
});
