import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
document.body.innerHTML = '<div id="root"></div>';

// window.location = {
//   ...window.location,
//   href: 'https://codingforllamas.com/daycare',
//   reload: jest.fn(),
//   assign: jest.fn(),
// };
