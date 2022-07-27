import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'cb-treeview',
  styleUrl: 'cb-treeview.css',
  shadow: true,
})
export class CbTreeview {
  rootElement: HTMLElement;

  @Prop({ mutable: true, reflect: true }) dataSource: Array<object> = [];
  @Prop() checkBox: boolean = true;

  @Watch('dataSource')
  dataSourceChanged(newValue: [], oldValue: []) {
    if (newValue !== oldValue) {
      this.dataSource = newValue;
    }
  }

  showChildrenChecks = childCheks => {
    for (var i = 0; i < childCheks.length; i++) {
      childCheks[i]['checked'] = true;
    }
  };

  hideChildrenChecks = childCheks => {
    for (var i = 0; i < childCheks.length; i++) {
      childCheks[i]['checked'] = false;
    }
  };

  clickCheckBox = id => {
    let listElement = this.rootElement.querySelector('.checkbox-' + id).closest('li');
    let checkboxes = listElement.getElementsByTagName('input');
    let currentCheckBox = this.rootElement.querySelector('.checkbox-' + id);
    if (currentCheckBox['checked']) {
      this.showChildrenChecks(checkboxes);
    } else {
      this.hideChildrenChecks(checkboxes);
    }
  };

  toggleClass(id) {
    let listElement = this.rootElement.querySelector('.li-' + id).children[1];
    let buttonElement = this.rootElement.querySelector('.btn-' + id);
    if (listElement.classList.contains('hidden')) {
      buttonElement.classList.add('rotate-90', 'transition', 'duration-300');
    } else {
      buttonElement.classList.remove('rotate-90');
    }
    listElement.classList.toggle('hidden');
  }

  TreeView(items: any, isParent = true) {
    return (
      <ul class={'list-none flex flex-col pl-0 transition-all ' + (isParent ? '' : ' hidden ml-4 mt-1 mb-1')}>
        {items.map(item => (
          <li id={'li-id-' + item.id} class={'mt-1 mb-1 li-' + item.id}>
            <div class="flex ml-2">
              <div
                class={(item.children && item.children.length > 0 ? '' : 'invisible') + ' active:bg-gray-300  rounded-full btn-' + item.id}
                id={'btn-' + item.id}
                onClick={() => this.toggleClass(item.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="checkbox"
                name={item.name}
                id={item.id}
                value={item.id}
                class={(this.checkBox ? 'h-4 w-4 ml-2' : 'hidden') + ' checkbox-' + item.id}
                onClick={() => this.clickCheckBox(item.id)}
              ></input>
              <label class="leading-none text-gray-700 ml-2 font-medium" htmlFor={item.id}>
                {item.name}
              </label>
            </div>
            {item.children && item.children.length > 0 ? this.TreeView(item.children, false) : ''}
          </li>
        ))}
      </ul>
    );
  }

  componentWillLoad() {}

  componentDidLoad() {}

  componentWillUpdate() {}

  componentDidUpdate() {}

  render() {
    let content = '';
    if (this.dataSource.length > 0) {
      content = this.TreeView(this.dataSource);
    } else {
      content = <p>No Data available</p>;
    }
    return <div ref={el => (this.rootElement = el)}>{content}</div>;
  }
}
