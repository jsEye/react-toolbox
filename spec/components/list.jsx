import React from 'react';
import List from '../../components/list';

export default React.createClass({
  displayName: 'ListTest',

  getInitialState () {
    return {
      countries: [
        { value: 'ES-es', label: 'Spain', img: 'http://' },
        { value: 'TH-th', label: 'Thailand', img: 'http://' },
        { value: 'EN-gb', label: 'England', img: 'http://' },
        { value: 'EN-en', label: 'USA', img: 'http://' },
        { value: 'FR-fr', label: 'France', img: 'http://' }
      ],
      selected: 'TH-th'
    };
  },

  onChange (dropdown) {
    console.log('[DROPDOWN]', dropdown.getValue());
  },

  customDropdownItem (data) {
    const style = {
      width: 32,
      height: 32,
      backgroundColor: '#ccc',
      marginRight: 8
    };

    return (
      <div data-flex="horizontal grow" data-flex-content="center">
        <img src={data.img} data-flex-grow="min" style={style} />
        <div data-flex-grow="max" data-flex="vertical" >
          <strong>{data.label}</strong>
          <small>{data.value}</small>
        </div>
      </div>
    );
  },

  render () {
    return (
      <section>
        <h5>List</h5>
        <p>lorem ipsum...</p>
        <List dataSource={this.state.countries} value={this.state.selected} template={this.customDropdownItem} onChange={this.onChange}/>
      </section>
    );
  }
});