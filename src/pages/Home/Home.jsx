import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Intro from '../../components/Intro/Intro';
import Modalidades from '../../components/Modalidades/Modalidades';
import Infraestrutura from '../../components/Infraestrutura/Infraestrutura';
import AlgoMais from '../../components/AlgoMais/AlgoMais';
import Time from '../../components/Time/Time';
import Planos from '../../components/Planos/Planos';
import Contato from '../../components/Contato/Contato';
import Footer from '../../components/Footer/Footer';
import useObserver from '../../hooks/useObserver';

const Home = () => {
  const observe = useObserver()

  return (
    <>
      <Navbar />
      <Intro />
      <Modalidades />
      <Infraestrutura />
      <AlgoMais />
      <Time />
      <Planos />
      <Contato />
      <Footer />
    </>
  );
};

export default Home;
