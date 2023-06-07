export const createApiUrl = (
    protocol: string,
    domain: string,
    port: number,
    apiName: string,
  ) => {
    const result = `
  ${protocol}://${domain}${port ? `:${port}` : ''}${apiName ? `/${apiName}` : ''}/`;
  
    return result.trim();
  };
  