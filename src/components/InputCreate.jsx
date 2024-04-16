import { useState } from 'react';
import axios from 'axios'

const InputCreate = () => {
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = async () => {

    try {
      const response = await axios.post('http://localhost:8020/tasks/create', {title: task});
      console.log(response.data); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input type="text" value={task} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Agregar Tarea</button>
    </div>
  );
};

export default InputCreate;
