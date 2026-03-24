
function CryptoFundamentals(){
    return(
        <div className="relative h-full pt-8 select-none">
            <h2 className="text-md uppercase tracking-widest font-medium text-center">Cryptology Fundamentals</h2>
                <div className="block xs:hidden font-normal mx-6 mt-10 text-center text-[1.1rem]">
                    Explored core cryptography concepts including steganography, hashing, Diffie-Hellman key exchange, and RSA encryption.
                                        <img src="/CryptoFundamentals/crypt.png" className="w-20 m-auto mt-8"/>
                </div>
                <div className="font-medium mx-4 mt-4 flex flex-col justify-between h-[80%] hidden xs:block">
                    <div className="hidden sm:block">
                        <h2 className="font-bold">Steganography and Cryptanalysis</h2>
                        <div className="text-[0.9rem]">
                            Explored hiding and extracting messages at the byte level in bitmap images, withing C#. 
                            Uncovered encryption keys by exploiting weaknesses in non-cryptographically secure
                            random number generator.
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold">Hash Project</h2>
                        <div className="text-[0.8rem]">
                            Securely hashed strings using MD5 and modern cryptographic libraries. Practiced salting, 
                            converting strings to bytes, and discovering hash collisions through birthday attacks.
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold">Diffie-Hellman and Encryption</h2>
                        <div className="text-[0.8rem]">
                            Implement key parts of the Diffie-Hellman algorithm to generate 256-bit AES encryption keys. 
                            Used encryption libraries to securely encrypt plaintext and decrypt ciphertext, gaining hands-on 
                            experience with real-world cryptographic operations.
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold">RSA Project</h2>
                        <div className="text-[0.8rem]">
                            Implement the RSA encryption algorithm, including key generation with large prime numbers and the Extended Euclidean algorithm. 
                            Encrypted and decrypted messages while managing extremely large numeric values.
                        </div>
                    </div>
                    <img src="/CryptoFundamentals/crypt.png" className="w-40 m-auto mt-2 hidden sm:block"/>
                </div>
        </div>
    )
}

export default CryptoFundamentals