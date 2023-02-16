const{PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = (phase) =>{
  const imagesConfig ={
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.lorem.space',
        port: '',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  }
  if(phase ===PHASE_DEVELOPMENT_SERVER){
 return {
   images:imagesConfig , 
  }
}else{
  return {
    images:imagesConfig , 
   }

}
}