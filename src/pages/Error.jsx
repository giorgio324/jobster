import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';
const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found image' />
        <h3>Page Not Found</h3>
        <p>We Can't find the page you are looking for</p>
        <Link to='/'>Back to Home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
