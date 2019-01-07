import React from 'react';
import PropTypes from 'prop-types';

const DemoIcon = ({ width, height, color, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={ width } height={ height } viewBox="0 0 32 32" { ...props }>
        <path fill={ color } fillRule="evenodd" stroke={ color } strokeWidth=".5" d="M19.21 20.046c1.943.78 3.61 2.119 4.79 3.848h-3.19a6.044 6.044 0 0 0-9.62 0H8a10.555 10.555 0 0 1 4.79-3.848 6.415 6.415 0 0 1-3.347-5.605 6.558 6.558 0 0 1 13.114 0 6.415 6.415 0 0 1-3.347 5.605zM16 10.383a3.974 3.974 0 1 0 3.984 3.974A3.981 3.981 0 0 0 16 10.383z"/>
    </svg>

);

DemoIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  height: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
};

DemoIcon.defaultProps = {
  color: 'currentColor',
  width: 32,
  height: 32
};

export default DemoIcon;
