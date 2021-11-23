import { webServerHttp, mobileServerHttp } from './app';

webServerHttp.listen(3000, () =>
  console.log('web server running on port 5000')
);
mobileServerHttp.listen(4000, () =>
  console.log('mobile server running on port 4000')
);
