import React, { Component } from "react";
import Banner from "../Layout/Banner";
import { connect } from "react-redux";
import FileBase from "react-file-base64";
import { createProduct } from "../../redux/Product/productsActions";
export class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        id: Math.floor(Math.random() * 1000000000000000000).toString(),
        name: "",
        price: "",
        images: [],
        colors: [],
        availableSizes: [],
        describe: "",
        category: "shirt",
      },
      availableColors: [
        "black",
        "blue",
        "green",
        "yellow",
        "orange",
        "pink",
        "red",
        "gray",
        "brown",
        "purple",
      ],
      createProductSuccess: false,
    };
  }

  addProduct = (e) => {
    e.preventDefault();
    console.log(this.state.product);
    this.props.createProduct(this.state.product);
    this.clear();
    this.setState({
      createProductSuccess: true,
    });
    this.props.history.push("/");
  };

  clear = () => {
    this.setState({
      id: Math.random(),
      name: "",
      price: "",
      images: [],
      colors: [],
      availableSizes: [],
      describe: "",
      category: "shirt",
    });
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      product: {
        ...this.state.product,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <section>
        <Banner title={["Thêm sản phẩm"]} />
        <section className="add-product">
          <form onSubmit={(e) => this.addProduct(e)}>
            <label htmlFor="name">Name: </label>
            <input
              autoFocus
              type="text"
              name="name"
              id="name"
              required
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <label htmlFor="describe">Describe: </label>
            <input
              type="text"
              name="describe"
              id="describe"
              required
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <label htmlFor="price">Price: </label>
            <input
              type="number"
              name="price"
              id="price"
              required
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <div>
              <FileBase
                type="file"
                required
                multiple={false}
                onDone={({ base64 }) =>
                  this.setState({
                    product: {
                      ...this.state.product,
                      images: [base64],
                    },
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="colors">Colors: </label>
              <select
                style={{
                  background: this.state.product.colors[
                    this.state.product.colors.length - 1
                  ],
                }}
                id="colors"
                name="colors"
                required
                value={
                  this.state.product.colors[
                    this.state.product.colors.length - 1
                  ]
                }
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    product: {
                      ...this.state.product,
                      [e.target.name]: [
                        ...this.state.product.colors,
                        e.target.value,
                      ],
                    },
                  });
                }}
              >
                {this.state.availableColors.map((color) => (
                  <option
                    key={color}
                    style={{ background: color }}
                    value={color}
                  >
                    {color}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="availableSizes">Available Sizes: </label>
              <select
                required
                id="availableSizes"
                name="availableSizes"
                value={
                  this.state.product.availableSizes[
                    this.state.product.availableSizes.length - 1
                  ]
                }
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    product: {
                      ...this.state.product,
                      [e.target.name]: [
                        ...this.state.product.availableSizes,
                        e.target.value,
                      ],
                    },
                  });
                }}
              >
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>

            <div>
              <label htmlFor="category">Category: </label>
              <select
                id="category"
                name="category"
                value={this.state.product.category}
                onChange={(e) => {
                  this.handleChange(e);
                }}
              >
                <option value="shirt">shirt</option>
                <option value="trousers">trousers</option>
                <option value="dress">dress</option>
                <option value="shoes">shoes</option>
              </select>
            </div>

            <input type="submit" value="Add Product" />
          </form>
          {this.state.createProductSuccess && (
            <div className="create-product-success">
              <p>Create New Product Success</p>
            </div>
          )}
        </section>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (product) => {
      dispatch(createProduct(product));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddProduct);
