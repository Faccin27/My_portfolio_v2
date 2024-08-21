import Content from './components/Content'
import Sidebar from './components/Sidebar'

function Layout() {
    return (
        <>
            <div className='flex justify-center bg-zinc-950'>
                <Sidebar />
                <Content />
            </div>
        </>
    );
}

export default Layout;
