import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Feed from './component/Feed';
import VideoDetail from './component/VideoDetail';
import ChannelDetail from './component/ChannelDetail';
import SearchFeed from './component/SearchFeed';
import Navbar from './component/Navbar';
function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
          <Navbar/>
          <Routes>
              <Route path='/' exact element={<Feed/>}/>
              <Route path='/video/:id' element={<VideoDetail/>}/>
              <Route path='/channel/:id' element={<ChannelDetail/>}/>
              <Route path='/search/:searcTerm' exact element={<SearchFeed/>}/>
          </Routes>
      </Box>
    
    </BrowserRouter>
  );
}

export default App;
