/*hello.js*/

/* module.exports = function() {
    let hello = document.createElement('div');
    hello.innerHTML = "Long time no see!";
    return hello;
};
 */
import React, {
    Component
} from 'react'; // 这两个模块必须引入

let name = 'Alan';

export default class Hello extends Component {
    render() {
        return (<div> {name} </div>);
    }
}