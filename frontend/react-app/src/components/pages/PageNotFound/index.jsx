import './style.css';

import { FiFrown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='page-container'>
      <FiFrown className='sad-face' />
      <span className='error-number'>404</span>
      <h1 className='error-title'>Page Not Found</h1>
      <p className='error-message'>
        The Page you are looking for doesn't exist or another error occurred.
        <br /> <Link to='/'>Go back</Link> and try again.
      </p>
    </div>
  );
};

export default PageNotFound;
