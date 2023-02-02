import { createPortal } from 'react-dom';
import { ColorRing } from 'react-loader-spinner';
import Style from './Loader.module.scss'

const loaderRoot = document.querySelector('#loader-root');

function Loader() {
    
    return createPortal(
        <div className={Style.loaderWrapper}>
            <ColorRing
                visible={true}
                height="100"
                width="100"
                ariaLabel="blocks-loading"
                colors={['#538641', '#67aa4f', '#5cc437', '#4b9cd7', '#3578d0']}
                />
            </div>,
        loaderRoot
      );
}

export default Loader