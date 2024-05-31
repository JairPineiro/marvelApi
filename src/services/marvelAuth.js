import md5 from 'md5';

const privateKey = 'd6f94a8d12efdfe17ca201dae3fb4c1d63d8d55f';
const publicKey = 'f80d32527d9a696b5b606c2ad2944edf';

const generateHash = (timestamp) => {
    const hashInput = timestamp + privateKey + publicKey;
    return md5(hashInput);
};

export { generateHash };