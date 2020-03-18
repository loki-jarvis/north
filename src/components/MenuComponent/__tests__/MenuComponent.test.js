import * as React from 'react';
import { MenuComponent } from '../MenuComponent';
import { mount } from 'enzyme';

describe('MenuComponent', () => {
  it('should render component', () => {
    const MountedMenuComponent = mount(
      <MenuComponent />,
    );
    const expected = MountedMenuComponent.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
