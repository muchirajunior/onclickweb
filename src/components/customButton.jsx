import './styles.scss'

function CustomButton(props) {
    const {name, method,type, width}=props;
    return (
        <button className='custom-button' type={type} style={{width:width}} onClick={()=>method()} >{name}</button>
    );
}

export default CustomButton;