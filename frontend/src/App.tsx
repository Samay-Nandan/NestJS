import { Layout, Navbar, Footer } from '@src/components';
import { Home } from '@src/pages';

export const App = () => {
  return (
    <Layout>
      <Navbar />
      <Home />
      <Footer />
    </Layout>
  );
};
