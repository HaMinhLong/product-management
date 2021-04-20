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
        id: Math.random(),
        name: "",
        price: "",
        images: [],
        colors: [],
        availableSizes: [],
        describe: "",
        category: "shirt",
      },
      createProductSuccess: false,
    };
  }

  addProduct = (e) => {
    e.preventDefault();
    this.props.createProduct(this.state.product);
    this.clear();
    this.setState({
      createProductSuccess: true,
    });
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
    if (e.target.name === "colors" || e.target.name === "availableSizes") {
      this.setState({
        ...this.state,
        product: {
          ...this.state.product,
          [e.target.name]: e.target.value.split(","),
        },
      });
    } else {
      this.setState({
        ...this.state,
        product: {
          ...this.state.product,
          [e.target.name]: e.target.value,
        },
      });
    }
  };

  render() {
    return (
      <section>
        <Banner title={["Thêm sản phẩm"]} />
        <section className="add-product">
          <form onSubmit={(e) => this.addProduct(e)}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <label htmlFor="price">Price: </label>
            <input
              type="text"
              name="price"
              id="price"
              required
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            {/* <div>
              <label htmlFor="images">Images: </label>
              <input
                type="file"
                multiple={false}
                name="images"
                id="images"
                required
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />
            </div> */}
            <div>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  this.setState({
                    ...this.state,
                    product: {
                      ...this.state.product,
                      images: base64,
                    },
                  })
                }
              />
            </div>
            <label htmlFor="colors">Colors: </label>
            <input
              type="text"
              name="colors"
              id="colors"
              required
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <label htmlFor="availableSizes">Available Sizes: </label>
            <input
              type="text"
              name="availableSizes"
              id="sizes"
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
