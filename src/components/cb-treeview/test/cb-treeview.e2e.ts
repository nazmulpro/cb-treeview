import { newE2EPage } from '@stencil/core/testing';

describe('cb-treeview', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cb-treeview></cb-treeview>');

    const element = await page.find('cb-treeview');
    expect(element).toHaveClass('hydrated');
  });
});
