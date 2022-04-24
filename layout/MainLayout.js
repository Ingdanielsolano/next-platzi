import Nav from "@common/Nav";
import Header from "@components/Header";
import propTypes from "prop-types";

const MainLayout = ({ children }) => (
  <>
    <div className="min-h-full">
      <Header />
      <Nav />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  </>
);

MainLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default MainLayout;
