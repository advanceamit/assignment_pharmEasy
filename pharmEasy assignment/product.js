import React, { useState } from "react";

const Product = ({ productList }) => {
    const [isHome, setIsHome] = useState(true);
    const [addedCart, setAddeCart] = useState([]);
    const [items, setItems] = useState(0);
    console.log(addedCart, "addedCart");

    const handlecartPage = () => {
        setIsHome(false);
    };
// cart Component start

    const CartPage = () => {
        return (
            <>
                <h1 style={{ textAlign: "center", color: "orange" }}>
                    This is Checkout Page{" "}
                </h1>
                {addedCart?.map((elem) => {
                    return (
                        <>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-around",
                                    background: "lightblue",
                                    height: "100px",
                                    alignItems: "center",
                                    padding: "10px",
                                    marginTop: "10px",
                                }}
                            >
                                <img
                                    src={elem.image}
                                    style={{ height: "100px", width: "100px" }}
                                ></img>
                                <p>Description:{elem.description}</p>
                                <p>Price:{elem.price}</p>
                                <p>
                                    Quantity:<button>+</button>
                                    <button>-</button>
                                </p>
                            </div>
                        </>
                    );
                })}
            </>
        );
    };

// cart Component end

    const handleAdd = (product) => {
        setItems(items + 1);
        const duplicate = addedCart.find((elem) => elem.id == product.id);

        setAddeCart([...addedCart, product]);
    };

    return (
        <>
            {isHome && (
                <div>
                    <h1 style={{ textAlign: "center", color: "green" }}>
                        Welcome to My page
                    </h1>
                    <p
                        style={{
                            textAlign: "end",
                            color: "orange",
                            cursor: "pointer",
                            marginRight: "20px",
                            fontWeight: "600",
                        }}
                        onClick={handlecartPage}
                    >
                        Cart:{items}
                    </p>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                        }}
                    >
                        {productList?.map((elem) => {
                            return (
                                <div
                                    style={{
                                        width: "280px",
                                        height: "auto",
                                        background: "skyblue",
                                        borderRadius: "12px",
                                    }}
                                >
                                    <img
                                        src={elem.image}
                                        alt="product-image"
                                        style={{
                                            width: "100%",
                                            borderRadius: "12px",
                                            height: "300px",
                                        }}
                                    ></img>
                                    <h6 className="description">
                                        Description:{elem.description}
                                    </h6>
                                    <p className="price">Price:{elem.price}</p>
                                    <p className="review">{elem.review}</p>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            padding: "10px",
                                        }}
                                    >
                                        <button
                                            style={{
                                                borderRadius: "6px",
                                                color: "green",
                                                background: "white",
                                            }}
                                            onClick={() => {
                                                handleAdd(elem);
                                            }}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
            {!isHome && <CartPage />}
        </>
    );
};

export default Product;
