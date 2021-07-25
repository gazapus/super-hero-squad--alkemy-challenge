import BackgroundUser from '../components/BackgroundUser';
import TextMain from '../components/TextMain';

function NotFound() {

    return (
        <BackgroundUser>
            <div className="m-3">
                <TextMain size="sm">Page not found</TextMain>
            </div>
        </BackgroundUser>
    )
}

export default NotFound;