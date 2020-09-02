import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import axios from "axios";
import { Layout } from "../layout/Layout";
import FavoriteProducts from "../components/FavoriteProducts.js";
import Company from "../components/Company.js";


const ProductDetailed = () => {
    const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/favorites')
    .then(function (response) {
      setFavoriteProducts (response.data)
      console.group(response.data)
    });
  }, [])


    return <Layout >
        <Container >
        <h1>Product Detailed Component</h1>
        <FavoriteProducts data={favoriteProducts}/>
        <Company />
        </Container>
    </Layout>
}

export default ProductDetailed;