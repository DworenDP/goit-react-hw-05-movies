import { ColorRing } from 'react-loader-spinner';

export const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <ColorRing
      visible={true}
      height="120"
      width="120"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#ffe100', '#001aff', '#ffe100', '#001aff', '#ffe100']}
    />
  </div>
);
