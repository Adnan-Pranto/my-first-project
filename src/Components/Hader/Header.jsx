import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-5 border-b-2 mx-4'>
             <h1 className='text-3xl font-bold bg-orange-300 p-4 rounded-xl'>My Knowledge Project</h1>
             <img src={Profile} alt="" />
        </div>
    );
};

export default Header;