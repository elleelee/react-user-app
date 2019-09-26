import React from 'react';
import Navbar from "./components/navbar";
import UserDashboard from "./containers/user_dashboard";
import Footer from "./components/footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <UserDashboard />
      <Footer />
    </div>
  );
};

export default App;
