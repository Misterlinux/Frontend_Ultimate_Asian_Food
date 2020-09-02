import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import axios from "axios";

import { Layout } from "../layout/Layout";
import Carrousel from '../components/Carrousel';
import FavoriteProducts from "../components/FavoriteProducts.js";
import Company from "../components/Company.js";


const Home = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/favorites')
    .then(function (response) {
      setFavoriteProducts (response.data)
      console.group(response.data)
    });
  }, [])

  return <Layout>
    <Container fluid >
      <Carrousel />
      <FavoriteProducts data={favoriteProducts}/>
      <Company />
    </Container>
  </Layout>;
}

export default Home;