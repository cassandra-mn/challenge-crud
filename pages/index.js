import useHello from './hooks/hello.js';

const Home = () => {
  const {message} = useHello();

  return (
    <div>
      {message}
    </div>
  )
}

export default Home;