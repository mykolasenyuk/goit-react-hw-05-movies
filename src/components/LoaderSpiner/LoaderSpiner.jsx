import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './LoaderSpiner.module.css';

export default function LoaderSpiner() {
  return (
    <div className={s.Loader}>
      <Loader
        type="Circles"
        color="#0bcf4d"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}
