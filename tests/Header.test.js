import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy } from 'sinon'

import AppHeader from 'src/Header'

configure({ adapter: new Adapter() });

describe('AppHeader', () => {
  it('renders header with class="app-header"', () => {
    expect(render(<AppHeader fixed />))
    .toContain('<header class="app-header navbar"></header>')
  });
  it('calls componentDidMount', () => {
    spy(AppHeader.prototype, 'componentDidMount');

    const wrapper = mount(<AppHeader fixed/>);
    expect(AppHeader.prototype.componentDidMount.calledOnce).toEqual(true);
  });
})