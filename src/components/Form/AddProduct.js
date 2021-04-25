import React, { Component } from "react";
import Banner from "../Layout/Banner";
import { connect } from "react-redux";
import FileBase from "react-file-base64";
import {
  createProduct,
  fetchProduct,
  updateProduct,
} from "../../redux/Product/productsActions";

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
    this.props.createProduct(this.state.product);
    this.setState({
      createProductSuccess: true,
    });
    this.props.history.push("/");
  };

  updateProduct = (e) => {
    e.preventDefault();
    this.props.updateProduct(this.state.product);
    this.props.history.push("/");
  };

  deleteImage = (image) => {
    this.setState({
      ...this.state,
      product: {
        ...this.state.product,
        images: this.state.product.images.filter((img) => img !== image),
      },
    });
  };

  handleChange = (e) => {
    if (e.target.name === "colors" || e.target.name === "availableSizes") {
      this.setState({
        ...this.state,
        product: {
          ...this.state.product,
          [e.target.name]: [e.target.value],
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

  componentDidMount = () => {
    if (this.props.match.url !== "/add-product") {
      const idProduct = this.props.match.url.slice(
        13,
        this.props.match.url.length
      );
      this.props.fetchProduct(idProduct);
    }
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const { product } = this.props;
    if (nextProps.product !== product) {
      this.setState({
        product: {
          id: nextProps.product[0].id,
          name: nextProps.product[0].name,
          price: nextProps.product[0].price,
          images: nextProps.product[0].images,
          colors: nextProps.product[0].colors,
          availableSizes: nextProps.product[0].availableSizes,
          describe: nextProps.product[0].describe,
          category: nextProps.product[0].category,
        },
      });
    }
  };

  render() {
    return (
      <section>
        <Banner
          title={
            this.props.match.url === "/add-product"
              ? ["Thêm sản phẩm"]
              : ["Cập nhật sản phẩm"]
          }
        />
        <section className="add-product">
          <form
            onSubmit={
              this.props.match.url === "/add-product"
                ? (e) => this.addProduct(e)
                : (e) => this.updateProduct(e)
            }
          >
            <label htmlFor="name">Name: </label>
            <input
              autoFocus
              type="text"
              name="name"
              id="name"
              required
              value={this.state.product.name || ""}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <label htmlFor="describe">Describe: </label>
            <textarea
              type="text"
              name="describe"
              id="describe"
              required
              value={this.state.product.describe}
              onChange={(e) => {
                this.handleChange(e);
              }}
            ></textarea>
            <label htmlFor="price">Price: </label>
            <input
              type="number"
              name="price"
              id="price"
              required
              value={this.state.product.price}
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
                      images: [...this.state.product.images, base64],
                    },
                  })
                }
              />
            </div>
            <div className="images-box">
              {this.state.product.images.map((image) => (
                <div key={image} className="image-box">
                  <img
                    src={image}
                    alt=""
                    onClick={() => this.deleteImage(image)}
                  />
                </div>
              ))}
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
            <input
              type="text"
              name="colors"
              value={this.state.product.colors}
              onChange={(e) => this.handleChange(e)}
            />
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
            <input
              type="text"
              name="availableSizes"
              value={this.state.product.availableSizes}
              onChange={(e) => this.handleChange(e)}
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
            <input
              type="submit"
              value={
                this.props.match.url === "/add-product"
                  ? "Add Product"
                  : "Update Product"
              }
            />
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

const mapStateToProps = ({ products }) => {
  return {
    product: products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (product) => {
      dispatch(createProduct(product));
    },
    fetchProduct: (id) => {
      dispatch(fetchProduct(id));
    },
    updateProduct: (product) => {
      dispatch(updateProduct(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
