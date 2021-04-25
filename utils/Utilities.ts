export default new class Utils {
   
    generateString(numberOfChar: number):string {
        var randomString = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < numberOfChar; i++) {
            randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return randomString;
    }

    generatePassword(numberOfChar: number):string {
        var randomString = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
        var charactersLength = characters.length;
        for (var i = 0; i < numberOfChar; i++) {
            randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return randomString;
    }
	
    generateRandomDataWithSpecialChar(numberOfChar: number):string {
        var randomString = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890%$#@&';
        var charactersLength = characters.length;
        for (var i = 0; i < numberOfChar; i++) {
            randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return randomString;
    }
}