import React from 'react';

import styles from './Search.module.scss';

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 32 32"
        id="Glyph"
        version="1.1"
        viewBox="0 0 32 32"
      >
        <path
          d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
          id="XMLID_223_"
        />
      </svg>
      <input
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы"
        value={searchValue}
      />
      {searchValue && (
        <svg
          className={styles.clear}
          onClick={() => {
            setSearchValue('');
          }}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            d="M2.76142 14.001C2.54146 14.001 2.35815 13.9412 2.21151 13.8215C2.0705 13.6964 2 13.5414 2 13.3565C2 13.2477 2.03102 13.1118 2.09306 12.9486L6.01861 2.7107C6.1991 2.23755 6.53187 2.00098 7.01692 2.00098C7.47377 2.00098 7.79244 2.23483 7.97293 2.70254L11.9069 12.9486C11.969 13.1118 12 13.2477 12 13.3565C12 13.5414 11.9267 13.6964 11.78 13.8215C11.639 13.9412 11.4585 14.001 11.2386 14.001C10.8776 14.001 10.6294 13.8133 10.4941 13.4381L9.41117 10.5176H4.58037L3.50592 13.4381C3.37056 13.8133 3.12239 14.001 2.76142 14.001ZM5.0203 9.2695H8.9797L7.02538 3.90172H6.97462L5.0203 9.2695ZM12.7906 14.7299L18.2717 20.2109L22.4283 16.0543C23.1906 15.292 23.1913 14.0568 22.43 13.2955L19.706 10.5715C19.5655 10.431 19.4088 10.3164 19.2419 10.2278C18.5048 9.83644 17.5688 9.95168 16.9473 10.5732L12.7906 14.7299ZM14.7485 11.3578L13 13.1063V2.75554C13 2.53377 13.0649 2.35257 13.1947 2.21193C13.33 2.07129 13.5003 2.00098 13.7059 2.00098C13.9114 2.00098 14.0791 2.07129 14.2089 2.21193C14.3442 2.35257 14.4118 2.53377 14.4118 2.75554V6.82856H14.4442C14.7147 6.34175 15.0852 5.96041 15.5558 5.68455C16.0318 5.40868 16.5646 5.27075 17.1542 5.27075C18.2197 5.27075 19.0798 5.66832 19.7343 6.46345C20.3888 7.25858 20.716 8.31605 20.716 9.63586C20.716 9.81192 20.7102 9.9833 20.6987 10.15L20.4131 9.86444C20.0754 9.52672 19.6763 9.28815 19.2517 9.1486C19.1889 8.41701 18.9793 7.81946 18.6227 7.35595C18.19 6.7934 17.6004 6.51213 16.854 6.51213C16.1346 6.51213 15.545 6.80152 15.0852 7.38029C14.6308 7.95365 14.4037 8.70551 14.4037 9.63586C14.4037 10.3015 14.5186 10.8755 14.7485 11.3578ZM17.211 21.2715L11.73 15.7905L10.5727 16.9478C9.81042 17.7101 9.80965 18.9452 10.571 19.7066L13.2949 22.4305C13.6321 22.7677 14.0622 22.9554 14.5029 22.9937L14.5005 23.001H20.0019C20.4161 23.001 20.7519 22.6653 20.7519 22.251C20.7519 21.8368 20.4161 21.501 20.0019 21.501H16.9815L17.211 21.2715Z"
            fill="#212121"
          />
        </svg>
      )}
    </div>
  );
};

export default Search;
