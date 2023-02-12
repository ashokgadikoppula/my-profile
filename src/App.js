import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { Route, Routes } from "react-router-dom";
import AboutMe from './aboutMe';
import Bootcamp from './bootcamp/bootcamp';
import Layout from './layout';

function App() {
  const app = initializeApp({
    apiKey: "AIzaSyAZZ30FRTWnRAW2_j7phVb2mMJeNpNg618",
    authDomain: "about-ashok.firebaseapp.com",
    projectId: "about-ashok",
    storageBucket: "about-ashok.appspot.com",
    messagingSenderId: "253821862453",
    appId: "1:253821862453:web:a35effca68abad1158e77c",
    measurementId: "G-Y3BCLBRKZE"
  });
  const analytics = getAnalytics(app);
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
