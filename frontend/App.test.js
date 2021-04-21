import React from 'react'
import ReactDOM from 'react-dom'
import { mount, configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './src/App'
import {Marketplace} from './src/pages/Marketplace'
import {About} from './src/pages/About'
import {Profile} from './src/pages/Profile'
import {Items} from './src/pages/Items'
import { MemoryRouter } from 'react-router'
import NotFoundPage from './src/pages/NotFoundPage';

configure({adapter: new Adapter()});

describe('routes using memory router', () => {

  test('should show About component for /about router (using memory router)', () => {
    const component = mount(<MemoryRouter initialentries={['/about']}>
        <App/>
     </MemoryRouter>
    );
    expect(component.length).toEqual(1);
  })

  
  test('/about router (using memory router)', () => {
    const component = mount(<MemoryRouter initialentries={['/about']}>
        <App/>
     </MemoryRouter>
    );
    expect(component.length).toEqual(1);
  })

  test('should show  Profile component for /profile router (using memory router)', () => {
    const component = mount(<MemoryRouter initialentries={['/profile']}>
        <App/>
     </MemoryRouter>
    );
    expect(component.length).toEqual(1);
  })

  test('should show Items component for /items router (using memory router)', () => {
    const component = mount(<MemoryRouter initialentries={['/items']}>
        <App/>
     </MemoryRouter>
    );
    expect(component.length).toEqual(1);
  })

  test('should show No match component for route not defined', () => {
    const component = mount(<MemoryRouter initialEntries={['/unknown']}>
        <App/>
    </MemoryRouter>
    );
    expect(component.length).toEqual(1);
  })

})