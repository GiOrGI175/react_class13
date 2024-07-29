import React, { useState } from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';

const App = () => {
  const [totalBooks, settotalBooks] = useState(0);

  const AddBooks = (num) => {
    settotalBooks((prevBooks) => prevBooks + num);
  };

  return (
    <>
      <Header totalBooks={totalBooks} />
      <Cards AddBooks={AddBooks} />
      <Footer totalBooks={totalBooks} />
    </>
  );
};

export default App;
