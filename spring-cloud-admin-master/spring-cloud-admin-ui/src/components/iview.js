import { Button, Icon, Dropdown, DropdownMenu, DropdownItem, Tooltip } from 'iview';

export default { install: (vue) => {
  vue.component('Button', Button);
  vue.component('Icon', Icon);
  vue.component('Dropdown', Dropdown);
  vue.component('DropdownMenu', DropdownMenu);
  vue.component('DropdownItem', DropdownItem);
  vue.component('Tooltip', Tooltip);
} };
