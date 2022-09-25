import BaseApiService from "../services/baseApi.service";
class ProductService extends BaseApiService {
  getActualProducts(sort) {
    const url = `${process.env.REACT_APP_BASE_URL}/api/products${sort}`;
    return this.sendGetRequest(url);
  }

  getAllFilterProducts(sort) {
    const url = `${process.env.REACT_APP_BASE_URL}/api/products/${sort}`;
    return this.sendGetRequest(url);
  }

  getProducts() {
    const url = `${process.env.REACT_APP_BASE_URL}/api/products/`;
    return this.sendGetRequest(url);
  }

  getPopular() {
    const url = `${process.env.REACT_APP_BASE_URL}/api/popular/`;
    return this.sendGetRequest(url);
  }

  getId(id) {
    const url = `${process.env.REACT_APP_BASE_URL}/api/products/${id}/`;
    return this.sendGetRequest(url);
  }

  addCartId(data) {
    const url = `${process.env.REACT_APP_BASE_URL}/api/cart-item/`;
    return this.sendPostRequest(url, data);
  }

  addWishList(data) {
    const url = `${process.env.REACT_APP_BASE_URL}/api/wishlist/`;
    return this.sendPostRequest(url, data);
  }

  deleteWishList(data) {
    const url = `${process.env.REACT_APP_BASE_URL}/api/destroy-wishlist/`;
    return this.sendPostRequest(url, data);
  }

  sendRating(data) {
    const url = `${process.env.REACT_APP_BASE_URL}/api/product-reviews/`;
    return this.sendPostRequest(url, data);
  }

  productOrder(data) {
    const url = `${process.env.REACT_APP_BASE_URL}/api/order/`;
    return this.sendPostRequest(url, data);
  }

  getNovelty() {
    const url = `${process.env.REACT_APP_BASE_URL}/api/novelty`;
    return this.sendGetRequest(url);
  }

  getDiscount() {
    const url = `${process.env.REACT_APP_BASE_URL}/api/discount`;
    return this.sendGetRequest(url);
  }
}

export const productService = new ProductService();
