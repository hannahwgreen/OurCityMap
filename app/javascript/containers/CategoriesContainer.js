import React, { Component } from 'react'
import CategoryTile from '../components/CategoryTile';

class CategoriesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
    }

  }

  componentDidMount() {
    fetch('/api/v1/categories')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ categories: body });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let className;
    let categories = this.state.categories.map(category => {
      let handleClick = () => {
        this.props.onCategoryChange(category.id)
      }
      return(
        <CategoryTile
          key={category.id}
          id={category.id}
          name={category.name}
          handleClick={handleClick}
          className={className}
        />
      )
    })

    return(
      <div className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
        <h5 className="text-center">View by category</h5>
        <ul className="nav nav-pills flex-column">
          {categories}
        </ul>
      </div>
    )
  }
}

export default CategoriesContainer;
