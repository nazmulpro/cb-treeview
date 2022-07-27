# Coolbrains Treeview Web Component - Built With Stenciljs

This is a TreeView Web Component using Stenciljs.

- Built with Stencil
- Built with TailwindCSS v3.x

\*\*\* Special thanks to [Hasibul Haque](https://github.com/hasibul2363)

## Demo

[codesandbox](https://codesandbox.io/s/coolbrains-treeview-component-built-with-stenciljs-eixw6s?file=/index.html)

## Installation

```bash
npm install cb-treeview
```

Or use npm cdn

```js
<script type="module" src="https://cdn.jsdelivr.net/npm/cb-treeview@1.0.0/dist/cb-treeview/cb-treeview.esm.js"></script>
```

## Usage

The Coolbrains TreeView Component can be use as following:

```html
<cb-treeview></cb-treeview>
```

```js
<script>
const data = [
        {
          id: 1,
          name: 'Parent 1',
          parentId: null,
          children: [
            {
              id: 3,
              name: 'Parent 1-0',
              parentId: 1,
              children: [
                {
                  id: 2,
                  name: 'Leaf',
                  parentId: 3,
                  children: [
                    {
                      id: 8,
                      name: 'Leaf',
                      parentId: 2,
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              id: 4,
              name: 'Parent 1-1',
              parentId: 1,
              children: [],
            },
          ],
        },
        {
          id: 5,
          name: 'Parent 2',
          parentId: null,
          children: [],
        },
        {
          id: 9,
          name: 'Parent 3',
          parentId: null,
          children: [
            {
              id: 4,
              name: 'Parent 3-0',
              parentId: 9,
              children: [],
            },
            {
              id: 4,
              name: 'Parent 3-1',
              parentId: 9,
              children: [],
            },
          ],
        },
      ];
const cbTreeView = document.querySelector('cb-treeview');
cbTreeView.dataSource = data;
</script>
```

hide checkbox:

```html
<cb-treeview check-box="false"></cb-treeview>
```




