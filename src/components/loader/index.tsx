import gif from '../../assets/logoLoading.gif';
import { LoadingIndicator, LoadingWrapper } from './style';

export function Loader() {
    return (
        <LoadingWrapper>
            <LoadingIndicator src={gif} alt="Loading" />
        </LoadingWrapper>
    );
}
