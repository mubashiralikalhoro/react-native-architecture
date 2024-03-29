const _Environments = {
  development: {
    BASE_URL: `https://xxx.xxx.xxx.com/api`,
    LOGIN: `/xxx/xxx`,
    
  },
};

function getEnvironment() {
  const platform = 'development';
  return _Environments[platform];
}

const Environment = getEnvironment();
export default Environment;
