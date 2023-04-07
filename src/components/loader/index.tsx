import gif from '../../assets/logo-white.gif';
import { LoadingIndicator, LoadingWrapper } from './style';

export function Loader() {
    return (
        <LoadingWrapper>
            <LoadingIndicator src={gif} alt="Loading" />
        </LoadingWrapper>
    );
}
