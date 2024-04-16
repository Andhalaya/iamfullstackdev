import {Link} from 'react-router-dom'
import InputCreate from '../components/InputCreate';
const Home = ({data}) => {
  return (
    <>
    <h2>Lista de datos</h2>
    <ul>
      {data.map(item => (
        <li key={item._id}>
          <Link to={`/${item._id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
    <InputCreate />
    </>
  )
};

export default Home;
