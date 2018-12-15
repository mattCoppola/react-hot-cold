import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should fire onMakeGuess callback when form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback} />);
        const value = '50';
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    });

    it('Should reset input when form is submitted', () => {
        const wrapper = mount(<GuessForm />);
        const input = wrapper.find('input[type="number"]');
        input.instance().value = 25;
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('');
    });
});
