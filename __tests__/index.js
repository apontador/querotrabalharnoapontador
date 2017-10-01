import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Header from 'components/Header';

configure({ adapter: new Adapter() });

describe('Header', () => {
    it('should be defined', () => {
        expect(Header).toBeDefined();
    });

    it('should render correctly', () => {
        const tree = shallow(
            <Header />
        );
        expect(tree).toMatchSnapshot();
    });

});