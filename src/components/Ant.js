import { Input } from 'antd';

const { Search } = Input;


const Ant = (props) => {

return(<>
    <br />
    <Search placeholder="input search text" enterButton="Search" size="large" loading />
  </>)
}

export default Ant;