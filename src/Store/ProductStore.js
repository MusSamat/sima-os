import { makeAutoObservable } from "mobx";
import axios from "axios";
import { productService } from "../services/product";

export default class ProductStore {
  constructor() {
    this.products = [];
    this.pagination = null;
    this.blog = [];
    this.product = { images: [], size: [] };
    this.blogItem = { images: [] };
    this.imagesUser = [];
    this.size = [];
    this.count = 0;
    this.category = [];
    this.subcategory = [];
    this.prodcategory = [];
    this.allProducts = [];
    this.searchProducts = [];
    this.discount = [];
    this.obj = null;
    this.carts = [];
    this.productsCategory = [];
    this.reviews = [];
    this.productSorted = [];
    this.allProductSorted = [];
    this.productTitle = [];
    this.productTitleCount = [];
    this.token = null;
    this.favorite = [];
    this.newProduct = [];
    this.newProductSeason = [];
    this.gallery = [];
    this.sertificate = [];
    this.productsSesonCategory = [];
    this.popular = [];
    this.productOrder = [];
    this.productOrderFilter = [];
    this.novelty = [];
    this.loader = false;
    this.productWishlist = [];
    this.advantage = [];

    makeAutoObservable(this);
  }

  setLoader(bool) {
    this.loader = bool;
  }

  get isLoader() {
    return this.loader;
  }

  async fetchTodo() {
    return await axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/productcategorysorted`)
      .then((res) => {
        this.productSorted = res.data;
        this.allProductSorted = this.productSorted;
      })
      .catch((e) => {
        console.error(e);
      });
  }

  changeProductQuantity(id, val) {
    this.products = this.products.map((i, index) =>
      i.id === id ? { ...i, quantity: val } : i
    );
  }

  async getActual(prod) {
    this.setLoader(true);
    const wish = JSON.parse(localStorage.getItem("wishlist"));
    console.log(prod);
    productService
      .getActualProducts(prod)
      .then((res) => {
        console.log(res);
        this.products = res.results.map((i) => {
          const d = wish?.find((j) => j.id === i.id);
          if (d) {
            i.is_favorite = d?.is_favorite;
          }
          return i;
        });
        this.pagination = res.count;
        this.setLoader(false);
      })
      .catch((e) => {
        console.error(e);
        this.setLoader(false);
      });
  }

  async getActualProducts(e) {
    localStorage.setItem("category", JSON.stringify("Актуальные"));
    localStorage.removeItem("viewProduct");
    const wish = JSON.parse(localStorage.getItem("wishlist"));
    this.setLoader(true);
    this.token = JSON.parse(localStorage.getItem("value"));
    await productService
      .getProducts()
      .then((res) => {
        this.products = res.results.map((i) => {
          const d = wish.find((j) => j.id === i.id);
          if (d) {
            i.is_favorite = d.is_favorite;
          }
          return i;
        });
        this.pagination = res.count;
        this.setLoader(false);
      })
      .catch((e) => {
        console.error(e);
        this.setLoader(false);
      });
  }

  getPagination(e, number, des) {
    localStorage.setItem("category", JSON.stringify("Актуальные"));
    localStorage.removeItem("viewProduct");
    const wish = JSON.parse(localStorage.getItem("wishlist"));
    this.setLoader(true);
    this.token = JSON.parse(localStorage.getItem("value"));
    axios
      .get(
        des
          ? `${process.env.REACT_APP_BASE_URL}/api/products/?page=${number}&sort=${des}`
          : `${process.env.REACT_APP_BASE_URL}/api/products/?page=${number}`,
        this.token?.token
          ? {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Token " + this.token?.token,
              },
            }
          : {
              headers: {
                "Content-Type": "application/json",
              },
            }
      )
      .then((res) => {
        this.products = res.data.results.map((i) => {
          const d = wish?.find((j) => j.id === i.id);
          if (d) {
            i.is_favorite = d.is_favorite;
          }
          return i;
        });
        this.setLoader(false);
      })
      .catch((e) => {
        console.error(e);
        this.setLoader(false);
      });
    e.preventDefault();
  }

  async getPopularProducts() {
    this.setLoader(true);
    await productService
      .getPopular()
      .then((res) => {
        this.products = res;
        this.allProducts = this.products;
        this.setLoader(false);
      })
      .catch((e) => {
        console.error(e);
        this.setLoader(false);
      });
  }

  async getPopularProduct() {
    await productService
      .getPopular()
      .then((res) => {
        this.popular = res;
      })
      .catch((e) => {
        console.error(e);
      });
  }

  async getAllProductsSort(prod, des) {
    this.setLoader(true);
    const wish = JSON.parse(localStorage.getItem("wishlist"));
    this.token = JSON.parse(localStorage.getItem("value"));
    await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/api/${prod}/?sort=${des}`,
        this.token?.token
          ? {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Token " + this.token?.token,
              },
            }
          : {
              headers: {
                "Content-Type": "application/json",
              },
            }
      )
      .then((res) => {
        this.products = res.data.results.map((i) => {
          const d = wish?.find((j) => j.id === i.id);
          if (d) {
            i.is_favorite = d?.is_favorite;
          }
          return i;
        });
        this.setLoader(false);
      })
      .catch((e) => {
        console.error(e);
        this.setLoader(false);
      });
  }

  async getNoveltyProducts1() {
    const wish = JSON.parse(localStorage.getItem("wishlist"));
    this.token = JSON.parse(localStorage.getItem("value"));
    await productService
      .getNovelty()
      .then((res) => {
        console.log(res);
        this.novelty = res.map((i) => {
          const d = wish?.find((j) => j.id === i.id);
          if (d) {
            i.is_favorite = d?.is_favorite;
          }
          return i;
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  async getProductsSesonCategory(id) {
    return await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/api/productcategory/?seasoncategory_id=${id}`
      )
      .then((res) => {
        this.productsSesonCategory = res.data;
      })
      .catch((e) => {
        console.error(e);
      });
  }

  getSubcategory() {
    return axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/seasoncategory/`)
      .then((res) => {
        this.subcategory = res.data;
      })
      .catch((e) => {
        console.error(e);
      });
  }

  getSubcategoryId(id) {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/api/productcategory/?seasoncategory_id=` +
          id
      )
      .then((res) => {
        this.productSorted = res.data;
      })
      .catch((e) => {
        console.error(e);
      });
  }

  getSortedData() {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/productcategory`)
      .then((res) => {
        this.prodcategory = res.data;
      })
      .catch((e) => {
        console.error(e);
      });
  }

  async changeFilter(input) {
    const wish = JSON.parse(localStorage.getItem("wishlist"));
    this.setLoader(true);
    await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/api/products/?title__icontains=` +
          input
      )
      .then((res) => {
        this.products = res.data.results.map((i) => {
          const d = wish?.find((j) => j.id === i.id);
          if (d) {
            i.is_favorite = d?.is_favorite;
          }
          return i;
        });
        this.setLoader(false);
      })
      .catch((e) => {
        console.error(e);
        this.setLoader(false);
      });
  }

  searchFilterArticul(input) {
    const wish = JSON.parse(localStorage.getItem("wishlist"));
    this.setLoader(true);
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/api/products/?articul__iexact=` +
          input
      )
      .then((res) => {
        this.products = res.data.results.map((i) => {
          const d = wish?.find((j) => j.id === i.id);
          if (d) {
            i.is_favorite = d?.is_favorite;
          }
          return i;
        });
        this.setLoader(false);
      })
      .catch((e) => {
        console.error(e);
        this.setLoader(false);
      });
  }

  async getData(id) {
    this.token = JSON.parse(localStorage.getItem("value"));
    return await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/api/products/` + id,
        this.token?.token
          ? {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Token " + this.token?.token,
              },
            }
          : {
              headers: {
                "Content-Type": "application/json",
              },
            }
      )
      .then((response) => {
        this.product = response.data;
        this.imagesUser = this.product.images;
        this.size = this.product.size;
        this.reviews = this.product.reviews;
      })
      .catch((e) => {
        console.error(e);
      });
  }

  priceFilter(newValue) {
    if (!newValue) {
      return [];
    } else {
      let arr = this.allProducts?.filter(
        (a) =>
          parseInt(a?.price) >= newValue[0] && parseInt(a?.price) <= newValue[1]
      );
      this.products = arr;
    }
  }

  async fetchTodoCatalog(prodId, id, des) {
    const wish = JSON.parse(localStorage.getItem("wishlist"));
    this.token = JSON.parse(localStorage.getItem("value"));
    await axios
      .get(
        des
          ? `${process.env.REACT_APP_BASE_URL}/api/products/?seasoncategory=${prodId}&productcategory=${id}&${des}`
          : `${process.env.REACT_APP_BASE_URL}/api/products/?seasoncategory=${prodId}&productcategory=${id}`,
        this.token?.token
          ? {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Token " + this.token?.token,
              },
            }
          : {
              headers: {
                "Content-Type": "application/json",
              },
            }
      )
      .then((res) => {
        this.products = res.data.results.map((i) => {
          const d = wish?.find((j) => j.id === i.id);
          if (d) {
            i.is_favorite = d?.is_favorite;
          }
          return i;
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  getBlogData(id) {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/blogs/` + id)
      .then((response) => {
        this.blogItem = response.data;
      })
      .catch((e) => {
        console.error(e);
      });
  }

  async blogFetchTodo() {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/blogs`)
      .then((res) => {
        this.blog = res.data;
      })
      .catch((e) => {
        console.error(e);
      });
  }

  async discountTodo1() {
    const wish = JSON.parse(localStorage.getItem("wishlist"));
    await productService
      .getDiscount()
      .then((res) => {
        this.discount = res.map((i) => {
          const d = wish?.find((j) => j.id === i.id);
          if (d) {
            i.is_favorite = d?.is_favorite;
          }
          return i;
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  async getGallery() {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/gallery`)
      .then((res) => {
        this.gallery = res.data;
      })
      .catch((e) => {
        console.error(e);
      });
  }

  async getSertivicat() {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/sertificate`)
      .then((res) => {
        this.sertificate = res.data;
      })
      .catch((e) => {
        console.error(e);
      });
  }

  async getAdvantage() {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/background-advantage`)
      .then((res) => {
        this.advantage = res.data;
      })
      .catch((e) => {
        console.error(e);
      });
  }
}
