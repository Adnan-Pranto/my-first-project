import  PropTypes from 'prop-types';

const Bokmrk = ({bookmark}) => {
    const {title}= bookmark;
    return (
        <div className='bg-white my-5 p-3 m-4 rounded-md'>
            <h1 className='text-xl font-semibold'>{title}</h1>
        </div>
    );
};
Bokmrk.propTypes ={
    bookmark: PropTypes.object.isRequired,
}
export default Bokmrk;