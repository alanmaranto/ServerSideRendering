import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { searchVideoSource } from '../actions';
import Categories from './Categories';
import Carousel from './Carousel';
import CarouseItem from './CarouselItem';
import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const { isHome, search, isSearch } = props;
  const hasSearch = Object.keys(search).length > 0;

  const handleInput = (e) => {
    props.searchVideoSource(e.target.value);
  };

  const inputStyle = classNames('inputSearch', {
    isHome,
  });

  const searchStyle = classNames('categories', {
    isSearch,
  });

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        type='text'
        name='search'
        className={inputStyle}
        placeholder='Buscar...'
        onChange={handleInput}
      />
      {hasSearch ? (
        <Categories title='Resultados' className={searchStyle}>
          <Carousel>
            {search.map((item, index) => (
              <CarouseItem
                key={index}
                {...item}
              />
            ))}
          </Carousel>
        </Categories>
      ) :
        null}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

const mapDispatchToProps = {
  searchVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
