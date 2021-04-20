import React from 'react';

import {render, cleanup} from '@testing-library/react';

//render: this will render the component
//cleanup: remove components from the DOM to prevent memory leaking

import '@testing-library/jest-dom/extend-expect';

import About from '..';

afterEach(cleanup); //afterEach is a global function from Jest
//this ensures that after each test, we will not have any leftover memory data that could give us false results

describe('About component', () => { //describe is used to declare the compoenent we are testing 
    //First Test
    it('renders', () => {
        render(<About />);
    });
    //Second Test
    it('matches snapshot DOM node structure', () => {
        //render About
        const {asFragment}= render(<About/>);
        expect(asFragment()).toMatchSnapshot();
    })
})