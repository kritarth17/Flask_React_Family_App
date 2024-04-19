import { Link } from 'react-router-dom';
import Card from './Card';

const HomeCards = () => {
  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <Card bg='bg-cyan-100'>
            <h2 className='text-2xl font-bold'>Family Tree Explorer</h2>
            <p className='mt-2 mb-4'>
            Uncover your family's story and connect with relatives by exploring your family tree.
            </p>
            <Link className='inline-block bg-cyan-500 text-white rounded-lg px-4 py-2 hover:bg-cyan-700' to="/people-list"> View Family Tree</Link>
          </Card>
          <Card bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>Growing Your Roots</h2>
            <p className='mt-2 mb-4'>
            Expand Your Family Tree by adding New Members and Enhance Your Family Legacy
            </p>
            <Link className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600' to = "/add-member"> Add New Member</Link>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;