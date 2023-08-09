import { Layout, Navbar, Footer } from '@src/components';
import { Home } from '@src/pages';

const App = () => {
  return (
    <Layout>
      <Navbar />
      <Home />
      <Footer />
    </Layout>
  );
};

export default App;
