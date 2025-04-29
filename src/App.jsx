import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Introduction from "./components/Introduction";
import { AppProvider } from "./context/AppContext";
import UploadRequirements from "./components/UploadRequirements";

// function App() {
//   return (
//     <>
//       <AppProvider>
//         <BrowserRouter basename="/AutoTestX-Frontend">
//           <Routes>
//             <Route path="/" element={<Home />}>
//               <Route path="/" element={<Introduction />} />
//               <Route path="/introduction" element={<Introduction />} />
//               <Route path="/upload-requirements" element={<UploadRequirements />} />
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       </AppProvider>
//     </>
//   );
// }
function App() {
  return (
    <AppProvider>
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Introduction />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="upload-requirements" element={<UploadRequirements />} />
        </Route>
      </Routes>
      </HashRouter>
    </AppProvider>
  );
}


export default App;
