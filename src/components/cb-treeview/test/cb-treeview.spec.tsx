import { newSpecPage } from '@stencil/core/testing';
import { CbTreeview } from '../cb-treeview';

describe('cb-treeview', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CbTreeview],
      html: `<cb-treeview></cb-treeview>`,
    });
    expect(page.root).toEqualHtml(`
      <cb-treeview>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cb-treeview>
    `);
  });
});
