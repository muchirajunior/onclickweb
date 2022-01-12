import  './styles.scss';

function CustomInput(props) {
    const {type ,name,value, method} =props;
    return (
       <input type={type} className='custom-input' required placeholder={name} value={value} onChange={(e)=>method(name, e.target.value )}  />
    );
}

export default CustomInput;