import React from 'react'
import { shallow, mount } from 'enzyme'
import Routes, { Marketplace, About, Profile, Items, NoMatch } from './App'
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'

describe('routes using memory router', () => {

  it('should show Home component for / router (using memory router)', () => {
    const component = mount(<MemoryRouter initialentries="{['/']}">
        <Routes/>
     </MemoryRouter>
    );
    expect(component.find(Marketplace)).toHaveLength(1);
  })

  
  it('should show About component for / router (using memory router)', () => {
    const component = mount(<MemoryRouter initialentries="{['/about']}">
        <Routes/>
     </MemoryRouter>
    );
    expect(component.find(About)).toHaveLength(1);
  })

  it('should show  Profile component for / router (using memory router)', () => {
    const component = mount(<MemoryRouter initialentries="{['/profile']}">
        <Routes/>
     </MemoryRouter>
    );
    expect(component.find(Profile)).toHaveLength(1);
  })

  it('should show Items component for / router (using memory router)', () => {
    const component = mount(<MemoryRouter initialentries="{['/items']}">
        <Routes/>
     </MemoryRouter>
    );
    expect(component.find(Items)).toHaveLength(1);
  })

  it('should show No match component for route not defined', () => {
    const component = mount(<MemoryRouter initialEntries="{['/unknown']}">
        <Routes/>
    </MemoryRouter>
    );
    expect(component.find(NoMatch)).toHaveLength(1);
  })

})