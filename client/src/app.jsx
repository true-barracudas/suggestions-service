import React from 'react';
import axios from 'axios';
import Slider from './components/slider.jsx';
import Heading from './components/heading.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
    };
  }

  componentDidMount() {
    axios.get('/api/suggestions/1')
      .then((res) => {
        console.log(res.data[0].list);
        this.setState({ suggestions: res.data[0].list });
      })
      .catch((err) => {
        console.log('Unable to fetch data from db: ', err);
      });
  }

  render() {
    return (
      <div className="suggestions-service">
        <Heading />
        <Slider list={this.state.suggestions}/>
      </div>
    );
  }
}

export default App;