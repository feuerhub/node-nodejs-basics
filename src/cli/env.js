const parseEnv = () => {
    const envVarsWithRSS = Object.keys(process.env)
        .filter(varName => varName.startsWith('RSS_'))
        .map(varName => `${varName}=${process.env[varName]}`)
        .join('; ');
    console.log(envVarsWithRSS);
};

parseEnv();