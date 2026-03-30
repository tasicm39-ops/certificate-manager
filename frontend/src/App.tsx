import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Upload from './pages/Upload'
import List from './pages/List'
import NavBar from './components/NavBar'

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Navigate to="/upload" replace />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/list" element={<List />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
