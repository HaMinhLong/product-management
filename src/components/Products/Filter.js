import React, { Component } from "react";

export class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: "latest",
      size: "",
    };
  }

  sortProducts = (e) => {
    this.props.sortProductsByPrice(this.props.products, e.target.value);
    this.setState({
      sort: e.target.value,
    });
  };

  filterProducts = (e) => {
    this.props.filterProductsBySizes(this.props.products, e.target.value);
    this.setState({
      size: e.target.value,
    });
  };
  render() {
    const { productsLength } = this.props;
    return (
      <div className="filter">
        <div className="filter-result">
          <p>
            Hiển thị: <span>{productsLength}</span> sản phẩm
          </p>
        </div>
        <div className="filter-products">
          <div className="filter-price">
            Price:
            <select
              value={this.state.sort}
              onChange={(e) => {
                this.sortProducts(e);
              }}
            >
              <option value="latest">Latest</option>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
            </select>
          </div>
          <div className="filter-size">
            Size:
            <select
              value={this.state.size}
              onChange={(e) => {
                this.filterProducts(e);
              }}
            >
              <option value="">ALL</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
