import  './styles.scss';

function CustomTextArea(props) {
    const {type,name, height, method} =props;
    return (
       <textarea type={type} style={{minHeight:height}}  className='custom-input' placeholder={name} onChange={(e)=>method(name, e.target.value )}  />
    );
}

export default CustomTextArea;